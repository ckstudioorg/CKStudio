import { useLayoutEffect, type DependencyList, type RefObject } from 'react';
import { SplitText } from 'gsap/SplitText';
import { gsap } from './smoothScroll';

gsap.registerPlugin(SplitText);

/**
 * Runs GSAP animations scoped to a section, only when the visitor allows motion.
 * Everything created inside is cleaned up automatically. Selector strings are scoped to `scope`.
 */
export function useGsap(setup: () => void | (() => void), scope: RefObject<HTMLElement | null>, deps: DependencyList = []) {
    useLayoutEffect(() => {
        if (!scope.current) return;
        const mm = gsap.matchMedia(scope.current);
        mm.add('(prefers-reduced-motion: no-preference)', () => setup());
        return () => mm.revert();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}

/** Lines slide up from behind a mask when the element scrolls into view. */
export function revealLines(target: Element | string, { delay = 0, start = 'top 85%' } = {}) {
    return SplitText.create(target, {
        type: 'lines',
        mask: 'lines',
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
    return SplitText.create(target, {
        type: 'words',
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
    return gsap.from(targets, {
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
