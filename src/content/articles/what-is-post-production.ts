/** Text of "What Is Post-Production? Every Stage of Film and Ad Post-Production Explained". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'Post-production is everything that happens after filming: editing the footage into a story, adding visual effects and graphics, colour grading (DI), designing and mixing sound and music, adding titles, and exporting final versions for cinema, TV and digital platforms. It often takes as long as the shoot or longer, and it decides how polished the finished film looks and sounds.',
    keyPoints: [
        'Order: edit → picture lock → VFX → colour → sound → titles → mastering and delivery.',
        'Picture lock is the key milestone; changes after it cost much more.',
        'Colour grading and sound do the most to make a film feel “expensive”.',
        'AI now speeds up many steps, but the creative decisions stay human.',
    ],
    body: [
        { type: 'h2', text: 'What are the stages of post-production, in order?' },
        {
            type: 'table',
            head: ['Stage', 'What happens', 'Result'],
            rows: [
                ['Ingest and backup', 'Footage is copied, backed up and organised by scene and take', 'Safe, searchable media'],
                ['Editing', 'Assembly, rough cut and fine cut build the story and rhythm', 'The approved cut'],
                ['Picture lock', 'The edit is frozen: no more changes to timing', 'A locked timeline for every team'],
                ['VFX and graphics', 'Clean-up, compositing, CGI, titles and motion graphics', 'Finished shots'],
                ['Conform and DI', 'The edit is rebuilt in full quality and colour graded', 'One consistent look'],
                ['Sound', 'Dialogue edit, dubbing, Foley, effects, music and the final mix', 'The finished soundtrack'],
                ['Mastering and QC', 'Final files are made and checked for technical errors', 'Masters for every platform'],
                ['Delivery', 'DCP for cinema, broadcast files, OTT and social versions', 'Files ready to release'],
            ],
        },
        { type: 'h2', text: 'What happens during editing?' },
        { type: 'p', text: 'The editor first makes an **assembly** of the best takes in script order, then a **rough cut** that shapes the story, then a **fine cut** that perfects rhythm, performance and timing, usually with temporary music. When everyone approves the fine cut, the film reaches **picture lock**.' },
        { type: 'h3', text: 'Why is picture lock so important?' },
        { type: 'p', text: 'After lock, VFX artists, colourists and sound designers all work on the same frames at the same time. Changing the edit afterwards means updating every one of those departments, which costs time and money — so lock only when the story is truly right.' },
        { type: 'h2', text: 'What does VFX add?' },
        { type: 'p', text: 'Visual effects range from invisible clean-up — removing wires, signboards or blemishes — to compositing, CGI elements, crowd extensions and full digital environments. Motion graphics and titles are also designed at this stage. See our [VFX and CG works](/services/vfx-and-cg/).' },
        { type: 'h2', text: 'What is DI and colour grading?' },
        { type: 'p', text: 'In the digital intermediate (DI), the colourist first corrects shots so they match, then grades them to create the mood of the film — warm, cold, gritty or glossy — and prepares versions for cinema, TV and phones. Our article on [DI and colour correction](/blog/di-and-colour-correction-explained/) goes deeper.' },
        { type: 'h2', text: 'What happens in sound post-production?' },
        { type: 'list', items: [
            '**Dialogue editing** — cleaning and balancing every line.',
            '**Dubbing (ADR)** — re-recording lines that were noisy on set, or recording other languages.',
            '**Foley** — footsteps, cloth, props and other everyday sounds recorded to picture.',
            '**Sound effects and ambience** — the world around the characters.',
            '**Music** — the score and songs, edited to picture.',
            '**Final mix** — balancing everything for cinema surround, TV or phone speakers.',
        ] },
        { type: 'h2', text: 'How is a finished film delivered?' },
        { type: 'p', text: 'Each platform needs its own files: a [DCP for cinema screens](/blog/what-is-a-dcp-cinema-delivery-guide/), broadcast masters for TV channels, high-quality files for OTT platforms, and shorter, vertical versions for social media. Every file goes through quality control (QC) for picture and sound errors before release.' },
        { type: 'h2', text: 'How does AI help post-production in 2026?' },
        { type: 'list', items: [
            'Transcribing interviews and searching footage by what is said.',
            'Building rough assemblies and selecting takes faster.',
            'Removing objects, rotoscoping and tracking in a fraction of the time.',
            'Upscaling, noise reduction and dialogue clean-up.',
            'Matching colour between cameras as a starting point for the colourist.',
        ] },
        { type: 'p', text: 'These tools save hours, but taste — what to cut, how a scene should feel, when a grade is right — remains the editor’s and colourist’s job.' },
        { type: 'h2', text: 'How long does post-production take?' },
        {
            type: 'table',
            head: ['Project', 'Typical post-production time'],
            rows: [
                ['Social media ad', 'A few days'],
                ['TV commercial with versions', 'One to two weeks'],
                ['Corporate or industrial film', 'One to three weeks'],
                ['Feature film', 'Several weeks to months, depending on VFX and sound'],
            ],
        },
        { type: 'tip', text: 'Name files and folders clearly on the shoot day — scene, shot and take. Organised footage can save days in the edit room.' },
        { type: 'p', text: 'CK Studio offers complete [movie post-production](/services/movie-post-production/) — editing, DI, VFX, sound supervision and DCP — as well as finishing for [ad films](/services/ad-films-and-commercials/), from Hyderabad.' },
        { type: 'p', text: 'Related guides: [log footage and LUTs](/blog/log-footage-and-luts-explained/), [sync sound vs dubbing](/blog/sync-sound-vs-dubbing/) and [how a background score is made](/blog/background-score-for-films/).' },
    ],
    faqs: [
        { q: 'What is the difference between editing and post-production?', a: 'Editing is one part of post-production. Post-production also includes VFX, colour grading, sound design, music, mixing, titles, mastering and delivery.' },
        { q: 'What does DI mean in film post-production?', a: 'DI stands for digital intermediate — the stage where the final film is conformed in full quality and colour graded, then prepared for cinema, TV and digital release.' },
        { q: 'What does picture lock mean?', a: 'Picture lock is the point where the edit is approved and frozen, so VFX, colour and sound teams can finish their work on fixed frames.' },
        { q: 'What is ADR in post-production?', a: 'ADR, or dubbing, is re-recording dialogue in a studio to replace unclear location sound or to create versions in other languages.' },
    ],
};

export default article;
