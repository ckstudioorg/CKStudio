/** Text of "Drone Shoots in India: Rules, Zones and Permissions". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'Drones in India are governed by the Drone Rules, 2021. Before a commercial shoot, check the exact spot on the Digital Sky airspace map: green zones need no flight permission within their height limits, yellow zones — including the area 5–12 km from an operational airport’s perimeter, with different height limits — need air traffic control permission, and red zones are no-drone zones that need Central Government permission. The drone must be registered with a unique identification number, and except for the smallest (nano) drones, it must be flown by a pilot holding a Remote Pilot Certificate.',
    keyPoints: [
        'Check the location on the Digital Sky airspace map first.',
        'Green zone: up to 400 ft, no flight permission needed.',
        'Near airports and sensitive areas, permission is needed — or flying isn’t allowed.',
        'Hire a certified pilot with a registered drone.',
    ],
    body: [
        { type: 'h2', text: 'What are the green, yellow and red zones?' },
        { type: 'p', text: 'India’s airspace map for drones, published on the Digital Sky platform, colours every area by what is allowed.' },
        {
            type: 'table',
            head: ['Zone', 'Where', 'What you need'],
            rows: [
                ['Green', 'Up to 400 feet in areas not marked red or yellow; up to 200 feet in the area 8–12 km from an operational airport’s perimeter', 'No flight permission (registration and pilot rules still apply)'],
                ['Yellow', 'Above 400 feet in green areas; above 200 feet in the 8–12 km band; any height in the area 5–8 km from an operational airport’s perimeter', 'Permission from the air traffic control authority'],
                ['Red', 'No-drone zones, such as around sensitive installations', 'Permission from the Central Government'],
            ],
            caption: 'As described when the airspace map was launched in 2021 — always check the live map for your exact location',
        },
        { type: 'h2', text: 'What does this mean for shoots in Hyderabad?' },
        { type: 'p', text: 'Hyderabad has several airfields — Rajiv Gandhi International Airport at Shamshabad, Begumpet airport, and Air Force stations such as Hakimpet and Dundigal — as well as other sensitive areas. So large parts of the city fall in yellow or red zones, while many locations on the outskirts are green. Check the exact location on the map while planning, not on the shoot day.' },
        { type: 'h2', text: 'What do the drone and the pilot need?' },
        { type: 'list', items: [
            '**Registration:** each drone needs a unique identification number (UIN), obtained through the Digital Sky platform.',
            '**A Remote Pilot Certificate:** issued through Digital Sky after training at a DGCA-authorised drone school. Under the 2021 rules, it isn’t needed for nano drones, or for micro drones flown for non-commercial purposes — most professional shoots therefore need a certified pilot.',
            '**A permitted drone model:** use equipment that is allowed for use in India, from a reputable supplier.',
        ] },
        { type: 'h2', text: 'Which other permissions apply?' },
        { type: 'list', items: [
            'The owner or manager of the property you take off from and film over.',
            'Police permission for shoots in public places, as for any outdoor shoot — see [shooting locations in Hyderabad](/blog/shooting-locations-hyderabad/).',
            'The Archaeological Survey of India for protected monuments, which treats filming separately from flying.',
            'Respect for privacy: avoid filming into homes and private spaces, and get consent from people who are clearly identifiable.',
        ] },
        { type: 'h2', text: 'How do you plan a safe drone shoot?' },
        { type: 'steps', items: [
            'Mark the exact take-off point and flight area on the airspace map.',
            'Apply for any permissions needed, with time to spare.',
            'Visit the site: wires, trees, birds, towers and crowds.',
            'Plan shots in advance so flights are short and purposeful.',
            'Check weather and wind on the day; don’t fly in rain or strong wind.',
            'Keep the drone within visual line of sight, with a spotter for busy areas.',
            'Keep a crew member on crowd control near take-off and landing.',
        ] },
        { type: 'tip', text: 'Book the drone operator early and ask them to check the zone for your exact location. A shot that needs air traffic control permission can’t be arranged the morning of the shoot.' },
        { type: 'p', text: 'Aerial shots are a staple of property, industrial and tourism films — see our guides to [real estate video marketing](/blog/real-estate-video-marketing-hyderabad/) and [industrial films](/blog/industrial-film-guide-for-manufacturers/). CK Studio plans drone shots with certified operators as part of our [ad films and commercials](/services/ad-films-and-commercials/) service.' },
    ],
    faqs: [
        { q: 'Do I need permission to fly a drone for a shoot in India?', a: 'In a green zone, no flight permission is needed within the height limits, though the drone must be registered and the pilot certified. Yellow zones need air traffic control permission and red zones need Central Government permission.' },
        { q: 'How do I check whether a location is in a green, yellow or red zone?', a: 'Use the airspace map on the Digital Sky platform run by the DGCA, and check the exact take-off and flight area.' },
        { q: 'Can I fly a drone near Hyderabad airport?', a: 'The areas around operational airports are restricted: drones need air traffic control permission within the yellow-zone bands, and higher-risk areas are red zones. Check the live map and plan permissions well ahead.' },
        { q: 'Do small drones need a pilot certificate?', a: 'Under the 2021 rules, no Remote Pilot Certificate is needed for nano drones, or for micro drones used for non-commercial purposes. Commercial shoots with larger drones need a certified pilot.' },
    ],
    sources: [
        { label: 'Digital Sky platform (DGCA) — airspace map, registration and pilot certificates', url: 'https://digitalsky.dgca.gov.in/' },
        { label: 'Press Information Bureau — Ministry of Civil Aviation on drone rules and the airspace map', url: 'https://pib.gov.in/PressReleasePage.aspx?PRID=1757850' },
    ],
};

export default article;
