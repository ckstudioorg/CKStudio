/** Text of "Logo Design for Small Businesses: Process, File Formats and Mistakes to Avoid". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'A good logo is simple, recognisable at small sizes, works in one colour, and fits the business it represents. A professional process runs from a short brief and research, through sketches and two or three directions, to refinement and a final set of files — vector masters (SVG, AI or EPS, PDF) for print and signage, plus PNG files for screens — with colour codes and basic usage rules.',
    keyPoints: [
        'Simple beats clever: it must work as a tiny app icon and on a hoarding.',
        'Test it in black and white before adding colour.',
        'Always get vector files (SVG, PDF, AI or EPS), not just a JPG.',
        'Agree who owns the final design, in writing.',
    ],
    body: [
        { type: 'h2', text: 'What makes a logo good?' },
        { type: 'list', items: [
            '**Simple** — recognisable in a second, even as a 32-pixel icon.',
            '**Distinctive** — it does not look like a competitor’s or a stock icon.',
            '**Relevant** — its style fits your industry and customers.',
            '**Versatile** — works in one colour, on dark and light backgrounds, wide and stacked.',
            '**Lasting** — not built on a trend that will look dated in two years.',
        ] },
        { type: 'h2', text: 'How is a professional logo designed?' },
        { type: 'steps', items: [
            '**Brief** — the business, its customers, competitors, values and where the logo will appear.',
            '**Research** — how competitors look, so your logo stands apart.',
            '**Sketching** — many rough ideas on paper or screen before any polish.',
            '**Directions** — two or three distinct options presented in real situations (a signboard, a visiting card, a profile picture).',
            '**Refinement** — the chosen direction is perfected: spacing, curves, weight and colour.',
            '**Final files and guide** — masters in every format, colour codes and simple usage rules.',
        ] },
        { type: 'h2', text: 'Which logo files should you receive?' },
        {
            type: 'table',
            head: ['File', 'Type', 'Used for'],
            rows: [
                ['SVG', 'Vector', 'Websites and apps — sharp at any size'],
                ['PDF / AI / EPS', 'Vector master', 'Printers, signage, merchandise, embroidery'],
                ['PNG (transparent)', 'Image', 'Presentations, documents, social media, video'],
                ['JPG', 'Image', 'Quick sharing only — no transparency'],
                ['Favicon / app icon', 'Small image', 'Browser tabs and phone home screens'],
            ],
        },
        { type: 'p', text: 'You should receive full-colour, one-colour black and one-colour white versions, in horizontal and stacked layouts, plus the exact colour codes: HEX and RGB for screens, CMYK (and Pantone, if used) for print.' },
        { type: 'h2', text: 'What should a logo brief include?' },
        { type: 'list', items: [
            'Your business name exactly as it should appear, and any tagline',
            'What you do, for whom, and what makes you different',
            'Three words that describe the personality you want',
            'Logos you like and dislike, and why',
            'Where it will be used most: signboard, packaging, social media, vehicles, uniforms',
            'Colours to use or avoid, including any cultural or industry associations',
        ] },
        { type: 'h2', text: 'What are the most common logo mistakes?' },
        { type: 'list', items: [
            'Too much detail, which disappears at small sizes',
            'Using a stock icon or template that other businesses also use',
            'Choosing colours before testing the shape in black and white',
            'Receiving only a JPG — every printer will ask for a vector file',
            'No written agreement on who owns the final design',
        ] },
        { type: 'h2', text: 'What comes after the logo?' },
        { type: 'p', text: 'A logo is the start of a brand, not the whole of it. Most new businesses also need visiting cards, letterhead, a presentation template, brochures and social media templates that use the logo consistently — see our guide to the [company start package](/blog/company-start-package-brand-essentials/). For video, an [animated version of the logo](/blog/logo-animation-guide/) makes intros and outros feel finished.' },
        { type: 'tip', text: 'Before approving a logo, print it the size of a visiting card and look at it from across the room. If you cannot recognise it, simplify it.' },
        { type: 'p', text: 'CK Studio designs logos and complete brand kits as part of our [design and branding](/services/design-and-branding/) service in Hyderabad. [Tell us about your business](/#enquiry) to start.' },
    ],
    faqs: [
        { q: 'How long does it take to design a logo?', a: 'Usually one to three weeks, depending on research, the number of directions and how quickly feedback comes back.' },
        { q: 'What is the difference between a logo and a brand identity?', a: 'The logo is the mark. A brand identity is the whole system around it — colours, fonts, imagery, tone and how they are used across every material.' },
        { q: 'Why do I need a vector logo file?', a: 'Vector files (SVG, PDF, AI, EPS) can be enlarged to any size without blurring, so printers, sign makers and embroiderers can use them. JPG and PNG files lose quality when enlarged.' },
        { q: 'Should my logo include my business’s full name?', a: 'Usually yes for a new business, so people learn the name. A symbol-only version can be added for small spaces like app icons and profile pictures.' },
    ],
};

export default article;
