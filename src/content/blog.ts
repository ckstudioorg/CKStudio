/**
 * Blog articles. Each article is a list of blocks: paragraphs, headings, lists, numbered steps, tables,
 * tip boxes and pull quotes. To add an article, copy one entry, give it a new unique `slug`, and write the blocks.
 * Newer articles live in src/content/articles/ (grouped by topic) and are listed first.
 *
 * Writing for Google and AI answer engines (ChatGPT, Gemini, Perplexity, Google AI Overviews):
 * - `answer`: 2–3 sentences that directly answer the question in the title (shown as "Quick answer").
 * - `keyPoints`: 3–5 short takeaways. Question-style h2 headings. Tables for comparisons, steps for processes.
 * - `faqs`: real questions people ask, answered in 2–4 sentences (also sent to Google as FAQ data).
 * - `sources`: links for any rule, number or spec that can change. Never invent statistics or client results.
 * - Inside any text: [link text](/services/vfx-and-cg/) makes a link; **words** makes them bold.
 * Optional `image`: a 1200x800 webp in public/images/blog/[slug].webp. Without it, a designed cover is shown.
 */

import { commercialsArticles } from './articles/commercials';
import { aiArticles } from './articles/ai';
import { productionArticles } from './articles/production';
import { movieAndMarketingArticles } from './articles/movies-marketing';
import { videoArticles } from './articles/video';
import { designArticles } from './articles/design';
import { digitalArticles } from './articles/digital';
import { vfxMusicMovieArticles } from './articles/vfx-music-movies';

export type Block =
    | { type: 'p'; text: string }
    | { type: 'h2'; text: string }
    | { type: 'h3'; text: string }
    | { type: 'list'; items: string[] }
    | { type: 'steps'; items: string[] }
    | { type: 'table'; head: string[]; rows: string[][]; caption?: string }
    | { type: 'tip'; text: string }
    | { type: 'quote'; text: string };

export interface Article {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    tags: string[];
    date: string; // ISO date, e.g. '2026-10-21'
    updated?: string; // ISO date of the last real update
    author: string;
    image?: string;
    /** Direct 2–3 sentence answer to the title's question, shown first */
    answer?: string;
    keyPoints?: string[];
    body: Block[];
    faqs?: { q: string; a: string }[];
    sources?: { label: string; url: string }[];
    /** Service page slug this article leads to (content/servicePages.ts) */
    service?: string;
}

/** Text without link/bold markup, for reading time, search data and the blog search box. */
export const plainText = (text: string) => text.replace(/\[([^\]]+)\]\([^)\s]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1');

export const blockText = (b: Block): string => {
    switch (b.type) {
        case 'list':
        case 'steps':
            return b.items.map(plainText).join(' ');
        case 'table':
            return [...b.head, ...b.rows.flat()].map(plainText).join(' ');
        default:
            return plainText(b.text);
    }
};

/** All readable words of an article (quick answer, body and FAQs). */
export const articleText = (a: Article) =>
    [a.answer ?? '', ...a.body.map(blockText), ...(a.faqs ?? []).flatMap((f) => [f.q, plainText(f.a)])].join(' ');

export const blogPage = {
    label: 'Our Blog',
    title: { lead: 'AI Film Making', highlight: 'Insights' },
    intro: 'Insights, tips & stories from the frontier of AI-powered video production',
    searchPlaceholder: 'Search articles…',
    empty: 'No articles found. Try a different search or category.',
    back: 'Back to Blog',
    related: 'Related Articles',
    notFound: { title: 'Post Not Found', text: 'This article may have moved or been renamed.' },
    articleCta: { title: 'Planning a project like this?', text: 'Tell us about it on WhatsApp or by email.', whatsapp: 'WhatsApp Us', email: 'Email Us' },
};

