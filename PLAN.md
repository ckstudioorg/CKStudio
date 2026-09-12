# Current approved work — September 12, 2026

This status takes precedence over the historical proposal below. Its broad redesign ideas and completion labels are not approved scope.

## Content and homepage order

- Applied service copy from `CK STUDIO Website Changes.docx`, including event branding, company package details, credits, and pitch-deck audiences.
- Homepage sequence: Hero; About Us; Our Philosophy; Vision and Mission; What We Do; Our Process; Our Partners; Our Portfolio; Why Choose Us; Testimonials; Get In Touch.
- Split Philosophy from Vision/Mission. Retained statistics within Why Choose Us and the closing CTA within Get In Touch.
- Grouped existing and supplied projects into Movies, Commercials, and Events. Preserved existing video links and the additional Seetimaar entry. Missing media is explicitly marked.
- Partner list already matches the document. Brand utilities use gold #D4AF37, red #8B0000, black #111111, and silver #E6E6E6. Percentage labels retain silver for 80% and gold for 20%.
- Fixed pre-existing Tailwind stylesheet/configuration incompatibilities needed to build the local site. Preserved prior draft source work.
- Local production build succeeds. Whole-project TypeScript checking reports existing draft hook/UI and theme configuration errors; broader type cleanup remains outstanding.
- Mobile review found a footer decoration extending past the viewport; constrained its width.

## Pending inputs and next steps

- High-quality replacement logo was not included in the document; existing logo retained.
- Hero video and scroll scrubbing are explicitly deferred.
- Confirm document spelling “Baby Bullshit Guy” versus existing linked “Babu Bullshit Guy”; retained the existing title for now.
- Supply project imagery and video links for new entries and Gangothri.
- Review this local content/order pass before broader visual redesign. Nothing has been pushed or published; live updates require approval.

---

# Historical redesign proposal (not approved)

## Overview
Transform the existing CKStudio website into an award-winning, cinematic, premium digital experience that demonstrates CKStudio's filmmaking, VFX, CGI, and AI capabilities through the website itself.

---

## Phase Structure

### STAGE A: Foundation (Phases 1-3) ✅ Audit Complete
### STAGE B: Design System & Global Shell (Phases 4-6, 19-21, 31-32)
### STAGE C: Homepage Sections (Phases 7-15)
### STAGE D: Portfolio & Project Experience (Phase 10-11)
### STAGE E: Content Pages (Phases 16-18)
### STAGE F: Technical Excellence (Phases 22-30, 35-36)

---

## STAGE A: Foundation - COMPLETE

### Phase 1: Complete Project Audit ✅ DONE
- Created AUDIT.md with full architecture, component hierarchy, routes, design system, animation system, assets, content, dependencies, technical debt, performance risks, accessibility risks, SEO weaknesses, UX problems, mobile problems

---

## STAGE B: Design System & Global Shell

### Phase 2: Creative Direction & Visual Identity
**Goal**: Establish cohesive cinematic visual language

**Deliverables**:
- [ ] Refined color palette (deep blacks, controlled crimson, sophisticated neutrals)
- [ ] Typography system: Display (cinematic/editorial), Body (readable), Mono (technical)
- [ ] Spacing scale with intentional rhythm
- [ ] Glassmorphism evolution: layered depth, subtle borders, controlled blur
- [ ] Shadow/glow system: cinematic lighting, not gaming aesthetics
- [ ] Noise/grain texture system
- [ ] Border/divider system
- [ ] Motion tokens: duration, easing, stagger, distance

**Files to Create/Modify**:
- `tailwind.config.js` - Complete redesign
- `src/index.css` - New design system utilities
- `src/styles/design-tokens.ts` - Centralized tokens (NEW)

### Phase 3: World-Class Visual Design System
**Goal**: Editorial layouts, asymmetry, oversized typography, cinematic compositions

