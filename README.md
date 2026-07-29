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
  InvitationExperience.jsx  # wraps all slides in the language provider
  LanguageSelector.jsx      # EN / ES pill toggle, shown on the cover
  ShaderCanvas.jsx
  Slide01Cover.jsx
  Slide02Blessing.jsx
  Slide03Logistics.jsx
  Slide04DressCode.jsx
  Slide05Gifts.jsx
  Slide06Rsvp.jsx
  Slide07Closing.jsx
lib/i18n/
  translations.js       # en/es text dictionary, keyed per slide
  LanguageContext.jsx    # language state + useLanguage() hook
public/assets/        # local image/music assets
next.config.mjs       # static export config for GitHub Pages
.github/workflows/deploy.yml
```

## Language / i18n

The invitation defaults to English with a small pill toggle (English /
Español) at the top of the cover slide. Selecting a language updates every
slide's text instantly (all slides mount at once, sharing one
`LanguageProvider`) and persists the choice in `localStorage`. Names, dates,
addresses, and "RSVP" are intentionally not translated. To add or edit copy,
edit `lib/i18n/translations.js` — each slide reads its strings via
`useLanguage()` from `lib/i18n/LanguageContext.jsx`.

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
- The music button in Slide 1 links out to the Spotify track in a new
  tab/app (no local audio file, no embedded player, no autoplay).