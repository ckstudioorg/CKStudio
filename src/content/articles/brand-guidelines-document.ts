/** Text of "Brand Guidelines: What to Put in Your Brand Book (With a Checklist)". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'A brand guidelines document, or brand book, is the rulebook that keeps your brand consistent wherever it appears. At minimum it covers your logo and how not to use it, colour codes for screen and print, fonts, imagery style, tone of voice with examples, and templates for common items like social posts, presentations and video end cards. Keep it short, visual and easy to find, so anyone — staff, agencies, printers — can use it correctly.',
    keyPoints: [
        'Logo, colours, fonts, imagery and voice are the core.',
        'Include video and motion rules — end cards, captions, logo animation.',
        'Show “do this, not that” examples.',
        'Templates and a single shared link make it easy to follow.',
    ],
    body: [
        { type: 'h2', text: 'What should a brand book include?' },
        {
            type: 'table',
            head: ['Section', 'What it covers'],
            rows: [
                ['Brand story', 'Who you are, what you stand for and who you serve — in a few lines'],
                ['Logo', 'Versions (full, icon, one-colour), clear space, minimum size, what not to do'],
                ['Colours', 'Codes for screen (HEX, RGB) and print (CMYK, Pantone), and how much of each to use'],
                ['Typography', 'Fonts for headlines and text, sizes, and matching Telugu or Hindi fonts'],
                ['Imagery', 'Photo style, lighting, people, illustration and icon style'],
                ['Tone of voice', 'How you sound, words you use and avoid, examples in each language'],
                ['Video and motion', 'Logo animation, end cards, lower thirds, captions, music and sound'],
                ['Social media', 'Post, story and reel templates, profile images, highlight covers'],
                ['Print and places', 'Stationery, brochures, signage, vehicles, uniforms, packaging'],
                ['Accessibility', 'Contrast, readable sizes, captions on videos'],
            ],
        },
        { type: 'h2', text: 'How detailed should it be?' },
        { type: 'p', text: 'Detailed enough to prevent mistakes, short enough that people read it. A small business can start with a few pages covering the logo, colours, fonts and voice, then add sections as the brand grows. Large brands often keep a short “essentials” version for partners and a full version for designers. If you are just starting out, our guide to the [company start package](/blog/company-start-package-brand-essentials/) covers the first pieces you need, and the [logo design guide](/blog/logo-design-guide/) covers the mark itself.' },
        { type: 'h2', text: 'Why include video and motion?' },
        { type: 'list', items: [
            '**Logo animation** — one approved version for openings and end cards (see the [logo animation guide](/blog/logo-animation-guide/)).',
            '**End cards** — layout, contact details and call to action.',
            '**Lower thirds and titles** — fonts, colours and positions for names and captions.',
            '**Captions** — style, size and placement for reels and ads.',
            '**Safe areas** — where text and logos go so app buttons don’t cover them in 9:16 videos.',
            '**Look and sound** — the colour grade, music mood and any sound logo.',
        ] },
        { type: 'p', text: 'Without these, every editor and agency invents their own, and your videos stop looking like one brand.' },
        { type: 'h2', text: 'What about brands that work in several languages?' },
        { type: 'list', items: [
            'Choose Telugu and Hindi fonts that match the feel and weight of your English fonts.',
            'Decide how your brand name is written in each script — and keep it the same everywhere.',
            'Approve translations of your tagline instead of translating it fresh each time.',
            'Give tone-of-voice examples in each language, written by native speakers.',
        ] },
        { type: 'h2', text: 'How do you get people to use it?' },
        { type: 'steps', items: [
            '**Put it in one place** — a single link everyone can find.',
            '**Provide an asset library** — logos in every format, fonts, colour swatches and templates.',
            '**Make templates** for the things people make most: social posts, presentations, letterheads, video end cards.',
            '**Brief every new agency, freelancer and printer** with it.',
            '**Name a brand owner** who approves new uses and answers questions.',
            '**Keep a change log**, and tell people when something is updated.',
        ] },
        { type: 'tip', text: 'Add a page of “do this, not that” examples — a stretched logo, the wrong colours, a busy background. A misuse page prevents more mistakes than any amount of rules.' },
        { type: 'p', text: 'If your brand has a character, give it its own section — see [brand mascots](/blog/brand-mascot-design-and-animation/). And if your guidelines are badly out of date, it may be time for a [brand refresh](/blog/rebranding-guide/).' },
    ],
    faqs: [
        { q: 'Do small businesses need brand guidelines?', a: 'Yes, even a short version. A few pages covering your logo, colours, fonts and tone keep your signboard, social posts, packaging and videos consistent as more people work on them.' },
        { q: 'Which logo file formats should we have?', a: 'Vector files (SVG, AI, EPS or PDF) for print and signage, and PNG files with transparent backgrounds for digital use — in full-colour, one-colour and reversed versions.' },
        { q: 'How often should brand guidelines be updated?', a: 'Whenever something changes — a new product line, a new language, a new platform — and at a yearly review. Keep a change log so everyone uses the latest version.' },
        { q: 'Is a brand book the same as a logo design?', a: 'No. A logo is one element. The brand book explains how the logo, colours, fonts, images, words and videos work together.' },
    ],
};

export default article;
