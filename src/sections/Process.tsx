import React, { useRef, useState } from 'react';
import { gsap, ScrollTrigger } from '../lib/smoothScroll';
import { revealLines, riseIn, useGsap } from '../lib/motion';
import { process } from '../content/services';
import SectionLabel from '../components/ui/SectionLabel';

const pad = (n: number) => String(n).padStart(2, '0');

/** Five step cards that stack on top of each other while scrolling. */
const Process: React.FC = () => {
    const root = useRef<HTMLElement>(null);
    const [active, setActive] = useState(0);

    useGsap(() => {
        const q = gsap.utils.selector(root);
        revealLines(q('[data-title]')[0]);
        riseIn(q('[data-intro]'), q('[data-intro]')[0]);

        const cards = q('[data-card]') as HTMLElement[];
        cards.forEach((card, i) => {
            // Which step is in front
            ScrollTrigger.create({
                trigger: card,
                start: 'top 55%',
                end: 'bottom 55%',
                onToggle: (self) => { if (self.isActive) setActive(i); },
            });
            // Each card eases back slightly as the next one slides over it
            const next = cards[i + 1];
            if (next) {
                const scroll = { trigger: next, start: 'top 85%', end: 'top 20%', scrub: true };
                gsap.to(card.querySelector('[data-card-inner]'), { scale: 0.94, ease: 'none', scrollTrigger: scroll });
                // Cards stay solid; a dark veil sinks the one behind into shadow
                gsap.to(card.querySelector('[data-veil]'), { opacity: 0.75, ease: 'none', scrollTrigger: { ...scroll } });
            }
        });

        // Progress line beside the step list
        gsap.fromTo(q('[data-progress]'), { scaleY: 0 }, {
            scaleY: 1, ease: 'none',
            scrollTrigger: { trigger: q('[data-stack]')[0], start: 'top 55%', end: 'bottom 55%', scrub: true },
        });
    }, root);

    return (
        <section ref={root} aria-labelledby="process-title" className="relative bg-noir text-ivory py-28 md:py-44">
            {/* Soft gold light low on the right, behind the cards */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse 48% 38% at 82% 62%, rgba(212,175,55,0.06), rgba(10,8,7,0) 72%)' }} />

            <div className="relative mx-auto grid max-w-[1600px] gap-14 px-5 md:px-10 lg:grid-cols-12 lg:gap-10">
                {/* Heading + step index (stays in view on large screens) */}
                <div className="lg:col-span-5">
                    <div className="lg:sticky lg:top-32">
                        <SectionLabel index="05">{process.label}</SectionLabel>
                        <h2 id="process-title" data-title className="mt-8 font-display font-normal text-section">
                            {process.title.lead} <em className="lux-foil">{process.title.highlight}</em>
                        </h2>
                        <p data-intro className="mt-8 max-w-md text-base md:text-lg leading-[1.8] text-ivory-soft">{process.intro}</p>

                        <ol aria-hidden="true" className="relative mt-14 hidden lg:block pl-8">
                            <span className="absolute left-0 top-2 bottom-2 w-px bg-ivory/10" />
                            <span data-progress className="absolute left-0 top-2 bottom-2 w-px origin-top bg-gradient-to-b from-gold-light via-gold to-gold-deep" />
                            {process.steps.map((step, i) => (
                                <li key={step.title} className={`relative flex items-baseline gap-5 py-2.5 transition-colors duration-500 ${i === active ? 'text-gold-light' : i < active ? 'text-ivory' : 'text-ivory-dim'}`}>
                                    {/* Gold diamond marks the step in front */}
                                    <span className={`absolute -left-8 top-1/2 h-[7px] w-[7px] -translate-x-1/2 -translate-y-1/2 rotate-45 border border-gold bg-noir transition-opacity duration-500 ${i === active ? 'opacity-100' : 'opacity-0'}`} />
                                    <span className="w-7 font-display text-base italic lining-nums">{pad(i + 1)}</span>
                                    <span className="font-display text-xl xl:text-2xl">{step.title}</span>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>

                {/* Stacking cards */}
                <ol data-stack className="lg:col-span-7 flex flex-col gap-[12vh]">
                    {process.steps.map((step, i) => (
                        <li
                            key={step.title}
                            data-card
                            className="sticky"
                            style={{ top: `calc(6rem + ${i * 1.25}rem)` }}
                        >
                            <article
                                data-card-inner
                                className="lux-panel relative flex min-h-[62vh] md:min-h-[58vh] origin-top flex-col justify-between overflow-hidden p-7 md:p-12"
                            >
                                {/* Fine inner frame and a red glow in the corner */}
                                <span aria-hidden="true" className="pointer-events-none absolute inset-2.5 md:inset-3 border border-gold/10" />
                                <span aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse 65% 55% at 100% 0%, rgba(139,0,0,0.3), rgba(139,0,0,0) 70%)' }} />

                                <div className="relative flex items-start justify-between gap-6">
                                    <span className="lux-label pt-2">Step {pad(i + 1)}</span>
                                    <span aria-hidden="true" className="lux-foil font-display text-[clamp(4.5rem,2rem+9vw,11rem)] font-normal italic leading-[0.8] lining-nums">
                                        {pad(i + 1)}
                                    </span>
                                </div>
                                <div className="relative">
                                    <h3 className="font-display font-normal text-[clamp(2rem,1rem+3.6vw,4.75rem)] leading-[1.04] tracking-[-0.015em] text-ivory">{step.title}</h3>
                                    <p className="mt-5 max-w-xl text-base md:text-lg leading-[1.8] text-ivory-soft">{step.description}</p>
                                    <p className="mt-7 inline-flex items-center gap-3 border-t border-gold/25 pt-5 font-display text-lg md:text-xl italic text-gold-light">
                                        <span aria-hidden="true" className="h-[5px] w-[5px] shrink-0 rotate-45 bg-gold" />
                                        {step.detail}
                                    </p>
                                </div>
                                <span data-veil aria-hidden="true" className="pointer-events-none absolute inset-0 bg-noir opacity-0" />
                            </article>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default Process;
