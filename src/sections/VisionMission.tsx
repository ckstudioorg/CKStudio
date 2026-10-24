import React, { useId, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap, ScrollTrigger } from '../lib/smoothScroll';
import { revealLines, useGsap } from '../lib/motion';
import { visionMission } from '../content/about';
import SectionLabel from '../components/ui/SectionLabel';

const VisionMission: React.FC = () => {
    const root = useRef<HTMLElement>(null);
    const baseId = useId();
    const [open, setOpen] = useState(-1);

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
        <section id="vision-mission" ref={root} aria-labelledby="vision-mission-title" className="relative overflow-hidden bg-noir text-ivory py-28 md:py-44">
            {/* Soft gold light behind the vision statement */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 32% at 70% 12%, rgba(212,175,55,0.07), rgba(10,8,7,0) 70%)' }} />
            <h2 id="vision-mission-title" className="sr-only">Vision and Mission</h2>
            <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
                {/* Vision */}
                <div className="grid gap-8 md:grid-cols-12 md:gap-10">
                    <div className="md:col-span-3">
                        <SectionLabel tone="lux" index="03">{visionMission.vision.label}</SectionLabel>
                    </div>
                    <blockquote className="md:col-span-9">
                        <p data-vision className="font-display font-normal text-[clamp(1.6rem,1rem+2.3vw,3.5rem)] leading-[1.2] tracking-[-0.01em] text-ivory">
                            <span className="lux-foil inline-block">“</span>{visionMission.vision.text}<span className="lux-foil">”</span>
                        </p>
                    </blockquote>
                </div>

                {/* Mission */}
                <div className="mt-28 md:mt-44">
                    <div className="flex items-end justify-between gap-6">
                        <h3 data-mission-title className="font-display font-normal italic text-display"><span className="lux-foil">{visionMission.mission.label}</span></h3>
                        <span aria-hidden="true" className="pb-3 font-display text-lg md:text-2xl italic lining-nums text-gold-light/80">
                            ({String(visionMission.mission.items.length).padStart(2, '0')})
                        </span>
                    </div>

                    <ol className="mt-10 md:mt-14">
                        {visionMission.mission.items.map((item, i) => {
                            const isOpen = open === i;
                            const panelId = `${baseId}-mission-${i}`;
                            return (
                            <li key={item.title} data-row className="relative">
                                <span data-rule aria-hidden="true" className="absolute inset-x-0 top-0 h-px origin-left bg-gold/20" />
                                <h4>
                                    <button
                                        type="button"
                                        onClick={() => setOpen(isOpen ? -1 : i)}
                                        aria-expanded={isOpen}
                                        aria-controls={panelId}
                                        className="group relative block w-full overflow-hidden text-left"
                                    >
                                        {/* Deep red wash slides up on hover */}
                                        <span aria-hidden="true" className="absolute inset-0 translate-y-[102%] bg-gradient-to-r from-wine via-[#6e0202] to-wine-deep transition-transform duration-700 ease-cinema group-hover:translate-y-0" />
                                        <span className="relative flex items-center gap-5 md:gap-10 py-5 md:py-7 px-1 md:px-4">
                                            <span className="overflow-hidden">
                                                <span data-row-in className={`block w-8 md:w-14 font-display text-base md:text-xl italic lining-nums transition-colors duration-500 group-hover:text-gold-light ${isOpen ? 'text-gold-light' : 'text-gold/70'}`}>
                                                    {String(i + 1).padStart(2, '0')}
                                                </span>
                                            </span>
                                            <span className="flex-1 overflow-hidden pb-[0.06em]">
                                                <span data-row-in className="block">
                                                    <span className={`block font-display font-normal text-[clamp(1.6rem,1rem+3vw,4.5rem)] leading-[1.1] tracking-[-0.015em] transition-[color,translate] duration-700 ease-cinema group-hover:translate-x-3 group-hover:text-ivory ${isOpen ? 'italic text-gold-light' : 'text-ivory'}`}>
                                                        {item.title}
                                                    </span>
                                                </span>
                                            </span>
                                            {/* Arrow points up-right when closed, down when open */}
                                            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={`h-6 w-6 md:h-8 md:w-8 shrink-0 text-gold transition-all duration-700 ease-cinema group-hover:text-gold-light ${isOpen ? 'rotate-90' : '-rotate-45 group-hover:rotate-0'}`}>
                                                <path d="M4 12h16m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                    </button>
                                </h4>

                                {/* Panel: grows open smoothly */}
                                <div
                                    id={panelId}
                                    role="region"
                                    aria-label={item.title}
                                    onTransitionEnd={(e) => { if (e.propertyName === 'grid-template-rows') ScrollTrigger.refresh(); }}
                                    className={`grid transition-[grid-template-rows] duration-700 ease-cinema ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                                >
                                    <div className="overflow-hidden">
                                        <div className={`pb-8 md:pb-10 pl-[3.25rem] md:pl-[7.5rem] pr-1 md:pr-4 transition-opacity duration-500 ${isOpen ? 'opacity-100 delay-150' : 'opacity-0'}`}>
                                            <p className="max-w-2xl text-base md:text-lg leading-[1.8] text-ivory-soft">{item.text}</p>
                                            <Link
                                                to={item.link.to}
                                                tabIndex={isOpen ? undefined : -1}
                                                className="group/link mt-5 inline-flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-gold-light"
                                            >
                                                <span className="underline decoration-gold/30 underline-offset-[6px] transition-colors group-hover/link:decoration-gold">{item.link.label}</span>
                                                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4 transition-transform duration-500 ease-cinema group-hover/link:rotate-45">
                                                    <path d="M6 18 18 6m0 0H8m10 0v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            );
                        })}
                        <li aria-hidden="true" className="h-px bg-gold/20" />
                    </ol>
                </div>
            </div>
        </section>
    );
};

export default VisionMission;
