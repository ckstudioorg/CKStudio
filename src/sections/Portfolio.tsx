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

const WorkCard: React.FC<{ work: WorkItem }> = ({ work }) => {
    const thumb = thumbnailFor(work);
    const media = (
        <div data-thumb className="relative aspect-video overflow-hidden rounded-[20px] bg-ink-ghost">
            {thumb ? (
                <>
                    <img
                        src={thumb}
                        alt={work.title}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full scale-[1.04] object-cover transition-transform duration-[1200ms] ease-cinema group-hover:scale-[1.12]"
                    />
                    <span className="absolute inset-0 bg-ink/0 transition-colors duration-700 group-hover:bg-ink/25" />
                    {/* Play badge grows in on hover */}
                    <span aria-hidden="true" className="absolute left-1/2 top-1/2 flex h-20 w-20 md:h-24 md:w-24 -translate-x-1/2 -translate-y-1/2 scale-0 items-center justify-center rounded-full bg-ck-red text-[0.7rem] font-medium uppercase tracking-[0.2em] text-paper transition-transform duration-700 ease-cinema group-hover:scale-100">
                        Play
                    </span>
                </>
            ) : (
                <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                    <Logo className="h-8 md:h-10 text-ink-faint" />
                    <span className="text-[0.65rem] md:text-xs font-medium uppercase tracking-[0.25em] text-ink-soft">{portfolio.comingSoon}</span>
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
            <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                    <p className="text-[0.68rem] font-medium uppercase tracking-[0.22em] text-ck-red">{work.category}</p>
                    <h4 className="mt-2 font-heading text-xl md:text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink">{work.title}</h4>
                </div>
                {work.url && (
                    <a
                        href={work.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-flex shrink-0 items-center gap-1.5 rounded-full border border-ink-faint px-3.5 py-2 text-xs font-medium uppercase tracking-[0.14em] text-ink transition-colors duration-300 hover:border-ck-red hover:bg-ck-red hover:text-paper"
                    >
                        Watch Project <ArrowUpRight className="h-3 w-3" />
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
                gsap.fromTo(card.querySelector('[data-thumb]'), { clipPath: 'inset(0% 0% 100% 0% round 20px)' }, {
                    clipPath: 'inset(0% 0% 0% 0% round 20px)', duration: 1.4, ease: 'expo.inOut',
                    scrollTrigger: { trigger: card, start: 'top 90%', once: true },
                });
            });
        });
    }, root);

    return (
        <section ref={root} aria-labelledby="portfolio-title" className="relative bg-paper text-ink py-28 md:py-40">
            <div className="mx-auto max-w-[1600px] px-5 md:px-10">
                <div className="grid gap-8 md:grid-cols-12 md:items-end">
                    <div className="md:col-span-7">
                        <SectionLabel index="07">{portfolio.label}</SectionLabel>
                        <h2 id="portfolio-title" data-title className="mt-8 font-heading font-semibold text-mega">
                            {portfolio.title.lead} <span className="text-ck-red">{portfolio.title.highlight}</span>
                        </h2>
                    </div>
                    <div data-intro className="md:col-span-5 flex flex-col gap-6 md:items-end">
                        <p className="max-w-sm text-base md:text-lg leading-relaxed text-ink-soft md:text-right">{portfolio.intro}</p>
                        {/* Jump to a group */}
                        <nav aria-label="Portfolio categories" className="flex flex-wrap gap-2">
                            {portfolio.groups.map((group) => (
                                <button
                                    key={group}
                                    type="button"
                                    onClick={() => scrollToSection(groupId(group))}
                                    className="inline-flex items-center gap-2 rounded-full border border-ink-faint px-4 py-2.5 text-xs font-medium uppercase tracking-[0.16em] text-ink transition-colors duration-300 hover:border-ck-red hover:text-ck-red"
                                >
                                    {group}
                                    <span className="tabular-nums text-ink-soft">{pad(portfolio.works.filter((w) => w.group === group).length)}</span>
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
                                <div className="flex items-end justify-between gap-6 border-b border-ink pb-5">
                                    <h3 id={`${groupId(group)}-title`} data-group-title className="font-heading font-semibold text-title">{group}</h3>
                                    <span aria-hidden="true" className="pb-1 font-heading text-lg md:text-2xl tabular-nums text-ink-soft">({pad(items.length)})</span>
                                </div>
                                <div data-grid className="mt-10 grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
                                    {items.map((work) => <WorkCard key={work.title} work={work} />)}
                                </div>
                                <p className="mt-10 text-xs md:text-sm font-medium uppercase tracking-[0.3em] text-ink-soft">{portfolio.more}</p>
                            </section>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
