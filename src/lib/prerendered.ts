/**
 * Ready-made pages (scripts/prerender.mjs) are visible before the site's code arrives. When the code then
 * takes over (src/main.tsx), entrance animations must not hide content the visitor is already looking at
 * and play it in again — that would flicker. This remembers the ready-made elements so animations can skip them.
 */
let readyMade: WeakSet<Element> | null = null;

/** Called once in main.tsx, just before the live site takes over the ready-made page. */
export function rememberReadyMade(root: Element) {
    readyMade = new WeakSet(root.querySelectorAll('*'));
}

/** True for an element that arrived ready-made and is on screen now: leave it as it is, no entrance animation. */
export function alreadyOnScreen(el: Element | null | undefined): boolean {
    if (!el || !readyMade?.has(el)) return false;
    const r = el.getBoundingClientRect();
    return r.bottom > 0 && r.top < window.innerHeight;
}
