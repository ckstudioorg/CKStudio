import React, { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from '../lib/smoothScroll';
import { revealLines, riseIn, useGsap } from '../lib/motion';
import { glossaryPage, sortedGlossary } from '../content/glossary';
import { paths } from '../lib/paths';
import SectionLabel from '../components/ui/SectionLabel';
import { filterButton, searchField, SearchIcon } from '../components/ui/Filters';

/** Glossary (/glossary/): every term A–Z with its one-line meaning; each links to its own page. Words live in content/glossary.ts. */
const Glossary: React.FC = () => {
    const root = useRef<HTMLDivElement>(null);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('All');

    const categories = useMemo(() => ['All', ...Array.from(new Set(sortedGlossary.map((t) => t.category))).sort()], []);
    const word = search.trim().toLowerCase();
    const filtered = sortedGlossary.filter(
        (t) => (category === 'All' || t.category === category) && (!word || `${t.term} ${t.aka ?? ''} ${t.short}`.toLowerCase().includes(word)),
    );

    useGsap(() => {
        const q = gsap.utils.selector(root);
        revealLines(q('[data-title]')[0], { start: 'top 95%' });
        riseIn(q('[data-intro]'), q('[data-intro]')[0], { start: 'top 95%' });
    }, root);

    return (
        <div ref={root} className="relative bg-noir text-ivory">
            {/* Deep red light behind the heading */}
            <div aria-hidden="true" className="lux-glow-top pointer-events-none absolute inset-x-0 top-0 h-[50rem]" style={{ background: 'radial-gradient(ellipse 42% 42% at 14% 14%, rgba(139,0,0,0.22), rgba(10,8,7,0) 72%)' }} />

            <div className="relative mx-auto grid max-w-[1600px] gap-14 px-5 md:px-10 pt-16 md:pt-24 pb-28 md:pb-40 lg:grid-cols-12 lg:gap-10">
                {/* Heading, search and categories */}
                <div className="lg:col-span-5">
                    <div className="lg:sticky lg:top-32">
                        <SectionLabel>{glossaryPage.label}</SectionLabel>
                        <h1 data-title className="mt-8 font-display font-normal text-section">
                            {glossaryPage.title.lead} <em className="lux-foil">{glossaryPage.title.highlight}</em>
                        </h1>
                        <p data-intro className="mt-8 max-w-md text-base md:text-lg leading-[1.8] text-ivory-soft">{glossaryPage.intro}</p>

                        <label data-intro className="relative mt-10 block max-w-md">
                            <span className="sr-only">Search the glossary</span>
                            <SearchIcon />
                            <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder={glossaryPage.searchPlaceholder} className={searchField} />
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

                {/* Terms */}
                <div className="lg:col-span-7">
                    {filtered.length === 0 && <p className="border-t border-gold/20 py-16 text-ivory-soft">{glossaryPage.empty}</p>}
                    <dl>
                        {filtered.map((t) => (
                            <div key={t.slug} className="border-t border-gold/20 py-6 md:py-7">
                                <dt className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                                    <Link to={paths.term(t.slug)} className="font-display text-[clamp(1.4rem,1rem+1vw,1.9rem)] font-normal leading-[1.2] text-ivory transition-colors duration-500 hover:text-gold-light">
                                        {t.term}
                                    </Link>
                                    {t.aka && <span className="text-sm italic text-ivory-dim">{t.aka}</span>}
                                </dt>
                                <dd className="mt-3 max-w-[44rem] text-base md:text-[1.0625rem] leading-[1.75] text-ivory-soft">{t.short}</dd>
                            </div>
                        ))}
                    </dl>
                    {filtered.length > 0 && <div className="h-px bg-gold/20" />}
                </div>
            </div>
        </div>
    );
};

export default Glossary;
