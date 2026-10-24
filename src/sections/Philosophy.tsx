import React, { useRef } from 'react';
import { gsap } from '../lib/smoothScroll';
import { revealLines, useGsap } from '../lib/motion';
import { philosophy } from '../content/about';
import SectionLabel from '../components/ui/SectionLabel';

/** Giant quote that slides sideways while the screen holds still. */
const Philosophy: React.FC = () => {
    const root = useRef<HTMLElement>(null);
    const track = useRef<HTMLParagraphElement>(null);

    useGsap(() => {
        const q = gsap.utils.selector(root);
        revealLines(q('[data-title]')[0]);

        const el = track.current!;
        const distance = () => el.scrollWidth - window.innerWidth;
        gsap.to(el, {
            x: () => -distance(),
            ease: 'none',
            scrollTrigger: {
                trigger: root.current,
                start: 'top top',
                end: () => `+=${distance() * 0.7}`,
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true,
            },
        });
        // Progress line under the quote
        gsap.fromTo(q('[data-progress]'), { scaleX: 0 }, {
            scaleX: 1, ease: 'none',
            scrollTrigger: { trigger: root.current, start: 'top top', end: () => `+=${distance() * 0.7}`, scrub: true, invalidateOnRefresh: true },
        });
    }, root);

    return (
        <section id="philosophy" ref={root} aria-labelledby="philosophy-title" className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-noir text-ivory py-24">
            {/* Deep red light rising from below, and fine gold lines framing the stage */}
            <div aria-hidden="true" className="lux-glow-bottom pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse 75% 50% at 50% 105%, rgba(139,0,0,0.36), rgba(10,8,7,0) 70%)' }} />
            <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

            <div className="relative mx-auto w-full max-w-[1600px] px-5 md:px-10">
                <SectionLabel index="02">{philosophy.label}</SectionLabel>
                <h2 id="philosophy-title" data-title className="mt-6 font-display font-normal text-headline">
                    {philosophy.title.lead} <em className="lux-foil">{philosophy.title.highlight}</em>
                </h2>
            </div>

            <blockquote className="relative mt-12 md:mt-16">
                {/* On reduced motion this simply wraps onto several lines */}
                <p
                    ref={track}
                    className="w-max max-w-none whitespace-nowrap px-5 md:px-10 font-display font-normal text-[clamp(4rem,2rem+11vw,14rem)] leading-[1.04] tracking-[-0.02em] motion-reduce:w-auto motion-reduce:whitespace-normal motion-reduce:text-display"
                >
                    <span className="text-ivory"><span className="lux-foil">“</span>{philosophy.quote.lead} </span>
                    <em className="lux-foil">{philosophy.quote.highlight}”</em>
                </p>
            </blockquote>

            <div className="relative mx-auto mt-12 md:mt-16 w-full max-w-[1600px] px-5 md:px-10 motion-reduce:hidden">
                <div className="h-px bg-ivory/10">
                    <div data-progress className="h-px origin-left bg-gradient-to-r from-gold-deep via-gold-light to-gold" />
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
