import React from "react";
import { Link } from "react-router-dom";
import { FaCode, FaMobileAlt, FaRocket, FaCheckCircle, FaCogs, FaServer } from "react-icons/fa";
import SEO from "../components/common/SEO";
import { getServiceSchema, getFAQSchema } from "../utils/structuredData";
import HeroBackground from "../components/common/HeroBackground";
import "../styles/pages/services.css";

export default function WebDevelopment() {
    const serviceData = {
        title: "Website Development Services",
        description: "Premium website development in Coimbatore. We build fast, responsive, and SEO-optimized websites using React and Next.js."
    };

    const faqItems = [
        { q: "How long does it take to build a website?", a: "Typically 2-4 weeks depending on the complexity and number of pages." },
        { q: "Do you provide hosting and domain?", a: "We can assist you in purchasing and setting up the best hosting and domain for your needs." },
        { q: "Is the website SEO friendly?", a: "Yes, all our websites are built with SEO best practices including meta tags, sitemaps, and fast loading speeds." }
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
                title="Website Development Services in Coimbatore | Custom Web Design - FlareMinds"
                description="Elevate your business with premium website development services in Coimbatore. Our React and Next.js experts build high-performance, SEO-friendly websites."
                keywords="web development Coimbatore, website design company, custom web development, React JS development, ecommerce website building"
                schema={combinedSchema}
            />

            <section className="service-hero">
                <HeroBackground />
                <div className="container" style={{ position: "relative", zIndex: 3 }}>
                    <h1 className="hero-title">
                        Premium <span className="text-gradient">Website Development</span> Services
                    </h1>
                    <p className="hero-subtitle">
                        We build lightning-fast, responsive websites optimized for performance, conversions, and branding.
                        Your website is your 24/7 salesperson — we help position your business as a premium, trustworthy brand.
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
                            <h2 className="section-title">Why Choose Our Web Solutions?</h2>
                            <p>
                                Our websites load under 1 second and are crafted with SEO-friendly architecture for Google ranking.
                                Perfect for SMEs, startups, creators, ecommerce brands, hospitals, real estate, and corporates.
                                A professional website increases conversions by 60-80% because customers trust brands with strong digital presence.
                            </p>
                            <ul className="feature-list">
                                <li><FaCheckCircle className="icon-check" /> Super-fast page loading (Core Web Vitals)</li>
                                <li><FaCheckCircle className="icon-check" /> Fully responsive UI for all devices</li>
                                <li><FaCheckCircle className="icon-check" /> SEO optimized architecture</li>
                                <li><FaCheckCircle className="icon-check" /> Modern animations (GSAP, Framer Motion)</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <div className="service-visual glass-card">
                                <FaCode className="visual-icon" />
                                <h3>Modern Architecture</h3>
                                <p>Built with the latest tech stack for scalability.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="tech-stack section-padding">
                <div className="container text-center">
                    <h2 className="section-title">Technologies We Use</h2>
                    <div className="tech-icons">
                        <span className="tech-tag">React.js</span>
                        <span className="tech-tag">Next.js</span>
                        <span className="tech-tag">Tailwind CSS</span>
                        <span className="tech-tag">Node.js</span>
                        <span className="tech-tag">MongoDB</span>
                        <span className="tech-tag">AWS</span>
                    </div>
                </div>
            </section>

            <section className="service-process section-padding bg-light">
                <div className="container">
                    <h2 className="section-title text-center">Our Development Process</h2>
                    <div className="process-grid">
                        {[
                            { step: "01", title: "Discovery", desc: "Requirement & Competitor Research" },
                            { step: "02", title: "Design", desc: "Wireframes & Figma UI (High-Fidelity)" },
                            { step: "03", title: "Development", desc: "Clean Code & API Integration" },
                            { step: "04", title: "Testing", desc: "Performance & SEO Checks" },
                            { step: "05", title: "Launch", desc: "Deployment & Support" }
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
                            <h4>How long does it take to build a website?</h4>
                            <p>Typically 2-4 weeks depending on the complexity and number of pages.</p>
                        </div>
                        <div className="faq-item glass-card">
                            <h4>Do you provide hosting and domain?</h4>
                            <p>We can assist you in purchasing and setting up the best hosting and domain for your needs.</p>
                        </div>
                        <div className="faq-item glass-card">
                            <h4>Is the website SEO friendly?</h4>
                            <p>Yes, all our websites are built with SEO best practices including meta tags, sitemaps, and fast loading speeds.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-cta text-center section-padding">
                <div className="container">
                    <h2>Ready to Build Your Digital Presence?</h2>
                    <Link to="/contact" className="btn-primary glow-effect">Start Your Project</Link>
                </div>
            </section>
        </div>
    );
}
