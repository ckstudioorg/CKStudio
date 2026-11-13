/** Text of "What Is a DCP? A Simple Guide to Getting Your Film into Cinemas". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'A DCP, or Digital Cinema Package, is the standard set of files in which a film, trailer or cinema ad is delivered to theatres. It is a folder containing the picture as JPEG 2000 frames, uncompressed multi-channel sound and playback instructions for the cinema server. It is made from the graded master in the right resolution (2K or 4K), shape (Flat or Scope) and colour for projection, can be encrypted, and should be tested on a real screen before release.',
    keyPoints: [
        'Cinemas play DCPs, not MP4 or MOV files.',
        'Decide Flat or Scope, 2K or 4K and the sound format before mastering.',
        'Colour must be converted properly for projection.',
        'An encrypted DCP needs a key (KDM) for each screen.',
    ],
    body: [
        { type: 'p', text: 'When a film is finished, it still has one more journey to make: onto a cinema server. Cinemas do not play the MP4 or MOV file you watch in the edit suite. Most digital cinemas play a Digital Cinema Package, or DCP.' },
        { type: 'h2', text: 'What is inside a DCP' },
        { type: 'p', text: 'A DCP is a folder of files rather than a single video. The picture is stored as high-quality JPEG 2000 frames, the sound as uncompressed multi-channel audio, and small text files tell the cinema server how to play everything in the right order. Subtitles can be included as a separate track, so one picture master can serve several languages.' },
        { type: 'h2', text: 'Common formats' },
        { type: 'list', items: [
            'Resolution: 2K is the most common; 4K is used where the cinema and project support it',
            'Aspect ratio: “Flat” (1.85:1) or “Scope” (2.39:1), chosen to match how the film was framed',
            'Frame rate: usually 24 frames per second; other rates must be supported by the screen',
            'Sound: commonly 5.1 surround, with 7.1 or immersive formats on equipped screens',
        ] },
        { type: 'table', head: ['Container', 'Aspect ratio', '2K size', '4K size'], rows: [
            ['Flat', '1.85:1', '1998 × 1080', '3996 × 2160'],
            ['Scope', '2.39:1', '2048 × 858', '4096 × 1716'],
            ['Full container', '1.90:1', '2048 × 1080', '4096 × 2160'],
        ], caption: 'Standard digital cinema picture sizes' },
        { type: 'h2', text: 'Colour needs special care' },
        { type: 'p', text: 'Cinema projection uses a different colour space from TVs and phones. Your graded master has to be converted correctly for the projector, otherwise skin tones, blacks and highlights can look very different on the big screen. This conversion is part of proper DCP mastering, not an afterthought.' },
        { type: 'p', text: 'The cinema grade itself is done in the DI; see [DI and colour correction](/blog/di-and-colour-correction-explained/). The sound must also be mixed for cinema levels, as described in [sound design and mixing](/blog/sound-design-and-mixing/).' },
        { type: 'h2', text: 'Encryption and keys' },
        { type: 'p', text: 'A DCP can be encrypted. In that case, each cinema receives a key that only works on its specific server and only for a set time window. This protects the film before and during its release.' },
        { type: 'p', text: 'The key is called a KDM (Key Delivery Message). If a KDM is wrong or has expired, the film will not play, so key requests and screening times need to be managed carefully with the distributor.' },
        { type: 'h2', text: 'How is a DCP made?' },
        { type: 'steps', items: [
            'Finish the film: locked edit, final grade, final mix.',
            'Export the picture master and the sound in the cinema format.',
            'Convert colour for projection and encode the picture to JPEG 2000.',
            'Wrap picture, sound and subtitles into the package and name it by the standard naming convention.',
            'Encrypt it, if required.',
            'Check the package with validation software.',
            'Screen it in a cinema and watch it through.',
            'Deliver by drive or by the cinema network’s own delivery system, and issue keys.',
        ] },
        { type: 'h2', text: 'Questions to ask before delivery' },
        { type: 'list', items: [
            'Which cinemas or networks are you releasing in, and what systems do they use? In India, many screens run on Qube or UFO systems with their own delivery requirements, so confirm with your distributor early.',
            'Flat or Scope, 2K or 4K, and which sound format?',
            'Which subtitle languages are needed?',
            'Will the DCP be encrypted, and who will issue the keys?',
            'Will you check it on a real cinema screen before release? A screening test catches problems no monitor will show.',
        ] },
        { type: 'p', text: 'A film also needs its censor certificate before it can be shown: see [CBFC certification explained](/blog/cbfc-certification-guide/). Cinema advertisements go through the same route; see [how to run your ad in cinemas](/blog/cinema-advertising-in-india/). For festivals, check each festival’s format rules in our [festival submission guide](/blog/film-festival-submission-guide/).' },
        { type: 'quote', text: 'The DCP is the last step of post-production — and the first thing your audience actually sees.' },
        { type: 'p', text: 'CK Studio provides DCP outputs as part of our [movie post-production](/services/movie-post-production/) services, alongside DI and colour correction and post-production supervision.' },
        { type: 'tip', text: 'Book the cinema test screening early and bring the director, the colourist and the sound mixer. It is the only time everyone sees and hears the film as the audience will.' },
    ],
    faqs: [
        { q: 'Can a cinema play an MP4 or a pen drive?', a: 'Some screens can play other files for private events, but regular theatrical exhibition uses DCPs on the cinema server. Ask the cinema or distributor what they accept.' },
        { q: 'What is the difference between Flat and Scope?', a: 'They are the two standard cinema picture shapes. Flat is 1.85:1; Scope is the wider 2.39:1. The choice follows how the film was framed when it was shot.' },
        { q: 'Does a trailer or a cinema ad also need a DCP?', a: 'Yes. Anything shown through the cinema projector is delivered as a DCP, in the format the cinema network asks for.' },
        { q: 'How big is a DCP?', a: 'It depends on length and resolution. A feature film DCP commonly runs to well over a hundred gigabytes, which is why it is delivered on drives or through dedicated networks.' },
    ],
};

export default article;
