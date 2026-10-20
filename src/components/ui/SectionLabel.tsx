import React from 'react';

/** Small numbered label above a section title, e.g. "(01) About Us". */
const SectionLabel: React.FC<{ index?: string; children: React.ReactNode; className?: string }> = ({ index, children, className = '' }) => (
    <p className={`flex items-center gap-3 text-[0.72rem] md:text-xs font-medium uppercase tracking-[0.28em] text-ck-red ${className}`}>
        {index && <span className="tabular-nums text-ink-soft">({index})</span>}
        <span aria-hidden="true" className="h-px w-8 bg-ck-red" />
        {children}
    </p>
);

export default SectionLabel;
