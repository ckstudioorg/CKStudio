/** Text of "Background Score: How Film Music Is Composed, Recorded and Mixed". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'The background score is the music that plays under a film’s scenes, as distinct from its songs. It is written after the edit is locked: the director and composer watch the film together and decide where music starts and stops (a spotting session), the composer writes themes and cues to picture, the music is recorded or produced, and it is then mixed with dialogue and sound effects. A good score supports the story without the audience noticing it.',
    keyPoints: [
        'Score follows the locked edit; changing the cut later means rewriting music.',
        'Spotting decides where music plays and, just as importantly, where it does not.',
        'Themes for characters and ideas tie a film together.',
        'Deliver music as separate stems so it can be balanced in the final mix.',
    ],
    body: [
        { type: 'h2', text: 'What is a background score, and how is it different from songs?' },
        { type: 'table', head: ['', 'Songs', 'Background score (BGM)'], rows: [
            ['Purpose', 'Stand-alone moments; promotion before release', 'Supports emotion, tension and pace inside scenes'],
            ['When made', 'Usually before or during the shoot', 'After the edit is locked'],
            ['Length', 'Three to five minutes each', 'Many short cues, seconds to minutes'],
            ['Heard as', 'The main thing on screen', 'Under dialogue and effects'],
            ['Released', 'As an album, lyrical and video songs', 'Sometimes as an original soundtrack'],
        ] },
        { type: 'p', text: 'In Telugu cinema the two are often by the same composer, but they are different jobs. For how songs are used in promotion, see [lyrical videos](/blog/lyrical-videos-turning-a-song-into-a-campaign/).' },
        { type: 'h2', text: 'What does a score do for a film?' },
        { type: 'list', items: [
            '**Tells the audience how to feel** when the picture alone is ambiguous.',
            '**Builds tension and releases it**.',
            '**Gives characters an identity** through recurring themes.',
            '**Smooths transitions** between scenes and across time.',
            '**Controls pace** — the same scene feels faster or slower with different music.',
            '**Creates the “elevation” moment** — the hero’s theme that audiences cheer.',
        ] },
        { type: 'p', text: 'Silence is part of the score too. A scene with no music can be the most powerful in the film.' },
        { type: 'h2', text: 'How is a film score made, step by step?' },
        { type: 'steps', items: [
            '**Early conversations** — the director describes the film’s world; the composer may sketch themes from the script.',
            '**Temp music** — editors often cut with borrowed music as a placeholder. Useful for rhythm, risky if everyone falls in love with it.',
            '**Picture lock** — the edit is fixed so music can be timed exactly.',
            '**Spotting session** — director and composer go through the film and note each cue: where it starts, where it ends, what it must do.',
            '**Themes** — the main melodies and sounds are written and approved.',
            '**Composing to picture** — each cue is written against the scene, usually as a computer mock-up first.',
            '**Review** — the director hears the mock-ups with the film and asks for changes.',
            '**Recording** — live players, singers or an orchestra replace or join the programmed parts.',
            '**Music mix** — the cues are balanced and delivered as stems.',
            '**Final mix** — music is balanced with dialogue and effects on the mixing stage.',
        ] },
        { type: 'h2', text: 'Live musicians or programmed music?' },
        { type: 'table', head: ['', 'Live recording', 'Programmed (samples and synthesisers)'], rows: [
            ['Sound', 'Human feel, depth and expression', 'Precise; can sound flat if not handled well'],
            ['Speed of changes', 'Slower: re-recording needed', 'Fast'],
            ['Cost', 'Musicians, studio, engineers', 'Mainly the composer’s time'],
            ['Best for', 'Emotional themes, solo instruments, large orchestral moments', 'Electronic scores, tension, tight schedules'],
        ] },
        { type: 'p', text: 'Most scores are hybrids: programmed foundations with live solo instruments such as flute, strings, percussion or voice on top.' },
        { type: 'h2', text: 'What should be delivered for the final mix?' },
        { type: 'list', items: [
            '**Each cue named and numbered**, matching the reel and timecode.',
            '**Stems** — separate files for groups such as strings, percussion, voices and synthesisers, so the mixer can adjust them around dialogue.',
            '**The right channel format** — stereo, 5.1 or an immersive format, as the mixing studio requests.',
            '**A cue sheet** — every piece of music with its length, composer and publisher, needed for royalties and by broadcasters and streaming platforms.',
            '**Licences** for any existing music used.',
        ] },
        { type: 'p', text: 'How music sits with dialogue and effects is covered in [sound design and mixing](/blog/sound-design-and-mixing/).' },
        { type: 'h2', text: 'Who owns the music?' },
        { type: 'p', text: 'This is set by the contract between the producer and the composer, and it should be agreed in writing before work starts: who owns the recordings and the compositions, where the film can use them, and how royalties are handled. Using an existing song or piece needs separate permission from its owners. For the basics, see [music for ads: library, original and licensing](/blog/music-for-ads-licensing-india/). This is general information, not legal advice.' },
        { type: 'h2', text: 'What are the common mistakes?' },
        { type: 'list', items: [
            '**Wall-to-wall music** — when everything is scored, nothing stands out.',
            '**Music fighting dialogue** — busy melodies in the same range as the voice.',
            '**Re-editing after scoring** — every trimmed shot breaks the timing of a cue.',
            '**Copying the temp track** — both a creative and a legal risk.',
            '**Too little time** — the score is the last creative stage and often gets squeezed.',
        ] },
        { type: 'tip', text: 'Agree the picture-lock date with the composer in advance and protect it. Every week of late changes to the edit is a week taken from the music.' },
    ],
    faqs: [
        { q: 'What does BGM mean?', a: 'Background music: the score that plays under scenes. In Telugu and other Indian film industries, “BGM” is the everyday word for it.' },
        { q: 'When should a composer join a film?', a: 'As early as possible for conversations and themes, and in earnest once the edit is close to locked. Bringing the composer in only at the end leaves too little time.' },
        { q: 'Can library or AI-generated music be used as a score?', a: 'Library music is used in low-budget films, ads and documentaries, with the right licence. AI music tools exist, but check the tool’s licence terms carefully. Neither is written to your picture the way a composed score is.' },
        { q: 'What is a spotting session?', a: 'A meeting where the director and composer watch the locked film and decide, scene by scene, where music begins and ends and what each cue should achieve.' },
    ],
};

export default article;
