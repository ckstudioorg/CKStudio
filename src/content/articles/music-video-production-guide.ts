/** Text of "How to Make a Music Video for an Independent Telugu Song". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'Start with one strong visual idea that fits the song’s feeling, plan it shot by shot against the lyrics, and shoot the performance (lip-synced to playback) plus a simple story or mood in one or two well-planned days. Edit to the beat, grade for a consistent look, and release a 16:9 video on YouTube with vertical cut-downs for reels and Shorts. Make sure you own or have licensed the song, and get written permission from everyone who appears.',
    keyPoints: [
        'One clear visual idea beats many half-ideas.',
        'Plan shots against the song’s structure — pallavi, charanams, interludes.',
        'Play the final mix on set; real singing makes lip-sync believable.',
        'Release vertical cut-downs with the full video.',
    ],
    body: [
        { type: 'h2', text: 'Which kind of music video suits your song?' },
        {
            type: 'table',
            head: ['Type', 'Works for', 'Notes'],
            rows: [
                ['Performance', 'Artists and bands with stage presence', 'The simplest to plan; locations and light do the heavy lifting'],
                ['Narrative', 'Story songs — love, family, nostalgia', 'Needs actors and a clear story that doesn’t fight the lyrics'],
                ['Concept or visual art', 'Mood songs and experimental tracks', 'Strong art direction, VFX or animation'],
                ['Dance', 'Beat-driven songs', 'A choreographer and rehearsal time'],
                ['Live session', 'Acoustic and unplugged songs', 'A great audio recording matters as much as the picture'],
                ['Lyric video', 'A first release on a small budget', 'See [lyrical videos](/blog/lyrical-videos-turning-a-song-into-a-campaign/)'],
            ],
        },
        { type: 'h2', text: 'How do you plan the shoot?' },
        { type: 'steps', items: [
            '**Map the song** — mark the pallavi, each charanam, the interludes and the big moments with their timecodes.',
            '**Give each section a visual job** — introduce, build, release, resolve.',
            '**Write a shot list per section**, with the lines each shot covers.',
            '**Choose locations** that match the mood, and check permissions — see [shooting locations in Hyderabad](/blog/shooting-locations-hyderabad/).',
            '**Plan wardrobe and colour** so the whole video feels like one world.',
            '**Schedule by location and light**, not in song order.',
            '**Arrange playback** — a speaker loud enough for the artist to sing along to the final mix.',
        ] },
        { type: 'h2', text: 'How do you keep the budget under control?' },
        { type: 'list', items: [
            '**One or two locations**, chosen for light and look, instead of many company moves.',
            '**Golden hour and night** for production value without big lighting rigs.',
            '**A small, experienced crew** rather than a large inexperienced one.',
            '**Spend on one hero moment** — a crane shot, a special location, a simple effect — and keep the rest simple.',
            '**Friends and family as extras**, with signed releases.',
        ] },
        { type: 'h2', text: 'How do you edit and finish it?' },
        { type: 'list', items: [
            '**Cut to the beat**, and change energy where the song changes.',
            '**Mix performance and story** so neither drags.',
            '**Grade for one consistent look** — see [DI and colour correction](/blog/di-and-colour-correction-explained/).',
            '**Credit everyone** — singers, composer, lyricist, musicians and crew — in the description and on the end card.',
            '**Design a strong thumbnail** — a clear face and a few words, readable on a phone.',
            '**Cut vertical versions** of the best 15–30 seconds for reels and Shorts.',
        ] },
        { type: 'h2', text: 'What rights do you need?' },
        { type: 'list', items: [
            '**The song itself.** If you wrote, composed and recorded it, you own it — keep agreements with co-writers, singers and producers in writing. If it is someone else’s song, a cover or a remix, you need the right licence from its owners before releasing it.',
            '**Samples and loops** — licensed for commercial release.',
            '**People on screen** — signed releases from actors, dancers and recognisable extras (see [casting](/blog/casting-actors-and-models-for-ads/)).',
            '**Locations, footage and fonts** — permissions and licences for anything you didn’t create.',
        ] },
        { type: 'h2', text: 'How should you release it?' },
        { type: 'steps', items: [
            'Tease it with short clips and behind-the-scenes reels a week or two before.',
            'Premiere the full video on YouTube, with lyrics in the description and captions on.',
            'Release the audio on streaming services the same day, through a music distributor.',
            'Post vertical cut-downs for several weeks, each with a different hook.',
            'Share it with playlists, music pages and creators who might use the song.',
        ] },
        { type: 'tip', text: 'Play the song loud on set and have the artist sing along fully, not just mouth the words. Real breathing and effort are what make lip-sync look believable.' },
    ],
    faqs: [
        { q: 'How long does a music video shoot take?', a: 'Many independent music videos are shot in one or two well-planned days. Narrative or dance-heavy videos may need more, plus rehearsal time.' },
        { q: 'Do we need permission to shoot in public places?', a: 'For a commercial shoot, usually yes — especially at heritage sites, parks, metro stations and private property. Check before the shoot day, not on it.' },
        { q: 'Should we also make a lyric video?', a: 'A lyric video is a quick, affordable release that helps people learn the song, and it can come out before or alongside the main video.' },
        { q: 'Can we use AI visuals in a music video?', a: 'Yes, as a creative tool. Make sure you have the rights to what you use, and follow YouTube’s rules for disclosing realistic AI-generated or altered content.' },
    ],
    sources: [
        { label: 'YouTube Help — Disclosing use of altered or synthetic content', url: 'https://support.google.com/youtube/answer/14328491' },
    ],
};

export default article;
