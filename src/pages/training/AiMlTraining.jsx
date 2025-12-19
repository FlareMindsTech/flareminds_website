import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/web.css";
import "../css/training.css";
import {
    FaBrain,
    FaRobot,
    FaPython,
    FaNetworkWired,
    FaCheck,
    FaQuoteLeft,
    FaChevronLeft,
    FaChevronRight,
    FaCheckCircle
} from "react-icons/fa";

export default function AiMlTraining() {
    // Typing Effect State locally to avoid DOM manipulation issues if possible, 
    // but continuing with the robust vanilla JS approach for the specific request
    useEffect(() => {
        const textElement = document.getElementById("typing-text");
        if (!textElement) return;

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

    // Intersection Observer for animations
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

    // Carousel Logic
    const [currentSlide, setCurrentSlide] = useState(0);
    const testimonials = [
        {
            text: "Pivoting from software testing to Data Science seemed hard, but this course made it seamless. I'm now a Data Analyst.",
            name: "Vikram Singh",
            role: "Data Analyst @ FinTech",
            img: "https://ui-avatars.com/api/?name=Vikram+S&background=random"
        },
        {
            text: "The Deep Learning projects are unmatched. Building a face recognition system was the highlight for me.",
            name: "Deepa Jain",
            role: "ML Engineer",
            img: "https://ui-avatars.com/api/?name=Deepa+J&background=random"
        },
        {
            text: "Clear explanations of complex math. If you want to understand what goes on under the hood of AI, this is it.",
            name: "Arjun Mohan",
            role: "AI Researcher",
            img: "https://ui-avatars.com/api/?name=Arjun+M&background=random"
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
                        <div className="badge fade-up-element">AI & ML Future Tech</div>
                        <h1 className="hero-title fade-up-element">
                            Become an <br />
                            <span className="text-gradient typing-cursor" id="typing-text">AI Engineer</span>
                        </h1>
                        <p className="hero-subtext fade-up-element">
                            Master the future with Artificial Intelligence, Machine Learning, Data Science, and Python. Build intelligent systems that change the world.
                        </p>
                        <div className="hero-buttons fade-up-element">
                            <a href="#curriculum" className="btn-primary">Start Learning</a>
                            <a href="#curriculum" className="btn-outline">View Curriculum</a>
                        </div>
                    </div>
                    <div className="hero-visual training-visual fade-up-element">
                        <img
                            src="https://cdni.iconscout.com/illustration/premium/thumb/artificial-intelligence-and-machine-learning-4433362-3682924.png"
                            alt="AI/ML Illustration"
                            style={{ width: "100%", filter: "drop-shadow(0 20px 40px rgba(56, 189, 248, 0.2))" }}
                        />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Why Learn <span className="text-gradient">AI & ML?</span></h2>
                        <p className="hero-subtext mx-auto" style={{ maxWidth: '600px' }}>
                            The most transformative technology of our time.
                        </p>
                    </div>

                    <div className="training-features-grid">
                        {[
                            { icon: FaBrain, title: "Artificial Intelligence", text: "Build systems that reason and learn." },
                            { icon: FaPython, title: "Python for Data", text: "Master the #1 language for Data Science." },
                            { icon: FaRobot, title: "Machine Learning", text: "Train models to predict outcomes." },
                            { icon: FaNetworkWired, title: "Deep Learning", text: "Dive into Neural Networks and NLP." }
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
                        <h2 className="section-title">AI/ML <span className="text-gradient">Curriculum</span></h2>
                        <p className="hero-subtext mx-auto">Structured roadmap to Data Science mastery.</p>
                    </div>

                    <div className="curriculum-grid">
                        {[
                            {
                                num: "01", title: "Python Data Science", desc: "NumPy, Pandas, Matplotlib, Seaborn",
                                topics: ["Data Analysis", "Data Visualization", "Python Core"]
                            },
                            {
                                num: "02", title: "Machine Learning", desc: "Supervised & Unsupervised Algorithms",
                                topics: ["Regression & Classification", "Clustering", "Model Evaluation"]
                            },
                            {
                                num: "03", title: "Deep Learning", desc: "Neural Networks, CNNs with TensorFlow",
                                topics: ["Image Recognition", "Tensor Operations", "Keras API"]
                            },
                            {
                                num: "04", title: "NLP & GenAI", desc: "Transformers, LLMs, OpenAI API",
                                topics: ["Sentiment Analysis", "Chatbot Development", "OpenAI Integration"]
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
                        <p className="hero-subtext mx-auto">Real results from real graduates.</p>
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
                        <h2>Ready to master the future?</h2>
                        <p>Join the next batch of AI & ML innovators.</p>
                        <Link to="/contact" className="btn-primary" style={{ background: 'white', color: '#0ea5e9' }}>
                            Enroll Now
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

