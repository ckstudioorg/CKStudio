/** Text of "The VFX Pipeline Explained: How Visual Effects Are Made". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'A VFX pipeline is the chain of steps that turns raw footage into finished effects shots: breaking down the script and planning (previs), capturing the right data on set, preparing the plates, tracking the camera, rotoscoping and paint, building and animating any CG, simulating effects such as smoke or water, lighting and rendering, and finally compositing everything into the live-action plate. Each shot moves through review rounds until it is approved and delivered for the final grade. The biggest savings come from planning VFX before the shoot, not fixing problems after it.',
    keyPoints: [
        'VFX starts in pre-production, not after the shoot.',
        'Good on-set data (markers, references, measurements) saves days later.',
        'Compositing is where every element is blended into one believable shot.',
        'Lock the edit before final VFX work begins.',
    ],
    body: [
        { type: 'h2', text: 'What are the stages of a VFX pipeline?' },
        {
            type: 'table',
            head: ['Stage', 'What happens', 'Why it matters'],
            rows: [
                ['Breakdown and bidding', 'Every VFX shot is listed with what it needs', 'Sets the scope, schedule and budget'],
                ['Previs', 'Rough animated version of complex shots', 'Decides camera moves and timing before the shoot'],
                ['On-set supervision', 'A VFX supervisor guides the shoot and collects data', 'Avoids shots that are hard or impossible to fix'],
                ['Plate preparation', 'The chosen takes are pulled from the edit and cleaned', 'A clean, stable starting point'],
                ['Matchmove / tracking', 'The real camera’s movement is recreated in 3D', 'CG elements move exactly with the footage'],
                ['Roto and paint', 'Objects and people are cut out; wires, rigs and marks removed', 'Lets new elements sit behind or around actors'],
                ['Modelling, texturing, rigging, animation', 'CG objects and characters are built and moved', 'Creates what didn’t exist on set'],
                ['FX simulation', 'Smoke, fire, water, dust, destruction', 'Natural behaviour that is hard to animate by hand'],
                ['Lighting and rendering', 'CG is lit to match the plate and rendered into images', 'Makes CG look like it belongs in the scene'],
                ['Compositing', 'All layers are combined and matched', 'The final, believable shot'],
                ['Review and delivery', 'Shots go through feedback rounds, then to the grade', 'Approved shots arrive on time and in the right format'],
            ],
        },
        { type: 'h2', text: 'What should happen on set for VFX?' },
        { type: 'list', items: [
            'A VFX supervisor on set for any shot with effects.',
            'Tracking markers where camera movement must be recreated.',
            'Clean plates: the same shot without actors, for clean-up later.',
            'Reference photos, lens and camera data, and measurements of the set.',
            'Lighting references (such as an HDRI and grey and chrome balls) so CG can be lit to match.',
            'Evenly lit, correctly placed green or blue screens — see [green screen vs virtual production](/blog/green-screen-vs-virtual-production/).',
        ] },
        { type: 'h2', text: 'What is compositing?' },
        { type: 'p', text: 'Compositing combines the live-action plate with every other element — CG, matte paintings, simulations, set extensions — into one image. The compositor matches light direction, colour, contrast, grain, lens blur and motion blur so nothing looks pasted on. Most invisible VFX, such as removing a modern signboard from a period street or replacing a sky, is compositing work.' },
        { type: 'h2', text: 'How long does VFX take?' },
        { type: 'p', text: 'It depends on the number of shots and how complex they are: a simple clean-up shot and a fully CG creature are very different jobs. What makes schedules slip is usually not the work itself but changes — a re-cut edit, a new idea after the shot is nearly final, or missing data from the shoot. Agree the review stages (rough, near-final, final) and the number of feedback rounds upfront.' },
        { type: 'h2', text: 'How is AI changing VFX?' },
        { type: 'p', text: 'AI tools now speed up rotoscoping, clean-up, upscaling, depth extraction and set extensions, and can generate elements that once had to be modelled. They still need artists to direct them and to fix the details that give a shot away. See what [AI video generation](/blog/ai-video-generation-for-brands/) can and can’t do today.' },
        { type: 'h2', text: 'How do you keep VFX on budget?' },
        { type: 'list', items: [
            'Lock the edit before VFX starts final work.',
            'Share reference images for every effect so everyone imagines the same result.',
            'Keep the shot count honest — combine or simplify where the story allows.',
            'Use consistent shot names and a shared colour workflow (such as ACES) from shoot to grade.',
            'Approve at stages: layout, then animation, then final lighting and composite.',
        ] },
        { type: 'tip', text: 'Bring your VFX team in at the storyboard stage. A shot planned for VFX can cost a fraction of the same shot fixed after the shoot.' },
        { type: 'p', text: 'VFX is one part of [post-production](/blog/what-is-post-production/) and starts with a good [storyboard](/blog/how-to-make-a-storyboard/). CK Studio delivers compositing, CG and AI-assisted effects for ads and films — see our [VFX and CG](/services/vfx-and-cg/) service.' },
    ],
    faqs: [
        { q: 'What is previs?', a: 'Previsualisation is a rough animated version of complex shots made before the shoot. It decides camera moves, timing and what must be filmed versus created in VFX.' },
        { q: 'What does a VFX supervisor do?', a: 'They plan the effects with the director, guide the shoot so shots can be completed, collect on-set data, and oversee the artists until every shot is approved.' },
        { q: 'What is rotoscoping?', a: 'Rotoscoping is cutting out a person or object frame by frame, so effects can be placed behind them or the background can be changed.' },
        { q: 'Do small ads need a VFX pipeline?', a: 'Yes, a lighter one. Even a product ad with a few clean-ups benefits from planning, good on-set data and a clear review process.' },
    ],
};

export default article;
