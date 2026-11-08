/** Text of "Pre-Production Checklist for Ad Films and Short Films (2026)". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'Pre-production is the planning stage between an approved idea and the shoot. A complete checklist covers the locked script and storyboard, casting and contracts, locations and permissions, crew and equipment, art, costumes and props, a shot list and call sheet, safety and backup plans, and a pre-production meeting where everyone signs off. Good pre-production is the single biggest saving in any production.',
    keyPoints: [
        'Lock the script and storyboard before booking anything expensive.',
        'Get permissions in writing — locations, people, music and drones.',
        'A shot list and call sheet keep the day on schedule.',
        'Plan post-production formats and versions now, not after the shoot.',
    ],
    body: [
        { type: 'h2', text: 'The complete pre-production checklist' },
        { type: 'h3', text: 'Creative' },
        { type: 'list', items: [
            'Script locked and approved by the final decision-maker',
            'Storyboard or [AI pre-look](/blog/ai-pre-looks-and-pre-teasers-for-movies/) approved',
            'Shot list with priorities: must-have, nice-to-have',
            'Look references for colour, lighting, costume and art',
            'Music direction agreed, and licences checked',
        ] },
        { type: 'h3', text: 'People' },
        { type: 'list', items: [
            'Director, cinematographer and heads of department confirmed',
            'Cast chosen, with contracts covering fees and usage rights',
            'Guardian consent for any child performers',
            'Signed releases from anyone recognisable on camera',
            'A named client approver attending the shoot',
        ] },
        { type: 'h3', text: 'Places' },
        { type: 'list', items: [
            'Locations scouted (a recce), with photos at the time of day you will shoot',
            'Written permission from location owners; permission from local authorities for public places',
            'Power, parking, toilets, a green room and noise checked',
            'Drone flights cleared: a registered drone, a certified pilot and permission for the airspace zone',
            'A backup location or indoor plan for bad weather',
        ] },
        { type: 'h3', text: 'Things' },
        { type: 'list', items: [
            'Camera, lenses, lighting, grip and sound equipment booked and tested',
            'Props, costumes and set dressing approved in fittings',
            'Several samples of the product, cleaned and ready',
            'Enough memory cards and drives for two backups',
        ] },
        { type: 'h3', text: 'Paperwork and schedule' },
        { type: 'list', items: [
            'A shooting schedule and a call sheet for each day',
            'A budget tracker with a contingency',
            'Safety plan, first aid and emergency contacts',
            'Food, transport and stay arranged for cast and crew',
        ] },
        { type: 'h3', text: 'Post-production planning' },
        { type: 'list', items: [
            'Frame rate, resolution and colour workflow agreed with the editor and colourist',
            'Every final length, aspect ratio and language listed (see our [video size cheat sheet](/blog/video-ad-sizes-aspect-ratios-cheat-sheet/))',
            'VFX shots identified, with the reference plates they need',
        ] },
        { type: 'h2', text: 'What is a call sheet?' },
        { type: 'p', text: 'A call sheet is the one-page plan for a shoot day: who must arrive when, the location and map, the scenes and shots in order, contacts, weather, nearest hospital and special notes. It goes to everyone the evening before.' },
        { type: 'h2', text: 'What happens at a pre-production meeting (PPM)?' },
        { type: 'steps', items: [
            'Walk through the script and storyboard shot by shot.',
            'Approve cast, wardrobe, props and locations with photos.',
            'Confirm the schedule, the shot priorities and who approves on set.',
            'Agree the deliverables, lengths and versions.',
            'Record every decision in written minutes shared the same day.',
        ] },
        { type: 'h2', text: 'Do you need permission to fly a drone for a shoot?' },
        { type: 'p', text: 'Yes, in most cases. Under India’s Drone Rules, 2021, drones must be registered on the Digital Sky platform, and commercial flights need a pilot with a remote pilot certificate (only nano drones and non-commercial micro drones are exempt). Flights in green zones need no extra permission, while yellow zones — such as areas near airports — and red zones need prior approval. Check the Digital Sky map before every flight.' },
        { type: 'h2', text: 'What are the most common pre-production mistakes?' },
        { type: 'list', items: [
            'Booking the shoot before the script is approved',
            'Not visiting the location at the time of day you will shoot',
            'Forgetting usage rights in cast and music contracts',
            'Planning only the main version and adding the others later',
            'Too many shots for one day, with no priorities',
        ] },
        { type: 'tip', text: 'Always bring at least three of every product to a shoot. One gets scratched, one gets used for tests, and the best-looking one becomes the hero.' },
        { type: 'p', text: 'Need a team to plan and run it? CK Studio covers [pre-production, shoot and post-production](/services/ad-films-and-commercials/) from Hyderabad. Next, read [how an ad film is made](/blog/ad-film-production-process-step-by-step/).' },
    ],
    faqs: [
        { q: 'How long does pre-production take?', a: 'For a simple ad, a few days; for a TV commercial, one to two weeks; for a short or feature film, weeks to months, depending on casting, locations and permissions.' },
        { q: 'Do I need permission to shoot in public places in Hyderabad?', a: 'Commercial shoots in public places, roads, parks and heritage sites usually need permission from the relevant local authorities, and private locations need the owner’s written consent. Allow time for this in your schedule.' },
        { q: 'What is a recce?', a: 'A recce is a scouting visit to a location before the shoot to check light, space, sound, power, access and permissions, and to plan where the camera and crew will go.' },
        { q: 'What is the difference between a shot list and a storyboard?', a: 'A storyboard shows each shot as a picture; a shot list is a written table of every shot with its size, angle, movement and priority. Most shoots use both.' },
    ],
    sources: [
        { label: 'Digital Sky (DGCA) — drone registration, pilot certificates and airspace map', url: 'https://digitalsky.dgca.gov.in/' },
        { label: 'Khaitan & Co — The Drone Rules, 2021 explained', url: 'https://khaitanco.com/thought-leaderships/The-Drone-Rules-2021-Giving-wings-to-the-drone-industry-in-India' },
    ],
};

export default article;
