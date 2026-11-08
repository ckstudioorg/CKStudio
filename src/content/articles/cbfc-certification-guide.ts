/** Text of "CBFC Certification Explained: Categories, Process and Trailers (2026 Guide)". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'Films, trailers and promos shown publicly in Indian cinemas need a certificate from the Central Board of Film Certification (CBFC). Since the Cinematograph (Amendment) Act, 2023 and the Cinematograph (Certification) Rules, 2024, the categories are U, UA 7+, UA 13+, UA 16+, A and S; applications are made online through e-Cinepramaan; and certificates no longer expire.',
    keyPoints: [
        'Six categories: U, UA 7+, UA 13+, UA 16+, A and S.',
        'The UA age markers guide parents; they are not enforced at the box office.',
        'Apply online through e-Cinepramaan; trailers and promos are certified separately.',
        'Certificates are now valid permanently; A and S films need separate certification for TV.',
    ],
    body: [
        { type: 'p', text: '**This is general information, not legal advice.** Always check the CBFC’s current guidelines and fees before you apply.' },
        { type: 'h2', text: 'What do the CBFC categories mean?' },
        {
            type: 'table',
            head: ['Category', 'Meaning'],
            rows: [
                ['U', 'Unrestricted public exhibition — suitable for everyone'],
                ['UA 7+', 'Unrestricted, with parental guidance for children under 7'],
                ['UA 13+', 'Unrestricted, with parental guidance for children under 13'],
                ['UA 16+', 'Unrestricted, with parental guidance for children under 16'],
                ['A', 'Restricted to adults (18 and above)'],
                ['S', 'Restricted to a specialised audience, such as doctors or scientists'],
            ],
        },
        { type: 'p', text: 'The UA age markers replaced the single UA category. They guide parents and guardians and are not meant to be enforced by cinemas the way A certificates are.' },
        { type: 'h2', text: 'What changed with the 2023 Act and the 2024 Rules?' },
        { type: 'list', items: [
            'The UA category was split into UA 7+, UA 13+ and UA 16+.',
            'Certificates are now valid permanently, instead of for ten years.',
            'A and S films need a separate certificate to be shown on television.',
            'Unauthorised recording and transmission of films (piracy) became a specific offence.',
            'The Cinematograph (Certification) Rules, 2024 replaced the rules of 1983.',
        ] },
        { type: 'h2', text: 'How does the CBFC certification process work?' },
        { type: 'steps', items: [
            'Register and apply online on e-Cinepramaan, choosing the regional office (Hyderabad has one) and the language.',
            'Upload the required documents and pay the fee.',
            'Submit the film for examination; feature films are viewed by an Examining Committee.',
            'The committee decides the category and may ask for modifications or cuts.',
            'Make any changes and resubmit if needed.',
            'Receive the certificate, which carries a QR code for verification.',
            'Add the certificate to the start of your cinema master and [DCP](/blog/what-is-a-dcp-cinema-delivery-guide/).',
        ] },
        { type: 'h2', text: 'Do trailers, teasers and promos need certification?' },
        { type: 'p', text: 'Yes — trailers, teasers and promos shown in cinemas are certified by the CBFC, separately from the film. When e-Cinepramaan launched, the government said short films, promos and trailers under ten minutes could be submitted online. TV channels are also advised to show the CBFC certificate before broadcasting film trailers. Plan certification for each trailer and promo in your [promotion timeline](/blog/movie-promotion-timeline/), and see [teaser vs trailer vs promo](/blog/teaser-vs-trailer-vs-promo/) for what each asset is.' },
        { type: 'h2', text: 'What about YouTube and OTT releases?' },
        { type: 'p', text: 'The CBFC certifies films for public exhibition. Content released only online is covered by the IT Rules: OTT platforms classify their own titles as U, U/A 7+, U/A 13+, U/A 16+ or A, and YouTube applies its own policies. Many producers still certify trailers early because the same cut will also play in cinemas and on TV.' },
        { type: 'h2', text: 'What if you disagree with the CBFC’s decision?' },
        { type: 'p', text: 'You can ask for the film to be reviewed by a Revising Committee. The Film Certification Appellate Tribunal was abolished in 2021, so further challenges go to the High Court.' },
        { type: 'h2', text: 'How should you plan certification in a release schedule?' },
        { type: 'list', items: [
            'Apply well before the release date and keep a buffer for possible modifications.',
            'Certify the trailer early — it is usually needed in cinemas weeks before release.',
            'Keep a clean master without the certificate for OTT and international versions.',
            'Re-certify if you change the film after certification.',
        ] },
        { type: 'tip', text: 'Lock picture, sound and subtitles before you submit. Changing a certified film means applying again — and losing days you may not have before release.' },
        { type: 'p', text: 'CK Studio supports films through [post-production and delivery](/services/movie-post-production/) — editing, DI, trailers, lyrical videos and DCP outputs — and can plan your certification masters with your release schedule.' },
    ],
    faqs: [
        { q: 'How long does CBFC certification take?', a: 'It varies with the length of the film, the office’s schedule and whether modifications are requested. Apply well before release and keep a buffer.' },
        { q: 'What does UA 13+ mean?', a: 'The film is cleared for unrestricted exhibition, with a recommendation that parents guide children under 13. It is advisory, unlike an A certificate.' },
        { q: 'Does a trailer need a separate CBFC certificate?', a: 'Yes. Trailers, teasers and promos for exhibition are certified separately from the film itself.' },
        { q: 'Do films released only on YouTube need CBFC certification?', a: 'The CBFC certifies films for public exhibition. Online-only content falls under the IT Rules and platform policies, though many producers certify trailers that will also play in cinemas or on TV.' },
    ],
    sources: [
        { label: 'Central Board of Film Certification (CBFC) — official website', url: 'https://www.cbfcindia.gov.in/' },
        { label: 'e-Cinepramaan — CBFC online certification portal', url: 'https://www.ecinepramaan.gov.in/' },
        { label: 'PRS Legislative Research — The Cinematograph (Amendment) Bill, 2023', url: 'https://prsindia.org/billtrack/the-cinematograph-amendment-bill-2023' },
        { label: 'Ministry of Information and Broadcasting — advisory on CBFC certificates before telecast of film trailers (2014)', url: 'https://www.mib.gov.in/sites/default/files/2024-02/Adviosry_Advisory%20dated%2029%20May%202014%20regarding%20display%20of%20CBFC%20certificate%20before%20telecast%20of%20films%20Film%20trailers.pdf' },
    ],
};

export default article;
