import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Keeps the page title, description, link-preview tags and structured data in <head> matching the current page.
 * The ready-made HTML files already contain the right tags; this swaps them when the visitor moves to another page.
 * The search details (lib/seo.ts, with all page texts) load only then, so the first page loads faster.
 * All wording comes from content/seo.ts and lib/seo.ts.
 */
const SEO: React.FC = () => {
    const { pathname } = useLocation();
    const first = useRef(true);

    useEffect(() => {
        // First page of a visit: a ready-made page already has the right tags
        const readyMade = first.current && document.head.querySelector('title[data-seo]');
        first.current = false;
        if (readyMade) return;
        let cancelled = false;
        import('../lib/seo').then(({ getPageMeta, headTags }) => {
            if (cancelled) return;
            const meta = getPageMeta(pathname);
            document.head.querySelectorAll('[data-seo]').forEach((el) => el.remove());
            document.head.insertAdjacentHTML('beforeend', headTags(meta));
            document.title = meta.title;
        });
        return () => { cancelled = true; };
    }, [pathname]);

    return null;
};

export default SEO;
