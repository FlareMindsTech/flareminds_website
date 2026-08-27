import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function ServiceFAQ({ service }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!service || !service.faq || service.faq.length === 0) return null;

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="sd-faq-section section-padding">
      <div className="container">
        <div className="section-header text-center mb-5">
          <span
            className="sd-section-badge"
            style={{
              backgroundColor: service.bgLight || "rgba(14, 165, 233, 0.08)",
              color: service.accent || "#0284c7",
            }}
          >
            Clear Answers
          </span>
          <h2 className="section-title">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="section-subtitle text-muted">
            Have questions about our process, deliverables, or timelines? Find quick answers here.
          </p>
        </div>

        <div className="sd-faq-accordion">
          {service.faq.map((item, i) => {
            const isOpen = openIndex === i;
            const faqId = `sd-faq-answer-${i}`;
            const btnId = `sd-faq-btn-${i}`;

            return (
              <div
                key={i}
                className={`sd-faq-item glass-card ${isOpen ? "open" : ""}`}
              >
                <button
                  id={btnId}
                  className="sd-faq-trigger"
                  onClick={() => toggleAccordion(i)}
                  aria-expanded={isOpen}
                  aria-controls={faqId}
                >
                  <span className="sd-faq-question">{item.q}</span>
                  <span className={`sd-faq-icon ${isOpen ? "rotated" : ""}`}>
                    <FaChevronDown />
                  </span>
                </button>
                <div
                  id={faqId}
                  role="region"
                  aria-labelledby={btnId}
                  className={`sd-faq-panel ${isOpen ? "open" : ""}`}
                >
                  <div className="sd-faq-panel-inner">
                    <p className="sd-faq-answer">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
