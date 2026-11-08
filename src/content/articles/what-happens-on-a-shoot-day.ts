/** Text of "What Happens on an Ad Shoot Day: Call Sheets, Crew and Your Role". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'An ad shoot runs to a call sheet: a schedule telling everyone where to be, when, and which shots are planned. The director leads the creative work, the assistant director keeps the day on time, the cinematographer (DOP) handles camera and light, and the producer manages everything else. As the client, your job is to approve the key shots — product, brand and claims — at the monitor, give notes through one person, and let the plan run.',
    keyPoints: [
        'The call sheet is the plan for the day — read it the night before.',
        'Notes go through one person, to the director, not to actors or crew.',
        'Approve hero shots at the monitor as they happen.',
        'Bring extra product, approved claims and anyone who must sign off.',
    ],
    body: [
        { type: 'h2', text: 'What is a call sheet?' },
        { type: 'p', text: 'The call sheet is a one- or two-page plan sent the evening before. It lists the date and location with a map, call times (when each person must arrive), the order of scenes and shots, cast and crew contacts, sunrise and sunset times, the weather forecast, parking, the nearest hospital, and notes on wardrobe or props. Everything on the day is measured against it.' },
        { type: 'h2', text: 'Who does what on set?' },
        {
            type: 'table',
            head: ['Role', 'What they do'],
            rows: [
                ['Director', 'Leads the creative work: performances, framing, the feel of every shot.'],
                ['Assistant director (AD)', 'Runs the schedule, calls “quiet” and “action”, keeps the day on time.'],
                ['Producer / line producer', 'Budget, logistics, permissions, crew, food and problem-solving.'],
                ['Director of photography (DOP)', 'Camera, lenses and lighting design.'],
                ['Gaffer and lighting crew', 'Set up and shape the lights.'],
                ['Grips', 'Camera support: dollies, tracks, cranes and rigs.'],
                ['Sound recordist', 'Records clean dialogue and sound on location.'],
                ['Art director', 'Sets, props and set dressing.'],
                ['Hair, make-up and wardrobe', 'How the cast look, kept consistent between takes.'],
                ['Product or food stylist', 'Makes the product look perfect in every shot.'],
                ['DIT / data', 'Checks and backs up the footage through the day.'],
            ],
        },
        { type: 'p', text: 'The client and agency usually sit at **video village** — the monitors where the director and producer watch each take.' },
        { type: 'h2', text: 'How does a shoot day usually run?' },
        { type: 'steps', items: [
            '**Crew call and set-up.** Equipment, lights and the set go in first.',
            '**Cast in hair, make-up and wardrobe** while the first shot is lit.',
            '**Blocking and rehearsal.** The director walks the actors through the scene; the camera team marks positions.',
            '**Takes.** Each shot is filmed several times until the director has what is needed.',
            '**Client check.** Key shots are reviewed at the monitor before moving on.',
            '**Next set-up.** Lights and camera move, and the cycle repeats.',
            '**Meal break,** then the afternoon schedule.',
            '**Product and pack shots,** often filmed on a separate table-top set at the end of the day or on another day.',
            '**Wrap.** Footage is backed up twice before anyone leaves.',
        ] },
        { type: 'h2', text: 'What should the client do on set?' },
        { type: 'list', items: [
            '**Bring perfect product samples** — several of each, with flawless packaging.',
            '**Bring approved claims and legal lines,** and someone who can approve them on the day.',
            '**Choose one spokesperson** to give notes, through the director or producer.',
            '**Approve the hero frames** — product, logo, key moments — while the set is still lit.',
            '**Ask questions during breaks,** not during takes.',
            '**Avoid new ideas that change the plan,** unless they are worth the time they cost.',
        ] },
        { type: 'h2', text: 'What can go wrong, and how is it handled?' },
        { type: 'p', text: 'Weather, power cuts, a location problem, a delayed actor or damaged product can all cost time. A good producer plans for them: backup indoor locations, generators, spare product, and a schedule with the most important shots first. If the day runs long, overtime for crew and equipment usually applies — one more reason to protect the schedule.' },
        { type: 'tip', text: 'Bring more product than you think you need. Labels scratch, packs dent and food wilts under hot lights.' },
        { type: 'p', text: 'Most of a shoot day’s success is decided earlier, in pre-production — see our [pre-production checklist](/blog/pre-production-checklist-for-ads-and-films/) and the full [ad film production process](/blog/ad-film-production-process-step-by-step/).' },
    ],
    faqs: [
        { q: 'Do we need to be on set?', a: 'It isn’t required, but it helps for important shoots: you can approve the product and brand shots on the spot. If you can’t attend, ask for a live monitor link or quick stills of key frames.' },
        { q: 'Can we shoot social content on the same day?', a: 'Often yes, if it is planned in advance. Reels, stills and behind-the-scenes clips can be scheduled around the main shoot — see [one shoot day, a month of content](/blog/one-shoot-a-month-of-content/).' },
        { q: 'What is a recce?', a: 'A recce is a visit to the location before the shoot to check light, space, sound, power and permissions, and to plan where the camera and crew will go.' },
        { q: 'Why does the crew film the same shot so many times?', a: 'Each take can differ in performance, focus or timing. Several good takes give the editor choices and protect the shot if one has a problem nobody noticed on set.' },
    ],
};

export default article;
