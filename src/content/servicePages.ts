/**
 * One page per service (address: /services/<slug>/). Edit the words here; the layout lives in src/pages/ServicePage.tsx.
 * `slug` must match the slug of the service in content/services.ts.
 * `seoTitle` (under ~65 characters) and `seoDescription` (under ~155) are what Google shows.
 * Only write what is true: no invented clients, prices or timelines.
 */
import type { WorkGroup } from './work';

export interface ServicePage {
    slug: string;
    name: string;
    seoTitle: string;
    seoDescription: string;
    headline: { lead: string; highlight: string };
    intro: string;
    offerings: { title: string; text: string }[];
    goodFor: string[];
    /** Which portfolio items to show: a portfolio group, optionally narrowed to some categories */
    work?: { group: WorkGroup; categories?: string[] };
    articles: string[];
    faqs: { question: string; answer: string }[];
}

export const servicePageText = {
    label: 'Service',
    breadcrumbServices: 'Services',
    included: "What's included",
    goodFor: 'Good for',
    work: 'Recent work',
    faqs: 'Questions',
    articles: 'Read more',
    others: 'Other services',
    cta: { title: 'Tell us about your project', text: 'Share a few details and we will call you back within one working day.', primary: 'Start Your Project', secondary: 'WhatsApp Us' },
    notFound: { title: 'Service not found', text: 'This service page may have moved.', back: 'See all services' },
};

