# CK Studio website

React website hosted on GitHub Pages at https://ckstudio.org/.

## Development

Use Node.js 24 LTS (specified in `.nvmrc` and `.node-version`) and npm 11 or newer.

```sh
npm ci
npm run dev
```

The development server runs on http://127.0.0.1:3000/.

```sh
npm run typecheck   # Strict TypeScript checks
npm test            # Regression tests
npm run build       # Typecheck and create dist/
npm run check       # Typecheck, tests, and production build
npm run preview     # Serve the production output locally
```

## Stack

- React 19.3 with native document metadata
- TypeScript 7 with strict checking
- Vite 8 with the official React plugin (React and animation libraries split into their own cached files)
- Tailwind CSS 4, configured in CSS (`src/styles/foundation.css` holds the design tokens)
- GSAP 3 (ScrollTrigger, SplitText) for scroll-driven animation, Lenis for smooth scrolling, Motion 13 for small UI transitions
- React Router 7 with lazy-loaded secondary pages
- Vitest 5, Testing Library, and jsdom for regression checks
- Self-hosted Clash Display + Satoshi fonts (`public/fonts/`)

Package versions are pinned and the npm lockfile is committed.

Tailwind 4 requires Safari 16.4+, Chrome 111+, or Firefox 128+.

## Structure

- `src/content/`: all site wording and contact details (edit text here)
- `src/sections/`: homepage sections
- `src/pages/`: Blog, article, FAQ, and not-found pages
- `src/components/`: header, footer, logo, and shared UI pieces
- `src/lib/`: smooth scrolling and reusable scroll animations
- `src/styles/foundation.css`: colours, fonts, and type sizes
- `src/test/`: test setup and regression tests
- `public/`: fonts, icons, link-preview image, sitemap, and the GitHub Pages deep-link fallback
- `docs/`: designer image requirements, testimonial drafts, font licence, and project history

## Publishing

Pull requests and non-main pushes run checks without deploying. Pushing to `main` runs checks, builds `dist`, and deploys through GitHub Actions. Obtain explicit approval before pushing a live update.

Keep the Pages custom-domain settings and `CNAME` intact. `public/404.html` and the redirect-restoration script in `index.html` preserve direct visits to React routes.

Never put private API keys in frontend code or Vite definitions. GitHub Pages remains static hosting; future inquiry handling needs a separate service.

## Known content limitations

The hero video, About photo, some portfolio media, final logo files, and client-approved testimonials are pending. Interim icons and the link-preview image are generated from the existing logo. See `CLAUDE.md` for the current list.
