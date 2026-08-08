import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import SEO from "../components/SEO";
import { getBreadcrumbSchema } from "../utils/structuredData";
import "../pages/css/products.css";

// ─────────────────────────────────────────────────────────────────────────────
//  FLAT PROJECT DATA
//  Add a new project by appending one object here.
//  It will automatically appear in the correct filtered category.
//
//  status: "live" | "coming" | "proto"
//  link:   external URL or null
// ─────────────────────────────────────────────────────────────────────────────
export const ALL_PROJECTS = [

  // ── Business Websites ───────────────────────────────────────
  {
    id: 1,
    title: "TNEBA Website",
    category: "Business Websites",
    categoryId: "business-websites",
    description: "Official website developed for TNEbA with a clean, modern, and responsive interface.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=85",
    tech: ["React", "Node.js", "MongoDB"],
    status: "live",
    link: "https://tnebwebsiteui.onrender.com",
    accent: "#2563eb",
    featured: false,
  },
  {
    id: 2,
    title: "AKA Associates",
    category: "Business Websites",
    categoryId: "business-websites",
    description: "Professional corporate business website designed for AKA Associates with brand-aligned aesthetics.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
    tech: ["React", "CSS3", "Node.js"],
    status: "live",
    link: "https://akaassociate.com",
    accent: "#2563eb",
    featured: false,
  },
  {
    id: 3,
    title: "RightTouch Partner Website",
    category: "Business Websites",
    categoryId: "business-websites",
    description: "Partner portal website for the RightTouch home service platform — built for technician onboarding.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
    tech: ["React", "Node.js", "REST API"],
    status: "live",
    link: "https://righttouchpartner.com",
    accent: "#2563eb",
    featured: false,
  },

  // ── E-Commerce ──────────────────────────────────────────────
  {
    id: 4,
    title: "Label Aadvi",
    category: "E-Commerce",
    categoryId: "e-commerce",
    description: "Complete D2C e-commerce platform for a clothing brand — featuring product catalog, cart, secure checkout, and order tracking.",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=85",
    tech: ["React", "Node.js", "MongoDB", "Razorpay"],
    status: "live",
    link: "https://labelaadvi.com",
    accent: "#7c3aed",
    featured: false,
  },

  // ── Service Marketplace ──────────────────────────────────────
  {
    id: 5,
    title: "RightTouch Service",
    category: "Service Marketplace",
    categoryId: "service-marketplace",
    description: "Urban Company-style on-demand marketplace for booking home service technicians — built with real-time booking and GPS tracking.",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=85",
    tech: ["React Native", "Node.js", "Socket.io", "Maps API"],
    status: "live",
    link: "https://righttouchservice.com",
    accent: "#f97316",
    featured: true, // ← shown in featured slot
  },

  // ── Business Applications ────────────────────────────────────
  {
    id: 6,
    title: "Label Aadvi Admin Dashboard",
    category: "Business Applications",
    categoryId: "business-applications",
    description: "Full-featured admin dashboard for managing products, orders, customers, and revenue reports.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
    tech: ["React", "Node.js", "MongoDB"],
    status: "live",
    link: null,
    accent: "#14b8a6",
    featured: false,
  },
  {
    id: 7,
    title: "TNEbA Admin Dashboard",
    category: "Business Applications",
    categoryId: "business-applications",
    description: "Internal admin panel for managing website content, media, and operational data for TNEbA.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
    tech: ["React", "Node.js", "REST API"],
    status: "live",
    link: null,
    accent: "#14b8a6",
    featured: false,
  },
  {
    id: 8,
    title: "RightTouch Admin Dashboard",
    category: "Business Applications",
    categoryId: "business-applications",
    description: "Centralized admin panel to manage technicians, customers, service bookings, and revenue analytics.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    status: "live",
    link: null,
    accent: "#14b8a6",
    featured: false,
  },
  {
    id: 9,
    title: "Label Aadvi Inventory",
    category: "Business Applications",
    categoryId: "business-applications",
    description: "Inventory management system for real-time stock monitoring, barcode scanning, and supplier tracking.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85",
    tech: ["React", "Node.js", "MongoDB"],
    status: "coming",
    link: null,
    accent: "#14b8a6",
    featured: false,
  },
  {
    id: 10,
    title: "Barcode Inventory System",
    category: "Business Applications",
    categoryId: "business-applications",
    description: "Barcode-based inventory platform — scan product barcodes to check stock quantity and manage clothing inventory.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
    tech: ["React", "Node.js", "Barcode API"],
    status: "coming",
    link: null,
    accent: "#14b8a6",
    featured: false,
  },

  // ── Mobile Applications ──────────────────────────────────────
  {
    id: 11,
    title: "Designer Studio Institute",
    category: "Mobile Applications",
    categoryId: "mobile-applications",
    description: "Educational mobile application for a fashion design institute — student management, class schedules, and meeting rooms.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
    tech: ["React Native", "Expo", "Firebase"],
    status: "proto",
    link: "https://play.google.com/store/apps/details?id=com.aadvifashion.meeting_app",
    accent: "#0ea5e9",
    featured: false,
  },
  {
    id: 12,
    title: "Atelier",
    category: "Mobile Applications",
    categoryId: "mobile-applications",
    description: "Fashion and clothing mobile shopping application — browse collections, wishlist, and order from your phone.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85",
    tech: ["React Native", "Node.js", "MongoDB"],
    status: "proto",
    link: "https://play.google.com/store/apps/details?id=com.aadviatelier.app",
    accent: "#0ea5e9",
    featured: false,
  },
  {
    id: 13,
    title: "RightTouch",
    category: "Mobile Applications",
    categoryId: "mobile-applications",
    description: "Customer mobile application for booking on-demand home services — plumbing, electrical, cleaning, and more.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85",
    tech: ["React Native", "Node.js", "Google Maps"],
    status: "proto",
    link: "https://play.google.com/store/apps/details?id=com.righttouch.customer",
    accent: "#0ea5e9",
    featured: false,
  },
  {
    id: 14,
    title: "RightTouch Partner",
    category: "Mobile Applications",
    categoryId: "mobile-applications",
    description: "Technician / partner mobile app — accept service requests, manage bookings, and track earnings.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85",
    tech: ["React Native", "Node.js", "Socket.io"],
    status: "proto",
    link: "https://play.google.com/store/apps/details?id=com.righttouchpartner.app",
    accent: "#0ea5e9",
    featured: false,
  },
];

