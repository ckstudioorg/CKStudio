import type React from 'react';
/**
 * useScrollReveal Hook
 * Intersection Observer based scroll reveal animations
 * Provides granular control over element visibility
 */

import { useEffect, useRef, useState, useCallback } from 'react';
import { useReducedMotion } from './useReducedMotion';

interface ScrollRevealOptions {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
  onEnter?: () => void;
  onExit?: () => void;
}

interface ScrollRevealReturn {
  ref: React.RefObject<HTMLElement | null>;
  isVisible: boolean;
  entry: IntersectionObserverEntry | null;
}

export function useScrollReveal(options: ScrollRevealOptions = {}): ScrollRevealReturn {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -10% 0px',
    triggerOnce = true,
    onEnter,
    onExit,
  } = options;

  const reducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const elementRef = useRef<HTMLElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const hasTriggered = useRef(false);

  const setRef = useCallback((node: HTMLElement | null) => {
    elementRef.current = node;
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setIsVisible(true);
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    // Cleanup previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setEntry(entry);

        if (entry.isIntersecting) {
          if (!hasTriggered.current || !triggerOnce) {
            setIsVisible(true);
            hasTriggered.current = true;
            onEnter?.();
          }
        } else if (!triggerOnce && hasTriggered.current) {
          setIsVisible(false);
          hasTriggered.current = false;
          onExit?.();
        }
      },
      { threshold, rootMargin }
    );

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold, rootMargin, triggerOnce, onEnter, onExit, reducedMotion]);

  return { ref: elementRef, isVisible, entry };
}

// Batch version for multiple elements
export function useScrollRevealBatch(
  count: number,
  options: ScrollRevealOptions = {}
): { refs: React.RefObject<HTMLElement | null>[]; isVisible: boolean[] } {
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState<boolean[]>(Array(count).fill(false));
  const refs = useRef<(HTMLElement | null)[]>(Array(count).fill(null));
  const observerRef = useRef<IntersectionObserver | null>(null);
  const hasTriggered = useRef<boolean[]>(Array(count).fill(false));

  const { threshold = 0.1, rootMargin = '0px 0px -10% 0px', triggerOnce = true } = options;

  useEffect(() => {
    if (reducedMotion) {
      setVisible(Array(count).fill(true));
      return;
    }

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = refs.current.indexOf(entry.target as HTMLElement);
          if (index === -1) return;

          if (entry.isIntersecting) {
            if (!hasTriggered.current[index] || !triggerOnce) {
              setVisible((prev) => {
                const next = [...prev];
                next[index] = true;
                return next;
              });
              hasTriggered.current[index] = true;
            }
          } else if (!triggerOnce && hasTriggered.current[index]) {
            setVisible((prev) => {
              const next = [...prev];
              next[index] = false;
              return next;
            });
            hasTriggered.current[index] = false;
          }
        });
      },
      { threshold, rootMargin }
    );

    refs.current.forEach((el) => {
      if (el) observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, reducedMotion, count]);

  const setRef = useCallback((index: number) => (el: HTMLElement | null) => {
    refs.current[index] = el;
  }, []);

  return {
    refs: refs.current.map((_, i) => ({ current: refs.current[i], setRef: setRef(i) } as React.RefObject<HTMLElement | null>)),
    isVisible: visible,
  };
}

export default useScrollReveal;