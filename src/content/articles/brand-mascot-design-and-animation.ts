/** Text of "Brand Mascots: Designing and Animating a Character for Your Brand". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'A mascot is a character that carries your brand’s personality — something people remember and children recognise. Design it from a personality first (what it would say and do), with a simple silhouette, a limited colour palette tied to your brand, and a set of expressions and poses. Plan how it will be animated — 2D for stickers and social media, 3D for ads and packaging — write guidelines for using it, and protect it by getting the rights from the designer in writing and registering it as a trademark.',
    keyPoints: [
        'Personality first, drawing second.',
        'A simple silhouette and limited colours make a mascot recognisable everywhere.',
        'Decide on 2D, 3D or both before the final design.',
        'Own the rights in writing and register the mascot as a trademark.',
    ],
    body: [
        { type: 'h2', text: 'When does a mascot make sense?' },
        { type: 'list', items: [
            '**Family and children’s products** — snacks, toys, schools, apps for kids.',
            '**Food and FMCG** — a friendly face on packs, ads and shelves.',
            '**Local services** that want warmth and recall — a delivery business, a pest-control service, a sweet shop.',
            '**Apps and digital products** — a guide character in onboarding and notifications.',
        ] },
        { type: 'p', text: 'Mascots are a long-term commitment. They suit brands that will use them consistently for years; they fit less naturally with luxury or serious professional brands, unless handled with real wit.' },
        { type: 'h2', text: 'How do you design a mascot?' },
        { type: 'steps', items: [
            '**Write the personality** — three or four traits, what it loves, what it would never do, how it speaks.',
            '**Know the audience** — children, parents, young professionals, farmers.',
            '**Sketch many directions** — animals, objects, people, abstract shapes.',
            '**Test the silhouette** — fill the drawing in solid black; you should still recognise it.',
            '**Use shape language** — round shapes feel friendly; angular shapes feel energetic or bold.',
            '**Limit the colours** to your brand palette, so it always looks like you.',
            '**Draw an expression sheet** — happy, surprised, thinking, sad, excited.',
            '**Make a turnaround** — front, three-quarter, side and back views, for consistent animation and 3D.',
            '**Name it** — a name people can say easily in Telugu, Hindi and English.',
        ] },
        { type: 'h2', text: '2D, 3D or both?' },
        {
            type: 'table',
            head: ['', '2D', '3D'],
            rows: [
                ['Look', 'Illustrated, graphic, playful', 'Solid, with realistic lighting, toy-like'],
                ['Best for', 'Stickers, reels, explainers, print, signage', 'TV ads, packaging renders, games, AR'],
                ['Speed', 'Faster to produce new poses and animations', 'A bigger first build (model, rig, textures), then flexible'],
                ['Consistency', 'Depends on illustrators following the guide', 'The 3D model keeps every angle consistent'],
            ],
        },
        { type: 'p', text: 'Many brands design in 2D first, then build a 3D version from the turnaround once people love the character.' },
        { type: 'h2', text: 'How do you animate a mascot?' },
        { type: 'list', items: [
            '**Rig the character** so animators can move it efficiently.',
            '**Create signature moves** — a wave, a walk, a celebration — that become part of the brand.',
            '**Cast a voice** that fits the personality, and keep it the same for years (see [voice-over for ads](/blog/voice-over-for-ads/)).',
            '**Build a library** of short animations for reels, stickers and app moments.',
            '**Pair it with your logo animation** for ad end cards — see the [logo animation guide](/blog/logo-animation-guide/) and [animated explainer videos](/blog/animated-explainer-videos/).',
        ] },
        { type: 'h2', text: 'What should mascot guidelines include?' },
        { type: 'list', items: [
            'Approved colours, poses and expressions.',
            'How it may and may not behave.',
            'Minimum size, and clear space next to the logo.',
            'How it appears with partners, on merchandise and in co-branded campaigns.',
            'WhatsApp and social sticker sets — a mascot people love will be shared.',
        ] },
        { type: 'p', text: 'Put these in your [brand guidelines](/blog/brand-guidelines-document/) so every agency and printer uses the character correctly.' },
        { type: 'h2', text: 'How do you protect your mascot?' },
        { type: 'p', text: 'The artwork is protected by copyright, which first belongs to whoever created it (or their employer) — so get a written assignment of rights from the designer or studio. Then register the mascot as a trademark (a device mark) with the Trade Marks Registry through IP India, in the classes of goods and services you trade in, after searching for similar existing marks. Registration makes it much easier to stop copycats.' },
        { type: 'tip', text: 'Design the mascot’s smallest version first. If it still reads as a tiny app icon or a WhatsApp sticker, it will work everywhere else.' },
    ],
    faqs: [
        { q: 'Should our mascot talk?', a: 'It can, if the personality suits it. A voice adds a lot in ads and videos, but choose it carefully and keep it consistent. Silent mascots work too, through expressions and actions.' },
        { q: 'Can AI design our mascot?', a: 'AI tools can help explore early ideas. The final design should be crafted and refined by designers, checked for originality, and owned by you outright — which is harder to guarantee with AI-generated images.' },
        { q: 'How long does it take to design a mascot?', a: 'It depends on the rounds of exploration and how many views, expressions and animations you need. Leave time to test directions with real customers before you finalise.' },
        { q: 'Can we register a mascot as a trademark?', a: 'Yes. A character can be registered as a device (logo) mark with IP India for the classes you use it in, after a search for similar marks.' },
    ],
    sources: [
        { label: 'IP India — trade mark search and registration', url: 'https://ipindia.gov.in/' },
        { label: 'Copyright Office, Government of India', url: 'https://copyright.gov.in/' },
    ],
};

export default article;
