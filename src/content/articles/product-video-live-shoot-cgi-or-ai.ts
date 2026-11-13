/** Text of "Product Videos: Live Shoot, CGI or AI? How to Choose the Right One". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'Choose a live shoot when real people, real textures and real use matter; 3D CGI when you need perfect control, impossible camera moves, cut-away views or a product that does not exist yet; and AI when you need many stylised scenes and variations quickly. Many of the best product videos combine all three — a real product shot, CGI close-ups and AI-generated backgrounds.',
    keyPoints: [
        'Live shoot: most believable for people, food, fabric and real use.',
        '3D CGI: total control, perfect lighting and views no camera can get.',
        'AI: fast scenes and variations, but protect product accuracy.',
        'Plan lengths and aspect ratios for every platform up front.',
    ],
    body: [
        { type: 'h2', text: 'How do live shoots, CGI and AI compare for product videos?' },
        {
            type: 'table',
            head: ['', 'Live shoot', '3D CGI', 'AI-generated'],
            rows: [
                ['Realism', 'Highest for people, food and textures', 'Very high for hard surfaces and products', 'Good for scenes; product details need care'],
                ['Control', 'Limited by set, light and physics', 'Total: every angle, light and move', 'Partial; results vary between generations'],
                ['Product not ready yet', 'Not possible', 'Possible from CAD files or designs', 'Possible for concepts, not final detail'],
                ['Changes later', 'May need a re-shoot', 'Easy: change and re-render', 'Easy: regenerate'],
                ['Best for', 'Lifestyle, food, fashion, demonstrations', 'Electronics, machinery, packaging, launches, cut-aways', 'Backgrounds, mood scenes, social variations'],
                ['Watch out for', 'Shoot-day cost and logistics', 'Modelling time for complex products', 'Wrong labels, logos or proportions'],
            ],
        },
        { type: 'h2', text: 'Which approach suits your product?' },
        { type: 'list', items: [
            '**New launch, product not manufactured yet:** 3D CGI from CAD files, with AI or CGI backgrounds.',
            '**E-commerce listing:** clean live or CGI turntables on white, plus short in-use clips.',
            '**Industrial machinery:** live footage of the machine working, plus CGI cut-aways that show what happens inside. See [industrial films for manufacturers](/blog/industrial-film-guide-for-manufacturers/).',
            '**Food, cosmetics, fabric:** live shoot — texture sells, and it is hardest to fake.',
            '**Real estate:** CGI walkthroughs and renders before construction. See [real estate video marketing](/blog/real-estate-video-marketing-hyderabad/).',
            '**Social media campaigns:** a real product asset composited into many AI scenes for testing.',
        ] },
        { type: 'h2', text: 'What makes a product video work?' },
        { type: 'list', items: [
            'A hook in the first two seconds — movement, a reveal or a question.',
            'The product in use, not just rotating in space.',
            'One benefit per shot, shown rather than told.',
            'Close-ups of the details that justify the price.',
            'The brand and product name early, with captions for silent viewing.',
            'A clear ending: where to buy, call or message.',
            'Versions in every length and shape you need — see our [video size cheat sheet](/blog/video-ad-sizes-aspect-ratios-cheat-sheet/).',
        ] },
        { type: 'h2', text: 'How is a product video made?' },
        { type: 'steps', items: [
            'Agree the key benefits, in order of importance, and the platforms.',
            'Script and storyboard the shots.',
            'Shoot the product, or build the 3D model from CAD files and reference photos.',
            'Add AI or CGI environments where they help.',
            'Animate, edit, grade and add motion graphics and sound.',
            'Check every logo, label and colour against the real product, then deliver all versions.',
        ] },
        { type: 'h2', text: 'Which product video formats should you make?' },
        {
            type: 'table',
            head: ['Format', 'Typical length', 'Where it works'],
            rows: [
                ['Hero product film', '30–60 seconds', 'Launches, website home page, YouTube'],
                ['360° turntable', '10–20 seconds, looping', 'Marketplace listings and product pages'],
                ['How-to or demo', '1–3 minutes', 'Product pages, YouTube, sales teams'],
                ['Feature close-ups', '6–15 seconds each', 'Ads and Reels, one feature per clip'],
                ['Unboxing', '30–90 seconds', 'Social media and marketplaces'],
                ['Size and comparison', '10–20 seconds', 'Listings where size causes returns'],
            ],
        },
        { type: 'p', text: 'Planning these together means one shoot or one 3D model feeds all of them — far cheaper than making each separately later.' },
        { type: 'tip', text: 'Send at least three samples of the product to a shoot — one always gets scratched, and the best-looking one becomes the hero.' },
        { type: 'p', text: 'Product videos, CGI enhancements and AI compositing are part of our [VFX and CG works](/services/vfx-and-cg/). For still images, see [AI product photography vs a product shoot](/blog/ai-product-photography-vs-product-shoot/).' },
        { type: 'p', text: 'Related guides: [3D product animation](/blog/3d-product-animation-guide/), [food and beverage ad films](/blog/food-and-beverage-ad-films/) and [product videos for Amazon and Flipkart](/blog/ecommerce-product-videos-amazon-flipkart/).' },
    ],
    faqs: [
        { q: 'Is CGI cheaper than a live product shoot?', a: 'It depends on the product. Simple hard-surface products can be cheaper and more flexible in CGI, especially when many angles or changes are needed; complex organic products are often quicker to film.' },
        { q: 'What files do I need for a 3D product video?', a: 'CAD or 3D files if you have them, plus reference photos, exact colours and finishes, and the real product if possible. Without CAD files, the model is built from photos and measurements.' },
        { q: 'How long should a product video be?', a: 'Six to fifteen seconds for social ads, 30 to 60 seconds for websites and marketplaces, and up to two or three minutes for detailed demonstrations.' },
        { q: 'Can AI make a product video from one photo?', a: 'It can animate a scene around one good photo, but complex movement, rotation and close-up details are more reliable with CGI or filming.' },
    ],
};

export default article;
