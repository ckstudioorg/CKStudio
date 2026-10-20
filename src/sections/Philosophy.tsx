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
        <section id="philosophy" ref={root} aria-labelledby="philosophy-title" className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-paper text-ink py-24">
            <div className="mx-auto w-full max-w-[1600px] px-5 md:px-10">
                <SectionLabel index="02">{philosophy.label}</SectionLabel>
                <h2 id="philosophy-title" data-title className="mt-6 font-heading font-semibold text-title">
                    {philosophy.title.lead} <span className="text-ck-red">{philosophy.title.highlight}</span>
                </h2>
            </div>

            <blockquote className="mt-12 md:mt-16">
                {/* On reduced motion this simply wraps onto several lines */}
                <p
                    ref={track}
                    className="w-max max-w-none whitespace-nowrap px-5 md:px-10 font-heading font-semibold text-[clamp(4rem,2rem+11vw,14rem)] leading-[0.95] tracking-[-0.045em] motion-reduce:w-auto motion-reduce:whitespace-normal motion-reduce:text-giant"
                >
                    <span className="text-ink">“{philosophy.quote.lead} </span>
                    <span className="text-ck-red">{philosophy.quote.highlight}”</span>
                </p>
            </blockquote>

            <div className="mx-auto mt-12 md:mt-16 w-full max-w-[1600px] px-5 md:px-10 motion-reduce:hidden">
                <div className="h-px bg-ink-faint">
                    <div data-progress className="h-px origin-left bg-ck-red" />
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
