import React, { useState } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TestimonialCarousel = ({ testimonials }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="testimonial-carousel-container glass-card fade-up-element">
            <div className="student-card">
                <FaQuoteLeft className="quote-icon mx-auto" />
                <p className="student-quote">"{testimonials[currentSlide].text}"</p>
                <img src={testimonials[currentSlide].img} alt={testimonials[currentSlide].name} className="student-img" />
                <div className="student-info">
                    <h4>{testimonials[currentSlide].name}</h4>
                    <p>{testimonials[currentSlide].role}</p>
                </div>
            </div>

            <div className="carousel-controls">
                <button type="button" className="control-btn" onClick={prevSlide} aria-label="Show previous testimonial"><FaChevronLeft aria-hidden="true" /></button>
                <div className="carousel-dots">
                    {testimonials.map((_, idx) => (
                        <button
                            type="button"
                            key={idx}
                            className={`dot-indicator ${idx === currentSlide ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(idx)}
                            aria-label={`Show testimonial ${idx + 1}`}
                            aria-current={idx === currentSlide ? 'true' : undefined}
                        />
                    ))}
                </div>
                <button type="button" className="control-btn" onClick={nextSlide} aria-label="Show next testimonial"><FaChevronRight aria-hidden="true" /></button>
            </div>
        </div>
    );
};

export default TestimonialCarousel;
