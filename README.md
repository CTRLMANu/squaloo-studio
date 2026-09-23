# squaloo.studio

Manuel Ossanna's personal site: an almanac of side projects. Built with [Astro](https://astro.build) and hosted on GitHub Pages.

## Run it

```sh
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # static site in dist/
```

Every push to `main` builds the site and publishes it through `.github/workflows/deploy.yml`.

## Where things live

- `src/pages/` — one file per page. Project legal pages sit under their project (`src/pages/hue-of-year/privacy/`).
- `src/content/hue-of-year/` — the Hue of Year Privacy Policy and Terms, kept word for word as published.
- `src/data/entries.ts` — the list of projects. Adding a project starts here.
- `src/site.ts` and `public/CNAME` — the domain and contact details.
- `scripts/prepare-assets.mjs` — builds the images in `public/img/` from `assets/source/` (`npm run assets`).
- `DESIGN.md` and `PRODUCT.md` — the design system and the product brief.
