import type { Config } from 'tailwindcss';
import { theme } from './src/config/theme';

// Preserve token names and expose the kebab-case utilities used by the stylesheet.
const utilityColors = (tokens: Record<string, string>) => ({
  ...tokens,
  ...Object.fromEntries(Object.entries(tokens).map(([key, value]) => [
    key.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`), value,
  ])),
});

const stringTokens = (tokens: Record<string, unknown>): Record<string, string> => Object.fromEntries(
  Object.entries(tokens).filter(([, value]) => typeof value === 'string' || typeof value === 'number')
    .map(([key, value]) => [key, String(value)]),
);

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Colors
      colors: {
        // Brand colors
        crimson: theme.colors.brand.crimson,
        gold: theme.colors.brand.gold,

        // Semantic colors
        bg: theme.colors.semantic.bg,
        surface: utilityColors(theme.colors.semantic.surface),
        text: theme.colors.semantic.text,
        interactive: utilityColors(theme.colors.semantic.interactive),
        state: theme.colors.semantic.state,

        // Legacy support (deprecated - use semantic colors)
        primary: {
          red: '#8B0000',
          black: theme.colors.semantic.bg.secondary,
          white: theme.colors.semantic.text.primary,
        },
        brand: {
          gold: '#D4AF37',
          red: '#8B0000',
          black: '#111111',
          silver: '#E6E6E6',
        },
        secondary: {
          black: theme.colors.semantic.bg.tertiary,
          gray: theme.colors.semantic.text.muted,
        },
        dark: {
          950: theme.colors.semantic.bg.primary,
          900: theme.colors.semantic.bg.secondary,
          800: theme.colors.semantic.bg.tertiary,
          700: theme.colors.semantic.bg.quaternary,
          600: '#2a2a2a',
          500: '#333333',
          400: '#404040',
        },
      },

      // Typography
      fontFamily: {
        sans: [...theme.typography.fontFamily.sans],
        display: [...theme.typography.fontFamily.display],
        mono: [...theme.typography.fontFamily.mono],
      },
      fontWeight: stringTokens(theme.typography.fontWeight),
      lineHeight: stringTokens(theme.typography.lineHeight),
      letterSpacing: theme.typography.letterSpacing,

      // Spacing
      spacing: stringTokens(theme.spacing),

      // Border Radius
      borderRadius: theme.borderRadius,

      // Shadows
      boxShadow: {
        'glow-gold': '0 0 20px rgba(212, 175, 55, 0.2)',
        ...stringTokens(theme.shadows),
        // Flattened for Tailwind
        xs: theme.shadows.xs,
        sm: theme.shadows.sm,
        md: theme.shadows.md,
        lg: theme.shadows.lg,
        xl: theme.shadows.xl,
        '2xl': theme.shadows['2xl'],
        'brand-sm': theme.shadows.brand.sm,
        'brand-md': theme.shadows.brand.md,
        'brand-lg': theme.shadows.brand.lg,
        'brand-glow': theme.shadows.brand.glow,
        'brand-glow-strong': theme.shadows.brand.glowStrong,
        'glass-sm': theme.shadows.glass.sm,
        'glass-md': theme.shadows.glass.md,
        'glass-lg': theme.shadows.glass.lg,
        'inset-sm': theme.shadows.inset.sm,
        'inset-md': theme.shadows.inset.md,
        'inset-lg': theme.shadows.inset.lg,
        'inset-brand': theme.shadows.inset.brand,
      },

      // Transitions
      transitionDuration: theme.transitions.duration,
      transitionTimingFunction: theme.transitions.easing,

      // Blur
      backdropBlur: theme.blur,

      // Opacity
      opacity: theme.opacity,

      // Z-Index
      zIndex: stringTokens(theme.zIndex),

      // Containers
      container: {
        center: true,
        padding: {
          DEFAULT: theme.spacing.container.mobile,
          sm: theme.spacing.container.tablet,
          md: theme.spacing.container.desktop,
          lg: theme.spacing.container.desktop,
          xl: theme.spacing.container.wide,
          '2xl': theme.spacing.container.wide,
        },
        screens: {
          sm: theme.breakpoints.sm,
          md: theme.breakpoints.md,
          lg: theme.breakpoints.lg,
          xl: theme.breakpoints.xl,
          '2xl': theme.breakpoints['2xl'],
        },
      },

      // Screens
      screens: {
        xs: theme.breakpoints.xs,
        sm: theme.breakpoints.sm,
        md: theme.breakpoints.md,
        lg: theme.breakpoints.lg,
        xl: theme.breakpoints.xl,
        '2xl': theme.breakpoints['2xl'],
        '3xl': theme.breakpoints['3xl'],
        '4xl': theme.breakpoints['4xl'],
      },

      // Background Images
      backgroundImage: {
        'gradient-brand': theme.colors.semantic.gradient.brand,
        'gradient-brand-hover': theme.colors.semantic.gradient.brandHover,
        'gradient-gold': theme.colors.semantic.gradient.gold,
        'gradient-hero': theme.colors.semantic.gradient.hero,
        'gradient-section': theme.colors.semantic.gradient.section,
        'gradient-card': theme.colors.semantic.gradient.card,
        'gradient-glow': theme.colors.semantic.gradient.glow,
        'gradient-text': theme.colors.semantic.gradient.text,
        'gradient-text-brand': theme.colors.semantic.gradient.textBrand,
        'grid-pattern': `linear-gradient(rgba(220, 38, 38, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.03) 1px, transparent 1px)`,
        'dot-pattern': `radial-gradient(circle, rgba(220, 38, 38, 0.06) 1px, transparent 1px)`,
        'noise-pattern': `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
      },
      backgroundSize: {
        'grid': '80px 80px',
        'grid-sm': '60px 60px',
        'dot': '24px 24px',
        'dot-lg': '40px 40px',
      },

      // Animation
      animation: {
        // Core animations
        'fade-in': 'fadeIn var(--duration-normal, 200ms) var(--ease-out, ease-out) forwards',
        'fade-out': 'fadeOut var(--duration-normal, 200ms) var(--ease-in, ease-in) forwards',
        'slide-up': 'slideUp var(--duration-slow, 300ms) var(--ease-out, ease-out) forwards',
        'slide-down': 'slideDown var(--duration-slow, 300ms) var(--ease-out, ease-out) forwards',
        'slide-left': 'slideLeft var(--duration-slow, 300ms) var(--ease-out, ease-out) forwards',
        'slide-right': 'slideRight var(--duration-slow, 300ms) var(--ease-out, ease-out) forwards',
        'scale-in': 'scaleIn var(--duration-normal, 200ms) var(--ease-out, ease-out) forwards',
        'scale-out': 'scaleOut var(--duration-normal, 200ms) var(--ease-in, ease-in) forwards',

        // Text reveals
        'text-reveal': 'textReveal var(--duration-cinematic, 1000ms) var(--ease-expo-out, cubic-bezier(0.16, 1, 0.3, 1)) forwards',
        'text-reveal-word': 'textRevealWord var(--duration-cinematic, 1000ms) var(--ease-expo-out, cubic-bezier(0.16, 1, 0.3, 1)) forwards',
        'text-reveal-char': 'textRevealChar var(--duration-cinematic, 1000ms) var(--ease-expo-out, cubic-bezier(0.16, 1, 0.3, 1)) forwards',

        // Cinematic
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'pulse-glow-slow': 'pulseGlow 5s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'shimmer-slow': 'shimmer 3s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'gradient-shift-slow': 'gradientShift 12s ease infinite',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'rotate-slower': 'rotateSlow 30s linear infinite',

        // Marquee
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marqueeReverse 30s linear infinite',
        'marquee-fast': 'marquee 20s linear infinite',
        'marquee-slow': 'marquee 40s linear infinite',

        // Scroll
        'scroll-left': 'scrollLeft 35s linear infinite',
        'scroll-right': 'scrollRight 35s linear infinite',
        'scroll-left-fast': 'scrollLeft 20s linear infinite',
        'scroll-right-fast': 'scrollRight 20s linear infinite',

        // Particles
        'particle': 'particle 15s linear infinite',
        'particle-slow': 'particle 20s linear infinite',
        'particle-fast': 'particle 10s linear infinite',

        // Reveal
        'reveal-up': 'revealUp var(--duration-slower, 500ms) var(--ease-expo-out, cubic-bezier(0.16, 1, 0.3, 1)) forwards',
        'reveal-down': 'revealDown var(--duration-slower, 500ms) var(--ease-expo-out, cubic-bezier(0.16, 1, 0.3, 1)) forwards',
        'reveal-left': 'revealLeft var(--duration-slower, 500ms) var(--ease-expo-out, cubic-bezier(0.16, 1, 0.3, 1)) forwards',
        'reveal-right': 'revealRight var(--duration-slower, 500ms) var(--ease-expo-out, cubic-bezier(0.16, 1, 0.3, 1)) forwards',
        'reveal-scale': 'revealScale var(--duration-slower, 500ms) var(--ease-expo-out, cubic-bezier(0.16, 1, 0.3, 1)) forwards',

        // Hover
        'hover-lift': 'hoverLift var(--duration-fast, 100ms) var(--ease-out, ease-out) forwards',
        'hover-glow': 'hoverGlow var(--duration-normal, 200ms) var(--ease-out, ease-out) forwards',

        // Focus
        'focus-ring': 'focusRing var(--duration-fast, 100ms) var(--ease-out, ease-out) forwards',
      },

      keyframes: {
        // Core
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        scaleOut: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.95)', opacity: '0' },
        },

        // Text reveals
        textReveal: {
          '0%': { opacity: '0', transform: 'translateY(1.2em)', filter: 'blur(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' },
        },
        textRevealWord: {
          '0%': { opacity: '0', transform: 'translateY(1em)', filter: 'blur(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' },
        },
        textRevealChar: {
          '0%': { opacity: '0', transform: 'translateY(0.5em) rotateX(-90deg)' },
          '100%': { opacity: '1', transform: 'translateY(0) rotateX(0)', filter: 'blur(0)' },
        },

        // Cinematic
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '25%': { transform: 'translateY(-15px) translateX(5px)' },
          '50%': { transform: 'translateY(-5px) translateX(-5px)' },
          '75%': { transform: 'translateY(-20px) translateX(0px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(220, 38, 38, 0.15), 0 0 40px rgba(220, 38, 38, 0.05)' },
          '50%': { boxShadow: '0 0 40px rgba(220, 38, 38, 0.3), 0 0 80px rgba(220, 38, 38, 0.1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },

        // Marquee
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },

        // Scroll
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.33%)' },
        },
        scrollRight: {
          '0%': { transform: 'translateX(-33.33%)' },
          '100%': { transform: 'translateX(0)' },
        },

        // Particles
        particle: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translate(100px, -800px) rotate(720deg)', opacity: '0' },
        },

        // Reveal
        revealUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        revealDown: {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        revealLeft: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        revealRight: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        revealScale: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },

        // Hover
        hoverLift: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-4px)' },
        },
        hoverGlow: {
          '0%': { boxShadow: '0 0 0 rgba(220, 38, 38, 0)' },
          '100%': { boxShadow: '0 0 30px rgba(220, 38, 38, 0.3), 0 0 60px rgba(220, 38, 38, 0.1)' },
        },

        // Focus
        focusRing: {
          '0%': { boxShadow: '0 0 0 0 rgba(248, 113, 113, 0)' },
          '100%': { boxShadow: '0 0 0 3px rgba(248, 113, 113, 0.4)' },
        },
      },

      // Transform Origin
      transformOrigin: {
        'center-top': 'center top',
        'center-bottom': 'center bottom',
        'left-center': 'left center',
        'right-center': 'right center',
      },

      // Scale
      scale: {
        '98': '0.98',
        '95': '0.95',
        '92': '0.92',
        '102': '1.02',
        '105': '1.05',
        '110': '1.1',
      },

      // Clip Path
      clipPath: {
        'polygon-reveal': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
        'polygon-hide': 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
        'circle-reveal': 'circle(100% at 50% 50%)',
        'circle-hide': 'circle(0% at 50% 50%)',
        'ellipse-reveal': 'ellipse(100% 100% at 50% 50%)',
        'ellipse-hide': 'ellipse(0% 0% at 50% 50%)',
      },

      // Mask
      maskImage: {
        'gradient-to-t': 'linear-gradient(to top, black, transparent)',
        'gradient-to-b': 'linear-gradient(to bottom, black, transparent)',
        'gradient-to-l': 'linear-gradient(to left, black, transparent)',
        'gradient-to-r': 'linear-gradient(to right, black, transparent)',
        'radial': 'radial-gradient(circle at center, black, transparent)',
      },
    },
  },
  plugins: [],
};

export default config;
