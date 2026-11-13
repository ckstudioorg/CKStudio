/** Text of "How to Build a Movie Pitch Deck Producers, Investors and Distributors Will Read". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'A movie pitch deck is a short visual presentation that sells a film before it is made. It should cover the title and logline, a brief synopsis, genre and comparable films, characters and cast, the director’s vision and look, the team, a budget overview and schedule, and the release and revenue plan. Keep text short, use the film’s own visual style, end with a clear “ask”, and adjust the emphasis for producers, investors, exhibitors or digital partners.',
    keyPoints: [
        'One point per slide; images carry the mood.',
        'Build one master deck and reorder it for each audience.',
        'State clearly what you are asking for.',
        'Only include numbers and attachments you can stand behind.',
    ],
    body: [
        { type: 'p', text: 'A pitch deck is often the first thing a decision-maker sees of your film, and sometimes the only thing they read before saying yes or no. It needs to be clear, visual and honest — and it needs to answer different questions for different readers.' },
        { type: 'h2', text: 'The core slides' },
        { type: 'list', items: [
            'Title and logline: the film in one or two sentences',
            'Synopsis: the story in a short, readable paragraph — not the whole script',
            'Genre, tone and comparable films, so the reader can place it instantly',
            'Characters, and cast you have attached or are approaching',
            'Director’s vision and look: key frames, colour, references or an AI pre-look',
            'Team: director, producers and key crew, with relevant credits',
            'Budget overview and production schedule',
            'Release and revenue plan: theatrical, satellite, digital and music rights',
        ] },
        { type: 'p', text: 'The “vision and look” slides are where a deck comes alive. If nothing has been shot, concept frames can show the intended world; see [AI pre-looks and pre-teasers](/blog/ai-pre-looks-and-pre-teasers-for-movies/). For the budget slide, [how to make a film or ad budget](/blog/film-and-ad-budget-template/) explains the line items.' },
        { type: 'h2', text: 'One deck, four audiences' },
        { type: 'p', text: 'Producers want to know the story works and the team can deliver. Investors focus on budget, risk and how the money comes back. Exhibitors care about audience appeal, genre and release timing. Digital and OTT partners look at the target audience, the language markets and how well the film will travel. We usually build one master deck and adjust the order and emphasis of slides for each meeting.' },
        { type: 'table', head: ['Reader', 'What they look for first', 'Slides to bring forward'], rows: [
            ['Producer', 'Does the story work, and can this team make it?', 'Logline, synopsis, vision, team'],
            ['Investor', 'How much, what risk, how does the money return?', 'Budget, schedule, revenue plan, team track record'],
            ['Exhibitor or distributor', 'Who will come, and when should it release?', 'Genre, comparable films, cast, release plan'],
            ['Digital or OTT partner', 'Which audience and languages, and will it travel?', 'Audience, language markets, cast, look'],
        ] },
        { type: 'h2', text: 'Design that helps, not distracts' },
        { type: 'p', text: 'Use the film’s own visual language: its colours, fonts and imagery. Keep text short and let images carry the mood. Every slide should make one point. If a slide needs a long explanation, it probably needs to be two slides — or a conversation in the meeting.' },
        { type: 'p', text: 'A designed title helps the deck feel like a real film; see [title sequence and end credits design](/blog/title-sequence-end-credits-design/) and [movie poster design](/blog/movie-poster-design-guide/) for how a film’s lettering and key image are developed.' },
        { type: 'quote', text: 'The best pitch decks feel like a trailer you can hold in your hands.' },
        { type: 'h2', text: 'How do you prepare the deck, step by step?' },
        { type: 'steps', items: [
            'Write the logline until it works in one breath.',
            'Gather the facts: team credits, attached cast, budget outline, schedule.',
            'Collect or create visuals for the look.',
            'Draft the slides as plain text first, one point each.',
            'Design in the film’s style and trim every sentence that can go.',
            'Test it on someone who knows nothing about the film; note where they get lost.',
            'Make a short version to email and a fuller version to present.',
            'Protect the script before sending it out; see [protecting your script and film](/blog/script-registration-and-film-copyright-india/).',
        ] },
        { type: 'h2', text: 'Common mistakes' },
        { type: 'list', items: [
            'Too much text, too few visuals',
            'Unrealistic numbers or claims the reader can easily question',
            'No clear “ask”: say what you need — funding, a partner, a release slot',
            'Generic stock imagery that does not match the film',
        ] },
        { type: 'p', text: 'At CK Studio we design professional movie pitch decks for producers, investors, exhibitors and digital partners, often combined with AI pre-looks so the deck shows the film rather than just describing it. It is part of our [movie post-production](/services/movie-post-production/) services. Pitching a company rather than a film? See the [business pitch deck guide](/blog/business-pitch-deck-guide/).' },
        { type: 'tip', text: 'Put the “ask” on its own slide near the end: what you need, from whom, by when. A reader who liked the film should know exactly what to do next.' },
    ],
    faqs: [
        { q: 'How many slides should a movie pitch deck have?', a: 'Enough to cover the essentials without padding; many decks land between twelve and twenty slides. A reader should be able to go through it in a few minutes.' },
        { q: 'Should the full script be in the deck?', a: 'No. Include a logline and a short synopsis. The script is sent separately when the reader asks for it.' },
        { q: 'Can I name actors who have not signed?', a: 'Only say what is true: “attached” for those who have agreed, “approaching” or “wish list” for those who have not. Overstating attachments damages trust.' },
        { q: 'What format should the deck be in?', a: 'A PDF is the safest to email and opens on any device. Keep a presentation version for meetings, where video such as a pre-teaser can play.' },
    ],
};

export default article;
