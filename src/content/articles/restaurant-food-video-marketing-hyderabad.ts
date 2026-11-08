/** Text of "Restaurant and Food Video Marketing in Hyderabad". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'Restaurants win with video when it makes people hungry and shows what makes the place special: close-ups of signature dishes being cooked and served, the chef’s story, the atmosphere at its best hour, and real customer moments. In Hyderabad, where food is a big part of city life, that means short Reels for Instagram, photos and videos on your Google Business Profile, strong images on delivery apps, and seasonal content around moments like Ramzan’s haleem season. Shoot in good light, capture the sounds of cooking, post consistently, and turn your best videos into local ads.',
    keyPoints: [
        'Make people hungry: steam, sizzle, close-ups and slow pours.',
        'Show what only you have — dish, chef, place or story.',
        'Keep Google, Instagram and delivery-app visuals fresh.',
        'Never fake reviews; disclose paid influencer posts.',
    ],
    body: [
        { type: 'h2', text: 'What videos should a restaurant make?' },
        {
            type: 'table',
            head: ['Video', 'What it shows', 'Where it works'],
            rows: [
                ['Signature dish', 'The dish being cooked, plated and served', 'Reels, ads, delivery-app listings'],
                ['Chef or founder story', 'Who cooks, why, and what makes the recipe special', 'Instagram, YouTube, Google'],
                ['Behind the kitchen', 'Fresh ingredients, prep, hygiene, the busy pass', 'Trust and appetite'],
                ['Atmosphere', 'The space at its best hour — music, lights, crowd', 'Date nights, events, groups'],
                ['Menu Reels', 'Quick cuts of dishes with names and prices', 'Discovery and ordering'],
                ['Customer moments', 'Real reactions and celebrations (with permission)', 'Social proof'],
                ['Seasonal specials', 'Ramzan haleem, festival thalis, monsoon menus', 'Timely visits and orders'],
            ],
        },
        { type: 'h2', text: 'How do you film food so it looks delicious?' },
        { type: 'list', items: [
            'Use soft side light from a window or a diffused lamp; avoid harsh overhead light.',
            'Film action: steam, sizzle, cheese pulls, pouring, breaking bread.',
            'Shoot hero angles — overhead for thalis and spreads, low and close for burgers and drinks.',
            'Record the sound of cooking; sizzling is half of the appetite appeal.',
            'Shoot food fresh, at its best moment, with clean plates and edges.',
            'Show hands and people, not just plates — it feels more real.',
        ] },
        { type: 'h2', text: 'Where should restaurant videos go?' },
        { type: 'list', items: [
            '**Instagram Reels:** discovery for new customers — see [Instagram Reels for brands](/blog/instagram-reels-for-brands/).',
            '**Google Business Profile:** photos and videos help people choosing where to eat right now — see our [Google Business Profile guide](/blog/google-business-profile-guide-hyderabad/).',
            '**Delivery apps:** strong dish photos and short videos where the platform allows them.',
            '**WhatsApp:** menu updates and specials for regular customers who have opted in.',
            '**Local ads:** your best Reels, targeted to a few kilometres around the restaurant.',
        ] },
        { type: 'h2', text: 'What about Hyderabad’s food seasons?' },
        { type: 'p', text: 'Hyderabad’s food calendar is a marketing calendar. Ramzan brings the haleem season — Hyderabadi haleem even has a Geographical Indication tag — and festivals such as Sankranti, Bonalu, Dasara and Diwali bring special menus, thalis and sweets. Plan seasonal content ahead with our [festival marketing calendar](/blog/festival-marketing-calendar-telangana-andhra/).' },
        { type: 'h2', text: 'Should restaurants work with food influencers?' },
        { type: 'p', text: 'Food creators can bring quick reach in Hyderabad. Choose creators whose audience matches your customers, agree clear deliverables, and make sure paid or sponsored posts are disclosed as advertising, as ASCI’s influencer guidelines require. Never buy fake reviews or followers — see [influencer marketing in India](/blog/influencer-marketing-india-guide/).' },
        { type: 'h2', text: 'A simple monthly video plan for a restaurant' },
        { type: 'steps', items: [
            '**Week 1 — the menu:** a new or signature dish, filmed from kitchen to table.',
            '**Week 2 — the people:** a short chef or founder clip about a recipe, an ingredient or a family story.',
            '**Week 3 — the experience:** the atmosphere at its busiest, a live counter, an event or a celebration.',
            '**Week 4 — the reason to visit now:** a seasonal special, a festival menu or an offer with clear terms.',
            '**Every week:** fresh photos on your Google Business Profile, and replies to every review and message.',
        ] },
        { type: 'tip', text: 'Book one shoot day a month: film the new dishes, a chef clip, the atmosphere and a few customer moments. That is enough for a month of Reels and fresh Google photos.' },
        { type: 'p', text: 'CK Studio films and edits food videos and manages social media for restaurants and cafés in Hyderabad — see our [social media and web design](/services/social-media-and-web-design/) service.' },
    ],
    faqs: [
        { q: 'What kind of videos get restaurants more customers?', a: 'Short, appetising videos of signature dishes, the chef’s story and the atmosphere, shared as Reels, on Google Business Profile and as local ads targeted around the restaurant.' },
        { q: 'Can I film restaurant videos on a phone?', a: 'Yes, for regular Reels — use window light, a steady phone and clean plates. For launches, menus and ads, a professional shoot gives more polished results.' },
        { q: 'How often should a restaurant post on Instagram?', a: 'Post a few times a week consistently, and refresh your Google Business Profile photos regularly. A monthly shoot makes that easy.' },
        { q: 'Do influencer posts need to say they are paid?', a: 'Yes. In India, ASCI’s guidelines require influencers to disclose paid partnerships and sponsored content clearly.' },
    ],
    sources: [
        { label: 'ASCI — advertising codes and guidelines', url: 'https://www.ascionline.in/' },
    ],
};

export default article;
