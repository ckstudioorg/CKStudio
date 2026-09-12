/**
 * CKStudio Contact Configuration
 * Centralized contact information and WhatsApp configuration
 */

export const contactConfig = {
  // Studio Information
  studio: {
    name: 'CK Studio',
    fullName: 'Chenna Keshav Studio',
    tagline: 'AI-Powered Cinematic Storytelling',
  },

  // Physical Address
  address: {
    line1: '11-008 N/R, Gajularamaram',
    line2: 'IDA Jeedimetla',
    city: 'Hyderabad',
    state: 'Telangana',
    postalCode: '500055',
    country: 'India',
    formatted: 'CK Studio, 11-008 N/R, Gajularamaram, IDA Jeedimetla, Hyderabad, Telangana 500055, India',
    mapsUrl: 'https://maps.google.com/?q=CK+Studio+11-008+N%2FR+Gajularamaram+IDA+Jeedimetla+Hyderabad',
    coordinates: {
      lat: 17.385044,
      lng: 78.486671,
    },
  },

  // Phone
  phone: {
    display: '9700 970 762',
    tel: '+919700970762',
    international: '+91 9700 970 762',
  },

  // Email
  email: {
    address: 'ckstudio.org@gmail.com',
    subject: 'Inquiry from CK Studio Website',
    body: 'Hi CK Studio team,\n\nI\'m interested in your AI-powered film production services.\n\nProject details:\n- Type: \n- Timeline: \n- Budget range: \n\nLooking forward to discussing!',
  },

  // WhatsApp
  whatsapp: {
    number: '919700970762',
    defaultMessage: 'Hi! I\'m interested in your AI-powered film production services.',
    // Context-specific messages
    contextMessages: {
      hero: 'Hi! I saw your hero section and I\'m interested in working with CK Studio.',
      services: 'Hi! I\'m interested in your {serviceName} services.',
      portfolio: 'Hi! I loved your work on "{projectName}" and would like to discuss a similar project.',
      cta: 'Hi! I\'m ready to start my project with CK Studio.',
      contact: 'Hi! I\'d like to get in touch with CK Studio.',
      footer: 'Hi! I found your contact info in the footer and wanted to reach out.',
    },
  },

  // Social Links
  social: {
    facebook: {
      url: 'https://www.facebook.com/CKStudio.org/',
      label: 'Facebook',
      ariaLabel: 'CK Studio on Facebook',
    },
    twitter: {
      url: 'https://x.com/CKStudio_Music',
      label: 'X (Twitter)',
      ariaLabel: 'CK Studio on X',
    },
    youtube: {
      url: 'https://www.youtube.com/@CKStudio-Music',
      label: 'YouTube',
      ariaLabel: 'CK Studio on YouTube',
    },
    instagram: {
      url: 'https://www.instagram.com/ckstudio_music/',
      label: 'Instagram',
      ariaLabel: 'CK Studio on Instagram',
    },
    linkedin: {
      url: 'https://www.linkedin.com/company/ck-studio/',
      label: 'LinkedIn',
      ariaLabel: 'CK Studio on LinkedIn',
    },
  },

  // Business Hours
  hours: {
    weekdays: 'Monday - Saturday: 9:00 AM - 6:00 PM IST',
    sunday: 'Sunday: Closed',
    timezone: 'IST (UTC+5:30)',
    schema: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
  },

  // Services for context
  services: [
    'Commercials',
    'Designing',
    'Movie Works',
    'Social Media Management',
    'VFX & CG Works',
  ] as const,

  // Helper functions
  helpers: {
    // Generate WhatsApp URL with context
    getWhatsAppUrl: (context: 'default' | 'hero' | 'services' | 'portfolio' | 'cta' | 'contact' | 'footer' = 'default', params?: Record<string, string>): string => {
      const baseMessage = context === 'default'
        ? contactConfig.whatsapp.defaultMessage
        : contactConfig.whatsapp.contextMessages[context];

      let message: string = baseMessage;
      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          message = message.replace(`{${key}}`, value);
        });
      }

      return `https://wa.me/${contactConfig.whatsapp.number}?text=${encodeURIComponent(message)}`;
    },

    // Generate mailto link
    getMailtoUrl: (subject?: string, body?: string): string => {
      const params = new URLSearchParams();
      if (subject) params.append('subject', subject);
      if (body) params.append('body', body);
      return `mailto:${contactConfig.email.address}?${params.toString()}`;
    },

    // Generate tel link
    getTelUrl: (): string => `tel:${contactConfig.phone.tel}`,

    // Generate maps link
    getMapsUrl: (): string => contactConfig.address.mapsUrl,

    // Format address for display
    getFormattedAddress: (multiline = false): string => {
      if (multiline) {
        return `${contactConfig.address.line1}\n${contactConfig.address.line2}\n${contactConfig.address.city}, ${contactConfig.address.state} ${contactConfig.address.postalCode}`;
      }
      return contactConfig.address.formatted;
    },
  },
} as const;

export type ContactConfig = typeof contactConfig;
export type ServiceName = typeof contactConfig.services[number];

export default contactConfig;