/** Text of "Offline vs Online Editing, Proxies and Conform Explained". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'Offline editing is the creative cut, usually made with small, fast proxy copies of the camera files. Once the cut is locked, the edit is exported as a list of decisions (an EDL, XML or AAF) and the conform rebuilds the same timeline from the full-quality camera originals. Online editing — also called finishing — then happens at full quality: colour grading, VFX shots dropped in, titles and final checks, while the sound team works from the locked cut. This keeps editing fast and the final film at maximum quality.',
    keyPoints: [
        'Offline = creative decisions; online = full-quality finishing.',
        'Proxies make editing fast on any computer.',
        'The conform links the cut back to camera originals.',
        'Picture lock is the handover point for VFX, grade and sound.',
    ],
    body: [
        { type: 'h2', text: 'Why not edit the camera files directly?' },
        { type: 'p', text: 'Cinema cameras record huge, high-quality files — often RAW or log footage meant for grading. Playing several streams of them smoothly needs powerful machines and fast storage. Proxies are small copies of the same clips with the same names and timecode, so the editor can work quickly on a laptop, and several people can share the project easily.' },
        { type: 'h2', text: 'What happens in the offline edit?' },
        { type: 'steps', items: [
            'Ingest and back up the camera cards — a common rule is three copies on two kinds of media, one kept off-site.',
            'Sync separately recorded sound to picture.',
            'Create proxies and organise footage by scene, take and camera.',
            'Build the assembly: every scene in script order.',
            'Shape the rough cut, then the fine cut, with notes from the director and client.',
            'Reach picture lock — no more changes to timing.',
        ] },
        { type: 'h2', text: 'What is a conform?' },
        { type: 'p', text: 'The conform is the bridge between the creative cut and the finished film. The locked edit is exported as an EDL, XML or AAF — a list of which clips are used, where, and for how long. The finishing system reads that list and relinks every shot to the original camera files using their names and timecode.' },
        { type: 'steps', items: [
            'Export the locked edit as an EDL, XML or AAF, plus a reference video of the offline cut.',
            'Relink to the camera originals by clip name and timecode.',
            'Check the conformed timeline against the reference, side by side, frame by frame.',
            'Rebuild anything that didn’t translate: speed changes, reframes, transitions and effects.',
        ] },
        { type: 'h2', text: 'Offline vs online at a glance' },
        {
            type: 'table',
            head: ['', 'Offline edit', 'Online / finishing'],
            rows: [
                ['Purpose', 'Story, performance, pace', 'Final image quality and delivery'],
                ['Media', 'Lightweight proxies', 'Full-quality camera originals'],
                ['Typical work', 'Cutting, temp music, temp titles and effects', 'Conform, grade, VFX, titles, quality checks'],
                ['Who', 'Editor and director', 'Online editor, colourist, VFX and finishing team'],
            ],
        },
        { type: 'h2', text: 'Where do grading, VFX and sound fit in?' },
        { type: 'list', items: [
            '**VFX:** shots are pulled from the camera originals after picture lock — see [the VFX pipeline](/blog/vfx-pipeline-explained/).',
            '**Grading (DI):** done on the conformed, full-quality timeline — see [DI and colour correction](/blog/di-and-colour-correction-explained/).',
            '**Sound:** the locked cut goes to the sound team as an AAF with a reference video — see [sound design and mixing](/blog/sound-design-and-mixing/).',
            '**Titles and credits:** designed for the final format — see [title sequence and end credits design](/blog/title-sequence-end-credits-design/).',
            '**Masters:** cinema needs a DCP and streaming needs file-based masters — see [what a DCP is](/blog/what-is-a-dcp-cinema-delivery-guide/) and [OTT delivery](/blog/ott-delivery-specs/).',
        ] },
        { type: 'h2', text: 'What causes conform problems?' },
        { type: 'list', items: [
            'Clips renamed after the proxies were made, so they no longer match.',
            'Missing or duplicated timecode across cameras.',
            'Mixed frame rates handled differently in offline and online.',
            'Speed ramps, nested sequences and effects that don’t export cleanly.',
            'Changes made after picture lock without telling the finishing team.',
        ] },
        { type: 'tip', text: 'Never rename camera files or folders after ingest. Matching names and timecode are what make the conform work.' },
        { type: 'p', text: 'For the bigger picture, read [what post-production includes](/blog/what-is-post-production/). CK Studio handles editing, conform, DI, VFX and mastering for films and ads — see our [movie post-production](/services/movie-post-production/) service.' },
    ],
    faqs: [
        { q: 'What is picture lock?', a: 'The point at which the edit’s timing is final. After picture lock, VFX, grading, sound and titles can be finished without the timeline changing under them.' },
        { q: 'What is the difference between an EDL, XML and AAF?', a: 'All three describe an edit for another system. An EDL is a simple list, mainly for one video track; XML and AAF carry more detail, such as multiple tracks, effects and audio.' },
        { q: 'Do short ads need an offline and online edit?', a: 'Not always. Many short ads are edited directly in high quality. Projects with RAW footage, many cameras, VFX or a separate grading and sound team usually benefit from a proper offline–online workflow.' },
        { q: 'What is a proxy file?', a: 'A smaller, easier-to-play copy of a camera clip with the same name and timecode, used for editing and then replaced by the original at the conform.' },
    ],
};

export default article;
