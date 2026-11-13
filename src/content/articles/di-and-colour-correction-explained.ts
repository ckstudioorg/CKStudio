/** Text of "DI and Colour Correction: Why the Grade Changes Everything". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'DI, short for digital intermediate, is the finishing stage of a film or ad: the locked edit is rebuilt from the original camera files, then colour-corrected, graded and prepared for delivery. Colour correction fixes exposure and balance and makes shots match; colour grading creates the look and mood. The DI also produces the separate versions needed for cinema, television, streaming and phones, each of which shows colour differently.',
    keyPoints: [
        'Correction fixes problems; grading creates the look.',
        'The grade starts only after the edit is locked.',
        'For ads, the grade protects product and brand colours.',
        'Plan every delivery version at the start of the DI.',
    ],
    body: [
        { type: 'p', text: 'Two films can be shot on the same camera and still look nothing alike. Much of that difference is created in the DI — the digital intermediate — where colour is corrected, shaped and finished.' },
        { type: 'h2', text: 'What “DI” means today' },
        { type: 'p', text: 'The term comes from the days when film was scanned into a computer as an intermediate step before printing back to film. Today it simply means the final finishing stage: the locked edit is rebuilt (conformed) from the original high-quality camera files, then graded, checked and prepared for delivery.' },
        { type: 'p', text: 'How the edit is rebuilt is explained in [offline vs online editing, proxies and conform](/blog/offline-online-editing-conform/), and where the DI sits among the other stages in [what is post-production?](/blog/what-is-post-production/).' },
        { type: 'h2', text: 'Correction vs grading' },
        { type: 'list', items: [
            'Colour correction fixes problems: balancing exposure and white balance, and matching shots so a scene feels continuous',
            'Colour grading creates the look: the mood, the palette and the visual identity of the film',
            'Secondary work adjusts specific areas — skin tones, skies, a costume, a product — without affecting the rest of the frame',
        ] },
        { type: 'table', head: ['', 'Colour correction', 'Colour grading'], rows: [
            ['Aim', 'Make the picture accurate and consistent', 'Give the picture a style and feeling'],
            ['Typical work', 'Exposure, white balance, matching cameras and shots', 'Palette, contrast, warmth, separation of subject and background'],
            ['When', 'First', 'After correction'],
            ['Judged by', 'Does it look right and continuous?', 'Does it serve the story or the brand?'],
        ] },
        { type: 'h2', text: 'How does a DI session run?' },
        { type: 'steps', items: [
            'Conform: the locked edit is matched to the original camera files.',
            'Set-up: footage is converted from its log or RAW format into a working colour space; see [log footage and LUTs](/blog/log-footage-and-luts-explained/).',
            'Balance: every shot is corrected and matched within its scene.',
            'Look: the director, cinematographer and colourist set the look scene by scene.',
            'Secondaries: faces, skies, products and problem areas are refined.',
            'VFX and titles: finished shots and graphics are dropped in and matched.',
            'Review: the film is watched through on a calibrated screen, ideally a projector for cinema work.',
            'Versions: masters are made for each kind of screen.',
        ] },
        { type: 'h2', text: 'Why it matters for ads and films' },
        { type: 'p', text: 'For a feature, the grade supports the story: warm memories, cold tension, a world that feels real or heightened. For a commercial, it also protects the brand — the product colour, packaging and logo must look right on every screen. A good grade is often invisible to the audience, but they feel it.' },
        { type: 'quote', text: 'Colour is the part of the film the audience feels before they understand it.' },
        { type: 'h2', text: 'One film, many screens' },
        { type: 'p', text: 'Cinema projectors, TVs and phones all show colour differently. The DI is where the film is prepared for each: a cinema version for the DCP, and versions for TV, streaming and social platforms. Planning those deliverables at the start saves time and keeps the look consistent everywhere.' },
        { type: 'p', text: 'The cinema version goes into the [DCP](/blog/what-is-a-dcp-cinema-delivery-guide/); streaming platforms publish their own requirements, covered in [OTT delivery](/blog/ott-delivery-specs/).' },
        { type: 'h2', text: 'Where AI helps' },
        { type: 'p', text: 'Modern grading tools include AI-assisted features such as automatic shot matching, smart masks that track a face or object, and noise reduction. They speed up the repetitive work so the colourist can spend more time on creative decisions. The final judgement is always made by a trained eye on a calibrated display.' },
        { type: 'p', text: 'More on this in [AI in post-production](/blog/ai-in-post-production/).' },
        { type: 'h2', text: 'What should you bring to the grade?' },
        { type: 'list', items: [
            'A locked edit, with the list of original camera files',
            'Reference images or films for the look',
            'The camera and log settings used on the shoot',
            'Brand colour values and a physical product or pack, for ads',
            'The full list of delivery versions and their specifications',
        ] },
        { type: 'p', text: 'DI and colour correction are part of CK Studio’s movie works and [post-production services](/services/movie-post-production/).' },
        { type: 'tip', text: 'Never approve a grade on a phone or laptop alone. Watch it on the calibrated screen in the grading room, then check it on a phone as a second opinion.' },
    ],
    faqs: [
        { q: 'Is DI only for feature films?', a: 'No. The same finishing stage applies to ads, corporate films, music videos and web series. For films, “DI” is the common name; for ads it is often simply called the grade.' },
        { q: 'Can colour grading fix badly shot footage?', a: 'It can improve exposure, balance and consistency a great deal, especially with log or RAW footage. It cannot restore detail that was never recorded, such as blown-out highlights or very noisy shadows.' },
        { q: 'How long does a grade take?', a: 'It depends on the length of the film, the number of shots, the quality of the footage and how many versions are needed. A short ad may take a day or two; a feature takes considerably longer.' },
        { q: 'Should the cinematographer attend the DI?', a: 'Yes, where possible. The look was begun on set with lighting and lenses, and the cinematographer and director complete it with the colourist.' },
    ],
};

export default article;
