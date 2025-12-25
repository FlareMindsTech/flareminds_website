import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SocialButton from "../components/SocialButton";
import { useScrollAnimation } from "../hooks/useScrollAnimation";


export default function Home() {

  useEffect(() => {
  }, []);

  useScrollAnimation('.premium-reveal', 'show');

  const marqueeText =
    "Website Design • SEO • Google Ads • SMM • Branding • Lead Gen • UI/UX • Strategy";

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="bg-grid-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Marketing That Speaks Today's Digital Language
            </h1>

            <p className="hero-subtext">
              We craft digital experiences that connect, convert, and scale. Let
              your brand fly higher with Branding Wings.
            </p>

            <div className="hero-buttons">
              <Link to="/services" className="btn-primary">
                Explore Services
              </Link>
              <Link to="/contact" className="btn-outline">
                Get in Touch
              </Link>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "2rem",
              }}
            >
              <SocialButton />
            </div>
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
            {
              title: "Creative Strategy",
              text: "Business-focused digital planning.",
            },
            { title: "High-End Designs", text: "Modern UI/UX that converts." },
            { title: "Digital Growth", text: "Scale your brand effortlessly." },

          ].map((f, i) => (
            <div key={i} className="feature-card premium-reveal">
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>


      <section className="about-summary section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="section-title">Who We Are</h2>
              <p className="section-text">
                FlareMinds is a full-service digital agency dedicated to helping
                businesses grow. We combine creative design, data-driven
                marketing, and robust technology to build brands that stand out.
                From startups to enterprises, we deliver solutions that drive
                real results.
              </p>
              <Link to="/about" className="btn-link">
                Read Our Story →
              </Link>
            </div>
            <div className="col-md-6">
              <div className="about-visual glass-card">
                <h3>15+ Years</h3>
                <p>Combined Experience</p>
              </div>
            </div>
          </div>
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
              <p>Premium solutions tailored to your business needs.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="portfolio-preview section-padding">
        <div className="container">
          <h2 className="section-title">Featured Work</h2>
          <div className="projects-grid">
            {[
              {
                title: "E-Commerce Fashion",
                cat: "Web Dev",
                img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "HealthTech App",
                cat: "App Dev",
                img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Real Estate Platform",
                cat: "Web Dev",
                img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
              },
            ].map((p, i) => (
              <div key={i} className="project-card glass-card">
                <img src={p.img} alt={p.title} className="project-thumb" />
                <div className="project-info">
                  <span>{p.cat}</span>
                  <h3>{p.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/projects" className="btn-outline">
              View All Projects
            </Link>
          </div>
        </div>
      </section>


    </div>
  );
}
