import { Link } from "react-router-dom";
import "../css/web.css";
import "../css/training.css";
import {
    FaBullhorn,
    FaSearch,
    FaChartLine,
    FaHashtag,
    FaCheckCircle
} from "react-icons/fa";
import { useTypingEffect } from "../../hooks/useTypingEffect";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import TestimonialCarousel from "../../components/TestimonialCarousel";
import SEO from "../../components/SEO";
import { getCourseSchema, getFAQSchema } from "../../utils/structuredData";

export default function DigitalMarketingTraining() {
    useTypingEffect(
        ["Digital Marketer", "SEO Expert", "Social Media Manager", "Growth Hacker"],
        "typing-text"
    );

    useScrollAnimation('.fade-up-element', 'show');

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

    const courseData = {
        name: "Practical Digital Marketing Masterclass",
        description: "Comprehensive digital marketing training in Coimbatore. Learn SEO, Social Media Marketing, Google Ads, and Data Analytics with live projects."
    };

    const faqItems = [
        { q: "What will I learn in the digital marketing course?", a: "You will master SEO, Social Media Marketing (SMM), Google Ads (PPC), Content Marketing, and Google Analytics 4." },
        { q: "Do you offer certifications?", a: "Yes, you will receive a professional certification from FlareMinds and guidance for Google and HubSpot certifications." },
        { q: "Are the classes online or offline?", a: "We offer both online and offline classes in Coimbatore with hands-on practical training." }
    ];

    const combinedSchema = {
        "@context": "https://schema.org",
        "@graph": [
            getCourseSchema(courseData),
            getFAQSchema(faqItems)
        ]
    };

    return (
        <div className="training-page">
            <SEO
                title="Best Digital Marketing Training in Coimbatore | SEO & Ads Course - FlareMinds"
                description="Master Digital Marketing with our comprehensive training. Learn SEO, SMM, and Google Ads from experts. Join the best digital marketing course in Coimbatore today."
                keywords="digital marketing training Coimbatore, SEO course Coimbatore, social media marketing training, Google Ads course, digital marketing agency training"
                schema={combinedSchema}
            />
            <section className="hero-section training-hero">
                <div className="container hero-container">
                    <div className="hero-content training-hero-content">
                        <div className="badge fade-up-element">Digital Marketing Masterclass</div>
                        <h1 className="hero-title fade-up-element">
                            How to Become a <br /> <span className="text-gradient typing-cursor" id="typing-text">Marketer</span>
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

            <section className="section-padding bg-light">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Student <span className="text-gradient">Success Stories</span></h2>
                        <p className="hero-subtext mx-auto">From learners to marketing leaders.</p>
                    </div>

                    <TestimonialCarousel testimonials={testimonials} />
                </div>
            </section>

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
