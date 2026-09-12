import type React from 'react';
/**
 * useIntersectionObserver Hook
 * Generic intersection observer with TypeScript support
 * Flexible API for various intersection-based behaviors
 */

import { useEffect, useRef, useState, useCallback } from 'react';

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
  onEnter?: (entry: IntersectionObserverEntry) => void;
  onExit?: (entry: IntersectionObserverEntry) => void;
  onChange?: (entry: IntersectionObserverEntry) => void;
}

interface UseIntersectionObserverReturn<T extends Element = HTMLElement> {
  ref: React.RefObject<T | null>;
  isIntersecting: boolean;
  entry: IntersectionObserverEntry | null;
  observe: (element: T) => void;
  unobserve: (element: T) => void;
}

export function useIntersectionObserver<T extends Element = HTMLElement>(
  options: IntersectionObserverOptions = {}
): UseIntersectionObserverReturn<T> {
  const {
    root = null,
    rootMargin = '0px',
    threshold = 0.1,
    triggerOnce = false,
    onEnter,
    onExit,
    onChange,
  } = options;

  const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const elementRef = useRef<T | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const hasTriggered = useRef(false);

  const setRef = useCallback((node: T | null) => {
    elementRef.current = node;
  }, []);

  const observe = useCallback((element: T) => {
    if (observerRef.current) {
      observerRef.current.observe(element);
    }
  }, []);

  const unobserve = useCallback((element: T) => {
    if (observerRef.current) {
      observerRef.current.unobserve(element);
    }
  }, []);

  useEffect(() => {
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
        onChange?.(entry);

        if (entry.isIntersecting) {
          if (!hasTriggered.current || !triggerOnce) {
            setIsIntersecting(true);
            hasTriggered.current = true;
            onEnter?.(entry);
          }
        } else if (!triggerOnce) {
          setIsIntersecting(false);
          hasTriggered.current = false;
          onExit?.(entry);
        }
      },
      { root, rootMargin, threshold }
    );

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [root, rootMargin, threshold, triggerOnce, onEnter, onExit, onChange]);

  return {
    ref: { current: elementRef.current, setRef } as React.RefObject<T | null>,
    isIntersecting,
    entry,
    observe,
    unobserve,
  };
}

// Multiple elements observer
export function useIntersectionObserverBatch<T extends Element = HTMLElement>(
  count: number,
  options: IntersectionObserverOptions = {}
): {
  refs: Array<React.RefObject<T | null>>;
  isIntersecting: boolean[];
  entries: (IntersectionObserverEntry | null)[];
} {
  const [intersecting, setIntersecting] = useState<boolean[]>(Array(count).fill(false));
  const [entries, setEntries] = useState<(IntersectionObserverEntry | null)[]>(Array(count).fill(null));
  const elementsRef = useRef<(T | null)[]>(Array(count).fill(null));
  const observerRef = useRef<IntersectionObserver | null>(null);
  const hasTriggered = useRef<boolean[]>(Array(count).fill(false));

  const { root = null, rootMargin = '0px', threshold = 0.1, triggerOnce = false, onChange } = options;

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = elementsRef.current.indexOf(entry.target as T);
          if (index === -1) return;

          setEntries((prev) => {
            const next = [...prev];
            next[index] = entry;
            return next;
          });

          onChange?.(entry);

          if (entry.isIntersecting) {
            if (!hasTriggered.current[index] || !triggerOnce) {
              setIntersecting((prev) => {
                const next = [...prev];
                next[index] = true;
                return next;
              });
              hasTriggered.current[index] = true;
            }
          } else if (!triggerOnce) {
            setIntersecting((prev) => {
              const next = [...prev];
              next[index] = false;
              return next;
            });
            hasTriggered.current[index] = false;
          }
        });
      },
      { root, rootMargin, threshold }
    );

    elementsRef.current.forEach((el) => {
      if (el) observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [root, rootMargin, threshold, triggerOnce, onChange, count]);

  const setRef = useCallback((index: number) => (el: T | null) => {
    elementsRef.current[index] = el;
  }, []);

  const refs = Array.from({ length: count }, (_, i) => ({
    current: elementsRef.current[i],
    setRef: setRef(i),
  } as React.RefObject<T | null>));

  return { refs, isIntersecting: intersecting, entries };
}

// Scroll progress observer for a specific element
export function useElementScrollProgress<T extends HTMLElement = HTMLElement>(
  options: { rootMargin?: string } = {}
): { ref: React.RefObject<T | null>; progress: number; isVisible: boolean } {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<T | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const { rootMargin = '0px' } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);

        if (entry.isIntersecting) {
          // Calculate progress based on intersection ratio
          const ratio = entry.intersectionRatio;
          setProgress(ratio);
        }
      },
      { rootMargin, threshold: Array.from({ length: 101 }, (_, i) => i / 100) }
    );

    observerRef.current.observe(element);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [rootMargin]);

  const setRef = useCallback((node: T | null) => {
    elementRef.current = node;
  }, []);

  return { ref: { current: elementRef.current, setRef } as React.RefObject<T | null>, progress, isVisible };
}

export default useIntersectionObserver;