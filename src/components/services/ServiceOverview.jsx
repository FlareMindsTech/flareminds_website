import React from "react";
import { FaCheckCircle, FaLayerGroup, FaAward } from "react-icons/fa";

export default function ServiceOverview({ service }) {
  if (!service || !service.overview) return null;

  return (
    <section id="sd-overview" className="sd-overview section-padding">
      <div className="container">
        <div className="sd-overview-grid">
          {/* Left: Editorial Overview Narrative */}
          <div className="sd-overview-text">
            <span
              className="sd-section-badge"
              style={{
                backgroundColor: service.bgLight || "rgba(14, 165, 233, 0.08)",
                color: service.accent || "#0284c7",
              }}
            >
              Overview &amp; Purpose
            </span>
            <h2 className="section-title">{service.overview.title}</h2>
            <p className="sd-overview-body">{service.overview.text}</p>

            {/* If specific includes exist (e.g. Media production) */}
            {service.includes && (
              <div className="sd-includes">
                <h4 className="sd-includes-title">Core Deliverables Included:</h4>
                <ul className="sd-includes-list">
                  {service.includes.map((item, i) => (
                    <li key={i} className="sd-includes-item">
                      <FaCheckCircle className="icon-check" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right: Asymmetric Deliverables / Value Card */}
          <div className="sd-overview-card-col">
            <div className="sd-deliverables-card glass-card">
              <div className="sd-deliv-header">
                <div className="sd-deliv-icon">
                  <FaLayerGroup />
                </div>
                <div>
                  <h3 className="sd-deliv-title">Production Quality Promise</h3>
                  <small className="text-muted">Direct business value delivered</small>
                </div>
              </div>

              <div className="sd-deliv-checklist">
                <div className="sd-deliv-check-item">
                  <FaCheckCircle className="icon-check" />
                  <div>
                    <strong>Tailored Solution Architecture</strong>
                    <p>Designed specifically to match your operational workflows.</p>
                  </div>
                </div>
                <div className="sd-deliv-check-item">
                  <FaCheckCircle className="icon-check" />
                  <div>
                    <strong>Clean, Maintainable Codebase</strong>
                    <p>Documented, modular engineering built for long-term scale.</p>
                  </div>
                </div>
                <div className="sd-deliv-check-item">
                  <FaCheckCircle className="icon-check" />
                  <div>
                    <strong>Full IP Ownership</strong>
                    <p>100% codebase, asset, and deployment control handed over to you.</p>
                  </div>
                </div>
              </div>

              <div className="sd-deliv-badge-footer">
                <FaAward className="text-sky-500" />
                <span>Engineered by FlareMinds Senior Specialists</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
