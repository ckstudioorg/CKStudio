/** Text of "Video Production Contracts: Usage Rights, Revisions and Ownership". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'A good production contract lists exactly what will be delivered (lengths, versions and formats), how many rounds of changes are included, when payments are due, and who owns what. Under India’s Copyright Act, a film made for payment at someone’s request belongs to that person unless the contract says otherwise — but music, stock footage and actors’ performances are licensed separately, for limited media and periods. Put all of it in writing before the shoot, not after.',
    keyPoints: [
        'List every deliverable: lengths, aspect ratios, languages, file formats.',
        'Define the rounds of changes at each stage, and what counts as new work.',
        'Write down who owns the film, the raw footage and each licence.',
        'Plan for delays, cancellations and reshoots before they happen.',
    ],
    body: [
        { type: 'p', text: 'This guide is general information to help you prepare, not legal advice. For large or unusual projects, have a lawyer review the agreement.' },
        { type: 'h2', text: 'What should the contract list as deliverables?' },
        { type: 'list', items: [
            '**Lengths and versions** — for example a 30-second film with 15- and 6-second cut-downs.',
            '**Aspect ratios** — 16:9 for TV and YouTube, 9:16 for reels and stories, 1:1 or 4:5 for feeds (see the [video sizes cheat sheet](/blog/video-ad-sizes-aspect-ratios-cheat-sheet/)).',
            '**Languages and subtitles** — which language versions, any dubbing, and caption files.',
            '**File formats** — a high-quality master, web files, a cinema DCP if needed.',
            '**Extras** — stills from the shoot, thumbnails, behind-the-scenes clips.',
            '**Dates** — first cut, final delivery, and the dates you must give feedback by.',
        ] },
        { type: 'h2', text: 'How many rounds of changes are normal?' },
        { type: 'p', text: 'There is no fixed rule, so the contract should say it. A common approach is a set number of rounds at each stage — script, first cut, final cut — with clear wording on what counts as a change (trim this shot, swap this music) and what is new work (a new script after the shoot, an extra version). Changes that need reshoots or new animation are almost always extra. Our guide on [giving feedback on a video edit](/blog/how-to-give-feedback-on-video-edits/) helps you use each round well.' },
        { type: 'h2', text: 'Who owns the film, the footage and the music?' },
        {
            type: 'table',
            head: ['Item', 'Common arrangement', 'What to agree'],
            rows: [
                ['The finished film', 'The client who commissioned and paid for it, unless the contract says otherwise (Copyright Act, 1957, section 17).', 'State ownership clearly, including all cut-downs and versions.'],
                ['Raw footage and project files', 'Often kept by the production company.', 'Whether you get a copy, how long it is archived, and any cost to retrieve it later.'],
                ['Music', 'Licensed — library music or a commissioned score — for certain media and a period.', 'Media, territory and duration, and who renews. See [music for ads](/blog/music-for-ads-licensing-india/).'],
                ['Actors and models', 'Usage licensed by media, territory and period.', 'End dates, renewals and exclusivity — see [casting for ads](/blog/casting-actors-and-models-for-ads/).'],
                ['Stock footage, images, fonts', 'Licensed under the supplier’s terms.', 'That the licence covers your use: paid ads, TV, cinema.'],
                ['Unused ideas and treatments', 'Stay with the people who created them.', 'Whether you are buying any of them.'],
            ],
        },
        { type: 'h2', text: 'What payment terms are common?' },
        { type: 'p', text: 'Most productions are paid in stages: an advance to book the team and start pre-production, a payment around the shoot (when most costs are spent on crew, equipment and locations), and the balance on delivery. Taxes such as GST are usually shown separately. Whatever you agree, link each payment to a clear milestone so both sides know when it is due.' },
        { type: 'h2', text: 'What if the shoot is delayed or cancelled?' },
        { type: 'list', items: [
            '**Weather and location problems** — a backup date or indoor plan, and who pays for an extra day.',
            '**Cancellation by the client** — charges that rise as the shoot date gets closer, because crew and equipment are booked.',
            '**Illness of key cast** — how replacement or rescheduling works.',
            '**Reshoots** — free if the production made an error; charged if the brief or script changed.',
        ] },
        { type: 'h2', text: 'Which other clauses are worth including?' },
        { type: 'list', items: [
            '**Claims and compliance** — the client confirms product claims are true and provable; the production follows the approved script.',
            '**AI use** — whether AI tools may be used, and how AI-generated content will be disclosed (see [AI in ads: rules and labelling](/blog/ai-in-ads-india-rules-labelling-consent/)).',
            '**Confidentiality** — especially before a launch.',
            '**Portfolio use** — when the studio may show the work publicly, usually after it is released.',
            '**Credits** — where the production company’s name appears, if anywhere.',
            '**Disputes** — how disagreements are resolved, and in which city.',
        ] },
        { type: 'tip', text: 'Keep a one-page usage sheet for every film: each licence (music, actors, stock), its media and its end date. It prevents the most common and expensive mistake — running an ad after its rights have expired.' },
    ],
    faqs: [
        { q: 'Do we own the raw footage?', a: 'Not automatically in practice — many production companies keep raw footage and project files. If you want them, say so in the contract, along with the format and any cost.' },
        { q: 'Can the production company show our ad in its portfolio?', a: 'Usually yes, once the ad is public, but it should be agreed in the contract. If the project is confidential, add a clause saying so.' },
        { q: 'What happens when an actor’s usage period ends?', a: 'You need to stop using the ad in the media covered, or renew the usage with the actor or their agency. Music licences work the same way.' },
        { q: 'Is approval over WhatsApp or email enough?', a: 'Written approvals are useful records of decisions during a project, but they are no substitute for a signed agreement covering deliverables, payments and rights before work begins.' },
    ],
    sources: [
        { label: 'Copyright Office, Government of India — Copyright Act and registration', url: 'https://copyright.gov.in/' },
        { label: 'ASCI — Advertising Standards Council of India', url: 'https://www.ascionline.in/' },
    ],
};

export default article;
