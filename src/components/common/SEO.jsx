import React from 'react';


export default function SEO({
    title = 'FlareMinds - Digital Marketing & Technology Services',
    description = 'FlareMinds is a full-service digital agency offering web development, app development, SEO, social media marketing, and business automation solutions. Transform your digital presence with our expert team.',
    keywords = 'digital marketing, web development, app development, SEO, social media marketing, digital agency, business automation, MERN stack training, AI ML training, ecommerce solutions',
    canonical = '',
    ogImage = '/og-image.jpg',
    ogType = 'website',
    schema = null,
}) {
    const siteUrl = 'https://www.flaremindstech.com';
    const fullUrl = canonical || (typeof window !== 'undefined' ? window.location.href : siteUrl);
    const fullImageUrl = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

    return (
        <>
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={fullUrl} />
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImageUrl} />
            <meta property="og:site_name" content="FlareMinds" />
            <meta property="og:locale" content="en_US" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={fullUrl} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImageUrl} />
            <meta name="robots" content="index, follow" />
            <meta name="language" content="English" />
            <meta name="author" content="FlareMinds Technology & Services" />
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </>
    );
}
