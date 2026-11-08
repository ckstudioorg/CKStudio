/** Text of "Logo Animation: Types, Ideal Lengths and Where to Use an Animated Logo". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'A logo animation brings your brand mark to life for the start and end of videos, presentations, websites, apps and event screens. Most work best at 3–7 seconds, in a style that reflects the brand’s personality — from a simple, elegant reveal to a 3D or particle effect — with a matching sound. You will need several files: a video version (MP4), a transparent version for editors (such as ProRes 4444 with alpha), vertical and square cuts, and possibly a lightweight web version.',
    keyPoints: [
        '3–7 seconds for intros and outros; shorter for social media.',
        'The motion should match the brand’s personality.',
        'Get transparent-background versions for video editors.',
        'Add a short, distinctive sound for recognition.',
    ],
    body: [
        { type: 'h2', text: 'Where is an animated logo used?' },
        { type: 'list', items: [
            'The opening and closing of ad films, corporate films and YouTube videos',
            'Social media Reels and Shorts (a very short version)',
            'Event screens, stage intros and award shows — see [event branding kits](/blog/event-branding-kit-checklist/)',
            'Presentations and webinars',
            'Website loading screens and app start screens',
        ] },
        { type: 'h2', text: 'Which styles of logo animation are there?' },
        {
            type: 'table',
            head: ['Style', 'Feel', 'Suits'],
            rows: [
                ['Minimal reveal', 'Clean, confident, premium', 'Corporate, finance, architecture, luxury'],
                ['Line and draw-on', 'Crafted, precise', 'Design studios, engineering, healthcare'],
                ['Shape morph', 'Playful, modern', 'Tech, apps, youth brands'],
                ['3D and light', 'Cinematic, powerful', 'Film banners, automobiles, events'],
                ['Particles and liquid', 'Dynamic, energetic', 'Entertainment, sports, beverages'],
                ['Character or mascot', 'Friendly, memorable', 'Consumer products, education'],
            ],
        },
        { type: 'h2', text: 'How long should a logo animation be?' },
        {
            type: 'table',
            head: ['Use', 'Suggested length'],
            rows: [
                ['YouTube and film intro', '3–7 seconds'],
                ['Ad film end card', '2–4 seconds'],
                ['Reels and Shorts', '1–2 seconds'],
                ['Event stage and award shows', '5–15 seconds'],
                ['App or website loader', 'Under 2 seconds, often looping'],
            ],
        },
        { type: 'h2', text: 'Which files should you receive?' },
        { type: 'list', items: [
            '**MP4 (H.264)** in 16:9, 9:16 and 1:1 — for sharing and social media.',
            '**Transparent video** (for example ProRes 4444 with alpha) — so editors can place it over footage.',
            '**Light and dark background versions.**',
            '**Sound file** separately, plus a version with sound mixed in.',
            '**Web or app version** (such as a Lottie file) if needed for websites and apps.',
        ] },
        { type: 'h2', text: 'How is a logo animation made?' },
        { type: 'steps', items: [
            'Prepare the logo as a clean vector file, separated into layers — see [logo design and file formats](/blog/logo-design-guide/).',
            'Agree the personality and two or three motion ideas, often as quick sketches or references.',
            'Animate the chosen idea and review the timing.',
            'Add sound design: a short, distinctive “sonic logo” helps recognition.',
            'Export every version and format.',
        ] },
        { type: 'h2', text: 'What should a logo animation brief include?' },
        { type: 'list', items: [
            'The logo as a layered vector file (AI, SVG or PDF)',
            'Three words that describe how the brand should feel',
            'Where the animation will be used, and the lengths needed',
            'Reference animations you like and dislike',
            'Whether you want sound, and the kind of sound',
            'Background colours it must work on',
        ] },
        { type: 'h2', text: 'What are common logo animation mistakes?' },
        { type: 'list', items: [
            'Too long — viewers skip intros longer than a few seconds',
            'Effects that do not match the brand, such as fiery 3D for a calm healthcare brand',
            'Distorting or recolouring the logo during the motion',
            'No still frame at the end, so the logo is never readable',
            'Only one format, so editors cannot use it over footage',
        ] },
        { type: 'tip', text: 'Your logo must hold still on screen for at least a second at the end of the animation. People need time to read it.' },
        { type: 'p', text: 'Logo animation is part of our [VFX and CG works](/services/vfx-and-cg/). We often design it alongside [ad films](/services/ad-films-and-commercials/) so every film ends the same way.' },
    ],
    faqs: [
        { q: 'How long should a logo animation be?', a: 'Usually 3 to 7 seconds for video intros and outros, and just 1 to 2 seconds for social media.' },
        { q: 'What file format is best for an animated logo?', a: 'MP4 for sharing and social media, a transparent format such as ProRes 4444 with alpha for video editing, and a lightweight format such as Lottie for websites and apps.' },
        { q: 'Can any logo be animated?', a: 'Yes, but simple logos built from clear shapes animate best. A layered vector file makes the process much easier.' },
        { q: 'Do I need sound with my logo animation?', a: 'It is optional but recommended. A short, consistent sound makes your brand recognisable even when people are not looking at the screen.' },
        { q: 'How long does it take to make a logo animation?', a: 'A simple, elegant reveal can be ready in a few days. 3D, particle or character animations take longer because of modelling, rendering and more review rounds.' },
    ],
};

export default article;
