/** Text of "Title Sequence and End Credits Design: A Guide for Filmmakers". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'A title sequence introduces a film’s mood and key credits in its opening minutes; end credits list everyone who made the film. Good title design uses the film’s visual language — typography, colour and motion — so it feels part of the story, keeps every name legible on cinema screens and phones, follows the credit order agreed in contracts, and is delivered in every language and format the film releases in.',
    keyPoints: [
        'Titles set the tone before the first scene.',
        'Credit order and wording come from contracts — confirm them in writing.',
        'Legibility first: size, contrast and time on screen.',
        'Plan language versions and OTT deliverables early.',
    ],
    body: [
        { type: 'h2', text: 'What are the main title sequence styles?' },
        {
            type: 'table',
            head: ['Style', 'Description', 'Suits'],
            rows: [
                ['Titles over picture', 'Names appear over the opening scenes', 'Dramas and films that start straight into the story'],
                ['Designed sequence', 'A standalone animated or live-action sequence', 'Thrillers, action and stylised films'],
                ['Typographic', 'Animated type is the main visual', 'Character-driven and modern films'],
                ['Minimal title card', 'Only the film’s title, with credits at the end', 'Films that want the story to start immediately'],
            ],
        },
        { type: 'h2', text: 'How is a title sequence designed?' },
        { type: 'steps', items: [
            'Start from the film’s title design and key art so the branding matches — see [movie poster design](/blog/movie-poster-design-guide/).',
            'Agree the style and the list of opening credits with the director and producers.',
            'Design style frames for typography, colour and layout.',
            'Animate to picture and music after the edit is locked.',
            'Review on a large screen and on a phone for legibility.',
            'Deliver textless versions of the backgrounds as well, for language versions.',
        ] },
        { type: 'h2', text: 'What about credit order and wording?' },
        { type: 'p', text: 'Credit order, wording, size and placement are usually set by contracts with cast, crew, studios, financiers and partners. The production team should provide a final, approved credit list; the designer should not decide it. Double-check spellings with each person — mistakes in credits are common and hurtful.' },
        { type: 'h2', text: 'How do you keep credits readable?' },
        { type: 'list', items: [
            'Use clear typefaces and avoid thin weights over busy footage.',
            'Keep enough contrast between text and background.',
            'Leave each opening credit on screen long enough to read it twice.',
            'Keep end-credit rolls at a speed that does not flicker or blur on cinema screens.',
            'Keep text within safe areas so nothing is cut off on any screen.',
        ] },
        { type: 'h2', text: 'What should be delivered?' },
        { type: 'list', items: [
            'The final film with titles, for the [DCP](/blog/what-is-a-dcp-cinema-delivery-guide/) and other masters',
            'Textless versions of title backgrounds, for language versions and OTT platforms',
            'Credits in each release language where required',
            'Separate files or project data for later corrections',
            'The CBFC certificate placed at the start of cinema prints — see [CBFC certification](/blog/cbfc-certification-guide/)',
        ] },
        { type: 'h2', text: 'How long should opening titles run?' },
        { type: 'p', text: 'There is no fixed rule. Titles over the opening scenes can run for several minutes without slowing the story, while a standalone designed sequence usually works best when it is short and tight. Whatever the style, each credit needs enough time to be read comfortably, and the sequence should end where the story needs to begin.' },
        { type: 'h2', text: 'Which typography choices work best?' },
        { type: 'list', items: [
            'One typeface family for all credits, related to the film’s title design',
            'Clear size steps: the film title largest, key credits next, the rest consistent',
            'Matching typefaces for each language, so Telugu and English credits feel like one design',
            'Plain, unanimated type for the end roll, which must stay readable at speed',
        ] },
        { type: 'h2', text: 'What are post-credit scenes and designs?' },
        { type: 'p', text: 'Many films add a scene, montage or behind-the-scenes clips during or after the end credits to keep audiences in their seats. Plan these in the edit and design the credits around them.' },
        { type: 'tip', text: 'Lock the credit list in a shared document with one owner. Most last-minute delivery problems are credit changes.' },
        { type: 'p', text: 'Pre- and post-credit design is part of our [movie post-production](/services/movie-post-production/) service, alongside title designs, teasers, trailers and DCP outputs.' },
    ],
    faqs: [
        { q: 'What is the difference between opening titles and end credits?', a: 'Opening titles introduce the film and its key creators at the start; end credits list the full cast and crew, music, locations and acknowledgements at the end.' },
        { q: 'Who decides the order of credits in a film?', a: 'The producers, based on contracts with cast, crew and partners. Designers lay out the approved list but do not decide the order.' },
        { q: 'How long should end credits be?', a: 'As long as needed to list everyone legibly at a comfortable speed — usually a few minutes for a feature film.' },
        { q: 'Do OTT platforms need textless versions?', a: 'Many platforms ask for textless backgrounds or clean versions of title sequences so they can create language versions. Check each platform’s delivery specification.' },
    ],
};

export default article;
