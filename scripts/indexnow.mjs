/**
 * IndexNow: after each deploy, tells Bing (which also feeds ChatGPT search, Copilot, DuckDuckGo and Yahoo)
 * and the other IndexNow search engines to re-read the site's pages, instead of waiting for their next visit.
 * Runs as the last step of .github/workflows/deploy.yml and reads the page list from dist/sitemap.xml.
 * The key below is public on purpose: search engines check it against https://ckstudio.org/<key>.txt
 * (public/<key>.txt). A failed ping never blocks the deploy.
 */
import { readFile } from 'node:fs/promises';

const host = 'ckstudio.org';
const key = 'aade417bbf9a4c40949d4d8e0d0fc21c';

const sitemap = await readFile(new URL('../dist/sitemap.xml', import.meta.url), 'utf8');
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

// node scripts/indexnow.mjs --dry-run  → only lists what would be sent
if (process.argv.includes('--dry-run')) {
    console.log(`IndexNow (dry run): would send ${urlList.length} pages, e.g. ${urlList.slice(0, 3).join(', ')}`);
    process.exit(0);
}

try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList }),
    });
    // 200 = received, 202 = received (key check pending); anything else is reported but harmless
    console.log(`IndexNow: sent ${urlList.length} pages, answer ${response.status} ${response.statusText}`);
} catch (error) {
    console.log(`IndexNow: could not reach the service (${error.message}); pages will be found on the next crawl.`);
}
