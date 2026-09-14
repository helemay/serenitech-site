# Serenitech — corporate website

Source of the Serenitech website (https://serenitech.global) — AI cognitive robotics for the underwater management of port infrastructure, offshore platforms, subsea structures and the naval industry.

## Stack
- React 19 · TypeScript · Vite 8 · Tailwind CSS 4 · shadcn/ui · TanStack Router/Start · framer-motion
- Content: `src/i18n/en.ts` (English, default) and `src/i18n/pt.ts` (Portuguese) · structured data in `src/content/site.ts`
- Brand assets in `public/brand/`, images in `public/images/`

## Editing
The site is authored in Lovable (project `2ab2c0b0-9f19-44e8-ac99-19cf15305739`, workspace "Helena's Lovable"). Lovable is the editing environment; this repository is the deployment source. After changes in Lovable, export the source (or connect the Lovable GitHub integration) and push to `main`.

## Deployment (GitHub Pages)
Every push to `main` runs `.github/workflows/deploy-pages.yml`:
1. `npm ci`
2. `npm run build:pages` → `vite build --config vite.config.pages.ts` prerenders every route into `dist/client` (TanStack Start prerender, no server runtime), then `scripts/postbuild-pages.mjs` copies it to `dist/pages` and adds `CNAME` (serenitech.global), `.nojekyll`, `404.html`, `sitemap.xml` and the `Sitemap:` line in `robots.txt`.
3. `actions/deploy-pages` publishes `dist/pages`.

Custom domain: `serenitech.global` (A/AAAA records → GitHub Pages, `www` CNAME → `helemay.github.io`), DNS in Route 53 (AWS account …0770). `serenitech.com.br` redirects to `serenitech.global` (repository `serenitech-com-br`).

## Local
```bash
npm ci
npm run dev          # Lovable/TanStack Start dev server
npm run build:pages  # static build → dist/pages
npx serve dist/pages # or: cd dist/pages && python3 -m http.server 8787
```
