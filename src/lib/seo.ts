/**
 * Search-engine details for every page, in one place.
 * Used twice: at build time (scripts/prerender.mjs writes them into each page's HTML file)
 * and in the browser (components/SEO.tsx updates them when the visitor moves between pages).
 */
import { articleText, articles, plainText } from '../content/blog';
import { contact } from '../content/contact';
import { faqs } from '../content/faq';
import { services } from '../content/services';
import { areaServed, pageSeo, site } from '../content/seo';
import { servicePages } from '../content/servicePages';
import { legalPages } from '../content/legal';

import { normalizePath, paths } from './paths';

export { normalizePath, paths };

export interface PageMeta {
    title: string;
    description: string;
    path: string;
    type: 'website' | 'article';
    image: string;
    imageAlt: string;
    noindex?: boolean;
    published?: string;
    modified?: string;
    tags?: string[];
    jsonLd: object[];
}

export const absolute = (path: string) => `${site.url}${path}`;

const businessId = `${site.url}/#business`;
const websiteId = `${site.url}/#website`;

const business = {
    '@type': 'ProfessionalService',
    '@id': businessId,
    name: site.name,
    legalName: site.legalName,
    alternateName: 'CK Studio Films',
    description: pageSeo.home.description,
    url: `${site.url}/`,
    logo: site.logo,
    image: site.image,
    telephone: contact.phone.international.replace(/\s+/g, ''),
    email: contact.email,
    address: {
        '@type': 'PostalAddress',
        streetAddress: contact.address.street,
        addressLocality: contact.address.city,
        addressRegion: contact.address.region,
        postalCode: contact.address.postalCode,
        addressCountry: contact.address.country,
    },
    openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: contact.hours.days,
        opens: contact.hours.opens,
        closes: contact.hours.closes,
    },
    areaServed: areaServed.map((name) => ({ '@type': 'Place', name })),
    sameAs: contact.socials.map((s) => s.url),
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Services',
        itemListElement: services.list.map((group) => ({
            '@type': 'OfferCatalog',
            name: group.title,
            description: group.description,
            itemListElement: group.items.map((item) => ({
                '@type': 'Offer',
                itemOffered: { '@type': 'Service', name: item.split(' (')[0].split(' — ')[0] },
            })),
        })),
    },
};

const website = {
    '@type': 'WebSite',
    '@id': websiteId,
    url: `${site.url}/`,
    name: site.name,
    inLanguage: 'en-IN',
    publisher: { '@id': businessId },
};

const breadcrumbs = (trail: { name: string; path: string }[]) => ({
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...trail].map((crumb, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: crumb.name,
        item: absolute(crumb.path),
    })),
});

const graph = (...nodes: object[]) => [{ '@context': 'https://schema.org', '@graph': nodes }];

const base = { type: 'website' as const, image: site.image, imageAlt: site.imageAlt };

