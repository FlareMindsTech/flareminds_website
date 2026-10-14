import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/common/SEO";
import { FaHome, FaCompass, FaArrowRight, FaExclamationTriangle } from "react-icons/fa";
import "../styles/pages/not-found.css";

export default function NotFound() {
  return (
    <div className="not-found-page">
      <SEO
        title="404 - Page Not Found | FLAREMINDS TECH PRIVATE LIMITED"
        description="The page you are looking for does not exist or has been moved. Explore FlareMinds services, portfolio, and products."
        canonical="https://www.flaremindstech.com/404"
      />

      <div className="nf-container">
        <div className="nf-badge">
          <FaExclamationTriangle /> Page Not Found
        </div>

        <div className="nf-glitch-number" aria-hidden="true">
          404
        </div>

        <h1 className="nf-title">Lost in Cyberspace?</h1>

        <p className="nf-desc">
          The link you followed may be broken, or the page may have been relocated.
          Let’s get you back on track to exploring cutting-edge technology and digital solutions.
        </p>

        <div className="nf-actions">
          <Link to="/" className="nf-btn-primary">
            <FaHome /> Return to Home
          </Link>
          <Link to="/services" className="nf-btn-secondary">
            <FaCompass /> Explore Services
          </Link>
        </div>

        <div className="nf-quick-links">
          <div className="nf-quick-links-title">Popular Destinations</div>
          <div className="nf-quick-links-grid">
            <Link to="/about" className="nf-quick-link">About Us <FaArrowRight /></Link>
            <Link to="/our-works" className="nf-quick-link">Our Works <FaArrowRight /></Link>
            <Link to="/products" className="nf-quick-link">Products <FaArrowRight /></Link>
            <Link to="/contact" className="nf-quick-link">Contact Us <FaArrowRight /></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
