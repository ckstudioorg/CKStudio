/** Text of "Log Footage and LUTs Explained: Why Raw Footage Looks Flat". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'Log is a way cameras record a scene so that more detail is kept in the brightest and darkest areas. The price is that the footage looks grey and washed out until it is corrected. A LUT (look-up table) is a small file that converts those flat colours into normal-looking ones, or applies a creative look. Log gives the colourist more to work with; a LUT is a starting point for the grade, not a replacement for it.',
    keyPoints: [
        'Flat, grey footage is normal for log; nothing is wrong with the camera.',
        'A conversion LUT makes log look normal; a creative LUT adds a style.',
        'The LUT must match the camera and its log setting.',
        'Log needs correct exposure and a higher-quality recording format.',
    ],
    body: [
        { type: 'h2', text: 'Why does log footage look flat?' },
        { type: 'p', text: 'A real scene can contain a far greater range of brightness than a normal video file can store: a bright sky, a face in shade and a dark doorway in the same frame. A standard picture profile makes the image look right immediately but throws away detail at both ends. A log profile squeezes the whole range into the file, lifting the shadows and holding back the highlights. Seen as it is, the result has low contrast and pale colours. The detail is all there, waiting to be spread out again in the grade.' },
        { type: 'h2', text: 'How do log, RAW and standard video compare?' },
        { type: 'table', head: ['', 'Standard (Rec.709)', 'Log', 'RAW'], rows: [
            ['Looks finished out of camera', 'Yes', 'No, flat and grey', 'No, needs processing'],
            ['Room to adjust later', 'Little', 'A lot', 'The most'],
            ['File size', 'Smallest', 'Moderate', 'Largest'],
            ['Needs grading', 'Optional', 'Yes', 'Yes'],
            ['Best for', 'Fast turnarounds, events, news', 'Ads, films, branded content', 'High-end ads, films, heavy VFX'],
        ] },
        { type: 'p', text: 'Each camera maker has its own log curve, such as S-Log3 (Sony), C-Log (Canon), V-Log (Panasonic), F-Log (Fujifilm) and LogC (ARRI).' },
        { type: 'h2', text: 'What is a LUT?' },
        { type: 'p', text: 'A look-up table is a list of instructions: “when you see this colour, show that colour instead”. It is commonly shared as a small .cube file. A LUT does not understand the picture; it applies the same change to every frame.' },
        { type: 'table', head: ['Type', 'What it does', 'Where it is used'], rows: [
            ['Conversion (technical) LUT', 'Turns a camera’s log into normal contrast and colour', 'First step of a grade; monitors on set'],
            ['Creative (look) LUT', 'Adds a style: warm, cool, film-like', 'As a starting look, adjusted by the colourist'],
            ['Monitoring LUT', 'Shows a graded-looking picture on set while recording log', 'Director’s and client’s monitors'],
            ['Show LUT', 'A look designed for one film and used throughout', 'Features and series, from set to final grade'],
        ] },
        { type: 'h2', text: 'How are log and LUTs used from shoot to grade?' },
        { type: 'steps', items: [
            '**Choose the camera’s log setting** and note it.',
            '**Expose correctly** — follow the camera maker’s guidance; badly underexposed log becomes noisy.',
            '**Monitor through a LUT** so the director and client see a normal picture.',
            '**Record in a strong format** — 10-bit or better; see [video file formats and codecs](/blog/video-file-formats-and-codecs/).',
            '**Edit** with the conversion LUT applied for viewing, or with proxies that have it built in.',
            '**Grade from the log original** — the colourist balances every shot, then builds the look.',
            '**Export** in the colour standard each platform expects.',
        ] },
        { type: 'p', text: 'The grading stage itself is explained in [DI and colour correction](/blog/di-and-colour-correction-explained/), and how the edit returns to original files in [offline vs online editing](/blog/offline-online-editing-conform/).' },
        { type: 'h2', text: 'What are the common mistakes?' },
        { type: 'list', items: [
            '**The wrong LUT for the camera** — a Sony LUT on Canon footage gives strange colours.',
            '**A LUT on footage that is not log** — harsh contrast and crushed blacks.',
            '**Treating a LUT as the grade** — shots still need individual balancing first.',
            '**Stacking LUTs** — two conversions on top of each other.',
            '**Recording log in 8-bit** — stretching it later causes banding in skies and walls.',
            '**Baking the LUT into the recording** by accident — the flexibility is lost.',
            '**Mixing cameras without a plan** — each needs its own conversion before they will match.',
        ] },
        { type: 'h2', text: 'When is log not worth it?' },
        { type: 'p', text: 'If there is no time or budget for grading, if the video must go out within hours, or if the camera only records 8-bit, a good standard profile often gives a better result. Log is a tool for projects that will be graded. For ads and films that will, it is the normal choice and part of our [movie post-production](/services/movie-post-production/) workflow.' },
        { type: 'h2', text: 'What should clients know when viewing rushes?' },
        { type: 'p', text: 'If you are sent ungraded footage or an early edit, it may look dull, pale or slightly green. That is expected. Judge performance, framing and story at this stage; colour comes later. If it helps, ask the editor to apply a viewing LUT to review copies.' },
        { type: 'tip', text: 'Write the camera, the log setting and the monitoring LUT on the camera report each day. It saves the colourist from guessing months later.' },
    ],
    faqs: [
        { q: 'Is a LUT the same as a filter?', a: 'It is similar in effect but more precise. A LUT maps specific input colours to output colours, usually designed for one camera’s log. A social media filter is a general look applied to any picture.' },
        { q: 'Can a LUT replace colour grading?', a: 'No. It applies one fixed change to every shot. Grading balances each shot, matches them to each other and then shapes the look, often starting from a LUT.' },
        { q: 'Does shooting in log make the picture better?', a: 'It keeps more information, which allows a better result after grading. Without grading, or if exposed badly, log can look worse than a standard profile.' },
        { q: 'Do phones shoot in log?', a: 'Some recent phones offer a log recording mode in their camera settings. It is useful if the footage will be graded alongside professional cameras; see [shooting good video on your phone](/blog/shoot-video-on-your-phone/).' },
    ],
};

export default article;
