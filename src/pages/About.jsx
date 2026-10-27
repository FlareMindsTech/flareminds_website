import React, { useEffect, useRef, useState } from "react";
import SEO from "../components/common/SEO";
import { getLocalBusinessSchema, getBreadcrumbSchema } from "../utils/structuredData";
import "../styles/pages/about.css";


import logo1 from "../assets/images/logo/logo.webp";
import logo2 from "../assets/images/logo/logo2.webp";
import logo3 from "../assets/images/logo/logo3.webp";
import logo4 from "../assets/images/logo/logo4.webp";
import logo5 from "../assets/images/logo/logo5.webp";
import logo6 from "../assets/images/logo/logo6.webp";
import logo7 from "../assets/images/logo/logo7.webp";
import logo8 from "../assets/images/logo/logo8.webp";
import logo9 from "../assets/images/logo/logo9.webp";
import atlantisHealthcityLogo from "../assets/images/logo/atlantis-healthcity.webp";
import shySchoolYercaudLogo from "../assets/images/logo/shy-school-yercaud.webp";
import smtTyresLogo from "../assets/images/logo/smt-tyres.webp";
import jkTyresLogo from "../assets/images/logo/jk-tyres.webp";
import Bharath from "../assets/images/members/bharath.webp";
import Gokila from "../assets/images/members/GOKILA.webp";
import Karan from "../assets/images/members/KARAN.webp";
import Kartheeswaran from "../assets/images/members/KARTHEESWARAN.webp";
import Karthikeyan from "../assets/images/members/KARTHIKEYAN.webp";
import Narasimman from "../assets/images/members/NARASIMMAN.webp";
import Priyadharsan from "../assets/images/members/PRIYADHARSAN.webp";
import Rajesh from "../assets/images/members/RAJESH.webp";
import Sanjeev from "../assets/images/members/SANJEEV.webp";
import Sri from "../assets/images/members/SRI.webp";
import Sridhar from "../assets/images/members/SRIDHAR.webp";
import Sivakumar from "../assets/images/members/SIVAKUMAR.webp";
import Surya from "../assets/images/members/SURYA.webp";
import Vicky from "../assets/images/members/VICKY.webp";
import Vishnu from "../assets/images/members/VISHNU.webp";
import Yaser from "../assets/images/members/YASAER.webp";
import CompanyCollage from "../components/ui/CompanyCollage";
import HeroBackground from "../components/common/HeroBackground";
import TeamCoverflow from "../components/ui/TeamCoverflow";
import { FaRocket, FaLightbulb, FaShieldAlt, FaEye, FaBullseye, FaLaptopCode, FaChartLine, FaBolt } from "react-icons/fa";

const COUNTERS = [
  { id: "projects", label: "Projects", value: 128 },
  { id: "clients", label: "Clients", value: 67 },
  { id: "awards", label: "Awards", value: 12 },
  { id: "growth", label: "YoY Growth", value: 240 },
];

