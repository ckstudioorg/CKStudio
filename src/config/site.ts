/**
 * CKStudio Site Configuration
 * Centralized site metadata, SEO defaults, and global settings
 */

import { contactConfig } from './contact';

export const siteConfig = {
  // Basic Info
  name: 'CK Studio',
  fullName: 'Chenna Keshav Studio',
  tagline: 'AI-Powered Cinematic Storytelling',
  description: 'India\'s premier AI-powered ad film production studio. Combining artificial intelligence with cinematic expertise for feature films, commercials, corporate videos, and AI-driven post-production. 150+ projects delivered.',

  // URLs
  url: 'https://ckstudio.org',
  cdnUrl: 'https://ckstudio.org',

  // Contact (referenced from contact config)
  contact: contactConfig,

  // SEO Defaults
  seo: {
    defaultTitle: 'CK Studio | AI-Powered Ad Film Making & Video Production in Hyderabad',
    defaultDescription: 'India\'s premier AI-powered ad film production studio. We combine artificial intelligence with cinematic expertise for feature films, commercials, corporate videos, and AI-driven post-production. 150+ projects delivered. Free consultation today!',
    defaultImage: '/images/branding/og-image.jpg',
    twitterHandle: '@CKStudio_Music',
    siteName: 'CK Studio',
    locale: 'en_US',
    type: 'website',
  },

  // Structured Data
  structuredData: {
    organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'CK Studio',
      alternateName: 'CK Studio - AI Ad Film Making',
      url: 'https://ckstudio.org',
      logo: 'https://ckstudio.org/images/branding/logo.png',
      description: 'India\'s premier AI-powered ad film production studio combining artificial intelligence with cinematic expertise.',
      telephone: '+91-9700970762',
      email: 'ckstudio.org@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '11-008 N/R, Gajularamaram, IDA Jeedimetla',
        addressLocality: 'Hyderabad',
        addressRegion: 'Telangana',
        postalCode: '500055',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '17.385044',
        longitude: '78.486671',
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
      sameAs: [
        'https://www.facebook.com/CKStudio.org/',
        'https://www.instagram.com/ckstudio_music/',
        'https://www.youtube.com/@CKStudio-Music',
        'https://x.com/CKStudio_Music',
      ],
    },
    professionalService: {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': 'https://ckstudio.org',
      name: 'CK Studio',
      alternateName: 'CK Studio - AI Ad Film Making',
      description: 'India\'s premier AI-powered ad film production studio combining artificial intelligence with cinematic expertise.',
      url: 'https://ckstudio.org',
      logo: 'https://ckstudio.org/images/branding/logo.png',
      image: 'https://ckstudio.org/images/branding/og-image.jpg',
      telephone: '+91-9700970762',
      email: 'ckstudio.org@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '11-008 N/R, Gajularamaram, IDA Jeedimetla',
        addressLocality: 'Hyderabad',
        addressRegion: 'Telangana',
        postalCode: '500055',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '17.385044',
        longitude: '78.486671',
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
      sameAs: [
        'https://www.facebook.com/CKStudio.org/',
        'https://www.instagram.com/ckstudio_music/',
        'https://www.youtube.com/@CKStudio-Music',
        'https://x.com/CKStudio_Music',
      ],
      areaServed: {
        '@type': 'Country',
        name: 'India',
      },
      availableChannel: {
        '@type': 'ServiceChannel',
        availableLanguage: {
          '@type': 'Language',
          name: 'English',
        },
        processingTime: 'P1D',
      },
    },
  },

  // Navigation
  navigation: {
    main: [
      { id: 'home', label: 'Home', href: '/', section: 'home' },
      { id: 'about', label: 'About', href: '/', section: 'about' },
      { id: 'services', label: 'Services', href: '/', section: 'services' },
      { id: 'portfolio', label: 'Portfolio', href: '/', section: 'portfolio' },
      { id: 'blog', label: 'Blog', href: '/blog', external: false },
      { id: 'faq', label: 'FAQ', href: '/faq', external: false },
      { id: 'contact', label: 'Contact', href: '/', section: 'contact' },
    ],
    cta: {
      label: 'Get Started',
      href: '/',
      section: 'contact',
      variant: 'primary' as const,
    },
  },

  // Footer
  footer: {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Work', href: '#portfolio' },
      { name: 'Blog', href: '/blog' },
      { name: 'FAQ', href: '/faq' },
    ],
    services: [
      { name: 'Commercials', href: '#services' },
      { name: 'Designing', href: '#services' },
      { name: 'Movie Works', href: '#services' },
      { name: 'Social Media', href: '#services' },
      { name: 'VFX & CG Works', href: '#services' },
    ],
    connect: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'WhatsApp', href: contactConfig.helpers.getWhatsAppUrl('footer') },
      { name: 'Careers', href: '#contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
    ],
  },

  // Analytics/Tracking (placeholder)
  analytics: {
    gaId: '', // Add GA4 Measurement ID
    gtmId: '', // Add GTM Container ID
    clarityId: '', // Add Microsoft Clarity ID
  },

  // Features Flags
  features: {
    blog: true,
    faq: true,
    portfolio: true,
    showreel: false, // Enable when video assets available
    threeD: false, // Enable when 3D components ready
    analytics: false,
    chatWidget: false,
  },

  // Performance Budgets
  performance: {
    maxBundleSize: 200 * 1024, // 200KB gzipped
    maxInitialJS: 150 * 1024, // 150KB
    maxCSS: 50 * 1024, // 50KB
    maxFontSize: 100 * 1024, // 100KB
    targetLCP: 2500, // ms
    targetFID: 100, // ms
    targetCLS: 0.1,
  },

  // Image Optimization
  images: {
    formats: ['avif', 'webp', 'jpg'] as const,
    sizes: {
      hero: { width: 1920, height: 1080 },
      portfolio: { width: 1280, height: 720 },
      blog: { width: 800, height: 600 },
      thumbnail: { width: 400, height: 225 },
      avatar: { width: 100, height: 100 },
      logo: { width: 200, height: 200 },
      og: { width: 1200, height: 630 },
    },
    quality: 85,
  },

  // Fonts
  fonts: {
    display: {
      family: 'Outfit',
      weights: [300, 400, 500, 600, 700, 800, 900],
      subsets: ['latin'],
      display: 'swap',
      preload: true,
    },
    sans: {
      family: 'Inter',
      weights: [300, 400, 500, 600, 700, 800, 900],
      subsets: ['latin'],
      display: 'swap',
      preload: true,
    },
    mono: {
      family: 'JetBrains Mono',
      weights: [400, 500, 600, 700],
      subsets: ['latin'],
      display: 'swap',
    },
  },

  // Social Image
  social: {
    ogImage: '/images/branding/og-image.jpg',
    twitterImage: '/images/branding/og-image.jpg',
    ogImageAlt: 'CK Studio - AI-Powered Cinematic Storytelling',
  },
} as const;

export type SiteConfig = typeof siteConfig;

export default siteConfig;