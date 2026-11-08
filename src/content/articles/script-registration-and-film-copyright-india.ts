/** Text of "Protecting Your Script and Film in India: Registration and Copyright". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'In India your script is protected by copyright automatically as soon as you write it down — registration isn’t required. Registration still helps you prove who wrote what and when: members of the Screenwriters Association (SWA) can register scripts online, and anyone can apply to the government’s Copyright Office for a registration certificate. Ideas alone aren’t protected, so put your story in writing, keep dated drafts, and use written agreements whenever you share or sell a script.',
    keyPoints: [
        'Copyright starts automatically when the work is written down.',
        'SWA registration and Copyright Office registration are both evidence, not the right itself.',
        'Ideas, plots and titles aren’t protected by copyright on their own.',
        'An assignment of copyright must be in writing.',
    ],
    body: [
        { type: 'p', text: 'This guide is general information for writers and filmmakers, not legal advice. For disputes or large deals, consult a lawyer who works in entertainment law.' },
        { type: 'h2', text: 'Is a script protected without registration?' },
        { type: 'p', text: 'Yes. Under the Copyright Act, 1957, original literary and dramatic works — scripts, screenplays, stories — are protected from the moment they are created in a fixed form, such as a file or a printed draft. Registration is optional. Its value is as evidence: a registration or a dated record makes it far easier to show that you wrote a particular version by a particular date if someone copies it.' },
        { type: 'h2', text: 'SWA registration or Copyright Office registration?' },
        {
            type: 'table',
            head: ['', 'Screenwriters Association (SWA)', 'Copyright Office'],
            rows: [
                ['Who can use it', 'SWA members (writers based in India)', 'Anyone who owns copyright in a work'],
                ['How', 'Online registration of scripts, stories and lyrics', 'An online application with the prescribed fee'],
                ['What you get', 'A dated, registered copy of your work, and access to SWA’s support for members in disputes', 'A registration certificate recorded in the Register of Copyrights'],
                ['Speed', 'Quick', 'Slower — applications are examined and can receive objections'],
                ['Is it copyright registration?', 'No — SWA says its registration is not copyright registration', 'Yes'],
            ],
        },
        { type: 'p', text: 'Many working writers register drafts with SWA as they go, and register important finished works with the Copyright Office. Check both bodies’ current fees and processes on their websites.' },
        { type: 'h2', text: 'What isn’t protected by copyright?' },
        { type: 'list', items: [
            '**Ideas and themes** — “a love story between rival families” belongs to no one. Your particular expression of it does.',
            '**Stock plots and situations** common to many films.',
            '**Titles** — film titles are usually registered with film industry bodies, such as producers’ associations and film chambers, rather than through copyright.',
            '**Facts and real events** — though your telling of them is protected.',
        ] },
        { type: 'h2', text: 'How do you pitch safely?' },
        { type: 'list', items: [
            '**Register before you share** — with SWA, the Copyright Office or both.',
            '**Pitch to known producers and companies**, through their official process.',
            '**Send material by email**, so there is a dated record of what you shared and with whom.',
            '**Share a synopsis or treatment first**; send the full script when there is real interest.',
            '**Keep notes of meetings** — who was there, what was discussed, what was sent afterwards.',
            '**Expect submission terms** — some producers ask writers to sign a release before they read unsolicited work. Read it carefully.',
        ] },
        { type: 'h2', text: 'Who owns the finished film?' },
        { type: 'p', text: 'Under the Copyright Act, the producer is treated as the author of a film. The writer keeps the copyright in the script unless they assign or license it — and an assignment is only valid if it is in writing and signed by the writer. That is why the script agreement matters so much: it decides what the producer can do with your story, and what you receive in return.' },
        { type: 'h2', text: 'What should a script sale or option agreement cover?' },
        { type: 'list', items: [
            '**Which rights** — the film, remakes, dubbed versions, OTT, sequels, series.',
            '**Payment** — the option fee, the purchase price, and any share of profits.',
            '**Credit** — how your name appears on screen and in publicity.',
            '**Option period** — how long the producer holds the rights before they must buy or let go.',
            '**Reversion** — rights returning to you if the film isn’t made within an agreed time.',
            '**Disputes** — how disagreements will be resolved.',
        ] },
        { type: 'tip', text: 'Email each finished draft to yourself and your co-writers with a short note on what changed. A trail of dated drafts is simple supporting evidence of your work — alongside formal registration, not instead of it.' },
        { type: 'p', text: 'Once a script is ready to pitch, see [how to build a movie pitch deck](/blog/how-to-build-a-movie-pitch-deck/); for your own productions, see [making a short film on a budget](/blog/short-film-on-a-budget/).' },
    ],
    faqs: [
        { q: 'Is SWA registration the same as copyright registration?', a: 'No. SWA registration gives members a dated record of their work and access to the association’s support, but SWA itself says it is not copyright registration. Copyright registration is done through the government’s Copyright Office.' },
        { q: 'Do I need to register my script before sending it to producers?', a: 'It isn’t legally required — copyright exists automatically — but registering first gives you clear, dated evidence if a dispute ever arises.' },
        { q: 'Can someone copy my story idea?', a: 'Ideas on their own aren’t protected by copyright. What is protected is your written expression: your characters, scenes, structure and dialogue. Share ideas carefully and keep records.' },
        { q: 'How do I register a film title?', a: 'Film titles are usually registered with film industry bodies such as producers’ associations and film chambers, not with the Copyright Office. Ask the body that covers your film’s industry and language.' },
    ],
    sources: [
        { label: 'Copyright Office, Government of India', url: 'https://copyright.gov.in/' },
        { label: 'Screenwriters Association (SWA)', url: 'https://www.swaindia.org/' },
    ],
};

export default article;
