import React, { useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Services() {
  const { id } = useParams();
  const navigate = useNavigate();

  /* ===========================
      SERVICES DATA (with useMemo)
     =========================== */
  const services = useMemo(
    () => [
      {
        id: "website-development",
        icon: "🌐",
        title: "Website Development",
        desc: [
          "We build lightning-fast, responsive websites.",
          "Modern frontend stacks: React, Next.js, Tailwind, HTML5.",
          "SEO-boosted structure and high Google PageSpeed score.",
          "Perfect for businesses wanting premium UI and performance.",
          "Includes CMS, dashboards, animations, and branding layouts.",
          "Dummy detail: We include AI-powered content blocks.",
          "Dummy detail: Free 1-year performance monitoring."
        ],
      },

      {
        id: "ecommerce-solutions",
        icon: "🛒",
        title: "Ecommerce Solutions",
        desc: [
          "Full D2C and B2B ecommerce systems.",
          "Inventory, checkout, offers, CRM, analytics — all included.",
          "Shopify, WooCommerce, MERN custom dashboards.",
          "Payments: UPI, Razorpay, Stripe, COD.",
          "Dummy detail: AI-driven product recommendation engine.",
          "Dummy detail: Integrated A/B testing for conversion boosts."
        ],
      },

      {
        id: "app-development",
        icon: "📱",
        title: "App Development",
        desc: [
          "Android + iOS apps using React Native & Flutter.",
          "User-friendly UI with smooth animations.",
          "Backend APIs, authentication, push notifications.",
          "Dummy detail: Offline data sync system.",
          "Dummy detail: Built-in crash analytics monitoring."
        ],
      },

      {
        id: "seo-analytics",
        icon: "📊",
        title: "SEO & Analytics",
        desc: [
          "Rank higher with technical + content SEO.",
          "Keyword research, backlink building, indexing fixes.",
          "Analytics dashboards for traffic & ranking insights.",
          "Dummy detail: AI competitor analysis reports.",
          "Dummy detail: Heatmap tracking for user behavior."
        ],
      },

      {
        id: "social-media-marketing",
        icon: "📣",
        title: "Social Media Marketing",
        desc: [
          "Instagram, YouTube, Facebook brand growth.",
          "Reels, ads, content design, community management.",
          "Dummy detail: AI post generator with 30 templates.",
          "Dummy detail: Weekly growth optimization report."
        ],
      },

      {
        id: "branding-logo",
        icon: "🎨",
        title: "Branding & Logo Design",
        desc: [
          "Premium brand identity system.",
          "Logos, colors, typography, brand guidelines.",
          "Dummy detail: 10 mockups + animated logo intro.",
          "Dummy detail: Print-ready brand kit."
        ],
      },

      {
        id: "ui-ux-design",
        icon: "🖼️",
        title: "UI / UX Design",
        desc: [
          "Figma UI Kit + wireframes + design system.",
          "SaaS dashboards, apps, ecommerce & admin panels.",
          "Dummy detail: Interactive prototypes included.",
          "Dummy detail: Usability audit with improvement report."
        ],
      },

      {
        id: "animation-video",
        icon: "🎬",
        title: "Animation & Video Editing",
        desc: [
          "Reels, product videos, motion graphics.",
          "Transitions, VFX, captions, color grading.",
          "Dummy detail: 4K exports + YouTube optimization.",
          "Dummy detail: AI-powered auto captioning."
        ],
      },

      {
        id: "lead-generation",
        icon: "💰",
        title: "Lead Generation",
        desc: [
          "Google Ads + Meta Ads + funnel setup.",
          "CRM automation with WhatsApp & Email sequencing.",
          "Dummy detail: AI scoring for lead quality.",
          "Dummy detail: Custom reporting dashboard."
        ],
      },
    ],
    []
  );

  /* =======================
        SINGLE SERVICE MODE
     ======================= */

  const selected = id ? services.find((s) => s.id === id) : null;

  return (
    <div className="services-page">

      {/* HEADER */}
      <header className="service-header fade-up">
        <h1>{selected ? selected.title : "Our Services"}</h1>
        {!selected && (
          <p>
            Explore our full list of services. Click any service to view its dedicated page.
          </p>
        )}
      </header>

      {/* SINGLE PAGE VIEW */}
      {selected ? (
        <div className="services-container">
          <section className="service-block show">
            <div className="service-header-row">
              <span className="service-icon">{selected.icon}</span>
              <h2>{selected.title}</h2>
            </div>

            <div className="service-description">
              {selected.desc.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>

            <button className="enquiry-btn" onClick={() => navigate("/services")}>
              ← Back to All Services
            </button>
          </section>
        </div>
      ) : (
        /* LIST MODE */
        <div className="services-container">
          {services.map((srv, i) => (
            <section
              key={i}
              className="service-block show"
              onClick={() => navigate(`/services/${srv.id}`)} // <-- click to open page
            >
              <div className="service-header-row">
                <span className="service-icon">{srv.icon}</span>
                <h2>{srv.title}</h2>
              </div>

              <div className="service-description">
                {srv.desc.slice(0, 2).map((line, idx) => ( // show only 2 lines on list
                  <p key={idx}>{line}</p>
                ))}
                <p style={{ color: "#007bff", fontWeight: 700 }}>Click to read more →</p>
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
