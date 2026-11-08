/** Text of "Using AI in Ads in India: Labelling, Consent and Copyright (2026 Guide)". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'You can use AI in ads in India, but realistic AI-generated content now falls under the IT Rules amendment notified in February 2026, which requires platforms to label synthetically generated content and keep provenance metadata. YouTube asks creators to disclose realistic AI content, ASCI’s code still applies to every claim, and you need written consent before using any real person’s face, voice or likeness. This is general information, not legal advice.',
    keyPoints: [
        'India’s 2026 IT Rules cover “synthetically generated information” and require labels.',
        'Disclose realistic AI people, voices and events where platforms ask for it.',
        'AI does not change advertising law: claims must still be true and provable.',
        'Get written consent for any real person’s face or voice.',
    ],
    body: [
        { type: 'p', text: '**This is general information, not legal advice.** The rules are changing quickly; check the latest notifications, or speak to a lawyer about a specific campaign.' },
        { type: 'h2', text: 'What do India’s 2026 IT Rules say about AI-generated content?' },
        { type: 'p', text: 'The Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Amendment Rules, 2026 were notified in February 2026. They bring “synthetically generated information” — audio, images or video created or altered by computer in a way that looks authentic — into the due-diligence duties of platforms such as social networks. Such content must carry a prominent label and provenance metadata, and platforms must remove unlawful content much faster than before. Routine edits such as colour correction are reported to be excluded.' },
        { type: 'p', text: 'For brands the practical effect is simple: if an ad shows realistic people, voices or events that were generated or altered with AI, expect it to be labelled — and plan for that rather than trying to hide it.' },
        { type: 'h2', text: 'Do YouTube and Meta require AI disclosure?' },
        { type: 'p', text: 'YouTube asks creators to disclose realistic AI content — for example a real person appearing to say something they never said, altered footage of a real event or place, or a lifelike scene that never happened — and shows viewers a label. Meta also labels content it detects or is told is AI-generated. Clearly unrealistic or animated content, colour correction, background blur and AI-assisted scripts generally do not need disclosure. Platform policies change, so check the current help pages when you publish.' },
        { type: 'h2', text: 'Does advertising law change when AI is used?' },
        { type: 'p', text: 'No. The Advertising Standards Council of India (ASCI) code applies to every ad, however it was made: claims must be truthful and substantiated, and ads must not mislead. An AI-generated “before and after” or an invented testimonial is as misleading as a staged one. ASCI’s influencer guidelines also require virtual influencers to disclose that they are not real people.' },
        { type: 'h2', text: 'When do you need consent?' },
        { type: 'list', items: [
            'Using a real person’s face, body or voice — including cloned voices and face swaps.',
            'Making a well-known person appear to endorse your product. Indian courts have protected the personality rights of well-known people against unauthorised use of their name, image and voice.',
            'Using employees or customers in AI-altered content.',
            'Recreating a recognisable artwork, character or trademark owned by someone else.',
        ] },
        { type: 'h2', text: 'Who owns AI-generated ad content?' },
        { type: 'p', text: 'Copyright protects works with a human author, and how that applies to largely AI-generated material is still unsettled in India. In practice: use tools whose terms allow commercial use, keep records of the human creative work (script, direction, editing, compositing), and agree in writing with your studio who owns the final film, the project files and the generated assets.' },
        { type: 'h2', text: 'A checklist before you publish an AI ad' },
        { type: 'steps', items: [
            'Check that every claim is true and can be proven.',
            'Confirm written consent for any real person’s face, voice or likeness.',
            'Confirm that the AI tools’ licences allow commercial use.',
            'Avoid generated text, logos or trademarks that belong to others.',
            'Disclose realistic synthetic content where the platform asks, and keep labels visible.',
            'Keep records of prompts, source material and approvals.',
            'Ask someone outside the project to review it for anything misleading.',
        ] },
        { type: 'tip', text: 'Use AI openly and creatively — stylised worlds, product scenes, impossible camera moves — rather than to fake real people or real events. It is safer, and usually more memorable.' },
        { type: 'p', text: 'At CK Studio we make [AI ad films](/services/ad-films-and-commercials/) with licensed tools, real product assets and clear consent from anyone who appears. Read [what AI can and cannot do in ad films](/blog/ai-ad-films-what-ai-can-and-cannot-do/) next.' },
    ],
    faqs: [
        { q: 'Is it legal to make an ad entirely with AI in India?', a: 'Yes. The usual advertising rules still apply, realistic synthetic content may be labelled on platforms, and you need consent for any real person’s likeness or voice.' },
        { q: 'Do I have to label my AI-generated ad?', a: 'Platforms must label realistic synthetically generated content under the 2026 IT Rules, and YouTube asks for disclosure of realistic AI content. Clearly stylised or animated content and routine edits generally do not need disclosure — check the current platform policy for your case.' },
        { q: 'Can I use an AI version of a celebrity in my ad?', a: 'Not without their written consent and a licence. Unauthorised use can violate personality rights and mislead consumers about an endorsement.' },
        { q: 'Can AI-generated ads be protected by copyright?', a: 'The position is unsettled. Human contributions such as the script, direction, editing and compositing are easier to protect, so document them and agree ownership in your contract.' },
    ],
    sources: [
        { label: 'DSCI — summary of the IT (Intermediary Guidelines and Digital Media Ethics Code) Amendment Rules, 2026', url: 'https://www.dsci.in/resource/content/it-amendment-rules-2026' },
        { label: 'Business Today — Govt tightens rules on AI-generated content (February 2026)', url: 'https://www.businesstoday.in/amp/technology/story/govt-tightens-rules-on-ai-generated-content-mandates-labels-and-faster-takedowns-515505-2026-02-10' },
        { label: 'YouTube Help — Disclosing use of GenAI content', url: 'https://support.google.com/youtube/answer/14328491' },
        { label: 'ASCI — codes and guidelines', url: 'https://www.ascionline.in/' },
    ],
};

export default article;
