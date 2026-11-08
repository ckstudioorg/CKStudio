/**
 * Runs after `vite build` (see "build" in package.json).
 * Saves a ready-made HTML file for every page (home, blog, each article, FAQ, 404) with the page's full text,
 * title, description, link-preview tags and structured data already inside. Search engines and link previews
 * read these directly instead of an empty page. Also writes sitemap.xml so it always lists every page.
 * No server is involved: GitHub Pages just serves these files.
 */
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const dist = join(process.cwd(), 'dist');
const ssrDir = join(process.cwd(), 'dist-ssr');
const { render, getPageMeta, headTags, llmsTxt, rssXml, sitePaths, sitemapXml } = await import(pathToFileURL(join(ssrDir, 'entry-server.js')).href);

const template = await readFile(join(dist, 'index.html'), 'utf8');

// Which page file each address needs. Its code is requested straight away (modulepreload) instead of
// after the main code has started, so the page is interactive sooner.
const manifest = JSON.parse(await readFile(join(dist, '.vite', 'manifest.json'), 'utf8'));
const pageModule = (url) => {
    if (url === '/') return null;
    if (url === '/blog/') return 'src/pages/Blog.tsx';
    if (url.startsWith('/blog/')) return 'src/pages/BlogPost.tsx';
    if (url === '/faq/') return 'src/pages/FAQ.tsx';
    if (url.startsWith('/services/')) return 'src/pages/ServicePage.tsx';
    if (url === '/privacy/' || url === '/terms/') return 'src/pages/LegalPage.tsx';
    return 'src/pages/NotFound.tsx';
};
const entryKey = Object.keys(manifest).find((k) => manifest[k].isEntry);
const collect = (key, out = new Set()) => {
    if (!manifest[key] || out.has(key)) return out;
    out.add(key);
    for (const dep of manifest[key].imports ?? []) collect(dep, out);
    return out;
};
const alreadyLoaded = collect(entryKey);
// An article page also needs its own text file (src/content/articles/<slug>.ts, see src/lib/loadArticle.ts)
const articleModule = (url) => {
    const slug = url.match(/^\/blog\/([^/]+)\/$/)?.[1];
    return slug ? `src/content/articles/${slug}.ts` : null;
};
const preloadTags = (url) => {
    const keys = new Set();
    for (const key of [pageModule(url), articleModule(url)]) if (key && manifest[key]) collect(key, keys);
    return [...keys]
        .filter((k) => !alreadyLoaded.has(k))
        .map((k) => `<link rel="modulepreload" crossorigin href="/${manifest[k].file}">`)
        .join('\n    ');
};

// Each article's text must stay in its own file, fetched only on its own page. If any page's code pulled an
// article text in directly, every visitor of that page would download it: stop the build instead.
const articleKeys = Object.keys(manifest).filter((k) => k.startsWith('src/content/articles/'));
for (const key of Object.keys(manifest).filter((k) => manifest[k].isEntry || manifest[k].isDynamicEntry)) {
    if (articleKeys.includes(key)) continue;
    const deps = collect(key);
    const pulledIn = articleKeys.filter((k) => deps.has(k));
    if (pulledIn.length) throw new Error(`${key} loads article texts directly (${pulledIn.join(', ')}); use src/lib/loadArticle.ts`);
}
if (!template.includes('<!--seo-->') || !template.includes('<div id="root"></div>')) {
    throw new Error('index.html is missing the <!--seo--> marker or the empty root element');
}

async function savePage(url, file) {
    const body = await render(url);
    if (!body.includes('<h1')) throw new Error(`Page ${url} has no main heading (h1)`);
    const meta = await getPageMeta(url);
    let html = template
        .replace('<!--seo-->', `${headTags(meta)}\n    ${preloadTags(url)}`)
        .replace('<div id="root"></div>', `<div id="root" data-prerendered>${body}</div>`);
    // Home page: the small header logo starts hidden; the hero's scroll animation fades it in
    if (url === '/') html = html.replace('<html lang="en-IN">', '<html lang="en-IN" style="--ck-header-logo:0">');
    const out = join(dist, file);
    await mkdir(join(out, '..'), { recursive: true });
    await writeFile(out, html);
    console.log(`  ${url.padEnd(60)} → dist/${file.replace(/\\/g, '/')}`);
}

console.log('Pre-rendering pages:');
for (const path of sitePaths()) {
    await savePage(path, path === '/' ? 'index.html' : join(path.slice(1), 'index.html'));
}
// GitHub Pages shows 404.html for any address that doesn't exist
await savePage('/404/', '404.html');

const today = new Date().toISOString().slice(0, 10);
await writeFile(join(dist, 'sitemap.xml'), sitemapXml(today));
console.log(`  sitemap.xml with ${sitePaths().length} pages`);
// A plain-text guide to the site for AI assistants (see llmsTxt in src/lib/seo.ts)
await writeFile(join(dist, 'llms.txt'), await llmsTxt());
console.log('  llms.txt for AI assistants');
// The blog as an RSS feed (see rssXml in src/lib/seo.ts)
await writeFile(join(dist, 'feed.xml'), rssXml());
console.log('  feed.xml (blog feed)');

await rm(ssrDir, { recursive: true, force: true });
await rm(join(dist, '.vite'), { recursive: true, force: true });