**Deliverables**:
- [ ] Container system: max-widths, responsive padding
- [ ] Grid system: editorial, asymmetric, cinematic crops
- [ ] Component primitives: Card, Button, Input, Badge, Divider
- [ ] Section templates: Hero, Content, Gallery, CTA, Footer
- [ ] Responsive breakpoint strategy

**Files**:
- `src/components/ui/` - New primitive components
- `src/styles/section-templates.css` - Section composition patterns

### Phase 4: Motion Design System (Phase 32)
**Goal**: Reusable motion primitives, consistent language

**Motion Primitives to Create**:
```typescript
// src/motion/primitives.ts
- fadeReveal: { initial, animate, exit, transition }
- slideReveal: { direction, distance, delay }
- scaleReveal: { scale, origin }
- textReveal: { by: 'word' | 'char' | 'line', stagger }
- imageReveal: { clipPath, scale, mask }
- parallaxLayer: { speed, direction }
- magnetic: { strength, spring }
- staggerGroup: { stagger, delayChildren }
- sectionTransition: { type: 'fade' | 'slide' | 'clip' }
```

**Easing Standards**:
- `easeOutExpo`: `[0.16, 1, 0.3, 1]` - Entrances
- `easeInOutCubic`: `[0.65, 0, 0.35, 1]` - Transitions
- `springGentle`: `{ stiffness: 120, damping: 18 }` - Magnetic
- `springSnappy`: `{ stiffness: 300, damping: 25 }` - UI feedback

**Durations**:
- Micro: 150-200ms (hover, tap)
- Standard: 300-400ms (reveals, transitions)
- Macro: 600-1000ms (section entrances, page transitions)
- Cinematic: 1200-2000ms (hero, hero transitions)

### Phase 5: Global Shell - Navigation (Phase 6)
**Goal**: Premium minimal navigation with cinematic transitions

**Requirements**:
- [ ] Transparent over hero, intelligent transition on scroll
- [ ] Glassmorphism with subtle border/glow
- [ ] Magnetic nav items (preserve existing Magnetic component)
- [ ] Active section indicator (smooth, spring-based)
- [ ] Mobile menu: full-screen, cinematic entrance, staggered items
- [ ] Logo: subtle hover/entrance animation
- [ ] CTA button: premium gradient, glow on hover
- [ ] Respects `prefers-reduced-motion`
- [ ] Keyboard accessible (focus-visible, ARIA)

**Files**:
- `src/components/Header.tsx` - Complete rewrite
- `src/components/MobileMenu.tsx` - NEW
- `src/hooks/useReducedMotion.ts` - NEW
- `src/hooks/useScrollDirection.ts` - NEW

### Phase 6: Global Shell - Custom Cursor (Phase 20)
**Goal**: Context-aware, accessible, performant cursor

**Requirements**:
- [ ] Desktop only (`@media (pointer: fine)`)
- [ ] Disabled for `prefers-reduced-motion`
- [ ] No global `cursor: none` - only on interactive elements
- [ ] Context states: DEFAULT, VIEW, PLAY, DRAG, EXPAND, LINK
- [ ] Spring physics (stiffness: 400, damping: 30)
- [ ] GPU-accelerated (transform only)
- [ ] No mousemove on non-interactive areas
- [ ] Keyboard navigation unaffected

**Files**:
- `src/components/CustomCursor.tsx` - Complete rewrite
- `src/hooks/useCustomCursor.ts` - NEW
- `src/styles/cursor.css` - NEW

### Phase 7: Global Shell - Page Transitions & Scroll (Phases 21, 28)
**Goal**: Cinematic page transitions, intentional scroll experience

**Requirements**:
- [ ] Shared layout transitions (AnimatePresence mode="wait")
- [ ] Route-level transitions with loading states
- [ ] Scroll restoration
- [ ] Smooth scroll behavior
- [ ] Section reveal on scroll (IntersectionObserver)
- [ ] Controlled parallax (GPU-only, respect reduced motion)
- [ ] Scroll progress indicator (subtle)
- [ ] GitHub Pages SPA routing fix verification

