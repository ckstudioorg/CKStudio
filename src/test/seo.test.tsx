import { describe, it, expect } from 'vitest';
import { getPageMeta, headTags, normalizePath, sitePaths, sitemapXml } from '../lib/seo';
import { articles } from '../content/blog';
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
});
