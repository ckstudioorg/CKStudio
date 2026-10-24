import React, { useId, useMemo, useRef, useState } from 'react';
import { gsap, ScrollTrigger } from '../lib/smoothScroll';
import { revealLines, riseIn, useGsap } from '../lib/motion';
import { faqPage, faqs } from '../content/faq';
import SectionLabel from '../components/ui/SectionLabel';
import { filterButton, searchField, SearchIcon } from '../components/ui/Filters';

const pad = (n: number) => String(n).padStart(2, '0');

const FAQ: React.FC = () => {
    const root = useRef<HTMLDivElement>(null);
    const baseId = useId();
    const [open, setOpen] = useState<number | null>(0);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('All');

    const categories = useMemo(() => ['All', ...Array.from(new Set(faqs.map((f) => f.category)))], []);
    const term = search.trim().toLowerCase();
    const filtered = faqs
        .map((faq, i) => ({ ...faq, i }))
        .filter((f) => (category === 'All' || f.category === category) && (!term || `${f.question} ${f.answer}`.toLowerCase().includes(term)));

    useGsap(() => {
        const q = gsap.utils.selector(root);
        revealLines(q('[data-title]')[0], { start: 'top 95%' });
        riseIn(q('[data-intro]'), q('[data-intro]')[0], { start: 'top 95%' });
        riseIn(q('[data-row]'), q('[data-list]')[0], { stagger: 0.06, start: 'top 95%' });
    }, root);

    return (
        <div ref={root} className="relative bg-noir text-ivory">
            {/* Deep red light behind the heading */}
            <div aria-hidden="true" className="lux-glow-top pointer-events-none absolute inset-x-0 top-0 h-[50rem]" style={{ background: 'radial-gradient(ellipse 42% 42% at 14% 14%, rgba(139,0,0,0.22), rgba(10,8,7,0) 72%)' }} />

            <div className="relative mx-auto grid max-w-[1600px] gap-14 px-5 md:px-10 pt-16 md:pt-24 pb-28 md:pb-40 lg:grid-cols-12 lg:gap-10">
                {/* Heading, search and categories */}
                <div className="lg:col-span-5">
                    <div className="lg:sticky lg:top-32">
                        <SectionLabel tone="lux">{faqPage.label}</SectionLabel>
                        <h1 data-title className="mt-8 font-display font-normal text-section">
                            {faqPage.title.lead} <em className="lux-foil">{faqPage.title.highlight}</em>
                        </h1>
                        <p data-intro className="mt-8 max-w-md text-base md:text-lg leading-[1.8] text-ivory-soft">{faqPage.intro}</p>

                        <label data-intro className="relative mt-10 block max-w-md">
                            <span className="sr-only">Search questions</span>
                            <SearchIcon />
                            <input
                                type="search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder={faqPage.searchPlaceholder}
                                className={searchField}
                            />
                        </label>
                        <div data-intro className="mt-6 flex flex-wrap gap-2">
                            {categories.map((c) => (
                                <button key={c} type="button" onClick={() => setCategory(c)} aria-pressed={category === c} className={filterButton(category === c)}>
                                    {c}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Questions */}
                <div data-list className="lg:col-span-7">
                    {filtered.length === 0 && <p className="border-t border-gold/20 py-16 text-ivory-soft">{faqPage.empty}</p>}
                    <ul>
                        {filtered.map((faq) => {
                            const isOpen = open === faq.i;
                            const panelId = `${baseId}-${faq.i}`;
                            return (
                                <li key={faq.question} data-row className="border-t border-gold/20">
                                    <h2>
                                        <button
                                            type="button"
                                            onClick={() => setOpen(isOpen ? null : faq.i)}
                                            aria-expanded={isOpen}
                                            aria-controls={panelId}
                                            className="group flex w-full items-start gap-4 md:gap-8 py-6 md:py-7 text-left"
                                        >
                                            <span className={`w-8 pt-1 font-display text-base italic lining-nums transition-colors duration-500 ${isOpen ? 'text-gold-light' : 'text-gold/60 group-hover:text-gold-light'}`}>{pad(faq.i + 1)}</span>
                                            <span className={`flex-1 font-display text-[clamp(1.3rem,1rem+1vw,1.9rem)] font-normal leading-[1.25] transition-colors duration-500 ${isOpen ? 'italic text-gold-light' : 'text-ivory group-hover:text-gold-light'}`}>
                                                {faq.question}
                                            </span>
                                            <span aria-hidden="true" className={`relative mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-500 ${isOpen ? 'border-gold bg-gold text-noir' : 'border-gold/35 text-gold-light group-hover:border-gold'}`}>
                                                <span className="absolute h-px w-3.5 bg-current" />
                                                <span className={`absolute h-3.5 w-px bg-current transition-transform duration-500 ease-cinema ${isOpen ? 'scale-y-0' : ''}`} />
                                            </span>
                                        </button>
                                    </h2>
                                    <div
                                        id={panelId}
                                        role="region"
                                        aria-label={faq.question}
                                        onTransitionEnd={(e) => { if (e.propertyName === 'grid-template-rows') ScrollTrigger.refresh(); }}
                                        className={`grid transition-[grid-template-rows] duration-700 ease-cinema ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                                    >
                                        <div className="overflow-hidden">
                                            <p className={`pb-8 pl-12 md:pl-16 pr-12 text-base md:text-lg leading-[1.8] text-ivory-soft transition-opacity duration-500 ${isOpen ? 'opacity-100 delay-150' : 'opacity-0'}`}>
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                    {filtered.length > 0 && <div className="h-px bg-gold/20" />}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
