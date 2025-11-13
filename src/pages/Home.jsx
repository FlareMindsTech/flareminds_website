import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const GRID_SIZE = 110;
  const [cells, setCells] = useState([]);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const svgRef = useRef(null);

  useEffect(() => {
    const w = window.innerWidth + GRID_SIZE;
    const h = window.innerHeight + GRID_SIZE;

    const arr = [];
    for (let x = 0; x < w; x += GRID_SIZE) {
      for (let y = 0; y < h; y += GRID_SIZE) {
        arr.push({ x, y });
      }
    }
    setCells(arr);
  }, []);

  const handleMouseMove = (e) => {
    const rect = svgRef.current.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const servicesText =
    "Website Design & Development • SEO • Google Ads • Social Media Marketing • Branding • Lead Generation • Animation • Strategy";

  return (
    <div className="home-page">

      <section
        className="hero-section"
        style={{
          position: "relative",
          minHeight: "100vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onMouseMove={handleMouseMove}
      >

        {/* FULLSCREEN STATIC GRID */}
        <svg
          ref={svgRef}
          width="100%"
          height="100%"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            display: "block",
          }}
        >
          <defs>
            <filter id="cellGlow">
              <feGaussianBlur stdDeviation="18" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {cells.map((cell, index) => {
            const dist = Math.hypot(
              cursorPos.x - (cell.x + GRID_SIZE / 2),
              cursorPos.y - (cell.y + GRID_SIZE / 2)
            );

            const isGlowing = dist < 80; // 🔥 Glow MUCH closer to pointer

            return (
              <rect
                key={index}
                x={cell.x}
                y={cell.y}
                width={GRID_SIZE}
                height={GRID_SIZE}
                fill={isGlowing ? "#69c7ff" : "#001a4d"} // dark blue → light blue glow
                stroke="#002b72"
                strokeWidth="1.5"
                filter={isGlowing ? "url(#cellGlow)" : "none"}
                style={{ transition: "0.1s ease" }}
              />
            );
          })}
        </svg>

        {/* CONTENT */}
        <div
          style={{
            position: "relative",
            zIndex: 5,
            width: "100%",
            backdropFilter: "blur(4px)",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "3.5rem",
              fontWeight: "800",
              background: "darkblue",
              WebkitTextFillColor: "transparent",
              WebkitBackgroundClip: "text",
            }}
          >
            Build, Scale & Elevate <br /> Your Digital Presence
          </h1>

          <p
            style={{
              fontSize: "1.2rem",
              color: "#006eff",
              marginTop: "15px",
              marginBottom: "25px",
            }}
          >
            We craft modern, results-driven digital experiences powered by design,
            technology and strategy — tailored for growth.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
            <Link
              to="/services"
              style={{
                padding: "1rem 2rem",
                borderRadius: "10px",
                background: "linear-gradient(90deg,#14b8a6,#0ea5e9)",
                fontWeight: "700",
                color: "#000",
              }}
            >
              Explore Services
            </Link>

            <Link
              to="/contact"
              style={{
                padding: "1rem 2rem",
                borderRadius: "10px",
                border: "2px solid black",
                fontWeight: "700",
                color: "black",
              }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="marquee">
        <div className="marquee-inner">
          <span>{servicesText}</span>
          <span>{servicesText}</span>
        </div>
      </section>
    </div>
  );
}
