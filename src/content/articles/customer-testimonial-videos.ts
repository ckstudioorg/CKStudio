/** Text of "Customer Testimonial Videos: How to Film Real Stories That Convince". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'A convincing testimonial video features a real customer telling their own story in their own words: the problem they had, why they chose you, what changed, and who they would recommend you to. Choose customers with specific results, ask open questions instead of handing them a script, film them comfortably in good light with clear sound, add footage of their real situation, get written consent, and never invent or exaggerate claims.',
    keyPoints: [
        'Real customers, real words — never scripted or invented.',
        'Story structure: before, decision, after, recommendation.',
        'Open questions bring out specific, believable details.',
        'Written consent, and claims that are true and typical.',
    ],
    body: [
        { type: 'h2', text: 'Why do testimonial videos work?' },
        { type: 'p', text: 'People trust other customers more than they trust a brand talking about itself. Seeing a real person — their face, their voice, their place — explain what changed for them answers the doubts every buyer has. But that only works if it is genuine: a scripted or exaggerated testimonial is quickly spotted and damages trust.' },
        { type: 'h2', text: 'How do you choose the right customers?' },
        { type: 'list', items: [
            'They had a clear, specific result they can describe.',
            'They resemble the customers you want more of.',
            'They are comfortable on camera — a short phone call will tell you.',
            'Together, your testimonials cover different uses, industries or places.',
        ] },
        { type: 'h2', text: 'Which questions bring out a real story?' },
        { type: 'steps', items: [
            'Tell us about yourself and your work.',
            'What was the problem before you came to us?',
            'What made you choose us?',
            'What was working with us like?',
            'What changed afterwards? Can you give an example?',
            'Who would you recommend us to, and why?',
        ] },
        { type: 'p', text: 'Ask people to answer in full sentences (“The problem was…”) so each answer stands on its own in the edit. Let them speak the language they are most comfortable in and add subtitles.' },
        { type: 'h2', text: 'How should testimonials be filmed?' },
        { type: 'list', items: [
            'Film at the customer’s place — their farm, shop, office or home — for authenticity.',
            'Use good microphones; viewers forgive average pictures but not bad sound.',
            'Light the face softly and keep the background real but tidy.',
            'Capture B-roll: the customer at work, your product in use, the result.',
            'Keep the crew small so the person feels relaxed.',
        ] },
        { type: 'h2', text: 'What are the rules for testimonials?' },
        { type: 'p', text: 'Testimonials in advertising must be genuine and reflect the customer’s real experience. ASCI’s code and the government’s 2022 guidelines on misleading advertisements expect claims to be true and substantiated, and unusual results should not be presented as typical. Get written consent from every person who appears, covering where and for how long the video will be used.' },
        { type: 'h2', text: 'How long should a testimonial video be?' },
        {
            type: 'table',
            head: ['Version', 'Length', 'Use'],
            rows: [
                ['Full story', '1.5–3 minutes', 'Website, YouTube, sales presentations'],
                ['Short cut', '30–60 seconds', 'Social media and LinkedIn'],
                ['Quote clip', '10–15 seconds', 'Ads, Reels and Stories'],
            ],
        },
        { type: 'h2', text: 'How do you edit a testimonial video?' },
        { type: 'steps', items: [
            'Transcribe the interview so you can find the strongest lines quickly.',
            'Build the story in order: before, decision, after, recommendation.',
            'Cover cuts with B-roll of the customer’s real situation, so edits feel natural.',
            'Add the person’s name, role and business as an on-screen caption.',
            'Add subtitles — many people watch with the sound off.',
            'Keep music low and warm, so the voice stays clear.',
            'End with your brand and one clear next step.',
        ] },
        { type: 'h2', text: 'What should a testimonial consent form cover?' },
        { type: 'list', items: [
            'Permission to film and to use the person’s name, face, voice and business name',
            'Where the video may be used: website, social media, ads, events',
            'How long it may be used, and how they can ask for it to be removed',
            'Approval of the final edit, if you agree to offer it',
        ] },
        { type: 'tip', text: 'Ask the last question twice: “In one sentence, what would you tell a friend about us?” The second answer is usually shorter, warmer and perfect for an ad.' },
        { type: 'p', text: 'CK Studio films customer stories, brand films and [corporate films](/blog/corporate-film-guide/) as part of our [ad films and commercials](/services/ad-films-and-commercials/) service.' },
    ],
    faqs: [
        { q: 'Should testimonial videos be scripted?', a: 'No. Give customers topics and questions, not lines. Scripted testimonials sound stiff and can mislead viewers.' },
        { q: 'Can I pay customers for a testimonial?', a: 'If you offer payment, gifts or discounts in exchange, that connection should be disclosed, and the testimonial must still reflect their genuine experience.' },
        { q: 'How many testimonial videos should a business have?', a: 'Three to five strong stories covering different customer types usually answer most buyers’ doubts. Add more as your customer base grows.' },
        { q: 'Can a testimonial be filmed on a phone?', a: 'Yes, for social media, if the sound is clear and the light is good. For your main website and ads, a professional shoot gives a more polished result.' },
    ],
    sources: [
        { label: 'ASCI — codes and guidelines', url: 'https://www.ascionline.in/' },
    ],
};

export default article;
