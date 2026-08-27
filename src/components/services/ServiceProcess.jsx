import React from "react";

export default function ServiceProcess({ service }) {
  if (!service || !service.roadmap || service.roadmap.length === 0) return null;

  return (
    <section className="sd-process-section section-padding bg-light">
      <div className="container">
        <div className="section-header text-center mb-5">
          <span
            className="sd-section-badge"
            style={{
              backgroundColor: service.bgLight || "rgba(14, 165, 233, 0.08)",
              color: service.accent || "#0284c7",
            }}
          >
            Structured Process
          </span>
          <h2 className="section-title">
            How We <span className="text-gradient">Deliver Results</span>
          </h2>
          <p className="section-subtitle text-muted">
            A transparent, milestone-driven execution methodology ensuring quality, speed, and precision from day one.
          </p>
        </div>

        <div className="sd-process-timeline">
          <div className="sd-timeline-track" />
          <div className="sd-timeline-grid">
            {service.roadmap.map((step, i) => (
              <div key={i} className="sd-process-step glass-card">
                <div className="sd-step-badge-wrap">
                  <div
                    className="sd-step-badge"
                    style={{
                      borderColor: service.accent || "#0ea5e9",
                      color: service.accent || "#0284c7",
                      backgroundColor: service.bgLight || "rgba(14, 165, 233, 0.08)",
                    }}
                  >
                    {step.step || `0${i + 1}`}
                  </div>
                </div>
                <div className="sd-step-body">
                  <h3 className="sd-step-title">{step.title}</h3>
                  <p className="sd-step-desc">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
