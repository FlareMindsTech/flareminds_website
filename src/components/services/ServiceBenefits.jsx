import React from "react";
import { FaCheckCircle, FaRocket } from "react-icons/fa";

export default function ServiceBenefits({ service }) {
  if (!service || !service.benefits || service.benefits.length === 0) return null;

  return (
    <section className="sd-benefits-section section-padding">
      <div className="container">
        <div className="section-header text-center mb-5">
          <span
            className="sd-section-badge"
            style={{
              backgroundColor: service.bgLight || "rgba(14, 165, 233, 0.08)",
              color: service.accent || "#0284c7",
            }}
          >
            Business Impact
          </span>
          <h2 className="section-title">
            Why It Matters for <span className="text-gradient">Your Business</span>
          </h2>
          <p className="section-subtitle text-muted">
            Tangible advantages that translate into real-world efficiency, enhanced brand authority, and sustainable growth.
          </p>
        </div>

        <div className="sd-benefits-grid">
          {service.benefits.map((benefit, i) => (
            <div key={i} className="sd-benefit-card glass-card">
              <div className="sd-benefit-icon-row">
                <span className="sd-benefit-check">
                  <FaCheckCircle />
                </span>
                <span className="sd-benefit-tag">Strategic Advantage</span>
              </div>
              <h3 className="sd-benefit-title">{benefit.title}</h3>
              <p className="sd-benefit-desc">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
