import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/common/SEO";
import { FaFileCode, FaServer, FaShieldAlt, FaRocket, FaLaptopCode, FaHeadset, FaArrowRight } from "react-icons/fa";
import "../styles/pages/faq.css";

const DOCS_SECTIONS = [
  {
    icon: <FaLaptopCode />,
    title: "Technology Stack & Architecture",
    description: "Our engineering guidelines follow modern modular patterns: React 19 / Next.js for web frontends, Node.js and Python for scalable microservices, and React Native / Flutter for cross-platform mobile apps.",
    topics: ["Component Driven UI", "State Management & React Hooks", "Clean Architecture & SOLID Principles"]
  },
  {
    icon: <FaServer />,
    title: "API & System Integrations",
    description: "Standard practices for developing and integrating enterprise APIs, third-party payment gateways (Stripe, Razorpay), authentication (JWT, OAuth 2.0), and automated webhook delivery pipelines.",
    topics: ["RESTful API Conventions", "Webhook Event Handling", "Database Optimization (PostgreSQL / MongoDB)"]
  },
  {
    icon: <FaShieldAlt />,
    title: "Security & Compliance Standards",
    description: "Every digital product deployed by FlareMinds undergoes strict automated linting, vulnerability audits, SSL/TLS enforcement, and adherence to modern web security benchmarks.",
    topics: ["Data Encryption in Transit & Rest", "Role-Based Access Control (RBAC)", "Input Sanitization & CSRF / XSS Protection"]
  },
  {
    icon: <FaHeadset />,
    title: "Client Onboarding & Maintenance SLAs",
    description: "Comprehensive overview of our sprint cycles, ticketing, version control, staging environments, and priority support response times for active client applications.",
    topics: ["2-Hour Emergency Support SLA", "Scheduled Maintenance & Backups", "Continuous Delivery & Zero-Downtime Releases"]
  }
];

export default function Docs() {
  return (
    <div className="faq-page">
      <SEO
        title="Documentation & Technical Resources | FLAREMINDS TECH PRIVATE LIMITED"
        description="Explore FlareMinds engineering guidelines, architecture standards, client onboarding documentation, and maintenance SLAs."
        canonical="https://www.flaremindstech.com/docs"
      />

      <div className="faq-container">
        <header className="faq-header">
          <div className="faq-badge">
            <FaFileCode /> Technical Knowledge Base
          </div>
          <h1 className="faq-title">Documentation & Resources</h1>
          <p className="faq-subtitle">
            Engineering standards, deployment architectures, and client support documentation developed by FlareMinds.
          </p>
        </header>

        <div className="faq-list">
          {DOCS_SECTIONS.map((section, idx) => (
            <div key={idx} className="faq-item open" style={{ padding: "1.75rem", marginBottom: "1rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <div style={{ fontSize: "1.75rem", color: "#0ea5e9", marginTop: "2px" }}>
                  {section.icon}
                </div>
                <div>
                  <h2 style={{ fontSize: "1.25rem", fontWeight: "800", color: "#0f172a", marginBottom: "0.5rem", fontFamily: "var(--font-heading)" }}>
                    {section.title}
                  </h2>
                  <p style={{ color: "#475569", lineHeight: "1.6", marginBottom: "1rem", fontSize: "0.95rem" }}>
                    {section.description}
                  </p>
                  <ul style={{ paddingLeft: "1.25rem", margin: "0", color: "#64748b", fontSize: "0.9rem" }}>
                    {section.topics.map((t, i) => (
                      <li key={i} style={{ marginBottom: "0.35rem" }}>{t}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-cta-box">
          <h3>Need specialized technical documentation or API keys?</h3>
          <p>Our dedicated engineering support team is available to assist enterprise clients.</p>
          <Link to="/contact" className="faq-cta-btn">
            <FaRocket /> Request Developer Access <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
