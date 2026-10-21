/**
 * What Google (and link previews on WhatsApp, Facebook, LinkedIn, X) show for each page.
 * Titles: keep under ~60 characters. Descriptions: keep under ~155 characters.
 * Blog articles use their own title and excerpt from content/blog.ts.
 */

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
