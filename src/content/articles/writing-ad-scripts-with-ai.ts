/** Text of "Writing Ad Scripts with ChatGPT and Other AI Tools: A Practical Method". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'AI writing tools such as ChatGPT, Gemini and Claude are useful partners for ad scripts when you give them a proper brief: the audience, the single message, the length, the tone and the language. Use them to produce many angles, first drafts, alternative lines and shorter cuts. Then a person must choose, rewrite in the brand’s real voice, read it aloud against a stopwatch, and check every fact and claim.',
    keyPoints: [
        'The quality of the script follows the quality of the brief you give.',
        'Ask for many options, then choose and rewrite.',
        'Always read aloud and time the script.',
        'Check every claim; AI tools can state things that are not true.',
    ],
    body: [
        { type: 'h2', text: 'What are AI tools good at in scriptwriting?' },
        { type: 'list', items: [
            '**Volume** — twenty opening lines or ten story angles in a minute.',
            '**Structure** — turning rough notes into a two-column script with visuals and audio.',
            '**Versions** — a 30-second script cut to 15 and 6 seconds.',
            '**Tone changes** — the same message as warm, funny or formal.',
            '**Checking** — spotting jargon, long sentences and a missing call to action.',
            '**Starting points for other languages** — a first draft to hand to a Telugu or Hindi writer.',
        ] },
        { type: 'h2', text: 'Where do they fall short?' },
        { type: 'list', items: [
            '**Sameness** — without direction, drafts sound like every other ad.',
            '**Facts** — invented statistics, awards or features can appear and sound confident.',
            '**Local flavour** — Telugu idiom, humour and dialect often come out stiff or translated.',
            '**Length** — scripts frequently run longer than the seconds available.',
            '**Knowing your customer** — the tool has not met them; you have.',
        ] },
        { type: 'h2', text: 'What should you tell the AI before asking for a script?' },
        { type: 'table', head: ['Tell it', 'Example'], rows: [
            ['Who the brand is', 'A family-run sweet shop in Hyderabad, forty years old'],
            ['Who the ad is for', 'Working parents ordering festival gifts'],
            ['The one message', 'Fresh sweets delivered the same day'],
            ['Proof', 'Made every morning; delivery across the city'],
            ['Length and format', '20-second vertical video with voice-over'],
            ['Tone', 'Warm, light, not salesy'],
            ['Language', 'Conversational Telugu with a few English words'],
            ['Must include / avoid', 'Phone number at the end; no price claims'],
        ] },
        { type: 'p', text: 'This is the same information a human writer needs; our guide to [writing an ad film brief](/blog/how-to-write-an-ad-film-brief/) has a fuller template.' },
        { type: 'h2', text: 'What is a good step-by-step method?' },
        { type: 'steps', items: [
            '**Write the brief yourself** — do not ask the tool to guess your audience.',
            '**Ask for angles, not scripts** — ten different ways into the message, one line each.',
            '**Pick two or three** and ask for a script outline of each.',
            '**Choose one and ask for the full script** in two columns: what we see, what we hear.',
            '**Ask for alternatives** to the weakest parts: the opening, the last line.',
            '**Rewrite in your own words** — replace anything that sounds generic.',
            '**Read aloud with a timer** — roughly two to two and a half words a second is a comfortable pace in English; other languages differ, so always time a real reading.',
            '**Check facts, claims and names** against your own records.',
            '**Have a native speaker polish** any regional-language version.',
        ] },
        { type: 'p', text: 'For script format and an example, see [how to write an ad film script](/blog/ad-film-script-writing/).' },
        { type: 'h2', text: 'Which prompts are useful?' },
        { type: 'list', items: [
            '“Here is my brief. Give me ten different angles for this ad, one sentence each, each starting from a different customer feeling.”',
            '“Write a 20-second script for angle 4 in two columns. Keep the voice-over under 45 words.”',
            '“Give me eight alternative opening lines that would stop someone scrolling.”',
            '“Cut this to 10 seconds without losing the main message.”',
            '“Read this as a sceptical customer. What would you not believe?”',
        ] },
        { type: 'h2', text: 'What must you check before using an AI-written script?' },
        { type: 'list', items: [
            '**Truth** — every number, award and feature is real and current.',
            '**Claims** — nothing that advertising rules would treat as misleading, especially for food, health, finance and education.',
            '**Originality** — it does not echo a famous tagline or another brand’s ad.',
            '**Confidentiality** — do not paste unreleased product details into a tool unless your company allows it.',
            '**Voice** — it sounds like your brand, not like a template.',
        ] },
        { type: 'p', text: 'The wider picture of where AI helps in filmmaking is in [AI ad films: what AI can and cannot do](/blog/ai-ad-films-what-ai-can-and-cannot-do/).' },
        { type: 'h2', text: 'When should you bring in a professional writer or studio?' },
        { type: 'p', text: 'When the film is going on television or cinema, when the idea matters more than the information, when it is in a regional language, or when claims are sensitive. A writer can still use AI to work faster; what you are paying for is judgement. Script development is part of our [ad films and commercials](/services/ad-films-and-commercials/) service.' },
        { type: 'tip', text: 'Paste your three best past ads or posts into the tool and ask it to describe your brand’s voice. Then include that description in every future prompt.' },
    ],
    faqs: [
        { q: 'Can ChatGPT write a Telugu ad script?', a: 'It can produce a draft, but the result often reads like a translation. Treat it as a starting point and have a Telugu writer rework the rhythm, idiom and dialect.' },
        { q: 'Who owns a script written with AI?', a: 'Copyright law around AI-generated text is still developing, and purely machine-written text may get weaker protection. Substantial human writing and editing strengthens your position. For important work, take legal advice.' },
        { q: 'How many words fit in a 30-second ad?', a: 'As a rough guide, about 65 to 75 words of English voice-over at a comfortable pace, fewer if there are pauses for pictures. Always time a real reading.' },
        { q: 'Will viewers know the script was written with AI?', a: 'Not if it has been properly rewritten. What gives it away is generic phrasing and a lack of specific, true detail about your business.' },
    ],
};

export default article;
