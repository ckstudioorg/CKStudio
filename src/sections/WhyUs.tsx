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
        <section ref={root} aria-labelledby="why-title" className="relative bg-noir text-ivory pt-28 md:pt-44">
            {/* Deep red light behind the commitment ring */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse 38% 30% at 80% 52%, rgba(139,0,0,0.22), rgba(10,8,7,0) 72%)' }} />

            <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
                <div className="grid gap-8 md:grid-cols-12 md:items-end">
                    <div className="md:col-span-7">
                        <SectionLabel tone="lux" index="08">{whyUs.label}</SectionLabel>
                        <h2 id="why-title" data-title className="mt-8 font-display font-normal text-display">
                            {whyUs.title.lead} <em className="lux-foil">{whyUs.title.highlight}</em>
                        </h2>
                    </div>
                    <p data-intro className="md:col-span-4 md:col-start-9 text-base md:text-lg leading-[1.8] text-ivory-soft">{whyUs.intro}</p>
                </div>

                <div className="mt-16 md:mt-24 grid gap-16 lg:grid-cols-12 lg:gap-10 lg:items-center">
                    {/* Strengths */}
                    <ul className="lg:col-span-7 grid sm:grid-cols-2 gap-x-10">
                        {whyUs.strengths.map((strength, i) => (
                            <li key={strength} data-strength className="relative">
                                <span data-rule aria-hidden="true" className="absolute inset-x-0 top-0 h-px origin-left bg-gold/15" />
                                <div className="flex items-baseline gap-5 py-5 md:py-6">
                                    <span className="overflow-hidden">
                                        <span data-in className="block w-6 font-display text-sm md:text-base italic lining-nums text-gold/70">{pad(i + 1)}</span>
                                    </span>
                                    <span className="overflow-hidden pb-[0.08em]">
                                        <span data-in className="block font-display text-xl md:text-[1.55rem] font-normal leading-[1.2] text-ivory">{strength}</span>
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* Commitment ring, finished like a watch dial */}
                    <div className="lg:col-span-4 lg:col-start-9 flex flex-col items-center">
                        <div data-ring className="relative w-full max-w-[22rem] aspect-square">
                            <svg
                                className="h-full w-full overflow-visible"
                                viewBox="0 0 100 100"
                                role="img"
                                aria-label={`Commitment: ${team.value}% dedicated creative and AI team, ${magic.value}% CK's magic at work`}
                            >
                                <defs>
                                    <linearGradient id="why-red" x1="0" y1="0" x2="1" y2="1">
                                        <stop offset="0" stopColor="#c8141f" />
                                        <stop offset="0.55" stopColor="#8b0000" />
                                        <stop offset="1" stopColor="#5c0303" />
                                    </linearGradient>
                                    <linearGradient id="why-gold" x1="0" y1="0" x2="1" y2="1">
                                        <stop offset="0" stopColor="#f2dc9b" />
                                        <stop offset="0.5" stopColor="#d4af37" />
                                        <stop offset="1" stopColor="#9a7524" />
                                    </linearGradient>
                                </defs>
                                {/* Bezel: 60 fine ticks, with gold marks every five */}
                                <circle r="48.4" cx="50" cy="50" fill="none" pathLength="60" strokeDasharray="0.07 0.93" strokeWidth="1.6" stroke="rgba(243,235,220,0.2)" transform="rotate(-90.4 50 50)" />
                                <circle r="48" cx="50" cy="50" fill="none" pathLength="12" strokeDasharray="0.03 0.97" strokeWidth="2.6" stroke="rgba(212,175,55,0.65)" transform="rotate(-90.45 50 50)" />
                                {/* Track */}
                                <circle r="41" cx="50" cy="50" fill="none" strokeWidth="3" stroke="rgba(243,235,220,0.07)" />
                                {/* Normalized circumference keeps the two segments exactly 80/20. */}
                                <circle
                                    data-arc="team"
                                    pathLength="100"
                                    strokeDasharray={`${team.value} ${100 - team.value}`}
                                    strokeWidth="3"
                                    strokeLinecap="butt"
                                    stroke="url(#why-red)"
                                    fill="none"
                                    r="41" cx="50" cy="50"
                                    transform="rotate(-90 50 50)"
                                />
                                <circle
                                    data-arc="magic"
                                    pathLength="100"
                                    strokeDasharray={`${magic.value} ${100 - magic.value}`}
                                    strokeDashoffset={-team.value}
                                    strokeWidth="3"
                                    strokeLinecap="butt"
                                    stroke="url(#why-gold)"
                                    fill="none"
                                    r="41" cx="50" cy="50"
                                    transform="rotate(-90 50 50)"
                                />
                                {/* Inner hairline */}
                                <circle r="36.5" cx="50" cy="50" fill="none" strokeWidth="0.3" stroke="rgba(212,175,55,0.22)" />
                            </svg>
                            <div data-ring-label className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                <span className="lux-foil font-display font-normal text-[clamp(3rem,2rem+3vw,4.75rem)] leading-none lining-nums">{whyUs.commitment.total}</span>
                                <span className="lux-label mt-3 text-ivory-dim">{whyUs.commitment.label}</span>
                            </div>
                        </div>

                        <dl className="mt-10 w-full max-w-[22rem] divide-y divide-gold/15 border-y border-gold/15">
                            <div data-legend className="flex items-center gap-4 py-4">
                                <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 rotate-45 bg-gradient-to-br from-[#c8141f] to-[#5c0303] ring-1 ring-gold/40" />
                                <dt className="flex-1 text-sm text-ivory/85">{team.label}</dt>
                                <dd className="font-display text-2xl font-normal lining-nums text-ivory">{team.value}%</dd>
                            </div>
                            <div data-legend className="flex items-center gap-4 py-4">
                                <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 rotate-45 bg-gradient-to-br from-gold-light to-gold-deep" />
                                <dt className="flex-1 text-sm text-ivory/85">{magic.label}</dt>
                                <dd className="font-display text-2xl font-normal lining-nums text-gold-light">{magic.value}%</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>

            {/* Stats strip */}
            <div data-stats className="relative mt-28 md:mt-40 border-y border-gold/20">
                <dl className="mx-auto grid max-w-[1600px] grid-cols-2 md:grid-cols-4">
                    {whyUs.stats.map((stat, i) => (
                        <div
                            key={stat.label}
                            data-stat
                            className={`flex flex-col-reverse justify-end px-5 md:px-10 py-10 md:py-14 border-gold/15 ${i % 2 === 1 ? 'border-l' : ''} ${i >= 2 ? 'border-t md:border-t-0' : ''} ${i === 2 ? 'md:border-l' : ''}`}
                        >
                            <dt className="mt-3 text-[0.62rem] md:text-[0.68rem] font-medium uppercase tracking-[0.26em] text-ivory-dim">{stat.label}</dt>
                            <dd className="font-display font-normal text-[clamp(3rem,1.5rem+5vw,7rem)] leading-none tracking-[-0.02em] lining-nums">
                                <span className="lux-foil"><span data-count={stat.value}>{stat.value}</span>{stat.suffix}</span>
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
};

export default WhyUs;