// All distinct categories in order
const CATEGORIES = [
  { id: "all",                   label: "All"                  },
  { id: "business-websites",    label: "Business Websites"    },
  { id: "e-commerce",           label: "E-Commerce"           },
  { id: "service-marketplace",  label: "Service Marketplace"  },
  { id: "business-applications",label: "Business Apps"        },
  { id: "mobile-applications",  label: "Mobile Apps"          },
];

// ── Backward-compatible export for Home.jsx (projectSections.find + .projects.length)
export const projectSections = CATEGORIES.slice(1).map((cat) => ({
  id: cat.id,
  title: cat.label,
  projects: ALL_PROJECTS.filter((p) => p.categoryId === cat.id),
}));

// Hero decorative symbols
const SYMBOLS = ["{ }", "< />", "[ ]", "01", "10", "001", "010", "11"];

// ─────────────────────────────────────────────────────────────────────────────
//  StatusBadge
// ─────────────────────────────────────────────────────────────────────────────
function StatusBadge({ status }) {
  const map = {
    live:   { cls: "pw-live",   label: "LIVE",        dot: true },
    coming: { cls: "pw-coming", label: "COMING SOON", dot: false },
    proto:  { cls: "pw-proto",  label: "PROTOTYPE",   dot: false },
  };
  const cfg = map[status] || map.live;
  return (
    <span className={`pw-card-status ${cfg.cls}`}>
      {cfg.dot && <span className="pw-status-dot" />}
      {cfg.label}
    </span>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  TechList
// ─────────────────────────────────────────────────────────────────────────────
function TechList({ tech = [], max = 4 }) {
  const tags = tech.slice(0, max);
  return (
    <div className="pw-tech-list">
      {tags.map((t) => (
        <span key={t} className="pw-tech-tag">{t}</span>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  LinkButton — renders live link / prototype link / no link
// ─────────────────────────────────────────────────────────────────────────────
function CardLink({ project }) {
  if (!project.link) {
    return <span className="pw-no-link">Internal Project</span>;
  }
  const label =
    project.status === "proto" ? "View on Play Store" : "Visit Project";
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="pw-card-link"
      aria-label={`${label}: ${project.title} (opens in new tab)`}
    >
      {label}
      <FaArrowRight className="pw-card-link-arrow" />
    </a>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  ProjectCard
// ─────────────────────────────────────────────────────────────────────────────
function ProjectCard({ project, serialNum }) {
  return (
    <article className="pw-card" style={{ animationDelay: `${(serialNum % 6) * 55}ms` }}>
      {/* Image */}
      <div className="pw-card-img-wrap">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          width="1200"
          height="800"
          loading="lazy"
          decoding="async"
        />
        <div className="pw-card-overlay">
          <StatusBadge status={project.status} />
          <span className="pw-card-cat-badge">{project.category}</span>
        </div>
      </div>

      {/* Body */}
      <div className="pw-card-body">
        <div className="pw-card-top">
          <span
            className="pw-card-kicker"
            style={{ color: project.accent }}
          >
            {project.category}
          </span>
          <span className="pw-card-num">{String(serialNum).padStart(2, "0")}</span>
        </div>
        <h3 className="pw-card-title">{project.title}</h3>
        <p className="pw-card-desc">{project.description}</p>

        {project.tech && project.tech.length > 0 && (
          <TechList tech={project.tech} />
        )}

        <div className="pw-card-footer">
          <CardLink project={project} />
        </div>
      </div>
    </article>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  FeaturedCard — slightly wider treatment for the featured project
// ─────────────────────────────────────────────────────────────────────────────
function FeaturedCard({ project }) {
  if (!project) return null;
  return (
    <div className="pw-featured-wrap">
      <div className="pw-section-label">
        <span className="pw-section-label-text">Featured Project</span>
        <span className="pw-section-line" />
      </div>
      <article className="pw-featured-card">
        <div className="pw-featured-img-wrap">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            width="1200"
            height="800"
            loading="eager"
            decoding="auto"
          />
          <div className="pw-featured-img-badge">
            <span className="pw-live-dot" />
            Live Project
          </div>
        </div>
        <div className="pw-featured-body">
          <div className="pw-featured-kicker">
            <span style={{ color: project.accent }}>{project.category}</span>
            <span className="pw-featured-num">#01</span>
          </div>
          <h2 className="pw-featured-title">{project.title}</h2>
          <p className="pw-featured-desc">{project.description}</p>
          {project.tech && <TechList tech={project.tech} />}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="pw-visit-link"
              aria-label={`Visit ${project.title} website (opens in new tab)`}
            >
              Visit Project
              <FaExternalLinkAlt className="pw-visit-link-arrow" />
            </a>
          )}
        </div>
      </article>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  Main Page
// ─────────────────────────────────────────────────────────────────────────────
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  // Counts per category (dynamic)
  const counts = useMemo(() => {
    const map = { all: ALL_PROJECTS.length };
    ALL_PROJECTS.forEach((p) => {
      map[p.categoryId] = (map[p.categoryId] || 0) + 1;
    });
    return map;
  }, []);

  // Featured project (shown regardless of filter in "All" mode)
  const featuredProject = useMemo(
    () => ALL_PROJECTS.find((p) => p.featured),
    []
  );

  // Filtered projects (exclude featured from grid when showing All)
  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return ALL_PROJECTS.filter((p) => !p.featured);
    }
    return ALL_PROJECTS.filter((p) => p.categoryId === activeFilter);
  }, [activeFilter]);

  const breadcrumbs = [
    { name: "Home",     path: "/" },
    { name: "Products", path: "/products" },
  ];

  const totalCount = ALL_PROJECTS.length;

  return (
    <div className="pw-page">
      <SEO
        title="Our Work & Portfolio | FlareMinds — Digital Products & Software"
        description="Explore FlareMinds' portfolio of websites, mobile apps, e-commerce platforms, business dashboards, and digital marketplaces built for real-world businesses."
        keywords="portfolio, web development projects, app development, ecommerce, business applications, mobile apps, FlareMinds projects"
        schema={getBreadcrumbSchema(breadcrumbs)}
      />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="pw-hero" aria-label="Our Work hero">
        {/* Floating code symbols */}
        <div className="pw-hero-symbols" aria-hidden="true">
          {SYMBOLS.map((sym, i) => (
            <span key={i} className="pw-sym">{sym}</span>
          ))}
        </div>

        {/* Scan line */}
        <div className="pw-scan-line" aria-hidden="true" />

        <div className="pw-container">
          <div className="pw-hero-inner">
            {/* Eyebrow */}
            <div className="pw-hero-eyebrow" aria-label="Section label">
              <span className="pw-hero-eyebrow-dot" />
              OUR WORK
            </div>

            {/* Title */}
            <h1 className="pw-hero-title">
              Digital products{" "}
              <span className="pw-grad">engineered</span>{" "}
              for real-world businesses
            </h1>

            {/* Description */}
            <p className="pw-hero-desc">
              Websites, mobile applications, business systems and digital
              platforms built by FlareMinds.
            </p>
            <p className="pw-hero-sub">
              {totalCount} projects across {CATEGORIES.length - 1} categories
            </p>

            {/* Stats strip */}
            <div className="pw-stats" aria-label="Portfolio statistics">
              <div className="pw-stat">
                <div className="pw-stat-num">{counts["business-websites"] || 0}+</div>
                <div className="pw-stat-label">Websites</div>
              </div>
              <div className="pw-stat">
                <div className="pw-stat-num">{counts["mobile-applications"] || 0}+</div>
                <div className="pw-stat-label">Mobile Apps</div>
              </div>
              <div className="pw-stat">
                <div className="pw-stat-num">{counts["business-applications"] || 0}+</div>
                <div className="pw-stat-label">Business Apps</div>
              </div>
              <div className="pw-stat">
                <div className="pw-stat-num">{counts["e-commerce"] + (counts["service-marketplace"] || 0)}+</div>
                <div className="pw-stat-label">Platforms</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FILTER BAR ────────────────────────────────────────── */}
      <div className="pw-filter-wrap" role="navigation" aria-label="Filter projects by category">
        <div className="pw-filter-inner">
          <span className="pw-filter-label">Filter:</span>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`pw-filter-btn${activeFilter === cat.id ? " pw-active" : ""}`}
              onClick={() => setActiveFilter(cat.id)}
              aria-pressed={activeFilter === cat.id}
              aria-label={`Show ${cat.label} projects`}
            >
              {cat.label}
              {counts[cat.id] !== undefined && (
                <span className="pw-filter-count">{counts[cat.id]}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── MAIN CONTENT ──────────────────────────────────────── */}
      <div className="pw-content">

        {/* Featured (only in "All" view) */}
        {activeFilter === "all" && featuredProject && (
          <FeaturedCard project={featuredProject} />
        )}

        {/* Section label */}
        <div className="pw-section-label">
          <span className="pw-section-label-text">
            {activeFilter === "all"
              ? "All Projects"
              : CATEGORIES.find((c) => c.id === activeFilter)?.label}
          </span>
          <span className="pw-section-line" />
          <span style={{ fontSize: "0.78rem", color: "#94a3b8", whiteSpace: "nowrap" }}>
            {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Grid */}
        <div className="pw-grid" role="list" aria-label="Project list">
          {filteredProjects.length === 0 ? (
            <div className="pw-empty" role="listitem">
              <div className="pw-empty-icon">⌛</div>
              <p className="pw-empty-title">More projects coming soon.</p>
              <p className="pw-empty-sub">
                We're always building something new. Check back shortly.
              </p>
            </div>
          ) : (
            filteredProjects.map((project, i) => (
              <div key={project.id} role="listitem">
                <ProjectCard project={project} serialNum={i + 1} />
              </div>
            ))
          )}
        </div>
      </div>

      {/* ── BOTTOM CTA ────────────────────────────────────────── */}
      <section className="pw-cta" aria-label="Call to action">
        <div className="pw-cta-inner">
          <p className="pw-cta-pre" aria-hidden="true">
            {"<"} Let's build something useful {"/>"}
          </p>
          <h2 className="pw-cta-title">Have a project in mind?</h2>
          <p className="pw-cta-sub">
            Tell us what you need and we'll turn it into a production-ready
            digital product.
          </p>
          <Link to="/contact" className="pw-cta-btn">
            Let's Build It
            <FaArrowRight className="pw-cta-btn-arrow" />
          </Link>
        </div>
      </section>
    </div>
  );
}
