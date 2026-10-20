/** Hero section content. Edit words here; the layout and animation live in src/sections/Hero.tsx. */
export const hero = {
    badge: 'AI-Powered Film Production Studio',
    headline: { first: 'Where AI', second: 'Meets' },
    /** Rotating phrases that complete "Where AI Meets …" */
    rotating: ['Cinematic Advertising', 'AI-Powered Storytelling', 'Neural Visual Effects', 'Intelligent Post-Production'],
    actions: {
        primary: { label: 'Explore Our Work', target: 'portfolio' },
        secondary: { label: 'Start Your Project', target: 'contact' },
    },
    stats: [
        { number: '150+', label: 'Projects Delivered' },
        { number: 'AI-First', label: 'Production Workflow' },
        { number: '50+', label: 'Brands Served' },
    ],
    /**
     * Scroll-scrubbed hero video. Leave as null to show the placeholder.
     * Put files in public/videos/ and set e.g. desktop: '/videos/hero-desktop.mp4'.
     * For smooth scrubbing, export with a keyframe on every frame (Claude converts the designer's export).
     */
    video: {
        desktop: null as string | null, // 1920x1080, 5-8 s, no audio
        mobile: null as string | null, // 1080x1920 vertical (optional; falls back to desktop)
        poster: null as string | null, // still frame shown while loading
    },
};
