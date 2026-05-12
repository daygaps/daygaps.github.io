# daygaps-site

Marketing site for **Day Gaps** — a macOS task app built around the gap.

Hand-rolled Hugo site, no external theme. Custom layouts under `layouts/`,
single stylesheet under `assets/css/main.css`, single hero script under
`assets/js/hero.js`. GitHub Pages deploy is wired up in
`.github/workflows/hugo.yml`.

## Local development

You need Hugo extended ≥ 0.130. On macOS:

```
brew install hugo
```

Then from this directory:

```
hugo server -D
```

The dev server runs at http://localhost:1313 with live reload. The hero
scroll animation only works in a real browser — Hugo's reloader doesn't
interfere with it.

To preview the production build (minified, fingerprinted CSS, etc.):

```
hugo --gc --minify
open public/index.html      # or `python3 -m http.server` inside public/
```

## Repo layout

```
daygaps-site/
├── hugo.toml                       # site config — brand name lives here
├── content/
│   ├── _index.md                   # home (uses layouts/index.html)
│   ├── philosophy.md
│   ├── beta.md
│   └── changelog.md
├── layouts/
│   ├── _default/                   # baseof, single, list
│   ├── index.html                  # home page (split-logo hero)
│   └── partials/                   # head, header, footer, hero-checklist
├── assets/
│   ├── css/main.css                # single stylesheet
│   └── js/hero.js                  # scroll-progress driver for the hero
├── static/                         # served at /
└── .github/workflows/hugo.yml      # GitHub Pages deploy
```

## Renaming the product

The public name is centralized in `hugo.toml` under `[params.brand]`. To
rename:

```toml
[params.brand]
name      = "Some Other Name"
nameLeft  = "Some"          # left half of the hero wordmark
nameRight = "OtherName"     # right half
```

Templates and content always read `.Site.Params.brand.name`,
`.Site.Params.brand.nameLeft`, etc. — there are no hardcoded references in
the layouts. (Search the `content/` markdown files manually if you want to
also rename in copy.)

## Deploying

The site is built for GitHub Pages. Two ways to ship it:

1. **As its own repo (recommended).** Move this directory's contents to the
   root of a new GitHub repo, push to `main`, then in the repo's *Settings →
   Pages*, set the source to "GitHub Actions". The workflow takes it from
   there.
2. **As a subdirectory.** Keep `daygaps-site/` inside an existing repo and
   adjust `.github/workflows/hugo.yml` to set `working-directory:
   daygaps-site` on the build step and `path: ./daygaps-site/public` on
   the upload step.

Custom domain: drop a `CNAME` file with your domain into `static/` and
configure DNS per GitHub's instructions.

## Things still to do

- Real favicon + apple-touch-icon (placeholder for now: none).
- OG image for social previews (placeholder for now: none).
- TestFlight link in `content/beta.md` is a placeholder — update when ready.
- `baseURL` in `hugo.toml` is a placeholder (`https://daygaps.app/`). The
  workflow overrides it at build time from GitHub Pages settings, but
  update the value for local previews to match where the site lives.
# website
