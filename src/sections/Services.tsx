import React, { useId, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { paths } from '../lib/paths';
import { gsap, ScrollTrigger } from '../lib/smoothScroll';
import { revealLines, riseIn, useGsap } from '../lib/motion';
import { services } from '../content/services';
import SectionLabel from '../components/ui/SectionLabel';

const pad = (n: number) => String(n).padStart(2, '0');

const Services: React.FC = () => {
    const root = useRef<HTMLElement>(null);
    const [open, setOpen] = useState(0);
    const baseId = useId();

    useGsap(() => {
        const q = gsap.utils.selector(root);
        revealLines(q('[data-title]')[0]);
        riseIn(q('[data-intro]'), q('[data-intro]')[0]);
        q('[data-row]').forEach((row: Element) => {
            gsap.timeline({ scrollTrigger: { trigger: row, start: 'top 90%', once: true } })
                .fromTo(row.querySelector('[data-rule]'), { scaleX: 0 }, { scaleX: 1, duration: 1.2, ease: 'expo.inOut' })
                .from(row.querySelectorAll('[data-row-in]'), { yPercent: 110, duration: 1, ease: 'expo.out', stagger: 0.06 }, 0.25);
        });
    }, root);

    return (
        <section ref={root} aria-labelledby="services-title" className="relative bg-paper text-ink py-28 md:py-40">
            <div className="mx-auto grid max-w-[1600px] gap-14 px-5 md:px-10 lg:grid-cols-12 lg:gap-10">
                {/* Heading stays in view while the list scrolls */}
                <div className="lg:col-span-5">
                    <div className="lg:sticky lg:top-32">
                        <SectionLabel index="04">{services.label}</SectionLabel>
                        <h2 id="services-title" data-title className="mt-8 font-heading font-semibold text-[clamp(2.75rem,1rem+4vw,6rem)] leading-[0.95] tracking-[-0.04em]">
                            {services.title.lead} <span className="text-ck-red">{services.title.highlight}</span>
                        </h2>
                        <p data-intro className="mt-8 max-w-md text-base md:text-lg leading-relaxed text-ink-soft">{services.intro}</p>
                    </div>
                </div>

                {/* Expandable list */}
                <ul className="lg:col-span-7">
                    {services.list.map((service, i) => {
                        const isOpen = open === i;
                        const panelId = `${baseId}-panel-${i}`;
                        return (
                            <li key={service.title} data-row className="relative">
                                <span data-rule aria-hidden="true" className="absolute inset-x-0 top-0 h-px origin-left bg-ink" />
                                <h3>
                                    <button
                                        type="button"
                                        onClick={() => setOpen(isOpen ? -1 : i)}
                                        aria-expanded={isOpen}
                                        aria-controls={panelId}
                                        className="group flex w-full items-start gap-4 md:gap-8 py-6 md:py-8 text-left"
                                    >
                                        <span className="overflow-hidden pt-2 md:pt-4">
                                            <span data-row-in className={`block w-8 md:w-12 text-xs md:text-sm font-medium tabular-nums tracking-[0.2em] transition-colors duration-500 ${isOpen ? 'text-ck-red' : 'text-ink-soft'}`}>
                                                {pad(i + 1)}
                                            </span>
                                        </span>
                                        <span className="flex-1 overflow-hidden pb-[0.08em]">
                                            <span data-row-in className="block">
                                                <span className={`block font-heading font-semibold text-[clamp(1.75rem,1rem+3.2vw,4.75rem)] leading-[1.02] tracking-[-0.035em] transition-[color,translate] duration-700 ease-cinema group-hover:translate-x-2 ${isOpen ? 'text-ck-red' : 'text-ink group-hover:text-ck-red'}`}>
                                                    {service.title}
                                                </span>
                                            </span>
                                        </span>
                                        {/* Plus that turns into a minus */}
                                        <span aria-hidden="true" className={`relative mt-2 md:mt-4 flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-full border transition-colors duration-500 ${isOpen ? 'border-ck-red bg-ck-red text-paper' : 'border-ink-faint text-ink group-hover:border-ck-red group-hover:text-ck-red'}`}>
                                            <span className="absolute h-[1.5px] w-4 bg-current" />
                                            <span className={`absolute h-4 w-[1.5px] bg-current transition-transform duration-500 ease-cinema ${isOpen ? 'scale-y-0' : 'scale-y-100'}`} />
                                        </span>
                                    </button>
                                </h3>

                                {/* Panel: grows open smoothly */}
                                <div
                                    id={panelId}
                                    role="region"
                                    aria-label={service.title}
                                    onTransitionEnd={(e) => { if (e.propertyName === 'grid-template-rows') ScrollTrigger.refresh(); }}
                                    className={`grid transition-[grid-template-rows] duration-700 ease-cinema ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                                >
                                    <div className="overflow-hidden">
                                        <div className={`pb-10 md:pb-12 md:pl-20 transition-opacity duration-500 ${isOpen ? 'opacity-100 delay-150' : 'opacity-0'}`}>
                                            <p className="max-w-2xl text-base md:text-lg text-ink-soft">{service.description}</p>
                                            <ul className="mt-6 flex flex-wrap gap-2.5">
                                                {service.items.map((item) => (
                                                    <li key={item} className="rounded-full border border-ink-faint px-4 py-2 text-sm text-ink transition-colors duration-300 hover:border-ck-red hover:text-ck-red">
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                            <Link
                                                to={paths.service(service.slug)}
                                                tabIndex={isOpen ? undefined : -1}
                                                className="group/link mt-8 inline-flex items-center gap-3 rounded-full bg-ck-red px-6 py-3.5 text-sm font-medium uppercase tracking-[0.12em] text-paper transition-colors duration-500 hover:bg-ink"
                                            >
                                                Explore {service.title}
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
                    <li aria-hidden="true" className="h-px bg-ink" />
                </ul>
            </div>
        </section>
    );
};

export default Services;
