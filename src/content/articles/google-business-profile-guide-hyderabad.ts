/** Text of "How to Rank on Google Maps in Hyderabad: A Google Business Profile Guide (2026)". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'To rank on Google Maps, claim and verify your Google Business Profile, choose the most accurate primary category, fill in every detail (hours, services, service areas, description), keep your name, address and phone exactly the same everywhere online, add real photos and videos regularly, post updates, and earn genuine reviews that you reply to. Google ranks local results mainly on relevance, distance and prominence, so accuracy and steady activity matter more than tricks.',
    keyPoints: [
        'Verify the profile and choose the right primary category.',
        'Same name, address and phone everywhere online.',
        'Fresh photos, videos and posts keep the profile active.',
        'Genuine reviews only — and reply to every one.',
    ],
    body: [
        { type: 'h2', text: 'How does Google decide who appears on Maps?' },
        { type: 'p', text: 'Google says local results are based mainly on **relevance** (how well your profile matches the search), **distance** (how far you are from the searcher or the place they named) and **prominence** (how well known your business is, including reviews and your presence across the web). You cannot change distance, so focus on the other two.' },
        { type: 'h2', text: 'How do you set up and verify a profile?' },
        { type: 'steps', items: [
            'Search for your business on Google Maps; claim it if it exists, or create a new profile.',
            'Enter your business name exactly as it appears on your signboard — no extra keywords.',
            'Add your address (or service areas if you visit customers) and place the map pin precisely.',
            'Choose your primary category, then a few accurate secondary categories.',
            'Verify the profile using the method Google offers you; options vary by business and region.',
        ] },
        { type: 'h2', text: 'What should you fill in after verification?' },
        { type: 'list', items: [
            'Opening hours, including special hours for holidays and festivals',
            'Phone number and website link',
            'Services or products, with short descriptions',
            'A business description in plain language — what you do, where, for whom',
            'Attributes that apply to you (for example, wheelchair access)',
            'Your logo, a cover photo, and real photos of the outside, inside, team and work',
            'Short videos of your place and work',
        ] },
        { type: 'h2', text: 'How should you handle reviews?' },
        { type: 'list', items: [
            'Ask happy customers for a review, with a direct link or QR code — Google lets businesses request reviews.',
            'Never buy reviews, offer rewards for them, or post fake ones — it breaks Google’s policies and can get reviews removed or the profile restricted.',
            'Do not set review quotas or bonuses for staff, or ask customers to mention a staff member by name; Google tightened these rules in 2026.',
            'Reply to every review, positive and negative, politely and quickly.',
            'Answer criticism with facts and an offer to fix it, never with an argument.',
        ] },
        { type: 'h2', text: 'What keeps a profile active?' },
        { type: 'list', items: [
            'Posts for offers, events, new work and festival greetings',
            'New photos and videos every few weeks',
            'Updated hours before holidays',
            'Accurate services and products when they change',
        ] },
        { type: 'h2', text: 'What changed recently?' },
        { type: 'p', text: 'Google discontinued the chat feature on Business Profiles in 2024, so customers now contact you by phone, website or messaging apps such as WhatsApp. In late 2025, the community Q&A section was replaced by an AI-powered “Ask” feature that answers questions from your profile and the web — another reason to keep your details, services and website accurate and complete.' },
        { type: 'h2', text: 'Why does consistency across the web matter?' },
        { type: 'p', text: 'Google cross-checks your business name, address and phone number (often called NAP) across your website, social profiles and directories. Different versions — an old phone number here, a shortened name there — reduce trust. Make them identical everywhere, including on your [website](/blog/small-business-website-checklist/).' },
        { type: 'tip', text: 'Print a small QR code linking to your Google review page and place it at your counter or on invoices. Asking at the moment of happiness gets the most genuine reviews.' },
        { type: 'p', text: 'CK Studio creates the photos, videos and website content that make local profiles stand out — see our [social media and web design](/services/social-media-and-web-design/) service and [video ideas for local businesses](/blog/video-ads-for-local-businesses-instagram-facebook/).' },
        { type: 'p', text: 'Related guides: [getting recommended by ChatGPT and Google AI](/blog/get-recommended-by-ai-search/) and [why websites are slow and how to fix it](/blog/website-speed-core-web-vitals/).' },
    ],
    faqs: [
        { q: 'How long does it take to rank on Google Maps?', a: 'It varies. A complete, verified profile can start appearing within weeks; ranking higher for competitive searches depends on reviews, activity and your wider web presence over months.' },
        { q: 'Can I add keywords to my business name on Google?', a: 'No. Google’s guidelines say the name should match your real-world name. Adding keywords can lead to suspension.' },
        { q: 'Can I pay for better Google Maps ranking?', a: 'Organic Maps rankings cannot be bought. You can run Google Ads, which appear as labelled sponsored results.' },
        { q: 'What if my business has no shop address?', a: 'Service-area businesses can hide their address and list the areas they serve instead, as long as they meet customers in person.' },
    ],
    sources: [
        { label: 'Google Business Profile Help — tips to improve your local ranking', url: 'https://support.google.com/business/answer/7091' },
        { label: 'Google Business Profile Help — guidelines for representing your business', url: 'https://support.google.com/business/answer/3038177' },
        { label: 'PPC Land — Google formalises review request rules', url: 'https://ppc.land/google-formalizes-review-requests-nine-months-after-feature-launch/' },
    ],
};

export default article;
