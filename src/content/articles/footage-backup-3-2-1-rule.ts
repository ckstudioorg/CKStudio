/** Text of "Backing Up Footage: The 3-2-1 Rule for Shoots and Finished Films". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'The 3-2-1 rule says: keep three copies of your footage, on two different kinds of storage, with one copy in a different place. On a shoot, that means copying each camera card to at least two drives and checking the copies before the card is wiped. After the project, it means keeping the original footage, the project files and the master somewhere safe, not only on the editor’s computer. Footage that exists in one place can be lost in one accident.',
    keyPoints: [
        'Three copies, two types of storage, one off-site.',
        'Never format a card until verified copies exist.',
        'A backup you have not tested is only a hope.',
        'Agree in writing who keeps the footage and for how long.',
    ],
    body: [
        { type: 'h2', text: 'What is the 3-2-1 rule?' },
        { type: 'table', head: ['Part', 'Meaning', 'Example'], rows: [
            ['3 copies', 'The working copy plus two backups', 'Edit drive, backup drive, cloud'],
            ['2 kinds of storage', 'So one type of failure cannot take everything', 'A hard drive and cloud storage, or SSD and LTO tape'],
            ['1 off-site', 'Safe from fire, flood and theft at the main location', 'Cloud storage, or a drive kept at another address'],
        ] },
        { type: 'p', text: 'It is a widely used rule from the IT world, and it fits film work well, where a day’s footage cannot be shot again without bringing back the whole cast and crew.' },
        { type: 'h2', text: 'How do you back up during a shoot?' },
        { type: 'steps', items: [
            '**Give one person the job** — a DIT (digital imaging technician), data wrangler or a named assistant.',
            '**Label every card** and keep “shot” and “empty” cards in separate, marked cases.',
            '**Copy each card to two drives** as soon as it comes out of the camera.',
            '**Use verified copying** — software that compares the copy to the original with a checksum, instead of drag-and-drop.',
            '**Spot-check playback** from the copies.',
            '**Log it** — card number, time, drives copied to.',
            '**Only then release the card** for formatting, and only by the person who made the copies.',
            '**Send the drives home separately** — two drives in one bag are one accident away from zero.',
        ] },
        { type: 'p', text: 'This is part of the shoot-day routine described in [what happens on an ad shoot day](/blog/what-happens-on-a-shoot-day/).' },
        { type: 'h2', text: 'Which kind of storage suits what?' },
        { type: 'table', head: ['Storage', 'Good for', 'Watch out for'], rows: [
            ['Portable SSD', 'Fast copies on set, travel', 'Cost per gigabyte; not ideal for long-term shelf storage'],
            ['Hard drive (HDD)', 'Large, affordable backups', 'Moving parts; fragile if dropped; should be powered up and checked periodically'],
            ['RAID or NAS', 'Shared working storage in a studio', 'Protects against a failed disk, not against deletion, theft or fire: it is not a backup by itself'],
            ['Cloud storage', 'The off-site copy; sharing', 'Upload time for large footage; ongoing fees; account security'],
            ['LTO tape', 'Long-term archive of finished films', 'Needs a tape drive and a careful catalogue'],
        ] },
        { type: 'h2', text: 'What should be kept after the project is finished?' },
        { type: 'list', items: [
            '**The camera originals** and sound recordings.',
            '**The project files** from editing, grading and sound.',
            '**Graphics, fonts, music and their licences**.',
            '**The master file**, a textless version and separate audio tracks; see [video file formats and codecs](/blog/video-file-formats-and-codecs/).',
            '**Delivery copies** for each platform.',
            '**Paperwork** — release forms, contracts, music licences and certificates.',
        ] },
        { type: 'p', text: 'For a film, add the cinema and streaming masters; see [what is a DCP?](/blog/what-is-a-dcp-cinema-delivery-guide/) and [OTT delivery](/blog/ott-delivery-specs/).' },
        { type: 'h2', text: 'Who should keep the footage: client or studio?' },
        { type: 'p', text: 'Do not assume. Many studios keep project files for a limited period and then clear them to free up storage. The contract should say who owns the raw footage, whether the client receives a copy, how long the studio will keep an archive, and what it costs to retrieve or extend. Our guide to [video production contracts](/blog/video-production-contract-checklist/) lists the clauses to check. If the footage matters to your business, ask for a drive with everything on it and keep it under your own 3-2-1 plan.' },
        { type: 'h2', text: 'How do you keep an archive usable for years?' },
        { type: 'list', items: [
            '**Use a clear folder structure** and file names anyone can follow.',
            '**Keep a simple catalogue** — what is on which drive, and where the drive is.',
            '**Check drives periodically** — plug them in, open a few files.',
            '**Move to new storage every few years** — drives and connectors age.',
            '**Store in a cool, dry place** away from magnets and sunlight.',
            '**Protect cloud accounts** with strong passwords and two-step sign-in, and know who in the company has access.',
        ] },
        { type: 'h2', text: 'What are the mistakes that lose footage?' },
        { type: 'list', items: [
            '**Formatting a card before checking the copy**.',
            '**One drive only** — the most common cause of real loss.',
            '**Both copies kept together**.',
            '**Trusting a RAID as a backup**.',
            '**Sync mistaken for backup** — a file deleted on one side is deleted on the other.',
            '**Nobody responsible** — everyone assumed someone else had it.',
        ] },
        { type: 'tip', text: 'Once a year, try restoring one old project from its backup. If it opens and plays, your system works. If it does not, you have found out at a safe time.' },
    ],
    faqs: [
        { q: 'Is cloud storage enough by itself?', a: 'It is a good off-site copy, but it should not be the only one. Accounts can be closed, hacked or left unpaid. Keep at least one local copy as well.' },
        { q: 'How long should footage be kept?', a: 'It depends on the agreement and on how useful the material will be. Brand films and feature films are often worth keeping indefinitely; keep at least the masters and the paperwork.' },
        { q: 'What is a checksum?', a: 'A short code calculated from a file’s contents. If the copy’s code matches the original’s, the copy is exact. Verified-copy software does this automatically.' },
        { q: 'Does a small shoot need a DIT?', a: 'Not always a dedicated one, but it does need one named person who copies, checks and logs every card. Responsibility matters more than the job title.' },
    ],
};

export default article;
