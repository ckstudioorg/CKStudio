import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { gsap, scrollToSection } from '../lib/smoothScroll';
import { hero } from '../content/hero';
import { LetterC, LetterK } from '../components/brand/LogoLetters';
import wordmarkUrl from '../assets/hero/ck-wordmark.png';
import taglineUrl from '../assets/hero/ck-tagline.png';
import preUrl from '../assets/hero/tag-pre.png';
import productionUrl from '../assets/hero/tag-production.png';
import postUrl from '../assets/hero/tag-post.png';

const ease = [0.16, 1, 0.3, 1] as const;
const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/*
 * Logo layout, measured from the official logo file (source pixels). The whole logo group spans
 * 594 × 449 px: the CK mark on top, "CK STUDIO" under it, then "PRE | PRODUCTION | POST".
 * Each piece is placed in % of that box so the group scales as one.
 */
const GROUP = { w: 594, h: 449 };
const place = (x: number, y: number, w: number, h: number): React.CSSProperties => ({
    left: `${(x / GROUP.w) * 100}%`,
    top: `${(y / GROUP.h) * 100}%`,
    width: `${(w / GROUP.w) * 100}%`,
    height: `${(h / GROUP.h) * 100}%`,
});
const LAYOUT = {
    c: { x: 0, y: 0, w: 280, h: 322 },
    k: { x: 262, y: 7, w: 332, h: 308 },
    wordmark: { x: 2, y: 339, w: 591, h: 68 },
    pre: { x: 2, y: 414, w: 86, h: 36 },
    production: { x: 139, y: 414, w: 290, h: 36 },
    post: { x: 481, y: 414, w: 113, h: 36 },
    pipe1: { x: 112, y: 420, w: 3, h: 23 },
    pipe2: { x: 453, y: 420, w: 3, h: 23 },
};
const at = (p: { x: number; y: number; w: number; h: number }) => place(p.x, p.y, p.w, p.h);
/** Position plus its place in the PRE | PRODUCTION | POST sequence (the CSS opening uses --i for the stagger) */
const tag = (p: { x: number; y: number; w: number; h: number }, i: number) => ({ ...at(p), '--i': i }) as React.CSSProperties;

/** Uses a PNG from the logo artwork as a stencil, so it can be filled with gold or ivory on the black stage */
const stencil = (url: string): React.CSSProperties => ({
    maskImage: `url(${url})`,
    WebkitMaskImage: `url(${url})`,
    maskSize: '100% 100%',
    WebkitMaskSize: '100% 100%',
    maskRepeat: 'no-repeat',
    WebkitMaskRepeat: 'no-repeat',
});

/** The premiere-night stage: deep red velvet light, a soft gold spotlight, a vignette and viewfinder corners */
const Stage: React.FC = () => (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 62% 52% at 50% 40%, rgba(139,0,0,0.42) 0%, rgba(92,3,3,0.2) 38%, rgba(10,8,7,0) 72%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 34% 58% at 50% -10%, rgba(242,220,155,0.13), rgba(242,220,155,0) 70%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 125% 95% at 50% 50%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.7) 100%)' }} />
        <span className="absolute left-4 top-[5.25rem] hidden h-6 w-6 border-l border-t border-gold/30 md:block" />
        <span className="absolute right-4 top-[5.25rem] hidden h-6 w-6 border-r border-t border-gold/30 md:block" />
        <span className="absolute bottom-4 left-4 hidden h-6 w-6 border-b border-l border-gold/30 md:block" />
        <span className="absolute bottom-4 right-4 hidden h-6 w-6 border-b border-r border-gold/30 md:block" />
    </div>
);

/** Gradients for the C and K: brand red lacquer with a fine gold rim (used by .ck-lacquer in foundation.css) */
const LacquerGradients: React.FC = () => (
    <svg aria-hidden="true" width="0" height="0" className="absolute" focusable="false">
        <defs>
            <linearGradient id="ck-lacquer" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#c8141f" />
                <stop offset="0.5" stopColor="#8b0000" />
                <stop offset="1" stopColor="#560000" />
            </linearGradient>
            <linearGradient id="ck-gold-edge" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#f2dc9b" />
                <stop offset="0.5" stopColor="#d4af37" />
                <stop offset="1" stopColor="#9a7524" />
            </linearGradient>
        </defs>
    </svg>
);

