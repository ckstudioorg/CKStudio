/** About, Philosophy, and Vision & Mission content. Edit words here; layout and motion live in src/sections/. */

export const about = {
    label: 'About Us',
    title: { lead: 'Crafting the Future of', highlight: 'AI Advertising' },
    intro:
        'CHENNA KESHAV STUDIO (CK Studio) is a pre- and post-production studio in Hyderabad where filmmakers meet artificial intelligence. We are a team of editors, designers, colourists and technologists rethinking how ad films and movie content are conceived, produced and delivered.',
    paragraphs: [
        'We use generative AI and AI-assisted tools across concept, production and finishing — so brands and filmmakers get cinema-quality ad films, pre-looks and post-production faster, without losing the soul of cinematic storytelling.',
        'From AI-assisted storyboards to the final colour grade, every frame is directed, checked and finished by people.',
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
        /** Each point opens to a short explanation and a link (to a page, a home-page section like '/#portfolio', or an article) */
        items: [
            {
                title: 'Pioneer AI-Driven Filmmaking',
                text: 'AI is part of our films from day one — concept frames, pre-looks and complete AI ad films — so ideas can be seen and tested before money is spent on a shoot.',
                link: { label: 'AI ad films and commercials', to: '/services/ad-films-and-commercials/' },
            },
            {
                title: 'Visual Excellence at Scale',
                text: 'Every frame is graded, composited and checked by people — whether it is one hero film or dozens of versions for every screen and platform.',
                link: { label: 'VFX and CG works', to: '/services/vfx-and-cg/' },
            },
            {
                title: 'Intelligent Creative Marketing',
                text: 'Films, designs and social media planned together, so a campaign looks and feels like one brand everywhere it appears.',
                link: { label: 'Social media and web design', to: '/services/social-media-and-web-design/' },
            },
            {
                title: 'Deliver Beyond Expectations',
                text: 'Clear plans, honest timelines and the finishing touches you did not have to ask for — on every project, large or small.',
                link: { label: 'See our work', to: '/#portfolio' },
            },
            {
                title: 'Innovate with AI Technology',
                text: 'We try new AI tools as they arrive and keep the ones that genuinely make the work better — and we are open about what AI can and cannot do yet.',
                link: { label: 'What AI can and cannot do in ad films', to: '/blog/ai-ad-films-what-ai-can-and-cannot-do/' },
            },
            {
                title: 'Foster Human-AI Collaboration',
                text: 'AI speeds up the work; our editors, colourists and designers make the decisions. That balance keeps the results feeling human.',
                link: { label: 'Movie post-production', to: '/services/movie-post-production/' },
            },
            {
                title: 'Inspire the Future of Ads',
                text: 'We share what we learn through our articles and our work, to help brands and filmmakers in Hyderabad and beyond make bolder ads.',
                link: { label: 'Read our blog', to: '/blog/' },
            },
        ],
    },
};
