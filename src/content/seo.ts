/** Search-engine data for the home page, built from the shared contact details. */
import { contact } from './contact';

export const homeSeo = {
    title: 'AI-Powered Ad Film Making',
    description:
        "CK Studio — India's premier AI-powered ad film production studio. Combining artificial intelligence with cinematic expertise for feature films, commercials, and AI-driven post-production.",
    structuredData: {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        '@id': 'https://ckstudio.org',
        name: 'CK Studio',
        alternateName: 'CK Studio - AI Ad Film Making',
        description: "India's premier AI-powered ad film production studio combining artificial intelligence with cinematic expertise.",
        url: 'https://ckstudio.org',
        logo: 'https://ckstudio.org/images/branding/logo.png',
        image: 'https://ckstudio.org/images/branding/og-image.jpg',
        telephone: contact.phone.tel,
        email: contact.email,
        address: {
            '@type': 'PostalAddress',
            streetAddress: contact.address.street,
            addressLocality: contact.address.city,
            addressRegion: contact.address.region,
            postalCode: contact.address.postalCode,
            addressCountry: contact.address.country,
        },
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: contact.hours.days,
            opens: contact.hours.opens,
            closes: contact.hours.closes,
        },
        sameAs: contact.socials.map((s) => s.url),
    },
};
