import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaChevronRight, FaArrowRight, FaShieldAlt, FaBolt, FaCheckCircle } from "react-icons/fa";
import ServiceVisual from "./ServiceVisual";

export default function ServiceHero({ service, slug, breadcrumbCategory = "Services" }) {
  if (!service) return null;

  return (
    <section className="sd-hero">
      {/* ── Dynamic Product Studio Backdrop ──────────────────────── */}
      <div className="sd-hero-backdrop" aria-hidden="true">
        <div className="sd-backdrop-blob blob-1" />
        <div className="sd-backdrop-blob blob-2" />
        <div className="sd-backdrop-blob blob-3" />
        <div className="sd-backdrop-dots" />
        <div className="sd-backdrop-rings" />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 3 }}>
        {/* ── Breadcrumbs ───────────────────────────────────────────── */}
        <nav className="sd-breadcrumb" aria-label="Breadcrumb">
          <Link to="/" className="sd-breadcrumb-link">
            <FaHome className="sd-breadcrumb-home" />
          </Link>
          <FaChevronRight className="sd-breadcrumb-sep" />
          <Link to="/services" className="sd-breadcrumb-link">
            {breadcrumbCategory}
          </Link>
          <FaChevronRight className="sd-breadcrumb-sep" />
          <span className="sd-breadcrumb-current">{service.title}</span>
        </nav>

        {/* ── Asymmetric Hero Grid ─────────────────────────────────── */}
        <div className="sd-hero-grid">
          <div className="sd-hero-content">
            {/* Category Tag */}
            <div className="sd-hero-badge-wrap">
              <span
                className="sd-hero-badge"
                style={{
                  backgroundColor: service.bgLight || "rgba(14, 165, 233, 0.08)",
                  color: service.accent || "#0284c7",
                }}
              >
                ● {service.category}
              </span>
            </div>

            <h1 className="sd-hero-title">
              {service.title}
            </h1>

            <p className="sd-hero-desc">
              {service.heroDescription || service.overview?.text}
            </p>

            {/* CTAs */}
            <div className="sd-hero-buttons">
              <Link to="/contact" className="btn-primary glow-effect">
                Start Your Project <FaArrowRight style={{ marginLeft: 6, fontSize: "0.85em" }} />
              </Link>
              <a href="#sd-overview" className="btn-outline">
                Explore Features
              </a>
            </div>

            {/* Mini Trust Bar */}
            <div className="sd-hero-trust-mini">
              <span className="sd-trust-mini-item">
                <FaBolt className="text-sky-500" /> Rapid Turnaround
              </span>
              <span className="sd-trust-mini-sep">•</span>
              <span className="sd-trust-mini-item">
                <FaShieldAlt className="text-blue-500" /> Enterprise Quality
              </span>
              <span className="sd-trust-mini-sep">•</span>
              <span className="sd-trust-mini-item">
                <FaCheckCircle className="text-emerald-500" /> Ongoing Support
              </span>
            </div>
          </div>

          {/* Right Column: Custom Interactive Mockup Visual */}
          <div className="sd-hero-visual-wrapper">
            <div className="sd-visual-card-frame">
              <ServiceVisual slug={service.id || slug} accent={service.accent} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
