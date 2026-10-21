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
            return <h2 key={i} className="mt-12 font-heading text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-ink">{block.text}</h2>;
        case 'list':
            return (
                <ul key={i} className="mt-5 space-y-3">
                    {block.items.map((item) => (
                        <li key={item} className="flex gap-3"><span aria-hidden="true" className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-ck-red" />{item}</li>
                    ))}
                </ul>
            );
        case 'quote':
            return <p key={i} className="mt-5 border-l-2 border-ck-red pl-5 italic">{block.text}</p>;
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
        <article ref={root} className="bg-paper text-ink">
            <div className="mx-auto max-w-[1600px] px-5 md:px-10 pt-16 md:pt-24 pb-28 md:pb-40">
                <SectionLabel>Legal</SectionLabel>
                <h1 data-title className="mt-6 font-heading font-semibold text-giant">{page.title}</h1>
                <p data-intro className="mt-6 text-xs uppercase tracking-[0.18em] text-ink-soft">Last updated {formatDate(page.updated)}</p>

                <div className="mt-14 max-w-[44rem]">
                    <p data-intro className="font-heading text-[clamp(1.2rem,1rem+0.8vw,1.6rem)] font-medium leading-[1.4]">{page.intro}</p>
                    <div className="mt-6 border-t border-ink-faint pt-2 text-[1.0625rem] md:text-lg leading-[1.75] text-ink/85">
                        {page.body.map(renderBlock)}
                    </div>
                    <p className="mt-16 border-t border-ink-faint pt-6 text-sm text-ink-soft">
                        See also our{' '}
                        <Link to={paths.legal(other.slug)} className="text-ck-red underline underline-offset-4">{other.title}</Link>.
                    </p>
                </div>
            </div>
        </article>
    );
};

export default LegalPage;
