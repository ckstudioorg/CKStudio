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
            <span aria-hidden="true" className="invisible block">{longest}</span>
            <AnimatePresence initial={false}>
                <motion.span
                    key={index}
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '-140%' }}
                    transition={{ duration: 0.9, ease }}
                    className="absolute right-0 top-0 block"
                >
                    {hero.rotating[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
};

const Badge: React.FC<{ className?: string }> = ({ className = '' }) => (
    <span className={`inline-flex items-center gap-2.5 text-ink ${className}`}>
        <span aria-hidden="true" className="text-ck-gold text-sm">✦</span>
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

    // Final hero layout: shown at the end of the logo animation (or straight away for reduced motion)
    const finalLayout = (
        <div data-final-wrap className={`relative z-10 mx-auto flex max-w-[1600px] flex-col px-5 pb-6 pt-24 md:px-10 md:pb-8 md:pt-[min(7rem,14svh)] ${reduced ? 'min-h-svh' : 'h-full'}`}>
            <div data-final className="flex items-center justify-between text-[0.7rem] md:text-xs uppercase tracking-[0.28em]">
                <Badge />
                <span className="hidden md:inline text-ink-soft">{hero.scrollHint}</span>
            </div>

            <h1 className="mt-6 md:mt-8 flex flex-1 flex-col justify-center font-heading font-semibold">
                <span className="block overflow-hidden pb-[0.04em]">
                    <span data-final-line className="block text-ck-red text-[min(clamp(3.6rem,1rem+10vw,9.5rem),calc(20svh_-_2.5rem))] leading-[0.9] tracking-[-0.045em]">
                        {hero.headline.first}
                    </span>
                </span>

                {/* PRE | PRODUCTION | POST between the two headline lines */}
                <span aria-hidden="true" className="my-5 md:my-7 flex items-center gap-4 md:gap-7">
                    <span data-final-rule className="hidden md:block h-[2px] flex-1 origin-right bg-ck-red" />
                    <img data-final src={taglineUrl} alt="" className="block h-auto w-[min(68vw,560px)]" />
                    <span data-final-rule className="block h-[2px] flex-1 origin-left bg-ck-red" />
                </span>

                <span className="block self-end text-right">
                    <span className="block overflow-hidden pb-[0.04em]">
                        <span data-final-line className="block text-ink text-[min(clamp(3.6rem,1rem+10vw,9.5rem),calc(20svh_-_2.5rem))] leading-[0.9] tracking-[-0.045em]">
                            {hero.headline.second}
                        </span>
                    </span>
                    <span className="block overflow-hidden">
                        <span data-final-line className="mt-2 block text-ck-red text-[min(clamp(1.35rem,0.8rem+2.2vw,3rem),6svh)] leading-[1.05] tracking-[-0.03em]">
                            <RotatingPhrase />
                        </span>
                    </span>
                </span>
            </h1>

            <div className="mt-6 md:mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div className="flex flex-col gap-4 md:gap-5">
                <p data-final className="max-w-md text-sm md:text-base leading-relaxed text-ink-soft">{hero.lede}</p>
                <div data-final className="flex flex-wrap gap-3">
                    <button
                        onClick={() => scrollToSection(hero.actions.primary.target)}
                        className="group relative overflow-hidden rounded-full bg-ck-red px-6 py-3.5 md:px-7 md:py-4 text-sm font-medium uppercase tracking-[0.12em] text-paper"
                    >
                        <span aria-hidden="true" className="absolute inset-0 translate-y-full rounded-full bg-ink transition-transform duration-500 ease-cinema group-hover:translate-y-0" />
                        <span className="relative">{hero.actions.primary.label}</span>
                    </button>
                    <button
                        onClick={() => scrollToSection(hero.actions.secondary.target)}
                        className="rounded-full border border-ink px-6 py-3.5 md:px-7 md:py-4 text-sm font-medium uppercase tracking-[0.12em] text-ink transition-colors duration-500 ease-cinema hover:bg-ink hover:text-paper"
                    >
                        {hero.actions.secondary.label}
                    </button>
                </div>
                </div>
                <dl data-final className="grid grid-cols-3 gap-4 md:gap-10 border-t border-ink-faint pt-4 md:border-0 md:pt-0">
                    {hero.stats.map((stat) => (
                        <div key={stat.label} className="flex flex-col-reverse">
                            <dt className="mt-1 text-[0.62rem] md:text-[0.7rem] uppercase tracking-[0.2em] text-ink-soft">{stat.label}</dt>
                            <dd className="font-heading text-xl md:text-3xl font-semibold tracking-[-0.02em] text-ink">{stat.number}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    );

    if (reduced) {
        return (
            <section ref={root} aria-label="Introduction" className="relative bg-paper text-ink">
                {finalLayout}
            </section>
        );
    }

    return (
        <section ref={root} aria-label="Introduction" className="relative bg-paper text-ink h-[200vh] md:h-[220vh]">
            <div ref={stage} data-hero-stage className="sticky top-0 h-svh overflow-hidden">
                {/* The assembling logo (decorative: the header logo and headline carry the meaning) */}
                <div
                    ref={frame}
                    aria-hidden="true"
                    className="pointer-events-none absolute left-1/2 top-1/2 z-20 w-[min(80vw,600px,max(220px,calc(174svh_-_720px)))] md:w-[min(44vw,640px,max(220px,calc(174svh_-_720px)))] -translate-x-1/2 -translate-y-[62%]"
                    style={{ aspectRatio: `${GROUP.w} / ${GROUP.h}` }}
                >
                    <div data-logo-group className="absolute inset-0 origin-top-left text-ck-red">
                        <div data-letter="c" className="absolute will-change-transform" style={at(LAYOUT.c)}>
                            <LetterC data-letter-inner="c" className="block h-full w-full" />
                        </div>
                        <div data-letter="k" className="absolute will-change-transform" style={at(LAYOUT.k)}>
                            <LetterK data-letter-inner="k" className="block h-full w-full" />
                        </div>
                        {/* Separate layers for the opening animation (inner) and the scroll animation (outer) */}
                        <div className="absolute overflow-hidden" style={at(LAYOUT.wordmark)}>
                            <div data-wordmark-scroll className="h-full w-full">
                                <img data-wordmark src={wordmarkUrl} alt="" fetchPriority="high" className="block h-full w-full" />
                            </div>
                        </div>
                        <div data-lower className="absolute inset-0">
                            <img data-tag src={preUrl} alt="" className="absolute" style={tag(LAYOUT.pre, 0)} />
                            <span data-tag className="absolute bg-ink" style={tag(LAYOUT.pipe1, 1)} />
                            <img data-tag src={productionUrl} alt="" className="absolute" style={tag(LAYOUT.production, 2)} />
                            <span data-tag className="absolute bg-ink" style={tag(LAYOUT.pipe2, 3)} />
                            <img data-tag src={postUrl} alt="" className="absolute" style={tag(LAYOUT.post, 4)} />
                            <span data-rule className="absolute left-[35%] top-[calc(100%+32px)] h-[2px] w-[30%] origin-center bg-ck-red" />
                        </div>
                    </div>
                </div>

                {/* Opening cue at the bottom: badge, then a line with a red dot travelling down it */}
                <div data-cue className="absolute inset-x-0 bottom-6 md:bottom-8 z-10 flex justify-center px-5">
                    <div data-cue-inner className="flex flex-col items-center gap-4 text-center">
                        <Badge className="text-[0.62rem] tracking-[0.25em] uppercase md:text-xs md:tracking-[0.3em]" />
                        <span aria-hidden="true" className="relative block h-12 w-px overflow-hidden bg-ink-faint md:h-[min(4rem,6svh)]">
                            <span className="ck-scroll-dot absolute left-0 top-0 block h-1/3 w-px bg-ck-red" />
                        </span>
                        <span className="text-[0.62rem] md:text-[0.7rem] uppercase tracking-[0.3em] text-ink-soft">{hero.scrollCue}</span>
                    </div>
                </div>

                {finalLayout}
            </div>
        </section>
    );
};

export default Hero;
