/**
 * Makes the link-preview image of every blog article: public/images/blog/share/<slug>.jpg (1200×630).
 * It is what WhatsApp, LinkedIn, Facebook and X show when an article is shared, and the article image Google gets.
 * Same look as the site: black stage, red velvet light, the article title in Boska with the part after a ":" or "?"
 * in gold italics, and the red-and-gold logo. Drawn by the Chrome or Edge already installed on this computer
 * (set CHROME_PATH to use another browser); nothing extra to install.
 *
 *   npm run share-images            makes the images that are missing (after adding articles)
 *   npm run share-images -- --all   remakes every image (after renaming articles or changing this design)
 */
import { spawn } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const outDir = join(root, 'public/images/blog/share');
const bundle = join(root, 'dist-share');
const { articles } = await import(pathToFileURL(join(bundle, 'blog.js')).href);
rmSync(bundle, { recursive: true, force: true });

const remakeAll = process.argv.includes('--all');
const todo = articles.filter((a) => !a.image && (remakeAll || !existsSync(join(outDir, `${a.slug}.jpg`))));
if (!todo.length) {
    console.log('Every article already has its image (add --all to remake them).');
    process.exit(0);
}

const browser = [
    process.env.CHROME_PATH,
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome',
].find((p) => p && existsSync(p));
if (!browser) throw new Error('No Chrome or Edge found. Set CHROME_PATH to the browser program and try again.');

// ---- The card design (fonts and logo embedded, so it works offline) ----
const b64 = (file) => readFileSync(join(root, file)).toString('base64');
const font = (file, family, weight, style) =>
    `@font-face{font-family:${family};src:url(data:font/woff2;base64,${b64(`public/fonts/${file}`)}) format('woff2');font-weight:${weight};font-style:${style}}`;
const logo = `data:image/png;base64,${b64('src/assets/logo.png')}`;
// Same crop and colours as <Logo tone="lux"> (src/components/brand/Logo.tsx), without the tagline
const crop = 202;
const split = (((342 - 179) / crop) * 100).toFixed(1);
const maskPos = `50% ${((179 / (576 - crop)) * 100).toFixed(2)}%`;
const grain = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.9 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>")`;

