# CK Studio website — notes for Claude

Website for **CK Studio (Chenna Keshav Studio)**, a pre- and post-production / AI ad-film studio in Hyderabad (IDA Jeedimetla). Live at https://ckstudio.org, hosted on GitHub Pages from the repo `ckstudioorg/CKStudio`.

The owner is **not a developer**. Explain everything in plain, non-technical language.

## Standing rules (always follow)

1. **Never touch the `CNAME` file.** It holds the custom domain (`ckstudio.org`). Don't edit, move, rename, or delete it.
2. **Before making changes:** run `git pull`, then create a new branch named after the task (e.g. `update-contact-phone`). Never work directly on `main`.
3. **Keep it a static site that works on GitHub Pages.** Don't add anything that needs a server, database, or a *new* build step/tool without asking first. (The existing React + Vite build that GitHub Actions runs is already in place — keep using it, but don't add to it without asking.)
4. **Small steps, plain-language explanations.** After each change, say what changed in words a non-developer understands (what they'll see on the site, not code details).
5. **Don't commit or push until the owner has previewed the change and said OK.** Show the change in a local preview first (`npm run dev` → http://127.0.0.1:3000/).
6. **When approved:** commit with a clear message, then explain how to merge into `main` so the live site updates (push the branch, open a pull request on GitHub, click Merge). Merging to `main` deploys automatically in a few minutes.
7. **Keep the design consistent** with the existing look (the 2026 white redesign described below) unless a redesign is requested.

## How the site is built

A **React single-page app** (TypeScript + Vite 8 + Tailwind CSS 4, GSAP + Lenis + Motion for animation). The source in `src/` is turned into the real website in `dist/` by a build step.

- **Deploying:** `.github/workflows/deploy.yml` runs on every push to `main`: installs packages, runs `npm run check` (type check + tests + build), and publishes `dist/` to GitHub Pages. If the check fails, the live site is not updated (the old version stays up).
- **Checks on branches:** `.github/workflows/check.yml` runs the same check on other branches and pull requests, without deploying.
- **Run locally:** `npm ci` once, then `npm run dev` (http://127.0.0.1:3000/). `npm run check` runs everything the deploy runs. Project asks for Node 24 (`.nvmrc`); this PC has Node 25 — it works, but may print an "engine" warning.
- **Custom domain:** `CNAME` sits in the repo root (not in `public/`), so it isn't copied into `dist/`. With GitHub Actions deploys, the domain is held in the repo's Pages settings, so this is fine. Leave it alone either way.
- **Ready-made pages (pre-rendering, for Google):** `npm run build` also runs `npm run prerender`: `src/entry-server.tsx` renders every page at build time and `scripts/prerender.mjs` saves it as real HTML (`dist/index.html`, `dist/blog/index.html`, `dist/blog/<slug>/index.html`, `dist/faq/index.html`, `dist/404.html`) with the full text, title, description, link-preview tags and structured data, plus `dist/sitemap.xml`. The ready-made page is **visible straight away**; `src/main.tsx` then attaches the live site to it (`hydrateRoot`, "hydration"). So the first render in the browser must match the build exactly: no `window`/`matchMedia`/dates in render or `useState` initialisers (decide in an effect instead, like `Hero` `reduced` and `CustomCursor`), same component tree on server and client (`App.tsx`), `AnimatePresence initial={false}` for the first page, Header `initial={false}`. Entrance animations skip elements that arrived ready-made and are already on screen (`alreadyOnScreen` in `lib/prerendered.ts`, used by `revealLines`/`riseIn` and the BlogPost cover / 404) so nothing flickers. The hero **opening** (logo assembling) is plain CSS keyframes in `foundation.css` ("Hero opening") so it starts before any code loads; GSAP only runs the scroll curtain on the outer wrappers. Until GSAP takes over (`data-js` on `[data-hero-stage]`), CSS holds the hero content hidden; the home page HTML starts with `--ck-header-logo:0`. Hydration problems are logged as `[hydration]` warnings in the console. Each page preloads its own code file (`modulepreload`, from the Vite manifest). Speed on a simulated slow 4G (2026-10-21): first content ~1.0 s (was 2.5–3.5 s). Page addresses end in `/` (`/blog/`, `/faq/`, `/blog/<slug>/`); GitHub Pages redirects `/blog` → `/blog/`. Code that runs during render must not touch `window`/`document` (guard with `typeof window`), or the build fails. The build fails if a page has no `<h1>`.
- **Search details:** one source, `src/lib/seo.ts` (`getPageMeta`, `headTags`, `sitePaths`, `sitemapXml`); wording in `src/content/seo.ts`; `components/SEO.tsx` swaps the `[data-seo]` head tags on page change (it loads `lib/seo.ts` on demand, so page texts stay out of the main code file; link addresses live in the small `lib/paths.ts`). `index.html` has a `<!--seo-->` marker where they go. Menu/footer items are real `<a href>` links so search engines can follow them — keep them links, not buttons. The old `?/` deep-link restore script in `index.html` is kept for old bookmarks.
- **Build splitting:** `vite.config.ts` puts React and the animation libraries in their own cached files.
- **Blank-page self-recovery:** GitHub Pages lets browsers reuse `index.html` for 10 min (`max-age=600`), so right after a deploy a cached page can point to removed `/assets/` files and render blank. An inline script in `index.html` reloads once (max once per 30 s) if an `/assets/` file fails, a lazy page chunk fails (`vite:preloadError`), or the root element is still empty 8 s after load. Keep it.

## Design (2026 white redesign)

- **Pure white background.** Red `#8B0000` for headlines, key words and buttons; black `#111111` for all other text; gold `#D4AF37` only for rare special moments (hero ✦ badge, the 20% "CK's Magic" arc, the glow on the final "Start Your Project" button). Don't add gold elsewhere without asking.
- Tokens in `src/styles/foundation.css`: `bg-paper`, `text-ink`, `text-ink-soft`, `ink-faint`/`ink-ghost` tints, `text-ck-red`, `text-ck-gold`, sizes `text-mega` / `text-giant` / `text-title`, easing `ease-cinema`. Standard Tailwind breakpoints (`sm` 640, `md` 768, `lg` 1024).
- Fonts: **Clash Display** (`font-heading`) + **Satoshi** (`font-body`), self-hosted in `public/fonts/` (licence note in `docs/FONTS.md`). No Google Fonts.
- Motion: GSAP + ScrollTrigger + SplitText for scroll-scrubbed/pinned animation; Lenis smooth scrolling; Motion for small UI transitions (wrapped in `MotionConfig reducedMotion="user"`). Helpers: `src/lib/smoothScroll.ts` (`scrollToSection`, `resetScroll`, `setScrollLocked`) and `src/lib/motion.ts` (`useGsap`, `revealLines`, `fillWords`, `riseIn`, `countUp`, `drawLine`). `useGsap` only runs animations when the visitor allows motion and cleans up automatically.
- **Gotchas:** never put a CSS `transition` on transform/translate of an element GSAP moves — wrap it in another element. Scope selectors per section (`gsap.utils.selector(root)`); several sections reuse `data-` names. After changing page height (accordions), call `ScrollTrigger.refresh()`.
- Section labels are numbered (01 About … 10 Get In Touch) via `components/ui/SectionLabel`. Missing images use `components/ui/ImageSlot` (shows required size and path). Custom red cursor only on mouse devices that allow motion.

## Where things are

| What | File |
|---|---|
| **All wording + contact details** | `src/content/` — `hero.ts`, `about.ts`, `services.ts`, `work.ts` (partners, portfolio, Why Us + stats), `contact.ts` (**the one place** for phone/email/address/WhatsApp/socials, plus testimonials, CTA, footer), `blog.ts`, `faq.ts` (+ 404 text), `seo.ts` |
| Homepage sections | `src/sections/` — Hero, About, Philosophy, VisionMission, Services, Process, Partners, Portfolio, WhyUs, Testimonials, Contact (+ closing CTA) |
| Header, Footer, Logo | `src/components/layout/`, `src/components/brand/Logo.tsx` (PNG used as a CSS mask so it's always exact brand red) |
| Other pages | `src/pages/` — Blog, BlogPost, FAQ, NotFound |
| Routes and homepage order | `src/components/AnimatedRoutes.tsx` |
| Page shell, icons (page titles/link previews come from `src/lib/seo.ts`) | `index.html` |
| Icons, logo file, link-preview image | `public/favicon-*.png`, `public/images/branding/` (interim versions generated from `src/assets/logo.png`; replace with designer files when ready) |
| Static files | `public/` (robots.txt, fonts, images). The sitemap and 404 page are generated at build time — new articles are added automatically |
| Tests | `src/test/site.test.tsx`, `src/test/redesign.test.tsx` — update them if a change intentionally breaks them |
| Notes for the owner/designer | `docs/` — `DESIGNER_IMAGE_REQUIREMENTS.md`, `TESTIMONIAL_DRAFTS.md`, `FONTS.md`, `PLAN.md` (history) |

Pages: Home (`/`), Blog (`/blog`, `/blog/:slug`), FAQ (`/faq`), and a 404 page.

Homepage order: Hero → About → Philosophy → Vision & Mission → What We Do → Our Process → Partners → Portfolio (Movies / Commercials / Events) → Why Choose Us + stats → Testimonials → Get In Touch + closing CTA → Footer.

## Content rules

- **Testimonials:** never invent quotes. Only client-approved ones go in `testimonials.approved` (drafts to send for approval: `docs/TESTIMONIAL_DRAFTS.md`). While empty, the section shows real work.
- **Blog:** 7 real articles (block-based: p / h2 / list / quote). Designed number covers until real images (`image:` 1200×800 in `public/images/blog/`).
- **Portfolio:** add a thumbnail with `image:` or a video with `url` + `youtubeId`. `note` is internal and never shown.
- **Hero = logo animation** (storyboard: Claude Design canvas https://claude.ai/artifact/9fqoVuqX95oogiajnWRfgH; the owner later asked for a cleaner opening). On load (no scrolling needed) the full logo assembles centred: C and mirrored K slide together, CK STUDIO rises, PRE | PRODUCTION | POST appear, a red line draws, the scroll cue arrives. On scroll the logo opens like theatre curtains (C glides off left, K off right, both growing), CK STUDIO sinks back, the tagline fades, and the hero content settles in behind; the small header logo then fades in (`--ck-header-logo` CSS variable on `<html>`). The header stays visible and clear (no white strip) until the hero ends. The owner rejected flying the logo into the header corner ("childish") and giant cropped letters as the opening ("odd"). C and K are vector paths in `components/brand/LogoLetters.tsx` (traced from the official logo); name/tagline pieces in `src/assets/hero/`. Layout numbers in `sections/Hero.tsx` (`LAYOUT`) come from the logo file — re-measure if the logo artwork changes. No hero video any more; one could be added later as an extra layer.

## Redesign history

Branch `redesign-2026` (started 2026-10-21), done in 8 steps, each previewed and approved by the owner: 1 foundation · 2 Header + Hero · 3 About/Philosophy/Vision · 4 Services/Process · 5 Partners/Portfolio/Why Us · 6 Testimonials/Contact/Footer · 7 Blog/FAQ/404 · 8 polish (old design system removed, icons + link preview, skip link, reduced-motion support, build splitting).

## Known issues / waiting on the owner (as of 2026-10-21)

- **About image:** film-strip artwork (`components/brand/FilmStripArt.tsx`, concept A from Claude Design canvas https://claude.ai/artifact/92T3qoCw8aEzdkcC5gVRvw) shows until a real photo is set in `about.image.src`.
- **Waiting on assets:** a real About photo (optional), portfolio media for items marked "Visuals coming soon", final logo/icons from the designer, client-approved testimonials.
- **Please confirm:** stats (150+ projects, 50+ brands, 10+ years, 98% satisfaction). Social links were updated to the CKStudioFilms accounts on 2026-10-21 (owner-confirmed).
- **Privacy Policy / Terms of Service pages don't exist**, so their footer links are hidden (`footer.legal[].ready` in `content/contact.ts`). "Careers" just jumps to Contact.
- **No map pin:** the old coordinates were wrong (central Hyderabad) and were removed; add exact coordinates only if the owner supplies them.
- **Google setup the owner still needs to do:** verify the site in Google Search Console and submit `https://ckstudio.org/sitemap.xml`; create/claim a Google Business Profile (biggest factor for local "ad film makers Hyderabad" searches). A real link-preview image (`og-image.jpg`) and article cover images would help further.
- Local branch `codex/modern-stack` is an old work branch.
