import React, { useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { gsap } from '../lib/smoothScroll';
import { revealLines, riseIn, useGsap } from '../lib/motion';
import { findTerm, glossaryPage } from '../content/glossary';
import { mailtoUrl, whatsappUrl } from '../content/contact';
import { paths } from '../lib/paths';
import SectionLabel from '../components/ui/SectionLabel';
import NotFound from './NotFound';

const BackArrow: React.FC = () => (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
        <path d="M19 12H5m6-6-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

/** One glossary term (/glossary/<slug>/): meaning, how it is used, the full guide and related terms. */
const GlossaryTerm: React.FC = () => {
    const { slug } = useParams();
    const term = findTerm(slug);
    const root = useRef<HTMLElement>(null);

    useGsap(() => {
        const q = gsap.utils.selector(root);
        if (!q('[data-title]')[0]) return;
        revealLines(q('[data-title]')[0], { start: 'top 95%' });
        riseIn(q('[data-intro]'), q('[data-intro]')[0], { start: 'top 95%' });
    }, root, [slug]);

    if (!term) return <NotFound />;

    const related = (term.related ?? []).map(findTerm).filter((t) => !!t);

    return (
        <article ref={root} className="relative bg-noir text-ivory">
            {/* Soft gold light behind the heading */}
            <div aria-hidden="true" className="lux-glow-top pointer-events-none absolute inset-x-0 top-0 h-[40rem]" style={{ background: 'radial-gradient(ellipse 45% 45% at 80% 15%, rgba(212,175,55,0.07), rgba(10,8,7,0) 72%)' }} />

            <div className="relative mx-auto max-w-[1600px] px-5 md:px-10 pt-14 md:pt-20 pb-28 md:pb-40">
                <Link to={paths.glossary} data-intro className="inline-flex items-center gap-2 text-[0.66rem] font-medium uppercase tracking-[0.24em] text-ivory-dim transition-colors hover:text-gold-light">
                    <BackArrow /> {glossaryPage.back}
                </Link>
                <SectionLabel className="mt-10">{`${glossaryPage.label} · ${term.category}`}</SectionLabel>
                <h1 data-title className="mt-6 max-w-[20ch] font-display font-normal text-display">{term.term}</h1>
                {term.aka && (
                    <p data-intro className="mt-6 text-[0.66rem] uppercase tracking-[0.24em] text-ivory-dim">
                        {glossaryPage.alsoCalled}: <span className="text-ivory-soft">{term.aka}</span>
                    </p>
                )}

                <div className="mt-12 max-w-[44rem]">
                    <p data-intro className="font-display text-[clamp(1.35rem,1rem+0.9vw,1.8rem)] font-normal leading-[1.4] text-ivory">{term.short}</p>
                    <p className="mt-6 border-t border-gold/15 pt-6 text-[1.0625rem] md:text-lg leading-[1.8] text-ivory/80">{term.more}</p>

                    {term.guide && (
                        <p className="mt-8">
                            <span className="lux-label">{glossaryPage.readGuide}</span>
                            <Link to={term.guide.page} className="mt-3 block font-display text-2xl md:text-[1.75rem] leading-[1.2] text-gold-light underline decoration-gold/35 underline-offset-[6px] transition-colors hover:decoration-gold">
                                {term.guide.label}
                            </Link>
                        </p>
                    )}

                    {related.length > 0 && (
                        <nav aria-labelledby="related-terms" className="mt-14 border-t border-gold/15 pt-8">
                            <h2 id="related-terms" className="lux-label">{glossaryPage.related}</h2>
                            <ul className="mt-5 flex flex-wrap gap-2">
                                {related.map((t) => (
                                    <li key={t!.slug}>
                                        <Link to={paths.term(t!.slug)} className="block border border-gold/25 px-4 py-2 text-sm text-ivory/85 transition-colors duration-500 hover:border-gold/60 hover:text-gold-light">
                                            {t!.term}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    )}

                    <aside className="lux-panel relative mt-16 overflow-hidden p-8 md:p-10">
                        <span aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 70% at 100% 0%, rgba(139,0,0,0.28), rgba(139,0,0,0) 70%)' }} />
                        <span aria-hidden="true" className="pointer-events-none absolute inset-2.5 md:inset-3 border border-gold/10" />
                        <div className="relative">
                            <h2 className="font-display text-3xl md:text-4xl font-normal text-ivory">{glossaryPage.cta.title}</h2>
                            <p className="mt-2 text-ivory-soft">{glossaryPage.cta.text}</p>
                            <div className="mt-7 flex flex-wrap gap-3">
                                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="lux-btn px-6 py-3.5">{glossaryPage.cta.whatsapp}</a>
                                <a href={mailtoUrl()} className="lux-btn-ghost px-6 py-3.5">{glossaryPage.cta.email}</a>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </article>
    );
};

export default GlossaryTerm;
