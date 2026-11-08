/** Text of "UGC Ads: What They Are and How Indian Brands Use Them". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'UGC ads are ads made to look and feel like ordinary people’s phone videos — reviews, unboxings, routines — usually made by creators who are paid to produce content for the brand’s own ads rather than to post to their followers. They work because they feel personal and native to reels feeds. Get written usage rights for every video, keep claims honest and provable, and follow ASCI’s disclosure guidelines whenever a creator posts paid content on their own account.',
    keyPoints: [
        'UGC creators are paid for content; influencers are paid for content plus their audience.',
        'UGC suits demonstrations, reviews and testing many hooks quickly.',
        'Get written usage rights: platforms, paid ads, period, edits.',
        'Never present actors or paid creators as independent customers.',
    ],
    body: [
        { type: 'h2', text: 'How are UGC ads different from influencer marketing?' },
        {
            type: 'table',
            head: ['', 'UGC creator', 'Influencer'],
            rows: [
                ['What you pay for', 'The content', 'The content and their audience’s attention'],
                ['Where it’s posted', 'Your ads and your brand pages', 'Their own account (sometimes also your ads)'],
                ['Do followers matter?', 'No', 'Yes'],
                ['Disclosure', 'Runs as your ad, labelled by the platform', 'The creator must label it clearly as paid (ASCI guidelines)'],
                ['Rights', 'A usage licence agreed in writing', 'Depends on the contract'],
            ],
        },
        { type: 'p', text: 'For influencer campaigns, see our [influencer marketing guide](/blog/influencer-marketing-india-guide/).' },
        { type: 'h2', text: 'When do UGC ads work best?' },
        { type: 'list', items: [
            '**Products people want to see in real use** — beauty, food, gadgets, home products, apps.',
            '**Testing ideas quickly** — many hooks and angles from several creators, then spending more on the winners.',
            '**Building trust** for new brands without a famous face.',
            '**Alongside brand films** — polished films build the brand; UGC-style ads drive action in the feed.',
        ] },
        { type: 'h2', text: 'How do you brief UGC creators?' },
        { type: 'steps', items: [
            '**The product and one key message** — what you want people to remember.',
            '**The audience** — who the video is speaking to.',
            '**Must-say and must-not-say** — approved claims, and anything they can’t promise.',
            '**Hook ideas** — two or three opening lines or moments to try.',
            '**Format** — vertical 9:16, length, captions, natural light, and no music if you will add a licensed track later.',
            '**Deliverables** — raw clips plus edits, with alternative hooks.',
            '**Usage rights, fee and deadline**, agreed in writing before they start.',
        ] },
        { type: 'h2', text: 'What rules apply in India?' },
        { type: 'list', items: [
            '**Honest claims.** Ads must be truthful and claims provable under the ASCI code and consumer protection law. If a creator says “this cleared my skin in a week” in your ad, it is your claim.',
            '**Disclosure on creators’ own accounts.** When a creator posts paid or gifted content on their own profile, ASCI’s influencer guidelines require a clear, upfront label such as #ad, #collab or #sponsored.',
            '**No fake customers.** Don’t present actors or paid creators as independent customers giving unbiased reviews. Real customers’ videos need their permission before you use them.',
            '**AI-made people count too** — virtual or AI-generated presenters in ads should be disclosed (see [AI in ads: rules and labelling](/blog/ai-in-ads-india-rules-labelling-consent/)).',
        ] },
        { type: 'h2', text: 'What should the usage agreement cover?' },
        { type: 'list', items: [
            'Which platforms, and whether the video can run as a paid ad.',
            'How long you may use it, and in which countries.',
            'Whether you may edit, cut down, add captions or combine it with other footage.',
            'Whether ads may run from the creator’s handle (partnership or “whitelisted” ads).',
            'Exclusivity with competitors, payment, and any extra fees for extended use.',
        ] },
        { type: 'h2', text: 'Can a studio make UGC-style ads?' },
        { type: 'p', text: 'Yes. A production studio can cast and direct creators, shoot several hooks in one session and edit many variations quickly — while keeping the natural, phone-shot feel. Done well, it combines the trust of UGC with the consistency of a brand shoot. Keep it honest, though: a scripted ad is an ad, even when it looks casual. Our guide to [Instagram reels for brands](/blog/instagram-reels-for-brands/) covers the format.' },
        { type: 'tip', text: 'Ask every creator for three different opening lines on each video. The hook is the part you will test most — and the part that decides whether anyone keeps watching.' },
    ],
    faqs: [
        { q: 'Are UGC ads better than professional ads?', a: 'They do a different job. UGC-style ads often perform well in feeds because they feel personal; professional films build the brand and work on TV, YouTube and cinema. Most brands need both.' },
        { q: 'Do UGC creators need a big following?', a: 'No. You are paying for the content and how natural it feels on camera, not for their audience.' },
        { q: 'Do we need to label UGC ads?', a: 'Ads that run from your brand account are shown as ads by the platform. When creators post paid content on their own accounts, ASCI’s guidelines require a clear disclosure label.' },
        { q: 'Can we use a customer’s review video in our ads?', a: 'Only with the customer’s permission, ideally in writing, covering where and for how long you will use it.' },
    ],
    sources: [
        { label: 'ASCI — codes and influencer guidelines', url: 'https://www.ascionline.in/' },
        { label: 'Meta Business Help Centre', url: 'https://www.facebook.com/business/help' },
    ],
};

export default article;