const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><style>
${font('boska-400.woff2', 'Boska', 400, 'normal')}
${font('boska-400-italic.woff2', 'Boska', 400, 'italic')}
${font('satoshi-500.woff2', 'Satoshi', 500, 'normal')}
*{box-sizing:border-box}
html,body{margin:0;width:1200px;height:630px;overflow:hidden;background:#0a0807}
.stage{position:relative;width:1200px;height:630px;overflow:hidden;background:
  radial-gradient(ellipse 640px 430px at 1030px 70px, rgba(139,0,0,.44), rgba(139,0,0,.12) 50%, transparent 74%),
  radial-gradient(ellipse 620px 300px at 140px 660px, rgba(212,175,55,.09), transparent 72%),
  #0a0807}
.frame{position:absolute;inset:28px;border:1px solid rgba(212,175,55,.24)}
.frame::after{content:'';position:absolute;inset:7px;border:1px solid rgba(212,175,55,.08)}
.d{position:absolute;width:8px;height:8px;background:#d4af37;transform:rotate(45deg)}
.label{position:absolute;left:86px;top:86px;margin:0;display:flex;align-items:center;gap:14px;font:500 14px/1 Satoshi;letter-spacing:.32em;text-transform:uppercase;color:#d4af37}
.label i{display:block;width:38px;height:1px;background:rgba(212,175,55,.6)}
.title{position:absolute;left:86px;right:100px;top:128px;bottom:172px;display:flex;align-items:center}
h1{margin:0;font-family:Boska;font-weight:400;line-height:1.06;letter-spacing:-.015em;color:#f3ebdc;font-variant-numeric:lining-nums}
h1 em{display:block;font-style:italic;background-image:linear-gradient(100deg,#9a7524 0%,#f2dc9b 24%,#d4af37 44%,#fff1c4 56%,#b8902e 74%,#e9cf86 90%,#9a7524 100%);-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-box-decoration-break:clone;box-decoration-break:clone;padding-inline:.06em;margin-inline:-.06em}
.brand{position:absolute;left:86px;bottom:72px;display:flex;align-items:center;gap:22px}
.logo{height:54px;aspect-ratio:298/${crop};-webkit-mask-image:url(${logo});mask-image:url(${logo});-webkit-mask-size:343.6% auto;mask-size:343.6% auto;-webkit-mask-position:${maskPos};mask-position:${maskPos};-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;
  background-image:linear-gradient(180deg,#c8141f 0%,#8b0000 45%,#640000 ${split}%,#f2dc9b ${split}%,#d4af37 ${(Number(split) + 100) / 2}%,#a8822a 100%)}
.brand .rule{width:1px;height:46px;background:rgba(212,175,55,.45)}
.brand b{display:block;font:500 20px/1 Satoshi;letter-spacing:.04em;color:#f3ebdc}
.brand small{display:block;margin-top:11px;font:500 12px/1 Satoshi;letter-spacing:.3em;text-transform:uppercase;color:#8a8072}
.grain{position:absolute;inset:0;opacity:.05;background-image:${grain}}
</style></head><body><div class="stage">
<div class="frame"></div>
<span class="d" style="left:24px;top:24px"></span><span class="d" style="right:24px;top:24px"></span>
<span class="d" style="left:24px;bottom:24px"></span><span class="d" style="right:24px;bottom:24px"></span>
<p class="label"><i></i><span id="category"></span></p>
<div class="title"><h1 id="title"></h1></div>
<div class="brand"><div class="logo"></div><div class="rule"></div><div><b>ckstudio.org</b><small>Guides by CK Studio · Hyderabad</small></div></div>
<div class="grain"></div>
</div><script>
const img = new Image(); img.src = ${JSON.stringify(logo)};
window.ready = Promise.all([document.fonts.load('400 80px Boska'), document.fonts.load('italic 400 80px Boska'), document.fonts.load('500 20px Satoshi'), img.decode()]);
window.show = (title, category) => {
  document.getElementById('category').textContent = category;
  const h = document.getElementById('title');
  // "Main title: subtitle" or "Question? subtitle" → the subtitle on its own line in gold italics
  const parts = title.match(/^(.{12,}?[:?])\\s+(.+)$/);
  h.textContent = parts ? parts[1] : title;
  if (parts) { const em = document.createElement('em'); em.textContent = parts[2]; h.append(em); }
  const box = h.parentElement;
  let size = 84;
  do { h.style.fontSize = size + 'px'; size -= 2; } while ((h.offsetHeight > box.clientHeight || h.scrollWidth > box.clientWidth) && size >= 40);
  return new Promise((done) => requestAnimationFrame(() => requestAnimationFrame(done)));
};
</script></body></html>`;

// ---- Draw each card in one headless browser session (Chrome DevTools Protocol) ----
const work = mkdtempSync(join(tmpdir(), 'ck-share-'));
const page = join(work, 'card.html');
writeFileSync(page, html);
const chrome = spawn(browser, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--no-first-run', '--no-default-browser-check', `--user-data-dir=${join(work, 'profile')}`, '--remote-debugging-port=0', 'about:blank']);
const endpoint = await new Promise((resolve, reject) => {
    let log = '';
    chrome.stderr.on('data', (d) => {
        log += d;
        const found = log.match(/ws:\/\/\S+/);
        if (found) resolve(found[0]);
    });
    chrome.on('exit', () => reject(new Error(`The browser closed before it was ready:\n${log}`)));
});

const ws = new WebSocket(endpoint);
await new Promise((resolve, reject) => { ws.onopen = resolve; ws.onerror = reject; });
let nextId = 0;
const pending = new Map();
const waiting = new Map();
ws.onmessage = ({ data }) => {
    const msg = JSON.parse(data);
    if (msg.id && pending.has(msg.id)) {
        const { resolve, reject } = pending.get(msg.id);
        pending.delete(msg.id);
        if (msg.error) reject(new Error(msg.error.message));
        else resolve(msg.result);
    } else if (msg.method && waiting.has(msg.method)) {
        waiting.get(msg.method)();
        waiting.delete(msg.method);
    }
};
const send = (method, params = {}, sessionId) => new Promise((resolve, reject) => {
    const id = ++nextId;
    pending.set(id, { resolve, reject });
    ws.send(JSON.stringify({ id, method, params, sessionId }));
});

try {
    const { targetId } = await send('Target.createTarget', { url: 'about:blank' });
    const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true });
    const cmd = (method, params) => send(method, params, sessionId);
    await cmd('Page.enable');
    await cmd('Emulation.setDeviceMetricsOverride', { width: 1200, height: 630, deviceScaleFactor: 1, mobile: false });
    const loaded = new Promise((resolve) => waiting.set('Page.loadEventFired', resolve));
    await cmd('Page.navigate', { url: pathToFileURL(page).href });
    await loaded;
    await cmd('Runtime.evaluate', { expression: 'window.ready.then(() => true)', awaitPromise: true });

    mkdirSync(outDir, { recursive: true });
    console.log(`Making ${todo.length} article image${todo.length === 1 ? '' : 's'}:`);
    for (const a of todo) {
        await cmd('Runtime.evaluate', { expression: `show(${JSON.stringify(a.title)}, ${JSON.stringify(a.category)})`, awaitPromise: true });
        const { data } = await cmd('Page.captureScreenshot', { format: 'jpeg', quality: 86, clip: { x: 0, y: 0, width: 1200, height: 630, scale: 1 } });
        writeFileSync(join(outDir, `${a.slug}.jpg`), Buffer.from(data, 'base64'));
        console.log(`  public/images/blog/share/${a.slug}.jpg`);
    }
} finally {
    ws.close();
    chrome.kill();
    // The browser can hold its files for a moment after closing; a leftover temp folder is harmless
    setTimeout(() => {
        try { rmSync(work, { recursive: true, force: true }); } catch { /* left in the temp folder */ }
    }, 500);
}
