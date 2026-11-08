/** Text of "Teaser vs Trailer vs Promo: What’s the Difference? (With Typical Lengths)". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'A teaser is a short first look — often 30 to 90 seconds — that builds curiosity without revealing the story. A trailer, usually two to three minutes long, sets up the story, characters and stakes to make people want to buy tickets. Promos are short, targeted cuts — songs, dialogue promos, character glimpses and TV spots — released around them to keep the film in conversation until release day.',
    keyPoints: [
        'Teaser: curiosity and mood, little story.',
        'Trailer: story, stakes and the reason to buy a ticket.',
        'Promos: short, frequent reminders for TV and social media.',
        'Each needs vertical and short versions for phones.',
    ],
    body: [
        { type: 'h2', text: 'What are the main promotional videos for a film?' },
        {
            type: 'table',
            head: ['Asset', 'Typical length', 'Purpose'],
            rows: [
                ['First-look or glimpse video', '15–60 seconds', 'Introduce the title, the look or a star'],
                ['Teaser', '30–90 seconds', 'Build curiosity and set the mood without giving away the story'],
                ['Lyrical video', 'The length of the song', 'Release songs early and grow the audience (see [lyrical videos](/blog/lyrical-videos-turning-a-song-into-a-campaign/))'],
                ['Trailer', '2–3 minutes', 'Set up the story, characters and stakes; sell tickets'],
                ['Release trailer', '1–2 minutes', 'A final, high-energy push in release week'],
                ['TV spots and promos', '10–30 seconds', 'Frequent reminders on TV and social media'],
                ['Character and dialogue promos', '15–45 seconds', 'Spotlight a character, a dialogue or a scene'],
            ],
        },
        { type: 'p', text: 'These lengths are typical, not rules — the right length is whatever keeps viewers wanting more.' },
        { type: 'h2', text: 'What makes a great teaser?' },
        { type: 'list', items: [
            'One strong idea, image or line that sticks',
            'Mood, music and world — not plot summary',
            'A question the audience wants answered',
            'The title and release window at the end',
        ] },
        { type: 'h2', text: 'How is a great trailer structured?' },
        { type: 'steps', items: [
            '**Hook** — a striking moment or line in the first few seconds.',
            '**The world** — where we are and who we follow.',
            '**The conflict** — what goes wrong, and what is at stake.',
            '**Escalation** — the stakes rise and the pace speeds up.',
            '**The montage** — the biggest moments, cut to the music’s peak.',
            '**The sting** — one last line or moment, then the title and release date.',
        ] },
        { type: 'h2', text: 'How are trailers cut?' },
        { type: 'p', text: 'Trailer editors start by watching the whole film and pulling “selects” — the strongest lines, shots and moments. Music usually comes next, because a trailer is cut to its rhythm. The editor then builds the structure, tests versions with the director and producers, and finishes with sound design, colour and graphics. Telugu trailers are often driven by dialogue and the hero’s presence, so line choice matters as much as visuals.' },
        { type: 'h2', text: 'What versions do you need for social media?' },
        { type: 'list', items: [
            'Vertical 9:16 versions for Reels, Shorts and Stories',
            'Short cut-downs of 15–30 seconds with a hook in the first two seconds',
            'Subtitled versions for viewers watching with the sound off',
            'Versions in each release language',
        ] },
        { type: 'p', text: 'See our [video size cheat sheet](/blog/video-ad-sizes-aspect-ratios-cheat-sheet/) for platform formats. Trailers and promos shown in cinemas also need [CBFC certification](/blog/cbfc-certification-guide/).' },
        { type: 'h2', text: 'What does a trailer editor need to start?' },
        { type: 'list', items: [
            'The latest cut of the film, or a near-final assembly',
            'Music options: the score, songs and any licensed trailer music',
            'A dialogue list, with the director’s favourite lines marked',
            'The status of VFX shots, so unfinished ones are avoided or replaced',
            'The title design and key art for the end card',
            'The release date, languages and every version needed',
        ] },
        { type: 'p', text: 'A teaser can usually be cut in days; a trailer often takes one to two weeks of cutting, reviews and finishing, especially when it must be ready in several languages.' },
        { type: 'tip', text: 'Never put the film’s best twist in the trailer. Sell the question, not the answer.' },
        { type: 'p', text: 'CK Studio cuts teasers, trailers, promos and lyrical videos, including our work on the [Baali movie teaser](https://www.youtube.com/watch?v=MIL0vVMcZ9k). See our [movie post-production](/services/movie-post-production/) service.' },
    ],
    faqs: [
        { q: 'What is the difference between a teaser and a trailer?', a: 'A teaser is short and mysterious, built to create curiosity. A trailer is longer and explains the story, characters and stakes to convince people to watch the film.' },
        { q: 'How long should a movie trailer be?', a: 'Most feature film trailers are about two to three minutes. Shorter cuts of 30 to 60 seconds are made for TV and social media.' },
        { q: 'What is a glimpse in Telugu film promotion?', a: 'A glimpse is a very short video — often under a minute — that shows a character, a look or a moment from the film, usually released before the teaser.' },
        { q: 'When should the trailer be released?', a: 'Commonly two to three weeks before release, after the teaser and some songs, so interest peaks in release week. See our [movie promotion timeline](/blog/movie-promotion-timeline/).' },
    ],
};

export default article;
