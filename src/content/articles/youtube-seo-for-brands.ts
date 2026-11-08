/** Text of "YouTube SEO for Brands: Titles, Thumbnails, Chapters and Descriptions That Get Views". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'YouTube recommends videos that people click and keep watching, so YouTube SEO for brands is mostly about matching what viewers search for and holding their attention: a clear, specific title with the search phrase near the start, a bold thumbnail that makes one promise, a strong first 15 seconds, chapters, captions, a useful description with links, and playlists that keep viewers moving to your next video. Shorts help new people discover your channel.',
    keyPoints: [
        'Title and thumbnail decide the click; the first seconds decide the watch.',
        'Use the words your customers actually search for.',
        'Add chapters, captions and a helpful description.',
        'Shorts for discovery, longer videos for trust.',
    ],
    body: [
        { type: 'h2', text: 'How does YouTube decide what to show?' },
        { type: 'p', text: 'YouTube’s search and recommendations try to match each viewer with videos they are likely to watch and enjoy. Signals include what the video is about (title, description, captions), whether people click it when they see it, how long they keep watching, and whether they come back for more. Good SEO helps YouTube understand your video; good content keeps viewers watching.' },
        { type: 'h2', text: 'How do you write a YouTube title that gets clicks?' },
        { type: 'list', items: [
            'Put the main search phrase near the start: “Ad film production process — step by step”.',
            'Promise a specific result or answer, not a vague topic.',
            'Keep the important words within the first 60 or so characters, since long titles get cut off (the maximum is 100 characters).',
            'Avoid clickbait the video does not deliver — viewers leave and YouTube notices.',
            'For Indian audiences, consider titles in Telugu, Hindi or both when the video is in that language.',
        ] },
        { type: 'h2', text: 'What makes a good thumbnail?' },
        { type: 'list', items: [
            'One focal point: a face with a clear expression, or the product.',
            'Three to five large words at most — or none.',
            'High contrast that stands out on both light and dark backgrounds.',
            'A consistent style so viewers recognise your channel.',
            'Made at 1280×720 pixels (16:9), and checked at phone size.',
        ] },
        { type: 'h2', text: 'How do you add chapters to a YouTube video?' },
        { type: 'steps', items: [
            'List timestamps in the description, each on its own line.',
            'Start the first timestamp at 0:00.',
            'Include at least three timestamps.',
            'Make each chapter at least 10 seconds long.',
            'Give each chapter a short, descriptive title — they can also appear in Google search results.',
        ] },
        { type: 'h2', text: 'What should go in the description?' },
        { type: 'list', items: [
            'One or two sentences at the top that say exactly what the video covers',
            'Chapters',
            'Links to your website, related videos and contact or WhatsApp',
            'A few relevant search phrases written naturally — no keyword lists',
        ] },
        { type: 'h2', text: 'Should brands make YouTube Shorts?' },
        { type: 'p', text: 'Yes, as a discovery tool. Shorts reach people who do not know your channel yet; longer videos build trust and answer detailed questions. Cut Shorts from your longer videos, and link each Short to the related full video.' },
        { type: 'h2', text: 'Which settings help your videos?' },
        { type: 'list', items: [
            'Upload accurate captions (or check the automatic ones) — they help viewers and search.',
            'Group videos into playlists by topic.',
            'Add end screens pointing to your next video.',
            'Disclose realistic AI-generated content when YouTube asks (see [AI in ads in India](/blog/ai-in-ads-india-rules-labelling-consent/)).',
        ] },
        { type: 'h2', text: 'Which numbers should you watch in YouTube Studio?' },
        {
            type: 'table',
            head: ['Number', 'What it tells you', 'What to do if it is low'],
            rows: [
                ['Impressions click-through rate', 'How often people click when they see your thumbnail', 'Test a clearer title or thumbnail'],
                ['Average view duration', 'How long people keep watching', 'Tighten the opening; cut slow sections'],
                ['Audience retention graph', 'Exactly where viewers leave', 'Fix or remove the moments before big drops'],
                ['Traffic sources', 'Search, suggested videos, external links, Shorts', 'Lean into the sources that already work'],
                ['Subscribers gained per video', 'Which topics build a loyal audience', 'Make more videos like those'],
            ],
        },
        { type: 'tip', text: 'Look at YouTube’s search suggestions as you type your topic. Those are real phrases people search — use them to name your videos.' },
        { type: 'p', text: 'CK Studio produces YouTube videos, Shorts and ad films for brands, and plans [social media strategy](/services/social-media-and-web-design/). For formats and lengths, see our [video size cheat sheet](/blog/video-ad-sizes-aspect-ratios-cheat-sheet/); to advertise on YouTube, read [YouTube ads for small businesses](/blog/youtube-ads-for-small-businesses-india/).' },
    ],
    faqs: [
        { q: 'How long should a YouTube video be for a brand?', a: 'As long as it needs to be to answer the viewer’s question well. Short explainers often work at three to eight minutes; Shorts are vertical clips of up to a few minutes, with most under one minute.' },
        { q: 'Do hashtags help on YouTube?', a: 'A few relevant hashtags can help, but titles, thumbnails, descriptions and watch time matter far more.' },
        { q: 'Why are my video chapters not showing?', a: 'Chapters need the first timestamp at 0:00, at least three timestamps, and each chapter at least 10 seconds long, listed in the description.' },
        { q: 'Can I change a title after publishing?', a: 'Yes. If a video gets impressions but few clicks, testing a clearer title or thumbnail often helps.' },
    ],
    sources: [
        { label: 'YouTube Help', url: 'https://support.google.com/youtube/' },
        { label: 'Storyblocks — How to add chapters to a YouTube video', url: 'https://www.storyblocks.com/resources/tutorials/how-to-add-chapters-to-youtube-video' },
    ],
};

export default article;
