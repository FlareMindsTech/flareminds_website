import { useEffect } from "react";
import "../css/web.css";
import {
    FaBrain,
    FaRobot,
    FaPython,
    FaNetworkWired,
    FaCheck,
    FaQuoteLeft,
    FaChevronLeft,
    FaChevronRight
} from "react-icons/fa";

export default function AiMlTraining() {

    useEffect(() => {
        const textElement = document.getElementById("typing-text");
        const phrases = ["AI Engineer", "Data Scientist", "ML Specialist", "Deep Learning Expert"];
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
                        <div className="badge">AI & ML Future Tech</div>
                        <h1 className="hero-title">
                            Become an <br /> <span className="text-gradient" id="typing-text"></span>
                        </h1>
                        <p className="hero-subtitle">
                            Master the future with Artificial Intelligence, Machine Learning, Data Science, and Python.
                        </p>
                        <div className="hero-cta">
                            <a href="#curriculum" className="btn btn-primary glow-effect">Start Learning Today</a>
                            <a href="#curriculum" className="btn btn-secondary">View Curriculum</a>
                        </div>
                    </div>
                    <div className="hero-visual fade-in-left">
                        <img
                            src="https://cdni.iconscout.com/illustration/premium/thumb/artificial-intelligence-and-machine-learning-4433362-3682924.png"
                            alt="AI/ML Illustration"
                            style={{ width: "100%", filter: "drop-shadow(0 10px 20px rgba(56, 189, 248, 0.2))", animation: "float 6s ease-in-out infinite" }}
                        />
                    </div>
                </div>
            </header>

            <section className="features" id="features">
                <div className="container">
                    <div className="section-header text-center fade-in-up">
                        <h2 className="section-title">
                            Why Learn <span className="text-gradient">AI & ML?</span>
                        </h2>
                        <p className="section-subtitle">The most transformative technology of our time.</p>
                    </div>
                    <div className="features-grid">
                        <div className="feature-card glass-card fade-in-up delay-100">
                            <div className="feature-icon">
                                <FaBrain />
                            </div>
                            <h3>Artificial Intelligence</h3>
                            <p>Build intelligent systems that can reason, learn, and improve over time.</p>
                        </div>
                        <div className="feature-card glass-card fade-in-up delay-200">
                            <div className="feature-icon">
                                <FaPython />
                            </div>
                            <h3>Python for Data</h3>
                            <p>Master Python, the #1 language for Data Science and Machine Learning.</p>
                        </div>
                        <div className="feature-card glass-card fade-in-up delay-300">
                            <div className="feature-icon">
                                <FaRobot />
                            </div>
                            <h3>Machine Learning</h3>
                            <p>Train models to predict outcomes and classify data using Scikit-learn and TensorFlow.</p>
                        </div>
                        <div className="feature-card glass-card fade-in-up delay-400">
                            <div className="feature-icon">
                                <FaNetworkWired />
                            </div>
                            <h3>Deep Learning</h3>
                            <p>Dive into Neural Networks, Computer Vision, and NLP with PyTorch.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="curriculum" id="curriculum">
                <div className="container">
                    <div className="section-header text-center fade-in-up">
                        <h2 className="section-title">
                            AI/ML <span className="text-gradient">Curriculum</span>
                        </h2>
                        <p className="section-subtitle">Structured roadmap to Data Science mastery.</p>
                    </div>
                    <div className="curriculum-grid">
                        <div className="module-card glass-card fade-in-left">
                            <div className="module-number">01</div>
                            <div className="module-content">
                                <h3>Python Data Science</h3>
                                <p>NumPy, Pandas, Matplotlib, Seaborn</p>
                                <ul className="module-topics">
                                    <li><FaCheck /> Data Analysis</li>
                                    <li><FaCheck /> Data Visualization</li>
                                    <li><FaCheck /> Python Core</li>
                                </ul>
                            </div>
                        </div>
                        <div className="module-card glass-card fade-in-right">
                            <div className="module-number">02</div>
                            <div className="module-content">
                                <h3>Machine Learning</h3>
                                <p>Supervised & Unsupervised Learning Algorithms</p>
                                <ul className="module-topics">
                                    <li><FaCheck /> Regression & Classification</li>
                                    <li><FaCheck /> Clustering</li>
                                    <li><FaCheck /> Model Evaluation</li>
                                </ul>
                            </div>
                        </div>
                        <div className="module-card glass-card fade-in-left">
                            <div className="module-number">03</div>
                            <div className="module-content">
                                <h3>Deep Learning</h3>
                                <p>Neural Networks, CNNs, RNNs with TensorFlow</p>
                                <ul className="module-topics">
                                    <li><FaCheck /> Image Recognition</li>
                                    <li><FaCheck /> Tensor Operations</li>
                                    <li><FaCheck /> Keras API</li>
                                </ul>
                            </div>
                        </div>
                        <div className="module-card glass-card fade-in-right">
                            <div className="module-number">04</div>
                            <div className="module-content">
                                <h3>NLP & GenAI</h3>
                                <p>Text Processing, Transformers, LLMs</p>
                                <ul className="module-topics">
                                    <li><FaCheck /> Sentiment Analysis</li>
                                    <li><FaCheck /> Chatbot Development</li>
                                    <li><FaCheck /> OpenAI API Integration</li>
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
                        <p className="section-subtitle">Real results from real data scientists.</p>
                    </div>
                    <div className="testimonial-carousel-container glass-card fade-in-up">
                        <div className="testimonial-track" id="testimonial-track">
                            <div className="testimonial-slide active">
                                <div className="testimonial-content">
                                    <div className="quote-icon"><FaQuoteLeft /></div>
                                    <p className="testimonial-text">"Pivoting from software testing to Data Science seemed hard, but this course made it seamless. I'm now a Data Analyst."</p>
                                    <div className="testimonial-author">
                                        <img src="https://ui-avatars.com/api/?name=Vikram+S&background=random" alt="Vikram S" className="author-img" />
                                        <div className="author-info">
                                            <h4>Vikram Singh</h4>
                                            <p>Data Analyst @ FinTech</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-slide">
                                <div className="testimonial-content">
                                    <div className="quote-icon"><FaQuoteLeft /></div>
                                    <p className="testimonial-text">"The Deep Learning projects are unmatched. Building a face recognition system was the highlight for me."</p>
                                    <div className="testimonial-author">
                                        <img src="https://ui-avatars.com/api/?name=Deepa+J&background=random" alt="Deepa J" className="author-img" />
                                        <div className="author-info">
                                            <h4>Deepa Jain</h4>
                                            <p>ML Engineer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-slide">
                                <div className="testimonial-content">
                                    <div className="quote-icon"><FaQuoteLeft /></div>
                                    <p className="testimonial-text">"Clear explanations of complex math. If you want to understand what goes on under the hood of AI, this is it."</p>
                                    <div className="testimonial-author">
                                        <img src="https://ui-avatars.com/api/?name=Arjun+M&background=random" alt="Arjun M" className="author-img" />
                                        <div className="author-info">
                                            <h4>Arjun Mohan</h4>
                                            <p>AI Researcher</p>
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
