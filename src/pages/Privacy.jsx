import React from "react";
import SEO from "../components/common/SEO";
import { FaShieldAlt, FaLock, FaUserShield, FaEnvelope } from "react-icons/fa";
import "../styles/pages/legal.css";

export default function Privacy() {
  return (
    <div className="legal-page">
      <SEO
        title="Privacy Policy | FLAREMINDS TECH PRIVATE LIMITED"
        description="Learn how FLAREMINDS TECH PRIVATE LIMITED collects, uses, and protects personal information on our website and digital services."
        canonical="https://www.flaremindstech.com/privacy"
      />

      <div className="legal-container">
        <header className="legal-header">
          <div className="legal-badge">
            <FaShieldAlt /> Legal & Compliance
          </div>
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-subtitle">Last updated: October 2026</p>
        </header>

        <div className="legal-card">
          <section>
            <h2><FaUserShield /> 1. Overview</h2>
            <p>
              This Privacy Policy describes how <strong>FLAREMINDS TECH PRIVATE LIMITED</strong> ("FlareMinds", "we", "our", or "us")
              handles personal information collected through our website (<strong>https://www.flaremindstech.com</strong>) and
              associated communication channels.
            </p>
            <p>
              We are committed to respecting your privacy and handling inquiries, communications, and client project data responsibly.
            </p>
          </section>

          <section>
            <h2><FaLock /> 2. Information We Collect</h2>
            <p>When you interact with our website, we may collect the following information:</p>
            <ul>
              <li>
                <strong>Contact Information:</strong> Name, business email address, phone number, and project descriptions submitted via our contact and project inquiry forms.
              </li>
              <li>
                <strong>Automated Technical Data:</strong> Browser type, operating system, referring URL, and pages visited, collected via standard server logs and analytical tools to maintain website performance and user experience.
              </li>
              <li>
                <strong>Communication Records:</strong> Records of inquiries, messages, and feedback exchanged through email or form submissions.
              </li>
            </ul>
          </section>

          <section>
            <h2>3. How We Use Your Information</h2>
            <p>We use the collected information solely for legitimate business purposes, including:</p>
            <ul>
              <li>Responding to project inquiries, requests for quotations, and consultations.</li>
              <li>Providing, maintaining, and improving our software engineering, web development, and digital marketing services.</li>
              <li>Sending administrative notifications, project updates, or requested proposals.</li>
              <li>Analyzing website traffic to improve user interface design and service offerings.</li>
            </ul>
          </section>

          <section>
            <h2>4. Data Sharing & Third Parties</h2>
            <p>
              We do not sell, rent, or trade your personal information to third parties. We may share data only under the following circumstances:
            </p>
            <ul>
              <li>
                <strong>Authorized Service Providers:</strong> Trusted infrastructure and communication providers (such as email delivery and hosting services) who assist in delivering our services under confidentiality obligations.
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by applicable law, regulation, legal process, or governmental request.
              </li>
            </ul>
          </section>

          <section>
            <h2>5. Data Security & Retention</h2>
            <p>
              We employ standard technical and administrative safeguards to protect your data against unauthorized access, loss, or alteration. We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy or to comply with statutory legal requirements.
            </p>
          </section>

          <section>
            <h2>6. Your Rights</h2>
            <p>
              Depending on your jurisdiction, you may have the right to request access to, correction of, or deletion of your personal data held by us. To submit such a request, please contact us using the verified contact details below.
            </p>
          </section>

          <section>
            <h2><FaEnvelope /> 7. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy, please contact our administrative team:
            </p>
            <div className="legal-info-box">
              <ul className="legal-company-details">
                <li><strong>Entity:</strong> FLAREMINDS TECH PRIVATE LIMITED</li>
                <li><strong>Registered Address:</strong> 3rd Floor, SBI Bank Building, Anupparpalayam Pudur, Tiruppur, Tamil Nadu 641652, India</li>
                <li><strong>Email:</strong> <a href="mailto:info@flaremindstech.com">info@flaremindstech.com</a></li>
                <li><strong>Phone:</strong> <a href="tel:+919500950813">+91 9500950813</a></li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
