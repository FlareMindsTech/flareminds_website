import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCommentDots, FaFolderOpen } from "react-icons/fa";

export default function ServiceCTA({ service }) {
  const serviceTitle = service?.title || "Digital Product";

  return (
    <section className="sd-cta-section section-padding">
      <div className="container">
        <div className="sd-cta-card glass-card">
          <div className="sd-cta-badge">
            <span className="sd-cta-dot" /> Let's Collaborate
          </div>
          <h2 className="sd-cta-heading">
            Have a Project in Mind?
          </h2>
          <p className="sd-cta-description">
            Let's build a secure, high-performance {serviceTitle.toLowerCase()} that delivers real results for your business.
          </p>
          <div className="sd-cta-button-group">
            <Link to="/contact" className="btn-primary glow-effect">
              <FaCommentDots style={{ marginRight: 8 }} /> Start a Conversation
            </Link>
            <Link to="/our-works" className="btn-outline">
              <FaFolderOpen style={{ marginRight: 8 }} /> Explore Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
