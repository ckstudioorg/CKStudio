# CK Studio - Image Folder Structure

This document outlines the complete image organization structure for the CK Studio website.

## 📁 Folder Structure

```
public/images/
├── portfolio/
│   ├── movies/          → Movie project images
│   └── commercials/     → Commercial project images
├── clients/             → Client logo images
├── team/               → Team member photos (if needed)
└── branding/           → Logo, favicon, and brand assets
```

## 📝 Detailed Instructions

### 1. Portfolio Images (`/images/portfolio/`)

#### Movies Folder (`/images/portfolio/movies/`)
- **Purpose**: Store all movie project images
- **Recommended size**: 400x300px or 16:9 aspect ratio
- **Format**: JPG, PNG, or WebP
- **Naming**: Use descriptive names (e.g., `movie-title-scene1.jpg`)
- **Code reference**: Update `movieImages` array in `Portfolio.tsx`

#### Commercials Folder (`/images/portfolio/commercials/`)
- **Purpose**: Store all commercial project images
- **Recommended size**: 400x300px or 16:9 aspect ratio
- **Format**: JPG, PNG, or WebP
- **Naming**: Use descriptive names (e.g., `brand-name-ad1.jpg`)
- **Code reference**: Update `commercialImages` array in `Portfolio.tsx`

### 2. Client Logos (`/images/clients/`)
- **Purpose**: Store client company logos
- **Recommended size**: 300x300px (square) or maintain original aspect ratio
- **Format**: PNG (with transparent background preferred) or JPG
- **Naming**: Use client names (e.g., `palik-studios.png`, `rr-creations.png`)
- **Code reference**: Update `clientLogos` array in `Clients.tsx`

### 3. Team Photos (`/images/team/`) - Optional
- **Purpose**: Team member photos for About section
- **Recommended size**: 400x400px (square)
- **Format**: JPG or PNG
- **Naming**: Use names (e.g., `john-doe.jpg`)

### 4. Branding Assets (`/images/branding/`)
- **Purpose**: Logo, favicon, and other brand assets
- **Contents**:
  - `logo.png` - Main logo
  - `logo-white.png` - White version for dark backgrounds
  - `favicon.ico` - Website favicon
  - `og-image.jpg` - Social media preview image (1200x630px)

## 🚀 Quick Start Guide

1. **Create remaining folders**: Use GitHub's "Add file" > "Create new file" and type folder path like `portfolio/commercials/README.md`
2. **Upload images**: Use "Add file" > "Upload files" in each folder
3. **Update code**: Edit the corresponding .tsx files with actual image paths
4. **Test**: Hard refresh (Ctrl+Shift+R) to see changes on live site

## 📌 Image Path Examples

```javascript
// Portfolio Movies
'/ images/portfolio/movies/movie-project-1.jpg'

// Portfolio Commercials  
'/images/portfolio/commercials/client-ad-1.jpg'

// Client Logos
'/images/clients/palik-studios.png'

// Branding
'/images/branding/logo.png'
```

## ⚠️ Important Notes

- Always optimize images before uploading (use tools like TinyPNG)
- Keep file sizes under 500KB for faster loading
- Use descriptive filenames (no spaces, use hyphens)
- Maintain consistent naming conventions
- Delete placeholder/dummy images after uploading real ones

## 🔄 Updating Images in Code

### Portfolio.tsx
```javascript
const movieImages = [
  '/images/portfolio/movies/your-image-1.jpg',
  '/images/portfolio/movies/your-image-2.jpg',
];
```

### Clients.tsx
```javascript
const clientLogos = [
  { name: "Client Name", logo: "/images/clients/client-logo.png" },
];
```
