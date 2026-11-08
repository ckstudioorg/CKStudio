/** Text of "DI and Colour Correction: Why the Grade Changes Everything". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    body: [
        { type: 'p', text: 'Two films can be shot on the same camera and still look nothing alike. Much of that difference is created in the DI — the digital intermediate — where colour is corrected, shaped and finished.' },
        { type: 'h2', text: 'What “DI” means today' },
        { type: 'p', text: 'The term comes from the days when film was scanned into a computer as an intermediate step before printing back to film. Today it simply means the final finishing stage: the locked edit is rebuilt (conformed) from the original high-quality camera files, then graded, checked and prepared for delivery.' },
        { type: 'h2', text: 'Correction vs grading' },
        { type: 'list', items: [
            'Colour correction fixes problems: balancing exposure and white balance, and matching shots so a scene feels continuous',
            'Colour grading creates the look: the mood, the palette and the visual identity of the film',
            'Secondary work adjusts specific areas — skin tones, skies, a costume, a product — without affecting the rest of the frame',
        ] },
        { type: 'h2', text: 'Why it matters for ads and films' },
        { type: 'p', text: 'For a feature, the grade supports the story: warm memories, cold tension, a world that feels real or heightened. For a commercial, it also protects the brand — the product colour, packaging and logo must look right on every screen. A good grade is often invisible to the audience, but they feel it.' },
        { type: 'quote', text: 'Colour is the part of the film the audience feels before they understand it.' },
        { type: 'h2', text: 'One film, many screens' },
        { type: 'p', text: 'Cinema projectors, TVs and phones all show colour differently. The DI is where the film is prepared for each: a cinema version for the DCP, and versions for TV, streaming and social platforms. Planning those deliverables at the start saves time and keeps the look consistent everywhere.' },
        { type: 'h2', text: 'Where AI helps' },
        { type: 'p', text: 'Modern grading tools include AI-assisted features such as automatic shot matching, smart masks that track a face or object, and noise reduction. They speed up the repetitive work so the colourist can spend more time on creative decisions. The final judgement is always made by a trained eye on a calibrated display.' },
        { type: 'p', text: 'DI and colour correction are part of CK Studio’s movie works and post-production services.' },
    ],
};

export default article;
