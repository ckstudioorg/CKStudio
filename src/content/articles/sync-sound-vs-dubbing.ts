/** Text of "Sync Sound vs Dubbing: Recording Dialogue on Set or in the Studio". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'Sync sound means recording the actors’ real voices on set during the take. Dubbing, also called ADR, means re-recording the dialogue later in a studio while the actor watches the scene. Sync sound keeps the natural performance and saves dubbing time, but needs quiet locations and a disciplined set. Dubbing gives clean, controllable sound and makes other-language versions easier. Most films use both: sync sound where possible, ADR for lines that were spoiled by noise.',
    keyPoints: [
        'Sync sound captures the performance as it happened.',
        'Dubbing gives clean sound anywhere, at the cost of studio time.',
        'The choice affects locations, schedule, casting and budget.',
        'Even dubbed films should record good guide sound on set.',
    ],
    body: [
        { type: 'h2', text: 'What exactly are sync sound and ADR?' },
        { type: 'p', text: 'With **sync sound**, a production sound mixer records dialogue during filming using a boom microphone held above the actors and small wireless microphones hidden in clothing. That recording becomes the dialogue in the finished film. With **dubbing or ADR** (automated dialogue replacement), the on-set recording is used only as a guide. The actor, or a dubbing artist, later performs each line again in a studio, matching lip movement. In Indian film industries, dubbing has long been the usual method; sync sound is used more and more.' },
        { type: 'h2', text: 'How do the two compare?' },
        { type: 'table', head: ['', 'Sync sound', 'Dubbing (ADR)'], rows: [
            ['Performance', 'The real moment, with natural breath and overlap', 'Recreated later; can lose or sometimes improve feeling'],
            ['Sound quality', 'Depends on the location', 'Clean and consistent'],
            ['Locations', 'Must be quiet or controllable', 'Noisy places are possible'],
            ['On set', 'Silence during takes; more time per set-up', 'Faster; noise matters less'],
            ['After the shoot', 'Dialogue editing and clean-up', 'Studio sessions for every actor'],
            ['Casting', 'Actors must speak the language well', 'A different voice can be used'],
            ['Other languages', 'Separate dubs needed anyway', 'Fits naturally into the workflow'],
            ['Risk', 'A ruined take may need ADR', 'Actor availability; flat performances'],
        ] },
        { type: 'h2', text: 'When does sync sound make sense?' },
        { type: 'list', items: [
            '**Performance-led drama and comedy**, where timing and overlapping talk matter.',
            '**Controlled locations** — sets, quiet houses, studios.',
            '**Actors fluent in the language**.',
            '**Tight post-production schedules** with little time for dubbing sessions.',
            '**Documentaries, interviews and testimonials** — always recorded live.',
        ] },
        { type: 'h2', text: 'When is dubbing the better choice?' },
        { type: 'list', items: [
            '**Noisy locations** — markets, roads, wind, generators, crowds.',
            '**Action scenes**, rain and wind machines.',
            '**Actors working outside their own language**.',
            '**Dialogue changes after the shoot**.',
            '**Many language versions** — see [dubbing a film for a pan-India release](/blog/film-dubbing-for-pan-india-release/).',
        ] },
        { type: 'h2', text: 'What does good sync sound need on set?' },
        { type: 'steps', items: [
            '**A sound mixer and boom operator** hired as early as the camera team.',
            '**A location visit for sound** — traffic, aircraft, air conditioning, neighbours.',
            '**Quiet equipment** — generators placed far away, quiet lights and fans.',
            '**Costume and microphone planning** — fabrics that do not rustle.',
            '**Silence on “roll sound”** and patience for a passing lorry.',
            '**Room tone** — thirty seconds of the empty room recorded at each location, for the editor.',
            '**Wild tracks** — important lines recorded again straight after the scene, without the camera.',
            '**A sound report** noting any problem takes.',
        ] },
        { type: 'h2', text: 'How does an ADR session work?' },
        { type: 'steps', items: [
            '**Spotting** — the director and sound team list the lines to be replaced.',
            '**Preparing** — each line is cut into a short loop with the picture.',
            '**Recording** — the actor watches and listens to the original, then performs in time with their own lips.',
            '**Choosing takes** — the best for sync and feeling.',
            '**Editing** — fine adjustment of timing.',
            '**Mixing** — the clean voice is given the sound of the room or street it should be in.',
        ] },
        { type: 'p', text: 'That last step matters: dubbing that sounds “too clean” feels detached from the picture. The mix stage is explained in [sound design and mixing](/blog/sound-design-and-mixing/).' },
        { type: 'h2', text: 'What about ads and corporate films?' },
        { type: 'p', text: 'Many ads have no on-screen dialogue at all, only voice-over; see [voice-over for ads](/blog/voice-over-for-ads/). Where people speak to camera, such as founders, doctors and customers, live sound is essential, because their own voice is the point. For acted ads with celebrities, dubbing is common, since star time on set is short and versions in several languages are needed.' },
        { type: 'h2', text: 'How do you decide for your film?' },
        { type: 'p', text: 'Decide in pre-production, not on the first day. Look at the script’s locations, the cast’s languages, the release plan and the post-production schedule. A common plan is sync sound for interiors and quiet scenes, with ADR budgeted for exteriors and action. Whatever you choose, record the best guide track you can. Dialogue recording, dubbing and mixing are part of [movie post-production](/services/movie-post-production/).' },
        { type: 'tip', text: 'Budget a few ADR days even on a sync-sound film. There is always a line under an aircraft or a word the director wants to change.' },
    ],
    faqs: [
        { q: 'Is sync sound more expensive than dubbing?', a: 'It moves the cost. Sync sound needs a sound crew and more time on set; dubbing needs studio days for each actor. Which is cheaper depends on the script, the locations and the cast.' },
        { q: 'Can AI clean up noisy location sound?', a: 'Modern noise-reduction tools can rescue many recordings that once needed ADR, but not all, and heavy processing can make voices sound unnatural. See [AI in post-production](/blog/ai-in-post-production/).' },
        { q: 'Why do some dubbed films feel out of sync?', a: 'Either the new lines do not match lip movement closely, or the voice has not been mixed to sound like it belongs in the scene. Both are fixable with time in the edit and the mix.' },
        { q: 'What is a wild track?', a: 'Dialogue or sound recorded on location without the camera running, often right after a scene. It matches the room and the performance better than a studio recording made weeks later.' },
    ],
};

export default article;
