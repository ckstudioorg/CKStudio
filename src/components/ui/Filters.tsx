import React from 'react';

/** Looks shared by the Blog and FAQ pages: category buttons and the underlined search field. */
export const filterButton = (active: boolean) =>
    `border px-4 py-2 text-[0.66rem] font-medium uppercase tracking-[0.22em] transition-colors duration-500 ${
        active ? 'border-gold bg-gold text-noir' : 'border-gold/25 text-ivory/85 hover:border-gold/60 hover:text-gold-light'
    }`;

export const searchField =
    'w-full rounded-none border-0 border-b border-gold/30 bg-transparent py-3 pl-8 pr-2 text-sm text-ivory placeholder:text-ivory-dim [color-scheme:dark] transition-colors duration-300 hover:border-gold/50 focus:border-gold focus:outline-none focus:ring-0';

export const SearchIcon: React.FC = () => (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="pointer-events-none absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-gold/80">
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" /><path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);
