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
        { name: 'Facebook', url: 'https://www.facebook.com/CKStudioFilms/' },
        { name: 'X', url: 'https://x.com/CKStudioFilms' },
        { name: 'YouTube', url: 'https://www.youtube.com/@CKStudioFilms' },
        { name: 'Instagram', url: 'https://www.instagram.com/ckstudiofilms/' },
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

/**
 * Project enquiry form (Get In Touch section). Enquiries are delivered by Web3Forms (free, 250/month)
 * to the email address the access key was created with.
 * Paste the access key from web3forms.com below. It is safe to keep it public; it only lets people send you enquiries.
 * While it is empty, pressing Send opens the visitor's email app with their details filled in instead.
 */
export const enquiry = {
    accessKey: '9c8e3c30-9d5e-486e-bb6b-814566e3401e',
    endpoint: 'https://api.web3forms.com/submit',
    subject: 'New project enquiry from the CK Studio website',
    label: 'Project Enquiry',
    title: { lead: 'Tell us about your', highlight: 'project' },
    intro: 'Share a few details and we will call you back within one working day.',
    services: ['Commercials', 'AI ad film', 'Movie works', 'VFX & CG', 'Designing', 'Social media'],
    budgets: ['Not sure yet', 'Under ₹1 lakh', '₹1–5 lakh', '₹5–20 lakh', '₹20 lakh+'],
    timelines: ['Flexible', 'Within 2 weeks', 'Within a month', '1–3 months'],
    send: 'Send enquiry',
    sending: 'Sending…',
    note: 'Prefer to talk? WhatsApp or call us directly.',
    thanks: {
        label: 'Enquiry sent',
        title: 'Thank you',
        text: 'We have your project details and will get back to you within one working day.',
        again: 'Send another enquiry',
    },
    errors: {
        name: 'Enter your name',
        phone: 'Enter a phone number we can call',
        email: 'Check your email address',
        failed: "Your enquiry couldn't be sent. Please try again, or reach us on WhatsApp.",
    },
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