**Files**:
- `src/components/PageTransition.tsx` - Enhance
- `src/hooks/usePageTransition.ts` - NEW
- `src/hooks/useScrollReveal.ts` - NEW

---

## STAGE C: Homepage Sections

### Phase 8: Hero Section (Phase 4) - FLAGSHIP
**Goal**: Visually unforgettable, communicates "AI-powered cinematic storytelling" in 3 seconds

**Design Approach**:
```
┌─────────────────────────────────────────────────────────────┐
│  VIDEO LAYER (full bleed, object-cover, muted, loop)        │
│  ├── Gradient overlay (dark-950/80 → dark-950/60 → dark-950/90) │
│  ├── Noise/grain overlay (subtle, 1.5% opacity)             │
│  ├── Grid pattern (80px, crimson/0.03)                      │
│  └── Volumetric light orbs (2-3, slow pulse, blur-3xl)      │
├─────────────────────────────────────────────────────────────┤
│  CONTENT LAYER (z-10, centered, max-w-7xl)                  │
│  ├── AI Badge (pulse dot, "AI-Powered Film Production")     │
│  ├── Logo (full-width on mobile, constrained desktop)       │
│  ├── KINETIC TYPEWRITER HEADLINE                            │
│  │   "Where Cinematic"                                      │
│  │   "Storytelling Meets"                                    │
│  │   "Artificial Intelligence"                               │
│  │   (word-by-word reveal, cinematic timing)                 │
│  ├── Divider (gradient, animated width)                     │
│  ├── DUAL CTA GROUP                                         │
│  │   [View Our Work] (primary, magnetic, shimmer)          │
│  │   [Start a Project] (secondary, glass)                  │
│  ├── STATS BAR (3 items, animated counters)                 │
│  └── Scroll Indicator (subtle, animated)                    │
└─────────────────────────────────────────────────────────────┘
```

**Technical Requirements**:
- [ ] Video: Local MP4 + WebM, poster image, preload="metadata"
- [ ] Fallback: Static hero image if video fails
- [ ] `prefers-reduced-motion`: Static image, no parallax, no typewriter
- [ ] Mobile: Stacked layout, optimized video, touch-friendly CTAs
- [ ] Performance: IntersectionObserver for video play/pause
- [ ] Accessibility: Alt text, ARIA labels, focus management

**Files**:
- `src/components/Hero.tsx` - Complete rewrite
- `src/components/ui/VideoBackground.tsx` - NEW
- `src/components/ui/KineticTypewriter.tsx` - NEW
- `public/videos/hero-background.mp4` - NEW (local)
- `public/images/hero/hero-poster.webp` - NEW

### Phase 9: About / Brand Story (Phase 7)
**Goal**: Compelling editorial story, not corporate boilerplate

**Design**:
- Oversized statement typography
- Scroll-linked reveals (text + image)
- Editorial composition (asymmetric, layered)
- Human + AI duality visual metaphor

**Files**:
- `src/components/About.tsx` - Complete rewrite

### Phase 10: Vision & Mission (Phase 7)
**Goal**: Philosophical foundation with cinematic presentation

**Files**:
- `src/components/VisionMission.tsx` - Redesign

### Phase 11: Services (Phase 8)
**Goal**: Each service feels like a premium creative capability

**Services**: Commercials, Designing, Movie Works, Social Media, VFX & CG

**Interaction Design**:
- Large cinematic cards (aspect-ratio: 16/9 or 4/5)
- Hover: Full-card video/image reveal with masking
- Cursor-following preview window
- Typography transformation on hover
- Depth layers (background → content → glow)

**Files**:
- `src/components/Services.tsx` - Complete rewrite
- `src/components/ui/ServiceCard.tsx` - NEW

