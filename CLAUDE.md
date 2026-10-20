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
7. **Keep the design consistent** with the existing look (dark cinematic theme, red/gold accents, current fonts) unless a redesign is requested.

## How the site is built

This is **not** plain HTML pages. It is a **React single-page app** (TypeScript + Vite + Tailwind CSS 4 + Motion animations). The source in `src/` is turned into the real website in `dist/` by a build step.

- **Deploying:** `.github/workflows/deploy.yml` runs on every push to `main`: installs packages, runs `npm run check` (type check + tests + build), and publishes `dist/` to GitHub Pages. If the check fails, the live site is not updated (the old version stays up).
- **Checks on branches:** `.github/workflows/check.yml` runs the same check on other branches and pull requests, without deploying.
- **Run locally:** `npm ci` once, then `npm run dev` (http://127.0.0.1:3000/). `npm run check` runs everything the deploy runs. Project asks for Node 24 (`.nvmrc`); this PC has Node 25 — it works, but may print an "engine" warning.
- **Custom domain:** `CNAME` sits in the repo root (not in `public/`), so it isn't copied into `dist/`. With GitHub Actions deploys, the domain is held in the repo's Pages settings, so this is fine. Leave it alone either way.
- **Deep links:** `public/404.html` + a small script in `index.html` let direct visits to `/blog`, `/faq` etc. work on GitHub Pages. Don't remove them.

## Where things are

| What | File |
|---|---|
| Page shell, fonts, base SEO tags | `index.html` |
| Page list (routes) and homepage section order | `src/components/AnimatedRoutes.tsx` |
| Homepage sections | `src/components/` — `Hero`, `About`, `Philosophy`, `VisionMission`, `Services`, `AIWorkflow`, `Clients` (partners), `Portfolio`, `WhyUs` + `StatsCounter`, `Testimonials`, `Contact` + `CTABanner`, `Header`, `Footer` |
| Other pages | `src/pages/` — `Blog`, `BlogPost`, `FAQ`, `NotFound` |
| Blog articles | `src/data/blogData.ts` |
| Phone, email, address, WhatsApp, social links | Typed directly into each section: `Contact.tsx`, `CTABanner.tsx`, `Footer.tsx`, `WhatsAppWidget.tsx`, `AnimatedRoutes.tsx` (SEO data), `index.html`. **`src/config/contact.ts` and `site.ts` are NOT used by the live site** — editing them changes nothing. Search the whole `src/` folder and change every copy. |
| Colours, fonts, design tokens | `tailwind.config.ts`, `src/index.css` |
| Logo | `src/assets/logo.png` |
| Static files copied as-is | `public/` (404 page, robots.txt, sitemap.xml) |
| Tests | `src/test/site.test.tsx` (checks portfolio groups/links, chart colours, header button, SEO tags) — update them if a change intentionally breaks them |
| Project history/decisions | `docs/PLAN.md`, `docs/DESIGNER_IMAGE_REQUIREMENTS.md`, `README.md`, `AUDIT.md` (untracked, older) |

Pages: Home (`/`), Blog (`/blog`, `/blog/:slug`), FAQ (`/faq`), and a 404 page.

Homepage order: Hero → About → Philosophy → Vision & Mission → What We Do → Our Process → Partners → Portfolio (Movies / Commercials / Events) → Why Choose Us + stats → Testimonials → Get In Touch + CTA → Footer.

## Redesign in progress (branch `redesign-2026`, started 2026-10-21)

Full visual redesign, same content and section order. Plan agreed with the owner:
- **Pure white background.** Red `#8B0000` for headlines/key words/buttons, black `#111111` for all other text, gold `#D4AF37` only for rare special moments (80/20 ring "CK's Magic", hero star, final CTA).
- Fonts: **Clash Display** (headings, `font-heading`) + **Satoshi** (body, `font-body`), self-hosted in `public/fonts/` (licence note in `docs/FONTS.md`).
- Motion: **GSAP 3 + ScrollTrigger + SplitText** for scroll-scrubbed/pinned animation, **Lenis** for smooth scroll. Setup and helpers (`scrollToSection`, `resetScroll`) in `src/lib/smoothScroll.ts`. Always respect reduced-motion. Use `gsap.context()` + `revert()` for cleanup.
- New tokens live in `src/styles/foundation.css` (`bg-paper`, `text-ink`, `text-ink-soft`, `text-ck-red`, `text-ck-gold`, `text-mega/giant/title`, `ease-cinema`). Old dark tokens (`tailwind.config.ts` + `src/config/theme.ts`, Outfit/Inter Google Fonts) stay only until every old section is rebuilt, then delete them.
- Hero: a 5–8 s video scrubbed by scroll (owner will supply; convert to all-keyframe MP4 for smooth scrubbing). Placeholder until then.
- Testimonials: don't invent quotes. Draft quotes for real partners to approve; show only approved ones.
- Blog: rewrite as real, accurate articles about CK Studio's services.
- Local-only style preview at `/design-preview` (`src/pages/DesignPreview.tsx`, dev mode only, excluded from the live build).
- New structure: rebuilt homepage sections in `src/sections/`, shared pieces in `src/components/layout/` (Header) and `src/components/brand/` (Logo: PNG used as a CSS mask so it is always exact brand red), editable text in `src/content/` (e.g. `hero.ts`, which also holds the hero video paths; `about.ts`; `services.ts`; `work.ts` for partners, portfolio items and Why Us/stats — add a portfolio thumbnail with `image:` or a video with `url`/`youtubeId`; `note` is internal only). Reusable scroll animations in `src/lib/motion.ts` (`useGsap`, `revealLines`, `fillWords`, `riseIn`, `countUp`, `drawLine`). Never put a CSS `transition` on transform/translate of an element GSAP moves; wrap it instead. Section labels are numbered (01 About … 10 Contact) via `components/ui/SectionLabel`. Missing images use `components/ui/ImageSlot` (shows required size and path). The header tracks the active section itself with ScrollTrigger.
- Breakpoints: legacy config sets `sm` = 375px (standard is 640px). Use `md` (768) / `lg` (1024) in new code until the legacy config is removed.
- Steps: 1 foundation ✅ · 2 Header + Hero ✅ · 3 About/Philosophy/Vision ✅ · 4 Services/Process ✅ · 5 Partners/Portfolio/Why Us ✅ · 6 Testimonials/Contact/Footer · 7 Blog/FAQ/404 · 8 mobile, speed, accessibility polish. Owner previews each step.

## Design (old, being replaced)

Dark cinematic theme. Brand colours: red `#8B0000`, gold `#D4AF37`, near-black `#111111` / `#050505`, silver `#E6E6E6`. Fonts: Outfit (headings) and Inter (body) from Google Fonts. Custom mouse cursor, floating WhatsApp button, scroll animations.

## Known issues / risks (as of 2026-10-21)

- **Missing files:** `favicon.svg`, `/images/branding/logo.png` and `/images/branding/og-image.jpg` are referenced but don't exist (no browser-tab icon; broken image in social-media link previews and SEO data).
- **Footer links to pages that don't exist:** Privacy Policy, Terms of Service, Cookie Policy (`/privacy`, `/terms`, `/cookies`) → show the 404 page. "Careers" just jumps to Contact.
- **Placeholder content on the live site:** 5 testimonials with likely invented names; blog articles are placeholder text with Unsplash stock photos; About also uses a stock photo; many portfolio cards say "Project asset required"; stats (150+ projects, 50+ brands, 10+ years) need confirming.
- **Social links** point to "CKStudio-Music" / "ckstudio_music" accounts — confirm they're the right ones. LinkedIn link is unverified.
- **Map pin coordinates** (17.385044, 78.486671) are central Hyderabad, not Jeedimetla.
- **Contact details are duplicated** in about six files — change all of them together.
- **Stats counter** may briefly show "0+" until scrolled into view (counting animation).
- **Leftover code:** unused Antigravity drafts (config/hooks/motion/ui) were removed on 2026-10-21. Local branch `codex/modern-stack` is an older work branch.
- Single-page app means search engines see mostly empty HTML until JavaScript runs — weaker SEO than plain HTML. Changing this would be a big job; ask first.
