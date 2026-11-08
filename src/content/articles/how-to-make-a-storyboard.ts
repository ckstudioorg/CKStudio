/** Text of "How to Make a Storyboard for an Ad or Film". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'A storyboard is the script drawn as a sequence of frames — one panel per shot — showing what the camera sees, with notes on action, dialogue, camera movement and timing. Make it once the script is approved: break the script into shots, sketch each frame (stick figures are fine), add shot size, movement and sound notes, then check the timing, ideally as an animatic. A good storyboard means everyone agrees on the film before money is spent on the shoot.',
    keyPoints: [
        'One panel per shot, numbered to match the script.',
        'Arrows show camera and subject movement.',
        'An animatic (frames + voice + music) tests the timing.',
        'The storyboard drives the shot list, schedule and budget.',
    ],
    body: [
        { type: 'h2', text: 'What is a storyboard — and what isn’t it?' },
        { type: 'p', text: 'A storyboard is a visual plan of every shot in order. It is not the same as a mood board or a shot list, though all three are used together.' },
        {
            type: 'table',
            head: ['Tool', 'What it shows', 'When it is used'],
            rows: [
                ['Mood board', 'The look and feel: colours, light, styling, references', 'Early, to agree on the tone'],
                ['Storyboard', 'Each shot as a frame, in order, with notes', 'After the script is approved'],
                ['Animatic', 'The storyboard frames timed to voice and music', 'To check pace and length before the shoot'],
                ['Shot list', 'Every shot with lens, movement and setup, grouped for the shoot', 'For planning the shoot day'],
            ],
        },
        { type: 'h2', text: 'What should each storyboard frame include?' },
        { type: 'list', items: [
            'A frame number that matches the script and later the shot list.',
            'The framing: who and what is in the shot, and how big they are.',
            'The action in one short line.',
            'Arrows for camera movement (pan, push in, crane up) and for movement inside the frame.',
            'The line of dialogue or voice-over that plays over it, and key sounds or music cues.',
            'Any on-screen text, product shot, VFX or special prop.',
            'The rough duration in seconds.',
        ] },
        { type: 'h2', text: 'Shot sizes and camera moves, in plain words' },
        {
            type: 'table',
            head: ['Term', 'Meaning'],
            rows: [
                ['Wide shot', 'Shows the whole place and people in it — sets the scene'],
                ['Medium shot', 'Person from the waist up — conversation and action'],
                ['Close-up', 'A face or a product filling the frame — emotion and detail'],
                ['Extreme close-up', 'A tiny detail: eyes, a logo, a drop of oil in a pan'],
                ['Over-the-shoulder', 'Looking past one person at another — dialogue'],
                ['Point of view (POV)', 'What a character sees'],
                ['Pan / tilt', 'Camera turns left-right / up-down from one spot'],
                ['Dolly or track', 'Camera moves towards, away from or alongside the subject'],
                ['Crane or drone', 'Camera rises or flies — big reveals and aerial views'],
                ['Handheld', 'Camera held by the operator — energy and realism'],
            ],
        },
        { type: 'h2', text: 'How do you make a storyboard, step by step?' },
        { type: 'steps', items: [
            'Break the approved script into individual shots.',
            'Sketch quick thumbnails to try different angles and choose the clearest one for each moment.',
            'Check continuity: keep characters on the same side of the frame in a conversation so viewers stay oriented.',
            'Draw the final frames, with notes for action, movement, sound, text and duration.',
            'Time it: build an animatic with a scratch voice-over and temporary music, and see if the story works at the right length.',
            'Review with the client and director, and change frames — it is cheap on paper and expensive on set.',
            'Turn the approved storyboard into a shot list, schedule and budget.',
        ] },
        { type: 'h2', text: 'Do you need to draw well?' },
        { type: 'p', text: 'No. Stick figures with clear arrows and notes work. Other options are photo-boards (stand-ins photographed in a similar space), simple 3D previs, and AI-generated frames, which are useful for showing a look or mood — see [AI pre-looks and pre-teasers](/blog/ai-pre-looks-and-pre-teasers-for-movies/). AI frames still need checking for consistent characters, products and brand details.' },
        { type: 'h2', text: 'How does a storyboard save money?' },
        { type: 'list', items: [
            'You shoot only the shots you need, so the shoot day is shorter.',
            'The right crew, equipment and props are booked — no surprises on set.',
            'Locations can be chosen and checked against the frames.',
            'Visual effects are planned before the shoot, which saves time later — see [how the VFX pipeline works](/blog/vfx-pipeline-explained/).',
            'Clients approve the film before the expensive part begins.',
        ] },
        { type: 'tip', text: 'Number every frame to match the script and the shot list. On shoot day, “shot 14B” should mean the same thing to the director, the camera team and the client.' },
        { type: 'p', text: 'Before you storyboard, make sure the [script](/blog/ad-film-script-writing/) is locked. CK Studio storyboards and plans every production in-house — see our [ad films and commercials](/services/ad-films-and-commercials/) service and the [pre-production checklist](/blog/pre-production-checklist-for-ads-and-films/).' },
    ],
    faqs: [
        { q: 'How many frames does a 30-second ad storyboard need?', a: 'It depends on the edit style. A calm ad may have ten or twelve shots; a fast, energetic one can have twenty or more. Draw one frame for every shot, plus extra frames for complex camera moves.' },
        { q: 'What is an animatic?', a: 'An animatic is the storyboard frames edited together with a scratch voice-over, temporary music and timing, so you can watch a rough version of the ad before filming.' },
        { q: 'What is the difference between a storyboard and a shot list?', a: 'The storyboard shows shots in story order as pictures. The shot list is a table of every shot with technical details, usually grouped by location and setup to make the shoot efficient.' },
        { q: 'Can AI create a storyboard?', a: 'AI image tools can generate frames quickly and are good for exploring looks. A director still decides the shots, and the frames need checking so characters and products stay consistent.' },
    ],
};

export default article;
