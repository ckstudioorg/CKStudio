/**
 * CKStudio Design Tokens
 * Centralized design system configuration
 * All visual decisions live here
 */

export const colors = {
  // Core Brand Colors
  brand: {
    crimson: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
      950: '#450a0a',
    },
    gold: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
      950: '#451a03',
    },
  },

  // Semantic Colors
  semantic: {
    // Backgrounds - Deep Cinematic Darks
    bg: {
      primary: '#030303',      // Deepest black - main background
      secondary: '#0a0a0a',    // Slightly elevated - cards, sections
      tertiary: '#111111',     // Further elevated - hover states
      quaternary: '#1a1a1a',   // Borders, dividers
      overlay: 'rgba(3, 3, 3, 0.8)',  // Modal overlays
    },

    // Surfaces - Glassmorphism
    surface: {
      glass: 'rgba(255, 255, 255, 0.02)',
      glassHover: 'rgba(255, 255, 255, 0.04)',
      glassStrong: 'rgba(255, 255, 255, 0.06)',
      glassBorder: 'rgba(255, 255, 255, 0.06)',
      glassBorderHover: 'rgba(220, 38, 38, 0.15)',
      glassBorderActive: 'rgba(220, 38, 38, 0.3)',
    },

    // Text
    text: {
      primary: '#fafafa',      // Pure white - headlines
      secondary: '#d4d4d4',    // Body text
      tertiary: '#a3a3a3',     // Supporting text
      muted: '#737373',        // Captions, metadata
      inverted: '#030303',     // On light backgrounds
      brand: '#dc2626',        // Brand accent text
      gold: '#fbbf24',         // Gold accent text
    },

    // Interactive
    interactive: {
      primary: '#dc2626',      // Primary actions
      primaryHover: '#b91c1c',
      primaryActive: '#991b1b',
      secondary: 'transparent',
      secondaryBorder: 'rgba(255, 255, 255, 0.15)',
      secondaryBorderHover: '#dc2626',
      focus: '#f87171',        // Focus ring
    },

    // State
    state: {
      success: '#22c55e',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6',
    },

    // Gradients
    gradient: {
      brand: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
      brandHover: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
      gold: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
      hero: 'linear-gradient(180deg, #030303 0%, #0a0a0a 50%, #030303 100%)',
      section: 'linear-gradient(135deg, #030303 0%, #0a0a0a 25%, #080808 50%, #0a0a0a 75%, #030303 100%)',
      card: 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.01) 100%)',
      glow: 'radial-gradient(ellipse at center, rgba(220, 38, 38, 0.08) 0%, transparent 70%)',
      text: 'linear-gradient(135deg, #fafafa 0%, #d4d4d4 50%, #a3a3a3 100%)',
      textBrand: 'linear-gradient(135deg, #fafafa 0%, #dc2626 50%, #fafafa 100%)',
    },
  },
} as const;

