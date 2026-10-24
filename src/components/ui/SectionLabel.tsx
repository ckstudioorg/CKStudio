import React from 'react';

/** Small label above a section title: "N° 01 —— ABOUT US", with a serif italic number and gold capitals. */
const SectionLabel: React.FC<{ index?: string; children: React.ReactNode; className?: string }> = ({ index, children, className = '' }) => (
    <p className={`flex items-center gap-4 ${className}`}>
        {index && <span className="font-display text-[0.95rem] italic text-gold-light/90">N° {index}</span>}
        <span aria-hidden="true" className="h-px w-10 bg-gradient-to-r from-gold to-gold/0" />
        <span className="lux-label">{children}</span>
    </p>
);

export default SectionLabel;
