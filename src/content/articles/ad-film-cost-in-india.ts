/** Text of "How Much Does an Ad Film Cost in India? A Practical 2026 Budget Guide". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'There is no single price. In India, ad film budgets run from a few thousand rupees for a simple social video to several crores for a celebrity-led national TV commercial. The cost depends mainly on shoot days, cast and locations, crew size, post-production (VFX, CGI, grading, music) and how widely and how long the ad will be used — so a clear brief with a fixed list of deliverables is the fastest way to an accurate quote.',
    keyPoints: [
        'Production cost (making the film) and media cost (showing it) are separate budgets.',
        'Shoot days, cast and locations drive most of the cost; AI-led and studio shoots cost less.',
        'Usage rights — where and for how long the ad runs — change talent and music fees.',
        'Ask for an itemised, written quote that lists deliverables, revision rounds and exclusions.',
    ],
    body: [
        { type: 'h2', text: 'What does an ad film budget actually pay for?' },
        { type: 'p', text: 'Every ad film quote bundles four kinds of cost. Knowing them lets you compare quotes line by line instead of only by the final number.' },
        {
            type: 'table',
            head: ['Stage', 'What it covers', 'What makes it cost more'],
            rows: [
                ['Pre-production', 'Concept, script, storyboard or AI pre-look, casting, location scouting, scheduling', 'Many concepts to explore, several locations, celebrity casting'],
                ['Production (the shoot)', 'Director, camera and lighting crew, equipment, sets, art, costumes, food, transport, permissions', 'More shoot days, a larger crew, cinema cameras, drones, outdoor locations'],
                ['Post-production', 'Editing, colour grading, VFX and CGI, motion graphics, sound design, music, voice-over, mastering', 'Heavy VFX or 3D, original music, many languages and versions'],
                ['Talent and rights', 'Actors, models, voice artists, music licences, usage period and territory', 'Well-known faces, longer usage, national or international reach'],
            ],
        },
        { type: 'h2', text: 'Production cost vs media cost: what is the difference?' },
        { type: 'p', text: 'The **production budget** pays to make the film. The **media budget** pays to show it — TV airtime, YouTube and Meta ad spend, cinema screens or outdoor screens. A modest film can sit behind a large media plan, or the other way round. Decide both together, because the media plan decides which lengths, shapes and languages you need — and those decide part of the production cost.' },
        { type: 'h2', text: 'How do the common types of ad film compare on budget?' },
        { type: 'p', text: 'Price lists change every year and every project is different, so here is how the common formats compare with each other instead.' },
        {
            type: 'table',
            head: ['Type of ad film', 'Typical set-up', 'Relative budget'],
            rows: [
                ['Social-first video (Reels, Shorts)', 'One location, small crew, often one day; vertical versions', 'Low'],
                ['AI ad film', 'Made from script to final cut with AI tools, finished by editors and designers; no shoot', 'Low to medium'],
                ['Product video', 'Studio shoot, 3D/CGI or AI visuals around the real product', 'Low to medium'],
                ['Corporate or industrial film', 'Interviews, office or factory footage, graphics; one to three shoot days', 'Medium'],
                ['Regional TVC', 'Script, cast, one or two locations, full post-production, TV and digital versions', 'Medium to high'],
                ['National or celebrity TVC', 'Celebrity talent, large crew, sets, several days, heavy post, many versions', 'High to very high'],
            ],
        },
        { type: 'h2', text: 'Which factors raise or lower the cost the most?' },
        { type: 'h3', text: 'Shoot days' },
        { type: 'p', text: 'Every extra day adds crew, equipment, location and catering costs. A tight script that can be shot in a single day is usually the biggest saving available.' },
        { type: 'h3', text: 'Cast and usage rights' },
        { type: 'p', text: 'Fees for actors, models and voice artists depend on who they are and how you will use the ad: which media (TV, digital, outdoor), which regions and for how long. Agree on usage before casting, not after the film is made.' },
        { type: 'h3', text: 'Locations and permissions' },
        { type: 'p', text: 'Commercial shoots in public places usually need permission from the local authorities, and private locations charge rent. A studio, or one well-chosen location, keeps cost and risk down.' },
        { type: 'h3', text: 'Post-production, versions and languages' },
        { type: 'p', text: 'Each extra length (60, 30, 15, 6 seconds), shape (wide, vertical, square) and language adds editing and finishing time. Plan them at the start so they are cut together — adding them later always costs more.' },
        { type: 'h3', text: 'Music' },
        { type: 'p', text: 'Licensed library music is affordable; original music costs more; and a popular film song needs permission from the music label that owns it.' },
        { type: 'tip', text: 'Write down every place the ad will appear before you ask for quotes. “One 30-second TV ad, a 15- and 6-second cut for YouTube and a 20-second vertical Reel, in Telugu and Hindi” gets you an exact quote. “A short ad” does not.' },
        { type: 'h2', text: 'Can AI lower the cost of an ad film?' },
        { type: 'p', text: 'For the right idea, yes. Concepts and storyboards are faster, product scenes can be generated instead of built, and some ads can be made [entirely with AI](/blog/ai-ad-films-what-ai-can-and-cannot-do/). AI works best for stylised visuals, products and backgrounds; it is weaker where real people, exact product details or real places must look perfect. Many brands now mix the two: a short live shoot for the faces that matter and AI or CGI for everything else. Our [guide to AI video for brands](/blog/ai-video-generation-for-brands/) explains where each fits.' },
        { type: 'h2', text: 'How do you get an accurate quote for an ad film?' },
        { type: 'steps', items: [
            'Share a brief: the product, the audience, the one message, where it will run and the deadline. Our guide to [writing an ad film brief](/blog/how-to-write-an-ad-film-brief/) includes a template.',
            'List the deliverables: lengths, aspect ratios, languages and number of versions.',
            'Give a budget range, so the studio can propose the best idea for that range instead of guessing.',
            'Ask for a written quote that separates pre-production, shoot, post-production and talent, and states revision rounds, usage rights and exclusions.',
            'Compare like with like: the same deliverables, the same usage and the same number of revisions.',
        ] },
        { type: 'h2', text: 'What should never be missing from an ad film quote?' },
        { type: 'list', items: [
            'The number of revision rounds at script, edit and final stages',
            'Final deliverables and file formats for TV, digital and cinema',
            'Usage rights for talent and music, with period and territory',
            'Who arranges and pays for permissions, props, travel and stay',
            'The payment schedule and the timeline',
            'Whether taxes such as GST are included',
        ] },
        { type: 'p', text: 'At CK Studio we plan ad films end to end — script, AI or live production, editing, colour, VFX and final delivery — from Hyderabad. See our [ad films and commercials](/services/ad-films-and-commercials/) service, or [tell us about your project](/#enquiry) for a quote.' },
    ],
    faqs: [
        { q: 'What is the cheapest way to make an ad film?', a: 'A tight 15–30 second script, one location or a studio, a small crew and a single shoot day. For product-led or stylised ideas, an AI-led ad film with no shoot at all can cost less still. Planning every version at the start avoids paying for re-edits later.' },
        { q: 'Does the ad film cost include TV or YouTube ad spend?', a: 'No. The production budget pays for making the film. Media spend — TV airtime, YouTube or Meta ads, cinema screens — is a separate budget paid to the channel or platform.' },
        { q: 'How long does it take to make an ad film?', a: 'Simple social videos and AI ad films can be ready in days. A typical TV commercial takes a few weeks from approved script to final delivery, depending on casting, locations and the amount of post-production.' },
        { q: 'Why do two quotes for the same idea differ so much?', a: 'Usually because they are not quoting the same thing: different shoot days, crew sizes, cameras, cast, usage rights, numbers of versions or revision rounds. Ask each studio to quote against the same written list of deliverables.' },
    ],
};

export default article;
