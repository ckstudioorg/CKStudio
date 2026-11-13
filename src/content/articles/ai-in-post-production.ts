/** Text of "AI in Post-Production: What It Speeds Up and What Still Needs an Editor". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'AI now handles many of the slow, repetitive jobs in post-production: transcribing and finding dialogue, cutting out subjects, removing small objects, cleaning noisy sound, drafting subtitles and matching colours between shots. It does not decide what the story is, which take feels true, or when a cut should land. The best results come from editors, colourists and sound mixers who use these tools to save time and then spend that time on judgement.',
    keyPoints: [
        'AI is strongest at repetitive, technical tasks.',
        'Story, rhythm, taste and final quality checks still need people.',
        'Every AI result needs a human review before delivery.',
        'Check rights and confidentiality before uploading footage to any tool.',
    ],
    body: [
        { type: 'h2', text: 'Where does AI help in each stage of post?' },
        { type: 'table', head: ['Stage', 'What AI tools do well', 'What still needs a person'], rows: [
            ['Sorting footage', 'Transcripts, searching by spoken words, tagging faces and scenes', 'Choosing the takes that feel right'],
            ['Editing', 'Rough assemblies from a transcript, removing silences, reframing for vertical', 'Structure, pace, emotion and performance'],
            ['VFX and clean-up', 'Cut-outs (rotoscoping), tracking, removing small objects, filling backgrounds', 'Hero shots, complex interaction, final checks frame by frame'],
            ['Colour', 'Matching shots, selecting skin or sky, first-pass balance', 'The look, skin tones, consistency across the film'],
            ['Sound', 'Noise and echo reduction, separating voice from music, levelling', 'The mix, sound design, how it feels in a cinema'],
            ['Subtitles and versions', 'Draft subtitles, translation drafts, voice dubbing drafts', 'Accuracy, names, tone and cultural sense'],
            ['Restoration', 'Upscaling, sharpening, removing scratches and flicker', 'Deciding how far to go without making it look artificial'],
        ] },
        { type: 'p', text: 'If the stages are unfamiliar, [what is post-production?](/blog/what-is-post-production/) explains each one.' },
        { type: 'h2', text: 'What does this change for clients?' },
        { type: 'list', items: [
            '**Faster first cuts** — a rough version can be ready sooner, so feedback starts earlier.',
            '**More versions** — vertical, square and shorter cuts are quicker to produce.',
            '**More fixes are possible** — a stray cable, a logo on a shirt or a noisy room can often be repaired.',
            '**Languages** — subtitles and dubbed versions are more affordable to try; see [AI dubbing and localisation](/blog/ai-dubbing-telugu-hindi-tamil-ads/).',
            '**Old material becomes usable** — see [restoring and upscaling old footage with AI](/blog/ai-video-restoration-upscaling/).',
        ] },
        { type: 'p', text: 'What it does not change: a film still needs a clear brief, good footage and enough time for careful review.' },
        { type: 'h2', text: 'Where does AI still go wrong?' },
        { type: 'list', items: [
            '**Fine detail** — hair, fingers, fast movement and transparent objects in cut-outs.',
            '**Flicker** — a fix that looks right on one frame but shimmers in motion.',
            '**Names and local words** — automatic transcripts stumble on Telugu names, brands and mixed-language speech.',
            '**Over-processing** — sound that becomes thin and watery, or faces that look waxy after sharpening.',
            '**Invented detail** — upscaling and fill tools can add things that were never there, which matters for products and documentaries.',
            '**Meaning** — a tool can shorten a speech; it cannot tell which sentence carried the point.',
        ] },
        { type: 'h2', text: 'How should a studio use AI responsibly?' },
        { type: 'steps', items: [
            '**Choose the tool for the task** and test it on a short section first.',
            '**Keep the original files untouched** so any step can be redone.',
            '**Review every result at full size and full speed**, not only as a still.',
            '**Have a person finish the work** — the edit, the grade and the mix.',
            '**Protect confidential footage** — know where a tool sends and stores files before uploading unreleased material.',
            '**Respect rights** — no cloning of voices or faces without written consent.',
            '**Label where required** — see [AI in ads: labelling, consent and copyright](/blog/ai-in-ads-india-rules-labelling-consent/).',
        ] },
        { type: 'h2', text: 'Does AI make post-production cheaper?' },
        { type: 'p', text: 'It shortens specific tasks, sometimes dramatically. The overall cost of a project depends more on the amount of footage, the number of versions, the complexity of VFX and how many review rounds there are. In practice the saving often goes into doing more: extra versions, more clean-up or a better finish within the same schedule. Clear, combined feedback still saves more time than any tool; see [how to give feedback on a video edit](/blog/how-to-give-feedback-on-video-edits/).' },
        { type: 'h2', text: 'What should you ask your post-production partner?' },
        { type: 'list', items: [
            '**Which parts of this job will use AI tools, and who checks the results?**',
            '**Where will my footage be processed and stored?**',
            '**Will any AI-generated picture or voice appear in the final film?**',
            '**Can you show a before-and-after on a few seconds of my material?**',
        ] },
        { type: 'p', text: 'At CK Studio, AI tools sit inside a normal finishing workflow for [movie post-production](/services/movie-post-production/): they speed up the preparation, and people make the creative and quality decisions.' },
        { type: 'tip', text: 'Judge AI clean-up on a big screen with good speakers before approving. Problems that are invisible on a phone are obvious in a cinema.' },
    ],
    faqs: [
        { q: 'Can AI edit a whole video on its own?', a: 'It can produce a rough assembly, especially for interviews and talking-head videos. Turning that into a film with shape, pace and feeling is still an editor’s job.' },
        { q: 'Is AI clean-up good enough for cinema?', a: 'For many small fixes, yes, after careful review. Complex shots still need traditional VFX work, and everything should be checked at full resolution on a large screen.' },
        { q: 'Are AI subtitles accurate?', a: 'They are a good first draft. Names, technical terms and mixed Telugu–English speech need correction by someone who knows the language. See our [subtitles and captions guide](/blog/subtitles-and-captions-guide/).' },
        { q: 'Is my footage safe when AI tools are used?', a: 'It depends on the tool. Some run on the studio’s own computers; others upload files to an online service. Ask which is being used, especially for unreleased films.' },
    ],
};

export default article;
