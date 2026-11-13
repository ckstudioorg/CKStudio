/** Text of "Starting a Company? The Brand Essentials You Need from Day One". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'A new company needs a small, matching set of brand pieces from its first day: a logo, a letterhead, visiting cards, a presentation template, a brochure and flyers. Designed together, they share the same colours, fonts and tone, which makes a young business look established and saves the cost of redoing pieces later. Keep the logo’s vector file, your colour codes, font names and editable templates safely, and check the name can be registered before printing anything.',
    keyPoints: [
        'Six pieces cover most first meetings: logo, letterhead, cards, presentation, brochure, flyers.',
        'Designing them as one package keeps everything consistent.',
        'Always get vector logo files, colour codes and editable templates.',
        'Check the name as a trade mark, domain and social handle first.',
    ],
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
        { type: 'table', head: ['Piece', 'Where it is used', 'What to check'], rows: [
            ['Logo', 'Everywhere', 'Works small, in one colour and on dark backgrounds'],
            ['Letterhead', 'Quotations, invoices, letters', 'Editable in the software your office uses'],
            ['Visiting cards', 'Meetings, events', 'Correct details; print-ready with bleed'],
            ['Presentation template', 'Pitches and proposals', 'A few slide layouts, not just a cover'],
            ['Brochure', 'Leave-behind and PDF for WhatsApp and email', 'Light file size for sharing; print version separate'],
            ['Flyers', 'Launches, offers, events', 'One message, one action'],
        ] },
        { type: 'p', text: 'How a logo is developed, and which file types you should receive, is covered in the [logo design guide](/blog/logo-design-guide/). For brochures, see [product catalogue and brochure design](/blog/product-catalogue-brochure-design/), and for pitches, the [business pitch deck guide](/blog/business-pitch-deck-guide/).' },
        { type: 'h2', text: 'Why design them together' },
        { type: 'p', text: 'Designing everything as one package means the same colours, fonts, spacing and tone carry across every piece. It is faster and more affordable than designing each item separately over time, and it avoids the patchwork look that many young companies end up with.' },
        { type: 'quote', text: 'Consistency is what makes a small company look like a big one.' },
        { type: 'h2', text: 'What should happen before the design starts?' },
        { type: 'steps', items: [
            'Check the name: as a trade mark, a domain and social media handles. See [how to trademark your logo and brand name in India](/blog/trademark-your-logo-india/).',
            'Write down who your customers are and what you want to be known for.',
            'Collect examples of brands whose look you like, and ones you do not.',
            'List where the brand will appear in the first year: signboard, packaging, vehicles, uniforms, website.',
            'Decide the languages: English only, or Telugu and English together.',
        ] },
        { type: 'h2', text: 'Files you should always keep' },
        { type: 'list', items: [
            'The logo in vector format (SVG, AI or PDF) as well as PNG',
            'Your brand colour codes, written down',
            'The names of the fonts used',
            'Editable source files for templates such as the letterhead and presentation',
        ] },
        { type: 'p', text: 'These basics grow into a brand book as the company grows; see [brand guidelines: what to put in your brand book](/blog/brand-guidelines-document/). Before sending anything to a printer, read [print-ready files: bleed, CMYK and resolution](/blog/print-ready-files-bleed-cmyk-resolution/).' },
        { type: 'h2', text: 'What comes next after the start package?' },
        { type: 'list', items: [
            'A simple website; see the [small business website checklist](/blog/small-business-website-checklist/)',
            'A Google Business Profile, so local customers can find you; see our [Google Business Profile guide](/blog/google-business-profile-guide-hyderabad/)',
            'Social media templates for regular posts; see [social media post templates](/blog/social-media-post-templates/)',
            'A short company video or logo animation for presentations and social media; see the [logo animation guide](/blog/logo-animation-guide/)',
            'Packaging and labels, if you sell a product; see [packaging and label design](/blog/packaging-design-and-label-rules-india/)',
        ] },
        { type: 'p', text: 'CK Studio’s Company Start Package covers the logo, letterhead, visiting cards, presentations, brochures and flyers. We also design publicity material, event branding kits, commercial pitch decks, product catalogues and product retouching. See [design and branding](/services/design-and-branding/).' },
        { type: 'tip', text: 'Ask for a one-page summary with the logo versions, colour codes and font names. It is the page you will send to every printer, sign maker and web designer for years.' },
    ],
    faqs: [
        { q: 'What is included in a company start package?', a: 'Typically a logo, letterhead, visiting cards, a presentation template, a brochure and flyers, designed as one matching set. Ask what file types and how many revisions are included.' },
        { q: 'Should I register the trade mark before designing the logo?', a: 'Search the name first, so you do not design around a name you cannot use. The application itself can be filed once the name and logo are final.' },
        { q: 'Do I need all the pieces at once?', a: 'Not necessarily, but designing them together costs less than adding pieces one by one and keeps them consistent. At minimum, settle the logo, colours and fonts first.' },
        { q: 'Who owns the logo after it is designed?', a: 'Agree this in writing. Ask the designer or studio to assign the copyright in the final logo to your company, and keep the original files.' },
    ],
};

export default article;
