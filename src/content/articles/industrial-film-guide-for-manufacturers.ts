/** Text of "Industrial Films for Manufacturers: What to Show and How to Film a Factory". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'An industrial film shows buyers, dealers and investors that a manufacturer can deliver: its scale, process, quality checks, certifications, safety and people. Plan it around the questions your buyers ask, film during real production with safety rules followed, use drone, macro and 3D shots where they explain more than words, and make language versions for every market you sell to.',
    keyPoints: [
        'Answer your buyers’ real questions: capacity, quality, reliability.',
        'Film during live production, with safety rules followed by the crew.',
        'Use 3D animation to show what happens inside machines.',
        'Make language and length versions for dealers, exports and trade fairs.',
    ],
    body: [
        { type: 'h2', text: 'Who watches industrial films?' },
        { type: 'list', items: [
            'Buyers, distributors and dealers deciding whether to work with you',
            'Export partners who cannot easily visit your plant',
            'Investors and lenders assessing your scale',
            'Visitors at trade fairs and exhibitions',
            'New recruits and trainees',
        ] },
        { type: 'h2', text: 'Which questions should an industrial film answer?' },
        { type: 'list', items: [
            '**Capacity:** can you produce the volume I need?',
            '**Consistency:** will every batch meet the same standard?',
            '**Proof:** which certifications and tests back that up?',
            '**Lead time:** how quickly can you deliver, and how reliably?',
            '**Customisation:** can you adapt the product or packaging for me?',
            '**Support:** who do I call when something goes wrong?',
        ] },
        { type: 'p', text: 'If the film answers these clearly, it does the work of a factory visit for buyers who cannot travel.' },
        { type: 'h2', text: 'What should an industrial film show?' },
        {
            type: 'table',
            head: ['What to show', 'Why it convinces buyers'],
            rows: [
                ['Scale — aerial and wide shots of the plant', 'Proves capacity at a glance'],
                ['The process, step by step', 'Builds confidence that output is consistent'],
                ['Quality control — labs, testing, inspection', 'Shows how defects are prevented'],
                ['Certifications you hold', 'Gives independent proof (show only real, current ones)'],
                ['Safety practices and protective equipment', 'Signals a well-run, responsible operation'],
                ['People and expertise', 'Puts trusted faces to the company'],
                ['Packing, storage and dispatch', 'Reassures buyers about delivery'],
            ],
        },
        { type: 'h2', text: 'How do you film inside a factory safely?' },
        { type: 'steps', items: [
            'Visit the plant first with the production head to plan shots around the production schedule.',
            'Give the crew a safety induction and the right protective equipment.',
            'Agree which areas, processes or documents are confidential and must not appear.',
            'Plan lighting for large, mixed-light spaces and protect equipment from dust and heat.',
            'Expect loud machinery — plan for voice-over and record interviews in a quiet room.',
            'Clear any drone flights in advance: a registered drone, a certified pilot and permission for the airspace zone under India’s Drone Rules.',
        ] },
        { type: 'h2', text: 'When do 3D animation and CGI help?' },
        { type: 'p', text: 'Some of the most important things in a factory happen where a camera cannot see — inside a reactor, a mould or a machine. 3D animation and CGI cut-aways can show those processes clearly, and they also work for products that are too large, too small or not yet built. See [product videos: live shoot, CGI or AI](/blog/product-video-live-shoot-cgi-or-ai/).' },
        { type: 'h2', text: 'How long should an industrial film be?' },
        {
            type: 'table',
            head: ['Use', 'Suggested length'],
            rows: [
                ['Main company or plant film', '3 to 5 minutes'],
                ['Trade fair loop (often silent, with captions)', '1 to 2 minutes'],
                ['Dealer or sales presentation', '2 to 3 minutes'],
                ['Social media and LinkedIn cut-downs', '30 to 60 seconds'],
            ],
        },
        { type: 'h2', text: 'Why make industrial films in several languages?' },
        { type: 'p', text: 'Dealers and farmers in Telangana and Andhra Pradesh may prefer Telugu, buyers elsewhere in India Hindi, and export partners English or their own language. Recording the voice-over in each language from one edit costs little and makes the film far more persuasive. See [AI dubbing and localisation](/blog/ai-dubbing-telugu-hindi-tamil-ads/).' },
        { type: 'tip', text: 'Ask your sales team for the five questions buyers ask most often. Build the film so that it answers all five.' },
        { type: 'p', text: 'CK Studio makes industrial films and corporate documentaries for manufacturers, from planning and shoot to 3D, graphics and language versions. See our [ad films and commercials](/services/ad-films-and-commercials/) service and [VFX and CG works](/services/vfx-and-cg/).' },
    ],
    faqs: [
        { q: 'How long does it take to film a factory?', a: 'Usually one to two shoot days for a single plant, planned around the production schedule, plus time for interviews, drone shots and any 3D animation.' },
        { q: 'Can we film without stopping production?', a: 'Yes. Most industrial shoots work around live production, with the crew following safety rules and moving with the process rather than stopping it.' },
        { q: 'Do we need permission to fly a drone over our factory?', a: 'Drone flights need a registered drone and a certified pilot, and permission is required in yellow and red airspace zones such as areas near airports. A professional crew checks the Digital Sky map and arranges this in advance.' },
        { q: 'Can confidential processes be hidden?', a: 'Yes. Agree the restricted areas before the shoot, and anything sensitive can be avoided, blurred or explained with simplified animation instead.' },
    ],
    sources: [
        { label: 'Digital Sky (DGCA) — drone registration, pilot certificates and airspace map', url: 'https://digitalsky.dgca.gov.in/' },
    ],
};

export default article;
