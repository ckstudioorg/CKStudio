/**
 * Privacy Policy and Terms of Service. Plain-language drafts written to match what the website actually does.
 * They are not legal advice: have them reviewed by a lawyer, especially if the site starts collecting more data
 * (for example visitor statistics or online payments). Update `updated` whenever the wording changes.
 */
import type { Block } from './blog';
import { contact } from './contact';

export interface LegalPage {
    slug: 'privacy' | 'terms';
    title: string;
    seoTitle: string;
    seoDescription: string;
    updated: string; // ISO date
    intro: string;
    body: Block[];
}

const address = `${contact.address.street}, ${contact.address.city}, ${contact.address.region} ${contact.address.postalCode}`;
const reachUs = `Email ${contact.email}, call ${contact.phone.international}, or write to ${address}`;

export const legalPages: LegalPage[] = [
    {
        slug: 'privacy',
        title: 'Privacy Policy',
        seoTitle: 'Privacy Policy | CK Studio',
        seoDescription: 'How CK Studio (Chenna Keshav Studio) collects, uses and protects the details you share through our website, enquiry form, phone, email and WhatsApp.',
        updated: '2026-10-21',
        intro: 'This policy explains what personal details CK Studio collects through this website, why, and the choices you have. We keep it short and plain.',
        body: [
            { type: 'h2', text: 'Who we are' },
            { type: 'p', text: `This website (ckstudio.org) is run by CK Studio (Chenna Keshav Studio), ${address}. We are responsible for the personal details you share with us here.` },

            { type: 'h2', text: 'What we collect' },
            { type: 'list', items: [
                'Enquiry form: your name and phone number, and, if you choose to give them, your email address, company or brand, the services you need, budget, timeline and message.',
                'When you contact us directly by phone, email or WhatsApp: the details you choose to send us.',
                'We do not ask for payment details, passwords or government ID numbers on this website.',
            ] },

            { type: 'h2', text: 'How the enquiry form works' },
            { type: 'p', text: 'When you press Send, your answers are passed to Web3Forms, a form delivery service, which emails them to our studio inbox. Web3Forms handles the message only to deliver it to us; its own privacy policy is at web3forms.com/privacy. Your enquiry is then kept in our email account (Google Gmail).' },

            { type: 'h2', text: 'Why we use your details' },
            { type: 'list', items: [
                'To reply to your enquiry, discuss your project and send you a quote.',
                'To carry out and deliver work you have asked us to do.',
                'To keep records we are required to keep by law, such as invoices.',
            ] },
            { type: 'p', text: 'We do not sell or rent your personal details, and we do not add you to marketing lists without your permission.' },

            { type: 'h2', text: 'Cookies, tracking and other websites' },
            { type: 'p', text: 'This website does not use advertising or tracking cookies and does not run visitor analytics. It saves one small technical note in your browser for the current visit only, which helps the page recover if it fails to load after an update; it contains no personal information.' },
            { type: 'p', text: 'Some parts of the site load from or link to other services: thumbnails of our videos are loaded from YouTube, and buttons can take you to WhatsApp, YouTube, Instagram, Facebook or X. Those services may receive your device’s technical details (such as your IP address) when this happens, and their own privacy policies apply.' },

            { type: 'h2', text: 'How long we keep your details' },
            { type: 'p', text: 'We keep enquiry details for as long as we need them to respond and, if we work together, for the length of the project and any period the law requires for our records. You can ask us to delete them sooner at any time.' },

            { type: 'h2', text: 'Your rights' },
            { type: 'p', text: 'Under India’s Digital Personal Data Protection Act, 2023 and other applicable law, you can ask us what details we hold about you, ask us to correct or delete them, and withdraw your consent. To do any of this, or to raise a concern, contact us using the details below. We will respond as soon as we reasonably can.' },

            { type: 'h2', text: 'Keeping your details safe' },
            { type: 'p', text: 'The website is served over a secure (HTTPS) connection, and access to our inboxes is limited to our team. No method of sending or storing information online is perfectly secure, but we take reasonable care to protect what you share.' },

            { type: 'h2', text: 'Children' },
            { type: 'p', text: 'This website is meant for businesses and adults. Please do not send us personal details of anyone under 18 without a parent or guardian’s permission.' },

            { type: 'h2', text: 'Changes to this policy' },
            { type: 'p', text: 'If we change how we use personal details, we will update this page and the date at the top.' },

            { type: 'h2', text: 'Contact' },
            { type: 'p', text: `${reachUs}.` },
        ],
    },
    {
        slug: 'terms',
        title: 'Terms of Service',
        seoTitle: 'Terms of Service | CK Studio',
        seoDescription: 'The terms for using the CK Studio (Chenna Keshav Studio) website, including content ownership, enquiries and quotes, and governing law.',
        updated: '2026-10-21',
        intro: 'These terms apply to your use of this website (ckstudio.org). By using the site, you agree to them.',
        body: [
            { type: 'h2', text: 'About us' },
            { type: 'p', text: `This website is run by CK Studio (Chenna Keshav Studio), ${address}.` },

            { type: 'h2', text: 'Using this website' },
            { type: 'p', text: 'You may browse the site, share links to it and contact us through it. Please do not misuse it — for example by trying to break its security, sending spam through the enquiry form, or copying large parts of it for another website.' },

            { type: 'h2', text: 'Our content' },
            { type: 'p', text: 'The text, designs, logos, videos and images on this site belong to CK Studio or to our clients and partners, and are shown to present our work. Please do not copy, edit or reuse them without written permission. The CK Studio name and logo are our brand and may not be used to suggest a connection with us.' },

            { type: 'h2', text: 'Enquiries, quotes and projects' },
            { type: 'p', text: 'Information on this site about our services is general. Sending an enquiry does not create a contract. The scope, price, timeline, payment terms and usage rights for any project are agreed separately in writing with each client, and those agreed terms apply to that project.' },

            { type: 'h2', text: 'Accuracy' },
            { type: 'p', text: 'We work to keep the information here correct and up to date, but services, examples and details can change, and the site may occasionally contain mistakes or be unavailable.' },

            { type: 'h2', text: 'Other websites' },
            { type: 'p', text: 'Links to other websites, such as YouTube, Instagram, Facebook, X and WhatsApp, are provided for convenience. We are not responsible for their content or how they handle your information.' },

            { type: 'h2', text: 'Liability' },
            { type: 'p', text: 'The website is provided “as is”. To the extent the law allows, CK Studio is not liable for any loss arising from use of the website or reliance on its content. Nothing in these terms limits rights you have under law that cannot be limited.' },

            { type: 'h2', text: 'Privacy' },
            { type: 'p', text: 'How we handle personal details is explained in our Privacy Policy.' },

            { type: 'h2', text: 'Governing law' },
            { type: 'p', text: 'These terms are governed by the laws of India. Any disputes will be handled by the courts in Hyderabad, Telangana.' },

            { type: 'h2', text: 'Changes and contact' },
            { type: 'p', text: `We may update these terms; the date at the top shows the latest version. Questions? ${reachUs}.` },
        ],
    },
];

export const getLegalPage = (slug: string) => legalPages.find((p) => p.slug === slug);
