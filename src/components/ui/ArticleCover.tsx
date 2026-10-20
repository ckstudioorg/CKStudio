import React from 'react';
import type { Article } from '../../content/blog';

/**
 * Article cover: the article's own image when provided, otherwise a designed typographic cover
 * (no stock photos). Light and dark versions alternate so a grid of covers has rhythm.
 */
const ArticleCover: React.FC<{ article: Article; index: number; className?: string; large?: boolean }> = ({ article, index, className = '', large }) => {
    if (article.image) {
        return <img src={article.image} alt="" loading="lazy" decoding="async" className={`h-full w-full object-cover ${className}`} />;
    }
    const dark = index % 2 === 0;
    return (
        <div aria-hidden="true" className={`relative h-full w-full overflow-hidden ${dark ? 'bg-ink text-paper' : 'bg-ink-ghost text-ink'} ${className}`}>
            {dark && <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 80% 20%, rgba(139,0,0,0.55), transparent 70%)' }} />}
            <span className={`absolute right-5 top-4 md:right-7 md:top-6 font-heading font-semibold leading-none tracking-[-0.05em] text-ck-red ${large ? 'text-[clamp(5rem,3rem+8vw,12rem)]' : 'text-[clamp(4rem,2rem+5vw,7rem)]'}`}>
                {String(index + 1).padStart(2, '0')}
            </span>
            <span className={`absolute bottom-5 left-5 md:bottom-7 md:left-7 text-[0.65rem] md:text-xs font-medium uppercase tracking-[0.25em] ${dark ? 'text-paper/70' : 'text-ink-soft'}`}>
                {article.category}
            </span>
        </div>
    );
};

export default ArticleCover;
