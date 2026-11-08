/** Text of "Starting a Company? The Brand Essentials You Need from Day One". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    body: [
        { type: 'p', text: 'A new company makes its first impressions quickly: a visiting card handed over at a meeting, a presentation on a client’s screen, a brochure left on a table. When these pieces look like they belong together, the company looks established from day one.' },
        { type: 'h2', text: 'The essentials' },
        { type: 'list', items: [
            'Logo: the core of the identity, designed to work large and small, in colour and in one colour',
            'Letterhead: for quotations, letters and official documents',
            'Visiting cards: still one of the most-used brand pieces in business',
            'Presentation template: so every pitch and proposal looks consistent',
            'Brochure: what you do, for whom, and why — in print and as a PDF',
            'Flyers: for launches, offers and events',
        ] },
        { type: 'h2', text: 'Why design them together' },
        { type: 'p', text: 'Designing everything as one package means the same colours, fonts, spacing and tone carry across every piece. It is faster and more affordable than designing each item separately over time, and it avoids the patchwork look that many young companies end up with.' },
        { type: 'quote', text: 'Consistency is what makes a small company look like a big one.' },
        { type: 'h2', text: 'Files you should always keep' },
        { type: 'list', items: [
            'The logo in vector format (SVG, AI or PDF) as well as PNG',
            'Your brand colour codes, written down',
            'The names of the fonts used',
            'Editable source files for templates such as the letterhead and presentation',
        ] },
        { type: 'p', text: 'CK Studio’s Company Start Package covers the logo, letterhead, visiting cards, presentations, brochures and flyers. We also design publicity material, event branding kits, commercial pitch decks, product catalogues and product retouching.' },
    ],
};

export default article;
