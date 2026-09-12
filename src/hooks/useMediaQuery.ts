/**
 * useMediaQuery Hook
 * Reactive media query matching
 * SSR-safe with proper cleanup
 */

import { useEffect, useState, useCallback, useRef } from 'react';



export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);
  const mediaQueryRef = useRef<MediaQueryList>(null);

  const checkMatch = useCallback(() => {
    if (typeof window !== 'undefined' && mediaQueryRef.current) {
      setMatches(mediaQueryRef.current.matches);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    mediaQueryRef.current = window.matchMedia(query);
    setMatches(mediaQueryRef.current.matches);

    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQueryRef.current.addEventListener('change', handler);
    return () => mediaQueryRef.current?.removeEventListener('change', handler);
  }, [query]);

  return matches;
}

// Breakpoint hooks
export const useBreakpoint = () => {
  const isXs = useMediaQuery('(max-width: 374px)');
  const isSm = useMediaQuery('(min-width: 375px) and (max-width: 767px)');
  const isMd = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
  const isLg = useMediaQuery('(min-width: 1024px) and (max-width: 1279px)');
  const isXl = useMediaQuery('(min-width: 1280px) and (max-width: 1439px)');
  const is2Xl = useMediaQuery('(min-width: 1440px) and (max-width: 1919px)');
  const is3Xl = useMediaQuery('(min-width: 1920px)');

  const current = isXs ? 'xs' : isSm ? 'sm' : isMd ? 'md' : isLg ? 'lg' : isXl ? 'xl' : is2Xl ? '2xl' : '3xl';

  return {
    current,
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
    is2Xl,
    is3Xl,
    isMobile: isXs || isSm,
    isTablet: isMd,
    isDesktop: isLg || isXl || is2Xl || is3Xl,
    isLargeDesktop: is2Xl || is3Xl,
    // Min-width queries
    smUp: useMediaQuery('(min-width: 375px)'),
    mdUp: useMediaQuery('(min-width: 768px)'),
    lgUp: useMediaQuery('(min-width: 1024px)'),
    xlUp: useMediaQuery('(min-width: 1280px)'),
    '2xlUp': useMediaQuery('(min-width: 1440px)'),
    // Max-width queries
    smDown: useMediaQuery('(max-width: 374px)'),
    mdDown: useMediaQuery('(max-width: 767px)'),
    lgDown: useMediaQuery('(max-width: 1023px)'),
    xlDown: useMediaQuery('(max-width: 1279px)'),
    '2xlDown': useMediaQuery('(max-width: 1439px)'),
  };
};

// Pointer capability
export const usePointerCapability = () => {
  const isFine = useMediaQuery('(pointer: fine)');
  const isCoarse = useMediaQuery('(pointer: coarse)');
  const isNone = useMediaQuery('(pointer: none)');

  return {
    isFine,
    isCoarse,
    isNone,
    // Hover capability
    canHover: useMediaQuery('(hover: hover)'),
    cannotHover: useMediaQuery('(hover: none)'),
  };
};

// Reduced motion (already in useReducedMotion, but included for completeness)
export const usePrefersReducedMotion = () => useMediaQuery('(prefers-reduced-motion: reduce)');

// Color scheme preference
export const usePrefersColorScheme = () => {
  const isDark = useMediaQuery('(prefers-color-scheme: dark)');
  const isLight = useMediaQuery('(prefers-color-scheme: light)');

  return { isDark, isLight, current: isDark ? 'dark' : 'light' };
};

// High contrast preference
export const usePrefersHighContrast = () => useMediaQuery('(prefers-contrast: high)');

// Reduced data preference
export const usePrefersReducedData = () => useMediaQuery('(prefers-reduced-data: reduce)');

// Orientation
export const useOrientation = () => {
  const isPortrait = useMediaQuery('(orientation: portrait)');
  const isLandscape = useMediaQuery('(orientation: landscape)');

  return { isPortrait, isLandscape, current: isPortrait ? 'portrait' : 'landscape' };
};

// Print media
export const useIsPrinting = () => useMediaQuery('print');

// Combined device detection
export const useDevice = () => {
  const { isFine, isCoarse, canHover } = usePointerCapability();
  const { isMobile, isTablet, isDesktop } = useBreakpoint();
  const reducedMotion = usePrefersReducedMotion();

  return {
    isMobile,
    isTablet,
    isDesktop,
    isTouch: isCoarse,
    isMouse: isFine,
    canHover,
    reducedMotion,
    // Touch device with hover (rare, e.g. Surface with mouse)
    isTouchWithHover: isCoarse && canHover,
    // Mouse device without hover (rare)
    isMouseWithoutHover: isFine && !canHover,
  };
};

export default useMediaQuery;