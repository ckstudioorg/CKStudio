/** Text of "Making Ads for Telugu Audiences: Language, Culture and Casting". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'Ads connect with Telugu audiences when they are written in Telugu from the start, not translated from Hindi or English. Choose the dialect and tone your customers actually speak, use settings, music and humour they recognise, cast faces they see as their own, and time campaigns around festivals like Sankranti, Ugadi, Bathukamma and Dussehra. If you also need Hindi or English versions, plan them at the script stage.',
    keyPoints: [
        'Write in Telugu first; translate only where it fits.',
        'Match the dialect and tone to your audience — city, district and age.',
        'Local settings, food, festivals and music make an ad feel at home.',
        'Plan other language versions during scripting and casting, not after the shoot.',
    ],
    body: [
        { type: 'h2', text: 'Why not just dub the national ad?' },
        { type: 'p', text: 'Dubbing works for simple product demonstrations, and [AI dubbing](/blog/ai-dubbing-telugu-hindi-tamil-ads/) has made it faster. But ads that rely on emotion, humour or wordplay often fall flat in translation: the joke doesn’t land, the lip movement doesn’t match, and the setting — a Delhi wedding, a Mumbai local train — doesn’t feel like home. Viewers notice. An ad conceived in Telugu, with Telugu performers, speaks to them directly.' },
        { type: 'h2', text: 'Which Telugu should your ad speak?' },
        { type: 'p', text: 'Telugu sounds different across the two states and between city and village. Telangana and coastal Andhra Pradesh have their own expressions and rhythm, Rayalaseema has its own again, and Hyderabad mixes Telugu with Hindi, Urdu and English in everyday speech. The right choice depends on who you are talking to:' },
        {
            type: 'table',
            head: ['Audience', 'Language approach that usually feels natural'],
            rows: [
                ['Young, urban Hyderabad', 'Conversational Telugu with English words, the way people actually speak'],
                ['Both states, broad reach', 'Clear, neutral Telugu that everyone understands'],
                ['Telangana towns and districts', 'Telangana expressions and references'],
                ['Coastal Andhra or Rayalaseema', 'The local idiom of that region'],
                ['Hyderabad’s Dakhni-speaking neighbourhoods', 'Hyderabadi Hindi (Dakhni), or both languages'],
            ],
        },
        { type: 'p', text: 'Use dialect with respect. Regional speech should make characters real, not be the joke.' },
        { type: 'h2', text: 'What cultural cues make a Telugu ad feel local?' },
        { type: 'list', items: [
            '**Festivals** — Sankranti kites and muggulu, Ugadi pachadi, Bathukamma flowers, Bonalu in Hyderabad, Dussehra and Diwali shopping. Plan with our [festival marketing calendar](/blog/festival-marketing-calendar-telangana-andhra/).',
            '**Food** — biryani, pesarattu, pulihora, gongura pickle, chai at the corner hotel.',
            '**Places** — a Hyderabad metro platform, an old-city lane, a village rachabanda, a coastal market.',
            '**Family life** — how people greet elders, joint-family homes, weddings and functions.',
            '**Cinema culture** — Telugu audiences love films, and a well-written punch line lands. Using an actual film dialogue, song or star’s likeness needs permission, though.',
        ] },
        { type: 'h2', text: 'How should you cast and choose music?' },
        { type: 'p', text: 'Cast performers who speak the language natively and whose look matches your audience — see [casting actors and models for ads](/blog/casting-actors-and-models-for-ads/). For music, a commissioned track with Telugu folk textures or an original score usually beats a borrowed film song, which needs a licence from its owners. Our guide to [music for ads](/blog/music-for-ads-licensing-india/) explains the rights.' },
        { type: 'h2', text: 'When should you plan Hindi or English versions?' },
        { type: 'steps', items: [
            'Decide the languages before the script is final.',
            'Write the master script in Telugu, then adapt it — not translate it word for word — for each language.',
            'Cast actors who can perform in every language you need, or plan dubbing with lines that suit lip movement.',
            'On set, shoot a take in each language for dialogue scenes.',
            'Finish separate end cards, supers and subtitles for every version (see [subtitles and captions](/blog/subtitles-and-captions-guide/)).',
        ] },
        { type: 'tip', text: 'Before the shoot, read the script aloud with someone from your target district. If a line makes them smile or wince, you’ll know.' },
        { type: 'p', text: 'Where you run the ad matters too: Telugu TV, YouTube, Instagram, cinema and outdoor each reach different people — see [where to advertise in Telangana and Andhra Pradesh](/blog/advertising-media-telangana-andhra/).' },
        { type: 'p', text: 'Related guides: [ad films for agri brands](/blog/agri-brand-ad-films-reaching-farmers/).' },
    ],
    faqs: [
        { q: 'Should our Hyderabad ad be in Telugu or Hindi?', a: 'It depends on who your customers are. Many Hyderabad brands make a Telugu version for the wider state audience and a Hindi version for parts of the city, planned together so both feel natural.' },
        { q: 'Is it fine to mix English into Telugu dialogue?', a: 'Yes, if your audience talks that way. Young urban viewers often mix English naturally; for older or rural audiences, clear Telugu usually works better.' },
        { q: 'Can we use a famous film dialogue or song in our ad?', a: 'Only with permission from the rights owners — the producer, the music label or the people involved. Unlicensed use can get the ad taken down. An original line or track written in the same spirit is safer.' },
        { q: 'Do Telugu ads need subtitles?', a: 'Subtitles help on social media, where many people watch with the sound off, and they let viewers who don’t speak Telugu follow along. They aren’t usually needed for TV.' },
    ],
};

export default article;
