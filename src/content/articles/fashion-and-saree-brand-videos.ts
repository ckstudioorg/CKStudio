/** Text of "Fashion and Saree Brand Videos: Lookbooks, Reels and Catalogue Shoots". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'Fashion videos sell when they show what photos can’t: how a fabric moves, drapes and catches the light. Plan one shoot that gives you a short lookbook film, a vertical reel for each design, clean catalogue clips for your website and marketplaces, and festive campaign edits — with close-ups of weave and border, the full drape, and the outfit in motion. Keep colour accurate: customers return clothes that look different on screen.',
    keyPoints: [
        'Video shows movement, drape and texture — the things photos miss.',
        'One shoot can cover a lookbook film, product reels and catalogue clips.',
        'Accurate colour reduces returns: the same light, a colour reference, careful grading.',
        'Plan collections around festivals and wedding seasons.',
    ],
    body: [
        { type: 'h2', text: 'Which videos does a fashion brand need?' },
        {
            type: 'table',
            head: ['Video', 'What it shows', 'Where it is used'],
            rows: [
                ['Lookbook or campaign film', 'The collection’s mood and story', 'YouTube, website, ads'],
                ['Product reels', 'One design each: drape, details, styling', 'Instagram, WhatsApp, Facebook'],
                ['Catalogue clips', 'Plain background, a slow turn, accurate colour and fit', 'Website and marketplaces (see [product videos for Amazon and Flipkart](/blog/ecommerce-product-videos-amazon-flipkart/))'],
                ['Styling and draping videos', 'Ways to wear a saree or style a set', 'Reels, YouTube'],
                ['Behind the weave', 'Weavers, looms, embroidery — the craft', 'YouTube, reels, your website’s story page'],
            ],
        },
        { type: 'h2', text: 'How do you show fabric and drape on camera?' },
        { type: 'list', items: [
            '**Close-ups** of the weave, zari, embroidery, border and pallu, with light from the side to bring out texture.',
            '**Movement** — a walk, a turn, the pallu lifting in a breeze — shows how the fabric falls.',
            '**The full drape**, head to toe, so customers see the complete look.',
            '**Hands on fabric** — touching, folding, holding it to the light — suggests weight and feel.',
            '**Daylight or daylight-balanced lights** for true colours; avoid heavy filters.',
        ] },
        { type: 'h2', text: 'How do you plan a fashion shoot day?' },
        { type: 'steps', items: [
            '**Make a line sheet** — every design, its colours and its priority, so the must-haves are shot first.',
            '**Group looks per model** — outfit changes take time, so plan them in batches.',
            '**Set up two zones** — a plain catalogue set and a styled lifestyle set — and move between them.',
            '**Schedule hair, make-up and draping** so the next model is ready when the set is.',
            '**Keep a steaming station** — creases show on camera.',
            '**Shoot catalogue first, then lifestyle**, while light and energy are fresh.',
            '**Capture stills and video together** with a hybrid crew, and name every file by product code.',
        ] },
        { type: 'h2', text: 'What about models, locations and styling?' },
        { type: 'p', text: 'Cast models who reflect your customers — different ages, body types and skin tones widen your reach (see [casting for ads](/blog/casting-actors-and-models-for-ads/)). Hyderabad’s heritage buildings, old havelis and modern spaces make strong backdrops, but most need permission for a commercial shoot — see [shooting locations in Hyderabad](/blog/shooting-locations-hyderabad/). Style with jewellery and accessories that match your price point; our [jewellery shoot guide](/blog/jewellery-ad-films-and-photography/) covers lighting metal and stones.' },
        { type: 'h2', text: 'Should you show authenticity labels?' },
        { type: 'p', text: 'If your products are certified — for example pure silk carrying the **Silk Mark** label of the Silk Mark Organisation of India — show the label clearly in a close-up and mention it in captions. Only show certifications your product actually carries; claiming “pure silk” or “handloom” without basis misleads customers.' },
        { type: 'h2', text: 'When should you release fashion videos?' },
        { type: 'p', text: 'Plan collections around the seasons people buy for: Sankranti, Ugadi, Bathukamma and Dussehra, Diwali, and the wedding seasons. Release teasers before a collection drops, product reels through the season, and styling videos when people are deciding what to wear — see our [festival marketing calendar](/blog/festival-marketing-calendar-telangana-andhra/).' },
        { type: 'tip', text: 'Shoot every catalogue product under the same light set-up, with a colour reference card in the first frame. It keeps colours consistent across your whole range.' },
    ],
    faqs: [
        { q: 'Should we use models or mannequins?', a: 'Models show how clothes move and fit, which sells better on video. Mannequins or flat lays work for quick catalogue stills, but a draped model is worth it for your key designs.' },
        { q: 'How many reels should we make per collection?', a: 'At least one per key design, plus a few that show the whole collection, styling ideas and the craft behind it. Plan them in one shoot so they share a look.' },
        { q: 'Can we shoot catalogue and campaign on the same day?', a: 'Yes, with two sets and a tight schedule. Catalogue clips are quick and repetitive; the campaign film needs more time for light and performance, so give it the best hours.' },
        { q: 'How do we keep colours accurate?', a: 'Use consistent daylight-balanced lighting, a colour reference card, a properly set camera, and a colourist who matches the footage to the real fabric — see [DI and colour correction](/blog/di-and-colour-correction-explained/).' },
    ],
    sources: [
        { label: 'Silk Mark Organisation of India', url: 'https://silkmarkindia.com/' },
    ],
};

export default article;
