/** Text of "Video Marketing for Schools, Colleges and Coaching Centres". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'Schools, colleges and coaching centres use video best to let parents and students see the institute for themselves: campus and facility tours, short introductions to faculty, honest student and alumni stories, course explainers, results presented accurately, and event highlights. Plan the content before the admission season, make Telugu and English versions where your audience needs them, and get written consent before filming students — from parents for minors. Follow ASCI’s guidelines for educational advertising: don’t promise ranks, marks, jobs or admissions, or make claims such as “100% placement”, unless you can prove them.',
    keyPoints: [
        'Let parents and students see the real campus and teachers.',
        'Plan before the admission season, not during it.',
        'Get written consent before filming students.',
        'Claims about results, ranks and placements must be provable.',
    ],
    body: [
        { type: 'h2', text: 'Which videos help admissions?' },
        {
            type: 'table',
            head: ['Video', 'What it shows', 'Answers the question'],
            rows: [
                ['Campus tour', 'Classrooms, labs, library, sports, transport, safety', '“What is it like there?”'],
                ['Faculty introductions', 'Teachers explaining how they teach', '“Who will teach my child?”'],
                ['Student and alumni stories', 'Real experiences and where students went next', '“Will it work for someone like me?”'],
                ['Course explainers', 'What is taught, how, and for whom', '“Is this the right course?”'],
                ['Results and achievements', 'Verified results, presented accurately', '“Does it deliver?”'],
                ['Events and culture', 'Annual day, fests, sports, clubs', '“Will my child enjoy it?”'],
                ['Admission process', 'Steps, dates, documents, fees information', '“How do I apply?”'],
            ],
        },
        { type: 'h2', text: 'What do the advertising rules say?' },
        { type: 'p', text: 'The Advertising Standards Council of India (ASCI) has specific guidelines for educational institutions, programmes and platforms, including coaching classes and ed-tech. In short: advertisements should not suggest that enrolling guarantees a rank, high marks, a job or admission unless the claim can be substantiated; they should avoid “100%” claims about things like placement or job assistance; and awards or rankings should come from credible, independent sources. Present real results with the facts behind them — for example the batch, year and exam.' },
        { type: 'h2', text: 'What about filming students?' },
        { type: 'list', items: [
            'Get written consent before featuring students; for minors, from their parents or guardians.',
            'Explain where the video will be used and for how long.',
            'Avoid showing children’s personal details, such as full names with locations or ID cards.',
            'Let students and parents withdraw consent for future use.',
        ] },
        { type: 'h2', text: 'When should institutes plan admission videos?' },
        { type: 'p', text: 'Admission decisions in the Telugu states cluster around exam results, roughly from February to June, depending on the level. Shoot campus and event content during the year when the campus is full and lively, and edit admission ads and explainers before results arrive. See our [festival marketing calendar](/blog/festival-marketing-calendar-telangana-andhra/) for the year’s other key moments.' },
        { type: 'h2', text: 'Where should education videos be shared?' },
        { type: 'list', items: [
            'YouTube for tours, explainers and longer stories — and as ads targeted to your area: see [YouTube ads for small businesses](/blog/youtube-ads-for-small-businesses-india/).',
            'Instagram Reels for student life, events and quick explainers.',
            'Your website’s admissions page, with the campus tour near the enquiry form.',
            'WhatsApp for parents who have enquired, with the admission process video.',
            'Google Business Profile, where parents check location and reviews.',
        ] },
        { type: 'h2', text: 'How do you know if admission videos are working?' },
        { type: 'list', items: [
            'Enquiries: count calls, WhatsApp messages and form submissions, and ask every new enquiry how they heard of you.',
            'Campus visits booked after people watched the tour or the admission-process video.',
            'Watch time on the campus tour and course explainers — where do parents stop watching?',
            'Questions in comments and messages, which show what the next video should answer.',
            'Applications and admissions per channel, compared with last year’s season.',
        ] },
        { type: 'tip', text: 'Film the campus tour from a parent’s point of view: arrival, safety, classrooms, food and transport. That is what parents ask about first.' },
        { type: 'p', text: 'Student and parent stories follow the same principles as [customer testimonial videos](/blog/customer-testimonial-videos/). CK Studio produces admission films, campus tours and ads for education institutes — see our [ad films and commercials](/services/ad-films-and-commercials/) service.' },
    ],
    faqs: [
        { q: 'Can a coaching centre advertise its toppers’ ranks?', a: 'Yes, if the results are genuine and can be substantiated, presented accurately with details such as the exam and year, and with the students’ consent. Avoid implying that every student will achieve the same.' },
        { q: 'Can education ads claim “100% placement”?', a: 'ASCI’s guidelines say educational ads should not make 100% claims about things such as placement or job assistance, and other result claims must be substantiated.' },
        { q: 'Do I need permission to show students in videos?', a: 'Yes. Get written consent before featuring students, and from parents or guardians for minors, explaining where and how long the video will be used.' },
        { q: 'Should school videos be in Telugu or English?', a: 'Many institutes in Telangana and Andhra Pradesh use both: English for the institute’s identity and Telugu versions for parents who are more comfortable in Telugu.' },
    ],
    sources: [
        { label: 'ASCI — Guidelines for Educational Institutions, Programmes and Platforms (PDF)', url: 'https://www.ascionline.in/wp-content/uploads/2023/05/ASCI-GUIDELINES-FOR-EDUCATIONAL-INSTITUTIONS-PROGRAMMES-AND-PLATFORMS.pdf' },
        { label: 'ASCI — advertising codes and guidelines', url: 'https://www.ascionline.in/' },
    ],
};

export default article;
