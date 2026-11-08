/** Text of "Event Branding Kit: The Complete Checklist for Launches, Conferences and Corporate Events". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'An event branding kit is a matching set of designs that makes an event look like one brand everywhere: invitations, social media announcements, the stage backdrop and LED screen graphics, entrance and directional signage, standees, badges and lanyards, presentation templates, merchandise and video intros. Designing them together from one style guide, at least three to four weeks before the event, saves money and avoids last-minute mismatches.',
    keyPoints: [
        'Design every item from one key visual and style guide.',
        'Start three to four weeks before the event; printing takes time.',
        'Get exact sizes from the venue and the LED screen vendor.',
        'Plan the screen graphics and video, not just print.',
    ],
    body: [
        { type: 'h2', text: 'What is in an event branding kit?' },
        {
            type: 'table',
            head: ['Stage of the event', 'Items'],
            rows: [
                ['Before', 'Save-the-date, invitations (print and digital), social media announcements, registration page graphics, email banners'],
                ['Arrival', 'Entrance arch or welcome board, directional signs, registration desk branding, standees'],
                ['Main hall', 'Stage backdrop, LED screen graphics, podium branding, presentation template, speaker name cards'],
                ['People', 'Badges, lanyards, staff T-shirts or uniforms'],
                ['Content', 'Video intro and outro, speaker introduction slides, holding slides, photo booth backdrop'],
                ['After', 'Thank-you posts, highlight video thumbnails, certificates and mementos'],
            ],
        },
        { type: 'h2', text: 'How do you create a consistent event look?' },
        { type: 'steps', items: [
            'Define the event name, theme and the one feeling it should create.',
            'Design a key visual and a mini style guide: logo lock-up, colours, fonts and graphic elements.',
            'Adapt the key visual to every item, from a tiny badge to a large backdrop.',
            'Prepare digital versions first, since announcements go out earliest.',
            'Send print files to vendors with clear sizes, bleed and material notes.',
            'Prepare screen graphics in the exact resolution of the LED wall or projector.',
        ] },
        { type: 'h2', text: 'What details do designers need from you?' },
        { type: 'list', items: [
            'Event name, date, venue and agenda',
            'Sponsor and partner logos in vector format, with any placement rules',
            'Exact sizes from the venue for the backdrop, arches and standees',
            'LED screen or projector resolution and aspect ratio from the AV vendor',
            'Speaker names, titles and photos',
            'Quantities for badges, lanyards and printed items',
        ] },
        { type: 'h2', text: 'What is a realistic timeline?' },
        {
            type: 'table',
            head: ['When', 'Task'],
            rows: [
                ['4 weeks before', 'Key visual and style guide approved'],
                ['3 weeks before', 'Invitations and social announcements live'],
                ['2 weeks before', 'All print files to vendors; screen graphics in progress'],
                ['1 week before', 'Proofs checked; presentation template sent to speakers'],
                ['Event day', 'Spare badges and printed signs on hand for last-minute changes'],
            ],
        },
        { type: 'h2', text: 'What goes wrong most often?' },
        { type: 'list', items: [
            'Backdrops printed at the wrong size because the venue measurements were guessed',
            'Sponsor logos in low resolution that blur on large prints',
            'Screen graphics made for 16:9 when the LED wall is a different shape',
            'Text too small to read from the back of the hall',
            'Last-minute agenda changes with no editable templates',
        ] },
        { type: 'p', text: 'Events also need video: an opening film, speaker intros and a highlight video afterwards. See our [event videography guide](/blog/event-videography-guide/) and [logo animation](/blog/logo-animation-guide/) for the screen side.' },
        { type: 'h2', text: 'Print vs screen: what changes?' },
        {
            type: 'table',
            head: ['', 'Print items', 'Screen items'],
            rows: [
                ['Colour mode', 'CMYK, checked on a printed proof', 'RGB'],
                ['Size', 'Exact physical size plus bleed', 'Exact pixel resolution of the screen'],
                ['Text size', 'Readable from the viewing distance', 'Readable from the back of the hall'],
                ['Changes', 'Costly once printed', 'Easy until the event starts'],
                ['Formats', 'Print-ready PDF', 'Images and videos in the screen’s ratio'],
            ],
        },
        { type: 'p', text: 'Because screen items are easy to change, keep agenda-dependent information — speaker names, session times — on screens rather than in print where possible.' },
        { type: 'tip', text: 'Ask the AV vendor for the LED wall’s exact pixel resolution, then design every screen graphic to that size. It is the single most common event design mistake.' },
        { type: 'p', text: 'Event branding kits are part of our [design and branding](/services/design-and-branding/) service. [Share your event details](/#enquiry) and we will plan the kit with you.' },
    ],
    faqs: [
        { q: 'What is an event branding kit?', a: 'A coordinated set of designs — invitations, backdrops, signage, badges, screen graphics and social posts — that gives an event one consistent look.' },
        { q: 'How early should event branding start?', a: 'Ideally four weeks before the event, so announcements can go out early and printing is not rushed.' },
        { q: 'What size should a stage backdrop be?', a: 'It depends on the stage and venue. Get exact width and height from the venue or fabricator, then design at that size with a safety margin.' },
        { q: 'Can the same designs be used for future events?', a: 'Yes. A good event style guide can be reused with a new date and theme colour for annual or recurring events, saving time and cost.' },
    ],
};

export default article;
