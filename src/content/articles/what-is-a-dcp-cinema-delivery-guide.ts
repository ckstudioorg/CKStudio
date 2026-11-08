/** Text of "What Is a DCP? A Simple Guide to Getting Your Film into Cinemas". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
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
        { type: 'h2', text: 'Colour needs special care' },
        { type: 'p', text: 'Cinema projection uses a different colour space from TVs and phones. Your graded master has to be converted correctly for the projector, otherwise skin tones, blacks and highlights can look very different on the big screen. This conversion is part of proper DCP mastering, not an afterthought.' },
        { type: 'h2', text: 'Encryption and keys' },
        { type: 'p', text: 'A DCP can be encrypted. In that case, each cinema receives a key that only works on its specific server and only for a set time window. This protects the film before and during its release.' },
        { type: 'h2', text: 'Questions to ask before delivery' },
        { type: 'list', items: [
            'Which cinemas or networks are you releasing in, and what systems do they use? In India, many screens run on Qube or UFO systems with their own delivery requirements, so confirm with your distributor early.',
            'Flat or Scope, 2K or 4K, and which sound format?',
            'Which subtitle languages are needed?',
            'Will the DCP be encrypted, and who will issue the keys?',
            'Will you check it on a real cinema screen before release? A screening test catches problems no monitor will show.',
        ] },
        { type: 'quote', text: 'The DCP is the last step of post-production — and the first thing your audience actually sees.' },
        { type: 'p', text: 'CK Studio provides DCP outputs as part of our movie post-production services, alongside DI and colour correction and post-production supervision.' },
    ],
};

export default article;