### Phase 12: AI Workflow (Phase 9) - SIGNATURE SECTION
**Goal**: Visually spectacular journey visualization

**Stages**: IDEA → CONCEPT → PRE-PRODUCTION → PRODUCTION → POST-PRODUCTION → DELIVERY

**Visual Concept**:
- Horizontal timeline (desktop) / Vertical (mobile)
- Flowing light/particle stream connecting stages
- Each stage: cinematic thumbnail + expandable detail
- Scroll-linked camera movement through "pipeline"
- Progressive scene building visualization

**Files**:
- `src/components/AIWorkflow.tsx` - Complete rewrite
- `src/components/ui/AIWorkflowStage.tsx` - NEW
- `src/components/ui/FlowConnector.tsx` - NEW

### Phase 13: Why CKStudio (Phase 12)
**Goal**: Strong differentiation through visual storytelling

**Files**:
- `src/components/WhyUs.tsx` - Complete rewrite

### Phase 14: Stats Counter (Phase 13)
**Goal**: Cinematic, editorial number presentation

**Files**:
- `src/components/StatsCounter.tsx` - Redesign

### Phase 15: Portfolio (Phase 10) - FLAGSHIP
**Goal**: Premium film archive experience

**Design**:
- Large cinematic project cards (variable aspect ratios)
- Horizontal storytelling layout option
- Immersive hover: video preview, metadata reveal
- Smooth project transitions
- Fullscreen project viewer (modal or route)
- Category filtering with animated transitions
- Real thumbnails (1280x720 WebP) + YouTube fallback

**Files**:
- `src/components/Portfolio.tsx` - Complete rewrite
- `src/components/ui/ProjectCard.tsx` - NEW
- `src/components/ui/ProjectViewer.tsx` - NEW
- `src/components/ui/CategoryFilter.tsx` - NEW
- `public/images/portfolio/works/*.webp` - NEW assets needed

### Phase 16: Showreel (Phase 11)
**Goal**: Premium fullscreen reel experience

**Structure**:
- Minimal UI, full-width cinematic visual
- Play interaction → fullscreen player
- Chapter markers
- Elegant loading states

**Files**:
- `src/components/Showreel.tsx` - NEW
- `src/components/ui/VideoPlayer.tsx` - NEW

### Phase 17: Testimonials (Phase 14)
**Goal**: Cinematic quote presentation, elegant transitions

**Files**:
- `src/components/Testimonials.tsx` - Redesign

### Phase 18: Clients (Phase 15)
**Goal**: Premium logo showcase with subtle interactions

**Files**:
- `src/components/Clients.tsx` - Redesign

### Phase 19: CTA Banner (Phase 18)
**Goal**: Powerful conversion-focused closing statement

**Messaging**: "Let's create something impossible." or CKStudio-specific

**Files**:
- `src/components/CTABanner.tsx` - Redesign
- `src/components/Contact.tsx` - Integrate/redesign

---

## STAGE D: Portfolio & Project Experience

### Phase 20: Portfolio Deep Dive (Phase 10 continued)
- Fullscreen project viewer with cinematic transitions
- Project metadata sidebar
- Video playback integration
- Keyboard navigation
- Share functionality

---

## STAGE E: Content Pages

### Phase 21: Blog System (Phase 16)
**Goal**: Editorial premium blog with real content

**Content Creation**:
- [ ] Write 9 real articles based on CKStudio expertise
- Topics: AI filmmaking, AI pre-production, Future of advertising, AI cinematography, VFX/CGI, AI storytelling, Creative workflows, Film production tech

**Technical**:
- [ ] Article hero with hero image, category, reading time
- [ ] Table of contents (auto-generated)
- [ ] Excellent typography (prose styles, responsive)
- [ ] Related articles
- [ ] BlogPosting structured data
- [ ] Category/tag pages
- [ ] Search with Algolia or client-side fuse.js
- [ ] RSS feed
- [ ] Syntax highlighting for technical content

