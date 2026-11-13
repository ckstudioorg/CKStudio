/**
 * Free tools (/tools/). Wording and data for the two tools live here.
 * The sizes are the same recommendations as the article "Video Ad Sizes and Aspect Ratios" — keep the two in step.
 * Nothing a visitor types into a tool is stored or sent anywhere unless they press a "send" button themselves.
 */

export const toolsPage = {
    label: 'Free Tools',
    title: { lead: 'Free Tools for', highlight: 'Video & Ads' },
    intro: 'Small, free helpers for planning videos and ads. They run in your browser: nothing you type is stored or sent to us unless you choose to send it.',
    open: 'Open tool',
    back: 'All tools',
};

export const toolList = [
    {
        slug: 'video-size-checker',
        name: 'Video Size Checker',
        summary: 'Pick where your video will run to see the right shape and size, or enter your video’s size to see where it fits.',
        seoTitle: 'Video Size Checker: Reels, YouTube, TV Sizes | CK Studio',
        seoDescription: 'Free video size and aspect ratio checker. See the recommended size for Reels, Stories, Shorts, YouTube, TV and cinema, or check where your video fits.',
    },
    {
        slug: 'ad-brief-builder',
        name: 'Ad Brief Builder',
        summary: 'Answer a few questions and get a clear, one-page brief for an ad film or video that you can copy, save or send.',
        seoTitle: 'Free Ad Brief Builder: Write a Video Brief | CK Studio',
        seoDescription: 'Free ad film brief builder. Answer simple questions about your audience, message and deadline and get a clear one-page video brief to copy or send.',
    },
] as const;

export type ToolSlug = (typeof toolList)[number]['slug'];

/** Recommended sizes by placement. `ratio` is width:height as numbers, used to match a visitor's own video. */
export const placements = [
    { name: 'Instagram and Facebook Reels', ratio: [9, 16], label: '9:16 (vertical)', size: '1080 × 1920', note: 'Keep key text away from the top and bottom, where app buttons sit.' },
    { name: 'Instagram and Facebook Stories', ratio: [9, 16], label: '9:16 (vertical)', size: '1080 × 1920', note: 'Full screen; leave room at the top and bottom.' },
    { name: 'Instagram and Facebook feed (portrait)', ratio: [4, 5], label: '4:5 (portrait)', size: '1080 × 1350', note: 'Takes more of the screen than a square.' },
    { name: 'Instagram and Facebook feed (square)', ratio: [1, 1], label: '1:1 (square)', size: '1080 × 1080', note: 'Works in most feeds.' },
    { name: 'YouTube Shorts', ratio: [9, 16], label: '9:16 (vertical)', size: '1080 × 1920', note: 'Vertical and short.' },
    { name: 'YouTube videos and in-stream ads', ratio: [16, 9], label: '16:9 (horizontal)', size: '1920 × 1080 or higher', note: 'Vertical and square are also accepted for ads.' },
    { name: 'Website and LinkedIn', ratio: [16, 9], label: '16:9 (horizontal) or 1:1', size: '1920 × 1080 or 1080 × 1080', note: 'Add captions; many people watch muted.' },
    { name: 'Television', ratio: [16, 9], label: '16:9 (horizontal)', size: '1920 × 1080 (HD)', note: 'Follow each channel’s own technical specification.' },
    { name: 'Cinema (Flat)', ratio: [1998, 1080], label: 'Flat (1.85:1)', size: '2K: 1998 × 1080', note: 'Delivered as a DCP.' },
    { name: 'Cinema (Scope)', ratio: [2048, 858], label: 'Scope (2.39:1)', size: '2K: 2048 × 858', note: 'Delivered as a DCP.' },
] as const;

export const sizeChecker = {
    whereTitle: 'Where will the video run?',
    whereLabel: 'Placement',
    shape: 'Shape',
    size: 'Recommended size',
    tip: 'Good to know',
    mineTitle: 'Check a video you already have',
    mineIntro: 'Enter its width and height in pixels (right-click the file and open its properties or details to find them).',
    width: 'Width (px)',
    height: 'Height (px)',
    ratioIs: 'Shape of your video',
    fits: 'It fits',
    fitsNone: 'This shape does not match a standard placement exactly. It can still be used, but platforms may crop it or add bars. For the best result, re-export in one of the shapes above.',
    enter: 'Enter a width and height to see where your video fits.',
    disclaimer: 'These are commonly recommended sizes. Platforms change their specifications, so check the platform’s current guide before final delivery.',
    guide: { label: 'Full guide: video ad sizes and aspect ratios', page: '/blog/video-ad-sizes-aspect-ratios-cheat-sheet/' },
};

/** Questions of the brief builder, in order. `rows` makes a larger text box. */
export const briefFields = [
    { id: 'business', label: 'Business or brand name', placeholder: 'e.g. Sri Lakshmi Sweets', rows: 1 },
    { id: 'product', label: 'What are you promoting?', placeholder: 'The product, service, offer or event', rows: 2 },
    { id: 'goal', label: 'What should the video achieve?', placeholder: 'e.g. more festival orders, bookings for a new branch, awareness of a launch', rows: 2 },
    { id: 'audience', label: 'Who is it for?', placeholder: 'Age, place, language and what they care about', rows: 2 },
    { id: 'message', label: 'The one thing viewers should remember', placeholder: 'One sentence', rows: 2 },
    { id: 'proof', label: 'Why should they believe it?', placeholder: 'Facts, awards, years in business, customer reviews', rows: 2 },
    { id: 'tone', label: 'Tone and style', placeholder: 'e.g. warm and family, premium, funny, energetic', rows: 1 },
    { id: 'language', label: 'Language(s)', placeholder: 'e.g. Telugu, with an English version', rows: 1 },
    { id: 'length', label: 'Length and versions', placeholder: 'e.g. 30 seconds, plus 15 and 6 second cuts', rows: 1 },
    { id: 'include', label: 'Must include or avoid', placeholder: 'Logo, offer, phone number; anything that must not appear', rows: 2 },
    { id: 'deadline', label: 'When do you need it?', placeholder: 'Date, and the event or festival it is for', rows: 1 },
    { id: 'budget', label: 'Budget range (optional)', placeholder: 'A range helps a studio suggest the right approach', rows: 1 },
    { id: 'contact', label: 'Your name and phone or email (optional)', placeholder: 'Only included in the brief you send', rows: 1 },
] as const;

export const briefPlacements = ['Instagram / Facebook', 'YouTube', 'WhatsApp', 'Website', 'Television', 'Cinema', 'Events / in-store screens'];

export const briefBuilder = {
    formTitle: 'Answer what you can',
    formIntro: 'Skip anything you are unsure about. Your brief builds as you type.',
    placementsLabel: 'Where will it run?',
    resultTitle: 'Your brief',
    empty: 'Your brief will appear here as you fill in the answers.',
    heading: 'VIDEO / AD FILM BRIEF',
    copy: 'Copy brief',
    copied: 'Copied',
    download: 'Save as text file',
    whatsapp: 'Send to CK Studio on WhatsApp',
    email: 'Email it to CK Studio',
    privacy: 'Nothing is saved or sent unless you press a send button. Sending opens WhatsApp or your email app with the brief filled in.',
    guide: { label: 'How to write an ad film brief (with template)', page: '/blog/how-to-write-an-ad-film-brief/' },
};
