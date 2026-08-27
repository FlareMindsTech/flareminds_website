import React from "react";
import { FaCheck } from "react-icons/fa";

export default function ServiceFeatures({ service }) {
  if (!service || !service.features || service.features.length === 0) return null;

  const features = service.features.slice(0, 6);

  return (
    <section className="sd-features-section section-padding bg-light">
      <div className="container">
        <div className="section-header text-center mb-5">
          <span
            className="sd-section-badge"
            style={{
              backgroundColor: service.bgLight || "rgba(14, 165, 233, 0.08)",
              color: service.accent || "#0284c7",
            }}
          >
            Capabilities &amp; Features
          </span>
          <h2 className="section-title">
            Key <span className="text-gradient">Capabilities</span>
          </h2>
          <p className="section-subtitle text-muted">
            Engineered with deep technical precision to deliver robust functionality and seamless reliability.
          </p>
        </div>

        <div className="sd-features-grid">
          {features.map((feature, i) => (
            <div key={i} className="sd-feature-card glass-card">
              <div className="sd-feat-top">
                <span className="sd-feat-num">0{i + 1}</span>
                <span
                  className="sd-feat-icon-pill"
                  style={{
                    color: service.accent || "#0ea5e9",
                    backgroundColor: service.bgLight || "rgba(14, 165, 233, 0.08)",
                  }}
                >
                  <FaCheck />
                </span>
              </div>
              <h3 className="sd-feat-title">{feature.title}</h3>
              <p className="sd-feat-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