**Files**:
- `src/data/blogData.ts` - Real content
- `src/pages/Blog.tsx` - Redesign
- `src/pages/BlogPost.tsx` - Redesign
- `src/components/ui/ArticleLayout.tsx` - NEW
- `src/components/ui/TableOfContents.tsx` - NEW
- `src/components/ui/ProseContent.tsx` - NEW

### Phase 22: FAQ (Phase 17)
**Goal**: Premium accordion experience with search

**Files**:
- `src/pages/FAQ.tsx` - Redesign
- FAQPage structured data

### Phase 23: Contact / Conversion (Phase 18)
**Goal**: Premium contact with centralized config

**Requirements**:
- [ ] Centralized contact config (`src/config/contact.ts`)
- [ ] WhatsApp with context (service, page, portfolio item)
- [ ] Contact form with validation
- [ ] Form submission (Formspree/Netlify Functions/EmailJS)
- [ ] Success/error states
- [ ] Map integration (optional)

**Files**:
- `src/config/contact.ts` - NEW
- `src/components/Contact.tsx` - Redesign
- `src/components/ui/ContactForm.tsx` - NEW

---

## STAGE F: Technical Excellence

### Phase 24: Responsive Design (Phase 22)
**Breakpoints to Test**: 320, 375, 390, 430, 768, 1024, 1280, 1440, 1920+

**Approach**: Mobile-first, deliberate layouts per breakpoint

**Files**: All components - responsive audit

### Phase 25: Performance Optimization (Phase 23)
**Audit & Implement**:
- [ ] Code splitting: `React.lazy` + `Suspense` for routes
- [ ] Dynamic imports: Heavy components (3D, VideoPlayer, ProjectViewer)
- [ ] Image optimization: WebP/AVIF, responsive images, srcset, sizes
- [ ] Font optimization: `font-display: swap`, subset, preload
- [ ] Video optimization: Compressed, multiple formats, poster
- [ ] Bundle analysis: `vite-bundle-analyzer`
- [ ] Remove unused Framer Motion features
- [ ] Tree-shake Lucide icons
- [ ] CSS optimization: PurgeCSS, critical CSS
- [ ] Third-party defer: Fonts, analytics
- [ ] Service Worker (Workbox) for caching
- [ ] Core Web Vitals targets: LCP < 2.5s, FID < 100ms, CLS < 0.1

**Files**:
- `vite.config.ts` - Optimize build
- `src/main.tsx` - Lazy routes
- `public/sw.js` - NEW (Workbox)

### Phase 26: Accessibility (Phase 24)
**Implement**:
- [ ] Semantic HTML audit
- [ ] Keyboard navigation: all interactive elements
- [ ] Focus-visible: custom styles for all components
- [ ] ARIA: labels, descriptions, live regions
- [ ] Color contrast: WCAG AA minimum
- [ ] Reduced motion: `prefers-reduced-motion` hook, disable all non-essential animation
- [ ] Touch targets: 44x44px minimum
- [ ] Form accessibility: labels, errors, announcements
- [ ] Skip to main content link
- [ ] Screen reader testing

**Files**:
- `src/hooks/useReducedMotion.ts` - Use everywhere
- `src/styles/accessibility.css` - NEW
- All components - audit & fix

### Phase 27: SEO (Phase 25)
**Implement**:
- [ ] Unique title/description per route
- [ ] Canonical URLs (handle GitHub Pages)
- [ ] Open Graph + Twitter cards per page
- [ ] Structured data:
    - Organization (homepage)
    - ProfessionalService (homepage)
    - WebSite (all pages)
    - Blog (blog index)
    - BlogPosting (blog posts)
    - FAQPage (FAQ)
    - BreadcrumbList (deep pages)
    - VideoObject (portfolio videos)
- [ ] Sitemap: Auto-generated with all blog posts
- [ ] Robots.txt: Optimized
- [ ] Meta tags: theme-color, viewport, etc.

