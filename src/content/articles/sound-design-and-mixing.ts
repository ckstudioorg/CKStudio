/** Text of "Sound Design and Mixing for Ads and Films, Explained". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'Sound design builds everything you hear that isn’t music: clean dialogue, effects, foley (recreated everyday sounds) and ambience. Mixing then balances it all with the music so every word is clear and the piece plays at the right loudness for where it will be seen. TV, cinema and streaming each publish loudness targets — for example −23 LUFS in the EBU R128 recommendation used by many broadcasters, and −27 LKFS measured on dialogue in Netflix’s specification for its originals — so always mix to the delivery spec you are given.',
    keyPoints: [
        'Sound is half the experience — budget time for it.',
        'Dialogue clarity comes first in every mix.',
        'Loudness targets differ by platform: ask for the spec.',
        'Deliver separate stems, not just one final file.',
    ],
    body: [
        { type: 'h2', text: 'What are the layers of a film’s sound?' },
        {
            type: 'table',
            head: ['Layer', 'What it is', 'Example'],
            rows: [
                ['Dialogue', 'Recorded speech, cleaned and edited', 'Actors’ lines, interviews'],
                ['Voice-over', 'Narration recorded separately', 'The brand voice in an ad'],
                ['Music', 'Score, song or licensed track', 'The ad’s background track'],
                ['Sound effects', 'Designed or library sounds', 'A car door, a whoosh, a product click'],
                ['Foley', 'Everyday sounds re-recorded in sync', 'Footsteps, clothes rustle, cups on a table'],
                ['Ambience', 'The background of a place', 'City traffic, birds, a busy kitchen'],
            ],
        },
        { type: 'h2', text: 'What does a sound designer do?' },
        { type: 'list', items: [
            'Cleans dialogue: removes noise, hum and clicks while keeping the voice natural.',
            'Builds the world: ambience and effects that make each place feel real.',
            'Adds texture and impact: the sizzle of food, the snap of a product, the rise into a reveal.',
            'Creates signature sounds, such as a sonic logo for the brand.',
            'Leaves space for the music and the words that matter.',
        ] },
        { type: 'h2', text: 'What happens in the mix?' },
        { type: 'steps', items: [
            'Dialogue edit and clean-up; re-recording lines (ADR or dubbing) where the location sound can’t be saved.',
            'Effects, foley and ambience laid in and synced.',
            'Music edited to the picture, with its builds and endings placed on the cuts.',
            'A premix of each group (dialogue, music, effects).',
            'The final mix: balance, space, and the emotional rise and fall.',
            'Checks on different speakers — studio monitors, a TV and a phone.',
            'Printing the master mix and the separate stems.',
        ] },
        { type: 'h2', text: 'How loud should a mix be?' },
        { type: 'p', text: 'Loudness is measured in LUFS or LKFS (two names for the same measurement, based on the ITU-R BS.1770 standard). Each destination sets its own target, so the same film is often mixed or adjusted more than once.' },
        {
            type: 'table',
            head: ['Destination', 'Typical target', 'Notes'],
            rows: [
                ['Broadcast TV (many broadcasters)', '−23 LUFS integrated (EBU R128)', 'Each broadcaster publishes its own spec — ask for it'],
                ['Netflix originals', '−27 LKFS ±2 LU, measured on dialogue; true peak no higher than −2 dBTP', 'From Netflix’s published sound mix specification'],
                ['Cinema', 'Mixed in a room calibrated to a reference playback level', 'The cinema plays at a set level; there is no single LUFS target'],
                ['Social media and YouTube', 'Platforms adjust playback loudness', 'Avoid over-compressed, distorted mixes; keep peaks below about −1 dBTP'],
            ],
        },
        { type: 'h2', text: 'What should the audio team deliver?' },
        { type: 'list', items: [
            'The final stereo mix, and a 5.1 surround mix if the film goes to cinema or streaming.',
            'Stems: dialogue, music and effects as separate files.',
            'An M&E (music and effects) track without dialogue, for dubbing into other languages.',
            'Clean voice-over files for future edits.',
            'A music cue sheet listing every track used — see [music licensing for ads](/blog/music-for-ads-licensing-india/).',
        ] },
        { type: 'h2', text: 'How do you brief your audio team?' },
        { type: 'list', items: [
            'Where the film will play and the delivery specs for each destination.',
            'Reference films or ads whose sound you like.',
            'Moments that must hit: the reveal, the product sound, the logo.',
            'Languages and versions needed, so stems and M&E are planned from the start.',
        ] },
        { type: 'tip', text: 'Check the final mix on a phone speaker. That is where most people will hear your ad — if the words are clear there, they will be clear everywhere.' },
        { type: 'p', text: 'Sound is one stage of the wider [post-production process](/blog/what-is-post-production/), and a good mix starts with a well-recorded [voice-over](/blog/voice-over-for-ads/). CK Studio handles sound design and mixing for ads and films — see our [movie post-production](/services/movie-post-production/) service.' },
    ],
    faqs: [
        { q: 'What is foley?', a: 'Foley is the art of re-recording everyday sounds — footsteps, clothes, objects being handled — in sync with the picture, so scenes sound full and real.' },
        { q: 'What is an M&E track?', a: 'An M&E (music and effects) track is the full soundtrack without dialogue. It lets you dub the film into other languages while keeping the original music and effects.' },
        { q: 'What is the difference between LUFS and LKFS?', a: 'None in practice: both are names for loudness measured with the ITU-R BS.1770 method. Europe tends to say LUFS and the US LKFS.' },
        { q: 'Does a short social media video need a proper mix?', a: 'Yes. Clear voice, balanced music and controlled loudness make a video easier to watch, and many viewers judge quality by sound before they notice the picture.' },
    ],
    sources: [
        { label: 'EBU R128 — loudness normalisation recommendation', url: 'https://tech.ebu.ch/publications/r128' },
        { label: 'Netflix — Sound Mix Specifications and Best Practices', url: 'https://partnerhelp.netflixstudios.com/hc/en-us/articles/360001794307' },
        { label: 'ITU-R BS.1770 — loudness measurement', url: 'https://www.itu.int/rec/R-REC-BS.1770' },
    ],
};

export default article;
