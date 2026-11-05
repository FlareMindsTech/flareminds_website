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

      {/* ── 4. OBE-Based Course Syllabus ──────────────────────────────── */}
      <section className="sd-process-section section-padding bg-light" id="curriculum">
        <div className="container">
          <div className="section-header text-center mb-5">
            <span className="sd-section-badge" style={{ backgroundColor: "rgba(37, 99, 235, 0.08)", color: "#2563eb" }}>
              Structured Syllabus
            </span>
            <h2 className="section-title">
              OBE-Based Course <span className="text-gradient">Syllabus</span>
            </h2>
            <p className="section-subtitle text-muted">
              Five integrated units covering frontend, backend, databases, DevOps, and a GitHub-based full-stack project.
            </p>
          </div>

          <div className="syllabus-profile">
            {[
              ["Course Structure", "5 Units"],
              ["Primary Stack", "MongoDB • Express.js • React.js • Node.js"],
              ["Additional Skills", "SQL • GitHub • DevOps • Deployment"],
              ["Course Focus", "Full-Stack Web Application Development"],
            ].map(([label, value]) => (
              <div className="syllabus-profile-item" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>

          <div className="syllabus-columns">
            <div className="syllabus-panel">
              <h3>Course Objectives</h3>
              <ol>
                <li><b>COBJ1:</b> Develop a strong foundation in modern frontend development using React.js, component-based architecture, JSX, hooks, routing, forms, and API integration.</li>
                <li><b>COBJ2:</b> Build scalable backend applications using Node.js and Express.js, including REST APIs, middleware, authentication, validation, and error handling.</li>
                <li><b>COBJ3:</b> Design and implement data-driven applications using MongoDB/NoSQL and SQL databases, with appropriate schemas, queries, relationships, and CRUD operations.</li>
                <li><b>COBJ4:</b> Apply DevOps practices for source control, environment configuration, application building, testing, deployment, hosting, and basic CI/CD workflows.</li>
                <li><b>COBJ5:</b> Integrate frontend, backend, database, and deployment technologies to develop and publish a functional full-stack application through GitHub-based project workflows.</li>
              </ol>
            </div>
            <div className="syllabus-panel">
              <h3>Course Outcomes</h3>
              <ol>
                <li><b>CO1:</b> Explain and apply React.js concepts to construct reusable, responsive, and interactive user interfaces.</li>
                <li><b>CO2:</b> Develop RESTful backend services using Node.js and Express.js with routing, middleware, authentication, validation, and error handling.</li>
                <li><b>CO3:</b> Create and manage MongoDB and SQL databases and perform suitable CRUD, querying, indexing, and relationship operations.</li>
                <li><b>CO4:</b> Configure, deploy, monitor, and maintain web applications using Git, GitHub, environment variables, hosting platforms, and basic DevOps/CI-CD practices.</li>
                <li><b>CO5:</b> Design, implement, test, document, version-control, and deploy a complete MERN-based mini project demonstrating integrated full-stack development skills.</li>
              </ol>
            </div>
          </div>

          <div className="curriculum-grid">
            {[
              {
                num: "01",
                title: "Unit I – Frontend Development Using ReactJS",
                desc: "Modern web development, client-server architecture, SPA concepts, MERN overview, React fundamentals, JSX, elements, rendering, functional components, props, composition, state, events, and controlled components.",
                topics: ["Hooks: useEffect, useRef, useMemo, useCallback and custom hooks", "Forms, validation, conditional rendering, lists and reusable components", "React Router, protected routes, API integration, responsive UI and production builds"],
              },
              {
                num: "02",
                title: "Unit II – Backend Development Using NodeJS",
                desc: "Node.js runtime architecture, npm, modules, asynchronous programming, callbacks, Promises, async/await, event loop, non-blocking I/O, Express application structure, routing, and request-response lifecycle.",
                topics: ["REST APIs, HTTP methods, status codes, JSON and API design", "Middleware, CRUD, validation, logging and centralized error handling", "JWT, sessions, roles, file handling, CORS, rate limiting, testing and API documentation"],
              },
              {
                num: "03",
                title: "Unit III – Database Using MongoDB (NoSQL) & SQL",
                desc: "Database fundamentals, DBMS/RDBMS, NoSQL selection, MongoDB architecture, databases, collections, documents, BSON, ObjectId, CRUD operations, filters, projection, and schema design.",
                topics: ["Embedded and referenced documents, validation and data modeling", "Aggregation, indexes, sorting, pagination and basic optimization", "SQL tables, keys, constraints, queries, joins, relationships, transactions and secure Node.js integration"],
              },
              {
                num: "04",
                title: "Unit IV – DevOps (Deployment)",
                desc: "DevOps culture, lifecycle, collaboration, automation, Git fundamentals, repository workflows, branching, merging, GitHub issues, pull requests, README files, and project collaboration.",
                topics: ["Environment configuration, secrets, production settings and dependency management", "Build, domain, DNS, ports, HTTPS, hosting and frontend/backend deployment", "CI/CD with GitHub Actions, logs, health checks, troubleshooting, rollback and maintenance"],
              },
              {
                num: "05",
                title: "Unit V – Mini Project Using GitHub",
                desc: "Identify a practical problem, define users and requirements, create wireframes, plan architecture, design the database, and organize a GitHub repository.",
                topics: ["Implement React, Node.js/Express and MongoDB/SQL integration", "Authentication, security, REST APIs, testing, debugging and validation", "Deploy, document, present, defend the architecture and explain future enhancements"],
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

          <div className="syllabus-panel syllabus-wide-panel">
            <h3>Suggested Mini Project Domains</h3>
            <div className="domain-list">
              {["Student Management System", "College Event Management System", "Online Book Store", "Task / Project Management System", "Food Ordering Application", "Job / Internship Portal", "E-Learning Platform", "Hospital / Appointment Management System", "Expense Tracker", "Travel Recommendation Application"].map((domain) => (
                <span key={domain}>{domain}</span>
              ))}
            </div>
          </div>

          <div className="syllabus-panel syllabus-wide-panel">
            <h3>OBE Alignment: Course Outcomes to Units</h3>
            <div className="obe-table-wrapper">
              <table className="obe-table">
                <thead><tr><th>CO / Unit</th><th>U-I</th><th>U-II</th><th>U-III</th><th>U-IV</th><th>U-V</th></tr></thead>
                <tbody>
                  {[["CO1 – React UI", "✓", "", "", "", "✓"], ["CO2 – Node/Express", "", "✓", "", "", "✓"], ["CO3 – MongoDB/SQL", "", "", "✓", "", "✓"], ["CO4 – DevOps/Deployment", "", "", "", "✓", "✓"], ["CO5 – Full-Stack Project", "✓", "✓", "✓", "✓", "✓"]].map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={`${row[0]}-${index}`}>{cell}</td>)}</tr>)}
                </tbody>
              </table>
            </div>
          </div>

          <div className="syllabus-panel syllabus-wide-panel">
            <h3>Recommended Practical Components</h3>
            <ul className="practical-list">
              <li>React component development and responsive page creation.</li>
              <li>REST API implementation using Node.js and Express.js.</li>
              <li>MongoDB and SQL CRUD exercises.</li>
              <li>Git/GitHub branching, pull request and issue-based workflow.</li>
              <li>Application deployment with environment configuration.</li>
              <li>End-to-end MERN mini project with GitHub repository and live deployment.</li>
            </ul>
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
