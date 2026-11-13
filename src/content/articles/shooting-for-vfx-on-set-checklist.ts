/** Text of "Shooting for VFX: What to Capture on Set (Checklist)". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'A VFX shot is only as good as what was captured on set. For every effects shot, record the main take, a clean plate without the actors, reference of the lighting, the lens and camera details, measurements of the set, and tracking marks where the camera moves. Light green or blue screens evenly and keep actors away from them. Having a VFX supervisor on set for these shots usually saves far more than it costs.',
    keyPoints: [
        'Plan each VFX shot with the VFX team before the shoot.',
        'Always capture a clean plate and lighting reference.',
        'Write down lens, height, tilt and distance for every VFX set-up.',
        'Even screen lighting and distance from the screen prevent most green-screen problems.',
    ],
    body: [
        { type: 'h2', text: 'Why does on-set preparation matter so much?' },
        { type: 'p', text: 'Visual effects artists rebuild the real camera, the real light and the real space inside a computer, then add something new that must match all three. When that information is recorded on the day, the work is straightforward. When it is missing, artists have to estimate, and estimates take longer and look less convincing. The stages that follow are described in [the VFX pipeline explained](/blog/vfx-pipeline-explained/).' },
        { type: 'h2', text: 'What should be planned before the shoot?' },
        { type: 'steps', items: [
            '**Mark the VFX shots** in the script and storyboard.',
            '**Agree the method** for each: green screen, set extension, CG object, clean-up.',
            '**Make a previs or simple animatic** for complex shots, so camera moves are decided.',
            '**Decide camera settings** — resolution, frame rate and recording format suited to effects work.',
            '**List what must be captured** for each shot, and who is responsible.',
            '**Schedule extra time** — plates and references take minutes, but only if planned.',
        ] },
        { type: 'p', text: 'This fits into the general [pre-production checklist](/blog/pre-production-checklist-for-ads-and-films/).' },
        { type: 'h2', text: 'What should be captured for each VFX shot?' },
        { type: 'table', head: ['Capture', 'What it is', 'What it is used for'], rows: [
            ['Main take', 'The performance, as planned', 'The shot itself'],
            ['Clean plate', 'Same framing, no actors or rigs', 'Removing things and filling behind them'],
            ['Reference pass', 'A stand-in object where the CG will be', 'Seeing how real light falls there'],
            ['Grey and chrome balls', 'A matte grey ball and a mirror ball held in the scene', 'Matching light direction, colour and reflections'],
            ['HDRI', 'A full 360-degree photograph of the lighting', 'Lighting CG objects realistically'],
            ['Colour chart', 'A standard chart filmed in the scene’s light', 'Matching colour between shots and cameras'],
            ['Lens grid', 'A chart filmed with each lens', 'Correcting lens distortion'],
            ['Camera notes', 'Lens, focus distance, height, tilt, frame rate, shutter', 'Rebuilding the camera in 3D'],
            ['Measurements and photos', 'Sizes and distances on set, plus reference photographs', 'Rebuilding the space; textures'],
            ['Tracking markers', 'Small marks on screens, floors or walls', 'Following the camera’s movement'],
        ] },
        { type: 'h2', text: 'How do you get green screen right?' },
        { type: 'list', items: [
            '**Light the screen evenly** — no hot spots, shadows or creases.',
            '**Keep distance** — actors a few metres from the screen where space allows, to avoid green light spilling onto them.',
            '**Light the actor for the final background** — the direction and colour of light must match where they will appear to be.',
            '**Avoid green or reflective wardrobe and props**; choose blue screen if the subject is green.',
            '**Watch fine detail** — loose hair, glass and motion blur are the hardest to cut out; use a faster shutter if the VFX team asks.',
            '**Cover the floor only when needed** — feet and shadows on green are difficult.',
            '**Place tracking marks** if the camera moves.',
        ] },
        { type: 'p', text: 'An LED wall can replace the screen for some shots; see [green screen vs virtual production](/blog/green-screen-vs-virtual-production/).' },
        { type: 'h2', text: 'What does a VFX supervisor do on set?' },
        { type: 'list', items: [
            '**Checks each VFX shot** can be finished as planned.',
            '**Advises the director and cinematographer** on framing and movement.',
            '**Collects data** — notes, measurements, HDRIs and reference photographs.',
            '**Asks for plates and reference passes** before the crew moves on.',
            '**Solves problems on the spot** when the plan changes.',
        ] },
        { type: 'p', text: 'On small shoots without a supervisor, give the checklist to an assistant director or camera assistant and make one person responsible.' },
        { type: 'h2', text: 'Which on-set mistakes cost most later?' },
        { type: 'list', items: [
            '**No clean plate** — the background has to be painted by hand.',
            '**Uneven or creased green screen** — hours of extra cut-out work.',
            '**Tracking markers on areas of fine detail** — each one must be painted out.',
            '**Unplanned camera moves** — a wild handheld move on a shot that needs a CG building.',
            '**Changing the lens without noting it**.',
            '**Heavy compression or low resolution** — less information for artists to work with; see [video file formats](/blog/video-file-formats-and-codecs/).',
            '**Smoke, rain or lens flares in front of a screen** — nearly impossible to separate.',
        ] },
        { type: 'tip', text: 'Before leaving each VFX set-up, say the list aloud: take, clean plate, balls, chart, notes. It takes two minutes and saves days.' },
    ],
    faqs: [
        { q: 'Do small ad shoots need a VFX supervisor?', a: 'If there are only one or two simple shots, a call with the VFX artist beforehand and a clear checklist may be enough. For anything with CG objects, crowds or many green-screen shots, a supervisor on the day is worth it.' },
        { q: 'What is an HDRI?', a: 'A 360-degree photograph that records the full range of light in a location, from deep shadow to the sun. It is used to light computer-made objects so they match the real scene.' },
        { q: 'Green screen or blue screen?', a: 'Green is more common because cameras capture it cleanly and it needs less light. Blue is chosen when the subject includes green, or for some night scenes and fine hair detail.' },
        { q: 'Can VFX be added to footage that was not planned for it?', a: 'Often, yes, but it takes longer and costs more, and some shots cannot be made convincing. Planning is always cheaper.' },
    ],
};

export default article;
