/** Text of "Video Ad Sizes and Aspect Ratios: 2026 Cheat Sheet for YouTube, Instagram, Facebook, TV and Cinema". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'Use 9:16 vertical (1080×1920) for Reels, Stories and YouTube Shorts; 4:5 (1080×1350) or 1:1 (1080×1080) for feeds; 16:9 (1920×1080 or larger) for YouTube in-stream, TV and websites; and a DCP (2K Flat 1998×1080 or 2K Scope 2048×858) for cinema. On YouTube, bumper ads run up to 6 seconds, non-skippable in-stream ads are typically up to 15 seconds, and skippable ads can be skipped after 5 seconds.',
    keyPoints: [
        '9:16 for anything full-screen on a phone.',
        '4:5 or 1:1 for scrolling feeds.',
        '16:9 for YouTube in-stream, TV, websites and cinema.',
        'Keep text and logos out of the top and bottom edges of vertical video.',
    ],
    body: [
        { type: 'h2', text: 'Video sizes by platform' },
        {
            type: 'table',
            head: ['Placement', 'Aspect ratio', 'Recommended size', 'Notes'],
            rows: [
                ['Instagram and Facebook Reels', '9:16', '1080×1920', 'Keep key text away from the top and bottom'],
                ['Instagram and Facebook Stories', '9:16', '1080×1920', 'Full-screen, sound often on'],
                ['Instagram and Facebook feed', '4:5 or 1:1', '1080×1350 or 1080×1080', '4:5 takes more of the screen'],
                ['YouTube Shorts', '9:16', '1080×1920', 'Vertical, short'],
                ['YouTube in-stream ads', '16:9', '1920×1080 or higher', 'Vertical and square are also accepted'],
                ['Website and LinkedIn', '16:9 or 1:1', '1920×1080 or 1080×1080', 'Add captions'],
                ['TV', '16:9', '1920×1080 (HD)', 'Follow each channel’s technical spec sheet'],
                ['Cinema', 'Flat or Scope', '2K Flat 1998×1080, 2K Scope 2048×858', 'Delivered as a [DCP](/blog/what-is-a-dcp-cinema-delivery-guide/)'],
            ],
            caption: 'Recommended sizes — check each platform’s current guide before delivery',
        },
        { type: 'h2', text: 'How long can each video ad be?' },
        {
            type: 'table',
            head: ['Format', 'Length', 'Good for'],
            rows: [
                ['YouTube bumper ad', 'Up to 6 seconds, cannot be skipped', 'Reminders and reach'],
                ['YouTube non-skippable in-stream', 'Typically up to 15 seconds', 'A complete short message'],
                ['YouTube skippable in-stream', 'Skippable after 5 seconds; often 15 seconds to 3 minutes', 'Stories and consideration'],
                ['Reels ads', 'Short — 10 to 30 seconds works best', 'Hooks, offers, product demos'],
                ['TV commercial', '10, 20 or 30 seconds', 'Mass reach'],
            ],
        },
        { type: 'h2', text: 'What are safe zones in vertical video?' },
        { type: 'p', text: 'On Reels and Stories, the app covers the top of the screen with the profile name and the bottom with captions, buttons and the call to action. Meta’s guidance for Reels ads is commonly given as keeping roughly the top 14% and the bottom 35% of the frame — and about 6% on each side — free of text, logos and faces. Put the important things in the middle.' },
        { type: 'h2', text: 'Which technical settings should you use?' },
        { type: 'list', items: [
            'File type: MP4 or MOV with H.264 (or H.265 where accepted)',
            'Frame rate: keep the frame rate you shot at (often 24 or 25 fps); TV channels state theirs',
            'Audio: clear stereo, mixed for phone speakers for social and to the channel’s loudness spec for TV',
            'Captions: burned in for social media, or a separate subtitle file where supported',
        ] },
        { type: 'h2', text: 'How do you make every size from one edit?' },
        { type: 'steps', items: [
            'Decide every size and length before the shoot.',
            'Frame wide shots with space around the subject so 9:16 and 4:5 crops still work.',
            'Keep text and logos as separate graphic layers.',
            'Edit the hero 16:9 version, then re-frame shot by shot for 9:16 and 4:5 — do not just crop the centre.',
            'Reposition text into each format’s safe zone and export each version separately.',
        ] },
        { type: 'h2', text: 'A delivery checklist before you send the files' },
        { type: 'list', items: [
            'Every version named clearly: brand, title, length, ratio, language and version number',
            'Safe zones checked on a phone for every vertical version',
            'Captions spelled correctly and timed to the voice',
            'Logo, offer, price and legal lines correct in every language',
            'Audio checked on phone speakers and headphones',
            'Thumbnail or cover frame chosen for each platform',
        ] },
        { type: 'tip', text: 'Watch every vertical version on a real phone, inside the app, before it goes live. Safe-zone problems are obvious there and invisible in an editing suite.' },
        { type: 'p', text: 'CK Studio delivers every size and length from one plan — TV, YouTube, Reels and cinema. See [TVC vs digital video ads](/blog/tvc-vs-digital-video-ads/) and our [ad films and commercials](/services/ad-films-and-commercials/) service.' },
    ],
    faqs: [
        { q: 'What is the best size for Instagram Reels ads?', a: '9:16 vertical at 1080×1920 pixels, with key text and logos kept away from the top and bottom of the frame where the app’s buttons and captions appear.' },
        { q: 'How long is a YouTube bumper ad?', a: 'Up to 6 seconds, and viewers cannot skip it. Bumpers work best as short reminders alongside longer ads.' },
        { q: 'Can I use one video for all platforms?', a: 'You can, but it performs better when each platform gets its own version: vertical for Reels and Shorts, 4:5 for feeds and 16:9 for YouTube and TV, each with text placed for that format.' },
        { q: 'What is the difference between 2K Flat and Scope in cinema?', a: 'Flat (1998×1080) is the wider-than-TV standard cinema frame; Scope (2048×858) is the extra-wide format. The DCP is made in the one that matches the film’s framing.' },
    ],
    sources: [
        { label: 'Meta Ads Guide — specifications for Facebook and Instagram ads', url: 'https://www.facebook.com/business/ads-guide' },
        { label: 'Google Ads Help — video ads on YouTube', url: 'https://support.google.com/google-ads/' },
        { label: 'YouTube Help', url: 'https://support.google.com/youtube/' },
    ],
};

export default article;
