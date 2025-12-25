import { Link } from "react-router-dom";
import "../css/web.css";
import "../css/training.css";
import {
    FaBrain,
    FaRobot,
    FaPython,
    FaNetworkWired,
    FaCheckCircle
} from "react-icons/fa";
import { useTypingEffect } from "../../hooks/useTypingEffect";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import TestimonialCarousel from "../../components/TestimonialCarousel";

export default function AiMlTraining() {
    useTypingEffect(
        ["AI Engineer", "Data Scientist", "ML Specialist", "Deep Learning Expert"],
        "typing-text"
    );

    useScrollAnimation('.fade-up-element', 'show');

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

                    <TestimonialCarousel testimonials={testimonials} />
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

