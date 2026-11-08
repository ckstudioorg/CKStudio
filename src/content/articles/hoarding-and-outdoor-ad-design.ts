/** Text of "Hoarding and Outdoor Ad Design: Make It Work in Three Seconds". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'Most people see a hoarding for a few seconds while moving, so design for a glance: one message, as few words as possible, one striking image, your brand big and clear, and high contrast that reads from far away and at night. Test the design small — if it works as a thumbnail on your phone, it will work on the road. Build it from the same key visual as your ad film and social posts, so the whole campaign is recognised everywhere.',
    keyPoints: [
        'One message, one image, one brand — nothing else.',
        'Fewer words: many designers aim for around seven.',
        'Contrast and size beat detail; test the design as a tiny thumbnail.',
        'Use the campaign’s key visual so outdoor and video work together.',
    ],
    body: [
        { type: 'h2', text: 'What makes an outdoor ad readable?' },
        { type: 'list', items: [
            '**One message.** What is the single thing a driver should remember?',
            '**Few words.** Many designers aim for around seven words or fewer on roadside hoardings.',
            '**Huge, simple type** in a clear font — no thin scripts or condensed letters.',
            '**Strong contrast** between text and background, in daylight and under lights at night.',
            '**One striking image** — a face, the product, a bold idea — not a collage.',
            '**The brand clearly visible**, not tucked in a corner.',
            '**A simple next step** — “Next left”, a landmark, or a short web address for slower-moving traffic.',
        ] },
        { type: 'h2', text: 'How should you design for each format?' },
        {
            type: 'table',
            head: ['Format', 'How people see it', 'Design approach'],
            rows: [
                ['Highway hoarding', 'Fast, from far away', 'Three to five words, one giant visual, the brand'],
                ['City hoarding or unipole', 'In traffic, from a distance', 'A headline, the brand and a direction or landmark'],
                ['Bus shelter or metro panel', 'Pedestrians and people waiting', 'More detail is fine; a QR code can work here'],
                ['Digital billboard (LED)', 'In rotation with other ads', 'Simple motion or a still that reads instantly; check the slot length'],
                ['Mall and airport screens', 'People walking or waiting', 'Short video works; design for no sound'],
                ['Vehicle branding', 'Moving, seen from all sides', 'Brand, service and phone number, large and simple'],
            ],
        },
        { type: 'h2', text: 'How do you prepare print files?' },
        { type: 'list', items: [
            '**Get the exact specifications** from the media owner or printer: final size, bleed, file format and colour mode.',
            '**Work at the right resolution** — large formats are seen from far away and don’t need brochure-level resolution at full size, so ask your printer what they need.',
            '**Check colour on the real material** — flex and vinyl prints can shift colours, so ask for a proof.',
            '**Keep text away from the edges** — frames and mounting can cover the outer area.',
            '**Proofread every word** — and have Telugu or Hindi text checked by a native speaker, with fonts that render the script correctly.',
            '**Think about night** — whether the site is front-lit, back-lit or digital changes how dark colours look.',
        ] },
        { type: 'h2', text: 'How does outdoor connect with your ad film?' },
        { type: 'p', text: 'The strongest campaigns use one key visual everywhere. When you shoot an ad film, have a photographer capture stills of the hero moment on set — see [one shoot day, a month of content](/blog/one-shoot-a-month-of-content/). Then the hoarding, the reel and the TV commercial all show the same image, tagline and colours, and each reminds people of the others. Plan where outdoor fits with your other media in our [media guide for Telangana and Andhra Pradesh](/blog/advertising-media-telangana-andhra/).' },
        { type: 'h2', text: 'What permissions apply?' },
        { type: 'p', text: 'Outdoor advertising sites are controlled by local authorities, and the rules on where hoardings may stand change over time. Book through established media owners who handle permissions for their sites, confirm a site is approved before you pay, and follow any rules the authorities set on content and size.' },
        { type: 'h2', text: 'What are common outdoor design mistakes?' },
        { type: 'list', items: [
            'Putting a whole brochure — every service, every branch — on one hoarding.',
            'Small phone numbers and long web addresses nobody can note while moving.',
            'Busy photos in which the product disappears.',
            'Low contrast, such as yellow text on white or dark blue on black.',
            'Copying a social post onto a hoarding without redesigning it for distance.',
        ] },
        { type: 'tip', text: 'Print your design on A4, pin it on a wall across the room and walk past it. If you can’t read the message at a glance, simplify.' },
        { type: 'p', text: 'Film posters follow similar rules at a different scale — see the [movie poster design guide](/blog/movie-poster-design-guide/) and the [event branding kit checklist](/blog/event-branding-kit-checklist/).' },
    ],
    faqs: [
        { q: 'How many words should a hoarding have?', a: 'As few as possible. Many designers aim for around seven words or fewer on roadside hoardings, because drivers see them for only a few seconds.' },
        { q: 'Can we put our phone number on a hoarding?', a: 'On bus shelters, metro panels and slow-moving streets, yes, if it is large. On fast roads, a landmark, a direction or a short, memorable web address works better.' },
        { q: 'What colours work best on hoardings?', a: 'Contrast matters more than any one colour. Use your brand colours, but make sure text and background differ strongly in brightness, and check the design at night if the site is lit.' },
        { q: 'Do digital billboards need video?', a: 'Not necessarily. Many show still ads in rotation; simple motion can help, but the message must still read instantly in the few seconds your ad is on screen.' },
    ],
};

export default article;
