import React, { useEffect, useRef, useState } from "react";
import vikiImg from "../assets/viki.jpg";
import yasirImg from "../assets/yasir.jpg";
import prakashImg from "../assets/prakash.jpg";
import SivaImg from "../assets/siva.jpg";
import logo1 from "../assets/logo/logo.jpg";
import logo2 from "../assets/logo/logo2.jpg";
import logo3 from "../assets/logo/logo3.jpg";
import logo4 from "../assets/logo/logo4.jpg";
import logo5 from "../assets/logo/logo5.jpg";
import logo6 from "../assets/logo/logo6.jpg";
import logo7 from "../assets/logo/logo7.jpg";
import logo8 from "../assets/logo/logo8.jpg";
import logo9 from "../assets/logo/logo9.jpg";
import DomeGallery from "../components/DomeGallery";
import Folder from "../components/Folder";

export default function About() {
  const [expandedCard, setExpandedCard] = useState(null);
  const [showGallery, setShowGallery] = useState(false);

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
      name: "Yaser",
      role: "Lead Developer",
      bio: "Specialist in building fast, scalable, modern web apps.",
      image: yasirImg,
    },
    {
      name: "Prakash",
      role: "Web Developer",
      bio: "Expert in UI/UX & motion; creates pixel-perfect experiences.",
      image: prakashImg
      ,
    },
    {
      name: "Siva Kumar",
      role: "Backend Developer",
      bio: "Technical SEO expert improving visibility and ranking.",
      image:
        SivaImg,
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
    { name: "Good Luck Healthcare", industry: "Health Care", logo: logo1 },
    { name: "AM Ads", industry: "Digital Agency", logo: logo2 },
    { name: "Plan my trip", industry: "Travel & Tourism", logo: logo3 },
    { name: "Yes Yes Innovation", industry: "Innovation Hub", logo: logo4 },
    { name: "Right Touch ", industry: "Technology", logo: logo5 },
    { name: "Green Realty Experts", industry: "Manufacturing", logo: logo6 },
    { name: "Dominator Pixel", industry: "IT Services", logo: logo7 },
    { name: "Kovai Property", industry: "Design Studio", logo: logo8 },
    { name: "Global Ventures", industry: "Business Consulting", logo: logo9 }
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
        <section className="company-story-section section-padding">
          <div className="container">
            <div className="story-grid">
              <div className="story-content">
                <h2 className="section-title-main">Our Story</h2>
                <p>
                  Founded with a passion for digital innovation, FlareMinds started as a small team of dreamers determined to bridge the gap between creative design and technical excellence.
                  Over the years, we have evolved into a full-service digital agency, helping businesses across the globe transform their digital presence.
                </p>
                <p>
                  We believe in the power of collaboration and the impact of well-crafted digital experiences. Our journey is defined by the success of our clients.
                </p>
              </div>
              <div className="vision-mission-grid">
                <div className="vm-card glass-card">
                  <h3>Our Vision</h3>
                  <p>To be the leading catalyst for digital transformation, empowering businesses to achieve their full potential through innovative technology and design.</p>
                </div>
                <div className="vm-card glass-card">
                  <h3>Our Mission</h3>
                  <p>To deliver exceptional digital solutions that drive growth, foster connection, and create lasting value for our clients and their customers.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

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


        <section className="partners-section-v2">
          <h2 className="section-title-main">Empowering Our Valuable Customers</h2>
          <p className="partners-subtitle-v2">Trusted by Leading Brands</p>
          <div className="partners-list">
            {partners.map((partner, idx) => {
              return (
                <div className="partner-item" key={idx}>
                  <div className="partner-logo-circle">
                    <img src={partner.logo} alt={partner.name} />
                  </div>
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

        <section className="memory-folder-section" style={{ textAlign: 'center', padding: '3rem 1.5rem' }}>
          <h2 className="section-title-main" style={{ marginBottom: '2rem' }}>Memory Live Forever</h2>
          <div style={{ height: '600px', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div onClick={() => setShowGallery(true)}>
              <Folder size={3} color="#5227FF" className="custom-folder" />
            </div>
          </div>
        </section>

        {showGallery && (
          <div
            className="gallery-modal"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.95)',
              zIndex: 9999,
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <button
              onClick={() => setShowGallery(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                fontSize: '24px',
                cursor: 'pointer',
                zIndex: 10000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.3)';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                e.target.style.transform = 'scale(1)';
              }}
            >
              ×
            </button>
            <div style={{ flex: 1, position: 'relative' }}>
              <DomeGallery
                grayscale={false}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
