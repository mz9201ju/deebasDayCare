# Deeba's Daycare

Modern React + Vite website for Deeba's Daycare in Bellevue, WA.

## Windows Command Requirement

Always use `npm.cmd` instead of `npm` for all commands in this project.

Use plain `npm` only when PowerShell execution policy is bypassed first.

If you need to run plain `npm`, execute PowerShell with bypass policy first:

```powershell
powershell -ExecutionPolicy Bypass
```

## What This Project Does

- Shows daycare information, services, gallery, contact flow, and parent reviews.
- Uses route-level code splitting for faster initial page loads.
- Uses centralized SEO metadata and per-page SEO tags.
- Uses service modules for API access and content modules for page data.
- Includes optimized JPEG assets and lazy image loading in gallery pages.

## Tech Stack

- React 19
- Vite 7
- React Router
- Tailwind CSS
- ESLint

## Project Structure

```text
src/
  components/      # Reusable UI (NavBar, Footer, Section, Seo, Cursor, Background)
  content/         # Static website content/data (services and gallery)
  lib/             # Global config and utilities (site settings, captcha)
  pages/           # Route-level page components
  services/        # API/business logic layer (reviews API)
  main.jsx         # App entry
  App.jsx          # Layout + routes
```

## Separation Of Concerns

- UI components live in `src/components`.
- Business/API logic lives in `src/services`.
- Content/data is isolated in `src/content`.
- Global app configuration lives in `src/lib/config.js`.
- SEO behavior is centralized in `src/components/Seo.jsx`.
- Responsive styling is split by concern:
  - Mobile styles live in `src/styles/mobile.css`.
  - Desktop styles live in `src/styles/desktop.css`.
  - Shared/global tokens and base styles stay in `src/index.css`.
- Keep React logic separate from styling logic. Prefer semantic class names in JSX and keep breakpoint behavior inside CSS files.

## Local Development

```powershell
npm.cmd install
npm.cmd run dev
```

Build and preview:

```powershell
npm.cmd run build
npm.cmd run preview
```

Always run lint and build together after code edits:

```powershell
npm.cmd run lint; npm.cmd run build
```

## SEO Implemented

- Base metadata in `index.html` (description, robots, Open Graph, Twitter card).
- Dynamic per-page metadata via `Seo` component:
  - title
  - description
  - canonical URL
  - Open Graph and Twitter metadata
- Structured data (`ChildCare` schema) on the home page.
- `public/robots.txt` for crawler directives.
- `public/sitemap.xml` for route discovery by search engines.

## Routing And Deployment

- App routing uses `BrowserRouter` with `basename={import.meta.env.BASE_URL}`.
- GitHub Pages SPA fallback is enabled in `.github/workflows/pages.yaml` by copying `dist/index.html` to `dist/404.html`.
- This allows direct visits to routes like `/services` and `/gallery` to resolve correctly on deploy.

## Performance Improvements Implemented

- Route-level lazy loading with `React.lazy` and `Suspense`.
- Removed dead assets and unused starter files.
- Replaced heavy animated cursor image with lightweight CSS cursor.
- Compressed large JPG assets (major payload reduction).
- Added reduced-motion CSS fallback for accessibility/performance.

## Notes

- Reviews are fetched/saved through the configured Cloudflare Worker endpoint in `src/lib/config.js`.
- For production deploys on GitHub Pages, base path is configured in `vite.config.js`.
- If the repository name or custom domain changes, update:
  - `src/lib/config.js` (`SITE.seo.siteUrl`)
  - `public/robots.txt` (Sitemap URL)
  - `public/sitemap.xml` (all `<loc>` URLs)
