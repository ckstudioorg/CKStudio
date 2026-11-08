/** Text of "How to Run Your Ad in Cinemas: Certification, DCP and Booking". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'To run an ad in Indian cinemas you need three things: an ad finished for the big screen, a CBFC certificate for it (anything shown publicly in a cinema, ads included, is certified under the Cinematograph Act), and screen time booked with a cinema chain or an in-cinema advertising network. The seller tells you the file they need — usually a cinema package called a DCP — and plays your ad before the film on the screens and weeks you book.',
    keyPoints: [
        'Cinema ads are certified by the CBFC before they can be shown — plan time for it.',
        'You book by screens, cities and weeks, through a cinema chain or an in-cinema ad network.',
        'Deliver a cinema-ready file (usually a DCP) with a sound mix made for a cinema hall.',
        'Design for a giant screen and a seated audience: bold images, few words, a clear local call to action.',
    ],
    body: [
        { type: 'h2', text: 'Why advertise in cinemas?' },
        { type: 'p', text: 'A cinema audience is seated, facing a huge screen with powerful sound, and phones are (mostly) away. Your ad is seen at full size, in the dark, just before the film people chose to watch. For a local business that is valuable in a second way: you can pick the exact screens near your customers — a showroom in Kukatpally can book the theatres its buyers actually go to, rather than paying to reach the whole state.' },
        { type: 'p', text: 'Cinema works best alongside other media. It builds presence and recall; your [Instagram, YouTube and WhatsApp](/blog/advertising-media-telangana-andhra/) activity then keeps the conversation going after people leave the theatre.' },
        { type: 'h2', text: 'What are the steps to run an ad in cinemas?' },
        { type: 'steps', items: [
            '**Decide where and when.** Which cities and theatres are near your customers, and which weeks matter — a festival release week, a store opening, a season sale.',
            '**Get a quote.** Ask the cinema chain or ad network for the screens, number of shows, the slot lengths they sell and where your ad sits in the break before the film.',
            '**Make or adapt the ad for cinema.** Check the picture holds up on a big screen and plan a proper cinema sound mix.',
            '**Certify the ad with the CBFC.** Apply online through the e-Cinepramaan portal and keep the certificate details ready for the seller.',
            '**Deliver the file in the format the seller asks for** — usually a DCP — before their deadline.',
            '**Ask for proof of play.** Screening reports show which screens and shows ran your ad.',
        ] },
        { type: 'h2', text: 'Do cinema ads need a CBFC certificate?' },
        { type: 'p', text: 'Yes. Under the Cinematograph Act, 1952, films shown to the public must be certified, and that covers advertisements, trailers and promos played in theatres, not only feature films. The Central Board of Film Certification (CBFC) handles applications online through **e-Cinepramaan**. Each version you plan to show — a 30-second cut and a 15-second cut, or a Telugu and a Hindi version — is its own film for certification, so certify every version you will play.' },
        { type: 'p', text: 'Build certification time into your schedule, and make sure the ad follows the advertising rules that apply in any medium: honest claims you can prove, and no misleading comparisons. The Advertising Standards Council of India (ASCI) publishes the codes most advertisers follow.' },
        { type: 'h2', text: 'What file do cinemas need?' },
        { type: 'p', text: 'Digital cinemas play content from a **DCP** (Digital Cinema Package), the same kind of file a feature film arrives in — our [DCP guide](/blog/what-is-a-dcp-cinema-delivery-guide/) explains it. Some advertising networks that serve many single-screen theatres use their own playback systems and ask for a high-quality master file instead, which they convert themselves. Always ask the seller for their technical sheet before you finish the ad.' },
        {
            type: 'table',
            head: ['Item', 'What to check'],
            rows: [
                ['Frame and aspect ratio', 'Cinema DCPs are usually 2K “Flat” (1998×1080, 1.85:1) or “Scope” (2048×858, 2.39:1). A 16:9 TV ad is fitted inside with thin borders, or reframed.'],
                ['Frame rate', 'Cinema playback is usually 24 frames per second; a 25 fps TV master needs a proper conversion.'],
                ['Sound', 'A cinema mix (often 5.1 surround) made for a large hall. A mix made for phones or TV can sound harsh or quiet in a theatre — see [sound design and mixing](/blog/sound-design-and-mixing/).'],
                ['Length', 'Match the slot you booked exactly — sellers sell fixed lengths.'],
                ['Text and logos', 'Keep them inside a safe area and large enough to read comfortably, without crowding the frame.'],
            ],
            caption: 'What to check when preparing a cinema ad',
        },
        { type: 'h2', text: 'How do you make an ad that works on a cinema screen?' },
        { type: 'list', items: [
            '**Think big and simple.** One strong image fills a cinema screen; busy layouts and small text get lost.',
            '**Use the sound system.** A rich, well-mixed soundtrack is half the impact in a theatre.',
            '**Speak the audience’s language.** Before a Telugu film, a Telugu ad feels at home — see [making ads for Telugu audiences](/blog/telugu-ads-for-telugu-audiences/).',
            '**Make the call to action local and memorable.** “Opposite the metro station, Ameerpet” works better than a long web address. A short web address or a QR code held on screen for a few seconds helps people act later.',
            '**Respect the room.** People came for the film; ads that entertain or surprise earn goodwill.',
        ] },
        { type: 'tip', text: 'Book screens near where your customers live and shop, and put the nearest branch or area on the end card — it turns a big-screen moment into a store visit.' },
        { type: 'h2', text: 'What does cinema advertising cost?' },
        { type: 'p', text: 'There is no single price; sellers quote for the specific screens and weeks you want. The main factors are the number of screens and shows, the city and type of theatre (multiplex or single screen), the number of weeks, the length of your ad and its position in the break, and big-release weeks when demand is higher. Production, cinema finishing (DCP and sound) and certification are separate costs — ask your production team to include them in the [ad film budget](/blog/ad-film-cost-in-india/).' },
        { type: 'h2', text: 'Can you use your TV or YouTube ad in cinemas?' },
        { type: 'p', text: 'Often yes, with some work. The ad needs to be finished for cinema (frame, frame rate and a DCP), its sound remixed for a theatre, and its picture checked on a large screen — footage that looks fine on a phone can look soft when projected. Text written for phones may need resizing. And the cinema version has to be certified like any other version you show.' },
    ],
    faqs: [
        { q: 'Do ads shown before a film need a CBFC certificate?', a: 'Yes. Advertisements, trailers and promos shown publicly in cinemas are certified under the Cinematograph Act, 1952, just like films. Apply through the CBFC’s e-Cinepramaan portal and certify each version you plan to play.' },
        { q: 'Can I choose which theatres show my ad?', a: 'Yes. Cinema advertising is usually sold by screen, city and week, so a local business can choose theatres near its stores and skip the rest.' },
        { q: 'What length should a cinema ad be?', a: 'Sellers offer fixed slot lengths, so ask what is available. Twenty to thirty seconds is enough for one clear message; longer ads work when the story holds attention on a big screen.' },
        { q: 'Do I need a DCP for every cinema?', a: 'Digital cinemas play DCPs. Some in-cinema ad networks use their own systems and convert a master file you supply. Follow the technical sheet of whoever is selling you the screens.' },
    ],
    sources: [
        { label: 'Central Board of Film Certification (CBFC) — official website', url: 'https://www.cbfcindia.gov.in/' },
        { label: 'e-Cinepramaan — CBFC online certification portal', url: 'https://www.ecinepramaan.gov.in/' },
        { label: 'District Administration, Ri Bhoi — enforcement of the Cinematograph Act, 1952 (ads and promos must be certified)', url: 'https://ribhoi.gov.in/enforcement-of-the-cinematograph-act-1952/' },
        { label: 'ASCI — Advertising Standards Council of India', url: 'https://www.ascionline.in/' },
    ],
};

export default article;
