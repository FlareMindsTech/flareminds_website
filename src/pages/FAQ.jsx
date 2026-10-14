import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/common/SEO";
import { getFAQSchema } from "../utils/structuredData";
import { FaQuestionCircle, FaChevronDown, FaEnvelope, FaArrowRight } from "react-icons/fa";
import "../styles/pages/faq.css";

const FAQ_DATA = [
  {
    q: "What services does FLAREMINDS TECH PRIVATE LIMITED provide?",
    a: "We offer end-to-end digital solutions including Website Design & Development, Mobile Application Development (iOS & Android with React Native / Flutter), E-Commerce Platforms, Custom Enterprise Software (ERP, CRM, HRMS), Search Engine Optimization (SEO), Performance Marketing, and Technology Training programs."
  },
  {
    q: "How does the project onboarding and consultation process work?",
    a: "Our process begins with an initial discovery call to understand your business objectives and technical requirements. Next, we prepare a detailed project proposal, timeline roadmap, and architecture scope. Once approved, we commence UX/UI wireframing, agile development sprints, client reviews, testing, and cloud deployment."
  },
  {
    q: "Do you offer post-launch maintenance and technical support?",
    a: "Yes. Every custom software and website deployment includes warranty support. We also provide ongoing Monthly Maintenance & SLA Support packages covering security patching, cloud monitoring, uptime guarantees, performance optimization, and feature additions."
  },
  {
    q: "What technology stack does FlareMinds specialize in?",
    a: "Our engineering core centers around modern, high-performance stacks including React, Next.js, Node.js, Express, MongoDB, PostgreSQL, React Native, Flutter, Tailwind CSS, Python, and scalable cloud platforms such as AWS, Google Cloud, and Render."
  },
  {
    q: "How do you handle project confidentiality and intellectual property?",
    a: "Client security and IP protection are paramount. We sign comprehensive Non-Disclosure Agreements (NDAs) before discussing sensitive project data. Upon final delivery and payment, full ownership of the source code and associated intellectual property belongs exclusively to the client."
  },
  {
    q: "How can I request a quote or get in touch for a new project?",
    a: "You can submit an inquiry through our Contact Us page, email us directly at info@flaremindstech.com, or call our offices at +91 9500950813. Our team typically responds within 2 business hours."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const faqSchema = getFAQSchema(FAQ_DATA);

  return (
    <div className="faq-page">
      <SEO
        title="Frequently Asked Questions (FAQ) | FLAREMINDS TECH PRIVATE LIMITED"
        description="Find answers to common questions about FlareMinds web development, mobile apps, enterprise software, pricing, and project workflows."
        canonical="https://www.flaremindstech.com/faq"
        schema={faqSchema}
      />

      <div className="faq-container">
        <header className="faq-header">
          <div className="faq-badge">
            <FaQuestionCircle /> Help & Guidance
          </div>
          <h1 className="faq-title">Frequently Asked Questions</h1>
          <p className="faq-subtitle">
            Everything you need to know about partnering with FlareMinds for your digital and engineering needs.
          </p>
        </header>

        <div className="faq-list">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className={`faq-item ${isOpen ? "open" : ""}`}>
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className="faq-icon-toggle" aria-hidden="true">
                    <FaChevronDown />
                  </span>
                </button>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="faq-cta-box">
          <h3>Have a question that isn't answered here?</h3>
          <p>Our engineering and consultation team is always ready to assist you.</p>
          <Link to="/contact" className="faq-cta-btn">
            <FaEnvelope /> Contact Us Today <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
