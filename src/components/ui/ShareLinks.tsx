import React, { useEffect, useState } from 'react';

/**
 * Share buttons for an article: WhatsApp, LinkedIn, Facebook, X, "copy link" and, where the device has one,
 * its own share menu (Instagram, Telegram, email…). Plain links, so they work before any code has loaded.
 */
interface ShareLinksProps {
    /** Full address of the page, e.g. https://ckstudio.org/blog/ad-film-cost-in-india/ */
    url: string;
    title: string;
    label?: string;
    className?: string;
}

const button = 'flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-gold-light transition-colors duration-500 hover:border-gold hover:bg-gold/10 hover:text-ivory';
const solid = (d: string) => <path fill="currentColor" d={d} />;
const line = (d: string) => <path d={d} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />;

const icons = {
    whatsapp: solid('M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z'),
    linkedin: solid('M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z'),
    facebook: solid('M14 8h3V4h-3c-2.76 0-5 2.24-5 5v2H7v4h2v9h4v-9h3l1-4h-4V9c0-.55.45-1 1-1z'),
    x: solid('M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z'),
    link: <>{line('M10 14a4.5 4.5 0 0 0 6.36 0l3-3a4.5 4.5 0 0 0-6.36-6.36l-1 1')}{line('M14 10a4.5 4.5 0 0 0-6.36 0l-3 3a4.5 4.5 0 0 0 6.36 6.36l1-1')}</>,
    done: line('M5 12.5 10 17 19 7'),
    share: <>{line('M12 15V3m0 0L7.5 7.5M12 3l4.5 4.5')}{line('M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7')}</>,
};

const Icon: React.FC<{ children: React.ReactNode; small?: boolean }> = ({ children, small }) => (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={small ? 'h-4 w-4' : 'h-[18px] w-[18px]'}>{children}</svg>
);

const ShareLinks: React.FC<ShareLinksProps> = ({ url, title, label = 'Share this guide', className = '' }) => {
    const [copied, setCopied] = useState(false);
    // Decided after the page has loaded, so the ready-made HTML and the live page start out the same
    const [canShare, setCanShare] = useState(false);
    useEffect(() => setCanShare(typeof navigator.share === 'function'), []);
    useEffect(() => {
        if (!copied) return;
        const timer = window.setTimeout(() => setCopied(false), 2400);
        return () => window.clearTimeout(timer);
    }, [copied]);

    const address = encodeURIComponent(url);
    const links = [
        { name: 'WhatsApp', href: `https://wa.me/?text=${encodeURIComponent(`${title}\n${url}`)}`, icon: icons.whatsapp },
        { name: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${address}`, icon: icons.linkedin },
        { name: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${address}`, icon: icons.facebook },
        { name: 'X', href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${address}`, icon: icons.x },
    ];

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
        } catch {
            // Copying blocked by the browser: the address bar still has the link
        }
    };
    const share = async () => {
        try {
            await navigator.share({ title, url });
        } catch {
            // Closed by the visitor
        }
    };

    return (
        <div className={`flex flex-wrap items-center gap-x-6 gap-y-4 ${className}`}>
            <p className="lux-label">{label}</p>
            <ul className="flex flex-wrap items-center gap-2.5">
                {links.map((l) => (
                    <li key={l.name}>
                        <a href={l.href} target="_blank" rel="noopener noreferrer" aria-label={`Share on ${l.name}`} title={`Share on ${l.name}`} className={button}>
                            <Icon small={l.name === 'X'}>{l.icon}</Icon>
                        </a>
                    </li>
                ))}
                <li>
                    <button type="button" onClick={copy} aria-label="Copy link" title="Copy link" className={button}>
                        <Icon>{copied ? icons.done : icons.link}</Icon>
                    </button>
                </li>
                {canShare && (
                    <li>
                        <button type="button" onClick={share} aria-label="More ways to share" title="More ways to share" className={button}>
                            <Icon>{icons.share}</Icon>
                        </button>
                    </li>
                )}
            </ul>
            <p aria-live="polite" className="min-w-[6rem] text-xs text-gold-light">{copied ? 'Link copied' : ''}</p>
        </div>
    );
};

export default ShareLinks;
