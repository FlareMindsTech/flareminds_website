import React from "react";
import {
  FaCheck,
  FaArrowUp,
  FaShieldAlt,
  FaStar,
  FaHeart,
  FaShare,
  FaCode,
  FaServer,
  FaDatabase,
  FaSearch,
  FaChartLine,
  FaPlay,
  FaLock,
  FaBolt,
  FaGlobe,
  FaMobileAlt,
  FaShoppingCart,
  FaLayerGroup,
  FaRobot,
  FaBrain,
  FaBullhorn,
  FaFileAlt
} from "react-icons/fa";

/**
 * ServiceVisual renders a lightweight, CSS/SVG product/service interface visual
 * for each service slug, strictly using FlareMinds brand colors.
 */
export default function ServiceVisual({ slug }) {
  switch (slug) {
    // 1. Website Development: Browser + Code + Preview
    case "website-development":
      return (
        <div className="sv-mockup sv-browser-mockup">
          <div className="sv-window-header">
            <div className="sv-window-dots">
              <span className="sv-dot red" />
              <span className="sv-dot yellow" />
              <span className="sv-dot green" />
            </div>
            <div className="sv-window-url">
              <FaLock className="sv-url-lock" />
              <span>https://yourcompany.com</span>
            </div>
            <div className="sv-window-score">
              <span className="sv-score-pill">
                <FaBolt /> 99 Lighthouse
              </span>
            </div>
          </div>
          <div className="sv-window-body">
            <div className="sv-code-sidebar">
              <div className="sv-file active"><FaCode /> App.jsx</div>
              <div className="sv-file"><FaFileAlt /> styles.css</div>
              <div className="sv-file"><FaFileAlt /> api.ts</div>
            </div>
            <div className="sv-code-editor">
              <div className="sv-code-line">
                <span className="c-keyword">import</span> &#123; createWebsite &#125; <span className="c-keyword">from</span> <span className="c-string">"@flareminds"</span>;
              </div>
              <div className="sv-code-line">
                <span className="c-keyword">const</span> app = <span className="c-fn">createWebsite</span>(&#123;
              </div>
              <div className="sv-code-line indent">
                speed: <span className="c-string">"ultra-fast"</span>,
              </div>
              <div className="sv-code-line indent">
                seo: <span className="c-keyword">true</span>, responsive: <span className="c-keyword">true</span>
              </div>
              <div className="sv-code-line">&#125;);</div>
              <div className="sv-preview-mini">
                <div className="sv-preview-bar" />
                <div className="sv-preview-grid">
                  <div className="sv-preview-card" />
                  <div className="sv-preview-card" />
                </div>
              </div>
            </div>
          </div>
          <div className="sv-float-badge sv-badge-bottom-right">
            <FaCheckCircleIcon /> Responsive UI / UX
          </div>
        </div>
      );

    // 2. Mobile App Development: Dual Mobile Frames
    case "mobile-app-development":
      return (
        <div className="sv-mockup sv-mobile-mockup">
          <div className="sv-phone-frame sv-phone-primary">
            <div className="sv-phone-notch" />
            <div className="sv-phone-header">
              <div className="sv-phone-avatar" />
              <div className="sv-phone-user">
                <strong>FlareMinds App</strong>
                <small>iOS &amp; Android Native</small>
              </div>
            </div>
            <div className="sv-phone-card">
              <div className="sv-phone-metric-val">120 FPS</div>
              <div className="sv-phone-metric-lbl">Ultra Smooth Performance</div>
              <div className="sv-phone-sparkline">
                <svg viewBox="0 0 100 24" className="sv-sparkline-svg">
                  <path d="M0,18 Q25,5 50,14 T100,6" fill="none" stroke="#0ea5e9" strokeWidth="2.5" />
                </svg>
              </div>
            </div>
            <div className="sv-phone-actions">
              <div className="sv-action-btn primary">Deploy App</div>
              <div className="sv-action-btn">Test Run</div>
            </div>
            <div className="sv-phone-nav">
              <div className="sv-nav-dot active" />
              <div className="sv-nav-dot" />
              <div className="sv-nav-dot" />
            </div>
          </div>

          <div className="sv-phone-frame sv-phone-secondary">
            <div className="sv-phone-notch" />
            <div className="sv-phone-screen-sec">
              <div className="sv-sec-icon"><FaMobileAlt /></div>
              <div className="sv-sec-title">Cross-Platform</div>
              <div className="sv-sec-chip">Flutter &amp; React Native</div>
            </div>
          </div>
          <div className="sv-float-badge sv-badge-top-right">
            <FaBolt /> 60 FPS Native
          </div>
        </div>
      );

    // 3. E-commerce Solutions: Product Card + Checkout UI
    case "e-commerce-solutions":
      return (
        <div className="sv-mockup sv-ecommerce-mockup">
          <div className="sv-ecom-card">
            <div className="sv-ecom-badge">🔥 Bestseller</div>
            <div className="sv-ecom-img-ph">
              <FaShoppingCart className="sv-ecom-cart-icon" />
            </div>
            <div className="sv-ecom-details">
              <div className="sv-ecom-category">Storefront Pro</div>
              <h4 className="sv-ecom-title">Custom E-Commerce Platform</h4>
              <div className="sv-ecom-price-row">
                <span className="sv-price">$249.00</span>
                <span className="sv-rating"><FaStar /> 4.9 (1.2k)</span>
              </div>
              <div className="sv-ecom-btn-row">
                <button className="sv-cart-btn"><FaShoppingCart /> Instant Checkout</button>
              </div>
            </div>
          </div>
          <div className="sv-ecom-analytics-card">
            <div className="sv-stat-label">Conversion Rate</div>
            <div className="sv-stat-num">+38.4% <FaArrowUp className="text-emerald-500" /></div>
            <div className="sv-stat-sub">Stripe, Razorpay &amp; PayPal Integrated</div>
          </div>
          <div className="sv-float-badge sv-badge-top-left">
            <FaCheckCircleIcon /> Secure 1-Click Pay
          </div>
        </div>
      );

    // 4. Business Applications: Enterprise ERP/CRM Dashboard
    case "business-applications":
      return (
        <div className="sv-mockup sv-dashboard-mockup">
          <div className="sv-dash-header">
            <div className="sv-dash-title">Enterprise Cloud Portal</div>
            <div className="sv-dash-status">
              <span className="sv-live-dot" /> Live Systems
            </div>
          </div>
          <div className="sv-dash-kpis">
            <div className="sv-kpi-box">
              <small>Process Automation</small>
              <strong>99.4%</strong>
            </div>
            <div className="sv-kpi-box">
              <small>Active Workflows</small>
              <strong>1,480+</strong>
            </div>
          </div>
          <div className="sv-dash-pipeline">
            <div className="sv-pipe-step done">
              <span className="sv-pipe-num">1</span> Intake
            </div>
            <div className="sv-pipe-line active" />
            <div className="sv-pipe-step active">
              <span className="sv-pipe-num">2</span> Validation
            </div>
            <div className="sv-pipe-line" />
            <div className="sv-pipe-step">
              <span className="sv-pipe-num">3</span> Execution
            </div>
          </div>
          <div className="sv-float-badge sv-badge-bottom-right">
            <FaShieldAlt /> SOC-2 Ready
          </div>
        </div>
      );

    // 5. Service Marketplace: Two-sided matching platform
    case "service-marketplace":
      return (
        <div className="sv-mockup sv-marketplace-mockup">
          <div className="sv-market-top">
            <div className="sv-market-user-card">
              <div className="sv-user-avatar vendor" />
              <div className="sv-user-meta">
                <strong>Elite Provider</strong>
                <span>Verified Specialist ★ 4.9</span>
              </div>
              <span className="sv-status-pill available">Available</span>
            </div>
            <div className="sv-market-connector">
              <span className="sv-connect-line" />
              <span className="sv-connect-badge">Instant Match</span>
            </div>
            <div className="sv-market-user-card client">
              <div className="sv-user-avatar client" />
              <div className="sv-user-meta">
                <strong>Enterprise Client</strong>
                <span>Direct Booking Confirmed</span>
              </div>
              <span className="sv-status-pill booked">Active</span>
            </div>
          </div>
          <div className="sv-float-badge sv-badge-bottom-left">
            <FaGlobe /> Multi-Vendor Scalable
          </div>
        </div>
      );

    // 6. Custom Software Development: System Architecture Blueprint
    case "custom-software-development":
      return (
        <div className="sv-mockup sv-arch-mockup">
          <div className="sv-arch-grid">
            <div className="sv-arch-node gateway">
              <FaGlobe /> API Gateway
            </div>
            <div className="sv-arch-connect vertical" />
            <div className="sv-arch-services-row">
              <div className="sv-arch-node service">
                <FaServer /> Auth
              </div>
              <div className="sv-arch-node service highlight">
                <FaLayerGroup /> Core API
              </div>
              <div className="sv-arch-node service">
                <FaBolt /> Worker
              </div>
            </div>
            <div className="sv-arch-connect vertical" />
            <div className="sv-arch-node db">
              <FaDatabase /> Cloud Database Cluster
            </div>
          </div>
          <div className="sv-float-badge sv-badge-top-right">
            <FaCheckCircleIcon /> Microservice Architecture
          </div>
        </div>
      );

    // 7. SEO & Analytics: Google #1 Ranking + Growth Curve
    case "seo-analytics":
      return (
        <div className="sv-mockup sv-seo-mockup">
          <div className="sv-google-card">
            <div className="sv-google-rank">#1 on Google Search</div>
            <div className="sv-google-title">FlareMinds - Top Ranked Solutions</div>
            <div className="sv-google-desc">
              Accelerate keyword visibility, on-page optimization, and high-converting organic search traffic.
            </div>
          </div>
          <div className="sv-seo-graph-card">
            <div className="sv-graph-header">
              <span>Organic Traffic Growth</span>
              <strong className="text-emerald-500">+142.8% <FaArrowUp /></strong>
            </div>
            <div className="sv-seo-chart">
              <svg viewBox="0 0 200 60" className="sv-chart-svg">
                <defs>
                  <linearGradient id="seoGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path d="M0,50 Q40,40 80,35 T140,18 T200,6 L200,60 L0,60 Z" fill="url(#seoGrad)" />
                <path d="M0,50 Q40,40 80,35 T140,18 T200,6" fill="none" stroke="#0ea5e9" strokeWidth="3" />
              </svg>
            </div>
          </div>
          <div className="sv-float-badge sv-badge-bottom-left">
            <FaSearch /> Core Web Vitals Pass
          </div>
        </div>
      );

    // 8. Social Media Marketing: Viral Feed + Engagement Pulse
    case "social-media-marketing":
      return (
        <div className="sv-mockup sv-social-mockup">
          <div className="sv-social-post">
            <div className="sv-post-header">
              <div className="sv-post-avatar" />
              <div>
                <strong>Brand Studio</strong>
                <small>Sponsored Campaign</small>
              </div>
            </div>
            <div className="sv-post-content">
              <div className="sv-post-banner">
                <span>🚀 Viral Content Engine</span>
              </div>
            </div>
            <div className="sv-post-stats">
              <span className="sv-stat-pill"><FaHeart className="text-rose-500" /> 18.4k</span>
              <span className="sv-stat-pill"><FaShare className="text-sky-500" /> 4.2k</span>
              <span className="sv-stat-pill">★ 98% Positive</span>
            </div>
          </div>
          <div className="sv-float-badge sv-badge-top-right">
            <FaChartLine /> +48k Reach / Week
          </div>
        </div>
      );

    // 9. Performance Marketing: ROAS & Conversion Funnel
    case "performance-marketing":
      return (
        <div className="sv-mockup sv-perf-mockup">
          <div className="sv-perf-card">
            <div className="sv-perf-top">
              <div>
                <small>Average Return on Ad Spend</small>
                <h3>4.8x ROAS</h3>
              </div>
              <div className="sv-roas-badge">High ROI</div>
            </div>
            <div className="sv-funnel">
              <div className="sv-funnel-step f1">
                <span>Ad Impressions</span>
                <strong>450,000</strong>
              </div>
              <div className="sv-funnel-step f2">
                <span>Qualified Clicks</span>
                <strong>38,500</strong>
              </div>
              <div className="sv-funnel-step f3">
                <span>High-Value Conversions</span>
                <strong>3,140</strong>
              </div>
            </div>
          </div>
          <div className="sv-float-badge sv-badge-bottom-right">
            <FaBolt /> Lower CAC (-35%)
          </div>
        </div>
      );

    // 10. Branding & Creative Design: Typography & Canvas Visual
    case "branding-creative-design":
      return (
        <div className="sv-mockup sv-brand-mockup">
          <div className="sv-brand-canvas">
            <div className="sv-palette-row">
              <div className="sv-color-swatch c1"><span>#0ea5e9</span></div>
              <div className="sv-color-swatch c2"><span>#2563eb</span></div>
              <div className="sv-color-swatch c3"><span>#0f172a</span></div>
            </div>
            <div className="sv-typography-spec">
              <div className="sv-typo-heading">Aa Modern Typography</div>
              <div className="sv-typo-body">Geometric Sans • Precision Grid • Vector Scalable</div>
            </div>
            <div className="sv-bezier-preview">
              <svg viewBox="0 0 160 40" className="sv-bezier-svg">
                <path d="M10,30 C50,0 110,40 150,10" fill="none" stroke="#2563eb" strokeWidth="2.5" />
                <circle cx="10" cy="30" r="4" fill="#0ea5e9" />
                <circle cx="150" cy="10" r="4" fill="#0ea5e9" />
              </svg>
            </div>
          </div>
          <div className="sv-float-badge sv-badge-top-left">
            <FaLayerGroup /> Brand Identity Kit
          </div>
        </div>
      );

    // 11. Creative Media Production: 4K Timeline & Soundwave
    case "creative-media-production":
      return (
        <div className="sv-mockup sv-media-mockup">
          <div className="sv-media-workstation">
            <div className="sv-media-player">
              <div className="sv-play-btn"><FaPlay /></div>
              <span className="sv-media-tag">4K / 60 FPS ProRes</span>
            </div>
            <div className="sv-timeline">
              <div className="sv-track video">
                <div className="sv-clip v1">Scene 01</div>
                <div className="sv-clip v2">Scene 02 (Color LUT)</div>
                <div className="sv-clip v3">Outro</div>
              </div>
              <div className="sv-track audio">
                <div className="sv-waveform" />
              </div>
            </div>
          </div>
          <div className="sv-float-badge sv-badge-bottom-right">
            <FaBolt /> Cinema Quality
          </div>
        </div>
      );

    // 12. Content Marketing: Editorial Studio & Readability
    case "content-marketing":
      return (
        <div className="sv-mockup sv-content-mockup">
          <div className="sv-content-article">
            <div className="sv-article-tag">Content Strategy Hub</div>
            <h4 className="sv-article-title">High-Impact Storytelling That Drives Organic Sales</h4>
            <div className="sv-article-lines">
              <div className="sv-line w-full" />
              <div className="sv-line w-4-5" />
              <div className="sv-line w-2-3" />
            </div>
            <div className="sv-content-metrics">
              <div className="sv-c-metric">
                <small>SEO Score</small>
                <strong>98 / 100</strong>
              </div>
              <div className="sv-c-metric">
                <small>Readability</small>
                <strong>Grade A+</strong>
              </div>
            </div>
          </div>
          <div className="sv-float-badge sv-badge-top-right">
            <FaCheckCircleIcon /> Multi-Channel Syndication
          </div>
        </div>
      );

    // 13. Maintenance & Support: 99.99% Uptime & Telemetry
    case "maintenance-support":
      return (
        <div className="sv-mockup sv-support-mockup">
          <div className="sv-support-panel">
            <div className="sv-support-header">
              <div className="sv-uptime-pill">
                <span className="sv-pulse-green" /> 99.99% Uptime SLA
              </div>
              <div className="sv-sec-pill"><FaShieldAlt /> 24/7 Monitored</div>
            </div>
            <div className="sv-telemetry-grid">
              <div className="sv-telemetry-item">
                <small>Response Time</small>
                <strong>&lt; 15 Mins</strong>
              </div>
              <div className="sv-telemetry-item">
                <small>Security Patches</small>
                <strong>Automated</strong>
              </div>
            </div>
            <div className="sv-health-bars">
              <div className="sv-bar-row">
                <span>Server Health</span>
                <div className="sv-bar-track"><div className="sv-bar-fill" style={{ width: "98%" }} /></div>
              </div>
              <div className="sv-bar-row">
                <span>Backup Integrity</span>
                <div className="sv-bar-track"><div className="sv-bar-fill" style={{ width: "100%" }} /></div>
              </div>
            </div>
          </div>
          <div className="sv-float-badge sv-badge-bottom-left">
            <FaShieldAlt /> Zero Downtime Migration
          </div>
        </div>
      );

    // 14. MERN Stack Training: Code Editor + Terminal
    case "mern-stack":
      return (
        <div className="sv-mockup sv-browser-mockup sv-training-mern">
          <div className="sv-window-header">
            <div className="sv-window-dots">
              <span className="sv-dot red" />
              <span className="sv-dot yellow" />
              <span className="sv-dot green" />
            </div>
            <div className="sv-window-url">
              <span>FullStackStudio - React &amp; Node</span>
            </div>
          </div>
          <div className="sv-window-body">
            <div className="sv-code-sidebar">
              <div className="sv-file active"><FaCode /> Server.js</div>
              <div className="sv-file"><FaDatabase /> Mongo.db</div>
              <div className="sv-file"><FaReactIcon /> App.tsx</div>
            </div>
            <div className="sv-code-editor">
              <div className="sv-code-line"><span className="c-keyword">import</span> express <span className="c-keyword">from</span> <span className="c-string">"express"</span>;</div>
              <div className="sv-code-line"><span className="c-keyword">const</span> app = <span className="c-fn">express</span>();</div>
              <div className="sv-code-line indent">app.<span className="c-fn">use</span>(express.<span className="c-fn">json</span>());</div>
              <div className="sv-code-line indent"><span className="c-keyword">await</span> db.<span className="c-fn">connect</span>();</div>
              <div className="sv-terminal-mini">
                <div className="sv-terminal-bar">Terminal (zsh)</div>
                <div className="sv-term-text">$ npm run build:ok &gt;&gt; Ready on :5173</div>
              </div>
            </div>
          </div>
          <div className="sv-float-badge sv-badge-bottom-right">
            <FaBolt /> 5+ Live Projects
          </div>
        </div>
      );

    // 15. Digital Marketing Training: Growth Engine Lab
    case "digital-marketing":
      return (
        <div className="sv-mockup sv-perf-mockup">
          <div className="sv-perf-card">
            <div className="sv-perf-top">
              <div>
                <small>Agency Masterclass</small>
                <h3>Growth Marketing Lab</h3>
              </div>
              <div className="sv-roas-badge">Live Ads</div>
            </div>
            <div className="sv-funnel">
              <div className="sv-funnel-step f1">
                <span>Google &amp; Meta Ads Lab</span>
                <strong>Live Budgets</strong>
              </div>
              <div className="sv-funnel-step f2">
                <span>Technical SEO &amp; GA4</span>
                <strong>Real Traffic</strong>
              </div>
              <div className="sv-funnel-step f3">
                <span>Viral Copywriting</span>
                <strong>High ROAS</strong>
              </div>
            </div>
          </div>
          <div className="sv-float-badge sv-badge-bottom-right">
            <FaBullhorn /> 100% Placement Support
          </div>
        </div>
      );

    // 16. AI/ML Training: Neural Network & Tensor Visual
    case "ai-ml":
      return (
        <div className="sv-mockup sv-arch-mockup sv-aiml-mockup">
          <div className="sv-neural-grid">
            <div className="sv-neural-layer input">
              <div className="sv-neuron">x1</div>
              <div className="sv-neuron">x2</div>
              <div className="sv-neuron">x3</div>
            </div>
            <div className="sv-neural-weights">
              <svg viewBox="0 0 80 80" className="sv-weights-svg">
                <line x1="5" y1="15" x2="75" y2="40" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="5" y1="40" x2="75" y2="40" stroke="#2563eb" strokeWidth="2" />
                <line x1="5" y1="65" x2="75" y2="40" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="3 3" />
              </svg>
            </div>
            <div className="sv-neural-layer hidden-node">
              <div className="sv-neuron active"><FaBrain /></div>
            </div>
            <div className="sv-neural-weights">
              <svg viewBox="0 0 80 80" className="sv-weights-svg">
                <line x1="5" y1="40" x2="75" y2="40" stroke="#0ea5e9" strokeWidth="2" />
              </svg>
            </div>
            <div className="sv-neural-layer output">
              <div className="sv-neuron out"><FaRobot /></div>
            </div>
          </div>
          <div className="sv-aiml-stats">
            <div className="sv-kpi-box">
              <small>Inference Accuracy</small>
              <strong>98.7%</strong>
            </div>
            <div className="sv-kpi-box">
              <small>Frameworks</small>
              <strong>PyTorch &amp; TF</strong>
            </div>
          </div>
          <div className="sv-float-badge sv-badge-top-right">
            <FaRobot /> GenAI &amp; LLM Ready
          </div>
        </div>
      );

    default:
      return (
        <div className="sv-mockup sv-default-mockup">
          <div className="sv-default-card">
            <div className="sv-default-icon"><FaLayerGroup /></div>
            <h4>Enterprise {slug}</h4>
            <p>High-performance digital engineering engineered to scale.</p>
          </div>
        </div>
      );
  }
}

function FaCheckCircleIcon() {
  return <FaCheck className="text-emerald-500" style={{ marginRight: 6 }} />;
}

function FaReactIcon() {
  return <FaCode style={{ marginRight: 4 }} />;
}
