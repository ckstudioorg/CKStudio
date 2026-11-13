/** Text of "Animated Explainer Videos: When to Use Them, Styles and How They Are Made". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'An animated explainer is the right choice when you need to make something invisible or complex easy to understand — a process, a service, an app, a financial product or a technical idea. Keep it short (usually 60–120 seconds), built on a tight script of roughly 130–150 spoken words per minute, and choose a style that suits your audience: 2D character animation, motion graphics, 3D or whiteboard. The process runs from script and storyboard to design, animation, voice-over and sound.',
    keyPoints: [
        'Use animation for ideas that cameras cannot show.',
        'The script is everything: problem, solution, how it works, next step.',
        'About 130–150 spoken words per minute of video.',
        'Design one style and stick to it.',
    ],
    body: [
        { type: 'h2', text: 'When does animation beat live action?' },
        { type: 'list', items: [
            'Explaining something invisible: software, finance, insurance, processes inside a machine or the body.',
            'Simplifying complex ideas with diagrams and metaphors.',
            'When there is nothing attractive to film, or filming is impossible.',
            'When the video must be updated often — changing a few scenes is easier than re-shooting.',
            'For multilingual versions, since only the voice and text need to change.',
        ] },
        { type: 'h2', text: 'Which explainer styles are there?' },
        {
            type: 'table',
            head: ['Style', 'Looks like', 'Best for'],
            rows: [
                ['2D character animation', 'Illustrated people and places', 'Consumer services, stories, friendly brands'],
                ['Motion graphics', 'Animated text, icons, charts and shapes', 'B2B, data, apps, corporate messages'],
                ['3D animation', 'Realistic or stylised 3D objects', 'Products, machinery, medical and technical ideas'],
                ['Whiteboard', 'A hand drawing on a white surface', 'Training and educational content'],
                ['Mixed (live action + graphics)', 'Real footage with animated overlays', 'Apps, demos and presenters'],
            ],
        },
        { type: 'h2', text: 'How should an explainer script be structured?' },
        { type: 'steps', items: [
            '**Problem** — the frustration your viewer recognises (10–15 seconds).',
            '**Solution** — your product or service in one sentence.',
            '**How it works** — three simple steps or benefits.',
            '**Proof** — a result, a customer type or a credential you can back up.',
            '**Next step** — one clear action.',
        ] },
        { type: 'p', text: 'At a natural speaking pace of about 130–150 words per minute, a 90-second explainer has room for roughly 200–220 words. If the script is longer, cut ideas rather than speeding up the voice.' },
        { type: 'h2', text: 'How is an animated explainer made?' },
        { type: 'steps', items: [
            'Brief and script, approved before any design starts.',
            'Storyboard: a rough frame for every scene.',
            'Style frames: two or three fully designed frames to set the look.',
            'Voice-over recorded (or a guide voice for timing).',
            'Animation, scene by scene, to the voice.',
            'Music, sound effects and the final mix.',
            'Language versions and subtitle files.',
        ] },
        { type: 'h2', text: 'How can AI help with explainers?' },
        { type: 'p', text: 'AI helps draft script options, generate illustration styles and backgrounds, create voice-overs in several languages and speed up captions. The structure, clarity and design consistency still come from people. See [AI video generation for brands](/blog/ai-video-generation-for-brands/) and [AI dubbing for Indian languages](/blog/ai-dubbing-telugu-hindi-tamil-ads/).' },
        { type: 'h2', text: 'What should an explainer brief include?' },
        { type: 'list', items: [
            'Who the video is for, and what they already know',
            'The one thing viewers should understand after watching',
            'The action you want them to take',
            'Where it will be shown, and the lengths and shapes needed',
            'Brand colours, fonts and any illustration style you already use',
            'Languages for voice-over and subtitles',
        ] },
        { type: 'h2', text: 'What are the most common explainer mistakes?' },
        { type: 'list', items: [
            'Explaining every feature instead of the one problem you solve',
            'Jargon your customers do not use',
            'A script that is too long, forcing a rushed voice-over',
            'Changing the script after animation has started',
            'No clear next step at the end',
        ] },
        { type: 'tip', text: 'Read your script aloud with a stopwatch before approving it. It is the fastest way to find words to cut.' },
        { type: 'p', text: 'CK Studio makes explainer and training videos, motion graphics and [3D product animation](/blog/product-video-live-shoot-cgi-or-ai/) as part of our [ad films](/services/ad-films-and-commercials/) and [VFX and CG](/services/vfx-and-cg/) services.' },
        { type: 'p', text: 'Related guides: [3D product animation](/blog/3d-product-animation-guide/) and [corporate training and safety videos](/blog/corporate-training-videos/).' },
    ],
    faqs: [
        { q: 'How long should an explainer video be?', a: 'Usually 60 to 120 seconds. Shorter versions of 15–30 seconds work for ads and social media.' },
        { q: 'How long does it take to make an animated explainer?', a: 'Often two to five weeks, depending on length, style and the number of feedback rounds. 3D and character animation take longer than motion graphics.' },
        { q: 'Is 2D or 3D animation better for an explainer?', a: '2D and motion graphics are faster and suit most services and apps; 3D is better for showing physical products, machinery or technical detail.' },
        { q: 'Can one explainer be made in several languages?', a: 'Yes. Animation is ideal for this — the voice-over and on-screen text are replaced while the visuals stay the same.' },
    ],
};

export default article;
