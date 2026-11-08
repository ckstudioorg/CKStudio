/** Text of "AI Avatars and Digital Presenters: When They Work and When They Don’t". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'AI avatars are computer-generated presenters — either ready-made characters or a digital twin of a real person — that speak any script you type, often in many languages. They are useful for training, internal updates, FAQs and product explainers that change often. They are weaker for emotional brand films and anything where trust depends on a real human. Only create a digital twin of someone with their written consent, and disclose realistic AI-generated people in public content.',
    keyPoints: [
        'Best for content that changes often or is needed in many languages.',
        'A real person is still better for emotion, trust and testimonials.',
        'Digital twins and voice clones need written consent with clear limits.',
        'Disclose realistic AI people, and never use them for fake testimonials.',
    ],
    body: [
        { type: 'h2', text: 'What kinds of AI avatars are there?' },
        {
            type: 'table',
            head: ['Type', 'What it is', 'Good for'],
            rows: [
                ['Stock avatar', 'A ready-made digital presenter', 'Internal training, quick explainers'],
                ['Custom digital twin', 'A likeness and voice recorded from a real person, with consent', 'Leadership messages, instructor-led courses'],
                ['Stylised character', 'A cartoon or 3D character', 'Children’s content, brands with mascots — see [brand mascots](/blog/brand-mascot-design-and-animation/)'],
                ['Synthetic voice only', 'An AI voice without a face', 'Narration — compare with a [human voice-over](/blog/voice-over-for-ads/)'],
            ],
        },
        { type: 'h2', text: 'Where do AI avatars work well?' },
        { type: 'list', items: [
            '**Training that changes often** — update the script, regenerate, done; see [corporate training videos](/blog/corporate-training-videos/).',
            '**Many languages** — the same video in Telugu, Hindi and English without reshooting.',
            '**Internal updates** — policy changes, weekly news, onboarding.',
            '**Product FAQs and help content** — short answers to common questions.',
            '**Localising existing videos** for new regions.',
        ] },
        { type: 'h2', text: 'Where is a real person still better?' },
        { type: 'list', items: [
            '**Brand films and ads that need emotion** — people still connect most with real performances; see [brand film vs ad film](/blog/brand-film-vs-ad-film-vs-corporate-film/).',
            '**Testimonials** — these must come from real people. An AI “customer” is a fake review.',
            '**Expert advice on health, money or law** — trust depends on a real, accountable person.',
            '**Sensitive or crisis messages** from leadership.',
            '**Anything where viewers would feel deceived** if they later learned it was AI.',
        ] },
        { type: 'h2', text: 'What are the rules and risks?' },
        { type: 'list', items: [
            '**Consent for digital twins and voice clones** — in writing, stating what the likeness may be used for, where, for how long, and how consent can be withdrawn.',
            '**Personality rights** — Indian courts have granted public figures orders protecting their name, image and voice from unauthorised use, including AI imitations. Never imitate a real person without permission.',
            '**Platform disclosure** — YouTube asks creators to disclose realistic altered or synthetic content, and Meta labels AI content. Follow each platform’s rules.',
            '**Advertising rules** — AI-generated people in ads must not mislead; see [AI in ads: rules and labelling](/blog/ai-in-ads-india-rules-labelling-consent/) for the current position in India.',
        ] },
        { type: 'h2', text: 'How do you plan an AI avatar project?' },
        { type: 'steps', items: [
            '**Pick the use cases** — which videos, for whom, in which languages, and how often they change.',
            '**Choose stock or custom** — a stock avatar to start quickly, or a digital twin when a known face matters.',
            '**For a digital twin, record properly** — good light, clean sound and the footage the tool asks for, plus the signed consent document.',
            '**Build a pronunciation list** — product names, places and local words, spelled the way they should sound.',
            '**Pilot one video** and show it to a few real viewers before making fifty.',
            '**Set an approval process** — who checks each script and each finished video before it goes out.',
        ] },
        { type: 'h2', text: 'How do you make an AI avatar video look professional?' },
        { type: 'steps', items: [
            '**Write for speech** — short sentences, natural pauses, one idea at a time.',
            '**Choose an avatar that suits the audience** and your brand.',
            '**Check pronunciation** of names, places and Telugu or Hindi words, and fix them with phonetic spellings.',
            '**Cut away often** — to real footage, screen recordings, product shots and graphics.',
            '**Review lip-sync and gestures** with a human eye before publishing.',
            '**Add captions and a disclosure** wherever viewers could mistake the avatar for a real person.',
        ] },
        { type: 'tip', text: 'Use the avatar as the guide, not the whole film. Cutting to real footage and graphics keeps viewers watching and hides the avatar’s small imperfections.' },
    ],
    faqs: [
        { q: 'Can we create an AI avatar of our CEO?', a: 'Yes, with the CEO’s written consent, clear limits on how it may be used, and a process for approving every script. Many companies use digital twins only for internal communication.' },
        { q: 'Will viewers know it’s AI?', a: 'Often, yes — and they react badly if they feel tricked. Being open about it, especially in public content, protects your credibility.' },
        { q: 'Can AI avatars speak Telugu?', a: 'Many tools support Indian languages, but quality varies, especially with names and local words. Always have a native speaker review the result before publishing.' },
        { q: 'Are AI avatars cheaper than filming a presenter?', a: 'For content that changes often or needs many language versions, usually yes over time. For a single important film, a real presenter and a proper shoot are often worth it.' },
    ],
    sources: [
        { label: 'YouTube Help — Disclosing use of altered or synthetic content', url: 'https://support.google.com/youtube/answer/14328491' },
        { label: 'ASCI — codes and guidelines', url: 'https://www.ascionline.in/' },
    ],
};

export default article;
