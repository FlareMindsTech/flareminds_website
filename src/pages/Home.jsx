import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { projectSections } from "../data/projectsData";
import SocialButton from "../components/common/SocialButton";
import SEO from "../components/common/SEO";
import "../components/ui/Services3D.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { getOrganizationSchema, getWebSiteSchema } from "../utils/structuredData";
import heroVideo from "../assets/videos/homevideo.mp4";
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
            ? `${-tilt.y * 2}px ${tilt.x * 2 + 20}px 30px rgba(5, 71, 17, 0.2)`
            : '0px 25px 25px -5px rgba(5, 71, 17, 0.2)'
        }}
      >
        <div className="glass"></div>
        <div className="content">
          <span className="title" style={{ color: service.colors.titleColor }}>{service.title}</span>
          <span className="text" style={{ color: service.colors.textColor }}>{service.desc}</span>
          <ul className="features">
            {service.features.map((f, idx) => (
              <li key={idx} style={{ color: service.colors.textColor }}>{f}</li>
            ))}
          </ul>
        </div>
        <div className="bottom">
          <div className="social-buttons-container">
            <button type="button" className="social-button" aria-label="Service feature icon 1">
              <svg className="svg" viewBox="0 0 24 24" style={{ fill: service.colors.titleColor }}><circle cx="12" cy="12" r="10" /></svg>
            </button>
            <button type="button" className="social-button" aria-label="Service feature icon 2">
              <svg className="svg" viewBox="0 0 24 24" style={{ fill: service.colors.titleColor }}><path d="M12 2L2 22h20L12 2z" /></svg>
            </button>
            <button type="button" className="social-button" aria-label="Service feature icon 3">
              <svg className="svg" viewBox="0 0 24 24" style={{ fill: service.colors.titleColor }}><rect width="18" height="18" x="3" y="3" rx="2" /></svg>
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
    "Website Design • SEO • Google Ads • SMM • Branding • Lead Gen • UI/UX • Strategy";

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [getOrganizationSchema(), getWebSiteSchema()],
  };

  return (
    <div className="home-page">
      <SEO
        title="FlareMinds - Digital Marketing & Technology Services | Web Development, SEO, App Development"
        description="FlareMinds is a leading digital agency in Coimbatore offering web development, app development, SEO, social media marketing, Google Ads, and business automation. Transform your digital presence with our expert team."
        keywords="digital marketing agency, web development, app development, SEO services, social media marketing, Google Ads, business automation, digital agency Coimbatore, MERN stack development, ecommerce solutions, lead generation"
        schema={combinedSchema}
      />
      <section className="hero-section">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="hero-video"
        >
          <source src={heroVideo} type="video/mp4" />
          <track kind="captions" src="data:text/vtt,WEBVTT" srcLang="en" label="English captions" default />
        </video>
        <div className="bg-grid-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Marketing That Speaks Today's Digital Language
            </h1>
            <p className="hero-subtext">
              We craft digital experiences that connect, convert, and scale. Let
              your brand fly higher with Branding Wings.
            </p>
            <div className="hero-buttons">
              <Link to="/services" className="btn-primary es-btn">
                <span className="es-text">Explore Services</span>
                <span className="es-svg">
                  <svg viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 15 H46 M34 5 L46 15 L34 25" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
              <Link to="/contact" className="btn-outline git-btn" data-text="GET IN TOUCH">
                <i>G</i><i>E</i><i>T</i><i>&nbsp;</i><i>I</i><i>N</i><i>&nbsp;</i><i>T</i><i>O</i><i>U</i><i>C</i><i>H</i>
              </Link>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "2rem",
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
              title: "Creative Strategy",
              text: "Business-focused digital planning that aligns goals with impactful solutions.",
              icon: <FaRegLightbulb />,
              theme: "blue",
            },
            {
              title: "High-End Designs",
              text: "Modern UI/UX that looks stunning and converts visitors into customers.",
              icon: <FaBezierCurve />,
              theme: "purple",
            },
            {
              title: "Digital Growth",
              text: "Data-driven strategies that scale your brand and deliver measurable growth.",
              icon: <FaChartLine />,
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
                FlareMinds is a full-service digital agency dedicated to helping
                businesses grow. We combine creative design, data-driven
                marketing, and robust technology to build brands that stand out.
                From startups to enterprises, we deliver solutions that drive
                real results.
              </p>
              <Link to="/about" className="btn-link brand-gradient fw-bold mb-5 d-inline-flex align-items-center gap-2 text-decoration-none">
                Read Our Story
                <span className="bg-info text-white d-flex align-items-center justify-content-center rounded" style={{ width: '32px', height: '32px', background: '#0ea5e9' }}>
                  <FaArrowRight size={14} />
                </span>
              </Link>
            </div>
            <div className="col-md-6 slide-from-right d-flex justify-content-center position-relative mt-5 mt-md-0 experience-hover-group">
              <div className="experience-outer-ring">
                <span className="ring-dot dot-1"></span>
                <span className="ring-dot dot-2"></span>
                <span className="ring-dot dot-3"></span>
                <span className="ring-dot dot-4"></span>
              </div>
              <div className="experience-circle-outer shadow-lg">
                <div className="experience-circle-inner shadow">
                  <div className="exp-icon shadow-sm"><FaBriefcase /></div>
                  <div className="exp-years-number mb-0 mt-2 text-2xl font-bold">7+</div>
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
      </section>
      <section className="services-preview" style={{ overflow: "hidden" }}>
        <h2 className="section-title">Our <span className="brand-gradient">Services</span></h2>
        <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px', padding: '40px 0', maxWidth: '1200px', margin: '0 auto' }}>
          {[
            {
              title: "Website Design & Development",
              desc: "Premium solutions tailored to your business needs. We build fast, responsive, and stunning websites.",
              features: ["Custom UI/UX Design", "Responsive Development", "CMS Integration"],
              colors: {
                gradient: "linear-gradient(135deg, #2b308b 0%, #0ea5e9 100%)",
                circleBg: "rgba(14, 165, 233, 0.2)",
                titleColor: "#1e293b",
                textColor: "#334155"
              }
            },
            {
              title: "Marketing & SEO",
              desc: "Data-driven marketing strategies to increase your visibility and drive organic traffic.",
              features: ["Search Engine Optimization", "Content Marketing", "Analytics & Tracking"],
              colors: {
                gradient: "linear-gradient(135deg, #2b308b 0%, #0ea5e9 100%)",
                circleBg: "rgba(14, 165, 233, 0.2)",
                titleColor: "#1e293b",
                textColor: "#334155"
              }
            },
            {
              title: "Branding & Identity",
              desc: "Establish a strong, memorable brand presence that resonates with your target audience.",
              features: ["Logo & Visual Identity", "Brand Strategy", "Marketing Collateral"],
              colors: {
                gradient: "linear-gradient(135deg, #2b308b 0%, #0ea5e9 100%)",
                circleBg: "rgba(14, 165, 233, 0.2)",
                titleColor: "#1e293b",
                textColor: "#334155"
              }
            },
            {
              title: "Business Automation",
              desc: "Streamline your workflows with custom software solutions designed for efficiency.",
              features: ["Workflow Automation", "Custom APIs", "CRM Integration"],
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
            <h2 className="fw-title">Featured <span>Work</span></h2>
            <p className="fw-subtitle">
              Explore a selection of our recent projects where creativity,
              innovation, and technology come together.
            </p>
          </div>

          <div className="fw-grid">
            {[
              {
                id: "e-commerce",
                image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=75&w=500&fm=webp",
                icon: <FaShoppingBag />,
                catColor: "#a855f7",
                title: "E-Commerce Solutions",
                description: "Build scalable online shopping platforms with secure payments, inventory management, and modern user experiences.",
                route: "/our-works"
              },
              {
                id: "business-applications",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=75&w=500&fm=webp",
                icon: <FaBriefcase />,
                catColor: "#0ea5e9",
                title: "Business Applications",
                description: "Custom business software including CRM, ERP, HRMS, Inventory Systems, Admin Dashboards, and enterprise management solutions.",
                route: "/our-works"
              },
              {
                id: "mobile-applications",
                image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=75&w=500&fm=webp",
                icon: <FaMobileAlt />,
                catColor: "#14b8a6",
                title: "Mobile Applications",
                description: "Modern Android and cross-platform mobile applications designed for startups, businesses, and enterprises.",
                route: "/our-works"
              }
            ].map((category) => {
              const sec = projectSections.find((s) => s.id === category.id);
              const count = sec ? sec.projects.length : 0;
              const countText = `${count} ${count === 1 ? "Project" : "Projects"}`;

              return (
                <Link to={category.route} key={category.id} className="fw-card" style={{ textDecoration: 'none' }}>
                  <div className="fw-card-img-wrapper">
                    <img src={category.image} alt={category.title} className="fw-card-img" loading="lazy" decoding="async" width="800" height="500" />
                    <span className="fw-card-arrow-btn" aria-hidden="true"><FaArrowRight /></span>
                  </div>
                  <div className="fw-card-content">
                    <div className="fw-category" style={{ color: category.catColor }}>
                      <div className="fw-cat-icon" style={{ backgroundColor: category.catColor }}>
                        {category.icon}
                      </div>
                      <span style={{ textTransform: "none", fontWeight: 700 }}>{countText}</span>
                    </div>
                    <h3 className="fw-card-title">{category.title}</h3>
                    <p className="fw-card-desc">{category.description}</p>
                    <span className="fw-card-link" style={{ color: category.catColor }}>
                      Browse Projects <FaArrowRight />
                    </span>
                  </div>
                </Link>
              );
            })}
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
