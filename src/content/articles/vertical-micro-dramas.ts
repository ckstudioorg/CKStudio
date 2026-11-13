/** Text of "Vertical Micro-Dramas: How Short Series for Phones Are Made". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'A micro-drama is a fictional series made for phones: vertical, with episodes of about one to three minutes, each ending on a hook that pulls the viewer into the next. A full story may run to dozens of episodes and is shot quickly, like a low-budget feature broken into very small pieces. They are released on dedicated apps and on social platforms. For filmmakers they are a fast way to tell stories; for brands, a new form of branded entertainment.',
    keyPoints: [
        'Vertical framing, very short episodes, a cliffhanger every time.',
        'Written and shot fast: many pages a day, few locations.',
        'Framing, pacing and subtitles are designed for a phone held upright.',
        'Rights, music and performer consent matter as much as in any film.',
    ],
    body: [
        { type: 'h2', text: 'What is a micro-drama?' },
        { type: 'p', text: 'It is serial fiction built around how people use phones: in short breaks, with one thumb, often without sound at first. The format grew large in China and has spread to other countries, including India, through apps that offer the first episodes free and charge or show ads for the rest, and through series released on Instagram, YouTube Shorts and similar platforms. Stories tend to be high-emotion: romance, revenge, family conflict, hidden identities.' },
        { type: 'h2', text: 'How is it different from a web series or a short film?' },
        { type: 'table', head: ['', 'Micro-drama', 'Web series', 'Short film'], rows: [
            ['Shape', 'Vertical (9:16)', 'Horizontal', 'Usually horizontal'],
            ['Episode length', 'About 1–3 minutes', '20–50 minutes', 'One film, a few minutes to half an hour'],
            ['Episodes', 'Often dozens', 'A handful per season', 'One'],
            ['Pacing', 'A hook in seconds, a cliffhanger each episode', 'Slower build', 'Varies'],
            ['Viewing', 'Phone, in short bursts', 'TV or phone', 'Festivals, online'],
            ['Production', 'Very fast, few locations', 'Weeks to months', 'Days'],
        ] },
        { type: 'p', text: 'If you are starting out, [how to make a short film on a budget](/blog/short-film-on-a-budget/) covers the basics that apply here too.' },
        { type: 'h2', text: 'How do you write for one-minute episodes?' },
        { type: 'list', items: [
            '**Start in the middle of the action** — no slow openings.',
            '**One beat per episode** — a discovery, a betrayal, a decision.',
            '**End on a question** the viewer needs answered.',
            '**Keep the cast small** and the relationships clear.',
            '**Write for few locations** — a house, an office, a street.',
            '**Plan the whole arc first**, then cut it into episodes, so the story still pays off.',
            '**Make the first three episodes the strongest** — this is where viewers decide to stay.',
        ] },
        { type: 'h2', text: 'How is it shot?' },
        { type: 'steps', items: [
            '**Break down the script by location**, not by episode, and shoot everything in one place together.',
            '**Frame vertically from the start** — do not crop a horizontal picture later.',
            '**Favour close and medium shots** — faces fill a phone screen well; wide shots lose detail.',
            '**Stage in depth** — actors placed front to back rather than side to side.',
            '**Keep lighting set-ups simple and repeatable**.',
            '**Record clean sound** — many viewers do listen, and bad audio feels cheap.',
            '**Track continuity carefully** — shooting dozens of episodes out of order is easy to get wrong.',
        ] },
        { type: 'p', text: 'A normal shoot day’s structure still applies; see the [pre-production checklist](/blog/pre-production-checklist-for-ads-and-films/).' },
        { type: 'h2', text: 'What is different in post-production?' },
        { type: 'list', items: [
            '**Fast cutting** — episodes are trimmed hard; every second must earn its place.',
            '**A recap or hook at the start**, and a tease at the end.',
            '**Burned-in subtitles** — large, readable, away from the areas covered by app buttons; see [subtitles and captions](/blog/subtitles-and-captions-guide/).',
            '**Consistent grade and sound** across all episodes.',
            '**Music with the right licence** for the platform; see [music licensing](/blog/music-for-ads-licensing-india/).',
            '**Many deliverables** — each episode, plus trailers and promo cuts.',
            '**Dubbing or subtitles in other languages** to widen the audience.',
        ] },
        { type: 'h2', text: 'How do micro-dramas reach viewers and earn?' },
        { type: 'list', items: [
            '**Dedicated apps** — free opening episodes, then payment per episode, subscription or ads.',
            '**Social platforms** — released as a series of reels or shorts, earning through the platform, sponsors or as promotion for something else.',
            '**Branded series** — a brand funds the story; the product has a natural role.',
            '**As a proof of concept** — a short series that demonstrates a story and a team to producers.',
        ] },
        { type: 'p', text: 'Each platform has its own content rules and commercial terms. Read them before you shoot, not after.' },
        { type: 'h2', text: 'How can brands use the format?' },
        { type: 'p', text: 'A short fictional series can hold attention across many days in a way a single ad cannot. It works when the story comes first and the brand belongs in its world: a jewellery brand in a wedding story, a food brand in a family story. Label sponsored content clearly, and keep product claims as accurate as in any ad. For reel basics, see [Instagram Reels for brands](/blog/instagram-reels-for-brands/).' },
        { type: 'h2', text: 'What should producers be careful about?' },
        { type: 'list', items: [
            '**Rights** — written agreements with writers, actors and crew; registered scripts. See [protecting your script and film](/blog/script-registration-and-film-copyright-india/).',
            '**Fair working hours** — fast schedules should not mean unsafe days.',
            '**Content rules** — platforms restrict certain themes; plan for the strictest one you will release on.',
            '**Quality over quantity** — viewers drop a series quickly if episodes feel like filler.',
        ] },
        { type: 'tip', text: 'Test your first three episodes on people who know nothing about the story, on a phone, without explanation. If they do not ask for episode four, rewrite before shooting the rest.' },
    ],
    faqs: [
        { q: 'How long is a micro-drama episode?', a: 'Usually between one and three minutes. Short enough to watch in a spare moment, long enough to deliver one story beat and a hook.' },
        { q: 'Can a horizontal film be re-cut as a vertical micro-drama?', a: 'Sometimes, but the framing and pacing were not designed for it, so faces are often cropped and episodes end without a hook. Material made for the format works much better.' },
        { q: 'Do micro-dramas need certification in India?', a: 'Online content is governed by rules that differ from those for cinema release, and they continue to develop. Check the current requirements and each platform’s policy before release; this guide is not legal advice.' },
        { q: 'Is the format suitable for Telugu stories?', a: 'Yes. Family drama, romance and comedy translate well, and regional-language stories can stand out. Subtitles in other languages help them travel.' },
    ],
};

export default article;
