/** Text of "AI Dubbing and Localisation: One Ad in Telugu, Hindi, Tamil and English". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'AI dubbing tools can translate, voice and even lip-sync an ad into Telugu, Hindi, Tamil, Kannada, Malayalam and other languages in a fraction of the time of traditional dubbing. Good localisation still needs native-language copywriting rather than literal translation, on-screen text redone for each language, written consent for any cloned voice or face, and a native speaker’s review before release.',
    keyPoints: [
        'Adapt the script — do not just translate it.',
        'Redo supers, captions and legal lines in each language.',
        'Get written consent before cloning any voice or likeness.',
        'Have a native speaker review every final version.',
    ],
    body: [
        { type: 'h2', text: 'Why localise ads for Indian languages?' },
        { type: 'p', text: 'India is multilingual, and people respond to ads in their own language. A Telugu ad feels local in Hyderabad in a way a Hindi or English version cannot, and the same is true in every state. Localising one strong film into several languages costs far less than making separate films.' },
        { type: 'h2', text: 'What can AI dubbing do?' },
        { type: 'list', items: [
            '**Translation drafts** of the script in many languages.',
            '**Synthetic voice-over** in a chosen voice style, or a licensed cloned voice.',
            '**Lip-sync** that adjusts mouth movements to the new language for on-camera speakers.',
            '**Subtitles and captions**, generated and timed automatically.',
        ] },
        { type: 'h2', text: 'What should still be done by people?' },
        {
            type: 'table',
            head: ['Task', 'Why people matter'],
            rows: [
                ['Script adaptation', 'Jokes, idioms and emotion rarely translate word for word; a copywriter who thinks in the language makes it land.'],
                ['Voice casting and direction', 'Tone, age and accent should fit the brand and the region.'],
                ['On-screen text and supers', 'Prices, offers, disclaimers and taglines must be rewritten and re-animated in each script.'],
                ['Cultural check', 'Gestures, colours, festivals and references can mean different things in different regions.'],
                ['Final review', 'A native speaker should watch every version before it goes live.'],
            ],
        },
        { type: 'h2', text: 'How do you plan an ad for many languages from the start?' },
        { type: 'steps', items: [
            'Write a script with one clear message that works across cultures.',
            'Keep on-screen text as separate graphics layers, never baked into the footage.',
            'Leave breathing room in the edit — some languages need more time to say the same thing.',
            'Record a clean voice-over and keep music and effects on separate tracks.',
            'Plan close-up dialogue carefully, or use voice-over so lip-sync is not needed.',
            'Deliver each language with its own subtitle file and supers.',
        ] },
        { type: 'h2', text: 'What about consent and rights?' },
        { type: 'p', text: 'Never clone a person’s voice or face without their written permission, and agree where, for how long and in which languages it may be used. Indian courts have protected the personality rights of well-known people against unauthorised use of their name, image and voice. Realistic synthetic content may also need labelling under India’s 2026 IT Rules and platform policies — see [using AI in ads in India](/blog/ai-in-ads-india-rules-labelling-consent/).' },
        { type: 'h2', text: 'Which kinds of ads are easiest to localise?' },
        {
            type: 'table',
            head: ['Type of ad', 'Ease', 'Why'],
            rows: [
                ['Voice-over over visuals', 'Easy', 'Only the voice, supers and captions change'],
                ['Animation and motion graphics', 'Easy', 'Text and voice are separate layers'],
                ['Presenter speaking to camera', 'Medium', 'Needs lip-sync or a re-shoot of key lines'],
                ['Dialogue between actors', 'Harder', 'Every line needs dubbing and natural lip-sync'],
                ['Jingles and songs', 'Hardest', 'Lyrics must be rewritten to rhyme and fit the tune, then re-sung'],
            ],
        },
        { type: 'h2', text: 'What should a localisation quality check include?' },
        { type: 'list', items: [
            'Meaning: the message lands the same way as in the original',
            'Voice: pronunciation of the brand name, product names and place names',
            'Sync: lip movement and timing on every on-camera line',
            'Text: supers, prices, offers and legal lines translated and correctly placed',
            'Subtitles: spelling, timing and line length',
            'Mix: the new voice sits correctly against music and effects',
        ] },
        { type: 'tip', text: 'Ask your original voice artist to record the lines in every language they speak fluently. Real multilingual voices often beat synthetic ones for the hero version, and AI can cover the rest.' },
        { type: 'p', text: 'CK Studio delivers ads and [lyrical videos](/blog/lyrical-videos-turning-a-song-into-a-campaign/) in Telugu, Hindi, English and other languages, from script adaptation to the final mix. Talk to us through our [enquiry form](/#enquiry).' },
    ],
    faqs: [
        { q: 'Is AI dubbing good enough for TV ads?', a: 'For voice-over-led ads, often yes, after human direction and review. For close-up dialogue, lip-sync quality varies, so many brands use real voice artists for the hero language and AI for additional versions.' },
        { q: 'Which Indian languages can AI dub into?', a: 'Most major Indian languages — including Telugu, Hindi, Tamil, Kannada, Malayalam, Marathi and Bengali — are supported by leading tools, though quality varies by language and voice.' },
        { q: 'Can I clone a celebrity’s voice for my ad?', a: 'Only with their written consent and a licence covering the use. Unauthorised use of a well-known person’s voice or likeness can violate their personality rights and mislead viewers about an endorsement.' },
        { q: 'How much time does AI localisation save?', a: 'Translation drafts, voices and subtitles can be produced in days instead of weeks, but allow time for script adaptation, re-animated supers and native-speaker review.' },
    ],
    sources: [
        { label: 'DSCI — summary of the IT (Intermediary Guidelines and Digital Media Ethics Code) Amendment Rules, 2026', url: 'https://www.dsci.in/resource/content/it-amendment-rules-2026' },
    ],
};

export default article;
