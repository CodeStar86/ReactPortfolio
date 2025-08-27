# ReactPortfolio

This is a Vite + React + Tailwind project prepared for deployment with **GitHub Pages** via **GitHub Actions**.

## Local Development

```bash
# install dependencies
npm install

# run dev server
npm run dev

# build & preview production build
npm run build && npm run preview
```

## GitHub Pages Deployment

This repo is set up to deploy automatically on pushes to `main` using GitHub Actions.

- The Vite `base` is set to `/ReactPortfolio/` so assets resolve correctly on GitHub Pages.
- The workflow will build the site to `dist/`, create a SPA fallback (`404.html`), upload the artifact, and deploy it to GitHub Pages.
- **Important:** `package-lock.json` must be committed so CI can run `npm ci` for reproducible builds. If it is missing, the workflow falls back to `npm install`.

### First-time setup

1. In GitHub, create a repository named **ReactPortfolio** under your account.
2. Push the prepared project (see commands below).
3. In the repo settings, ensure **Pages** is set to **Deploy from GitHub Actions**.

## Notes

- The workflow forces `--outDir dist --emptyOutDir` so your output is always in `dist/`.
- SPA fallback is handled by copying `dist/index.html` to `dist/404.html` automatically during CI.
