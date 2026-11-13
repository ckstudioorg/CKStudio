/** Text of "Testing Ad Variations Made with AI: Hooks, Formats and What to Measure". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'Creative testing means running several versions of an ad to learn which one works best, instead of guessing. AI makes this affordable: from one finished film you can produce different opening hooks, headlines, voice-overs, languages and sizes quickly. Test one kind of change at a time, give each version enough views to judge fairly, measure against the goal that matters to you, and then put the budget behind the winner.',
    keyPoints: [
        'The first three seconds are the most valuable thing to test.',
        'Change one element at a time so you know what made the difference.',
        'Judge on the business goal, not only on views.',
        'Keep AI-made versions accurate and on-brand.',
    ],
    body: [
        { type: 'h2', text: 'Why test different versions at all?' },
        { type: 'p', text: 'People inside a company are poor judges of their own ads; they know too much. A small test with real viewers shows which opening holds attention and which message leads to enquiries. On platforms such as Meta and YouTube, the creative itself is one of the biggest factors in what an ad costs to run, so finding a stronger version makes the same budget go further.' },
        { type: 'h2', text: 'What can you vary?' },
        { type: 'table', head: ['Element', 'Examples of versions', 'How AI helps'], rows: [
            ['Opening hook', 'A question, a bold claim, the product in use, a customer’s face', 'Re-editing, generating alternative first shots or lines'],
            ['Headline and text on screen', 'Benefit-led, offer-led, curiosity-led', 'Drafting many options'],
            ['Voice-over', 'Male or female voice, different tone, different language', 'Synthetic voices for quick drafts; dubbing'],
            ['Length', '6, 15 and 30 seconds', 'Automatic cut-down suggestions'],
            ['Shape', 'Vertical, square, horizontal', 'Smart reframing'],
            ['Call to action', 'WhatsApp us, book now, visit the store', 'Text and end-card variants'],
            ['Background or setting', 'The same product in different scenes', 'AI-generated backgrounds for product shots'],
        ] },
        { type: 'p', text: 'For the sizes each platform needs, see the [video ad sizes cheat sheet](/blog/video-ad-sizes-aspect-ratios-cheat-sheet/).' },
        { type: 'h2', text: 'How do you run a simple test?' },
        { type: 'steps', items: [
            '**Choose the goal** — video views, website visits, WhatsApp messages or sales.',
            '**Choose one element to test** — usually the hook.',
            '**Make three or four versions** that differ only in that element.',
            '**Run them to the same audience** with the same budget, at the same time.',
            '**Wait for enough results** — a few hundred views tells you little; give each version a fair run before deciding.',
            '**Compare on your goal**, then pause the weaker versions.',
            '**Test the next element** using the winner as the new starting point.',
        ] },
        { type: 'p', text: 'Most ad platforms have a built-in experiment feature that splits the audience fairly; use it where available instead of comparing ads that ran at different times.' },
        { type: 'h2', text: 'What should you measure?' },
        { type: 'list', items: [
            '**Hook rate** — the share of people who watch past the first few seconds.',
            '**Hold** — how many reach the halfway point and the end.',
            '**Click or message rate** — the share who take the next step.',
            '**Cost per result** — what each enquiry or sale cost.',
            '**Quality of leads** — whether the enquiries were serious; ask your sales team.',
        ] },
        { type: 'p', text: 'Our guide to [video ad metrics](/blog/video-ad-metrics/) explains each number and what a change in it means.' },
        { type: 'h2', text: 'How do you plan the shoot so variations are easy?' },
        { type: 'list', items: [
            '**Film several openings** — each takes minutes on set and gives you a real test later.',
            '**Record alternative lines** for the voice-over and the end.',
            '**Frame for every shape** — keep the action central so vertical and square crops work.',
            '**Capture clean product shots** on a plain background for later use.',
            '**Ask for layered project files** so text and end cards can be changed.',
        ] },
        { type: 'p', text: 'This is the same thinking as [one shoot day, a month of content](/blog/one-shoot-a-month-of-content/).' },
        { type: 'h2', text: 'What are the risks with AI-made versions?' },
        { type: 'list', items: [
            '**Inaccuracy** — a generated scene that changes the product’s colour, size or label.',
            '**Off-brand results** — fonts, colours and tone drifting from your [brand guidelines](/blog/brand-guidelines-document/).',
            '**Unapproved claims** — a new headline that promises more than the original script.',
            '**Likeness and voice** — do not create new lines for a real person without consent.',
            '**Disclosure** — some platforms ask advertisers to label realistic synthetic content; see [AI in ads: rules and labelling](/blog/ai-in-ads-india-rules-labelling-consent/).',
        ] },
        { type: 'p', text: 'Keep a simple rule: every version is reviewed by a person before it runs.' },
        { type: 'tip', text: 'Keep a one-page record of every test: what changed, what won and by how much. After a few months it becomes your brand’s own guide to what works.' },
    ],
    faqs: [
        { q: 'How many versions should a small business test?', a: 'Three or four at a time is enough. More versions split a small budget too thinly for any of them to give a clear answer.' },
        { q: 'How long should a test run?', a: 'Long enough for each version to reach a meaningful number of people and for results to settle, often a week or so for a local business. Avoid judging on the first day.' },
        { q: 'Does the winning ad keep winning?', a: 'Not forever. Audiences tire of seeing the same ad, so results fade. Keep one new version in testing while the current winner runs.' },
        { q: 'Can AI make the variations without a shoot?', a: 'For simple product ads and text-led formats, sometimes. For films with people and performance, variations are better cut from real footage, with AI helping on text, voice drafts, sizes and backgrounds.' },
    ],
};

export default article;
