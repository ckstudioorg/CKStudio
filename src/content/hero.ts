/** Hero section content. Edit words here; the layout and logo animation live in src/sections/Hero.tsx. */
export const hero = {
    badge: 'AI-Powered Film Production Studio',
    /** Small cue shown in the opening frame, between the giant C and K. */
    scrollCue: 'Scroll',
    scrollHint: 'Scroll to explore',
    headline: { first: 'Where AI', second: 'Meets' },
    /** Rotating phrases that complete "Where AI Meets …" */
    rotating: ['Ad Film Making', 'Movie Post-Production', 'Cinematic Advertising', 'Visual Effects'],
    /** One plain sentence under the headline: what we do and where (helps visitors and Google) */
    lede: 'Ad films, movie post-production, design and VFX — a pre- and post-production studio in Hyderabad.',
    /** Alt text for the logo's tagline image */
    tagline: 'Pre | Production | Post',
    actions: {
        primary: { label: 'Explore Our Work', target: 'portfolio' },
        secondary: { label: 'Start Your Project', target: 'contact' },
    },
    stats: [
        { number: '150+', label: 'Projects Delivered' },
        { number: 'AI-First', label: 'Production Workflow' },
        { number: '50+', label: 'Brands Served' },
    ],
};
