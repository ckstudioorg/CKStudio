/** Text of "Shooting Locations in Hyderabad for Ads and Films". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'Hyderabad offers almost every look an ad or film needs within a short drive: heritage landmarks such as Charminar and Golconda Fort, glass-and-steel business districts around Hitech City and the Financial District, lakes and bridges such as Hussain Sagar and Durgam Cheruvu, rocky landscapes and farmhouses on the outskirts, and large studio facilities including Ramoji Film City. Every location needs the right permission — the owner for private property, the Archaeological Survey of India for centrally protected monuments, and the police for shoots in public places — so build permissions into your schedule weeks ahead.',
    keyPoints: [
        'Match the location to the story first, the look second.',
        'Private property needs the owner’s written permission.',
        'Protected monuments need an ASI licence, applied for online.',
        'Public places need police permission — plan weeks ahead.',
    ],
    body: [
        { type: 'h2', text: 'What kinds of locations does Hyderabad offer?' },
        {
            type: 'table',
            head: ['Look', 'Examples', 'Good for'],
            rows: [
                ['Heritage and the old city', 'Charminar, Golconda Fort, Qutb Shahi Tombs, Chowmahalla Palace', 'Period films, tourism, festive and food ads'],
                ['Modern business districts', 'Hitech City, Gachibowli, the Financial District', 'Corporate, tech, banking and real estate'],
                ['Lakes and bridges', 'Hussain Sagar and Necklace Road, Durgam Cheruvu cable bridge, Gandipet', 'Lifestyle, songs, night-time city shots'],
                ['Rocks and open land', 'Rock formations and open land on the city’s edges', 'Adventure, automobile and outdoor ads'],
                ['Farmhouses and fields', 'Farms and resorts around the outer ring road', 'Rural stories, family ads, product shoots'],
                ['Studios and sets', 'Ramoji Film City and studio floors in the city', 'Controlled shoots, built sets, green screen'],
                ['Real places', 'Homes, cafés, offices, shops, factories in industrial areas such as IDA Jeedimetla', 'Authentic product, industrial and testimonial films'],
            ],
        },
        { type: 'h2', text: 'Which permissions do you need?' },
        { type: 'list', items: [
            '**Private property** — homes, cafés, offices, factories, farmhouses: written permission from the owner, ideally a location agreement covering dates, hours, areas you may use, crew size, fees and damage.',
            '**Centrally protected monuments** — such as Golconda Fort and Charminar: a filming licence from the Archaeological Survey of India (ASI). Applications are made online, and commercial shoots should apply well ahead.',
            '**Public roads, parks and public places:** permission from the police commissionerate for that area (Hyderabad, Cyberabad or Rachakonda), plus the authority that manages the park, lake or space.',
            '**Heritage buildings run by trusts or hotels:** book directly with the management.',
            '**Studios:** book with the studio, which has its own rules for crew, power and sets.',
            '**Drones:** separate rules apply everywhere — read our guide to [drone shoots in India](/blog/drone-shoot-rules-india/).',
        ] },
        { type: 'h2', text: 'How far ahead should you plan?' },
        { type: 'p', text: 'Allow several weeks for monuments and public places, and at least a few days for private locations. Check festival dates and processions, which change traffic and crowds, and avoid peak traffic hours for road shots. Plan around the weather too: the south-west monsoon brings rain to Telangana from roughly June to September, and April–May afternoons are harsh for outdoor shoots. Early mornings and the hour before sunset give the softest light.' },
        { type: 'h2', text: 'A location scouting checklist' },
        { type: 'list', items: [
            'Light: where the sun is at your shoot time, and whether you can control it indoors.',
            'Sound: traffic, construction, loudspeakers and flight paths.',
            'Power, parking for vehicles and space for the crew and equipment.',
            'Crowd control, especially in the old city and markets.',
            'Washrooms, a green room for talent and a safe place for equipment.',
            'Permissions, fees and the contact person on the day.',
            'A backup location in case of rain or a last-minute cancellation.',
        ] },
        { type: 'tip', text: 'Photograph every location from the angles in your storyboard during the scout, at the same time of day you plan to shoot. It shows problems with light and backgrounds before shoot day.' },
        { type: 'p', text: 'CK Studio is based at IDA Jeedimetla, Hyderabad, and handles location scouting and permissions as part of production — see our [ad films and commercials](/services/ad-films-and-commercials/) service, the [pre-production checklist](/blog/pre-production-checklist-for-ads-and-films/) and, for property shoots, our guide to [real estate video marketing in Hyderabad](/blog/real-estate-video-marketing-hyderabad/).' },
    ],
    faqs: [
        { q: 'Do I need permission to shoot in public places in Hyderabad?', a: 'For a commercial shoot with a crew and equipment, yes — permission from the police commissionerate for that area, plus the authority that manages the place. Apply well before the shoot date.' },
        { q: 'Can you shoot an ad at Charminar or Golconda Fort?', a: 'Commercial filming at centrally protected monuments needs a licence from the Archaeological Survey of India. Applications are made online; plan weeks ahead and expect conditions on timing, crew and equipment.' },
        { q: 'Is Ramoji Film City only for movies?', a: 'No. Studio complexes host ads, music videos, events and series as well as films. Book directly with the studio for sets, floors and services.' },
        { q: 'What is a location agreement?', a: 'A written agreement with the property owner that sets out the shoot dates and hours, which areas may be used, the fee, the crew size, and who is responsible for any damage.' },
    ],
    sources: [
        { label: 'India Cine Hub (Government of India) — filming at ASI monuments', url: 'https://indiacinehub.gov.in/filming-permissions/filming-monuments' },
        { label: 'India Cine Hub — film facilitation and permissions', url: 'https://indiacinehub.gov.in/' },
    ],
};

export default article;
