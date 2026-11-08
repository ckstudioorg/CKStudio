/** Text of "Restoring and Upscaling Old Footage with AI". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'AI restoration tools can clean noise and grain, remove scratches and dust, steady shaky footage, sharpen and upscale low-resolution video to HD or 4K, smooth frame rates and help restore faded colour. The best results come from starting with the highest-quality copy available, running each step separately with a person checking every shot, and finishing with a proper colour grade. AI can also invent detail that was never there — faces and text are the usual giveaways — so restoration still needs a skilled editor’s eye, and you need the rights to the footage you restore.',
    keyPoints: [
        'Start from the best source you can find — scan film if it exists.',
        'Restore in steps: clean, stabilise, upscale, then grade.',
        'Watch faces, text and fine patterns for AI artefacts.',
        'Keep the original files; never overwrite them.',
    ],
    body: [
        { type: 'h2', text: 'What can AI restoration do?' },
        {
            type: 'table',
            head: ['Problem', 'What AI does', 'Watch out for'],
            rows: [
                ['Noise and heavy grain', 'Removes noise while keeping edges', 'Over-smoothing that makes skin look plastic'],
                ['Dust, scratches, flicker', 'Detects and repairs damaged frames', 'Removing real details, such as rain or sparks'],
                ['Low resolution', 'Upscales SD footage to HD or 4K with added detail', 'Invented detail on faces and text'],
                ['Interlacing (old TV footage)', 'Converts to clean progressive frames', 'Jagged edges on fast motion'],
                ['Low or odd frame rates', 'Creates in-between frames for smoother motion', 'Warping when objects cross each other'],
                ['Faded or missing colour', 'Restores colour balance or suggests colour', 'Inaccurate colours on costumes, skin and brands'],
                ['Shaky handheld footage', 'Stabilises the picture', 'Cropping and wobble at the edges'],
            ],
        },
        { type: 'h2', text: 'Where does AI restoration go wrong?' },
        { type: 'p', text: 'AI fills in what it cannot see by guessing what usually appears there. On landscapes that guess is often convincing; on faces, hands, handwriting, signboards and logos it can produce features or letters that were never there. A restored archive that changes a person’s face or a brand’s logo is worse than the original, so every shot needs checking at full size before it is used.' },
        { type: 'h2', text: 'What is the right restoration workflow?' },
        { type: 'steps', items: [
            'Find the best source: original film negatives or prints (scanned), master tapes, or the earliest digital copies.',
            'Make a working copy and store the original safely.',
            'Repair damage first: dust, scratches, flicker and missing frames.',
            'Deal with interlacing and frame rate.',
            'Reduce noise carefully, keeping some natural grain.',
            'Upscale to the target resolution.',
            'Restore and grade colour in a proper grading session — see [DI and colour correction](/blog/di-and-colour-correction-explained/).',
            'Review every shot at full size, and fix or roll back anything that looks invented.',
        ] },
        { type: 'h2', text: 'What is it used for?' },
        { type: 'list', items: [
            'Re-releasing older films on streaming platforms or in cinemas.',
            'Using archive footage in anniversary films and brand histories.',
            'Reviving old ads and songs for nostalgia campaigns.',
            'Preserving family videos, weddings and events.',
            'Matching archive clips to new footage in documentaries and corporate films.',
        ] },
        { type: 'h2', text: 'Does restored footage still need human work?' },
        { type: 'p', text: 'Yes. AI does the repetitive frame-by-frame work quickly, but people choose the settings shot by shot, fix what the tools get wrong, rebuild badly damaged frames with [VFX techniques](/blog/vfx-pipeline-explained/) and grade the final look. The sound often needs restoration too: clicks, hiss and hum can be cleaned in the [sound mix](/blog/sound-design-and-mixing/).' },
        { type: 'h2', text: 'Do you need permission to restore old footage?' },
        { type: 'p', text: 'You need the rights to use it. Owning a copy of a film or song doesn’t mean owning the right to re-release it, so check who holds the rights before restoring archive material for any public use. Your own family and company videos are usually fine to restore for your own use.' },
        { type: 'tip', text: 'Test restoration settings on the hardest shots first — faces in close-up, text and fast motion. If those look right, the rest of the film usually will.' },
        { type: 'p', text: 'AI is powerful in post-production when guided by people — see what [AI video generation](/blog/ai-video-generation-for-brands/) can do today. CK Studio restores, upscales and remasters footage for films, brands and archives — see our [movie post-production](/services/movie-post-production/) service.' },
    ],
    faqs: [
        { q: 'Can AI upscale old SD video to 4K?', a: 'It can produce a 4K file with more apparent detail than simple resizing. Results depend on the source quality; very blurry or heavily compressed footage improves less and needs careful checking.' },
        { q: 'Does AI restoration work on old Telugu film prints?', a: 'Yes, on scans of prints and negatives, AI tools can help with dust, scratches, flicker, noise and colour fading. The better the scan, the better the result.' },
        { q: 'Will restoration change how the footage looks?', a: 'It should make it cleaner and sharper without changing its character. Good restoration keeps some natural grain and the original colours, rather than making old footage look artificially new.' },
        { q: 'How long does AI restoration take?', a: 'It depends on the length, the damage and the target quality. Processing is faster than manual frame-by-frame work, but reviewing every shot and fixing problems still takes time.' },
    ],
};

export default article;