export const servicePages: ServicePage[] = [
    {
        slug: 'ad-films-and-commercials',
        name: 'Ad Films & Commercials',
        seoTitle: 'Ad Film Production in Hyderabad | AI Ad Films & TVCs | CK Studio',
        seoDescription:
            'AI ad films, TVCs, corporate, brand and industrial films, product shoots and investor videos — planned, made and finished by CK Studio in Hyderabad.',
        headline: { lead: 'Ad films and', highlight: 'commercials' },
        intro:
            'From a one-line idea to the final export, we write, produce and finish ad films for brands, businesses and start-ups. Some ideas are best made entirely with AI, some need a live shoot, and many work best as a mix — we recommend the right approach for your brief and budget.',
        offerings: [
            { title: 'AI ad films', text: 'Ads made from script to final cut with AI software — visuals, motion and finishing — directed and polished by our editors.' },
            { title: 'TVC', text: 'Television commercials prepared for broadcast, with cut-downs for YouTube, Instagram and other platforms.' },
            { title: 'Creative designing', text: 'Key visuals, posters and campaign artwork that carry the film’s look across print and social media.' },
            { title: 'AI photoshoot & product shoot', text: 'Product and lifestyle images created with AI or shot for real, then retouched for ads, catalogues and online stores.' },
            { title: 'Corporate films', text: 'Company profiles that explain who you are, what you do and why customers and talent should choose you.' },
            { title: 'Industrial films', text: 'Plants, processes and capabilities shown clearly for buyers, partners, trade shows and certifications.' },
            { title: 'Brand films', text: 'Story-led films about what your brand stands for, made to be shared.' },
            { title: 'Investor videos', text: 'Short, clear films for pitches, fundraising and investor meetings.' },
            { title: 'Training content', text: 'Explainer and training videos for teams, dealers and customers.' },
            { title: 'Corporate documentaries', text: 'Longer films about milestones, founders and company journeys.' },
        ],
        goodFor: ['Product launches', 'Festive and seasonal campaigns', 'Real estate and infrastructure', 'Agriculture and manufacturing brands', 'Start-ups and investor pitches'],
        work: { group: 'Commercials' },
        articles: ['ai-ad-films-what-ai-can-and-cannot-do', 'company-start-package-brand-essentials'],
        faqs: [
            {
                question: 'Can an ad film be made entirely with AI?',
                answer: 'Yes, many ideas can be made from script to final cut with AI software. Some still work better with a live shoot or a mix of both — for example when real people, real products or exact locations matter. We’ll tell you honestly which approach suits your idea.',
            },
            {
                question: 'What do you need from us to get started?',
                answer: 'A short brief is enough: what you’re advertising, who it’s for, where the ad will run, the length you have in mind, your deadline and any brand guidelines or reference ads you like. The enquiry form on our home page is a good place to start.',
            },
            {
                question: 'Can you make versions for TV, YouTube and Instagram?',
                answer: 'Yes. We plan the different lengths and shapes (wide, vertical and square) from the start, so one campaign works on every screen.',
            },
        ],
    },
    {
        slug: 'design-and-branding',
        name: 'Design & Branding',
        seoTitle: 'Design & Branding Studio in Hyderabad | CK Studio',
        seoDescription:
            'Publicity designs, event branding kits, pitch decks, start-up brand packages, product retouching and catalogues — designed by CK Studio in Hyderabad.',
        headline: { lead: 'Design that sells', highlight: 'the story' },
        intro:
            'Good design makes a brand look as good as its work. We design publicity material, pitch decks, event branding and complete start-up brand packages — with the same eye for detail we bring to film.',
        offerings: [
            { title: 'Publicity designs', text: 'Posters, banners, hoardings and social media creatives for launches, events and campaigns.' },
            { title: 'Event branding kit', text: 'A matching set of stage backdrops, standees, badges, invitations and social posts for your event.' },
            { title: 'Commercial pitch deck', text: 'Clear, persuasive presentations for clients, partners and investors.' },
            { title: 'Company start package', text: 'Everything a new business needs to look established: logo, letterhead, visiting cards, presentation template, brochures and flyers.' },
            { title: 'Product retouching', text: 'Clean, consistent product images for catalogues, packaging and online stores.' },
            { title: 'Product catalogues & brochures', text: 'Catalogues and brochures that present your range clearly, for print and for sharing on WhatsApp and email.' },
        ],
        goodFor: ['New businesses and start-ups', 'Product launches', 'Events and conferences', 'Investor and client meetings', 'Dealers and distributors'],
        articles: ['company-start-package-brand-essentials', 'how-to-build-a-movie-pitch-deck'],
        faqs: [
            {
                question: 'What is included in the Company Start Package?',
                answer: 'A logo and a matching set of business essentials: letterhead, visiting cards, a presentation template, brochures and flyers — all designed to look like one brand.',
            },
            {
                question: 'Can you design for both print and screens?',
                answer: 'Yes. We prepare print-ready files for brochures, flyers, cards and banners, and screen versions for social media, presentations and WhatsApp sharing.',
            },
            {
                question: 'Can design and video be done together?',
                answer: 'Yes. Because we also make ad films, your posters, decks and videos can share one look — which makes a campaign feel bigger and more professional.',
            },
        ],
    },
    {
        slug: 'movie-post-production',
        name: 'Movie Post-Production',
        seoTitle: 'Movie Post-Production in Hyderabad | DI, DCP, Trailers | CK Studio',
        seoDescription:
            'Movie editing, DI and colour correction, DCP outputs, teasers, trailers, lyrical videos, publicity designs, pitch decks and AI pre-looks — CK Studio, Hyderabad.',
        headline: { lead: 'Movie works, from pitch to', highlight: 'premiere' },
        intro:
            'We support films at every step after the idea: pitch decks and AI pre-looks to win backing, editing and DI to shape the film, teasers, trailers and lyrical videos to build buzz, and DCP outputs for the cinema release. Take one service or hand us the whole post-production.',
        offerings: [
            { title: 'Movie publicity designs', text: 'First looks, posters, title designs and social media creatives for the release campaign.' },
            { title: 'Teaser & trailer works', text: 'Cutting, sound and finishing of teasers, trailers and promos.' },
            { title: 'Pre- and post-credit design', text: 'Title sequences and end credits designed to match the film.' },
            { title: 'Lyrical videos', text: 'Lyric videos that turn a song release into a campaign of its own.' },
            { title: 'Professional movie pitch deck', text: 'Decks for producers, investors, exhibitors and digital partners that present the story, look and plan clearly.' },
            { title: 'Movie editing', text: 'Editing that finds the rhythm of each scene and the shape of the whole film.' },
            { title: 'AI pre-looks for movies', text: 'Concept frames that show the film’s colour, lighting, locations and mood before the shoot.' },
            { title: 'AI pre-teaser for movies', text: 'A short pitching video that answers “what will this film look like?”' },
            { title: 'DI / colour correction', text: 'Correction and grading in the digital intermediate, prepared for cinema, TV and phones.' },
            { title: 'DCP outputs', text: 'Digital Cinema Packages ready for theatrical screening.' },
            { title: 'Post-production supervision', text: 'One team keeping the edit, DI, VFX, sound and deliveries on schedule.' },
        ],
        goodFor: ['Feature films', 'Independent and debut filmmakers', 'Producers pitching a project', 'Music and song releases', 'OTT and digital releases'],
        work: { group: 'Movies' },
        articles: ['ai-pre-looks-and-pre-teasers-for-movies', 'how-to-build-a-movie-pitch-deck', 'di-and-colour-correction-explained', 'what-is-a-dcp-cinema-delivery-guide', 'lyrical-videos-turning-a-song-into-a-campaign'],
        faqs: [
            {
                question: 'Can you deliver a DCP for a cinema release?',
                answer: 'Yes. DCP outputs are part of our movie works, and we can prepare them together with the DI so the film looks right on the big screen.',
            },
            {
                question: 'Do you take on the whole post-production or single jobs?',
                answer: 'Either. We can supervise post-production from edit to delivery, or take on one piece of work such as the DI, a trailer, a lyrical video or the publicity designs.',
            },
            {
                question: 'What is an AI pre-look?',
                answer: 'A set of concept frames made with AI that shows how the film will feel — colour, lighting, locations and mood — so producers and investors can see the vision before the shoot. Our article on pre-looks and pre-teasers explains more.',
            },
        ],
    },
    {
        slug: 'social-media-and-web-design',
        name: 'Social Media & Web Design',
        seoTitle: 'Social Media Management & Web Design, Hyderabad | CK Studio',
        seoDescription:
            'Social media strategy and upkeep, Meta (Facebook and Instagram) ad campaigns and AI-integrated website design for brands — CK Studio, Hyderabad.',
        headline: { lead: 'Stay seen,', highlight: 'every day' },
        intro:
            'A great ad film needs a place to live and an audience to reach. We plan and run your social media, create the posts and videos, run ad campaigns on Facebook and Instagram, and design websites that turn visitors into enquiries.',
        offerings: [
            { title: 'AI-integrated web designing', text: 'Fast, modern websites with enquiry forms and smart features built in.' },
            { title: 'Social media strategy', text: 'What to post, where and how often — planned around your goals and audience.' },
            { title: 'Social media maintenance', text: 'Regular posts, reels and stories created and published for you.' },
            { title: 'Digital ad campaigns on Meta', text: 'Facebook and Instagram ad campaigns planned, run and improved over time.' },
        ],
        goodFor: ['Local businesses', 'Brands launching online', 'Movie and song promotions', 'Real estate projects', 'Events'],
        articles: ['lyrical-videos-turning-a-song-into-a-campaign', 'company-start-package-brand-essentials'],
        faqs: [
            {
                question: 'Do you run paid ads on Facebook and Instagram?',
                answer: 'Yes. We plan and run ad campaigns on Meta (Facebook and Instagram) and adjust them as results come in.',
            },
            {
                question: 'Do you also create the posts and videos?',
                answer: 'Yes. The same team that makes our ad films and designs creates your social media content, so everything looks consistent.',
            },
            {
                question: 'Can you build a website for my business?',
                answer: 'Yes. We design websites with enquiry forms and modern, AI-integrated features, and can link them with your social media and ad campaigns.',
            },
        ],
    },
    {
        slug: 'vfx-and-cg',
        name: 'VFX & CG Works',
        seoTitle: 'VFX, CGI & Product Videos in Hyderabad | CK Studio',
        seoDescription:
            'Product videos, AI compositing, CGI enhancements, logo animation and lyrical videos — visual effects and CG work by CK Studio in Hyderabad.',
        headline: { lead: 'Visual effects that', highlight: 'feel real' },
        intro:
            'Visual effects should serve the story, not distract from it. We create product videos and logo animations, add CGI to live footage, and use AI compositing to build shots that would be slow or expensive to film.',
        offerings: [
            { title: 'Product videos', text: 'Clean, eye-catching product films for ads, websites and online stores.' },
            { title: 'Lyrical videos', text: 'Animated lyric videos with motion graphics and effects.' },
            { title: 'AI compositing', text: 'Combining footage, AI-generated elements and graphics into one believable shot.' },
            { title: 'CGI enhancements', text: 'Adding or improving elements in footage you have already shot.' },
            { title: 'Logo animation', text: 'Animated logos for the start and end of your films, reels and presentations.' },
        ],
        goodFor: ['Product launches', 'Movie songs and promotions', 'Brand intros and outros', 'Shots too costly to film', 'Fixing or improving existing footage'],
        work: { group: 'Movies', categories: ['Lyrical Video'] },
        articles: ['lyrical-videos-turning-a-song-into-a-campaign', 'ai-ad-films-what-ai-can-and-cannot-do'],
        faqs: [
            {
                question: 'Can you add effects to footage we have already shot?',
                answer: 'Yes. CGI enhancements and compositing are usually done on existing footage — share a sample and we’ll tell you what’s possible.',
            },
            {
                question: 'Can you animate our logo?',
                answer: 'Yes. We create logo animations for the start and end of ad films, reels, YouTube videos and presentations.',
            },
            {
                question: 'What is AI compositing?',
                answer: 'It means combining real footage, AI-generated elements and graphics into a single shot that looks natural — useful for scenes that would be slow, risky or expensive to film.',
            },
        ],
    },
];

export const getServicePage = (slug?: string) => servicePages.find((p) => p.slug === slug);
