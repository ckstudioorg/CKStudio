import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Article text with light markup: [link text](/services/vfx-and-cg/) becomes a link (internal pages open in
 * the site, other addresses in a new tab) and **words** become bold. Everything else is shown as written.
 */
const TOKEN = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g;
const linkClass = 'text-gold-light underline decoration-gold/35 underline-offset-4 transition-colors hover:decoration-gold';

const RichText: React.FC<{ text: string }> = ({ text }) => {
    const parts: React.ReactNode[] = [];
    let last = 0;
    let key = 0;
    for (const match of text.matchAll(TOKEN)) {
        const at = match.index ?? 0;
        if (at > last) parts.push(text.slice(last, at));
        const [, label, href, bold] = match;
        if (bold) {
            parts.push(<strong key={key++} className="font-semibold text-ivory">{bold}</strong>);
        } else if (href.startsWith('/')) {
            parts.push(<Link key={key++} to={href} className={linkClass}>{label}</Link>);
        } else {
            parts.push(<a key={key++} href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>{label}</a>);
        }
        last = at + match[0].length;
    }
    if (last < text.length) parts.push(text.slice(last));
    return <>{parts}</>;
};

export default RichText;
