import React from "react";
import { Link } from "react-router-dom";
import { FaMobileAlt, FaApple, FaAndroid, FaCheckCircle, FaRocket } from "react-icons/fa";
import SEO from "../components/common/SEO";
import { getServiceSchema, getFAQSchema } from "../utils/structuredData";
import "../styles/pages/services.css";

export default function AppDevelopment() {
    const serviceData = {
        title: "Mobile App Development Services",
        description: "Expert mobile app development in Coimbatore. We build high-performance Android & iOS apps using React Native and Flutter."
    };

    const faqItems = [
        { q: "Do you build for both iOS and Android?", a: "Yes, we use cross-platform technologies like React Native and Flutter to deploy to both platforms efficiently." },
        { q: "How do you handle app maintenance?", a: "We offer maintenance packages to handle updates, bug fixes, and feature additions post-launch." },
        { q: "Can you integrate payment gateways?", a: "Absolutely. We integrate Razorpay, Stripe, PayPal, and other major payment gateways securely." }
    ];

    const combinedSchema = {
        "@context": "https://schema.org",
        "@graph": [
            getServiceSchema(serviceData),
            getFAQSchema(faqItems)
        ]
    };

    return (
        <div className="service-page-container">
            <SEO
                title="Mobile App Development Services in Coimbatore | Android & iOS - FlareMinds"
                description="Build powerful mobile applications with Coimbatore's leading app development agency. Specializing in React Native and Flutter for high-performance apps."
                keywords="app development Coimbatore, mobile app design, React Native developers, Flutter app development, iOS app development India"
                schema={combinedSchema}
            />
            <section className="service-hero">
                <div className="container">
                    <h1 className="hero-title">
                        Premium <span className="text-gradient">Mobile App Development</span> Services
                    </h1>
                    <p className="hero-subtitle">
                        We build powerful, high-performance Android & iOS apps using React Native and Flutter.
                        Engage your customers with a seamless mobile experience.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/contact" className="btn-primary">Get a Quote</Link>
                        <Link to="/projects" className="btn-outline">View Work</Link>
                    </div>
                </div>
            </section>

            <section className="service-overview section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="section-title">Mobile Solutions for Growth</h2>
                            <p>
                                Our apps are designed with beautiful UI, fast loading time, smooth animations, secure authentication and seamless backend integration.
                                Perfect for startups, businesses, ecommerce brands, educational apps, booking apps, logistics apps, and business automation.
                            </p>
                            <ul className="feature-list">
                                <li><FaCheckCircle className="icon-check" /> Pixel-perfect UI with modern layouts</li>
                                <li><FaCheckCircle className="icon-check" /> Offline mode with local database sync</li>
                                <li><FaCheckCircle className="icon-check" /> Push notifications with deep linking</li>
                                <li><FaCheckCircle className="icon-check" /> Secure login with Biometrics</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <div className="service-visual glass-card">
                                <FaMobileAlt className="visual-icon" />
                                <h3>Cross-Platform</h3>
                                <p>iOS & Android from a single codebase.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="tech-stack section-padding">
                <div className="container text-center">
                    <h2 className="section-title">Technologies We Use</h2>
                    <div className="tech-icons">
                        <span className="tech-tag">React Native</span>
                        <span className="tech-tag">Flutter</span>
                        <span className="tech-tag">Firebase</span>
                        <span className="tech-tag">Node.js</span>
                        <span className="tech-tag">PostgreSQL</span>
                    </div>
                </div>
            </section>

            <section className="service-process section-padding bg-light">
                <div className="container">
                    <h2 className="section-title text-center">App Development Workflow</h2>
                    <div className="process-grid">
                        {[
                            { step: "01", title: "Prototype", desc: "Requirement Analysis & Wireframing" },
                            { step: "02", title: "UI/UX", desc: "Figma Design & User Flow" },
                            { step: "03", title: "Code", desc: "React Native / Flutter Development" },
                            { step: "04", title: "Integrate", desc: "API, Database & Auth Setup" },
                            { step: "05", title: "Deploy", desc: "App Store & Play Store Publishing" }
                        ].map((item, index) => (
                            <div key={index} className="process-card glass-card">
                                <div className="step-number">{item.step}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="service-faq section-padding">
                <div className="container">
                    <h2 className="section-title text-center">Frequently Asked Questions</h2>
                    <div className="faq-grid">
                        <div className="faq-item glass-card">
                            <h4>Do you build for both iOS and Android?</h4>
                            <p>Yes, we use cross-platform technologies like React Native and Flutter to deploy to both platforms efficiently.</p>
                        </div>
                        <div className="faq-item glass-card">
                            <h4>How do you handle app maintenance?</h4>
                            <p>We offer maintenance packages to handle updates, bug fixes, and feature additions post-launch.</p>
                        </div>
                        <div className="faq-item glass-card">
                            <h4>Can you integrate payment gateways?</h4>
                            <p>Absolutely. We integrate Razorpay, Stripe, PayPal, and other major payment gateways securely.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-cta text-center section-padding">
                <div className="container">
                    <h2>Turn Your Idea Into an App</h2>
                    <Link to="/contact" className="btn-primary glow-effect">Let's Discuss</Link>
                </div>
            </section>
        </div>
    );
}
