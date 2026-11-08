/** Text of "Casting Actors and Models for Ads: Auditions, Kids and Consent". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'Casting for an ad starts with a casting brief — who the character is, age range, look, languages, skills and where the ad will run — followed by auditions or a shortlist, a call-back or look test, and a contract that states the fee, the shoot days and exactly where and for how long the ad can be used. If a child appears, the producer needs the District Magistrate’s permission and must follow limits on working hours. Everyone who appears on camera should sign a release.',
    keyPoints: [
        'A clear casting brief saves days of auditions.',
        'Usage — media, territory and duration — shapes the fee as much as shoot days do.',
        'Child actors: District Magistrate permission, at most five hours a day and three hours without rest.',
        'Signed releases for everyone on camera; parents or guardians sign for children.',
    ],
    body: [
        { type: 'h2', text: 'What should a casting brief include?' },
        { type: 'list', items: [
            '**The role and the story** — who this person is and what they do in the ad.',
            '**Age range and look** — the kind of face your audience recognises as one of their own.',
            '**Language and accent** — Telugu, Hindi or English lines, and which dialect sounds natural for your audience.',
            '**Skills** — dancing, driving, cooking, swimming, playing an instrument, handling a product convincingly.',
            '**Shoot dates and locations**, including any night or outdoor work.',
            '**Usage** — TV, digital, cinema, outdoor or print; for how long; in which states or countries.',
            '**Exclusivity** — whether the actor must avoid ads for competing brands while yours runs.',
        ] },
        { type: 'h2', text: 'How does casting work, step by step?' },
        { type: 'steps', items: [
            '**Brief the casting director or agency.** They shortlist actors and models from their network, agencies and portfolios.',
            '**Auditions.** Actors read lines or improvise on camera, in the studio or as self-tapes. Ask to see them speak the actual language of the ad.',
            '**Shortlist review.** The director recommends; the brand chooses first and second options for each role.',
            '**Call-back or look test.** Trying wardrobe, hair and make-up, and handling the product — often with the other cast to check chemistry.',
            '**Booking and contract.** Fee, dates, usage and exclusivity confirmed in writing before the shoot.',
            '**Fittings and rehearsal**, then the shoot.',
        ] },
        { type: 'h2', text: 'What decides an actor’s or model’s fee?' },
        {
            type: 'table',
            head: ['Factor', 'Why it matters'],
            rows: [
                ['Media', 'TV and cinema use is usually priced differently from digital-only use.'],
                ['Usage period', 'One year of use costs less than three; extending later costs extra.'],
                ['Territory', 'Telangana and Andhra Pradesh only, all of India, or worldwide.'],
                ['Exclusivity', 'Keeping a face away from competitors for a period has a value.'],
                ['Shoot days and hours', 'Extra days, night shoots and overtime add to the fee.'],
                ['Profile', 'Well-known faces and experienced performers charge more.'],
                ['Versions', 'Extra language versions or dubbing may be negotiated separately.'],
            ],
        },
        { type: 'p', text: 'Agree all of this before the shoot, and note the end date of the usage. An ad that keeps running after the agreed period needs a renewal — see our [video production contract checklist](/blog/video-production-contract-checklist/).' },
        { type: 'h2', text: 'Should you cast real people or professional actors?' },
        { type: 'p', text: 'Real customers, staff and owners bring an authenticity actors can’t fake, which is why they suit [customer testimonial videos](/blog/customer-testimonial-videos/) and behind-the-scenes films. Professional actors are better when the script needs precise timing, emotion on cue or many takes. Many good ads mix both: an actor carries the story while real staff appear doing their real jobs. Never present an actor as a real customer giving a genuine review.' },
        { type: 'h2', text: 'What are the rules for child actors in ads?' },
        { type: 'p', text: 'Indian law allows children to work as artists in audio-visual entertainment, including advertisements, provided their school education is not affected and the conditions in the child labour rules amended in 2017 are followed. In summary:' },
        { type: 'list', items: [
            'The producer must get **permission from the District Magistrate** of the district where the shoot happens, submitting the list of child participants and their parents’ or guardians’ consent.',
            'A person from the production team must be named as **responsible for the children’s safety and security**.',
            'A child may work **no more than five hours a day, and no more than three hours without rest**.',
            'At least **20% of the child’s earnings** from the production must go into a fixed deposit in the child’s name in a nationalised bank.',
        ] },
        { type: 'p', text: 'Start the paperwork early — the permission must be in place before the shoot — and keep a parent or guardian on set. Rules and local requirements can change, so confirm the current process with your production company.' },
        { type: 'h2', text: 'Why do you need a release form?' },
        { type: 'p', text: 'A talent release is a short signed document in which the person agrees to be filmed and allows you to use their image, voice and performance — in the media, places and period you agree, with permission to edit, dub and translate. For children, a parent or guardian signs. Get releases from featured extras too: anyone recognisable in a shot. Keep the signed copies for as long as the ad runs.' },
        { type: 'tip', text: 'Make a simple sheet listing every person on camera, their release, their usage period and its end date. Set a reminder a month before any usage expires.' },
    ],
    faqs: [
        { q: 'Can we use our own staff instead of actors?', a: 'Yes, and it often looks more genuine. Treat them like any cast member: brief them, rehearse, and get a signed release that covers where and for how long the ad will be used — including after they leave the company.' },
        { q: 'Do we pay more if the ad runs longer than planned?', a: 'Usually yes. Fees are agreed for a set period, media and territory. Using the ad beyond them needs a renewal with the actor or their agency.' },
        { q: 'What permission is needed to cast a child in an ad?', a: 'The producer must obtain permission from the District Magistrate where the shoot happens, with the parents’ or guardians’ consent, follow the working-hour limits and set aside part of the child’s earnings in a fixed deposit in their name.' },
        { q: 'Can an actor stop us using the ad later?', a: 'Not if the contract and release clearly grant the usage you need for the agreed period. That is exactly why both should be signed before the shoot.' },
    ],
    sources: [
        { label: 'Deccan Chronicle — rules for child actors framed for film makers (2017)', url: 'https://www.deccanchronicle.com/nation/current-affairs/140717/child-actors-dos-and-donts-framed-for-film-makers.html' },
        { label: 'S.S. Rana & Co. — Child actors and child labour laws', url: 'https://ssrana.in/articles/child-actors-and-child-labour-laws/' },
        { label: 'Ministry of Labour and Employment', url: 'https://labour.gov.in/' },
    ],
};

export default article;
