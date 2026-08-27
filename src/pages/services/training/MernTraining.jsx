import React, { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
  FaCheckCircle,
  FaGraduationCap
} from "react-icons/fa";
import SEO from "../../../components/common/SEO";
import ServiceHero from "../../../components/services/ServiceHero";
import ServiceHighlights from "../../../components/services/ServiceHighlights";
import ServiceFAQ from "../../../components/services/ServiceFAQ";
import ServiceCTA from "../../../components/services/ServiceCTA";
import { getCourseSchema, getFAQSchema } from "../../../utils/structuredData";
import "../../../styles/pages/service-detail.css";
import "../../../styles/pages/training.css";

export default function MernTraining() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      text: "I couldn't believe I built a full e-commerce site in just a few weeks. The MERN course is intense but worth it.",
      name: "Rohan Mehta",
      role: "MERN Developer @ TechFlow",
      img: "https://ui-avatars.com/api/?name=Rohan+M&background=random",
    },
    {
      text: "The way they teach Node.js and MongoDB makes backend development feel easy. Great instructors!",
      name: "Priya Sharma",
      role: "Full Stack Engineer",
      img: "https://ui-avatars.com/api/?name=Priya+S&background=random",
    },
    {
      text: "From API integration to authentication, every topic is covered in depth with real-world examples.",
      name: "Karthik Raj",
      role: "Freelance Developer",
      img: "https://ui-avatars.com/api/?name=Karthik+R&background=random",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const serviceData = {
    id: "mern-stack",
    title: "MERN Stack Development Masterclass",
    category: "Professional Training",
    accent: "#2563eb",
    bgLight: "rgba(37, 99, 235, 0.08)",
    heroDescription:
      "Master MongoDB, Express.js, React.js, and Node.js with hands-on live projects, architecture design, and 100% dedicated placement support.",
    faq: [
      {
        q: "What is the MERN stack?",
        a: "The MERN stack consists of MongoDB, Express.js, React, and Node.js, used for modern full-stack JavaScript and TypeScript web application development.",
      },
      {
        q: "Do you provide placement support after the course?",
        a: "Yes, we offer 100% placement assistance, resume reviews, portfolio construction, and mock technical interviews with senior engineers.",
      },
      {
        q: "Is this training suitable for beginners?",
        a: "Yes, our structured curriculum starts from the core fundamentals of JavaScript and progresses to advanced cloud deployment and production scaling.",
      },
    ],
  };

  const courseData = {
    name: serviceData.title,
    description: serviceData.heroDescription,
  };

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      getCourseSchema(courseData),
      getFAQSchema(serviceData.faq),
    ],
  };

  return (
    <div className="sd-page training-page">
      <SEO
        title="MERN Stack Developer Course in Coimbatore | Full Stack Training - FlareMinds"
        description="Master Full Stack Web Development with our MERN Stack training. Learn MongoDB, Express, React, and Node.js through real-world projects. Starting batches soon in Coimbatore."
        keywords="MERN stack training Coimbatore, full stack development course, React JS training, Node JS course, MongoDB training, web development training Coimbatore"
        schema={combinedSchema}
      />

      {/* ── 1. Hero Section with Code Studio Visual ─────────────────── */}
      <ServiceHero service={serviceData} slug="mern-stack" breadcrumbCategory="Training" />

      {/* ── 2. Highlights Ribbon ──────────────────────────────────────── */}
      <ServiceHighlights />

      {/* ── 3. Why Learn MERN Stack ───────────────────────────────────── */}
      <section className="sd-features-section section-padding">
        <div className="container">
          <div className="section-header text-center mb-5">
            <span className="sd-section-badge" style={{ backgroundColor: "rgba(37, 99, 235, 0.08)", color: "#2563eb" }}>
              Core Advantages
            </span>
            <h2 className="section-title">
              Why Master <span className="text-gradient">MERN Stack?</span>
            </h2>
            <p className="section-subtitle text-muted">
              The highest-demand JavaScript/TypeScript stack powering modern tech startups and global enterprises.
            </p>
          </div>

          <div className="sd-features-grid">
            {[
              { num: "01", icon: <FaReact />, title: "React.js Frontend", desc: "Build dynamic, reactive, high-speed single-page applications and dashboards." },
              { num: "02", icon: <FaNodeJs />, title: "Node.js & Express", desc: "Create robust, event-driven RESTful APIs, middleware, and microservices." },
              { num: "03", icon: <FaDatabase />, title: "MongoDB NoSQL", desc: "Design flexible document schemas, indexing strategies, and cloud Atlas databases." },
              { num: "04", icon: <FaServer />, title: "Full Stack Integration", desc: "Connect frontend, backend, JWT authentication, and payments seamlessly." },
              { num: "05", icon: <FaGraduationCap />, title: "5+ Live Projects", desc: "Graduate with an enterprise portfolio including eCommerce, SaaS, and social apps." },
              { num: "06", icon: <FaCheckCircle />, title: "100% Placement Support", desc: "Mock coding rounds, direct company referrals, and salary negotiation guidance." },
            ].map((feat, i) => (
              <div key={i} className="sd-feature-card glass-card">
                <div className="sd-feat-top">
                  <span className="sd-feat-num">{feat.num}</span>
                  <span className="sd-feat-icon-pill" style={{ color: "#2563eb", backgroundColor: "rgba(37, 99, 235, 0.08)" }}>
                    {feat.icon}
                  </span>
                </div>
                <h3 className="sd-feat-title">{feat.title}</h3>
                <p className="sd-feat-desc">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Curriculum Roadmap ─────────────────────────────────────── */}
      <section className="sd-process-section section-padding bg-light" id="curriculum">
        <div className="container">
          <div className="section-header text-center mb-5">
            <span className="sd-section-badge" style={{ backgroundColor: "rgba(37, 99, 235, 0.08)", color: "#2563eb" }}>
              Structured Syllabus
            </span>
            <h2 className="section-title">
              Complete <span className="text-gradient">Curriculum</span>
            </h2>
            <p className="section-subtitle text-muted">
              Progressive 4-module roadmap designed to take you from foundational JavaScript to senior-level engineering.
            </p>
          </div>

          <div className="curriculum-grid">
            {[
              {
                num: "01",
                title: "Frontend Engineering with React",
                desc: "Components, Hooks, State Management & Tailwind CSS",
                topics: ["React Hooks & Custom Hooks", "Context API & Redux Toolkit", "Tailwind CSS & Responsive UI"],
              },
              {
                num: "02",
                title: "Backend APIs with Node & Express",
                desc: "Server setup, REST architecture, error handling",
                topics: ["RESTful APIs & Controllers", "Express Router & Middleware", "Global Error Handling & Logging"],
              },
              {
                num: "03",
                title: "Database Engineering with MongoDB",
                desc: "Schema design, aggregation pipelines, Atlas Cloud",
                topics: ["Mongoose ODM & Schemas", "Data Validation & Indexing", "Atlas Cloud & Production Backups"],
              },
              {
                num: "04",
                title: "Auth, Payments & Cloud DevOps",
                desc: "JWT security, payment gateways, cloud deployment",
                topics: ["JWT Auth & Role-Based Access", "Stripe / Razorpay Integration", "Deployment on Vercel & AWS"],
              },
            ].map((module, idx) => (
              <div key={idx} className="module-card glass-card">
                <div className="module-number">{module.num}</div>
                <div className="module-content">
                  <h3>{module.title}</h3>
                  <p>{module.desc}</p>
                  <ul className="module-topics">
                    {module.topics.map((topic, i) => (
                      <li key={i}>
                        <FaCheckCircle className="check-icon" /> {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Student Success Stories ───────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header text-center mb-5">
            <span className="sd-section-badge" style={{ backgroundColor: "rgba(37, 99, 235, 0.08)", color: "#2563eb" }}>
              Student Alumni
            </span>
            <h2 className="section-title">
              Graduate <span className="text-gradient">Success Stories</span>
            </h2>
            <p className="section-subtitle text-muted">
              Real career transformations from our certified MERN Stack alumni.
            </p>
          </div>

          <div className="testimonial-carousel-container glass-card" style={{ maxWidth: "760px", margin: "0 auto" }}>
            <div className="student-card">
              <FaQuoteLeft className="quote-icon mx-auto" />
              <p className="student-quote">"{testimonials[currentSlide].text}"</p>
              <img src={testimonials[currentSlide].img} alt={testimonials[currentSlide].name} className="student-img" />
              <div className="student-info">
                <h4>{testimonials[currentSlide].name}</h4>
                <p>{testimonials[currentSlide].role}</p>
              </div>
            </div>

            <div className="carousel-controls">
              <button className="control-btn" onClick={prevSlide} aria-label="Previous story">
                <FaChevronLeft />
              </button>
              <div className="carousel-dots">
                {testimonials.map((_, idx) => (
                  <div
                    key={idx}
                    className={`dot-indicator ${idx === currentSlide ? "active" : ""}`}
                    onClick={() => setCurrentSlide(idx)}
                  />
                ))}
              </div>
              <button className="control-btn" onClick={nextSlide} aria-label="Next story">
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. FAQ Accordion ─────────────────────────────────────────── */}
      <ServiceFAQ service={serviceData} />

      {/* ── 7. Final CTA ─────────────────────────────────────────────── */}
      <ServiceCTA service={serviceData} />
    </div>
  );
}
