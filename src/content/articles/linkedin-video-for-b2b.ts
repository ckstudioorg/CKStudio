/** Text of "LinkedIn Video for B2B Brands: What to Post and Why". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'On LinkedIn, B2B video works best when it shares expertise and proof rather than adverts: short clips of leaders explaining a useful idea, customer success stories, product demos, behind-the-scenes looks at how you work, event highlights and hiring videos. Upload video directly to LinkedIn, add captions because most people scroll with the sound off, make the first seconds say why the viewer should care, and post from both the company page and the people behind it. Use LinkedIn video ads when you need to reach specific job roles, industries or companies.',
    keyPoints: [
        'Share expertise and proof, not just promotion.',
        'Captions and a clear first line — many people watch muted.',
        'People’s faces and voices build more trust than logos.',
        'Use video ads for precise targeting by role, industry or company.',
    ],
    body: [
        { type: 'h2', text: 'Why does video matter for B2B?' },
        { type: 'p', text: 'B2B buying decisions involve several people and take time. Video lets prospects see your team, your process and your results before the first meeting, so they arrive already trusting you. On LinkedIn, the people watching are the decision-makers, partners and future employees you want to reach.' },
        { type: 'h2', text: 'What should B2B companies post?' },
        {
            type: 'table',
            head: ['Video type', 'Example', 'Builds'],
            rows: [
                ['Expert clips', 'A leader explains a common mistake in your industry in one minute', 'Authority'],
                ['Customer stories', 'A client explains the problem and the result (with permission)', 'Proof'],
                ['Product or service demos', 'How your machine, software or service solves one task', 'Understanding'],
                ['Behind the scenes', 'Your factory floor, quality checks, design reviews', 'Trust'],
                ['Events and launches', 'Highlights from an expo, conference or launch', 'Momentum'],
                ['Culture and hiring', 'Team members on what they work on and why they stay', 'Talent attraction'],
            ],
        },
        { type: 'h2', text: 'How should LinkedIn videos be made?' },
        { type: 'list', items: [
            'Upload natively rather than posting a YouTube link, so the video plays in the feed.',
            'Open with the point: the first seconds and the first line of text should say why it matters.',
            'Add burned-in captions or upload a caption file — see [subtitles and captions](/blog/subtitles-and-captions-guide/).',
            'Use square or vertical framing for mobile; keep text large.',
            'Keep it professional but human: real people, good sound, simple backgrounds.',
            'End with one next step: a comment, a visit to a page, a message.',
        ] },
        { type: 'h2', text: 'Company page or people’s profiles?' },
        { type: 'p', text: 'Both. The company page is your official channel, but people tend to engage more with individuals than with logos. When founders, sales leaders and engineers share or post the videos with their own perspective, the same content reaches their networks with more trust.' },
        { type: 'h2', text: 'When should you use LinkedIn video ads?' },
        { type: 'p', text: 'When you need to reach a defined group — for example procurement managers in manufacturing, HR heads at large companies, or decision-makers at a list of target accounts. LinkedIn’s advertising tools can target by job function, seniority, industry, company size and specific companies. Start with your best organic videos, which have already proven they hold attention.' },
        { type: 'h2', text: 'How do you measure LinkedIn video?' },
        { type: 'p', text: 'Look beyond views: watch time, comments from the right people, profile and page visits, website visits, enquiries and meetings booked. A video that starts three conversations with target clients is worth more than one with thousands of views from the wrong audience — see [video ad metrics](/blog/video-ad-metrics/).' },
        { type: 'h2', text: 'What mistakes should B2B brands avoid on LinkedIn?' },
        { type: 'list', items: [
            'Posting TV-style adverts with no useful idea for the viewer.',
            'Long logo animations and introductions before the point.',
            'No captions, so muted viewers scroll past.',
            'Only company announcements, never the people and the work behind them.',
            'Posting once in a while instead of a steady rhythm.',
        ] },
        { type: 'tip', text: 'Film one long interview with a leader or a client, then cut it into five or six one-minute clips. One shoot day can fill a month of LinkedIn posts.' },
        { type: 'p', text: 'Strong LinkedIn content often starts with a [corporate film](/blog/corporate-film-guide/) or [customer testimonial videos](/blog/customer-testimonial-videos/). CK Studio produces B2B video and manages company social media — see our [social media and web design](/services/social-media-and-web-design/) service.' },
    ],
    faqs: [
        { q: 'How long should a LinkedIn video be?', a: 'Short enough to hold attention — often under two minutes for feed videos. Longer talks and webinars can work when the topic is valuable to your audience.' },
        { q: 'Should LinkedIn videos have captions?', a: 'Yes. Many people scroll LinkedIn with the sound off, especially at work, so captions keep them watching.' },
        { q: 'Is LinkedIn useful for manufacturing and industrial companies?', a: 'Yes. Buyers, partners and engineers use LinkedIn, and videos of your processes, quality and capabilities help them shortlist suppliers — see our guide to industrial films.' },
        { q: 'Can I reuse my YouTube videos on LinkedIn?', a: 'Yes, but upload the file natively and adapt it: tighter edits, captions, square or vertical framing and a professional caption.' },
    ],
};

export default article;
