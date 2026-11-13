import React from 'react';
import { coverImage, type ArticleMeta } from '../../content/blog';

/**
 * Article cover: the article's own photo when it has one, otherwise its cover illustration — a gold line drawing
 * for its category on the black stage (made by scripts/cover-images.mjs) — with a fine gold frame and the
 * category label on top. `alt` describes the picture where it stands on its own (the top of an article);
 * on cards the title is right beside it, so it stays empty there.
 */
const ArticleCover: React.FC<{ article: ArticleMeta; index: number; className?: string; large?: boolean; alt?: string }> = ({ article, className = '', large, alt = '' }) => {
    if (article.image) {
        return <img src={article.image} alt={alt} loading="lazy" decoding="async" className={`h-full w-full object-cover ${className}`} />;
    }
    return (
        <div className={`relative h-full w-full overflow-hidden bg-noir-2 ${className}`}>
            <img
                src={coverImage(article.slug)}
                alt={alt}
                width={1200}
                height={800}
                loading={large ? 'eager' : 'lazy'}
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Fine inner gold frame */}
            <span aria-hidden="true" className="absolute inset-2.5 md:inset-3 border border-gold/15" />
            <span aria-hidden="true" className="lux-label absolute bottom-6 left-6 md:bottom-8 md:left-8">{article.category}</span>
        </div>
    );
};

export default ArticleCover;
