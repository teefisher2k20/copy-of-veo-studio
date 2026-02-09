/**
 * Offline cache service for API responses and models
 */

interface CacheEntry<T> {
  data: T;
  timestamp: number;
  expiresIn: number; // milliseconds
}

class OfflineService {
  private cacheName = 'veo-studio-cache-v1';
  private offlineMode: boolean;

  constructor() {
    this.offlineMode = import.meta.env.VITE_OFFLINE_MODE === 'true';
    this.registerServiceWorker();
  }

  private async registerServiceWorker(): Promise<void> {
    if ('serviceWorker' in navigator && this.offlineMode) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js', {
          scope: '/'
        });
        console.log('Service Worker registered for offline support:', registration.scope);
      } catch (error) {
        console.warn('Service Worker registration failed:', error);
      }
    }
  }

  async cacheResponse<T>(key: string, data: T, expiresIn: number = 24 * 60 * 60 * 1000): Promise<void> {
    const entry: CacheEntry<T> = {
      data,
      timestamp: Date.now(),
      expiresIn,
    };

    try {
      const cache = await caches.open(this.cacheName);
      const response = new Response(JSON.stringify(entry));
      await cache.put(key, response);
    } catch (error) {
      console.warn('Failed to cache response:', error);
    }
  }

  async getCachedResponse<T>(key: string): Promise<T | null> {
    try {
      const cache = await caches.open(this.cacheName);
      const response = await cache.match(key);

      if (!response) return null;

      const entry: CacheEntry<T> = await response.json();
      const age = Date.now() - entry.timestamp;

      if (age > entry.expiresIn) {
        await cache.delete(key);
        return null;
      }

      return entry.data;
    } catch (error) {
      console.warn('Failed to get cached response:', error);
      return null;
    }
  }

  async clearCache(): Promise<void> {
    try {
      await caches.delete(this.cacheName);
      console.log('Cache cleared');
    } catch (error) {
      console.warn('Failed to clear cache:', error);
    }
  }

  isOnline(): boolean {
    return navigator.onLine;
  }

  async checkConnectivity(): Promise<boolean> {
    if (!this.isOnline()) return false;

    try {
      const response = await fetch('https://www.google.com/favicon.ico', {
        mode: 'no-cors',
        cache: 'no-store',
      });
      return true;
    } catch {
      return false;
    }
  }

  onConnectionChange(callback: (isOnline: boolean) => void): () => void {
    const handleOnline = () => callback(true);
    const handleOffline = () => callback(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }
}

export const offlineService = new OfflineService();
