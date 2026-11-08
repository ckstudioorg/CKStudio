/** Text of "Corporate Training and Safety Videos: Making Training People Remember". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'Training videos work when each one teaches a single task or rule in a few minutes, shows it in your real workplace with your own people, and is available in the languages your team actually speaks. Script it with the person who does the job best, film the correct way step by step (and the common mistakes), add captions and a quick check at the end, and plan how you will update videos when procedures change.',
    keyPoints: [
        'One task or rule per video, in a few minutes.',
        'Your real workplace and people — not generic stock footage.',
        'The languages your team speaks, with captions.',
        'Short modules are easier to update than one long film.',
    ],
    body: [
        { type: 'h2', text: 'What kinds of training videos do companies make?' },
        {
            type: 'table',
            head: ['Type', 'Examples'],
            rows: [
                ['Onboarding', 'Company story, values, policies, a first-day walkthrough'],
                ['SOPs and how-tos', 'Machine set-up, a store opening checklist, packing an order'],
                ['Safety', 'PPE, fire evacuation, chemical handling, working at height'],
                ['Compliance', 'Workplace conduct, data privacy, anti-bribery policies'],
                ['Customer service', 'Handling complaints and difficult calls, through role-play scenes'],
                ['Product training', 'Features and demos for sales and service teams'],
            ],
        },
        { type: 'h2', text: 'How do you script a training video?' },
        { type: 'steps', items: [
            '**Set one learning goal.** “After this video, a new operator can change the blade safely.”',
            '**Break the task down with your best expert** — the person who does it right every day.',
            '**Write in plain language**, in short sentences, using the words your team uses on the floor.',
            '**Show, tell, check** — demonstrate each step, explain why it matters, then recap.',
            '**Include the common mistakes** and what they cause, so people recognise them.',
            '**End with a summary card** and two or three quick questions.',
        ] },
        { type: 'h2', text: 'Should you film live, animate or use AI avatars?' },
        {
            type: 'table',
            head: ['Approach', 'Best for'],
            rows: [
                ['Live shoot in your workplace', 'Real machines, real sites, safety procedures, team culture'],
                ['Animation and motion graphics', 'Processes you can’t see, data, policies — see [animated explainer videos](/blog/animated-explainer-videos/)'],
                ['Screen recording', 'Software and app training'],
                ['AI avatars', 'Content that changes often or is needed in many languages — see [AI avatars and digital presenters](/blog/ai-avatars-and-digital-presenters/)'],
                ['A mix', 'Most programmes: a live demonstration with animated overlays and a presenter'],
            ],
        },
        { type: 'h2', text: 'How do you handle many languages?' },
        { type: 'p', text: 'A factory or warehouse team in Hyderabad may speak Telugu, Hindi, Odia, Bengali and English. Plan for it: keep on-screen text short and use icons, record voice-overs or dub into each language (see [AI dubbing](/blog/ai-dubbing-telugu-hindi-tamil-ads/)), and add subtitles (see [subtitles and captions](/blog/subtitles-and-captions-guide/)). Test each version with a few people from that team before rolling it out.' },
        { type: 'h2', text: 'Where will people watch?' },
        { type: 'list', items: [
            'A learning management system (LMS) with quizzes and completion tracking.',
            'Private or unlisted YouTube links for easy sharing.',
            'WhatsApp groups for frontline teams who don’t use email.',
            'Tablets or screens at workstations, and loops on canteen TVs.',
            'Offline copies for sites with poor internet.',
        ] },
        { type: 'h2', text: 'What extra care do safety videos need?' },
        { type: 'list', items: [
            'Review the script with your safety officer or EHS team before filming.',
            'Show correct PPE in every shot — even in “mistake” scenes, keep the crew and actors safe.',
            'Follow the site’s permits and rules during the shoot itself.',
            'Have your compliance team approve any legal or regulatory content.',
        ] },
        { type: 'h2', text: 'How do you know the training videos work?' },
        { type: 'list', items: [
            '**Completion** — who watched each module, tracked in your LMS or with a simple sign-off sheet.',
            '**Quiz results** — questions many people get wrong point to a part of the video that needs fixing.',
            '**Work on the floor** — fewer errors, rework and near-misses in the tasks you trained.',
            '**Time to get new hires productive** — compare before and after the videos were introduced.',
            '**Feedback from the team** — ask what was unclear, and what they still ask supervisors about.',
        ] },
        { type: 'p', text: 'Manufacturers often combine training with a factory or capability film — see the [industrial film guide](/blog/industrial-film-guide-for-manufacturers/).' },
        { type: 'tip', text: 'Keep each video to one task. Five short videos are easier to update — and easier to remember — than one long one.' },
    ],
    faqs: [
        { q: 'How long should a training video be?', a: 'As short as the task allows — often a few minutes. If a topic needs more, split it into a series of short modules, each with one goal.' },
        { q: 'Can we use our employees instead of actors?', a: 'Yes, and it often works better: real people doing their real jobs are credible to colleagues. Brief them, rehearse, and get signed releases.' },
        { q: 'How often should training videos be updated?', a: 'Whenever the procedure, equipment or policy changes, and at least at an annual review. Short modules make this cheaper, because you only remake what changed.' },
        { q: 'Can we make versions in other languages without reshooting?', a: 'Usually yes. Plan the shoot with that in mind — fewer people talking to camera, more demonstration — then add voice-overs, dubbing or subtitles for each language.' },
    ],
};

export default article;
