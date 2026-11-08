/** Text of "YouTube Ads for Small Businesses in India: A Starter Guide". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'YouTube ads are run from Google Ads using a video uploaded to your YouTube channel. The main formats are skippable in-stream ads (viewers can skip after five seconds, and with view-based bidding you pay when they watch 30 seconds or the whole ad if shorter, or interact), non-skippable in-stream ads, six-second bumper ads, in-feed video ads shown in search and suggestions, and ads in YouTube Shorts. A small business can target a city or radius, a language and an audience, set a daily budget it is comfortable with, and measure enquiries or sales — starting small and scaling what works.',
    keyPoints: [
        'Skippable ads: earn attention in five seconds.',
        'Bumpers (6 seconds) are great for reminders, not explanations.',
        'Target your service area and language precisely.',
        'Track enquiries and sales, not just views.',
    ],
    body: [
        { type: 'h2', text: 'What are the YouTube ad formats?' },
        {
            type: 'table',
            head: ['Format', 'How it works', 'Best for'],
            rows: [
                ['Skippable in-stream', 'Plays before, during or after videos; viewers can skip after 5 seconds', 'Telling a story, explaining, driving action'],
                ['Non-skippable in-stream', 'Short ads viewers can’t skip', 'Making sure the full message is seen'],
                ['Bumper', 'Non-skippable ads of up to 6 seconds', 'Reach and reminders'],
                ['In-feed video', 'Shown in YouTube search results, next to related videos and on the home feed', 'People already looking for your topic'],
                ['Shorts ads', 'Vertical ads between Shorts', 'Reaching mobile-first, younger audiences'],
            ],
            caption: 'Summary of Google’s format descriptions — check Google Ads Help for current details',
        },
        { type: 'h2', text: 'How do you pay for YouTube ads?' },
        { type: 'p', text: 'It depends on the goal and format. With view-based bidding on skippable ads, you pay for counted views — when someone watches 30 seconds (or the whole ad if it is shorter) or interacts with it. Reach-focused formats such as bumpers are usually bought per thousand impressions, and campaigns built for leads or sales optimise for conversions. You control the spend with daily or total campaign budgets.' },
        { type: 'h2', text: 'How do you target the right people?' },
        { type: 'list', items: [
            '**Location:** your city, a radius around your shop or office, or specific pin-code areas.',
            '**Language:** Telugu, Hindi, English — match the ad’s language to the audience.',
            '**Audiences:** interests, people actively researching your category, or custom audiences built from search terms.',
            '**Your own audiences:** past website visitors and people who watched your videos (remarketing).',
            '**Placements:** specific channels or videos where your customers spend time.',
        ] },
        { type: 'h2', text: 'How do you set up your first campaign?' },
        { type: 'steps', items: [
            'Upload the ad to your YouTube channel (it can be unlisted).',
            'Link the YouTube channel to a Google Ads account.',
            'Create a new campaign and choose the goal: awareness, consideration or leads and sales.',
            'Set the location, language, budget and dates.',
            'Choose audiences, or start broad within your location and let the system learn.',
            'Add the video, a headline, a call-to-action button and the website link.',
            'Set up conversion tracking for enquiries or purchases before launch.',
            'Review results weekly and shift budget to the best ads and audiences.',
        ] },
        { type: 'h2', text: 'What makes a YouTube ad work?' },
        { type: 'list', items: [
            'Show the brand and the main benefit within the first five seconds, before the skip button.',
            'Speak to one audience with one message.',
            'Make a 6-second bumper and a 15-second cut alongside the main ad — plan them in the [script](/blog/ad-film-script-writing/).',
            'Use subtitles and a clear call to action on screen.',
            'Make a vertical version for Shorts.',
        ] },
        { type: 'tip', text: 'Start with a modest budget for two to three weeks, compare two versions of the ad, and only then scale up the winner.' },
        { type: 'p', text: 'Paid ads work best alongside a healthy channel — see [YouTube SEO for brands](/blog/youtube-seo-for-brands/) — and should be judged on the right numbers: see [video ad metrics](/blog/video-ad-metrics/). CK Studio produces YouTube ads and runs campaigns — see our [social media and web design](/services/social-media-and-web-design/) service.' },
    ],
    faqs: [
        { q: 'How much should a small business spend on YouTube ads?', a: 'There is no minimum that suits everyone. Start with a daily budget you can sustain for a few weeks, measure cost per enquiry or sale, and increase spend on what works.' },
        { q: 'Do I need a YouTube channel to run YouTube ads?', a: 'Yes. Your ad video is uploaded to a YouTube channel, which is then linked to your Google Ads account. The video can be unlisted if you don’t want it on your public channel page.' },
        { q: 'Can I target only Hyderabad with YouTube ads?', a: 'Yes. You can target a city, a radius around a location, or specific areas, and combine that with language and audience targeting.' },
        { q: 'Which is better: a skippable or a bumper ad?', a: 'They do different jobs. Skippable ads can tell a fuller story and drive action; bumpers are short reminders that build reach. Many campaigns use both.' },
    ],
    sources: [
        { label: 'Google Ads Help — About video ad formats', url: 'https://support.google.com/google-ads/answer/2375464' },
        { label: 'Google Ads Help — About YouTube ads and view metrics', url: 'https://support.google.com/google-ads/answer/2375431' },
    ],
};

export default article;
