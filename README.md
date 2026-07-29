# Baby Nohelia — Digital Invitation

A single-page, mobile-first Next.js (App Router) invitation. All seven Stitch
slides are unified into one scrollable page at `app/page.jsx`.

## Project structure

```txt
app/
  layout.jsx        # root layout, imports globals.css
  page.jsx           # renders all 7 slides in order
  globals.css         # fonts, Tailwind, shared animations/classes
components/invitation/
  ShaderCanvas.jsx
  Slide01Cover.jsx
  Slide02Blessing.jsx
  Slide03Logistics.jsx
  Slide04DressCode.jsx
  Slide05Gifts.jsx
  Slide06Rsvp.jsx
  Slide07Closing.jsx
public/assets/        # local image/music assets (not yet wired into any slide)
next.config.mjs        # static export config for GitHub Pages
.github/workflows/deploy.yml
```

## Requirements

- Node.js 20+
- npm

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000 — runs with no basePath, exactly like a normal
Next.js app.

## Production build (static export)

```bash
npm run build
```

This runs `next build` with `GITHUB_PAGES=true`, which enables:

- `output: "export"` — outputs a static site to `out/`
- `trailingSlash: true`
- `images.unoptimized: true`
- `basePath` / `assetPrefix` set to `/babyshower/nohelia` (see
  `next.config.mjs`), matching the deployed URL
  https://leineslabs.github.io/babyshower/nohelia/

To preview the plain (no basePath) static export locally instead, use
`npm run build:local` followed by `npm run preview`.

## Deployment (GitHub Pages)

Handled by `.github/workflows/deploy.yml` on every push to `main`:

1. Builds the site (`npm run build`, basePath baked in).
2. Copies `out/` into `deploy/nohelia/` so it lives at the right sub-path.
3. Publishes `deploy/` as the GitHub Pages artifact.

Repo: `leineslabs/babyshower`. Enable Pages once, under **Settings → Pages →
Source: GitHub Actions**.

To add another invitation later (e.g. `client2`), give it its own basePath
(`BASE_PATH=/babyshower/client2`) and extend the workflow to copy its export
into `deploy/client2/` alongside this one.

## Known placeholders (pre-existing, not changed here)

- Gift registry button (Slide 5) links to `#` — needs the real Amazon
  registry URL.
- The music toggle (Slide 1) only switches button text/animation state; no
  `<audio>` element or file is wired up (`public/assets/music/` is empty).
