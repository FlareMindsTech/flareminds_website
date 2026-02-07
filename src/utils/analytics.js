const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';

export const initGA = () => {
    if (typeof window === 'undefined') return;

    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
        window.dataLayer.push(arguments);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
        page_path: window.location.pathname,
        send_page_view: true,
    });
};

export const trackPageView = (path) => {
    if (typeof window === 'undefined' || !window.gtag) return;

    window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: path,
    });
};

export const trackEvent = (action, category, label = '', value = null) => {
    if (typeof window === 'undefined' || !window.gtag) return;

    const eventParams = {
        event_category: category,
        event_label: label,
    };

    if (value !== null) {
        eventParams.value = value;
    }

    window.gtag('event', action, eventParams);
};

export const trackCTAClick = (buttonName, location = 'unknown') => {
    trackEvent('click', 'CTA', `${buttonName} - ${location}`);
};

export const trackFormSubmit = (formName) => {
    trackEvent('submit', 'Form', formName);
};

export const trackExternalLink = (url) => {
    trackEvent('click', 'External Link', url);
};

export const trackScrollDepth = (percentage) => {
    trackEvent('scroll', 'Engagement', `${percentage}%`, percentage);
};
