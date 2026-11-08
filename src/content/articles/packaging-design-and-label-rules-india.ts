/** Text of "Packaging and Label Design in India: What Must Be on the Pack". Its card (title, summary, date, reading time) is in content/blog.ts. */
import type { ArticleContent } from '../blog';

const article: ArticleContent = {
    answer: 'Pre-packed products sold in India must carry certain declarations under the Legal Metrology (Packaged Commodities) Rules — including the name and address of the manufacturer, packer or importer, the common name of the product, the net quantity, the month and year of manufacture, the MRP including all taxes, the unit sale price and consumer care details. Food has extra FSSAI labelling requirements such as the ingredients list, nutrition information, the veg or non-veg symbol, the FSSAI logo and licence number, and date marking. Design the pack so all of it is clear and legible without hiding your brand.',
    keyPoints: [
        'Legal Metrology declarations apply to most pre-packed retail products.',
        'Food packs also follow the FSSAI Labelling and Display Regulations, 2020.',
        'Plan a clear legal panel and minimum text sizes before the creative design.',
        'Words like “natural”, “fresh” and “pure” have rules of their own.',
    ],
    body: [
        { type: 'p', text: 'This guide is a starting point for brand owners and designers, not legal advice. Labelling rules are amended from time to time, and some products have extra rules — check the current requirements, or ask a regulatory consultant, before you print.' },
        { type: 'h2', text: 'What must every pre-packed product label show?' },
        { type: 'p', text: 'Under the Legal Metrology (Packaged Commodities) Rules, 2011, as amended, packages for retail sale generally need:' },
        { type: 'list', items: [
            'The name and address of the manufacturer, packer or importer.',
            'The country of origin, for imported products.',
            'The common or generic name of the product.',
            'The net quantity, in standard units of weight, volume or number.',
            'The month and year of manufacture.',
            'The maximum retail price (MRP), inclusive of all taxes.',
            'The unit sale price — the price per standard unit, such as per kilogram or litre — so shoppers can compare.',
            'Consumer care details: a phone number and email address for complaints.',
        ] },
        { type: 'p', text: 'The month and year of manufacture and the unit sale price became mandatory through amendments the government announced in 2021. Some categories, such as electronics and garments, have specific relaxations or extra options.' },
        { type: 'h2', text: 'What extra details do food packs need?' },
        { type: 'p', text: 'Packaged food also follows the Food Safety and Standards (Labelling and Display) Regulations, 2020. In summary, food labels carry:' },
        { type: 'list', items: [
            'The name of the food, and a list of ingredients in descending order of weight.',
            'Nutritional information — energy, protein, carbohydrates, sugars, fat and more, with sodium (salt) now required.',
            'The vegetarian (green) or non-vegetarian (brown) symbol.',
            'Declarations of food additives and allergens where they apply.',
            'The name and address of the manufacturer or packer, with the FSSAI logo and licence number.',
            'The net quantity, a lot or batch number, and date marking — such as “best before” or “use by”.',
            'Instructions for use where needed, and the country of origin for imported food.',
        ] },
        { type: 'h2', text: 'How do you design a label that is compliant and still beautiful?' },
        { type: 'list', items: [
            '**Separate brand and legal space** — the front sells; a clean legal panel on the back or side informs.',
            '**Respect minimum text sizes** — both sets of rules set minimum sizes for declarations based on the pack size. Check them before you design.',
            '**Use strong contrast** — no light grey text on silver film.',
            '**Make one legal-panel template** for your whole range, so every variant is consistent and quick to check.',
            '**Leave a clear area for batch and date printing** — usually printed on the production line, not in the artwork.',
            '**Add a barcode** — most retailers and marketplaces need a GS1 barcode.',
            '**Check every language** — if you add Telugu or Hindi text, keep the mandatory details complete and correctly translated.',
        ] },
        { type: 'h2', text: 'What about claims on the pack?' },
        { type: 'p', text: 'Words on a pack are claims. For food, the FSSAI (Advertising and Claims) Regulations, 2018 restrict words such as “natural”, “fresh”, “pure”, “original” and “traditional” to products that meet set conditions, and health claims need a scientific basis. For any product, the ASCI code and consumer protection law expect claims to be truthful and provable. When your ad film shows the pack, the same claims appear on screen — see [AI product photography vs a product shoot](/blog/ai-product-photography-vs-product-shoot/) on showing packs accurately.' },
        { type: 'h2', text: 'What is the packaging design process?' },
        { type: 'steps', items: [
            '**Brief** — the product, price point, shelf and competition, and where it will be sold (shops, marketplaces, exports).',
            '**Structure** — get the dieline (the flat template) from your printer or packaging supplier.',
            '**Legal text** — collect every mandatory declaration and have it approved.',
            '**Concepts** — design routes, mocked up in 3D and on a shelf next to competitors.',
            '**Refine and check** — legibility, the legal panel, barcode and colours.',
            '**Proofs** — colour proofs and a physical mock-up before mass printing.',
            '**Launch assets** — pack renders and photos for e-commerce, ads and social media.',
        ] },
        { type: 'p', text: 'A strong pack is part of a wider identity — see the [logo design guide](/blog/logo-design-guide/), [brand guidelines](/blog/brand-guidelines-document/) and [product catalogue and brochure design](/blog/product-catalogue-brochure-design/).' },
        { type: 'tip', text: 'Get the printer’s dieline and the approved legal text before design starts. Squeezing mandatory details into a finished design always looks squeezed.' },
    ],
    faqs: [
        { q: 'Is the MRP mandatory on all packs?', a: 'For pre-packed products sold at retail, yes: the MRP inclusive of all taxes is one of the mandatory declarations under the Legal Metrology rules, along with the unit sale price.' },
        { q: 'What is the unit sale price?', a: 'It is the price per standard unit — for example per kilogram, per litre or per piece — shown alongside the MRP, so shoppers can compare packs of different sizes.' },
        { q: 'Do food packs need the FSSAI logo?', a: 'Yes. Packaged food labels carry the FSSAI logo with the licence or registration number of the food business, along with the other details the labelling regulations require.' },
        { q: 'Who checks that our label is compliant?', a: 'You are responsible for your label. Many brands have their legal panel checked by a regulatory consultant or legal adviser before printing, especially for food, cosmetics and other regulated products.' },
    ],
    sources: [
        { label: 'PIB — amendments to the Legal Metrology (Packaged Commodities) Rules: date of manufacture and unit sale price (2021)', url: 'https://pib.gov.in/PressReleasePage.aspx?PRID=1770064' },
        { label: 'FSSAI — FAQs on the Labelling and Display Regulations (PDF)', url: 'https://fssai.gov.in/upload/uploadfiles/files/FAQ_Labelling_Display_23_06_2022.pdf' },
        { label: 'ASCI — Advertising Standards Council of India', url: 'https://www.ascionline.in/' },
    ],
};

export default article;
