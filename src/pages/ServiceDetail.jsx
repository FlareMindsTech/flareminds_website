import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaArrowRight,
  FaExternalLinkAlt,
  FaHome,
  FaChevronRight,
} from "react-icons/fa";
import SEO from "../components/SEO";
import { servicesBySlug } from "../data/servicesData";
import { getServiceSchema, getFAQSchema, getBreadcrumbSchema } from "../utils/structuredData";
import "../pages/css/services.css";
import "./css/service-detail.css";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesBySlug[slug];

  // Scroll to top when slug changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  // ── 404 / Not Found state ──────────────────────────────────────────────────
  if (!service) {
    return (
      <div className="sd-not-found">
        <div className="sd-not-found-inner">
          <div className="sd-not-found-icon">🔍</div>
          <h1 className="sd-not-found-title">Service Not Found</h1>
          <p className="sd-not-found-text">
            We could not find a service at{" "}
            <code>/services/{slug}</code>. Please check the URL or
            browse all our services below.
          </p>
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    );
  }

  // ── SEO meta ───────────────────────────────────────────────────────────────
  const pageTitle = `${service.title} | FlareMinds`;
  const pageDescription = service.heroDescription;
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.title, path: `/services/${slug}` },
  ];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      getServiceSchema({ title: service.title, description: pageDescription }),
      getFAQSchema(service.faq),
      getBreadcrumbSchema(breadcrumbs),
    ],
  };

  return (
    <div className="sd-page">
      <SEO
        title={pageTitle}
        description={pageDescription}
        keywords={`${service.title.toLowerCase()}, ${service.category.toLowerCase()} services, FlareMinds`}
        schema={schema}
      />

      {/* ── A. HERO SECTION ─────────────────────────────────────────────── */}
      <section className="sd-hero">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="sd-breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="sd-breadcrumb-link">
              <FaHome className="sd-breadcrumb-home" />
            </Link>
            <FaChevronRight className="sd-breadcrumb-sep" />
            <Link to="/services" className="sd-breadcrumb-link">
              Services
            </Link>
            <FaChevronRight className="sd-breadcrumb-sep" />
            <span className="sd-breadcrumb-current">{service.title}</span>
          </nav>

          <div className="sd-hero-content">
            {/* Category badge */}
            <span
              className="sd-hero-badge"
              style={{ backgroundColor: service.bgLight, color: service.accent }}
            >
              {service.category}
            </span>

            <h1 className="sd-hero-title">{service.title}</h1>
            <p className="sd-hero-desc">{service.heroDescription}</p>

            <div className="hero-buttons">
              <Link to="/contact" className="btn-primary glow-effect">
                Get Started
              </Link>
              <a href="#sd-overview" className="btn-outline">
                Learn More
              </a>
            </div>
          </div>

          {/* Hero visual */}
          <div className="sd-hero-visual">
            <div
              className="sd-hero-visual-card glass-card"
              style={{ borderColor: `${service.accent}30` }}
            >
              <div
                className="sd-hero-visual-icon"
                style={{ color: service.accent, backgroundColor: service.bgLight }}
              >
                <ServiceIcon slug={slug} />
              </div>
              <h3 className="sd-hero-visual-title">{service.title}</h3>
              <p className="sd-hero-visual-subtitle">{service.category} Service</p>
              <div className="sd-hero-tech-pills">
                {service.technologies.slice(0, 4).map((tech, i) => (
                  <span
                    key={i}
                    className="sd-tech-pill"
                    style={{ borderColor: `${service.accent}40`, color: service.accent }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── B. ABOUT THE SERVICE ────────────────────────────────────────── */}
      <section id="sd-overview" className="sd-overview section-padding">
        <div className="container">
          <div className="sd-overview-grid">
            <div className="sd-overview-text">
              <span
                className="sd-section-badge"
                style={{ backgroundColor: service.bgLight, color: service.accent }}
              >
                About This Service
              </span>
              <h2 className="section-title">{service.overview.title}</h2>
              <p className="sd-overview-body">{service.overview.text}</p>

              {/* Includes list — only for Creative Media Production */}
              {service.includes && (
                <div className="sd-includes">
                  <h4 className="sd-includes-title">What's Included:</h4>
                  <ul className="sd-includes-list">
                    {service.includes.map((item, i) => (
                      <li key={i} className="sd-includes-item">
                        <FaCheckCircle className="icon-check" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="sd-overview-benefits">
              <h3 className="sd-benefits-title">Key Benefits</h3>
              <ul className="feature-list">
                {service.overview.benefits.map((benefit, i) => (
                  <li key={i}>
                    <FaCheckCircle className="icon-check" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── C. KEY FEATURES ─────────────────────────────────────────────── */}
      <section className="sd-features section-padding bg-light">
        <div className="container">
          <div className="sd-section-header text-center">
            <span
              className="sd-section-badge"
              style={{ backgroundColor: service.bgLight, color: service.accent }}
            >
              What We Offer
            </span>
            <h2 className="section-title">Key Features</h2>
          </div>
          <div className="sd-features-grid">
            {service.features.map((feature, i) => (
              <div key={i} className="sd-feature-card glass-card">
                <div
                  className="sd-feature-num"
                  style={{ color: service.accent, backgroundColor: service.bgLight }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="sd-feature-title">{feature.title}</h3>
                <p className="sd-feature-desc">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── D. OUR PROCESS ──────────────────────────────────────────────── */}
      <section className="sd-process section-padding">
        <div className="container">
          <div className="sd-section-header text-center">
            <span
              className="sd-section-badge"
              style={{ backgroundColor: service.bgLight, color: service.accent }}
            >
              How We Work
            </span>
            <h2 className="section-title">Our Process</h2>
          </div>
          <div className="process-grid">
            {service.process.map((item, i) => (
              <div key={i} className="process-card glass-card">
                <div className="step-number">{item.step}</div>
                <div
                  className="sd-process-step-badge"
                  style={{ backgroundColor: service.bgLight, color: service.accent }}
                >
                  Step {item.step}
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── E. TECHNOLOGIES / TOOLS ─────────────────────────────────────── */}
      <section className="sd-tech section-padding bg-light">
        <div className="container text-center">
          <div className="sd-section-header">
            <span
              className="sd-section-badge"
              style={{ backgroundColor: service.bgLight, color: service.accent }}
            >
              Tools & Stack
            </span>
            <h2 className="section-title">Technologies We Use</h2>
          </div>
          <div className="tech-icons">
            {service.technologies.map((tech, i) => (
              <span key={i} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── F. RELATED PROJECTS ─────────────────────────────────────────── */}
      {service.relatedProjects && service.relatedProjects.length > 0 && (
        <section className="sd-projects section-padding">
          <div className="container">
            <div className="sd-section-header text-center">
              <span
                className="sd-section-badge"
                style={{ backgroundColor: service.bgLight, color: service.accent }}
              >
                Our Work
              </span>
              <h2 className="section-title">Related Projects</h2>
            </div>
            <div className="sd-projects-grid">
              {service.relatedProjects.map((project, i) => (
                <article key={i} className="portfolio-card">
                  <div className="portfolio-card-media">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      width="1200"
                      height="800"
                    />
                    <div className="portfolio-card-media-overlay">
                      <span className="portfolio-card-media-badge" style={{ backgroundColor: `${service.accent}90` }}>
                        {service.category}
                      </span>
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          className="portfolio-card-live-link"
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Visit ${project.title} (opens in new tab)`}
                        >
                          Visit Project <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="portfolio-card-body">
                    <p className="portfolio-card-kicker" style={{ color: service.accent }}>
                      {service.title}
                    </p>
                    <h3 className="portfolio-card-title">{project.title}</h3>
                    <p className="portfolio-card-text">{project.description}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="sd-projects-cta text-center">
              <Link to="/products" className="btn-outline">
                View All Projects <FaArrowRight />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── G. FAQ ──────────────────────────────────────────────────────── */}
      {service.faq && service.faq.length > 0 && (
        <section className="service-faq section-padding bg-light">
          <div className="container">
            <div className="sd-section-header text-center">
              <span
                className="sd-section-badge"
                style={{ backgroundColor: service.bgLight, color: service.accent }}
              >
                Got Questions?
              </span>
              <h2 className="section-title">Frequently Asked Questions</h2>
            </div>
            <div className="faq-grid">
              {service.faq.map((item, i) => (
                <div key={i} className="faq-item glass-card">
                  <h4>{item.q}</h4>
                  <p>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── H. FINAL CTA ────────────────────────────────────────────────── */}
      <section className="service-cta text-center section-padding">
        <div className="container">
          <div className="sd-cta-inner glass-card">
            <div
              className="sd-cta-icon"
              style={{ color: service.accent, backgroundColor: service.bgLight }}
            >
              <ServiceIcon slug={slug} />
            </div>
            <h2 className="sd-cta-title">Let's Build Your Project</h2>
            <p className="sd-cta-subtitle">
              Ready to get started with {service.title}? Let's talk about your
              goals and build something great together.
            </p>
            <div className="hero-buttons" style={{ justifyContent: "center" }}>
              <Link to="/contact" className="btn-primary glow-effect">
                Get Started
              </Link>
              <Link to="/services" className="btn-outline">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ── Inline icon renderer using SVG (no extra icon lib needed) ─────────────────
function ServiceIcon({ slug }) {
  const icons = {
    "website-development": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    "mobile-app-development": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12" y2="18" strokeWidth="2.5" />
      </svg>
    ),
    "e-commerce-solutions": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
    "business-applications": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    "service-marketplace": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    "custom-software-development": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    "seo-analytics": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    "social-media-marketing": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
    "performance-marketing": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    "branding-creative-design": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r="2.5" />
        <circle cx="17.5" cy="10.5" r="2.5" />
        <circle cx="8.5" cy="7.5" r="2.5" />
        <circle cx="6.5" cy="12.5" r="2.5" />
        <path d="M12 22a10 10 0 0 0 10-10c0-1.1-.2-2.2-.5-3.2L15 13l-4.5 3L7 13l-3.5 5.8A10 10 0 0 0 12 22z" />
      </svg>
    ),
    "creative-media-production": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </svg>
    ),
    "content-marketing": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  };

  return icons[slug] || (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  );
}
