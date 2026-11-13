/** Text of "TVC vs Digital Video Ads: Which Does Your Brand Need in 2026?". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'Choose TV commercials (TVCs) for broad, simultaneous reach — launches, festive seasons and mass-market products — and digital video ads for precise targeting, smaller budgets and results you can measure. Most brands now plan one shoot that delivers a TV master plus shorter, vertical and square digital cuts, which costs far less than two separate productions.',
    keyPoints: [
        'TV: wide reach, fixed slots, mostly 10–30 second spots, checked by channels before airing.',
        'Digital: targeting by place, age and interest, with measurable views, clicks and leads.',
        'On phones, vertical video and the first two seconds matter most.',
        'One well-planned shoot can deliver both.',
    ],
    body: [
        { type: 'h2', text: 'What is the difference between a TVC and a digital video ad?' },
        {
            type: 'table',
            head: ['', 'TV commercial (TVC)', 'Digital video ad'],
            rows: [
                ['Where it runs', 'TV channels: cable, DTH and connected TV', 'YouTube, Instagram, Facebook, OTT apps and websites'],
                ['Typical lengths', '10, 20 or 30 seconds', 'From 6 seconds to a few minutes, depending on the format'],
                ['Shape', '16:9 widescreen', '9:16 vertical, 1:1 square, 4:5 and 16:9'],
                ['Targeting', 'By channel, programme and time slot', 'By location, age, interests, behaviour and more'],
                ['Measurement', 'Ratings and reach estimates', 'Views, clicks, leads and sales you can track'],
                ['Rules', 'Broadcast advertising codes and ASCI’s code; channels check ads before airing', 'Platform ad policies and ASCI’s code'],
                ['Changing it later', 'A new file must go to every channel', 'Creatives can be swapped any day'],
            ],
        },
        { type: 'h2', text: 'When does a TV commercial make sense?' },
        { type: 'list', items: [
            'You sell to a mass market across a state or the whole country.',
            'You are launching a product and want everyone to see it at once.',
            'Festive seasons and big cricket or film events, when families watch TV together.',
            'Regional channels in Telugu and other languages reach audiences that digital can miss.',
        ] },
        { type: 'h2', text: 'When are digital video ads the better choice?' },
        { type: 'list', items: [
            'Your audience is specific — one city, one industry, one age group.',
            'You want leads or sales you can count.',
            'Your budget is smaller, or you want to start small and scale what works.',
            'You want to test several messages and keep the best one.',
        ] },
        { type: 'p', text: 'For shops, clinics, schools and builders, our [playbook for Instagram and Facebook video ads](/blog/video-ads-for-local-businesses-instagram-facebook/) covers targeting, budgets and creative.' },
        { type: 'h2', text: 'How should a digital ad be made differently from a TVC?' },
        { type: 'list', items: [
            '**Hook in the first two seconds** — on a phone, people decide almost instantly whether to keep watching.',
            '**Design for sound off** — add captions and on-screen text.',
            '**Shoot for vertical** — or frame wide shots so a 9:16 crop still works.',
            '**Show the brand early**, not only at the end.',
            '**Make several short versions** so you can test and keep the winner.',
        ] },
        { type: 'h2', text: 'Can one shoot deliver both a TVC and digital ads?' },
        { type: 'p', text: 'Yes — and it is the most efficient way to work. Plan it in the script and storyboard:' },
        { type: 'steps', items: [
            'Write the 30-second TV story first, then mark which scenes make the 15- and 6-second cuts.',
            'Frame shots so they can be cropped to 9:16 and 1:1, or shoot vertical versions of key scenes.',
            'Capture extra close-ups and product shots to use as social media hooks.',
            'Record voice-overs for every language in one session.',
            'Deliver a broadcast master plus every digital size from the same edit — our [video size cheat sheet](/blog/video-ad-sizes-aspect-ratios-cheat-sheet/) lists them.',
        ] },
        { type: 'h2', text: 'How do you measure TV and digital ads?' },
        {
            type: 'table',
            head: ['Question', 'TV', 'Digital'],
            rows: [
                ['How many people saw it?', 'Reach and ratings estimates from the media plan', 'Impressions and reach reported by the platform'],
                ['Did they watch it?', 'Not directly measured', 'View rate, average watch time, drop-off point'],
                ['Did they act?', 'Store sales, search and website spikes after airing', 'Clicks, calls, WhatsApp messages, leads and sales'],
                ['Which version worked best?', 'Hard to compare', 'Easy: run versions side by side'],
            ],
        },
        { type: 'p', text: 'The strongest campaigns use both: TV for reach, digital for targeting and proof, and the learnings from digital to sharpen the next TV spot.' },
        { type: 'tip', text: 'If your budget allows only one, start with digital. You can test messages cheaply, then put the proven one on TV.' },
        { type: 'p', text: 'CK Studio produces [TVCs and digital ad films](/services/ad-films-and-commercials/) in Hyderabad, with every version — TV, YouTube, Reels and cinema — planned from one script.' },
        { type: 'p', text: 'Related guides: [how to run your ad in cinemas](/blog/cinema-advertising-in-india/) and [testing ad variations](/blog/ai-ad-variations-and-creative-testing/).' },
    ],
    faqs: [
        { q: 'How long is a typical TV ad in India?', a: 'Most TV spots are 10, 20 or 30 seconds long. Thirty seconds is the common hero length, with shorter cuts used to repeat the message more often.' },
        { q: 'Do TV commercials need CBFC certification?', a: 'Normally no. The CBFC certifies films, trailers and promos for exhibition. TV commercials must follow the broadcast advertising code and ASCI’s code, and TV channels check ads before airing them. Film trailers shown on TV are different — they carry a CBFC certificate.' },
        { q: 'Can I use my TV ad on YouTube?', a: 'Yes, but it performs better with shorter and vertical versions, captions, and the brand and hook moved into the first few seconds.' },
        { q: 'Which is cheaper, TV or digital advertising?', a: 'Digital usually needs a smaller starting budget because you can spend small amounts and target precisely. TV airtime is bought by channel and slot, so the minimum spend is higher, but the reach is broader.' },
    ],
    sources: [
        { label: 'ASCI — Advertising Standards Council of India', url: 'https://www.ascionline.in/' },
        { label: 'Meta Ads Guide — video ad specifications', url: 'https://www.facebook.com/business/ads-guide' },
        { label: 'Google Ads Help — video ads', url: 'https://support.google.com/google-ads/' },
    ],
};

export default article;
