import { describe, it, expect } from 'vitest';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { getPageMeta, headTags, llmsTxt, normalizePath, rssXml, shareImage, sitePaths, sitemapXml } from '../lib/seo';
import { articles, articleText, headingId, type Article } from '../content/blog';
import { servicePages } from '../content/servicePages';
import { footer } from '../content/contact';

describe('search engine details', () => {
    it('gives every page its own title and description', () => {
        const metas = sitePaths().map(getPageMeta);
        expect(metas).toHaveLength(3 + articles.length + servicePages.length + 2);
        expect(new Set(metas.map((m) => m.title)).size).toBe(metas.length);
        expect(new Set(metas.map((m) => m.description)).size).toBe(metas.length);
        for (const m of metas) {
            expect(m.noindex).toBeFalsy();
            expect(m.description.length).toBeGreaterThan(50);
            expect(m.jsonLd.length).toBeGreaterThan(0);
        }
    });

    it('treats addresses with and without a final slash as the same page', () => {
        expect(normalizePath('/blog')).toBe('/blog/');
        expect(normalizePath('/faq?x=1')).toBe('/faq/');
        expect(getPageMeta('/blog').title).toBe(getPageMeta('/blog/').title);
    });

    it('marks unknown pages as not for search results', () => {
        const meta = getPageMeta('/no-such-page');
        expect(meta.noindex).toBe(true);
        expect(headTags(meta)).toContain('noindex');
        expect(headTags(meta)).not.toContain('rel="canonical"');
    });

    it('describes articles as blog posts with breadcrumbs', () => {
        const post = articles[0];
        const html = headTags(getPageMeta(`/blog/${post.slug}`));
        expect(html).toContain(`href="https://ckstudio.org/blog/${post.slug}/"`);
        expect(html).toContain('"@type":"BlogPosting"');
        expect(html).toContain('"@type":"BreadcrumbList"');
        expect(html).toContain(`content="${post.date}"`);
    });

    it('lists every page in the sitemap', () => {
        const xml = sitemapXml('2026-10-21');
        for (const path of sitePaths()) expect(xml).toContain(`<loc>https://ckstudio.org${path}</loc>`);
    });

    it('only links to pages and sections that exist', () => {
        const pages = new Set(sitePaths());
        const homeSections = new Set(['enquiry', 'services', 'portfolio', 'about', 'contact']);
        const texts = (a: Article) => [
            a.answer ?? '',
            ...(a.keyPoints ?? []),
            ...a.body.map((b) => (b.type === 'table' ? [...b.head, ...b.rows.flat()].join(' ') : b.type === 'list' || b.type === 'steps' ? b.items.join(' ') : b.text)),
            ...(a.faqs ?? []).map((q) => q.a),
        ];
        const broken: string[] = [];
        for (const a of articles) {
            for (const text of texts(a)) {
                for (const [, href] of text.matchAll(/\]\(([^)\s]+)\)/g)) {
                    if (!href.startsWith('/')) continue;
                    if (href.startsWith('/#')) {
                        if (!homeSections.has(href.slice(2))) broken.push(`${a.slug} → ${href}`);
                    } else if (!pages.has(normalizePath(href))) {
                        broken.push(`${a.slug} → ${href}`);
                    }
                }
            }
            if (a.service && !pages.has(`/services/${a.service}/`)) broken.push(`${a.slug} → service ${a.service}`);
        }
        for (const p of servicePages) {
            for (const slug of p.articles) if (!articles.some((a) => a.slug === slug)) broken.push(`service ${p.slug} → ${slug}`);
        }
        for (const g of footer.guides.links) if (!pages.has(g.page)) broken.push(`footer → ${g.page}`);
        expect(broken).toEqual([]);
    });

    it('has a link-preview image for every article (run "npm run share-images" after adding one)', () => {
        const missing = articles.filter((a) => !a.image && !existsSync(join(process.cwd(), 'public', shareImage(a.slug)))).map((a) => a.slug);
        expect(missing).toEqual([]);
        expect(getPageMeta('/blog/ad-film-cost-in-india/').image).toBe('https://ckstudio.org/images/blog/share/ad-film-cost-in-india.jpg');
    });

    it('gives every heading in an article its own "In this guide" link target', () => {
        const fixed = ['quick-answer', 'toc-title', 'faq-title', 'sources-title', 'related-title'];
        for (const a of articles) {
            const ids = a.body.flatMap((b) => (b.type === 'h2' ? [headingId(b.text)] : []));
            for (const id of ids) expect(id, `${a.slug}: "${id}"`).toMatch(/^[a-z0-9-]{3,}$/);
            expect(new Set([...ids, ...fixed]).size, a.slug).toBe(ids.length + fixed.length);
        }
    });

    it('gives every new guide a quick answer, FAQs and enough depth', () => {
        for (const a of articles.filter((x) => x.answer)) {
            expect(a.faqs?.length ?? 0).toBeGreaterThanOrEqual(3);
            expect(a.excerpt.length).toBeLessThanOrEqual(200);
            const words = articleText(a).split(/\s+/).length;
            expect(words).toBeGreaterThan(650);
        }
    });

    it('lists every article in the blog feed, newest first', () => {
        const feed = rssXml();
        expect(feed.match(/<item>/g)).toHaveLength(articles.length);
        const dates = [...feed.matchAll(/<pubDate>([^<]+)<\/pubDate>/g)].map((m) => Date.parse(m[1]));
        expect(dates).toEqual([...dates].sort((a, b) => b - a));
        expect(feed).not.toMatch(/&(?!amp;|lt;|gt;)/);
    });

    it('describes the site and every article for AI assistants', () => {
        const txt = llmsTxt();
        expect(txt).toContain('# CK Studio');
        for (const a of articles) expect(txt).toContain(`/blog/${a.slug}/`);
    });
});
