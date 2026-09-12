/**
 * useCustomCursor Hook
 * Manages custom cursor state and behavior
 * Desktop only, respects prefers-reduced-motion, context-aware
 */

import { useEffect, useRef, useState, useCallback } from 'react';
import { useReducedMotion } from './useReducedMotion';
import { easings } from '../motion/primitives';

export type CursorContext = 'default' | 'view' | 'play' | 'drag' | 'expand' | 'link' | 'text' | 'copy' | 'zoom';

interface CursorPosition {
  x: number;
  y: number;
}

interface CursorState {
  position: CursorPosition;
  context: CursorContext;
  isVisible: boolean;
  isHovering: boolean;
  scale: number;
}

const DEFAULT_POSITION = { x: 0, y: 0 };
const DEFAULT_STATE: CursorState = {
  position: DEFAULT_POSITION,
  context: 'default',
  isVisible: true,
  isHovering: false,
  scale: 1,
};

const CONTEXT_SELECTORS: Record<Exclude<CursorContext, 'default'>, string[]> = {
  view: ['[data-cursor="view"]', 'video', '.cursor-view'],
  play: ['[data-cursor="play"]', '.cursor-play', 'button[aria-label*="play" i]'],
  drag: ['[data-cursor="drag"]', '.cursor-drag', '[draggable="true"]'],
  expand: ['[data-cursor="expand"]', '.cursor-expand', '[data-fullscreen]'],
  link: ['a[href]', 'button[onclick]', '[role="link"]'],
  text: ['input', 'textarea', '[contenteditable="true"]', '.cursor-text'],
  copy: ['[data-cursor="copy"]', '.cursor-copy'],
  zoom: ['[data-cursor="zoom"]', '.cursor-zoom', 'img[data-zoom]'],
};

export function useCustomCursor(): CursorState & {
  setContext: (context: CursorContext) => void;
  hide: () => void;
  show: () => void;
} {
  const reducedMotion = useReducedMotion();
  const [state, setState] = useState<CursorState>(DEFAULT_STATE);
  const rafRef = useRef<number | null>(null);
  const targetPosition = useRef<CursorPosition>(DEFAULT_POSITION);
  const currentPosition = useRef<CursorPosition>(DEFAULT_POSITION);
  const isTouchDevice = useRef(false);
  const contextStack = useRef<CursorContext[]>(['default']);

  // Detect touch device
  useEffect(() => {
    isTouchDevice.current = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice.current) {
      setState((prev) => ({ ...prev, isVisible: false }));
    }
  }, []);

  // Smooth cursor animation loop
  useEffect(() => {
    if (reducedMotion || isTouchDevice.current) return;

    const animate = () => {
      // Spring interpolation
      const stiffness = 400;
      const damping = 30;
      const mass = 0.5;

      const dx = targetPosition.current.x - currentPosition.current.x;
      const dy = targetPosition.current.y - currentPosition.current.y;

      const accelerationX = (dx * stiffness) / mass;
      const accelerationY = (dy * stiffness) / mass;

      // Simple spring physics (approximation)
      currentPosition.current.x += dx * 0.15;
      currentPosition.current.y += dy * 0.15;

      setState((prev) => ({
        ...prev,
        position: { ...currentPosition.current },
      }));

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [reducedMotion]);

  // Mouse move handler
  useEffect(() => {
    if (reducedMotion || isTouchDevice.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      targetPosition.current = { x: e.clientX, y: e.clientY };
      setState((prev) => ({ ...prev, isVisible: true }));
    };

    const handleMouseLeave = () => {
      setState((prev) => ({ ...prev, isVisible: false }));
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [reducedMotion]);

  // Context detection - automatically detect cursor context from hovered elements
  useEffect(() => {
    if (reducedMotion || isTouchDevice.current) return;

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Check for explicit data-cursor attribute first
      const explicitCursor = target.closest('[data-cursor]')?.getAttribute('data-cursor') as CursorContext | null;
      if (explicitCursor && explicitCursor !== "default" && CONTEXT_SELECTORS[explicitCursor]) {
        contextStack.current.push(explicitCursor);
        setState((prev) => ({ ...prev, context: explicitCursor, isHovering: true }));
        return;
      }

      // Check for semantic elements
      for (const [context, selectors] of Object.entries(CONTEXT_SELECTORS)) {
        const matched = target.closest(selectors.join(', '));
        if (matched) {
          contextStack.current.push(context as CursorContext);
          setState((prev) => ({ ...prev, context: context as CursorContext, isHovering: true }));
          return;
        }
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Check if we're leaving a cursor context element
      const relatedTarget = e.relatedTarget as HTMLElement;
      let shouldPop = false;

      for (const [context, selectors] of Object.entries(CONTEXT_SELECTORS)) {
        const wasInContext = target.closest(selectors.join(', '));
        const stillInContext = relatedTarget?.closest(selectors.join(', '));
        if (wasInContext && !stillInContext) {
          shouldPop = true;
          break;
        }
      }

      if (shouldPop && contextStack.current.length > 1) {
        contextStack.current.pop();
        const newContext = contextStack.current[contextStack.current.length - 1];
        setState((prev) => ({
          ...prev,
          context: newContext,
          isHovering: contextStack.current.length > 1,
        }));
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, [reducedMotion]);

  const setContext = useCallback((context: CursorContext) => {
    contextStack.current = ['default', context];
    setState((prev) => ({ ...prev, context, isHovering: context !== 'default' }));
  }, []);

  const hide = useCallback(() => {
    setState((prev) => ({ ...prev, isVisible: false }));
  }, []);

  const show = useCallback(() => {
    setState((prev) => ({ ...prev, isVisible: true }));
  }, []);

  return {
    ...state,
    setContext,
    hide,
    show,
  };
}

export default useCustomCursor;