import { useEffect } from "react";
import "../css/web.css";
import {
    FaBullhorn,
    FaSearch,
    FaChartLine,
    FaHashtag,
    FaCheck,
    FaQuoteLeft,
    FaChevronLeft,
    FaChevronRight
} from "react-icons/fa";

export default function DigitalMarketingTraining() {

    useEffect(() => {
        const textElement = document.getElementById("typing-text");
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
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
        animatedElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const slides = document.querySelectorAll('.testimonial-slide');
        const dotsContainer = document.getElementById('carousel-dots');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        let currentSlide = 0;
        let autoSlideInterval;

        if (dotsContainer) dotsContainer.innerHTML = '';

        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = 'dot-indicator' + (index === 0 ? ' active' : '');
            dot.onclick = () => goToSlide(index);
            dotsContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll('.dot-indicator');

        function updateSlides() {
            slides.forEach((slide, index) => {
                slide.classList.remove('active');
                if (dots[index]) dots[index].classList.remove('active');
                if (index === currentSlide) {
                    slide.classList.add('active');
                    if (dots[index]) dots[index].classList.add('active');
                }
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            updateSlides();
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            updateSlides();
        }

        function goToSlide(index) {
            currentSlide = index;
            updateSlides();
        }

        if (nextBtn) nextBtn.onclick = nextSlide;
        if (prevBtn) prevBtn.onclick = prevSlide;

        autoSlideInterval = setInterval(nextSlide, 5000);

        return () => clearInterval(autoSlideInterval);
    }, []);

    useEffect(() => {
        const container = document.getElementById('particles');
        if (container) container.innerHTML = '';

        const particleCount = 20;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = Math.random() * 5 + 'px';
            particle.style.height = particle.style.width;
            particle.style.background = `rgba(14, 165, 233, ${Math.random() * 0.2})`;
            particle.style.borderRadius = '50%';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;

            container.appendChild(particle);
        }
    }, []);

    return (
        <>
            <div className="bg-gradient"></div>
            <div className="bg-particles" id="particles"></div>

            <header className="hero" id="home">
                <div className="container hero-container">
                    <div className="hero-content fade-in-up">
                        <div className="badge">Digital Marketing Masterclass</div>
                        <h1 className="hero-title">
                            Become a <br /> <span className="text-gradient" id="typing-text"></span>
                        </h1>
                        <p className="hero-subtitle">
                            Master SEO, Social Media, Google Ads, and Analytics. Drive traffic, engagement, and sales for any business.
                        </p>
                        <div className="hero-cta">
                            <a href="#curriculum" className="btn btn-primary glow-effect">Start Learning Today</a>
                            <a href="#curriculum" className="btn btn-secondary">View Curriculum</a>
                        </div>
                    </div>
                    <div className="hero-visual fade-in-left">
                        <img
                            src="https://cdni.iconscout.com/illustration/premium/thumb/digital-marketing-3205166-2679261.png"
                            alt="Digital Marketing Illustration"
                            style={{ width: "100%", filter: "drop-shadow(0 10px 20px rgba(56, 189, 248, 0.2))", animation: "float 6s ease-in-out infinite" }}
                        />
                    </div>
                </div>
            </header>

            <section className="features" id="features">
                <div className="container">
                    <div className="section-header text-center fade-in-up">
                        <h2 className="section-title">
                            Why Learn <span className="text-gradient">Digital Marketing?</span>
                        </h2>
                        <p className="section-subtitle">Every business needs digital presence. Be the expert they hire.</p>
                    </div>
                    <div className="features-grid">
                        <div className="feature-card glass-card fade-in-up delay-100">
                            <div className="feature-icon">
                                <FaSearch />
                            </div>
                            <h3>SEO Mastery</h3>
                            <p>Rank websites on the first page of Google with advanced On-page and Off-page strategies.</p>
                        </div>
                        <div className="feature-card glass-card fade-in-up delay-200">
                            <div className="feature-icon">
                                <FaHashtag />
                            </div>
                            <h3>Social Media</h3>
                            <p>Build brands on Instagram, Facebook, and LinkedIn with viral content and strategies.</p>
                        </div>
                        <div className="feature-card glass-card fade-in-up delay-300">
                            <div className="feature-icon">
                                <FaBullhorn />
                            </div>
                            <h3>Paid Advertising</h3>
                            <p>Run profitable campaigns on Google Ads and Meta Ads to generate instant leads.</p>
                        </div>
                        <div className="feature-card glass-card fade-in-up delay-400">
                            <div className="feature-icon">
                                <FaChartLine />
                            </div>
                            <h3>Data Analytics</h3>
                            <p>Measure success with Google Analytics 4 and optimize campaigns for better ROI.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="curriculum" id="curriculum">
                <div className="container">
                    <div className="section-header text-center fade-in-up">
                        <h2 className="section-title">
                            Marketing <span className="text-gradient">Curriculum</span>
                        </h2>
                        <p className="section-subtitle">A complete 360-degree digital marketing roadmap.</p>
                    </div>
                    <div className="curriculum-grid">
                        <div className="module-card glass-card fade-in-left">
                            <div className="module-number">01</div>
                            <div className="module-content">
                                <h3>SEO & Content</h3>
                                <p>Keyword Research, Technical SEO, Content Marketing</p>
                                <ul className="module-topics">
                                    <li><FaCheck /> Google Search Console</li>
                                    <li><FaCheck /> Blogging Strategies</li>
                                    <li><FaCheck /> Link Building</li>
                                </ul>
                            </div>
                        </div>
                        <div className="module-card glass-card fade-in-right">
                            <div className="module-number">02</div>
                            <div className="module-content">
                                <h3>Social Media Marketing</h3>
                                <p>Instagram, Facebook, LinkedIn, Twitter</p>
                                <ul className="module-topics">
                                    <li><FaCheck /> Personal Branding</li>
                                    <li><FaCheck /> Content Calendars</li>
                                    <li><FaCheck /> Community Growth</li>
                                </ul>
                            </div>
                        </div>
                        <div className="module-card glass-card fade-in-left">
                            <div className="module-number">03</div>
                            <div className="module-content">
                                <h3>Paid Ads (PPC)</h3>
                                <p>Google Ads, Facebook Ads, Retargeting</p>
                                <ul className="module-topics">
                                    <li><FaCheck /> Ad Copywriting</li>
                                    <li><FaCheck /> Audience Targeting</li>
                                    <li><FaCheck /> Budget Management</li>
                                </ul>
                            </div>
                        </div>
                        <div className="module-card glass-card fade-in-right">
                            <div className="module-number">04</div>
                            <div className="module-content">
                                <h3>Analytics & Strategy</h3>
                                <p>Google Analytics 4, Reporting, CRO</p>
                                <ul className="module-topics">
                                    <li><FaCheck /> User Behavior Tracking</li>
                                    <li><FaCheck /> Conversion Rate Optimization</li>
                                    <li><FaCheck /> Client Reporting</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonials" id="testimonials">
                <div className="container">
                    <div className="section-header text-center fade-in-up">
                        <h2 className="section-title">
                            Student <span className="text-gradient">Success Stories</span>
                        </h2>
                        <p className="section-subtitle">From learners to marketing leaders.</p>
                    </div>
                    <div className="testimonial-carousel-container glass-card fade-in-up">
                        <div className="testimonial-track" id="testimonial-track">
                            <div className="testimonial-slide active">
                                <div className="testimonial-content">
                                    <div className="quote-icon"><FaQuoteLeft /></div>
                                    <p className="testimonial-text">"I started my own digital agency after this course. The practical knowledge on ads and SEO is unmatched."</p>
                                    <div className="testimonial-author">
                                        <img src="https://ui-avatars.com/api/?name=Anjali+K&background=random" alt="Anjali K" className="author-img" />
                                        <div className="author-info">
                                            <h4>Anjali Kumari</h4>
                                            <p>Founder, DigiTrend</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-slide">
                                <div className="testimonial-content">
                                    <div className="quote-icon"><FaQuoteLeft /></div>
                                    <p className="testimonial-text">"Helped me grow my freelance business. I now manage social media for 5 international clients."</p>
                                    <div className="testimonial-author">
                                        <img src="https://ui-avatars.com/api/?name=Rahul+V&background=random" alt="Rahul V" className="author-img" />
                                        <div className="author-info">
                                            <h4>Rahul Verma</h4>
                                            <p>Freelance Marketer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-slide">
                                <div className="testimonial-content">
                                    <div className="quote-icon"><FaQuoteLeft /></div>
                                    <p className="testimonial-text">"The advanced SEO module opened my eyes. I ranked my blog in 2 months applying these techniques."</p>
                                    <div className="testimonial-author">
                                        <img src="https://ui-avatars.com/api/?name=Sneha+P&background=random" alt="Sneha P" className="author-img" />
                                        <div className="author-info">
                                            <h4>Sneha Patel</h4>
                                            <p>Content Strategist</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-controls">
                            <button className="control-btn prev" id="prev-btn"><FaChevronLeft /></button>
                            <div className="carousel-dots" id="carousel-dots"></div>
                            <button className="control-btn next" id="next-btn"><FaChevronRight /></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
