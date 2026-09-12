/**
 * useScrollDirection Hook
 * Detects scroll direction (up/down) and scroll position
 * Useful for header hide/show, scroll progress, etc.
 */

import { useEffect, useState, useRef, useCallback } from 'react';

interface ScrollState {
  direction: 'up' | 'down' | null;
  scrollY: number;
  previousScrollY: number;
  velocity: number;
  isScrolling: boolean;
}

export function useScrollDirection(threshold = 10): ScrollState {
  const [state, setState] = useState<ScrollState>({
    direction: null,
    scrollY: 0,
    previousScrollY: 0,
    velocity: 0,
    isScrolling: false,
  });

  const rafRef = useRef<number | null>(null);
  const lastScrollY = useRef(0);
  const lastTime = useRef(performance.now());

  const updateState = useCallback(() => {
    const currentScrollY = window.scrollY;
    const currentTime = performance.now();
    const timeDelta = currentTime - lastTime.current;

    const direction = currentScrollY > lastScrollY.current ? 'down' : 'up';
    const velocity = timeDelta > 0 ? Math.abs(currentScrollY - lastScrollY.current) / timeDelta : 0;

    setState({
      direction,
      scrollY: currentScrollY,
      previousScrollY: lastScrollY.current,
      velocity,
      isScrolling: Math.abs(currentScrollY - lastScrollY.current) > threshold,
    });

    lastScrollY.current = currentScrollY;
    lastTime.current = currentTime;
    rafRef.current = null;
  }, [threshold]);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(updateState);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateState]);

  return state;
}

export function useScrollY(): number {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
}

export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(Math.min(Math.max(scrollProgress, 0), 1));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
}

export default useScrollDirection;