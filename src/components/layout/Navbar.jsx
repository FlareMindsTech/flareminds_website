import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/branding/cropped-fm-logo-2-1.webp";
import "./navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Development");
  const [mobileAccordion, setMobileAccordion] = useState({});
  const [isPointer, setIsPointer] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const servicesRef = useRef(null);
  const closeServicesTimeout = useRef(null);

  /* ── Scroll detection ── */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── Pointer detection ── */
  useEffect(() => {
    const detect = () => setIsPointer(true);
    window.addEventListener("mousemove", detect, { once: true });
    return () => window.removeEventListener("mousemove", detect);
  }, []);

  /* ── Click outside to close dropdown ── */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ── Close on route change ── */
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const serviceCategories = useMemo(
    () => [
      {
        title: "Development",
        sidebarIcon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
          </svg>
        ),
        items: [
          {
            label: "Website Development",
            description: "Professional, responsive websites for startups and enterprises.",
            tags: ["React", "Next.js", "MERN"],
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            ),
            iconBg: "#ede9fe",
            iconColor: "#7c3aed",
            to: "/services/website-development",
          },
          {
            label: "Mobile App Development",
            description: "High-performance Android and cross-platform mobile apps.",
            tags: ["React Native", "Expo"],
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" />
                <line x1="12" y1="18" x2="12" y2="18" />
              </svg>
            ),
            iconBg: "#fce7f3",
            iconColor: "#be185d",
            to: "/services/mobile-app-development",
          },
          {
            label: "E-Commerce Solutions",
            description: "Scalable online shopping platforms with secure payments.",
            tags: ["Shopify", "WooCommerce", "MERN"],
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            ),
            iconBg: "#fff7ed",
            iconColor: "#ea580c",
            to: "/services/e-commerce-solutions",
          },
          {
            label: "Business Applications",
            description: "Custom CRM, ERP, HRMS, dashboards, and enterprise software.",
            tags: ["CRM", "ERP", "HRMS"],
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                <line x1="12" y1="12" x2="12" y2="16" />
                <line x1="10" y1="14" x2="14" y2="14" />
              </svg>
            ),
            iconBg: "#ccfbf1",
            iconColor: "#0d9488",
            to: "/services/business-applications",
          },
          {
            label: "Service Marketplace",
            description: "On-demand booking platforms and multi-vendor marketplaces.",
            tags: ["Booking", "Marketplace"],
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            ),
            iconBg: "#fff7ed",
            iconColor: "#f97316",
            to: "/services/service-marketplace",
          },
          {
            label: "Custom Software Development",
            description: "Tailor-made software to automate and scale your business.",
            tags: ["Automation", "SaaS", "API"],
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            ),
            iconBg: "#eef2ff",
            iconColor: "#6366f1",
            to: "/services/custom-software-development",
          },
        ],
      },
      {
        title: "Marketing",
        sidebarIcon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        ),
        items: [
          {
            label: "SEO & Analytics",
            description: "Data-driven SEO strategies to rank higher and grow traffic.",
            tags: ["Google Analytics", "SEMrush"],
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
              </svg>
            ),
            iconBg: "#eff6ff",
            iconColor: "#2563eb",
            to: "/services/seo-analytics",
          },
          {
            label: "Social Media Marketing",
            description: "Grow your brand on Instagram, Facebook, LinkedIn & YouTube.",
            tags: ["Instagram", "Meta Ads", "LinkedIn"],
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
            ),
            iconBg: "#fdf4ff",
            iconColor: "#9333ea",
            to: "/services/social-media-marketing",
          },
          {
            label: "Performance Marketing",
            description: "Google Ads, Meta Ads, and ROI-focused advertising campaigns.",
            tags: ["Google Ads", "Meta Ads", "ROAS"],
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            ),
            iconBg: "#fff1f2",
            iconColor: "#ef4444",
            to: "/services/performance-marketing",
          },
          {
            label: "Branding & Creative Design",
            description: "Logo design, brand identity, and marketing collaterals.",
            tags: ["Logo", "Brand Guide", "Creatives"],
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2.5" />
                <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2.5" />
              </svg>
            ),
            iconBg: "#fdf2f8",
            iconColor: "#ec4899",
            to: "/services/branding-creative-design",
          },
          {
            label: "Creative Media Production",
            description: "Professional video shoots, photography, and Reels creation.",
            tags: ["Video", "Photography", "Reels"],
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="23 7 16 12 23 17 23 7" />
                <rect x="1" y="5" width="15" height="14" rx="2" />
              </svg>
            ),
            iconBg: "#fffbeb",
            iconColor: "#f59e0b",
            to: "/services/creative-media-production",
          },
          {
            label: "Content Marketing",
            description: "SEO blogs, website copy, and marketing content that converts.",
            tags: ["Blogs", "Copywriting", "Email"],
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
            ),
            iconBg: "#ecfdf5",
            iconColor: "#10b981",
            to: "/services/content-marketing",
          },
        ],
      },
      {
        title: "Training",
        sidebarIcon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
        ),
        items: [
          {
            label: "MERN Stack Development",
            description: "Full-stack web development with MongoDB, Express, React, Node.",
            tags: ["MongoDB", "React", "Node.js"],
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <polyline points="8 21 12 17 16 21" />
              </svg>
            ),
            iconBg: "#ecfdf5",
            iconColor: "#16a34a",
            to: "/training/mern-stack",
          },
          {
            label: "Digital Marketing",
            description: "Master SEO, social media, ads & growth hacking.",
            tags: ["SEO", "PPC", "Analytics"],
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              </svg>
            ),
            iconBg: "#fff1f2",
            iconColor: "#e11d48",
            to: "/training/digital-marketing",
          },
          {
            label: "AI / ML Course",
            description: "Learn machine learning and AI model building from scratch.",
            tags: ["Python", "TensorFlow", "NLP"],
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
              </svg>
            ),
            iconBg: "#f0f9ff",
            iconColor: "#0284c7",
            to: "/training/ai-ml",
          },
        ],
      },
      {
        title: "Support",
        sidebarIcon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
          </svg>
        ),
        items: [
          {
            label: "24/7 Tech Support",
            description: "Round-the-clock technical support for all your systems.",
            tags: ["Remote", "On-site", "Priority"],
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12" />
                <path d="M2 6.92A2 2 0 0 1 4 5h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 12" />
              </svg>
            ),
            iconBg: "#f0fdf4",
            iconColor: "#15803d",
            to: "/services/tech-support",
          },
          {
            label: "Maintenance Plans",
            description: "Proactive website and app maintenance to keep things running.",
            tags: ["Updates", "Security", "Monitoring"],
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
              </svg>
            ),
            iconBg: "#fff7ed",
            iconColor: "#c2410c",
            to: "/services/maintenance",
          },
        ],
      },
    ],
    []
  );

  const toggleAccordion = useCallback((key) => {
    setMobileAccordion((p) => ({ ...p, [key]: !p[key] }));
  }, []);

  return (
    <header
      className={`navbar-header ${isHomePage ? "navbar-home" : "navbar-page"}${scrolled ? " scrolled" : ""}`}
    >
      {/* Top Accent Gradient Border */}
      <div className="navbar-accent-bar" />

      <div className="navbar-container">
        <div className="navbar-inner">

          {/* ── Logo ── */}
          <Link to="/" className="navbar-logo-link">
            <img
              src={logo}
              alt="FlareMinds Logo"
              className="navbar-logo-img"
              width={160}
              height={44}
              loading="eager"
            />
          </Link>

          {/* ── Desktop Navigation ── */}
          <nav className="navbar-nav" aria-label="Primary navigation">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `navbar-nav-link${isActive ? " active" : ""}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `navbar-nav-link${isActive ? " active" : ""}`
              }
            >
              About
            </NavLink>

            {/* Services Mega Dropdown */}
            <div
              ref={servicesRef}
              className="navbar-dropdown-wrapper"
              onMouseEnter={() => {
                if (closeServicesTimeout.current) clearTimeout(closeServicesTimeout.current);
                if (isPointer) setServicesOpen(true);
              }}
              onMouseLeave={() => {
                closeServicesTimeout.current = setTimeout(() => {
                  if (isPointer) setServicesOpen(false);
                }, 200);
              }}
            >
              <div className={`navbar-dropdown-btn${servicesOpen ? " open" : ""}`}>
                <NavLink
                  to="/services"
                  className="navbar-dropdown-text-link"
                  onClick={() => setServicesOpen(false)}
                >
                  Services
                </NavLink>
                <button
                  type="button"
                  className="navbar-dropdown-arrow-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setServicesOpen((p) => !p);
                  }}
                  aria-expanded={servicesOpen}
                  aria-controls="services-menu"
                  aria-label="Toggle Services menu"
                >
                  <svg
                    className={`navbar-dropdown-arrow${servicesOpen ? " rotated" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              <div id="services-menu" className={`navbar-mega-panel${servicesOpen ? " open" : ""}`}>
                <div className="navbar-mega-body">
                  {/* Sidebar */}
                  <div className="navbar-mega-sidebar">
                    {serviceCategories.map((cat) => (
                      <button
                        key={cat.title}
                        type="button"
                        className={`navbar-cat-btn${activeCategory === cat.title ? " active" : ""}`}
                        onMouseEnter={() => setActiveCategory(cat.title)}
                        onClick={() => setActiveCategory(cat.title)}
                      >
                        <span className="navbar-cat-btn-icon">{cat.sidebarIcon}</span>
                        <span className="navbar-cat-btn-label">{cat.title}</span>
                        <svg
                          className="navbar-cat-chevron"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    ))}

                    {/* Sidebar CTA */}
                    <div className="navbar-sidebar-cta">
                      <div className="navbar-sidebar-cta-icon">✦</div>
                      <p className="navbar-sidebar-cta-title">Have a project in mind?</p>
                      <p className="navbar-sidebar-cta-sub">Let's build something amazing together.</p>
                      <Link to="/contact" className="navbar-sidebar-cta-btn">
                        Get In Touch
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>

                  {/* Detail Panel */}
                  <div className="navbar-mega-content">
                    {serviceCategories.map((cat) => (
                      <div
                        key={cat.title}
                        className={`navbar-cat-panel${activeCategory === cat.title ? " visible" : ""}`}
                      >
                        <div className="navbar-service-grid">
                          {cat.items.map((item, idx) => (
                            <Link
                              key={idx}
                              to={item.to}
                              className={`navbar-service-card${location.pathname === item.to ? " current-page" : ""}`}
                            >
                              <div
                                className="navbar-service-card-icon"
                                style={{ background: item.iconBg, color: item.iconColor }}
                              >
                                {item.icon}
                              </div>
                              <div className="navbar-service-card-body">
                                <p className="navbar-service-card-title">{item.label}</p>
                                <p className="navbar-service-card-desc">{item.description}</p>
                                <span className="navbar-service-learn">
                                  Learn More
                                  <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                                  </svg>
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <NavLink
              to="/our-works"
              className={({ isActive }) =>
                `navbar-nav-link${isActive ? " active" : ""}`
              }
            >
              Our Works
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                `navbar-nav-link${isActive ? " active" : ""}`
              }
            >
              Products
            </NavLink>

            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `navbar-nav-link${isActive ? " active" : ""}`
              }
            >
              Blog
            </NavLink>
          </nav>

          {/* ── Desktop CTA ── */}
          <div className="navbar-cta-wrapper">
            <Link to="/contact" className="navbar-cta-btn">
              Contact Us
            </Link>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            className={`navbar-hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen((p) => !p)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <span className="navbar-bar" />
            <span className="navbar-bar" />
            <span className="navbar-bar" />
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      <div id="mobile-navigation" className={`navbar-mobile-drawer${menuOpen ? " open" : ""}`}>
        <div className="navbar-mobile-body">
          <NavLink to="/" className="navbar-mobile-link" end>
            Home
          </NavLink>

          <NavLink to="/about" className="navbar-mobile-link">
            About
          </NavLink>

          {/* Mobile Services Accordion */}
          <div className="navbar-mobile-accordion-section">
            <div className="navbar-mobile-accordion-btn" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `navbar-mobile-link${isActive ? " active" : ""}`
                }
                style={{ padding: 0, color: "inherit", flex: 1, textDecoration: "none" }}
                onClick={() => {
                  setMenuOpen(false);
                  setServicesOpen(false);
                }}
              >
                Services
              </NavLink>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleAccordion("services");
                }}
                aria-expanded={mobileAccordion.services}
                aria-label="Toggle Services menu"
                style={{ background: "none", border: "none", padding: "4px 8px", cursor: "pointer", color: "inherit", display: "inline-flex", alignItems: "center" }}
              >
                <svg
                  style={{
                    width: 16,
                    height: 16,
                    transition: "transform 0.2s ease",
                    transform: mobileAccordion.services ? "rotate(180deg)" : "none",
                  }}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {mobileAccordion.services && (
              <div id="mobile-services-menu" className="navbar-mobile-accordion-body">
                {serviceCategories.map((cat, idx) => (
                  <div key={idx}>
                    <p className="navbar-mobile-cat-label">{cat.title}</p>
                    {cat.items.map((item, j) => (
                      <Link
                        key={j}
                        to={item.to}
                        className="navbar-mobile-service-link"
                      >
                        <span>{item.icon}</span>
                        <span>{item.label}</span>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/our-works" className="navbar-mobile-link">
            Our Works
          </NavLink>

          <NavLink to="/products" className="navbar-mobile-link">
            Products
          </NavLink>

          <NavLink to="/blog" className="navbar-mobile-link">
            Blog
          </NavLink>

          <div className="navbar-mobile-cta-wrap">
            <Link to="/contact" className="navbar-mobile-cta">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}