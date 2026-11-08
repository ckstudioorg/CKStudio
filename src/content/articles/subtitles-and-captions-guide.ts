/** Text of "Subtitles and Captions: Formats, Styles and Languages". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'Subtitles translate or transcribe dialogue for viewers who can hear the audio; captions and SDH (subtitles for the deaf and hard of hearing) also describe important sounds such as music, laughter or a door slam. They are either burned into the picture — always visible, which suits social media — or delivered as separate closed files such as SRT or WebVTT that viewers switch on, which YouTube and OTT platforms prefer. Good subtitles are short and timed for comfortable reading: Netflix’s English guide, for example, allows at most two lines of 42 characters and about 20 characters per second for adult programmes.',
    keyPoints: [
        'Burn subtitles into social media cuts; upload closed files elsewhere.',
        'Keep to two short lines, timed for comfortable reading.',
        'Translate meaning, not words — and proofread every name.',
        'Check Telugu and Hindi fonts render correctly before export.',
    ],
    body: [
        { type: 'h2', text: 'Subtitles, captions and SDH: what’s the difference?' },
        {
            type: 'table',
            head: ['Type', 'What it includes', 'Who it’s for'],
            rows: [
                ['Subtitles', 'Dialogue, often translated', 'Viewers who don’t speak the language, or who watch on mute'],
                ['Closed captions', 'Dialogue plus key sounds, switchable on or off', 'Deaf and hard-of-hearing viewers; broadcast and online'],
                ['SDH', 'Subtitle format that also describes sounds and speakers', 'Deaf and hard-of-hearing viewers on streaming platforms'],
                ['Open (burned-in)', 'Text permanently in the picture', 'Social media, where many people watch without sound'],
            ],
        },
        { type: 'h2', text: 'Burned-in or closed?' },
        {
            type: 'table',
            head: ['Option', 'Pros', 'Cons', 'Best for'],
            rows: [
                ['Burned-in', 'Always visible; styled with your brand fonts', 'Can’t be turned off or changed; one language per file', 'Reels, Shorts, ads on social media'],
                ['Closed file', 'Viewer’s choice; many languages from one video; editable', 'Plain styling set by the player', 'YouTube, websites, OTT platforms'],
            ],
        },
        { type: 'h2', text: 'Which subtitle file formats are common?' },
        { type: 'list', items: [
            '**SRT** — the simplest and most widely accepted: numbered lines with start and end times.',
            '**WebVTT** — similar to SRT, made for web video players.',
            '**TTML / IMSC** — XML-based formats used by many streaming platforms and broadcasters.',
            '**ASS / SSA** — formats with rich styling, used for some burned-in work.',
        ] },
        { type: 'h2', text: 'How do you make good subtitles?' },
        { type: 'list', items: [
            'Break lines at natural phrases, never in the middle of a name or between an adjective and its noun.',
            'Keep to two lines, and keep each subtitle on screen long enough to read comfortably.',
            'Time each subtitle to start and end with the speech, not before or long after.',
            'Leave out filler words when space is tight, but keep the meaning and tone.',
            'Spell names, places, brands and numbers correctly — these are the errors viewers notice most.',
            'Keep one consistent style for italics, songs, speaker labels and on-screen text.',
            'Translate meaning, not words: idioms and jokes need adapting, as in [dubbing and localisation](/blog/ai-dubbing-telugu-hindi-tamil-ads/).',
        ] },
        { type: 'h2', text: 'What about Telugu, Hindi and English versions?' },
        { type: 'p', text: 'Each language gets its own subtitle file, timed to the same picture. For burned-in Telugu or Hindi text, use proper Unicode fonts and check that conjunct letters and vowel signs render correctly in the export — broken characters are a common mistake. Streaming platforms publish style guides per language; Netflix, for example, has a separate Telugu timed text style guide alongside its English one.' },
        { type: 'h2', text: 'Can AI make subtitles?' },
        { type: 'p', text: 'Automatic transcription is a good starting point and saves hours. Accuracy varies, especially in Telugu, Hindi and mixed-language speech, so always proofread names, numbers and technical terms, and review the timing before publishing.' },
        { type: 'h2', text: 'Why subtitle at all?' },
        { type: 'p', text: 'Subtitles make your film accessible to deaf and hard-of-hearing viewers, watchable on mute in offices and on public transport, and understandable to audiences in other languages. On social media, burned-in subtitles also keep viewers watching when sound is off — place them inside the safe area shown in our [video ad sizes cheat sheet](/blog/video-ad-sizes-aspect-ratios-cheat-sheet/).' },
        { type: 'tip', text: 'Burn subtitles into social media cuts, but upload closed caption files on YouTube and for OTT delivery. One video can then serve every language.' },
        { type: 'p', text: 'Subtitles are part of every [OTT delivery](/blog/ott-delivery-specs/) and of many [lyrical videos](/blog/lyrical-videos-turning-a-song-into-a-campaign/). CK Studio creates subtitles and captions in Telugu, Hindi and English — see our [movie post-production](/services/movie-post-production/) service.' },
    ],
    faqs: [
        { q: 'What is an SRT file?', a: 'A plain-text subtitle file listing each subtitle’s number, start and end time, and text. Most video platforms accept it.' },
        { q: 'Should Instagram Reels have subtitles?', a: 'Yes, usually burned in, because many people watch with the sound off. Keep text short and inside the safe area so the app’s buttons don’t cover it.' },
        { q: 'How many characters should a subtitle line have?', a: 'Short enough to read at a glance. Netflix’s English guide allows up to 42 characters per line and two lines per subtitle; other platforms and languages have their own limits.' },
        { q: 'Can I edit YouTube’s automatic captions?', a: 'Yes. YouTube lets you edit automatic captions or upload your own subtitle files in YouTube Studio, which gives more accurate results.' },
    ],
    sources: [
        { label: 'Netflix — English (USA) Timed Text Style Guide', url: 'https://partnerhelp.netflixstudios.com/hc/en-us/articles/217350977' },
        { label: 'Netflix — Telugu Timed Text Style Guide', url: 'https://partnerhelp.netflixstudios.com/hc/en-us/articles/4482320288787-Telugu-Timed-Text-Style-Guide' },
        { label: 'Netflix — Timed Text Style Guide: General Requirements', url: 'https://partnerhelp.netflixstudios.com/hc/en-us/articles/215758617' },
    ],
};

export default article;
