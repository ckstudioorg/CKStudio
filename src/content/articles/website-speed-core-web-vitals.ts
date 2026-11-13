/** Text of "Why Is My Website Slow? Core Web Vitals and PageSpeed Scores Explained". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'Websites are usually slow because of oversized images and videos, too many add-on scripts, heavy themes or page builders, and weak hosting. Google measures real visitors’ experience with three Core Web Vitals: how quickly the main content appears (LCP, good at 2.5 seconds or less), how quickly the page responds to taps (INP, good at 200 milliseconds or less) and how much the layout jumps (CLS, good at 0.1 or less). Test with PageSpeed Insights and fix the biggest items first.',
    keyPoints: [
        'Images are the most common cause, and the easiest to fix.',
        'Core Web Vitals measure loading, responsiveness and visual stability.',
        'Judge by the mobile result: most visitors are on phones.',
        'Speed helps visitors first; it is a modest ranking factor, not a magic one.',
    ],
    body: [
        { type: 'h2', text: 'What are Core Web Vitals?' },
        { type: 'table', head: ['Measure', 'What it tells you', 'Good', 'Poor'], rows: [
            ['LCP — Largest Contentful Paint', 'How long until the main picture or text block is visible', '2.5 s or less', 'More than 4 s'],
            ['INP — Interaction to Next Paint', 'How quickly the page reacts when someone taps or types', '200 ms or less', 'More than 500 ms'],
            ['CLS — Cumulative Layout Shift', 'How much things move around while loading', '0.1 or less', 'More than 0.25'],
        ] },
        { type: 'p', text: 'Google assesses these from real visits, at the 75th percentile: three out of four visits should meet the “good” level. They are part of how Google judges page experience.' },
        { type: 'h2', text: 'How do you test your site?' },
        { type: 'steps', items: [
            '**Open PageSpeed Insights** (pagespeed.web.dev) and enter your page address.',
            '**Look at the mobile tab first**.',
            '**Read the top section** — “real user” data, shown when your site has enough visitors. This is what counts.',
            '**Read the performance score below** — a laboratory test from 0 to 100 on a simulated mid-range phone and slow connection. Useful for diagnosis, but it varies from run to run.',
            '**Open the suggestions** — they are listed with the estimated saving.',
            '**Test your key pages**, not only the home page: a service page, a blog article, the contact page.',
            '**Check Search Console** — its Core Web Vitals report groups problem pages across the site.',
        ] },
        { type: 'h2', text: 'What usually makes a site slow, and what fixes it?' },
        { type: 'table', head: ['Cause', 'Sign', 'Fix'], rows: [
            ['Oversized images', 'Photos of several megabytes; slow LCP', 'Resize to the displayed size, use modern formats (WebP or AVIF), compress'],
            ['Images loading all at once', 'Long pages with many pictures', 'Lazy-load images below the first screen'],
            ['Background or autoplay video', 'Heavy first load', 'Use a poster image; load the video on tap; host on a video platform'],
            ['Too many third-party scripts', 'Chat widgets, trackers, pop-ups, social feeds', 'Remove what you do not use; load the rest later'],
            ['Heavy themes and page builders', 'Large code files on every page', 'A lighter theme; fewer plugins'],
            ['Web fonts', 'Text invisible or jumping while fonts load', 'Fewer fonts and weights; host them yourself; preload the main one'],
            ['Slow hosting', 'Long wait before anything appears', 'Better hosting, caching, a content delivery network (CDN)'],
            ['No size set on images and ads', 'Content jumping (CLS)', 'Give images and embeds fixed dimensions'],
            ['Heavy JavaScript', 'Taps feel delayed (INP)', 'Reduce and split code; delay non-essential work'],
        ] },
        { type: 'h2', text: 'Which fixes should come first?' },
        { type: 'list', items: [
            '**The main image at the top of the page** — make it small in file size and load it first. This alone often fixes LCP.',
            '**All other images** — compress and lazy-load.',
            '**Remove unused plugins, widgets and tracking tags**.',
            '**Turn on caching and compression** with your host.',
            '**Fix layout jumps** by setting sizes for images, embeds and banners.',
        ] },
        { type: 'p', text: 'These five handle most small-business sites. Deeper work on code is worth it after them.' },
        { type: 'h2', text: 'Does speed affect Google ranking?' },
        { type: 'p', text: 'Yes, but modestly. Google has said page experience is one of many signals, and that relevant, helpful content matters more. A fast page with thin content will not outrank a useful one. The stronger reason to care is your visitors: on a slow page people leave before they see your work, particularly on mobile data. For local businesses, content and your [Google Business Profile](/blog/google-business-profile-guide-hyderabad/) usually move rankings more than shaving the last tenth of a second.' },
        { type: 'h2', text: 'What score should you aim for?' },
        { type: 'p', text: 'Aim for “good” on all three Core Web Vitals in real-user data. Treat the 0–100 laboratory score as a guide: 90 or above is rated good by the tool, but chasing 100 often costs more than it returns. Compare your pages with your competitors’ rather than with a perfect number.' },
        { type: 'h2', text: 'How do you keep a site fast?' },
        { type: 'list', items: [
            '**Set a rule for uploads** — every image resized and compressed before it goes on the site.',
            '**Review add-ons twice a year** and remove what is unused.',
            '**Test after every major change** — a new plugin or a new home page banner.',
            '**Embed videos sensibly** — see [YouTube SEO for brands](/blog/youtube-seo-for-brands/) for hosting on YouTube.',
            '**Keep software updated**.',
        ] },
        { type: 'p', text: 'Speed is one part of a healthy site; the [small business website checklist](/blog/small-business-website-checklist/) covers the rest. We build fast, simple sites as part of [social media and web design](/services/social-media-and-web-design/).' },
        { type: 'tip', text: 'Test on a real mid-range phone using mobile data, not on office Wi-Fi with a new laptop. That is how most of your visitors experience the site.' },
    ],
    faqs: [
        { q: 'What is a good PageSpeed score?', a: 'The tool rates 90–100 as good, 50–89 as needing improvement and below 50 as poor. The real-user Core Web Vitals assessment at the top of the report matters more than this laboratory score.' },
        { q: 'Why is my mobile score lower than desktop?', a: 'The mobile test simulates a mid-range phone on a slower connection, which is far harder to satisfy than a desktop computer on fast internet. It is also closer to reality for most visitors.' },
        { q: 'Why does my score change each time I test?', a: 'Laboratory tests are affected by server response at that moment, third-party scripts and network conditions. Run it a few times and look at the trend, not a single number.' },
        { q: 'Will better hosting fix a slow site?', a: 'It helps if the server is the bottleneck. If the pages themselves carry huge images and many scripts, faster hosting will not solve it. Fix the page weight first.' },
    ],
    sources: [
        { label: 'web.dev — Web Vitals', url: 'https://web.dev/articles/vitals' },
        { label: 'Google Search Central — Understanding Core Web Vitals and Google search results', url: 'https://developers.google.com/search/docs/appearance/core-web-vitals' },
        { label: 'PageSpeed Insights', url: 'https://pagespeed.web.dev/' },
    ],
};

export default article;
