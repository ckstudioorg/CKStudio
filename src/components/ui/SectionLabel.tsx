import React from 'react';

/**
 * Small numbered label above a section title.
 * - tone "lux" (2026 noir redesign): "N° 01 —— ABOUT US" with a serif italic number and gold capitals.
 * - default: the earlier white-design label "(01) —— About Us" in red, kept until every section has moved over.
 */
const SectionLabel: React.FC<{ index?: string; children: React.ReactNode; className?: string; tone?: 'lux' }> = ({ index, children, className = '', tone }) =>
    tone === 'lux' ? (
        <p className={`flex items-center gap-4 ${className}`}>
            {index && <span className="font-display text-[0.95rem] italic lining-nums text-gold-light/90">N° {index}</span>}
            <span aria-hidden="true" className="h-px w-10 bg-gradient-to-r from-gold to-gold/0" />
            <span className="lux-label">{children}</span>
        </p>
    ) : (
        <p className={`flex items-center gap-3 text-[0.72rem] md:text-xs font-medium uppercase tracking-[0.28em] text-ck-red ${className}`}>
            {index && <span className="tabular-nums text-ink-soft">({index})</span>}
            <span aria-hidden="true" className="h-px w-8 bg-ck-red" />
            {children}
        </p>
    );

export default SectionLabel;
