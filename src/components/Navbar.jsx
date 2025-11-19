import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/cropped-fm-logo-2-1.png";

export default function Navbar() {
  /* ============================================================
     STATE
  ============================================================ */
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState({});
  const [isPointer, setIsPointer] = useState(false); // Detect mouse vs touch

  /* ============================================================
     REFS
  ============================================================ */
  const wrapperRef = useRef(null);
  const servicesBtnRef = useRef(null);
  const megaRef = useRef(null);

  /* ============================================================
     POINTER DETECTION (Mouse vs Touch – iPhone FIX)
  ============================================================ */
  useEffect(() => {
    const detect = () => setIsPointer(true);
    window.addEventListener("mousemove", detect, { once: true });
    return () => window.removeEventListener("mousemove", detect);
  }, []);

  /* ============================================================
     OUTSIDE CLICK / ESC CLOSE
  ============================================================ */
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

  /* ============================================================
     SERVICES SECTIONS (memoized to reduce re-renders)
  ============================================================ */
  const megaSections = useMemo(
    () => [
       {
      title: "Courses",
      items: [
        { label: "Web Development Course", icon: "💻", to: "/courses/web-development" },
        { label: "App Development Course", icon: "📱", to: "/courses/app-development" },
       
      ],
    },
      {
        title: "Development",
        items: [
          { label: "Website Development", icon: "🌐", to: "/services/website-development" },
          { label: "Ecommerce Solutions", icon: "🛒", to: "/services/ecommerce-solutions" },
          { label: "App Development", icon: "📱", to: "/services/app-development" },
        ],
      },
      {
        title: "Marketing",
        items: [
          { label: "SEO & Analytics", icon: "📊", to: "/services/seo-analytics" },
          { label: "Social Media Marketing", icon: "📣", to: "/services/social-media-marketing" },
          { label: "Lead Generation", icon: "💰", to: "/services/lead-generation" },
        ],
      },
      {
        title: "Branding",
        items: [
          { label: "Branding & Logo", icon: "🎨", to: "/services/branding-logo" },
          { label: "UI / UX Design", icon: "🖼️", to: "/services/ui-ux-design" },
          { label: "Animation & Video", icon: "🎬", to: "/services/animation-video" },
        ],
      },
    ],
    []
  );

  /* ============================================================
     NAVLINK ACTIVE CLASS
  ============================================================ */
  const navClass = useCallback(
    ({ isActive }) => (isActive ? "nav-link active" : "nav-link"),
    []
  );

  /* ============================================================
     KEYBOARD ACCESSIBILITY — ArrowDown opens mega menu
  ============================================================ */
  const handleServicesKey = useCallback((e) => {
    if (e.key === "ArrowDown") {
      setMegaOpen(true);
      setTimeout(() => {
        const firstItem = megaRef.current?.querySelector("a");
        firstItem?.focus();
      }, 20);
    }
  }, []);

  /* ============================================================
     MOBILE ACCORDION
  ============================================================ */
  const toggleAccordion = useCallback((key) => {
    setMobileAccordion((p) => ({ ...p, [key]: !p[key] }));
  }, []);

  /* ============================================================
     DESKTOP HOVER LOGIC (Apple-Level Smooth)
     Only activates when pointer is detected (mouse)
  ============================================================ */
  const handleMouseEnter = () => {
    if (!menuOpen && isPointer) setMegaOpen(true);
  };

  const handleMouseLeave = () => {
    if (!menuOpen && isPointer) setMegaOpen(false);
  };

  /* ============================================================
     RENDER
  ============================================================ */
  return (
    <header className="navbar" ref={wrapperRef}>
      <div className="navbar-container">

        {/* LOGO */}
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

        {/* NAV LINKS (Desktop) */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" className={navClass} onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" className={navClass} onClick={() => setMenuOpen(false)}>About</NavLink>

          {/* SERVICES MEGA MENU */}
          <div
            className="services-wrapper"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="services-btn"
              ref={servicesBtnRef}
              aria-haspopup="true"
              aria-expanded={megaOpen}
              onKeyDown={handleServicesKey}
              onClick={() => setMegaOpen((p) => !p)}
            >
              Services ▾
            </button>

            {/* MEGA MENU */}
            <div
              ref={megaRef}
              className={`mega-menu ${megaOpen ? "show" : ""}`}
              role="menu"
            >
              <div className="mega-grid">
                <div className="mega-row">
                  {megaSections.map((sec, idx) => (
                    <div className="mega-col" key={idx}>
                      <h4>{sec.title}</h4>

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
                            <span>{it.label}</span>
                          </Link>
                        ))}
                      </div>

                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <NavLink to="/blog" className={navClass} onClick={() => setMenuOpen(false)}>Blog</NavLink>

          <NavLink to="/contact" className={navClass} onClick={() => setMenuOpen(false)}>Contact</NavLink>
        </nav>

        {/* RIGHT CONTACT (Desktop) */}
        <div className="nav-right-info">
          <span className="nav-phone">📞 +91 98765 43210</span>
          <span className="nav-email">✉ flaremindstech@gmail.com</span>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => {
            setMenuOpen((p) => !p);
            setMegaOpen(false);
          }}
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      {/* MOBILE ACCORDION NAV */}
      {menuOpen && (
        <div className="mobile-accordion">
          <NavLink to="/about" className="mobile-link" onClick={() => setMenuOpen(false)}>About</NavLink>

          {/* SERVICES ACC */}
          <div className="mobile-acc-section">
            <button className="acc-title" onClick={() => toggleAccordion("services")}>
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

          <NavLink to="/blog" className="mobile-link" onClick={() => setMenuOpen(false)}>Blog</NavLink>

          <NavLink to="/contact" className="mobile-link" onClick={() => setMenuOpen(false)}>Contact</NavLink>
        </div>
      )}
    </header>
  );
}
