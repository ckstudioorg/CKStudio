import React, { useRef } from 'react';
import { gsap } from '../lib/smoothScroll';
import { revealLines, useGsap } from '../lib/motion';
import { visionMission } from '../content/about';
import SectionLabel from '../components/ui/SectionLabel';

const VisionMission: React.FC = () => {
    const root = useRef<HTMLElement>(null);

    useGsap(() => {
        const q = gsap.utils.selector(root);
        revealLines(q('[data-vision]')[0], { start: 'top 80%' });
        revealLines(q('[data-mission-title]')[0]);

        // Mission rows: divider draws across, then the row text rises in
        q('[data-row]').forEach((row: Element) => {
            const tl = gsap.timeline({ scrollTrigger: { trigger: row, start: 'top 90%', once: true } });
            tl.fromTo(row.querySelector('[data-rule]'), { scaleX: 0 }, { scaleX: 1, duration: 1.2, ease: 'expo.inOut' })
                .from(row.querySelectorAll('[data-row-in]'), { yPercent: 110, duration: 1, ease: 'expo.out', stagger: 0.06 }, 0.25);
        });
    }, root);

    return (
        <section id="vision-mission" ref={root} aria-labelledby="vision-mission-title" className="relative bg-paper text-ink py-28 md:py-40">
            <h2 id="vision-mission-title" className="sr-only">Vision and Mission</h2>
            <div className="mx-auto max-w-[1600px] px-5 md:px-10">
                {/* Vision */}
                <div className="grid gap-8 md:grid-cols-12 md:gap-10">
                    <div className="md:col-span-3">
                        <SectionLabel index="03">{visionMission.vision.label}</SectionLabel>
                    </div>
                    <blockquote className="md:col-span-9">
                        <p data-vision className="font-heading font-medium text-[clamp(1.6rem,1rem+2.3vw,3.5rem)] leading-[1.12] tracking-[-0.02em]">
                            <span className="text-ck-red">“</span>{visionMission.vision.text}<span className="text-ck-red">”</span>
                        </p>
                    </blockquote>
                </div>

                {/* Mission */}
                <div className="mt-28 md:mt-44">
                    <div className="flex items-end justify-between gap-6">
                        <h3 data-mission-title className="font-heading font-semibold text-giant text-ck-red">{visionMission.mission.label}</h3>
                        <span aria-hidden="true" className="pb-3 font-heading text-lg md:text-2xl tabular-nums text-ink-soft">
                            ({String(visionMission.mission.items.length).padStart(2, '0')})
                        </span>
                    </div>

                    <ol className="mt-10 md:mt-14">
                        {visionMission.mission.items.map((item, i) => (
                            <li key={item} data-row className="group relative overflow-hidden">
                                <span data-rule aria-hidden="true" className="absolute inset-x-0 top-0 h-px origin-left bg-ink" />
                                {/* Red wash slides up on hover */}
                                <span aria-hidden="true" className="absolute inset-0 translate-y-full bg-ck-red transition-transform duration-700 ease-cinema group-hover:translate-y-0" />
                                <div className="relative flex items-center gap-5 md:gap-10 py-5 md:py-7 px-1 md:px-4">
                                    <span className="overflow-hidden">
                                        <span data-row-in className="block w-8 md:w-14 text-xs md:text-sm font-medium tabular-nums tracking-[0.2em] text-ink-soft transition-colors duration-500 group-hover:text-paper/70">
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                    </span>
                                    <span className="flex-1 overflow-hidden pb-[0.06em]">
                                        <span data-row-in className="block">
                                            <span className="block font-heading font-semibold text-[clamp(1.6rem,1rem+3vw,4.5rem)] leading-[1.05] tracking-[-0.03em] transition-[color,translate] duration-700 ease-cinema group-hover:translate-x-3 group-hover:text-paper">
                                                {item}
                                            </span>
                                        </span>
                                    </span>
                                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="hidden md:block h-8 w-8 -rotate-45 text-ck-red transition-all duration-700 ease-cinema group-hover:rotate-0 group-hover:text-paper">
                                        <path d="M4 12h16m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </li>
                        ))}
                        <li aria-hidden="true" className="h-px bg-ink" />
                    </ol>
                </div>
            </div>
        </section>
    );
};

export default VisionMission;
