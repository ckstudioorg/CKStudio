import React, { useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { gsap } from '../lib/smoothScroll';
import { revealLines, riseIn, useGsap } from '../lib/motion';
import { articles, blogPage, formatDate, readTime, type Block } from '../content/blog';
import { mailtoUrl, whatsappUrl } from '../content/contact';
import { paths } from '../lib/seo';
import ArticleCover from '../components/ui/ArticleCover';

const BackArrow = () => (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <path d="M19 12H5m0 0 6 6m-6-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const renderBlock = (block: Block, i: number) => {
    switch (block.type) {
        case 'h2':
            return <h2 key={i} className="mt-14 mb-5 font-heading text-[clamp(1.5rem,1rem+1.4vw,2.25rem)] font-semibold leading-tight tracking-[-0.02em]">{block.text}</h2>;
        case 'list':
            return (
                <ul key={i} className="my-6 space-y-3">
                    {block.items.map((item) => (
                        <li key={item} className="flex gap-4">
                            <span aria-hidden="true" className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-ck-red" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            );
        case 'quote':
            return (
                <blockquote key={i} className="my-14 border-l-2 border-ck-red pl-6 md:pl-8 font-heading text-[clamp(1.4rem,1rem+1.4vw,2.2rem)] font-medium leading-[1.2] tracking-[-0.02em] text-ink">
                    {block.text}
                </blockquote>
            );
        default:
            return <p key={i} className="my-5">{block.text}</p>;
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
        gsap.fromTo(q('[data-cover]'), { clipPath: 'inset(0% 0% 100% 0% round 28px)' }, { clipPath: 'inset(0% 0% 0% 0% round 28px)', duration: 1.4, ease: 'expo.inOut', delay: 0.2 });
    }, root, [slug]);

    if (!post) {
        return (
            <div className="flex min-h-[70svh] items-center justify-center bg-paper px-5 text-center text-ink">
                <div>
                    <h1 className="font-heading text-title font-semibold">{blogPage.notFound.title}</h1>
                    <p className="mt-4 text-ink-soft">{blogPage.notFound.text}</p>
                    <Link to={paths.blog} className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink px-6 py-3 text-sm font-medium uppercase tracking-[0.14em] transition-colors hover:bg-ink hover:text-paper">
                        <BackArrow /> {blogPage.back}
                    </Link>
                </div>
            </div>
        );
    }

    const related = articles.filter((a) => a.slug !== post.slug && a.category === post.category)
        .concat(articles.filter((a) => a.slug !== post.slug && a.category !== post.category))
        .slice(0, 2);

    return (
        <article ref={root} className="bg-paper text-ink">

            <header className="mx-auto max-w-[1600px] px-5 md:px-10 pt-14 md:pt-20">
                <Link to={paths.blog} data-intro className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-ink-soft transition-colors hover:text-ck-red">
                    <BackArrow /> {blogPage.back}
                </Link>
                <p data-intro className="mt-10 text-xs font-medium uppercase tracking-[0.22em] text-ck-red">{post.category}</p>
                <h1 data-title className="mt-5 max-w-[22ch] font-heading font-semibold text-[clamp(2.25rem,1rem+4.6vw,6rem)] leading-[0.98] tracking-[-0.04em]">{post.title}</h1>
                <p data-intro className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.18em] text-ink-soft">
                    <span>{post.author}</span><span>{formatDate(post.date)}</span><span>{readTime(post)}</span>
                </p>
                <div data-cover className="mt-12 md:mt-16 aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-[28px]">
                    <ArticleCover article={post} index={index} large />
                </div>
            </header>

            <div className="mx-auto max-w-[1600px] px-5 md:px-10">
                <div className="mx-auto max-w-[44rem] py-16 md:py-24">
                    <p className="font-heading text-[clamp(1.3rem,1rem+1vw,1.8rem)] font-medium leading-[1.35] tracking-[-0.01em]">{post.excerpt}</p>
                    <div className="mt-10 border-t border-ink-faint pt-4 text-[1.0625rem] md:text-lg leading-[1.75] text-ink/85">
                        {post.body.map(renderBlock)}
                    </div>

                    <ul className="mt-14 flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                            <li key={tag} className="rounded-full border border-ink-faint px-3.5 py-1.5 text-xs text-ink-soft">{tag}</li>
                        ))}
                    </ul>

                    {/* Gentle call to action */}
                    <aside className="mt-16 rounded-[28px] border border-ink-faint p-8 md:p-10">
                        <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-[-0.02em]">{blogPage.articleCta.title}</h2>
                        <p className="mt-2 text-ink-soft">{blogPage.articleCta.text}</p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="rounded-full bg-ck-red px-6 py-3 text-xs font-medium uppercase tracking-[0.14em] text-paper transition-colors hover:bg-ink">{blogPage.articleCta.whatsapp}</a>
                            <a href={mailtoUrl()} className="rounded-full border border-ink px-6 py-3 text-xs font-medium uppercase tracking-[0.14em] text-ink transition-colors hover:bg-ink hover:text-paper">{blogPage.articleCta.email}</a>
                        </div>
                    </aside>
                </div>

                {/* Related */}
                <section aria-labelledby="related-title" className="border-t border-ink pb-28 md:pb-40 pt-14">
                    <h2 id="related-title" className="font-heading text-title font-semibold">{blogPage.related}</h2>
                    <ul className="mt-10 grid gap-x-6 gap-y-12 md:grid-cols-2">
                        {related.map((a) => (
                            <li key={a.slug}>
                                <Link to={paths.post(a.slug)} className="group block">
                                    <div className="aspect-[3/2] overflow-hidden rounded-[22px]">
                                        <ArticleCover article={a} index={articles.indexOf(a)} className="transition-transform duration-[1200ms] ease-cinema group-hover:scale-[1.04]" />
                                    </div>
                                    <p className="mt-6 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-ck-red">{a.category}</p>
                                    <h3 className="mt-3 font-heading text-xl md:text-2xl font-semibold leading-tight tracking-[-0.02em] transition-colors group-hover:text-ck-red">{a.title}</h3>
                                    <p className="mt-3 text-[0.68rem] uppercase tracking-[0.18em] text-ink-soft">{formatDate(a.date)} · {readTime(a)}</p>
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
