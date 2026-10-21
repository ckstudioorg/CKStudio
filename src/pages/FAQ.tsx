import React, { useId, useMemo, useRef, useState } from 'react';
import { gsap, ScrollTrigger } from '../lib/smoothScroll';
import { revealLines, riseIn, useGsap } from '../lib/motion';
import { faqPage, faqs } from '../content/faq';
import SectionLabel from '../components/ui/SectionLabel';

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
        <div ref={root} className="bg-paper text-ink">
            <div className="mx-auto grid max-w-[1600px] gap-14 px-5 md:px-10 pt-16 md:pt-24 pb-28 md:pb-40 lg:grid-cols-12 lg:gap-10">
                {/* Heading, search and categories */}
                <div className="lg:col-span-5">
                    <div className="lg:sticky lg:top-32">
                        <SectionLabel>{faqPage.label}</SectionLabel>
                        <h1 data-title className="mt-8 font-heading font-semibold text-[clamp(2.75rem,1rem+4.4vw,6.5rem)] leading-[0.95] tracking-[-0.04em]">
                            {faqPage.title.lead} <span className="text-ck-red">{faqPage.title.highlight}</span>
                        </h1>
                        <p data-intro className="mt-8 max-w-md text-base md:text-lg leading-relaxed text-ink-soft">{faqPage.intro}</p>

                        <label data-intro className="relative mt-10 block max-w-md">
                            <span className="sr-only">Search questions</span>
                            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft">
                                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" /><path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                            <input
                                type="search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder={faqPage.searchPlaceholder}
                                className="w-full rounded-full border border-ink-faint bg-paper py-3.5 pl-11 pr-4 text-sm text-ink placeholder:text-ink-soft focus:border-ck-red focus:outline-none"
                            />
                        </label>
                        <div data-intro className="mt-5 flex flex-wrap gap-2">
                            {categories.map((c) => (
                                <button
                                    key={c}
                                    type="button"
                                    onClick={() => setCategory(c)}
                                    aria-pressed={category === c}
                                    className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] transition-colors duration-300 ${
                                        category === c ? 'border-ck-red bg-ck-red text-paper' : 'border-ink-faint text-ink hover:border-ck-red hover:text-ck-red'
                                    }`}
                                >
                                    {c}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Questions */}
                <div data-list className="lg:col-span-7">
                    {filtered.length === 0 && <p className="border-t border-ink py-16 text-ink-soft">{faqPage.empty}</p>}
                    <ul>
                        {filtered.map((faq) => {
                            const isOpen = open === faq.i;
                            const panelId = `${baseId}-${faq.i}`;
                            return (
                                <li key={faq.question} data-row className="border-t border-ink">
                                    <h2>
                                        <button
                                            type="button"
                                            onClick={() => setOpen(isOpen ? null : faq.i)}
                                            aria-expanded={isOpen}
                                            aria-controls={panelId}
                                            className="group flex w-full items-start gap-4 md:gap-8 py-6 md:py-7 text-left"
                                        >
                                            <span className={`w-8 pt-1.5 text-xs font-medium tabular-nums tracking-[0.2em] transition-colors ${isOpen ? 'text-ck-red' : 'text-ink-soft'}`}>{pad(faq.i + 1)}</span>
                                            <span className={`flex-1 font-heading text-[clamp(1.2rem,1rem+0.9vw,1.75rem)] font-semibold leading-snug tracking-[-0.02em] transition-colors duration-300 ${isOpen ? 'text-ck-red' : 'group-hover:text-ck-red'}`}>
                                                {faq.question}
                                            </span>
                                            <span aria-hidden="true" className={`relative mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-500 ${isOpen ? 'border-ck-red bg-ck-red text-paper' : 'border-ink-faint group-hover:border-ck-red group-hover:text-ck-red'}`}>
                                                <span className="absolute h-[1.5px] w-3.5 bg-current" />
                                                <span className={`absolute h-3.5 w-[1.5px] bg-current transition-transform duration-500 ease-cinema ${isOpen ? 'scale-y-0' : ''}`} />
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
                                            <p className={`pb-8 pl-12 md:pl-16 pr-12 text-base md:text-lg leading-relaxed text-ink-soft transition-opacity duration-500 ${isOpen ? 'opacity-100 delay-150' : 'opacity-0'}`}>
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                    {filtered.length > 0 && <div className="h-px bg-ink" />}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
