import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaLinkedinIn, FaFacebookF, FaInstagram, FaChevronUp
} from 'react-icons/fa';
import './footer.css';
import TitleLogo from '../../assets/images/branding/TitleLogo.webp';
import { FLAREMINDS_PATH } from './flarePath';

export default function Footer() {
  const footerRef = useRef(null);
  const [isRevealActive, setIsRevealActive] = useState(
    () => typeof window !== 'undefined' && window.innerHeight >= 480
  );
  const [isFooterInView, setIsFooterInView] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const footerEl = footerRef.current;
    if (!footerEl || typeof IntersectionObserver === 'undefined') {
      setIsFooterInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(footerEl);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const footerEl = footerRef.current;
    if (!footerEl) return;

    const updateFooterHeight = () => {
      const vh = window.innerHeight;
      const height = footerEl.offsetHeight;

      // Fallback only if viewport is extremely short (e.g. landscape phone < 480px)
      if (vh < 480) {
        document.documentElement.style.setProperty('--footer-h', '0px');
        setIsRevealActive(false);
      } else {
        const fullHeight = Math.max(height, vh);
        document.documentElement.style.setProperty('--footer-h', `${fullHeight}px`);
        setIsRevealActive(true);
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      updateFooterHeight();
    });

    resizeObserver.observe(footerEl);
    window.addEventListener('resize', updateFooterHeight);

    // Initial measurement
    updateFooterHeight();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateFooterHeight);
      document.documentElement.style.removeProperty('--footer-h');
    };
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      ref={footerRef}
      className={`footer-modern footer-compact ${isRevealActive ? 'is-reveal' : ''}`}
      aria-label="Site Footer"
    >
      <div className="footer-container">
        {/* Column 1: Brand & Socials */}
        <div className="footer-col footer-brand-col">
          <div className="footer-logo">
            <img 
              src={TitleLogo} 
              alt="FLAREMINDS TECH PRIVATE LIMITED" 
              width="42" 
              height="42" 
              loading="lazy"
              decoding="async" 
              className="footer-logo-img" 
            />
          </div>
          <div className="footer-brand-divider"></div>
          <p className="footer-brand-desc">
            Empowering businesses through cutting-edge web &amp; app development, custom software engineering, and high-impact digital marketing solutions.
          </p>
          <div className="footer-socials" aria-label="Social media channels">
            <a href="https://www.linkedin.com/company/flareminds-rcm/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Visit FlareMinds on LinkedIn">
              <FaLinkedinIn aria-hidden="true" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100070869733184" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Visit FlareMinds on Facebook">
              <FaFacebookF aria-hidden="true" />
            </a>
            <a href="https://instagram.com/flareminds_tech?xtok=MThhNDl5NGhobzloNw%3D%3D" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Visit FlareMinds on Instagram">
              <FaInstagram aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Column 2: Company (Text Only) */}
        <div className="footer-col footer-links-col">
          <h4 className="footer-heading">Company</h4>
          <ul className="footer-links">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/our-works">Our Works</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Resources (Text Only) */}
        <div className="footer-col footer-links-col">
          <h4 className="footer-heading">Resources</h4>
          <ul className="footer-links">
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/our-works">Case Studies</Link>
            </li>
            <li>
              <Link to="/docs">Documentation</Link>
            </li>
            <li>
              <Link to="/faq">FAQs</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Big Display Banner - "FLAREMINDS" in tracked outline typography */}
      <div 
        className={`footer-big-text-wrap ${isFooterInView ? 'active' : ''}`} 
        aria-hidden="true"
      >
        <svg 
          className="footer-big-svg" 
          viewBox="0 0 1160 145" 
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="footerStrokeFadeDark" x1="0" y1="0" x2="0" y2="100%">
              <stop offset="0%" stopColor="rgba(56, 189, 248, 0.95)" />
              <stop offset="30%" stopColor="rgba(56, 189, 248, 0.75)" />
              <stop offset="65%" stopColor="rgba(14, 165, 233, 0.40)" />
              <stop offset="95%" stopColor="rgba(2, 132, 199, 0.15)" />
              <stop offset="100%" stopColor="rgba(2, 132, 199, 0)" />
            </linearGradient>
            <linearGradient id="footerStrokeFadeLight" x1="0" y1="0" x2="0" y2="100%">
              <stop offset="0%" stopColor="rgba(2, 132, 199, 0.85)" />
              <stop offset="30%" stopColor="rgba(14, 165, 233, 0.60)" />
              <stop offset="65%" stopColor="rgba(56, 189, 248, 0.30)" />
              <stop offset="95%" stopColor="rgba(56, 189, 248, 0.08)" />
              <stop offset="100%" stopColor="rgba(56, 189, 248, 0)" />
            </linearGradient>
          </defs>
          <path 
            d={FLAREMINDS_PATH}
            className="footer-big-path"
          />
        </svg>
      </div>

      {/* Integrated Single Footer Copyright Row */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-container">
          <div className="copyright">
            &copy; {new Date().getFullYear()} <span>FLAREMINDS</span> TECH PRIVATE LIMITED. All rights reserved.
          </div>

          <div className="footer-legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="legal-sep">·</span>
            <Link to="/terms">Terms of Service</Link>
          </div>

          <button 
            type="button" 
            className="scroll-top-btn" 
            onClick={scrollToTop} 
            aria-label="Scroll back to top"
          >
            <FaChevronUp aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}