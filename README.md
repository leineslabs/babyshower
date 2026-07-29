# Baby Nohelia — Digital Invitation

A single-page, mobile-first Next.js (App Router) invitation. All seven Stitch
slides are unified into one scrollable page at `app/page.jsx`.

## Project structure

```txt
app/
  layout.jsx          # root layout, imports globals.css
  page.jsx            # renders all 7 slides in order
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
public/assets/        # local image/music assets
next.config.mjs       # static export config for GitHub Pages
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

Open:

```txt
http://localhost:3000
```

This runs with no basePath, like a normal Next.js app.

## Production build

```bash
npm run build
```

This runs `next build` with `GITHUB_PAGES=true`, which enables:

- `output: "export"`
- `trailingSlash: true`
- `images.unoptimized: true`
- `basePath` / `assetPrefix` set to `/babyshower/nohelia`

Expected deployed URL:

```txt
https://leineslabs.github.io/babyshower/nohelia/
```

## Deployment with GitHub Pages

Deployment is handled by:

```txt
.github/workflows/deploy.yml
```

On every push to `main`, the workflow:

1. Builds the site.
2. Copies `out/` into `deploy/nohelia/`.
3. Publishes `deploy/` as the GitHub Pages artifact.

Repo:

```txt
leineslabs/babyshower
```

Enable Pages once under:

```txt
Settings → Pages → Source: GitHub Actions
```

## Future invitations

To add another invitation later, such as `client2`, create a new route and extend
the workflow so it publishes to:

```txt
https://leineslabs.github.io/babyshower/client2/
```

## Known placeholders

- Gift registry button in Slide 5 still needs the real registry URL.
- The music toggle in Slide 1 only switches button text/animation state. No
  audio file is currently wired up.