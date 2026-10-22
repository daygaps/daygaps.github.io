# daygaps-site

Marketing site for **DayGaps**: a task manager for Mac, iPhone and iPad built around the gap.

Hand-rolled Hugo site, no external theme. Custom layouts under `layouts/`,
single stylesheet under `assets/css/main.css`, and one small script,
`assets/js/demo.js`, for the focus demo on the home page. GitHub Pages
deploy is wired up in
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

The dev server runs at http://localhost:1313 with live reload.

To preview the production build (minified, fingerprinted CSS, etc.):

```
hugo --gc --minify
open public/index.html      # or `python3 -m http.server` inside public/
```

## Repo layout

```
daygaps-site/
├── hugo.toml                       # site config; brand name lives here
├── content/
│   ├── _index.md                   # home (uses layouts/index.html)
│   ├── philosophy.md
│   ├── beta.md
│   └── changelog.md
├── layouts/
│   ├── _default/                   # baseof, single, list
│   ├── index.html                  # home page
│   └── partials/                   # head, header, footer, brand-inline, app-view
│       └── ui/                     # the app drawn in HTML: Mac window, Today,
│                                   # focus card, now island, calendar panel,
│                                   # iPhone, widget, Plan, overview
├── assets/
│   ├── css/main.css                # single stylesheet
│   └── js/demo.js                  # ticking and opening/closing the focus card
├── static/                         # served at /
└── .github/workflows/hugo.yml      # GitHub Pages deploy
```

## Colors and the app renderings

The site uses the app's own palette (see the design guide, level 2): one ink
at several strengths, Apple's system surfaces, the system blue as the one
accent, the system red for urgency, and Apple's area colors. The accent keeps
its meanings from the app: time still ahead, now, and the one primary action.
All colors are tokens at the top of `main.css`, with dark-mode values beside
them.

The app pictures on the home page and in the `appview` shortcode are drawn in
HTML from the partials under `layouts/partials/ui/`, so they follow light and
dark mode and stay sharp. When the app's look changes, change those partials
to match the app; do not invent a look for the site.

## Renaming the product

The public name is centralized in `hugo.toml` under `[params.brand]`. To
rename:

```toml
[params.brand]
name      = "Some Other Name"
nameLeft  = "Some"          # left half of the wordmark
nameRight = "OtherName"     # right half
```

Templates and content always read `.Site.Params.brand.name`,
`.Site.Params.brand.nameLeft`, etc.; there are no hardcoded references in
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
- TestFlight link in `content/beta.md` is a placeholder; update when ready.
- `baseURL` in `hugo.toml` is a placeholder (`https://daygaps.app/`). The
  workflow overrides it at build time from GitHub Pages settings, but
  update the value for local previews to match where the site lives.
# website
