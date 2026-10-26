import React from 'react';


export default function SEO({
    title = 'FlareMinds - Web & App Development & Digital Marketing Agency',
    description = 'FlareMinds is a full-service technology and digital marketing company offering web development, app development, SEO, social media marketing, and custom software solutions. Transform your digital presence with our expert team.',
    keywords = 'web development, app development, digital marketing, SEO, social media marketing, custom software, digital agency, business automation, mobile apps, ecommerce solutions',
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
            <meta name="author" content="FLAREMINDS TECH PRIVATE LIMITED" />
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </>
    );
}
