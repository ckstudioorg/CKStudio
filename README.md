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
npm run typecheck   # Strict TypeScript checks, including draft components
npm test           # Regression tests
npm run build      # Typecheck and create dist/
npm run check      # Typecheck, tests, and production build
npm run preview    # Serve the production output locally
```

## Stack

- React 19.3 with native document metadata
- TypeScript 7 with strict checking
- Vite 8 with the official React plugin
- Tailwind CSS 4 with its Vite plugin; the single `tailwind.config.ts` preserves the existing design tokens
- Motion 13 (`motion/react`) for animation
- React Router 7 with lazy-loaded secondary pages
- Vitest 5, Testing Library, and jsdom for regression checks

Package versions are pinned and the npm lockfile is committed. Installs do not require `--legacy-peer-deps`.

Tailwind 4 requires Safari 16.4+, Chrome 111+, or Firefox 128+. CSS draft typography variables are prefixed `--ck-text-` to avoid overriding Tailwind 4's font-size variables.

## Structure

- `src/components/`: homepage sections, shared UI, and metadata
- `src/pages/`: Blog, FAQ, article, and not-found routes
- `src/config/`, `src/hooks/`, `src/motion/`: reusable development foundations
- `src/test/`: test setup and migration regression tests
- `public/`: static files, including the GitHub Pages deep-link fallback
- `PLAN.md`: current decisions, progress, and pending assets

## Publishing

Pull requests and non-main pushes run checks without deploying. Pushing to `main` runs checks, builds `dist`, and deploys through GitHub Actions. Obtain explicit approval before pushing a live update.

Keep the Pages custom-domain settings and `CNAME` intact. `public/404.html` and the redirect-restoration script in `index.html` preserve direct visits to React routes.

Never put private API keys in frontend code or Vite definitions. GitHub Pages remains static hosting; future inquiry handling needs a separate service.

## Known content limitations

The high-quality logo and hero video are pending. Several project images/links and blog article bodies remain placeholders. Business claims, testimonials, and policy content still need review. This stack migration does not resolve those content items or add server-rendered HTML.
