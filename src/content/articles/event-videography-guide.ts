/** Text of "Event Videography Guide: How to Plan Coverage, Highlights and Aftermovies". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'Great event videos are planned before the event: agree the deliverables (a highlight film, full session recordings, social clips, a same-day edit), share the run-of-show with the crew, plan a shot list of key moments, record clean sound from the stage, and arrange permissions for venues, drones and music. After the event, a short highlight film or aftermovie of one to three minutes, plus vertical clips, keeps the event working for months.',
    keyPoints: [
        'Decide the deliverables before choosing the crew.',
        'Share the run-of-show and a must-capture list.',
        'Take audio directly from the stage sound system.',
        'Deliver quick social clips while the event is still trending.',
    ],
    body: [
        { type: 'h2', text: 'Which event videos do you need?' },
        {
            type: 'table',
            head: ['Deliverable', 'Length', 'Use'],
            rows: [
                ['Highlight film or aftermovie', '1–3 minutes', 'Website, YouTube, next year’s promotion'],
                ['Same-day edit', '1–2 minutes', 'Shown at the end of the event or posted that night'],
                ['Social clips', '15–60 seconds, vertical', 'Reels, Shorts, Stories during and after the event'],
                ['Full session recordings', 'Full length', 'Attendees, training, archives'],
                ['Speaker or guest interviews', '1–2 minutes each', 'Testimonials and content for months'],
            ],
        },
        { type: 'h2', text: 'How do you plan event coverage?' },
        { type: 'steps', items: [
            'Share the agenda and run-of-show with the video team at least a week before.',
            'List the must-capture moments: arrivals, lamp lighting, keynote, launch reveal, awards, group photo.',
            'Decide camera positions: a fixed wide camera, a stage camera and roaming cameras for the crowd.',
            'Coordinate with the AV team for a clean audio feed from the mixer.',
            'Plan interviews in a quiet corner with good light.',
            'Agree how quickly each deliverable is needed.',
        ] },
        { type: 'h2', text: 'What makes an aftermovie memorable?' },
        { type: 'list', items: [
            'A strong opening shot that sets the scale and mood',
            'Faces and reactions, not just stage wides',
            'A few short sound bites from speakers or guests',
            'Music edited to the rhythm of the moments',
            'The event name, date and next edition at the end',
        ] },
        { type: 'h2', text: 'What permissions do you need?' },
        { type: 'list', items: [
            'The venue’s permission for filming, camera positions and drones.',
            'Drone flights only with a registered drone and certified pilot, and permission where the airspace zone requires it.',
            'Licensed music for the aftermovie — popular songs need rights from their owners; see [music licensing for ads](/blog/music-for-ads-licensing-india/).',
            'Notices at the entrance that the event is being filmed, and consent from people featured prominently.',
            'Agreements with speakers about recording and publishing their sessions.',
        ] },
        { type: 'h2', text: 'How do you get more value from event footage?' },
        { type: 'p', text: 'Event footage can feed content for months: speaker clips, customer interviews, behind-the-scenes Reels and next year’s promotion. Plan these at the start so the crew captures them. Pair it with a matching [event branding kit](/blog/event-branding-kit-checklist/) so everything on screen looks like one brand.' },
        { type: 'h2', text: 'What crew and equipment does good coverage need?' },
        { type: 'list', items: [
            'A lead camera operator who knows the run-of-show and the must-capture list',
            'A fixed wide camera for the full stage, recording continuously',
            'One or two roaming cameras for reactions, guests and details',
            'Wireless microphones for interviews and a feed from the stage sound mixer',
            'Spare batteries and memory cards, and a backup of every card during the day',
            'An editor on site if you need a same-day edit',
        ] },
        { type: 'h2', text: 'How does a same-day edit work?' },
        { type: 'steps', items: [
            'Plan the structure and music before the event begins.',
            'Copy footage to the on-site editor in batches through the day.',
            'Cut the opening moments while the event continues.',
            'Add the key moments (launch, awards) as soon as they happen.',
            'Play it on the screens at the end, then post it that night.',
        ] },
        { type: 'tip', text: 'Ask for three vertical clips to be delivered the same evening. Posting while people are still talking about the event multiplies its reach.' },
        { type: 'p', text: 'CK Studio covers corporate events, launches and public events — see the Events section of [our work](/#portfolio) and our [ad films and commercials](/services/ad-films-and-commercials/) service.' },
    ],
    faqs: [
        { q: 'How many cameras does an event need?', a: 'A small event can be covered with one or two cameras; conferences and large launches usually need a fixed wide camera, a stage camera and one or two roaming cameras.' },
        { q: 'How long does an event highlight video take?', a: 'Quick social clips can be ready the same day; a polished highlight film or aftermovie usually takes a few days to a week.' },
        { q: 'Can we use a film song in our event aftermovie?', a: 'Only with permission from the rights holders. Licensed library music or original music is safer and avoids takedowns.' },
        { q: 'Do we need consent from attendees?', a: 'Display a clear notice that the event is being filmed, and get written consent from anyone featured prominently, such as interviewees.' },
    ],
    sources: [
        { label: 'Digital Sky (DGCA) — drone registration and airspace map', url: 'https://digitalsky.dgca.gov.in/' },
    ],
};

export default article;
