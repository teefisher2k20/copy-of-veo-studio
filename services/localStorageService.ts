/**
 * Local storage service for saving generated videos to filesystem
 */

interface LocalStorageConfig {
  enabled: boolean;
  storagePath: string;
  maxSize: number; // MB
}

class LocalStorageService {
  private config: LocalStorageConfig;
  private db: IDBDatabase | null = null;

  constructor() {
    this.config = {
      enabled: import.meta.env.VITE_USE_LOCAL_DB === 'true',
      storagePath: import.meta.env.VITE_LOCAL_STORAGE_PATH || './local-storage/videos',
      maxSize: 1000, // 1GB default
    };
    
    if (this.config.enabled) {
      this.initDB();
    }
  }

  private async initDB(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open('VeoStudioDB', 1);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;

        // Store for video metadata
        if (!db.objectStoreNames.contains('videos')) {
          const videoStore = db.createObjectStore('videos', { keyPath: 'id', autoIncrement: true });
          videoStore.createIndex('timestamp', 'timestamp', { unique: false });
          videoStore.createIndex('prompt', 'prompt', { unique: false });
        }

        // Store for cached video blobs
        if (!db.objectStoreNames.contains('videoBlobs')) {
          db.createObjectStore('videoBlobs', { keyPath: 'videoId' });
        }

        // Store for generation history
        if (!db.objectStoreNames.contains('history')) {
          const historyStore = db.createObjectStore('history', { keyPath: 'id', autoIncrement: true });
          historyStore.createIndex('date', 'date', { unique: false });
        }
      };
    });
  }

  async saveVideo(blob: Blob, metadata: {
    prompt: string;
    model: string;
    resolution: string;
    aspectRatio: string;
    mode: string;
  }): Promise<{ id: number; url: string }> {
    if (!this.db) {
      throw new Error('Database not initialized');
    }

    const videoRecord = {
      ...metadata,
      timestamp: new Date().toISOString(),
      size: blob.size,
      type: blob.type,
    };

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['videos', 'videoBlobs'], 'readwrite');
      const videoStore = transaction.objectStore('videos');
      const blobStore = transaction.objectStore('videoBlobs');

      const addRequest = videoStore.add(videoRecord);

      addRequest.onsuccess = () => {
        const videoId = addRequest.result as number;
        
        blobStore.put({ videoId, blob });

        const url = URL.createObjectURL(blob);
        resolve({ id: videoId, url });
      };

      addRequest.onerror = () => reject(addRequest.error);
    });
  }

  async getVideo(id: number): Promise<{ blob: Blob; metadata: any } | null> {
    if (!this.db) return null;

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['videos', 'videoBlobs'], 'readonly');
      const videoStore = transaction.objectStore('videos');
      const blobStore = transaction.objectStore('videoBlobs');

      const getMetadata = videoStore.get(id);
      
      getMetadata.onsuccess = () => {
        const metadata = getMetadata.result;
        if (!metadata) {
          resolve(null);
          return;
        }

        const getBlob = blobStore.get(id);
        getBlob.onsuccess = () => {
          const blobRecord = getBlob.result;
          if (!blobRecord) {
            resolve(null);
            return;
          }
          resolve({ blob: blobRecord.blob, metadata });
        };
        getBlob.onerror = () => reject(getBlob.error);
      };

      getMetadata.onerror = () => reject(getMetadata.error);
    });
  }

  async getAllVideos(): Promise<Array<{ id: number; metadata: any }>> {
    if (!this.db) return [];

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['videos'], 'readonly');
      const videoStore = transaction.objectStore('videos');
      const request = videoStore.getAll();

      request.onsuccess = () => {
        const videos = request.result.map((video: any) => ({
          id: video.id,
          metadata: video,
        }));
        resolve(videos);
      };

      request.onerror = () => reject(request.error);
    });
  }

  async deleteVideo(id: number): Promise<void> {
    if (!this.db) return;

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['videos', 'videoBlobs'], 'readwrite');
      const videoStore = transaction.objectStore('videos');
      const blobStore = transaction.objectStore('videoBlobs');

      videoStore.delete(id);
      blobStore.delete(id);

      transaction.oncomplete = () => resolve();
      transaction.onerror = () => reject(transaction.error);
    });
  }

  async getStorageUsage(): Promise<{ used: number; available: number }> {
    if (!navigator.storage || !navigator.storage.estimate) {
      return { used: 0, available: 0 };
    }

    const estimate = await navigator.storage.estimate();
    return {
      used: estimate.usage || 0,
      available: estimate.quota || 0,
    };
  }

  async clearOldVideos(daysToKeep: number = 7): Promise<number> {
    if (!this.db) return 0;

    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - daysToKeep);

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(['videos', 'videoBlobs'], 'readwrite');
      const videoStore = transaction.objectStore('videos');
      const blobStore = transaction.objectStore('videoBlobs');
      const index = videoStore.index('timestamp');

      let deletedCount = 0;
      const range = IDBKeyRange.upperBound(cutoffDate.toISOString());
      const request = index.openCursor(range);

      request.onsuccess = (event) => {
        const cursor = (event.target as IDBRequest).result;
        if (cursor) {
          const id = cursor.value.id;
          videoStore.delete(id);
          blobStore.delete(id);
          deletedCount++;
          cursor.continue();
        }
      };

      transaction.oncomplete = () => resolve(deletedCount);
      transaction.onerror = () => reject(transaction.error);
    });
  }

  // Download video to user's file system
  downloadVideo(blob: Blob, filename: string): void {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
}

export const localStorageService = new LocalStorageService();
