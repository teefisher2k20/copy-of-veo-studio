# Deploying Veo Studio (Vite)

This app is a static Vite site. Build with a `VITE_API_KEY` and host the `dist/` folder.

Important: `VITE_API_KEY` is embedded in the client bundle and is public. Prefer Google AI Studio key selection when embedding the app, or proxy requests via a backend for production security.

## GitHub Pages (GitHub Actions)

1. In your repository settings, enable Pages → "GitHub Actions" as the source.
2. Add a repository secret `VITE_API_KEY` with your Google AI API key.
3. Use the provided workflow `.github/workflows/pages.yml`.
4. Push to `main` or manually run the workflow.

## Generic CI build artifact

1. Add secret `VITE_API_KEY`.
2. Use `.github/workflows/build.yml` to build and upload `dist/` as an artifact.

## Netlify

- Build command: `npm run build`
- Publish directory: `dist`
- Environment variables:
  - `VITE_API_KEY=YOUR_GOOGLE_API_KEY`

## Vercel

- Framework: "Vite"
- Build command: `npm run build`
- Output directory: `dist`
- Environment variables: `VITE_API_KEY`

## Local preview

```bash
npm ci
VITE_API_KEY=YOUR_GOOGLE_API_KEY npm run build
npm run preview
```

## Troubleshooting

- Blank page on Pages: Ensure Pages source is set to "GitHub Actions" and the `pages.yml` ran successfully.
- 404 on refresh: For SPAs on static hosting, enable a 404 rewrite to `index.html` (Netlify: `_redirects` with `/* /index.html 200`).
