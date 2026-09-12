import React from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image = 'https://ckstudio.org/images/branding/og-image.jpg',
  url,
  type = 'website',
  structuredData
}) => {
  const { pathname } = useLocation();
  const canonicalUrl = url ?? `https://ckstudio.org${pathname === '/' ? '' : pathname}`;
  const siteTitle = "CK Studio | Professional Video Production";

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": type === 'article' ? 'Article' : 'Organization',
    "name": siteTitle,
    "url": canonicalUrl,
    "headline": title,
    "description": description,
    "image": [image],
    "author": {
      "@type": "Organization",
      "name": "CK Studio"
    }
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <>
      {/* Standard Metadata */}
      <title>{`${title} | CK Studio`}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="CK Studio" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data for Rich Results */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
    </>
  );
};

export default SEO;
