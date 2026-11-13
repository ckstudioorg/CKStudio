/**
 * Makes the cover illustration of every blog article: public/images/blog/covers/<slug>.webp (1200×800).
 * It is the picture at the top of an article and on its card in the blog. Each one is a fine gold line drawing
 * that fits the article's category (a clapperboard for commercials, a film reel for movie works, and so on) on
 * the site's black stage with red or gold light. The drawing, its place and the light are chosen from the
 * article's address, so an article always gets the same cover and neighbours look different.
 * The frame and the category label are added by the page (components/ui/ArticleCover.tsx), not drawn here.
 * Drawn by the Chrome or Edge already installed on this computer (set CHROME_PATH to use another browser).
 * An article with its own photo (`image` in content/blog.ts) does not get one.
 *
 *   npm run cover-images            makes the covers that are missing (after adding articles)
 *   npm run cover-images -- --all   remakes every cover (after changing this design)
 */
import { spawn } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const outDir = join(root, 'public/images/blog/covers');
const { articles } = await import(pathToFileURL(join(root, 'src/content/blog.ts')).href);

const remakeAll = process.argv.includes('--all');
const todo = articles.filter((a) => !a.image && (remakeAll || !existsSync(join(outDir, `${a.slug}.webp`))));
if (!todo.length) {
    console.log('Every article already has its cover (add --all to remake them).');
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

// ---- The drawings: three per category, each inside a 400×400 box ----
const line = (x1, y1, x2, y2, extra = '') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" ${extra}/>`;
const rect = (x, y, w, h, extra = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" ${extra}/>`;
const circle = (cx, cy, r, extra = '') => `<circle cx="${cx}" cy="${cy}" r="${r}" ${extra}/>`;
const soft = 'opacity=".45"';
const range = (n) => [...Array(n).keys()];

const drawings = {
    Commercials: [
        // Clapperboard
        () => rect(60, 180, 280, 160, 'rx="4"') + line(60, 228, 340, 228, soft) + line(150, 228, 150, 340, soft) + line(245, 228, 245, 340, soft)
            + `<g transform="rotate(-13 60 172)">${rect(60, 132, 280, 40, 'rx="3"')}${range(6).map((i) => line(78 + i * 46, 172, 104 + i * 46, 132)).join('')}</g>`,
        // Film camera on a tripod
        () => rect(90, 150, 180, 110, 'rx="6"') + '<polygon points="270,178 332,150 332,260 270,232"/>' + circle(135, 112, 36) + circle(215, 112, 36)
            + circle(135, 112, 7, soft) + circle(215, 112, 7, soft) + line(180, 260, 126, 364) + line(180, 260, 180, 364) + line(180, 260, 234, 364),
        // Screen with a play button
        () => rect(46, 84, 308, 204, 'rx="8"') + rect(62, 100, 276, 172, `rx="3" ${soft}`) + '<polygon points="176,146 176,226 246,186"/>' + line(200, 288, 200, 330) + line(136, 330, 264, 330),
    ],
    'AI Production': [
        // Network of connected points
        () => {
            const layers = [[90, [110, 200, 290]], [200, [80, 160, 240, 320]], [310, [110, 200, 290]]];
            let out = '';
            for (let l = 0; l < layers.length - 1; l++) for (const y1 of layers[l][1]) for (const y2 of layers[l + 1][1]) out += line(layers[l][0], y1, layers[l + 1][0], y2, 'opacity=".32"');
            for (const [x, ys] of layers) for (const y of ys) out += circle(x, y, 9, 'fill="#0a0807"');
            return out;
        },
        // Sparks
        () => {
            const spark = (cx, cy, r, extra = '') => `<path d="M${cx},${cy - r} Q${cx},${cy} ${cx + r},${cy} Q${cx},${cy} ${cx},${cy + r} Q${cx},${cy} ${cx - r},${cy} Q${cx},${cy} ${cx},${cy - r} Z" ${extra}/>`;
            return spark(180, 210, 130) + spark(305, 100, 56) + spark(320, 300, 34, soft) + `<ellipse cx="200" cy="210" rx="175" ry="62" transform="rotate(-22 200 210)" ${soft}/>`;
        },
        // Chip
        () => rect(120, 120, 160, 160, 'rx="10"') + rect(160, 160, 80, 80, `rx="4" ${soft}`)
            + range(5).map((i) => { const p = 136 + i * 32; return line(p, 120, p, 76) + line(p, 280, p, 324) + line(120, p, 76, p) + line(280, p, 324, p); }).join(''),
    ],
    'VFX & CG': [
        // Wireframe cube
        () => rect(90, 150, 170, 170) + rect(150, 90, 170, 170, soft) + line(90, 150, 150, 90) + line(260, 150, 320, 90) + line(90, 320, 150, 260, soft) + line(260, 320, 320, 260),
        // Wireframe sphere
        () => circle(200, 200, 150) + [50, 105].map((r) => `<ellipse cx="200" cy="200" rx="150" ry="${r}" ${soft}/><ellipse cx="200" cy="200" rx="${r}" ry="150" ${soft}/>`).join('') + line(50, 200, 350, 200, soft) + line(200, 50, 200, 350, soft),
        // Tracking frame
        () => {
            const corner = (x, y, dx, dy) => `<path d="M${x + dx * 46},${y} L${x},${y} L${x},${y + dy * 46}"/>`;
            const mark = (x, y) => line(x - 9, y, x + 9, y, soft) + line(x, y - 9, x, y + 9, soft);
            return corner(70, 70, 1, 1) + corner(330, 70, -1, 1) + corner(70, 330, 1, -1) + corner(330, 330, -1, -1) + circle(200, 200, 62) + line(200, 110, 200, 290, soft) + line(110, 200, 290, 200, soft)
                + mark(120, 130) + mark(285, 120) + mark(125, 280) + mark(280, 285) + '<path d="M70,250 C140,140 250,290 330,160" opacity=".7"/>';
        },
    ],
    Designing: [
        // Curve with handles
        () => '<path d="M60,300 C120,70 280,70 340,300"/>' + line(60, 300, 120, 70, soft) + line(340, 300, 280, 70, soft) + rect(52, 292, 16, 16, 'fill="#0a0807"') + rect(332, 292, 16, 16, 'fill="#0a0807"')
            + circle(120, 70, 8, 'fill="#0a0807"') + circle(280, 70, 8, 'fill="#0a0807"') + line(40, 340, 360, 340, soft),
        // Golden rectangles and spiral
        () => {
            let [x, y, w, h] = [40, 101, 320, 198];
            let out = rect(x, y, w, h);
            let path = '';
            for (let i = 0; i < 5; i++) {
                const side = i % 4;
                if (side === 0) { out += line(x + h, y, x + h, y + h, soft); path += `${i ? '' : `M${x},${y + h} `}A${h},${h} 0 0 1 ${x + h},${y} `; x += h; w -= h; }
                else if (side === 1) { out += line(x, y + w, x + w, y + w, soft); path += `A${w},${w} 0 0 1 ${x + w},${y + w} `; y += w; h -= w; }
                else if (side === 2) { out += line(x + w - h, y, x + w - h, y + h, soft); path += `A${h},${h} 0 0 1 ${x + w - h},${y + h} `; w -= h; }
                else { out += line(x, y + h - w, x + w, y + h - w, soft); path += `A${w},${w} 0 0 1 ${x},${y + h - w} `; h -= w; }
            }
            return `${out}<path d="${path}"/>`;
        },
        // Letters on their guide lines
        () => '<text x="200" y="285" text-anchor="middle" font-family="Boska" font-size="250" font-style="italic" stroke-width="1.6">Aa</text>' + [118, 172, 285, 338].map((y) => line(36, y, 364, y, 'opacity=".3"')).join(''),
    ],
    'Movie Works': [
        // Film reel
        () => circle(200, 200, 150) + circle(200, 200, 24) + circle(200, 200, 7, soft) + range(6).map((i) => { const a = (i * Math.PI) / 3; return circle((200 + 90 * Math.cos(a)).toFixed(1), (200 + 90 * Math.sin(a)).toFixed(1), 34); }).join(''),
        // Film strip
        () => `<g transform="rotate(-9 200 200)">${rect(20, 120, 360, 160)}${range(3).map((i) => rect(44 + i * 108, 150, 96, 100, 'rx="3"')).join('')}${range(11).map((i) => rect(34 + i * 31, 129, 14, 10, `rx="2" ${soft}`) + rect(34 + i * 31, 261, 14, 10, `rx="2" ${soft}`)).join('')}</g>`,
        // Projector beam
        () => rect(40, 176, 96, 64, 'rx="5"') + circle(66, 146, 26) + circle(118, 152, 20) + rect(136, 194, 18, 28) + line(154, 200, 350, 96, soft) + line(154, 216, 350, 320, soft) + line(350, 74, 350, 342) + line(60, 240, 46, 300) + line(116, 240, 130, 300),
    ],
    'Digital Marketing': [
        // Rising bars
        () => line(50, 334, 350, 334) + [[76, 66], [140, 112], [204, 164], [268, 226]].map(([x, h]) => rect(x, 334 - h, 44, h)).join('') + '<polyline points="64,240 150,186 214,206 326,84"/><polyline points="286,82 326,84 320,124"/>',
        // Phone with a play button
        () => rect(126, 40, 148, 320, 'rx="20"') + rect(140, 74, 120, 240, `rx="4" ${soft}`) + line(182, 56, 218, 56, soft) + circle(200, 336, 9, soft) + '<polygon points="182,160 182,228 238,194"/>',
        // Map pin
        () => '<path d="M200,330 C200,330 108,222 108,160 a92,92 0 1,1 184,0 C292,222 200,330 200,330 Z"/>' + circle(200, 160, 34) + `<ellipse cx="200" cy="338" rx="62" ry="14" ${soft}/><ellipse cx="200" cy="338" rx="112" ry="26" opacity=".25"/>`,
    ],
    'Post-Production': [
        // Editing timeline
        () => [[110, [[40, 110], [160, 70], [240, 120]]], [164, [[70, 150], [230, 90]]], [218, [[40, 60], [110, 130], [250, 110]]], [272, [[90, 220]]]]
            .map(([y, clips]) => clips.map(([x, w]) => rect(x, y, w, 40, 'rx="3"')).join('')).join('') + line(206, 76, 206, 340) + '<polygon points="194,62 218,62 206,82" fill="#d4af37"/>' + line(40, 340, 360, 340, soft),
        // Sound wave
        () => range(27).map((i) => { const h = 16 + Math.abs(Math.sin(i * 0.9) * Math.cos(i * 0.37)) * 150; const x = 44 + i * 12; return line(x, (200 - h / 2).toFixed(1), x, (200 + h / 2).toFixed(1), 'stroke-width="4"'); }).join('') + line(30, 200, 370, 200, 'opacity=".25"'),
        // Colour wheels
        () => [[92, 18, -14], [200, -10, 16], [308, 14, 12]].map(([x, dx, dy]) => circle(x, 170, 50) + line(x - 50, 170, x + 50, 170, 'opacity=".3"') + line(x, 120, x, 220, 'opacity=".3"') + circle(x + dx, 170 + dy, 6, 'fill="#d4af37"')
            + line(x - 40, 262, x + 40, 262, soft) + circle(x + dx, 262, 7, 'fill="#0a0807"')).join(''),
    ],
};

/** A steady number from the article's address, so the same article always gets the same cover */
const hash = (text) => { let h = 2166136261; for (const c of text) h = Math.imul(h ^ c.charCodeAt(0), 16777619) >>> 0; return h; };

const fontFile = (file) => pathToFileURL(join(root, 'public/fonts', file)).href;
const grain = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.9 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>")`;

const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><style>
@font-face{font-family:Boska;src:url(${fontFile('boska-400-italic.woff2')}) format('woff2');font-weight:400;font-style:italic}
html,body{margin:0;width:1200px;height:800px;overflow:hidden;background:#0a0807}
.stage{position:relative;width:1200px;height:800px;overflow:hidden;background:#0a0807}
.light,.grain{position:absolute;inset:0}
.grain{opacity:.05;background-image:${grain}}
svg{position:absolute;overflow:visible}
</style></head><body><div class="stage"><div class="light" id="light"></div><div id="art"></div><div class="grain"></div></div><script>
window.ready = document.fonts.load('italic 400 200px Boska');
window.show = (art, light) => {
  document.getElementById('art').innerHTML = art;
  document.getElementById('light').style.background = light;
  return new Promise((done) => requestAnimationFrame(() => requestAnimationFrame(done)));
};
</script></body></html>`;

function cover(article, position) {
    const seed = hash(article.slug);
    const set = drawings[article.category] ?? drawings.Commercials;
    // Neighbouring articles of one category take the drawings in turn
    const sameBefore = articles.slice(0, position).filter((a) => a.category === article.category).length;
    const drawing = set[sameBefore % set.length]();
    const size = 500 + (seed % 5) * 14;
    const cx = 600 + (((seed >>> 3) % 9) - 4) * 34;
    const cy = 400 + (((seed >>> 7) % 5) - 2) * 10;
    const turn = ((seed >>> 11) % 7) - 3;
    const velvet = position % 2 === 0;
    const light = velvet
        ? `radial-gradient(ellipse 720px 520px at ${cx + 260}px 120px, rgba(139,0,0,.5), rgba(139,0,0,.14) 52%, transparent 76%), radial-gradient(ellipse 560px 300px at ${cx - 380}px 820px, rgba(212,175,55,.07), transparent 72%)`
        : `radial-gradient(ellipse 700px 460px at ${cx - 300}px 760px, rgba(212,175,55,.13), transparent 72%), radial-gradient(ellipse 620px 420px at ${cx + 330}px 60px, rgba(139,0,0,.3), transparent 74%)`;
    const art = `<svg width="${size}" height="${size}" viewBox="0 0 400 400" style="left:${cx - size / 2}px;top:${cy - size / 2}px;transform:rotate(${turn}deg)" fill="none" stroke="url(#gold)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
<defs><linearGradient id="gold" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="400" y2="400"><stop offset="0" stop-color="#9a7524"/><stop offset=".3" stop-color="#f2dc9b"/><stop offset=".55" stop-color="#d4af37"/><stop offset=".8" stop-color="#fff1c4"/><stop offset="1" stop-color="#a8822a"/></linearGradient></defs>
<circle cx="200" cy="200" r="262" stroke="#d4af37" stroke-width="1" opacity=".14"/><circle cx="200" cy="200" r="330" stroke="#d4af37" stroke-width="1" opacity=".07"/>
${drawing}</svg>`;
    return { art, light };
}

// ---- Draw each cover in one headless browser session (Chrome DevTools Protocol) ----
const work = mkdtempSync(join(tmpdir(), 'ck-cover-'));
const page = join(work, 'cover.html');
writeFileSync(page, html);
const chrome = spawn(browser, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--no-first-run', '--no-default-browser-check', '--allow-file-access-from-files', `--user-data-dir=${join(work, 'profile')}`, '--remote-debugging-port=0', 'about:blank']);
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
    await cmd('Emulation.setDeviceMetricsOverride', { width: 1200, height: 800, deviceScaleFactor: 1, mobile: false });
    const loaded = new Promise((resolve) => waiting.set('Page.loadEventFired', resolve));
    await cmd('Page.navigate', { url: pathToFileURL(page).href });
    await loaded;
    await cmd('Runtime.evaluate', { expression: 'window.ready.then(() => true)', awaitPromise: true });

    mkdirSync(outDir, { recursive: true });
    console.log(`Making ${todo.length} article cover${todo.length === 1 ? '' : 's'}:`);
    for (const a of todo) {
        const { art, light } = cover(a, articles.indexOf(a));
        await cmd('Runtime.evaluate', { expression: `show(${JSON.stringify(art)}, ${JSON.stringify(light)})`, awaitPromise: true });
        const { data } = await cmd('Page.captureScreenshot', { format: 'webp', quality: 82, clip: { x: 0, y: 0, width: 1200, height: 800, scale: 1 } });
        writeFileSync(join(outDir, `${a.slug}.webp`), Buffer.from(data, 'base64'));
    }
    console.log(`  saved in public/images/blog/covers/`);
} finally {
    ws.close();
    chrome.kill();
    // The browser can hold its files for a moment after closing; a leftover temp folder is harmless
    setTimeout(() => {
        try { rmSync(work, { recursive: true, force: true }); } catch { /* left in the temp folder */ }
    }, 500);
}
