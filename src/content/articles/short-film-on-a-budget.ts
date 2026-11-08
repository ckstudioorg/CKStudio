/** Text of "How to Make a Short Film on a Budget: From Script to Festival". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'To make a good short film on a small budget, write a story that fits your resources — few locations, few characters, a running time of about 5 to 15 minutes — and spend your money where audiences notice most: clear sound, good performances and solid post-production (edit, colour grade, sound mix). Plan every shot before the shoot, get written permissions for locations, actors and music, then release online or submit to festivals with subtitles and a strong poster and trailer.',
    keyPoints: [
        'Write for what you can access: few locations and characters.',
        'Sound quality matters more than camera brand.',
        'Spend on post-production: edit, grade, mix.',
        'Plan release — festivals, YouTube or both — before you shoot.',
    ],
    body: [
        { type: 'h2', text: 'How do you write a short film for a small budget?' },
        { type: 'list', items: [
            'One strong idea, one main character, one turning point.',
            'Locations you can access for free or cheaply — a house, a shop, a college, a village.',
            'Mostly day scenes; night shoots need more lights and crew.',
            'No crowds, stunts or period settings unless they are essential.',
            'Aim for 5 to 15 minutes — shorter films are easier to finish and to programme at festivals.',
        ] },
        { type: 'h2', text: 'Where should the money go?' },
        {
            type: 'table',
            head: ['Spend more on', 'Save on'],
            rows: [
                ['Sound recording and mixing', 'Expensive camera rentals — modern affordable cameras and even phones can look good'],
                ['Actors who can really act', 'Large crews'],
                ['Food and transport for cast and crew', 'Locations — use what you can access'],
                ['Colour grading and editing', 'Many shoot days — plan tightly'],
                ['Music you have rights to', 'Effects shots you can write around'],
            ],
        },
        { type: 'h2', text: 'How do you plan the shoot?' },
        { type: 'steps', items: [
            'Break the script into scenes and list everything each scene needs.',
            'Make a shot list and simple storyboard — see [AI pre-looks](/blog/ai-pre-looks-and-pre-teasers-for-movies/) for fast visual planning.',
            'Schedule by location, not script order, to save time.',
            'Rehearse with actors before the shoot day.',
            'Get written permission for every location and a release from every actor.',
            'Bring backups: batteries, memory cards and a second microphone.',
        ] },
        { type: 'p', text: 'Our [pre-production checklist](/blog/pre-production-checklist-for-ads-and-films/) covers everything in detail.' },
        { type: 'h2', text: 'What matters most in post-production?' },
        { type: 'list', items: [
            '**Edit** — cut anything that does not move the story; most first cuts are too long.',
            '**Sound** — clean dialogue, add ambience and effects, and mix properly.',
            '**Colour** — a consistent grade makes a low-budget film look intentional. See [DI and colour correction](/blog/di-and-colour-correction-explained/).',
            '**Music** — original or properly licensed; see [music licensing](/blog/music-for-ads-licensing-india/).',
            '**Subtitles** — English subtitles open your film to festivals and wider audiences.',
        ] },
        { type: 'h2', text: 'How do you release a short film?' },
        { type: 'list', items: [
            '**Festivals** — many festivals accept submissions through online platforms such as FilmFreeway; check each festival’s rules on premieres and online releases before posting publicly.',
            '**YouTube** — reach a wide audience; use a strong title, thumbnail and description (see [YouTube SEO for brands](/blog/youtube-seo-for-brands/)).',
            '**Screenings** — film clubs, colleges and community screenings build an audience and feedback.',
            '**Promotion** — a poster, a 30–60 second trailer and behind-the-scenes clips. See [movie poster design](/blog/movie-poster-design-guide/).',
        ] },
        { type: 'p', text: 'Short films released only online do not go through CBFC certification, but public screenings in cinemas do — see our [CBFC guide](/blog/cbfc-certification-guide/).' },
        { type: 'h2', text: 'What are the most common first short film mistakes?' },
        { type: 'list', items: [
            'A story too big for the budget — and an unfinished film',
            'Recording sound only with the camera’s built-in microphone',
            'Too many locations and company moves in one day',
            'A first cut that is far too long',
            'Using popular songs without permission, so the film cannot be screened or posted',
            'No subtitles, poster or trailer when festival deadlines arrive',
        ] },
        { type: 'tip', text: 'Record ten seconds of silence (“room tone”) at every location. Your sound editor will use it to make dialogue cuts seamless.' },
        { type: 'p', text: 'CK Studio offers editing, colour grading, sound supervision and DCP for independent and debut filmmakers as part of our [movie post-production](/services/movie-post-production/) service.' },
    ],
    faqs: [
        { q: 'How long should a short film be?', a: 'Many strong short films run 5 to 15 minutes. Check the length limits of the festivals you plan to enter.' },
        { q: 'Can I shoot a short film on a phone?', a: 'Yes. Good light, steady shots, careful framing and especially clean sound matter more than the camera. Many festivals accept films shot on phones.' },
        { q: 'Do short films need CBFC certification?', a: 'Not for online-only release. Films shown publicly in cinemas need CBFC certification; festivals have their own rules.' },
        { q: 'Should I release my short film on YouTube or at festivals first?', a: 'If you want festival selections, check each festival’s premiere rules first — some do not accept films already public online. You can release on YouTube after the festival run.' },
    ],
};

export default article;
