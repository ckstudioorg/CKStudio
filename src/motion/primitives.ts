/**
 * CKStudio Motion Primitives
 * Reusable Framer Motion variants and transitions
 * Consistent motion language across the entire site
 */

import { Variants, Transition } from 'motion/react';
import { motion } from '../config/theme';

// ============================================
// EASING CURVES
// ============================================

export const easings = {
  // Expo - Premium, cinematic feel
  expoOut: [0.16, 1, 0.3, 1] as const,
  expoIn: [0.7, 0, 0.84, 0] as const,
  expoInOut: [0.87, 0, 0.13, 1] as const,

  // Circ - Smooth, organic
  circOut: [0.08, 0.82, 0.17, 1] as const,
  circIn: [0.55, 0, 0.72, 0.68] as const,
  circInOut: [0.85, 0, 0.15, 1] as const,

  // Back - Playful, bouncy
  backOut: [0.34, 1.56, 0.64, 1] as const,
  backIn: [0.6, -0.28, 0.74, 0.05] as const,
  backInOut: [0.68, -0.55, 0.27, 1.55] as const,

  // Standard
  easeOut: 'easeOut',
  easeIn: 'easeIn',
  easeInOut: 'easeInOut',
  linear: 'linear',

  // Spring presets (for Framer Motion spring config)
  springGentle: { stiffness: 120, damping: 18, mass: 1 },
  springSnappy: { stiffness: 300, damping: 25, mass: 1 },
  springBouncy: { stiffness: 400, damping: 20, mass: 1 },
  springMagnetic: { stiffness: 150, damping: 15, mass: 0.1 },
  springCursor: { stiffness: 400, damping: 30, mass: 0.5 },
  springCursorOuter: { stiffness: 200, damping: 20, mass: 0.8 },
} as const;

// ============================================
// DURATIONS (seconds)
// ============================================

export const durations = {
  instant: 0.05,
  fast: 0.1,
  normal: 0.2,
  slow: 0.3,
  slower: 0.5,
  slowest: 0.7,
  cinematic: 1,
  epic: 1.5,
} as const;

// ============================================
// STAGGER DELAYS
// ============================================

export const stagger = {
  fast: 0.03,
  normal: 0.06,
  slow: 0.1,
  slower: 0.15,
  section: 0.2,
} as const;

// ============================================
// REVEAL DISTANCES
// ============================================

export const revealDistance = {
  close: 20,
  normal: 40,
  far: 60,
  epic: 100,
} as const;

// ============================================
// SCALE VALUES
// ============================================

export const scale = {
  micro: 0.98,
  subtle: 0.95,
  normal: 0.9,
  pressed: 0.92,
  hover: 1.02,
  active: 1.05,
} as const;

// ============================================
// BASE TRANSITION CONFIGS
// ============================================

export const transitions = {
  // Duration-based
  instant: { duration: durations.instant, ease: easings.easeOut },
  fast: { duration: durations.fast, ease: easings.easeOut },
  normal: { duration: durations.normal, ease: easings.easeOut },
  slow: { duration: durations.slow, ease: easings.easeOut },
  slower: { duration: durations.slower, ease: easings.easeOut },
  slowest: { duration: durations.slowest, ease: easings.easeOut },
  cinematic: { duration: durations.cinematic, ease: easings.expoOut },
  epic: { duration: durations.epic, ease: easings.expoOut },

  // Spring-based
  springGentle: easings.springGentle,
  springSnappy: easings.springSnappy,
  springBouncy: easings.springBouncy,
  springMagnetic: easings.springMagnetic,
  springCursor: easings.springCursor,
  springCursorOuter: easings.springCursorOuter,

  // Specific use cases
  pageEnter: { duration: durations.cinematic, ease: easings.expoOut },
  pageExit: { duration: durations.slower, ease: easings.expoIn },
  sectionReveal: { duration: durations.slower, ease: easings.expoOut },
  textReveal: { duration: durations.cinematic, ease: easings.expoOut },
  imageReveal: { duration: durations.slower, ease: easings.expoOut },
  hover: { duration: durations.fast, ease: easings.easeOut },
  tap: { duration: durations.instant, ease: easings.easeOut },
  focus: { duration: durations.fast, ease: easings.easeOut },
} as const;

// ============================================
// REUSABLE VARIANTS
// ============================================

// Fade
export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitions.normal },
  exit: { opacity: 0, transition: transitions.fast },
};