export default function About() {
  const [expandedCard, setExpandedCard] = useState(null);
  const counters = COUNTERS;

  const team = [
    {
      name: "Vishnu Anandkannan ",
      role: "Founder & Managing Director",
      bio: "Vision-driven CEO who leads brand strategy, business growth, and innovation, building impactful digital solutions that help businesses succeed.",
      image: Vishnu,
      imagePosition: "center 8%",
    },
    {
      name: "Gokilavani M",
      role: "Co-Founder & Technical Head",
      bio: "Leads the development of scalable, high-performance web applications with a focus on modern technologies and clean architecture.",
      image: Gokila,
      imagePosition: "center 15%",
    },
    {
      name: "KARAN",
      role: "TECH LEAD / TECH TRAINER",
      bio: "Guides development teams, mentors aspiring developers, and promotes coding best practices and modern software engineering standards.",
      image: Karan,
      imagePosition: "center 8%",
    },
    {
      name: "MOHAMMED YASER A",
      role: "Full Stack Developer",
      bio: "Builds engaging user interfaces and robust backend services, combining responsive design with seamless application functionality.",
      image: Yaser,
      imagePosition: "center 10%",
    },
    {
      name: "BHARATH P",
      role: "Full Stack Developer",
      bio: "Develops end-to-end web applications by integrating interactive frontend experiences with secure APIs and efficient database solutions.",
      image: Bharath,
      imagePosition: "center 15%",
    },
    {
      name: "SRI LAKSHMAN K",
      role: "Full Stack Developer",
      bio: "Creates scalable web applications with expertise in frontend development, backend integration, and reliable data management.",
      image: Sri,
      imagePosition: "center 18%",
    },
    {
      name: "KARTHEESHWARAN G",
      role: "Full Stack Developer",
      bio: "Builds feature-rich web applications by connecting modern frontend technologies with efficient server-side logic and APIs.",
      image: Kartheeswaran,
      imagePosition: "center 28%",
    },
    {
      name: "VIGNESH S",
      role: "Full Stack Developer",
      bio: "Develops responsive web interfaces and dependable backend systems to deliver smooth, accessible, and user-focused digital experiences.",
      image: Vicky,
      imagePosition: "center 10%",
    },
    {
      name: "KARTHIKEYAN G",
      role: "Full Stack Developer",
      bio: "Transforms product requirements into functional web solutions through frontend development, backend programming, and system integration.",
      image: Karthikeyan,
      imagePosition: "center 18%",
    },
    {
      name: "Sivakumar S",
      role: "Full Stack Developer",
      bio: "Develops responsive web interfaces and robust backend architectures to build scalable, high-performance digital solutions.",
      image: Sivakumar,
      imagePosition: "center 8%",
    },
    {
      name: "SRIDHAR S",
      role: "CTO",
      bio: "Drives technology strategy, system architecture, and engineering innovation to deliver reliable and scalable digital solutions.",
      image: Sridhar,
      imagePosition: "center 8%",
    },
    {
      name: "Rajesh Kumar R",
      role: "CHRO & Digital Marketing Manager",
      bio: "Orchestrates human capital strategies, organizational growth, and high-impact digital marketing campaigns that drive business expansion.",
      image: Rajesh,
      imagePosition: "center 8%",
    },
    {
      name: "Narasimman Gunasekaran",
      role: "Head - Media Team",
      bio: "Leads creative media production, visual storytelling, and digital content strategies to amplify brand identity and reach.",
      image: Narasimman,
      imagePosition: "center 10%",
    },
    {
      name: "Sanjeev Kumar",
      role: "Graphic Designer",
      bio: "Crafts visually captivating designs, brand assets, and creative marketing collateral that communicate ideas with impact.",
      image: Sanjeev,
      imagePosition: "center 8%",
    },
    {
      name: "Priyadharsan K",
      role: "Video Editor",
      bio: "Produces high-impact visual stories, dynamic motion edits, and engaging multimedia content that brings brand narratives to life.",
      image: Priyadharsan,
      imagePosition: "center 8%",
    },
    {
      name: "Surya K",
      role: "Media Team",
      bio: "Drives dynamic multimedia production, digital content creation, and creative media campaigns across modern digital channels.",
      image: Surya,
      imagePosition: "center 8%",
    },
  ];

  const valueProps = [
    {
      title: "Web & App Development",
      icon: <FaLaptopCode />,
      shortDesc: "High-performance websites, mobile apps & custom software",
      fullDesc: "We build fast, responsive websites and feature-rich Android, iOS, and web applications using modern architectures. From startup MVPs to enterprise platforms, our development team creates scalable digital products engineered for reliability and speed."
    },
    {
      title: "Smart Digital Marketing",
      icon: <FaRocket />,
      shortDesc: "SEO, social media, content & paid ad campaigns with strategic creativity",
      fullDesc: "To provide SEO, social media, content, and paid campaign solutions, we blend strategy and creativity. Our expert digital marketing team crafts data-driven campaigns tailored to your business goals to boost rankings, engage audiences, and turn clicks into customers."
    },
    {
      title: "Proven Digital Growth",
      icon: <FaChartLine />,
      shortDesc: "Data-driven strategies tailored to your business goals",
      fullDesc: "In today's fast-paced digital landscape, having a strong online presence is essential for success. We align our development and marketing strategies to help you stay ahead of the competition, boost organic search traffic, and convert visitors into loyal clients."
    },
    {
      title: "Technology for Scalable Success",
      icon: <FaBolt />,
      shortDesc: "Development meets advanced marketing for sustainable growth",
      fullDesc: "We combine the power of strategic digital marketing with advanced software development to help your business grow efficiently and sustainably. By aligning marketing efforts with cutting-edge technology, we create seamless digital experiences that drive measurable long-term success."
    }
  ];

  const partners = [
    { name: "Good Luck Healthcare", category: "Health Care", logo: logo1 },
    { name: "AM Ads", category: "Media", logo: logo2 },
    { name: "Plan my trip", category: "Travel & Tourism", logo: logo3 },
    { name: "Yes Yes Innovation", category: "Technology", logo: logo4 },
    { name: "Right Touch ", category: "Technology", logo: logo5 },
    { name: "Green Realty Experts", category: "Manufacturing", logo: logo6 },
    { name: "Dominator Pixel", category: "Media", logo: logo7 },
    { name: "Kovai Property", category: "Real Estate", logo: logo8 },
    { name: "Global Ventures", category: "Business Consulting", logo: logo9 },
    { name: "SHY School Yercaud", category: "Education", logo: shySchoolYercaudLogo },
    { name: "AVK Hospital", category: "Healthcare" },
    { name: "Bayamilla Pechu", category: "Media" },
    { name: "JK Tyres", category: "Automotive", logo: jkTyresLogo },
    { name: "Sakthi Murugan Tyres", category: "Automotive", logo: smtTyresLogo },
    {
      name: "Atlantis Healthcity",
      category: "Healthcare",
      logo: atlantisHealthcityLogo,
    },
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
      const target = COUNTERS[idx].value;
      let startTime = null;
      const duration = 1200;

      const animate = (ts) => {
        if (!startTime) startTime = ts;
        const progress = Math.min((ts - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.innerText =
          Math.floor(eased * target) +
          (COUNTERS[idx].id === "growth" ? "%" : "");
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
        title="About FlareMinds - Web & App Development & Digital Marketing Agency"
        description="Learn about FlareMinds, a full-service technology and digital marketing company. Meet our expert team of developers, designers, and marketers committed to transforming your digital presence with innovative solutions."
        keywords="about flareminds, digital agency coimbatore, web development team, app developers, digital marketing experts, technology services, software company"
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
            FlareMinds — <span className="lm-grad">Development &amp; Digital Marketing</span>
          </h1>
          <p className="lm-hero-sub">
            We engineer high-performance web &amp; mobile applications and execute data-driven digital marketing strategies that scale brands.
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

        {/* Scroll indicator prompt */}
        <div className="lm-hero-scroll-hint" aria-hidden="true">
          <span className="lm-scroll-dot" />
          <span>Scroll to explore</span>
        </div>
      </header>

      <main className="lm-main">
        <section className="company-story-section">
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
          <div className="partners-grid">
            {partners.map((partner) => (
              <div
                className="partner-tile"
                key={partner.name}
                tabIndex="0"
                aria-label={`${partner.name} - ${partner.category || "Customer"}`}
              >
                <div className="partner-logo-circle">
                  {partner.logo ? (
                    <img src={partner.logo} alt={`${partner.name} logo`} />
                  ) : null}
                </div>
                <div className="partner-content">
                  <h4 className="partner-company">{partner.name}</h4>
                  <span className="partner-industry">{partner.category || "Customer"}</span>
                </div>
              </div>
            ))}
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
