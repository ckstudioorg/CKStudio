/** Text of "Movie Poster Design: How to Make First-Look, Character and Release Posters That Get Noticed". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'A strong movie poster sells one feeling in one glance: a single striking image, a clear title design that signals the genre, and a hierarchy where the star, title and release information are readable from a distance and on a phone. A release campaign usually needs a title poster, a first-look poster, character posters, song and event posters, and a final release poster, each adapted for print, theatres and social media.',
    keyPoints: [
        'One image, one idea, one feeling.',
        'The title design does as much work as the photo.',
        'Design for a phone thumbnail first; it must still read.',
        'Plan the whole poster series together so it looks like one campaign.',
    ],
    body: [
        { type: 'h2', text: 'What makes a movie poster work?' },
        { type: 'list', items: [
            '**A single focal point** — one face, one moment or one symbol, not a collage of everything.',
            '**Genre at a glance** — colour, light and type tell the audience if it is action, romance, horror or family.',
            '**Clear hierarchy** — the eye goes to the image, then the title, then the cast and date.',
            '**Mystery** — the best posters raise a question the film answers.',
            '**Readability** — the title must work as a tiny thumbnail on a phone.',
        ] },
        { type: 'h2', text: 'Which posters does a film campaign need?' },
        {
            type: 'table',
            head: ['Poster', 'When', 'Purpose'],
            rows: [
                ['Title announcement', 'At the start of promotion', 'Introduce the title design and the mood'],
                ['First look', 'Weeks to months before release', 'Reveal the hero, the world and the tone'],
                ['Character posters', 'Through the campaign', 'Introduce each main character'],
                ['Song posters', 'Before each lyrical release', 'Announce songs and keep momentum'],
                ['Event posters', 'Before teaser, trailer or pre-release events', 'Drive attention to each event'],
                ['Release poster', 'Release week', 'The final, complete key art with the date and theatres'],
            ],
        },
        { type: 'p', text: 'See our [movie promotion timeline](/blog/movie-promotion-timeline/) for how these fit around the teaser, songs and trailer.' },
        { type: 'h2', text: 'Why does title design matter so much?' },
        { type: 'p', text: 'The title logo appears on every poster, video end card, hoarding and social post — often for months. A custom title design, built around the film’s genre and story, becomes the film’s brand. It should work in Telugu and English (or every release language), in colour and in white, and be legible as a small image.' },
        { type: 'h2', text: 'How is a movie poster made?' },
        { type: 'steps', items: [
            'Read the script or synopsis and agree the one feeling the poster must sell.',
            'Sketch several layout ideas before any photo shoot.',
            'Plan a poster photo shoot, or select stills, with lighting that matches the concept.',
            'Composite, retouch and colour grade the image so it matches the film’s look.',
            'Design the title and the credit block, and set the hierarchy.',
            'Adapt the design for every size and language.',
        ] },
        { type: 'h2', text: 'Which sizes does a poster campaign need?' },
        { type: 'list', items: [
            'Print posters and hoardings in the sizes your distributor and printers specify, in CMYK at print resolution',
            'Theatre display materials such as standees and lobby cards',
            'Square (1:1) and portrait (4:5) for Instagram and Facebook feeds',
            'Vertical 9:16 for Stories, Reels covers and WhatsApp status',
            'Wide 16:9 for YouTube thumbnails, website banners and video end cards',
        ] },
        { type: 'p', text: 'Design the master at a large size with room around the subject, so each crop keeps the focal point. Our [video size cheat sheet](/blog/video-ad-sizes-aspect-ratios-cheat-sheet/) lists the digital formats.' },
        { type: 'h2', text: 'What are common poster mistakes?' },
        { type: 'list', items: [
            'Too many faces and too much text',
            'A title that is unreadable at thumbnail size',
            'Heavy retouching that makes actors look unlike themselves',
            'Every poster in a different style, so the campaign does not feel connected',
            'Credits added at the end without space planned for them',
        ] },
        { type: 'tip', text: 'Shrink your poster to the size of a phone thumbnail and show it to someone for one second. If they cannot tell the genre and read the title, simplify.' },
        { type: 'p', text: 'CK Studio designs movie publicity — title designs, first looks, character and release posters — alongside [teasers, trailers and lyrical videos](/services/movie-post-production/), so the whole campaign looks like one film. See also [teaser vs trailer vs promo](/blog/teaser-vs-trailer-vs-promo/).' },
    ],
    faqs: [
        { q: 'What is a first-look poster?', a: 'The first official poster showing the film’s lead and look, released early in the campaign to introduce the film’s world and tone.' },
        { q: 'How long does it take to design a movie poster?', a: 'A single poster can take days to a couple of weeks, depending on whether a photo shoot is needed, how much compositing is involved and the number of versions.' },
        { q: 'Should we do a special photo shoot for posters?', a: 'For the main key art, yes. Stills from the film are rarely lit or framed for posters; a dedicated shoot gives better images to work with.' },
        { q: 'Can AI help design movie posters?', a: 'AI is useful for exploring concepts and backgrounds quickly, but the final poster should use real images of the cast with their approval, finished by a designer.' },
    ],
};

export default article;
