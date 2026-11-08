/** Text of "Green Screen vs Virtual Production: What Brands and Filmmakers Should Know". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'With a green screen, actors are filmed in front of a solid green background that is replaced with a new background in post-production. With virtual production, the background is shown live on a large LED wall behind the actors, so the camera captures the final image with realistic light and reflections. Green screen is cheaper and flexible but needs careful lighting and compositing; virtual production costs more up front but saves post-production time and looks more natural — and AI compositing is now a third option for simpler shots.',
    keyPoints: [
        'Green screen: background replaced later; flexible and affordable.',
        'Virtual production: background on an LED wall, captured in camera.',
        'Lighting and planning decide green-screen quality.',
        'AI compositing suits simpler shots and quick turnarounds.',
    ],
    body: [
        { type: 'h2', text: 'How do the options compare?' },
        {
            type: 'table',
            head: ['', 'Green screen (chroma key)', 'Virtual production (LED wall)', 'AI compositing'],
            rows: [
                ['How it works', 'Replace a green background in post', 'Display the background live on LED screens', 'Generate or replace backgrounds with AI tools'],
                ['Realism', 'Good with careful lighting and compositing', 'Very high — real light and reflections on set', 'Good for simple shots; edges and motion need checking'],
                ['Decisions made', 'Mostly in post-production', 'Before and during the shoot', 'In post-production'],
                ['Up-front cost', 'Lower', 'Higher: LED stage and pre-built environments', 'Low'],
                ['Post-production', 'More: keying, clean-up, compositing', 'Less, if the background is final', 'Varies'],
                ['Best for', 'Ads, product shots, presenters, VFX-heavy scenes', 'Cars, interiors, reflective surfaces, complex camera moves', 'Social content, backgrounds, concept films'],
            ],
        },
        { type: 'h2', text: 'What makes a green-screen shoot work?' },
        { type: 'list', items: [
            'Light the green evenly and separately from the actors.',
            'Keep actors well away from the screen to avoid green light spilling on them.',
            'Avoid green clothes, props and shiny surfaces that reflect green.',
            'Match the lighting on the actors to the background they will be placed in.',
            'Use tracking markers when the camera moves.',
            'Shoot at a high quality with as little motion blur as possible for cleaner edges.',
        ] },
        { type: 'h2', text: 'What are the advantages of virtual production?' },
        { type: 'list', items: [
            'Actors see and react to the environment instead of a blank screen.',
            'Real light from the screens falls on faces, cars and reflective products.',
            'The director and client see the final image on set.',
            'Less keying and compositing work afterwards.',
        ] },
        { type: 'p', text: 'The trade-off is planning: the backgrounds (3D environments or plates) must be built and approved before the shoot, and LED stages cost more to book.' },
        { type: 'h2', text: 'Where does AI compositing fit?' },
        { type: 'p', text: 'AI tools can now separate people from backgrounds without a green screen, generate new environments and help match light. For social content, presenters and concept films, that can replace a studio shoot. For high-end ads and films, it works best combined with proper filming and finishing. See [AI video generation for brands](/blog/ai-video-generation-for-brands/).' },
        { type: 'h2', text: 'Which should you choose?' },
        { type: 'steps', items: [
            'List the shots and what the background must do — static, moving, reflective, interactive.',
            'If budget is tight and backgrounds are simple, choose green screen or AI compositing.',
            'If there are many reflective surfaces or complex camera moves, consider virtual production.',
            'Decide with your VFX supervisor before the shoot, not after.',
        ] },
        { type: 'tip', text: 'Bring the VFX supervisor to the shoot. Ten minutes of advice on set can save days of clean-up in post-production.' },
        { type: 'p', text: 'CK Studio handles AI compositing, CGI enhancements and VFX for ads and films — see our [VFX and CG works](/services/vfx-and-cg/) and [what is post-production](/blog/what-is-post-production/).' },
    ],
    faqs: [
        { q: 'Why is green used for chroma key?', a: 'Green is far from human skin tones and digital cameras are very sensitive to it, which makes it easier to separate people from the background. Blue is used when green appears in the scene.' },
        { q: 'Is virtual production better than green screen?', a: 'It looks more natural for reflective surfaces and complex lighting, but it costs more up front and needs backgrounds finished before the shoot. Green screen remains the flexible, affordable choice for many projects.' },
        { q: 'Can AI remove the background without a green screen?', a: 'Yes, for many shots. Edges such as hair and fast motion can still need clean-up, so check AI results carefully on large screens.' },
        { q: 'How long does green-screen compositing take?', a: 'It depends on the number of shots and their complexity. Well-lit footage keys quickly; poorly lit footage can take much longer to clean.' },
    ],
};

export default article;
