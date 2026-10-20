import '@testing-library/jest-dom/vitest';
import { afterEach, beforeEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';

// Defined up front too, because GSAP's ScrollTrigger reads matchMedia as soon as it's imported.
const mockMatchMedia = () => Object.defineProperty(window, 'matchMedia', { configurable: true, value: vi.fn((query: string) => ({
  matches: false, media: query, onchange: null,
  addListener: vi.fn(), removeListener: vi.fn(),
  addEventListener: vi.fn(), removeEventListener: vi.fn(), dispatchEvent: vi.fn(),
})) });
mockMatchMedia();

beforeEach(() => {
  mockMatchMedia();
  window.scrollTo = vi.fn();
  Element.prototype.scrollIntoView = vi.fn();
});
afterEach(() => { cleanup(); });
