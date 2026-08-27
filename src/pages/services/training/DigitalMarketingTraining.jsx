import React from "react";
import {
  FaBullhorn,
  FaSearch,
  FaChartLine,
  FaHashtag,
  FaCheckCircle,
  FaGraduationCap,
  FaAward
} from "react-icons/fa";
import SEO from "../../../components/common/SEO";
import ServiceHero from "../../../components/services/ServiceHero";
import ServiceHighlights from "../../../components/services/ServiceHighlights";
import ServiceFAQ from "../../../components/services/ServiceFAQ";
import ServiceCTA from "../../../components/services/ServiceCTA";
import TestimonialCarousel from "../../../components/ui/TestimonialCarousel";
import { getCourseSchema, getFAQSchema } from "../../../utils/structuredData";
import "../../../styles/pages/service-detail.css";
import "../../../styles/pages/training.css";

export default function DigitalMarketingTraining() {
  const testimonials = [
    {
      text: "I started my own digital agency after this course. The practical knowledge on ads and SEO is unmatched.",
      name: "Anjali Kumari",
      role: "Founder, DigiTrend",
      img: "https://ui-avatars.com/api/?name=Anjali+K&background=random",
    },
    {
      text: "Helped me grow my freelance business. I now manage social media for 5 international clients.",
      name: "Rahul Verma",
      role: "Freelance Marketer",
      img: "https://ui-avatars.com/api/?name=Rahul+V&background=random",
    },
    {
      text: "The advanced SEO module opened my eyes. I ranked my blog in 2 months applying these techniques.",
      name: "Sneha Patel",
      role: "Content Strategist",
      img: "https://ui-avatars.com/api/?name=Sneha+P&background=random",
    },
  ];

  const serviceData = {
    id: "digital-marketing",
    title: "Practical Digital Marketing Masterclass",
    category: "Professional Training",
    accent: "#0ea5e9",
    bgLight: "rgba(14, 165, 233, 0.08)",
    heroDescription:
      "Master SEO, Performance Ads (Google & Meta), Content Marketing, and GA4 Analytics with live ad budgets and 100% agency placement support.",
    faq: [
      {
        q: "What will I learn in the digital marketing course?",
        a: "You will master SEO, Social Media Marketing (SMM), Google Ads (PPC), Meta Ads Manager, Content Marketing, and Google Analytics 4.",
      },
      {
        q: "Do you offer official certifications?",
        a: "Yes, you will receive an industry-recognized certificate from FlareMinds and complete preparation for Google and HubSpot certifications.",
      },
      {
        q: "Are the classes practical and hands-on?",
        a: "Every student manages real live advertising campaigns, performs technical audits on live websites, and builds a comprehensive client portfolio.",
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
        title="Best Digital Marketing Training in Coimbatore | SEO & Ads Course - FlareMinds"
        description="Master Digital Marketing with our comprehensive training. Learn SEO, SMM, and Google Ads from experts. Join the best digital marketing course in Coimbatore today."
        keywords="digital marketing training Coimbatore, SEO course Coimbatore, social media marketing training, Google Ads course, digital marketing agency training"
        schema={combinedSchema}
      />

      {/* ── 1. Hero Section with Growth Lab Visual ───────────────────── */}
      <ServiceHero service={serviceData} slug="digital-marketing" breadcrumbCategory="Training" />

      {/* ── 2. Highlights Ribbon ──────────────────────────────────────── */}
      <ServiceHighlights />

      {/* ── 3. Why Learn Digital Marketing ────────────────────────────── */}
      <section className="sd-features-section section-padding">
        <div className="container">
          <div className="section-header text-center mb-5">
            <span className="sd-section-badge" style={{ backgroundColor: "rgba(14, 165, 233, 0.08)", color: "#0ea5e9" }}>
              Strategic Growth
            </span>
            <h2 className="section-title">
              Why Learn <span className="text-gradient">Digital Marketing?</span>
            </h2>
            <p className="section-subtitle text-muted">
              Every modern brand needs revenue-generating digital visibility. Master the high-income marketing channels.
            </p>
          </div>

          <div className="sd-features-grid">
            {[
              { num: "01", icon: <FaSearch />, title: "SEO Mastery", desc: "Rank websites on Page 1 of Google Search and drive massive organic conversion traffic." },
              { num: "02", icon: <FaHashtag />, title: "Social Media Engine", desc: "Build high-converting viral brands on Instagram, YouTube, and LinkedIn." },
              { num: "03", icon: <FaBullhorn />, title: "Paid Advertising (PPC)", desc: "Run profitable Google Ads, Meta Ads, and ROI-driven performance marketing funnels." },
              { num: "04", icon: <FaChartLine />, title: "Data & GA4 Analytics", desc: "Measure conversions, user journeys, CAC, and LTV with Google Analytics 4." },
              { num: "05", icon: <FaAward />, title: "Google & HubSpot Certs", desc: "Gain globally recognized credentials that make your resume stand out to employers." },
              { num: "06", icon: <FaGraduationCap />, title: "100% Placement Support", desc: "Agency internships, freelance client acquisition training, and MNC job referrals." },
            ].map((feat, i) => (
              <div key={i} className="sd-feature-card glass-card">
                <div className="sd-feat-top">
                  <span className="sd-feat-num">{feat.num}</span>
                  <span className="sd-feat-icon-pill" style={{ color: "#0ea5e9", backgroundColor: "rgba(14, 165, 233, 0.08)" }}>
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
            <span className="sd-section-badge" style={{ backgroundColor: "rgba(14, 165, 233, 0.08)", color: "#0ea5e9" }}>
              360° Syllabus
            </span>
            <h2 className="section-title">
              Complete <span className="text-gradient">Curriculum</span>
            </h2>
            <p className="section-subtitle text-muted">
              A comprehensive 4-module roadmap covering organic search, performance ads, viral content, and analytics.
            </p>
          </div>

          <div className="curriculum-grid">
            {[
              {
                num: "01",
                title: "SEO & Content Marketing",
                desc: "Keyword Research, On-Page, Off-Page & Technical SEO",
                topics: ["Google Search Console & Semrush", "Content Strategy & Blogging", "Link Building & Domain Authority"],
              },
              {
                num: "02",
                title: "Social Media Marketing",
                desc: "Instagram, LinkedIn, YouTube & Threads Growth",
                topics: ["Personal & Corporate Branding", "Content Calendars & Viral Copy", "Community Growth & Influencer Funnels"],
              },
              {
                num: "03",
                title: "Performance Paid Ads (PPC)",
                desc: "Google Ads, Meta Ads Manager & Retargeting",
                topics: ["Ad Copywriting & Creatives", "High-Converting Audience Targeting", "ROAS Optimization & Budget Scaling"],
              },
              {
                num: "04",
                title: "Analytics & Growth Strategy",
                desc: "GA4, Conversion Optimization & Client Pitching",
                topics: ["User Behavior & Funnel Tracking", "CRO Strategies & A/B Testing", "Client Pitching & Agency Reporting"],
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
            <span className="sd-section-badge" style={{ backgroundColor: "rgba(14, 165, 233, 0.08)", color: "#0ea5e9" }}>
              Proven Outcomes
            </span>
            <h2 className="section-title">
              Student <span className="text-gradient">Success Stories</span>
            </h2>
            <p className="section-subtitle text-muted">
              From learners to agency founders and high-performing digital marketers.
            </p>
          </div>

          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* ── 6. FAQ Accordion ─────────────────────────────────────────── */}
      <ServiceFAQ service={serviceData} />

      {/* ── 7. Final CTA ─────────────────────────────────────────────── */}
      <ServiceCTA service={serviceData} />
    </div>
  );
}
