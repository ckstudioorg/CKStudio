/** Text of "Where to Advertise in Telangana and Andhra Pradesh: A Media Guide". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'Choose media by where your customers are and what you need them to do. Telugu TV channels and cinema give big local reach and trust; YouTube, Instagram and OTT apps let you target by city, age and interests on smaller budgets; outdoor and radio remind people near your stores; WhatsApp keeps existing customers coming back. Most local brands start with digital plus one big-reach medium, and make one ad film cut into versions for each.',
    keyPoints: [
        'Start from your goal: awareness, store visits, calls, WhatsApp chats or online sales.',
        'Combine one big-reach medium with targeted digital.',
        'Make one master film and cut versions for each medium.',
        'Track results with offer codes, call numbers and WhatsApp clicks.',
    ],
    body: [
        { type: 'h2', text: 'Which media can you use in the Telugu states?' },
        {
            type: 'table',
            head: ['Medium', 'Good for', 'Creative you need'],
            rows: [
                ['Telugu TV channels', 'Broad reach and trust for launches and big seasons', '10–30 second TV commercials'],
                ['YouTube', 'Targeted reach by place, age and interests; longer stories', '6-second bumpers, 15–30 second ads, longer brand films'],
                ['Instagram and Facebook', 'Local targeting, offers, reels', 'Vertical 9:16 reels and short ads'],
                ['OTT and connected TV', 'Premium big-screen viewing, urban audiences', 'TV-quality 15–30 second ads'],
                ['Cinema', 'Seated audiences on chosen screens near you', 'A certified cinema version (see [cinema advertising](/blog/cinema-advertising-in-india/))'],
                ['FM radio', 'Daily reminders for commuters', '10–30 second audio spots'],
                ['Outdoor', 'Presence near your stores: hoardings, bus shelters, metro', 'Simple key visuals (see [hoarding design](/blog/hoarding-and-outdoor-ad-design/))'],
                ['Telugu newspapers', 'Announcements, older audiences, local editions', 'Print ads'],
                ['WhatsApp', 'Existing customers who opted in', 'Short videos and updates (see [video on WhatsApp Business](/blog/whatsapp-business-video-marketing/))'],
            ],
        },
        { type: 'p', text: 'Telugu TV includes general entertainment, movie and news channels; OTT includes national apps and Telugu-focused ones such as aha. Rates, audiences and ad formats change, so ask each channel, platform or media agency for its current options.' },
        { type: 'h2', text: 'How do you choose the right mix?' },
        { type: 'steps', items: [
            '**Define the goal.** Awareness for a launch is different from filling tables this weekend.',
            '**Map your customers.** Which city or districts, which age group, which language?',
            '**Pick one main medium** that reaches most of them, and one or two supporting ones.',
            '**Make one master film** and plan every version from the same shoot.',
            '**Measure what you can** — calls, WhatsApp chats, offer codes, store visits, website leads — see [video ad metrics](/blog/video-ad-metrics/).',
        ] },
        { type: 'h2', text: 'How do you plan creative for several media?' },
        { type: 'p', text: 'Plan it all before the shoot. A 30-second master film gives you 15- and 6-second cut-downs, vertical reels, a radio version built from the soundtrack, and — if a photographer shoots stills on set — the key visual for hoardings and newspaper ads. One shoot, one look, many outputs: see [one shoot day, a month of content](/blog/one-shoot-a-month-of-content/) and our guide to [TV commercials vs digital ads](/blog/tvc-vs-digital-video-ads/).' },
        { type: 'h2', text: 'What decides the cost of each medium?' },
        { type: 'list', items: [
            '**TV** — the channel, the programme and time band, the number of spots, the season.',
            '**YouTube and Meta** — an auction: your budget, your targeting and how well the ad performs.',
            '**OTT** — the platform, the targeting and how many impressions you buy.',
            '**Cinema** — screens, cities, weeks and slot length.',
            '**Outdoor** — the site, its size and traffic, the booking period, plus printing and mounting.',
            '**Radio** — the station, the time of day and the number of spots.',
        ] },
        { type: 'p', text: 'Production is a separate budget — see [how much an ad film costs](/blog/ad-film-cost-in-india/).' },
        { type: 'h2', text: 'What do simple media plans look like?' },
        { type: 'list', items: [
            '**A restaurant in Hyderabad:** Instagram reels and ads within a few kilometres, a strong Google Business Profile and WhatsApp updates for regulars — see [restaurant video marketing](/blog/restaurant-food-video-marketing-hyderabad/).',
            '**A real estate launch:** YouTube and Meta lead ads, hoardings near the site and on the routes buyers use, and Telugu TV for larger projects — see [real estate video marketing](/blog/real-estate-video-marketing-hyderabad/).',
            '**A school or college admissions season:** YouTube and Instagram targeted to nearby areas, cinema screens and outdoor in the catchment — see [video for education institutes](/blog/video-marketing-for-education-institutes/).',
            '**A festive sale:** TV or OTT for reach, reels for offers and outdoor near stores, all with the same visual.',
        ] },
        { type: 'tip', text: 'Run the same message and the same visual across every medium at the same time. Seeing one idea on TV, on a hoarding and in a reel in the same week is what makes people remember it.' },
    ],
    faqs: [
        { q: 'Is TV still worth it for local businesses?', a: 'For brands that need wide reach across both states, Telugu TV still delivers it. Smaller local businesses usually get better value from targeted YouTube, Instagram and outdoor near their stores, adding TV for big seasons.' },
        { q: 'Can we show YouTube ads only in Hyderabad?', a: 'Yes. YouTube and Meta ads can be targeted by city, by an area around a location and by audience, so you pay only to reach the people near you.' },
        { q: 'Do we need a different ad for each platform?', a: 'Not a different idea, but different versions: lengths, aspect ratios, captions and calls to action that suit each platform. Plan them in one shoot.' },
        { q: 'How do we know which medium worked?', a: 'Give each medium its own tracking — a call number, an offer code, a WhatsApp link or a landing page — and ask new customers where they heard of you.' },
    ],
    sources: [
        { label: 'Google Ads Help — video ads on YouTube', url: 'https://support.google.com/google-ads/' },
        { label: 'Meta Business Help Centre', url: 'https://www.facebook.com/business/help' },
    ],
};

export default article;
