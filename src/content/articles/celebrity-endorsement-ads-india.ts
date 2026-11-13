/** Text of "Celebrity Ads in India: Contracts, Rules and Shoot Days". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'A celebrity ad needs three things beyond a normal ad film: a clear contract (what the celebrity will do, where and for how long the ad can run, and what they cannot endorse meanwhile), compliance with India’s endorsement rules (the celebrity must have checked the claims they make, and any paid connection must be disclosed), and a shoot planned around very limited time. A star brings attention; the idea still has to connect them to the product.',
    keyPoints: [
        'The contract defines deliverables, media, territory, period and exclusivity.',
        'Endorsers in India are expected to do due diligence on the claims they make.',
        'Celebrity time is short: rehearse everything with a stand-in first.',
        'A famous face cannot rescue an ad with no idea.',
    ],
    body: [
        { type: 'h2', text: 'When is a celebrity worth it?' },
        { type: 'list', items: [
            '**A new brand needs instant recognition** in a crowded category.',
            '**Trust matters** — a face people already believe in.',
            '**A regional launch** — a Telugu star for Telangana and Andhra Pradesh may do more than a national face.',
            '**The fit is natural** — the celebrity’s image matches what the product stands for.',
        ] },
        { type: 'p', text: 'It is less useful when the product needs explanation, when the budget for showing the ad is small, or when the star already endorses many brands. Creators with smaller, loyal audiences are an alternative; see [influencer marketing in India](/blog/influencer-marketing-india-guide/).' },
        { type: 'h2', text: 'What should the endorsement contract cover?' },
        { type: 'table', head: ['Clause', 'What to agree'], rows: [
            ['Deliverables', 'Number of films, photographs, voice recordings and social posts'],
            ['Shoot time', 'Days and hours on set, including make-up and travel'],
            ['Media', 'TV, digital, cinema, print, outdoor, packaging, in-store'],
            ['Territory', 'A state, India or worldwide'],
            ['Period', 'Start and end dates, and what happens to old material afterwards'],
            ['Exclusivity', 'Which competing categories the celebrity will not endorse'],
            ['Approvals', 'What the celebrity may approve (script, final look) and how quickly'],
            ['Extra appearances', 'Events, store launches, press days'],
            ['Conduct and exit', 'What happens if either side damages the other’s reputation'],
            ['AI and digital likeness', 'Whether voice or face may be recreated or altered, and how'],
        ] },
        { type: 'p', text: 'The production contract with the studio sits alongside this; see [video production contracts](/blog/video-production-contract-checklist/). This guide is general information, not legal advice.' },
        { type: 'h2', text: 'What do India’s endorsement rules require?' },
        { type: 'p', text: 'The Central Consumer Protection Authority’s Guidelines for Prevention of Misleading Advertisements and Endorsements for Misleading Advertisements, 2022, made under the Consumer Protection Act, 2019, apply to celebrity ads. In plain terms:' },
        { type: 'list', items: [
            '**Honest opinion** — an endorsement should reflect the endorser’s real view, based on adequate information about or experience with the product.',
            '**Due diligence** — endorsers are expected to check that the claims they make can be supported.',
            '**Disclosure** — a material connection between the endorser and the brand must be disclosed when the audience would not expect it; this matters most on social media.',
            '**Penalties** — the Consumer Protection Act allows the authority to penalise an endorser of a misleading advertisement and to bar them from endorsing for a period.',
            '**Self-regulation** — the ASCI code also has guidelines for celebrities in advertising.',
        ] },
        { type: 'p', text: 'So expect the celebrity’s team to ask for evidence behind your claims. Have it ready before the script is sent.' },
        { type: 'h2', text: 'How do you plan the shoot day?' },
        { type: 'steps', items: [
            '**Lock the script and storyboard early** and get the celebrity’s approval in writing.',
            '**Pre-light and rehearse with a stand-in** of similar height and colouring.',
            '**Film everything that does not need the star** before they arrive.',
            '**Shoot the most important shots first** — the line to camera and the product moment.',
            '**Record voice and photographs on the same day** if the contract includes them.',
            '**Keep the set small and calm** — fewer visitors, one person giving direction.',
            '**Capture extras** — a short greeting for dealers, festival wishes, social cut-downs, if agreed.',
        ] },
        { type: 'p', text: 'For how a normal day runs, see [what happens on an ad shoot day](/blog/what-happens-on-a-shoot-day/).' },
        { type: 'h2', text: 'What about AI and a celebrity’s likeness?' },
        { type: 'p', text: 'Using AI to recreate a star’s face or voice, or to make them speak another language, needs their clear written consent for that specific use. Indian courts have protected well-known people against unauthorised use of their name, image and voice. Our guide to [AI in ads: labelling, consent and copyright](/blog/ai-in-ads-india-rules-labelling-consent/) covers this in more detail.' },
        { type: 'h2', text: 'How do you make the ad about the brand, not the star?' },
        { type: 'list', items: [
            '**Start with the idea** — see [how to find the big idea](/blog/how-to-find-the-big-idea-for-an-ad/).',
            '**Give the product a role in the story**, not just a final pack shot.',
            '**Use the star’s real character** — a line they would believably say.',
            '**Put the brand early** — viewers who skip should still know whose ad it was.',
        ] },
        { type: 'tip', text: 'Agree the list of extra short pieces before the shoot and put it in the contract. Asking on the day is awkward and often refused.' },
    ],
    faqs: [
        { q: 'Can a celebrity be held responsible for a misleading ad?', a: 'Yes. Under the Consumer Protection Act, 2019 and the 2022 endorsement guidelines, endorsers are expected to do due diligence, and the authority can penalise an endorser of a misleading advertisement.' },
        { q: 'How long can we use the ad after the contract ends?', a: 'Normally you cannot. The contract sets a usage period; after it, the films and images must be withdrawn unless you renew. Agree a short sell-off period for printed material and stock.' },
        { q: 'Do celebrity social media posts need a disclosure?', a: 'Paid or sponsored posts should be clearly labelled as advertising, in line with the endorsement guidelines and the platforms’ own rules.' },
        { q: 'Can we use a film star’s old movie clip in our ad?', a: 'Not without permission from the film’s rights holder and usually the actor as well. A clip is protected by copyright and the person by personality rights.' },
    ],
    sources: [
        { label: 'Central Consumer Protection Authority (Department of Consumer Affairs)', url: 'https://doca.gov.in/ccpa/' },
        { label: 'ASCI — Advertising Standards Council of India', url: 'https://www.ascionline.in/' },
    ],
};

export default article;
