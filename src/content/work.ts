/** Partners, Portfolio and Why Choose Us content. Edit words here; layout and motion live in src/sections/. */

export const partners = {
    label: 'Our Partners',
    title: { lead: 'Trusted by', highlight: 'Industry Leaders' },
    intro: 'We are proud to have collaborated with a diverse range of creative partners and leading brands.',
    names: [
        'Gangothri Nutrients & Fertilizers', 'Vande Media', 'Pride of Bharat', 'Plasil Organics', 'Gangothri InfraEdge',
        'Palik Studios', 'Sampathnandhi Teamworks', 'Kuviyam Mediaworks', 'Aswini Media', 'AIROC',
        'Harivillu Developers', 'CM Productions', 'Hindu Law Firm', 'LN Associates', "Shree Radha's VS Group",
    ],
    more: 'And many more…',
    quote: { lead: "The best marketing doesn't feel like marketing — it feels like", highlight: 'cinema' },
};

export type WorkGroup = 'Movies' | 'Commercials' | 'Events';

export interface WorkItem {
    title: string;
    category: string;
    group: WorkGroup;
    url?: string;
    youtubeId?: string;
    /** Custom thumbnail, e.g. '/images/portfolio/works/gangothri-ad.webp' (1280x720). Falls back to the YouTube still. */
    image?: string;
    /** Internal note for the team (not shown on the site). */
    note?: string;
}

const pending = (titles: string[], group: WorkGroup, category: string, note = 'Project image and video link pending'): WorkItem[] =>
    titles.map((title) => ({ title, group, category, note }));

export const portfolio = {
    label: 'Our Portfolio',
    title: { lead: 'Our', highlight: 'Work' },
    intro: 'Explore our work across movies, commercials, and events.',
    groups: ['Movies', 'Commercials', 'Events'] as WorkGroup[],
    more: 'And many more…',
    comingSoon: 'Visuals coming soon',
    works: [
        { title: 'Baali Movie Teaser', group: 'Movies', category: 'Movie Teaser', url: 'https://www.youtube.com/watch?v=MIL0vVMcZ9k', youtubeId: 'MIL0vVMcZ9k' },
        { title: 'Odela 2', group: 'Movies', category: 'Lyrical Video', url: 'https://www.youtube.com/watch?v=C8l8U5PxQgk', youtubeId: 'C8l8U5PxQgk' },
        { title: 'Seetimaar Lyrical Song', group: 'Movies', category: 'Lyrical Video', url: 'https://www.youtube.com/watch?v=6Anj4GBzS28', youtubeId: '6Anj4GBzS28' },
        { title: 'Ugly Story Lyrical Songs', group: 'Movies', category: 'Lyrical Video', url: 'https://www.youtube.com/watch?v=wFJbGtddTv0', youtubeId: 'wFJbGtddTv0' },
        { title: 'Babu Bullshit Guy Lyrical Songs', group: 'Movies', category: 'Lyrical Video', url: 'https://www.youtube.com/watch?v=LKDJZ_yBDlA', youtubeId: 'LKDJZ_yBDlA' },
        { title: 'Aajyam Lyrical Song', group: 'Movies', category: 'Lyrical Video', url: 'https://www.youtube.com/watch?v=9Gl7CNrfgSo', youtubeId: '9Gl7CNrfgSo' },
        ...pending(['Beach Road Chethan', 'Bhima', 'Beauty'], 'Movies', 'Movie'),
        { title: 'Gangothri Ad', group: 'Commercials', category: 'Commercial', note: 'Final thumbnail and video link required' },
        ...pending(['Plasil Organics', 'Vande Media', 'Pride of Bharat'], 'Commercials', 'Commercial'),
        ...pending(['AIROC', 'OBR', 'Jayaho NTR', 'CMMA'], 'Events', 'Event'),
    ] as WorkItem[],
};

export const whyUs = {
    label: 'Why Choose Us',
    title: { lead: 'Why', highlight: 'CK Studio?' },
    intro: 'Your vision deserves more than just technical execution — it deserves artistry, AI intelligence, and precision that creates cinematic masterpieces.',
    strengths: [
        'AI-First Production Pipeline', 'End-to-End Expertise', 'Cutting-Edge AI Technology', 'Proven Track Record (150+ Projects)',
        'Skilled & Creative Team', 'Human-AI Collaborative Approach', 'Customized AI Solutions', 'Competitive Pricing',
        'Fast AI-Accelerated Turnaround', 'Global Delivery & Standards',
    ],
    commitment: {
        total: '100%',
        label: 'Commitment',
        team: { value: 80, label: 'Dedicated Creative & AI Team' },
        magic: { value: 20, label: "CK's Magic at Work" },
    },
    stats: [
        { value: 150, suffix: '+', label: 'Projects Delivered' },
        { value: 50, suffix: '+', label: 'Brands Served' },
        { value: 10, suffix: '+', label: 'Years Experience' },
        { value: 98, suffix: '%', label: 'Client Satisfaction' },
    ],
};
