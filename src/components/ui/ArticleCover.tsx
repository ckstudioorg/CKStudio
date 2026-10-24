import React from 'react';
import type { Article } from '../../content/blog';

/**
 * Article cover: the article's own image when provided, otherwise a designed typographic cover
 * (no stock photos). Two dark versions alternate so a grid of covers has rhythm: red velvet light with a
 * gold-foil number, and soft gold light with an outlined gold number.
 */
const ArticleCover: React.FC<{ article: Article; index: number; className?: string; large?: boolean }> = ({ article, index, className = '', large }) => {
    if (article.image) {
        return <img src={article.image} alt="" loading="lazy" decoding="async" className={`h-full w-full object-cover ${className}`} />;
    }
    const velvet = index % 2 === 0;
    const number = String(index + 1).padStart(2, '0');
    return (
        <div aria-hidden="true" className={`relative h-full w-full overflow-hidden ${velvet ? 'bg-noir-2' : 'bg-noir-3'} ${className}`}>
            <div
                className="absolute inset-0"
                style={{
                    background: velvet
                        ? 'radial-gradient(ellipse 75% 65% at 82% 18%, rgba(139,0,0,0.55), rgba(10,8,7,0) 72%)'
                        : 'radial-gradient(ellipse 70% 60% at 18% 85%, rgba(212,175,55,0.12), rgba(10,8,7,0) 70%)',
                }}
            />
            {/* Fine inner gold frame */}
            <span className="absolute inset-2.5 md:inset-3 border border-gold/15" />
            <span
                className={`absolute right-6 top-4 md:right-8 md:top-6 font-display font-normal italic leading-none lining-nums ${large ? 'text-[clamp(5rem,3rem+8vw,12rem)]' : 'text-[clamp(4rem,2rem+5vw,7rem)]'} ${
                    velvet ? 'lux-foil' : 'text-transparent [-webkit-text-stroke:1px_rgba(212,175,55,0.75)]'
                }`}
            >
                {number}
            </span>
            <span className="lux-label absolute bottom-6 left-6 md:bottom-8 md:left-8">{article.category}</span>
        </div>
    );
};

export default ArticleCover;
