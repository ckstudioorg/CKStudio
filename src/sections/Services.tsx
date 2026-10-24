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
        <section ref={root} aria-labelledby="services-title" className="relative bg-noir text-ivory py-28 md:py-44">
            {/* Deep red light behind the heading */}
            <div aria-hidden="true" className="lux-glow-top pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse 42% 30% at 14% 10%, rgba(139,0,0,0.22), rgba(10,8,7,0) 72%)' }} />

            <div className="relative mx-auto grid max-w-[1600px] gap-14 px-5 md:px-10 lg:grid-cols-12 lg:gap-10">
                {/* Heading stays in view while the list scrolls */}
                <div className="lg:col-span-5">
                    <div className="lg:sticky lg:top-32">
                        <SectionLabel tone="lux" index="04">{services.label}</SectionLabel>
                        <h2 id="services-title" data-title className="mt-8 font-display font-normal text-section">
                            {services.title.lead} <em className="lux-foil">{services.title.highlight}</em>
                        </h2>
                        <p data-intro className="mt-8 max-w-md text-base md:text-lg leading-[1.8] text-ivory-soft">{services.intro}</p>

                        {/* Large gold number of the open service, like a gallery index (wide screens only) */}
                        <p aria-hidden="true" className="mt-16 hidden items-baseline gap-4 font-display italic lining-nums lg:flex">
                            <span key={open} className={`lux-foil lux-rise text-[clamp(5rem,2rem+4.5vw,8.5rem)] leading-none ${open < 0 ? 'invisible' : ''}`}>
                                {pad(Math.max(open, 0) + 1)}
                            </span>
                            <span className="text-2xl text-ivory-dim">/ {pad(services.list.length)}</span>
                        </p>
                    </div>
                </div>

                {/* Expandable list */}
                <ul className="lg:col-span-7">
                    {services.list.map((service, i) => {
                        const isOpen = open === i;
                        const panelId = `${baseId}-panel-${i}`;
                        return (
                            <li key={service.title} data-row className="relative">
                                <span data-rule aria-hidden="true" className="absolute inset-x-0 top-0 h-px origin-left bg-gold/20" />
                                <h3>
                                    <button
                                        type="button"
                                        onClick={() => setOpen(isOpen ? -1 : i)}
                                        aria-expanded={isOpen}
                                        aria-controls={panelId}
                                        className="group flex w-full items-start gap-4 md:gap-8 py-7 md:py-9 text-left"
                                    >
                                        <span className="overflow-hidden pt-2 md:pt-4">
                                            <span data-row-in className={`block w-8 md:w-12 font-display text-base md:text-xl italic lining-nums transition-colors duration-500 ${isOpen ? 'text-gold-light' : 'text-gold/60 group-hover:text-gold-light'}`}>
                                                {pad(i + 1)}
                                            </span>
                                        </span>
                                        <span className="flex-1 overflow-hidden pb-[0.1em]">
                                            <span data-row-in className="block">
                                                <span className={`block font-display font-normal text-[clamp(1.75rem,1rem+3.2vw,4.75rem)] leading-[1.08] tracking-[-0.015em] transition-[color,translate] duration-700 ease-cinema group-hover:translate-x-2 ${isOpen ? 'italic text-gold-light' : 'text-ivory group-hover:text-gold-light'}`}>
                                                    {service.title}
                                                </span>
                                            </span>
                                        </span>
                                        {/* Fine gold ring: a plus that turns into a minus */}
                                        <span aria-hidden="true" className={`relative mt-2 md:mt-4 flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-full border transition-colors duration-500 ${isOpen ? 'border-gold bg-gold text-noir' : 'border-gold/35 text-gold-light group-hover:border-gold'}`}>
                                            <span className="absolute h-px w-4 bg-current" />
                                            <span className={`absolute h-4 w-px bg-current transition-transform duration-500 ease-cinema ${isOpen ? 'scale-y-0' : 'scale-y-100'}`} />
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
                                        <div className={`pb-12 md:pb-14 md:pl-20 transition-opacity duration-500 ${isOpen ? 'opacity-100 delay-150' : 'opacity-0'}`}>
                                            <p className="max-w-2xl text-base md:text-lg leading-[1.8] text-ivory-soft">{service.description}</p>
                                            <ul className="mt-8 grid max-w-3xl gap-x-10 gap-y-3.5 sm:grid-cols-2">
                                                {service.items.map((item) => (
                                                    <li key={item} className="flex items-start gap-3.5 text-[0.95rem] leading-[1.55] text-ivory/85">
                                                        <span aria-hidden="true" className="mt-[0.6em] h-[5px] w-[5px] shrink-0 rotate-45 bg-gold/80" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                            <Link
                                                to={paths.service(service.slug)}
                                                tabIndex={isOpen ? undefined : -1}
                                                className="group/link mt-10 inline-flex items-center gap-4 text-gold-light"
                                            >
                                                <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/50 transition-colors duration-500 group-hover/link:border-gold group-hover/link:bg-gold group-hover/link:text-noir">
                                                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 transition-transform duration-500 ease-cinema group-hover/link:rotate-45">
                                                        <path d="M6 18 18 6m0 0H8m10 0v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </span>
                                                <span className="text-[0.72rem] font-medium uppercase leading-[1.7] tracking-[0.24em] underline decoration-gold/30 underline-offset-[6px] transition-colors duration-500 group-hover/link:decoration-gold">
                                                    Explore {service.title}
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                    <li aria-hidden="true" className="h-px bg-gold/20" />
                </ul>
            </div>
        </section>
    );
};

export default Services;
