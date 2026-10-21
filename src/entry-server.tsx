/**
 * Build-time only (never sent to visitors): renders a page of the site to HTML text,
 * so scripts/prerender.mjs can save a ready-made HTML file for every page.
 */
import { prerender } from 'react-dom/static';
import App from './App';

export { getPageMeta, headTags, sitePaths, sitemapXml } from './lib/seo';

export async function render(url: string): Promise<string> {
    const { prelude } = await prerender(<App location={url} />);
    return new Response(prelude).text();
}
