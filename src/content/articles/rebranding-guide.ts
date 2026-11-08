/** Text of "Rebranding Your Business: When to Refresh and How to Roll It Out". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'Rebrand when your current brand no longer fits what you do, who you serve or where you are going — after a merger, a move into new services, or when an outdated look is holding back growth. Often a refresh (an updated logo, colours and voice) is enough; a full rebrand changes the name or the core idea. Plan the rollout like a launch: check a new name legally, update every touchpoint in a planned order, explain the change to customers, and keep enough continuity that people still recognise you.',
    keyPoints: [
        'A refresh updates the look; a rebrand changes the name or the core idea.',
        'Audit every place your brand appears before you start.',
        'Check trademarks, domains and social handles for any new name.',
        'Roll out in a planned order, and tell customers why.',
    ],
    body: [
        { type: 'h2', text: 'Refresh or full rebrand?' },
        {
            type: 'table',
            head: ['', 'Refresh', 'Full rebrand'],
            rows: [
                ['What changes', 'Logo details, colours, fonts, photography, tone', 'The name, the logo, the positioning — sometimes everything'],
                ['When it fits', 'The brand is right but looks dated or inconsistent', 'The business has changed or merged, or the name causes problems'],
                ['Risk', 'Low — customers recognise you instantly', 'Higher — you must rebuild recognition'],
                ['Effort', 'Weeks to a few months', 'Months, with legal and operational work'],
            ],
        },
        { type: 'h2', text: 'What are the signs you need a rebrand?' },
        { type: 'list', items: [
            'Your look feels dated next to competitors, or different on every channel.',
            'Customers confuse you with another business.',
            'You have moved into new services, markets or price points that the brand doesn’t reflect.',
            'You are expanding to new regions or languages where the name doesn’t work.',
            'You can’t get the domain or social handles for your name, or there is a trademark conflict.',
            'The brand carries associations you want to leave behind.',
        ] },
        { type: 'h2', text: 'How does the rebranding process work?' },
        { type: 'steps', items: [
            '**Audit** — list every place the brand appears, and what customers know you for.',
            '**Research** — talk to customers and staff; study competitors.',
            '**Strategy** — positioning, audience and personality: what the new brand must say.',
            '**Naming, if needed** — shortlist names, then check the trademark register on IP India, domains and social handles.',
            '**Identity design** — logo, colours, typography and imagery (see the [logo design guide](/blog/logo-design-guide/)).',
            '**Guidelines** — a [brand book](/blog/brand-guidelines-document/) so everyone applies it correctly.',
            '**Rollout plan** — what changes, in what order, by when, and who is responsible.',
            '**Launch** — announce it with a story people care about.',
        ] },
        { type: 'h2', text: 'What needs updating at rollout?' },
        { type: 'list', items: [
            '**Digital** — website, social profiles, Google Business Profile, directories, email signatures, app icons.',
            '**Physical** — signage, vehicles, uniforms, stationery, packaging and point-of-sale material.',
            '**Documents** — invoices, contracts, presentations and templates.',
            '**Legal** — if your registered company name changes, there are filings to make, plus updates to bank accounts and registrations.',
            '**Media** — ads, video end cards and the [logo animation](/blog/logo-animation-guide/).',
        ] },
        { type: 'p', text: 'Use up old stock where it makes sense, set a date after which only the new brand appears, and keep a checklist so nothing is missed.' },
        { type: 'h2', text: 'How do you keep existing customers?' },
        { type: 'list', items: [
            '**Explain why** — the change should mean something better for customers.',
            '**Keep some continuity** — a colour, a shape or part of the name helps people connect old and new.',
            '**Use “formerly known as”** on signage, profiles and listings for a while after a name change.',
            '**Tell your best customers first**, personally.',
            '**Keep your details consistent** everywhere online, so search engines and AI assistants recognise the new brand as the same business — see [getting recommended by AI search](/blog/get-recommended-by-ai-search/).',
        ] },
        { type: 'h2', text: 'How do you launch the new brand?' },
        { type: 'p', text: 'A launch film tells the story behind the change in a way a press note can’t — see [brand film vs ad film vs corporate film](/blog/brand-film-vs-ad-film-vs-corporate-film/). Pair it with a teaser on social media, an event or open house for customers and staff, and updated listings on the same day.' },
        { type: 'tip', text: 'Before you fall in love with a new name, check the trademark register, the domain and the social handles — on the same day.' },
    ],
    faqs: [
        { q: 'How long does a rebrand take?', a: 'A refresh can take a few weeks to a few months. A full rebrand with a new name usually takes longer, because of research, legal checks and the work of updating every touchpoint.' },
        { q: 'Will a rebrand hurt our Google ranking?', a: 'It doesn’t have to. If your website address changes, redirect every old page to its new address, update your Google Business Profile and listings, and keep your business details consistent everywhere.' },
        { q: 'Should we tell customers before or after the change?', a: 'Tell your most important customers before, and everyone on launch day. A short explanation of why you changed — and what stays the same — prevents confusion.' },
        { q: 'Do we need new videos after a rebrand?', a: 'At least new end cards and a new logo animation. If your main brand film shows the old identity, plan a new film or a re-edit with the new look.' },
    ],
    sources: [
        { label: 'IP India — trade mark search and registration', url: 'https://ipindia.gov.in/' },
    ],
};

export default article;
