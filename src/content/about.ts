/** About, Philosophy, and Vision & Mission content. Edit words here; layout and motion live in src/sections/. */

export const about = {
    label: 'About Us',
    title: { lead: 'Crafting the Future of', highlight: 'AI Advertising' },
    intro:
        'CHENNA KESHAV STUDIO is where visionary filmmakers meet cutting-edge artificial intelligence. We are a team of creative minds and technology pioneers, redefining how advertising content is conceived, produced, and delivered.',
    paragraphs: [
        'We harness the power of Generative AI, Neural Rendering, and Machine Learning to revolutionize advertising production — delivering Hollywood-grade ad films at unprecedented speed and scale, while keeping the soul of cinematic storytelling alive.',
        'From AI-assisted storyboarding to neural color grading, every frame we produce is a fusion of human creativity and machine intelligence.',
    ],
    stats: [
        { value: 10, suffix: '+', label: 'Years of Excellence' },
        { value: 150, suffix: '+', label: 'Projects Completed' },
        { value: 50, suffix: '+', label: 'Brands Served' },
    ],
    image: {
        src: null as string | null, // e.g. '/images/about/ai-film-production.webp'
        alt: 'CK Studio AI film production',
        requirement: '1200 × 1500 px · webp · public/images/about/ai-film-production.webp',
    },
    imageCaption: { title: 'AI-Powered', text: 'Next-gen film production technology' },
    quote:
        "Great films aren't just made on set — they're crafted where creativity meets precision and AI meets human imagination, turning ideas into cinematic experiences that captivate and inspire.",
    signoff: 'Your Achievement, Our Success',
};

export const philosophy = {
    label: 'Our Philosophy',
    title: { lead: 'Guiding', highlight: 'Principles' },
    quote: { lead: 'Movies are made to be seen;', highlight: "AI ensures they're remembered" },
};

export const visionMission = {
    vision: {
        label: 'Vision',
        text: 'To be a global leader in AI-powered film production, setting the benchmark for creativity, quality, and technological innovation — transforming advertising stories into unforgettable cinematic experiences through the fusion of human artistry and artificial intelligence.',
    },
    mission: {
        label: 'Mission',
        items: [
            'Pioneer AI-Driven Filmmaking',
            'Visual Excellence at Scale',
            'Intelligent Creative Marketing',
            'Deliver Beyond Expectations',
            'Innovate with AI Technology',
            'Foster Human-AI Collaboration',
            'Inspire the Future of Ads',
        ],
    },
};
