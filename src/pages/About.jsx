import React, { useEffect, useRef } from "react";
import vikiImg from "../assets/viki.jpg";


export default function About() {
  /* -----------------------------------------------
      COUNTERS
  ------------------------------------------------ */
  const counters = [
    { id: "projects", label: "Projects", value: 128 },
    { id: "clients", label: "Clients", value: 67 },
    { id: "awards", label: "Awards", value: 12 },
    { id: "growth", label: "YoY Growth", value: 240 },
  ];

  /* -----------------------------------------------
      TEAM
  ------------------------------------------------ */
  const team = [
    {
      name: "Vignesh",
      role: "Founder & CEO",
      bio: "15+ years crafting brand strategy and product-led design.",
      image: vikiImg,
    },
    {
      name: "Rohan",
      role: "Lead Developer",
      bio: "Specialist in building fast, scalable, modern web apps.",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Sana",
      role: "Design Lead",
      bio: "Expert in UI/UX & motion; creates pixel-perfect experiences.",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Vikram",
      role: "SEO Specialist",
      bio: "Technical SEO expert improving visibility and ranking.",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Priya",
      role: "Content Strategist",
      bio: "Creates powerful brand messaging and story-driven content.",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Aravind",
      role: "Marketing Manager",
      bio: "Specialist in performance campaigns and scaling revenue.",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=600&q=80",
    },
  ];

  /* -----------------------------------------------
      COUNTER ANIMATION
  ------------------------------------------------ */
  const counterRefs = useRef([]);
  counterRefs.current = [];

  const addCounterRef = (el) => {
    if (el && !counterRefs.current.includes(el)) counterRefs.current.push(el);
  };

  useEffect(() => {
    counterRefs.current.forEach((el, idx) => {
      const target = counters[idx].value;
      let startTime = null;
      const duration = 1200;

      const animate = (ts) => {
        if (!startTime) startTime = ts;
        const progress = Math.min((ts - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.innerText =
          Math.floor(eased * target) +
          (counters[idx].id === "growth" ? "%" : "");
        if (progress < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    });
  }, []);

 /* MOBILE TAP (toggle open/close) */
useEffect(() => {
  const cards = document.querySelectorAll(".premium-team-card");

  cards.forEach((card) => {
    let open = false;

    const toggleCard = () => {
      if (!open) {
        card.classList.remove("touch-reset");
        card.classList.add("touch-active");
        open = true;
      } else {
        card.classList.remove("touch-active");
        card.classList.add("touch-reset");

        // small delay to remove class
        setTimeout(() => card.classList.remove("touch-reset"), 35000);

        open = false;
      }
    };

    card.addEventListener("touchend", toggleCard);
  });
}, []);

  /* -----------------------------------------------
      RENDER
  ------------------------------------------------ */
  return (
    <div className="lm-about-page">
      {/* HERO */}
      <header className="lm-hero">
        <div className="lm-hero-inner">
          <h1 className="lm-hero-title">FlareMinds — Design & Growth Agency</h1>
          <p className="lm-hero-sub">
            We help brands grow through design, development and performance
            strategies.
          </p>

          <div className="lm-counters">
            {counters.map((c) => (
              <div className="lm-counter" key={c.id}>
                <div className="lm-counter-value" ref={addCounterRef}>
                  0
                </div>
                <div className="lm-counter-label">{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="lm-main">
        <section className="lm-section">
          <h3 className="section-title">Meet The Minds Behind FlareMinds</h3>

          <div className="premium-team-grid">
            {team.map((m) => (
              <div className="premium-team-card" key={m.name}>
                <div className="team-img-box">
                  <img src={m.image} alt={m.name} />
                </div>

                <div className="team-info">
                  <h4>{m.name}</h4>
                  <div className="role">{m.role}</div>
                </div>

                <div className="team-quote">
                  <p>"{m.bio}"</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
