/**
 * The ONE place for CK Studio's contact details, plus Testimonials, Contact, CTA and Footer wording.
 * Change a phone number or link here and it updates everywhere on the site.
 */

export const contact = {
    phone: { display: '9700 970 762', international: '+91 9700 970 762', tel: '+919700970762' },
    email: 'ckstudio.org@gmail.com',
    emailSubject: 'Inquiry from CK Studio Website',
    address: {
        lines: ['CK STUDIO, 11-008 N/R, Gajularamaram,', 'IDA Jeedimetla, Hyderabad.'],
        // Structured version for search engines
        street: '11-008 N/R, Gajularamaram, IDA Jeedimetla',
        city: 'Hyderabad',
        region: 'Telangana',
        postalCode: '500055',
        country: 'IN',
    },
    hours: { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:00', closes: '18:00' },
    mapsUrl: 'https://maps.google.com/?q=CK+Studio+11-008+N%2FR+Gajularamaram+IDA+Jeedimetla+Hyderabad',
    whatsapp: { number: '919700970762', message: "Hi! I'm interested in AI-powered ad film production." },
    website: { label: 'www.ckstudio.org', url: 'https://ckstudio.org' },
    socials: [
        { name: 'Facebook', url: 'https://www.facebook.com/CKStudio.org/' },
        { name: 'X', url: 'https://x.com/CKStudio_Music' },
        { name: 'YouTube', url: 'https://www.youtube.com/@CKStudio-Music' },
        { name: 'Instagram', url: 'https://www.instagram.com/ckstudio_music/' },
    ],
};

export const whatsappUrl = (message = contact.whatsapp.message) =>
    `https://wa.me/${contact.whatsapp.number}?text=${encodeURIComponent(message)}`;
export const mailtoUrl = () => `mailto:${contact.email}?subject=${encodeURIComponent(contact.emailSubject)}`;

export interface Testimonial {
    quote: string;
    name: string;
    role: string;
    company: string;
}

export const testimonials = {
    label: 'Testimonials',
    title: { lead: 'Client', highlight: 'Stories' },
    /**
     * Only add quotes the client has approved in writing. Drafts to send for approval: docs/TESTIMONIAL_DRAFTS.md
     * While this list is empty, the section shows a slider of real work instead.
     */
    approved: [] as Testimonial[],
    fallbackIntro: 'A few of the stories we have helped tell.',
};

export const getInTouch = {
    label: 'Get In Touch',
    title: { lead: 'Reach', highlight: 'Us At' },
    intro: "Let's create something extraordinary together with AI.",
    connect: { title: 'Connect With Us', text: 'Follow our AI filmmaking journey' },
};

export const cta = {
    badge: 'AI-Powered Production',
    title: { lead: 'Ready to Create Your', highlight: 'AI-Powered Ad Film?' },
    text: "Transform your brand's story with the power of artificial intelligence and cinematic excellence. Let's build something extraordinary together.",
    primary: 'Start Your Project',
    secondary: 'WhatsApp Us',
    trust: ['Free Consultation', 'No Hidden Charges', 'Fast Turnaround'],
};

export const footer = {
    blurb: "India's premier AI-powered ad film production studio. Where artificial intelligence meets cinematic advertising.",
    badge: 'Powered by AI',
    columns: [
        {
            title: 'Company',
            links: [
                { name: 'About Us', section: 'about' },
                { name: 'Our Work', section: 'portfolio' },
                { name: 'Blog', page: '/blog' },
                { name: 'FAQ', page: '/faq' },
            ],
        },
        {
            title: 'Services',
            links: [
                { name: 'Commercials', section: 'services' },
                { name: 'Designing', section: 'services' },
                { name: 'Movie Works', section: 'services' },
                { name: 'Social Media', section: 'services' },
                { name: 'VFX & CG Works', section: 'services' },
            ],
        },
        {
            title: 'Connect',
            links: [
                { name: 'Contact Us', section: 'contact' },
                { name: 'WhatsApp', external: 'whatsapp' },
                { name: 'Careers', section: 'contact' },
            ],
        },
    ] as { title: string; links: { name: string; section?: string; page?: string; external?: 'whatsapp' }[] }[],
    /** These pages don't exist yet; links are hidden until they do. Set `ready: true` once a page is added. */
    legal: [
        { name: 'Privacy Policy', page: '/privacy', ready: false },
        { name: 'Terms of Service', page: '/terms', ready: false },
    ],
    copyright: 'CK Studio. All Rights Reserved.',
};
