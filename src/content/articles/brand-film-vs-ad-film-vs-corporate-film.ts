/** Text of "Brand Film vs Ad Film vs Corporate Film: What’s the Difference and Which Do You Need?". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'An ad film (or commercial) is short and persuasive — it sells a specific product or offer and asks viewers to act now. A brand film tells a story about what the brand believes, to build emotional connection over time. A corporate film explains who the company is, what it does and how well, mainly for partners, investors, recruits and buyers. Most growing businesses need all three at different stages, and one shoot can often feed more than one.',
    keyPoints: [
        'Ad film: sell now — short, focused, with a call to action.',
        'Brand film: make people care — story-led, emotional, longer.',
        'Corporate film: build trust — explanatory, factual, for B2B audiences.',
        'Plan shoots so one production feeds several films.',
    ],
    body: [
        { type: 'h2', text: 'How do the three types of film compare?' },
        {
            type: 'table',
            head: ['', 'Ad film', 'Brand film', 'Corporate film'],
            rows: [
                ['Main goal', 'Sell a product or offer now', 'Build emotional connection and loyalty', 'Explain the company and build trust'],
                ['Audience', 'Customers', 'Customers and the public', 'Partners, investors, buyers, recruits'],
                ['Typical length', '6–60 seconds', '1–3 minutes, sometimes longer', '2–5 minutes'],
                ['Tone', 'Persuasive, energetic', 'Story-led, emotional', 'Clear, factual, confident'],
                ['Call to action', 'Strong and specific', 'Soft or none', 'Visit, contact, partner, apply'],
                ['Where it runs', 'TV, YouTube, Reels, cinema', 'YouTube, social media, events, website', 'Website, LinkedIn, pitches, trade fairs'],
                ['Lifespan', 'A campaign or season', 'Several years', 'One to three years'],
            ],
        },
        { type: 'h2', text: 'When do you need an ad film?' },
        { type: 'p', text: 'When you have something specific to sell — a launch, an offer, a season — and you want measurable action: visits, calls, orders. Ad films are short, built around one message, and made in several lengths and shapes for TV and digital. See [TVC vs digital video ads](/blog/tvc-vs-digital-video-ads/) and [how much an ad film costs](/blog/ad-film-cost-in-india/).' },
        { type: 'h2', text: 'When do you need a brand film?' },
        { type: 'p', text: 'When people know what you sell but not why to choose you over others. A brand film tells a human story — about customers, makers, a place or a belief — and leaves viewers with a feeling they connect to your name. It rarely mentions prices or offers, and it keeps working for years.' },
        { type: 'h2', text: 'When do you need a corporate film?' },
        { type: 'p', text: 'When buyers, partners or investors need to trust your capability before they work with you. A corporate film shows your scale, process, people and proof in a clear structure. See our guides to [corporate films](/blog/corporate-film-guide/) and [industrial films](/blog/industrial-film-guide-for-manufacturers/).' },
        { type: 'h2', text: 'Can one shoot produce more than one film?' },
        { type: 'steps', items: [
            'Plan all the films together at the script stage.',
            'Schedule shoot days so locations, cast and crew serve every film.',
            'Capture interviews for the corporate film and emotional moments for the brand film in the same sessions.',
            'Shoot product hero shots and offers for the ad film and its cut-downs.',
            'Edit each film separately, with its own structure and music.',
        ] },
        { type: 'p', text: 'This shares the biggest costs — crew, equipment, locations and travel — across several outcomes.' },
        { type: 'h2', text: 'Which should you make first?' },
        { type: 'list', items: [
            '**Launching a product?** Start with the ad film.',
            '**Selling to businesses or raising money?** Start with the corporate film.',
            '**Well known but seen as just another option?** Start with the brand film.',
            '**Not sure?** Start with the problem you most need video to solve this year.',
        ] },
        { type: 'tip', text: 'Write down who must watch the film and what they should do or feel afterwards. The answer tells you which kind of film you need.' },
        { type: 'p', text: 'CK Studio makes ad films, brand films and corporate films — often from one planned production — as part of our [ad films and commercials](/services/ad-films-and-commercials/) service. [Tell us what you need](/#enquiry).' },
    ],
    faqs: [
        { q: 'Is a brand film the same as an advertisement?', a: 'Not quite. A brand film is a kind of advertising, but it focuses on story and values rather than a specific product or offer, and usually has a soft call to action.' },
        { q: 'How long should a brand film be?', a: 'Often one to three minutes, long enough to tell a story. Shorter cut-downs can be made for social media.' },
        { q: 'Can a corporate film be used as an ad?', a: 'Short, punchy cut-downs of a corporate film can work on LinkedIn and YouTube, but a dedicated ad film usually performs better for selling a product.' },
        { q: 'Which is more expensive: a brand film or an ad film?', a: 'It depends on scale, cast, locations and post-production rather than the type. A short ad with a celebrity can cost more than a documentary-style brand film, and the reverse.' },
    ],
};

export default article;
