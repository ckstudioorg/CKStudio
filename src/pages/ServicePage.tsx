import React, { useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { gsap } from '../lib/smoothScroll';
import { revealLines, riseIn, useGsap } from '../lib/motion';
import { paths } from '../lib/paths';
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

const sectionTitle = 'font-display font-normal text-headline';
const sectionRule = 'border-t border-gold/20';

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
            <div className="flex min-h-[70svh] items-center justify-center bg-noir px-5 text-center text-ivory">
                <div>
                    <h1 className="font-display font-normal text-headline">{t.notFound.title}</h1>
                    <p className="mt-4 text-ivory-soft">{t.notFound.text}</p>
                    <Link to="/#services" className="lux-btn-ghost mt-8 px-6 py-3.5">
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
        <article ref={root} className="relative bg-noir text-ivory">
            {/* Deep red light high on the right */}
            <div aria-hidden="true" className="lux-glow-top pointer-events-none absolute inset-x-0 top-0 h-[50rem]" style={{ background: 'radial-gradient(ellipse 45% 45% at 85% 14%, rgba(139,0,0,0.24), rgba(10,8,7,0) 72%)' }} />

            {/* Intro */}
            <header className="relative mx-auto max-w-[1600px] px-5 md:px-10 pt-14 md:pt-20 pb-16 md:pb-24">
                <nav aria-label="Breadcrumb" data-intro className="text-[0.66rem] font-medium uppercase tracking-[0.24em] text-ivory-dim">
                    <ol className="flex flex-wrap items-center gap-2">
                        <li><Link to="/" className="transition-colors hover:text-gold-light">Home</Link></li>
                        <li aria-hidden="true" className="text-gold/50">/</li>
                        <li><Link to="/#services" className="transition-colors hover:text-gold-light">{t.breadcrumbServices}</Link></li>
                        <li aria-hidden="true" className="text-gold/50">/</li>
                        <li aria-current="page" className="text-ivory">{page.name}</li>
                    </ol>
                </nav>
                <SectionLabel tone="lux" className="mt-12">{t.label}</SectionLabel>
                <h1 data-title className="mt-6 max-w-[16ch] font-display font-normal text-[clamp(2.8rem,1rem+6.2vw,8rem)] leading-[0.96] tracking-[-0.02em]">
                    {page.headline.lead} <em className="lux-foil">{page.headline.highlight}</em>
                </h1>
                <div className="mt-10 grid gap-10 md:grid-cols-12">
                    <p data-intro className="md:col-span-7 font-display text-[clamp(1.35rem,1rem+1.1vw,2rem)] font-normal leading-[1.4] text-ivory">{page.intro}</p>
                    <div data-intro className="md:col-span-4 md:col-start-9 flex flex-wrap content-start gap-3">
                        <Link to="/#enquiry" className="lux-btn group px-7 py-4">
                            <span>{t.cta.primary}</span>
                            <Arrow className="transition-transform duration-500 ease-cinema group-hover:rotate-45" />
                        </Link>
                        <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="lux-btn-ghost px-7 py-4">
                            {t.cta.secondary}
                        </a>
                    </div>
                </div>
            </header>

            <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
                {/* What's included */}
                <section data-block aria-labelledby="included-title" className={`${sectionRule} pt-14 pb-20 md:pb-28`}>
                    <h2 id="included-title" data-rise className={sectionTitle}>{t.included}</h2>
                    <ol className="mt-10 grid gap-x-10 md:grid-cols-2">
                        {page.offerings.map((item, i) => (
                            <li key={item.title} data-rise className="flex gap-5 md:gap-8 border-b border-gold/15 py-6 md:py-8">
                                <span className="w-8 shrink-0 pt-1 font-display text-base italic lining-nums text-gold/70">{String(i + 1).padStart(2, '0')}</span>
                                <div>
                                    <h3 className="font-display text-2xl md:text-[1.7rem] font-normal leading-[1.2] text-ivory">{item.title}</h3>
                                    <p className="mt-2 text-base leading-[1.75] text-ivory-soft">{item.text}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </section>

                {/* Good for */}
                <section data-block aria-labelledby="goodfor-title" className={`${sectionRule} pt-14 pb-20 md:pb-28 grid gap-8 md:grid-cols-12`}>
                    <h2 id="goodfor-title" data-rise className={`${sectionTitle} md:col-span-4`}>{t.goodFor}</h2>
                    <ul className="md:col-span-8 flex flex-wrap content-start gap-2.5">
                        {page.goodFor.map((g) => (
                            <li key={g} data-rise className="border border-gold/25 px-5 py-2.5 text-sm md:text-base text-ivory/90">{g}</li>
                        ))}
                    </ul>
                </section>

                {/* Recent work */}
                {work.length > 0 && (
                    <section data-block aria-labelledby="work-title" className={`${sectionRule} pt-14 pb-20 md:pb-28`}>
                        <div className="flex flex-wrap items-end justify-between gap-4">
                            <h2 id="work-title" data-rise className={sectionTitle}>{t.work}</h2>
                            <Link data-rise to="/#portfolio" className="inline-flex items-center gap-2 text-[0.66rem] font-medium uppercase tracking-[0.24em] text-gold-light underline decoration-gold/30 underline-offset-[6px] transition-colors hover:decoration-gold">
                                Full portfolio <Arrow className="h-3.5 w-3.5" />
                            </Link>
                        </div>
                        <ul className="mt-10 grid gap-6 md:grid-cols-3">
                            {work.map((w) => (
                                <li key={w.title} data-rise>
                                    <a href={w.url} target="_blank" rel="noopener noreferrer" className="group block">
                                        <div className="relative aspect-video overflow-hidden bg-noir-3">
                                            <img src={`https://img.youtube.com/vi/${w.youtubeId}/hqdefault.jpg`} alt={`${w.title} — ${w.category}`} loading="lazy" className="h-full w-full object-cover brightness-[0.82] saturate-[0.9] transition-[scale,filter] duration-[1200ms] ease-cinema group-hover:scale-[1.04] group-hover:brightness-100 group-hover:saturate-100" />
                                            <span aria-hidden="true" className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/20 transition-[box-shadow] duration-700 group-hover:ring-gold/50" />
                                        </div>
                                        <p className="lux-label mt-5">{w.category}</p>
                                        <h3 className="mt-2 font-display text-[1.5rem] font-normal leading-[1.2] text-ivory transition-colors duration-500 group-hover:text-gold-light">{w.title}</h3>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Questions */}
                <section data-block aria-labelledby="faq-title" className={`${sectionRule} pt-14 pb-20 md:pb-28 grid gap-8 md:grid-cols-12`}>
                    <h2 id="faq-title" data-rise className={`${sectionTitle} md:col-span-4`}>{t.faqs}</h2>
                    <dl className="md:col-span-8">
                        {page.faqs.map((f) => (
                            <div key={f.question} data-rise className="border-b border-gold/15 py-6 md:py-8 first:pt-0">
                                <dt className="font-display text-2xl md:text-[1.7rem] font-normal leading-[1.25] text-ivory">{f.question}</dt>
                                <dd className="mt-3 text-base md:text-lg leading-[1.8] text-ivory-soft">{f.answer}</dd>
                            </div>
                        ))}
                    </dl>
                </section>

                {/* Related articles */}
                {reading.length > 0 && (
                    <section data-block aria-labelledby="reading-title" className={`${sectionRule} pt-14 pb-20 md:pb-28`}>
                        <h2 id="reading-title" data-rise className={sectionTitle}>{t.articles}</h2>
                        <ul className="mt-10 grid gap-x-6 gap-y-14 md:grid-cols-3">
                            {reading.map((a) => (
                                <li key={a.slug} data-rise>
                                    <Link to={paths.post(a.slug)} className="group block">
                                        <div className="relative aspect-[3/2] overflow-hidden">
                                            <ArticleCover article={a} index={articles.indexOf(a)} className="transition-transform duration-[1200ms] ease-cinema group-hover:scale-[1.04]" />
                                            <span aria-hidden="true" className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/15 transition-[box-shadow] duration-700 group-hover:ring-gold/45" />
                                        </div>
                                        <p className="lux-label mt-6">{a.category}</p>
                                        <h3 className="mt-3 font-display text-[1.5rem] font-normal leading-[1.2] text-ivory transition-colors duration-500 group-hover:text-gold-light">{a.title}</h3>
                                        <p className="mt-3 text-[0.64rem] uppercase tracking-[0.24em] text-ivory-dim">{formatDate(a.date)} · {readTime(a)}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Call to action */}
                <aside data-block className="lux-panel relative overflow-hidden p-8 md:p-14 text-center">
                    <span aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 70% at 50% 110%, rgba(139,0,0,0.35), rgba(139,0,0,0) 70%)' }} />
                    <span aria-hidden="true" className="pointer-events-none absolute inset-2.5 md:inset-3 border border-gold/10" />
                    <h2 data-rise className="relative font-display text-[clamp(2rem,1rem+2.8vw,3.6rem)] font-normal leading-[1.1] text-ivory">
                        {t.cta.title}
                    </h2>
                    <p data-rise className="relative mx-auto mt-3 max-w-xl text-ivory-soft md:text-lg">{t.cta.text}</p>
                    <div data-rise className="relative mt-8 flex flex-wrap justify-center gap-3">
                        <Link to="/#enquiry" className="lux-btn px-7 py-4">{t.cta.primary}</Link>
                        <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="lux-btn-ghost px-7 py-4">{t.cta.secondary}</a>
                    </div>
                </aside>

                {/* Other services */}
                <nav data-block aria-labelledby="others-title" className="pt-20 md:pt-28 pb-28 md:pb-40">
                    <h2 id="others-title" data-rise className="lux-label">{t.others}</h2>
                    <ul className="mt-6 border-t border-gold/30">
                        {others.map((o) => (
                            <li key={o.slug} data-rise className="border-b border-gold/15">
                                <Link to={paths.service(o.slug)} className="group flex items-center justify-between gap-6 py-5 md:py-7">
                                    <span className="font-display text-[clamp(1.6rem,1rem+2vw,3rem)] font-normal leading-[1.1] text-ivory transition-[color,translate] duration-500 ease-cinema group-hover:translate-x-2 group-hover:text-gold-light">{o.name}</span>
                                    <Arrow className="h-6 w-6 shrink-0 text-gold transition-transform duration-500 ease-cinema group-hover:rotate-45" />
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
