import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { SplitText } from 'gsap/SplitText';
import { gsap, ScrollTrigger, scrollToSection } from '../lib/smoothScroll';
import { hero } from '../content/hero';
import Logo from '../components/brand/Logo';

gsap.registerPlugin(SplitText);

const ease = [0.16, 1, 0.3, 1] as const;
const FPS = 24;

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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

/** Placeholder "screen" shown until the real hero video is supplied. */
const ScreenPlaceholder: React.FC<{ timecodeRef: React.RefObject<HTMLSpanElement | null> }> = ({ timecodeRef }) => (
    <div className="absolute inset-0 bg-ink text-paper">
        <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse 60% 55% at 50% 50%, rgba(139,0,0,0.55), transparent 70%)' }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
            <Logo className="h-[9%] md:h-[min(16%,150px)] w-auto text-paper/90" withTagline />
        </div>
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 md:p-6 text-[0.65rem] md:text-xs uppercase tracking-[0.25em] text-paper/70">
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-ck-red" /> Rec</span>
            <span ref={timecodeRef} className="tabular-nums">00:00:00:00</span>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 text-[0.65rem] md:text-xs uppercase tracking-[0.25em] text-paper/60">
            Hero video placeholder
        </div>
    </div>
);

const Hero: React.FC = () => {
    const root = useRef<HTMLElement>(null);
    const stage = useRef<HTMLDivElement>(null);
    const slot = useRef<HTMLDivElement>(null);
    const screen = useRef<HTMLDivElement>(null);
    const media = useRef<HTMLDivElement>(null);
    const video = useRef<HTMLVideoElement>(null);
    const timecode = useRef<HTMLSpanElement>(null);
    const [reduced] = useState(() => typeof window !== 'undefined' && prefersReducedMotion());
    const [isMobile] = useState(() => typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches);
    const videoSrc = (isMobile && hero.video.mobile) || hero.video.desktop;

    useLayoutEffect(() => {
        if (reduced || !root.current) return;

        const ctx = gsap.context(() => {
            // Measure where the small screen sits, so it can grow from there to full screen
            const inset = () => {
                const s = stage.current!.getBoundingClientRect();
                const r = slot.current!.getBoundingClientRect();
                return `inset(${r.top - s.top}px ${s.right - r.right}px ${s.bottom - r.bottom}px ${r.left - s.left}px round 28px)`;
            };

            // Intro: headline letters rise, everything else eases in
            const split = SplitText.create('[data-hero-split]', { type: 'chars', mask: 'chars' });
            gsap.timeline({ delay: 0.15 })
                .from(split.chars, { yPercent: 110, duration: 1.3, ease: 'expo.out', stagger: 0.035 })
                .from('[data-hero-in]', { y: 24, autoAlpha: 0, duration: 1, ease: 'expo.out', stagger: 0.08 }, 0.35)
                .from(screen.current, { autoAlpha: 0, duration: 1.4, ease: 'power2.out' }, 0.3);

            // Scroll: headline splits apart while the screen opens up to full size
            const tl = gsap.timeline({
                defaults: { ease: 'none' },
                scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom bottom', scrub: 0.8, invalidateOnRefresh: true },
            });
            tl.fromTo(screen.current, { clipPath: inset }, { clipPath: 'inset(0px 0px 0px 0px round 0px)', duration: 0.7 }, 0)
                .to('[data-hero-left]', { xPercent: -45, yPercent: -40, autoAlpha: 0, duration: 0.5 }, 0)
                .to('[data-hero-right]', { xPercent: 45, yPercent: 40, autoAlpha: 0, duration: 0.5 }, 0)
                .to('[data-hero-out]', { y: -30, autoAlpha: 0, duration: 0.25, stagger: 0.03 }, 0)
                .fromTo(media.current, { scale: 1.2 }, { scale: 1, duration: 1 }, 0);

            // Video (or placeholder timecode) follows the scroll position, smoothed
            let target = 0;
            let current = 0;
            const st = ScrollTrigger.create({
                trigger: root.current, start: 'top top', end: 'bottom bottom',
                onUpdate: (self) => { target = self.progress; },
            });
            const tick = () => {
                current += (target - current) * 0.15;
                const v = video.current;
                if (v && v.duration) {
                    const t = current * (v.duration - 0.05);
                    if (Math.abs(v.currentTime - t) > 0.008) v.currentTime = t;
                } else if (timecode.current) {
                    const frames = Math.round(current * 8 * FPS);
                    const pad = (n: number) => String(n).padStart(2, '0');
                    timecode.current.textContent = `00:00:${pad(Math.floor(frames / FPS))}:${pad(frames % FPS)}`;
                }
            };
            gsap.ticker.add(tick);
            return () => { gsap.ticker.remove(tick); st.kill(); };
        }, root);

        // Re-measure once fonts settle (headline size changes the screen slot)
        document.fonts?.ready.then(() => ScrollTrigger.refresh());
        return () => ctx.revert();
    }, [reduced]);

    // iOS Safari only lets a video seek after it has started once
    useEffect(() => {
        const v = video.current;
        if (!v) return;
        v.play().then(() => v.pause()).catch(() => {});
    }, [videoSrc]);

    const screenContent = (
        <div ref={media} className="absolute inset-0 will-change-transform">
            {videoSrc ? (
                <video
                    ref={video}
                    src={videoSrc}
                    poster={hero.video.poster ?? undefined}
                    muted
                    playsInline
                    preload="auto"
                    aria-hidden="true"
                    className="h-full w-full object-cover"
                />
            ) : (
                <ScreenPlaceholder timecodeRef={timecode} />
            )}
        </div>
    );

    return (
        <section
            ref={root}
            aria-label="Introduction"
            className={`relative bg-paper text-ink ${reduced ? '' : 'h-[260vh] md:h-[320vh]'}`}
        >
            <div ref={stage} className={`${reduced ? 'relative' : 'sticky top-0 h-svh'} overflow-hidden`}>
                {/* Expanding screen (sits behind the text, clipped to the slot at first) */}
                {!reduced && (
                    <div ref={screen} className="absolute inset-0 z-0 overflow-hidden" style={{ clipPath: 'inset(50% 50% 50% 50%)' }}>
                        {screenContent}
                    </div>
                )}

                <div className={`relative z-10 mx-auto flex max-w-[1600px] flex-col px-5 pb-6 pt-24 md:px-10 md:pb-8 md:pt-28 ${reduced ? 'min-h-svh' : 'h-full'}`}>
                    {/* Top row */}
                    <div data-hero-out className="flex items-center justify-between text-[0.7rem] md:text-xs uppercase tracking-[0.28em]">
                        <span data-hero-in className="inline-flex items-center gap-2.5 text-ink">
                            <span aria-hidden="true" className="text-ck-gold text-sm">✦</span>
                            {hero.badge}
                        </span>
                        <span data-hero-in className="hidden md:inline text-ink-soft">Scroll to explore</span>
                    </div>

                    <h1 className="mt-6 md:mt-8 flex flex-1 flex-col font-heading font-semibold">
                        <span data-hero-left className="block text-ck-red text-[clamp(3.6rem,1rem+10vw,10rem)] leading-[0.9] tracking-[-0.045em]">
                            <span data-hero-split>{hero.headline.first}</span>
                        </span>

                        {/* The screen grows out of this gap */}
                        <span ref={slot} aria-hidden="true" className={`my-4 md:my-5 block flex-1 min-h-[22vh] md:ml-[22%] md:mr-[8%] ${reduced ? 'relative overflow-hidden rounded-[28px]' : ''}`}>
                            {reduced && screenContent}
                        </span>

                        <span data-hero-right className="block self-end text-right">
                            <span className="block text-ink text-[clamp(3.6rem,1rem+10vw,10rem)] leading-[0.9] tracking-[-0.045em]">
                                <span data-hero-split>{hero.headline.second}</span>
                            </span>
                            <span className="mt-2 block text-ck-red text-[clamp(1.35rem,0.8rem+2.2vw,3rem)] leading-[1.05] tracking-[-0.03em]">
                                <RotatingPhrase />
                            </span>
                        </span>
                    </h1>

                    {/* Bottom row: actions + stats */}
                    <div data-hero-out className="mt-6 md:mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                        <div data-hero-in className="flex flex-wrap gap-3">
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
                        <dl data-hero-in className="grid grid-cols-3 gap-4 md:gap-10 border-t border-ink-faint pt-4 md:border-0 md:pt-0">
                            {hero.stats.map((stat) => (
                                <div key={stat.label} className="flex flex-col-reverse">
                                    <dt className="mt-1 text-[0.62rem] md:text-[0.7rem] uppercase tracking-[0.2em] text-ink-soft">{stat.label}</dt>
                                    <dd className="font-heading text-xl md:text-3xl font-semibold tracking-[-0.02em] text-ink">{stat.number}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
