import { describe, it, expect } from 'vitest';
import { getPageMeta, headTags, llmsTxt, normalizePath, sitePaths, sitemapXml } from '../lib/seo';
import { articles, articleText, type Article } from '../content/blog';
import { servicePages } from '../content/servicePages';

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
        expect(broken).toEqual([]);
    });

    it('gives every new guide a quick answer, FAQs and enough depth', () => {
        for (const a of articles.filter((x) => x.answer)) {
            expect(a.faqs?.length ?? 0).toBeGreaterThanOrEqual(3);
            expect(a.excerpt.length).toBeLessThanOrEqual(200);
            const words = articleText(a).split(/\s+/).length;
            expect(words).toBeGreaterThan(650);
        }
    });

    it('describes the site and every article for AI assistants', () => {
        const txt = llmsTxt();
        expect(txt).toContain('# CK Studio');
        for (const a of articles) expect(txt).toContain(`/blog/${a.slug}/`);
    });
});
