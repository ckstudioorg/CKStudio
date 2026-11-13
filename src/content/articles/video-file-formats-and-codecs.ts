/** Text of "Video File Formats and Codecs: MP4, MOV, ProRes, H.264 and H.265 Explained". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'A video file has two parts: the container (the file type, such as MP4 or MOV) and the codec (the method used to compress the picture, such as H.264, H.265 or ProRes). For sharing and uploading, an MP4 with H.264 plays almost everywhere. H.265 gives similar quality in a smaller file but is less widely supported. ProRes and DNxHR are large, high-quality formats used for editing, grading and master files. Ask your studio for both a master and delivery copies.',
    keyPoints: [
        'Container = the box; codec = how the video inside is compressed.',
        'H.264 MP4 is the safest choice for sharing and social media.',
        'ProRes or DNxHR for masters and anything that will be edited again.',
        'Re-compressing a compressed file always loses quality; keep the master.',
    ],
    body: [
        { type: 'h2', text: 'What is the difference between a container and a codec?' },
        { type: 'p', text: 'The container is the wrapper that holds the video, audio and extra information such as subtitles and timecode. The codec is the way the video is squeezed to a manageable size. The same container can hold different codecs: a .mov file might contain small H.264 video or very large ProRes video. That is why two files with the same ending can behave completely differently.' },
        { type: 'table', head: ['Container', 'Ending', 'Commonly holds', 'Used for'], rows: [
            ['MP4', '.mp4', 'H.264, H.265', 'Sharing, web, social media'],
            ['QuickTime', '.mov', 'ProRes, H.264, H.265', 'Editing, masters, graphics with transparency'],
            ['MXF', '.mxf', 'DNxHD/HR, XAVC, JPEG 2000', 'Broadcast, cameras, cinema packages'],
        ] },
        { type: 'h2', text: 'Which codec should you use for what?' },
        { type: 'table', head: ['Codec', 'File size', 'Quality', 'Best for'], rows: [
            ['H.264 (AVC)', 'Small', 'Good', 'Uploads, WhatsApp, websites, client review copies'],
            ['H.265 (HEVC)', 'Smaller still', 'Good to very good', '4K and HDR delivery, phone recording; check the player supports it'],
            ['ProRes 422 / 422 HQ', 'Large', 'Very high', 'Editing, grading, master files'],
            ['ProRes 4444', 'Very large', 'Highest; supports transparency', 'VFX, graphics, logo animations with a transparent background'],
            ['DNxHD / DNxHR', 'Large', 'Very high', 'The same jobs as ProRes, common in Avid and Windows workflows'],
            ['Camera RAW formats', 'Largest', 'Sensor data, most flexible', 'Shooting high-end ads and films'],
        ] },
        { type: 'p', text: 'Delivery formats (H.264, H.265) compress heavily by storing only the changes between frames. Editing formats (ProRes, DNxHR) store every frame fully, so they are bigger but smooth to edit and hold up through grading.' },
        { type: 'h2', text: 'What do bitrate, bit depth and 4:2:2 mean?' },
        { type: 'list', items: [
            '**Bitrate** — how much data is used per second. Higher means better quality and a larger file.',
            '**Bit depth** — how many shades each colour can have. 8-bit is normal for delivery; 10-bit or more gives smoother skies and more room for grading.',
            '**Chroma subsampling (4:2:0, 4:2:2, 4:4:4)** — how much colour detail is kept. 4:2:0 is standard for delivery; 4:2:2 and 4:4:4 are better for grading and green screen.',
            '**Resolution and frame rate** — the picture size (HD, 4K) and frames per second; see the [video ad sizes cheat sheet](/blog/video-ad-sizes-aspect-ratios-cheat-sheet/).',
        ] },
        { type: 'h2', text: 'Which file should you ask your studio for?' },
        { type: 'table', head: ['You need it for', 'Ask for'], rows: [
            ['Instagram, YouTube, Facebook, LinkedIn', 'H.264 MP4 at the platform’s recommended size'],
            ['WhatsApp sharing', 'A smaller H.264 MP4 made for sharing'],
            ['Your website', 'A web-optimised MP4, plus a poster image'],
            ['Television', 'The channel’s own specification; it varies by broadcaster'],
            ['Cinema', 'A DCP; see [what is a DCP?](/blog/what-is-a-dcp-cinema-delivery-guide/)'],
            ['Streaming platforms', 'The platform’s delivery specification; see [OTT delivery](/blog/ott-delivery-specs/)'],
            ['Future re-edits and archive', 'A ProRes or DNxHR master, plus a version without text and separate audio'],
            ['An LED screen or event', 'Whatever the screen operator specifies; ask them first'],
        ] },
        { type: 'h2', text: 'What is a master file and why keep it?' },
        { type: 'p', text: 'The master is the highest-quality finished version, from which every delivery copy is made. Alongside it, ask for a “textless” version (no titles or subtitles) and separate audio tracks for dialogue, music and effects. With these you can make new language versions, new sizes or a shorter cut years later without starting again. Store them safely; see [backing up footage with the 3-2-1 rule](/blog/footage-backup-3-2-1-rule/).' },
        { type: 'h2', text: 'What are the common mistakes?' },
        { type: 'list', items: [
            '**Using a WhatsApp copy as the source** — the app compresses video heavily when sent normally.',
            '**Re-exporting an export** — each generation loses quality. Go back to the master.',
            '**Uploading at a very low bitrate** — platforms compress again, so start with good quality.',
            '**Sending ProRes to someone who only needs to watch** — huge and may not play on their device.',
            '**An H.265 file on an old television or projector** — it may not play; test first.',
            '**Changing the file ending by renaming** — this does not convert anything.',
            '**Not testing on the real screen** before an event.',
        ] },
        { type: 'tip', text: 'Name files clearly: project, version, size, language and date. “Final_final2.mp4” causes real mistakes when the wrong version is uploaded.' },
    ],
    faqs: [
        { q: 'Is MP4 or MOV better?', a: 'Neither is better by itself; they are containers. What matters is the codec inside. For sharing, an MP4 with H.264 is the most compatible. For editing and masters, a MOV with ProRes is common.' },
        { q: 'Why is my ProRes file so big?', a: 'ProRes stores every frame with light compression to keep quality and edit smoothly. A few minutes can be several gigabytes. That is normal for a master file.' },
        { q: 'Should I upload H.264 or H.265 to social media?', a: 'H.264 is the safest and is accepted everywhere. Platforms re-compress every upload, so quality depends more on giving them a clean, high-bitrate file in the right size.' },
        { q: 'Which format keeps a transparent background?', a: 'ProRes 4444 in a MOV file is the usual choice for logo animations and graphics with transparency; see our [logo animation guide](/blog/logo-animation-guide/).' },
    ],
};

export default article;
