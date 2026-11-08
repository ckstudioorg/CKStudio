/** Text of "Videos for Hotels, Resorts and Farm Stays: What to Shoot to Get Bookings". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'Guests book when a video lets them imagine their own stay. Film the experience in the order a guest lives it — arrival, room, food, activities, evening and morning — in good natural light and with the real sounds of the place. Then cut a 60–90 second hero film for your website and YouTube and a series of short vertical reels for Instagram and WhatsApp. Show what is really there: honest videos bring guests whose expectations you can meet.',
    keyPoints: [
        'Film the stay in the order a guest experiences it.',
        'One hero film plus many short reels from the same shoot.',
        'Shoot at golden hour and in your best season — and never fake it.',
        'Get consent before showing any guest; film when spaces are empty.',
    ],
    body: [
        { type: 'h2', text: 'What should a stay video show?' },
        { type: 'list', items: [
            '**The arrival** — the gate, the drive in, the first view. A drone shot works well where it is allowed.',
            '**Rooms and spaces** — the bed, the view from the window, the bathroom, the balcony at sunrise.',
            '**Food** — the kitchen, local dishes, breakfast on the lawn, produce from the farm.',
            '**Activities** — the pool, farm walks, cycling, bonfires, games for children, quiet corners to read.',
            '**People** — a host’s welcome, staff at work, the cook who remembers every guest’s favourite dish.',
            '**Surroundings and sound** — birds, rain on the roof, the fire crackling, the village nearby.',
            '**The practical details** — parking, distance from the city, accessibility, family and pet rules.',
        ] },
        { type: 'h2', text: 'Which videos do you need?' },
        {
            type: 'table',
            head: ['Video', 'Typical length', 'Where it is used'],
            rows: [
                ['Hero film', '60–90 seconds', 'Website home page, YouTube, Google Business Profile'],
                ['Room or cottage tours', '20–40 seconds each', 'Website booking pages, WhatsApp replies to enquiries'],
                ['Experience reels', '10–30 seconds', 'Instagram, Facebook, YouTube Shorts'],
                ['Food and kitchen stories', '15–45 seconds', 'Instagram and YouTube'],
                ['Seasonal and festival offers', '15 seconds', 'Ads, WhatsApp status'],
                ['Guest stories (with consent)', '30–60 seconds', 'Website and social — see [testimonial videos](/blog/customer-testimonial-videos/)'],
            ],
        },
        { type: 'p', text: 'All of these can come from one well-planned shoot of a day or two — see [one shoot day, a month of content](/blog/one-shoot-a-month-of-content/).' },
        { type: 'h2', text: 'When is the best time to film?' },
        { type: 'p', text: 'Light sells hospitality. Plan the exteriors for early morning and the hour before sunset, and rooms when daylight is soft. Pick your best season: farm stays around Hyderabad look their greenest after the monsoon rains, while pools and lawns shine in clear winter light. Film on weekdays or between bookings, so spaces are empty and guests aren’t disturbed. Keep a rain plan — wet weather can look beautiful on camera if you are ready for it.' },
        { type: 'h2', text: 'How do you handle guests and privacy?' },
        { type: 'list', items: [
            'Film common areas when they are empty, or with guests who have agreed in writing to appear.',
            'Never film inside occupied rooms, and avoid recognisable guests in the background.',
            'For children, get a parent’s written consent — or keep them out of frame.',
            'Use friends, staff or actors to show activities, with signed releases (see [casting for ads](/blog/casting-actors-and-models-for-ads/)).',
        ] },
        { type: 'h2', text: 'Can you use a drone?' },
        { type: 'p', text: 'Aerial shots show the size and setting of a property like nothing else, but drones in India must follow the Drone Rules: registration, a certified pilot for most drones, and a check of the airspace map before every flight — areas around airports and some other places are restricted. Read our [drone shoot rules guide](/blog/drone-shoot-rules-india/) or hire a crew that handles it for you.' },
        { type: 'h2', text: 'How do you turn views into bookings?' },
        { type: 'list', items: [
            '**Make booking easy** — a direct booking link or WhatsApp number in every bio, caption and video end card.',
            '**Pin your best reel** and keep the hero film on the first screen of your website.',
            '**Add videos and photos to your Google Business Profile** — see [our Google Business Profile guide](/blog/google-business-profile-guide-hyderabad/).',
            '**Post regularly**, planned around seasons and long weekends — see the [social media content calendar](/blog/social-media-content-calendar/).',
            '**Reply quickly** to every enquiry, with a short room-tour video if they ask about a particular cottage.',
        ] },
        { type: 'tip', text: 'Record clean sound of the place: birds at dawn, water, the fire at night. Sound sells the feeling of a stay as much as the picture does.' },
    ],
    faqs: [
        { q: 'How long should a resort video be?', a: 'A hero film of 60–90 seconds works for your website and YouTube. For Instagram and WhatsApp, short reels of 10–30 seconds that each show one experience perform better than one long video.' },
        { q: 'Should we use music or natural sound?', a: 'Both. Music sets the mood, but mixing in real sounds — birds, water, laughter at dinner — makes the place feel real. Use licensed music only.' },
        { q: 'Can we shoot on phones?', a: 'For everyday reels, yes. For the hero film and room tours that will represent your property for a long time, a professional shoot with good lenses, lighting and stabilisation is worth it.' },
        { q: 'Is it fine to make the property look better than it is?', a: 'Make it look its best, but don’t mislead. Good light and colour grading are fine; hiding problems or showing amenities you don’t have leads to disappointed guests and bad reviews.' },
    ],
};

export default article;
