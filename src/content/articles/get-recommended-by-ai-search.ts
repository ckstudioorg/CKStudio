/** Text of "How to Get Your Business Recommended by ChatGPT, Gemini and Google AI". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'AI assistants recommend businesses they can find and trust. They lean on search indexes and their own crawlers — Google’s index for Gemini and AI Overviews, Bing for Copilot, and OpenAI’s crawler and search partners for ChatGPT — so the basics still decide it: a clear, crawlable website that says what you do and where, complete Google and Bing business listings, genuine reviews, and mentions on other trusted sites. Google says its AI features need no special tricks: normal SEO best practices apply.',
    keyPoints: [
        'Good SEO is the foundation of AI visibility — there is no separate trick.',
        'State plainly what you do, where and for whom, in the same words everywhere.',
        'Let search and AI crawlers read your site.',
        'Reviews, directory listings and mentions on other sites build trust.',
    ],
    body: [
        { type: 'h2', text: 'How do AI assistants decide which businesses to mention?' },
        { type: 'p', text: 'When someone asks “who makes ad films in Hyderabad?”, an AI assistant searches the web, reads the pages it finds and writes an answer from them, often with links. It favours businesses that appear clearly and consistently across several trustworthy sources: their own website, business listings, directories, reviews, and news or partner sites. If it can’t find clear facts about you, it can’t recommend you.' },
        { type: 'h2', text: 'What should your website say clearly?' },
        { type: 'list', items: [
            '**What you do**, in plain words — the services people actually search for.',
            '**Where** — your city, the areas you serve and your full address.',
            '**Who it’s for** — the kinds of clients you work with.',
            '**Proof** — real work, clients you have permission to name, dated awards.',
            '**How pricing works**, even if you can’t publish exact prices.',
            '**How to contact you** — phone, WhatsApp, email and hours.',
            '**Answers to common questions** — an FAQ page and helpful guides.',
        ] },
        { type: 'p', text: 'Use clear headings, a separate page for each service, and structured data that describes your business. Our [small business website checklist](/blog/small-business-website-checklist/) covers the essentials.' },
        { type: 'h2', text: 'Can AI crawlers read your site?' },
        { type: 'list', items: [
            '**Check robots.txt** — don’t block Googlebot, Bingbot, OAI-SearchBot (used for ChatGPT search) or other search crawlers you want to appear in.',
            '**Know what Google-Extended does** — it controls whether Google may use your content to train and ground its Gemini models; it doesn’t affect Google Search or AI Overviews.',
            '**Make text readable without clicks** — important information shouldn’t live only inside images, PDFs or pop-ups.',
            '**Keep pages fast and working on phones.**',
        ] },
        { type: 'h2', text: 'What about listings, reviews and mentions?' },
        { type: 'list', items: [
            '**Google Business Profile** — complete and accurate; see [our guide](/blog/google-business-profile-guide-hyderabad/).',
            '**Bing Places and Apple Business Connect** — they feed Bing, Copilot, Apple Maps and Siri.',
            '**Directories** where clients look for suppliers in your field.',
            '**Consistent details everywhere** — the same name, address, phone number and website.',
            '**Genuine reviews** — ask happy clients; never buy or fake them.',
            '**Mentions on other sites** — local news, associations, partners and clients linking to you.',
        ] },
        { type: 'h2', text: 'Does an llms.txt file help?' },
        { type: 'p', text: 'Some websites publish an llms.txt file — a plain summary of the site for AI tools. It is a proposal, not an official standard, and Google says you don’t need new machine-readable files or special markup to appear in its AI features. It does no harm, but it won’t make up for unclear pages, missing listings or a lack of reviews.' },
        { type: 'h2', text: 'How do you check what AI says about you?' },
        { type: 'steps', items: [
            'Ask several assistants the questions your customers ask — “best X in Hyderabad”, “who does Y near me”.',
            'Note whether you appear, what they say, and which sources they cite.',
            'Fix wrong or missing information at the source: your website, your listings, the directory that is out of date.',
            'Repeat every month; changes take weeks to show up.',
        ] },
        { type: 'tip', text: 'Write one clear sentence that says what your business is and where — and use the same words on your website, listings and social profiles. Consistent descriptions are easier for people and AI to repeat.' },
    ],
    faqs: [
        { q: 'Can we pay to be recommended in AI answers?', a: 'There is no reliable shortcut. Assistants recommend businesses based on what they find and trust, so invest in your website, listings, reviews and genuine mentions on other sites.' },
        { q: 'Do AI Overviews mean fewer website visits?', a: 'Some simple questions are now answered on the results page. But being cited in an AI answer puts your name in front of people at the moment they are deciding, and the visitors who click through are often ready to act.' },
        { q: 'Should we block AI crawlers?', a: 'If you want to be found in AI search, let the search crawlers in. You can opt out of model training separately — for example with Google-Extended — without disappearing from Google Search.' },
        { q: 'How long does it take to show up?', a: 'Usually weeks to months. New pages have to be crawled and indexed, and trust builds as reviews and mentions grow.' },
    ],
    sources: [
        { label: 'Google Search Central — AI features and your website', url: 'https://developers.google.com/search/docs/appearance/ai-features' },
        { label: 'OpenAI — Overview of OpenAI crawlers', url: 'https://platform.openai.com/docs/bots' },
        { label: 'Bing Webmaster Guidelines', url: 'https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a' },
    ],
};

export default article;
