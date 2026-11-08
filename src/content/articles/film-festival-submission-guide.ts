/** Text of "Submitting Your Film to Festivals: Formats, Screeners and Deadlines". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'Pick festivals that match your film’s length, genre and premiere status, then submit a private screener link — with English subtitles for international festivals — through the festival’s own form or a platform such as FilmFreeway, before the deadline. If you are selected, you will need an exhibition copy, usually a DCP, plus a press kit with stills, a synopsis, a director’s statement and credits. Check each festival’s premiere rules before showing the film anywhere publicly.',
    keyPoints: [
        'Choose festivals that fit your film and its premiere status.',
        'Submit a private, subtitled screener before the deadline.',
        'Prepare the exhibition copy (often a DCP) and press kit early.',
        'Don’t release the film online before premiere-sensitive festivals.',
    ],
    body: [
        { type: 'h2', text: 'How do you choose festivals?' },
        { type: 'list', items: [
            '**Fit** — festivals for shorts, features, documentaries, animation, genre films or student work.',
            '**Premiere rules** — many festivals want a world, international, Asian or national premiere; screening elsewhere first can rule you out.',
            '**Indian festivals** — such as IFFI in Goa, the Jio MAMI Mumbai Film Festival, IFFK in Kerala and the Kolkata International Film Festival, plus many regional and short-film festivals.',
            '**International festivals** — from the biggest names to specialist festivals that suit your film’s subject.',
            '**Cost and value** — entry fees, your chance of selection, and what selection brings: audiences, press, buyers, awards.',
        ] },
        { type: 'p', text: 'Make a shortlist in tiers: a few ambitious picks, a group of good fits, and festivals where your film has a strong chance.' },
        { type: 'h2', text: 'What do you need to submit?' },
        {
            type: 'table',
            head: ['Item', 'Notes'],
            rows: [
                ['Screener link', 'A private, password-protected online link, with downloads disabled'],
                ['Subtitles', 'English subtitles for international festivals; accurate and well timed (see [subtitles and captions](/blog/subtitles-and-captions-guide/))'],
                ['Synopsis', 'A one-line logline, a short synopsis and a longer one'],
                ['Director’s bio and statement', 'Who you are, and why you made this film'],
                ['Stills and poster', 'High-resolution frames from the film and a poster (see [movie poster design](/blog/movie-poster-design-guide/))'],
                ['Credits and technical details', 'Full credits, running time, language, aspect ratio, sound format'],
                ['Trailer', 'Optional for many festivals, useful for publicity'],
                ['Entry fee', 'Paid at submission; some festivals offer early-bird rates or waivers'],
            ],
        },
        { type: 'h2', text: 'What happens if your film is selected?' },
        { type: 'steps', items: [
            '**Read the technical requirements** — most festivals screen from a DCP; some accept other files. See [what a DCP is](/blog/what-is-a-dcp-cinema-delivery-guide/).',
            '**Prepare the exhibition copy** — the DCP, subtitles burned in or as a separate file as requested, and the right sound format.',
            '**Check it in a cinema** if you can — picture, subtitles, sound levels, and the start and end of the film.',
            '**Deliver before the deadline** — by upload or drive, as the festival asks.',
            '**Send publicity materials** — stills, poster, trailer and press kit.',
            '**Plan your attendance** — travel, Q&As, meetings with programmers and buyers.',
        ] },
        { type: 'h2', text: 'Do you need a CBFC certificate for festivals?' },
        { type: 'p', text: 'Not to submit. Festivals abroad have no CBFC requirement, and festivals in India generally arrange the permissions needed to screen uncertified films — ask each festival what it needs from you. If you later release the film in cinemas in India, you will need CBFC certification — see our [CBFC certification guide](/blog/cbfc-certification-guide/).' },
        { type: 'h2', text: 'What are common mistakes?' },
        { type: 'list', items: [
            'Releasing the film on YouTube or an OTT platform before premiere-sensitive festivals.',
            'Weak subtitles — machine translations, typos or bad timing put programmers off.',
            'Music you haven’t cleared — you need at least festival screening rights, and full rights for distribution later (see [music licensing](/blog/music-for-ads-licensing-india/)).',
            'The wrong aspect ratio or sound levels in the screener.',
            'Missed deadlines because materials weren’t ready.',
            'Spending the whole budget on entry fees and nothing on the exhibition copy or travel.',
        ] },
        { type: 'h2', text: 'How do you budget for a festival run?' },
        { type: 'p', text: 'Plan for entry fees, subtitles, DCP mastering and copies, posters and press kits, publicity, and travel if you are selected. Our [film and ad budget template](/blog/film-and-ad-budget-template/) has lines you can adapt, and [making a short film on a budget](/blog/short-film-on-a-budget/) covers the film itself.' },
        { type: 'tip', text: 'Keep a spreadsheet of every festival: deadline, fee, premiere rule, status and login. It stops you missing the one deadline that matters.' },
    ],
    faqs: [
        { q: 'Should my film be on YouTube before festivals?', a: 'Not if you want festivals with premiere rules. Many festivals don’t accept films that are already publicly available online. Keep it private until your festival run is over.' },
        { q: 'What format do festivals want for screeners?', a: 'A private online link with a password is standard, through the festival’s own system or a submission platform. Add English subtitles for international festivals.' },
        { q: 'Do short films need a DCP?', a: 'If selected, many festivals screen shorts from DCPs, though some accept other high-quality files. Check each festival’s technical requirements before you master.' },
        { q: 'Is FilmFreeway the only way to submit?', a: 'No. It is a widely used platform, but some festivals use their own forms or other platforms. Always follow the official instructions on the festival’s website.' },
    ],
    sources: [
        { label: 'FilmFreeway — film festival submission platform', url: 'https://filmfreeway.com/' },
        { label: 'Central Board of Film Certification (CBFC) — official website', url: 'https://www.cbfcindia.gov.in/' },
    ],
};

export default article;
