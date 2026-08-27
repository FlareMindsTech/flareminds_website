import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "../common/SEO";
import { servicesBySlug } from "../../data/servicesData";
import { getServiceSchema, getFAQSchema, getBreadcrumbSchema } from "../../utils/structuredData";
import ServiceHero from "../services/ServiceHero";
import ServiceHighlights from "../services/ServiceHighlights";
import ServiceOverview from "../services/ServiceOverview";
import ServiceFeatures from "../services/ServiceFeatures";
import ServiceBenefits from "../services/ServiceBenefits";
import ServiceProcess from "../services/ServiceProcess";
import ServiceTechStack from "../services/ServiceTechStack";
import ServiceProjects from "../services/ServiceProjects";
import ServiceFAQ from "../services/ServiceFAQ";
import ServiceCTA from "../services/ServiceCTA";
import "../../styles/pages/service-detail.css";

export default function ServicePageTemplate({ slug }) {
  const service = servicesBySlug[slug];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!service) {
    return (
      <div className="sd-not-found">
        <div className="sd-not-found-inner">
          <div className="sd-not-found-icon">🔍</div>
          <h1 className="sd-not-found-title">Service Not Found</h1>
          <p className="sd-not-found-text">
            We could not find a service at <code>/services/{slug}</code>.
          </p>
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    );
  }

  const pageTitle = `${service.title} | FlareMinds`;
  const pageDescription = service.heroDescription || service.overview?.text;
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.title, path: `/services/${slug}` },
  ];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      getServiceSchema({ title: service.title, description: pageDescription }),
      getFAQSchema(service.faq || []),
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

      {/* ── 1. Service Hero with Asymmetric UI Mockup Visual ─────────── */}
      <ServiceHero service={service} slug={slug} />

      {/* ── 2. Highlights Ribbon ──────────────────────────────────────── */}
      <ServiceHighlights />

      {/* ── 3. Service Overview & Deliverables ────────────────────────── */}
      <ServiceOverview service={service} />

      {/* ── 4. Key Capabilities / Features Grid ──────────────────────── */}
      <ServiceFeatures service={service} />

      {/* ── 5. Business Benefits ──────────────────────────────────────── */}
      <ServiceBenefits service={service} />

      {/* ── 6. Process / Roadmap ──────────────────────────────────────── */}
      <ServiceProcess service={service} />

      {/* ── 7. Technologies Matrix ────────────────────────────────────── */}
      <ServiceTechStack service={service} />

      {/* ── 8. Related Case Studies / Projects ────────────────────────── */}
      <ServiceProjects service={service} />

      {/* ── 9. Accessible FAQ Accordion ───────────────────────────────── */}
      <ServiceFAQ service={service} />

      {/* ── 10. High-Impact Final CTA ─────────────────────────────────── */}
      <ServiceCTA service={service} />
    </div>
  );
}
