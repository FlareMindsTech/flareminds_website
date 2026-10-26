import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SocialButton from "../components/common/SocialButton";
import SEO from "../components/common/SEO";
import HomeHeroAnimation from "../components/common/HomeHeroAnimation";
import "../styles/pages/home.css";
import "../components/ui/Services3D.css";
import dash from "../assets/images/projects/home_dash.webp";
import ecom from "../assets/images/projects/home_e-com.webp";
import mobile from "../assets/images/projects/home_mobile.webp";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { getOrganizationSchema, getWebSiteSchema } from "../utils/structuredData";
import { FaRegLightbulb, FaBezierCurve, FaChartLine, FaShieldAlt, FaRocket, FaStar, FaArrowRight, FaBullseye, FaUsers, FaBriefcase, FaShoppingBag, FaHeartbeat, FaHome, FaTh, FaMobileAlt } from "react-icons/fa";

const TiltCard = ({ service }) => {
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);
  const cardRef = React.useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Tilt opposite to touch direction
    const rotateX = -((y - centerY) / centerY) * 15; // 15 deg max tilt
    const rotateY = ((x - centerX) / centerX) * 15;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const transformStyle = isHovered
    ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
    : 'rotateX(0deg) rotateY(0deg)';

  return (
    <div className="parent" style={{ perspective: '1000px' }}>
      <div
        className="card"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          background: service.colors.gradient,
          transform: transformStyle,
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-in-out',
          boxShadow: isHovered
            ? `${-tilt.y * 2}px ${tilt.x * 2 + 20}px 30px rgba(14, 165, 233, 0.25)`
            : '0px 25px 25px -5px rgba(14, 165, 233, 0.25)'
        }}
      >
        <div className="glass"></div>
        <div className="content">
          <span className="title">{service.title}</span>
          <span className="text">{service.desc}</span>
          <ul className="features">
            {service.features.map((f, idx) => (
              <li key={idx}>{f}</li>
            ))}
          </ul>
        </div>
        <div className="bottom">
          <div className="social-buttons-container">
            <button type="button" className="social-button" aria-label="Service feature icon 1">
              <svg className="svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
            </button>
            <button type="button" className="social-button" aria-label="Service feature icon 2">
              <svg className="svg" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2z" /></svg>
            </button>
            <button type="button" className="social-button" aria-label="Service feature icon 3">
              <svg className="svg" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2" /></svg>
            </button>
          </div>
          <Link to="/services" className="view-more">
            <span className="view-more-text">Explore</span>
            <div className="view-more-icon">
              <svg className="svg" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  useEffect(() => {
  }, []);

  useScrollAnimation('.premium-reveal', 'show');
  useScrollAnimation('.slide-from-left', 'show');
  useScrollAnimation('.slide-from-right', 'show');

  const marqueeText =
    "Web Development • Mobile App Development • Digital Marketing • SEO & Google Ads • Custom Software • Social Media Marketing • UI/UX Design • Business Automation";

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [getOrganizationSchema(), getWebSiteSchema()],
  };

  return (
    <div className="home-page">
      <SEO
        title="FlareMinds - Web & App Development & Digital Marketing Agency"
        description="FlareMinds is a full-service technology and digital marketing company offering web development, mobile app development, SEO, social media marketing, and custom software. Transform your digital presence with our expert team."
        keywords="web development, app development, digital marketing agency, SEO services, social media marketing, Google Ads, custom software, digital agency Coimbatore, MERN stack development, ecommerce solutions, lead generation"
        schema={combinedSchema}
      />
      <section className="hero-section">
        <HomeHeroAnimation />
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="hero-title-line">
                Technology That Builds.
              </span>
              <span className="hero-title-line gradient-text">
                Marketing That Scales.
              </span>
            </h1>
            <p className="hero-subtext">
              We build high-performance websites, mobile apps, and custom software, backed by strategic digital marketing that helps businesses reach further and grow faster.
            </p>
            <div className="hero-buttons">
              <Link to="/services" className="btn-primary es-btn" aria-label="Explore Services">
                <span className="es-text">Explore Services</span>
                <span className="es-svg">
                  <svg viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 15 H46 M34 5 L46 15 L34 25" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
              <Link to="/our-works" className="btn-outline wow-btn" aria-label="View Our Work">
                <span className="wow-text">View Our Work</span>
              </Link>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "1.6rem",
                position: "relative",
                zIndex: 30,
              }}
            >
              <SocialButton />
            </div>
          </div>
        </div>
      </section>
      <section className="marquee">
        <div className="marquee-inner">
          <span className="marquee-item">
            <span className="chevrons left">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="url(#chevGradLeft)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <defs>
                  <linearGradient id="chevGradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4f46e5" />
                    <stop offset="100%" stopColor="#0ea5e9" />
                  </linearGradient>
                </defs>
                <polyline points="11 17 6 12 11 7"></polyline>
                <polyline points="18 17 13 12 18 7"></polyline>
              </svg>
            </span>
            <span className="text">{marqueeText}</span>
            <span className="chevrons right">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="url(#chevGradRight)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <defs>
                  <linearGradient id="chevGradRight" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0ea5e9" />
                    <stop offset="100%" stopColor="#4f46e5" />
                  </linearGradient>
                </defs>
                <polyline points="13 17 18 12 13 7"></polyline>
                <polyline points="6 17 11 12 6 7"></polyline>
              </svg>
            </span>
          </span>
          <span className="marquee-item">
            <span className="chevrons left">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="url(#chevGradLeft2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <defs>
                  <linearGradient id="chevGradLeft2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4f46e5" />
                    <stop offset="100%" stopColor="#0ea5e9" />
                  </linearGradient>
                </defs>
                <polyline points="11 17 6 12 11 7"></polyline>
                <polyline points="18 17 13 12 18 7"></polyline>
              </svg>
            </span>
            <span className="text">{marqueeText}</span>
            <span className="chevrons right">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="url(#chevGradRight2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <defs>
                  <linearGradient id="chevGradRight2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0ea5e9" />
                    <stop offset="100%" stopColor="#4f46e5" />
                  </linearGradient>
                </defs>
                <polyline points="13 17 18 12 13 7"></polyline>
                <polyline points="6 17 11 12 6 7"></polyline>
              </svg>
            </span>
          </span>
        </div>
      </section>
      <section className="features-section">
        <h2 className="section-title">Why Choose <span className="brand-gradient">FlareMinds</span>?</h2>
        <div className="features-grid new-features">
          {[
            {
              title: "Web & App Development",
              text: "Scalable websites, high-performance mobile apps, and robust custom software built for speed.",
              icon: <FaMobileAlt />,
              theme: "blue",
            },
            {
              title: "Data-Driven Marketing",
              text: "Targeted SEO, PPC ads, and social media campaigns that scale reach and deliver measurable ROI.",
              icon: <FaChartLine />,
              theme: "purple",
            },
            {
              title: "UI/UX & Creative Strategy",
              text: "Modern design systems, memorable branding, and seamless digital experiences that convert.",
              icon: <FaBezierCurve />,
              theme: "teal",
            },
          ].map((f, i) => (
            <div key={i} className={`new-feature-card theme-${f.theme} premium-reveal`}>
              <div className="feature-icon-wrapper">
                {f.icon}
              </div>
              <div className="dots-pattern"></div>
              <h3>{f.title}</h3>
              <div className="title-underline"></div>
              <p>{f.text}</p>
              <Link to="/services" className="learn-more" aria-label={`Learn more about ${f.title}`}>
                Learn more <FaArrowRight />
              </Link>
              <div className="wave-bg"></div>
            </div>
          ))}
        </div>
        <div className="trust-banner premium-reveal">
          <div className="trust-item">
            <div className="trust-icon blue"><FaShieldAlt /></div>
            <span>Trusted by 100+<br />Businesses</span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <div className="trust-icon purple"><FaRocket /></div>
            <span>Delivering Results<br />That Matter</span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <div className="trust-icon teal"><FaStar /></div>
            <span>Innovation<br />in Everything</span>
          </div>
        </div>
      </section>
      <section className="about-summary section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 slide-from-left pe-lg-5">
              <h2 className="section-title">
                Who We <span className="brand-gradient">Are</span>
              </h2>
              <p className="section-text text-muted mb-4">
                FlareMinds is a full-service technology and digital marketing company dedicated to helping
                businesses grow. We combine custom web and mobile app development, data-driven digital
                marketing, and robust software engineering to build solutions that stand out and scale.
                From startups to enterprises, we deliver results that matter.
              </p>
              <Link to="/about" className="btn-link brand-gradient fw-bold mb-5 d-inline-flex align-items-center gap-2 text-decoration-none">
                Read Our Story
                <span className="bg-info text-white d-flex align-items-center justify-content-center rounded" style={{ width: '32px', height: '32px', background: '#0ea5e9' }}>
                  <FaArrowRight size={14} />
                </span>
              </Link>
            </div>
            <div className="col-md-6 slide-from-right d-flex justify-content-center position-relative mt-5 mt-md-0 experience-hover-group">
              <div className="experience-wrapper">
                <div className="experience-outer-ring">
                  <span className="ring-dot dot-1"></span>
                  <span className="ring-dot dot-2"></span>
                  <span className="ring-dot dot-3"></span>
                  <span className="ring-dot dot-4"></span>
                </div>
                <div className="experience-circle-outer shadow-lg">
                  <div className="experience-circle-inner shadow">
                    <div className="exp-icon shadow-sm"><FaBriefcase /></div>
                    <div className="exp-years-number mb-0 mt-2 text-2xl font-bold">3+</div>
                    <div className="exp-years-text fw-bold mb-1">Years</div>
                    <p className="exp-text mb-1">Experience</p>
                    <div className="exp-underline">
                      <span className="dot"></span>
                    </div>
                    <svg className="exp-arc" viewBox="0 0 100 100">
                      <circle
                        cx="50" cy="50" r="48"
                        fill="none"
                        stroke="url(#arcGradient)"
                        strokeWidth="4"
                        strokeDasharray="150 200"
                        strokeDashoffset="-25"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="arcGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#2563eb" />
                          <stop offset="100%" stopColor="#c084fc" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services-preview" style={{ overflow: "hidden" }}>
        <h2 className="section-title">Our <span className="brand-gradient">Services</span></h2>
        <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px', padding: '40px 0', maxWidth: '1200px', margin: '0 auto' }}>
          {[
            {
              title: "Web & Mobile App Development",
              desc: "Premium solutions tailored to your business needs. We build fast, responsive websites and Android/iOS mobile apps.",
              features: ["Custom Web Development", "Mobile Applications (iOS/Android)", "Full-Stack Architecture"],
              colors: {
                gradient: "linear-gradient(135deg, #2b308b 0%, #0ea5e9 100%)",
                circleBg: "rgba(14, 165, 233, 0.2)",
                titleColor: "#1e293b",
                textColor: "#334155"
              }
            },
            {
              title: "Digital Marketing & SEO",
              desc: "Data-driven marketing strategies to increase search rankings, capture qualified leads, and drive organic growth.",
              features: ["Search Engine Optimization (SEO)", "Google Ads & Social Media", "Lead Generation & Analytics"],
              colors: {
                gradient: "linear-gradient(135deg, #2b308b 0%, #0ea5e9 100%)",
                circleBg: "rgba(14, 165, 233, 0.2)",
                titleColor: "#1e293b",
                textColor: "#334155"
              }
            },
            {
              title: "Branding & Creative Design",
              desc: "Establish a strong, memorable brand presence that resonates with your audience and builds lasting trust.",
              features: ["Logo & Visual Identity", "UI/UX Product Design", "Creative Media & Content"],
              colors: {
                gradient: "linear-gradient(135deg, #2b308b 0%, #0ea5e9 100%)",
                circleBg: "rgba(14, 165, 233, 0.2)",
                titleColor: "#1e293b",
                textColor: "#334155"
              }
            },
            {
              title: "Custom Software & Automation",
              desc: "Streamline your workflows with custom software, cloud solutions, and business automation platforms.",
              features: ["Business Applications", "Workflow Automation", "CRM & ERP Integrations"],
              colors: {
                gradient: "linear-gradient(135deg, #2b308b 0%, #0ea5e9 100%)",
                circleBg: "rgba(14, 165, 233, 0.2)",
                titleColor: "#1e293b",
                textColor: "#334155"
              }
            }
          ].map((s, i) => (
            <TiltCard key={i} service={s} />
          ))}
        </div>
      </section>

      <section className="featured-work-section">
        <div className="container">
          <div className="fw-header">
            <span className="fw-label">SELECTED WORK</span>
            <h2 className="fw-title">Work That <span>Speaks</span></h2>
            <p className="fw-subtitle">
              Explore some of the digital products, platforms, and experiences we’ve built to turn ideas into meaningful results.
            </p>
          </div>

          <div className="fw-grid">
            {[
              {
                id: "e-commerce",
                image: ecom,
                icon: <FaShoppingBag />,
                catColor: "#a855f7",
                category: "E-Commerce",
                title: "Fashion Commerce Platform",
                description: "A modern e-commerce experience designed to simplify shopping and help brands grow online.",
                route: "/our-works"
              },
              {
                id: "business-solutions",
                image: dash,
                icon: <FaBriefcase />,
                catColor: "#0ea5e9",
                category: "Business Solutions",
                title: "HRMS Admin Dashboard",
                description: "A streamlined workforce management platform built to simplify everyday HR operations.",
                route: "/our-works"
              },
              {
                id: "mobile-application",
                image: mobile,
                icon: <FaMobileAlt />,
                catColor: "#14b8a6",
                category: "Mobile Application",
                title: "Mobile Experience",
                description: "A scalable mobile solution designed for seamless digital experiences across platforms.",
                route: "/our-works"
              }
            ].map((card) => (
              <Link to={card.route} key={card.id} className="fw-card" style={{ textDecoration: 'none' }}>
                <div className="fw-card-img-wrapper">
                  <img src={card.image} alt={card.title} className="fw-card-img" loading="lazy" decoding="async" width="800" height="500" />
                  <span className="fw-card-arrow-btn" aria-hidden="true"><FaArrowRight /></span>
                </div>
                <div className="fw-card-content">
                  <div className="fw-category" style={{ color: card.catColor }}>
                    <div className="fw-cat-icon" style={{ backgroundColor: card.catColor }}>
                      {card.icon}
                    </div>
                    <span style={{ textTransform: "none", fontWeight: 700 }}>{card.category}</span>
                  </div>
                  <h3 className="fw-card-title">{card.title}</h3>
                  <p className="fw-card-desc">{card.description}</p>
                  <span className="fw-card-link" style={{ color: card.catColor }}>
                    View Project <FaArrowRight />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="fw-footer">
            <Link to="/our-works" className="fw-view-all-btn">
              <FaTh className="fw-btn-icon" /> View All Projects
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
