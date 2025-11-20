// UPDATED Services.jsx WITH ARTICLE UI v2

import React, { useMemo, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../pages/css/services.css";

export default function Services() {
  const { slug } = useParams();
  const navigate = useNavigate();

  /* ===========================================
     SCROLL TOP + SCROLL PROGRESS BAR
  =========================================== */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  useEffect(() => {
    const progress = document.getElementById("progressBar");

    const scrollHandler = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      if (progress) progress.style.width = scrolled + "%";
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  /* ===========================================
     SERVICES DATA
  =========================================== */

   const services = useMemo(
    () => ({
      /* ==========================================================
         🌐 WEBSITE DEVELOPMENT — 3-PAGE EXPANDED CONTENT
      ========================================================== */
      "website-development": {
        icon: "🌐",
        title: "Website Development",
        desc: [
          /* PAGE 1 — OVERVIEW */
          "We build lightning-fast, responsive websites optimized for performance, conversions, and branding.",
          "Your website is your 24/7 salesperson — we help position your business as a premium, trustworthy brand.",
          "Our websites load under 1 second and are crafted with SEO-friendly architecture for Google ranking.",
          "Perfect for SMEs, startups, creators, ecommerce brands, hospitals, real estate, and corporates.",

          "[IMAGE: Modern Business Website Mockup]",

          "A professional website increases conversions by 60–80% because customers trust brands with strong digital presence.",

          /* PAGE 2 — FEATURES & TECHNOLOGY */
          "⭐⭐ PREMIUM WEBSITE FEATURES ⭐⭐",
          "Super-fast page loading using CDN, WebP images, caching, minified code, and Core Web Vitals optimization.",
          "Fully responsive UI that adapts to mobiles, tablets, laptops, and 4K monitors.",
          "SEO optimized pages with sitemaps, meta tags, schema, and keyword-focused structure.",
          "Modern animations using GSAP, Framer Motion, Lottie, and Parallax.",
          "Admin dashboard available for blogs, content, products, and banners.",
          "AI-powered content creation for landing pages and product descriptions.",

          "[IMAGE: Website Architecture Diagram — Home → About → Services → Blog → Contact]",

          "UI/UX PROCESS:",
          "1. Requirement + Competitor Research",
          "2. Wireframes + Page Flow Structure",
          "3. Figma UI Design (high-fidelity)",
          "4. Clickable Prototypes",
          "5. Revisions & Refinements",

          "TECH STACK WE USE:",
          "HTML5, CSS3, JavaScript, React.js, Next.js, Tailwind CSS, Node.js, Express.js, MongoDB, Firebase, Vercel, AWS.",

          /* PAGE 3 — BENEFITS, ADDONS, WORKFLOW */
          "⭐⭐ ADVANCED MODULES ⭐⭐",
          "Ecommerce system (cart + checkout + payment)",
          "Blog module with categories & search",
          "Custom admin CRM + lead management",
          "Appointment booking system",
          "Portfolio + galleries",

          "[IMAGE: Website Speed Score — 99/100]",

          "BENEFITS YOU GET:",
          "• High trust & credibility",
          "• More sales & leads",
          "• Long-term digital asset",
          "• Google visibility & SEO growth",
          "• 24/7 online presence",

          "WORKFLOW:",
          "1. Requirement Collection",
          "2. UI/UX Wireframes",
          "3. Figma Design",
          "4. Development",
          "5. Backend API Integration",
          "6. SEO Setup",
          "7. Testing",
          "8. Deployment (Vercel/AWS)",
          "9. Support & Maintenance",
        ],
      },

      /* ==========================================================
         🛒 ECOMMERCE SOLUTIONS — WILL EXPAND LATER
      ========================================================== */
   "ecommerce-solutions": {
  icon: "🛒",
  title: "Ecommerce Solutions",
  desc: [
    /* ================================
       PAGE 1 — OVERVIEW
    ================================= */

    "We build complete ecommerce ecosystems designed for D2C brands, wholesalers, retailers, and marketplaces.",
    "Your online store is not just a website — it's a full business engine that handles orders, payments, customers, marketing, logistics, and growth.",
    "Our ecommerce platforms are fast, secure, scalable, SEO-optimized, and built to increase conversions.",

    "[IMAGE: Ecommerce Homepage Mockup + Product Grid Layout]",

    "We design product pages that convert, checkout flows that reduce drop-offs, and dashboards that allow you to manage your business effortlessly.",
    
    "Our systems support small, medium, and enterprise-scale brands, and can handle thousands of products with real-time syncing.",

    /* ================================
       PAGE 2 — FEATURES & MODULES
    ================================= */

    "⭐⭐ CORE FEATURES INCLUDED ⭐⭐",

    "✔ Product Management (Add, Edit, Delete)",
    "✔ Variants (Size, Color, Stock, Price)",
    "✔ Inventory & SKU Tracking",
    "✔ Category & Filter System",
    "✔ Cart, Checkout & Wishlist",
    "✔ Razorpay / Stripe / PayPal Integration",
    "✔ COD + UPI + Wallet Payments",
    "✔ Coupon Codes & Discount Engine",
    "✔ Order Management Dashboard",
    "✔ Shipping Integration (Delhivery, ShipRocket, Bluedart)",
    "✔ Email & WhatsApp Order Notifications",

    "[IMAGE: Ecommerce Architecture — Customer → Storefront → API → Admin Dashboard → Payments → Logistics]",

    "ADVANCED MODULES:",
    "• Multi-vendor marketplace system (Amazon-like)",
    "• Subscription billing (monthly plans)",
    "• Wallet money, credit points & loyalty rewards",
    "• AI product recommendation engine",
    "• Abandoned cart recovery automation",
    "• Product review & rating system",
    "• Blog module for SEO ranking",
    "• AI auto-writing for SEO product descriptions",

    "FRONTEND TECHNOLOGIES:",
    "• React.js / Next.js / Tailwind CSS",
    "• SEO optimized dynamic routing",
    "• Lightning-fast image delivery with CDN",

    "BACKEND TECHNOLOGIES:",
    "• Node.js, Express.js",
    "• MongoDB / PostgreSQL",
    "• Firebase Auth / JWT Auth",
    "• Cloudflare CDN / AWS S3",

    /* ================================
       PAGE 3 — WORKFLOW + BENEFITS
    ================================= */

    "⭐⭐ ORDER MANAGEMENT WORKFLOW ⭐⭐",
    "1. Customer selects product → Adds to cart",
    "2. Checkout begins → Address, shipping method, payment",
    "3. Payment gateway processes securely",
    "4. Order stored in database",
    "5. WhatsApp/SMS/email confirmation sent",
    "6. Admin dashboard updates the order status",
    "7. Shipping partner receives booking",
    "8. Tracking ID automatically updated",
    "9. Customer can track order in real-time",

    "[IMAGE: Order Flow Diagram — Cart → Checkout → Payment → Dashboard → Delivery]",

    "WHY BRANDS CHOOSE OUR ECOMMERCE SOLUTIONS:",
    "• 10x faster performance compared to WordPress",
    "• No bugs, no plugin problems, no slow pages",
    "• Clean admin dashboard with zero complexity",
    "• Highest conversion UI for product pages",
    "• Real-time analytics & reporting",
    "• SEO-first build with structured data",
    "• Fully scalable — add 5 products or 50,000 products",

    "MARKET USE CASES WE SUPPORT:",
    "• Clothing & Fashion Brands",
    "• Grocery & Essentials",
    "• Electronics & Gadgets",
    "• Beauty & Skincare",
    "• Jewelry & Accessories",
    "• Home Decor & Furniture",
    "• Food Delivery",
    "• Pharmacy & Medical Stores",
    "• Custom B2B Portals (Bulk Pricing + GST)",
    "• Multi-Vendor Marketplaces (Commission-based)",

    "[IMAGE: Sales Dashboard + Admin Panel Screenshot]",

    "RESULT:",
    "Your ecommerce platform becomes a complete business engine — built for high conversions, automated operations, and scalable growth."
  ],
},


      /* ==========================================================
         📱 APP DEVELOPMENT — WILL EXPAND NEXT IF YOU WANT
      ========================================================== */
    "app-development": {
  icon: "📱",
  title: "App Development",
  desc: [
    /* ================================
       PAGE 1 — OVERVIEW
    ================================= */
    "We build powerful, high-performance Android & iOS apps using React Native and Flutter.",
    "Our apps are designed with beautiful UI, fast loading time, smooth animations, secure authentication and seamless backend integration.",
    "Perfect for startups, businesses, ecommerce brands, educational apps, booking apps, logistics apps, and business automation.",
    
    "[IMAGE: App UI Mockup with Multiple Screens Displayed in Grid Layout]",

    "We ensure the app is user-friendly, modern, scalable and capable of handling thousands of users without lag.",

    "Mobile apps increase customer engagement by 3x and improve brand loyalty — making them essential in today's digital market.",

    /* ================================
       PAGE 2 — FEATURES & TECHNOLOGY
    ================================= */

    "⭐⭐ CORE FEATURES YOU GET ⭐⭐",

    "✔ Smooth navigation + gesture control",
    "✔ Pixel-perfect UI with modern mobile layouts",
    "✔ Fast performance using optimized architecture",
    "✔ Offline mode with local database sync",
    "✔ Light & dark mode support",
    "✔ Push notifications with deep linking",
    "✔ Intelligent caching to reduce API load",
    "✔ Secure login with JWT, OTP, and Biometrics",

    "[IMAGE: App Architecture Diagram — UI → Business Logic → API → Database → Cloud]",

    "ADVANCED FEATURES:",
    "• Chat system with real-time messages",
    "• Live tracking (delivery or cab apps)",
    "• Payment integration (Razorpay, Stripe, PayPal)",
    "• Social login (Google, Apple, Facebook)",
    "• In-app updates without reinstallation",
    "• Device-friendly animations using Reanimated 3 & Lottie",
    "• Camera, gallery, voice recognition, file uploads",
    "• Dynamic forms powered by backend",

    "TECH STACK:",
    "• React Native / Flutter",
    "• Node.js, Express.js",
    "• Firebase Authentication",
    "• MongoDB / PostgreSQL",
    "• AWS, Cloudflare, Vercel",
    "• Figma for UI/UX design",

    /* ================================
       PAGE 3 — WORKFLOW + BENEFITS
    ================================= */

    "⭐⭐ DEVELOPMENT WORKFLOW ⭐⭐",
    "1. Requirement Analysis & Prototype Planning",
    "2. Wireframe Creation (UI flow mapping)",
    "3. Figma UI/UX Design (high-quality modern screens)",
    "4. API + Backend Planning",
    "5. Frontend Development (React Native/Flutter)",
    "6. Backend Integration (Login, Database, Payment, Notifications)",
    "7. Testing & Debugging on Real Devices",
    "8. Deployment to App Store & Play Store",
    "9. Maintenance & Feature Upgrades",

    "[IMAGE: App Deployment Flow — GitHub → CI/CD → Play Store → App Store]",

    "WHY BRANDS CHOOSE OUR APP DEVELOPMENT:",
    "• Apps load in milliseconds",
    "• Modern engineering architecture",
    "• Highly scalable for future growth",
    "• User-centric UI focused on retention",
    "• Complete end-to-end project support",
    "• 100% custom—from scratch, no templates",

    "USE CASES WE BUILD:",
    "• Ecommerce apps",
    "• Booking apps",
    "• Service-based apps",
    "• Fitness apps",
    "• Government apps",
    "• Learning apps",
    "• Streaming apps",
    "• Delivery apps",
    "• Business automation apps",

    "FINAL OUTPUT:",
    "Your app becomes a powerful tool that boosts customer engagement, increases sales, and gives your business a competitive advantage."

  ],
},

      /* OTHER SERVICES (SHORT DESCRIPTIONS) */
     "seo-analytics": {
  icon: "📊",
  title: "SEO & Analytics",
  desc: [
    /* ================================
       PAGE 1 — OVERVIEW
    ================================= */

    "We help businesses rank on Google using advanced SEO strategies, competitor research, technical optimization, and real-time analytics.",
    "SEO is not just about keywords — it's about improving visibility, building authority, and driving organic traffic that converts.",
    "Our approach includes on-page SEO, off-page SEO, link building, blog optimization, analytics tracking, and conversion analysis.",

    "[IMAGE: SEO Ranking Growth Graph, Google Search Console Dashboard]",

    "We optimize websites to perform better in Google’s algorithm, improve loading speed, increase click-through rates, and generate high-quality traffic.",

    "Perfect for businesses aiming to increase organic leads, outrank competitors, and strengthen long-term digital presence.",

    /* ================================
       PAGE 2 — FULL SEO FEATURES
    ================================= */

    "⭐⭐ CORE SEO SERVICES ⭐⭐",

    "✔ On-Page SEO Optimization",
    "✔ Keyword Research & Intent Mapping",
    "✔ Technical SEO Fixes",
    "✔ Speed Optimization (Core Web Vitals)",
    "✔ Image & Schema Optimization",
    "✔ Backlink Building & Outreach",
    "✔ Local SEO (Google Maps Ranking)",
    "✔ Blog SEO & Topic Clusters",
    "✔ Competitor SEO Breakdown",
    "✔ Monthly Traffic & Keyword Reports",

    "[IMAGE: SEO Architecture — Keywords → On Page → Technical → Links → Ranking]",

    "ON-PAGE SEO:",
    "• Title tags, meta descriptions, headers",
    "• URL optimization & keyword mapping",
    "• Internal linking strategy",
    "• Content restructuring for readability",

    "TECHNICAL SEO:",
    "• Fix broken links, redirects, crawls",
    "• XML sitemap optimization",
    "• Robots.txt configuration",
    "• Mobile-friendly updates",
    "• Structured data schema for Google rich results",

    "OFF-PAGE SEO:",
    "• High DA backlinks",
    "• Guest posts",
    "• Citations",
    "• Press releases",
    "• Brand mentions & reputation SEO",

    /* ================================
       ANALYTICS FEATURES
    ================================= */

    "⭐⭐ ADVANCED ANALYTICS ⭐⭐",
    "• Google Analytics 4 (GA4) Setup",
    "• Google Search Console Integration",
    "• Conversion tracking (Leads/Sales)",
    "• Heatmaps (Hotjar/Clarity)",
    "• User behavior mapping",
    "• Funnel analysis",
    "• Bounce rate & session optimization",

    "[IMAGE: Heatmap Screenshot + Analytics Dashboard Cards]",

    /* ================================
       PAGE 3 — WORKFLOW + BENEFITS
    ================================= */

    "⭐⭐ SEO WORKFLOW ⭐⭐",
    "1. Website Audit & Competitor Research",
    "2. Keyword Strategy & Intent Mapping",
    "3. On-Page SEO Setup",
    "4. Technical Fixes & Speed Optimization",
    "5. Content Planning (Blogs + Landing Pages)",
    "6. Backlink Building & Citations",
    "7. Analytics Setup (GA4 + GSC)",
    "8. Monthly Reporting & Improvements",

    "WHY BUSINESSES CHOOSE OUR SEO SERVICE:",
    "• Transparent monthly results",
    "• Real increase in traffic & rankings",
    "• Fast improvements with technical fixes",
    "• Strong backlinks from authority websites",
    "• SEO written by trained copywriters",
    "• 100% white-hat strategies",

    "[IMAGE: Keyword Ranking Progress — Before/After Table]",

    "SEO USE CASES:",
    "• Ecommerce product SEO",
    "• Service-based landing pages",
    "• Local SEO for maps ranking",
    "• Blog SEO for organic traffic",
    "• B2B SEO for high-ticket leads",
    "• Portfolio & company websites",

    "RESULT:",
    "Your website ranks higher, gets targeted visitors, and generates results consistently — without paid ads."
  ],
},


     "social-media-marketing": {
  icon: "📣",
  title: "Social Media Marketing",
  desc: [
    /* ================================
       PAGE 1 — OVERVIEW
    ================================= */

    "We help businesses grow on Instagram, Facebook, YouTube, and LinkedIn using powerful content, targeted ads, and consistent branding.",
    "Social Media Marketing is more than posting — it's about building a community, creating trust, and driving business results.",
    "Our strategies improve engagement, reach, leads, and overall brand perception.",

    "[IMAGE: Instagram Feed Mockup + Reels Preview + Facebook Ad Design]",

    "Perfect for ecommerce brands, restaurants, coaches, real estate, service businesses, influencers, and startups.",
    "From designing creative visuals to running high-performing ad campaigns, we manage everything end-to-end.",

    /* ================================
       PAGE 2 — FEATURES & CONTENT STRATEGY
    ================================= */

    "⭐⭐ CORE SOCIAL MEDIA SERVICES ⭐⭐",

    "✔ Content Strategy for Instagram, Facebook, YouTube & LinkedIn",
    "✔ Reels, Shorts & Video Editing",
    "✔ Carousel & Post Design",
    "✔ Trend Research & Hashtag Strategy",
    "✔ Monthly Content Calendar",
    "✔ Paid Ad Campaigns (Meta Ads)",
    "✔ Audience Targeting & Retargeting",
    "✔ Engagement Boosting Techniques",
    "✔ Comment Replies & Community Management",
    "✔ Profile Optimization & Bio Setup",

    "[IMAGE: Content Calendar Layout + Engagement Graph Screenshot]",

    "CONTENT CREATION:",
    "• High-quality posts, reels, thumbnails",
    "• On-brand color palette & typography",
    "• Crisp captions optimized for conversions",
    "• Trend-based Reels that go viral",

    "REELS / VIDEO EDITING:",
    "• Smooth transitions",
    "• Motion graphics & dynamic text",
    "• Voiceover syncing",
    "• Fast-paced, engaging content",

    "META ADS (FACEBOOK + INSTAGRAM):",
    "• Targeted ads based on interests, behaviours, and keywords",
    "• Conversion, traffic, lead & retargeting campaigns",
    "• A/B testing for creatives and audiences",
    "• Pixel setup for tracking results",

    /* ================================
       PAGE 3 — WORKFLOW + ANALYTICS
    ================================= */

    "⭐⭐ SOCIAL MEDIA WORKFLOW ⭐⭐",

    "1. Brand Research & Competitor Study",
    "2. Content Strategy Design",
    "3. Monthly Content Calendar Planning",
    "4. Creative Designing (Posts + Reels)",
    "5. Caption Writing & Hashtag Strategy",
    "6. Posting & Scheduling",
    "7. Ads Setup & Optimization",
    "8. Analytics Report (Weekly/Monthly)",
    "9. Continuous Growth Strategy",

    "[IMAGE: Social Media Insights — Impressions, Followers, Reach Chart]",

    "WHAT ANALYTICS YOU GET:",
    "• Reach & impressions",
    "• Profile visits & website clicks",
    "• Follower growth",
    "• Reels performance",
    "• Story retention",
    "• Engagement rate",
    "• Leads generated from ads",
    "• Best-performing content analysis",

    "PLATFORMS WE MANAGE:",
    "• Instagram",
    "• Facebook",
    "• YouTube",
    "• LinkedIn",
    "• Twitter (optional)",
    "• Google Business Profile",

    "WHY BRANDS TRUST OUR SOCIAL MEDIA SERVICE:",
    "• Trend-aware content strategy",
    "• High-quality designs",
    "• Viral reels creation",
    "• Ad campaigns that bring real results",
    "• Transparent analytics & growth reports",
    "• Consistent posting & engagement",

    "END RESULT:",
    "Your brand grows faster, gets more visibility, builds trust, and converts followers into paying customers."
  ],
},


    "lead-generation": {
  icon: "💰",
  title: "Lead Generation",
  desc: [
    /* ================================
       PAGE 1 — OVERVIEW
    ================================= */

    "We create high-converting lead generation systems powered by Google Ads, Meta Ads, landing pages, automation, and CRM tracking.",
    "Our lead generation service is designed to bring quality leads — not random clicks.",
    "We focus on targeting, ad strategy, landing page optimization, and automation to deliver predictable results.",

    "[IMAGE: Leads Dashboard – CPL Chart, Conversions, Clicks, Campaign Performance]",

    "Perfect for real estate, education, coaching, healthcare, ecommerce, B2B services, fitness, agencies, and local businesses.",
    "Our systems ensure you get high-quality leads that can convert into paying customers.",

    /* ================================
       PAGE 2 — FULL FEATURES
    ================================= */

    "⭐⭐ CORE LEAD GENERATION FEATURES ⭐⭐",

    "✔ Google Ads (Search, Display, Performance Max)",
    "✔ Meta Ads (Instagram + Facebook)",
    "✔ High-converting landing page creation",
    "✔ Lead forms + WhatsApp automation",
    "✔ CRM integration (HubSpot, Zoho, Notion)",
    "✔ Audience targeting + retargeting",
    "✔ Lookalike audience setup",
    "✔ Analytics tracking & heatmaps",
    "✔ Conversion tracking (Pixel + GA4)",
    "✔ Weekly optimization & reporting",

    "[IMAGE: Google Ads + Meta Ads Targeting Map + Audience Segments]",

    "LANDING PAGE FEATURES:",
    "• Mobile-first responsive layout",
    "• Fast loading (Core Web Vitals optimized)",
    "• FOMO elements (badges, offers, trust icons)",
    "• Lead form + CTA buttons",
    "• WhatsApp auto-chat trigger",
    "• A/B testing for improvements",

    "ADS STRATEGY:",
    "• Keyword research + competitor ads study",
    "• Creative ad copywriting",
    "• Custom audience building",
    "• Budget optimization",
    "• Retargeting warm audiences",
    "• Scaling campaigns on ROI",

    "AUTOMATION:",
    "• WhatsApp instant reply",
    "• Auto email sequence",
    "• CRM integration",
    "• Lead distribution to your team",

    /* ================================
       PAGE 3 — WORKFLOW + RESULT
    ================================= */

    "⭐⭐ LEAD GENERATION WORKFLOW ⭐⭐",
    "1. Business understanding + goal analysis",
    "2. Competitor & keyword research",
    "3. Landing page + funnel setup",
    "4. Ad campaigns (Google + Meta)",
    "5. Pixel + GA4 tracking setup",
    "6. Daily monitoring & weekly optimization",
    "7. Lead nurturing automation",
    "8. Performance reporting & scaling",

    "[IMAGE: Funnel Flow – Ads → Landing Page → WhatsApp → CRM → Sales]",

    "ANALYTICS YOU RECEIVE:",
    "• Cost per lead (CPL)",
    "• Total leads generated",
    "• Calls/WhatsApp chats triggered",
    "• Conversion rate",
    "• Best performing ads",
    "• Keyword & audience insights",

    "WHY BUSINESSES LOVE OUR LEAD SYSTEM:",
    "• High-quality targeted leads",
    "• Lower cost per lead",
    "• Transparent analytics reporting",
    "• Optimized ads that convert consistently",
    "• Fast response automation",
    "• Scalable system for long-term growth",

    "INDUSTRIES WE GENERATE LEADS FOR:",
    "• Real estate (Buy/Sell/Rent)",
    "• Coaching & online courses",
    "• Education institutions",
    "• Hospitals & clinics",
    "• B2B software & services",
    "• Salons & wellness centers",
    "• Ecommerce custom leads",
    "• Local businesses",
    "• Car/Bike showrooms",
    "• Finance, insurance & investment",

    "[IMAGE: Lead Tracking CRM Dashboard – Pipeline, Conversions]",

    "FINAL RESULT:",
    "You receive a steady flow of high-quality leads every day — increasing your sales growth and reducing dependency on manual marketing."
  ],
},

"branding-logo": {
  icon: "🎨",
  title: "Branding & Logo Design",
  desc: [
    /* ================================
       PAGE 1 — OVERVIEW
    ================================= */

    "Branding is more than a logo — it is the personality, voice, and visual identity of your business.",
    "We create premium brand identities that make your business instantly recognizable, trustworthy, and memorable.",
    "Our branding system ensures consistency across websites, social media, packaging, advertising, and marketing materials.",

    "[IMAGE: Branding Moodboard – Colors, Typography, Logo Concepts, Stationery Mockups]",

    "A strong brand identity increases conversion rate, improves customer trust, and gives your business a professional image.",
    "Perfect for startups, ecommerce brands, cafes, agencies, real estate firms, educational businesses, salons, creators, and corporate companies.",

    /* ================================
       PAGE 2 — BRANDING FEATURES
    ================================= */

    "⭐⭐ WHAT YOU GET IN BRANDING ⭐⭐",

    "✔ 3-5 Professional Logo Concepts",
    "✔ Logo Variations (Icon + Text + Symbol)",
    "✔ Modern Color Palette",
    "✔ Font Selection & Typography Guide",
    "✔ Brand Voice & Personality Definition",
    "✔ Stationery Kit (Business Card, Letterhead, Envelope)",
    "✔ Social Media Kit (Profile, Banner, Highlight Icons)",
    "✔ WhatsApp / Instagram Templates",
    "✔ Mockups + Branding Visualizations",
    "✔ Brand Guidelines Document",

    "[IMAGE: Logo Variations – Primary, Secondary, Monochrome, Icon Version]",

    "LOGO DESIGN PROCESS:",
    "• Research & brand understanding",
    "• Competitor analysis",
    "• Moodboard creation",
    "• Sketching & concept development",
    "• Digital logo creation",
    "• Revisions until final approval",

    "BRANDING ELEMENTS:",
    "• Brand ecosystem",
    "• Graphic style (shapes, patterns, textures)",
    "• Tone of voice (professional, bold, friendly)",
    "• Social media visual language",
    "• Iconography pack",
    "• Print + digital brand assets",

    "COLOR PALETTE CREATION:",
    "• Primary color system",
    "• Secondary color tones",
    "• Accent colors",
    "• Use-case rules",

    /* ================================
       PAGE 3 — WORKFLOW + DELIVERABLES
    ================================= */

    "⭐⭐ BRANDING WORKFLOW ⭐⭐",
    "1. Brand Research & Discovery Call",
    "2. Moodboard + Concept Direction",
    "3. Draft Logo Concepts (3–5 options)",
    "4. Revisions & Refinements",
    "5. Final Logo Selection",
    "6. Color & Typography System Setup",
    "7. Mockup Presentation (Real-world usage)",
    "8. Brand Guidelines Document Preparation",
    "9. Delivery of all brand assets",

    "[IMAGE: Brand Guidelines Document Preview – Colors, Logos, Usage Rules]",

    "DELIVERABLES YOU RECEIVE:",
    "• Final logo files in AI, SVG, PNG, PDF",
    "• Color palette & typography sheet",
    "• Brand usage rules & do/don't guidelines",
    "• Social media posts templates",
    "• Business card & stationery design",
    "• Full branding kit (ready to use)",

    "WHY COMPANIES CHOOSE OUR BRANDING:",
    "• High-quality creative direction",
    "• Industry-level premium design standards",
    "• Unique concepts tailored to your business",
    "• No template-based logos — 100% custom",
    "• Modern, minimal, futuristic design approach",
    "• Fast revisions & transparent communication",

    "BRANDING USE CASES:",
    "• Product packaging design",
    "• Website branding",
    "• Shop boards & signage",
    "• Indoor/outdoor branding",
    "• Social media branding system",
    "• Presentation design",
    "• Event branding kits",

    "[IMAGE: Stationery Kit Mockup – Cards, Folder, Envelope, Letterhead]",

    "FINAL RESULT:",
    "Your business receives a premium, cohesive brand identity that builds trust, attracts customers, and stands out in the market."
  ],
},


     "ui-ux-design": {
  icon: "🖼️",
  title: "UI / UX Design",
  desc: [
    /* ================================
       PAGE 1 — OVERVIEW
    ================================= */

    "We design beautiful, user-friendly interfaces for websites, mobile apps, dashboards, and enterprise systems.",
    "UI/UX design is about understanding users, solving problems, and creating digital experiences that feel premium, intuitive, and easy to use.",
    "We focus on flow, clarity, modern visual style, and conversion-driven layouts.",

    "[IMAGE: UI/UX Case Study Board – Wireframes, Screens, Components, Color System]",

    "Perfect for apps, SaaS dashboards, ecommerce stores, fintech apps, healthcare systems, learning platforms, and enterprise solutions.",
    "Every screen is designed with clarity, smooth flow, and brand consistency in mind.",

    /* ================================
       PAGE 2 — FULL UI/UX FEATURES
    ================================= */

    "⭐⭐ UI/UX DESIGN FEATURES ⭐⭐",

    "✔ Wireframes (Low-fidelity + High-fidelity)",
    "✔ User Flow Mapping",
    "✔ Figma UI Design (Pixel-perfect)",
    "✔ Design System & Style Guide",
    "✔ Color Palette & Typography Rules",
    "✔ Iconography & Component Library",
    "✔ Interactive Prototypes",
    "✔ Mobile & Web Responsive Layouts",
    "✔ Usability Testing + UX Fixes",
    "✔ Developer Handoff + Assets Export",

    "[IMAGE: UI Screen Grid – Mobile Screens + Web Dashboard Layouts]",

    "WIREFRAMES:",
    "• Low-fi sketches to plan layout",
    "• High-fi wireframes to show structure",
    "• Fast iterative refinement",

    "VISUAL DESIGN:",
    "• Modern, clean, professional UI",
    "• Shadows, gradients, glassmorphism (optional)",
    "• Design aligned to your brand identity",
    "• Spacing, hierarchy & accessibility standards",

    "INTERACTIONS & ANIMATIONS:",
    "• Micro-interactions",
    "• Button effects",
    "• Smooth transitions",
    "• Hover states, focus states",
    "• Page transitions for apps/web",

    "DESIGN SYSTEM:",
    "• Buttons, cards, inputs, dropdowns",
    "• Grid layout rules",
    "• Color usage rules",
    "• Reusable components",
    "• Dark mode support",

    /* ================================
       PAGE 3 — WORKFLOW + TOOLS
    ================================= */

    "⭐⭐ UI/UX WORKFLOW ⭐⭐",
    "1. Requirement Gathering + UX Research",
    "2. User Persona Creation",
    "3. User Journey Mapping",
    "4. Sitemap + Flowchart Planning",
    "5. Wireframe Creation (Low → High Fidelity)",
    "6. Figma UI Design (All Screens)",
    "7. Prototype Development (Clickable demo)",
    "8. Usability Testing",
    "9. Developer Handoff + Asset Export",

    "[IMAGE: Workflow Diagram – Research → Wireframes → Design → Prototype → Handoff]",

    "TOOLS WE USE:",
    "• Figma (Primary)",
    "• FigJam",
    "• Adobe Illustrator",
    "• Notion / Miro for research",
    "• Google Material Design Guidelines",
    "• Apple Human Interface Guidelines",

    "WHY BRANDS CHOOSE OUR UI/UX:",
    "• Clean & modern design style",
    "• Easy-to-use layouts with high conversion",
    "• Premium quality for mobile & web apps",
    "• Fast delivery + unlimited revisions (reasonable)",
    "• Strong design foundation for developers",
    "• 100% original — no templates",

    "UI/UX USE CASES:",
    "• Mobile Apps (iOS & Android)",
    "• SAAS Dashboards",
    "• Ecommerce Websites",
    "• Enterprise Web Applications",
    "• CRM & Internal Tools",
    "• Edtech Platforms",
    "• Landing Pages & Sales Funnels",

    "[IMAGE: Dashboard UI, Mobile App UI, Style Guide Sheet]",

    "FINAL RESULT:",
    "Your digital product becomes intuitive, beautiful, easy to use — and delivers a frictionless experience for all users."
  ],
},


      "animation-video": {
  icon: "🎬",
  title: "Animation & Video Editing",
  desc: [
    /* ================================
       PAGE 1 — OVERVIEW
    ================================= */

    "We create high-quality animation and video content for brands, products, social media, and advertisements.",
    "Our videos are crafted to capture attention within seconds — optimized for Instagram Reels, YouTube Shorts, ads, websites, and presentations.",
    "From motion graphics to product animations, we bring your ideas to life with creativity and clarity.",

    "[IMAGE: Video Editing Timeline + Motion Graphics Scene Preview]",

    "Perfect for ecommerce brands, influencers, restaurants, agencies, real estate, fitness brands, education institutes, and corporate companies.",
    "We focus on storytelling, visuals, pacing, color grading, and engaging motion transitions.",

    /* ================================
       PAGE 2 — FULL VIDEO SERVICES
    ================================= */

    "⭐⭐ TYPES OF CONTENT WE CREATE ⭐⭐",

    "✔ Instagram Reels & YouTube Shorts",
    "✔ Product Promo Videos",
    "✔ Logo Animation Intro",
    "✔ Motion Graphics",
    "✔ Cinematic Advertisement Videos",
    "✔ Event Highlight Videos",
    "✔ Testimonial Videos",
    "✔ App & Website Demo Videos",
    "✔ Explainer Videos",
    "✔ Corporate Videos",
    "✔ Social Media Ad Videos",

    "[IMAGE: Reel Editing – Before/After Color Grading + Transition Effects]",

    "VIDEO EDITING FEATURES:",
    "• Smooth transitions",
    "• Dynamic text animations",
    "• Kinetic typography",
    "• Color grading & LUT application",
    "• Speed ramping (Fast/Slow motion)",
    "• Noise reduction & audio cleanup",
    "• Sharpening & HDR enhancement",

    "ANIMATION SERVICES:",
    "• Motion graphics",
    "• Animated elements for social media",
    "• Lottie animations",
    "• 2D vector animations",
    "• Logo reveal animations",
    "• Character motion (optional)",

    "CONTENT OPTIMIZATION:",
    "• Vertical videos for Reels/Shorts",
    "• Horizontal videos for YouTube",
    "• Square videos for Instagram feed",
    "• Subtitles & captions auto-generated",
    "• Platform-optimized export settings",

    /* ================================
       PAGE 3 — WORKFLOW + DELIVERABLES
    ================================= */

    "⭐⭐ VIDEO PRODUCTION WORKFLOW ⭐⭐",
    "1. Requirement call + concept understanding",
    "2. Script writing (optional)",
    "3. Shot planning / storyboard (if required)",
    "4. Footage collection (client provided or shot by team)",
    "5. Editing + animation + effects",
    "6. Sound design & color grading",
    "7. Review & revisions",
    "8. Final delivery in multiple formats",

    "[IMAGE: Storyboard Frames → Editing Timeline → Final Render]",

    "DELIVERABLES YOU RECEIVE:",
    "• Final video in HD / Full HD / 4K",
    "• Platform-optimized version (Reels, YouTube, Website)",
    "• Captions + subtitles (optional)",
    "• Thumbnail design (YouTube/Instagram)",
    "• Background music & sound effects",
    
    "TOOLS WE USE:",
    "• Adobe Premiere Pro",
    "• Adobe After Effects",
    "• DaVinci Resolve",
    "• CapCut Pro for Reels",
    "• Illustrator & Photoshop for assets",
    "• LottieFiles for animations",

    "WHY BRANDS CHOOSE OUR VIDEO SERVICE:",
    "• Trend-based editing style",
    "• Fast turnaround time",
    "• Scroll-stopping visuals",
    "• Premium animation quality",
    "• Custom-made graphics — no templates",
    "• Smooth communication & revision process",

    "USE CASES:",
    "• Social media promotions",
    "• Ads and sponsored content",
    "• Product showcases",
    "• App UI/UX demo videos",
    "• Corporate brand films",
    "• Restaurant menu videos",
    "• Educational explanation videos",

    "[IMAGE: Final Video Export Preview + Reels Feed Screenshot]",

    "FINAL RESULT:",
    "You get professional, engaging videos and animations that boost engagement, increase conversions, and make your brand look premium across all platforms."
  ],
},

    }),
    []
  );

  const selected = slug ? services[slug] : null;

  /* ===========================================
     GENERATE TABLE OF CONTENTS FROM DESC
  =========================================== */

  const generateTOC = (descArray) => {
    let toc = [];
    descArray.forEach((line, index) => {
      if (line.includes("⭐") || line.endsWith(":")) {
        toc.push({
          id: `section-${index}`,
          title: line.replace(/[⭐]/g, "").trim(),
        });
      }
    });
    return toc;
  };

  /* ===========================================
     RENDER
  =========================================== */

  return (
    <div className="services-page">

      {/* 🔥 SCROLL PROGRESS BAR */}
      <div className="article-progress" id="progressBar"></div>

      <header className="service-header fade-up">
        <h1>{selected ? selected.title : "Our Services"}</h1>
        {!selected && <p>Explore our services. Click any card to view full details.</p>}
      </header>

      {/* ===========================================
          SINGLE SERVICE ARTICLE PAGE
      =========================================== */}
      {selected ? (
        <div className="services-container">

          {/* 🔥 ARTICLE LAYOUT */}
          <section className="service-block show service-single">

            {/* FLOATING TOC (Desktop only) */}
            <aside className="article-toc">
              <h4>On this page</h4>
              {generateTOC(selected.desc).map((s, i) => (
                <a key={i} href={`#${s.id}`}>
                  {s.title}
                </a>
              ))}
            </aside>

            {/* ARTICLE TITLE */}
            <div className="service-header-row">
              <span className="service-icon">{selected.icon}</span>
              <h2>{selected.title}</h2>
            </div>

            {/* ARTICLE CONTENT */}
            <article className="service-description">
              {selected.desc.map((line, i) => {

                // Handle images
                if (line.startsWith("[IMAGE")) {
                  return (
                    <div className="article-image" key={i}>
                      <img
                        src="https://via.placeholder.com/1200x600?text=Service+Image"
                        alt="Service Visual"
                      />
                    </div>
                  );
                }

                // Section Headers
                if (line.includes("⭐") || line.endsWith(":")) {
                  return (
                    <>
                      <div className="section-divider"></div>
                      <p key={i} id={`section-${i}`} style={{ fontWeight: "800" }}>
                        {line}
                      </p>
                    </>
                  );
                }

                // Normal paragraph
                return <p key={i}>{line}</p>;
              })}
            </article>

            {/* BACK BUTTON */}
            <button className="enquiry-btn" onClick={() => navigate("/services")}>
              ← Back to All Services
            </button>
          </section>
        </div>
      ) : (
        /* ===========================================
            LIST VIEW — CARDS
        =========================================== */
        <div className="services-container">
          {Object.entries(services).map(([key, srv], i) => (
            <section
              key={i}
              className="service-block show"
              onClick={() => navigate(`/services/${key}`)}
            >
              <div className="service-header-row">
                <span className="service-icon">{srv.icon}</span>
                <h2>{srv.title}</h2>
              </div>

              <div className="service-description">
                <p>{srv.desc[0]}</p>
                <p style={{ color: "#007bff", fontWeight: 700 }}>Click to read more →</p>
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