**Files**:
- `src/components/SEO.tsx` - Enhance
- `src/utils/seo.ts` - NEW helpers
- `scripts/generate-sitemap.js` - NEW build script

### Phase 28: Error Handling (Phase 26)
**Implement**:
- [ ] Global Error Boundary (class component)
- [ ] Section-level error boundaries
- [ ] Media fallbacks (video, image, 3D)
- [ ] Graceful loading states (skeleton screens)
- [ ] Network error handling
- [ ] Friendly error pages

**Files**:
- `src/components/ErrorBoundary.tsx` - NEW
- `src/components/ui/MediaFallback.tsx` - NEW
- `src/components/ui/Skeleton.tsx` - NEW

### Phase 29: Code Quality (Phase 27)
**Improve**:
- [ ] Eliminate `any` types
- [ ] Strict TypeScript config
- [ ] Centralized config: `src/config/` (contact, site, theme)
- [ ] Reusable component primitives
- [ ] Consistent naming conventions
- [ ] Separation of content/data from presentation
- [ ] Reusable animation hooks
- [ ] ESLint + Prettier config

**Files**:
- `tsconfig.json` - Stricter
- `eslint.config.js` - NEW
- `prettier.config.js` - NEW
- `src/config/` - NEW directory

### Phase 30: Security (Phase 30)
**Audit**:
- [ ] Remove GEMINI_API_KEY from Vite define
- [ ] CSP headers (via GitHub Pages headers or meta)
- [ ] Sanitize any user content
- [ ] External resource integrity (fonts, video)
- [ ] Dependency audit: `npm audit`
- [ ] No secrets in repo

### Phase 31: Testing (Phase 29)
**Implement**:
- [ ] Vitest + React Testing Library
- [ ] Critical component tests: Header, Hero, Portfolio, Contact, FAQ
- [ ] Routing tests
- [ ] Utility tests
- [ ] Interaction tests (keyboard, screen reader)
- [ ] Visual regression (Storybook + Chromatic or Playwright)
- [ ] CI integration

**Files**:
- `vitest.config.ts` - NEW
- `src/test/` - Test utilities
- Component test files

### Phase 32: 3D / WebGL (Phase 5) - OPTIONAL/SELECTIVE
**Evaluate**: Only if it genuinely improves experience

**Potential Applications** (choose 1-2 max):
- [ ] Hero: Subtle 3D particle field / volumetric atmosphere
- [ ] AI Workflow: 3D pipeline visualization
- [ ] Portfolio: Interactive 3D project objects
- [ ] Showreel: 3D transition elements

**Stack**: React Three Fiber + Drei (lightweight)
**Performance**: < 50KB gzipped, fallback to CSS/Canvas, mobile fallback

**Files** (if approved):
- `src/components/three/` - NEW
- `package.json` - Add @react-three/fiber, @react-three/drei, three

---

## STAGE G: Visual QA & Polish (Phases 33-36)

### Phase 33: Premium Details (Phase 33)
- [ ] Film grain overlay (subtle, animated)
- [ ] Controlled noise textures
- [ ] Sophisticated shadows (layered, directional)
- [ ] Precise borders (1px, semi-transparent)
- [ ] Elegant loading screen (branded)
- [ ] Custom page transitions
- [ ] Cinematic section separators
- [ ] Image masking (cinematic crops)
- [ ] Hover previews (portfolio, services)
- [ ] Subtle light/cinematic effects
- [ ] Dynamic typography (variable font weight)
- [ ] Scroll indicators (designed, not default)
- [ ] Premium button interactions (ripple, shimmer, magnetic)

### Phase 34: Content Quality (Phase 34)
- [ ] Audit all copy
- [ ] Remove clichés, placeholder text
- [ ] CKStudio voice: Short, confident, distinctive, memorable
- [ ] Verify all claims (no "world's best" without evidence)
- [ ] Consistent terminology

