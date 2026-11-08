/** Text of "AI Ad Films: What AI Can Do Today — and Where You Still Need a Crew". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
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
        { type: 'h2', text: 'The hybrid approach' },
        { type: 'p', text: 'Most strong ad films today mix both. A typical example: shoot the product and the talent for real, then use AI for backgrounds, environments, effects and variations. Or build the whole world with AI and composite a real product shot into it. Human editors, colourists and designers tie everything together so it looks like one film, not a collage of tools.' },
        { type: 'quote', text: 'AI changes how fast we can get to a great idea. It does not change what makes an idea great.' },
        { type: 'h2', text: 'Questions to ask before you start' },
        { type: 'list', items: [
            'Where will the film run — TV, cinema, YouTube, Reels? This affects length, format and quality needs.',
            'Does the brand need real people or a specific face?',
            'How many versions or languages are needed?',
            'What is fixed (logo, packaging, claims) and must never be altered?',
        ] },
        { type: 'p', text: 'CK Studio produces AI ad films, TVCs, corporate, industrial and brand films, and AI photoshoots and product shoots — and helps you choose the right mix of AI and live production for each project.' },
    ],
};

export default article;
