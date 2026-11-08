/** Text of "Product Catalogue and Brochure Design: How to Create One That Actually Sells". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'A catalogue or brochure sells when it is organised the way customers choose — by need, category or application — with consistent product photos, short benefit-led copy, clear specifications and an easy way to order or enquire. Plan both versions from the start: a print file (usually A4 or A5, CMYK, high resolution, with bleed) and a lighter digital PDF that can be shared on WhatsApp and email.',
    keyPoints: [
        'Organise products the way customers choose them.',
        'Consistent photography makes a catalogue look premium.',
        'Benefits first, specifications in tidy tables.',
        'Make a print version and a light digital PDF.',
    ],
    body: [
        { type: 'h2', text: 'Brochure or catalogue: which do you need?' },
        {
            type: 'table',
            head: ['', 'Company brochure', 'Product catalogue'],
            rows: [
                ['Purpose', 'Introduce the company and build trust', 'Help customers choose and order products'],
                ['Length', 'Usually 4–12 pages', 'Anything from 8 pages to hundreds'],
                ['Content', 'Story, capabilities, clients, certifications, contact', 'Products, variants, specifications, codes, prices or enquiry details'],
                ['Updated', 'Every year or two', 'Whenever the range or prices change'],
            ],
        },
        { type: 'h2', text: 'How should a product catalogue be structured?' },
        { type: 'steps', items: [
            'Cover with the brand, the range name and the year or edition.',
            'A short introduction: who you are and why buyers trust you.',
            'A contents page or category tabs.',
            'Product sections organised by category, need or application.',
            'For each product: a photo, a benefit-led description, key specifications and the product code.',
            'Comparison tables where products are similar.',
            'Certifications, warranty and service information.',
            'A clear back page: how to order, dealer locations, phone, WhatsApp and website.',
        ] },
        { type: 'h2', text: 'How do you prepare the content before design starts?' },
        { type: 'steps', items: [
            'List every product to include, with its code, variants and category.',
            'Collect specifications in one spreadsheet, checked by the product team.',
            'Mark the hero products that deserve a full page.',
            'Gather certificates, warranty terms and dealer or contact details.',
            'Decide the languages and the print quantity.',
            'Shoot or collect consistent photos for every product.',
        ] },
        { type: 'p', text: 'Finished, checked content makes design faster and avoids the most expensive mistake in catalogues: reprinting because a specification was wrong.' },
        { type: 'h2', text: 'What makes the photography and copy work?' },
        { type: 'list', items: [
            'Shoot every product with the same lighting, angle and background for a consistent look — see [AI product photography vs a product shoot](/blog/ai-product-photography-vs-product-shoot/).',
            'Add lifestyle or in-use images for hero products.',
            'Lead with the benefit (“keeps food fresh for longer”), then the feature (“double-wall insulation”).',
            'Keep descriptions short; put numbers in specification tables.',
            'Write in the language your buyers prefer — English plus Telugu or Hindi for dealer markets.',
        ] },
        { type: 'h2', text: 'What should you know about print files?' },
        { type: 'list', items: [
            '**Size:** A4 (210×297 mm) and A5 (148×210 mm) are the most common.',
            '**Bleed:** extend backgrounds about 3 mm past the trim edge so nothing white shows after cutting.',
            '**Colour:** design in CMYK for print; screen colours (RGB) can print duller.',
            '**Resolution:** use high-resolution images (around 300 dpi at the printed size).',
            '**Paper:** a heavier, coated stock for the cover; a lighter stock for inner pages keeps postage and weight down.',
            '**Proof:** always check a printed proof before the full run — colours on paper differ from screens.',
        ] },
        { type: 'h2', text: 'How do you make a good digital version?' },
        { type: 'list', items: [
            'Export a compressed PDF small enough to send on WhatsApp.',
            'Add clickable phone numbers, WhatsApp links and website links.',
            'Use single pages rather than spreads for comfortable phone reading.',
            'Consider a short flip-through video for social media.',
        ] },
        { type: 'tip', text: 'Ask your sales team which three questions customers ask about each product. Answer them in the catalogue and you will shorten every sales call.' },
        { type: 'p', text: 'CK Studio designs product catalogues, brochures and [product retouching](/services/design-and-branding/) for brands and manufacturers. See also [industrial films for manufacturers](/blog/industrial-film-guide-for-manufacturers/) for the video side.' },
    ],
    faqs: [
        { q: 'What size should a product catalogue be?', a: 'A4 is the most common for detailed catalogues; A5 is handier for smaller ranges and dealers. Choose based on how much detail each product needs and how it will be posted or carried.' },
        { q: 'What is bleed in brochure printing?', a: 'Bleed is extra background (usually about 3 mm) beyond the trim line, so that when pages are cut there are no thin white edges.' },
        { q: 'Should catalogues include prices?', a: 'If prices change often or vary by dealer, keep them in a separate price list. That way the catalogue stays usable for longer.' },
        { q: 'How long does catalogue design take?', a: 'A short brochure can take one to two weeks; a large catalogue depends on the number of products, photography and how ready the specifications are.' },
    ],
};

export default article;