export const typography = {
  fontFamily: {
    display: ['Outfit', 'system-ui', 'sans-serif'],
    sans: ['Inter', 'system-ui', 'sans-serif'],
    mono: ['JetBrains Mono', 'monospace'],
  },

  fontSize: {
    // Fluid typography using clamp
    // Mobile first, scales to desktop
    xs: 'clamp(0.7rem, 0.68rem + 0.1vw, 0.75rem)',      // 11.2-12px
    sm: 'clamp(0.8125rem, 0.78rem + 0.16vw, 0.875rem)', // 13-14px
    base: 'clamp(0.9375rem, 0.89rem + 0.24vw, 1rem)',   // 15-16px
    lg: 'clamp(1.0625rem, 1.0rem + 0.32vw, 1.125rem)',  // 17-18px
    xl: 'clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem)',      // 20-24px
    '2xl': 'clamp(1.5rem, 1.35rem + 0.75vw, 2rem)',     // 24-32px
    '3xl': 'clamp(2rem, 1.7rem + 1.5vw, 3rem)',         // 32-48px
    '4xl': 'clamp(2.5rem, 2rem + 2.5vw, 4rem)',         // 40-64px
    '5xl': 'clamp(3.5rem, 2.5rem + 5vw, 6rem)',         // 56-96px
    '6xl': 'clamp(4.5rem, 3rem + 7.5vw, 8rem)',         // 72-128px
  },

  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },

  lineHeight: {
    none: 1,
    tight: 1.1,
    snug: 1.25,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },

  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
    trackingWide: '0.15em',
    trackingWider: '0.2em',
    trackingWidest: '0.3em',
  },

  // Text Styles - Semantic combinations
  styles: {
    // Display / Headlines
    displayXl: {
      fontFamily: 'display',
      fontSize: '6xl',
      fontWeight: 'black',
      lineHeight: 'tight',
      letterSpacing: 'tighter',
    },
    displayLg: {
      fontFamily: 'display',
      fontSize: '5xl',
      fontWeight: 'black',
      lineHeight: 'tight',
      letterSpacing: 'tighter',
    },
    displayMd: {
      fontFamily: 'display',
      fontSize: '4xl',
      fontWeight: 'black',
      lineHeight: 'tight',
      letterSpacing: 'tight',
    },
    displaySm: {
      fontFamily: 'display',
      fontSize: '3xl',
      fontWeight: 'bold',
      lineHeight: 'snug',
      letterSpacing: 'tight',
    },

    // Headings
    h1: {
      fontFamily: 'display',
      fontSize: '4xl',
      fontWeight: 'black',
      lineHeight: 'tight',
      letterSpacing: 'tight',
    },
    h2: {
      fontFamily: 'display',
      fontSize: '3xl',
      fontWeight: 'bold',
      lineHeight: 'snug',
      letterSpacing: 'normal',
    },
    h3: {
      fontFamily: 'display',
      fontSize: '2xl',
      fontWeight: 'bold',
      lineHeight: 'snug',
      letterSpacing: 'normal',
    },
    h4: {
      fontFamily: 'display',
      fontSize: 'xl',
      fontWeight: 'semibold',
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    h5: {
      fontFamily: 'sans',
      fontSize: 'lg',
      fontWeight: 'semibold',
      lineHeight: 'normal',
      letterSpacing: 'wide',
    },
    h6: {
      fontFamily: 'sans',
      fontSize: 'base',
      fontWeight: 'semibold',
      lineHeight: 'normal',
      letterSpacing: 'wider',
    },

    // Body
    bodyLg: {
      fontFamily: 'sans',
      fontSize: 'lg',
      fontWeight: 'normal',
      lineHeight: 'relaxed',
      letterSpacing: 'normal',
    },
    body: {
      fontFamily: 'sans',
      fontSize: 'base',
      fontWeight: 'normal',
      lineHeight: 'relaxed',
      letterSpacing: 'normal',
    },
    bodySm: {
      fontFamily: 'sans',
      fontSize: 'sm',
      fontWeight: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },

    // UI
    label: {
      fontFamily: 'sans',
      fontSize: 'sm',
      fontWeight: 'medium',
      lineHeight: 'normal',
      letterSpacing: 'wide',
    },
    button: {
      fontFamily: 'sans',
      fontSize: 'base',
      fontWeight: 'semibold',
      lineHeight: 'normal',
      letterSpacing: 'wider',
    },
    caption: {
      fontFamily: 'sans',
      fontSize: 'xs',
      fontWeight: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'widest',
    },
    overline: {
      fontFamily: 'sans',
      fontSize: 'xs',
      fontWeight: 'semibold',
      lineHeight: 'normal',
      letterSpacing: 'trackingWidest',
      textTransform: 'uppercase',
    },
    code: {
      fontFamily: 'mono',
      fontSize: 'sm',
      fontWeight: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
  },
} as const;

export const spacing = {
  // Base unit: 4px
  // Scale: 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 10, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128
  0: '0',
  0.5: '0.125rem',   // 2px
  1: '0.25rem',      // 4px
  1.5: '0.375rem',   // 6px
  2: '0.5rem',       // 8px
  2.5: '0.625rem',   // 10px
  3: '0.75rem',      // 12px
  3.5: '0.875rem',   // 14px
  4: '1rem',         // 16px
  5: '1.25rem',      // 20px
  6: '1.5rem',       // 24px
  7: '1.75rem',      // 28px
  8: '2rem',         // 32px
  9: '2.25rem',      // 36px
  10: '2.5rem',      // 40px
  12: '3rem',        // 48px
  14: '3.5rem',      // 56px
  16: '4rem',        // 64px
  20: '5rem',        // 80px
  24: '6rem',        // 96px
  28: '7rem',        // 112px
  32: '8rem',        // 128px
  36: '9rem',        // 144px
  40: '10rem',       // 160px
  48: '12rem',       // 192px
  56: '14rem',       // 224px
  64: '16rem',       // 256px
  72: '18rem',       // 288px
  80: '20rem',       // 320px
  96: '24rem',       // 384px

  // Semantic spacing
  section: {
    mobile: '4rem',      // 64px
    tablet: '6rem',      // 96px
    desktop: '8rem',     // 128px
    wide: '12rem',       // 192px
  },
  container: {
    mobile: '1rem',      // 16px
    tablet: '1.5rem',    // 24px
    desktop: '2rem',     // 32px
    wide: '3rem',        // 48px
  },
  component: {
    xs: '0.5rem',        // 8px
    sm: '0.75rem',       // 12px
    md: '1rem',          // 16px
    lg: '1.5rem',        // 24px
    xl: '2rem',          // 32px
    '2xl': '3rem',       // 48px
  },
} as const;

export const borderRadius = {
  none: '0',
  sm: '0.25rem',       // 4px
  md: '0.375rem',      // 6px
  lg: '0.5rem',        // 8px
  xl: '0.75rem',       // 12px
  '2xl': '1rem',       // 16px
  '3xl': '1.5rem',     // 24px
  full: '9999px',
  circle: '50%',
} as const;

export const shadows = {
  // Layered shadow system for depth
  none: 'none',
  xs: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
  sm: '0 2px 4px -1px rgba(0, 0, 0, 0.4), 0 1px 2px -1px rgba(0, 0, 0, 0.3)',
  md: '0 4px 8px -2px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.3)',
  lg: '0 10px 20px -5px rgba(0, 0, 0, 0.5), 0 4px 8px -4px rgba(0, 0, 0, 0.3)',
  xl: '0 20px 40px -10px rgba(0, 0, 0, 0.6), 0 8px 16px -8px rgba(0, 0, 0, 0.4)',
  '2xl': '0 30px 60px -15px rgba(0, 0, 0, 0.7), 0 12px 24px -12px rgba(0, 0, 0, 0.5)',

  // Brand shadows
  brand: {
    sm: '0 0 0 1px rgba(220, 38, 38, 0.2), 0 2px 8px rgba(220, 38, 38, 0.15)',
    md: '0 0 0 1px rgba(220, 38, 38, 0.2), 0 8px 24px rgba(220, 38, 38, 0.2)',
    lg: '0 0 0 1px rgba(220, 38, 38, 0.3), 0 16px 48px rgba(220, 38, 38, 0.25)',
    glow: '0 0 30px rgba(220, 38, 38, 0.2), 0 0 60px rgba(220, 38, 38, 0.1)',
    glowStrong: '0 0 40px rgba(220, 38, 38, 0.3), 0 0 80px rgba(220, 38, 38, 0.15), 0 0 120px rgba(220, 38, 38, 0.05)',
  },

  // Glass shadows
  glass: {
    sm: '0 4px 16px rgba(0, 0, 0, 0.3)',
    md: '0 8px 32px rgba(0, 0, 0, 0.4)',
    lg: '0 16px 48px rgba(0, 0, 0, 0.5)',
  },

  // Inner shadows
  inset: {
    sm: 'inset 0 1px 2px rgba(0, 0, 0, 0.3)',
    md: 'inset 0 2px 8px rgba(0, 0, 0, 0.4)',
    lg: 'inset 0 4px 16px rgba(0, 0, 0, 0.5)',
    brand: 'inset 0 0 0 1px rgba(220, 38, 38, 0.1)',
  },
} as const;

export const transitions = {
  duration: {
    instant: '50ms',
    fast: '100ms',
    normal: '200ms',
    slow: '300ms',
    slower: '500ms',
    slowest: '700ms',
    cinematic: '1000ms',
    epic: '1500ms',
  },
  easing: {
    linear: 'linear',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    // Custom easings
    expoOut: 'cubic-bezier(0.16, 1, 0.3, 1)',
    expoInOut: 'cubic-bezier(0.87, 0, 0.13, 1)',
    circOut: 'cubic-bezier(0.08, 0.82, 0.17, 1)',
    backOut: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    springGentle: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    springSnappy: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
} as const;

export const breakpoints = {
  xs: '320px',
  sm: '375px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1440px',
  '3xl': '1920px',
  '4xl': '2560px',
} as const;

export const zIndex = {
  base: 0,
  dropdown: 100,
  sticky: 200,
  fixed: 300,
  modalBackdrop: 400,
  modal: 500,
  popover: 600,
  tooltip: 700,
  toast: 800,
  cursor: 9999,
  loader: 10000,
} as const;

export const blur = {
  none: '0',
  sm: '4px',
  md: '8px',
  lg: '16px',
  xl: '24px',
  '2xl': '40px',
  '3xl': '64px',
} as const;

export const opacity = {
  0: '0',
  5: '0.05',
  10: '0.1',
  20: '0.2',
  30: '0.3',
  40: '0.4',
  50: '0.5',
  60: '0.6',
  70: '0.7',
  80: '0.8',
  90: '0.9',
  95: '0.95',
  100: '1',
} as const;

// Container widths
export const containers = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1440px',
  full: '100%',
} as const;

// Grid
export const grid = {
  columns: 12,
  gutter: spacing[4], // 16px
  gutterLg: spacing[6], // 24px
} as const;

// Animation tokens for Framer Motion
export const motion = {
  // Spring configurations
  spring: {
    gentle: { type: 'spring', stiffness: 120, damping: 18, mass: 1 },
    snappy: { type: 'spring', stiffness: 300, damping: 25, mass: 1 },
    bouncy: { type: 'spring', stiffness: 400, damping: 20, mass: 1 },
    magnetic: { type: 'spring', stiffness: 150, damping: 15, mass: 0.1 },
    cursor: { type: 'spring', stiffness: 400, damping: 30, mass: 0.5 },
    cursorOuter: { type: 'spring', stiffness: 200, damping: 20, mass: 0.8 },
  },

  // Duration-based transitions
  transition: {
    instant: { duration: 0.05, ease: 'easeOut' },
    fast: { duration: 0.1, ease: 'easeOut' },
    normal: { duration: 0.2, ease: 'easeOut' },
    slow: { duration: 0.3, ease: 'easeOut' },
    slower: { duration: 0.5, ease: 'easeOut' },
    slowest: { duration: 0.7, ease: 'easeOut' },
    cinematic: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    epic: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
  },

  // Stagger delays
  stagger: {
    fast: 0.03,
    normal: 0.06,
    slow: 0.1,
    slower: 0.15,
    section: 0.2,
  },

  // Reveal distances
  reveal: {
    close: 20,
    normal: 40,
    far: 60,
    epic: 100,
  },

  // Scale values
  scale: {
    micro: 0.98,
    subtle: 0.95,
    normal: 0.9,
    pressed: 0.92,
    hover: 1.02,
    active: 1.05,
  },
} as const;

// Complete theme object for Tailwind
export const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  transitions,
  breakpoints,
  zIndex,
  blur,
  opacity,
  containers,
  grid,
  motion,
} as const;

