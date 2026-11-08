/** Text of "OTT Delivery: What Streaming Platforms Ask For". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'Every OTT platform publishes its own delivery specification, but the list is similar everywhere: a high-quality picture master in the requested format (often a mezzanine file such as Apple ProRes, or an IMF package for platforms that require it), stereo and surround audio mixes plus separate stems and an M&E track, subtitle and caption files that follow the platform’s timed-text rules, key art and stills, metadata, and paperwork such as music cue sheets and rights documents. Content then goes through the platform’s quality control (QC), so plan time for fixes before your release date.',
    keyPoints: [
        'Get the platform’s current delivery spec in writing before finishing.',
        'Picture, audio, subtitles, artwork, metadata and paperwork all count.',
        'QC rejects are common — budget time and money for fixes.',
        'Keep textless versions and an M&E track for future versions.',
    ],
    body: [
        { type: 'h2', text: 'What does an OTT delivery package contain?' },
        {
            type: 'table',
            head: ['Item', 'What it is', 'Notes'],
            rows: [
                ['Picture master', 'The finished film in high quality', 'Format, resolution, frame rate and colour as per the spec'],
                ['Textless elements', 'Shots with titles and on-screen text removed', 'Lets the platform make language versions'],
                ['Audio mixes', 'Stereo, plus 5.1 surround if requested', 'Must meet the platform’s loudness target'],
                ['Stems and M&E', 'Dialogue, music and effects separately; music and effects without dialogue', 'Needed for dubbing and re-edits'],
                ['Subtitles and captions', 'Timed-text files per language, including SDH', 'Must follow the platform’s style guide'],
                ['Artwork', 'Key art, stills, logo and title treatment', 'Often several sizes and textless versions'],
                ['Metadata', 'Title, synopses, cast and crew, genre, age-rating details', 'Usually entered on the platform’s portal'],
                ['Trailer', 'A promo cut, if agreed', 'Delivered with its own audio and subtitles'],
                ['Paperwork', 'Music cue sheets, licences, chain of title, credits', 'Proves you have the right to stream every element'],
            ],
        },
        { type: 'h2', text: 'What are the audio requirements?' },
        { type: 'p', text: 'Platforms set loudness and peak limits. Netflix’s published specification for its originals, for example, asks for an average of −27 LKFS ±2 LU measured on dialogue, with true peaks no higher than −2 dBTP. Other platforms publish their own numbers, so the mix is made to the spec you are given — see [sound design and mixing](/blog/sound-design-and-mixing/).' },
        { type: 'h2', text: 'What rules do subtitles follow?' },
        { type: 'p', text: 'Platforms publish timed-text style guides for each language, covering line length, reading speed, positioning and formatting. Netflix’s English guide, for example, allows at most two lines of 42 characters and about 20 characters per second for adult programmes. Read our guide to [subtitles and captions](/blog/subtitles-and-captions-guide/).' },
        { type: 'h2', text: 'What is QC and why do deliveries fail?' },
        { type: 'p', text: 'Quality control checks every file against the spec, by machine and by eye. Common reasons for rejection:' },
        { type: 'list', items: [
            'Flash frames, glitches or dead pixels in the picture.',
            'Audio out of sync, clipped peaks or loudness outside the target.',
            'Wrong frame rate, resolution or colour settings.',
            'Missing or mistimed subtitles, or text overlapping burned-in titles.',
            'Textless elements that don’t match the master.',
            'Spelling mistakes in credits, or missing licences and cue sheets.',
        ] },
        { type: 'h2', text: 'How is OTT delivery different from a cinema release?' },
        { type: 'p', text: 'Cinemas play a DCP — see [what a DCP is](/blog/what-is-a-dcp-cinema-delivery-guide/) — and theatrical releases in India need CBFC certification ([CBFC certification explained](/blog/cbfc-certification-guide/)). Streaming platforms receive file-based masters and handle age classification within their own process, telling you what information they need.' },
        { type: 'h2', text: 'How long should you allow for delivery?' },
        { type: 'p', text: 'Allow several weeks between finishing and the platform’s deadline: preparing every element takes time, QC can take days, and fixes may go through more than one round. Plan the delivery as part of [post-production](/blog/what-is-post-production/), not after it.' },
        { type: 'tip', text: 'Ask the platform for its current delivery specification in writing before the online edit begins. Specs change, and finishing to an old one means redoing the work.' },
        { type: 'p', text: 'CK Studio prepares masters, mixes, subtitles and deliverables for cinema and OTT — see our [movie post-production](/services/movie-post-production/) service and the [offline and online editing workflow](/blog/offline-online-editing-conform/).' },
    ],
    faqs: [
        { q: 'What is a mezzanine file?', a: 'A high-quality, lightly compressed master (such as Apple ProRes) from which platforms make their own streaming versions. It is much larger than the files viewers stream.' },
        { q: 'What is IMF?', a: 'Interoperable Master Format: a standard package that holds the picture, sound, subtitles and versions as separate components, so new versions can be made without re-delivering everything. Some platforms require it.' },
        { q: 'What are textless elements?', a: 'Versions of shots with all titles and on-screen text removed. Platforms use them to add translated text for other languages.' },
        { q: 'Do OTT films in India need a CBFC certificate?', a: 'CBFC certification is for theatrical releases. Streaming platforms classify content by age within their own process and tell you what information they need from you.' },
    ],
    sources: [
        { label: 'Netflix — Sound Mix Specifications and Best Practices', url: 'https://partnerhelp.netflixstudios.com/hc/en-us/articles/360001794307' },
        { label: 'Netflix — English (USA) Timed Text Style Guide', url: 'https://partnerhelp.netflixstudios.com/hc/en-us/articles/217350977' },
        { label: 'Netflix — Timed Text Style Guide: General Requirements', url: 'https://partnerhelp.netflixstudios.com/hc/en-us/articles/215758617' },
    ],
};

export default article;
