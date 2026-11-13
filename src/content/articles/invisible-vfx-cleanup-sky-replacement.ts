/** Text of "Invisible VFX: Clean-Up, Sky Replacement and Set Extensions". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'Invisible VFX are visual effects the audience is never meant to notice: removing a wire, a crew reflection or a modern signboard, replacing a dull sky, tidying skin or a product label, adding a screen image to a phone, or extending a small set into a large one. They are among the most common jobs in ads and films. They cost least when planned before the shoot and most when discovered in the edit.',
    keyPoints: [
        'Most VFX in ads and films is repair and polish, not spectacle.',
        'A clean plate (the same shot without actors) makes removals far easier.',
        'Moving cameras, hair and reflections make a fix harder.',
        'Count and describe fixes shot by shot to get a reliable quote.',
    ],
    body: [
        { type: 'h2', text: 'What counts as invisible VFX?' },
        { type: 'table', head: ['Job', 'What it means', 'Typical example'], rows: [
            ['Paint and clean-up', 'Removing unwanted things from the frame', 'Wires, rigs, crew reflections, power lines, a pimple'],
            ['Sky replacement', 'Swapping or improving the sky', 'A grey sky made into a soft evening sky'],
            ['Set extension', 'Adding to what was built or found', 'Two floors of a building made into ten'],
            ['Screen replacement', 'Putting an image on a phone, TV or laptop', 'An app shown clearly on a handset'],
            ['Logo and brand removal', 'Hiding other companies’ marks', 'A car badge or a shop sign'],
            ['Beauty and product retouch', 'Even skin, clean packs, tidy labels', 'A dented pack repaired'],
            ['Crowd and vehicle multiplication', 'Making a few look like many', 'A fuller stadium or street'],
            ['Stabilising and reframing', 'Smoothing a shaky shot', 'A handheld shot made steady'],
            ['Day for night, weather', 'Changing time or adding rain, mist, snow', 'A day shot turned into dusk'],
        ] },
        { type: 'p', text: 'These use the same stages as any effects work; [the VFX pipeline explained](/blog/vfx-pipeline-explained/) describes them.' },
        { type: 'h2', text: 'How is something removed from a shot?' },
        { type: 'steps', items: [
            '**Track the shot** — software follows the camera’s movement.',
            '**Find what was behind the object** — from a clean plate, from another frame, or by painting it.',
            '**Patch it in** and make it move with the camera.',
            '**Match grain, focus and light** so the patch disappears.',
            '**Check in motion** on a large screen; a fix that works on a still can shimmer when played.',
        ] },
        { type: 'p', text: 'AI-assisted tools now speed up tracking and filling for simple cases, but each result still needs a person to check it; see [AI in post-production](/blog/ai-in-post-production/).' },
        { type: 'h2', text: 'What makes a fix easy or hard?' },
        { type: 'table', head: ['Easier', 'Harder'], rows: [
            ['Locked-off or gently moving camera', 'Fast handheld movement'],
            ['Object against a plain wall or sky', 'Object crossing hair, smoke, water or glass'],
            ['A clean plate was filmed', 'No reference of the background'],
            ['Short shot', 'Long shot with changing light'],
            ['Sharp focus', 'Heavy motion blur or shallow focus'],
            ['Nothing passes in front', 'Actors walk across the area'],
        ] },
        { type: 'h2', text: 'How do you plan for invisible VFX on set?' },
        { type: 'list', items: [
            '**Decide in advance** what will be fixed later, and tell the VFX team.',
            '**Shoot clean plates** — the same frame without actors or the unwanted object.',
            '**Keep the camera move simple** where a fix is needed.',
            '**Put tracking marks** on screens and green areas.',
            '**Note lens and camera details** for each VFX shot.',
            '**Avoid “fix it in post”** for things that take a minute to fix on set, such as moving a cable.',
        ] },
        { type: 'p', text: 'Our guide to [shooting for VFX](/blog/shooting-for-vfx-on-set-checklist/) has the full checklist.' },
        { type: 'h2', text: 'How is this work quoted?' },
        { type: 'p', text: 'Usually per shot, according to difficulty and length. To get a reliable figure, lock the edit first, then list each shot with its timecode and a one-line description of the fix. Vague requests such as “clean up the film” lead to vague quotes. Agree how many review rounds are included, and at what resolution the shots will be delivered. For feature films, see [VFX breakdowns and quotes](/blog/vfx-breakdown-and-quotes-for-films/).' },
        { type: 'h2', text: 'Where is the line between polish and misleading?' },
        { type: 'p', text: 'Removing a cable or improving a sky is ordinary craft. In advertising, changes that alter what the product is or does are different: making a pack look larger, a result more dramatic or a property’s surroundings greener than they are can mislead buyers. Keep retouching to presentation, not to the facts of the product.' },
        { type: 'tip', text: 'Review the locked edit once only for clean-up, with the sound off. Note every distraction with its timecode. One combined list is much cheaper than fixes sent in several rounds.' },
    ],
    faqs: [
        { q: 'Can any object be removed from a video?', a: 'Almost anything can, but the effort varies hugely. A wire against a wall is quick; a person removed from a moving crowd shot is a major job. A VFX artist can tell you after seeing the shot.' },
        { q: 'What is a clean plate?', a: 'A recording of the same framing without the actors or the unwanted item. It gives the artist the real background to use when removing something.' },
        { q: 'Is sky replacement noticeable?', a: 'Not when done well. The new sky must match the direction and colour of the light on the ground, and reflections in windows or water must change too.' },
        { q: 'Should clean-up be done before or after colour grading?', a: 'Normally before the final grade, on the original-quality footage, so the grade is applied over the finished shot. Your post-production team will plan the order; see [offline vs online editing](/blog/offline-online-editing-conform/).' },
    ],
};

export default article;
