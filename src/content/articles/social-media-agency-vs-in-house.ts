/** Text of "Social Media Management: Agency or In-House Team?". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'Hire an agency when you need strategy, design, video production and ad management together and don’t want to build a team for each skill; build in-house when you need someone inside the business every day for quick posts and replies. Many brands mix both: an in-house person handles daily posting and customer replies, while an agency or studio handles strategy, shoots, ads and reporting. Decide by what you need made each month — and always keep ownership of your accounts.',
    keyPoints: [
        'List what you need made each month before choosing.',
        'Agencies bring many skills; in-house brings speed and inside knowledge.',
        'A mix often works best for growing businesses.',
        'Your business must own its pages, ad accounts and content.',
    ],
    body: [
        { type: 'h2', text: 'What does social media management include?' },
        { type: 'list', items: [
            'Strategy and goals.',
            'A content calendar — see the [social media content calendar](/blog/social-media-content-calendar/).',
            'Design for posts, carousels and stories.',
            'Video shoots and editing — reels, ads, testimonials.',
            'Copywriting in Telugu, Hindi and English.',
            'Posting and scheduling.',
            'Replying to comments and messages.',
            'Paid ads on Meta and YouTube.',
            'Influencer and creator coordination.',
            'Monthly reporting.',
        ] },
        { type: 'h2', text: 'How do agency, in-house and mixed set-ups compare?' },
        {
            type: 'table',
            head: ['', 'Agency', 'In-house', 'Mix'],
            rows: [
                ['Skills', 'Strategy, design, video and ads under one roof', 'Usually one or two people’s skills', 'In-house for daily work, agency for specialist work'],
                ['Speed for daily posts', 'Depends on the approval process', 'Fast — they are in the building', 'Fast'],
                ['Video production', 'Often included or partnered', 'Limited without equipment and crew', 'Planned shoots from the agency'],
                ['Knowledge of your business', 'Grows over time', 'Deep from day one', 'Deep, plus an outside view'],
                ['Cost structure', 'A monthly retainer or per project', 'Salaries, tools, equipment and training', 'A smaller retainer plus a salary'],
                ['Cover for leave and turnover', 'Built in', 'A risk', 'Shared'],
            ],
        },
        { type: 'h2', text: 'When is an agency the right choice?' },
        { type: 'list', items: [
            'You need several skills — strategy, design, video, ads — but not full-time staff for each.',
            'You want regular professional video, not just phone clips.',
            'You run paid ads and want them managed and measured properly.',
            'You don’t have time to hire, train and manage a social team.',
        ] },
        { type: 'h2', text: 'When should you build in-house?' },
        { type: 'list', items: [
            'You post several times a day and need instant reactions.',
            'Your content depends on things happening inside the business — kitchens, stores, events.',
            'Customer service on social media is a big part of the job.',
            'You can afford, train and keep the right people.',
        ] },
        { type: 'h2', text: 'What should you ask an agency before signing?' },
        { type: 'list', items: [
            'Who will work on our account, and how much time will they spend on it?',
            'Can we see real calendars, reports and results from similar clients?',
            'Do you shoot and edit video yourselves, or outsource it?',
            'How do approvals work, and how fast do you respond?',
            'Which results will you report each month? (See [video ad metrics](/blog/video-ad-metrics/).)',
            'Who owns the content you create for us, and the raw footage?',
            'What happens if we end the contract?',
        ] },
        { type: 'h2', text: 'Who should own your accounts?' },
        { type: 'p', text: 'Always your business. Your Facebook page, Instagram account, YouTube channel and ad accounts should be owned by your business, with the agency added as a partner — in Meta Business Suite, for example — rather than given passwords or allowed to create accounts in its own name. If you part ways, you remove their access and keep everything.' },
        { type: 'tip', text: 'Whatever you choose, keep a shared folder of brand assets — logos, fonts, colours, music, templates — so anyone who posts for you stays on brand. A short [brand guidelines](/blog/brand-guidelines-document/) document helps.' },
    ],
    faqs: [
        { q: 'How much content should we post?', a: 'Consistency matters more than volume. Pick a rhythm you can keep for months — for example three good posts and a few stories a week — and improve quality before increasing quantity.' },
        { q: 'Can one person handle all our social media?', a: 'For a small business, one capable person can manage posting and replies. Strategy, video production and ads usually need extra help, which is where an agency or studio fits.' },
        { q: 'How long before we see results?', a: 'Expect a few months of consistent posting before organic growth shows. Paid ads can bring results faster, but they work best when your page already looks active and trustworthy.' },
        { q: 'Should the agency also run our ads?', a: 'It often helps when the same team makes the content and runs the ads, because they can see what works and make more of it. Make sure you own the ad account and see the spend directly.' },
    ],
    sources: [
        { label: 'Meta Business Help Centre', url: 'https://www.facebook.com/business/help' },
    ],
};

export default article;
