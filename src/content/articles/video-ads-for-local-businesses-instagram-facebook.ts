/** Text of "Video Ads for Local Businesses on Instagram and Facebook: A Practical 2026 Playbook". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'For local businesses, the most effective Meta video ads are short vertical Reels — about 10 to 30 seconds — in the local language, with a hook in the first two seconds, captions, a clear offer and a “Send WhatsApp message” or “Call now” button, shown to people within a few kilometres. Start with a small daily budget, test two or three versions, keep the one with the lowest cost per genuine enquiry, and refresh the videos every few weeks.',
    keyPoints: [
        'Vertical, short, local-language video with captions.',
        'Hook in two seconds, one offer, one action.',
        'Target a tight radius around your business.',
        'Measure cost per genuine enquiry, not likes.',
    ],
    body: [
        { type: 'h2', text: 'Why do video ads work so well for local businesses?' },
        { type: 'p', text: 'People choose local businesses on trust. A short video shows your place, your people and your work in a way a photo cannot, and Meta’s targeting lets you show it only to people near you — so even a small budget reaches the right neighbourhood.' },
        { type: 'h2', text: 'What is the best structure for a local video ad?' },
        { type: 'steps', items: [
            '**Hook (0–2 seconds):** movement, a face or a bold line — “New in Kompally?”',
            '**The need:** the problem or desire your customer has.',
            '**The proof:** your place, your team, your product or a happy customer (with consent).',
            '**The offer:** one clear reason to act now.',
            '**The action:** “Message us on WhatsApp”, “Call now” or “Visit today”, with the location.',
        ] },
        { type: 'h2', text: 'How should the campaign be set up?' },
        { type: 'list', items: [
            '**Objective:** choose messages, leads or calls — not just views — if you want enquiries.',
            '**Click-to-WhatsApp:** many customers prefer to message; a “Send WhatsApp message” button opens a chat with you directly.',
            '**Location:** a radius around your business that matches how far customers will travel.',
            '**Language:** make Telugu, Hindi or English versions for the audiences you serve.',
            '**Placements:** Reels, Stories and feeds, with a version made for each shape.',
            '**Schedule:** run ads when you can answer messages quickly.',
        ] },
        { type: 'h2', text: 'How much should a local business spend?' },
        { type: 'p', text: 'Start with an amount you are comfortable spending every day for two to three weeks, split across two or three video versions. Then move the budget to the version with the lowest cost per genuine enquiry. Raising the budget slowly works better than large jumps.' },
        { type: 'h2', text: 'Video ideas by type of business' },
        {
            type: 'table',
            head: ['Business', 'Video ideas'],
            rows: [
                ['Restaurant or café', 'A signature dish being made, the ambience at night, a weekend offer'],
                ['Clinic or hospital', 'The doctor introducing a service, a clean facility tour, how to book — avoid cure claims'],
                ['School or coaching centre', 'Campus tour, teachers, results you can document, admission dates'],
                ['Real estate', 'Site and show-flat tours, drone location shots, the RERA number (see [real estate video](/blog/real-estate-video-marketing-hyderabad/))'],
                ['Retail showroom', 'New arrivals, a festive offer, staff helping a customer'],
                ['Salon or gym', 'Before-and-after with consent, trainer tips, a trial offer'],
            ],
        },
        { type: 'h2', text: 'What should you measure?' },
        { type: 'list', items: [
            'Cost per message, call or lead',
            'How many of those enquiries were genuine and turned into customers',
            'Which video, offer and audience performed best',
            'How quickly your team replied — slow replies waste good ads',
        ] },
        { type: 'h2', text: 'What rules should you follow?' },
        { type: 'p', text: 'Ads must be truthful and must not mislead, under ASCI’s code. Health, education and property ads need extra care with claims. If you pay or gift influencers, ASCI’s guidelines require their posts to be clearly labelled — for example with “Ad” or “Collaboration”.' },
        { type: 'h2', text: 'What are the most common mistakes?' },
        { type: 'list', items: [
            'Using a wide TV ad unchanged on Reels',
            'No captions, so silent viewers miss the message',
            'Boosting posts for likes when you need enquiries',
            'Targeting the whole city when customers come from a few kilometres away',
            'Running the same video for months until people stop noticing it',
        ] },
        { type: 'tip', text: 'Film three hooks for the same ad — a question, a bold claim you can prove, and a surprising visual. Run all three and let the results choose.' },
        { type: 'p', text: 'CK Studio plans social media, creates Reels and runs [digital ad campaigns on Meta](/services/social-media-and-web-design/) for businesses in Hyderabad. See our [video size cheat sheet](/blog/video-ad-sizes-aspect-ratios-cheat-sheet/) or [talk to us](/#enquiry).' },
    ],
    faqs: [
        { q: 'Are Instagram ads or Facebook ads better for a local business?', a: 'Both run from the same Meta ads system, and the same video can appear on both. Let Meta place the ads across Instagram and Facebook, then check which placements bring genuine enquiries.' },
        { q: 'How long should a Reel ad be?', a: 'Usually 10 to 30 seconds. Put the hook in the first two seconds and the offer before most people scroll away.' },
        { q: 'Can I get WhatsApp enquiries from ads?', a: 'Yes. Click-to-WhatsApp ads add a “Send WhatsApp message” button that opens a chat with your business directly.' },
        { q: 'How often should I change my ad videos?', a: 'When results start to drop — often every few weeks for an active local campaign. Keep a few fresh hooks ready to rotate in.' },
    ],
    sources: [
        { label: 'Meta Ads Guide — specifications for Facebook and Instagram ads', url: 'https://www.facebook.com/business/ads-guide' },
        { label: 'Meta Business Help Centre', url: 'https://www.facebook.com/business/help' },
        { label: 'ASCI — codes and influencer guidelines', url: 'https://www.ascionline.in/' },
    ],
};

export default article;
