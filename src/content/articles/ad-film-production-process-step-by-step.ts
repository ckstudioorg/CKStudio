/** Text of "How Is an Ad Film Made? The Production Process, Step by Step". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'An ad film is made in three phases. Pre-production turns the brief into an approved script, storyboard and plan; production is the shoot (or the AI and CGI build); and post-production covers editing, colour grading, VFX, sound and delivery in every required version. Most delays come from late approvals, so agreeing who signs off at each stage saves the most time.',
    keyPoints: [
        'Three phases: pre-production, production and post-production.',
        'Clients usually approve at four points: concept, script or storyboard, rough cut and final cut.',
        'Problems are cheapest to fix on paper, before the shoot.',
        'Plan every version and language at the start.',
    ],
    body: [
        { type: 'h2', text: 'What are the stages of ad film production?' },
        {
            type: 'table',
            head: ['Stage', 'What happens', 'What you approve'],
            rows: [
                ['1. Brief', 'You share the goal, audience, message, channels, deadline and budget', 'The brief'],
                ['2. Concept', 'The studio proposes ideas and a creative direction', 'The chosen concept'],
                ['3. Script', 'Dialogue, voice-over and scene-by-scene action are written', 'The script'],
                ['4. Storyboard or pre-look', 'Key frames are drawn or generated so everyone pictures the same film', 'The look and the shot plan'],
                ['5. Pre-production', 'Casting, locations, costumes, props, crew and schedule; a pre-production meeting (PPM)', 'Cast, locations and wardrobe'],
                ['6. Production', 'The shoot — or AI generation and CGI for anything not filmed', '—'],
                ['7. Editing', 'A rough cut, then a fine cut with music and voice-over', 'Rough cut, then fine cut'],
                ['8. Finishing', 'Colour grading, VFX, graphics, sound design and the final mix', 'The final cut'],
                ['9. Delivery', 'Masters and versions for TV, digital, cinema and social media', 'Final files'],
            ],
        },
        { type: 'h2', text: 'Why does most of the work happen before the camera rolls?' },
        { type: 'p', text: 'Every decision made on paper is cheaper than one made on set. In pre-production the team locks the script, plans every shot, casts actors, finds locations and builds a schedule. A **pre-production meeting (PPM)** brings client and crew together to confirm cast, wardrobe, props, locations and the shot list before the shoot day. Our [pre-production checklist](/blog/pre-production-checklist-for-ads-and-films/) lists everything to cover.' },
        { type: 'p', text: 'For many projects, an [AI pre-look](/blog/ai-pre-looks-and-pre-teasers-for-movies/) — concept frames showing colour, lighting and mood — replaces guesswork with pictures everyone can agree on.' },
        { type: 'h2', text: 'What happens on the shoot day?' },
        { type: 'p', text: 'The director, camera, lighting, art and production teams capture every shot on the list, often with the client watching on a monitor. For AI-led or CGI ads, “production” means generating, compositing and refining scenes instead — still directed shot by shot, and still reviewed.' },
        { type: 'list', items: [
            'Hero shots go first, while energy and light are at their best.',
            'Extra shots are captured for the 15- and 6-second versions.',
            'Clean product shots and packshots are recorded for later use.',
            'Notes are kept on every take so the edit matches the plan.',
        ] },
        { type: 'h2', text: 'What happens in post-production?' },
        { type: 'p', text: 'Editing builds the story; colour grading gives every shot one consistent look; VFX and graphics add or fix elements; sound design, music and voice-over bring energy; and the final mix balances it all. Our guide to [post-production](/blog/what-is-post-production/) explains each step in detail.' },
        { type: 'h2', text: 'How long does each stage take?' },
        { type: 'p', text: 'Timelines depend on the scale of the project, but this is a realistic pattern:' },
        {
            type: 'table',
            head: ['Stage', 'Simple social ad or AI ad', 'Typical TVC'],
            rows: [
                ['Brief to approved script', 'A few days', 'About a week'],
                ['Pre-production', 'A few days', 'One to two weeks'],
                ['Shoot', 'None to one day', 'One to three days'],
                ['Post-production and versions', 'A few days to a week', 'One to two weeks'],
            ],
        },
        { type: 'p', text: 'Late approvals and a changing brief are the main causes of delay — rarely the shoot itself.' },
        { type: 'tip', text: 'Name one person on your side who gives the final approval at each stage. Feedback from five people in five separate emails is the most common reason ads run late.' },
        { type: 'h2', text: 'What do you receive at the end?' },
        { type: 'list', items: [
            'A master file in the highest quality',
            'Versions in every agreed length, for example 30, 15 and 6 seconds',
            'Aspect ratios for each platform — 16:9, 9:16, 1:1 or 4:5 (see our [video size cheat sheet](/blog/video-ad-sizes-aspect-ratios-cheat-sheet/))',
            'Language versions and subtitle files, if agreed',
            'Broadcast files for TV channels, or a [DCP for cinema screens](/blog/what-is-a-dcp-cinema-delivery-guide/), if needed',
        ] },
        { type: 'p', text: 'CK Studio handles every stage — from AI ideation and scripting to shoot, editing, colour, VFX and delivery — in Hyderabad. See our [ad films and commercials](/services/ad-films-and-commercials/) service.' },
    ],
    faqs: [
        { q: 'What is a PPM in ad film production?', a: 'A pre-production meeting where the client, agency and production team confirm the script, cast, locations, wardrobe, props, shot list and schedule before the shoot.' },
        { q: 'How many revisions are normal for an ad film?', a: 'Usually two rounds at the edit stage — rough cut and fine cut — plus small fixes on the final. The number of rounds should be written into the quote.' },
        { q: 'Can I attend the shoot?', a: 'Yes, and it is a good idea for key decisions. Most shoots have a monitor area where the client can watch and approve takes.' },
        { q: 'Can an ad film be made without a shoot?', a: 'Yes. AI ad films and CGI product videos can be made without filming, and they follow the same brief, script, storyboard and review stages.' },
    ],
};

export default article;
