/** Text of "How to Plan a Social Media Content Calendar (With a Template for Indian Brands)". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'A social media content calendar is a month-by-month plan of what you will post, where, when and in which format. Build it from three to five content pillars (themes your audience cares about), a realistic posting rhythm you can sustain, key dates such as Indian festivals and launches, and a simple approval flow — then batch-produce content a week or two ahead so posting never depends on last-minute ideas.',
    keyPoints: [
        'Choose 3–5 content pillars and rotate them.',
        'Pick a posting rhythm you can keep up every week.',
        'Mark festivals, launches and events at the start of the month.',
        'Make content in batches; leave room for timely posts.',
    ],
    body: [
        { type: 'h2', text: 'What are content pillars?' },
        { type: 'p', text: 'Content pillars are the few recurring themes your brand posts about. They keep your feed focused and make planning faster. For example, a restaurant might use: food and recipes, behind the scenes, customer moments, offers and events. A manufacturer might use: products in use, quality and process, people, industry tips and company news.' },
        { type: 'h2', text: 'How do you build a monthly content calendar?' },
        { type: 'steps', items: [
            'Write down the month’s goal — awareness, enquiries, a launch, footfall.',
            'Mark key dates: festivals, holidays, product launches, events, sales.',
            'Choose your posting rhythm per platform (for example, three Reels and two posts a week on Instagram).',
            'Fill the slots by rotating your content pillars.',
            'Assign a format to each slot: Reel, carousel, single image, Story, Short, long video.',
            'Write captions and hashtags, and list the visuals each post needs.',
            'Set deadlines for creation and approval, a week or two ahead of posting.',
            'Leave a few open slots for trends and news.',
        ] },
        { type: 'h2', text: 'A simple content calendar template' },
        {
            type: 'table',
            head: ['Column', 'What to fill in'],
            rows: [
                ['Date and time', 'When it goes live'],
                ['Platform', 'Instagram, Facebook, YouTube, LinkedIn, WhatsApp channel'],
                ['Pillar', 'Which content theme it belongs to'],
                ['Format', 'Reel, carousel, image, Story, Short, long video'],
                ['Idea / hook', 'The first line or first two seconds'],
                ['Caption and call to action', 'The text and what you want people to do'],
                ['Assets needed', 'Photos, footage, design, voice-over'],
                ['Owner and status', 'Who makes it; idea, in production, approved, posted'],
            ],
            caption: 'Copy these columns into a spreadsheet',
        },
        { type: 'h2', text: 'Which Indian dates should brands plan around?' },
        { type: 'p', text: 'Festive and seasonal moments drive both attention and buying. Depending on your audience, plan for Sankranti or Pongal, Ugadi, Ramzan and Eid, Bonalu in Telangana, Raksha Bandhan, Independence Day, Ganesh Chaturthi, Dussehra and Bathukamma, Diwali, Christmas and New Year, plus cricket seasons, exam and admission seasons, and wedding seasons. Lunar festival dates change every year, so check the current year’s calendar — and see our [festival marketing calendar for Telangana and Andhra Pradesh](/blog/festival-marketing-calendar-telangana-andhra/) for when to start each campaign.' },
        { type: 'h2', text: 'How often should a brand post?' },
        { type: 'p', text: 'There is no magic number. The right frequency is the highest you can sustain with good quality, every week, for months. A steady three posts a week beats ten in one week and none the next. Watch your own results — reach, saves, shares, messages — and adjust.' },
        { type: 'h2', text: 'How do you make content faster?' },
        { type: 'list', items: [
            'Batch shoots: film a month of Reels in one or two sessions.',
            'Turn one long video into many short clips.',
            'Use templates for recurring formats like offers, tips and testimonials.',
            'Repurpose: a carousel can become a Reel, a Reel can become a Short.',
            'Use AI to draft caption options and resize visuals, then edit them in your brand voice.',
        ] },
        { type: 'tip', text: 'Start each month by planning the festival and launch posts first. They are the ones that cannot be late — fill the rest of the calendar around them.' },
        { type: 'p', text: 'CK Studio plans and produces social media content and campaigns for brands in Hyderabad — see our [social media and web design](/services/social-media-and-web-design/) service, our [playbook for local video ads](/blog/video-ads-for-local-businesses-instagram-facebook/) and [Instagram Reels for brands](/blog/instagram-reels-for-brands/).' },
    ],
    faqs: [
        { q: 'What is a social media content calendar?', a: 'A schedule that lists what will be posted, on which platform, when and in which format, along with captions, assets and who is responsible.' },
        { q: 'How far ahead should I plan social media content?', a: 'Plan the month ahead, and produce content one to two weeks before it goes live. Keep a few slots open for timely posts.' },
        { q: 'Which tools can I use for a content calendar?', a: 'A shared spreadsheet works well for most small teams. Meta Business Suite can schedule Facebook and Instagram posts, and many other scheduling tools exist.' },
        { q: 'Should every platform get the same posts?', a: 'Share the same ideas, but adapt the format: vertical video for Reels and Shorts, more professional framing for LinkedIn, and longer videos for YouTube.' },
    ],
};

export default article;
