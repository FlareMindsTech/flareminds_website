import React from "react";
import { FaCode } from "react-icons/fa";

export default function ServiceTechStack({ service }) {
  if (!service || !service.technologies || service.technologies.length === 0) return null;

  return (
    <section className="sd-tech-section section-padding">
      <div className="container">
        <div className="section-header text-center mb-5">
          <span
            className="sd-section-badge"
            style={{
              backgroundColor: service.bgLight || "rgba(14, 165, 233, 0.08)",
              color: service.accent || "#0284c7",
            }}
          >
            Tools &amp; Frameworks
          </span>
          <h2 className="section-title">
            Technologies &amp; <span className="text-gradient">Platforms</span>
          </h2>
          <p className="section-subtitle text-muted">
            Modern, industry-standard toolsets selected for security, speed, and maintainability.
          </p>
        </div>

        <div className="sd-tech-grid">
          {service.technologies.map((tech, i) => (
            <div key={i} className="sd-tech-card glass-card">
              <div className="sd-tech-icon-bullet">
                <FaCode />
              </div>
              <span className="sd-tech-name">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
