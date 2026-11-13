/** Text of "3D Product Animation: How CGI Product Videos Are Made". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'A 3D product animation is a video in which the product is built as a digital model and filmed with a virtual camera. It can show things a real camera cannot: the inside of a machine, parts assembling in mid-air, a perfect liquid swirl. The process runs from references and modelling through materials, animation, lighting and rendering to compositing and sound. Once built, the model can be reused for new films, images and packaging visuals.',
    keyPoints: [
        'The product is modelled once and can be reused many times.',
        'Good references (drawings, CAD files, photos, the real item) decide accuracy.',
        'Changes are cheap early (storyboard, grey animation) and costly after rendering.',
        'Complexity, not length alone, drives time and cost.',
    ],
    body: [
        { type: 'h2', text: 'When is 3D better than filming the product?' },
        { type: 'list', items: [
            '**The inside matters** — cutaways of engines, filters, mattresses or devices.',
            '**The product is not ready** — a launch film before the first unit is manufactured.',
            '**It is too small, too big or too reflective** to film well.',
            '**You need impossible moves** — exploded views, parts flying together, a camera passing through.',
            '**There are many variants** — colours and sizes changed with a few clicks.',
            '**You want perfect consistency** across films, images and catalogues.',
        ] },
        { type: 'p', text: 'A live shoot is usually better for food, fashion, people using the product and anything where natural imperfection is the charm. [Live shoot, CGI or AI?](/blog/product-video-live-shoot-cgi-or-ai/) compares the three.' },
        { type: 'h2', text: 'How is a 3D product video made?' },
        { type: 'steps', items: [
            '**Brief and references** — what the film must show, plus drawings, CAD files, photographs and, ideally, the product itself.',
            '**Storyboard** — every shot sketched and agreed. See [how to make a storyboard](/blog/how-to-make-a-storyboard/).',
            '**Modelling** — the product’s shape built in 3D, from CAD data or from measurements.',
            '**Materials and textures** — plastic, glass, metal, fabric, printed labels and tiny surface details.',
            '**Animatic** — a rough, grey version showing camera moves and timing, for approval.',
            '**Animation and simulation** — movement of parts, liquids, cloth, smoke or particles.',
            '**Lighting** — a virtual studio set up to flatter the materials.',
            '**Rendering** — the computer calculates every frame; this is the slow, machine-heavy step.',
            '**Compositing and colour** — layers combined, glows and depth added, colours finished.',
            '**Sound and delivery** — music, sound design and the versions each platform needs.',
        ] },
        { type: 'h2', text: 'What should you give the studio?' },
        { type: 'table', head: ['Material', 'Why it helps'], rows: [
            ['CAD or engineering files', 'Exact shape without re-measuring'],
            ['The physical product', 'Real colours, finishes and how light behaves on it'],
            ['Photographs from every side', 'Details, seams, logos and labels'],
            ['Label and packaging artwork', 'Sharp print on the model'],
            ['Brand colours and fonts', 'Text and backgrounds that match your brand'],
            ['A list of features to show', 'So nothing important is missed in the storyboard'],
        ] },
        { type: 'h2', text: 'What decides time and cost?' },
        { type: 'list', items: [
            '**Complexity of the model** — a bottle is quick; a machine with hundreds of parts is not.',
            '**Whether CAD exists** — and how clean it is.',
            '**Materials** — glass, liquids, fur and fabric take longer than plain plastic.',
            '**Simulation** — splashes, smoke and cloth need testing and long calculations.',
            '**Length and number of shots**.',
            '**Level of realism** — stylised graphics render faster than photoreal images.',
            '**Number of versions** — colours, languages and sizes.',
            '**When changes arrive** — a new feature after rendering means redoing shots.',
        ] },
        { type: 'p', text: 'For how budgets are built in general, see [how to make a film or ad budget](/blog/film-and-ad-budget-template/).' },
        { type: 'h2', text: 'What approvals should you expect?' },
        { type: 'p', text: 'A well-run project asks for your sign-off at four points: the storyboard, the model with materials (often as still images), the grey animatic, and the final rendered film. Take each stage seriously. A comment such as “the cap is the wrong shade” costs minutes at the model stage and days after rendering.' },
        { type: 'h2', text: 'How else can the 3D model be used?' },
        { type: 'list', items: [
            '**Still images** for websites, catalogues and marketplaces.',
            '**Turntable views** that let buyers see every side.',
            '**Packaging and hoarding visuals** at any size.',
            '**Short social cuts** and looping animations.',
            '**FOOH-style films** — see [FOOH and CGI billboard ads](/blog/fooh-cgi-ads/).',
            '**Exhibition screens and sales presentations**.',
        ] },
        { type: 'p', text: 'Ask for the model and project files to be archived, and agree who owns them. 3D work of this kind is part of our [VFX and CG](/services/vfx-and-cg/) service.' },
        { type: 'tip', text: 'Send the real product, not only pictures. The way a material catches light is very hard to judge from photographs, and it is what makes a render look real.' },
    ],
    faqs: [
        { q: 'How long does a 3D product animation take?', a: 'It depends on the model’s complexity, the level of realism and the number of shots. A simple product film can take a couple of weeks; complex machines or liquid simulations take longer. A storyboard lets the studio give a reliable timeline.' },
        { q: 'Can you work from photos if there is no CAD file?', a: 'Yes. The model can be built from photographs and measurements, or the product can be 3D-scanned. It takes longer than starting from clean CAD data.' },
        { q: 'Is 3D animation the same as an animated explainer?', a: 'No. Explainers usually use flat or simple graphics to explain an idea or service; see [animated explainer videos](/blog/animated-explainer-videos/). 3D product animation shows a physical product realistically.' },
        { q: 'Can AI generate a product video instead?', a: 'AI video tools are improving, but they often change details of a product from shot to shot. 3D gives exact, repeatable control, which matters when the design, label and colours must be correct.' },
    ],
};

export default article;
