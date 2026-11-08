/** Text of "Investor Pitch Videos for Startups: What to Show in Two Minutes". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'A good investor pitch video is about one to two minutes long and covers the problem, your solution in action, traction you can prove, the team and the ask — told mostly by the founders, on camera, with real footage of the product, customers and operations. Its job is not to replace the meeting but to make investors want one, so it must be clear, honest and quick to the point.',
    keyPoints: [
        'One to two minutes; get to the point in the first 15 seconds.',
        'Show the product working — do not just describe it.',
        'Founders on camera, speaking naturally.',
        'Only numbers you can prove.',
    ],
    body: [
        { type: 'h2', text: 'Why make a pitch video at all?' },
        { type: 'p', text: 'Investors see many decks. A short video shows things slides cannot: the founders’ energy, the product working, the factory or field operations, and real customers. It also travels — sent ahead of a meeting, played at demo days and shared by people who believe in you.' },
        { type: 'h2', text: 'What structure works best?' },
        { type: 'steps', items: [
            '**Hook (0–15 seconds):** the problem, in a real situation, or a striking number you can back up.',
            '**Solution (15–40 seconds):** the product in action, shown not told.',
            '**Traction (40–70 seconds):** customers, revenue, growth, pilots, partnerships — verifiable.',
            '**Team (70–95 seconds):** why these founders, and who else is on board.',
            '**Ask (95–120 seconds):** what you are raising, what it will achieve, and how to get in touch.',
        ] },
        { type: 'h2', text: 'What should you film?' },
        { type: 'list', items: [
            'Founders speaking to camera or in a relaxed interview',
            'The product being used by real customers',
            'Operations: the team at work, the factory, the field, the warehouse',
            'Simple animated graphics for key numbers and charts',
            'Short customer quotes, with their written consent',
        ] },
        { type: 'h2', text: 'How should founders deliver on camera?' },
        { type: 'list', items: [
            'Know the points, not a memorised script — speak as you would to one investor.',
            'Film several shorter takes of each point rather than one long take.',
            'Wear what you would wear to the meeting.',
            'Slow down; nerves make everyone speak faster.',
        ] },
        { type: 'h2', text: 'What are the most common mistakes?' },
        { type: 'list', items: [
            'Starting with company history instead of the problem',
            'Too long — investors rarely watch beyond two or three minutes',
            'Stock footage instead of the real product and team',
            'Claims and projections that cannot be backed up',
            'No clear ask or contact at the end',
        ] },
        { type: 'p', text: 'Pair the video with a clear deck — see our [business pitch deck guide](/blog/business-pitch-deck-guide/). For films seeking finance, see [how to build a movie pitch deck](/blog/how-to-build-a-movie-pitch-deck/) and [AI pre-teasers](/blog/ai-pre-looks-and-pre-teasers-for-movies/).' },
        { type: 'h2', text: 'How is a pitch video produced?' },
        { type: 'steps', items: [
            'Agree the story and the numbers with the founders, using the deck as the base.',
            'Write a short outline of what each founder will say — points, not a script.',
            'Plan one shoot day: founder interviews in the morning, operations and product in the afternoon.',
            'Design simple animated graphics for key numbers and the market.',
            'Edit to two minutes, then to 30 seconds.',
            'Add music, subtitles and a clean end card with the ask and contact details.',
        ] },
        { type: 'h2', text: 'What should the final frame include?' },
        { type: 'list', items: [
            'The company name and logo',
            'The amount being raised, or the next step you want',
            'A founder’s name, email and phone number',
            'A link to the deck or website',
        ] },
        { type: 'tip', text: 'Make two versions: a 90-second video to send before meetings, and a 30-second version to play at demo days and post on LinkedIn.' },
        { type: 'p', text: 'CK Studio makes investor videos, corporate films and pitch decks for startups and companies in Hyderabad — see our [ad films and commercials](/services/ad-films-and-commercials/) service.' },
    ],
    faqs: [
        { q: 'How long should an investor pitch video be?', a: 'Ideally one to two minutes. A 30-second version is useful for events and social media.' },
        { q: 'Should the founder appear in the pitch video?', a: 'Yes. Investors back people, and seeing founders explain the business in their own words builds confidence.' },
        { q: 'Can we use animation instead of filming?', a: 'Animation works well for explaining the product or the market, but combine it with real footage of the founders and operations for credibility.' },
        { q: 'Should financial projections be in the video?', a: 'Keep detailed projections for the deck and meetings. The video should focus on the problem, product, traction, team and ask.' },
        { q: 'How long does it take to make a pitch video?', a: 'Usually one to three weeks: a few days to plan the story and numbers, one shoot day with the founders and operations, then editing, graphics and the shorter version.' },
    ],
};

export default article;
