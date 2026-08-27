import React from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaFolderOpen } from "react-icons/fa";

export default function ServiceProjects({ service }) {
  if (!service || !service.relatedProjects || service.relatedProjects.length === 0) return null;

  return (
    <section className="sd-projects-section section-padding bg-light">
      <div className="container">
        <div className="section-header text-center mb-5">
          <span
            className="sd-section-badge"
            style={{
              backgroundColor: service.bgLight || "rgba(14, 165, 233, 0.08)",
              color: service.accent || "#0284c7",
            }}
          >
            Track Record
          </span>
          <h2 className="section-title">
            Featured <span className="text-gradient">Case Studies</span>
          </h2>
          <p className="section-subtitle text-muted">
            Real-world digital products we've engineered to deliver measurable outcomes.
          </p>
        </div>

        <div className="sd-projects-grid">
          {service.relatedProjects.map((project, i) => (
            <div key={i} className="sd-project-card glass-card">
              <div className="sd-proj-top">
                <span className="sd-proj-cat">{project.category || service.title}</span>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sd-proj-link-icon"
                    aria-label={`View ${project.name}`}
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
              <h3 className="sd-proj-name">{project.name}</h3>
              <p className="sd-proj-desc">{project.description}</p>

              {project.tags && project.tags.length > 0 && (
                <div className="sd-proj-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="sd-proj-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <Link to="/our-works" className="btn-outline">
            <FaFolderOpen style={{ marginRight: 8 }} /> Browse All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
