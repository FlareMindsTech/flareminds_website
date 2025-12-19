import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/web.css";
import "../css/training.css";
import {
    FaBullhorn,
    FaSearch,
    FaChartLine,
    FaHashtag,
    FaCheck,
    FaQuoteLeft,
    FaChevronLeft,
    FaChevronRight,
    FaCheckCircle
} from "react-icons/fa";

export default function DigitalMarketingTraining() {
    useEffect(() => {
        const textElement = document.getElementById("typing-text");
        if (!textElement) return;

        const phrases = ["Digital Marketer", "SEO Expert", "Social Media Manager", "Growth Hacker"];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100;
        let timeoutId;

        function type() {
            const currentPhrase = phrases[phraseIndex];

            if (isDeleting) {
                textElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = 50;
            } else {
                textElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 100;
            }

            if (!isDeleting && charIndex === currentPhrase.length) {
                isDeleting = true;
                typeSpeed = 2000;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typeSpeed = 500;
            }

            timeoutId = setTimeout(type, typeSpeed);
        }

        type();

        return () => clearTimeout(timeoutId);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        const steps = document.querySelectorAll(".timeline-step, .fade-up-element");
        steps.forEach((step) => observer.observe(step));

        return () => observer.disconnect();
    }, []);

    const [currentSlide, setCurrentSlide] = useState(0);
    const testimonials = [
        {
            text: "I started my own digital agency after this course. The practical knowledge on ads and SEO is unmatched.",
            name: "Anjali Kumari",
            role: "Founder, DigiTrend",
            img: "https://ui-avatars.com/api/?name=Anjali+K&background=random"
        },
        {
            text: "Helped me grow my freelance business. I now manage social media for 5 international clients.",
            name: "Rahul Verma",
            role: "Freelance Marketer",
            img: "https://ui-avatars.com/api/?name=Rahul+V&background=random"
        },
        {
            text: "The advanced SEO module opened my eyes. I ranked my blog in 2 months applying these techniques.",
            name: "Sneha Patel",
            role: "Content Strategist",
            img: "https://ui-avatars.com/api/?name=Sneha+P&background=random"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="training-page">
            {/* Hero Section */}
            <section className="hero-section training-hero">
                <div className="container hero-container">
                    <div className="hero-content training-hero-content">
                        <div className="badge fade-up-element">Digital Marketing Masterclass</div>
                        <h1 className="hero-title fade-up-element">
                            Become a <br /> <span className="text-gradient typing-cursor" id="typing-text">Marketer</span>
                        </h1>
                        <p className="hero-subtext fade-up-element">
                            Master SEO, Social Media, Google Ads, and Analytics. Drive traffic, engagement, and sales for any business.
                        </p>
                        <div className="hero-buttons fade-up-element">
                            <a href="#curriculum" className="btn-primary">Start Learning</a>
                            <a href="#curriculum" className="btn-outline">View Curriculum</a>
                        </div>
                    </div>
                    <div className="hero-visual training-visual fade-up-element">
                        <img
                            src="https://cdni.iconscout.com/illustration/premium/thumb/digital-marketing-3205166-2679261.png"
                            alt="Digital Marketing Illustration"
                            style={{ width: "100%", filter: "drop-shadow(0 20px 40px rgba(56, 189, 248, 0.2))" }}
                        />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Why Learn <span className="text-gradient">Digital Marketing?</span></h2>
                        <p className="hero-subtext mx-auto" style={{ maxWidth: '600px' }}>
                            Every business needs digital presence. Be the expert they hire.
                        </p>
                    </div>

                    <div className="training-features-grid">
                        {[
                            { icon: FaSearch, title: "SEO Mastery", text: "Rank websites on Page 1 of Google." },
                            { icon: FaHashtag, title: "Social Media", text: "Build brands on Instagram & LinkedIn." },
                            { icon: FaBullhorn, title: "Paid Advertising", text: "Run profitable Google & Meta Ads." },
                            { icon: FaChartLine, title: "Data Analytics", text: "Measure ROI with Google Analytics 4." }
                        ].map((feature, idx) => (
                            <div key={idx} className="glass-card feature-card fade-up-element">
                                <div className="feature-icon-wrapper">
                                    <feature.icon />
                                </div>
                                <h3>{feature.title}</h3>
                                <p>{feature.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Curriculum Section */}
            <section className="curriculum-section section-padding" id="curriculum">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Marketing <span className="text-gradient">Curriculum</span></h2>
                        <p className="hero-subtext mx-auto">A complete 360-degree digital marketing roadmap.</p>
                    </div>
                    <div className="curriculum-grid">
                        {[
                            {
                                num: "01", title: "SEO & Content", desc: "Keyword Research, Technical SEO",
                                topics: ["Google Search Console", "Blogging Strategies", "Link Building"]
                            },
                            {
                                num: "02", title: "Social Media Marketing", desc: "Instagram, LinkedIn, Twitter",
                                topics: ["Personal Branding", "Content Calendars", "Community Growth"]
                            },
                            {
                                num: "03", title: "Paid Ads (PPC)", desc: "Google Ads, Facebook Ads",
                                topics: ["Ad Copywriting", "Audience Targeting", "Budget Management"]
                            },
                            {
                                num: "04", title: "Analytics & Strategy", desc: "GA4, Reporting, CRO",
                                topics: ["User Behavior Tracking", "CRO Strategies", "Client Reporting"]
                            }
                        ].map((module, idx) => (
                            <div key={idx} className="glass-card module-card fade-up-element">
                                <div className="module-number">{module.num}</div>
                                <div className="module-content">
                                    <h3>{module.title}</h3>
                                    <p>{module.desc}</p>
                                    <ul className="module-topics">
                                        {module.topics.map((topic, i) => (
                                            <li key={i}><FaCheckCircle className="check-icon" /> {topic}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="section-padding bg-light">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Student <span className="text-gradient">Success Stories</span></h2>
                        <p className="hero-subtext mx-auto">From learners to marketing leaders.</p>
                    </div>

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
                            <button className="control-btn" onClick={prevSlide}><FaChevronLeft /></button>
                            <div className="carousel-dots">
                                {testimonials.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`dot-indicator ${idx === currentSlide ? 'active' : ''}`}
                                        onClick={() => setCurrentSlide(idx)}
                                    ></div>
                                ))}
                            </div>
                            <button className="control-btn" onClick={nextSlide}><FaChevronRight /></button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="home-contact-section text-center">
                <div className="container">
                    <div className="contact-cta-box rounded-2xl">
                        <h2>Ready to Grow Brands?</h2>
                        <p>Join the next batch of Digital Marketing experts.</p>
                        <Link to="/contact" className="btn-primary" style={{ background: 'white', color: '#0ea5e9' }}>
                            Enroll Now
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

