import React from "react";
import SEO from "../components/common/SEO";
import { FaBalanceScale, FaFileContract, FaEnvelope, FaExclamationCircle } from "react-icons/fa";
import "../styles/pages/legal.css";

export default function Terms() {
  return (
    <div className="legal-page">
      <SEO
        title="Terms of Service | FLAREMINDS TECH PRIVATE LIMITED"
        description="Terms and conditions governing the use of FLAREMINDS TECH PRIVATE LIMITED website and digital services."
        canonical="https://www.flaremindstech.com/terms"
      />

      <div className="legal-container">
        <header className="legal-header">
          <div className="legal-badge">
            <FaBalanceScale /> Agreement & Terms
          </div>
          <h1 className="legal-title">Terms of Service</h1>
          <p className="legal-subtitle">Last updated: October 2026</p>
        </header>

        <div className="legal-card">
          <section>
            <h2><FaFileContract /> 1. Acceptance of Terms</h2>
            <p>
              By accessing or using the website of <strong>FLAREMINDS TECH PRIVATE LIMITED</strong> ("FlareMinds", "we", "us", or "our")
              located at <strong>https://www.flaremindstech.com</strong>, you agree to be bound by these Terms of Service and all applicable
              laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section>
            <h2>2. Services & Scope</h2>
            <p>
              FlareMinds provides software development, mobile application engineering, web design, digital marketing, business automation,
              and related technology consulting services. Specific deliverables, project milestones, pricing, and service level agreements (SLAs)
              are governed by individual client contracts and statements of work (SOWs) executed between FlareMinds and the client.
            </p>
          </section>

          <section>
            <h2>3. Intellectual Property Rights</h2>
            <p>
              All content on this website, including text, graphics, logos, images, software architecture previews, and design systems,
              is the property of FLAREMINDS TECH PRIVATE LIMITED or its licensors and is protected by copyright and intellectual property laws.
            </p>
            <p>
              You may not modify, distribute, publish, transmit, or create derivative works from any material on this website without
              prior written consent from FlareMinds.
            </p>
          </section>

          <section>
            <h2>4. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the website in any manner that could disable, overburden, damage, or impair site functionality.</li>
              <li>Attempt to gain unauthorized access to any portion of the website, server, or databases.</li>
              <li>Transmit any malicious code, viruses, or disruptive automation scripts.</li>
              <li>Misrepresent your identity or affiliation with any person or organization when submitting inquiry forms.</li>
            </ul>
          </section>

          <section>
            <h2><FaExclamationCircle /> 5. Disclaimer & Limitation of Liability</h2>
            <p>
              The materials on this website are provided on an "as is" and "as available" basis for informational and marketing purposes.
              FlareMinds makes no warranties, expressed or implied, regarding the accuracy, completeness, or reliability of site content.
            </p>
            <p>
              To the fullest extent permitted by applicable law, FLAREMINDS TECH PRIVATE LIMITED shall not be liable for any indirect,
              incidental, special, or consequential damages resulting from the use or inability to use this website.
            </p>
          </section>

          <section>
            <h2>6. Governing Law</h2>
            <p>
              These Terms of Service and any contractual disputes arising out of or related to this website shall be governed by and
              construed in accordance with the laws of India, under the jurisdiction of the courts located in Tamil Nadu, India.
            </p>
          </section>

          <section>
            <h2><FaEnvelope /> 7. Contact Information</h2>
            <p>
              For legal inquiries, contract clarifications, or notices regarding these Terms, please contact us:
            </p>
            <div className="legal-info-box">
              <ul className="legal-company-details">
                <li><strong>Entity:</strong> FLAREMINDS TECH PRIVATE LIMITED</li>
                <li><strong>Registered Office:</strong> 3rd Floor, SBI Bank Building, Anupparpalayam Pudur, Tiruppur, Tamil Nadu 641652, India</li>
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
