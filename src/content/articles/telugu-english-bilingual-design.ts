/** Text of "Telugu–English Design: Fonts, Layout and Common Mistakes". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'Designing in Telugu and English together works when each language is treated as a first-class part of the layout. Use a Unicode Telugu font that pairs with your English typeface in weight and mood, set Telugu slightly larger with more line spacing because its letters are taller and have marks above and below, write the Telugu fresh instead of translating word for word, and have a Telugu reader proof the final artwork, since some software breaks the letter shapes.',
    keyPoints: [
        'Telugu needs more height and line spacing than English at the same size.',
        'Use Unicode fonts; old non-Unicode fonts cause garbled text.',
        'Software can break conjuncts and vowel signs: always proof the exported file.',
        'Write Telugu copy for Telugu readers; do not transliterate English.',
    ],
    body: [
        { type: 'h2', text: 'Why is Telugu typography different?' },
        { type: 'list', items: [
            '**Round, wide letterforms** — a line of Telugu takes a different amount of space from the same message in English.',
            '**Marks above and below** — vowel signs and stacked consonants extend upward and downward, so lines need more room.',
            '**Conjuncts** — two or more consonants combine into one shape. Software must build these correctly.',
            '**No capital letters** — emphasis comes from weight, size and colour.',
            '**Fewer typefaces** — the range of Telugu fonts is smaller than for English, though it has grown.',
        ] },
        { type: 'h2', text: 'How do you choose and pair fonts?' },
        { type: 'table', head: ['Consider', 'What to look for'], rows: [
            ['Unicode', 'A Unicode font, so text can be typed, searched, edited and displayed on any device'],
            ['Weights', 'At least regular and bold; more if the brand uses several'],
            ['Match with the English face', 'Similar stroke thickness, contrast and mood (modern with modern, traditional with traditional)'],
            ['Legibility at small sizes', 'Open shapes and clear vowel signs for packaging and captions'],
            ['Licence', 'Permission for your use: print, web, video, app, logo'],
            ['Font families covering both scripts', 'Some type families are designed with matching Latin and Telugu, which makes pairing easier'],
        ] },
        { type: 'p', text: 'Many well-made Telugu fonts are available under open licences, including through Google Fonts, and others are sold by type foundries. Always read the licence. Record the chosen fonts in your [brand guidelines](/blog/brand-guidelines-document/).' },
        { type: 'h2', text: 'How should the two languages share a layout?' },
        { type: 'list', items: [
            '**Decide the lead language** for each piece, based on who will read it.',
            '**Match by eye, not by number** — Telugu at the same point size often looks smaller or lighter; adjust until they look equal.',
            '**Give Telugu more line spacing** so marks do not collide.',
            '**Keep the two separate but related** — side by side, stacked, or divided by colour; avoid mixing scripts mid-line except for brand names.',
            '**Allow for different lengths** — design text areas that can grow.',
            '**Keep hierarchy consistent** — if the English headline is bold, the Telugu headline is too.',
            '**Align carefully** — line up the two blocks by eye, since the scripts sit differently on the line.',
        ] },
        { type: 'h2', text: 'How do you write the Telugu?' },
        { type: 'list', items: [
            '**Write it fresh** — a line that works in English often needs a different idea in Telugu.',
            '**Use everyday spoken Telugu** for ads; formal written Telugu suits notices and official text.',
            '**Keep common English words where people do** — “offer”, “booking”, “free delivery” are widely used; decide whether to write them in Telugu script or English.',
            '**Be consistent with brand names** — one agreed Telugu spelling.',
            '**Mind regional usage** — words differ between Telangana and Andhra Pradesh.',
        ] },
        { type: 'p', text: 'More on language and culture in [making ads for Telugu audiences](/blog/telugu-ads-for-telugu-audiences/).' },
        { type: 'h2', text: 'What goes wrong technically?' },
        { type: 'table', head: ['Problem', 'Cause', 'Fix'], rows: [
            ['Broken or separated letters', 'Software not set up for Indian scripts', 'Turn on the app’s Indic or complex-script text setting; use current software'],
            ['Boxes or question marks', 'Font missing on the other computer', 'Embed fonts in the PDF or convert to outlines'],
            ['Garbled text after copying', 'Old non-Unicode font', 'Retype in Unicode'],
            ['Clipped marks at the top or bottom', 'Text box or line spacing too tight', 'Increase line spacing and padding'],
            ['Vowel signs in the wrong place in video titles', 'Titling tool lacks support', 'Test first, or bring the text in as artwork'],
            ['Wrong line breaks', 'Automatic breaking in the middle of a word', 'Break lines by hand'],
        ] },
        { type: 'p', text: 'For printing, see [print-ready files](/blog/print-ready-files-bleed-cmyk-resolution/). For video, [subtitles and captions](/blog/subtitles-and-captions-guide/) covers Telugu subtitle display.' },
        { type: 'h2', text: 'What about bilingual logos and signboards?' },
        { type: 'list', items: [
            '**Design the Telugu version of the logo deliberately** — drawn to match the English lettering, not typed in a default font.',
            '**Check both at small sizes** — Telugu detail fills in sooner.',
            '**Signboards** — state and local rules may require Telugu on shop and establishment name boards, with conditions on its prominence. Check the current requirement for your location.',
            '**Hoardings** — few words, very large; see [hoarding and outdoor ad design](/blog/hoarding-and-outdoor-ad-design/).',
            '**Packaging** — mandatory label information has its own language rules; see [packaging and label design](/blog/packaging-design-and-label-rules-india/).',
        ] },
        { type: 'h2', text: 'What is a good checking routine?' },
        { type: 'steps', items: [
            '**Type the Telugu in Unicode** from an approved text document.',
            '**Set it in the design** with the right software settings.',
            '**Export the final file** — PDF, image or video.',
            '**Have a Telugu reader check the exported file**, not the working file.',
            '**Check on a phone** for digital pieces.',
            '**Keep the approved text** for reuse, so spellings stay consistent.',
        ] },
        { type: 'p', text: 'Bilingual brand work of this kind is part of our [design and branding](/services/design-and-branding/) service.' },
        { type: 'tip', text: 'Never approve Telugu artwork from a screenshot of the design software. Errors appear at export, so approve the exact file that will be printed or posted.' },
    ],
    faqs: [
        { q: 'Which Telugu fonts are free to use commercially?', a: 'Several Telugu typefaces are offered under open licences, for example through Google Fonts. Licences differ, so read the terms for each font and each use before relying on it.' },
        { q: 'Why does Telugu text break in my design app?', a: 'The app or its text setting does not support the shaping rules of Indian scripts, or an old non-Unicode font is in use. Enable the app’s Indic or complex-script option, update the software and use a Unicode font.' },
        { q: 'Should Telugu be bigger than English in a design?', a: 'Often slightly, so the two look equal in weight and remain readable. Judge by eye at the real size, and add line spacing for the marks above and below.' },
        { q: 'Can AI tools produce Telugu text in images?', a: 'AI image generators often draw incorrect or meaningless Telugu letters. Generate the picture without text and add the Telugu in design software, then proofread it.' },
    ],
};

export default article;
