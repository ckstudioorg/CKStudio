/** Text of "FOOH and CGI Billboard Ads: How Those Viral “Impossible” Videos Are Made". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'FOOH, or “fake out-of-home”, ads are short CGI videos that show impossible things happening in real places — a giant product rolling down a city street, a billboard that comes alive — filmed with a real camera and finished with 3D animation and compositing. They spread on social media because they look like phone footage of a real event. They work best for launches and moments of surprise; just make sure the product is shown accurately and the video is presented as a creative ad, not as news.',
    keyPoints: [
        'Real location footage, 3D animation and careful compositing.',
        'Believability comes from matching camera movement, light and shadows.',
        'One surprising moment, readable in the first few seconds.',
        'Fantasy is fine; misleading claims about the product are not.',
    ],
    body: [
        { type: 'h2', text: 'How are FOOH videos made?' },
        { type: 'steps', items: [
            '**Concept** — one surprising moment that shows off the product or brand.',
            '**Location filming** — a real street, building or landmark, shot handheld or by drone so it feels like phone footage. The crew also captures lighting references and measurements.',
            '**Camera tracking** — software recreates the real camera’s movement in 3D, so the animation sits perfectly in the shot.',
            '**3D modelling** — the product, character or object, built accurately from the real thing.',
            '**Animation and simulation** — movement, cloth, liquid, smoke, crowds.',
            '**Lighting and rendering** — matched to the time of day and weather in the footage.',
            '**Compositing** — shadows, reflections, contact with the ground, interaction with real objects.',
            '**Sound and finishing** — natural street sound, a light handheld feel and a believable grade.',
        ] },
        { type: 'p', text: 'It is the same pipeline used for film VFX, compressed into a few seconds — our [VFX pipeline guide](/blog/vfx-pipeline-explained/) explains each stage.' },
        { type: 'h2', text: 'What makes a FOOH ad believable?' },
        { type: 'list', items: [
            '**Real camera movement** — slight handheld shake, natural reframing.',
            '**Correct light and shadows** — the sun in the right place, soft shadows on a cloudy day.',
            '**Scale cues** — people, cars and buildings that show just how big the impossible thing is.',
            '**Interaction** — dust kicking up, water splashing, reflections in shop windows.',
            '**Natural sound** — traffic, crowds and wind, not only a music track.',
            '**A clear moment** — viewers should get the joke or the wow within the first few seconds.',
        ] },
        { type: 'h2', text: 'When do FOOH ads make sense?' },
        { type: 'list', items: [
            '**Product launches** — a new bottle, phone or car appearing somewhere unexpected.',
            '**Festive moments** — giant sweets, lanterns or decorations in the city.',
            '**Store openings** — a brand character arriving at the new location.',
            '**Anniversaries and events** — a playful moment people will share.',
        ] },
        { type: 'p', text: 'FOOH imitates real **3D anamorphic billboards** — curved LED screens showing forced-perspective content that looks three-dimensional from one viewpoint. If you have access to such a screen, the same 3D content can be adapted for it; if not, FOOH gives you the social-media version without the media cost.' },
        { type: 'h2', text: 'What does it take to make one?' },
        { type: 'p', text: 'Cost and time depend on the complexity of the animation, the number of shots, the length, any simulation (liquids, cloth, crowds), the location shoot and the number of versions. A simple object placed in one locked-off shot is far quicker than a creature walking through a busy street with reflections and crowds. Ask for the idea to be storyboarded first — see [how to make a storyboard](/blog/how-to-make-a-storyboard/) — so the complexity is clear before work begins.' },
        { type: 'h2', text: 'How do you keep FOOH ads honest?' },
        { type: 'list', items: [
            '**Show the product accurately** — its size can be fantasy, but its features, colours and design must be real.',
            '**Don’t present it as news** — no fake headlines or claims that the event really happened.',
            '**Disclose where platforms require it** — realistic synthetic content may need a label; see [AI in ads: rules and labelling](/blog/ai-in-ads-india-rules-labelling-consent/).',
            '**Follow advertising codes** — the ASCI code applies to CGI ads like any other ad.',
        ] },
        { type: 'p', text: 'Not sure whether your product idea needs CGI, a live shoot or AI? See [live shoot, CGI or AI for product videos](/blog/product-video-live-shoot-cgi-or-ai/).' },
        { type: 'tip', text: 'Film the real location yourself, at the right time of day, before any 3D work starts. Matching the light is what sells the illusion — and it is very hard to fix later.' },
    ],
    faqs: [
        { q: 'Is FOOH the same as a 3D anamorphic billboard?', a: 'No. A 3D anamorphic billboard is a real screen in a real place showing forced-perspective content. FOOH is a CGI video that makes something impossible appear to happen in a real place, made for social media.' },
        { q: 'Can FOOH videos be made with AI?', a: 'AI tools help with concepts and some elements, but most polished FOOH work still relies on 3D animation and compositing, because it gives precise control over the product, the camera and the light.' },
        { q: 'How long should a FOOH video be?', a: 'Short. A few seconds of real-looking set-up and one big moment — usually well under thirty seconds — is what people watch to the end and share.' },
        { q: 'Do we need permission to film the location?', a: 'For a commercial shoot, usually yes — especially for landmarks, metro stations and private property. Drone shots also need to follow India’s drone rules (see [drone shoot rules](/blog/drone-shoot-rules-india/)).' },
    ],
    sources: [
        { label: 'YouTube Help — Disclosing use of altered or synthetic content', url: 'https://support.google.com/youtube/answer/14328491' },
        { label: 'ASCI — Advertising Standards Council of India', url: 'https://www.ascionline.in/' },
    ],
};

export default article;
