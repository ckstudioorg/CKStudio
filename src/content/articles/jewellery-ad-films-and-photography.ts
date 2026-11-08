/** Text of "Jewellery Ad Films and Photography: Making Gold Shine". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'Jewellery looks its best on camera with controlled, soft light for the metal and small, precise highlights for the sparkle of stones, shot with macro lenses so craftsmanship is visible, and styled on models or sets that match the brand. Ad films add slow, graceful movement — light sweeping across a necklace, a turning ring, a bride’s moment — and careful retouching removes dust and scratches without changing the design. Time campaigns to the big buying moments such as Akshaya Tritiya, Dhanteras and the wedding season, and keep every claim honest: purity, weight, hallmarking and prices must match what customers will actually buy.',
    keyPoints: [
        'Gold needs soft light; diamonds need tiny, precise highlights.',
        'Macro detail sells craftsmanship.',
        'Retouch to clean, never to change the design.',
        'Plan around Akshaya Tritiya, Dhanteras and wedding seasons.',
    ],
    body: [
        { type: 'h2', text: 'Why is jewellery hard to photograph?' },
        { type: 'p', text: 'Jewellery is small, shiny and three-dimensional. Polished gold reflects everything around it — including the camera, the photographer and the studio — and diamonds only sparkle when light hits them at the right angle. Getting colour right matters too: customers need to recognise the real tone of yellow, rose or white gold.' },
        { type: 'h2', text: 'How is jewellery lit?' },
        { type: 'list', items: [
            '**Large, soft light sources** and diffusion (light tents, scrims) make metal glow evenly instead of showing hard reflections.',
            '**White and black cards** shape the reflections that define the edges of gold.',
            '**Small point lights** create the sparkle in diamonds and gemstones.',
            '**Consistent colour** from calibrated lights and a grey reference, so the gold tone is accurate.',
            '**Clean surfaces:** gloves, blowers and polishing cloths, because every speck shows in macro.',
        ] },
        { type: 'h2', text: 'Which shots does a jewellery campaign need?' },
        {
            type: 'table',
            head: ['Shot', 'Purpose', 'Where it is used'],
            rows: [
                ['Packshot on white or a plain background', 'Clear product view', 'Website, catalogue, marketplaces'],
                ['Macro detail', 'Craftsmanship: settings, filigree, engraving', 'Ads, product pages, Reels'],
                ['On-model', 'Scale and how it looks when worn', 'Ads, social media, store displays'],
                ['Styled flat-lays and sets', 'Mood and occasion', 'Festive campaigns, social media'],
                ['360° turntable video', 'Every angle in a few seconds', 'Product pages, WhatsApp catalogues'],
                ['Ad film', 'Emotion, story and the moment of wearing', 'TV, YouTube, cinema, social ads'],
            ],
        },
        { type: 'h2', text: 'What makes a jewellery ad film memorable?' },
        { type: 'list', items: [
            'A human moment — a bride’s first look, a gift, a mother passing down an heirloom — with the jewellery at its heart.',
            'Slow, graceful camera movement and light sweeping across the piece to make it sparkle.',
            'Culture and occasion shown authentically, from Telugu weddings to festivals.',
            'Sound design that adds texture: soft chimes, fabric, breath, music that builds.',
            'A clear brand ending, and cut-downs for social media and YouTube.',
        ] },
        { type: 'h2', text: 'Can CGI and AI be used for jewellery?' },
        { type: 'p', text: '3D renders let you show pieces before they are made, create impossible camera moves and produce consistent catalogue images at scale. AI tools help with backgrounds, sets and retouching. Whatever the method, the final image must represent the real product accurately — design, stones, finish and colour — so customers receive what they saw. Compare approaches in [AI product photography vs a product shoot](/blog/ai-product-photography-vs-product-shoot/).' },
        { type: 'h2', text: 'What should jewellery ads be careful about?' },
        { type: 'list', items: [
            'Purity, weight, stone details and prices must be accurate and match what is sold.',
            'Gold jewellery sold in India carries a BIS hallmark with a six-digit HUID code; show and describe hallmarking truthfully.',
            'Offers must state real terms — making charges, conditions and dates.',
            'Retouching should clean dust and scratches, not change the design or the stones.',
            'Follow ASCI’s advertising codes for honest, substantiated claims.',
        ] },
        { type: 'h2', text: 'When should jewellers run campaigns?' },
        { type: 'p', text: 'Jewellery buying peaks around Akshaya Tritiya, Dhanteras and Diwali, Sankranti, Dasara and the wedding seasons. Shoot campaigns six to eight weeks ahead — see our [festival marketing calendar](/blog/festival-marketing-calendar-telangana-andhra/). A strong photo library also powers [catalogues and brochures](/blog/product-catalogue-brochure-design/).' },
        { type: 'tip', text: 'Shoot every piece in a consistent packshot setup the first time. A uniform catalogue looks premium, and new pieces can be added later in the same style.' },
        { type: 'p', text: 'CK Studio shoots jewellery ad films, campaigns and product photography in Hyderabad — see our [ad films and commercials](/services/ad-films-and-commercials/) service.' },
    ],
    faqs: [
        { q: 'How do you photograph gold jewellery so it doesn’t look dull?', a: 'Use large, soft light sources and white and black cards to shape reflections, keep colour calibrated so the gold tone is accurate, and clean every piece before shooting.' },
        { q: 'How do you make diamonds sparkle in videos?', a: 'Small, precise light sources and slow movement — of the light, the camera or the piece — create the flashes of sparkle. A turntable or a slow light sweep works well.' },
        { q: 'Is it okay to retouch jewellery photos?', a: 'Yes, to remove dust, scratches and fingerprints and to correct colour. Retouching should never change the design, stones or finish of the real product.' },
        { q: 'What is HUID on gold jewellery?', a: 'HUID is a six-digit alphanumeric hallmark unique identification code from the Bureau of Indian Standards. Hallmarked gold jewellery sold in India carries it, which lets customers verify the piece.' },
    ],
    sources: [
        { label: 'Ministry of Consumer Affairs (PIB) — six-digit HUID hallmarking for gold jewellery', url: 'https://pib.gov.in/PressReleasePage.aspx?PRID=1904262' },
        { label: 'Bureau of Indian Standards (BIS)', url: 'https://www.bis.gov.in/' },
        { label: 'ASCI — advertising codes and guidelines', url: 'https://www.ascionline.in/' },
    ],
};

export default article;
