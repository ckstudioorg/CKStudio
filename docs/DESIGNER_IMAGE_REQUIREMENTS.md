# CK Studio Website Image Requirements

This is the handoff list for the designer. Please provide optimized web assets using the palette below and the file names listed here wherever possible.

## Brand Palette

| Color | Hex | Use |
| --- | --- | --- |
| Gold | `#D4AF37` | Premium accents, highlights, 20% CK magic |
| Red | `#8B0000` | Primary brand action color |
| Black | `#111111` | Main background and dark surfaces |
| White / Silver | `#E6E6E6` | Text, client logo monochrome, 80% team |

## General Rules

- Use lowercase file names with hyphens, no spaces.
- Prefer `webp` for photos and thumbnails.
- Use `svg` for logos and icons whenever possible.
- Use transparent `png` only when `svg` is not available.
- Keep each image under 500 KB unless noted.
- Export thumbnails at 2x size so they stay sharp on mobile and retina screens.
- Avoid text inside images except official logos or poster artwork.

## Required Asset List

| Area | Asset | Size | Format | File name / path |
| --- | --- | --- | --- | --- |
| Logo | Main transparent logo | 2048 x 1152 px, same 16:9 logo canvas | `svg` preferred, plus transparent `png` | `src/assets/logo.png` replacement, plus `public/images/branding/logo.svg` |
| Logo | Header logo variant | 512 x 288 px | `png` or `svg` | `public/images/branding/logo-header.png` |
| Logo | Light/silver logo variant | 2048 x 1152 px | `svg` and transparent `png` | `public/images/branding/logo-silver.png` |
| Favicon | Browser favicon | 32 x 32, 48 x 48 | `svg`, `ico`, `png` | `public/favicon.svg`, `public/favicon.ico` |
| App icon | Mobile/social app icon | 180 x 180, 512 x 512 | `png` | `public/images/branding/apple-touch-icon.png`, `public/images/branding/icon-512.png` |
| Social preview | Open Graph preview | 1200 x 630 px | `jpg` or `webp` | `public/images/branding/og-image.jpg` |
| Hero | Cinematic hero loop | 1920 x 1080 px, 10-20 sec loop, no important audio | `mp4` H.264 | `public/images/hero/ckstudio-hero-loop.mp4` |
| Hero | Hero fallback poster | 1920 x 1080 px | `webp` | `public/images/hero/ckstudio-hero-poster.webp` |
| About | AI film production image | 1200 x 1500 px, 4:5 vertical | `webp` | `public/images/about/ai-film-production.webp` |
| Contact | Connect/social image | 800 x 800 px | `webp` | `public/images/contact/connect-with-ck-studio.webp` |

## Portfolio Thumbnails

Create one thumbnail/poster per work. Use actual production stills or official poster frames, not generic stock images.

| Work | Size | Format | File name |
| --- | --- | --- | --- |
| Baali Movie Teaser | 1280 x 720 px | `webp` or `jpg` | `public/images/portfolio/works/baali-movie-teaser.webp` |
| Odela Movie Lyrical Song | 1280 x 720 px | `webp` or `jpg` | `public/images/portfolio/works/odela-movie-lyrical-song.webp` |
| Gangothri Ad | 1280 x 720 px | `webp` or `jpg` | `public/images/portfolio/works/gangothri-ad.webp` |
| Seetimaar Lyrical Song | 1280 x 720 px | `webp` or `jpg` | `public/images/portfolio/works/seetimaar-lyrical-song.webp` |
| Ugly Story Lyrical Songs | 1280 x 720 px | `webp` or `jpg` | `public/images/portfolio/works/ugly-story-lyrical-songs.webp` |
| Babu Bullshit Guy Lyrical Songs | 1280 x 720 px | `webp` or `jpg` | `public/images/portfolio/works/babu-bullshit-guy-lyrical-songs.webp` |
| Aajyam Lyrical Song | 1280 x 720 px | `webp` or `jpg` | `public/images/portfolio/works/aajyam-lyrical-song.webp` |

Optional for each portfolio item: provide a 1920 x 1080 poster version for future case-study pages.

## Client Logos

Provide each logo in two versions:

- Full-color logo for future detailed client sections.
- Single-color silver or white logo for the current dark marquee.

Preferred format: `svg`. Fallback: transparent `png`, minimum 1000 px wide for horizontal logos or 800 x 800 px for square marks.

| Client | File name |
| --- | --- |
| Gangothri Nutrients & Fertilizers | `public/images/clients/gangothri-nutrients-fertilizers.svg` |
| Vande Media | `public/images/clients/vande-media.svg` |
| Pride of Bharat | `public/images/clients/pride-of-bharat.svg` |
| Plasil Organics | `public/images/clients/plasil-organics.svg` |
| Gangothri InfraEdge | `public/images/clients/gangothri-infraedge.svg` |
| Palik Studios | `public/images/clients/palik-studios.svg` |
| Sampathnandhi Teamworks | `public/images/clients/sampathnandhi-teamworks.svg` |
| Kuviyam Mediaworks | `public/images/clients/kuviyam-mediaworks.svg` |
| Aswini Media | `public/images/clients/aswini-media.svg` |
| AIROC | `public/images/clients/airoc.svg` |
| Harivillu Developers | `public/images/clients/harivillu-developers.svg` |
| CM Productions | `public/images/clients/cm-productions.svg` |
| Hindu Law Firm | `public/images/clients/hindu-law-firm.svg` |
| LN Associates | `public/images/clients/ln-associates.svg` |
| Shree Radha's VS Group | `public/images/clients/shree-radhas-vs-group.svg` |

## Blog Images

If the blog remains active, create one cover per article.

- Size: 1200 x 800 px
- Ratio: 3:2
- Format: `webp`
- Style: cinematic, production/AI themed, not generic abstract AI art
- Path: `public/images/blog/[article-slug].webp`

## Delivery Package

Please deliver a folder with this structure:

```text
branding/
hero/
about/
contact/
portfolio/works/
clients/
blog/
```

Also include a short note listing any fonts used inside logo artwork and whether each logo is approved for use on a dark background.
