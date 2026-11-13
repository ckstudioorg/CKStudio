/** Text of "Food and Beverage Ad Films: Styling, Pours and Splashes". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'Food and drink ads are made in a “tabletop” shoot: a small set, a food stylist, macro lenses, strong controlled light and often a high-speed camera for slow-motion pours and splashes. Each shot is prepared for a long time and filmed in seconds, because food looks its best only briefly. In India, the food shown should be the real product, and any health or nutrition claim must follow the food regulator’s advertising rules.',
    keyPoints: [
        'Tabletop shoots are slow and precise: a few perfect shots a day.',
        'A food stylist prepares many identical “hero” portions.',
        'Slow-motion pours need a high-speed camera and a lot of light.',
        'Show the real product; health claims must be ones you can prove.',
    ],
    body: [
        { type: 'h2', text: 'What is a tabletop shoot?' },
        { type: 'p', text: 'A tabletop shoot films food, drinks or small products on a table-sized set. The camera is close, so every crumb, bubble and drop shows. The crew is small but specialised: a director or cinematographer who knows food, a food stylist with assistants, an art director for surfaces and props, and often a rig technician who builds the devices that drop, pour or spin things at exactly the right moment.' },
        { type: 'h2', text: 'What does a food stylist do?' },
        { type: 'list', items: [
            '**Chooses the best-looking ingredients** — often sorting through many to find the few that are perfect.',
            '**Prepares stand-ins and heroes** — a stand-in portion for lighting, then a fresh hero for the take.',
            '**Controls timing** — steam, melting, foam and crispness last seconds, so the hero arrives only when the camera is ready.',
            '**Builds the plate for the camera** — height, layers and colour arranged for the one angle being filmed.',
            '**Keeps it fresh** — brushing oil, spraying water, replacing garnish between takes.',
        ] },
        { type: 'h2', text: 'How are pours, splashes and slow motion filmed?' },
        { type: 'table', head: ['Shot', 'How it is done', 'What it needs'], rows: [
            ['Slow-motion pour', 'High-speed camera filming many more frames per second than normal', 'Very strong, flicker-free light'],
            ['Splash or drop', 'A rig releases the item at a repeatable moment', 'Several identical takes and a lot of cleaning'],
            ['Flying ingredients', 'Air cannons or hand tosses, sometimes combined in VFX', 'Clean background plates'],
            ['Steam and smoke', 'Real steam, timed carefully, or added in post', 'Dark background and back light'],
            ['Macro detail', 'Macro lens very close to the food', 'Stable rig; tiny movements look large'],
            ['Moving camera', 'A motion-control arm repeats the same move exactly', 'Programming time before the take'],
        ] },
        { type: 'p', text: 'Some shots are easier in CGI: a perfect liquid swirl, a pack that assembles itself. See [live shoot, CGI or AI for product videos](/blog/product-video-live-shoot-cgi-or-ai/) and [3D product animation](/blog/3d-product-animation-guide/).' },
        { type: 'h2', text: 'What should the ad show honestly?' },
        { type: 'p', text: 'Styling is about making the real product look its best, not replacing it with something else. Advertising codes expect the product shown to be the one sold, in a portion a buyer would recognise. Claims are regulated: in India, the Food Safety and Standards (Advertising and Claims) Regulations, 2018 set conditions for nutrition and health claims, and the ASCI code has specific guidance for food and beverage advertising.' },
        { type: 'list', items: [
            '**Use the real product** as the hero, not a look-alike.',
            '**Keep portions and ingredients true** to what the pack contains.',
            '**Check every claim** — “high protein”, “no added sugar”, “natural” and similar words have conditions.',
            '**Take care with children** — ads should not encourage over-eating or mislead about nutrition.',
            '**Get the pack right** — the label in the film should be the current, approved one. See [packaging and label rules](/blog/packaging-design-and-label-rules-india/).',
        ] },
        { type: 'p', text: 'This is general information, not legal advice. Have claims checked by your regulatory team before filming.' },
        { type: 'h2', text: 'How do you plan a food shoot?' },
        { type: 'steps', items: [
            '**List the shots** — the hero dish, the pour, the bite, the pack shot.',
            '**Storyboard closely** — angles matter more here than in almost any other kind of ad.',
            '**Test in advance** — the stylist tries the recipe and the rig tries the pour.',
            '**Order plenty of product** — far more than will be eaten.',
            '**Schedule by freshness** — hot and frozen items when everything else is ready.',
            '**Capture clean plates and pack shots** for editing and VFX.',
            '**Finish in post** — clean-up, colour and sound. Sizzles, fizz and crunch are often added by sound designers; see [sound design and mixing](/blog/sound-design-and-mixing/).',
        ] },
        { type: 'h2', text: 'What about restaurants and small food brands?' },
        { type: 'p', text: 'You do not need a high-speed camera to make food look good. Window light, a clean surface, a steady phone and one well-plated dish go a long way for reels. Our guide to [restaurant and food video marketing in Hyderabad](/blog/restaurant-food-video-marketing-hyderabad/) covers the simpler approach; a tabletop shoot makes sense when you need a film for television, cinema or a launch.' },
        { type: 'tip', text: 'Decide the one “appetite shot” that the whole film builds to, and give it the most time on the day. Viewers remember that single image.' },
    ],
    faqs: [
        { q: 'Is the food in ads real?', a: 'It should be, at least for the product being advertised. Stylists use careful preparation, fresh replacements and small tricks to keep it looking good under hot lights, but the hero product should be the real thing.' },
        { q: 'Why do food shoots take so long?', a: 'Each shot needs lighting, a rig, a rehearsal with a stand-in and then several takes with fresh portions. A few seconds of slow-motion pour can take hours to prepare.' },
        { q: 'Can AI or CGI replace a food shoot?', a: 'CGI is widely used for liquids, packs and impossible moves. AI-generated food can be useful for concepts, but it may not match your actual product, which is a problem for honesty and for claims. Many films mix real food with CGI elements.' },
        { q: 'Do health claims in a food ad need approval?', a: 'Claims must meet the conditions in the food regulator’s advertising rules and be supported by evidence. Check them with a regulatory expert before the script is locked.' },
    ],
    sources: [
        { label: 'FSSAI — Food Safety and Standards Authority of India', url: 'https://www.fssai.gov.in/' },
        { label: 'ASCI — Advertising Standards Council of India', url: 'https://www.ascionline.in/' },
    ],
};

export default article;
