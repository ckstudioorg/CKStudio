/** Text of "How to Trademark Your Logo and Brand Name in India". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'In India, a brand name or logo is protected by registering it as a trade mark with the Trade Marks Registry under the Trade Marks Act, 1999. The steps are: search for similar existing marks, choose the classes of goods or services, file the application online, respond to the examination report, wait through the publication and opposition period, and receive registration. A registration lasts ten years and can be renewed. You can use ™ once you start using or apply for the mark, and ® only after registration.',
    keyPoints: [
        'Search before you design or print anything: a clashing name is the costliest surprise.',
        'Registration is by class; choose the classes that match what you sell.',
        'Distinctive, invented names are easier to register than descriptive ones.',
        'Make sure you, not the designer, own the copyright in the logo artwork.',
    ],
    body: [
        { type: 'h2', text: 'What does a trade mark protect?' },
        { type: 'p', text: 'A trade mark is a sign that tells customers whose goods or services they are buying: a name, a logo, a slogan, or a combination. Registration gives the owner the exclusive right to use that mark for the registered goods or services, and a clear basis for stopping others from using a confusingly similar one. It is different from copyright (which protects the artwork itself) and from company or domain registration (which do not give brand rights by themselves).' },
        { type: 'table', head: ['Protection', 'What it covers', 'How you get it'], rows: [
            ['Trade mark', 'Your name and logo as a badge of origin', 'Registration with the Trade Marks Registry; some rights also arise from long use'],
            ['Copyright', 'The logo artwork as an artistic work', 'Exists on creation; registration is optional'],
            ['Company name', 'The legal name of the company', 'Registered with the Ministry of Corporate Affairs'],
            ['Domain name', 'Your web address', 'Bought from a domain registrar'],
        ] },
        { type: 'h2', text: 'What should you check before designing the logo?' },
        { type: 'steps', items: [
            '**Search the name** on the Trade Marks Registry’s public search for identical and similar-sounding marks in your classes.',
            '**Search the market** — Google, app stores, social media handles and domain names.',
            '**Choose a distinctive name** — invented or unexpected words are stronger than descriptions such as “Best Sweets”.',
            '**Avoid restricted elements** — national emblems, official names and similar symbols are protected by law.',
            '**Only then commission the design** — see our [logo design guide](/blog/logo-design-guide/).',
        ] },
        { type: 'h2', text: 'Word mark or logo mark: which should you register?' },
        { type: 'table', head: ['Type', 'Protects', 'Good to know'], rows: [
            ['Word mark', 'The name itself, in any font or colour', 'The broadest protection for a name'],
            ['Device (logo) mark', 'The specific design', 'If the logo changes significantly, a new application may be needed'],
            ['Combined mark', 'Name and design together, as shown', 'One filing, but protection is for the combination'],
        ] },
        { type: 'p', text: 'If the budget allows only one filing, many advisers suggest the word mark first, because the name usually outlives any one logo. A trade mark attorney can advise on your case.' },
        { type: 'h2', text: 'What are classes?' },
        { type: 'p', text: 'Goods and services are grouped into 45 classes under an international system (the Nice Classification): classes 1 to 34 for goods and 35 to 45 for services. Your registration protects the mark for the goods or services you list. For example, advertising services fall in class 35, entertainment and film production in class 41, and clothing in class 25. A business that sells products and runs a service may need more than one class.' },
        { type: 'h2', text: 'How does registration work?' },
        { type: 'steps', items: [
            '**File the application** online with the Trade Marks Registry (Form TM-A), with the mark, the classes, the applicant’s details and the date of first use, if any.',
            '**Examination** — an examiner checks the application and issues a report, sometimes with objections.',
            '**Reply** — you answer objections in writing; a hearing may follow.',
            '**Publication** — an accepted mark is advertised in the Trade Marks Journal.',
            '**Opposition period** — others have four months from publication to oppose.',
            '**Registration** — if there is no opposition, or it is decided in your favour, the certificate is issued.',
            '**Renewal** — every ten years.',
        ] },
        { type: 'p', text: 'How long this takes varies with objections and oppositions. Government fees depend on the type of applicant and are listed on the Registry’s website; check the current schedule there.' },
        { type: 'h2', text: 'When can you use ™ and ®?' },
        { type: 'list', items: [
            '**™** — signals that you claim the mark as yours. It can be used before registration.',
            '**®** — only for a registered mark. Using it on an unregistered mark is an offence under the Trade Marks Act.',
            '**Tell your designer** which symbol applies so the right version goes into the [brand guidelines](/blog/brand-guidelines-document/).',
        ] },
        { type: 'h2', text: 'Who owns the logo your designer made?' },
        { type: 'p', text: 'Do not assume it is you. Under copyright law, the creator of an artwork is generally its first owner unless it was made in the course of employment or the rights are transferred in writing. Ask for a written assignment of copyright from the designer or agency when you pay for the final logo, and keep the original files. If AI tools were used to generate parts of the design, ask how; protection for machine-generated artwork is less certain.' },
        { type: 'h2', text: 'What are the common mistakes?' },
        { type: 'list', items: [
            '**Printing everything before searching** — then receiving a legal notice.',
            '**Choosing a descriptive name** that cannot be registered or defended.',
            '**Registering only the logo** and then redesigning it.',
            '**Missing a class** you actually trade in.',
            '**Ignoring the examination report deadline** — the application can be treated as abandoned.',
            '**Forgetting renewal**.',
            '**Changing a registered mark** in a [rebrand](/blog/rebranding-guide/) without checking whether a new filing is needed.',
        ] },
        { type: 'p', text: 'This guide is general information, not legal advice. For filing, objections and disputes, speak to a trade mark attorney. If you are setting up a new business, see also [brand essentials from day one](/blog/company-start-package-brand-essentials/).' },
        { type: 'tip', text: 'Check name availability as a trade mark, a domain and a social media handle on the same day. A name you can own in all three places is worth more than a clever one you cannot.' },
    ],
    faqs: [
        { q: 'Is trade mark registration compulsory in India?', a: 'No. You can trade under an unregistered mark and may gain some rights through use. Registration makes your rights much clearer and easier to enforce.' },
        { q: 'How long is a trade mark valid?', a: 'Ten years from the date of application, renewable for further periods of ten years, indefinitely.' },
        { q: 'Can I apply myself, or do I need an agent?', a: 'An applicant can file directly through the Registry’s online system. Many businesses use a trade mark attorney or agent, particularly for searches and for replying to objections.' },
        { q: 'Does an Indian registration protect me abroad?', a: 'No. Trade mark rights are territorial. For other countries you file there, or use the international (Madrid) system through the Indian Registry.' },
    ],
    sources: [
        { label: 'Office of the Controller General of Patents, Designs and Trade Marks (IP India)', url: 'https://ipindia.gov.in/' },
        { label: 'WIPO — Nice Classification', url: 'https://www.wipo.int/classifications/nice/en/' },
    ],
};

export default article;
