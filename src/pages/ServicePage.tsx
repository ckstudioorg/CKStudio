import React, { useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { gsap } from '../lib/smoothScroll';
import { revealLines, riseIn, useGsap } from '../lib/motion';
import { paths } from '../lib/seo';
import { getServicePage, servicePages, servicePageText as t } from '../content/servicePages';
import { portfolio } from '../content/work';
import { articles, formatDate, readTime } from '../content/blog';
import { whatsappUrl } from '../content/contact';
import SectionLabel from '../components/ui/SectionLabel';
import ArticleCover from '../components/ui/ArticleCover';

const Arrow: React.FC<{ className?: string }> = ({ className = '' }) => (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={`h-4 w-4 ${className}`}>
        <path d="M6 18 18 6m0 0H8m10 0v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const sectionTitle = 'font-heading text-title font-semibold';

/** A page for one service, e.g. /services/movie-post-production/. Words live in content/servicePages.ts. */
const ServicePage: React.FC = () => {
    const { slug } = useParams();
    const page = getServicePage(slug);
    const root = useRef<HTMLElement>(null);

    useGsap(() => {
        if (!page) return;
        const q = gsap.utils.selector(root);
        revealLines(q('[data-title]')[0], { start: 'top 95%' });
        riseIn(q('[data-intro]'), q('[data-intro]')[0], { start: 'top 95%' });
        q('[data-block]').forEach((block: Element) => riseIn(Array.from(block.querySelectorAll('[data-rise]')), block, { stagger: 0.05 }));
    }, root, [slug]);

    if (!page) {
        return (
            <div className="flex min-h-[70svh] items-center justify-center bg-paper px-5 text-center text-ink">
                <div>
                    <h1 className="font-heading text-title font-semibold">{t.notFound.title}</h1>
                    <p className="mt-4 text-ink-soft">{t.notFound.text}</p>
                    <Link to="/#services" className="mt-8 inline-flex rounded-full border border-ink px-6 py-3 text-sm font-medium uppercase tracking-[0.14em] transition-colors hover:bg-ink hover:text-paper">
                        {t.notFound.back}
                    </Link>
                </div>
            </div>
        );
    }

    const work = page.work
        ? portfolio.works.filter((w) => w.group === page.work!.group && w.youtubeId && (!page.work!.categories || page.work!.categories.includes(w.category))).slice(0, 3)
        : [];
    const reading = page.articles.map((s) => articles.find((a) => a.slug === s)).filter((a) => !!a).slice(0, 3);
    const others = servicePages.filter((p) => p.slug !== page.slug);

    return (
        <article ref={root} className="bg-paper text-ink">
            {/* Intro */}
            <header className="mx-auto max-w-[1600px] px-5 md:px-10 pt-14 md:pt-20 pb-16 md:pb-24">
                <nav aria-label="Breadcrumb" data-intro className="text-xs font-medium uppercase tracking-[0.18em] text-ink-soft">
                    <ol className="flex flex-wrap items-center gap-2">
                        <li><Link to="/" className="transition-colors hover:text-ck-red">Home</Link></li>
                        <li aria-hidden="true">/</li>
                        <li><Link to="/#services" className="transition-colors hover:text-ck-red">{t.breadcrumbServices}</Link></li>
                        <li aria-hidden="true">/</li>
                        <li aria-current="page" className="text-ink">{page.name}</li>
                    </ol>
                </nav>
                <SectionLabel className="mt-12">{t.label}</SectionLabel>
                <h1 data-title className="mt-6 max-w-[16ch] font-heading font-semibold text-[clamp(2.6rem,1rem+6vw,7.5rem)] leading-[0.95] tracking-[-0.045em]">
                    {page.headline.lead} <span className="text-ck-red">{page.headline.highlight}</span>
                </h1>
                <div className="mt-10 grid gap-10 md:grid-cols-12">
                    <p data-intro className="md:col-span-7 font-heading text-[clamp(1.2rem,0.9rem+1vw,1.75rem)] font-medium leading-[1.4] tracking-[-0.01em]">{page.intro}</p>
                    <div data-intro className="md:col-span-4 md:col-start-9 flex flex-wrap content-start gap-3">
                        <Link to="/#enquiry" className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-ck-red px-7 py-4 text-sm font-medium uppercase tracking-[0.12em] text-paper">
                            <span aria-hidden="true" className="absolute inset-0 translate-y-full rounded-full bg-ink transition-transform duration-500 ease-cinema group-hover:translate-y-0" />
                            <span className="relative">{t.cta.primary}</span>
                            <Arrow className="relative transition-transform duration-500 ease-cinema group-hover:rotate-45" />
                        </Link>
                        <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full border border-ink px-7 py-4 text-sm font-medium uppercase tracking-[0.12em] text-ink transition-colors duration-500 hover:bg-ink hover:text-paper">
                            {t.cta.secondary}
                        </a>
                    </div>
                </div>
            </header>

            <div className="mx-auto max-w-[1600px] px-5 md:px-10">
                {/* What's included */}
                <section data-block aria-labelledby="included-title" className="border-t border-ink pt-14 pb-20 md:pb-28">
                    <h2 id="included-title" data-rise className={sectionTitle}>{t.included}</h2>
                    <ol className="mt-10 grid gap-x-10 md:grid-cols-2">
                        {page.offerings.map((item, i) => (
                            <li key={item.title} data-rise className="flex gap-5 md:gap-8 border-b border-ink-faint py-6 md:py-8">
                                <span className="w-8 shrink-0 pt-1 text-xs font-medium tabular-nums tracking-[0.2em] text-ck-red">{String(i + 1).padStart(2, '0')}</span>
                                <div>
                                    <h3 className="font-heading text-xl md:text-2xl font-semibold tracking-[-0.02em]">{item.title}</h3>
                                    <p className="mt-2 text-base leading-relaxed text-ink-soft">{item.text}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </section>

                {/* Good for */}
                <section data-block aria-labelledby="goodfor-title" className="border-t border-ink pt-14 pb-20 md:pb-28 grid gap-8 md:grid-cols-12">
                    <h2 id="goodfor-title" data-rise className={`${sectionTitle} md:col-span-4`}>{t.goodFor}</h2>
                    <ul className="md:col-span-8 flex flex-wrap content-start gap-2.5">
                        {page.goodFor.map((g) => (
                            <li key={g} data-rise className="rounded-full border border-ink-faint px-5 py-2.5 text-sm md:text-base text-ink">{g}</li>
                        ))}
                    </ul>
                </section>

                {/* Recent work */}
                {work.length > 0 && (
                    <section data-block aria-labelledby="work-title" className="border-t border-ink pt-14 pb-20 md:pb-28">
                        <div className="flex flex-wrap items-end justify-between gap-4">
                            <h2 id="work-title" data-rise className={sectionTitle}>{t.work}</h2>
                            <Link data-rise to="/#portfolio" className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-ink-soft transition-colors hover:text-ck-red">
                                Full portfolio <Arrow className="h-3.5 w-3.5" />
                            </Link>
                        </div>
                        <ul className="mt-10 grid gap-6 md:grid-cols-3">
                            {work.map((w) => (
                                <li key={w.title} data-rise>
                                    <a href={w.url} target="_blank" rel="noopener noreferrer" className="group block">
                                        <div className="aspect-video overflow-hidden rounded-[22px] bg-ink/5">
                                            <img src={`https://img.youtube.com/vi/${w.youtubeId}/hqdefault.jpg`} alt={`${w.title} — ${w.category}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] ease-cinema group-hover:scale-[1.04]" />
                                        </div>
                                        <p className="mt-5 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-ck-red">{w.category}</p>
                                        <h3 className="mt-2 font-heading text-xl font-semibold tracking-[-0.02em] transition-colors group-hover:text-ck-red">{w.title}</h3>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Questions */}
                <section data-block aria-labelledby="faq-title" className="border-t border-ink pt-14 pb-20 md:pb-28 grid gap-8 md:grid-cols-12">
                    <h2 id="faq-title" data-rise className={`${sectionTitle} md:col-span-4`}>{t.faqs}</h2>
                    <dl className="md:col-span-8">
                        {page.faqs.map((f) => (
                            <div key={f.question} data-rise className="border-b border-ink-faint py-6 md:py-8 first:pt-0">
                                <dt className="font-heading text-xl md:text-2xl font-semibold tracking-[-0.02em]">{f.question}</dt>
                                <dd className="mt-3 text-base md:text-lg leading-relaxed text-ink-soft">{f.answer}</dd>
                            </div>
                        ))}
                    </dl>
                </section>

                {/* Related articles */}
                {reading.length > 0 && (
                    <section data-block aria-labelledby="reading-title" className="border-t border-ink pt-14 pb-20 md:pb-28">
                        <h2 id="reading-title" data-rise className={sectionTitle}>{t.articles}</h2>
                        <ul className="mt-10 grid gap-x-6 gap-y-12 md:grid-cols-3">
                            {reading.map((a) => (
                                <li key={a.slug} data-rise>
                                    <Link to={paths.post(a.slug)} className="group block">
                                        <div className="aspect-[3/2] overflow-hidden rounded-[22px]">
                                            <ArticleCover article={a} index={articles.indexOf(a)} className="transition-transform duration-[1200ms] ease-cinema group-hover:scale-[1.04]" />
                                        </div>
                                        <p className="mt-6 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-ck-red">{a.category}</p>
                                        <h3 className="mt-3 font-heading text-xl font-semibold leading-tight tracking-[-0.02em] transition-colors group-hover:text-ck-red">{a.title}</h3>
                                        <p className="mt-3 text-[0.68rem] uppercase tracking-[0.18em] text-ink-soft">{formatDate(a.date)} · {readTime(a)}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Call to action */}
                <aside data-block className="rounded-[28px] border border-ink-faint p-8 md:p-14 text-center">
                    <h2 data-rise className="font-heading text-[clamp(1.8rem,1rem+2.6vw,3.4rem)] font-semibold tracking-[-0.03em]">
                        {t.cta.title}
                    </h2>
                    <p data-rise className="mx-auto mt-3 max-w-xl text-ink-soft md:text-lg">{t.cta.text}</p>
                    <div data-rise className="mt-8 flex flex-wrap justify-center gap-3">
                        <Link to="/#enquiry" className="rounded-full bg-ck-red px-7 py-4 text-sm font-medium uppercase tracking-[0.12em] text-paper transition-colors hover:bg-ink">{t.cta.primary}</Link>
                        <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="rounded-full border border-ink px-7 py-4 text-sm font-medium uppercase tracking-[0.12em] text-ink transition-colors hover:bg-ink hover:text-paper">{t.cta.secondary}</a>
                    </div>
                </aside>

                {/* Other services */}
                <nav data-block aria-labelledby="others-title" className="pt-20 md:pt-28 pb-28 md:pb-40">
                    <h2 id="others-title" data-rise className="text-xs font-medium uppercase tracking-[0.25em] text-ink-soft">{t.others}</h2>
                    <ul className="mt-6 border-t border-ink">
                        {others.map((o) => (
                            <li key={o.slug} data-rise className="border-b border-ink-faint">
                                <Link to={paths.service(o.slug)} className="group flex items-center justify-between gap-6 py-5 md:py-7">
                                    <span className="font-heading text-[clamp(1.4rem,1rem+1.8vw,2.6rem)] font-semibold tracking-[-0.03em] transition-[color,translate] duration-500 ease-cinema group-hover:translate-x-2 group-hover:text-ck-red">{o.name}</span>
                                    <Arrow className="h-6 w-6 shrink-0 text-ck-red transition-transform duration-500 ease-cinema group-hover:rotate-45" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </article>
    );
};

export default ServicePage;
