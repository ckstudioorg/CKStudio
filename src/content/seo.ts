/**
 * What Google (and link previews on WhatsApp, Facebook, LinkedIn, X) show for each page.
 * Titles: keep under ~60 characters. Descriptions: keep under ~155 characters.
 * Blog articles use their own title and excerpt from content/blog.ts (descriptions are trimmed automatically);
 * a long article title gets a shorter search title below. " | CK Studio" is added only when it still fits.
 */

/** Shorter titles for search results (Google cuts titles off after about 60 characters). Key: article slug. */
export const articleSearchTitles: Record<string, string> = {
    'ad-film-cost-in-india': 'How Much Does an Ad Film Cost in India? 2026 Guide',
    'how-to-choose-an-ad-film-production-company-hyderabad': 'Choosing an Ad Film Production Company in Hyderabad',
    'ai-video-generation-for-brands': 'AI Video Generation for Brands (2026): What Works',
    'ai-product-photography-vs-product-shoot': 'AI Product Photography vs a Traditional Product Shoot',
    'ai-dubbing-telugu-hindi-tamil-ads': 'AI Dubbing for Ads: Telugu, Hindi, Tamil and English',
    'ai-in-ads-india-rules-labelling-consent': 'AI in Ads in India: Labelling, Consent and Copyright',
    'product-video-live-shoot-cgi-or-ai': 'Product Videos: Live Shoot, CGI or AI? How to Choose',
    'what-is-post-production': 'What Is Post-Production? Every Stage Explained',
    'corporate-film-guide': 'How to Make a Corporate Film People Actually Watch',
    'industrial-film-guide-for-manufacturers': 'Industrial Films for Manufacturers: How to Film a Factory',
    'real-estate-video-marketing-hyderabad': 'Real Estate Video Marketing in Hyderabad: 2026 Guide',
    'brand-film-vs-ad-film-vs-corporate-film': 'Brand Film vs Ad Film vs Corporate Film: Which Do You Need?',
    'customer-testimonial-videos': 'Customer Testimonial Videos: How to Film Real Stories',
    'animated-explainer-videos': 'Animated Explainer Videos: Styles, Uses and Process',
    'investor-pitch-video-startups': 'Investor Pitch Videos for Startups: What to Show',
    'event-videography-guide': 'Event Videography Guide: Coverage, Highlights, Aftermovies',
    'social-media-content-calendar': 'Social Media Content Calendar: Template for Indian Brands',
    'small-business-website-checklist': 'What Every Small Business Website Needs: 2026 Checklist',
    'google-business-profile-guide-hyderabad': 'How to Rank on Google Maps in Hyderabad (2026 Guide)',
    'youtube-seo-for-brands': 'YouTube SEO for Brands: Titles, Thumbnails and Chapters',
    'influencer-marketing-india-guide': 'Influencer Marketing in India: Briefs and Rules (2026)',
    'cbfc-certification-guide': 'CBFC Certification Guide (2026): Categories and Process',
    'teaser-vs-trailer-vs-promo': 'Teaser vs Trailer vs Promo: What’s the Difference?',
    'movie-promotion-timeline': 'Movie Promotion Timeline: Title Launch to Release Day',
    'video-ad-sizes-aspect-ratios-cheat-sheet': 'Video Ad Sizes and Aspect Ratios: 2026 Cheat Sheet',
    'video-ads-for-local-businesses-instagram-facebook': 'Instagram and Facebook Video Ads for Local Businesses',
    'logo-design-guide': 'Logo Design for Small Businesses: Process and Files',
    'movie-poster-design-guide': 'Movie Poster Design: First-Look and Release Posters',
    'event-branding-kit-checklist': 'Event Branding Kit: Checklist for Launches and Events',
    'product-catalogue-brochure-design': 'Product Catalogue and Brochure Design That Sells',
    'business-pitch-deck-guide': 'Business Pitch Deck Guide: The 12 Slides That Win',
    'green-screen-vs-virtual-production': 'Green Screen vs Virtual Production: What to Know',
    'logo-animation-guide': 'Logo Animation: Types, Lengths and Where to Use It',
    'music-for-ads-licensing-india': 'Music for Ads in India: Library, Original and Licensing',
    'short-film-on-a-budget': 'How to Make a Short Film on a Budget: Script to Festival',
    'ai-ad-films-what-ai-can-and-cannot-do': 'AI Ad Films: What AI Can Do and Where You Need a Crew',
    'ai-pre-looks-and-pre-teasers-for-movies': 'AI Pre-Looks and Pre-Teasers for Movies',
    'company-start-package-brand-essentials': 'Starting a Company? Brand Essentials for Day One',
    'how-to-build-a-movie-pitch-deck': 'How to Build a Movie Pitch Deck Producers Will Read',
};

export const site = {
    name: 'CK Studio',
    legalName: 'Chenna Keshav Studio',
    url: 'https://ckstudio.org',
    logo: 'https://ckstudio.org/images/branding/logo.png',
    image: 'https://ckstudio.org/images/branding/og-image.jpg',
    imageAlt: 'CK Studio — Where AI Meets Cinema',
    locale: 'en_IN',
};

export const pageSeo = {
    home: {
        title: 'CK Studio | Ad Film & Post-Production Studio, Hyderabad',
        description:
            'CK Studio is a pre- and post-production studio in Hyderabad for AI ad films, commercials, movie works, DI and DCP, VFX, design and social media.',
    },
    blog: {
        title: 'Blog: Film, Ad and Post-Production Insights | CK Studio',
        description:
            'Practical guides from CK Studio on AI ad films, movie pitch decks, pre-looks, DI and colour correction, DCP delivery, lyrical videos and brand design.',
    },
    faq: {
        title: 'FAQ: Ad Films and Post-Production | CK Studio',
        description:
            'Answers about CK Studio’s services, AI in film production, timelines, quality and working with clients in Hyderabad and across India.',
    },
    notFound: {
        title: 'Page Not Found | CK Studio',
        description: "This page doesn't exist. Visit CK Studio's home page for ad films, movie works and post-production in Hyderabad.",
    },
};

/** Places CK Studio serves, used in Google's business details. */
export const areaServed = ['Hyderabad', 'Telangana', 'Andhra Pradesh', 'India'];
