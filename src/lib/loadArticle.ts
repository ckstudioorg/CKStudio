/**
 * Article texts, one small download each. Every file in src/content/articles/ (<slug>.ts) is built as its own
 * code file, so an article page fetches only its own text; titles, dates and other cards come from content/blog.ts.
 * Ready-made article pages ask for their text file straight away (scripts/prerender.mjs adds a modulepreload).
 */
import { articles, type Article, type ArticleContent } from '../content/blog';

const files = import.meta.glob<ArticleContent>('../content/articles/*.ts', { import: 'default' });

/** A download that also says whether it has finished, so React's use() can read a finished one without waiting. */
type Download = Promise<Article> & { status?: 'pending' | 'fulfilled' | 'rejected'; value?: Article; reason?: unknown };

const downloads = new Map<string, Download>();

/** The card of the article with this slug, if there is one. */
export const findArticle = (slug: string | undefined) => articles.find((a) => a.slug === slug);

/**
 * The whole article (card + text), downloaded once and then kept. Resolves to undefined for an unknown slug.
 * Pages read it with React's use(), always with the same promise, so React can wait for it and pick it up again.
 */
export function loadArticle(slug: string): Promise<Article | undefined> {
    const card = findArticle(slug);
    const file = files[`../content/articles/${slug}.ts`];
    if (!card || !file) return Promise.resolve(undefined);
    let download = downloads.get(slug);
    if (!download) {
        const started: Download = file().then((text) => ({ ...card, ...text }));
        started.status = 'pending';
        started.then(
            (article) => {
                Object.assign(started, { status: 'fulfilled', value: article });
            },
            (reason) => {
                Object.assign(started, { status: 'rejected', reason });
                // If the download failed (for example a lost connection), try again the next time it is needed
                downloads.delete(slug);
            },
        );
        downloads.set(slug, started);
        download = started;
    }
    return download;
}

/** Every article, whole. Only for build-time files (llms.txt) and tests: in the browser it would fetch them all. */
export const loadAllArticles = () => Promise.all(articles.map(async (a) => (await loadArticle(a.slug))!));