// Fade with slide
export const fadeSlideVariants = (direction: 'up' | 'down' | 'left' | 'right' = 'up', distance: number = revealDistance.normal): Variants => {
  const transforms = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  return {
    hidden: { opacity: 0, ...transforms[direction] },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: transitions.slower,
    },
    exit: {
      opacity: 0,
      ...transforms[direction],
      transition: transitions.fast,
    },
  };
};

// Scale + Fade
export const scaleFadeVariants = (initialScale = scale.normal): Variants => ({
  hidden: { opacity: 0, scale: initialScale },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.slower,
  },
  exit: {
    opacity: 0,
    scale: initialScale,
    transition: transitions.fast,
  },
});

// Text Reveal - Line by line
export const textLineVariants: Variants = {
  hidden: { opacity: 0, y: '1.2em', filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0)',
    transition: transitions.cinematic,
  },
};

// Text Reveal - Word by word
export const textWordVariants: Variants = {
  hidden: { opacity: 0, y: '1em', filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0)',
    transition: { ...transitions.cinematic, duration: 0.8 },
  },
};

// Text Reveal - Character by character
export const textCharVariants: Variants = {
  hidden: { opacity: 0, y: '0.5em', rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { ...transitions.cinematic, duration: 0.6 },
  },
};

// Stagger Container
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger.normal,
      delayChildren: 0.1,
    },
  },
};

// Stagger Item
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.slower,
  },
};

// Page Transition
export const pageVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: transitions.pageEnter },
  exit: { opacity: 0, y: -20, transition: transitions.pageExit },
};

// Section Reveal
export const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger.section,
      delayChildren: 0.2,
    },
  },
};

// Card Hover
export const cardHoverVariants = {
  initial: { y: 0, boxShadow: '0 0 0 rgba(220, 38, 38, 0)' },
  hover: {
    y: -8,
    boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.5), 0 0 30px rgba(220, 38, 38, 0.2)',
    transition: transitions.hover,
  },
  tap: {
    scale: scale.pressed,
    transition: transitions.tap,
  },
};

// Magnetic Button
export const magneticVariants = {
  initial: { x: 0, y: 0 },
  hover: {
    x: 0,
    y: 0,
    transition: easings.springMagnetic,
  },
};

// Button Press
export const buttonPressVariants = {
  hover: { scale: scale.hover, transition: transitions.hover },
  tap: { scale: scale.pressed, transition: transitions.tap },
};

// Icon Pulse
export const iconPulseVariants: Variants = {
  idle: { scale: 1 },
  pulse: {
    scale: [1, 1.1, 1],
    transition: { duration: 2, repeat: Infinity, ease: easings.easeInOut },
  },
};

// Float Animation
export const floatVariants: Variants = {
  animate: {
    y: [0, -15, -5, -20, 0],
    x: [0, 5, -5, 0, 0],
    transition: { duration: 6, repeat: Infinity, ease: easings.easeInOut },
  },
};

// Glow Pulse
export const glowPulseVariants: Variants = {
  animate: {
    boxShadow: [
      '0 0 20px rgba(220, 38, 38, 0.15), 0 0 40px rgba(220, 38, 38, 0.05)',
      '0 0 40px rgba(220, 38, 38, 0.3), 0 0 80px rgba(220, 38, 38, 0.1)',
      '0 0 20px rgba(220, 38, 38, 0.15), 0 0 40px rgba(220, 38, 38, 0.05)',
    ],
    transition: { duration: 3, repeat: Infinity, ease: easings.easeInOut },
  },
};

// Shimmer
export const shimmerVariants: Variants = {
  animate: {
    backgroundPosition: ['-200% 0', '200% 0'],
    transition: { duration: 2, repeat: Infinity, ease: 'linear' },
  },
};

// Gradient Shift
export const gradientShiftVariants: Variants = {
  animate: {
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
  },
};

// Marquee
export const marqueeVariants: Variants = {
  animate: {
    x: ['0%', '-50%'],
    transition: { duration: 30, repeat: Infinity, ease: 'linear' },
  },
};

export const marqueeReverseVariants: Variants = {
  animate: {
    x: ['-50%', '0%'],
    transition: { duration: 30, repeat: Infinity, ease: 'linear' },
  },
};

// Scroll Reveal
export const scrollRevealVariants = (direction: 'up' | 'down' | 'left' | 'right' = 'up', distance: number = revealDistance.normal): Variants => ({
  hidden: { opacity: 0, ...({ up: { y: distance }, down: { y: -distance }, left: { x: distance }, right: { x: -distance } })[direction] },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: transitions.sectionReveal,
  },
});

