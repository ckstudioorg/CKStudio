/** Text of "Music for Ads in India: Library Music, Original Scores and Film Song Licensing". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'There are three main ways to get music for an ad in India: license a track from a production-music library (quick and affordable), commission original music or a jingle (unique to your brand), or license an existing song, such as a film song (powerful but usually the most expensive and slowest, because both the composition and the recording must be cleared with their owners). Whatever you choose, get a written licence that covers the media, territory and duration of your campaign.',
    keyPoints: [
        'Library music: fast, affordable, check the licence covers ads.',
        'Original music: unique, ownable, needs time to compose.',
        'Film songs: two sets of rights — composition and recording.',
        'Licence must match where, how long and in which media the ad runs.',
    ],
    body: [
        { type: 'p', text: '**This is general information, not legal advice.** Music rights depend on each contract; check with the rights holders or a lawyer for your campaign.' },
        { type: 'h2', text: 'What are the options for ad music?' },
        {
            type: 'table',
            head: ['Option', 'Pros', 'Cons'],
            rows: [
                ['Production-music library', 'Fast, affordable, huge choice', 'Not unique; other brands may use the same track'],
                ['Commissioned original music', 'Unique, made to fit the edit, can become your brand sound', 'Takes time; cost depends on the composer and musicians'],
                ['Jingle or sonic logo', 'Memorable, builds recognition over years', 'Needs strong writing and consistent use'],
                ['Licensed existing song (film or album)', 'Instant emotion and recognition', 'Usually costly and slower to clear; owners can refuse'],
            ],
        },
        { type: 'h2', text: 'Why does licensing a film song take more work?' },
        { type: 'p', text: 'A song carries more than one set of rights. The **composition** (the music and lyrics) belongs to its composers and lyricists or their publisher, and the **sound recording** belongs to the music label or producer that owns it. Using a song in an ad — synchronising it with pictures — needs permission covering both, from whoever controls those rights. Collecting societies such as IPRS (for authors, composers and publishers) and PPL (for many sound recordings) mainly handle public performance and broadcast licences; permission to put a song in your ad is usually negotiated directly with the rights owners.' },
        { type: 'h2', text: 'What should a music licence cover?' },
        { type: 'list', items: [
            'Which ad or film the music may be used in, and any edits allowed',
            'Media: TV, digital, cinema, outdoor, events',
            'Territory: a state, India or worldwide',
            'Duration: how long the ad can run',
            'Exclusivity, if you do not want competitors to use the same music',
            'Credit requirements, if any',
        ] },
        { type: 'h2', text: 'What happens if music is not licensed?' },
        { type: 'p', text: 'Unlicensed music can lead to takedowns on YouTube and Instagram, blocked or muted videos, ad disapprovals and legal claims. Platforms detect copyrighted music automatically, so “just a few seconds” is not a safe assumption.' },
        { type: 'h2', text: 'How do you choose the right music?' },
        { type: 'steps', items: [
            'Agree the feeling first: warm, energetic, premium, festive, emotional.',
            'Collect two or three reference tracks — for mood only, not to copy.',
            'Decide the route (library, original or licensed) based on budget, time and how long the campaign will run.',
            'Edit the picture with temporary music, then lock the final track.',
            'Mix the music so voice-over and key sounds stay clear, especially on phone speakers.',
        ] },
        { type: 'tip', text: 'If your campaign will run for years, commission original music you own. It becomes part of your brand, like your logo.' },
        { type: 'p', text: 'When we make your film, we plan the music route with you and make sure it is licensed for where the ad will run. See our [ad films and commercials](/services/ad-films-and-commercials/) service, [lyrical videos](/blog/lyrical-videos-turning-a-song-into-a-campaign/) and [what is post-production](/blog/what-is-post-production/).' },
        { type: 'p', text: 'Related guides: [how a background score is made](/blog/background-score-for-films/) and [making a music video for an independent song](/blog/music-video-production-guide/).' },
    ],
    faqs: [
        { q: 'Can I use a Telugu film song in my ad?', a: 'Only with permission from the owners of both the composition and the sound recording, usually through the music label and publisher. Without it, the ad can be taken down and you may face legal claims.' },
        { q: 'Is royalty-free music free to use in ads?', a: '“Royalty-free” usually means you pay once for a licence rather than per use — not that it is free. Check that the licence covers advertising and every media you will use.' },
        { q: 'What is the difference between IPRS and PPL?', a: 'IPRS represents authors, composers and publishers of music, while PPL licenses public performance and broadcast of many sound recordings. Using a song inside an ad is usually licensed directly by the rights owners.' },
        { q: 'Who owns music composed for my ad?', a: 'It depends on the contract. Agree in writing whether you buy the rights outright or license the music for a set use and period.' },
    ],
    sources: [
        { label: 'S.S. Rana & Co. — Direct licensing vs copyright society licensing in India', url: 'https://ssrana.in/?p=45928' },
    ],
};

export default article;
