import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | null = null;

const prefersReducedMotion = () =>
    typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/** Starts smooth (inertia) scrolling, kept in sync with GSAP scroll animations. Returns a stop function. */
export function startSmoothScroll(): () => void {
    if (lenis || prefersReducedMotion()) return () => {};

    const instance = new Lenis({ autoRaf: false, anchors: true, lerp: 0.1 });
    lenis = instance;
    instance.on('scroll', ScrollTrigger.update);

    const tick = (time: number) => instance.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
        gsap.ticker.remove(tick);
        instance.destroy();
        lenis = null;
    };
}

/** Smoothly scrolls to a section by id, with or without smooth scrolling active. */
export function scrollToSection(id: string): void {
    const element = document.getElementById(id);
    if (!element) return;
    if (lenis) lenis.scrollTo(element);
    else element.scrollIntoView({ behavior: 'smooth' });
}

/** Jumps straight to the top, e.g. when changing page. */
export function resetScroll(): void {
    if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
    else window.scrollTo(0, 0);
}

export { gsap, ScrollTrigger };
