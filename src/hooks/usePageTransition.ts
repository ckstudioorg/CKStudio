/**
 * usePageTransition Hook
 * Manages page-level transitions with Framer Motion
 * Handles route changes, loading states, and shared layout transitions
 */

import { useEffect, useState, useCallback } from 'react';
import type { Transition } from 'motion/react';
import { useLocation } from 'react-router-dom';
import { useReducedMotion } from './useReducedMotion';
import { transitions, easings } from '../motion/primitives';

interface PageTransitionState {
  isTransitioning: boolean;
  exitDirection: 'forward' | 'back' | null;
}

export function usePageTransition(): PageTransitionState & {
  onEnterComplete: () => void;
} {
  const location = useLocation();
  const reducedMotion = useReducedMotion();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [exitDirection, setExitDirection] = useState<'forward' | 'back' | null>(null);
  const previousPathname = useRef<string>('/');

  const onEnterComplete = useCallback(() => {
    setIsTransitioning(false);
    setExitDirection(null);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      previousPathname.current = location.pathname;
      return;
    }

    const isForward = location.pathname > previousPathname.current;
    setExitDirection(isForward ? 'forward' : 'back');
    setIsTransitioning(true);

    // Force a re-render to show exit animation
    const timer = setTimeout(() => {
      previousPathname.current = location.pathname;
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname, reducedMotion]);

  return {
    isTransitioning,
    exitDirection,
    onEnterComplete,
  };
}

// For AnimatePresence mode="wait" transitions
export function useRouteTransition(): {
  key: string;
  initial: { opacity: number; y: number };
  animate: { opacity: number; y: number };
  exit: { opacity: number; y: number };
  transition: Transition;
} {
  const location = useLocation();
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return {
      key: location.pathname,
      initial: { opacity: 1, y: 0 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 1, y: 0 },
      transition: { duration: 0, ease: 'linear' },
    };
  }

  return {
    key: location.pathname,
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: transitions.pageEnter,
  };
}

// Shared layout transition for elements that persist across routes
export function useSharedLayout(id: string): {
  layoutId: string;
  transition: { type: 'spring'; stiffness: number; damping: number };
} {
  return {
    layoutId: id,
    transition: { type: 'spring', stiffness: 300, damping: 30 },
  };
}

import { useRef } from 'react';

export default usePageTransition;