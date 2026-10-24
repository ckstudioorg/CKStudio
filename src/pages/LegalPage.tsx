import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from '../lib/smoothScroll';
import { revealLines, riseIn, useGsap } from '../lib/motion';
import { formatDate, type Block } from '../content/blog';
import { getLegalPage, legalPages } from '../content/legal';
import { paths } from '../lib/paths';
import SectionLabel from '../components/ui/SectionLabel';

const renderBlock = (block: Block, i: number) => {
    switch (block.type) {
        case 'h2':
            return <h2 key={i} className="mt-14 font-display text-[1.75rem] md:text-[2.1rem] font-normal leading-[1.2] text-ivory">{block.text}</h2>;
        case 'list':
            return (
                <ul key={i} className="mt-5 space-y-3">
                    {block.items.map((item) => (
                        <li key={item} className="flex gap-3.5"><span aria-hidden="true" className="mt-[0.72em] h-[6px] w-[6px] shrink-0 rotate-45 bg-gold/80" />{item}</li>
                    ))}
                </ul>
            );
        case 'quote':
            return <p key={i} className="mt-5 border-l border-gold/60 pl-5 font-display text-xl italic text-ivory">{block.text}</p>;
        case 'p':
        case 'h3':
        case 'tip':
            return <p key={i} className="mt-5">{block.text}</p>;
        default:
            return null;
    }
};

/** Privacy Policy (/privacy/) and Terms of Service (/terms/). Words live in content/legal.ts. */
const LegalPage: React.FC<{ slug: 'privacy' | 'terms' }> = ({ slug }) => {
    const page = getLegalPage(slug)!;
    const other = legalPages.find((p) => p.slug !== slug)!;
    const root = useRef<HTMLElement>(null);

    useGsap(() => {
        const q = gsap.utils.selector(root);
        revealLines(q('[data-title]')[0], { start: 'top 95%' });
        riseIn(q('[data-intro]'), q('[data-intro]')[0], { start: 'top 95%' });
    }, root, [slug]);

    return (
        <article ref={root} className="relative bg-noir text-ivory">
            {/* Soft gold light behind the heading */}
            <div aria-hidden="true" className="lux-glow-top pointer-events-none absolute inset-x-0 top-0 h-[40rem]" style={{ background: 'radial-gradient(ellipse 45% 45% at 80% 15%, rgba(212,175,55,0.07), rgba(10,8,7,0) 72%)' }} />

            <div className="relative mx-auto max-w-[1600px] px-5 md:px-10 pt-16 md:pt-24 pb-28 md:pb-40">
                <SectionLabel tone="lux">Legal</SectionLabel>
                <h1 data-title className="mt-6 font-display font-normal text-display">{page.title}</h1>
                <p data-intro className="mt-6 text-[0.66rem] uppercase tracking-[0.24em] text-ivory-dim">Last updated {formatDate(page.updated)}</p>

                <div className="mt-14 max-w-[44rem]">
                    <p data-intro className="font-display text-[clamp(1.35rem,1rem+0.9vw,1.8rem)] font-normal leading-[1.4] text-ivory">{page.intro}</p>
                    <div className="mt-6 border-t border-gold/15 pt-2 text-[1.0625rem] md:text-lg leading-[1.8] text-ivory/80">
                        {page.body.map(renderBlock)}
                    </div>
                    <p className="mt-16 border-t border-gold/15 pt-6 text-sm text-ivory-soft">
                        See also our{' '}
                        <Link to={paths.legal(other.slug)} className="text-gold-light underline decoration-gold/35 underline-offset-4 transition-colors hover:decoration-gold">{other.title}</Link>.
                    </p>
                </div>
            </div>
        </article>
    );
};

export default LegalPage;
