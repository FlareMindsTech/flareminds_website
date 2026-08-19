import React from "react";
import { Link } from "react-router-dom";
import { FaBox, FaArrowRight, FaTools, FaLaptopCode, FaMagic } from "react-icons/fa";
import SEO from "../components/common/SEO";
import { getBreadcrumbSchema } from "../utils/structuredData";
import "../styles/pages/products.css";

// Decorative symbols for tech hero background
const SYMBOLS = ["{ }", "< />", "[ ]", "01", "10", "001", "010", "11"];

export default function Products() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
  ];

  return (
    <div className="pw-page">
      <SEO
        title="Products | FlareMinds — Software & SaaS Products"
        description="Explore upcoming SaaS products, enterprise platforms, and digital software suites developed by FlareMinds."
        keywords="products, SaaS, software products, FlareMinds products, business software"
        schema={getBreadcrumbSchema(breadcrumbs)}
      />

      {/* ── HERO SECTION ────────────────────────────────────────── */}
      <section className="pw-hero" aria-label="Products hero">
        {/* Floating background symbols */}
        <div className="pw-hero-symbols" aria-hidden="true">
          {SYMBOLS.map((sym, i) => (
            <span key={i} className="pw-sym">{sym}</span>
          ))}
        </div>

        {/* Scan line effect */}
        <div className="pw-scan-line" aria-hidden="true" />

        <div className="pw-container">
          <div className="pw-hero-inner">
            {/* Eyebrow */}
            <div className="pw-hero-eyebrow" aria-label="Section label">
              <span className="pw-hero-eyebrow-dot" />
              PRODUCTS
            </div>

            {/* Title */}
            <h1 className="pw-hero-title">
              Innovating digital <span className="pw-grad">products</span> for tomorrow
            </h1>

            {/* Description */}
            <p className="pw-hero-desc">
              We are currently designing and building proprietary SaaS platforms, business software,
              and enterprise automation products.
            </p>
            <p className="pw-hero-sub">
              Our product suite is currently under active development.
            </p>
          </div>
        </div>
      </section>

      {/* ── EMPTY / COMING SOON CONTENT ────────────────────────────── */}
      <div className="pw-content">
        <div 
          style={{
            background: "#ffffff",
            borderRadius: "24px",
            border: "1px solid rgba(148, 163, 184, 0.18)",
            boxShadow: "0 20px 50px rgba(15, 23, 42, 0.06)",
            padding: "4rem 2rem",
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto 4rem",
            position: "relative",
            overflow: "hidden"
          }}
        >
          {/* Subtle background glow inside card */}
          <div 
            style={{
              position: "absolute",
              top: "-50px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "300px",
              height: "200px",
              background: "radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)",
              pointerEvents: "none"
            }}
          />

          <div 
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "20px",
              background: "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)",
              color: "#0284c7",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2.2rem",
              marginBottom: "1.5rem",
              boxShadow: "0 8px 24px rgba(14, 165, 233, 0.18)",
              margin: "0 auto 1.5rem"
            }}
          >
            <FaBox />
          </div>

          <span 
            style={{
              display: "inline-block",
              padding: "0.3rem 0.85rem",
              borderRadius: "999px",
              background: "rgba(14, 165, 233, 0.08)",
              border: "1px solid rgba(14, 165, 233, 0.2)",
              color: "#0284c7",
              fontSize: "0.75rem",
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1rem"
            }}
          >
            ✦ Coming Soon
          </span>

          <h2 
            style={{
              fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
              fontSize: "2rem",
              fontWeight: 900,
              color: "#0f172a",
              marginBottom: "1rem",
              lineHeight: 1.2
            }}
          >
            Product Suite In Development
          </h2>

          <p 
            style={{
              fontSize: "1.05rem",
              color: "#64748b",
              maxWidth: "560px",
              margin: "0 auto 2rem",
              lineHeight: 1.7
            }}
          >
            We are working behind the scenes to launch our standalone web applications, micro-SaaS tools,
            and business utility products. Stay tuned for exciting launches!
          </p>

          {/* Upcoming product teaser grid */}
          <div 
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.25rem",
              marginBottom: "2.5rem",
              textAlign: "left"
            }}
          >
            {[
              {
                icon: <FaTools style={{ color: "#0ea5e9" }} />,
                title: "Business Automation",
                desc: "Custom workflow & task automation suite for SMEs."
              },
              {
                icon: <FaLaptopCode style={{ color: "#8b5cf6" }} />,
                title: "SaaS Platforms",
                desc: "Cloud-native web applications for modern teams."
              },
              {
                icon: <FaMagic style={{ color: "#f59e0b" }} />,
                title: "AI Tools",
                desc: "Smart AI integration for analytics & content generation."
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                style={{
                  background: "#f8fafc",
                  borderRadius: "14px",
                  padding: "1.25rem",
                  border: "1px solid rgba(226, 232, 240, 0.8)"
                }}
              >
                <div style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>{item.icon}</div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#1e293b", marginBottom: "0.3rem" }}>{item.title}</h3>
                <p style={{ fontSize: "0.82rem", color: "#64748b", margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <Link 
              to="/contact" 
              className="pw-cta-btn"
              style={{ padding: "0.75rem 1.8rem", fontSize: "0.9rem" }}
            >
              Request Custom Product <FaArrowRight className="pw-cta-btn-arrow" />
            </Link>
            <Link 
              to="/our-works" 
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1.8rem",
                borderRadius: "12px",
                border: "1.5px solid rgba(148, 163, 184, 0.3)",
                color: "#334155",
                fontWeight: 700,
                fontSize: "0.9rem",
                textDecoration: "none",
                transition: "all 0.2s ease"
              }}
            >
              Explore Our Works
            </Link>
          </div>
        </div>
      </div>

      {/* ── BOTTOM CTA ────────────────────────────────────────── */}
      <section className="pw-cta" aria-label="Call to action">
        <div className="pw-cta-inner">
          <p className="pw-cta-pre" aria-hidden="true">
            {"<"} Looking for custom software? {"/>"}
          </p>
          <h2 className="pw-cta-title">Need a tailored solution?</h2>
          <p className="pw-cta-sub">
            Whether it's a mobile app, web platform, or custom business software,
            we bring your vision to life.
          </p>
          <Link to="/contact" className="pw-cta-btn">
            Get In Touch
            <FaArrowRight className="pw-cta-btn-arrow" />
          </Link>
        </div>
      </section>
    </div>
  );
}
