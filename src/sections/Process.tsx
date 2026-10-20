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
                // Cards stay solid; a white veil fades the one behind
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
        <section ref={root} aria-labelledby="process-title" className="relative bg-paper text-ink py-28 md:py-40">
            <div className="mx-auto grid max-w-[1600px] gap-14 px-5 md:px-10 lg:grid-cols-12 lg:gap-10">
                {/* Heading + step index (stays in view on large screens) */}
                <div className="lg:col-span-5">
                    <div className="lg:sticky lg:top-32">
                        <SectionLabel index="05">{process.label}</SectionLabel>
                        <h2 id="process-title" data-title className="mt-8 font-heading font-semibold text-[clamp(2.75rem,1rem+4vw,6rem)] leading-[0.95] tracking-[-0.04em]">
                            {process.title.lead} <span className="text-ck-red">{process.title.highlight}</span>
                        </h2>
                        <p data-intro className="mt-8 max-w-md text-base md:text-lg leading-relaxed text-ink-soft">{process.intro}</p>

                        <ol aria-hidden="true" className="relative mt-12 hidden lg:block pl-6">
                            <span className="absolute left-0 top-1 bottom-1 w-px bg-ink-faint" />
                            <span data-progress className="absolute left-0 top-1 bottom-1 w-px origin-top bg-ck-red" />
                            {process.steps.map((step, i) => (
                                <li key={step.title} className={`flex items-baseline gap-4 py-2 transition-colors duration-500 ${i === active ? 'text-ck-red' : i < active ? 'text-ink' : 'text-ink-soft'}`}>
                                    <span className="text-xs tabular-nums tracking-[0.2em]">{pad(i + 1)}</span>
                                    <span className="font-heading text-lg font-medium">{step.title}</span>
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
                                className="relative flex min-h-[62vh] md:min-h-[58vh] origin-top flex-col justify-between overflow-hidden rounded-[28px] border border-ink-faint bg-paper p-7 md:p-12 shadow-[0_30px_80px_-40px_rgba(17,17,17,0.25)]"
                            >
                                <div className="flex items-start justify-between gap-6">
                                    <span className="text-xs md:text-sm font-medium uppercase tracking-[0.25em] text-ink-soft">Step {pad(i + 1)}</span>
                                    <span aria-hidden="true" className="font-heading font-semibold text-[clamp(4.5rem,2rem+9vw,11rem)] leading-[0.8] tracking-[-0.05em] text-ck-red">
                                        {pad(i + 1)}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="font-heading font-semibold text-[clamp(2rem,1rem+3.6vw,4.75rem)] leading-[1] tracking-[-0.035em]">{step.title}</h3>
                                    <p className="mt-5 max-w-xl text-base md:text-lg leading-relaxed text-ink-soft">{step.description}</p>
                                    <p className="mt-6 inline-flex items-center gap-3 border-t border-ink-faint pt-4 text-sm font-medium text-ck-red">
                                        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-ck-red" />
                                        {step.detail}
                                    </p>
                                </div>
                                <span data-veil aria-hidden="true" className="pointer-events-none absolute inset-0 bg-paper opacity-0" />
                            </article>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default Process;
