/** Text of "CSR and NGO Impact Films: How to Show Real Change on Screen". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'A good impact film follows real people through a real change — before, during and after a programme — and lets them tell it in their own words. Plan it with your programme team so the film matches your reported results, get informed consent and protect the dignity of the people you show, and use verified facts rather than big claims. For companies covered by India’s CSR law, a film complements formal reporting and impact assessment — it doesn’t replace them.',
    keyPoints: [
        'Tell one real person’s change, not a list of activities.',
        'Every number on screen should match your verified programme data.',
        'Informed consent in the person’s own language; protect dignity and identity.',
        'Make a long version for reports and short versions for social media.',
    ],
    body: [
        { type: 'h2', text: 'Who needs CSR and impact films?' },
        { type: 'p', text: 'Under section 135 of the Companies Act, 2013, a company must spend on Corporate Social Responsibility if, in the immediately preceding financial year, it had a net worth of ₹500 crore or more, a turnover of ₹1,000 crore or more, or a net profit of ₹5 crore or more. These companies report their CSR work every year, and many use films to explain it to boards, employees, partners and the communities they work with. NGOs use impact films for donors, grant applications, volunteers and public campaigns.' },
        { type: 'h2', text: 'What makes an impact film believable?' },
        { type: 'list', items: [
            '**Real people and real places** — no actors playing beneficiaries.',
            '**A specific change** — a girl who now attends school, a farmer whose yield improved, a village with clean water.',
            '**The process, not just the result** — the work that made the change happen.',
            '**Voices in their own language**, with subtitles — see [subtitles and captions](/blog/subtitles-and-captions-guide/).',
            '**Numbers only when verified** — taken from your programme data or assessment report.',
            '**People shown as active participants**, not as objects of pity.',
        ] },
        { type: 'h2', text: 'How should the story be structured?' },
        { type: 'steps', items: [
            '**The context** — the problem, shown through one place and one person.',
            '**The intervention** — what the programme did, and who did it.',
            '**The change** — what is different now, with evidence.',
            '**Other voices** — field staff, teachers, partners, local officials.',
            '**What’s next** — scale, sustainability, lessons learned.',
            '**The ask** — for NGOs, donate or volunteer; for companies, partner with us or learn more.',
        ] },
        { type: 'h2', text: 'How do you film with dignity and consent?' },
        { type: 'list', items: [
            '**Informed consent** in the person’s own language: explain what the film is for, where it will be shown and for how long. Record it in writing or on camera.',
            '**Children** need a parent’s or guardian’s consent and extra care; avoid identifying details for vulnerable children.',
            '**Sensitive topics** — health, violence, caste, migration — may need faces blurred, voices changed or names withheld.',
            '**No promises in exchange for appearing.** Taking part must never be linked to benefits.',
            '**Respect the right to withdraw** — if someone changes their mind, remove them.',
        ] },
        { type: 'h2', text: 'How do impact films fit with CSR reporting?' },
        { type: 'p', text: 'The CSR rules require an impact assessment by an independent agency for companies with an average CSR obligation of ₹10 crore or more over the three preceding financial years, covering projects with outlays of ₹1 crore or more that were completed at least a year before the study. A film can show the human side of that work, but the facts in it should match the assessment and the annual CSR report — if the report says 1,200 students, the film shouldn’t round it up to “thousands”.' },
        { type: 'h2', text: 'Which versions should you make?' },
        {
            type: 'table',
            head: ['Version', 'Use'],
            rows: [
                ['3–5 minute documentary', 'Annual report launches, events, board meetings, your website'],
                ['60–90 second summary', 'LinkedIn, YouTube, newsletters — see [LinkedIn video for B2B](/blog/linkedin-video-for-b2b/)'],
                ['15–30 second cut-downs', 'Reels and short social posts'],
                ['Individual story films', 'A series, one person per film'],
                ['Employee volunteering film', 'Internal engagement and hiring'],
            ],
        },
        { type: 'tip', text: 'Film the “before” early. If a programme has already started, record honest recollections and archive photos rather than staging scenes from the past.' },
        { type: 'p', text: 'Impact films sit close to corporate films in style and planning — see our [corporate film guide](/blog/corporate-film-guide/) for the production side.' },
    ],
    faqs: [
        { q: 'Is an impact film the same as an impact assessment?', a: 'No. An impact assessment is a formal, independent study of results. A film tells the human story and can draw on the assessment’s findings, but it can’t replace it.' },
        { q: 'How long should an impact film be?', a: 'Make a three-to-five-minute version for reports and events, and short versions of a minute or less for social media. Most people online won’t watch a long film, but decision makers will.' },
        { q: 'Can we show children in our film?', a: 'Yes, with a parent’s or guardian’s informed consent and care for their privacy. For vulnerable children, avoid names, schools and locations that could identify them.' },
        { q: 'Should people speak in their own language?', a: 'Yes. People speak most naturally and powerfully in their own language — Telugu, Hindi, Urdu or a tribal language — and subtitles carry the message to everyone else.' },
    ],
    sources: [
        { label: 'Ministry of Corporate Affairs — National CSR Portal', url: 'https://www.csr.gov.in/' },
        { label: 'KPMG — MCA amends rules relating to corporate social responsibility (2022)', url: 'https://assets.kpmg.com/content/dam/kpmg/in/pdf/2022/10/first-notes-mca-amends-certain-rules-relating-to-corporate-social-responsibility.pdf' },
    ],
};

export default article;
