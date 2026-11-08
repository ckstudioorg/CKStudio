/** Text of "Video Marketing for Hospitals and Clinics in India: What’s Allowed". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'Hospitals and clinics in India can use video to educate and inform — explaining conditions, procedures, facilities and how to prepare for a visit — but the medical ethics regulations for doctors (the 2002 Indian Medical Council regulations, which remain in force) treat soliciting patients as unethical, and the Drugs and Magic Remedies Act bans advertising cures for the diseases it lists. Keep videos factual and educational, avoid guarantees and “best doctor” claims, and get written consent before showing any patient.',
    keyPoints: [
        'Educate, don’t solicit: explain conditions and procedures in plain language.',
        'No promised outcomes, “miracle” results or unprovable superlatives.',
        'Written consent from every patient shown — and protect everyone else’s privacy.',
        'Check current rules with your legal adviser before running promotional ads.',
    ],
    body: [
        { type: 'p', text: 'This guide is general information, not legal advice. Medical advertising rules in India are strict and under review, so confirm the current position before you publish.' },
        { type: 'h2', text: 'What kinds of hospital videos work?' },
        {
            type: 'table',
            head: ['Video', 'Why it helps'],
            rows: [
                ['Doctor explainers', 'A specialist explains a condition or treatment in plain language — trust through expertise.'],
                ['Procedure preparation', '“What to expect” before a scan, surgery or test — calmer, better-prepared patients.'],
                ['Facility tours', 'Wards, labs, accessibility and parking — practical information for families.'],
                ['Health awareness', 'Seasonal and awareness-day content — dengue precautions, heart health, check-up reminders.'],
                ['Patient stories', 'Real experiences shared with consent, without promises of results.'],
                ['Careers', 'Nursing and staff culture, for recruitment.'],
            ],
        },
        { type: 'h2', text: 'What are the rules on medical advertising in India?' },
        { type: 'p', text: '**Medical ethics.** The Indian Medical Council (Professional Conduct, Etiquette and Ethics) Regulations, 2002 treat soliciting patients — directly or indirectly, by doctors or by institutions — as unethical, and limit what doctors may announce about themselves. Health education without self-promotion is allowed. The National Medical Commission notified new professional conduct regulations in 2023 but then put them on hold, so the 2002 regulations continue to apply, and state medical councils have acted against doctors over advertisements.' },
        { type: 'p', text: '**The Drugs and Magic Remedies (Objectionable Advertisements) Act, 1954** prohibits advertisements for drugs or remedies claiming to treat the diseases listed in its schedule, and bans “magic remedies”. **Consumer protection law and the ASCI code** apply to every health ad too: claims must be truthful and provable.' },
        { type: 'list', items: [
            'Avoid promised outcomes: “100% cure”, “guaranteed results”, “painless”.',
            'Avoid “best hospital” or “No. 1 doctor” claims you can’t prove.',
            'Avoid before-and-after visuals that could mislead.',
            'Avoid fear and pressure (“book now before it’s too late”).',
            'Doctors should not endorse products or medicines in videos.',
        ] },
        { type: 'tip', text: 'Frame every video as the answer to a patient’s question. If a line sounds like a sales pitch, rewrite it as information.' },
        { type: 'h2', text: 'How should you handle patient consent and privacy?' },
        { type: 'list', items: [
            '**Written consent** from any patient shown, stating where and for how long the video will be used. For children, a parent or guardian consents.',
            '**Plan for withdrawal** — if a patient changes their mind later, be ready to remove the video.',
            '**Protect others** — no recognisable patients in the background, and no names, files or monitor screens in view.',
            '**Film with permission and care** — never in wards or ICUs without the hospital’s approval, and never when it interferes with care.',
        ] },
        { type: 'h2', text: 'How do you make doctor explainers people watch?' },
        { type: 'list', items: [
            '**One question per video** — “What is a stent?”, not “Everything about heart health”.',
            '**Plain words** and short sentences; explain medical terms the first time they appear.',
            '**One to three minutes**, with captions — many people watch without sound.',
            '**Visuals** — simple animation shows what happens inside the body far better than words; see [animated explainer videos](/blog/animated-explainer-videos/).',
            '**Languages** — Telugu, Hindi and English versions reach far more patients; see [subtitles and captions](/blog/subtitles-and-captions-guide/).',
            '**State credentials factually** — name, qualifications and department, nothing more.',
            '**End with guidance** — “talk to your doctor” rather than “book now with a discount”.',
        ] },
        { type: 'h2', text: 'Where should hospital videos be published?' },
        { type: 'p', text: 'On your website, next to each department or condition page; on YouTube, where people search for health questions; on Instagram and Facebook for awareness content; and on WhatsApp, to send preparation videos to patients after they book an appointment. A clear, honest [website](/blog/small-business-website-checklist/) and an accurate [Google Business Profile](/blog/google-business-profile-guide-hyderabad/) matter as much as the videos.' },
    ],
    faqs: [
        { q: 'Can a hospital advertise in India?', a: 'Hospitals do publish information and awareness campaigns, but the medical ethics regulations treat soliciting patients as unethical and the Drugs and Magic Remedies Act bans certain claims. Keep content factual and educational, and take legal advice before running promotional ads.' },
        { q: 'Can we show patient testimonials?', a: 'Only with the patient’s written consent, and without promising results or implying everyone will have the same outcome. Stories about care and experience are safer than claims about cures.' },
        { q: 'Can our doctors appear in videos?', a: 'Yes, for education: explaining conditions, procedures and how to stay healthy. Doctors should avoid self-promotion and should not endorse products or medicines.' },
        { q: 'Do we need consent to film inside our hospital?', a: 'You need the hospital’s approval for any filming, and written consent from any patient, visitor or staff member who can be recognised. Plan shoots so care is never disturbed.' },
    ],
    sources: [
        { label: 'National Medical Commission — official website', url: 'https://www.nmc.org.in/' },
        { label: 'Medical Dialogues — NMC puts the 2023 professional conduct regulations on hold', url: 'https://medicaldialogues.in/health-news/nmc/breaking-news-nmc-puts-its-controversial-registered-medical-practitioner-professional-conduct-regulations-2023-put-on-hold-116314' },
        { label: 'Drugs and Magic Remedies (Objectionable Advertisements) Act, 1954 (copy hosted by CBFC)', url: 'https://cbfcindia.gov.in/cbfcAdmin/assets/pdf/Drugs.pdf' },
        { label: 'ASCI — Advertising Standards Council of India', url: 'https://www.ascionline.in/' },
    ],
};

export default article;
