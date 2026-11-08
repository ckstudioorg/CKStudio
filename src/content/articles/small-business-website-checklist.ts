/** Text of "What Every Small Business Website Needs in 2026: A Practical Checklist". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'A small business website in 2026 needs to load fast on phones, explain clearly what you do and where, show proof (work, reviews, credentials), and make it effortless to contact you — call, WhatsApp, an enquiry form and a map. It also needs SEO basics so Google and AI assistants can understand it: a unique title and description for each page, real text content, structured business data, a sitemap and a privacy policy if you collect personal details.',
    keyPoints: [
        'Mobile first: most visitors arrive on a phone.',
        'Clear answer to “what, where, for whom” on the home page.',
        'Call, WhatsApp and an enquiry form on every page.',
        'SEO basics so Google and AI search can read and trust the site.',
    ],
    body: [
        { type: 'h2', text: 'Which pages does a small business website need?' },
        { type: 'list', items: [
            '**Home** — what you do, where, for whom, and the main action.',
            '**Services or products** — ideally one page per main service, so each can rank for its own searches.',
            '**Work, portfolio or case studies** — proof that you deliver.',
            '**About** — the people behind the business.',
            '**Contact** — phone, WhatsApp, email, address, map and opening hours.',
            '**FAQ** — answers to the questions customers ask before buying.',
            '**Privacy policy** — required if you collect names, phone numbers or emails.',
        ] },
        { type: 'h2', text: 'What features turn visitors into customers?' },
        { type: 'list', items: [
            'A click-to-call phone number and a WhatsApp button visible on phones',
            'A short enquiry form that emails you instantly',
            'Real photos and videos of your work, place and team',
            'Reviews and testimonials from real customers, with their permission',
            'Clear prices or price ranges where possible',
            'Your address, a map and opening hours that match your Google Business Profile',
        ] },
        { type: 'h2', text: 'How fast should a website be?' },
        { type: 'p', text: 'Google measures real-world speed with its Core Web Vitals. A page is considered good when the main content appears within 2.5 seconds (Largest Contentful Paint), it responds to taps within 200 milliseconds (Interaction to Next Paint), and the layout does not jump around (Cumulative Layout Shift below 0.1). Compress images, avoid heavy plug-ins and test on an ordinary phone over mobile data.' },
        { type: 'h2', text: 'What SEO basics does every site need?' },
        {
            type: 'table',
            head: ['Basic', 'Why it matters'],
            rows: [
                ['A unique title and description for each page', 'They are what Google shows in results'],
                ['Real text on every page, not just images', 'Search engines and AI assistants read text'],
                ['One clear main heading (H1) per page', 'Tells search engines what the page is about'],
                ['Structured business data (LocalBusiness)', 'Helps Google understand your name, address, phone and hours'],
                ['A sitemap submitted in Google Search Console', 'Helps Google find every page'],
                ['HTTPS and a mobile-friendly design', 'Expected by browsers, Google and visitors'],
                ['Internal links between related pages', 'Spreads visitors and ranking strength through the site'],
            ],
        },
        { type: 'h2', text: 'How do you get found in AI search too?' },
        { type: 'p', text: 'AI assistants such as ChatGPT, Gemini and Perplexity, and Google’s AI Overviews, draw on pages that answer questions clearly. Write pages that answer real customer questions directly in the first lines, use question-style headings, keep facts consistent everywhere online (name, address, phone, services), and publish helpful guides — like this one.' },
        { type: 'h2', text: 'What legal basics apply?' },
        { type: 'p', text: 'If your website collects personal details — through an enquiry form, for example — publish a privacy policy that explains what you collect, why, and how people can contact you. India’s Digital Personal Data Protection Act is being brought into force in phases under the DPDP Rules, 2025, with most obligations applying from 2027, so it is worth getting the basics right now.' },
        { type: 'tip', text: 'Open your website on your own phone, on mobile data, and try to contact yourself in under 10 seconds. If you cannot, your customers will not either.' },
        { type: 'p', text: 'CK Studio designs fast, modern websites with enquiry forms and search-ready structure as part of our [social media and web design](/services/social-media-and-web-design/) service. Pair your website with a strong [Google Business Profile](/blog/google-business-profile-guide-hyderabad/).' },
    ],
    faqs: [
        { q: 'How many pages does a small business website need?', a: 'Usually five to ten: home, services (ideally one page per main service), work or portfolio, about, contact, FAQ and a privacy policy.' },
        { q: 'Is a Google Business Profile enough without a website?', a: 'It helps for local searches, but a website gives you space to explain services, show work, rank for more searches and be cited by AI assistants. The two work best together.' },
        { q: 'How do I know if my website is fast enough?', a: 'Test it with Google’s PageSpeed Insights and check the Core Web Vitals in Google Search Console. Also open it on an ordinary phone over mobile data.' },
        { q: 'Do I need a privacy policy for a simple enquiry form?', a: 'Yes. If you collect names, phone numbers or emails, a privacy policy should explain what you collect, why and how people can contact you about their data.' },
    ],
    sources: [
        { label: 'Google Search Central — Core Web Vitals', url: 'https://developers.google.com/search/docs/appearance/core-web-vitals' },
        { label: 'Wikipedia — Digital Personal Data Protection Rules, 2025', url: 'https://en.wikipedia.org/wiki/Digital_Personal_Data_Protection_Rules,_2025' },
    ],
};

export default article;