const originalArticles: Article[] = [
    {
        slug: 'ai-pre-looks-and-pre-teasers-for-movies',
        title: 'AI Pre-Looks and Pre-Teasers: Show Your Film Before the First Shot',
        excerpt: 'How concept visuals and short AI pre-teasers help directors and producers pitch a film’s look, tone and world long before the cameras roll.',
        category: 'Movie Works',
        tags: ['AI pre-look', 'pre-teaser', 'film pitching', 'pre-production'],
        date: '2026-10-21',
        author: 'CK Studio Team',
        body: [
            { type: 'p', text: 'Every film starts as a picture in someone’s head. The hardest part of early development is getting that picture into other people’s heads — producers, investors, cast and distributors — before a single frame has been shot. That is exactly what an AI pre-look and an AI pre-teaser are for.' },
            { type: 'h2', text: 'What is an AI pre-look?' },
            { type: 'p', text: 'A pre-look is a set of concept frames that show how the film will feel: the colour palette, the lighting, the locations, the costumes and the mood of key scenes. Traditionally this meant mood boards built from reference images or expensive concept art. With AI image tools, a director’s brief can be turned into many consistent, film-specific frames in days rather than weeks — and refined until they match the vision.' },
            { type: 'h2', text: 'What is an AI pre-teaser?' },
            { type: 'p', text: 'A pre-teaser takes the idea further: a short video, usually 30 to 90 seconds, that combines AI-generated shots, motion design, music and title cards to suggest the story’s world and tone. It is not the final teaser — it is a pitching tool that answers the question every investor asks: “What will this actually look like?”' },
            { type: 'h2', text: 'Where they help most' },
            { type: 'list', items: [
                'Pitch meetings with producers and investors, alongside the pitch deck',
                'Aligning the director, cinematographer and art team on one visual direction early',
                'Testing looks and genres before money is spent on sets, costumes and locations',
                'Early buzz for announcements and title reveals on social media',
            ] },
            { type: 'h2', text: 'What to keep in mind' },
            { type: 'p', text: 'AI visuals are concept material, so they should be presented honestly as concepts. Faces generated by AI are not your cast, and using a real actor’s likeness needs their permission. Detail consistency across many shots still takes careful direction and clean-up. That is why we treat AI as a fast sketching tool guided by human editors, colourists and designers — not as an automatic button.' },
            { type: 'quote', text: 'A strong pre-look does not replace the film. It makes the film easier to believe in.' },
            { type: 'h2', text: 'How we approach it at CK Studio' },
            { type: 'p', text: 'We start from the script, the director’s references and the genre, build a palette and a look, and then generate and refine frames scene by scene. For pre-teasers we cut those frames with music, sound and typography, the same way we would cut a real teaser. The result is a set of visuals that can sit inside a pitch deck, play in a meeting, or go out as an announcement.' },
        ],
    },
    {
        slug: 'how-to-build-a-movie-pitch-deck',
        title: 'How to Build a Movie Pitch Deck Producers, Investors and Distributors Will Read',
        excerpt: 'The slides that matter, the order that works, and how to tailor one deck for producers, investors, exhibitors and digital partners.',
        category: 'Movie Works',
        tags: ['pitch deck', 'film financing', 'producers', 'investors'],
        date: '2026-10-21',
        author: 'CK Studio Team',
        body: [
            { type: 'p', text: 'A pitch deck is often the first thing a decision-maker sees of your film, and sometimes the only thing they read before saying yes or no. It needs to be clear, visual and honest — and it needs to answer different questions for different readers.' },
            { type: 'h2', text: 'The core slides' },
            { type: 'list', items: [
                'Title and logline: the film in one or two sentences',
                'Synopsis: the story in a short, readable paragraph — not the whole script',
                'Genre, tone and comparable films, so the reader can place it instantly',
                'Characters, and cast you have attached or are approaching',
                'Director’s vision and look: key frames, colour, references or an AI pre-look',
                'Team: director, producers and key crew, with relevant credits',
                'Budget overview and production schedule',
                'Release and revenue plan: theatrical, satellite, digital and music rights',
            ] },
            { type: 'h2', text: 'One deck, four audiences' },
            { type: 'p', text: 'Producers want to know the story works and the team can deliver. Investors focus on budget, risk and how the money comes back. Exhibitors care about audience appeal, genre and release timing. Digital and OTT partners look at the target audience, the language markets and how well the film will travel. We usually build one master deck and adjust the order and emphasis of slides for each meeting.' },
            { type: 'h2', text: 'Design that helps, not distracts' },
            { type: 'p', text: 'Use the film’s own visual language: its colours, fonts and imagery. Keep text short and let images carry the mood. Every slide should make one point. If a slide needs a long explanation, it probably needs to be two slides — or a conversation in the meeting.' },
            { type: 'quote', text: 'The best pitch decks feel like a trailer you can hold in your hands.' },
            { type: 'h2', text: 'Common mistakes' },
            { type: 'list', items: [
                'Too much text, too few visuals',
                'Unrealistic numbers or claims the reader can easily question',
                'No clear “ask”: say what you need — funding, a partner, a release slot',
                'Generic stock imagery that does not match the film',
            ] },
            { type: 'p', text: 'At CK Studio we design professional movie pitch decks for producers, investors, exhibitors and digital partners, often combined with AI pre-looks so the deck shows the film rather than just describing it.' },
        ],
    },
    {
        slug: 'what-is-a-dcp-cinema-delivery-guide',
        title: 'What Is a DCP? A Simple Guide to Getting Your Film into Cinemas',
        excerpt: 'Digital Cinema Packages explained in plain language: what they contain, the common formats, and the questions to ask before delivery.',
        category: 'Post-Production',
        tags: ['DCP', 'cinema delivery', 'post-production', 'mastering'],
        date: '2026-10-21',
        author: 'CK Studio Team',
        body: [
            { type: 'p', text: 'When a film is finished, it still has one more journey to make: onto a cinema server. Cinemas do not play the MP4 or MOV file you watch in the edit suite. Most digital cinemas play a Digital Cinema Package, or DCP.' },
            { type: 'h2', text: 'What is inside a DCP' },
            { type: 'p', text: 'A DCP is a folder of files rather than a single video. The picture is stored as high-quality JPEG 2000 frames, the sound as uncompressed multi-channel audio, and small text files tell the cinema server how to play everything in the right order. Subtitles can be included as a separate track, so one picture master can serve several languages.' },
            { type: 'h2', text: 'Common formats' },
            { type: 'list', items: [
                'Resolution: 2K is the most common; 4K is used where the cinema and project support it',
                'Aspect ratio: “Flat” (1.85:1) or “Scope” (2.39:1), chosen to match how the film was framed',
                'Frame rate: usually 24 frames per second; other rates must be supported by the screen',
                'Sound: commonly 5.1 surround, with 7.1 or immersive formats on equipped screens',
            ] },
            { type: 'h2', text: 'Colour needs special care' },
            { type: 'p', text: 'Cinema projection uses a different colour space from TVs and phones. Your graded master has to be converted correctly for the projector, otherwise skin tones, blacks and highlights can look very different on the big screen. This conversion is part of proper DCP mastering, not an afterthought.' },
            { type: 'h2', text: 'Encryption and keys' },
            { type: 'p', text: 'A DCP can be encrypted. In that case, each cinema receives a key that only works on its specific server and only for a set time window. This protects the film before and during its release.' },
            { type: 'h2', text: 'Questions to ask before delivery' },
            { type: 'list', items: [
                'Which cinemas or networks are you releasing in, and what systems do they use? In India, many screens run on Qube or UFO systems with their own delivery requirements, so confirm with your distributor early.',
                'Flat or Scope, 2K or 4K, and which sound format?',
                'Which subtitle languages are needed?',
                'Will the DCP be encrypted, and who will issue the keys?',
                'Will you check it on a real cinema screen before release? A screening test catches problems no monitor will show.',
            ] },
            { type: 'quote', text: 'The DCP is the last step of post-production — and the first thing your audience actually sees.' },
            { type: 'p', text: 'CK Studio provides DCP outputs as part of our movie post-production services, alongside DI and colour correction and post-production supervision.' },
        ],
    },
    {
        slug: 'di-and-colour-correction-explained',
        title: 'DI and Colour Correction: Why the Grade Changes Everything',
        excerpt: 'What happens in the digital intermediate, the difference between correction and grading, and how one film is prepared for cinema, TV and phones.',
        category: 'Post-Production',
        tags: ['DI', 'colour correction', 'colour grading', 'post-production'],
        date: '2026-10-21',
        author: 'CK Studio Team',
        body: [
            { type: 'p', text: 'Two films can be shot on the same camera and still look nothing alike. Much of that difference is created in the DI — the digital intermediate — where colour is corrected, shaped and finished.' },
            { type: 'h2', text: 'What “DI” means today' },
            { type: 'p', text: 'The term comes from the days when film was scanned into a computer as an intermediate step before printing back to film. Today it simply means the final finishing stage: the locked edit is rebuilt (conformed) from the original high-quality camera files, then graded, checked and prepared for delivery.' },
            { type: 'h2', text: 'Correction vs grading' },
            { type: 'list', items: [
                'Colour correction fixes problems: balancing exposure and white balance, and matching shots so a scene feels continuous',
                'Colour grading creates the look: the mood, the palette and the visual identity of the film',
                'Secondary work adjusts specific areas — skin tones, skies, a costume, a product — without affecting the rest of the frame',
            ] },
            { type: 'h2', text: 'Why it matters for ads and films' },
            { type: 'p', text: 'For a feature, the grade supports the story: warm memories, cold tension, a world that feels real or heightened. For a commercial, it also protects the brand — the product colour, packaging and logo must look right on every screen. A good grade is often invisible to the audience, but they feel it.' },
            { type: 'quote', text: 'Colour is the part of the film the audience feels before they understand it.' },
            { type: 'h2', text: 'One film, many screens' },
            { type: 'p', text: 'Cinema projectors, TVs and phones all show colour differently. The DI is where the film is prepared for each: a cinema version for the DCP, and versions for TV, streaming and social platforms. Planning those deliverables at the start saves time and keeps the look consistent everywhere.' },
            { type: 'h2', text: 'Where AI helps' },
            { type: 'p', text: 'Modern grading tools include AI-assisted features such as automatic shot matching, smart masks that track a face or object, and noise reduction. They speed up the repetitive work so the colourist can spend more time on creative decisions. The final judgement is always made by a trained eye on a calibrated display.' },
            { type: 'p', text: 'DI and colour correction are part of CK Studio’s movie works and post-production services.' },
        ],
    },
    {
        slug: 'ai-ad-films-what-ai-can-and-cannot-do',
        title: 'AI Ad Films: What AI Can Do Today — and Where You Still Need a Crew',
        excerpt: 'An honest look at making advertising films with AI software: the strengths, the limits, and how a hybrid workflow gets the best of both.',
        category: 'Commercials',
        tags: ['AI ad films', 'commercials', 'generative AI', 'advertising'],
        date: '2026-10-21',
        author: 'CK Studio Team',
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
    },
    {
        slug: 'lyrical-videos-turning-a-song-into-a-campaign',
        title: 'Lyrical Videos: Turning a Song into a Campaign',
        excerpt: 'Why lyrical videos matter for a film’s music release, what makes a good one, and how to plan versions for YouTube, Reels and Shorts.',
        category: 'Movie Works',
        tags: ['lyrical video', 'film music', 'motion graphics', 'film promotion'],
        date: '2026-10-21',
        author: 'CK Studio Team',
        body: [
            { type: 'p', text: 'For many films, the songs reach audiences long before the film does. A lyrical video is often the first time people hear a song properly — and the first chance to make them fall in love with the film.' },
            { type: 'h2', text: 'What a lyrical video is' },
            { type: 'p', text: 'A lyrical video presents the song with its lyrics on screen, timed to the music, combined with stills or footage from the film and motion design. It sits between a simple audio upload and a full video song, and it can be released early in the campaign without revealing too much of the film.' },
            { type: 'h2', text: 'What makes a good one' },
            { type: 'list', items: [
                'Typography that matches the mood of the song and the film’s title design',
                'Lyrics timed precisely to the vocals, easy to read in the song’s language',
                'Movement that follows the rhythm — not effects for their own sake',
                'Visuals that tease the film’s world without giving away key moments',
                'A clear title, film name and credits so the song is easy to find and share',
            ] },
            { type: 'quote', text: 'When the words move with the music, people start singing along before they have seen a single scene.' },
            { type: 'h2', text: 'Plan the versions' },
            { type: 'p', text: 'One master lyrical video is usually 16:9 for YouTube. Short vertical cuts in 9:16 for Instagram Reels and YouTube Shorts help the song travel further. Planning those cuts from the start keeps the design consistent and makes the release smoother.' },
            { type: 'h2', text: 'Part of the bigger release' },
            { type: 'p', text: 'Lyrical videos work best as part of a plan: first look, songs, teaser, trailer. Each piece should feel like it belongs to the same film, with consistent colours, typography and tone.' },
            { type: 'p', text: 'CK Studio creates lyrical videos alongside movie publicity designs, teaser and trailer works, and pre- and post-credit design. You can see some of our lyrical work in the portfolio.' },
        ],
    },
    {
        slug: 'company-start-package-brand-essentials',
        title: 'Starting a Company? The Brand Essentials You Need from Day One',
        excerpt: 'Logo, letterhead, visiting cards, presentations, brochures and flyers: what each one does, and why they should be designed together.',
        category: 'Designing',
        tags: ['branding', 'logo design', 'company start package', 'design'],
        date: '2026-10-21',
        author: 'CK Studio Team',
        body: [
            { type: 'p', text: 'A new company makes its first impressions quickly: a visiting card handed over at a meeting, a presentation on a client’s screen, a brochure left on a table. When these pieces look like they belong together, the company looks established from day one.' },
            { type: 'h2', text: 'The essentials' },
            { type: 'list', items: [
                'Logo: the core of the identity, designed to work large and small, in colour and in one colour',
                'Letterhead: for quotations, letters and official documents',
                'Visiting cards: still one of the most-used brand pieces in business',
                'Presentation template: so every pitch and proposal looks consistent',
                'Brochure: what you do, for whom, and why — in print and as a PDF',
                'Flyers: for launches, offers and events',
            ] },
            { type: 'h2', text: 'Why design them together' },
            { type: 'p', text: 'Designing everything as one package means the same colours, fonts, spacing and tone carry across every piece. It is faster and more affordable than designing each item separately over time, and it avoids the patchwork look that many young companies end up with.' },
            { type: 'quote', text: 'Consistency is what makes a small company look like a big one.' },
            { type: 'h2', text: 'Files you should always keep' },
            { type: 'list', items: [
                'The logo in vector format (SVG, AI or PDF) as well as PNG',
                'Your brand colour codes, written down',
                'The names of the fonts used',
                'Editable source files for templates such as the letterhead and presentation',
            ] },
            { type: 'p', text: 'CK Studio’s Company Start Package covers the logo, letterhead, visiting cards, presentations, brochures and flyers. We also design publicity material, event branding kits, commercial pitch decks, product catalogues and product retouching.' },
        ],
    },
];

/** Newest first: the 2026 guides, then the original seven articles. */
export const articles: Article[] = [
    ...commercialsArticles,
    ...aiArticles,
    ...productionArticles,
    ...movieAndMarketingArticles,
    ...videoArticles,
    ...designArticles,
    ...digitalArticles,
    ...vfxMusicMovieArticles,
    ...originalArticles,
];

/** Rough reading time from the word count (about 220 words a minute). */
export const readTime = (article: Article) => {
    const words = articleText(article).split(/\s+/).length;
    return `${Math.max(1, Math.round(words / 220))} min read`;
};

export const formatDate = (iso: string) =>
    new Date(`${iso}T00:00:00`).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
