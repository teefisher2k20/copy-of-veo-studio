# Local Deployment Guide

This guide covers running Veo Studio locally with full system access, offline support, and local data storage.

## Features

- ✅ Local IndexedDB storage for videos and history
- ✅ Offline mode with service worker caching
- ✅ Direct filesystem downloads
- ✅ Network latency optimization
- ✅ Local development server with hot reload
- ✅ No cloud dependency for stored data

## Prerequisites

- Node.js 18+ installed
- Google AI API key (for video generation)
- Modern browser (Chrome, Edge, Firefox with IndexedDB support)

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

Copy and configure the development environment:

```bash
cp .env.development .env.local
```

Edit `.env.local`:

```env
VITE_API_KEY=AIzaSyDcHlBnDvHFQ-ipt2V7tY04V8sGbWOeHUQ
VITE_USE_LOCAL_DB=true
VITE_OFFLINE_MODE=true
```

### 3. Run Local Server

```bash
npm run dev:local
```

This starts the dev server on `http://localhost:3000` with:
- Hot module reload
- Local storage enabled
- Offline support active
- Network accessible on LAN (0.0.0.0)

### 4. Access the App

- Local: http://localhost:3000
- LAN: http://YOUR_LOCAL_IP:3000 (check terminal output)

## Local Storage Features

### Video Storage

All generated videos are stored locally using IndexedDB:

```typescript
import { localStorageService } from './services/localStorageService';

// Save video
const { id, url } = await localStorageService.saveVideo(blob, {
  prompt: 'your prompt',
  model: 'veo-3.1-fast',
  resolution: '720p',
  aspectRatio: '16:9',
  mode: 'Text to Video'
});

// Retrieve video
const video = await localStorageService.getVideo(id);

// List all videos
const videos = await localStorageService.getAllVideos();

// Delete video
await localStorageService.deleteVideo(id);
```

### Storage Management

Check storage usage:

```typescript
const { used, available } = await localStorageService.getStorageUsage();
console.log(`Using ${used / 1024 / 1024} MB of ${available / 1024 / 1024} MB`);
```

Clear old videos (keeps last 7 days by default):

```typescript
const deletedCount = await localStorageService.clearOldVideos(7);
```

### Download to Filesystem

```typescript
localStorageService.downloadVideo(blob, 'my-video.mp4');
```

## Offline Mode

### Enable Offline Support

Set in `.env.local`:

```env
VITE_OFFLINE_MODE=true
```

### Features

- Service worker caches static assets
- Works without internet after first load
- Automatic cache invalidation
- Offline indicator in UI

### Check Connectivity

```typescript
import { offlineService } from './services/offlineService';

// Check if online
const isOnline = offlineService.isOnline();

// Listen for connectivity changes
const unsubscribe = offlineService.onConnectionChange((online) => {
  console.log('Network status:', online ? 'Online' : 'Offline');
});

// Cleanup
unsubscribe();
```

## Performance Optimization

### GPU Acceleration

Enable in `.env.local`:

```env
VITE_ENABLE_GPU_ACCELERATION=true
```

### Concurrent Generations

Limit concurrent API calls:

```env
VITE_MAX_CONCURRENT_GENERATIONS=2
```

### Network Settings

For local network access:

```bash
# Development server accessible on LAN
npm run dev:local

# Preview build on LAN
npm run build:local
npm run preview:local
```

## Build for Local Deployment

### Development Build

```bash
npm run build:local
```

Creates an optimized build with development settings in `dist/`.

### Serve Locally

```bash
npm run preview:local
```

Serves the built app on http://localhost:4173.

### Static Server (Production)

Using Python:

```bash
cd dist
python -m http.server 8080
```

Using Node.js (http-server):

```bash
npx http-server dist -p 8080 --cors
```

Using nginx (Windows):

1. Download nginx: https://nginx.org/en/download.html
2. Extract to `C:\nginx`
3. Copy `dist/*` to `C:\nginx\html\`
4. Run: `nginx.exe`
5. Access: http://localhost:80

## Database Management

### Access IndexedDB

Open Chrome DevTools → Application → IndexedDB → VeoStudioDB

Three stores:
- `videos` - Video metadata
- `videoBlobs` - Video binary data
- `history` - Generation history

### Export Database

```typescript
const videos = await localStorageService.getAllVideos();
const json = JSON.stringify(videos, null, 2);
const blob = new Blob([json], { type: 'application/json' });
localStorageService.downloadVideo(blob, 'video-library.json');
```

### Clear All Data

```typescript
// Clear videos
await localStorageService.clearOldVideos(0); // Delete all

// Clear cache
await offlineService.clearCache();
```

## Troubleshooting

### Storage Quota Exceeded

```typescript
// Check available space
const { used, available } = await localStorageService.getStorageUsage();

if (used / available > 0.9) {
  // Clear old videos
  await localStorageService.clearOldVideos(7);
}
```

### Service Worker Not Registering

1. HTTPS required (or localhost)
2. Check: `navigator.serviceWorker` exists
3. Enable in browser: chrome://flags/#enable-experimental-web-platform-features

### IndexedDB Not Available

Check browser support:

```typescript
if (!('indexedDB' in window)) {
  console.error('IndexedDB not supported');
}
```

### API Key Issues

Verify key in browser console:

```typescript
console.log('API Key:', import.meta.env.VITE_API_KEY);
```

## File Structure

```
copy-of-veo-studio/
├── services/
│   ├── geminiService.ts          # Google AI API
│   ├── localStorageService.ts    # IndexedDB storage
│   └── offlineService.ts         # Offline support
├── public/
│   ├── sw.js                     # Service worker
│   └── _redirects                # SPA routing
├── .env.local                    # Your config (git-ignored)
├── .env.development              # Development template
└── LOCAL_DEPLOYMENT.md           # This file
```

## Security Notes

- API keys are embedded in client bundle (visible to users)
- For production, consider API key rotation or proxy server
- IndexedDB data is not encrypted by default
- Service worker only works on HTTPS or localhost

## Advanced: Docker Local Deployment

Create `Dockerfile.local`:

```dockerfile
FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev:local"]
```

Build and run:

```bash
docker build -f Dockerfile.local -t veo-studio-local .
docker run -p 3000:3000 -v $(pwd):/app -e VITE_API_KEY=your_key veo-studio-local
```

## Support

- Documentation: See `README.md` and `docs/DEPLOY.md`
- Issues: Check browser console and Network tab
- API: https://ai.google.dev/gemini-api/docs

---

**Local deployment complete!** 🚀 Your app now runs with full local storage, offline support, and minimal cloud dependency.