/** "Where AI": the last word in gold italic (same words, just styled) */
const FirstLine: React.FC = () => {
    const words = hero.headline.first.split(' ');
    const last = words.pop();
    return (
        <>
            {words.join(' ')} <em className="lux-foil font-medium">{last}</em>
        </>
    );
};


/** "Where AI Meets …" phrase that slides to the next one every few seconds. */
const RotatingPhrase: React.FC = () => {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        if (prefersReducedMotion()) return;
        const id = window.setInterval(() => setIndex((i) => (i + 1) % hero.rotating.length), 2800);
        return () => window.clearInterval(id);
    }, []);
    const longest = hero.rotating.reduce((a, b) => (b.length > a.length ? b : a));
    return (
        <span className="relative inline-block overflow-hidden whitespace-nowrap pb-[0.1em] align-top">
            {/* Invisible longest phrase keeps the box a steady size */}
            <span aria-hidden="true" className="invisible block px-[0.06em]">{longest}</span>
            <AnimatePresence initial={false}>
                <motion.span
                    key={index}
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '-140%' }}
                    transition={{ duration: 0.9, ease }}
                    className="lux-foil absolute right-0 top-0 block"
                >
                    {hero.rotating[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
};

const Badge: React.FC<{ className?: string }> = ({ className = '' }) => (
    <span className={`inline-flex items-center gap-3 text-ivory-soft ${className}`}>
        <span aria-hidden="true" className="text-gold text-[0.95em]">✦</span>
        {hero.badge}
    </span>
);

const Hero: React.FC = () => {
    const root = useRef<HTMLElement>(null);
    const stage = useRef<HTMLDivElement>(null);
    const frame = useRef<HTMLDivElement>(null);
    // Starts false so the page matches its ready-made HTML; reduced-motion visitors switch before the first paint
    const [reduced, setReduced] = useState(false);
    useLayoutEffect(() => {
        if (prefersReducedMotion()) {
            setReduced(true);
            document.documentElement.style.removeProperty('--ck-header-logo');
        }
    }, []);

    useLayoutEffect(() => {
        if (reduced || prefersReducedMotion() || !root.current || !stage.current) return;
        const docStyle = document.documentElement.style;

        const ctx = gsap.context(() => {
            const q = gsap.utils.selector(root);

            // How far each letter must travel to leave the screen completely (it also grows by CURTAIN_SCALE)
            const CURTAIN_SCALE = 1.6;
            const curtain = (letter: 'c' | 'k') => {
                const s = stage.current!.getBoundingClientRect();
                const f = frame.current!.getBoundingClientRect();
                const k = f.width / GROUP.w;
                const p = LAYOUT[letter];
                const left = f.left - s.left + p.x * k;
                const width = p.w * k;
                const growth = (width * (CURTAIN_SCALE - 1)) / 2;
                return letter === 'c'
                    ? -(left + width + growth + 40) // off the left edge
                    : s.width - left + growth + 40; // off the right edge
            };

            // Starting state for everything that appears later. CSS holds the same values until now
            // (see [data-hero-stage] in foundation.css); data-js hands them over to GSAP.
            stage.current!.setAttribute('data-js', '');
            gsap.set(q('[data-final]'), { autoAlpha: 0, y: 30 });
            gsap.set(q('[data-final-line]'), { yPercent: 105 });
            gsap.set(q('[data-final-rule]'), { scaleX: 0 });

            /*
             * Opening (~2.4 s): played by the browser itself as soon as the page arrives, without waiting for this
             * code — see "Hero opening" in foundation.css. The C and K slide together, CK STUDIO rises,
             * PRE | PRODUCTION | POST appear one by one, a red line draws, the scroll cue arrives.
             */

            /*
             * Scrolling: the logo opens like theatre curtains. The C glides off to the left and the K to the
             * right (growing as they pass the "camera"), CK STUDIO sinks back into its mask, the tagline fades,
             * and the hero content settles into place through the opening. The header logo fades in at the end.
             */
            gsap.set(q('[data-final-wrap]'), { scale: 1.06, transformOrigin: '50% 45%' });
            const tl = gsap.timeline({
                defaults: { ease: 'none' },
                scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom bottom', scrub: 0.8, invalidateOnRefresh: true },
            });
            // 0–10%: the scroll cue fades away
            tl.to(q('[data-cue]'), { autoAlpha: 0, y: 24, duration: 0.1 }, 0);
            // 0–28%: CK STUDIO sinks back down, then the tagline and red line fade
            tl.to(q('[data-wordmark-scroll]'), { yPercent: 115, ease: 'power2.in', duration: 0.22 }, 0.02);
            tl.to(q('[data-lower]'), { autoAlpha: 0, y: 18, ease: 'power2.in', duration: 0.18 }, 0.04);
            // 8–62%: the curtains open
            for (const letter of ['c', 'k'] as const) {
                tl.to(q(`[data-letter="${letter}"]`), { x: () => curtain(letter), scale: CURTAIN_SCALE, ease: 'power3.inOut', duration: 0.54 }, 0.08);
            }
            // 16–70%: the hero content settles into place behind the parting curtains
            tl.to(q('[data-final-wrap]'), { scale: 1, ease: 'power2.out', duration: 0.54 }, 0.16);
            tl.to(q('[data-final-line]'), { yPercent: 0, ease: 'power3.out', duration: 0.24, stagger: 0.05 }, 0.18);
            tl.to(q('[data-final]'), { autoAlpha: 1, y: 0, ease: 'power2.out', duration: 0.18, stagger: 0.04 }, 0.24);
            tl.to(q('[data-final-rule]'), { scaleX: 1, ease: 'power2.inOut', duration: 0.22 }, 0.32);
            // 55–67%: the small header logo fades in
            tl.fromTo(document.documentElement, { '--ck-header-logo': 0 }, { '--ck-header-logo': 1, duration: 0.12 }, 0.55);
            // Short pause on the finished hero before the page moves on
            tl.to({}, { duration: 0.14 }, 0.86);
        }, root);

        return () => {
            ctx.revert();
            stage.current?.removeAttribute('data-js');
            docStyle.removeProperty('--ck-header-logo');
        };
    }, [reduced]);

    /*
     * The finished hero must always fit its screen (it is pinned, so anything taller is cut off).
     * If the content is taller than the screen — short laptop windows, medium widths, big fonts — shrink the
     * big headline step by step until it fits. Re-checked when the window size changes or the fonts load.
     */
    useLayoutEffect(() => {
        if (reduced || prefersReducedMotion() || typeof ResizeObserver === 'undefined') return;
        const wrap = root.current?.querySelector<HTMLElement>('[data-final-wrap]');
        if (!wrap) return;
        // Layout sizes only (offsetHeight ignores the animation's temporary shifts, which scrollHeight would count)
        const [top, heading, bottom] = Array.from(wrap.children) as HTMLElement[];
        const px = (el: Element, prop: 'marginTop' | 'paddingTop' | 'paddingBottom') => parseFloat(getComputedStyle(el)[prop]) || 0;
        const overflow = () => {
            const lines = Array.from(heading.children) as HTMLElement[];
            const last = lines[lines.length - 1];
            const headline = last.offsetTop + last.offsetHeight - lines[0].offsetTop;
            const needed = top.offsetHeight + px(heading, 'marginTop') + headline + px(bottom, 'marginTop') + bottom.offsetHeight;
            const available = wrap.clientHeight - px(wrap, 'paddingTop') - px(wrap, 'paddingBottom');
            return needed - available;
        };
        // Shrink the headline a little; if that is not enough, first hide the figures (also shown further down
        // the page), then the description line, before shrinking further (data-compact, see foundation.css)
        const fit = () => {
            for (const level of [0, 1, 2]) {
                if (level) wrap.setAttribute('data-compact', String(level));
                else wrap.removeAttribute('data-compact');
                let scale = 1;
                wrap.style.setProperty('--hero-fit', '1');
                const floor = level < 2 ? 0.76 : 0.5;
                while (overflow() > 0 && scale > floor) {
                    scale -= 0.04;
                    wrap.style.setProperty('--hero-fit', scale.toFixed(2));
                }
                if (overflow() <= 0) return;
            }
        };
        fit();
        const observer = new ResizeObserver(fit);
        observer.observe(wrap);
        document.fonts?.ready.then(fit);
        return () => {
            observer.disconnect();
            wrap.style.removeProperty('--hero-fit');
            wrap.removeAttribute('data-compact');
        };
    }, [reduced]);

    // Final hero layout: shown at the end of the logo animation (or straight away for reduced motion)
    const finalLayout = (
        <div data-final-wrap className={`relative z-10 mx-auto flex max-w-[1600px] flex-col px-5 pb-6 pt-24 md:px-10 md:pb-8 md:pt-[min(7rem,14svh)] ${reduced ? 'min-h-svh' : 'h-full'}`}>
            <div data-final className="flex items-center justify-between text-[0.64rem] md:text-[0.7rem] uppercase tracking-[0.32em]">
                <Badge />
                <span className="hidden md:inline text-ivory-dim">{hero.scrollHint}</span>
            </div>

            <h1 className="mt-6 md:mt-8 flex flex-1 flex-col justify-center font-display font-medium text-ivory">
                <span className="block overflow-hidden pb-[0.08em] pr-[0.08em]">
                    <span data-final-line className="block text-[calc(min(clamp(3.6rem,1rem+10vw,9.5rem),calc(20svh_-_2.5rem))*var(--hero-fit,1))] leading-[0.92] tracking-[-0.02em]">
                        <FirstLine />
                    </span>
                </span>

                {/* PRE | PRODUCTION | POST between the two headline lines */}
                <span aria-hidden="true" className="my-5 md:my-7 flex items-center gap-4 md:gap-7">
                    <span data-final-rule className="hidden md:block h-px flex-1 origin-right bg-gradient-to-l from-gold/85 via-gold/35 to-transparent" />
                    <span data-final data-hero-tagline className="lux-gold-fill block aspect-[592/36] w-[min(68vw,560px)] shrink-0" style={stencil(taglineUrl)} />
                    <span data-final-rule className="block h-px flex-1 origin-left bg-gradient-to-r from-gold/85 via-gold/35 to-transparent" />
                </span>

                <span className="block self-end text-right">
                    <span className="block overflow-hidden pb-[0.08em] pr-[0.08em]">
                        <span data-final-line className="block text-[calc(min(clamp(3.6rem,1rem+10vw,9.5rem),calc(20svh_-_2.5rem))*var(--hero-fit,1))] leading-[0.92] tracking-[-0.02em]">
                            {hero.headline.second}
                        </span>
                    </span>
                    <span className="block overflow-hidden pr-[0.08em]">
                        <span data-final-line className="mt-2 block italic text-[calc(min(clamp(1.35rem,0.8rem+2.2vw,3rem),6svh)*var(--hero-fit,1))] leading-[1.12] tracking-[-0.01em]">
                            <RotatingPhrase />
                        </span>
                    </span>
                </span>
            </h1>

            <div className="mt-6 md:mt-8 flex flex-col gap-6 min-[1000px]:flex-row min-[1000px]:items-end min-[1000px]:justify-between">
                <div className="flex shrink-0 flex-col gap-4 md:gap-5">
                <p data-final data-hero-lede className="max-w-md text-sm md:text-[0.95rem] leading-relaxed text-ivory-soft">{hero.lede}</p>
                <div data-final className="flex flex-wrap gap-3 sm:flex-nowrap">
                    <button
                        onClick={() => scrollToSection(hero.actions.primary.target)}
                        className="lux-btn whitespace-nowrap px-6 py-3.5 md:px-8 md:py-4"
                    >
                        {hero.actions.primary.label}
                    </button>
                    <button
                        onClick={() => scrollToSection(hero.actions.secondary.target)}
                        className="lux-btn-ghost whitespace-nowrap px-6 py-3.5 md:px-8 md:py-4"
                    >
                        {hero.actions.secondary.label}
                    </button>
                </div>
                </div>
                <dl data-final data-hero-stats className="grid grid-cols-3 gap-4 md:gap-6 border-t border-gold/20 pt-4 min-[1000px]:gap-0 min-[1000px]:border-0 min-[1000px]:pt-0">
                    {hero.stats.map((stat) => (
                        <div key={stat.label} className="flex flex-col-reverse min-[1000px]:border-l min-[1000px]:border-gold/20 min-[1000px]:px-6 xl:px-9">
                            <dt className="mt-1.5 text-[0.58rem] md:text-[0.64rem] uppercase tracking-[0.26em] text-ivory-dim">{stat.label}</dt>
                            <dd className="whitespace-nowrap font-display text-2xl md:text-[2.15rem] leading-none lining-nums"><span className="lux-foil">{stat.number}</span></dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    );

    if (reduced) {
        return (
            <section ref={root} aria-label="Introduction" className="relative overflow-hidden bg-noir text-ivory">
                <Stage />
                {finalLayout}
            </section>
        );
    }

    return (
        <section ref={root} aria-label="Introduction" className="relative bg-noir text-ivory h-[200vh] md:h-[220vh]">
            <div ref={stage} data-hero-stage className="sticky top-0 h-svh overflow-hidden">
                <Stage />
                <LacquerGradients />
                {/* The assembling logo (decorative: the header logo and headline carry the meaning) */}
                <div
                    ref={frame}
                    aria-hidden="true"
                    className="pointer-events-none absolute left-1/2 top-1/2 z-20 w-[min(80vw,600px,max(220px,calc(174svh_-_720px)))] md:w-[min(44vw,640px,max(220px,calc(174svh_-_720px)))] -translate-x-1/2 -translate-y-[62%]"
                    style={{ aspectRatio: `${GROUP.w} / ${GROUP.h}` }}
                >
                    <div data-logo-group className="absolute inset-0 origin-top-left text-wine">
                        <div data-letter="c" className="absolute will-change-transform" style={at(LAYOUT.c)}>
                            <LetterC data-letter-inner="c" className="ck-lacquer block h-full w-full overflow-visible" />
                        </div>
                        <div data-letter="k" className="absolute will-change-transform" style={at(LAYOUT.k)}>
                            <LetterK data-letter-inner="k" className="ck-lacquer block h-full w-full overflow-visible" />
                        </div>
                        {/* Separate layers for the opening animation (inner) and the scroll animation (outer) */}
                        <div className="absolute overflow-hidden" style={at(LAYOUT.wordmark)}>
                            <div data-wordmark-scroll className="h-full w-full">
                                <span data-wordmark className="lux-gold-fill block h-full w-full" style={stencil(wordmarkUrl)} />
                            </div>
                        </div>
                        <div data-lower className="absolute inset-0">
                            <span data-tag className="lux-ivory-fill absolute" style={{ ...tag(LAYOUT.pre, 0), ...stencil(preUrl) }} />
                            <span data-tag className="absolute bg-gold/80" style={tag(LAYOUT.pipe1, 1)} />
                            <span data-tag className="lux-ivory-fill absolute" style={{ ...tag(LAYOUT.production, 2), ...stencil(productionUrl) }} />
                            <span data-tag className="absolute bg-gold/80" style={tag(LAYOUT.pipe2, 3)} />
                            <span data-tag className="lux-ivory-fill absolute" style={{ ...tag(LAYOUT.post, 4), ...stencil(postUrl) }} />
                            <span data-rule className="absolute left-[30%] top-[calc(100%+32px)] h-px w-[40%] origin-center bg-gradient-to-r from-transparent via-gold to-transparent" />
                        </div>
                    </div>
                </div>

                {/* Opening cue at the bottom: badge, then a line with a gold dot travelling down it */}
                <div data-cue className="absolute inset-x-0 bottom-6 md:bottom-8 z-10 flex justify-center px-5">
                    <div data-cue-inner className="flex flex-col items-center gap-4 text-center">
                        <Badge className="text-[0.6rem] tracking-[0.3em] uppercase md:text-[0.68rem] md:tracking-[0.34em]" />
                        <span aria-hidden="true" className="relative block h-12 w-px overflow-hidden bg-ivory/15 md:h-[min(4rem,6svh)]">
                            <span className="ck-scroll-dot absolute left-0 top-0 block h-1/3 w-px bg-gold" />
                        </span>
                        <span className="text-[0.58rem] md:text-[0.64rem] uppercase tracking-[0.34em] text-ivory-dim">{hero.scrollCue}</span>
                    </div>
                </div>

                {finalLayout}
            </div>
        </section>
    );
};

export default Hero;
