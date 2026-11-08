/** Text of "One Shoot Day, a Month of Content: How to Plan a Content Shoot". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'Plan the month before you shoot: choose three or four content themes, list 15–30 short pieces with their hooks, group them by location and outfit, and film set-up by set-up instead of video by video. While the lights are up, capture extra b-roll, stills and short talking-head answers. One focused day can then be edited into weeks of reels, stories, posts and ads that share one consistent look.',
    keyPoints: [
        'Plan every piece and its hook before the shoot.',
        'Film by set-up, not by video — it is far faster.',
        'Change one visible detail between batches so posts don’t look identical.',
        'Edit in batches, and leave room for timely posts.',
    ],
    body: [
        { type: 'h2', text: 'Why batch content into one shoot?' },
        { type: 'list', items: [
            '**Lower cost per piece** — crew, lights and locations are set up once.',
            '**A consistent look** — the same light, grade and style across the month.',
            '**Less disruption** — your team and space are busy for one day, not every week.',
            '**Better quality** — time to plan hooks and scripts instead of filming in a rush.',
        ] },
        { type: 'h2', text: 'How do you plan the content?' },
        { type: 'steps', items: [
            '**Pick your themes** — for example products, how-to tips, behind the scenes, customer stories and offers.',
            '**Map the month** — launches, festivals and events; see the [social media content calendar](/blog/social-media-content-calendar/) and the [festival marketing calendar](/blog/festival-marketing-calendar-telangana-andhra/).',
            '**Write a hook for every piece** — the first line or image that stops the scroll; see [Instagram reels for brands](/blog/instagram-reels-for-brands/).',
            '**Choose formats** — reels, stories, carousels from stills, talking heads, ads.',
            '**Outline each piece** in a few lines, not full scripts.',
            '**Group everything by set-up** — the same corner, light and outfit — into one shot list.',
        ] },
        {
            type: 'table',
            head: ['Set-up', 'What you capture'],
            rows: [
                ['Talking-head corner', 'Eight short answers to customer questions, read from cue cards'],
                ['Counter and product table', 'Six product reels and stills of the new menu'],
                ['Kitchen', 'Five behind-the-scenes clips: prep, plating, the team at work'],
                ['Outside and street', 'Three lifestyle reels and cut-downs for ads'],
                ['Team', 'Two culture and hiring posts'],
            ],
            caption: 'An example shot list for a café, grouped by set-up',
        },
        { type: 'h2', text: 'How do you run the shoot day?' },
        { type: 'steps', items: [
            'Start with the set-up that takes longest to light.',
            'Keep talking-head questions on cue cards and film several answers in a row.',
            'Change outfits between batches, so posts feel like they were filmed on different days.',
            'Take stills between takes for carousels, thumbnails and outdoor ads.',
            'Label clips by piece as you go, and back up the cards at lunch and at wrap.',
        ] },
        { type: 'h2', text: 'What should you capture beyond the plan?' },
        { type: 'list', items: [
            'B-roll of hands, details, textures and movement for transitions.',
            'Room sound and the natural sounds of the place.',
            'Both vertical and horizontal framing of key moments.',
            'Two or three alternative hooks for the most important videos.',
            'Reactions and moments that weren’t scripted — often the best-performing clips.',
        ] },
        { type: 'h2', text: 'How do you edit and schedule?' },
        { type: 'p', text: 'Edit in batches with templates for captions, titles and end cards, so every piece looks related. Schedule the month, but keep a few slots free for timely posts — news, trends, a big win. At the end of the month, check which pieces worked (see [video ad metrics](/blog/video-ad-metrics/)) and plan the next shoot around them.' },
        { type: 'p', text: 'The same approach works on bigger shoots: when you film an ad, plan social content around it — see [what happens on an ad shoot day](/blog/what-happens-on-a-shoot-day/).' },
        { type: 'tip', text: 'Change one visible thing between batches — an outfit, a cup, the background — so a month of posts doesn’t look as if it was filmed in one afternoon.' },
    ],
    faqs: [
        { q: 'How many videos can we get from one shoot day?', a: 'It depends on what you film. Short talking-head answers and simple product reels are quick; demonstrations, recipes and story pieces take longer. A tight plan grouped by set-up gets the most from the day.' },
        { q: 'Should we film vertical or horizontal?', a: 'Film for where it will be posted. For mostly reels and stories, frame for vertical; if you also need YouTube or website video, shoot key moments both ways or frame wide with room to crop.' },
        { q: 'Do we need a professional crew?', a: 'Not for everything. Phones work for everyday posts, but a small crew with proper lighting and sound makes a whole month of content look consistent and professional.' },
        { q: 'How often should we do a content shoot?', a: 'Monthly suits brands that post several times a week; every two or three months suits others. Plan around launches and festivals.' },
    ],
};

export default article;
