/** Text of "Influencer Marketing in India: How to Brief Creators and Stay Compliant (2026)". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'Influencer marketing works best when you choose creators whose audience matches your customers, give them a clear but flexible brief, agree deliverables, timelines and usage rights in writing, and measure real outcomes such as clicks, codes and enquiries. In India, paid or gifted posts must be clearly labelled (for example “Ad” or “Collaboration”) under ASCI’s guidelines and the government’s endorsement rules, and creators should only make claims they can stand behind.',
    keyPoints: [
        'Audience fit matters more than follower count.',
        'Brief the message and the must-haves; let creators keep their style.',
        'Put deliverables, usage rights and labelling in a written agreement.',
        'Every paid or gifted post must be clearly labelled.',
    ],
    body: [
        { type: 'p', text: '**This is general information, not legal advice.** Check the latest ASCI and Department of Consumer Affairs guidance for your campaign.' },
        { type: 'h2', text: 'How do you choose the right creators?' },
        { type: 'list', items: [
            'Their audience matches your customers — location, language, age and interests.',
            'Their content quality and tone fit your brand.',
            'Comments look genuine and engaged, not generic.',
            'They have worked with brands before without controversy.',
            'Smaller, local creators can deliver stronger trust than big names for city businesses.',
        ] },
        { type: 'h2', text: 'What should an influencer brief include?' },
        { type: 'steps', items: [
            'The goal: awareness, footfall, app installs, enquiries or sales.',
            'The one message to get across, and two or three supporting points.',
            'Must-haves: product shown in use, brand name said aloud, link or code.',
            'Must-avoids: competitor mentions, claims that are not proven.',
            'Deliverables: number and format of posts (Reels, Stories, YouTube), dates and drafts for review.',
            'Disclosure: the label to use and where it must appear.',
            'Usage rights: whether the brand can reuse the content in ads, for how long and where.',
            'Payment terms and what happens if timelines slip.',
        ] },
        { type: 'h2', text: 'What do the rules say about disclosure?' },
        { type: 'p', text: 'ASCI’s guidelines require influencers to label advertising content when there is a “material connection” with the brand — payment, free products, discounts, trips, gifts or a family or employment link. Approved labels include “Advertisement”, “Ad”, “Sponsored”, “Collaboration” and “Partnership”, and the label must be prominent, not buried in hashtags. Virtual influencers must also disclose that they are not real people.' },
        { type: 'p', text: 'The Central Consumer Protection Authority’s 2022 guidelines on misleading advertisements and endorsements apply to celebrities and influencers too, and the Department of Consumer Affairs’ “Endorsement Know-hows!” (2023) says that in videos the disclosure should appear in the video itself, in both audio and on screen — not only in the description. Endorsers are expected to have used or checked the product and its claims.' },
        { type: 'h2', text: 'How do you measure influencer campaigns?' },
        {
            type: 'table',
            head: ['Goal', 'What to measure'],
            rows: [
                ['Awareness', 'Reach, views, saves and shares'],
                ['Traffic', 'Clicks on a unique tracked link'],
                ['Sales', 'Orders using a creator-specific discount code'],
                ['Leads and footfall', 'Enquiries, WhatsApp messages or visits mentioning the creator'],
            ],
        },
        { type: 'h2', text: 'Should you reuse creator content in ads?' },
        { type: 'p', text: 'Creator videos often make excellent ads because they feel natural. Agree the usage rights before the post — which platforms, how long and whether paid ads are included — and keep the disclosure on the content when it runs as an ad. See our [playbook for Instagram and Facebook video ads](/blog/video-ads-for-local-businesses-instagram-facebook/).' },
        { type: 'tip', text: 'Ask for the creator’s audience insights (location, age, gender) as screenshots before you sign. They tell you more than follower counts.' },
        { type: 'p', text: 'CK Studio plans social media campaigns, produces brand content and runs [Meta ad campaigns](/services/social-media-and-web-design/) that can include creator content. See also our [social media content calendar](/blog/social-media-content-calendar/).' },
    ],
    faqs: [
        { q: 'Do influencers in India have to label paid posts?', a: 'Yes. ASCI’s guidelines and the government’s endorsement rules require clear labels such as “Ad”, “Sponsored” or “Collaboration” when there is a material connection with the brand.' },
        { q: 'Does a free product count as a paid partnership?', a: 'Yes. Free products, discounts, trips and gifts are material connections under ASCI’s guidelines, so the post must be labelled.' },
        { q: 'What are the penalties for misleading endorsements?', a: 'Under the CCPA’s 2022 guidelines, penalties can reach up to ₹10 lakh for a first violation and up to ₹50 lakh for repeat violations, and endorsers can be barred from endorsing for a period.' },
        { q: 'Are micro-influencers worth it for local businesses?', a: 'Often, yes. Local creators with smaller but engaged audiences in your city can bring more relevant customers than a large creator with a national following.' },
    ],
    sources: [
        { label: 'ASCI — codes and influencer guidelines', url: 'https://www.ascionline.in/' },
        { label: 'Mondaq — Endorsement Know-hows for celebrities, virtual influencers and influencers (2023)', url: 'https://mondaq.com/india/social-media/1283676/endorsement-know-how-guidelines-for-celebrities-virtual-influencers-and-influencers' },
        { label: 'AZB & Partners — The regulatory evolution of influencer advertising in India', url: 'https://www.azbpartners.com/bank/the-regulatory-evolution-of-influencer-advertising-in-india/' },
    ],
};

export default article;
