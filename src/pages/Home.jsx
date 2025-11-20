import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaXTwitter, FaLinkedin } from "react-icons/fa6";


export default function Home() {
  const GRID = 110;
  const [cells, setCells] = useState([]);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const svgRef = useRef(null);

  useEffect(() => {
    const w = window.innerWidth + GRID;
    const h = window.innerHeight + GRID;

    let temp = [];
    for (let x = 0; x < w; x += GRID) {
      for (let y = 0; y < h; y += GRID) {
        temp.push({ x, y });
      }
    }
    setCells(temp);
  }, []);

  const handleMove = (e) => {
    const rect = svgRef.current.getBoundingClientRect();
    setCursor({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };
  useEffect(() => {
    const steps = document.querySelectorAll(".timeline-step");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.3 }
    );

    steps.forEach((step) => observer.observe(step));
  }, []);

  const marqueeText =
    "Website Design • SEO • Google Ads • SMM • Branding • Lead Gen • UI/UX • Strategy";

  return (
    <div className="home-page">
      <section className="hero-section" onMouseMove={handleMove}>
        <svg ref={svgRef} className="background-grid">
          {cells.map((cell, i) => {
            const d = Math.hypot(
              cursor.x - (cell.x + GRID / 2),
              cursor.y - (cell.y + GRID / 2)
            );
            const glow = d < 60;
            return (
              <rect
                key={i}
                x={cell.x}
                y={cell.y}
                width={GRID}
                height={GRID}
                fill={glow ? "#00008B" : "#e8f3ff"}
                stroke="#4a7ba7"
                strokeWidth="1.3"
              />
            );
          })}
        </svg>
        <div className="hero-content">
          <h1 className="hero-title">
            Marketing That Speaks Today's Digital Language
          </h1>

          <p className="hero-subtext">
            We craft digital experiences that connect, convert, and scale.
            Let your brand fly higher with Branding Wings.
          </p>

          <div className="hero-buttons">
            <Link to="/services" className="btn-primary">
              Explore Services
            </Link>
            <Link to="/contact" className="btn-outline">
              Get in Touch
            </Link>
          </div>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/flareminds_tech"
              target="_blank"
              className="social-icon"
            >
              <FaInstagram />
            </a>
            <a href="#" target="_blank" className="social-icon">
              <FaFacebook />
            </a>
            <a href="#" target="_blank" className="social-icon">
              <FaXTwitter />
            </a>
            <a
              href="https://www.linkedin.com/company/flareminds-rcm/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>
      <section className="marquee">
        <div className="marquee-inner">
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">Why Choose FlareMinds?</h2>

        <div className="features-grid">
          {[
            { title: "Creative Strategy", text: "Business-focused digital planning." },
            { title: "High-End Designs", text: "Modern UI/UX that converts." },
            { title: "Digital Growth", text: "Scale your brand effortlessly." },
            { title: "Reliable Support", text: "We grow with you." },
          ].map((f, i) => (
            <div key={i} className="feature-card">
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="process-section">
        <h2 className="section-title">Our Creative Process</h2>

        <div className="timeline">
          {[
            { step: "Discover", text: "We understand your goals." },
            { step: "Design", text: "We craft stunning UI/UX." },
            { step: "Develop", text: "We build fast, scalable solutions." },
            { step: "Launch", text: "Your brand goes live to the world." },
          ].map((s, i) => (
            <div key={i} className="timeline-step">
              <div className="timeline-dot"></div>
              <h3>{s.step}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="services-preview">
        <h2 className="section-title">Our Services</h2>

        <div className="services-grid">
          {[
            "Website Design & Development",
            "Marketing & SEO",
            "Branding & Identity",
            "Business Automation",
          ].map((s, i) => (
            <div key={i} className="service-box">
              <h3>{s}</h3>
              <p>Premium description goes here.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="future-section">
        <div className="future-box">
          Future Projects / Case Studies Will Come Here
        </div>
      </section>
    </div>
  );
}
