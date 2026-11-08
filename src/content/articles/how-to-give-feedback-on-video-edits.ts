/** Text of "How to Give Feedback on a Video Edit (and Keep Revisions Under Control)". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'Send one consolidated list of notes per round, with a timecode for each note, and say what you want to achieve rather than only what you dislike. Review the right things at the right stage: story, order and timing in the first cut; polish — colour, graphics, sound — later. Agree who has the final say before the first cut arrives, so notes don’t contradict each other.',
    keyPoints: [
        'One consolidated list per round, from one person.',
        'Timecode every note and explain the goal behind it.',
        'Story first, polish later — don’t judge colour on a rough cut.',
        'Watch on the screen your audience will use, with and without sound.',
    ],
    body: [
        { type: 'h2', text: 'What should you check at each stage of the edit?' },
        {
            type: 'table',
            head: ['Stage', 'Focus on', 'Leave for later'],
            rows: [
                ['First (rough) cut', 'Story, order of shots, timing, performances, whether the message is clear', 'Colour, final music mix, polished graphics'],
                ['Fine cut', 'Pace, transitions, wording of on-screen text, music choice, spelling of names and prices', 'Final colour and sound mix'],
                ['Colour and sound (online)', 'Look and skin tones, product and logo colour, legal lines, captions, sound levels', '—'],
                ['Final delivery', 'Every version, format and language; subtitles; end cards', '—'],
            ],
        },
        { type: 'p', text: 'Once the edit is **locked** — the timing agreed — the picture goes to colour and sound. Changing the edit after that means redoing work, which is why story notes belong in the first rounds. Our guide to [offline and online editing](/blog/offline-online-editing-conform/) explains the stages.' },
        { type: 'h2', text: 'How do you write notes an editor can act on?' },
        { type: 'list', items: [
            '**Use timecodes.** “At 0:12–0:18” is clearer than “in the middle”.',
            '**Describe the goal, not just the reaction.** Instead of “make it more premium”, try “at 0:12 the cuts feel rushed — hold the product shot longer so the logo is readable.”',
            '**Prioritise.** Mark notes as must-fix, should-fix or nice-to-have.',
            '**Group by type** — story, text, music, colour — so nothing gets lost.',
            '**Flag facts and legal lines clearly.** Prices, offers, claims and disclaimers must be exactly right.',
            '**Ask when unsure.** “Is there a shot of the product in use?” helps more than guessing.',
        ] },
        { type: 'h2', text: 'How should you review a cut?' },
        { type: 'steps', items: [
            'Watch it once without stopping, as a viewer would. Note your gut reaction.',
            'Watch again and write timecoded notes.',
            'Watch on the device your audience will use — a phone for reels, a TV for a TVC — and once with the sound off to check captions and text.',
            'Collect every stakeholder’s notes and merge them into one list, resolving contradictions before you send it.',
            'Send the list through the agreed channel (a review link, a document or a sheet), not as scattered messages.',
        ] },
        { type: 'h2', text: 'Who should give feedback?' },
        { type: 'p', text: 'Name one person to collect notes and give the final answer. Involve decision makers early: when a senior person sees the film for the first time at the final cut and asks for a new direction, everything restarts. Get legal or compliance checks done before the final round, not after.' },
        { type: 'h2', text: 'What are common feedback mistakes?' },
        { type: 'list', items: [
            'Changing the brief or the message after the shoot.',
            'Vague notes like “make it pop” or “add energy” without saying where or why.',
            'Asking to show every product feature in a 30-second film.',
            'Judging music and sound on laptop speakers.',
            'Judging colour on a compressed preview, or on a phone with night mode on.',
            'Asking for the logo to be bigger in every shot.',
        ] },
        { type: 'tip', text: 'If you can’t explain a note in one sentence with a timecode, it is a conversation, not a note. Book a short call with the editor and decide together.' },
        { type: 'p', text: 'Your contract should say how many rounds are included at each stage — see the [video production contract checklist](/blog/video-production-contract-checklist/). Using each round fully, with consolidated notes, is the easiest way to stay within it.' },
    ],
    faqs: [
        { q: 'What does “locked edit” mean?', a: 'It means the timing of the edit is final. Colour grading, sound mixing and graphics are then done to that exact timing, so changing the edit later means redoing some of that work.' },
        { q: 'Can we change the music after the edit is approved?', a: 'Yes, but the edit is often cut to the music, so a new track can mean re-timing shots. Agree the music during the fine cut if you can.' },
        { q: 'Why does the colour look different on my laptop?', a: 'Every screen shows colour differently, and preview links are compressed. Colourists work on calibrated monitors. If something looks wrong, describe it with a timecode and check it on a second device.' },
        { q: 'How many rounds of changes should we expect?', a: 'As many as your contract includes at each stage. Consolidated, specific notes usually mean you need fewer of them.' },
    ],
};

export default article;
