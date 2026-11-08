/** Text of "Video Ad Metrics: How to Measure What Your Ads Achieve". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'Measure a video ad against the job it was made for. For awareness, look at reach, frequency and how much of the video people watch. For consideration, look at views, view rate, watch time and clicks. For sales or leads, look at conversions, cost per result and return on ad spend. Platforms count a “view” differently — on YouTube, a skippable in-stream ad’s view (now called a TrueView view in Google Ads) counts when someone watches 30 seconds, or the whole ad if it is shorter, or interacts with it — so compare like with like, and judge results over weeks, not hours.',
    keyPoints: [
        'Pick the goal first; the metrics follow from it.',
        'Watch-through (how much people watch) shows if the creative works.',
        'Click-through and conversions show if the ad drives action.',
        'Compare similar formats and periods — not apples with oranges.',
    ],
    body: [
        { type: 'h2', text: 'Which metrics match which goal?' },
        {
            type: 'table',
            head: ['Goal', 'Main metrics', 'What they tell you'],
            rows: [
                ['Awareness', 'Reach, impressions, frequency, cost per thousand (CPM)', 'How many people saw it, how often, at what cost'],
                ['Attention', 'Watch time, average watch percentage, completion rate', 'Whether the creative holds people'],
                ['Consideration', 'Views, view rate, cost per view (CPV), clicks, click-through rate (CTR)', 'Whether people chose to watch and wanted more'],
                ['Action', 'Conversions, cost per lead or sale, return on ad spend (ROAS)', 'Whether the ad produced business results'],
                ['Brand impact', 'Brand lift (recall, awareness, consideration surveys)', 'Whether people remember and think differently about the brand'],
            ],
        },
        { type: 'h2', text: 'What counts as a “view”?' },
        { type: 'p', text: 'Each platform defines a view differently. In Google Ads, a skippable in-stream view — renamed **TrueView views** in 2025 — counts when someone watches at least 30 seconds of the ad, or all of it if it is shorter, or interacts with it; in-feed and Shorts ads use a shorter threshold. Bumper and non-skippable ads don’t earn TrueView views and are usually judged on reach and frequency. Instagram and Facebook report several kinds of video plays. Always read the platform’s definition before comparing numbers.' },
        { type: 'h2', text: 'Which numbers show whether the creative works?' },
        { type: 'list', items: [
            '**The first seconds:** how many people stay past the opening. A weak hook shows up as a steep early drop.',
            '**Watch percentage and completion:** the share of the ad people actually see — check where the drop happens.',
            '**Click-through rate:** whether the message and call to action make people want to act.',
            '**Comments, shares and saves** on social platforms: a sign that people found it worth passing on.',
        ] },
        { type: 'h2', text: 'How do you measure sales and leads?' },
        { type: 'steps', items: [
            'Decide what counts as a result: an enquiry form, a call, a WhatsApp message, an order, a store visit.',
            'Set up conversion tracking on your website or app before the campaign starts.',
            'Use separate tracking links for each platform and campaign.',
            'Record leads from calls and WhatsApp in a simple sheet, with where they came from.',
            'Calculate cost per result and, where possible, the revenue it produced.',
        ] },
        { type: 'h2', text: 'How long before you judge an ad?' },
        { type: 'p', text: 'Give it enough time and spend to learn: platforms need a period to find the right audience, and early numbers swing a lot. Change one thing at a time — the hook, the audience or the call to action — so you know what made the difference. Test two or three versions of the creative rather than one.' },
        { type: 'h2', text: 'What mistakes make video ad results look worse (or better) than they are?' },
        { type: 'list', items: [
            'Comparing views across platforms that count views differently.',
            'Judging a brand ad on next-day sales, or a performance ad only on views.',
            'Ignoring frequency: the same person seeing an ad twenty times inflates impressions.',
            'Counting leads without checking their quality.',
            'Changing everything at once, so no lesson can be learned.',
        ] },
        { type: 'tip', text: 'Before launch, write down the one number that will tell you the ad worked, and the target. It keeps everyone honest when the reports arrive.' },
        { type: 'p', text: 'Running ads on YouTube? Start with our [YouTube ads guide for small businesses](/blog/youtube-ads-for-small-businesses-india/), and for Instagram and Facebook see [video ads for local businesses](/blog/video-ads-for-local-businesses-instagram-facebook/). CK Studio makes and optimises video ads — see our [social media and web design](/services/social-media-and-web-design/) service.' },
    ],
    faqs: [
        { q: 'What is a good view rate for a YouTube ad?', a: 'It varies by format, audience, length and industry, so there is no universal number. Compare your ads with each other and with your own past campaigns, and improve the hook and targeting.' },
        { q: 'What is CPV?', a: 'Cost per view: what you pay on average for each view counted by the platform. On YouTube it applies to view-based bidding, such as skippable in-stream ads.' },
        { q: 'What is brand lift?', a: 'A measurement, usually by survey, of whether people who saw an ad remember the brand or think differently about it compared with a similar group who didn’t see it.' },
        { q: 'Which is the most important video ad metric?', a: 'The one that matches the ad’s goal: reach and frequency for awareness, watch time and views for consideration, and conversions and cost per result for sales or leads.' },
    ],
    sources: [
        { label: 'Google Ads Help — About YouTube ads and view metrics', url: 'https://support.google.com/google-ads/answer/2375431' },
        { label: 'Google Ads Help — About video ad formats', url: 'https://support.google.com/google-ads/answer/2375464' },
    ],
};

export default article;
