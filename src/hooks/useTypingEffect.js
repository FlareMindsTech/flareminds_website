import { useEffect, useRef } from 'react';

export const useTypingEffect = (phrases, elementId, typeSpeed = 100, deleteSpeed = 50, pauseTime = 2000) => {
    useEffect(() => {
        const textElement = document.getElementById(elementId);
        if (!textElement) return;

        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let currentSpeed = typeSpeed;
        let timeoutId;

        function type() {
            const currentPhrase = phrases[phraseIndex];

            if (isDeleting) {
                textElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
                currentSpeed = deleteSpeed;
            } else {
                textElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
                currentSpeed = typeSpeed;
            }

            if (!isDeleting && charIndex === currentPhrase.length) {
                isDeleting = true;
                currentSpeed = pauseTime;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                currentSpeed = 500;
            }

            timeoutId = setTimeout(type, currentSpeed);
        }

        type();

        return () => clearTimeout(timeoutId);
    }, [phrases, elementId, typeSpeed, deleteSpeed, pauseTime]);
};
