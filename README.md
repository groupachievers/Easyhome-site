# Easyhome Site

Easyhome Site is a React + TypeScript + Vite marketing site for the Easyhome brand.

## Scripts

- `npm run dev` starts the local development server.
- `npm run build` creates a production build in `dist`.
- `npm run preview` serves the production build locally.
- `npm run lint` runs ESLint.

## Deployment

This repository is configured to deploy automatically to GitHub Pages from the `main` branch with the workflow in `.github/workflows/deploy.yml`.

The workflow builds the app with `VITE_BASE_PATH=/Easyhome-site/` so asset paths resolve correctly when the site is served from the repository URL.

If GitHub Pages is not already set for this repository, open the repository settings and set **Pages** to build from **GitHub Actions**.