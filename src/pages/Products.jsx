import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaRocket,
  FaCheckCircle,
  FaClock,
  FaExternalLinkAlt,
  FaArrowRight,
  FaShieldAlt,
  FaBolt,
  FaMobileAlt,
  FaUsers,
  FaFileInvoiceDollar,
  FaCalendarCheck,
  FaStore,
  FaBarcode,
  FaChartLine,
  FaTimes,
  FaEye,
  FaLaptopCode,
  FaLayerGroup,
  FaLock,
  FaTools,
} from "react-icons/fa";
import SEO from "../components/common/SEO";
import { getBreadcrumbSchema } from "../utils/structuredData";
import HeroBackground from "../components/common/HeroBackground";
import { PRODUCTS_DATA } from "../data/productsData";
import "../styles/pages/products.css";

export default function Products() {
  const [modalImage, setModalImage] = useState(null);

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
  ];

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setModalImage(null);
      }
    };
    if (modalImage) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [modalImage]);

  // Helper to render capability icons
  const renderCapIcon = (iconKey, isGold) => {
    const iconMap = {
      store: <FaStore />,
      barcode: <FaBarcode />,
      crm: <FaUsers />,
      chart: <FaChartLine />,
      users: <FaUsers />,
      clock: <FaClock />,
      payroll: <FaFileInvoiceDollar />,
      calendar: <FaCalendarCheck />,
    };

    return (
      <div className={`prod-cap-icon-box ${isGold ? "gold" : "blue"}`}>
        {iconMap[iconKey] || <FaCheckCircle />}
      </div>
    );
  };

  return (
    <div className="prod-page">
      <SEO
        title="Software & SaaS Products | FlareMinds — TYROS & HRMS Suite"
        description="Discover proprietary enterprise software and SaaS applications developed in-house by FlareMinds Tech, including TYROS for tyre franchise management and our cloud HRMS Suite."
        keywords="FlareMinds products, TYROS, tyre franchise software, HRMS software, enterprise SaaS, workforce management, proprietary software"
        schema={getBreadcrumbSchema(breadcrumbs)}
      />

      {/* ── 1. HERO SECTION ────────────────────────────────────────── */}
      <section className="prod-hero" aria-label="Products introduction">
        <HeroBackground />

        <div className="prod-hero-inner">
          <div className="prod-hero-badge">
            <span>✦</span> FLAREMINDS PRODUCT LAB
          </div>

          <h1 className="prod-hero-title">
            Proprietary Software.{" "}
            <span className="prod-grad-text">Engineered In-House.</span>
          </h1>

          <p className="prod-hero-desc">
            We don't just build bespoke applications for clients — we engineer our own
            commercial-grade SaaS platforms and industry solutions. Explore our flagship software products
            preparing for production launch.
          </p>

          {/* Jump Links to Products */}
          <div className="prod-hero-nav" role="navigation" aria-label="Jump to products">
            <a href="#tyros" className="prod-quick-link" id="jump-to-tyros">
              <FaMobileAlt style={{ color: "#ea580c" }} />
              <span>TYROS</span>
              <span className="prod-quick-pill deploying">Deploying Soon</span>
            </a>
            <a href="#hrms" className="prod-quick-link" id="jump-to-hrms">
              <FaLaptopCode style={{ color: "#c79d58" }} />
              <span>HRMS Suite</span>
              <span className="prod-quick-pill testing">Testing Phase</span>
            </a>
          </div>

          {/* Hero Metrics Strip */}
          <div className="prod-metrics-strip" aria-label="Platform overview metrics">
            <div className="prod-metric-item">
              <div className="prod-metric-val">2</div>
              <div className="prod-metric-label">Flagship Platforms</div>
            </div>
            <div className="prod-metric-item">
              <div className="prod-metric-val">100%</div>
              <div className="prod-metric-label">Proprietary Code</div>
            </div>
            <div className="prod-metric-item">
              <div className="prod-metric-val">Cloud</div>
              <div className="prod-metric-label">Scalable Infra</div>
            </div>
            <div className="prod-metric-item">
              <div className="prod-metric-val">Mobile</div>
              <div className="prod-metric-label">& Web Unified</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. PRODUCT SHOWCASE SUITE ──────────────────────────────── */}
      <section className="prod-showcase-section" aria-label="Product Showcase">
        <div className="prod-section-header">
          <span className="prod-section-eyebrow">Product Lineup</span>
          <h2 className="prod-section-title">High-Impact SaaS Applications</h2>
          <p className="prod-section-desc">
            Built from the ground up by FlareMinds to eliminate operational bottlenecks,
            automate complex business workflows, and deliver measurable ROI.
          </p>
        </div>

        {/* ── SHOWCASE 1: TYROS ────────────────────────────────────── */}
        {PRODUCTS_DATA.filter((p) => p.id === "tyros").map((product) => (
          <article
            key={product.id}
            id={product.id}
            className="prod-item-showcase"
            aria-labelledby="tyros-title"
          >
            <div className="prod-ambient-glow orange" />

            <div className="prod-grid-split">
              {/* Content Side */}
              <div className="prod-content-side">
                <div className="prod-header-badges">
                  <span className="prod-category-tag">{product.badge}</span>
                  <span className="prod-status-pill deploying">
                    <span className="prod-status-dot" />
                    {product.status.label}
                  </span>
                </div>

                <h3 id="tyros-title" className="prod-item-title">
                  {product.name}
                </h3>
                <div className="prod-item-tagline">{product.tagline}</div>
                <p className="prod-item-desc">{product.description}</p>

                {/* Stage Announcement */}
                <div className="prod-announcement-banner">
                  <div className="prod-announcement-icon">🚀</div>
                  <p className="prod-announcement-text">
                    <strong>Deployment Status: </strong>
                    {product.status.announcement}
                  </p>
                </div>

                {/* Capabilities Grid */}
                <div className="prod-capabilities-grid">
                  {product.highlights.map((item, idx) => (
                    <div key={idx} className="prod-cap-card">
                      <div className="prod-cap-head">
                        {renderCapIcon(item.iconKey, false)}
                        <h4 className="prod-cap-title">{item.title}</h4>
                      </div>
                      <p className="prod-cap-desc">{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="prod-tech-wrap">
                  <div className="prod-tech-label">Architecture & Tech Stack</div>
                  <div className="prod-tech-chips">
                    {product.tech.map((t) => (
                      <span key={t} className="prod-tech-chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="prod-actions-bar">
                  <Link
                    to="/contact?product=tyros"
                    className="prod-btn-primary"
                    id="tyros-waitlist-btn"
                  >
                    <span>Request Early Access</span>
                    <FaArrowRight style={{ fontSize: "0.8rem" }} />
                  </Link>
                  <Link
                    to="/contact?inquiry=franchise"
                    className="prod-btn-outline"
                    id="tyros-franchise-btn"
                  >
                    <span>Franchise Inquiry</span>
                  </Link>
                </div>
              </div>

              {/* Visual Side */}
              <div className="prod-visual-side">
                <div
                  className="prod-mockup-frame"
                  onClick={() => setModalImage({ img: product.image, title: product.name })}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setModalImage({ img: product.image, title: product.name });
                    }
                  }}
                  aria-label={`View enlarged preview of ${product.name}`}
                >
                  <img
                    src={product.image}
                    alt={`${product.name} mobile app interface preview`}
                    loading="lazy"
                    decoding="async"
                    width="1024"
                    height="572"
                  />
                  <div className="prod-expand-overlay">
                    <span className="prod-expand-badge">
                      <FaEye /> Click to Expand Preview
                    </span>
                  </div>
                  <div className="prod-mockup-footer">
                    <span className="prod-mockup-label">TYROS Mobile App Architecture</span>
                    <span className="prod-mockup-tag">Flutter & Node.js</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}

        {/* ── SHOWCASE 2: HRMS SUITE ───────────────────────────────── */}
        {PRODUCTS_DATA.filter((p) => p.id === "hrms").map((product) => (
          <article
            key={product.id}
            id={product.id}
            className="prod-item-showcase"
            aria-labelledby="hrms-title"
          >
            <div className="prod-ambient-glow gold" />

            <div className="prod-grid-split reversed">
              {/* Visual Side (Left on desktop) */}
              <div className="prod-visual-side">
                <div
                  className="prod-mockup-frame"
                  onClick={() => setModalImage({ img: product.image, title: product.name })}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setModalImage({ img: product.image, title: product.name });
                    }
                  }}
                  aria-label={`View enlarged preview of ${product.name}`}
                >
                  <img
                    src={product.image}
                    alt={`${product.name} dashboard interface preview`}
                    loading="lazy"
                    decoding="async"
                    width="1024"
                    height="572"
                  />
                  <div className="prod-expand-overlay">
                    <span className="prod-expand-badge">
                      <FaEye /> Click to Expand Preview
                    </span>
                  </div>
                  <div className="prod-mockup-footer">
                    <span className="prod-mockup-label">Enterprise Cloud Dashboard</span>
                    <span className="prod-mockup-tag" style={{ color: "#c79d58" }}>
                      React & Express
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Side (Right on desktop) */}
              <div className="prod-content-side">
                <div className="prod-header-badges">
                  <span className="prod-category-tag">{product.badge}</span>
                  <span className="prod-status-pill testing">
                    <span className="prod-status-dot" />
                    {product.status.label}
                  </span>
                  {product.brandingNotice && (
                    <span className="prod-branding-note">
                      ✦ {product.brandingNotice}
                    </span>
                  )}
                </div>

                <h3 id="hrms-title" className="prod-item-title">
                  {product.name}
                </h3>
                <div className="prod-item-tagline gold-accent">{product.tagline}</div>
                <p className="prod-item-desc">{product.description}</p>

                {/* Stage Announcement */}
                <div className="prod-announcement-banner">
                  <div className="prod-announcement-icon">🧪</div>
                  <p className="prod-announcement-text">
                    <strong>Testing & QA Stage: </strong>
                    {product.status.announcement}
                  </p>
                </div>

                {/* Capabilities Grid */}
                <div className="prod-capabilities-grid">
                  {product.highlights.map((item, idx) => (
                    <div key={idx} className="prod-cap-card">
                      <div className="prod-cap-head">
                        {renderCapIcon(item.iconKey, true)}
                        <h4 className="prod-cap-title">{item.title}</h4>
                      </div>
                      <p className="prod-cap-desc">{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="prod-tech-wrap">
                  <div className="prod-tech-label">Architecture & Tech Stack</div>
                  <div className="prod-tech-chips">
                    {product.tech.map((t) => (
                      <span key={t} className="prod-tech-chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="prod-actions-bar">
                  {product.demoLink && (
                    <a
                      href={product.demoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="prod-btn-primary prod-btn-gold"
                      id="hrms-staging-link"
                      aria-label="Explore HRMS live staging preview (opens in a new tab)"
                    >
                      <span>Explore Live Staging</span>
                      <FaExternalLinkAlt style={{ fontSize: "0.8rem" }} />
                    </a>
                  )}
                  <Link
                    to="/contact?product=hrms"
                    className="prod-btn-outline"
                    id="hrms-contact-btn"
                  >
                    <span>Request Enterprise Walkthrough</span>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* ── 3. PRODUCT STANDARDS & DNA ─────────────────────────────── */}
      <section className="prod-standards-wrap" aria-label="Product Engineering Standards">
        <div className="prod-standards-inner">
          <div className="prod-section-header" style={{ marginBottom: "2.5rem" }}>
            <span className="prod-section-eyebrow">Engineering Standards</span>
            <h2 className="prod-section-title">The FlareMinds Product DNA</h2>
            <p className="prod-section-desc">
              Every platform we design adheres to stringent architectural principles
              built for longevity, high concurrency, and data integrity.
            </p>
          </div>

          <div className="prod-pillars-grid">
            <div className="prod-pillar-card">
              <div className="prod-pillar-icon">
                <FaShieldAlt />
              </div>
              <h3 className="prod-pillar-title">Enterprise Security</h3>
              <p className="prod-pillar-desc">
                Granular role-based access control (RBAC), end-to-end data encryption,
                and session protection compliant with standard security norms.
              </p>
            </div>

            <div className="prod-pillar-card">
              <div className="prod-pillar-icon">
                <FaBolt />
              </div>
              <h3 className="prod-pillar-title">Sub-Second Speed</h3>
              <p className="prod-pillar-desc">
                High-throughput APIs, optimized database indexing, and lean frontend
                bundles delivering near-instant page interactions.
              </p>
            </div>

            <div className="prod-pillar-card">
              <div className="prod-pillar-icon">
                <FaMobileAlt />
              </div>
              <h3 className="prod-pillar-title">Omni-Platform Core</h3>
              <p className="prod-pillar-desc">
                Unified business logic accessible across iOS, Android, tablets,
                and responsive desktop browsers with real-time state synchronization.
              </p>
            </div>

            <div className="prod-pillar-card">
              <div className="prod-pillar-icon">
                <FaLayerGroup />
              </div>
              <h3 className="prod-pillar-title">Modular Scalability</h3>
              <p className="prod-pillar-desc">
                Decoupled microservice architecture designed to handle rapid
                user onboarding and expanding multi-tenant operations without downtime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. R&D ROADMAP PIPELINE ─────────────────────────────────── */}
      <section className="prod-pipeline-section" aria-label="Upcoming Product Pipeline">
        <div className="prod-section-header" style={{ marginBottom: "1.5rem" }}>
          <span className="prod-section-eyebrow">What's Next</span>
          <h2 className="prod-section-title">In the FlareMinds Innovation Lab</h2>
          <p className="prod-section-desc">
            Upcoming product concepts currently undergoing architecture research and proof of concept.
          </p>
        </div>

        <div className="prod-pipeline-grid">
          <div className="prod-pipeline-card">
            <span className="prod-pipeline-status">R&D / Prototyping</span>
            <h3 className="prod-pipeline-title">SupplyChain X</h3>
            <p className="prod-pipeline-desc">
              B2B logistics dispatch and automated vendor quotation platform for regional distributors.
            </p>
          </div>

          <div className="prod-pipeline-card">
            <span className="prod-pipeline-status">Exploratory Stage</span>
            <h3 className="prod-pipeline-title">Predictive AI Sales Engine</h3>
            <p className="prod-pipeline-desc">
              Plug-and-play machine learning engine that forecasts seasonal demand and stock reorders for retailers.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. CUSTOM PRODUCT CO-CREATION CTA ───────────────────────── */}
      <section className="prod-cta-section" aria-label="Co-Build Software Call to Action">
        <div className="prod-cta-card">
          <p className="prod-cta-pre">{"<"} Co-Build With FlareMinds {"/>"}</p>
          <h2 className="prod-cta-title">Have an ambitious product idea?</h2>
          <p className="prod-cta-sub">
            Whether you need a custom SaaS platform, an industry-specific mobile app,
            or enterprise workflow automation, our engineering team brings your vision to market.
          </p>
          <div className="prod-cta-actions">
            <Link to="/contact" className="prod-cta-btn-main" id="product-partner-cta">
              Partner With Us
              <FaArrowRight />
            </Link>
            <Link to="/our-works" className="prod-cta-btn-alt" id="explore-works-btn">
              Explore Our Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. IMAGE LIGHTBOX MODAL ────────────────────────────────── */}
      {modalImage && (
        <div
          className="prod-modal-backdrop"
          onClick={() => setModalImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${modalImage.title} enlarged mockup preview`}
        >
          <div className="prod-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="prod-modal-header">
              <h3 className="prod-modal-title">{modalImage.title} — High-Res Preview</h3>
              <button
                type="button"
                className="prod-modal-close"
                onClick={() => setModalImage(null)}
                aria-label="Close modal"
              >
                <FaTimes />
              </button>
            </div>
            <div className="prod-modal-body">
              <img src={modalImage.img} alt={`${modalImage.title} preview`} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
