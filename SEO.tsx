import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  image = 'https://ckstudio.org/images/branding/og-image.jpg', 
  url = 'https://ckstudio.org', 
  type = 'website' 
}) => {
  const siteTitle = "CK Studio | Professional Video Production";

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{`${title} | CK Studio`}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
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
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": type === 'article' ? 'Article' : 'Organization',
          "name": siteTitle,
          "url": url,
          "headline": title,
          "description": description,
          "image": [image],
          "author": {
            "@type": "Organization",
            "name": "CK Studio"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
