/** Text of "Art Direction and Set Design for Ads: Sets, Props and Colour". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'Art direction is everything the camera sees apart from the actors: the set or location, furniture, props, colours, textures and the product’s surroundings. In an ad it decides whether a kitchen feels like a real family home or a showroom, and whether the product stands out or gets lost. The art department plans it before the shoot with references, a colour palette and a prop list, then builds or dresses the space and looks after it on the day.',
    keyPoints: [
        'Art direction covers sets, locations, props, colours and textures.',
        'A limited colour palette makes the product stand out.',
        'Dressing a real location is usually quicker than building a set; a set gives more control.',
        'Agree references and a prop list before the shoot, not on the day.',
    ],
    body: [
        { type: 'h2', text: 'What does the art department do on an ad?' },
        { type: 'table', head: ['Role', 'What they look after'], rows: [
            ['Production designer / art director', 'The overall look: sets, colours and style, agreed with the director'],
            ['Set dresser', 'Furniture, curtains, wall pieces and everything that fills the space'],
            ['Prop master', 'Objects the actors handle, including duplicates and the hero product'],
            ['Set builders and painters', 'Constructing, painting and ageing sets'],
            ['Stylist (works alongside)', 'Wardrobe that fits the palette; food or product styling where needed'],
        ] },
        { type: 'p', text: 'On small shoots one person may do several of these jobs. What matters is that someone owns the look and has time to prepare it.' },
        { type: 'h2', text: 'Should you build a set or dress a real location?' },
        { type: 'table', head: ['', 'Built set', 'Real location'], rows: [
            ['Control', 'Full control of walls, light and sound', 'Limited by the building and its surroundings'],
            ['Speed to prepare', 'Needs design and construction time', 'Faster: bring props and dress the space'],
            ['Camera freedom', 'Walls can move for the camera', 'Tight rooms limit angles'],
            ['Feel', 'Can look perfect, sometimes too perfect', 'Natural detail comes free'],
            ['Best for', 'Product worlds, stylised films, many set-ups', 'Homes, shops, offices and real workplaces'],
        ] },
        { type: 'p', text: 'Many ads mix the two: a real house dressed with new curtains, repainted walls and brought-in furniture. Our guide to [shooting locations in Hyderabad](/blog/shooting-locations-hyderabad/) covers what to check at a location.' },
        { type: 'h2', text: 'How does colour make the product stand out?' },
        { type: 'list', items: [
            '**Limit the palette** — two or three main colours for walls, furniture and wardrobe.',
            '**Give the brand colour space** — if the pack is red, keep other reds out of the frame.',
            '**Use contrast** — a light product against a darker surface, or the other way round.',
            '**Match the mood** — warm, earthy tones for food and family; cool, clean tones for technology and healthcare.',
            '**Plan with the grade in mind** — the colourist can refine colours later, but cannot easily separate a product from a background of the same colour. See [DI and colour correction](/blog/di-and-colour-correction-explained/).',
        ] },
        { type: 'h2', text: 'What should be agreed before the shoot?' },
        { type: 'steps', items: [
            '**References** — pictures of rooms, colours and textures that fit the idea, usually part of the [director’s treatment](/blog/directors-treatment-explained/).',
            '**Palette** — the main colours, with the brand colour marked.',
            '**Set or location plan** — a sketch or photos showing where things go.',
            '**Prop list** — every object in every scene, with who is bringing it.',
            '**Product supply** — enough clean, undamaged packs, including spares.',
            '**Approval** — the client signs off references and key props before shoot day.',
        ] },
        { type: 'p', text: 'These fit into the wider [pre-production checklist](/blog/pre-production-checklist-for-ads-and-films/).' },
        { type: 'h2', text: 'What are the common art direction mistakes?' },
        { type: 'list', items: [
            '**Too clean** — a home with nothing on the shelves looks like a showroom. A few lived-in details make it believable.',
            '**Too busy** — patterns and clutter pull the eye away from the product.',
            '**Other brands in frame** — logos on appliances, bottles or clothes; cover or remove them.',
            '**One of everything** — props break and packs get dented; bring duplicates.',
            '**Wrong region** — utensils, calendars or decor that do not belong to the audience’s home.',
            '**Continuity slips** — a glass that is full in one shot and half empty in the next. Photograph the set after each set-up.',
        ] },
        { type: 'h2', text: 'When does VFX replace a physical set?' },
        { type: 'p', text: 'Backgrounds that are impossible or too costly to build can be added later: a skyline outside a window, a larger factory floor, a stadium crowd. This works best when it is planned with the VFX team before the shoot. See [green screen vs virtual production](/blog/green-screen-vs-virtual-production/) for the options.' },
        { type: 'tip', text: 'Ask for a photo of the dressed set the evening before the shoot. Small changes are easy then, and very slow once the crew is waiting.' },
    ],
    faqs: [
        { q: 'Is art direction the same as production design?', a: 'They overlap. On films, the production designer leads the look and art directors carry it out. On ads, the two titles are often used for the same person: whoever is responsible for sets, props and colours.' },
        { q: 'Does a small ad shoot need an art director?', a: 'It needs someone doing the job, even if only for a day of preparation. Choosing a background, clearing clutter and bringing the right props makes a visible difference at very little cost.' },
        { q: 'Who supplies the product for the shoot?', a: 'The client usually supplies it. Send more than you think is needed, in perfect condition, and include any variants that must appear. Labels sometimes need special “hero” versions without batch marks.' },
        { q: 'Can the set colour be changed in post-production?', a: 'Small shifts are possible in the grade, and larger changes with VFX, but both take time and can look unnatural. Getting it right on set is nearly always better.' },
    ],
};

export default article;
