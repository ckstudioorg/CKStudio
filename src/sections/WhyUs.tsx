import React, { useRef } from 'react';
import { gsap } from '../lib/smoothScroll';
import { countUp, revealLines, riseIn, useGsap } from '../lib/motion';
import { whyUs } from '../content/work';
import SectionLabel from '../components/ui/SectionLabel';

const pad = (n: number) => String(n).padStart(2, '0');

const WhyUs: React.FC = () => {
    const root = useRef<HTMLElement>(null);
    const { team, magic } = whyUs.commitment;

    useGsap(() => {
        const q = gsap.utils.selector(root);
        revealLines(q('[data-title]')[0]);
        riseIn(q('[data-intro]'), q('[data-intro]')[0]);

        // Strengths: divider draws, then text rises
        q('[data-strength]').forEach((row: Element, i: number) => {
            gsap.timeline({ scrollTrigger: { trigger: row, start: 'top 92%', once: true }, delay: (i % 2) * 0.08 })
                .fromTo(row.querySelector('[data-rule]'), { scaleX: 0 }, { scaleX: 1, duration: 1, ease: 'expo.inOut' })
                .from(row.querySelectorAll('[data-in]'), { yPercent: 110, duration: 0.9, ease: 'expo.out', stagger: 0.05 }, 0.2);
        });

        // Ring draws in step with the scroll: red team share first, then the gold "magic"
        const ring = q('[data-ring]')[0];
        const tl = gsap.timeline({ scrollTrigger: { trigger: ring, start: 'top 80%', end: 'center 40%', scrub: 0.6 } });
        tl.fromTo(q('[data-arc="team"]'), { attr: { 'stroke-dasharray': '0 100' } }, { attr: { 'stroke-dasharray': `${team.value} ${100 - team.value}` }, ease: 'none', duration: 0.8 })
            .fromTo(q('[data-arc="magic"]'), { attr: { 'stroke-dasharray': '0 100' } }, { attr: { 'stroke-dasharray': `${magic.value} ${100 - magic.value}` }, ease: 'none', duration: 0.2 })
            .from(q('[data-ring-label]'), { autoAlpha: 0, scale: 0.9, ease: 'power2.out', duration: 0.3 }, 0.5);
        riseIn(q('[data-legend]'), q('[data-legend]')[0], { stagger: 0.12 });

        countUp(q('[data-count]'), q('[data-stats]')[0]);
        riseIn(q('[data-stat]'), q('[data-stats]')[0], { stagger: 0.08 });
    }, root);

    return (
        <section ref={root} aria-labelledby="why-title" className="relative bg-paper text-ink pt-28 md:pt-40">
            <div className="mx-auto max-w-[1600px] px-5 md:px-10">
                <div className="grid gap-8 md:grid-cols-12 md:items-end">
                    <div className="md:col-span-7">
                        <SectionLabel index="08">{whyUs.label}</SectionLabel>
                        <h2 id="why-title" data-title className="mt-8 font-heading font-semibold text-giant">
                            {whyUs.title.lead} <span className="text-ck-red">{whyUs.title.highlight}</span>
                        </h2>
                    </div>
                    <p data-intro className="md:col-span-4 md:col-start-9 text-base md:text-lg leading-relaxed text-ink-soft">{whyUs.intro}</p>
                </div>

                <div className="mt-16 md:mt-24 grid gap-16 lg:grid-cols-12 lg:gap-10 lg:items-center">
                    {/* Strengths */}
                    <ul className="lg:col-span-7 grid sm:grid-cols-2 gap-x-10">
                        {whyUs.strengths.map((strength, i) => (
                            <li key={strength} data-strength className="relative">
                                <span data-rule aria-hidden="true" className="absolute inset-x-0 top-0 h-px origin-left bg-ink-faint" />
                                <div className="flex items-baseline gap-4 py-5">
                                    <span className="overflow-hidden">
                                        <span data-in className="block text-xs tabular-nums tracking-[0.2em] text-ck-red">{pad(i + 1)}</span>
                                    </span>
                                    <span className="overflow-hidden">
                                        <span data-in className="block font-heading text-lg md:text-xl font-medium tracking-[-0.01em]">{strength}</span>
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* Commitment ring */}
                    <div className="lg:col-span-4 lg:col-start-9 flex flex-col items-center">
                        <div data-ring className="relative w-full max-w-[22rem] aspect-square">
                            <svg
                                className="h-full w-full"
                                viewBox="0 0 100 100"
                                role="img"
                                aria-label={`Commitment: ${team.value}% dedicated creative and AI team, ${magic.value}% CK's magic at work`}
                            >
                                <circle r="45" cx="50" cy="50" fill="none" strokeWidth="0.4" className="text-ink-faint" stroke="currentColor" />
                                {/* Normalized circumference keeps the two segments exactly 80/20. */}
                                <circle
                                    data-arc="team"
                                    className="text-ck-red"
                                    pathLength="100"
                                    strokeDasharray={`${team.value} ${100 - team.value}`}
                                    strokeWidth="5"
                                    strokeLinecap="butt"
                                    stroke="currentColor"
                                    fill="none"
                                    r="45" cx="50" cy="50"
                                    transform="rotate(-90 50 50)"
                                />
                                <circle
                                    data-arc="magic"
                                    className="text-ck-gold"
                                    pathLength="100"
                                    strokeDasharray={`${magic.value} ${100 - magic.value}`}
                                    strokeDashoffset={-team.value}
                                    strokeWidth="5"
                                    strokeLinecap="butt"
                                    stroke="currentColor"
                                    fill="none"
                                    r="45" cx="50" cy="50"
                                    transform="rotate(-90 50 50)"
                                />
                            </svg>
                            <div data-ring-label className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                <span className="font-heading text-[clamp(3rem,2rem+3vw,4.75rem)] font-semibold leading-none tracking-[-0.04em]">{whyUs.commitment.total}</span>
                                <span className="mt-3 text-[0.7rem] font-medium uppercase tracking-[0.3em] text-ink-soft">{whyUs.commitment.label}</span>
                            </div>
                        </div>

                        <dl className="mt-10 w-full max-w-[22rem] divide-y divide-ink-faint border-y border-ink-faint">
                            <div data-legend className="flex items-center gap-4 py-4">
                                <span aria-hidden="true" className="h-3 w-3 shrink-0 rounded-full bg-ck-red" />
                                <dt className="flex-1 text-sm text-ink">{team.label}</dt>
                                <dd className="font-heading text-2xl font-semibold text-ck-red">{team.value}%</dd>
                            </div>
                            <div data-legend className="flex items-center gap-4 py-4">
                                <span aria-hidden="true" className="h-3 w-3 shrink-0 rounded-full bg-ck-gold" />
                                <dt className="flex-1 text-sm text-ink">{magic.label}</dt>
                                <dd className="font-heading text-2xl font-semibold text-ck-red">{magic.value}%</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>

            {/* Stats strip */}
            <div data-stats className="mt-28 md:mt-40 border-y border-ink">
                <dl className="mx-auto grid max-w-[1600px] grid-cols-2 md:grid-cols-4">
                    {whyUs.stats.map((stat, i) => (
                        <div
                            key={stat.label}
                            data-stat
                            className={`flex flex-col-reverse px-5 md:px-10 py-10 md:py-14 border-ink-faint ${i % 2 === 1 ? 'border-l' : ''} ${i >= 2 ? 'border-t md:border-t-0' : ''} ${i === 2 ? 'md:border-l' : ''}`}
                        >
                            <dt className="mt-3 text-[0.68rem] md:text-xs font-medium uppercase tracking-[0.22em] text-ink-soft">{stat.label}</dt>
                            <dd className="font-heading font-semibold text-[clamp(3rem,1.5rem+5vw,7rem)] leading-none tracking-[-0.045em] text-ck-red">
                                <span data-count={stat.value}>{stat.value}</span>{stat.suffix}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
};

export default WhyUs;
