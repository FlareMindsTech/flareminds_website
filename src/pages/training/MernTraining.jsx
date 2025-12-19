import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/web.css";
import "../css/training.css";
import {
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaServer,
    FaCheck,
    FaQuoteLeft,
    FaChevronLeft,
    FaChevronRight,
    FaCheckCircle
} from "react-icons/fa";

export default function MernTraining() {
    useEffect(() => {
        const textElement = document.getElementById("typing-text");
        if (!textElement) return;

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
            text: "I couldn't believe I built a full e-commerce site in just a few weeks. The MERN course is intense but worth it.",
            name: "Rohan Mehta",
            role: "MERN Developer @ TechFlow",
            img: "https://ui-avatars.com/api/?name=Rohan+M&background=random"
        },
        {
            text: "The way they teach Node.js and MongoDB makes backend development feel easy. Great instructors!",
            name: "Priya Sharma",
            role: "Full Stack Engineer",
            img: "https://ui-avatars.com/api/?name=Priya+S&background=random"
        },
        {
            text: "From API integration to authentication, every topic is covered in depth with real-world examples.",
            name: "Karthik Raj",
            role: "Freelance Developer",
            img: "https://ui-avatars.com/api/?name=Karthik+R&background=random"
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
                        <div className="badge fade-up-element">New MERN Batch Starting Soon</div>
                        <h1 className="hero-title fade-up-element">
                            Become a <br /> <span className="text-gradient typing-cursor" id="typing-text">Full Stack Dev</span>
                        </h1>
                        <p className="hero-subtext fade-up-element">
                            Master MongoDB, Express, React, and Node.js. Build full-stack applications from scratch to deployment.
                        </p>
                        <div className="hero-buttons fade-up-element">
                            <a href="#curriculum" className="btn-primary">Start Learning</a>
                            <a href="#curriculum" className="btn-outline">View Curriculum</a>
                        </div>
                    </div>
                    <div className="hero-visual training-visual fade-up-element">
                        <img
                            src="https://cdni.iconscout.com/illustration/premium/thumb/mern-stack-4433361-3682923.png"
                            alt="MERN Stack Illustration"
                            style={{ width: "100%", filter: "drop-shadow(0 20px 40px rgba(56, 189, 248, 0.2))" }}
                        />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Why Learn <span className="text-gradient">MERN Stack?</span></h2>
                        <p className="hero-subtext mx-auto" style={{ maxWidth: '600px' }}>
                            The most in-demand full-stack technology in 2024.
                        </p>
                    </div>
                    <div className="training-features-grid">
                        {[
                            { icon: FaReact, title: "React.js Frontend", text: "Build dynamic, interactive user interfaces." },
                            { icon: FaNodeJs, title: "Node.js Backend", text: "Create fast, scalable server-side apps." },
                            { icon: FaDatabase, title: "MongoDB Database", text: "Work with flexible, NoSQL databases." },
                            { icon: FaServer, title: "Full Stack Integration", text: "Connect frontend and backend seamlessly." }
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
                        <h2 className="section-title">MERN Stack <span className="text-gradient">Curriculum</span></h2>
                        <p className="hero-subtext mx-auto">From zero code to full-stack hero.</p>
                    </div>
                    <div className="curriculum-grid">
                        {[
                            {
                                num: "01", title: "Frontend with React", desc: "Components, Hooks, Routing",
                                topics: ["React Hooks", "Context API / Redux", "Tailwind CSS"]
                            },
                            {
                                num: "02", title: "Backend with Node", desc: "Server setup, API endpoints",
                                topics: ["RESTful APIs", "Express Router", "Error Handling"]
                            },
                            {
                                num: "03", title: "Database with MongoDB", desc: "Schema design, CRUD operations",
                                topics: ["Mongoose ODM", "Data Validation", "Atlas Cloud Setup"]
                            },
                            {
                                num: "04", title: "Deployment", desc: "Auth, Security, Pipelines",
                                topics: ["JWT Authentication", "Payment Gateways", "Deploy to Vercel"]
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
                        <p className="hero-subtext mx-auto">Hear from our certified MERN Stack developers.</p>
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
                        <h2>Ready to become a Full Stack Developer?</h2>
                        <p>Join the next batch of MERN experts.</p>
                        <Link to="/contact" className="btn-primary" style={{ background: 'white', color: '#0ea5e9' }}>
                            Enroll Now
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

