/** Text of "Movie Promotion Timeline: From Title Announcement to Release Day and After". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'Many Indian film campaigns build over two to three months before release: a title announcement and first look, a glimpse or teaser, lyrical songs released one by one, the trailer about two to three weeks out, a pre-release event and release-week promos, then post-release promos and the OTT launch. Plan the assets, certification and media together so each release builds on the last.',
    keyPoints: [
        'Start promotion months before release, not weeks.',
        'Release assets in a rising order: look → teaser → songs → trailer.',
        'Keep certification and DCP delivery inside the plan.',
        'Promotion continues after release and again for OTT.',
    ],
    body: [
        { type: 'h2', text: 'A typical film promotion timeline' },
        {
            type: 'table',
            head: ['When (approximate)', 'What to release', 'What to prepare'],
            rows: [
                ['3 months or more before', 'Title announcement and title logo', 'Title design, announcement poster, social media kit'],
                ['10–12 weeks before', 'First-look poster and glimpse', 'Key art, character posters, a 15–60 second glimpse'],
                ['8–10 weeks before', 'Teaser', 'Teaser cut, music, CBFC certificate for cinemas'],
                ['4–8 weeks before', 'Lyrical songs, one at a time', 'Lyrical videos, song posters, Reels cut-downs'],
                ['2–3 weeks before', 'Trailer', 'Trailer, certification, a trailer launch event'],
                ['Release week', 'Pre-release event, release trailer, promos', 'Event screens, TV spots, cinema DCPs delivered'],
                ['After release', 'Success promos, reaction videos, songs', 'Fresh cut-downs from reviews and audience reactions'],
                ['OTT launch', 'OTT trailer and posters', 'Platform-specific artwork and versions'],
            ],
        },
        { type: 'p', text: 'Every film is different: big-star films can announce earlier and build longer; smaller films often compress the plan and lean on songs and social media.' },
        { type: 'h2', text: 'Which design assets does a film campaign need?' },
        { type: 'list', items: [
            'Title logo in several versions (colour, white, one-line)',
            'First-look poster and character posters',
            'Release-date and song posters',
            'Hoardings, standees and theatre display material',
            'Social media templates for daily updates',
            'Pre- and post-credit designs for the film itself',
        ] },
        { type: 'p', text: 'See our [movie publicity designs and pitch decks](/services/movie-post-production/), and if you are still raising finance, our guide to the [movie pitch deck](/blog/how-to-build-a-movie-pitch-deck/).' },
        { type: 'h2', text: 'How do you keep the momentum between releases?' },
        { type: 'list', items: [
            'Plan one release every week or two in the final two months.',
            'Make vertical cut-downs of every asset for Reels and Shorts.',
            'Use behind-the-scenes clips, making-of videos and cast interviews.',
            'Release songs as lyrical videos first, then full video songs later.',
        ] },
        { type: 'h2', text: 'How should songs be released?' },
        { type: 'steps', items: [
            'Announce the song with a poster and a short promo a few days ahead.',
            'Release the lyrical video at a fixed, announced time.',
            'Post vertical clips of the hook line and the dance step for Reels and Shorts.',
            'Share behind-the-scenes clips with the singers and composer.',
            'Release the full video song later, once the audience knows the music.',
        ] },
        { type: 'h2', text: 'How do you know the promotion is working?' },
        { type: 'list', items: [
            'Views and engagement in the first 24 hours, compared with similar films',
            'What people say in comments — excitement, questions, complaints',
            'Song streams and how many people use the song in their own Reels',
            'Trailer reactions from fans, critics and creators',
            'Advance bookings once they open',
        ] },
        { type: 'p', text: 'If one asset underperforms, the next can be adjusted — a different song first, a sharper trailer cut, more character promos.' },
        { type: 'h2', text: 'Where do certification and delivery fit?' },
        { type: 'p', text: 'Trailers and promos shown in cinemas need [CBFC certification](/blog/cbfc-certification-guide/), and the film needs its certificate before release. Cinemas need [DCPs](/blog/what-is-a-dcp-cinema-delivery-guide/) in time for testing. Put both in the promotion calendar with buffers — they are the deadlines that cannot move.' },
        { type: 'tip', text: 'Make a one-page campaign calendar that shows every asset, its release date, the person responsible and its certification status. Share it with the whole team every week.' },
        { type: 'p', text: 'CK Studio supports films from [pre-looks and pitch decks](/blog/ai-pre-looks-and-pre-teasers-for-movies/) to teasers, trailers, lyrical videos, publicity designs, DI and DCP. See our [movie post-production](/services/movie-post-production/) service.' },
        { type: 'p', text: 'Related guides: [title sequence and end credits design](/blog/title-sequence-end-credits-design/), [submitting your film to festivals](/blog/film-festival-submission-guide/) and [vertical micro-dramas](/blog/vertical-micro-dramas/).' },
    ],
    faqs: [
        { q: 'When should film promotion start?', a: 'Ideally two to three months before release, with the title announcement and first look; bigger films often start earlier.' },
        { q: 'What is the right order for releasing a teaser, songs and the trailer?', a: 'Most campaigns release a first look or glimpse, then the teaser, then songs one at a time, and the trailer two to three weeks before release.' },
        { q: 'How many songs should be released before the film?', a: 'Often most of the album, one at a time, so each song gets its own attention — but keep at least one surprise for the theatre if the story allows.' },
        { q: 'Should we promote again for the OTT release?', a: 'Yes. An OTT launch reaches viewers who missed the theatrical run, so a fresh trailer, artwork and short promos are worth making.' },
    ],
};

export default article;
