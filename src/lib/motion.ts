import { useLayoutEffect, type DependencyList, type RefObject } from 'react';
import { SplitText } from 'gsap/SplitText';
import { gsap } from './smoothScroll';
import { alreadyOnScreen } from './prerendered';

gsap.registerPlugin(SplitText);

/**
 * Runs GSAP animations scoped to a section, only when the visitor allows motion.
 * Everything created inside is cleaned up automatically. Selector strings are scoped to `scope`.
 *
 * A section that starts off-screen is set up a moment later, when the browser is idle, so the page answers
 * taps sooner while it loads (fewer long tasks; Google measures this). Pass `{ defer: false }` for a section
 * that pins: its pin adds page height, and links like /#contact must land in the right place straight away.
 */
export function useGsap(
    setup: () => void | (() => void),
    scope: RefObject<HTMLElement | null>,
    deps: DependencyList = [],
    { defer = true }: { defer?: boolean } = {},
) {
    useLayoutEffect(() => {
        const el = scope.current;
        if (!el) return;
        let mm: ReturnType<typeof gsap.matchMedia> | undefined;
        const start = () => {
            mm = gsap.matchMedia(el);
            mm.add('(prefers-reduced-motion: no-preference)', () => setup());
        };
        const box = el.getBoundingClientRect();
        if (!defer || (box.top < window.innerHeight && box.bottom > 0)) {
            start();
            return () => mm?.revert();
        }
        const idle = 'requestIdleCallback' in window;
        const id = idle ? window.requestIdleCallback(start, { timeout: 1200 }) : window.setTimeout(start, 200);
        return () => {
            if (idle) window.cancelIdleCallback(id);
            else window.clearTimeout(id);
            mm?.revert();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}

/**
 * SplitText labels the element it splits for screen readers, but labels aren't allowed on paragraphs and
 * plain text boxes (accessibility checkers flag it). Headings keep the label; other text is read as it is.
 */
const ariaFor = (el: Element | null | undefined) => (el && /^H[1-6]$/.test(el.tagName) ? 'auto' : 'none');

/** Lines slide up from behind a mask when the element scrolls into view. */
export function revealLines(target: Element | string, { delay = 0, start = 'top 85%' } = {}) {
    const el = typeof target === 'string' ? document.querySelector(target) : target;
    if (!el || alreadyOnScreen(el)) return null;
    return SplitText.create(el, {
        type: 'lines',
        mask: 'lines',
        aria: ariaFor(el),
        autoSplit: true,
        onSplit: (self) =>
            gsap.from(self.lines, {
                yPercent: 110,
                duration: 1.2,
                ease: 'expo.out',
                stagger: 0.08,
                delay,
                scrollTrigger: { trigger: self.elements[0], start, once: true },
            }),
    });
}

/** Words light up one by one, in step with the scroll. */
export function fillWords(target: Element | string, { start = 'top 80%', end = 'bottom 55%' } = {}) {
    const el = typeof target === 'string' ? document.querySelector(target) : target;
    if (!el) return null;
    return SplitText.create(el, {
        type: 'words',
        aria: ariaFor(el),
        autoSplit: true,
        onSplit: (self) =>
            gsap.fromTo(self.words, { opacity: 0.14 }, {
                opacity: 1,
                ease: 'none',
                stagger: 0.1,
                scrollTrigger: { trigger: self.elements[0], start, end, scrub: true },
            }),
    });
}

/** Fades and lifts elements in, one after another, when they scroll into view. */
export function riseIn(targets: string | Element[], trigger: Element | string, { stagger = 0.08, start = 'top 85%' } = {}) {
    const items = gsap.utils.toArray<Element>(targets).filter((el) => !alreadyOnScreen(el));
    if (!items.length) return null;
    return gsap.from(items, {
        y: 40,
        autoAlpha: 0,
        duration: 1.1,
        ease: 'expo.out',
        stagger,
        scrollTrigger: { trigger, start, once: true },
    });
}

/** Counts numbers up from zero when they scroll into view. Elements need data-count="150". */
export function countUp(elements: Element[], trigger: Element | string) {
    (elements as HTMLElement[]).forEach((el) => {
        const end = Number(el.dataset.count);
        const counter = { value: 0 };
        el.textContent = '0';
        gsap.to(counter, {
            value: end,
            duration: 2,
            ease: 'expo.out',
            onUpdate: () => { el.textContent = String(Math.round(counter.value)); },
            scrollTrigger: { trigger, start: 'top 85%', once: true },
        });
    });
}

/** A line that draws itself from left to right as you scroll past it. */
export function drawLine(target: Element | string, { start = 'top 90%', end = 'top 50%' } = {}) {
    return gsap.fromTo(target, { scaleX: 0 }, {
        scaleX: 1,
        ease: 'none',
        transformOrigin: 'left center',
        scrollTrigger: { trigger: target, start, end, scrub: true },
    });
}
