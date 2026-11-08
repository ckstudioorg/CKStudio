/** Text of "Product Videos for Amazon and Flipkart: What to Show and How to Shoot". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'A good marketplace video answers the questions a shopper would ask in a store: what it looks like from every side, how big it is, how it works, what’s in the box and how it feels to use. Keep it short and silent-friendly, with on-screen text, and show the real product exactly as sold. Marketplaces generally don’t allow prices, offers, contact details or links inside listing videos, and their rules change — check the current guidelines in your seller account before you upload.',
    keyPoints: [
        'Answer shopper questions: size, use, details, what’s in the box.',
        'Design for sound off: on-screen text and clear visuals.',
        'Show the product exactly as sold — no extras, no exaggeration.',
        'Check each marketplace’s current video rules before exporting.',
    ],
    body: [
        { type: 'h2', text: 'What should a product listing video show?' },
        { type: 'steps', items: [
            '**The hook** — the product in use, solving the problem, in the first seconds.',
            '**All sides** — a slow 360° turn so nothing is hidden.',
            '**Scale** — in a hand, on a table, next to everyday objects.',
            '**Key features, demonstrated** — show them working instead of claiming them.',
            '**Details** — material, finish, buttons, stitching and ports, in close-up.',
            '**What’s in the box** — every item the customer receives.',
            '**How to use or set it up**, if that’s a question buyers ask.',
            '**Variants** — colours and sizes, if one video covers them.',
        ] },
        { type: 'h2', text: 'How long should it be, and in what format?' },
        {
            type: 'table',
            head: ['Video', 'Format', 'Suggested length'],
            rows: [
                ['Main listing video', '16:9 or square', '30–90 seconds'],
                ['Single-feature clips', 'Square or vertical', '10–20 seconds'],
                ['Set-up or how-to video', '16:9', 'As long as the task needs'],
                ['Social ads from the same shoot', 'Vertical 9:16', '6–15 seconds'],
            ],
            caption: 'A practical starting point — follow each marketplace’s current specifications',
        },
        { type: 'p', text: 'Export a clean, high-quality file (an MP4 in H.264 is the safest choice) and check the current upload requirements in Seller Central or your marketplace’s seller portal — file size, length and resolution limits change, and differ between marketplaces and account types.' },
        { type: 'h2', text: 'What do marketplaces usually not allow in listing videos?' },
        { type: 'list', items: [
            'Prices, discounts, “limited-time” offers or delivery promises.',
            'Phone numbers, email addresses, web links or QR codes to other sites.',
            'Mentions of competitors, or comparisons you can’t support.',
            'Claims you can’t prove, such as “best” or “No. 1”.',
            'Products or accessories that aren’t included in the purchase.',
        ] },
        { type: 'p', text: 'Breaking the rules can get a video rejected or removed, so treat this list as a starting point and read the current guidelines for each marketplace.' },
        { type: 'h2', text: 'How do you shoot products well?' },
        { type: 'list', items: [
            '**Two set-ups** — a clean white or grey background for clarity, and a lifestyle setting for context.',
            '**Consistent, soft light** that shows true colour and texture.',
            '**Smooth movement** — a turntable for 360° turns, a slider for detail shots.',
            '**Clean hands and perfect samples** — every scratch shows in close-up.',
            '**Text in your buyers’ language**, large enough to read on a phone.',
        ] },
        { type: 'h2', text: 'How do you film many products in one day?' },
        { type: 'steps', items: [
            '**Group products by size and set-up** — small items on one table, large ones on another — so the lights move as little as possible.',
            '**Use the same sequence for every product** — hook, 360° turn, details, in use, in the box — so the editor can build the whole range from one template.',
            '**Name files by product code or ASIN** as you go, so nothing gets mixed up in the edit.',
            '**Keep one clean, untouched sample** of each product for close-ups.',
            '**Shoot listing photos in the same set-up**, so photos and video match on the page.',
        ] },
        { type: 'p', text: 'A consistent sequence also makes your whole catalogue look established and trustworthy — shoppers notice when every listing feels like it comes from the same careful brand.' },
        { type: 'p', text: 'Not sure whether to shoot, render or generate? Compare the options in [AI product photography vs a product shoot](/blog/ai-product-photography-vs-product-shoot/) and [live shoot, CGI or AI for product videos](/blog/product-video-live-shoot-cgi-or-ai/). Whichever you choose, the product must look exactly like what the customer receives.' },
        { type: 'tip', text: 'Film the unboxing exactly as the customer will experience it. It sets the right expectations and cuts “not as shown” returns.' },
    ],
    faqs: [
        { q: 'Can every seller upload videos on Amazon?', a: 'Video options depend on your account and whether your brand is registered. Check what your Seller Central account offers; the requirements and menus change from time to time.' },
        { q: 'Should listing videos have a voice-over?', a: 'Many shoppers watch without sound, so the video must make sense with on-screen text alone. A voice-over can add warmth for those who listen, but don’t rely on it.' },
        { q: 'Can we use the same video on Amazon and Flipkart?', a: 'Often yes, if it meets both marketplaces’ rules. Keep a clean master without prices or contact details, and export versions to each platform’s specifications.' },
        { q: 'Can we include our phone number or website in the video?', a: 'Generally no. Marketplaces don’t allow contact details or links to other sites in listing videos. Use your own website and social media for that.' },
    ],
    sources: [
        { label: 'Amazon India — selling on Amazon (Seller Central)', url: 'https://sell.amazon.in/' },
    ],
};

export default article;
