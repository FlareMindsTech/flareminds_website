import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import SEO from "../components/common/SEO";
import { getBreadcrumbSchema } from "../utils/structuredData";
import "../styles/pages/products.css";

import { ALL_PROJECTS, CATEGORIES, projectSections } from "../data/projectsData";
export { ALL_PROJECTS, CATEGORIES, projectSections };

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
