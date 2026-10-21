import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getPageMeta, headTags } from '../lib/seo';

/**
 * Keeps the page title, description, link-preview tags and structured data in <head> matching the current page.
 * The ready-made HTML files already contain the right tags; this swaps them when the visitor moves to another page.
 * All wording comes from content/seo.ts and lib/seo.ts.
 */
const SEO: React.FC = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const meta = getPageMeta(pathname);
        document.head.querySelectorAll('[data-seo]').forEach((el) => el.remove());
        document.head.insertAdjacentHTML('beforeend', headTags(meta));
        document.title = meta.title;
    }, [pathname]);

    return null;
};

export default SEO;
