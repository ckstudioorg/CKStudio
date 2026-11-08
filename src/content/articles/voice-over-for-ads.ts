/** Text of "Voice-Over for Ads: Choosing and Recording the Right Voice". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'Choose a voice the way you would cast an actor: by the feeling your brand needs (warm, energetic, authoritative, playful), the language and accent your audience trusts, and how well the artist takes direction. Brief with the final script, reference tone and exact timing, record in a treated studio or a good remote setup with a director listening, and agree in writing where and for how long the recording will be used. Use an AI voice only with clear rights and consent, and never copy a real person’s voice without permission.',
    keyPoints: [
        'Cast for feeling, language and credibility — not just a “good voice”.',
        'Give the artist the exact timing for each version.',
        'Someone from the production should direct every session.',
        'Agree usage — media, territory and period — in writing.',
    ],
    body: [
        { type: 'h2', text: 'What does a voice-over do in an ad?' },
        { type: 'p', text: 'In a short ad the voice-over often carries the brand’s personality. It explains what the picture cannot, sets the pace of the edit and delivers the call to action. The same script can feel premium, friendly or urgent depending on the voice, so casting matters as much as the words.' },
        { type: 'h2', text: 'How do you choose the right voice?' },
        { type: 'list', items: [
            '**Tone:** list three words for how the brand should sound — for example “warm, confident, local”.',
            '**Language and accent:** a voice that sounds natural to your audience. Telugu spoken in Hyderabad, coastal Andhra and Rayalaseema differs, as does Hindi across regions; choose deliberately.',
            '**Credibility:** a hospital, a jewellery brand and a snack brand need very different voices.',
            '**Consistency:** if the brand will run many ads, choose a voice you can book again.',
            '**Range:** can the artist give you three different reads when asked?',
        ] },
        { type: 'h2', text: 'How do you brief a voice artist?' },
        { type: 'list', items: [
            'The final script, with pronunciations for brand names, product names and place names.',
            'Two or three reference ads or tone words.',
            'The exact length of each version (for example 30, 20 and 10 seconds) and whether the voice must fit a finished edit.',
            'Who the speaker is meant to be: a narrator, a customer, an expert, a friend.',
            'Everything you need recorded, including alternate offers, dates or store names.',
        ] },
        { type: 'h2', text: 'Studio, remote or AI voice?' },
        {
            type: 'table',
            head: ['Option', 'Best for', 'Watch out for'],
            rows: [
                ['Studio session', 'TV, cinema and premium ads; strict timing to picture', 'Booking the artist and studio together'],
                ['Remote session', 'Artists in other cities with a good home studio, directed live over a call', 'Room echo and background noise — test first'],
                ['AI voice', 'Scratch tracks, animatics, internal videos, quick drafts', 'Rights, consent and natural delivery in Indian languages'],
            ],
        },
        { type: 'h2', text: 'How is a voice-over session run?' },
        { type: 'steps', items: [
            'A first read to hear the artist’s instinct.',
            'Direction: faster, warmer, more smile, more authority — one note at a time.',
            'Line-by-line takes for difficult lines and the brand name.',
            'Timing to picture, if the edit is ready.',
            'Alternates: different offers, tags and call-to-action lines.',
            'Delivery of clean files — uncompressed WAV, usually 48 kHz and 24-bit for video — labelled by take.',
        ] },
        { type: 'h2', text: 'What usage rights should you agree?' },
        { type: 'p', text: 'A voice recording is usually licensed for specific uses. Agree in writing which media it will run on (TV, digital, cinema, radio, in-store), in which territory, for how long, and how many versions, and what happens if you want to renew. Clear terms upfront avoid disputes when a campaign runs longer than planned.' },
        { type: 'h2', text: 'Can you use AI voices in ads?' },
        { type: 'p', text: 'AI voices are excellent for scratch tracks and animatics, so the editor can cut to a rhythm before the real session. For a final ad, use only voices you have the right to use commercially, and never clone a real person’s voice without their permission. Read our guide to [using AI in ads in India](/blog/ai-in-ads-india-rules-labelling-consent/) and, for multi-language campaigns, [AI dubbing for Telugu, Hindi and Tamil ads](/blog/ai-dubbing-telugu-hindi-tamil-ads/).' },
        { type: 'tip', text: 'Record a scratch voice-over early — even on a phone — so the editor cuts to the right rhythm. The final voice then fits the edit instead of being squeezed into it.' },
        { type: 'p', text: 'CK Studio casts and records voice-overs in Telugu, Hindi and English for ads and films — see our [ad films and commercials](/services/ad-films-and-commercials/) service, and how the voice sits in the final [sound mix](/blog/sound-design-and-mixing/).' },
    ],
    faqs: [
        { q: 'How long does a voice-over recording take?', a: 'For a short ad with a few versions, a focused session often takes an hour or two. Longer films, many languages or many alternates take more time.' },
        { q: 'Should my ad’s voice-over be in Telugu, Hindi or English?', a: 'Choose the language your audience is most comfortable in. Many Hyderabad campaigns run separate Telugu, Hindi and English versions, each written as an original.' },
        { q: 'What file format should a voice-over be delivered in?', a: 'Uncompressed WAV files, usually 48 kHz and 24-bit for video, clearly labelled by version and take.' },
        { q: 'Can one artist voice every language version?', a: 'Only if they speak each language at native level. Native speakers usually sound more natural and credible to each audience.' },
    ],
};

export default article;
