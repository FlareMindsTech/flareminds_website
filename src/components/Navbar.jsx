import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/cropped-fm-logo-2-1.png";
import "../components/css/navbar.css";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Courses");
  const [mobileAccordion, setMobileAccordion] = useState({});
  const [isPointer, setIsPointer] = useState(false);

  const wrapperRef = useRef(null);
  const servicesBtnRef = useRef(null);
  const megaRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    const detect = () => setIsPointer(true);
    window.addEventListener("mousemove", detect, { once: true });
    return () => window.removeEventListener("mousemove", detect);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (
        megaRef.current &&
        !megaRef.current.contains(e.target) &&
        !servicesBtnRef.current.contains(e.target)
      ) {
        setMegaOpen(false);
      }
    };

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setMegaOpen(false);
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const megaSections = useMemo(
    () => [
      {
        title: "Courses",
        items: [
          {
            label: "Web Development",
            icon: "💻",
            to: "/training/web-development",
          },
          {
            label: "App Development",
            icon: "📱",
            to: "/training/app-development",
          },
        ],
      },
      {
        title: "Marketing",
        items: [
          {
            label: "SEO & Analytics",
            icon: "📊",
            to: "/services/seo-analytics",
          },
          {
            label: "Social Media Marketing",
            icon: "📣",
            to: "/services/social-media-marketing",
          },
          {
            label: "Lead Generation",
            icon: "💰",
            to: "/services/lead-generation",
          },
        ],
      },
      {
        title: "Development",
        items: [
          { label: "Website Development", icon: "🌐", to: "/web-development" },
          {
            label: "Ecommerce Solutions",
            icon: "🛒",
            to: "/services/ecommerce-solutions",
          },
          { label: "App Development", icon: "📱", to: "/app-development" },
        ],
      },
      {
        title: "Products",
        items: [
          { label: "ERP Systems", icon: "🏢", to: "/services/erp-systems" },
          { label: "CRM Solutions", icon: "📈", to: "/services/crm-solutions" },
          { label: "Custom SaaS", icon: "☁️", to: "/services/custom-saas" },
        ],
      },
    ],
    []
  );

  const navClass = useCallback(
    ({ isActive }) => (isActive ? "nav-link active" : "nav-link"),
    []
  );

  const handleServicesKey = useCallback((e) => {
    if (e.key === "ArrowDown") {
      setMegaOpen(true);
      setTimeout(() => {
        const firstItem = megaRef.current?.querySelector("a");
        firstItem?.focus();
      }, 20);
    }
  }, []);

  const toggleAccordion = useCallback((key) => {
    setMobileAccordion((p) => ({ ...p, [key]: !p[key] }));
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    if (!menuOpen && isPointer) setMegaOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      if (!menuOpen && isPointer) {
        setMegaOpen(false);
        servicesBtnRef.current?.blur();
      }
    }, 300);
  };
  return (
    <header className="navbar" ref={wrapperRef}>
      <div className="navbar-container">
        <Link
          to="/"
          className="navbar-logo"
          onClick={() => {
            setMenuOpen(false);
            setMegaOpen(false);
          }}
        >
          <img src={logo} alt="FlareMinds" className="logo" />
        </Link>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavLink
            to="/"
            className={navClass}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={navClass}
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>

          <div
            className="services-wrapper"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`services-btn nav-link ${megaOpen ? "active" : ""}`}
              ref={servicesBtnRef}
              aria-haspopup="true"
              aria-expanded={megaOpen}
              onKeyDown={handleServicesKey}
              onClick={() => setMegaOpen((p) => !p)}
            >
              Services <span style={{ fontSize: "16px" }}>▾</span>
            </button>

            <div
              ref={megaRef}
              className={`mega-menu ${megaOpen ? "show" : ""}`}
              role="menu"
            >
              <div className="mega-content-wrapper">
                {/* Sidebar Categories */}
                <div className="mega-sidebar">
                  {megaSections.map((sec) => (
                    <div
                      key={sec.title}
                      className={`mega-category ${activeCategory === sec.title ? "active" : ""
                        }`}
                      onMouseEnter={() => setActiveCategory(sec.title)}
                    >
                      {sec.title}
                      <span className="arrow">›</span>
                    </div>
                  ))}
                </div>

                {/* Content Area */}
                <div className="mega-details">
                  {megaSections.map((sec) => (
                    <div
                      key={sec.title}
                      className={`mega-items-group ${activeCategory === sec.title ? "visible" : ""
                        }`}
                    >
                      <h4 className="group-title">{sec.title}</h4>
                      <div className="mega-cards">
                        {sec.items.map((it, j) => (
                          <Link
                            key={j}
                            to={it.to}
                            className="mega-card"
                            onClick={() => {
                              setMegaOpen(false);
                              setMenuOpen(false);
                            }}
                          >
                            <span className="mega-icon">{it.icon}</span>
                            <span className="mega-label">{it.label}</span>
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
            to="/projects"
            className={navClass}
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </NavLink>

          <NavLink
            to="/blog"
            className={navClass}
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </NavLink>

          <NavLink
            to="/contact"
            className={navClass}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>
        </nav>

        <div className="nav-right-info">
          <span className="nav-phone">📞 +91 9500950813</span>
          <span className="nav-email">✉ Info@flaremindstech.com</span>
        </div>

        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => {
            setMenuOpen((p) => !p);
            setMegaOpen(false);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-accordion">
          <NavLink
            to="/about"
            className="mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>

          <div className="mobile-acc-section">
            <button
              className="acc-title"
              onClick={() => toggleAccordion("services")}
            >
              Services
              <span className="acc-caret">
                {mobileAccordion.services ? "▾" : "▸"}
              </span>
            </button>

            {mobileAccordion.services && (
              <div className="acc-body">
                {megaSections.map((sec, idx) => (
                  <div key={idx} className="acc-group">
                    <div className="acc-group-title">{sec.title}</div>

                    {sec.items.map((it, j) => (
                      <Link
                        key={j}
                        to={it.to}
                        className="acc-item"
                        onClick={() => setMenuOpen(false)}
                      >
                        <span className="acc-icon">{it.icon}</span>
                        {it.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          <NavLink
            to="/projects"
            className="mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </NavLink>

          <NavLink
            to="/blog"
            className="mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </NavLink>

          <NavLink
            to="/contact"
            className="mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      )}
      <Lanyard />
    </header>
  );
}
