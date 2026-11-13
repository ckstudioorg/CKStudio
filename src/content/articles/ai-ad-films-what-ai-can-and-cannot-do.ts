/** Text of "AI Ad Films: What AI Can Do Today — and Where You Still Need a Crew". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'AI can now help make an ad film at every stage and, for some ideas, produce the whole film: concepts and storyboards, stylised or imagined worlds, product shots in new settings and quick variations for different platforms and languages. A crew and cameras are still needed for real people and performances, exact product detail, long consistent sequences and anything involving a real person’s likeness. Most strong ads today are hybrids: real product and talent, with AI for backgrounds, effects and versions.',
    keyPoints: [
        'AI is strongest for ideas, stylised worlds, backgrounds and variations.',
        'Real faces, exact labels and long consistent scenes still favour a shoot.',
        'A hybrid of live action and AI suits most brand films.',
        'People still direct, edit, grade and check everything.',
    ],
    body: [
        { type: 'p', text: 'AI video and image tools have improved remarkably fast. It is now possible to make an ad film from script to final execution using AI software. But “possible” and “right for your brand” are not always the same. Here is how we think about it.' },
        { type: 'h2', text: 'Where AI is strong' },
        { type: 'list', items: [
            'Concepts and storyboards: many creative directions explored quickly',
            'Imagined worlds and stylised visuals that would be costly to build or shoot',
            'Product shots in new environments, seasons or settings',
            'Fast variations of one idea for different platforms, languages and audiences',
            'Short-format content for social media, where speed matters',
        ] },
        { type: 'h2', text: 'Where you still need people and cameras' },
        { type: 'list', items: [
            'Real people, real performances and a recognisable face for the brand',
            'Exact product accuracy — labels, text and fine details must be right',
            'Consistency of a character or product across a longer film',
            'Legal and brand checks: rights to likeness, music and visual references',
        ] },
        { type: 'h2', text: 'Which approach suits which kind of ad?' },
        { type: 'table', head: ['Kind of ad', 'Usually best made by', 'Why'], rows: [
            ['Founder, doctor or customer speaking', 'Live shoot', 'A real person’s trust cannot be generated'],
            ['Food, jewellery, fashion close-ups', 'Live shoot, with CGI or AI support', 'Texture and exact detail matter'],
            ['Fantasy or impossible scenes', 'AI or CGI', 'Too costly or impossible to film'],
            ['Product in many settings or seasons', 'Real product shot, AI backgrounds', 'Accurate product, flexible world'],
            ['Festival greetings and quick social posts', 'AI, with design', 'Speed and volume'],
            ['Many language and size versions', 'One master film, AI-assisted versions', 'Consistency with lower cost per version'],
        ] },
        { type: 'p', text: 'For product films specifically, see [live shoot, CGI or AI?](/blog/product-video-live-shoot-cgi-or-ai/), and for stills, [AI product photography vs a product shoot](/blog/ai-product-photography-vs-product-shoot/).' },
        { type: 'h2', text: 'The hybrid approach' },
        { type: 'p', text: 'Most strong ad films today mix both. A typical example: shoot the product and the talent for real, then use AI for backgrounds, environments, effects and variations. Or build the whole world with AI and composite a real product shot into it. Human editors, colourists and designers tie everything together so it looks like one film, not a collage of tools.' },
        { type: 'quote', text: 'AI changes how fast we can get to a great idea. It does not change what makes an idea great.' },
        { type: 'p', text: 'The idea still comes first; see [how to find the big idea for an ad](/blog/how-to-find-the-big-idea-for-an-ad/). AI also helps with drafting and versions: [writing ad scripts with AI](/blog/writing-ad-scripts-with-ai/) and [testing ad variations made with AI](/blog/ai-ad-variations-and-creative-testing/).' },
        { type: 'h2', text: 'What should you check before releasing an AI-made ad?' },
        { type: 'list', items: [
            'The product, pack and logo are exactly right in every shot',
            'No real person’s face or voice appears without written consent',
            'Claims are the same ones your brand can support',
            'Hands, text, reflections and small details look natural at full size',
            'Any label a platform requires for realistic synthetic content is applied',
        ] },
        { type: 'p', text: 'The rules are set out in [AI in ads in India: labelling, consent and copyright](/blog/ai-in-ads-india-rules-labelling-consent/).' },
        { type: 'h2', text: 'Questions to ask before you start' },
        { type: 'list', items: [
            'Where will the film run — TV, cinema, YouTube, Reels? This affects length, format and quality needs.',
            'Does the brand need real people or a specific face?',
            'How many versions or languages are needed?',
            'What is fixed (logo, packaging, claims) and must never be altered?',
        ] },
        { type: 'p', text: 'CK Studio produces AI ad films, TVCs, corporate, industrial and brand films, and AI photoshoots and product shoots — and helps you choose the right mix of AI and live production for each project. See [ad films and commercials](/services/ad-films-and-commercials/). For budgets, read [how much an ad film costs in India](/blog/ad-film-cost-in-india/).' },
        { type: 'tip', text: 'Ask for one test shot of your actual product made with the proposed method before approving the approach. Ten seconds of real output tells you more than any description.' },
    ],
    faqs: [
        { q: 'Can an entire ad film be made with AI?', a: 'Yes, for some ideas: stylised films, imagined worlds and short social content. Ads that depend on real people, exact product detail or long consistent scenes are usually better as a shoot or a hybrid.' },
        { q: 'Is an AI ad film cheaper than a shoot?', a: 'It can remove costs such as locations, sets and travel, but it adds skilled time for generating, selecting, correcting and finishing. The saving depends on the idea; it is not automatic.' },
        { q: 'Will viewers know it was made with AI?', a: 'Well-finished work is hard to tell apart in short films, and some platforms require realistic synthetic content to be labelled. What matters more is that the product is shown truthfully.' },
        { q: 'Who owns an AI-made ad?', a: 'Ownership of AI-generated material is still developing in law. A contract should set out who owns the finished film and its elements, and substantial human creative work strengthens the position. Take legal advice for important campaigns.' },
    ],
};

export default article;
