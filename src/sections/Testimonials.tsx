import React, { useCallback, useEffect, useRef, useState } from 'react';
import { gsap } from '../lib/smoothScroll';
import { revealLines, riseIn, useGsap } from '../lib/motion';
import { testimonials } from '../content/contact';
import { portfolio } from '../content/work';
import SectionLabel from '../components/ui/SectionLabel';

const pad = (n: number) => String(n).padStart(2, '0');

const Chevron: React.FC<{ flip?: boolean }> = ({ flip }) => (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={`h-5 w-5 ${flip ? 'rotate-180' : ''}`}>
        <path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

/**
 * Client quotes (only client-approved ones). Until there are any, shows a slider of real work instead.
 * Slides swipe on touch, drag with a mouse, or move with the arrow buttons.
 */
const Testimonials: React.FC = () => {
    const root = useRef<HTMLElement>(null);
    const track = useRef<HTMLDivElement>(null);
    const [index, setIndex] = useState(0);
    const quotes = testimonials.approved;
    const works = portfolio.works.filter((w) => w.url && w.youtubeId);
    const count = quotes.length || works.length;

    useGsap(() => {
        const q = gsap.utils.selector(root);
        revealLines(q('[data-title]')[0]);
        riseIn(q('[data-intro]'), q('[data-intro]')[0]);
        riseIn(q('[data-slide]'), track.current!, { stagger: 0.1 });
    }, root);

    // Keep the counter in sync with the slide nearest the left edge
    const onScroll = useCallback(() => {
        const el = track.current;
        if (!el) return;
        const slides = Array.from(el.children) as HTMLElement[];
        const left = el.scrollLeft;
        let nearest = 0;
        slides.forEach((s, i) => { if (Math.abs(s.offsetLeft - el.offsetLeft - left) < Math.abs(slides[nearest].offsetLeft - el.offsetLeft - left)) nearest = i; });
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 4) nearest = slides.length - 1;
        setIndex(nearest);
    }, []);

    const goTo = (i: number) => {
        const el = track.current;
        if (!el) return;
        const target = Math.max(0, Math.min(count - 1, i));
        const slide = el.children[target] as HTMLElement;
        el.scrollTo({ left: slide.offsetLeft - el.offsetLeft, behavior: 'smooth' });
    };

    // Mouse drag to scroll (touch already swipes natively)
    useEffect(() => {
        const el = track.current;
        if (!el) return;
        let startX = 0;
        let startLeft = 0;
        let dragging = false;
        let moved = false;
        const down = (e: PointerEvent) => {
            if (e.pointerType !== 'mouse') return;
            dragging = true; moved = false; startX = e.clientX; startLeft = el.scrollLeft;
            el.style.scrollSnapType = 'none';
        };
        const move = (e: PointerEvent) => {
            if (!dragging) return;
            const dx = e.clientX - startX;
            if (Math.abs(dx) > 4) moved = true;
            el.scrollLeft = startLeft - dx;
        };
        const up = () => {
            if (!dragging) return;
            dragging = false;
            el.style.scrollSnapType = '';
        };
        // Don't follow a link at the end of a drag
        const click = (e: MouseEvent) => { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } };
        el.addEventListener('pointerdown', down);
        window.addEventListener('pointermove', move);
        window.addEventListener('pointerup', up);
        el.addEventListener('click', click, true);
        return () => {
            el.removeEventListener('pointerdown', down);
            window.removeEventListener('pointermove', move);
            window.removeEventListener('pointerup', up);
            el.removeEventListener('click', click, true);
        };
    }, []);

    return (
        <section ref={root} aria-labelledby="testimonials-title" aria-roledescription="carousel" className="relative overflow-hidden bg-paper text-ink py-28 md:py-40">
            <div className="mx-auto max-w-[1600px] px-5 md:px-10">
                <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                    <div>
                        <SectionLabel index="09">{testimonials.label}</SectionLabel>
                        <h2 id="testimonials-title" data-title className="mt-8 font-heading font-semibold text-giant">
                            {testimonials.title.lead} <span className="text-ck-red">{testimonials.title.highlight}</span>
                        </h2>
                        {!quotes.length && <p data-intro className="mt-6 max-w-md text-base md:text-lg text-ink-soft">{testimonials.fallbackIntro}</p>}
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-5">
                        <span aria-live="polite" className="font-heading text-lg tabular-nums">
                            <span className="text-ck-red">{pad(index + 1)}</span>
                            <span className="text-ink-soft"> / {pad(count)}</span>
                        </span>
                        <div className="flex gap-2">
                            {[{ label: 'Previous', dir: -1 }, { label: 'Next', dir: 1 }].map(({ label, dir }) => (
                                <button
                                    key={label}
                                    type="button"
                                    onClick={() => goTo(index + dir)}
                                    disabled={dir < 0 ? index === 0 : index === count - 1}
                                    aria-label={`${label} slide`}
                                    className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full border border-ink text-ink transition-colors duration-300 hover:bg-ck-red hover:border-ck-red hover:text-paper disabled:pointer-events-none disabled:opacity-25"
                                >
                                    <Chevron flip={dir < 0} />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Slides */}
            <div
                ref={track}
                onScroll={onScroll}
                className="mt-14 md:mt-20 flex snap-x snap-mandatory gap-5 md:gap-8 overflow-x-auto overscroll-x-contain scroll-px-5 md:scroll-px-10 px-5 md:px-10 pb-4 cursor-grab active:cursor-grabbing select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
                {quotes.length
                    ? quotes.map((t, i) => (
                        <figure key={t.name} data-slide aria-roledescription="slide" aria-label={`${i + 1} of ${count}`} className="flex w-[86vw] md:w-[62vw] lg:w-[48vw] shrink-0 snap-start flex-col justify-between rounded-[28px] border border-ink-faint p-8 md:p-12">
                            <blockquote className="font-heading font-medium text-[clamp(1.4rem,1rem+1.6vw,2.6rem)] leading-[1.15] tracking-[-0.02em]">
                                <span className="text-ck-red">“</span>{t.quote}<span className="text-ck-red">”</span>
                            </blockquote>
                            <figcaption className="mt-10 border-t border-ink-faint pt-5">
                                <span className="block font-heading text-lg font-semibold">{t.name}</span>
                                <span className="text-sm text-ink-soft">{t.role}, <span className="text-ck-red">{t.company}</span></span>
                            </figcaption>
                        </figure>
                    ))
                    : works.map((w, i) => (
                        <article key={w.title} data-slide aria-roledescription="slide" aria-label={`${i + 1} of ${count}`} className="group w-[82vw] md:w-[46vw] lg:w-[36vw] shrink-0 snap-start">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-ink-ghost">
                                <img
                                    src={`https://img.youtube.com/vi/${w.youtubeId}/hqdefault.jpg`}
                                    alt=""
                                    loading="lazy"
                                    draggable={false}
                                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-cinema group-hover:scale-105"
                                />
                                <span className="absolute left-5 top-5 rounded-full bg-paper/90 px-3 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-ck-red backdrop-blur">
                                    {w.category}
                                </span>
                            </div>
                            <div className="mt-6 flex items-end justify-between gap-4">
                                <h3 className="font-heading text-2xl md:text-3xl font-semibold leading-tight tracking-[-0.02em]">{w.title}</h3>
                                <a
                                    href={w.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    draggable={false}
                                    className="shrink-0 text-xs font-medium uppercase tracking-[0.16em] text-ink underline decoration-ck-red decoration-2 underline-offset-[6px] transition-colors hover:text-ck-red"
                                >
                                    Watch<span className="sr-only"> {w.title} on YouTube</span>
                                </a>
                            </div>
                        </article>
                    ))}
            </div>

            {/* Progress */}
            <div className="mx-auto mt-10 max-w-[1600px] px-5 md:px-10">
                <div className="h-px bg-ink-faint">
                    <div className="h-px origin-left bg-ck-red transition-transform duration-500 ease-cinema" style={{ transform: `scaleX(${(index + 1) / count})` }} />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
