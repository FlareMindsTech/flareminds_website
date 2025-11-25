import React, { useEffect, useRef, useState } from "react";
import vikiImg from "../assets/viki.jpg";
import yasirImg from "../assets/yasir.jpg";

export default function About() {
  const [expandedCard, setExpandedCard] = useState(null);

  const counters = [
    { id: "projects", label: "Projects", value: 128 },
    { id: "clients", label: "Clients", value: 67 },
    { id: "awards", label: "Awards", value: 12 },
    { id: "growth", label: "YoY Growth", value: 240 },
  ];

  const team = [
    {
      name: "Vignesh",
      role: "Founder & CEO",
      bio: "15+ years crafting brand strategy and product-led design.",
      image: vikiImg,
    },
    {
      name: "Yasir",
      role: "Lead Developer",
      bio: "Specialist in building fast, scalable, modern web apps.",
      image: yasirImg,
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

  const valueProps = [
    {
      title: "Smart Digital Marketing",
      icon: "🚀",
      shortDesc: "SEO, social media, content & paid campaigns with strategic creativity",
      fullDesc: "To provide SEO, social media, content, and paid campaign solutions, we blend strategy and creativity. In addition to marketing, we develop websites and unique iOS, Android, and online apps. Through innovation, we propel growth for both startups and established brands."
    },
    {
      title: "Proven Digital Strategies",
      icon: "📈",
      shortDesc: "Data-driven strategies tailored to your business goals",
      fullDesc: "In today's fast-paced digital landscape, having a strong online presence is essential for success. Our expert digital marketing team crafts data-driven strategies tailored to your business goals. Whether it's boosting your search engine rankings, engaging your audience on social media, or launching high-converting ad campaigns, we help you stay ahead of the competition and turn clicks into customers."
    },
    {
      title: "Expert Marketing Solutions",
      icon: "💡",
      shortDesc: "Transform clicks into loyal customers with strategic SEO & content",
      fullDesc: "Turning traffic into tangible results is our specialty. With a focus on strategic SEO, targeted advertising, engaging content, and social media mastery, we help your brand not only attract the right audience but convert them into loyal customers. Our expert marketing solutions are designed to boost visibility, increase engagement, and drive real business growth—every click brings you closer to success."
    },
    {
      title: "Technology for Scalable Success",
      icon: "⚡",
      shortDesc: "Marketing meets advanced IT solutions for sustainable growth",
      fullDesc: "We combine the power of strategic digital marketing with advanced IT solutions to help your business grow efficiently and sustainably. Our services include SEO, social media marketing, content creation, and paid advertising—designed to attract and engage the right audience. Alongside this, we offer expert website design and development, as well as custom application development for web, Android, and iOS platforms. By aligning marketing efforts with cutting-edge technology, we create seamless digital experiences that drive results and support long-term success."
    }
  ];

  const partners = [
    { name: "Dominator Pixel", industry: "Digital Agency" },
    { name: "Good Luck Healthcare", industry: "Healthcare" },
    { name: "Palmmitrip", industry: "Travel & Tourism" },
    { name: "Amads", industry: "Technology" },
    { name: "YesYes Innovations", industry: "Innovation Hub" },
    { name: "Deepthy Finisher", industry: "Manufacturing" }
  ];

  const counterRefs = useRef([]);
  counterRefs.current = [];

  const addCounterRef = (el) => {
    if (el && !counterRefs.current.includes(el)) counterRefs.current.push(el);
  };

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
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
          setTimeout(() => card.classList.remove("touch-reset"), 350);
          open = false;
        }
      };

      card.addEventListener("touchend", toggleCard);
    });
  }, []);

  return (
    <div className="lm-about-page">
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

      <main className="lm-main">
        {/* Value Propositions Section */}
        <section className="value-props-section">
          <h2 className="section-title-main">Why Choose FlareMinds?</h2>
          <div className="value-props-grid">
            {valueProps.map((prop, idx) => (
              <div
                className={`value-prop-card-v2 ${expandedCard === idx ? 'expanded' : ''}`}
                key={idx}
                onClick={() => toggleCard(idx)}
              >
                <div className="value-card-header">
                  <div className="value-prop-icon-v2">{prop.icon}</div>
                  <div className="value-prop-content">
                    <h3 className="value-prop-title-v2">{prop.title}</h3>
                    <p className="value-prop-short">{prop.shortDesc}</p>
                  </div>
                  <button className="expand-btn">
                    {expandedCard === idx ? '×' : '+'}
                  </button>
                </div>
                <div className="value-card-details">
                  <p>{prop.fullDesc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
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

        {/* Trusted Partners Section */}
        <section className="partners-section-v2">
          <h2 className="section-title-main">Empowering Our Valuable Customers</h2>
          <p className="partners-subtitle-v2">Trusted by Leading Brands</p>
          <div className="partners-list">
            {partners.map((partner, idx) => {
              // Get initials from company name
              const initials = partner.name
                .split(' ')
                .map(word => word[0])
                .join('')
                .substring(0, 2)
                .toUpperCase();

              return (
                <div className="partner-item" key={idx}>
                  <div className="partner-logo-circle">{initials}</div>
                  <div className="partner-content">
                    <h4 className="partner-company">{partner.name}</h4>
                    <span className="partner-industry">{partner.industry}</span>
                  </div>
                  <div className="partner-badge">Trusted</div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
