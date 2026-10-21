# CK Studio Image Structure

Use `docs/DESIGNER_IMAGE_REQUIREMENTS.md` as the source of truth for image sizes, formats, names, and delivery folders.

Expected folders:

```text
public/
├── videos/            hero-desktop.mp4, hero-mobile.mp4, hero-poster.webp
├── favicon-32.png, favicon-48.png
└── images/
    ├── branding/      logo, app icons, og-image.jpg
    ├── about/         ai-film-production.webp
    ├── portfolio/
    │   └── works/     portfolio thumbnails
    ├── clients/       partner logos
    └── blog/          blog covers
```

Keep images optimized for the web, use lowercase hyphenated file names, and prefer `webp` for photos, `svg` for logos, and transparent `png` only when an SVG is not available.
