import React, { useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { gsap } from '../lib/smoothScroll';
import { revealLines, riseIn, useGsap } from '../lib/motion';
import { articles, blogPage, formatDate, readTime, type Block } from '../content/blog';
import { mailtoUrl, whatsappUrl } from '../content/contact';
import { paths } from '../lib/paths';
import { alreadyOnScreen } from '../lib/prerendered';
import ArticleCover from '../components/ui/ArticleCover';
import RichText from '../components/ui/RichText';
import { getServicePage } from '../content/servicePages';

const BackArrow = () => (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <path d="M19 12H5m0 0 6 6m-6-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

/** Small gold diamond used as a list marker */
const Diamond = () => <span aria-hidden="true" className="mt-[0.72em] h-[6px] w-[6px] shrink-0 rotate-45 bg-gold/80" />;

const renderBlock = (block: Block, i: number) => {
    switch (block.type) {
        case 'h2':
            return <h2 key={i} className="mt-16 mb-5 font-display text-[clamp(1.75rem,1rem+1.6vw,2.6rem)] font-normal leading-[1.15] text-ivory">{block.text}</h2>;
        case 'h3':
            return <h3 key={i} className="mt-10 mb-3 font-display text-2xl md:text-[1.7rem] font-normal leading-[1.2] text-ivory">{block.text}</h3>;
        case 'list':
            return (
                <ul key={i} className="my-6 space-y-3">
                    {block.items.map((item) => (
                        <li key={item} className="flex gap-4">
                            <Diamond />
                            <span><RichText text={item} /></span>
                        </li>
                    ))}
                </ul>
            );
        case 'steps':
            return (
                <ol key={i} className="my-8 space-y-4">
                    {block.items.map((item, n) => (
                        <li key={item} className="flex gap-4">
                            <span aria-hidden="true" className="mt-[0.1em] flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/50 font-display text-base italic lining-nums text-gold-light">{n + 1}</span>
                            <span><RichText text={item} /></span>
                        </li>
                    ))}
                </ol>
            );
        case 'table':
            return (
                <div key={i} className="my-10 -mx-5 overflow-x-auto px-5 md:mx-0 md:px-0">
                    <table className="w-full min-w-[34rem] border-collapse text-left text-[0.95rem] leading-snug">
                        {block.caption && <caption className="mb-3 text-left text-[0.66rem] font-medium uppercase tracking-[0.24em] text-ivory-dim">{block.caption}</caption>}
                        <thead>
                            <tr className="border-b border-gold/50">
                                {block.head.map((h) => <th key={h} scope="col" className="py-3 pr-4 font-display text-lg font-normal text-gold-light">{h}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {block.rows.map((row) => (
                                <tr key={row.join('|')} className="border-b border-gold/15 align-top">
                                    {row.map((cell, c) => c === 0
                                        ? <th key={c} scope="row" className="py-3.5 pr-4 font-medium text-ivory"><RichText text={cell} /></th>
                                        : <td key={c} className="py-3.5 pr-4"><RichText text={cell} /></td>)}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        case 'tip':
            return (
                <aside key={i} className="relative my-10 border border-gold/25 bg-gold/[0.04] px-6 py-6 md:px-8">
                    <p className="lux-label">Studio tip</p>
                    <p className="mt-2.5 text-ivory"><RichText text={block.text} /></p>
                </aside>
            );
        case 'quote':
            return (
                <blockquote key={i} className="my-14 border-l border-gold/60 pl-6 md:pl-8 font-display text-[clamp(1.55rem,1rem+1.5vw,2.4rem)] font-normal italic leading-[1.3] text-ivory">
                    <RichText text={block.text} />
                </blockquote>
            );
        default:
            return <p key={i} className="my-5"><RichText text={block.text} /></p>;
    }
};

const BlogPost: React.FC = () => {
    const { slug } = useParams();
    const root = useRef<HTMLElement>(null);
    const index = articles.findIndex((a) => a.slug === slug);
    const post = articles[index];

    useGsap(() => {
        if (!post) return;
        const q = gsap.utils.selector(root);
        revealLines(q('[data-title]')[0], { start: 'top 95%' });
        riseIn(q('[data-intro]'), q('[data-intro]')[0], { start: 'top 95%' });
        if (!alreadyOnScreen(q('[data-cover]')[0])) gsap.fromTo(q('[data-cover]'), { clipPath: 'inset(0% 0% 100% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.4, ease: 'expo.inOut', delay: 0.2 });
    }, root, [slug]);

    if (!post) {
        return (
            <div className="flex min-h-[70svh] items-center justify-center bg-noir px-5 text-center text-ivory">
                <div>
                    <h1 className="font-display font-normal text-headline">{blogPage.notFound.title}</h1>
                    <p className="mt-4 text-ivory-soft">{blogPage.notFound.text}</p>
                    <Link to={paths.blog} className="lux-btn-ghost mt-8 px-6 py-3.5">
                        <BackArrow /> {blogPage.back}
                    </Link>
                </div>
            </div>
        );
    }

    const service = getServicePage(post.service);
    const related = articles.filter((a) => a.slug !== post.slug && a.category === post.category)
        .concat(articles.filter((a) => a.slug !== post.slug && a.category !== post.category))
        .slice(0, 2);

    return (
        <article ref={root} className="relative bg-noir text-ivory">
            {/* Deep red light high on the right */}
            <div aria-hidden="true" className="lux-glow-top pointer-events-none absolute inset-x-0 top-0 h-[50rem]" style={{ background: 'radial-gradient(ellipse 45% 45% at 85% 12%, rgba(139,0,0,0.2), rgba(10,8,7,0) 72%)' }} />

            <header className="relative mx-auto max-w-[1600px] px-5 md:px-10 pt-14 md:pt-20">
                <Link to={paths.blog} data-intro className="inline-flex items-center gap-2 text-[0.66rem] font-medium uppercase tracking-[0.24em] text-ivory-dim transition-colors hover:text-gold-light">
                    <BackArrow /> {blogPage.back}
                </Link>
                <p data-intro className="lux-label mt-10">{post.category}</p>
                <h1 data-title className="mt-5 max-w-[22ch] font-display font-normal text-[clamp(2.4rem,1rem+4.8vw,6.25rem)] leading-[1.02] tracking-[-0.02em]">{post.title}</h1>
                <p data-intro className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[0.66rem] uppercase tracking-[0.24em] text-ivory-dim">
                    <span>{post.author}</span><span>{formatDate(post.date)}</span><span>{readTime(post)}</span>
                </p>
                <div data-cover className="relative mt-12 md:mt-16 aspect-[16/9] md:aspect-[21/9] overflow-hidden">
                    <ArticleCover article={post} index={index} large />
                    <span aria-hidden="true" className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/20" />
                </div>
            </header>

            <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
                <div className="mx-auto max-w-[44rem] py-16 md:py-24">
                    <p className="font-display text-[clamp(1.4rem,1rem+1.1vw,1.95rem)] font-normal leading-[1.4] text-ivory">{post.excerpt}</p>

                    {/* Quick answer + key takeaways: the short version, for readers and answer engines */}
                    {post.answer && (
                        <section aria-labelledby="quick-answer" className="lux-panel relative mt-10 px-6 py-7 md:px-9 md:py-9">
                            <span aria-hidden="true" className="pointer-events-none absolute inset-2.5 border border-gold/10" />
                            <h2 id="quick-answer" className="lux-label relative">Quick answer</h2>
                            <p className="relative mt-3 text-[1.0625rem] md:text-lg leading-[1.75] text-ivory"><RichText text={post.answer} /></p>
                            {post.keyPoints && (
                                <ul className="relative mt-6 space-y-2.5 border-t border-gold/15 pt-5 text-[0.98rem] text-ivory/85">
                                    {post.keyPoints.map((k) => (
                                        <li key={k} className="flex gap-3">
                                            <svg aria-hidden="true" viewBox="0 0 16 16" className="mt-[0.3em] h-4 w-4 shrink-0 text-gold" fill="none"><path d="M3 8.5 6.5 12 13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                            <span><RichText text={k} /></span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </section>
                    )}

                    <div className="mt-10 border-t border-gold/15 pt-4 text-[1.0625rem] md:text-lg leading-[1.8] text-ivory/80">
                        {post.body.map(renderBlock)}
                    </div>

                    {/* Frequently asked questions */}
                    {post.faqs && post.faqs.length > 0 && (
                        <section aria-labelledby="faq-title" className="mt-16">
                            <h2 id="faq-title" className="font-display text-[clamp(1.75rem,1rem+1.6vw,2.6rem)] font-normal leading-[1.15] text-ivory">Frequently asked questions</h2>
                            <dl className="mt-6 border-t border-gold/40">
                                {post.faqs.map((f) => (
                                    <div key={f.q} className="border-b border-gold/15 py-6">
                                        <dt className="font-display text-xl md:text-[1.4rem] font-normal leading-[1.3] text-ivory">{f.q}</dt>
                                        <dd className="mt-2 text-[1.0625rem] leading-[1.75] text-ivory/80"><RichText text={f.a} /></dd>
                                    </div>
                                ))}
                            </dl>
                        </section>
                    )}

                    {/* Sources for rules, specs and figures that can change */}
                    {post.sources && post.sources.length > 0 && (
                        <section aria-labelledby="sources-title" className="mt-12">
                            <h2 id="sources-title" className="text-[0.66rem] font-medium uppercase tracking-[0.26em] text-ivory-dim">Sources and further reading</h2>
                            <ul className="mt-3 space-y-1.5 text-sm">
                                {post.sources.map((s) => (
                                    <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer" className="text-ivory-soft underline decoration-gold/30 underline-offset-4 transition-colors hover:text-gold-light hover:decoration-gold">{s.label}</a></li>
                                ))}
                            </ul>
                            <p className="mt-3 text-xs text-ivory-dim">Last checked {formatDate(post.updated ?? post.date)}. Rules and platform specs change, so confirm the latest version before you rely on them.</p>
                        </section>
                    )}

                    <ul className="mt-14 flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                            <li key={tag} className="border border-gold/20 px-3.5 py-1.5 text-xs text-ivory-soft">{tag}</li>
                        ))}
                    </ul>

                    {/* Gentle call to action */}
                    <aside className="lux-panel relative mt-16 overflow-hidden p-8 md:p-10">
                        <span aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 70% at 100% 0%, rgba(139,0,0,0.28), rgba(139,0,0,0) 70%)' }} />
                        <span aria-hidden="true" className="pointer-events-none absolute inset-2.5 md:inset-3 border border-gold/10" />
                        <div className="relative">
                            <h2 className="font-display text-3xl md:text-4xl font-normal text-ivory">{blogPage.articleCta.title}</h2>
                            <p className="mt-2 text-ivory-soft">{blogPage.articleCta.text}</p>
                            {service && (
                                <p className="mt-4 text-ivory/85">
                                    See how we handle it: <Link to={paths.service(service.slug)} className="text-gold-light underline decoration-gold/35 underline-offset-4 hover:decoration-gold">{service.name}</Link>
                                </p>
                            )}
                            <div className="mt-7 flex flex-wrap gap-3">
                                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="lux-btn px-6 py-3.5">{blogPage.articleCta.whatsapp}</a>
                                <a href={mailtoUrl()} className="lux-btn-ghost px-6 py-3.5">{blogPage.articleCta.email}</a>
                            </div>
                        </div>
                    </aside>
                </div>

                {/* Related */}
                <section aria-labelledby="related-title" className="border-t border-gold/20 pb-28 md:pb-40 pt-14">
                    <h2 id="related-title" className="font-display font-normal text-headline">{blogPage.related}</h2>
                    <ul className="mt-10 grid gap-x-6 gap-y-14 md:grid-cols-2">
                        {related.map((a) => (
                            <li key={a.slug}>
                                <Link to={paths.post(a.slug)} className="group block">
                                    <div className="relative aspect-[3/2] overflow-hidden">
                                        <ArticleCover article={a} index={articles.indexOf(a)} className="transition-transform duration-[1200ms] ease-cinema group-hover:scale-[1.04]" />
                                        <span aria-hidden="true" className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/15 transition-[box-shadow] duration-700 group-hover:ring-gold/45" />
                                    </div>
                                    <p className="lux-label mt-6">{a.category}</p>
                                    <h3 className="mt-3 font-display text-[1.55rem] md:text-[1.75rem] font-normal leading-[1.15] text-ivory transition-colors duration-500 group-hover:text-gold-light">{a.title}</h3>
                                    <p className="mt-3 text-[0.64rem] uppercase tracking-[0.24em] text-ivory-dim">{formatDate(a.date)} · {readTime(a)}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </article>
    );
};

export default BlogPost;
