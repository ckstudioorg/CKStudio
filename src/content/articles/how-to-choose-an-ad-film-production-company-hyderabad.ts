/** Text of "How to Choose an Ad Film Production Company in Hyderabad: A 12-Point Checklist". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'Choose a production company whose past work matches the kind of ad you need, who can explain their process and timeline clearly, and who gives a written quote listing every deliverable, revision round and usage right. In Hyderabad, also check whether editing, colour grading and VFX are done in-house and whether they can deliver in Telugu, Hindi and English.',
    keyPoints: [
        'Judge the showreel on work similar to yours, not on the flashiest piece.',
        'A clear process and an itemised quote matter more than the lowest price.',
        'In-house post-production means fewer hand-offs and faster changes.',
        'Ask how they use AI — and where they would not.',
    ],
    body: [
        { type: 'p', text: 'Hyderabad has a large creative industry built around Telugu cinema, which means many talented crews — and a wide range in how production houses actually work. This checklist helps you compare them fairly.' },
        { type: 'h2', text: 'The 12-point checklist' },
        { type: 'steps', items: [
            '**Relevant work.** Ask for two or three films close to your brief — same format, similar budget, similar industry. A great movie trailer does not prove a studio can make a clear product ad, and the reverse is also true.',
            '**Who actually makes it.** Find out who will direct, edit and colour your film, and which parts are done in-house or outsourced.',
            '**A visible process.** A good studio can explain each stage: brief, concept, script, storyboard or pre-look, pre-production meeting, shoot, edit, review and delivery. See [how an ad film is made](/blog/ad-film-production-process-step-by-step/).',
            '**Ideas, not only execution.** Do they suggest concepts and write scripts, or only shoot what you send?',
            '**An itemised, written quote.** It should separate pre-production, shoot, post-production and talent, and list deliverables, revision rounds and exclusions. Our [ad film cost guide](/blog/ad-film-cost-in-india/) explains each line.',
            '**Usage rights in writing.** Talent and music rights must cover where and how long you will run the ad.',
            '**Post-production strength.** Editing, colour grading, sound and VFX decide how polished a film looks. In-house [post-production](/blog/what-is-post-production/) also makes changes faster.',
            '**Delivery for every screen.** TV, YouTube, Instagram and cinema each need their own files. Check they know the [sizes and lengths](/blog/video-ad-sizes-aspect-ratios-cheat-sheet/).',
            '**Languages.** Telugu, Hindi, English and other versions — and native speakers to check them.',
            '**Honest AI skills.** AI can save cost and time on concepts, product scenes and some complete ads. A good studio also tells you when AI is the wrong tool for your idea.',
            '**Communication.** One named contact, regular updates and reviews on a link you can comment on.',
            '**References.** Speak to one or two past clients if you can.',
        ] },
        { type: 'h2', text: 'Which questions should you ask in the first meeting?' },
        { type: 'list', items: [
            'Which of your past films is closest to what we need, and what did it involve?',
            'Who will work on our project, and what is done in-house?',
            'What do you need from us, and by when?',
            'How many revision rounds are included at the script, edit and final stages?',
            'What exactly will we receive at the end — lengths, sizes, languages, file types?',
            'How do you use AI, and where would you avoid it for our idea?',
        ] },
        { type: 'h2', text: 'What are the red flags?' },
        { type: 'list', items: [
            'A single lump-sum price with no breakdown or deliverables list',
            'No written agreement on usage rights for talent or music',
            '“Unlimited changes, any time” — it usually means vague work and slow delivery',
            'A showreel with nothing similar to your project',
            'Pressure to pay everything up front before a script is approved',
        ] },
        { type: 'h2', text: 'Should you choose an ad agency or a production studio?' },
        {
            type: 'table',
            head: ['', 'Full-service ad agency', 'Specialised production studio'],
            rows: [
                ['Best for', 'Brand strategy, media buying and multi-channel campaigns', 'Making the film and every version well, on time and on budget'],
                ['Strategy and media', 'Included', 'Usually focused on creative and production'],
                ['Cost structure', 'Agency fees plus production', 'Mostly direct production cost'],
                ['Speed of changes', 'More layers of approval', 'Fewer hand-offs, faster turnaround'],
            ],
        },
        { type: 'p', text: 'Many brands use both: an agency for strategy and media, and a studio for production and post-production. If you already know your message and channels, going directly to a studio is usually simpler.' },
        { type: 'tip', text: 'Before the first call, write one sentence about who the ad is for and what they should do after watching it. Studios can then pitch ideas that fit you instead of generic ones.' },
        { type: 'p', text: 'CK Studio is a pre- and post-production studio in IDA Jeedimetla, Hyderabad, making [ad films and commercials](/services/ad-films-and-commercials/), [movie post-production](/services/movie-post-production/) and [VFX and CG](/services/vfx-and-cg/) under one roof. [Send us your brief](/#enquiry) and we will suggest options for your budget.' },
    ],
    faqs: [
        { q: 'How many production houses should I get quotes from?', a: 'Two or three is enough. Send each the same written brief and deliverables list so the quotes can be compared fairly.' },
        { q: 'Is a cheaper production house always worse?', a: 'No. Price differences often come from crew size, shoot days and overheads. What matters is whether the quote covers everything you need and whether their past work matches your idea.' },
        { q: 'Do I need a Hyderabad production company if my audience is national?', a: 'Not necessarily, but a local studio makes meetings, shoots and reviews easier, and Hyderabad studios regularly deliver national campaigns in several languages.' },
        { q: 'What should the contract with a production company include?', a: 'Scope and deliverables, timeline, revision rounds, payment schedule, usage rights for talent and music, ownership of the final film and raw footage, and what happens if the brief changes.' },
    ],
};

export default article;