// Parallax Layer
export const parallaxVariants = (speed: number): Variants => ({
  animate: (scrollY: number) => ({
    y: scrollY * speed,
    transition: { duration: 0.1, ease: 'linear' },
  }),
});

// Counter Animation
export const counterVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (end: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 2, ease: easings.expoOut },
  }),
};

// Modal/Overlay
export const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { ...transitions.slower, ease: easings.backOut },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: transitions.fast,
  },
};

export const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitions.normal },
  exit: { opacity: 0, transition: transitions.normal },
};

// Drawer/Slide Panel
export const drawerVariants = (direction: 'left' | 'right' | 'top' | 'bottom' = 'right'): Variants => {
  const transforms = {
    left: { x: '-100%' },
    right: { x: '100%' },
    top: { y: '-100%' },
    bottom: { y: '100%' },
  };

  return {
    hidden: { opacity: 0, ...transforms[direction] },
    visible: { opacity: 1, x: 0, y: 0, transition: transitions.slower },
    exit: { opacity: 0, ...transforms[direction], transition: transitions.fast },
  };
};

// Accordion
export const accordionVariants: Variants = {
  closed: { height: 0, opacity: 0 },
  open: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.3, ease: easings.expoOut },
  },
};

// Tab Indicator
export const tabIndicatorVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
  }),
};

// Carousel/Slider
export const carouselVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

// Tooltip
export const tooltipVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { ...transitions.fast, ease: easings.backOut },
  },
};

// Loading Spinner
export const spinnerVariants: Variants = {
  animate: {
    rotate: 360,
    transition: { duration: 1, repeat: Infinity, ease: 'linear' },
  },
};

// Skeleton Loading
export const skeletonVariants: Variants = {
  animate: {
    backgroundPosition: ['-200% 0', '200% 0'],
    transition: { duration: 1.5, repeat: Infinity, ease: 'linear' },
  },
};

// ============================================
// HOOK FACTORIES - For dynamic variants
// ============================================

/**
 * Creates a slide variant with custom distance and direction
 */
export function createSlideVariant(
  direction: 'up' | 'down' | 'left' | 'right',
  distance: number = revealDistance.normal,
  customTransition?: Transition
): Variants {
  const transform = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  return {
    hidden: { opacity: 0, ...transform[direction] },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: customTransition || transitions.slower,
    },
    exit: {
      opacity: 0,
      ...transform[direction],
      transition: transitions.fast,
    },
  };
}

/**
 * Creates a stagger container with custom stagger delay
 */
export function createStaggerContainer(staggerDelay: number = stagger.normal, delayChildren = 0.1): Variants {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  };
}

/**
 * Creates a reveal variant for scroll-triggered animations
 */
export function createRevealVariant(
  direction: 'up' | 'down' | 'left' | 'right' = 'up',
  distance: number = revealDistance.normal,
  customTransition?: Transition
): Variants {
  return scrollRevealVariants(direction, distance);
}

/**
 * Creates a page transition variant with custom timing
 */
export function createPageTransition(
  enterDuration: number = durations.cinematic,
  exitDuration: number = durations.slower
): Variants {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: enterDuration, ease: easings.expoOut } },
    exit: { opacity: 0, y: -20, transition: { duration: exitDuration, ease: easings.expoIn } },
  };
}

export default {
  easings,
  durations,
  stagger,
  revealDistance,
  scale,
  transitions,
  fadeVariants,
  fadeSlideVariants,
  scaleFadeVariants,
  textLineVariants,
  textWordVariants,
  textCharVariants,
  staggerContainer,
  staggerItem,
  pageVariants,
  sectionVariants,
  cardHoverVariants,
  magneticVariants,
  buttonPressVariants,
  iconPulseVariants,
  floatVariants,
  glowPulseVariants,
  shimmerVariants,
  gradientShiftVariants,
  marqueeVariants,
  marqueeReverseVariants,
  scrollRevealVariants,
  parallaxVariants,
  counterVariants,
  modalVariants,
  backdropVariants,
  drawerVariants,
  accordionVariants,
  tabIndicatorVariants,
  carouselVariants,
  tooltipVariants,
  spinnerVariants,
  skeletonVariants,
  createSlideVariant,
  createStaggerContainer,
  createRevealVariant,
  createPageTransition,
};