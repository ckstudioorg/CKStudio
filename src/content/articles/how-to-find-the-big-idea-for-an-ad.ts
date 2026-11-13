/** Text of "How to Find the Big Idea for an Ad: From Insight to Concept". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'A big idea is one simple thought that connects what your customer cares about with what your brand offers, in a way people remember. You find it by starting with a real customer insight, writing a one-line proposition, producing many rough ideas, and then testing each one: can it be told in one sentence, does it belong only to your brand, and can it work in six seconds as well as sixty?',
    keyPoints: [
        'An idea is not a slogan or a visual style; it is the thought behind both.',
        'Start from a customer truth, not from the product’s feature list.',
        'Write many rough ideas before judging any of them.',
        'A strong idea survives being cut down to one line and one image.',
    ],
    body: [
        { type: 'h2', text: 'What is a “big idea” in advertising?' },
        { type: 'p', text: 'The big idea is the central thought of a campaign. The script, the casting, the music and the look all serve it. If you can remove the idea and the ad still makes sense as a list of product features, there was no idea to begin with. A tagline is how the idea is said; a film is how it is shown. The idea itself sits underneath both.' },
        { type: 'table', head: ['Term', 'What it is', 'Example of the difference'], rows: [
            ['Insight', 'A truth about the customer', 'Parents feel guilty when they have no time to cook'],
            ['Proposition', 'What the brand promises', 'A home-style meal in ten minutes'],
            ['Big idea', 'The memorable thought that joins the two', 'The ten-minute meal that tastes like you spent the afternoon on it'],
            ['Execution', 'How the idea is shown', 'A grandmother who cannot tell the difference'],
        ] },
        { type: 'h2', text: 'Where do good ad ideas come from?' },
        { type: 'list', items: [
            '**Customer conversations** — what people say when they explain why they bought, or why they nearly did not.',
            '**Reviews and complaints** — the exact words customers use are often better than anything written in a meeting.',
            '**The moment of use** — where, when and with whom the product is used.',
            '**The category’s habits** — if every competitor shows the same thing, the opposite may be your idea.',
            '**A product truth** — how it is made, where it comes from, what the founder refused to compromise on.',
            '**Culture and language** — festivals, family habits and local phrases; see [making ads for Telugu audiences](/blog/telugu-ads-for-telugu-audiences/).',
        ] },
        { type: 'h2', text: 'How do you get from a brief to an idea?' },
        { type: 'steps', items: [
            '**Write the brief** — the audience, the single message and the action you want. Our guide to [writing an ad film brief](/blog/how-to-write-an-ad-film-brief/) has a template.',
            '**Find the insight** — one sentence about the customer that makes people nod.',
            '**Write the proposition** — one promise, in plain words.',
            '**Go wide** — write twenty or thirty rough ideas quickly. Do not judge yet.',
            '**Group and choose** — pick the three that feel freshest and truest.',
            '**Write each as one line and one key image** — if you cannot, the idea is not clear yet.',
            '**Test and choose** — use the questions in the next section.',
            '**Develop** — turn the chosen idea into a [script](/blog/ad-film-script-writing/) and a [storyboard](/blog/how-to-make-a-storyboard/).',
        ] },
        { type: 'h2', text: 'How do you test whether an idea is strong?' },
        { type: 'list', items: [
            '**One sentence** — can you tell it to a friend in a single breath?',
            '**Ownable** — if you swap in a competitor’s logo, does it still work? If yes, it is not yours yet.',
            '**True** — does the product really deliver what the idea promises?',
            '**Stretchy** — does it work as a film, a reel, a hoarding and a festival post?',
            '**Short-proof** — does it survive as a six-second cut with the sound off?',
            '**Feels something** — a smile, a lump in the throat or a small surprise. Ads people feel are the ones they remember.',
        ] },
        { type: 'h2', text: 'Which mistakes kill good ideas?' },
        { type: 'list', items: [
            '**Too many messages** — an ad that says five things is remembered for none of them.',
            '**Starting with the technique** — “let’s do a drone shot” or “let’s use AI” is a tool, not an idea.',
            '**Borrowed interest** — a joke or a celebrity that has nothing to do with the product.',
            '**Designing by committee** — every added opinion sands away what made the idea sharp.',
            '**Copying a famous ad** — viewers remember the original, not you.',
        ] },
        { type: 'h2', text: 'How does a production company help with the idea?' },
        { type: 'p', text: 'Some clients arrive with a finished script; many arrive with a goal and a product. A studio that offers creative development will work through the steps above with you and present two or three routes, each with a line, a key image and a short description. From there, the chosen route becomes a [director’s treatment](/blog/directors-treatment-explained/) that shows how the film will look and feel. This is part of what we do for [ad films and commercials](/services/ad-films-and-commercials/).' },
        { type: 'tip', text: 'Keep the rejected ideas. A route that was wrong for the launch film is often right for a festival post or a follow-up reel.' },
    ],
    faqs: [
        { q: 'Is a tagline the same as a big idea?', a: 'No. A tagline is a few words that express the idea. The idea is the thought behind it, and it should also be visible in the story, the pictures and the tone, even with the tagline removed.' },
        { q: 'Do small businesses need a big idea?', a: 'Yes, perhaps more than large ones. With a small budget you cannot rely on repetition, so the ad has to be remembered after one or two views. A clear, simple idea is what makes that possible.' },
        { q: 'How many ideas should an agency or studio present?', a: 'Two or three clearly different routes is usual. More than that often means the thinking has not been narrowed down; only one leaves you nothing to compare.' },
        { q: 'Can AI tools come up with the idea?', a: 'They are useful for producing many rough starting points and for exploring angles quickly. Choosing the one that is true to your customer and your brand still needs people who know both. See [writing ad scripts with AI](/blog/writing-ad-scripts-with-ai/).' },
    ],
};

export default article;