export type Theme = typeof theme;
export type Colors = typeof colors;
export type Typography = typeof typography;
export type Spacing = typeof spacing;
export type Motion = typeof motion;

// CSS Custom Properties Generator
export function generateCSSVariables(): string {
  const cssVars: string[] = [];

  // Colors
  Object.entries(colors.brand.crimson).forEach(([key, value]) => {
    cssVars.push(`  --color-crimson-${key}: ${value};`);
  });
  Object.entries(colors.brand.gold).forEach(([key, value]) => {
    cssVars.push(`  --color-gold-${key}: ${value};`);
  });
  Object.entries(colors.semantic.bg).forEach(([key, value]) => {
    cssVars.push(`  --color-bg-${key}: ${value};`);
  });
  Object.entries(colors.semantic.surface).forEach(([key, value]) => {
    cssVars.push(`  --color-surface-${key}: ${value};`);
  });
  Object.entries(colors.semantic.text).forEach(([key, value]) => {
    cssVars.push(`  --color-text-${key}: ${value};`);
  });
  Object.entries(colors.semantic.interactive).forEach(([key, value]) => {
    cssVars.push(`  --color-interactive-${key}: ${value};`);
  });
  Object.entries(colors.semantic.gradient).forEach(([key, value]) => {
    cssVars.push(`  --gradient-${key}: ${value};`);
  });

  // Spacing
  Object.entries(spacing).forEach(([key, value]) => {
    if (typeof value === 'string' && value.endsWith('rem')) {
      cssVars.push(`  --space-${key}: ${value};`);
    }
  });

  // Typography
  Object.entries(typography.fontSize).forEach(([key, value]) => {
    cssVars.push(`  --text-${key}: ${value};`);
  });

  // Border radius
  Object.entries(borderRadius).forEach(([key, value]) => {
    cssVars.push(`  --radius-${key}: ${value};`);
  });

  // Transitions
  Object.entries(transitions.duration).forEach(([key, value]) => {
    cssVars.push(`  --duration-${key}: ${value};`);
  });

  // Z-index
  Object.entries(zIndex).forEach(([key, value]) => {
    cssVars.push(`  --z-${key}: ${value};`);
  });

  return `:root {\n${cssVars.join('\n')}\n}`;
}

export default theme;