### Phase 35: Visual Quality Control (Phase 35)
**Checklist per breakpoint**:
- [ ] Alignment (8px grid)
- [ ] Spacing consistency
- [ ] Typography hierarchy
- [ ] Visual hierarchy
- [ ] Animation smoothness (60fps)
- [ ] Transition quality
- [ ] Mobile layouts
- [ ] Image crops (focal points)
- [ ] Video playback
- [ ] Hover/focus states
- [ ] Loading states
- [ ] Button states
- [ ] Navigation states
- [ ] Footer alignment

### Phase 36: Award-Worthy Review (Phase 36)
**Judging Criteria**:
1. First 5 seconds: Strong impression?
2. Identity communication: Immediate?
3. Custom-made feel: Yes?
4. Cinematic feel: Yes?
5. Technical creativity: Demonstrated?
6. Motion intentionality: Yes?
7. Portfolio premium feel: Yes?
8. Storytelling strength: Yes?
9. Typography excellence: Yes?
10. Mobile equally considered: Yes?
11. Performance: Fast?
12. Accessibility: Yes?
13. Contact ease: Yes?
14. Zero generic elements: Yes?

---

## Implementation Order (Dependency-Aware)

```
WEEK 1-2: Foundation & Design System
├── Phase 2: Creative Direction
├── Phase 3: Visual Design System
├── Phase 4: Motion Design System
├── Phase 5: Navigation
├── Phase 6: Custom Cursor
└── Phase 7: Page Transitions & Scroll

WEEK 2-3: Homepage Hero & Core Sections
├── Phase 8: Hero (FLAGSHIP - most time)
├── Phase 9: About
├── Phase 10: Vision/Mission
├── Phase 11: Services
├── Phase 12: AI Workflow (SIGNATURE)
├── Phase 13: Why Us
├── Phase 14: Stats
├── Phase 17: Testimonials
├── Phase 18: Clients
└── Phase 19: CTA/Contact

WEEK 3-4: Portfolio & Content
├── Phase 15: Portfolio (FLAGSHIP)
├── Phase 16: Showreel
├── Phase 21: Blog (content + technical)
├── Phase 22: FAQ
└── Phase 23: Contact/Conversion

WEEK 4-5: Technical Excellence
├── Phase 24: Responsive
├── Phase 25: Performance
├── Phase 26: Accessibility
├── Phase 27: SEO
├── Phase 28: Error Handling
├── Phase 29: Code Quality
├── Phase 30: Security
└── Phase 31: Testing

WEEK 5: Polish & QA
├── Phase 32: 3D (if approved)
├── Phase 33: Premium Details
├── Phase 34: Content Quality
├── Phase 35: Visual QA
└── Phase 36: Final Review
```

---

## New Files to Create

```
src/
├── config/
│   ├── site.ts              # Site metadata, URLs, social
│   ├── contact.ts           # Contact info, WhatsApp config
│   ├── theme.ts             # Design tokens (colors, spacing, typography)
│   └── motion.ts            # Motion tokens (durations, easings, springs)
├── hooks/
│   ├── useReducedMotion.ts
│   ├── useScrollDirection.ts
│   ├── useScrollReveal.ts
│   ├── usePageTransition.ts
│   ├── useCustomCursor.ts
│   ├── useIntersectionObserver.ts
│   └── useMediaQuery.ts
├── motion/
│   ├── primitives.ts        # Reusable motion variants
│   └── transitions.ts       # Shared transition configs
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Badge.tsx
│   │   ├── Divider.tsx
│   │   ├── VideoBackground.tsx
│   │   ├── KineticTypewriter.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectViewer.tsx
│   │   ├── CategoryFilter.tsx
│   │   ├── VideoPlayer.tsx
│   │   ├── ArticleLayout.tsx
│   │   ├── TableOfContents.tsx
│   │   ├── ProseContent.tsx
│   │   ├── ContactForm.tsx
│   │   ├── MediaFallback.tsx
│   │   ├── Skeleton.tsx
│   │   └── index.ts
│   ├── ErrorBoundary.tsx
│   ├── MobileMenu.tsx
│   └── three/               # If 3D approved
├── styles/
│   ├── design-tokens.css
│   ├── section-templates.css
│   ├── cursor.css
│   └── accessibility.css
├── utils/
│   ├── seo.ts
│   ├── format.ts
│   └── validation.ts
├── data/
│   ├── blogData.ts          # REAL content
│   ├── services.ts
│   ├── portfolio.ts
│   └── testimonials.ts
└── test/
    ├── setup.ts
    └── utils.tsx

public/
├── videos/
│   └── hero-background.mp4
├── images/
│   ├── hero/
│   │   └── hero-poster.webp
│   ├── portfolio/works/
│   │   └── *.webp (7 files)
│   ├── branding/
│   │   ├── logo.svg
│   │   └── og-image.jpg
│   └── blog/
│       └── *.webp (9 files)
```

