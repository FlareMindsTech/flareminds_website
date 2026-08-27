import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaLinkedinIn, FaTwitter, FaGithub, FaInstagram,
  FaBook, FaFileAlt, FaFileCode, FaQuestionCircle,
  FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaShieldAlt, FaChevronUp
} from 'react-icons/fa';
import './footer.css';
import TitleLogo from '../../assets/images/branding/TitleLogo.webp';

export default function Footer() {
  const [hqTime, setHqTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        }).format(new Date());
        setHqTime(timeStr);
      } catch {
        setHqTime(new Date().toLocaleTimeString());
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-modern footer-compact" aria-label="Site Footer">
      {/* Dynamic Aurora Horizon Layer (Low profile) */}
      <div className="aurora-horizon" aria-hidden="true">
        <div className="aurora-glow-ambient"></div>
        <svg className="aurora-wave aurora-wave-back" viewBox="0 0 1440 220" preserveAspectRatio="none">
          <defs>
            <linearGradient id="auroraGradBack" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0495C5" stopOpacity="0.35" />
              <stop offset="50%" stopColor="#6366f1" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <path
            fill="url(#auroraGradBack)"
            d="M0,130L60,120C120,110,240,90,360,95C480,105,600,140,720,145C840,150,960,120,1080,100C1200,80,1320,75,1380,70L1440,65L1440,220L1380,220C1320,220,1200,220,1080,220C960,220,840,220,720,220C600,220,480,220,360,220C240,220,120,220,60,220L0,220Z"
          ></path>
        </svg>

        <svg className="aurora-wave aurora-wave-mid" viewBox="0 0 1440 220" preserveAspectRatio="none">
          <defs>
            <linearGradient id="auroraGradMid" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.5" />
              <stop offset="45%" stopColor="#38bdf8" stopOpacity="0.3" />
              <stop offset="85%" stopColor="#8b5cf6" stopOpacity="0.45" />
            </linearGradient>
          </defs>
          <path
            fill="url(#auroraGradMid)"
            d="M0,70L48,80C96,90,192,110,288,120C384,130,480,130,576,115C672,100,768,75,864,80C960,85,1056,120,1152,125C1248,130,1344,110,1392,100L1440,90L1440,220L1392,220C1344,220,1248,220,1152,220C1056,220,960,220,864,220C768,220,672,220,576,220C480,220,384,220,288,220C192,220,96,220,48,220L0,220Z"
          ></path>
        </svg>

        <svg className="aurora-wave aurora-wave-front" viewBox="0 0 1440 220" preserveAspectRatio="none">
          <defs>
            <linearGradient id="auroraGradFront" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#0284c7" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#9333ea" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            fill="url(#auroraGradFront)"
            d="M0,150L48,140C96,130,192,110,288,100C384,90,480,90,576,100C672,110,768,130,864,135C960,140,1056,125,1152,110C1248,95,1344,80,1392,75L1440,65L1440,220L1392,220C1344,220,1248,220,1152,220C1056,220,960,220,864,220C768,220,672,220,576,220C480,220,384,220,288,220C192,220,96,220,48,220L0,220Z"
          ></path>
        </svg>
      </div>

      <div className="footer-container">
        {/* Deck 1: Brand & Socials */}
        <div className="footer-deck footer-brand-deck">
          <div className="footer-logo">
            <img 
              src={TitleLogo} 
              alt="FlareMinds Technology" 
              width="140" 
              height="38" 
              loading="lazy"
              decoding="async" 
              className="footer-logo-img" 
            />
          </div>
          <div className="footer-brand-divider"></div>
          <p className="footer-brand-desc">
            Empowering brands through innovation, technology, and impactful engineering — shaping the future with mindful magic.
          </p>
          <div className="footer-socials" aria-label="Social media channels">
            <a href="https://www.linkedin.com/company/flareminds-technology-and-services/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Visit FlareMinds on LinkedIn">
              <FaLinkedinIn aria-hidden="true" />
            </a>
            {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Visit FlareMinds on Twitter">
              <FaTwitter aria-hidden="true" />
            </a> */}
            <a href="https://github.com/FlareMindsTech" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Visit FlareMinds on GitHub">
              <FaGithub aria-hidden="true" />
            </a>
            <a href="https://www.instagram.com/flareminds_tech?igsi=Nm5ueTFyYW40ODlt&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Visit FlareMinds on Instagram">
              <FaInstagram aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Deck 2: Quick Links */}
        <div className="footer-deck footer-links-deck">
          <h4 className="footer-heading">Resources</h4>
          <ul className="footer-links">
            <li>
              <Link to="/blog">
                <span className="link-icon-wrap"><FaBook className="link-icon" /></span>
                <span>Blog</span>
              </Link>
            </li>
            <li>
              <Link to="/case-studies">
                <span className="link-icon-wrap"><FaFileAlt className="link-icon" /></span>
                <span>Case Studies</span>
              </Link>
            </li>
            <li>
              <Link to="/docs">
                <span className="link-icon-wrap"><FaFileCode className="link-icon" /></span>
                <span>Documentation</span>
              </Link>
            </li>
            <li>
              <Link to="/faq">
                <span className="link-icon-wrap"><FaQuestionCircle className="link-icon" /></span>
                <span>FAQs</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Deck 3: Contact Info */}
        <div className="footer-deck footer-contact-deck">
          <h4 className="footer-heading">Get In Touch</h4>
          <div className="contact-info-list">
            <a href="mailto:info@flaremindstech.com" className="contact-item">
              <div className="contact-icon"><FaEnvelope aria-hidden="true" /></div>
              <div className="contact-text">
                <span className="label">Email</span>
                <span className="value">info@flaremindstech.com</span>
              </div>
            </a>
            <a href="tel:+919500950813" className="contact-item">
              <div className="contact-icon"><FaPhoneAlt aria-hidden="true" /></div>
              <div className="contact-text">
                <span className="label">Phone</span>
                <span className="value">+91 9500950813</span>
              </div>
            </a>
            <div className="contact-item">
              <div className="contact-icon"><FaMapMarkerAlt aria-hidden="true" /></div>
              <div className="contact-text">
                <span className="label">Location</span>
                <span className="value">Tiruppur, Tamil Nadu, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Status & Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-container">
          
          {/* Live Operational & HQ Status Radar */}
          <div className="footer-status-pill" title="Real-time operational status and headquarters time">
            <span className="radar-dot">
              <span className="radar-ping"></span>
            </span>
            <span className="status-label">Operational</span>
            <span className="status-separator">•</span>
            <span className="status-time">HQ {hqTime || '10:50 AM IST'}</span>
          </div>

          <div className="trusted-badge">
            <FaShieldAlt className="trusted-icon" /> Trusted by 100+ clients worldwide
          </div>

          <div className="copyright-group">
            <div className="copyright">
              &copy; {new Date().getFullYear()} <span>FlareMinds</span> Technology.
            </div>
            <div className="footer-legal-links">
              <Link to="/privacy">Privacy</Link>
              <span className="legal-sep">|</span>
              <Link to="/terms">Terms</Link>
            </div>
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