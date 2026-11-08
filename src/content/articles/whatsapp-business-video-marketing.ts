/** Text of "Video on WhatsApp Business: Status, Catalogue and Broadcasts". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'On WhatsApp Business, video works in four places: your status (short clips seen by your saved contacts), one-to-one chats (a quick demo sent in reply to an enquiry), your catalogue (products shown with photos, backed by videos in chat), and messages to customers who agreed to hear from you — through broadcast lists in the app or approved templates on the WhatsApp Business Platform. Keep clips short and vertical, message only people who opted in, and end every video with one clear next step.',
    keyPoints: [
        'Status only reaches people who have your number saved — and whom you have saved.',
        'A short demo video in chat answers an enquiry better than a long typed reply.',
        'Message only people who opted in; spam gets numbers blocked.',
        'Vertical, short, captioned clips that ask for one action.',
    ],
    body: [
        { type: 'h2', text: 'Where can you use video on WhatsApp Business?' },
        {
            type: 'table',
            head: ['Place', 'What it’s for', 'Tips'],
            rows: [
                ['Status', 'Daily updates, new arrivals, offers, behind the scenes', 'Short vertical clips with text on screen'],
                ['One-to-one chat', 'Answering an enquiry with a quick demo', 'Keep a library of ready clips for common questions'],
                ['Catalogue', 'Customers browsing products or services in the app', 'Pair catalogue items with a short video in chat'],
                ['Broadcast lists (app)', 'Updates to customers who opted in', 'A personal tone; only people who saved your number receive them'],
                ['WhatsApp Business Platform', 'Larger, automated campaigns and notifications', 'Approved message templates; charged per message by WhatsApp'],
            ],
        },
        { type: 'h2', text: 'Which videos work best on WhatsApp?' },
        { type: 'list', items: [
            '**Product demos** of 15–30 seconds — how it works, how it looks in use.',
            '**New stock walk-throughs** — a quick tour of what just arrived.',
            '**How-to clips** — care instructions, set-up, recipes.',
            '**Customer stories**, with permission — see [testimonial videos](/blog/customer-testimonial-videos/).',
            '**Festival greetings made for your brand**, not generic forwards.',
            '**Behind the scenes** — your kitchen, workshop or team at work.',
        ] },
        { type: 'h2', text: 'How do you keep your number from being blocked?' },
        { type: 'list', items: [
            '**Message only people who opted in** — customers who gave you their number and agreed to hear from you on WhatsApp.',
            '**Make opting out easy**, and respect it.',
            '**Don’t send too often** — a few useful messages beat daily promotions.',
            '**Never use unofficial “bulk sender” tools** — they break WhatsApp’s terms, and numbers get banned.',
            '**Keep messages relevant** to each customer’s interests and past orders.',
        ] },
        { type: 'h2', text: 'What format should WhatsApp videos be?' },
        { type: 'list', items: [
            '**Vertical 9:16** for status; square also works in chats.',
            '**Short** — status clips have a length limit and long videos get trimmed, so make each clip complete on its own.',
            '**Large text and captions** — many people watch on mute, on small screens.',
            '**A strong first frame** — it becomes the thumbnail in the chat.',
            '**A clean MP4 export** — WhatsApp compresses videos, so start from a good-quality file.',
        ] },
        { type: 'h2', text: 'How do you build a video library for quick replies?' },
        { type: 'steps', items: [
            'List the ten questions customers ask you most on WhatsApp — how it works, sizes and colours, delivery areas, how to order, how to find your store.',
            'Record a 20–40 second video answering each one, with the answer also written on screen.',
            'Keep the videos in one folder on the business phone, named by question, so anyone on the team can send the right one in seconds.',
            'Follow each video with a short typed message and one next step — “Shall I book a slot for you?”',
            'Update the library whenever products, prices or policies change.',
        ] },
        { type: 'p', text: 'A library like this makes a small team feel fast and personal, and every customer gets the same accurate answer.' },
        { type: 'h2', text: 'How does WhatsApp fit with your other marketing?' },
        { type: 'p', text: 'Click-to-WhatsApp ads on Facebook and Instagram open a chat with your business directly, which suits local businesses that sell through conversation — see [video ads for local businesses](/blog/video-ads-for-local-businesses-instagram-facebook/). Add a WhatsApp button to your website and Google Business Profile, and put your number on every video end card. Our [media guide for Telangana and Andhra Pradesh](/blog/advertising-media-telangana-andhra/) shows how WhatsApp fits with other channels.' },
        { type: 'tip', text: 'Ask every customer to save your number. Status updates and broadcast messages only reach people who have it saved.' },
    ],
    faqs: [
        { q: 'How long can a WhatsApp status video be?', a: 'Status clips have a length limit that WhatsApp has changed over the years, and longer videos are trimmed or split. Check the current limit in your app — and keep most status clips to 15–30 seconds anyway.' },
        { q: 'Can I send a video to all my customers at once?', a: 'Yes, to customers who opted in, using broadcast lists in the WhatsApp Business app or templates on the WhatsApp Business Platform. Broadcasts from the app only reach people who have your number saved.' },
        { q: 'Is the WhatsApp Business app free?', a: 'The WhatsApp Business app is free to download and use. The WhatsApp Business Platform, used for larger automated messaging, charges per message — check WhatsApp’s current pricing.' },
        { q: 'Can ads open a WhatsApp chat?', a: 'Yes. Facebook and Instagram offer click-to-WhatsApp ads that start a conversation with your business when tapped.' },
    ],
    sources: [
        { label: 'WhatsApp Business', url: 'https://business.whatsapp.com/' },
        { label: 'WhatsApp Business Messaging Policy', url: 'https://business.whatsapp.com/policy' },
        { label: 'WhatsApp Help Center', url: 'https://faq.whatsapp.com/' },
    ],
};

export default article;
