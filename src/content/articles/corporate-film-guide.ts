/** Text of "How to Make a Corporate Film People Actually Watch: Structure, Length and Tips". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'A corporate film works when it is short, built around real people and proof rather than slogans, and made for where it will be watched. Aim for about two to three minutes for a website or pitch film, with 30–60 second cut-downs for social media; open with a strong hook, show real work and real faces, and end with one clear next step.',
    keyPoints: [
        'Lead with a hook, not the company’s founding year.',
        'Show proof: real work, real people, real results you can back up.',
        'Match the length to where it will be watched.',
        'Make short cut-downs from the same shoot.',
    ],
    body: [
        { type: 'h2', text: 'What is a corporate film used for?' },
        { type: 'list', items: [
            'The “About us” film on a website or LinkedIn page',
            'Client and investor pitches',
            'Trade fairs, exhibitions and reception screens',
            'Recruitment and employee onboarding',
            'Milestones, anniversaries and launches',
        ] },
        { type: 'h2', text: 'What is the best structure for a corporate film?' },
        { type: 'steps', items: [
            '**Hook** — a striking image, problem or question in the first five seconds.',
            '**Why you exist** — the problem you solve and for whom, in one or two lines.',
            '**Proof** — your work in action, the scale of what you do, and results you can substantiate.',
            '**People** — short interview moments with founders, staff and customers who agree to appear.',
            '**Next step** — one clear action: visit, call, partner, apply.',
        ] },
        { type: 'h2', text: 'How long should a corporate film be?' },
        {
            type: 'table',
            head: ['Where it will be watched', 'Suggested length', 'Notes'],
            rows: [
                ['Website or LinkedIn “About us”', '1.5 to 3 minutes', 'Hook early; most viewers decide in seconds'],
                ['Investor or client pitch', '2 to 4 minutes', 'Focus on scale, proof and plan'],
                ['Recruitment', '1 to 2 minutes', 'Show the people and the workplace honestly'],
                ['Trade fair loop', '30 to 90 seconds', 'Plays without sound — use captions and graphics'],
                ['Social media cut-down', '30 to 60 seconds, vertical', 'One message per cut'],
            ],
        },
        { type: 'h2', text: 'How do you film good interviews?' },
        { type: 'list', items: [
            'Send topics, not a script — read answers sound stiff.',
            'Ask open questions (“Tell me about the day…”) and ask people to answer in full sentences.',
            'Film in a quiet room with good light, and use proper microphones.',
            'Let people speak in the language they are most comfortable in; subtitle it.',
            'Keep the best 10–15 seconds of each answer — short moments are stronger.',
        ] },
        { type: 'h2', text: 'What should you show on screen?' },
        { type: 'p', text: 'Real work beats stock footage every time: people at their desks or machines, products being made, meetings with clients, deliveries leaving. Plan a list of these “B-roll” shots before the shoot, and add simple graphics for numbers you can back up. For factories, see our guide to [industrial films](/blog/industrial-film-guide-for-manufacturers/).' },
        { type: 'h2', text: 'What are the most common corporate film mistakes?' },
        { type: 'list', items: [
            'Starting with a long logo animation and the company history',
            'Buzzwords instead of examples (“world-class, innovative solutions”)',
            'Ten speakers saying the same thing',
            'Claims that cannot be proven',
            'One long version and nothing short enough for social media',
        ] },
        { type: 'h2', text: 'What does a corporate film script look like?' },
        { type: 'p', text: 'Most corporate films use a two-column script: the left column lists what is seen (shots, interviews, graphics) and the right column what is heard (voice-over, interview lines, music). Interviews are not scripted word for word; instead the script lists the topics and the kind of answer you hope for, and the final lines are chosen in the edit.' },
        { type: 'h2', text: 'How do you plan the shoot day?' },
        { type: 'steps', items: [
            'Book interviewees in fixed slots so their teams are not disrupted all day.',
            'Film interviews first, in a quiet room, while people are fresh.',
            'Film B-roll of real work in the order the building is busiest.',
            'Capture wide shots of the building, signage and team at the best light.',
            'Collect logos, photos of past projects and any data for graphics.',
        ] },
        { type: 'tip', text: 'Write down the one thing a viewer should believe about your company after watching. Cut every shot that does not help them believe it.' },
        { type: 'p', text: 'CK Studio makes corporate films, brand films, investor videos and corporate documentaries as part of our [ad films and commercials](/services/ad-films-and-commercials/) work. See [how to choose a production company](/blog/how-to-choose-an-ad-film-production-company-hyderabad/) or [send us your brief](/#enquiry).' },
        { type: 'p', text: 'Related guides: [corporate training and safety videos](/blog/corporate-training-videos/), [CSR and NGO impact films](/blog/csr-and-ngo-impact-films/) and [event videography](/blog/event-videography-guide/).' },
    ],
    faqs: [
        { q: 'What is the difference between a corporate film and a brand film?', a: 'A corporate film explains who a company is and what it does, often for partners, investors and recruits. A brand film tells a story about what the brand stands for, usually for customers, and is closer to an ad.' },
        { q: 'How long does it take to make a corporate film?', a: 'Usually two to four weeks from brief to delivery: planning and scripting, one to three shoot days, then editing, graphics and versions.' },
        { q: 'Should employees appear in our corporate film?', a: 'Yes, if they are willing — real people are more convincing than actors. Get written consent from everyone who appears.' },
        { q: 'Can a corporate film be made in Telugu and English?', a: 'Yes. Interviews can stay in the language people speak best, with subtitles, and the voice-over can be recorded in each language.' },
    ],
};

export default article;
