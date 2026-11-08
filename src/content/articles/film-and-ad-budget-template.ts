/** Text of "How to Make a Film or Ad Budget: Line Items and Template". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'A film or ad budget lists every cost from idea to release, grouped into stages: development (script, rights, planning), people in front of and behind the camera, the shoot itself (equipment, locations, art, transport, food, permits), post-production (edit, grade, VFX, sound, music), delivery (masters, subtitles, DCP or OTT files) and, for films, marketing. Build it from the script and schedule, not from a guess: break the script into shooting days, price each line from real quotes, and add a contingency line for the unexpected.',
    keyPoints: [
        'Budget from the script and schedule, line by line.',
        'Group costs by stage so gaps are easy to spot.',
        'Post-production and delivery are often under-budgeted.',
        'Always keep a contingency line.',
    ],
    body: [
        { type: 'h2', text: 'Why build a budget line by line?' },
        { type: 'p', text: 'A single round figure hides decisions. A line-by-line budget shows what each choice costs — an extra shooting day, a bigger location, a known face, more VFX shots — so producers and clients can make trade-offs with open eyes. It also becomes the tool for tracking actual spending during the production.' },
        { type: 'h2', text: 'What are the main sections of a budget?' },
        {
            type: 'table',
            head: ['Section', 'Typical line items'],
            rows: [
                ['Development', 'Story and script, rights, research, pitch deck, pre-looks, storyboard'],
                ['Key creative', 'Writer, director, producer, director of photography'],
                ['Cast', 'Lead and supporting actors, models, voice-over artists, extras'],
                ['Crew', 'Camera, lighting, sound, art, costume, make-up and hair, production team'],
                ['Equipment', 'Camera and lenses, lights, grip, sound kit, drones, special rigs'],
                ['Locations and sets', 'Location fees, studio floors, set construction, props'],
                ['Shoot logistics', 'Transport, food, accommodation, permissions, insurance, security'],
                ['Post-production', 'Editing, colour grading (DI), VFX, sound design and mix, titles'],
                ['Music', 'Original score, licensed tracks, songs and their rights'],
                ['Delivery', 'Masters, subtitles, dubbing, DCP or OTT deliverables, QC'],
                ['Marketing (films)', 'Posters, teasers and trailers, digital campaign, events'],
                ['Overheads and contingency', 'Office, accounting, legal, taxes as applicable, contingency'],
            ],
            caption: 'A simple structure that works for ads and films — copy it into a spreadsheet',
        },
        { type: 'h2', text: 'How do you build a budget, step by step?' },
        { type: 'steps', items: [
            'Lock the script or the ad’s brief and storyboard — the budget follows them.',
            'Break the script down: scenes, locations, cast, props, special effects and stunts.',
            'Make a schedule: how many shooting days, where, and with whom.',
            'Price each line from real quotes, rates and the schedule (days × daily cost).',
            'Add post-production, music and delivery based on the finished format and platforms.',
            'Add marketing for films, and overheads, taxes and a contingency line.',
            'Review: cut or simplify where the total is too high, and update the schedule to match.',
        ] },
        { type: 'h2', text: 'What do people forget to budget for?' },
        { type: 'list', items: [
            'Extra shooting days when scenes or weather run over.',
            'Music rights — especially well-known songs, which can cost more than the shoot — see [music for ads in India](/blog/music-for-ads-licensing-india/).',
            'Subtitles, dubbing and platform deliverables — see [OTT delivery](/blog/ott-delivery-specs/).',
            'Permissions and location fees for public places and monuments — see [shooting locations in Hyderabad](/blog/shooting-locations-hyderabad/).',
            'Re-shoots and changes after review rounds.',
            'Cut-downs and versions: a 30-second ad usually also needs 15- and 6-second edits.',
        ] },
        { type: 'h2', text: 'How much contingency should you keep?' },
        { type: 'p', text: 'Many producers keep a contingency of around ten per cent of the total for the unexpected, and more for risky shoots — outdoor schedules in the monsoon, complex VFX or first-time locations. It is not spare money: it is protection that lets the project finish without cutting corners.' },
        { type: 'h2', text: 'How is an ad budget different from a film budget?' },
        { type: 'p', text: 'Ad budgets are shorter and concentrated: a few shoot days, intense post-production and many versions, plus usage rights for talent and music tied to media, territory and duration. Film budgets add months of development, longer schedules, bigger post-production and marketing. For what drives ad costs in particular, read [how much an ad film costs in India](/blog/ad-film-cost-in-india/); for films, a clear budget also strengthens your [movie pitch deck](/blog/how-to-build-a-movie-pitch-deck/).' },
        { type: 'tip', text: 'Track actual spending against each line every week of the shoot. Overspends found on day two can still be fixed; found at the end, they can’t.' },
        { type: 'p', text: 'CK Studio helps producers and brands plan, budget and deliver films and ads — see our [movie post-production](/services/movie-post-production/) and [ad films and commercials](/services/ad-films-and-commercials/) services, and the [pre-production checklist](/blog/pre-production-checklist-for-ads-and-films/).' },
    ],
    faqs: [
        { q: 'What is the difference between above-the-line and below-the-line costs?', a: 'Above-the-line costs are the key creative people and rights — script, director, producers, lead cast. Below-the-line costs are everything else needed to make the film: crew, equipment, locations, logistics and post-production.' },
        { q: 'Should I include taxes in a production budget?', a: 'Yes. Add taxes such as GST as they apply to each item, and confirm the treatment with your accountant so the budget matches what you will actually pay.' },
        { q: 'How do I reduce a budget without hurting the film?', a: 'Reduce shooting days by combining locations, simplify scenes that need many extras or stunts, plan VFX early instead of fixing problems later, and choose music you can afford to license.' },
        { q: 'Is there a standard film budget template?', a: 'There is no single official template, but most follow the structure above: development, creative team, cast, crew, equipment, locations, logistics, post-production, music, delivery, marketing and contingency.' },
    ],
};

export default article;
