import { beforeAll, describe, it, expect } from 'vitest';
import { existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { getPageMeta, headTags, llmsTxt, normalizePath, rssXml, shareImage, sitePaths, sitemapXml } from '../lib/seo';
import { articles, articleText, coverImage, headingId, plainText, readingMinutes, type Article } from '../content/blog';
import { loadAllArticles } from '../lib/loadArticle';
import { servicePages } from '../content/servicePages';
import { footer } from '../content/contact';
import { glossary } from '../content/glossary';
import { briefBuilder, sizeChecker, toolList } from '../content/tools';
import { teServices } from '../content/telugu';

/** Every article whole: its card (content/blog.ts) plus its text (content/articles/<slug>.ts) */
let full: Article[] = [];
beforeAll(async () => {
    full = await loadAllArticles();
});

describe('search engine details', () => {
    it('gives every page its own title and description', async () => {
        const metas = await Promise.all(sitePaths().map(getPageMeta));
        // home, blog, FAQ + articles + services + 2 legal pages + glossary and its terms + tools + Telugu home and services
        expect(metas).toHaveLength(3 + articles.length + servicePages.length + 2 + 1 + glossary.length + 1 + toolList.length + 1 + teServices.length);
        expect(new Set(metas.map((m) => m.title)).size).toBe(metas.length);
        expect(new Set(metas.map((m) => m.description)).size).toBe(metas.length);
        for (const m of metas) {
            expect(m.noindex).toBeFalsy();
            expect(m.description.length).toBeGreaterThan(50);
            expect(m.jsonLd.length).toBeGreaterThan(0);
        }
    });

    it('treats addresses with and without a final slash as the same page', async () => {
        expect(normalizePath('/blog')).toBe('/blog/');
        expect(normalizePath('/faq?x=1')).toBe('/faq/');
        expect((await getPageMeta('/blog')).title).toBe((await getPageMeta('/blog/')).title);
    });

    it('marks unknown pages as not for search results', async () => {
        const meta = await getPageMeta('/no-such-page');
        expect(meta.noindex).toBe(true);
        expect(headTags(meta)).toContain('noindex');
        expect(headTags(meta)).not.toContain('rel="canonical"');
    });

    it('describes articles as blog posts with breadcrumbs', async () => {
        const post = articles[0];
        const html = headTags(await getPageMeta(`/blog/${post.slug}`));
        expect(html).toContain(`href="https://ckstudio.org/blog/${post.slug}/"`);
        expect(html).toContain('"@type":"BlogPosting"');
        expect(html).toContain('"@type":"BreadcrumbList"');
        expect(html).toContain(`content="${post.date}"`);
    });

    it("puts an article's quick answer, questions, sources and word count into its structured data", async () => {
        const post = full.find((a) => a.answer && a.faqs?.length && a.sources?.length)!;
        const meta = await getPageMeta(`/blog/${post.slug}/`);
        const nodes = (meta.jsonLd[0] as { '@graph': Record<string, unknown>[] })['@graph'];
        const blogPosting = nodes.find((n) => n['@type'] === 'BlogPosting')!;
        const faqPage = nodes.find((n) => n['@type'] === 'FAQPage') as { mainEntity: { name: string }[] };
        expect(blogPosting.abstract).toBe(plainText(post.answer!));
        expect(blogPosting.citation).toEqual(post.sources!.map((s) => s.url));
        expect(blogPosting.wordCount).toBe(articleText(post).split(/\s+/).length);
        expect(faqPage.mainEntity.map((q) => q.name)).toEqual(post.faqs!.map((f) => f.q));
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
        for (const a of full) {
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
        for (const column of footer.columns) for (const l of column.links) if (l.page && !pages.has(l.page)) broken.push(`footer → ${l.page}`);
        for (const t of glossary) {
            if (t.guide && !pages.has(t.guide.page)) broken.push(`glossary ${t.slug} → ${t.guide.page}`);
            for (const r of t.related ?? []) if (!glossary.some((g) => g.slug === r)) broken.push(`glossary ${t.slug} → related ${r}`);
        }
        for (const page of [sizeChecker.guide.page, briefBuilder.guide.page]) if (!pages.has(page)) broken.push(`tools → ${page}`);
        expect(broken).toEqual([]);
    });

    it('keeps glossary terms unique, defined and matched to real pages', () => {
        expect(new Set(glossary.map((t) => t.slug)).size).toBe(glossary.length);
        expect(new Set(glossary.map((t) => t.term.toLowerCase())).size).toBe(glossary.length);
        for (const t of glossary) {
            expect(t.slug).toMatch(/^[a-z0-9-]+$/);
            expect(t.short.length, t.slug).toBeGreaterThan(60);
            expect(t.more.length, t.slug).toBeGreaterThan(60);
        }
    });

    it('has a Telugu page for every service, linked both ways for search engines', async () => {
        expect(teServices.map((s) => s.slug).sort()).toEqual(servicePages.map((s) => s.slug).sort());
        const english = await getPageMeta('/services/vfx-and-cg/');
        const telugu = await getPageMeta('/te/services/vfx-and-cg/');
        expect(telugu.lang).toBe('te');
        expect(headTags(english)).toContain('hreflang="te" href="https://ckstudio.org/te/services/vfx-and-cg/"');
        expect(headTags(telugu)).toContain('hreflang="en-IN" href="https://ckstudio.org/services/vfx-and-cg/"');
        expect(headTags(await getPageMeta('/'))).toContain('hreflang="te" href="https://ckstudio.org/te/"');
    });

    it('has a link-preview image for every article (run "npm run share-images" after adding one)', async () => {
        const missing = articles.filter((a) => !a.image && !existsSync(join(process.cwd(), 'public', shareImage(a.slug)))).map((a) => a.slug);
        expect(missing).toEqual([]);
        const noCover = articles.filter((a) => !a.image && !existsSync(join(process.cwd(), 'public', coverImage(a.slug)))).map((a) => a.slug);
        expect(noCover).toEqual([]);
        expect((await getPageMeta('/blog/ad-film-cost-in-india/')).image).toBe('https://ckstudio.org/images/blog/share/ad-film-cost-in-india.jpg');
    });

    it('gives every heading in an article its own "In this guide" link target', () => {
        const fixed = ['quick-answer', 'toc-title', 'faq-title', 'sources-title', 'related-title'];
        for (const a of full) {
            const ids = a.body.flatMap((b) => (b.type === 'h2' ? [headingId(b.text)] : []));
            for (const id of ids) expect(id, `${a.slug}: "${id}"`).toMatch(/^[a-z0-9-]{3,}$/);
            expect(new Set([...ids, ...fixed]).size, a.slug).toBe(ids.length + fixed.length);
        }
    });

    it('gives every new guide a quick answer, FAQs and enough depth', () => {
        for (const a of full.filter((x) => x.answer)) {
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

    it('describes the site and every article for AI assistants', async () => {
        const txt = await llmsTxt();
        expect(txt).toContain('# CK Studio');
        for (const a of full) {
            expect(txt).toContain(`/blog/${a.slug}/`);
            expect(txt).toContain(plainText(a.answer ?? a.excerpt));
        }
    });
});

describe('article files', () => {
    it("keeps each article's text in its own file, named after its card's slug", () => {
        const files = readdirSync(join(process.cwd(), 'src/content/articles')).map((f) => f.replace(/\.ts$/, ''));
        expect(files.sort()).toEqual(articles.map((a) => a.slug).sort());
        expect(new Set(articles.map((a) => a.slug)).size).toBe(articles.length);
        for (const a of full) expect(a.body.length, a.slug).toBeGreaterThan(0);
    });

    it('shows the right reading time on every card (the "minutes" in content/blog.ts)', () => {
        const wrong = full.filter((a) => a.minutes !== readingMinutes(a)).map((a) => `${a.slug}: minutes should be ${readingMinutes(a)}`);
        expect(wrong).toEqual([]);
    });
});
