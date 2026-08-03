import { useEffect } from 'react';

export const useScrollAnimation = (selector = '.fade-up-element', animationClass = 'show', threshold = 0.1) => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(animationClass);
                } else {
                    entry.target.classList.remove(animationClass);
                }
            });
        }, { threshold });

        const elements = document.querySelectorAll(selector);
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [selector, animationClass, threshold]);
};
