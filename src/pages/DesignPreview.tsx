import React, { useLayoutEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../lib/smoothScroll';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

/**
 * Local-only style preview for the 2026 redesign (only available in `npm run dev`).
 * Shows the new palette, type and scroll-synced motion before sections are rebuilt.
 */
const swatches = [
    { name: 'Paper', hex: '#FFFFFF', use: 'Every background', className: 'bg-paper border border-ink-faint' },
    { name: 'Ink', hex: '#111111', use: 'All regular text', className: 'bg-ink' },
    { name: 'CK Red', hex: '#8B0000', use: 'Headlines, key words, buttons', className: 'bg-ck-red' },
    { name: 'CK Gold', hex: '#D4AF37', use: 'Rare, special moments only', className: 'bg-ck-gold' },
];

const DesignPreview: React.FC = () => {
    const root = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduce) return;

        const ctx = gsap.context(() => {
            // 1. Headline letters rise in on load
            const title = SplitText.create('[data-title]', { type: 'chars', mask: 'chars' });
            gsap.from(title.chars, { yPercent: 110, duration: 1.2, ease: 'expo.out', stagger: 0.035, delay: 0.15 });

            // 2. Headline drifts apart while scrolling away
            gsap.to('[data-title-left]', { xPercent: -18, ease: 'none', scrollTrigger: { trigger: '[data-hero]', start: 'top top', end: 'bottom top', scrub: true } });
            gsap.to('[data-title-right]', { xPercent: 18, ease: 'none', scrollTrigger: { trigger: '[data-hero]', start: 'top top', end: 'bottom top', scrub: true } });

            // 3. Paragraph fills word by word, grey to black, synced to scroll
            const words = SplitText.create('[data-fill]', { type: 'words' });
            gsap.fromTo(words.words, { color: 'var(--color-ink-faint)' }, {
                color: 'var(--color-ink)', stagger: 0.1, ease: 'none',
                scrollTrigger: { trigger: '[data-fill]', start: 'top 80%', end: 'bottom 45%', scrub: true },
            });

            // 4. Pinned panel: giant quote slides sideways while the screen holds
            const track = document.querySelector<HTMLElement>('[data-track]');
            if (track) {
                gsap.to(track, {
                    x: () => -(track.scrollWidth - window.innerWidth),
                    ease: 'none',
                    scrollTrigger: { trigger: '[data-pin]', start: 'top top', end: () => `+=${track.scrollWidth}`, pin: true, scrub: 1, invalidateOnRefresh: true },
                });
            }

            // 5. Red line draws itself as you scroll
            gsap.fromTo('[data-line]', { scaleX: 0 }, { scaleX: 1, ease: 'none', scrollTrigger: { trigger: '[data-line]', start: 'top 85%', end: 'top 35%', scrub: true } });
        }, root);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={root} className="bg-paper text-ink font-body min-h-screen overflow-x-clip">
            <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 rounded-full bg-ink text-paper text-xs tracking-widest uppercase px-4 py-2">
                Style preview · local only
            </div>

            {/* Hero sample */}
            <section data-hero className="min-h-screen flex flex-col justify-center px-6 md:px-12">
                <p className="text-sm uppercase tracking-[0.3em] text-ink-soft mb-8">AI-Powered Film Production Studio</p>
                <h1 data-title className="font-heading font-semibold text-mega text-ck-red">
                    <span data-title-left className="block">Where AI</span>
                    <span data-title-right className="block text-ink">
                        Meets Cinema<span className="text-ck-gold align-top text-[0.35em] ml-2">✦</span>
                    </span>
                </h1>
                <p className="mt-10 max-w-md text-lg text-ink-soft">Scroll slowly. Everything below moves with your scroll.</p>
            </section>

            {/* Word-fill paragraph */}
            <section className="px-6 md:px-12 py-[20vh]">
                <p className="text-sm uppercase tracking-[0.3em] text-ck-red mb-8">About Us</p>
                <p data-fill className="font-heading font-medium text-title max-w-6xl">
                    CHENNA KESHAV STUDIO is where visionary filmmakers meet cutting-edge artificial intelligence, redefining how
                    advertising content is conceived, produced, and delivered.
                </p>
            </section>

            {/* Pinned horizontal quote */}
            <section data-pin className="h-screen flex items-center overflow-hidden">
                <div data-track className="flex whitespace-nowrap font-heading font-semibold text-giant pl-[10vw] pr-[10vw]">
                    <span className="text-ink">"Movies are made to be seen;&nbsp;</span>
                    <span className="text-ck-red">AI ensures they're remembered"</span>
                </div>
            </section>

            {/* Palette + type */}
            <section className="px-6 md:px-12 py-[15vh]">
                <div data-line className="h-[3px] bg-ck-red origin-left mb-16" />
                <h2 className="font-heading font-semibold text-title mb-12">Palette</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {swatches.map((s) => (
                        <div key={s.name}>
                            <div className={`aspect-square rounded-2xl ${s.className}`} />
                            <p className="mt-4 font-heading font-semibold text-xl">{s.name}</p>
                            <p className="text-sm text-ink-soft">{s.hex} · {s.use}</p>
                        </div>
                    ))}
                </div>

                <h2 className="font-heading font-semibold text-title mt-28 mb-10">Type</h2>
                <p className="font-heading font-semibold text-giant">Clash Display</p>
                <p className="text-sm text-ink-soft mt-2 mb-10">Headlines — bold, tight, made for motion</p>
                <p className="text-2xl max-w-2xl">Satoshi for body text — clean, quiet and easy to read at every size, so the headlines get all the drama.</p>

                <div className="mt-20 flex flex-wrap gap-4">
                    <a href="#" className="rounded-full bg-ck-red text-paper px-8 py-4 font-medium transition-transform duration-500 ease-cinema hover:scale-105">Start Your Project</a>
                    <a href="#" className="rounded-full border border-ink text-ink px-8 py-4 font-medium transition-colors duration-500 ease-cinema hover:bg-ink hover:text-paper">Explore Our Work</a>
                </div>
            </section>
            <div className="h-[30vh]" />
        </div>
    );
};

export default DesignPreview;

// Keep ScrollTrigger positions correct after fonts finish loading
if (typeof document !== 'undefined') document.fonts?.ready.then(() => ScrollTrigger.refresh());