/** The search details for any address on the site. Unknown addresses get the "not found" details. */
export function getPageMeta(pathname: string): PageMeta {
    const path = normalizePath(pathname);

    if (path === paths.home) {
        return { ...base, ...pageSeo.home, path, jsonLd: graph(business, website) };
    }

    if (path === paths.blog) {
        return {
            ...base, ...pageSeo.blog, path,
            jsonLd: graph(
                {
                    '@type': 'Blog',
                    '@id': `${absolute(path)}#blog`,
                    name: `${site.name} Blog`,
                    description: pageSeo.blog.description,
                    url: absolute(path),
                    publisher: { '@id': businessId },
                    blogPost: articles.map((a) => ({
                        '@type': 'BlogPosting',
                        headline: a.title,
                        url: absolute(paths.post(a.slug)),
                        datePublished: a.date,
                    })),
                },
                breadcrumbs([{ name: 'Blog', path }]),
                business,
            ),
        };
    }

    if (path === paths.faq) {
        return {
            ...base, ...pageSeo.faq, path,
            jsonLd: graph(
                {
                    '@type': 'FAQPage',
                    '@id': `${absolute(path)}#faq`,
                    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
                },
                breadcrumbs([{ name: 'FAQ', path }]),
                business,
            ),
        };
    }

    const post = articles.find((a) => path === paths.post(a.slug));
    if (post) {
        const service = servicePages.find((s) => s.slug === post.service);
        const image = post.image ? absolute(post.image) : site.image;
        return {
            title: `${post.title} | CK Studio`,
            description: post.excerpt,
            path,
            type: 'article',
            image,
            imageAlt: post.image ? post.title : site.imageAlt,
            published: post.date,
            modified: post.updated ?? post.date,
            tags: post.tags,
            jsonLd: graph(
                {
                    '@type': 'BlogPosting',
                    '@id': `${absolute(path)}#article`,
                    headline: post.title,
                    description: post.excerpt,
                    ...(post.answer ? { abstract: plainText(post.answer) } : {}),
                    image,
                    datePublished: post.date,
                    dateModified: post.updated ?? post.date,
                    inLanguage: 'en-IN',
                    articleSection: post.category,
                    keywords: post.tags.join(', '),
                    wordCount: articleText(post).split(/\s+/).length,
                    author: { '@type': 'Organization', name: post.author, url: `${site.url}/` },
                    publisher: { '@id': businessId },
                    mainEntityOfPage: absolute(path),
                    ...(post.sources?.length ? { citation: post.sources.map((s) => s.url) } : {}),
                    ...(service ? { about: { '@type': 'Service', name: service.name, url: absolute(paths.service(service.slug)) } } : {}),
                },
                ...(post.faqs?.length
                    ? [{
                        '@type': 'FAQPage',
                        '@id': `${absolute(path)}#faq`,
                        mainEntity: post.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: plainText(f.a) } })),
                    }]
                    : []),
                breadcrumbs([{ name: 'Blog', path: paths.blog }, { name: post.title, path }]),
                business,
            ),
        };
    }

    const service = servicePages.find((p) => path === paths.service(p.slug));
    if (service) {
        return {
            ...base,
            title: service.seoTitle,
            description: service.seoDescription,
            path,
            jsonLd: graph(
                {
                    '@type': 'Service',
                    '@id': `${absolute(path)}#service`,
                    name: service.name,
                    serviceType: service.name,
                    description: service.seoDescription,
                    url: absolute(path),
                    provider: { '@id': businessId },
                    areaServed: areaServed.map((name) => ({ '@type': 'Place', name })),
                    hasOfferCatalog: {
                        '@type': 'OfferCatalog',
                        name: service.name,
                        itemListElement: service.offerings.map((o) => ({
                            '@type': 'Offer',
                            itemOffered: { '@type': 'Service', name: o.title, description: o.text },
                        })),
                    },
                },
                {
                    '@type': 'FAQPage',
                    '@id': `${absolute(path)}#faq`,
                    mainEntity: service.faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
                },
                breadcrumbs([{ name: 'Services', path: '/#services' }, { name: service.name, path }]),
                business,
            ),
        };
    }

    const legal = legalPages.find((p) => path === paths.legal(p.slug));
    if (legal) {
        return {
            ...base,
            title: legal.seoTitle,
            description: legal.seoDescription,
            path,
            modified: undefined,
            jsonLd: graph(
                { '@type': 'WebPage', '@id': `${absolute(path)}#page`, name: legal.title, url: absolute(path), dateModified: legal.updated, isPartOf: { '@id': websiteId } },
                breadcrumbs([{ name: legal.title, path }]),
            ),
        };
    }

    return { ...base, ...pageSeo.notFound, path, noindex: true, jsonLd: [] };
}

/** Every page that gets its own ready-made HTML file (and a line in the sitemap). */
export function sitePaths(): string[] {
    return [
        paths.home,
        ...servicePages.map((p) => paths.service(p.slug)),
        paths.blog,
        ...articles.map((a) => paths.post(a.slug)),
        paths.faq,
        ...legalPages.map((p) => paths.legal(p.slug)),
    ];
}

