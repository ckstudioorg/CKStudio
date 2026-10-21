import React, { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from '../lib/smoothScroll';
import { revealLines, riseIn, useGsap } from '../lib/motion';
import { articles, blogPage, formatDate, readTime } from '../content/blog';
import SectionLabel from '../components/ui/SectionLabel';
import ArticleCover from '../components/ui/ArticleCover';
import { paths } from '../lib/seo';

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
        <div ref={root} className="bg-paper text-ink">
            <header className="mx-auto max-w-[1600px] px-5 md:px-10 pt-16 md:pt-24">
                <SectionLabel>{blogPage.label}</SectionLabel>
                <h1 data-title className="mt-8 max-w-[14ch] font-heading font-semibold text-mega">
                    {blogPage.title.lead} <span className="text-ck-red">{blogPage.title.highlight}</span>
                </h1>
                <p data-intro className="mt-8 max-w-xl text-lg md:text-xl text-ink-soft">{blogPage.intro}</p>

                {/* Search + categories */}
                <div data-intro className="mt-14 flex flex-col gap-5 border-y border-ink-faint py-5 md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-wrap gap-2">
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
                    <label className="relative block md:w-80">
                        <span className="sr-only">Search articles</span>
                        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft">
                            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" /><path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        <input
                            type="search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder={blogPage.searchPlaceholder}
                            className="w-full rounded-full border border-ink-faint bg-paper py-3 pl-11 pr-4 text-sm text-ink placeholder:text-ink-soft focus:border-ck-red focus:outline-none"
                        />
                    </label>
                </div>
                <p className="mt-5 text-xs uppercase tracking-[0.2em] text-ink-soft" aria-live="polite">
                    Showing {filtered.length} {filtered.length === 1 ? 'article' : 'articles'}
                </p>
            </header>

            <div className="mx-auto max-w-[1600px] px-5 md:px-10 pb-28 md:pb-40">
                {!featured && <p className="py-24 text-center text-ink-soft">{blogPage.empty}</p>}

                {/* Featured article */}
                {featured && (
                    <Link to={paths.post(featured.slug)} className="group mt-10 grid gap-8 md:grid-cols-12 md:items-end">
                        <div className="md:col-span-7 aspect-[3/2] overflow-hidden rounded-[28px]">
                            <ArticleCover article={featured} index={articles.indexOf(featured)} large className="transition-transform duration-[1200ms] ease-cinema group-hover:scale-[1.03]" />
                        </div>
                        <div className="md:col-span-5">
                            <p className="text-xs font-medium uppercase tracking-[0.22em] text-ck-red">{featured.category}</p>
                            <h2 className="mt-4 font-heading text-[clamp(1.75rem,1rem+2.4vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.03em] transition-colors duration-300 group-hover:text-ck-red">
                                {featured.title}
                            </h2>
                            <p className="mt-5 text-base md:text-lg leading-relaxed text-ink-soft">{featured.excerpt}</p>
                            <p className="mt-6 text-xs uppercase tracking-[0.18em] text-ink-soft">{formatDate(featured.date)} · {readTime(featured)}</p>
                        </div>
                    </Link>
                )}

                {/* The rest */}
                {rest.length > 0 && (
                    <ul className="mt-20 md:mt-28 grid gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
                        {rest.map((a) => (
                            <li key={a.slug}>
                                <Link to={paths.post(a.slug)} className="group block">
                                    <div className="aspect-[3/2] overflow-hidden rounded-[22px]">
                                        <ArticleCover article={a} index={articles.indexOf(a)} className="transition-transform duration-[1200ms] ease-cinema group-hover:scale-[1.04]" />
                                    </div>
                                    <p className="mt-6 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-ck-red">{a.category}</p>
                                    <h2 className="mt-3 font-heading text-xl md:text-2xl font-semibold leading-tight tracking-[-0.02em] transition-colors duration-300 group-hover:text-ck-red">{a.title}</h2>
                                    <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-ink-soft">{a.excerpt}</p>
                                    <p className="mt-4 text-[0.68rem] uppercase tracking-[0.18em] text-ink-soft">{formatDate(a.date)} · {readTime(a)}</p>
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
