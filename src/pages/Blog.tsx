import React, { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from '../lib/smoothScroll';
import { revealLines, riseIn, useGsap } from '../lib/motion';
import { articles, blogPage, formatDate, readTime } from '../content/blog';
import SectionLabel from '../components/ui/SectionLabel';
import ArticleCover from '../components/ui/ArticleCover';
import { paths } from '../lib/paths';
import { filterButton, searchField, SearchIcon } from '../components/ui/Filters';

const Blog: React.FC = () => {
    const root = useRef<HTMLDivElement>(null);
    const [category, setCategory] = useState('All');
    const [search, setSearch] = useState('');

    const categories = useMemo(() => ['All', ...Array.from(new Set(articles.map((a) => a.category)))], []);
    const term = search.trim().toLowerCase();
    const filtered = articles.filter((a) =>
        (category === 'All' || a.category === category) &&
        (!term || [a.title, a.excerpt, ...a.tags].some((t) => t.toLowerCase().includes(term))),
    );
    const [featured, ...rest] = filtered;

    useGsap(() => {
        const q = gsap.utils.selector(root);
        revealLines(q('[data-title]')[0], { start: 'top 95%' });
        riseIn(q('[data-intro]'), q('[data-intro]')[0], { start: 'top 95%' });
    }, root);

    return (
        <div ref={root} className="relative bg-noir text-ivory">
            {/* Deep red light high on the right */}
            <div aria-hidden="true" className="lux-glow-top pointer-events-none absolute inset-x-0 top-0 h-[50rem]" style={{ background: 'radial-gradient(ellipse 45% 45% at 85% 12%, rgba(139,0,0,0.22), rgba(10,8,7,0) 72%)' }} />

            <header className="relative mx-auto max-w-[1600px] px-5 md:px-10 pt-16 md:pt-24">
                <SectionLabel>{blogPage.label}</SectionLabel>
                <h1 data-title className="mt-8 max-w-[14ch] font-display font-normal text-[clamp(3.5rem,1rem+10vw,12rem)] leading-[0.92] tracking-[-0.025em]">
                    {blogPage.title.lead} <em className="lux-foil">{blogPage.title.highlight}</em>
                </h1>
                <p data-intro className="mt-8 max-w-xl text-lg md:text-xl leading-[1.7] text-ivory-soft">{blogPage.intro}</p>

                {/* Search + categories */}
                <div data-intro className="mt-14 flex flex-col gap-6 border-y border-gold/15 py-6 md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-wrap gap-2">
                        {categories.map((c) => (
                            <button key={c} type="button" onClick={() => setCategory(c)} aria-pressed={category === c} className={filterButton(category === c)}>
                                {c}
                            </button>
                        ))}
                    </div>
                    <label className="relative block md:w-80">
                        <span className="sr-only">Search articles</span>
                        <SearchIcon />
                        <input
                            type="search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder={blogPage.searchPlaceholder}
                            className={searchField}
                        />
                    </label>
                </div>
                <p className="mt-5 text-[0.66rem] uppercase tracking-[0.26em] text-ivory-dim" aria-live="polite">
                    Showing {filtered.length} {filtered.length === 1 ? 'article' : 'articles'}
                </p>
            </header>

            <div className="relative mx-auto max-w-[1600px] px-5 md:px-10 pb-28 md:pb-40">
                {!featured && <p className="py-24 text-center text-ivory-soft">{blogPage.empty}</p>}

                {/* Featured article */}
                {featured && (
                    <Link to={paths.post(featured.slug)} className="group mt-12 grid gap-8 md:grid-cols-12 md:items-end">
                        <div className="relative md:col-span-7 aspect-[3/2] overflow-hidden">
                            <ArticleCover article={featured} index={articles.indexOf(featured)} large className="transition-transform duration-[1200ms] ease-cinema group-hover:scale-[1.03]" />
                            <span aria-hidden="true" className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/20 transition-[box-shadow] duration-700 group-hover:ring-gold/50" />
                        </div>
                        <div className="md:col-span-5">
                            <p className="lux-label">{featured.category}</p>
                            <h2 className="mt-4 font-display text-[clamp(1.9rem,1rem+2.6vw,3.5rem)] font-normal leading-[1.08] text-ivory transition-colors duration-500 group-hover:text-gold-light">
                                {featured.title}
                            </h2>
                            <p className="mt-5 text-base md:text-lg leading-[1.75] text-ivory-soft">{featured.excerpt}</p>
                            <p className="mt-6 text-[0.66rem] uppercase tracking-[0.24em] text-ivory-dim">{formatDate(featured.date)} · {readTime(featured)}</p>
                        </div>
                    </Link>
                )}

                {/* The rest */}
                {rest.length > 0 && (
                    <ul className="mt-20 md:mt-28 grid gap-x-6 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
                        {rest.map((a) => (
                            <li key={a.slug}>
                                <Link to={paths.post(a.slug)} className="group block">
                                    <div className="relative aspect-[3/2] overflow-hidden">
                                        <ArticleCover article={a} index={articles.indexOf(a)} className="transition-transform duration-[1200ms] ease-cinema group-hover:scale-[1.04]" />
                                        <span aria-hidden="true" className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/15 transition-[box-shadow] duration-700 group-hover:ring-gold/45" />
                                    </div>
                                    <p className="lux-label mt-6">{a.category}</p>
                                    <h2 className="mt-3 font-display text-[1.55rem] md:text-[1.75rem] font-normal leading-[1.15] text-ivory transition-colors duration-500 group-hover:text-gold-light">{a.title}</h2>
                                    <p className="mt-3 line-clamp-2 text-sm leading-[1.7] text-ivory-soft">{a.excerpt}</p>
                                    <p className="mt-4 text-[0.64rem] uppercase tracking-[0.24em] text-ivory-dim">{formatDate(a.date)} · {readTime(a)}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Blog;