const escapeHtml = (value: string) =>
    value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** The <head> tags for a page, as HTML. Each carries data-seo so the browser can swap them on page change. */
export function headTags(meta: PageMeta): string {
    const url = absolute(meta.path);
    const tag = (name: string, attrs: Record<string, string>) =>
        `<${name} data-seo ${Object.entries(attrs).map(([k, v]) => `${k}="${escapeHtml(v)}"`).join(' ')}>`;
    const metaName = (name: string, content: string) => tag('meta', { name, content });
    const metaProp = (property: string, content: string) => tag('meta', { property, content });

    const lines = [
        `<title data-seo>${escapeHtml(meta.title)}</title>`,
        metaName('description', meta.description),
        metaName('robots', meta.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'),
        ...(meta.noindex ? [] : [tag('link', { rel: 'canonical', href: url })]),
        metaProp('og:type', meta.type),
        metaProp('og:site_name', site.name),
        metaProp('og:locale', site.locale),
        metaProp('og:url', url),
        metaProp('og:title', meta.title),
        metaProp('og:description', meta.description),
        metaProp('og:image', meta.image),
        metaProp('og:image:alt', meta.imageAlt),
        ...(meta.image === site.image ? [metaProp('og:image:width', '1200'), metaProp('og:image:height', '630')] : []),
        ...(meta.published ? [metaProp('article:published_time', meta.published)] : []),
        ...(meta.modified ? [metaProp('article:modified_time', meta.modified)] : []),
        ...(meta.tags ?? []).map((t) => metaProp('article:tag', t)),
        metaName('twitter:card', 'summary_large_image'),
        metaName('twitter:site', '@CKStudioFilms'),
        metaName('twitter:title', meta.title),
        metaName('twitter:description', meta.description),
        metaName('twitter:image', meta.image),
        ...meta.jsonLd.map((data) => `<script data-seo type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`),
    ];
    return lines.join('\n    ');
}

/** sitemap.xml listing every page, so Google finds them all. Built automatically, so it never goes out of date. */
export function sitemapXml(buildDate: string): string {
    const latestPost = articles.map((a) => a.date).sort().at(-1) ?? buildDate;
    const lastmod = (path: string) => {
        const post = articles.find((a) => paths.post(a.slug) === path);
        if (post) return post.updated ?? post.date;
        if (path === paths.blog) return latestPost;
        const legal = legalPages.find((p) => paths.legal(p.slug) === path);
        if (legal) return legal.updated;
        return buildDate;
    };
    const urls = sitePaths().map((path) => `  <url><loc>${absolute(path)}</loc><lastmod>${lastmod(path)}</lastmod></url>`);
    return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`;
}

/**
 * llms.txt — a plain summary of the site for AI assistants and answer engines (ChatGPT, Claude, Perplexity,
 * Gemini). Built automatically from the same content as the pages, so it never goes out of date.
 */
export function llmsTxt(): string {
    const lines = [
        `# ${site.name} (${site.legalName})`,
        '',
        `> ${pageSeo.home.description}`,
        '',
        `Location: ${contact.address.street}, ${contact.address.city}, ${contact.address.region} ${contact.address.postalCode}, India. Phone: ${contact.phone.international}. Email: ${contact.email}. Website: ${site.url}/`,
        `Languages: Telugu, Hindi and English. Serves clients in ${areaServed.join(', ')}.`,
        '',
        '## Services',
        ...servicePages.map((p) => `- [${p.name}](${absolute(paths.service(p.slug))}): ${p.seoDescription}`),
        '',
        '## Guides',
        ...articles.map((a) => `- [${a.title}](${absolute(paths.post(a.slug))}): ${plainText(a.answer ?? a.excerpt)}`),
        '',
        '## More',
        `- [Frequently asked questions](${absolute(paths.faq)})`,
        `- [Blog](${absolute(paths.blog)})`,
        `- [Project enquiry form](${site.url}/#enquiry)`,
        ...legalPages.map((p) => `- [${p.title}](${absolute(paths.legal(p.slug))})`),
        '',
    ];
    return lines.join('\n');
}
