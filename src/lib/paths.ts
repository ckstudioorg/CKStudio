/**
 * Page addresses. Every page lives in its own folder, so addresses end with "/".
 * Kept separate from lib/seo.ts so pages can link to each other without loading all the search details.
 */
export const paths = {
    home: '/',
    blog: '/blog/',
    faq: '/faq/',
    post: (slug: string) => `/blog/${slug}/`,
    service: (slug: string) => `/services/${slug}/`,
    legal: (slug: string) => `/${slug}/`,
};

/** "/blog" and "/blog/" are the same page; always use the version with the final slash. */
export function normalizePath(pathname: string): string {
    const clean = pathname.split(/[?#]/)[0] || '/';
    const withLead = clean.startsWith('/') ? clean : `/${clean}`;
    return withLead.endsWith('/') ? withLead : `${withLead}/`;
}
