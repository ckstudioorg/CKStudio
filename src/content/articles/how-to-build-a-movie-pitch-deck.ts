/** Text of "How to Build a Movie Pitch Deck Producers, Investors and Distributors Will Read". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
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
        { type: 'h2', text: 'One deck, four audiences' },
        { type: 'p', text: 'Producers want to know the story works and the team can deliver. Investors focus on budget, risk and how the money comes back. Exhibitors care about audience appeal, genre and release timing. Digital and OTT partners look at the target audience, the language markets and how well the film will travel. We usually build one master deck and adjust the order and emphasis of slides for each meeting.' },
        { type: 'h2', text: 'Design that helps, not distracts' },
        { type: 'p', text: 'Use the film’s own visual language: its colours, fonts and imagery. Keep text short and let images carry the mood. Every slide should make one point. If a slide needs a long explanation, it probably needs to be two slides — or a conversation in the meeting.' },
        { type: 'quote', text: 'The best pitch decks feel like a trailer you can hold in your hands.' },
        { type: 'h2', text: 'Common mistakes' },
        { type: 'list', items: [
            'Too much text, too few visuals',
            'Unrealistic numbers or claims the reader can easily question',
            'No clear “ask”: say what you need — funding, a partner, a release slot',
            'Generic stock imagery that does not match the film',
        ] },
        { type: 'p', text: 'At CK Studio we design professional movie pitch decks for producers, investors, exhibitors and digital partners, often combined with AI pre-looks so the deck shows the film rather than just describing it.' },
    ],
};

export default article;
