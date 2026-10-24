import React, { useRef } from 'react';
import { gsap } from '../lib/smoothScroll';
import { revealLines, riseIn, useGsap } from '../lib/motion';
import { scrollToSection } from '../lib/smoothScroll';
import { portfolio, type WorkItem } from '../content/work';
import SectionLabel from '../components/ui/SectionLabel';
import Logo from '../components/brand/Logo';

const pad = (n: number) => String(n).padStart(2, '0');
const groupId = (group: string) => `work-${group.toLowerCase()}`;
const thumbnailFor = (work: WorkItem) => work.image ?? (work.youtubeId ? `https://img.youtube.com/vi/${work.youtubeId}/hqdefault.jpg` : null);

const ArrowUpRight: React.FC<{ className?: string }> = ({ className = '' }) => (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" className={className}>
        <path d="M4 12L12 4M12 4H5.5M12 4V10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

/** Fine gold corner marks, like a camera viewfinder */
const Viewfinder: React.FC = () => (
    <>
        <span aria-hidden="true" className="absolute left-3 top-3 h-4 w-4 border-l border-t border-gold/45" />
        <span aria-hidden="true" className="absolute right-3 top-3 h-4 w-4 border-r border-t border-gold/45" />
        <span aria-hidden="true" className="absolute bottom-3 left-3 h-4 w-4 border-b border-l border-gold/45" />
        <span aria-hidden="true" className="absolute bottom-3 right-3 h-4 w-4 border-b border-r border-gold/45" />
    </>
);

const WorkCard: React.FC<{ work: WorkItem }> = ({ work }) => {
    const thumb = thumbnailFor(work);
    const media = (
        <div data-thumb className="relative aspect-video overflow-hidden bg-noir-3">
            {thumb ? (
                <>
                    <img
                        src={thumb}
                        alt={work.title}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full scale-[1.04] object-cover brightness-[0.82] saturate-[0.9] transition-[scale,filter] duration-[1200ms] ease-cinema group-hover:scale-[1.1] group-hover:brightness-100 group-hover:saturate-100"
                    />
                    {/* Soft shadow from below and a fine gold frame that brightens on hover */}
                    <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-noir/70 via-noir/0 to-noir/0 transition-opacity duration-700 group-hover:opacity-50" />
                    <span aria-hidden="true" className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/20 transition-[box-shadow] duration-700 group-hover:ring-gold/50" />
                    {/* Gold play ring grows in on hover */}
                    <span aria-hidden="true" className="absolute left-1/2 top-1/2 flex h-16 w-16 md:h-20 md:w-20 -translate-x-1/2 -translate-y-1/2 scale-0 items-center justify-center rounded-full border border-gold/70 bg-noir/55 text-gold-light backdrop-blur-sm transition-transform duration-700 ease-cinema group-hover:scale-100">
                        <svg viewBox="0 0 24 24" className="ml-1 h-5 w-5 md:h-6 md:w-6">
                            <path d="M8 5.5v13l11-6.5z" fill="currentColor" />
                        </svg>
                    </span>
                </>
            ) : (
                <div
                    className="relative flex h-full flex-col items-center justify-center gap-4 text-center ring-1 ring-inset ring-gold/15"
                    style={{ background: 'radial-gradient(ellipse 80% 75% at 50% 40%, #1d1613 0%, #0d0a09 75%)' }}
                >
                    <Viewfinder />
                    <Logo className="h-8 md:h-10 text-gold/30" />
                    <span className="lux-label text-gold/60">{portfolio.comingSoon}</span>
                </div>
            )}
        </div>
    );

    return (
        <article data-card className="group">
            {work.url ? (
                <a href={work.url} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true" className="block">
                    {media}
                </a>
            ) : media}
            <div className="mt-6">
                <p className="lux-label">{work.category}</p>
                <h4 className="mt-2.5 font-display text-[1.55rem] md:text-[1.75rem] font-normal leading-[1.15] text-ivory transition-colors duration-500 group-hover:text-gold-light">{work.title}</h4>
                {work.url && (
                    <a
                        href={work.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/watch mt-4 inline-flex items-center gap-2 text-[0.66rem] font-medium uppercase tracking-[0.24em] text-gold-light"
                    >
                        <span className="underline decoration-gold/30 underline-offset-[6px] transition-colors duration-500 group-hover/watch:decoration-gold">Watch Project</span>
                        <ArrowUpRight className="h-3 w-3 transition-transform duration-500 ease-cinema group-hover/watch:-translate-y-0.5 group-hover/watch:translate-x-0.5" />
                        <span className="sr-only">: {work.title} (opens YouTube)</span>
                    </a>
                )}
            </div>
        </article>
    );
};

const Portfolio: React.FC = () => {
    const root = useRef<HTMLElement>(null);

    useGsap(() => {
        const q = gsap.utils.selector(root);
        revealLines(q('[data-title]')[0]);
        riseIn(q('[data-intro]'), q('[data-intro]')[0]);
        q('[data-group]').forEach((group: Element) => {
            revealLines(group.querySelector('[data-group-title]')!);
            const cards = gsap.utils.toArray<HTMLElement>(group.querySelectorAll('[data-card]'));
            riseIn(cards, group.querySelector('[data-grid]')!, { stagger: 0.1, start: 'top 85%' });
            // Thumbnails open like a curtain as they arrive
            cards.forEach((card) => {
                gsap.fromTo(card.querySelector('[data-thumb]'), { clipPath: 'inset(0% 0% 100% 0%)' }, {
                    clipPath: 'inset(0% 0% 0% 0%)', duration: 1.4, ease: 'expo.inOut',
                    scrollTrigger: { trigger: card, start: 'top 90%', once: true },
                });
            });
        });
    }, root);

    return (
        <section ref={root} aria-labelledby="portfolio-title" className="relative bg-noir text-ivory py-28 md:py-44">
            {/* Fine gold line where the gallery begins */}
            <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

            <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
                <div className="grid gap-8 md:grid-cols-12 md:items-end">
                    <div className="md:col-span-7">
                        <SectionLabel tone="lux" index="07">{portfolio.label}</SectionLabel>
                        <h2 id="portfolio-title" data-title className="mt-8 font-display font-normal text-[clamp(3.75rem,1rem+11vw,13rem)] leading-[0.92] tracking-[-0.025em]">
                            {portfolio.title.lead} <em className="lux-foil">{portfolio.title.highlight}</em>
                        </h2>
                    </div>
                    <div data-intro className="md:col-span-5 flex flex-col gap-7 md:items-end">
                        <p className="max-w-sm text-base md:text-lg leading-[1.8] text-ivory-soft md:text-right">{portfolio.intro}</p>
                        {/* Jump to a group */}
                        <nav aria-label="Portfolio categories" className="flex flex-wrap gap-2.5 md:justify-end">
                            {portfolio.groups.map((group) => (
                                <button
                                    key={group}
                                    type="button"
                                    onClick={() => scrollToSection(groupId(group))}
                                    className="inline-flex items-center gap-2.5 border border-gold/30 px-4 py-2.5 text-[0.66rem] font-medium uppercase tracking-[0.24em] text-ivory transition-colors duration-500 hover:border-gold hover:text-gold-light"
                                >
                                    {group}
                                    <span className="font-display text-sm normal-case italic tracking-normal lining-nums text-gold/80">{pad(portfolio.works.filter((w) => w.group === group).length)}</span>
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>

                <div className="mt-20 md:mt-28 space-y-28 md:space-y-36">
                    {portfolio.groups.map((group) => {
                        const items = portfolio.works.filter((w) => w.group === group);
                        return (
                            <section key={group} id={groupId(group)} data-group aria-labelledby={`${groupId(group)}-title`} className="scroll-mt-28">
                                <div className="flex items-end justify-between gap-6 border-b border-gold/25 pb-5">
                                    <h3 id={`${groupId(group)}-title`} data-group-title className="font-display font-normal text-headline">{group}</h3>
                                    <span aria-hidden="true" className="pb-1 font-display text-lg md:text-2xl italic lining-nums text-gold-light/80">({pad(items.length)})</span>
                                </div>
                                <div data-grid className="mt-10 grid gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
                                    {items.map((work) => <WorkCard key={work.title} work={work} />)}
                                </div>
                                <p className="mt-12 flex items-center gap-4 font-display text-lg italic text-ivory-soft">
                                    <span aria-hidden="true" className="h-px w-10 md:w-16 bg-gradient-to-r from-gold/60 to-transparent" />
                                    {portfolio.more}
                                </p>
                            </section>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
