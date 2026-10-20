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
| Project history/decisions | `PLAN.md`, `README.md`, `DESIGNER_IMAGE_REQUIREMENTS.md`, `AUDIT.md` (untracked, older) |

Pages: Home (`/`), Blog (`/blog`, `/blog/:slug`), FAQ (`/faq`), and a 404 page.

Homepage order: Hero → About → Philosophy → Vision & Mission → What We Do → Our Process → Partners → Portfolio (Movies / Commercials / Events) → Why Choose Us + stats → Testimonials → Get In Touch + CTA → Footer.

## Design

Dark cinematic theme. Brand colours: red `#8B0000`, gold `#D4AF37`, near-black `#111111` / `#050505`, silver `#E6E6E6`. Fonts: Outfit (headings) and Inter (body) from Google Fonts. Custom mouse cursor, floating WhatsApp button, scroll animations.

## Known issues / risks (as of 2026-10-21)

- **Missing files:** `favicon.svg`, `/images/branding/logo.png` and `/images/branding/og-image.jpg` are referenced but don't exist (no browser-tab icon; broken image in social-media link previews and SEO data).
- **Footer links to pages that don't exist:** Privacy Policy, Terms of Service, Cookie Policy (`/privacy`, `/terms`, `/cookies`) → show the 404 page. "Careers" just jumps to Contact.
- **Placeholder content on the live site:** 5 testimonials with likely invented names; blog articles are placeholder text with Unsplash stock photos; About also uses a stock photo; many portfolio cards say "Project asset required"; stats (150+ projects, 50+ brands, 10+ years) need confirming.
- **Social links** point to "CKStudio-Music" / "ckstudio_music" accounts — confirm they're the right ones. LinkedIn link is unverified.
- **Map pin coordinates** (17.385044, 78.486671) are central Hyderabad, not Jeedimetla.
- **Contact details are duplicated** in about six files — change all of them together.
- **Stats counter** may briefly show "0+" until scrolled into view (counting animation).
- **Leftover / unused code:** nothing on the live site uses `src/config/` (contact, site, theme), `src/hooks/`, `src/motion/`, or `src/components/ui/` (Button, Card) — they only reference each other. Leftover drafts from the Antigravity build; don't rely on them. Local branch `codex/modern-stack` is an older work branch.
- Single-page app means search engines see mostly empty HTML until JavaScript runs — weaker SEO than plain HTML. Changing this would be a big job; ask first.
