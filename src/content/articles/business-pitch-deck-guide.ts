/** Text of "Business Pitch Deck Guide: The 12 Slides That Win Clients and Investors". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'A strong business pitch deck tells a simple story in about 10–15 slides: the problem, your solution, why now, the market, how you make money, traction, competition, the team, your plan and the ask. Each slide should make one point with a clear headline, a visual and very little text, and you need two versions — a sparse one to present and a more detailed one to send.',
    keyPoints: [
        'One idea per slide, written as the slide’s headline.',
        'Show proof: numbers you can back up, customers, traction.',
        'Make a presenting version and a reading version.',
        'Consistent design signals a professional company.',
    ],
    body: [
        { type: 'h2', text: 'What are the 12 essential slides?' },
        { type: 'steps', items: [
            '**Title** — company name, one-line description, logo.',
            '**Problem** — the pain your customers feel, with a real example.',
            '**Solution** — what you do and how it solves the problem.',
            '**Why now** — what has changed that makes this the right time.',
            '**Product** — screenshots, photos or a short demo video.',
            '**Market** — who your customers are and how many there are.',
            '**Business model** — how you make money.',
            '**Traction** — customers, revenue, growth or pilots you can verify.',
            '**Competition** — the alternatives, and why you win.',
            '**Team** — why these people can make it happen.',
            '**Plan and financials** — the next 12–24 months, simply.',
            '**The ask** — for investors, the amount and use of funds; for clients, the next step.',
        ] },
        { type: 'p', text: 'For sales and client pitches, replace the market and financial slides with case studies, process and pricing options.' },
        { type: 'h2', text: 'Presenting deck vs reading deck: what is the difference?' },
        {
            type: 'table',
            head: ['', 'Presenting deck', 'Reading (send-ahead) deck'],
            rows: [
                ['Used when', 'You are speaking', 'Someone reads it alone'],
                ['Text', 'Headlines and a few words', 'Full sentences that explain each point'],
                ['Visuals', 'Large, simple images and charts', 'Charts with labels and short notes'],
                ['Length', '10–15 slides', 'Can be longer, with an appendix'],
            ],
        },
        { type: 'h2', text: 'Which design rules make a deck look professional?' },
        { type: 'list', items: [
            'Write each slide’s headline as a full statement of its point (“Revenue tripled in 12 months”), not a label (“Revenue”).',
            'Use one font family, two or three brand colours and a consistent grid.',
            'Make charts simple: one message per chart, with the key number highlighted.',
            'Use real photos of your product, team and customers instead of stock images.',
            'Keep text large enough to read on a phone, since many decks are opened on one.',
        ] },
        { type: 'h2', text: 'How should charts and numbers be shown?' },
        { type: 'list', items: [
            'Show one number big, with a short label: “₹ revenue per month” or “3× growth”.',
            'Use simple bar or line charts; avoid 3D and pie charts with many slices.',
            'Highlight the one bar or line that matters, and grey out the rest.',
            'Always label units and dates, and keep the source for every figure ready.',
            'Round numbers on slides; keep exact figures in the appendix.',
        ] },
        { type: 'h2', text: 'Should a pitch deck include a video?' },
        { type: 'p', text: 'A 60–120 second product or company video can do more than five slides of text, especially for physical products, factories or demos. See our guide to [investor pitch videos](/blog/investor-pitch-video-startups/). For film projects, the structure is different — see [how to build a movie pitch deck](/blog/how-to-build-a-movie-pitch-deck/).' },
        { type: 'h2', text: 'What are the most common pitch deck mistakes?' },
        { type: 'list', items: [
            'Too much text — the audience reads instead of listening',
            'Claims and numbers that cannot be backed up',
            'No clear ask at the end',
            'A different design on every slide',
            'Sending the presenting version to someone who was not in the room',
        ] },
        { type: 'tip', text: 'Read only the headlines of your slides, in order. If they tell the whole story on their own, the deck works.' },
        { type: 'p', text: 'CK Studio designs commercial pitch decks for businesses and professional pitch decks for films, as part of our [design and branding](/services/design-and-branding/) work. [Send us your draft](/#enquiry) and we will shape the story and design.' },
        { type: 'p', text: 'Related guides: [how to trademark your logo in India](/blog/trademark-your-logo-india/).' },
    ],
    faqs: [
        { q: 'How many slides should a pitch deck have?', a: 'About 10 to 15 for presenting. A send-ahead version can be slightly longer, with extra detail in an appendix.' },
        { q: 'What is the most important slide in a pitch deck?', a: 'Investors often look first at traction and the team, while clients look for proof that you understand their problem. Make those slides especially strong.' },
        { q: 'Should I use a template for my pitch deck?', a: 'A template is a starting point, but a custom design built on your brand looks more credible and helps your company stand out.' },
        { q: 'Can a pitch deck be in PDF?', a: 'Yes — send a PDF so the layout stays fixed on every device, and keep the original file for presenting and updates.' },
    ],
};

export default article;
