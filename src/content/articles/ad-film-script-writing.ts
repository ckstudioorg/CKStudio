/** Text of "How to Write an Ad Film Script: Format and Example". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'An ad film script is written in two columns: what we see on the left (shots, action, on-screen text) and what we hear on the right (voice-over, dialogue, music and sound). Build it around one clear message: hook the viewer in the first two or three seconds, show the problem or desire, show your brand as the answer, and end on the brand with one call to action. As a rule of thumb people speak about two words a second, so a 30-second ad holds roughly 60–70 spoken words.',
    keyPoints: [
        'One ad, one message — cut everything else.',
        'Hook in the first 2–3 seconds; show the brand clearly before the end.',
        'Write in two columns: video on the left, audio on the right.',
        'Read it aloud with a stopwatch before anyone approves it.',
    ],
    body: [
        { type: 'h2', text: 'What does an ad film script look like?' },
        { type: 'p', text: 'Most ads are written in the **two-column (AV) format**. The left column describes the picture, shot by shot: where we are, who we see, what happens, and any text on screen. The right column holds the sound for that moment: voice-over, dialogue, music cues and key sound effects. Reading across a row tells you exactly what the audience sees and hears at the same time, which is why directors, editors and clients all find it easy to follow.' },
        { type: 'p', text: 'Longer brand films with lots of dialogue are sometimes written in screenplay format instead. Either works, as long as every line can be timed and every shot can be imagined.' },
        { type: 'h2', text: 'How many words fit in a 15, 30 or 60-second ad?' },
        {
            type: 'table',
            head: ['Length', 'Spoken words (approx.)', 'What fits'],
            rows: [
                ['6 seconds (bumper)', '8–12', 'One idea and the brand name'],
                ['15 seconds', '25–35', 'A hook, one benefit and the call to action'],
                ['30 seconds', '60–70', 'A small story: problem, product, payoff, brand'],
                ['60 seconds', '120–140', 'A fuller story, a demonstration or a testimonial'],
            ],
            caption: 'Approximate spoken words at a natural pace, leaving room for pauses, music and the end logo',
        },
        { type: 'p', text: 'Ads that rely on pictures and music need far fewer words. If your 30-second script has 90 words of voice-over, it will sound rushed — cut, don’t speed up.' },
        { type: 'h2', text: 'What structure works for a 30-second ad?' },
        { type: 'steps', items: [
            '**0–3 seconds — the hook.** A striking image, a question or a moment of surprise that makes people stop scrolling.',
            '**3–10 seconds — the problem or desire.** Show a situation your audience recognises.',
            '**10–22 seconds — the answer.** Your product or service changes the situation. Show it working rather than describing it.',
            '**22–27 seconds — the payoff.** The feeling or result: relief, pride, delight, savings.',
            '**27–30 seconds — brand and call to action.** Logo, tagline and one clear next step: visit, call, order, download.',
        ] },
        { type: 'h2', text: 'A worked example' },
        { type: 'p', text: 'Here is how a 30-second ad for a fictional Hyderabad bakery, “Sunrise Bakes”, could look in two columns.' },
        {
            type: 'table',
            head: ['Time', 'Video', 'Audio'],
            rows: [
                ['0–3s', 'Close-up: a sleepy child stares at an empty lunch box at 7 a.m.', 'Clock ticking. Child (sighs): “Again?”'],
                ['3–9s', 'Mother checks the kitchen: no bread, no time. She looks at the clock.', 'Music starts, light and quick.'],
                ['9–18s', 'Phone screen: she orders from Sunrise Bakes. Quick cuts of fresh bread, puffs and cake being packed.', 'VO: “Fresh from our ovens since 5 a.m. — at your door in 30 minutes.”'],
                ['18–26s', 'Doorbell. The child opens the box and grins; the mother finally sips her tea.', 'Child: “Best lunch ever!” Mother laughs.'],
                ['26–30s', 'Logo, tagline “Mornings, sorted.” and the ordering details on screen.', 'VO: “Sunrise Bakes. Order now.”'],
            ],
        },
        { type: 'p', text: 'Notice what the script does: one family, one morning, one promise (fresh and fast), and the brand appears early in the story, not only on the end card. Any delivery time or claim you put in a real ad must be true and something you can prove.' },
        { type: 'h2', text: 'Tips that make ad scripts memorable' },
        { type: 'list', items: [
            '**Write for the eye first.** Ask what the audience will remember if the sound is off — many people watch on mute.',
            '**Be specific.** “Fresh at 5 a.m.” is stronger than “high quality”.',
            '**Show the brand early and naturally,** not only in the last second.',
            '**Say the call to action once, clearly.** One next step beats three.',
            '**Plan the cut-downs.** Write the 30-second version so a 15 and a 6 can be cut from it.',
            '**Write each language as an original.** Telugu and Hindi versions work best when the lines are rewritten for the audience, not translated word for word — see our guide to [dubbing ads into Telugu, Hindi and Tamil](/blog/ai-dubbing-telugu-hindi-tamil-ads/).',
        ] },
        { type: 'h2', text: 'What mistakes make ads forgettable?' },
        { type: 'list', items: [
            'Trying to say five things in thirty seconds.',
            'A slow start: logos, wide shots of buildings or long introductions before anything happens.',
            'Voice-over that describes what the picture already shows.',
            'A brand that could be swapped for a competitor without changing a word.',
            'Claims you cannot prove, such as “No. 1” or “best in India”.',
        ] },
        { type: 'h2', text: 'What happens after the script is approved?' },
        { type: 'p', text: 'The script becomes a [storyboard](/blog/how-to-make-a-storyboard/), then a shot list, schedule and budget. If you are still at the idea stage, start with a clear brief — our guide to [writing an ad film brief](/blog/how-to-write-an-ad-film-brief/) has a template — and see the full [ad film production process](/blog/ad-film-production-process-step-by-step/).' },
        { type: 'tip', text: 'Read the script aloud with a stopwatch at a relaxed pace, then cut ten per cent. Scripts always read faster in your head than they play on screen.' },
        { type: 'p', text: 'CK Studio writes, produces and finishes ad films in Hyderabad, from the first idea to the final cut — see our [ad films and commercials](/services/ad-films-and-commercials/) service.' },
    ],
    faqs: [
        { q: 'How long should the script for a 30-second ad be?', a: 'At a natural pace, about 60–70 spoken words, and fewer if the ad relies on visuals and music. Always time it by reading aloud.' },
        { q: 'Who should write the ad script — the client or the production company?', a: 'Usually the client writes the brief (goal, audience, message, must-haves) and the creative team writes the script. The client then reviews it for accuracy and brand fit.' },
        { q: 'What is the difference between a script and a storyboard?', a: 'The script describes what is seen and heard in words. The storyboard turns it into drawings or images, one frame per shot, so everyone can see the film before it is shot.' },
        { q: 'Can AI write ad scripts?', a: 'AI tools can draft ideas and alternative lines quickly. A writer still needs to sharpen the idea, keep the brand voice, and check every claim before it reaches the client.' },
    ],
};

export default article;
