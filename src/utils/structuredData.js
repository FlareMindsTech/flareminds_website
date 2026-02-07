const SITE_URL = 'https://www.flaremindstech.com';
const SITE_NAME = 'FlareMinds';
const COMPANY_NAME = 'FlareMinds Technology & Services';

export const getOrganizationSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY_NAME,
    alternateName: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/src/assets/cropped-fm-logo-2-1.png`,
    description: 'Full-service digital agency specializing in web development, app development, digital marketing, SEO, and business automation.',
    contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-9500950813',
        contactType: 'Customer Service',
        email: 'Info@flaremindstech.com',
        availableLanguage: ['English', 'Tamil', 'Hindi'],
    },
    sameAs: [
        'https://www.facebook.com/flareminds',
        'https://www.linkedin.com/company/flareminds',
        'https://www.instagram.com/flareminds',
    ],
    address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN',
        addressLocality: 'Coimbatore',
        addressRegion: 'Tamil Nadu',
    },
});

export const getLocalBusinessSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: COMPANY_NAME,
    image: `${SITE_URL}/src/assets/cropped-fm-logo-2-1.png`,
    url: SITE_URL,
    telephone: '+91-9500950813',
    email: 'Info@flaremindstech.com',
    priceRange: '$$',
    address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN',
        addressLocality: 'Coimbatore',
        addressRegion: 'Tamil Nadu',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: '11.0168',
        longitude: '76.9558',
    },
    openingHoursSpecification: [
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
        },
    ],
});

export const getWebSiteSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: 'Digital Marketing & Technology Services - Web Development, App Development, SEO, Social Media Marketing',
    publisher: {
        '@id': `${SITE_URL}/#organization`,
    },
    potentialAction: {
        '@type': 'SearchAction',
        target: {
            '@type': 'EntryPoint',
            urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
    },
});

export const getServiceSchema = (serviceData) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceData.title,
    provider: {
        '@type': 'Organization',
        name: COMPANY_NAME,
        url: SITE_URL,
    },
    areaServed: {
        '@type': 'Country',
        name: 'India',
    },
    description: serviceData.description,
    offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceRange: '$$',
    },
});

export const getFAQSchema = (faqItems) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
        },
    })),
});

export const getBreadcrumbSchema = (breadcrumbs) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: `${SITE_URL}${crumb.path}`,
    })),
});

export const getArticleSchema = (article) => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image || `${SITE_URL}/og-image.jpg`,
    author: {
        '@type': 'Organization',
        name: COMPANY_NAME,
    },
    publisher: {
        '@type': 'Organization',
        name: COMPANY_NAME,
        logo: {
            '@type': 'ImageObject',
            url: `${SITE_URL}/src/assets/cropped-fm-logo-2-1.png`,
        },
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
});

export const getCourseSchema = (courseData) => ({
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: courseData.name,
    description: courseData.description,
    provider: {
        '@type': 'Organization',
        name: COMPANY_NAME,
        url: SITE_URL,
    },
    offers: {
        '@type': 'Offer',
        category: 'Professional Development',
        availability: 'https://schema.org/InStock',
    },
});
