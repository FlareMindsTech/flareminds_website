import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaLinkedinIn, FaTwitter, FaGithub, FaInstagram,
  FaHome, FaThLarge, FaUser, FaBox, FaPen, FaEnvelope,
  FaBook, FaFileAlt, FaFileCode, FaShieldAlt, FaFileContract, FaQuestionCircle,
  FaChevronRight, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane, FaChevronUp
} from 'react-icons/fa';
import './css/footer.css';
import TitleLogo from '../assets/TitleLogo.png';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-modern">
      <div className="footer-wave-bg"></div>
      <div className="footer-container">
        
        {/* Column 1: Brand & Social */}
        <div className="footer-col footer-brand-col">
          <div className="footer-logo">
            <img src={TitleLogo} alt="FlareMinds" style={{ height: '70px', objectFit: 'contain' }} />
          </div>
          <div className="footer-brand-divider"></div>
          <div className="footer-brand-desc">
            Empowering brands through<br/>
            innovation, technology, and<br/>
            impactful design.
          </div>
          <div className="footer-socials">
            <a href="#" className="social-icon" aria-label="Visit FlareMinds on LinkedIn"><FaLinkedinIn aria-hidden="true" /></a>
            <a href="#" className="social-icon" aria-label="Visit FlareMinds on Twitter"><FaTwitter aria-hidden="true" /></a>
            <a href="#" className="social-icon" aria-label="Visit FlareMinds on GitHub"><FaGithub aria-hidden="true" /></a>
            <a href="#" className="social-icon" aria-label="Visit FlareMinds on Instagram"><FaInstagram aria-hidden="true" /></a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/"><FaHome className="link-icon" /> Home <FaChevronRight className="caret" /></Link></li>
            <li><Link to="/services"><FaThLarge className="link-icon" /> Services <FaChevronRight className="caret" /></Link></li>
            <li><Link to="/about"><FaUser className="link-icon" /> About <FaChevronRight className="caret" /></Link></li>
            <li><Link to="/products"><FaBox className="link-icon" /> Products <FaChevronRight className="caret" /></Link></li>
            <li><Link to="/blog"><FaPen className="link-icon" /> Blog <FaChevronRight className="caret" /></Link></li>
            <li><Link to="/contact"><FaEnvelope className="link-icon" /> Contact Us <FaChevronRight className="caret" /></Link></li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div className="footer-col">
          <h4 className="footer-heading">Resources</h4>
          <ul className="footer-links">
            <li><Link to="/blog"><FaBook className="link-icon" /> Blog <FaChevronRight className="caret" /></Link></li>
            <li><Link to="/case-studies"><FaFileAlt className="link-icon" /> Case Studies <FaChevronRight className="caret" /></Link></li>
            <li><Link to="/docs"><FaFileCode className="link-icon" /> Documentation <FaChevronRight className="caret" /></Link></li>
            <li><Link to="/privacy"><FaShieldAlt className="link-icon" /> Privacy Policy <FaChevronRight className="caret" /></Link></li>
            <li><Link to="/terms"><FaFileContract className="link-icon" /> Terms of Service <FaChevronRight className="caret" /></Link></li>
            <li><Link to="/faq"><FaQuestionCircle className="link-icon" /> FAQs <FaChevronRight className="caret" /></Link></li>
          </ul>
        </div>

        {/* Column 4: Get In Touch */}
        <div className="footer-col footer-contact-col">
          <h4 className="footer-heading">Get In Touch</h4>
          <div className="contact-info-list">
            <div className="contact-item">
              <div className="contact-icon"><FaEnvelope /></div>
              <div className="contact-text">
                <span className="label">Email</span>
                <span className="value">info@flaremindstech.com</span>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><FaPhoneAlt /></div>
              <div className="contact-text">
                <span className="label">Phone</span>
                <span className="value">+91 9500950813</span>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><FaMapMarkerAlt /></div>
              <div className="contact-text">
                <span className="label">Address</span>
                <span className="value">Coimbatore, Tamil Nadu, India</span>
              </div>
            </div>
          </div>
          <div className="cta-box">
            <div className="cta-icon"><FaPaperPlane /></div>
            <div className="cta-content">
              <h5>Let's Work Together</h5>
              <p>Have a project in mind?</p>
              <Link to="/contact">Contact us today &rarr;</Link>
            </div>
          </div>
        </div>

      </div>

      <div className="footer-bottom-bar">
        <div className="footer-bottom-container">
          <div className="trusted-badge">
            <FaShieldAlt className="trusted-icon" /> Trusted by 100+ clients worldwide
          </div>
          <div className="copyright">
            &copy; {new Date().getFullYear()} <span>FlareMinds</span> Technology & Services. All rights reserved.
          </div>
          <button type="button" className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
            <FaChevronUp aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
