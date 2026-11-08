/** Text of "What Is a Director’s Treatment? How to Judge an Ad Film Pitch". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'A director’s treatment is the director’s plan for your ad, written and illustrated: the idea in a line, the story beat by beat, the look (reference frames, colour and light), casting, locations, music and sound, and how your brand appears. Production companies send one when they pitch, so you can judge their thinking before you choose. Judge treatments on how well they solve your brief and how clearly they can be made on your budget — not on how pretty the slides are.',
    keyPoints: [
        'A treatment shows the idea, story, look, sound and casting before anything is shot.',
        'It comes before the final script and long before the storyboard.',
        'Judge it against your brief: one message, the right audience, the brand at the heart of it.',
        'Ask how it will be made on your budget and timeline.',
    ],
    body: [
        { type: 'h2', text: 'What goes into a treatment?' },
        {
            type: 'table',
            head: ['Section', 'What it shows'],
            rows: [
                ['The idea', 'The concept in one or two sentences — what people will remember.'],
                ['Story beats', 'What happens, moment by moment, from the opening shot to the end card.'],
                ['Look and feel', 'Reference frames, colour palette, lighting mood, camera style.'],
                ['Casting', 'The kind of people on screen and how they perform.'],
                ['Locations or sets', 'Where it happens, and why.'],
                ['Music and sound', 'The mood of the score, key sounds, the voice-over tone.'],
                ['Brand moments', 'How the product, logo and call to action appear.'],
                ['Versions', 'Cut-downs and formats: 30, 15 and 6 seconds, vertical versions for reels.'],
                ['Practical notes', 'Shoot days, any VFX, AI or animation, and known risks.'],
            ],
        },
        { type: 'h2', text: 'How is a treatment different from a script or a storyboard?' },
        { type: 'p', text: 'The **treatment** sells the vision: it is how a director explains what the film will feel like. The **script** sets every line and shot in order — see [how to write an ad film script](/blog/ad-film-script-writing/). The **storyboard** draws each shot so the crew can plan the shoot — see [how to make a storyboard](/blog/how-to-make-a-storyboard/). In a typical project the treatment comes first, during the pitch; the script is refined once you choose a director; the storyboard follows in pre-production.' },
        { type: 'h2', text: 'How do you judge a treatment?' },
        { type: 'list', items: [
            '**Does it answer the brief?** Re-read your [ad film brief](/blog/how-to-write-an-ad-film-brief/) and check the one message and the audience are front and centre.',
            '**Can you say the idea in one line?** If the director can’t, viewers won’t remember it either.',
            '**Is the brand essential to the story,** or just stuck on the end? Good ideas can’t be told without the product.',
            '**Are the references specific?** Real frames that show the exact light, colour and casting beat a generic mood board.',
            '**Will it work in every format you need?** Ask how the 15-second cut and the vertical reel will look.',
            '**Is it makeable on your budget and schedule?** Ask what the idea needs: shoot days, locations, VFX, animals, children, weather.',
        ] },
        { type: 'h2', text: 'How should you run a fair pitch?' },
        { type: 'steps', items: [
            'Send the same brief, budget range and timeline to every company you invite.',
            'Invite a small number — two or three serious options are easier to compare than eight.',
            'Give enough time for considered work, and offer a call to answer questions.',
            'Keep each company’s ideas confidential. Never pass one bidder’s concept to another.',
            'For large jobs, consider paying a pitch fee for detailed treatments.',
            'Give honest feedback to the companies you don’t choose.',
        ] },
        { type: 'h2', text: 'What should you ask the director?' },
        { type: 'list', items: [
            'What is the one thing you want people to feel at the end?',
            'Which shot is the hardest, and what is the plan B?',
            'Where would you spend the budget, and where would you save?',
            'How will the ad change for vertical and short versions?',
            'Have you made something similar, and what did you learn?',
        ] },
        { type: 'tip', text: 'Ask for one frame per key moment of the story. A treatment that shows the ad in eight pictures is far easier to judge than pages of description.' },
        { type: 'p', text: 'Once you choose, the treatment becomes the reference point for the whole production — the [step-by-step production process](/blog/ad-film-production-process-step-by-step/) builds from it, and the director’s vision is what you will check every cut against.' },
    ],
    faqs: [
        { q: 'Is a director’s treatment free?', a: 'For many pitches, companies prepare treatments at their own cost, hoping to win the job. For big or complex projects some brands pay a pitch fee, which also gets them more detailed work. Agree this before the pitch starts.' },
        { q: 'Who owns the ideas in a treatment?', a: 'Unless you agree otherwise, the ideas belong to the company and director who created them. Using a rejected treatment’s idea with another company is unfair and can lead to disputes.' },
        { q: 'How long is a treatment?', a: 'Usually a short deck of slides: long enough to show the idea, the look and the plan, and short enough to read in ten minutes.' },
        { q: 'Do we need a treatment for a small social video?', a: 'Not a full one. A one-page approach note with a few reference images and a plan for formats is enough for reels and short social content.' },
    ],
};

export default article;
