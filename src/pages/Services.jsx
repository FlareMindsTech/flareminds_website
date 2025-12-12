import React, { useMemo, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaCode, FaMobileAlt, FaRocket, FaCheckCircle, FaCogs, FaServer,
  FaChartLine, FaBullhorn, FaFunnelDollar, FaShoppingCart, FaBuilding,
  FaUserTie, FaCloud
} from "react-icons/fa";
import "../pages/css/services.css";

export default function Services() {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  const services = useMemo(
    () => ({
      "website-development": {
        title: "Website Development",
        hero: {
          title: "Premium",
          highlight: "Website Development",
          subtitle: "We build lightning-fast, responsive websites optimized for performance, conversions, and branding."
        },
        overview: {
          title: "Why Choose Our Web Solutions?",
          text: "Our websites load under 1 second and are crafted with SEO-friendly architecture. Perfect for SMEs, startups, and brands looking to dominate their market.",
          features: [
            "Super-fast page loading (Core Web Vitals)",
            "Fully responsive UI for all devices",
            "SEO optimized architecture",
            "Modern animations (GSAP, Framer Motion)"
          ]
        },
        process: [
          { step: "01", title: "Discovery", desc: "Requirement & Competitor Research" },
          { step: "02", title: "Design", desc: "Wireframes & Figma UI (High-Fidelity)" },
          { step: "03", title: "Development", desc: "Clean Code & API Integration" },
          { step: "04", title: "Testing", desc: "Performance & SEO Checks" },
          { step: "05", title: "Launch", desc: "Deployment & Support" }
        ],
        techStack: ["React.js", "Next.js", "Tailwind CSS", "Node.js", "MongoDB", "AWS"],
        faq: [
          { q: "How long does it take?", a: "Typically 2-4 weeks depending on complexity." },
          { q: "Do you provide hosting?", a: "Yes, we assist with hosting and domain setup." },
          { q: "Is it SEO friendly?", a: "Absolutely, built with SEO best practices." }
        ]
      },
      "seo-analytics": {
        title: "SEO & Analytics",
        hero: {
          title: "Dominate",
          highlight: "Search Results",
          subtitle: "We help businesses rank on Google using advanced SEO strategies, competitor research, and real-time analytics."
        },
        overview: {
          title: "Why Invest in SEO?",
          text: "SEO is not just about keywords — it's about building authority and driving organic traffic that converts. We optimize your digital presence for long-term growth.",
          features: [
            "On-Page & Technical SEO Optimization",
            "High-Quality Backlink Building",
            "Keyword Research & Intent Mapping",
            "Google Analytics 4 & Search Console Setup"
          ]
        },
        process: [
          { step: "01", title: "Audit", desc: "Full Website & Competitor Analysis" },
          { step: "02", title: "Strategy", desc: "Keyword & Content Planning" },
          { step: "03", title: "Optimization", desc: "On-Page & Technical Fixes" },
          { step: "04", title: "Authority", desc: "Link Building & Outreach" },
          { step: "05", title: "Reporting", desc: "Monthly Analytics & Growth Tracking" }
        ],
        techStack: ["Google Analytics", "Search Console", "Semrush", "Ahrefs", "Screaming Frog", "Looker Studio"],
        faq: [
          { q: "How long to see results?", a: "SEO is a long-term game, typically 3-6 months for significant impact." },
          { q: "Do you guarantee #1 ranking?", a: "No ethical agency guarantees #1, but we guarantee improved visibility and traffic." },
          { q: "Is this a one-time service?", a: "We offer both one-time audits and monthly retainers for continuous growth." }
        ]
      },
      "social-media-marketing": {
        title: "Social Media Marketing",
        hero: {
          title: "Build Your",
          highlight: "Brand Online",
          subtitle: "Grow on Instagram, Facebook, LinkedIn, and YouTube with powerful content and targeted strategies."
        },
        overview: {
          title: "Engage & Convert",
          text: "Social media is more than posting; it's about community and trust. We handle everything from creative design to paid ad campaigns.",
          features: [
            "Content Strategy & Calendar",
            "Reels & Video Editing",
            "Paid Ad Campaigns (Meta Ads)",
            "Community Management & Engagement"
          ]
        },
        process: [
          { step: "01", title: "Research", desc: "Audience & Competitor Analysis" },
          { step: "02", title: "Strategy", desc: "Content Pillars & Calendar" },
          { step: "03", title: "Creation", desc: "Design, Copywriting & Editing" },
          { step: "04", title: "Distribution", desc: "Posting & Scheduling" },
          { step: "05", title: "Growth", desc: "Ads & Engagement Optimization" }
        ],
        techStack: ["Meta Business Suite", "Canva Pro", "Premiere Pro", "CapCut", "Hootsuite", "Google Trends"],
        faq: [
          { q: "Which platforms do you manage?", a: "Instagram, Facebook, LinkedIn, YouTube, and Twitter." },
          { q: "Do you include ad spend?", a: "No, ad spend is paid directly to the platform by you." },
          { q: "Can you make viral reels?", a: "We create trend-driven content designed to maximize reach and engagement." }
        ]
      },
      "lead-generation": {
        title: "Lead Generation",
        hero: {
          title: "High-Quality",
          highlight: "Business Leads",
          subtitle: "Systems powered by Google Ads, Meta Ads, and Landing Pages to bring you customers, not just clicks."
        },
        overview: {
          title: "Stop Chasing, Start Closing",
          text: "We build automated funnels that target your ideal customer, capture their interest, and deliver warm leads directly to your CRM.",
          features: [
            "High-Converting Landing Pages",
            "Google & Meta Ad Campaigns",
            "Automated Email & WhatsApp Follow-ups",
            "CRM Integration & Lead Tracking"
          ]
        },
        process: [
          { step: "01", title: "Analysis", desc: "Target Audience & Offer Definition" },
          { step: "02", title: "Setup", desc: "Landing Page & Funnel Creation" },
          { step: "03", title: "Launch", desc: "Ad Campaign Kickoff" },
          { step: "04", title: "Optimize", desc: "A/B Testing & Budget Scaling" },
          { step: "05", title: "Nurture", desc: "Automation & Retargeting" }
        ],
        techStack: ["Google Ads", "Meta Ads", "HubSpot", "Zapier", "WordPress/React", "Mailchimp"],
        faq: [
          { q: "What is the cost per lead?", a: "Varies by industry, but we optimize to lower it over time." },
          { q: "Do you guarantee leads?", a: "We guarantee a high-performance system and transparent reporting." },
          { q: "Which industries do you serve?", a: "Real Estate, Education, Healthcare, B2B Services, and more." }
        ]
      },
      "ecommerce-solutions": {
        title: "Ecommerce Solutions",
        hero: {
          title: "Scalable",
          highlight: "Ecommerce Stores",
          subtitle: "Complete ecosystems for D2C brands, wholesalers, and retailers designed to sell more."
        },
        overview: {
          title: "Your Store, Your Empire",
          text: "We build secure, fast, and scalable online stores with seamless payment, shipping, and inventory management integrations.",
          features: [
            "Custom Storefront Design",
            "Payment Gateway & Shipping Integration",
            "Inventory & Order Management",
            "Admin Dashboard & Analytics"
          ]
        },
        process: [
          { step: "01", title: "Plan", desc: "Catalog & Feature Mapping" },
          { step: "02", title: "Design", desc: "UI/UX for High Conversion" },
          { step: "03", title: "Build", desc: "Development & Database Setup" },
          { step: "04", title: "Integrate", desc: "Payments, Logistics, APIs" },
          { step: "05", title: "Grow", desc: "Launch & Marketing Setup" }
        ],
        techStack: ["Shopify", "WooCommerce", "React/Next.js", "Node.js", "Stripe/Razorpay", "Firebase"],
        faq: [
          { q: "Can you migrate my store?", a: "Yes, we handle data migration from other platforms." },
          { q: "Is it mobile friendly?", a: "100% mobile-optimized for the best shopping experience." },
          { q: "Do you support multi-vendor?", a: "Yes, we can build marketplace solutions like Amazon/Flipkart." }
        ]
      },
      "erp-systems": {
        title: "ERP Systems",
        hero: {
          title: "Custom",
          highlight: "ERP Software",
          subtitle: "Streamline your entire business operation from Finance and HR to Supply Chain in one unified platform."
        },
        overview: {
          title: "Efficiency at Scale",
          text: "Stop using scattered spreadsheets. Our custom ERP solutions integrate every department, providing real-time data and automation.",
          features: [
            "Finance & Accounting Modules",
            "HRMS & Payroll Management",
            "Inventory & Supply Chain Tracking",
            "Role-Based Access Control"
          ]
        },
        process: [
          { step: "01", title: "Audit", desc: "Business Process Analysis" },
          { step: "02", title: "Blueprint", desc: "System Architecture Design" },
          { step: "03", title: "Develop", desc: "Module Creation & Integration" },
          { step: "04", title: "Migrate", desc: "Data Transfer & Onboarding" },
          { step: "05", title: "Support", desc: "Maintenance & Updates" }
        ],
        techStack: ["React.js", "Node.js", "PostgreSQL", "Docker", "AWS", "Redis"],
        faq: [
          { q: "Is it cloud-based?", a: "Yes, accessible securely from anywhere." },
          { q: "Can it integrate with my bank?", a: "We can integrate with supported banking APIs." },
          { q: "Is training provided?", a: "Yes, we provide full training for your staff." }
        ]
      },
      "crm-solutions": {
        title: "CRM Solutions",
        hero: {
          title: "Smart",
          highlight: "CRM Systems",
          subtitle: "Manage customer relationships, automate sales follow-ups, and close more deals with a custom CRM."
        },
        overview: {
          title: "Know Your Customer",
          text: "A central hub for all your customer interactions. Track leads, manage pipelines, and automate communication effortlessly.",
          features: [
            "Lead & Pipeline Management",
            "Automated Workflows & Reminders",
            "Email & WhatsApp Integration",
            "Detailed Sales Analytics"
          ]
        },
        process: [
          { step: "01", title: "Consult", desc: "Sales Process Review" },
          { step: "02", title: "Customize", desc: "Field & Workflow Setup" },
          { step: "03", title: "Integrate", desc: "Connect with Website/Ads" },
          { step: "04", title: "Train", desc: "Team Onboarding" },
          { step: "05", title: "Scale", desc: "Feature Expansion" }
        ],
        techStack: ["React.js", "Node.js", "MongoDB", "Firebase", "Twilio", "SendGrid"],
        faq: [
          { q: "Can I import old data?", a: "Yes, we handle bulk data imports." },
          { q: "Does it have a mobile app?", a: "We can build a companion mobile app for field sales." },
          { q: "Is it secure?", a: "We use enterprise-grade encryption for your data." }
        ]
      },
      "custom-saas": {
        title: "Custom SaaS",
        hero: {
          title: "Launch Your",
          highlight: "SaaS Product",
          subtitle: "Turn your idea into a scalable, multi-tenant software business with our end-to-end SaaS development."
        },
        overview: {
          title: "Built for Scale",
          text: "We handle the complex tech stack—multi-tenancy, billing, security—so you can focus on marketing and growing your user base.",
          features: [
            "Multi-Tenant Architecture",
            "Subscription Billing (Stripe/Razorpay)",
            "User Management & Auth",
            "Admin Super-Dashboard"
          ]
        },
        process: [
          { step: "01", title: "Scope", desc: "MVP Definition & Roadmap" },
          { step: "02", title: "Design", desc: "SaaS UI/UX Prototyping" },
          { step: "03", title: "Build", desc: "Core Feature Development" },
          { step: "04", title: "Beta", desc: "Testing & Feedback Loop" },
          { step: "05", title: "Launch", desc: "Public Release & Scaling" }
        ],
        techStack: ["Next.js", "PostgreSQL", "Prisma", "Stripe", "AWS Lambda", "Vercel"],
        faq: [
          { q: "Do I own the code?", a: "Yes, 100% IP ownership belongs to you." },
          { q: "Can you help with MVP?", a: "We specialize in fast MVP launches." },
          { q: "How do you handle updates?", a: "We set up CI/CD pipelines for seamless updates." }
        ]
      }
    }),
    []
  );

  const currentService = services[slug] || services["website-development"];

  return (
    <div className="service-page-container">
      <section className="service-hero">
        <div className="container">
          <h1 className="hero-title">
            {currentService.hero.title} <span className="text-gradient">{currentService.hero.highlight}</span>
          </h1>
          <p className="hero-subtitle">
            {currentService.hero.subtitle}
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn-primary">Get a Quote</Link>
            <a href="#overview" className="btn-outline">Learn More</a>
          </div>
        </div>
      </section>

      <section id="overview" className="service-overview section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="section-title">{currentService.overview.title}</h2>
              <p>{currentService.overview.text}</p>
              <ul className="feature-list">
                {currentService.overview.features.map((feature, idx) => (
                  <li key={idx}><FaCheckCircle className="icon-check" /> {feature}</li>
                ))}
              </ul>
            </div>
            <div className="col-md-6">
              <div className="service-visual glass-card">
                <FaRocket className="visual-icon" />
                <h3>Premium Quality</h3>
                <p>Delivering excellence in every project.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-process section-padding bg-light">
        <div className="container">
          <h2 className="section-title text-center">Our Process</h2>
          <div className="process-grid">
            {currentService.process.map((item, index) => (
              <div key={index} className="process-card glass-card">
                <div className="step-number">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tech-stack section-padding">
        <div className="container text-center">
          <h2 className="section-title">Tools & Technologies</h2>
          <div className="tech-icons">
            {currentService.techStack.map((tech, idx) => (
              <span key={idx} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="service-faq section-padding">
        <div className="container">
          <h2 className="section-title text-center">Frequently Asked Questions</h2>
          <div className="faq-grid">
            {currentService.faq.map((item, idx) => (
              <div key={idx} className="faq-item glass-card">
                <h4>{item.q}</h4>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-cta text-center section-padding">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <Link to="/contact" className="btn-primary glow-effect">Start Your Project</Link>
        </div>
      </section>
    </div>
  );
}
