import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/common/SEO";
import { getServiceSchema, getBreadcrumbSchema } from "../utils/structuredData";
import { FaArrowRight } from "react-icons/fa";
import { developmentServices, marketingServices } from "../data/servicesData";
import "../styles/pages/services.css";

// ─────────────────────────────────────────────────────────────────────────────
// Icon renderer (inline SVG, matches Navbar icon style)
// ─────────────────────────────────────────────────────────────────────────────
function ServiceCardIcon({ slug }) {
  const iconMap = {
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
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2.5" />
        <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2.5" />
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
  return iconMap[slug] || null;
}

// ─────────────────────────────────────────────────────────────────────────────
// Single service card — uses existing .dev-service-card design
// ─────────────────────────────────────────────────────────────────────────────
function ServiceCard({ service }) {
  return (
    <div className="dev-service-card glass-card">
      <div
        className="dev-card-icon"
        style={{ color: service.accent, backgroundColor: service.bgLight }}
      >
        <ServiceCardIcon slug={service.slug} />
      </div>
      <h3 className="dev-card-title">{service.title}</h3>
      <p className="dev-card-desc">{service.shortDescription}</p>
      <Link
        to={`/services/${service.slug}`}
        className="dev-card-btn"
        style={{ color: service.accent }}
      >
        Learn More <FaArrowRight />
      </Link>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Services overview page  (/services)
// ─────────────────────────────────────────────────────────────────────────────
export default function Services() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const pageTitle = "Software Development & Digital Services | FlareMinds";
  const pageDescription =
    "Explore FlareMinds' professional software development and digital marketing services including web development, mobile apps, e-commerce, SEO, social media marketing, and more.";

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      getServiceSchema({
        title: "Software Development & Digital Services",
        description: pageDescription,
      }),
      getBreadcrumbSchema(breadcrumbs),
    ],
  };

  return (
    <div className="service-page-container">
      <SEO
        title={pageTitle}
        description={pageDescription}
        keywords="software development, web development, app development, ecommerce solutions, business applications, custom software, digital marketing, SEO, social media marketing, performance marketing, branding, content marketing"
        schema={schema}
      />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="service-hero text-center">
        <div className="container">
          <h1 className="hero-title">
            Software <span className="text-gradient">Development</span> &amp;{" "}
            Digital Services
          </h1>
          <p className="hero-subtitle">
            We craft high-performance business websites, mobile apps, e-commerce
            platforms, custom enterprise software, and result-driven digital
            marketing campaigns tailored for growth.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn-primary glow-effect">
              Get a Quote
            </Link>
            <a href="#development-services" className="btn-outline">
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* ── Development Services ─────────────────────────────────── */}
      <section
        id="development-services"
        className="development-services-section section-padding"
      >
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 className="section-title">
              Development <span className="text-gradient">Services</span>
            </h2>
            <p className="section-subtitle text-muted">
              Professional software engineering solutions engineered to scale
              businesses, streamline operations, and deliver exceptional user
              experiences.
            </p>
          </div>
          <div className="dev-services-grid">
            {developmentServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Marketing Services ───────────────────────────────────── */}
      <section
        id="marketing-services"
        className="development-services-section section-padding bg-light"
      >
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 className="section-title">
              Marketing <span className="text-gradient">Services</span>
            </h2>
            <p className="section-subtitle text-muted">
              Data-driven digital marketing strategies that grow your brand,
              attract qualified leads, and convert them into loyal customers.
            </p>
          </div>
          <div className="dev-services-grid">
            {marketingServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────── */}
      <section className="service-cta text-center section-padding">
        <div className="container">
          <h2>Have a Custom Project in Mind?</h2>
          <p
            className="text-muted mb-4"
            style={{ maxWidth: "600px", margin: "0.8rem auto 1.8rem" }}
          >
            Talk to our experts today and transform your idea into a
            production-ready digital product.
          </p>
          <Link to="/contact" className="btn-primary glow-effect">
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
