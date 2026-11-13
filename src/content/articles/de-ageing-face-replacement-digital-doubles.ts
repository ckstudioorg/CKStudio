/** Text of "De-Ageing, Face Replacement and Digital Doubles: How They Work and What’s Allowed". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'De-ageing makes an actor look younger, face replacement puts one person’s face onto another performer’s body, and a digital double is a full computer-made copy of an actor. Films use them for flashbacks, dangerous stunts and scenes that cannot be shot. The methods range from 2D retouching to machine-learning face swaps and fully built 3D humans. All of them need the performer’s clear written consent, and realistic synthetic content may need a label on online platforms.',
    keyPoints: [
        'Three different techniques, often combined in one shot.',
        'Faces are the hardest thing in VFX: viewers notice the smallest error.',
        'Good reference of the actor decides quality.',
        'Written consent for each specific use is essential.',
    ],
    body: [
        { type: 'h2', text: 'What is the difference between the three?' },
        { type: 'table', head: ['Technique', 'What it does', 'Typical use'], rows: [
            ['De-ageing (or ageing)', 'Changes the apparent age of the actor’s own face', 'Flashbacks, stories across decades'],
            ['Face replacement', 'Places an actor’s face on a body double or stunt performer', 'Stunts, twins, dual roles, scenes an actor could not attend'],
            ['Digital double', 'A complete 3D copy of the actor, body and face', 'Impossible stunts, wide shots, crowds, creature transformations'],
            ['Beauty work', 'Subtle skin and shape retouching', 'Ads and close-ups; see [invisible VFX](/blog/invisible-vfx-cleanup-sky-replacement/)'],
        ] },
        { type: 'h2', text: 'How is de-ageing done?' },
        { type: 'list', items: [
            '**2D compositing** — artists smooth lines, lift the jaw and reshape features shot by shot. Precise but slow.',
            '**Machine-learning methods** — a model is trained on images of the actor, sometimes from their earlier films, and produces a younger face that follows the performance. Faster, but needs careful finishing.',
            '**A 3D head** — a full digital face is built and animated from the actor’s performance. The most control, and the most work.',
            '**Make-up and casting** — still the simplest answer for small age changes or brief scenes.',
        ] },
        { type: 'p', text: 'Most productions mix these: a learned face for the bulk of the work, with artists correcting eyes, mouth and skin.' },
        { type: 'h2', text: 'How does face replacement work?' },
        { type: 'steps', items: [
            '**Cast a double** with a similar build, head shape and skin tone.',
            '**Film the scene** with the double, with clear lighting on the face and tracking marks if needed.',
            '**Capture the actor’s face** — ideally filmed in matching light and angles, or from existing footage.',
            '**Train or build the face** — a learned model or a 3D head.',
            '**Track and blend** — the new face follows the double’s head; edges, hair and neck are joined.',
            '**Match light, grain and focus**, then review in motion.',
        ] },
        { type: 'h2', text: 'What goes into a digital double?' },
        { type: 'list', items: [
            '**A body and face scan** of the actor, with many expressions.',
            '**Detailed textures** — skin, eyes, hair and costume.',
            '**A rig** — the digital skeleton and muscles that let it move.',
            '**Motion** — captured from the actor or a stunt performer, or animated by hand.',
            '**Lighting reference from the set** — see [shooting for VFX](/blog/shooting-for-vfx-on-set-checklist/).',
        ] },
        { type: 'p', text: 'Digital doubles hold up best in wide and fast shots. Close-ups of a talking digital face remain the most demanding work in the field.' },
        { type: 'h2', text: 'Why do some results look wrong?' },
        { type: 'list', items: [
            '**Eyes** — a missing sparkle or a gaze that drifts.',
            '**Mouth and teeth** — shapes that do not match the words.',
            '**Skin** — too smooth, with no pores or movement.',
            '**Light** — a face lit differently from the body and room.',
            '**Voice and body** — a young face with an older voice, posture or walk.',
            '**Flicker** — the face shifting slightly from frame to frame.',
        ] },
        { type: 'h2', text: 'What consent and rules apply?' },
        { type: 'p', text: 'A person’s face and voice are protected. Indian courts have granted well-known people orders against unauthorised use of their name, image, voice and likeness, including AI-made imitations. For filmmakers and brands the practical rules are:' },
        { type: 'list', items: [
            '**Written consent** from the performer for the specific film, scenes and uses.',
            '**Agreement on reuse** — whether the scan or model may be used again, and for what.',
            '**Care with people who have died** — speak to the family or estate and take legal advice.',
            '**Consent from the double** as well.',
            '**Honesty in advertising** — a synthetic endorsement the person never gave is misleading.',
            '**Labelling** — some platforms require a disclosure for realistic altered or synthetic content.',
        ] },
        { type: 'p', text: 'Our guide to [AI in ads: labelling, consent and copyright](/blog/ai-in-ads-india-rules-labelling-consent/) covers the rules in more detail. This is general information, not legal advice.' },
        { type: 'h2', text: 'How should a production plan for it?' },
        { type: 'p', text: 'Decide early which scenes need the technique and test one shot before committing. Budget by the number and length of close-up shots; these dominate the cost. Shoot with the VFX team present, and allow time for several review rounds, because faces are judged more harshly than anything else on screen. This is specialist work within [VFX and CG](/services/vfx-and-cg/).' },
        { type: 'tip', text: 'Ask whether the story really needs the effect. A well-cast younger actor, careful make-up or a shot from behind is sometimes more convincing than any digital face.' },
    ],
    faqs: [
        { q: 'Is a face swap the same as a deepfake?', a: 'The underlying technology is similar. The difference is consent and purpose: film and advertising work is done with the performer’s agreement and is finished by artists, while “deepfake” usually describes content made without permission to deceive.' },
        { q: 'Can an actor who has died be recreated?', a: 'Technically, yes, from existing footage and recordings. Legally and ethically it needs agreement from the family or estate and careful legal advice, and audiences may react strongly.' },
        { q: 'Is de-ageing only for big-budget films?', a: 'Machine-learning tools have made simpler de-ageing possible on smaller budgets, especially for short scenes. Long sequences of close-up dialogue remain expensive.' },
        { q: 'Does the actor need to be scanned?', a: 'For a full digital double, yes. For face replacement or de-ageing, good filmed reference in matching light may be enough.' },
    ],
};

export default article;
