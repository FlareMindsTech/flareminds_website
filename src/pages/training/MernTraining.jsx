import { useEffect } from "react";
import "../css/web.css";
import {
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaServer,
    FaCheck,
    FaQuoteLeft,
    FaChevronLeft,
    FaChevronRight
} from "react-icons/fa";

export default function MernTraining() {

    useEffect(() => {
        const textElement = document.getElementById("typing-text");
        const phrases = ["MERN Stack Developer", "Full Stack Engineer", "React Specialist"];
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
                        <div className="badge">New MERN Batch Starting Soon</div>
                        <h1 className="hero-title">
                            Become a <br /> <span className="text-gradient" id="typing-text"></span>
                        </h1>
                        <p className="hero-subtitle">
                            Master MongoDB, Express, React, and Node.js. Build full-stack applications from scratch to deployment.
                        </p>
                        <div className="hero-cta">
                            <a href="#curriculum" className="btn btn-primary glow-effect">Start Learning Today</a>
                            <a href="#curriculum" className="btn btn-secondary">View Curriculum</a>
                        </div>
                    </div>
                    <div className="hero-visual fade-in-left">
                        <img
                            src="https://cdni.iconscout.com/illustration/premium/thumb/mern-stack-4433361-3682923.png"
                            alt="MERN Stack Illustration"
                            style={{ width: "100%", filter: "drop-shadow(0 10px 20px rgba(56, 189, 248, 0.2))", animation: "float 6s ease-in-out infinite" }}
                        />
                    </div>
                </div>
            </header>

            <section className="features" id="features">
                <div className="container">
                    <div className="section-header text-center fade-in-up">
                        <h2 className="section-title">
                            Why Learn <span className="text-gradient">MERN Stack?</span>
                        </h2>
                        <p className="section-subtitle"> The most in-demand full-stack technology in 2024.</p>
                    </div>
                    <div className="features-grid">
                        <div className="feature-card glass-card fade-in-up delay-100">
                            <div className="feature-icon">
                                <FaReact />
                            </div>
                            <h3>React.js Frontend</h3>
                            <p>Build dynamic, interactive user interfaces with the world's most popular library.</p>
                        </div>
                        <div className="feature-card glass-card fade-in-up delay-200">
                            <div className="feature-icon">
                                <FaNodeJs />
                            </div>
                            <h3>Node.js Backend</h3>
                            <p>Create fast, scalable server-side applications using JavaScript everywhere.</p>
                        </div>
                        <div className="feature-card glass-card fade-in-up delay-300">
                            <div className="feature-icon">
                                <FaDatabase />
                            </div>
                            <h3>MongoDB Database</h3>
                            <p>Work with flexible, NoSQL databases designed for modern web apps.</p>
                        </div>
                        <div className="feature-card glass-card fade-in-up delay-400">
                            <div className="feature-icon">
                                <FaServer />
                            </div>
                            <h3>Full Stack Integration</h3>
                            <p>Seamlessly connect frontend and backend with REST APIs and JWT Authentication.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="curriculum" id="curriculum">
                <div className="container">
                    <div className="section-header text-center fade-in-up">
                        <h2 className="section-title">
                            MERN Stack <span className="text-gradient">Curriculum</span>
                        </h2>
                        <p className="section-subtitle">From zero code to full-stack hero.</p>
                    </div>
                    <div className="curriculum-grid">
                        <div className="module-card glass-card fade-in-left">
                            <div className="module-number">01</div>
                            <div className="module-content">
                                <h3>Frontend with React</h3>
                                <p>Components, Hooks, State Management, Routing</p>
                                <ul className="module-topics">
                                    <li><FaCheck /> React Hooks</li>
                                    <li><FaCheck /> Context API / Redux</li>
                                    <li><FaCheck /> Tailwind CSS</li>
                                </ul>
                            </div>
                        </div>
                        <div className="module-card glass-card fade-in-right">
                            <div className="module-number">02</div>
                            <div className="module-content">
                                <h3>Backend with Node & Express</h3>
                                <p>Server setup, API endpoints, Middleware</p>
                                <ul className="module-topics">
                                    <li><FaCheck /> RESTful APIs</li>
                                    <li><FaCheck /> Express Router</li>
                                    <li><FaCheck /> Error Handling</li>
                                </ul>
                            </div>
                        </div>
                        <div className="module-card glass-card fade-in-left">
                            <div className="module-number">03</div>
                            <div className="module-content">
                                <h3>Database with MongoDB</h3>
                                <p>Schema design, CRUD operations, Aggregation</p>
                                <ul className="module-topics">
                                    <li><FaCheck /> Mongoose ODM</li>
                                    <li><FaCheck /> Data Validation</li>
                                    <li><FaCheck /> Atlas Cloud Setup</li>
                                </ul>
                            </div>
                        </div>
                        <div className="module-card glass-card fade-in-right">
                            <div className="module-number">04</div>
                            <div className="module-content">
                                <h3>Integration & Deployment</h3>
                                <p>Auth, Security, Deployment pipelines</p>
                                <ul className="module-topics">
                                    <li><FaCheck /> JWT Authentication</li>
                                    <li><FaCheck /> Payment Gateways</li>
                                    <li><FaCheck /> Deploy to Vercel/Render</li>
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
                        <p className="section-subtitle">Hear from our certified MERN Stack developers.</p>
                    </div>
                    <div className="testimonial-carousel-container glass-card fade-in-up">
                        <div className="testimonial-track" id="testimonial-track">
                            <div className="testimonial-slide active">
                                <div className="testimonial-content">
                                    <div className="quote-icon"><FaQuoteLeft /></div>
                                    <p className="testimonial-text">"I couldn't believe I built a full e-commerce site in just a few weeks. The MERN course is intense but worth it."</p>
                                    <div className="testimonial-author">
                                        <img src="https://ui-avatars.com/api/?name=Rohan+M&background=random" alt="Rohan M" className="author-img" />
                                        <div className="author-info">
                                            <h4>Rohan Mehta</h4>
                                            <p>MERN Developer @ TechFlow</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-slide">
                                <div className="testimonial-content">
                                    <div className="quote-icon"><FaQuoteLeft /></div>
                                    <p className="testimonial-text">"The way they teach Node.js and MongoDB makes backend development feel easy. Great instructors!"</p>
                                    <div className="testimonial-author">
                                        <img src="https://ui-avatars.com/api/?name=Priya+S&background=random" alt="Priya S" className="author-img" />
                                        <div className="author-info">
                                            <h4>Priya Sharma</h4>
                                            <p>Full Stack Engineer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-slide">
                                <div className="testimonial-content">
                                    <div className="quote-icon"><FaQuoteLeft /></div>
                                    <p className="testimonial-text">"From API integration to authentication, every topic is covered in depth with real-world examples."</p>
                                    <div className="testimonial-author">
                                        <img src="https://ui-avatars.com/api/?name=Karthik+R&background=random" alt="Karthik R" className="author-img" />
                                        <div className="author-info">
                                            <h4>Karthik Raj</h4>
                                            <p>Freelance Developer</p>
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