---

## Dependencies to Add

```json
{
  "dependencies": {
    "@react-three/fiber": "^8.15.0",     // If 3D approved
    "@react-three/drei": "^9.90.0",      // If 3D approved
    "three": "^0.160.0",                 // If 3D approved
    "fuse.js": "^7.0.0",                 // Blog search
    "react-hook-form": "^7.49.0",        // Contact form
    "@hookform/resolvers": "^3.3.0",     // Form validation
    "zod": "^3.22.0"                     // Schema validation
  },
  "devDependencies": {
    "vitest": "^1.0.0",
    "@testing-library/react": "^14.0.0",
    "@testing-library/user-event": "^14.0.0",
    "jsdom": "^23.0.0",
    "vite-bundle-analyzer": "^0.10.0",
    "eslint": "^8.56.0",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "prettier": "^3.2.0",
    "workbox-cli": "^7.0.0"
  }
}
```

---

## Dependencies to Remove/Replace
- None required initially; audit after implementation

---

## Risk Mitigation

| Risk | Mitigation |
|------|------------|
| 3D performance | Strict budget (50KB), CSS fallback, mobile disable |
| Animation overload | Motion design system, reduced-motion global, performance budgets |
| Content creation | Client provides or we write based on brief |
| GitHub Pages SPA | Verify 404.html redirect works, test all routes |
| Video hosting | Use local optimized + Cloudflare Stream or similar |
| Scope creep | Strict phase gates, weekly reviews |

---

## Success Metrics

| Metric | Target |
|--------|--------|
| LCP | < 2.5s |
| FID/INP | < 100ms |
| CLS | < 0.1 |
| Bundle size (gzipped) | < 200KB initial |
| Accessibility score | 100 (Lighthouse) |
| SEO score | 100 (Lighthouse) |
| Performance score | 90+ (Lighthouse) |
| Build time | < 60s |
| TypeScript errors | 0 |
| Test coverage (critical paths) | 80%+ |

---

## Final Deliverables Checklist

- [ ] Application builds successfully (`npm run build`)
- [ ] TypeScript: 0 errors (`npx tsc --noEmit`)
- [ ] Lint: 0 errors (`npm run lint`)
- [ ] Tests pass (`npm run test`)
- [ ] All routes work: `/`, `/blog`, `/blog/:slug`, `/faq`, 404
- [ ] Responsive: All breakpoints verified
- [ ] Keyboard navigation: Full site accessible
- [ ] Reduced motion: All non-essential animation disabled
- [ ] Loading/fallback states: All media covered
- [ ] SEO metadata: Complete on all routes
- [ ] Structured data: Valid, accurate, complete
- [ ] GitHub Pages deploy: Verified working
- [ ] No secrets exposed
- [ ] No placeholder content remains
- [ ] Animations: No jank, 60fps sustained
- [ ] Visual consistency: Full audit passed
