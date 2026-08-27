import React, { useEffect, useRef, useState } from "react";
import SEO from "../components/common/SEO";
import { getLocalBusinessSchema, getBreadcrumbSchema } from "../utils/structuredData";


import logo1 from "../assets/images/logo/logo.webp";
import logo2 from "../assets/images/logo/logo2.webp";
import logo3 from "../assets/images/logo/logo3.webp";
import logo4 from "../assets/images/logo/logo4.webp";
import logo5 from "../assets/images/logo/logo5.webp";
import logo6 from "../assets/images/logo/logo6.webp";
import logo7 from "../assets/images/logo/logo7.webp";
import logo8 from "../assets/images/logo/logo8.webp";
import logo9 from "../assets/images/logo/logo9.webp";
import CompanyCollage from "../components/ui/CompanyCollage";
import HeroBackground from "../components/common/HeroBackground";
import TeamCoverflow from "../components/ui/TeamCoverflow";
import { FaRocket, FaLightbulb, FaShieldAlt, FaEye, FaBullseye } from "react-icons/fa";

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
      name: "Vishnu",
      role: "CEO & Founder",
      bio: "15+ years crafting brand strategy, visionary leadership, and product-led design.",
      image: "",
    },
    {
      name: "Gokila",
      role: "Lead Developer",
      bio: "Specialist in building fast, scalable, high-performance modern web & cloud apps.",
      image: "",
    },
    {
      name: "Prakash",
      role: "UI/UX & Web Developer",
      bio: "Expert in interactive UI/UX and motion design; creates pixel-perfect digital experiences.",
      image: "",
    },
    {
      name: "Siva Kumar",
      role: "Backend Architect",
      bio: "Mastering database performance, high-load architecture, and robust API design.",
      image: "",
    },
    {
      name: "Priya",
      role: "Digital Strategist",
      bio: "Data-driven growth hacker optimizing search visibility and targeted multi-channel campaigns.",
      image: "",
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



  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [getLocalBusinessSchema(), getBreadcrumbSchema(breadcrumbs)],
  };

  return (
    <div className="lm-about-page">
      <SEO
        title="About FlareMinds - Digital Marketing & Technology Agency | Our Story"
        description="Learn about FlareMinds, a full-service digital agency in Coimbatore. Meet our expert team of developers, designers, and marketers committed to transforming your digital presence with innovative solutions."
        keywords="about flareminds, digital agency coimbatore, web development team, digital marketing experts, technology services, creative agency"
        schema={combinedSchema}
      />
      <header className="lm-hero">
        <HeroBackground />
        <div className="lm-hero-inner">
          <div className="lm-hero-eyebrow" aria-label="Section label">
            <span className="lm-hero-eyebrow-dot" />
            ABOUT FLAREMINDS
          </div>
          <h1 className="lm-hero-title">
            FlareMinds — <span className="lm-grad">Design & Growth Agency</span>
          </h1>
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
            <div className="story-grid-v2">
              {/* Left Column: Narrative & Milestones */}
              <div className="story-main-card">
                <div className="story-badge">
                  <span className="story-badge-dot"></span>
                  OUR GENESIS & PURPOSE
                </div>
                <h2 className="story-heading">
                  Crafting Digital Impact <br />
                  <span className="story-gradient-text">Through Innovation & Tech</span>
                </h2>
                <p className="story-lead">
                  Founded with a relentless passion for digital innovation, FlareMinds began as a specialized team determined to fuse <strong>cutting-edge technology</strong> with <strong>hyper-creative design</strong>.
                </p>
                <p className="story-desc">
                  Today, we’ve grown into a trusted digital agency, empowering startups, businesses, and global enterprises to accelerate their digital presence, automate workflows, and scale revenue with precision.
                </p>

                {/* Core DNA Highlights Strip */}
                <div className="story-dna-grid">
                  <div className="dna-item">
                    <div className="dna-icon-wrap dna-blue">
                      <FaRocket />
                    </div>
                    <div className="dna-content">
                      <h4>Rapid Scaling</h4>
                      <p>Agile sprints & fast deployment</p>
                    </div>
                  </div>
                  <div className="dna-item">
                    <div className="dna-icon-wrap dna-purple">
                      <FaLightbulb />
                    </div>
                    <div className="dna-content">
                      <h4>Creative Edge</h4>
                      <p>Bespoke UX & high conversion</p>
                    </div>
                  </div>
                  <div className="dna-item">
                    <div className="dna-icon-wrap dna-teal">
                      <FaShieldAlt />
                    </div>
                    <div className="dna-content">
                      <h4>Enterprise Grade</h4>
                      <p>Robust, secure & scalable systems</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Dynamic Vision & Mission Cards */}
              <div className="vision-mission-cards-v2">
                <div className="vm-card-v2 vm-vision">
                  <div className="vm-card-glow"></div>
                  <div className="vm-card-header">
                    <div className="vm-icon-box vision-icon">
                      <FaEye />
                    </div>
                    <span className="vm-pill">LONG-TERM GOAL</span>
                  </div>
                  <h3 className="vm-title">Our Vision</h3>
                  <p className="vm-text">
                    To be the leading catalyst for digital transformation globally, empowering ambitious brands to achieve their highest growth potential through game-changing digital technology and human-centric design.
                  </p>
                  <div className="vm-footer-accent vision-accent"></div>
                </div>

                <div className="vm-card-v2 vm-mission">
                  <div className="vm-card-glow"></div>
                  <div className="vm-card-header">
                    <div className="vm-icon-box mission-icon">
                      <FaBullseye />
                    </div>
                    <span className="vm-pill">DAILY PURPOSE</span>
                  </div>
                  <h3 className="vm-title">Our Mission</h3>
                  <p className="vm-text">
                    To engineer reliable, performant, and aesthetic software solutions that generate measurable business growth, build deep brand authority, and create sustainable competitive advantage for every partner.
                  </p>
                  <div className="vm-footer-accent mission-accent"></div>
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
                  <span className="expand-btn" aria-hidden="true">
                    {expandedCard === idx ? '×' : '+'}
                  </span>
                </div>
                <div className="value-card-details">
                  <p>{prop.fullDesc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="lm-section team-showcase-section">
          <h2 className="section-title">Meet The Minds Behind FlareMinds</h2>
          <TeamCoverflow team={team} />
        </section>

        <section className="partners-section-v2">
          <h2 className="section-title-main">Empowering Our Valuable Customers</h2>
          <p className="partners-subtitle-v2">Trusted by Leading Brands</p>
          <div className="partners-list">
            {partners.map((partner, idx) => {
              return (
                <div className="partner-item" key={idx}>
                  <div className="partner-logo-circle">
                    <img src={partner.logo} alt={`${partner.name} - ${partner.industry}`} />
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

        <section className="memory-folder-section">
          <h2 className="section-title-main">Memory Live Forever</h2>
          <div className="folder-container">
            <CompanyCollage />
          </div>
        </section>
      </main>
    </div>
  );
}
