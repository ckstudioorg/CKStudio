/** Text of "Ad Films for Agri Brands: How to Reach Farmers". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'Ads for seeds, fertilisers, crop care, tractors and farm equipment work when they are made in the farmer’s own language, filmed in real fields with real growers, and built around proof: a demonstration plot, a neighbour’s result, a clear “how to use it”. Farmers share videos on WhatsApp and watch on YouTube, so plan short, clear films that work on a phone, and keep every claim in line with what the product’s label allows.',
    keyPoints: [
        'Local language and dialect matter more than polish.',
        'Proof beats promises: demonstrations and real farmer stories.',
        'Plan around the crop season; the right week matters.',
        'WhatsApp, YouTube and dealer screens carry most of the viewing.',
    ],
    body: [
        { type: 'h2', text: 'What makes farm advertising different?' },
        { type: 'list', items: [
            '**The purchase is a livelihood decision** — a wrong seed or spray can cost a season, so trust comes before excitement.',
            '**Advice travels by word of mouth** — neighbours, dealers and local experts carry more weight than a slogan.',
            '**Timing is tied to the crop** — an ad about sowing is useless after sowing.',
            '**Language is local** — the Telugu spoken in one district differs from another; see [making ads for Telugu audiences](/blog/telugu-ads-for-telugu-audiences/).',
            '**Viewing is on phones** — often with patchy data, so short films and clear sound help.',
        ] },
        { type: 'h2', text: 'Which kinds of films work for agri brands?' },
        { type: 'table', head: ['Film', 'What it shows', 'Where it is used'], rows: [
            ['Farmer testimonial', 'A real grower, in their field, describing their experience', 'WhatsApp, YouTube, dealer meetings'],
            ['Demonstration film', 'Treated and untreated plots side by side, over time', 'Field days, YouTube, sales teams'],
            ['How-to-use video', 'Dose, mixing, timing and safety, step by step', 'QR code on the pack, WhatsApp'],
            ['Brand film', 'The company, its research and its people', 'Events, website, dealer screens'],
            ['Short ad', 'One benefit, one product, one season', 'Regional TV, YouTube ads, social media'],
            ['Dealer and event videos', 'Launch meetings, awards, farmer gatherings', 'Internal and trade audiences'],
        ] },
        { type: 'p', text: 'Testimonials need care to stay believable; our guide to [customer testimonial videos](/blog/customer-testimonial-videos/) explains how to film real people well.' },
        { type: 'h2', text: 'How do you film in the field?' },
        { type: 'steps', items: [
            '**Plan with the crop calendar** — decide which growth stage must be on camera and book the shoot around it.',
            '**Choose fields and farmers early** — your field team knows who has a good story and a good crop.',
            '**Visit before the shoot** — check access, light, power and the nearest shade.',
            '**Film at the right hours** — early morning and late afternoon give soft light and comfortable people.',
            '**Capture proof** — close-ups of roots, leaves, grain and yield, with the farmer in the frame.',
            '**Record clean sound** — a clip-on microphone and a wind cover; fields are noisy.',
            '**Return if needed** — demonstration films often need two or three visits across the season.',
        ] },
        { type: 'p', text: 'Drone shots show a field’s size and uniformity well, but they must follow the rules; see [drone shoots in India](/blog/drone-shoot-rules-india/).' },
        { type: 'h2', text: 'What should the message be?' },
        { type: 'list', items: [
            '**One problem, one answer** — a specific pest, a specific stage, a specific result.',
            '**Show, then say** — the picture of the crop should make the point before the voice does.',
            '**Use the farmer’s words** — avoid laboratory language unless you explain it.',
            '**Explain how to use it** — dose and timing reduce misuse and complaints.',
            '**Name where to buy** — the dealer network, a helpline or a missed-call number.',
        ] },
        { type: 'h2', text: 'What must agri ads be careful about?' },
        { type: 'p', text: 'Crop protection products, fertilisers and seeds are regulated, and their labels state what they are approved for. Advertising should stay within those approved uses and should not promise results that depend on weather, soil and farming practice.' },
        { type: 'list', items: [
            '**Match the label** — crops, pests, doses and safety instructions as approved.',
            '**No guaranteed yields** — describe what was observed in a trial or by a farmer, and say so.',
            '**Show safe use** — protective gear when spraying, correct storage, children kept away.',
            '**Real results only** — do not stage a comparison plot or retouch a crop.',
            '**Consent** — a signed release from every farmer who appears.',
        ] },
        { type: 'p', text: 'This is general guidance, not legal advice; have your regulatory team review scripts and claims.' },
        { type: 'h2', text: 'Where should the films run?' },
        { type: 'p', text: 'Most agri brands get the widest reach from WhatsApp groups run by dealers and field staff, YouTube in the local language, regional television around farm programmes, and screens at dealer shops and farmer meetings. Our [media guide for Telangana and Andhra Pradesh](/blog/advertising-media-telangana-andhra/) compares the channels, and [video on WhatsApp Business](/blog/whatsapp-business-video-marketing/) covers sharing.' },
        { type: 'tip', text: 'Make a 30-second version of every film that is small enough to forward easily. A film that cannot be shared on WhatsApp will not travel from farmer to farmer.' },
    ],
    faqs: [
        { q: 'Should agri ads use actors or real farmers?', a: 'Real farmers are more convincing for testimonials and demonstrations. Actors can work for a scripted story, provided the setting, clothes and speech are true to the region.' },
        { q: 'Which language should the film be in?', a: 'The language the farmer speaks at home, in the local way of speaking. One film can be dubbed for other states; see [AI dubbing and localisation](/blog/ai-dubbing-telugu-hindi-tamil-ads/).' },
        { q: 'How long should a farmer testimonial be?', a: 'One to two minutes for the full story, with a shorter cut of about thirty seconds for WhatsApp and social media.' },
        { q: 'When should we start planning a seasonal campaign?', a: 'Well before the season, so the film is ready when farmers are deciding what to buy. Demonstration films are usually shot in one season and used in the next.' },
    ],
};

export default article;
