# Run and deploy your AI Studio app

![GHBanner](https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6)

This contains everything you need to run your app locally.

View your app in AI Studio: [ai.studio/apps/drive](https://ai.studio/apps/drive/1D95Df6Q58CKykSg7296jjegn4sf0DANA)

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:

   `npm install`

2. Set `VITE_API_KEY` in [.env.local](.env.local) to your Google AI API key

3. Run the app:

   `npm run dev`

## Production build and CI/CD

- Build locally:

```bash
npm ci
VITE_API_KEY=YOUR_GOOGLE_API_KEY npm run build
npm run preview
```

- Notes:
  - `VITE_API_KEY` is embedded at build time and will be visible in the client bundle. For production security, prefer using Google AI Studio key selection in an embedded context, or proxy requests via a backend.
  - In CI (e.g., GitHub Actions, Vercel, Netlify), set an environment variable named `VITE_API_KEY` and run `npm ci && npm run build`.
  - Static hosting: deploy the `dist/` directory output from `npm run build`.

Example (GitHub Actions job step):

```yaml
- name: Build
  run: |
    npm ci
    npm run build
  env:
    VITE_API_KEY: ${{ secrets.VITE_API_KEY }}
```
