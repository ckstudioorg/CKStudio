/** Text of "Dubbing a Film for a Pan-India Release: M&E, Lip Sync and Certification". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'Dubbing a film into other languages starts with a clean M&E track (the music and effects without dialogue), then dialogue adapted to match lip movements and timing, voice casting and recording for each language, and a fresh mix for every version. Every dubbed version must be certified by the CBFC — the e-Cinepramaan portal also lets you apply for several language versions together — and each needs its own DCP, subtitles and OTT files.',
    keyPoints: [
        'Plan the M&E track during sound post, not after the release.',
        'Adapt dialogue for lip sync and culture — don’t translate word for word.',
        'Cast voices that match the original actors’ age, energy and screen presence.',
        'Certify and deliver every language version.',
    ],
    body: [
        { type: 'h2', text: 'What is an M&E track, and why does it matter?' },
        { type: 'p', text: 'The **M&E (music and effects) track** is the film’s full soundtrack with the dialogue removed: score, sound effects, Foley (footsteps, cloth, props) and ambience. Dubbing studios lay the new dialogue over it. If dialogue was recorded on location together with other sounds — a door slam or crowd noise on the same microphone — those sounds disappear when the dialogue is removed and must be rebuilt. That is why the M&E should be planned during sound post-production; see [sound design and mixing](/blog/sound-design-and-mixing/).' },
        { type: 'h2', text: 'What are the steps in dubbing a film?' },
        { type: 'steps', items: [
            '**Lock the picture** and get the final stems — separate dialogue, music and effects — from the mix.',
            '**Prepare and check the M&E**, filling any gaps where effects were lost with the dialogue.',
            '**Adapt the dialogue** — a dubbing writer rewrites each line to fit the lip movements, timing and culture of the new audience.',
            '**Cast the voices** — artists who match each character’s age, energy and personality; lead actors sometimes dub their own roles.',
            '**Record**, loop by loop, in a dubbing studio, with a director guiding performance and sync.',
            '**Edit and sync** the recordings to the picture, line by line.',
            '**Mix each language** with the M&E, to the same standard as the original.',
            '**Quality-check with native speakers** — meaning, slang, names, and sync on every line.',
            '**Make titles, credits and on-screen text** for each language version.',
            '**Certify and deliver** — CBFC certification, DCPs for cinemas, OTT and broadcast files.',
        ] },
        { type: 'h2', text: 'How do you adapt dialogue so it doesn’t feel dubbed?' },
        { type: 'list', items: [
            '**Match mouth shapes in close-ups** — open vowels where the mouth opens, closed sounds where the lips meet.',
            '**Match length and rhythm**, so lines start and end with the actor’s mouth.',
            '**Translate meaning, not words** — jokes, proverbs and punch dialogues need equivalents that land in the new language.',
            '**Keep each character’s voice** — the hero’s style, the villain’s menace, local flavour where it suits the story.',
            '**Check names, places and song references** — some stay, some are adapted for the audience.',
        ] },
        { type: 'h2', text: 'Does each dubbed version need CBFC certification?' },
        { type: 'p', text: 'Yes. A dubbed version is certified as its own version of the film, so plan certification time for every language before your release date. Applications are made online through **e-Cinepramaan**, which also offers an option to submit several language versions of a film together. The CBFC’s procedures for dubbed films have changed over the years, so check its current FAQ when you apply, and see our [CBFC certification guide](/blog/cbfc-certification-guide/) for the overall process.' },
        { type: 'h2', text: 'Dubbing or subtitles?' },
        {
            type: 'table',
            head: ['', 'Dubbing', 'Subtitles'],
            rows: [
                ['Best for', 'Theatrical releases and mass audiences', 'Festivals, OTT viewers who prefer the original, limited releases'],
                ['Viewer experience', 'Watch without reading', 'The original performances, but reading is needed'],
                ['Time and cost', 'Higher: writers, artists, studios and a mix per language', 'Lower: translation, timing and checks'],
                ['Deliverables', 'A new mix, DCP and OTT files per language', 'Subtitle files per language — see [subtitles and captions](/blog/subtitles-and-captions-guide/)'],
            ],
        },
        { type: 'h2', text: 'Can AI help with film dubbing?' },
        { type: 'p', text: 'AI tools can speed up first-draft translations, temporary dubs for planning, and some clean-up work. For a theatrical film, human dubbing artists still deliver the performances audiences expect, and cloning an actor’s voice needs their consent and a clear agreement. For short promotional content the balance is different — see [AI dubbing for ads](/blog/ai-dubbing-telugu-hindi-tamil-ads/).' },
        { type: 'h2', text: 'How early should you plan for dubbing?' },
        { type: 'list', items: [
            '**During the shoot** — record clean dialogue, plus wild tracks and room tone.',
            '**During sound post** — build the M&E and keep stems organised.',
            '**Before marketing starts** — trailers, teasers and songs need dubbed versions well before the film; see the [movie promotion timeline](/blog/movie-promotion-timeline/).',
            '**Before fixing release dates** — leave time to certify and deliver every version; see [OTT delivery specs](/blog/ott-delivery-specs/).',
        ] },
        { type: 'tip', text: 'Ask your sound team for a full, checked M&E at the end of the mix — not when the first dubbing studio asks for it. Rebuilding effects later, for every language, is slow and expensive.' },
    ],
    faqs: [
        { q: 'Does each dubbed version need CBFC certification?', a: 'Yes, every language version is certified. You can apply through e-Cinepramaan, which also offers an option to apply for several language versions of a film together.' },
        { q: 'What is an M&E track?', a: 'It is the film’s soundtrack without dialogue — music, effects, Foley and ambience — which dubbing studios combine with the new dialogue for each language.' },
        { q: 'How long does dubbing a film take?', a: 'It depends on the film’s length, the number of languages and artist availability. Plan weeks, not days, for each language, and start well before your release date.' },
        { q: 'Do trailers and songs need dubbing too?', a: 'Yes. Marketing in each language usually starts before the film releases, so trailers, teasers and songs are often dubbed first.' },
    ],
    sources: [
        { label: 'CBFC — frequently asked questions', url: 'https://cbfcindia.gov.in/cbfcAdmin/faq.php' },
        { label: 'e-Cinepramaan — CBFC online certification portal', url: 'https://www.ecinepramaan.gov.in/' },
    ],
};

export default article;
