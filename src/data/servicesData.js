// ─────────────────────────────────────────────────────────────────────────────
// FlareMinds – Centralized Services Data
// Add or remove services here; the UI updates automatically.
// ─────────────────────────────────────────────────────────────────────────────

export const allServices = [

  // ══════════════════════════
  //  DEVELOPMENT SERVICES
  // ══════════════════════════

  {
    id: "website-development",
    slug: "website-development",
    category: "Development",
    title: "Website Development",
    shortDescription:
      "Professional, responsive, and SEO-friendly business websites tailored for startups, enterprises, and growing brands.",
    heroDescription:
      "We build lightning-fast, responsive websites that are optimized for performance, SEO, and conversions — perfectly tailored to represent your brand.",
    accent: "#2563eb",
    bgLight: "#eff6ff",
    overview: {
      title: "Why Choose Our Web Solutions?",
      text: "Our websites load under 1 second and are crafted with SEO-friendly architecture. Whether you are an SME, startup, or enterprise brand, our websites are designed to dominate search rankings and convert visitors into customers.",
      benefits: [
        "Super-fast page loading (Core Web Vitals optimized)",
        "Fully responsive UI for all screen sizes",
        "SEO optimized architecture from day one",
        "Modern animations and micro-interactions",
        "CMS integration for easy content management",
        "Third-party API and tool integrations",
      ],
    },
    features: [
      { title: "Responsive Design", description: "Pixel-perfect layouts that look flawless on mobile, tablet, and desktop." },
      { title: "SEO-Friendly Structure", description: "Semantic HTML, meta tags, schema markup, and optimized page speeds." },
      { title: "Performance Optimization", description: "Lazy loading, code splitting, and CDN delivery for sub-1s load times." },
      { title: "Secure Development", description: "HTTPS, secure forms, input validation, and XSS/CSRF protection." },
      { title: "CMS Integration", description: "WordPress, Contentful, Sanity, or custom admin panels." },
      { title: "Third-Party Integrations", description: "Payment gateways, CRM, analytics, chat widgets, and API connections." },
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Requirement gathering, competitor research, and goal alignment." },
      { step: "02", title: "Planning", desc: "Site architecture, tech stack selection, and project roadmap." },
      { step: "03", title: "Design", desc: "Wireframes and high-fidelity Figma UI design." },
      { step: "04", title: "Development", desc: "Clean, modular code with API integration." },
      { step: "05", title: "Testing", desc: "Cross-browser testing, performance checks, and SEO audit." },
      { step: "06", title: "Launch", desc: "Deployment, domain setup, and post-launch support." },
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Node.js", "MongoDB", "WordPress", "AWS", "Vercel"],
    relatedProjects: [
      {
        title: "TNEbA Website",
        description: "Official website developed for TNEBA with a clean and responsive interface.",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=85",
        liveLink: "https://tnebwebsiteui.onrender.com",
      },
      {
        title: "AKA Associates",
        description: "Corporate business website designed for AKA Associates.",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
        liveLink: "https://akaassociate.com",
      },
      {
        title: "RightTouch Partner Website",
        description: "Partner portal website for the RightTouch service platform.",
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
        liveLink: "https://righttouchpartner.com",
      },
    ],
    faq: [
      { q: "How long does website development take?", a: "Typically 2–4 weeks for a standard business website, and 6–12 weeks for complex portals or e-commerce sites." },
      { q: "Do you provide hosting?", a: "Yes, we assist with hosting setup, domain configuration, and SSL installation." },
      { q: "Is the website SEO friendly?", a: "Absolutely. All our websites are built with SEO best practices — semantic markup, meta tags, fast loading, and schema structured data." },
      { q: "Can I update the website myself?", a: "Yes, we integrate easy-to-use CMS systems so you can manage content without technical knowledge." },
    ],
  },

  {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    category: "Development",
    title: "Mobile App Development",
    shortDescription:
      "High-performance Android and cross-platform mobile applications with modern UI and seamless user experiences.",
    heroDescription:
      "We develop high-performance Android and cross-platform mobile apps with intuitive UX, smooth animations, and powerful backend integrations.",
    accent: "#0ea5e9",
    bgLight: "#f0f9ff",
    overview: {
      title: "Mobile-First Experiences",
      text: "From consumer apps to enterprise solutions, we engineer mobile applications that delight users and drive business growth. Our apps are built with scalable architecture and stunning interfaces.",
      benefits: [
        "Cross-platform development (React Native / Expo)",
        "Native Android development support",
        "Smooth 60fps animations and transitions",
        "Offline-first architecture where needed",
        "Push notifications and real-time features",
        "Play Store and App Store deployment assistance",
      ],
    },
    features: [
      { title: "Cross-Platform Development", description: "Single codebase that runs on Android and iOS using React Native." },
      { title: "Modern UI/UX", description: "Custom, pixel-perfect mobile interfaces designed for engagement and usability." },
      { title: "Real-Time Features", description: "Live chat, notifications, and real-time data synchronization." },
      { title: "Offline Support", description: "Apps that work without connectivity using local storage and sync." },
      { title: "Secure Authentication", description: "OTP, biometric, and social login with JWT-based security." },
      { title: "App Store Deployment", description: "Full support for Play Store and App Store submission and approval." },
    ],
    process: [
      { step: "01", title: "Discovery", desc: "User research, flow diagrams, and feature prioritization." },
      { step: "02", title: "Planning", desc: "Tech stack selection, API planning, and sprint roadmap." },
      { step: "03", title: "Design", desc: "Mobile-first wireframes and interactive Figma prototypes." },
      { step: "04", title: "Development", desc: "Component-based development with API integration." },
      { step: "05", title: "Testing", desc: "Device testing, performance profiling, and QA sign-off." },
      { step: "06", title: "Launch", desc: "App store submission, deployment, and post-launch support." },
    ],
    technologies: ["React Native", "Expo", "JavaScript", "Node.js", "Firebase", "MongoDB", "Redux", "Axios"],
    relatedProjects: [
      {
        title: "RightTouch",
        description: "Customer mobile application for booking home services.",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85",
        liveLink: "https://play.google.com/store/apps/details?id=com.righttouch.customer",
      },
      {
        title: "Designer Studio Institute",
        description: "Educational mobile application for institute management.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
        liveLink: "https://play.google.com/store/apps/details?id=com.aadvifashion.meeting_app",
      },
      {
        title: "Atelier",
        description: "Fashion and clothing mobile application for D2C brands.",
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85",
        liveLink: "https://play.google.com/store/apps/details?id=com.aadviatelier.app",
      },
    ],
    faq: [
      { q: "Do you build for Android and iOS?", a: "Yes, we develop cross-platform apps using React Native that work on both Android and iOS from a single codebase." },
      { q: "How long does app development take?", a: "A standard app takes 8–16 weeks depending on features and complexity." },
      { q: "Will you help with Play Store submission?", a: "Yes, we handle the complete submission process including store listing, screenshots, and approval." },
      { q: "Can you add real-time chat to the app?", a: "Yes, we integrate real-time features using WebSockets and Firebase." },
    ],
  },

  {
    id: "e-commerce-solutions",
    slug: "e-commerce-solutions",
    category: "Development",
    title: "E-Commerce Solutions",
    shortDescription:
      "Scalable online shopping platforms with secure payments, inventory management, and powerful admin controls.",
    heroDescription:
      "We build complete, scalable e-commerce ecosystems for D2C brands, wholesalers, and retailers — designed to sell more and convert better.",
    accent: "#a855f7",
    bgLight: "#faf5ff",
    overview: {
      title: "Your Store, Your Empire",
      text: "We build secure, fast, and scalable online stores with seamless payment, shipping, and inventory management integrations. From product catalogs to checkout flows, every element is optimized for conversions.",
      benefits: [
        "Custom storefront design tailored to your brand",
        "Secure payment gateway integration (Razorpay, Stripe, PayPal)",
        "Inventory and order management system",
        "Admin dashboard with real-time analytics",
        "Mobile-optimized shopping experience",
        "Multi-vendor marketplace support",
      ],
    },
    features: [
      { title: "Custom Storefront Design", description: "Brand-aligned, conversion-optimized product pages and shopping flows." },
      { title: "Payment Gateway Integration", description: "Secure payments via Razorpay, Stripe, PayPal, and UPI." },
      { title: "Inventory Management", description: "Real-time stock tracking, low-stock alerts, and variant management." },
      { title: "Order Management", description: "Complete order lifecycle management from purchase to delivery." },
      { title: "Admin Dashboard", description: "Powerful admin panel for managing products, orders, and analytics." },
      { title: "Multi-Vendor Support", description: "Marketplace features allowing multiple vendors to list and sell." },
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Catalog analysis, feature mapping, and business requirement gathering." },
      { step: "02", title: "Planning", desc: "Platform selection, payment flow design, and product architecture." },
      { step: "03", title: "Design", desc: "UI/UX for high conversion — product pages, cart, and checkout." },
      { step: "04", title: "Development", desc: "Store development, database setup, and API integrations." },
      { step: "05", title: "Testing", desc: "Payment testing, performance optimization, and security audit." },
      { step: "06", title: "Launch", desc: "Deployment, product import, and marketing setup." },
    ],
    technologies: ["React.js", "Node.js", "MongoDB", "Razorpay", "Stripe", "Shopify", "WooCommerce", "Firebase", "AWS S3"],
    relatedProjects: [
      {
        title: "Label Aadvi",
        description: "Complete e-commerce platform for clothing products with modern shopping experience.",
        image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=85",
        liveLink: "https://labelaadvi.com",
      },
    ],
    faq: [
      { q: "Can you migrate my existing store?", a: "Yes, we handle data migration from platforms like WooCommerce, Magento, or Shopify." },
      { q: "Is it mobile friendly?", a: "100% mobile-optimized for the best shopping experience on all devices." },
      { q: "Do you support multi-vendor marketplaces?", a: "Yes, we can build marketplace solutions similar to Amazon or Flipkart." },
      { q: "Which payment gateways do you integrate?", a: "Razorpay, Stripe, PayPal, UPI, and net banking are all supported." },
    ],
  },

  {
    id: "business-applications",
    slug: "business-applications",
    category: "Development",
    title: "Business Applications",
    shortDescription:
      "Custom business software including CRM, ERP, HRMS, Inventory Systems, Admin Dashboards, POS, and enterprise management solutions.",
    heroDescription:
      "We build custom business software that automates your operations — from CRM and ERP systems to inventory management and enterprise dashboards.",
    accent: "#14b8a6",
    bgLight: "#f0fdf4",
    overview: {
      title: "Efficiency at Scale",
      text: "Stop using scattered spreadsheets and disconnected tools. Our custom business applications integrate every department, automate workflows, and deliver real-time insights to help you make better decisions faster.",
      benefits: [
        "Custom CRM, ERP, and HRMS systems",
        "Role-based access control and permissions",
        "Real-time reporting and analytics dashboards",
        "Automated workflows and notifications",
        "POS and billing system integration",
        "Barcode, QR, and inventory tracking",
      ],
    },
    features: [
      { title: "CRM Systems", description: "Lead tracking, pipeline management, and automated follow-ups." },
      { title: "ERP Solutions", description: "Finance, HR, procurement, and operations in one unified platform." },
      { title: "HRMS", description: "Employee management, payroll, attendance, and leave management." },
      { title: "Inventory Systems", description: "Real-time stock tracking, barcode scanning, and supplier management." },
      { title: "Admin Dashboards", description: "Powerful, data-rich dashboards with charts, reports, and KPIs." },
      { title: "POS Systems", description: "Point-of-sale systems with billing, receipts, and sales analytics." },
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Business process analysis and requirements documentation." },
      { step: "02", title: "Planning", desc: "System architecture, module planning, and database design." },
      { step: "03", title: "Design", desc: "UI/UX for internal tools — clean, efficient, and user-friendly." },
      { step: "04", title: "Development", desc: "Module development, data migration, and system integration." },
      { step: "05", title: "Testing", desc: "User acceptance testing, load testing, and security audit." },
      { step: "06", title: "Launch", desc: "Deployment, staff training, and ongoing support." },
    ],
    technologies: ["React.js", "Node.js", "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "Firebase"],
    relatedProjects: [
      {
        title: "RightTouch Admin Dashboard",
        description: "Admin dashboard to manage technicians, customers, bookings, and services.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85",
      },
      {
        title: "Label Aadvi Admin Dashboard",
        description: "Admin dashboard for managing products, orders, customers, and reports.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
      },
      {
        title: "Barcode Inventory System",
        description: "Barcode-based inventory management system for clothing products.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85",
      },
    ],
    faq: [
      { q: "Is the system cloud-based?", a: "Yes, accessible securely from anywhere with role-based login." },
      { q: "Can it integrate with existing tools?", a: "Yes, we integrate with accounting software, payment gateways, and third-party APIs." },
      { q: "Is training provided?", a: "Yes, we provide full onboarding and training for your team." },
      { q: "How long does it take to build a custom CRM?", a: "A standard CRM takes 8–16 weeks. Enterprise ERP systems may take 3–6 months." },
    ],
  },

  {
    id: "service-marketplace",
    slug: "service-marketplace",
    category: "Development",
    title: "Service Marketplace",
    shortDescription:
      "On-demand service platforms for technician booking, appointment scheduling, home services, and multi-vendor marketplaces.",
    heroDescription:
      "We build on-demand service platforms that connect customers with service providers — from home service booking to appointment scheduling and multi-vendor marketplaces.",
    accent: "#f97316",
    bgLight: "#fff7ed",
    overview: {
      title: "Build the Next Uber for Your Industry",
      text: "We design and develop complete service marketplace platforms with real-time booking, technician management, live tracking, and seamless payment flows. Perfect for home services, healthcare appointments, and professional service platforms.",
      benefits: [
        "Real-time service booking and scheduling",
        "Technician / provider management system",
        "Live GPS tracking and status updates",
        "Secure payment processing and split payouts",
        "Rating, review, and feedback system",
        "Customer and partner mobile apps",
      ],
    },
    features: [
      { title: "Booking System", description: "Real-time availability, slot booking, and automated confirmations." },
      { title: "Provider Management", description: "Onboard, verify, and manage service providers with dashboards." },
      { title: "Live Tracking", description: "GPS-based real-time tracking for service delivery." },
      { title: "Payment & Payouts", description: "Secure payments with automated split payouts to vendors." },
      { title: "Rating System", description: "Customer reviews, star ratings, and service quality tracking." },
      { title: "Multi-App Support", description: "Customer app, partner app, and admin web panel." },
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Platform concept, user roles, and marketplace flow design." },
      { step: "02", title: "Planning", desc: "Feature roadmap, tech stack, and database architecture." },
      { step: "03", title: "Design", desc: "UI/UX for customer, partner, and admin interfaces." },
      { step: "04", title: "Development", desc: "Backend APIs, mobile apps, and web admin panel development." },
      { step: "05", title: "Testing", desc: "End-to-end booking flow testing, payment testing, and load testing." },
      { step: "06", title: "Launch", desc: "Production deployment, app store submission, and go-live support." },
    ],
    technologies: ["React Native", "React.js", "Node.js", "MongoDB", "Firebase", "Google Maps API", "Razorpay", "Socket.io"],
    relatedProjects: [
      {
        title: "RightTouch Service",
        description: "Urban Company-style service marketplace for booking technicians and home services.",
        image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=85",
        liveLink: "https://righttouchservice.com",
      },
    ],
    faq: [
      { q: "Can you build something like Urban Company?", a: "Yes, we specialize in on-demand service marketplace platforms with booking, tracking, and payment flows." },
      { q: "Do you build the mobile app too?", a: "Yes, we develop both the customer and partner mobile apps along with the admin web panel." },
      { q: "How long does it take?", a: "A complete marketplace platform typically takes 16–24 weeks." },
      { q: "Can I onboard multiple service categories?", a: "Yes, we build multi-category platforms with flexible service provider and slot management." },
    ],
  },

  {
    id: "custom-software-development",
    slug: "custom-software-development",
    category: "Development",
    title: "Custom Software Development",
    shortDescription:
      "Tailor-made software solutions designed to automate business processes and meet unique organizational requirements.",
    heroDescription:
      "We build tailor-made software solutions that automate your unique business processes, eliminate inefficiencies, and scale with your organization.",
    accent: "#6366f1",
    bgLight: "#eef2ff",
    overview: {
      title: "Software Built Exactly for You",
      text: "Off-the-shelf software rarely fits your exact workflow. We design and develop fully custom software solutions from scratch — built specifically for your processes, your team, and your scale.",
      benefits: [
        "100% custom-built to your requirements",
        "Full ownership of source code and IP",
        "Scalable architecture that grows with you",
        "Seamless integration with existing tools",
        "Automated workflows and process optimization",
        "Dedicated development team and support",
      ],
    },
    features: [
      { title: "Requirement Analysis", description: "Deep dive into your processes to map every requirement accurately." },
      { title: "Custom Architecture", description: "Purpose-built system design for your specific use case and scale." },
      { title: "API Development", description: "RESTful and GraphQL APIs for seamless system integration." },
      { title: "Automation", description: "Workflow automation to eliminate manual, repetitive tasks." },
      { title: "Reporting & Analytics", description: "Custom dashboards and data export for business intelligence." },
      { title: "Maintenance & Updates", description: "Ongoing support, updates, and feature enhancements." },
    ],
    process: [
      { step: "01", title: "Discovery", desc: "In-depth business process analysis and documentation." },
      { step: "02", title: "Planning", desc: "Solution architecture, tech stack decision, and sprint planning." },
      { step: "03", title: "Design", desc: "System design, database schema, and UI/UX wireframes." },
      { step: "04", title: "Development", desc: "Iterative development with regular demos and feedback." },
      { step: "05", title: "Testing", desc: "Unit testing, integration testing, UAT, and performance tuning." },
      { step: "06", title: "Launch", desc: "Production deployment, migration, training, and support." },
    ],
    technologies: ["React.js", "Node.js", "Python", "PostgreSQL", "MongoDB", "Docker", "AWS", "Redis", "GraphQL"],
    relatedProjects: [
      {
        title: "Label Aadvi Admin Dashboard",
        description: "Admin dashboard for managing products, orders, customers, and reports.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
      },
      {
        title: "TNEbA Admin Dashboard",
        description: "Internal admin dashboard for managing website content and operations.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
      },
    ],
    faq: [
      { q: "Do I own the source code?", a: "Yes, 100% of the source code and intellectual property belongs to you." },
      { q: "Can you integrate with our existing systems?", a: "Yes, we build integration layers to connect with your current tools and databases." },
      { q: "What if requirements change during development?", a: "We use agile methodology, so changes can be accommodated in upcoming sprints." },
      { q: "Do you provide post-launch support?", a: "Yes, we offer maintenance plans and dedicated support packages." },
    ],
  },

  // ══════════════════════════
  //  MARKETING SERVICES
  // ══════════════════════════

  {
    id: "seo-analytics",
    slug: "seo-analytics",
    category: "Marketing",
    title: "SEO & Analytics",
    shortDescription:
      "Improve search engine rankings and track website performance with data-driven SEO strategies that increase visibility and organic traffic.",
    heroDescription:
      "We help businesses rank higher on Google using advanced SEO strategies, competitor research, and real-time analytics that drive sustainable organic traffic growth.",
    accent: "#2563eb",
    bgLight: "#eff6ff",
    overview: {
      title: "Why Invest in SEO?",
      text: "SEO is not just about keywords — it is about building authority, trust, and long-term organic traffic that converts. We optimize your entire digital presence using data-driven strategies and continuous performance monitoring.",
      benefits: [
        "On-Page and Technical SEO optimization",
        "High-quality backlink building",
        "Keyword research and search intent mapping",
        "Google Analytics 4 and Search Console setup",
        "Core Web Vitals and page speed optimization",
        "Monthly ranking reports and growth tracking",
      ],
    },
    features: [
      { title: "Technical SEO Audit", description: "Full crawl analysis, broken link detection, and site health scoring." },
      { title: "Keyword Research", description: "In-depth keyword mapping based on search intent and competitor gaps." },
      { title: "On-Page Optimization", description: "Title tags, meta descriptions, headers, and schema markup." },
      { title: "Backlink Building", description: "White-hat link acquisition from authoritative, relevant domains." },
      { title: "Analytics Setup", description: "GA4, Search Console, and conversion tracking configuration." },
      { title: "Reporting", description: "Monthly dashboards showing rankings, traffic, and ROI metrics." },
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Website audit, competitor analysis, and opportunity mapping." },
      { step: "02", title: "Planning", desc: "Keyword strategy, content calendar, and link building plan." },
      { step: "03", title: "Design", desc: "Content brief creation and page structure optimization." },
      { step: "04", title: "Execution", desc: "On-page fixes, content publication, and link outreach." },
      { step: "05", title: "Optimization", desc: "A/B testing, Core Web Vitals improvements, and CTR optimization." },
      { step: "06", title: "Delivery", desc: "Monthly reporting, insights, and strategy refinement." },
    ],
    technologies: ["Google Analytics 4", "Google Search Console", "SEMrush", "Ahrefs", "Screaming Frog", "Looker Studio", "Moz"],
    relatedProjects: [
      {
        title: "TNEbA Website",
        description: "SEO-optimized business website with structured data and fast loading times.",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=85",
        liveLink: "https://tnebwebsiteui.onrender.com",
      },
      {
        title: "AKA Associates",
        description: "Local SEO strategy and content optimization for AKA Associates.",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
        liveLink: "https://akaassociate.com",
      },
    ],
    faq: [
      { q: "How long does it take to see SEO results?", a: "SEO is a long-term investment. Significant improvements are typically visible within 3–6 months." },
      { q: "Do you guarantee #1 Google rankings?", a: "No ethical agency can guarantee #1 rankings, but we guarantee improved visibility, traffic, and rankings over time." },
      { q: "Is this a one-time service or ongoing?", a: "We offer both one-time audits and monthly retainers for continuous growth and ranking improvement." },
      { q: "Do you handle local SEO?", a: "Yes, we optimize for local search including Google Business Profile, local citations, and map rankings." },
    ],
  },

  {
    id: "social-media-marketing",
    slug: "social-media-marketing",
    category: "Marketing",
    title: "Social Media Marketing",
    shortDescription:
      "Grow your brand across Instagram, Facebook, LinkedIn, YouTube, and other platforms with strategic social media management.",
    heroDescription:
      "We grow your brand presence across all major social platforms with strategic content, community engagement, and paid advertising campaigns.",
    accent: "#9333ea",
    bgLight: "#fdf4ff",
    overview: {
      title: "Engage, Grow, Convert",
      text: "Social media is more than posting — it is about building community, trust, and a loyal audience. We handle everything from content strategy and creative design to paid ad campaigns and community management.",
      benefits: [
        "Multi-platform strategy (Instagram, Facebook, LinkedIn, YouTube)",
        "Content calendar and creative scheduling",
        "Reels, videos, and engaging story formats",
        "Meta Ads and paid social campaign management",
        "Community management and audience engagement",
        "Monthly analytics and performance reporting",
      ],
    },
    features: [
      { title: "Content Strategy", description: "Platform-specific content pillars aligned with your brand voice." },
      { title: "Creative Design", description: "Eye-catching posts, stories, banners, and carousel graphics." },
      { title: "Reels & Video", description: "Trend-driven short-form video content designed for maximum reach." },
      { title: "Paid Campaigns", description: "Meta Ads, Instagram promotions, and LinkedIn campaigns." },
      { title: "Community Management", description: "Inbox management, comment responses, and audience engagement." },
      { title: "Performance Reporting", description: "Monthly reach, engagement, and conversion reports." },
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Brand audit, audience research, and competitor analysis." },
      { step: "02", title: "Planning", desc: "Content pillars, posting schedule, and campaign planning." },
      { step: "03", title: "Design", desc: "Creative production — graphics, videos, and copywriting." },
      { step: "04", title: "Execution", desc: "Scheduled posting, community engagement, and ad launches." },
      { step: "05", title: "Optimization", desc: "Performance analysis, A/B testing, and strategy refinement." },
      { step: "06", title: "Delivery", desc: "Monthly reports with insights and next-cycle recommendations." },
    ],
    technologies: ["Meta Business Suite", "Canva Pro", "Adobe Premiere Pro", "CapCut", "Hootsuite", "Buffer", "Google Trends"],
    relatedProjects: [
      {
        title: "Label Aadvi",
        description: "Social media growth strategy for the Label Aadvi fashion brand across Instagram and Facebook.",
        image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=85",
        liveLink: "https://labelaadvi.com",
      },
    ],
    faq: [
      { q: "Which platforms do you manage?", a: "Instagram, Facebook, LinkedIn, YouTube, Twitter/X, and Pinterest." },
      { q: "Do you include ad spend in the package?", a: "No, ad spend is paid directly by you to the platform. We manage the campaigns on your behalf." },
      { q: "How many posts per month do you create?", a: "Packages vary from 12 to 30+ posts per month depending on the plan." },
      { q: "Can you create viral Reels?", a: "We create trend-driven, optimized Reels designed to maximize organic reach and engagement." },
    ],
  },

  {
    id: "performance-marketing",
    slug: "performance-marketing",
    category: "Marketing",
    title: "Performance Marketing",
    shortDescription:
      "Generate high-quality leads and increase sales with Google Ads, Meta Ads, and ROI-focused advertising campaigns.",
    heroDescription:
      "We create and manage ROI-focused advertising campaigns on Google, Meta, and beyond — built to generate qualified leads and measurable sales results.",
    accent: "#ef4444",
    bgLight: "#fff1f2",
    overview: {
      title: "Ads That Actually Convert",
      text: "We build performance marketing systems that target your ideal customers, capture their interest, and deliver measurable results. From Google Search and Display Ads to Meta Ads funnels, every rupee of your budget is optimized.",
      benefits: [
        "Google Ads (Search, Display, YouTube, Shopping)",
        "Meta Ads (Facebook and Instagram) campaign management",
        "Landing page creation for high conversion",
        "A/B testing and continuous optimization",
        "ROI-focused reporting and transparent metrics",
        "Retargeting and lookalike audience strategies",
      ],
    },
    features: [
      { title: "Google Ads", description: "Search, Display, Shopping, and YouTube ad campaign management." },
      { title: "Meta Ads", description: "Facebook and Instagram ad campaigns with precise audience targeting." },
      { title: "Landing Pages", description: "High-converting landing pages designed to maximize lead capture." },
      { title: "A/B Testing", description: "Continuous creative and audience testing to lower CPL and increase ROAS." },
      { title: "Retargeting", description: "Re-engage website visitors and past customers with smart retargeting." },
      { title: "ROI Reporting", description: "Weekly and monthly reports showing spend, leads, CPC, and ROAS." },
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Business goals, target audience, and budget analysis." },
      { step: "02", title: "Planning", desc: "Campaign structure, ad copy, and audience segmentation." },
      { step: "03", title: "Design", desc: "Ad creatives, landing page design, and funnel setup." },
      { step: "04", title: "Execution", desc: "Campaign launch and initial optimization." },
      { step: "05", title: "Optimization", desc: "A/B testing, bid adjustments, and audience scaling." },
      { step: "06", title: "Delivery", desc: "Performance reports with ROAS, CPL, and growth insights." },
    ],
    technologies: ["Google Ads", "Meta Ads Manager", "Google Analytics 4", "Google Tag Manager", "Hotjar", "Unbounce", "HubSpot"],
    relatedProjects: [
      {
        title: "RightTouch",
        description: "Performance ad campaigns to drive app downloads and service bookings.",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85",
      },
    ],
    faq: [
      { q: "What is the minimum ad budget required?", a: "We recommend a minimum of ₹15,000–₹30,000/month ad spend for meaningful results." },
      { q: "Do you guarantee leads?", a: "We guarantee a high-performance, continuously optimized campaign system with transparent reporting." },
      { q: "Which industries do you work with?", a: "Real estate, education, healthcare, B2B services, e-commerce, and local businesses." },
      { q: "How quickly can I see results?", a: "Initial results are typically visible within 2–4 weeks of campaign launch." },
    ],
  },

  {
    id: "branding-creative-design",
    slug: "branding-creative-design",
    category: "Marketing",
    title: "Branding & Creative Design",
    shortDescription:
      "Create memorable brand identities with logo design, social media creatives, banners, brochures, posters, and marketing materials.",
    heroDescription:
      "We craft memorable brand identities and stunning creative designs that make your business stand out — from logos and brand guides to marketing collaterals and social media graphics.",
    accent: "#ec4899",
    bgLight: "#fdf2f8",
    overview: {
      title: "Brand Identity That Speaks for You",
      text: "Your brand is more than a logo — it is the entire visual and emotional experience of your business. We create cohesive brand identities with a consistent visual language that resonates with your audience and builds trust.",
      benefits: [
        "Professional logo design with brand mark and variations",
        "Complete brand identity guidelines and style guide",
        "Social media creative templates for all platforms",
        "Marketing collaterals — brochures, flyers, and posters",
        "Pitch decks and business presentation design",
        "Packaging and product design",
      ],
    },
    features: [
      { title: "Logo Design", description: "Unique, scalable logos with primary, secondary, and icon variations." },
      { title: "Brand Guidelines", description: "Complete brand style guide including colors, fonts, and usage rules." },
      { title: "Social Media Templates", description: "Ready-to-use Canva and Figma templates for posts, stories, and banners." },
      { title: "Marketing Collaterals", description: "Brochures, flyers, posters, and business card design." },
      { title: "Presentation Design", description: "Professional investor pitch decks and business presentations." },
      { title: "Packaging Design", description: "Product packaging, label design, and unboxing experience." },
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Brand research, competitor audit, and brand personality workshop." },
      { step: "02", title: "Planning", desc: "Moodboard creation, color palette selection, and direction alignment." },
      { step: "03", title: "Design", desc: "Logo concepts, brand elements, and identity creation." },
      { step: "04", title: "Execution", desc: "Collateral design, template creation, and brand guide compilation." },
      { step: "05", title: "Optimization", desc: "Revisions, refinements, and stakeholder feedback incorporation." },
      { step: "06", title: "Delivery", desc: "Final files in all formats — AI, SVG, PNG, PDF, and editable templates." },
    ],
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma", "Canva Pro", "Adobe InDesign", "After Effects"],
    relatedProjects: [
      {
        title: "Label Aadvi",
        description: "Complete brand identity for the Label Aadvi fashion brand including logo and packaging.",
        image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=85",
        liveLink: "https://labelaadvi.com",
      },
      {
        title: "RightTouch",
        description: "Brand identity and design system for the RightTouch service platform.",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85",
      },
    ],
    faq: [
      { q: "How many logo concepts will I receive?", a: "Typically 3–5 unique logo concepts, with revisions on your chosen direction." },
      { q: "What file formats do you deliver?", a: "AI, EPS, SVG, PNG (transparent), PDF, and Canva/Figma editable templates." },
      { q: "Do you design brochures and packaging too?", a: "Yes, we offer complete marketing collateral and product packaging design services." },
      { q: "Can you redesign my existing brand?", a: "Yes, we offer brand refresh and redesign services to modernize your existing identity." },
    ],
  },

  {
    id: "creative-media-production",
    slug: "creative-media-production",
    category: "Marketing",
    title: "Creative Media Production",
    shortDescription:
      "Professional on-site video shoots, photography, reels creation, promotional videos, editing, and engaging social media content for your business.",
    heroDescription:
      "We produce professional on-site videos, product photography, Instagram Reels, and promotional content that showcases your brand in the best possible light.",
    accent: "#f59e0b",
    bgLight: "#fffbeb",
    includes: [
      "Client location video shooting",
      "Professional photography",
      "Instagram Reels creation",
      "Facebook & YouTube content",
      "Video editing and post-production",
      "Promotional videos and brand films",
      "Product photography",
      "Social media creatives and graphics",
    ],
    overview: {
      title: "Visual Content That Sells",
      text: "In today's digital landscape, professional video and photography are the most powerful tools to build credibility and attract customers. We handle everything — from pre-production planning to on-site shooting and post-production editing.",
      benefits: [
        "On-location professional video shoots",
        "High-quality product and brand photography",
        "Instagram Reels and short-form video content",
        "YouTube, Facebook, and social media content",
        "Professional editing with motion graphics",
        "Promotional and brand film production",
      ],
    },
    features: [
      { title: "On-Site Video Shoots", description: "Professional crew visits your location for branded video content." },
      { title: "Photography", description: "Product, team, workspace, and lifestyle photography sessions." },
      { title: "Reels & Short Videos", description: "Trending, algorithm-optimized short-form content for Instagram and YouTube." },
      { title: "Video Editing", description: "Professional post-production with color grading, sound design, and graphics." },
      { title: "Promotional Films", description: "Brand stories, explainer videos, and product showcases." },
      { title: "Social Media Creatives", description: "Designed graphics and visuals to complement your video content." },
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Creative brief, storyboard, and shot list preparation." },
      { step: "02", title: "Planning", desc: "Schedule planning, location scouting, and equipment setup." },
      { step: "03", title: "Design", desc: "Script writing, storyboard finalization, and prop/styling prep." },
      { step: "04", title: "Execution", desc: "On-site photo/video shoot with professional equipment." },
      { step: "05", title: "Optimization", desc: "Editing, color grading, subtitles, and feedback revisions." },
      { step: "06", title: "Delivery", desc: "Final deliverables in all required formats and resolutions." },
    ],
    technologies: ["Adobe Premiere Pro", "After Effects", "Adobe Photoshop", "Lightroom", "DaVinci Resolve", "CapCut", "Canva Pro"],
    relatedProjects: [
      {
        title: "Label Aadvi",
        description: "Product photography and promotional video content for the Label Aadvi fashion brand.",
        image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=85",
        liveLink: "https://labelaadvi.com",
      },
      {
        title: "RightTouch",
        description: "Brand promotional videos and app demo content for the RightTouch platform.",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85",
      },
    ],
    faq: [
      { q: "Do you shoot at our location?", a: "Yes, we come to your office, store, warehouse, or any location for on-site shoots." },
      { q: "What equipment do you use?", a: "We use professional DSLR/mirrorless cameras, studio lighting, and pro audio equipment." },
      { q: "How long does editing take?", a: "Typically 5–10 business days depending on the project scope." },
      { q: "Can you create YouTube channel content?", a: "Yes, we produce and edit complete YouTube video series and channel content." },
    ],
  },

  {
    id: "content-marketing",
    slug: "content-marketing",
    category: "Marketing",
    title: "Content Marketing",
    shortDescription:
      "Create engaging website content, blogs, SEO articles, and compelling marketing copy that attracts and converts customers.",
    heroDescription:
      "We create compelling content — from SEO blogs and website copy to email campaigns and marketing scripts — that attracts your ideal audience and converts them into loyal customers.",
    accent: "#10b981",
    bgLight: "#ecfdf5",
    overview: {
      title: "Content That Works While You Sleep",
      text: "Great content builds authority, drives organic traffic, and nurtures leads through the entire customer journey. Our content marketing strategies are data-driven, SEO-focused, and crafted to deliver long-term results.",
      benefits: [
        "SEO-optimized blog articles and website content",
        "Keyword-driven content strategy and planning",
        "Email marketing campaigns and automation",
        "Case studies and thought leadership content",
        "Social media copywriting and captions",
        "Video scripts and promotional content writing",
      ],
    },
    features: [
      { title: "Blog Writing", description: "Long-form, SEO-optimized articles that rank and generate organic traffic." },
      { title: "Website Copywriting", description: "Compelling page copy that communicates your value and converts visitors." },
      { title: "Email Marketing", description: "Nurture sequences, newsletters, and promotional email campaigns." },
      { title: "Social Media Copy", description: "Engaging captions, hooks, and hashtag strategies for every platform." },
      { title: "Content Strategy", description: "Monthly content calendar with topic clusters and SEO keyword mapping." },
      { title: "Case Studies", description: "Customer success stories and data-driven case study writing." },
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Brand voice audit, target audience research, and topic ideation." },
      { step: "02", title: "Planning", desc: "Content calendar, keyword mapping, and content brief creation." },
      { step: "03", title: "Design", desc: "Content structure, outline, and format optimization." },
      { step: "04", title: "Execution", desc: "Expert writing, editing, and SEO optimization of each piece." },
      { step: "05", title: "Optimization", desc: "Publishing, interlinking, and performance monitoring." },
      { step: "06", title: "Delivery", desc: "Monthly content report with traffic, rankings, and engagement data." },
    ],
    technologies: ["WordPress", "Google Docs", "SEMrush", "Ahrefs", "Grammarly", "Mailchimp", "HubSpot", "Notion"],
    relatedProjects: [
      {
        title: "TNEbA Website",
        description: "Complete website content writing and SEO optimization for the TNEbA website.",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=85",
        liveLink: "https://tnebwebsiteui.onrender.com",
      },
      {
        title: "AKA Associates",
        description: "Corporate website copy and blog content strategy for AKA Associates.",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
        liveLink: "https://akaassociate.com",
      },
    ],
    faq: [
      { q: "How many blogs do you write per month?", a: "Packages range from 4 to 16 blog articles per month based on your plan." },
      { q: "Is the content SEO optimized?", a: "Yes, every piece of content is keyword-researched and optimized for search visibility." },
      { q: "Do you write for any industry?", a: "Yes, our writers cover technology, healthcare, real estate, fashion, finance, and more." },
      { q: "Can you write website copy for a new website?", a: "Yes, we specialize in conversion-focused website copywriting for new and existing sites." },
    ],
  },

  // ══════════════════════════
  //  SUPPORT SERVICES
  // ══════════════════════════

  {
    id: "maintenance-support",
    slug: "maintenance-support",
    category: "Support",
    title: "Maintenance & Support",
    shortDescription:
      "Keep your digital products secure, updated, and running smoothly with reliable ongoing technical support.",
    heroDescription:
      "Keep your digital products secure, updated, and running smoothly with reliable ongoing technical support, 24/7 uptime monitoring, and rapid bug resolution.",
    accent: "#0ea5e9",
    bgLight: "#eff6ff",
    overview: {
      title: "Reliable Support for Zero Downtime",
      text: "Digital systems need proactive care. From regular security updates and server tuning to rapid bug fixes and emergency patches, our dedicated support engineers ensure your website and apps run seamlessly 24/7.",
      benefits: [
        "24/7 Uptime & Performance Monitoring",
        "Regular Security Patches & Vulnerability Audits",
        "Automated Cloud Backups & Instant Disaster Recovery",
        "Database Optimization & Speed Tuning",
        "Fast SLA-backed Bug Fixes & Technical Troubleshooting",
        "Continuous Software Updates & Dependency Upgrades",
      ],
    },
    features: [
      { title: "24/7 Server Monitoring", description: "Real-time health monitoring with automated alerts for immediate incident response." },
      { title: "Security Patches & Audits", description: "Regular vulnerability scanning, SSL checks, and firewall rules management." },
      { title: "Automated Daily Backups", description: "Cloud-stored redundant backups with 1-click restore capabilities." },
      { title: "Performance Tuning", description: "Cache optimization, CDN management, and database query refinement." },
      { title: "Feature Upgrades & Fixes", description: "Minor enhancements, UI tweaks, and dependency upgrades." },
      { title: "Dedicated Support Desk", description: "Priority ticketing system and dedicated engineers for immediate help." },
    ],
    process: [
      { step: "01", title: "System Audit", desc: "Comprehensive audit of code, architecture, server, and security posture." },
      { step: "02", title: "Monitoring Setup", desc: "Configuration of uptime alerts, log aggregators, and error tracking." },
      { step: "03", title: "Backup & Hardening", desc: "Automated backup schedules and firewall/security hardening." },
      { step: "04", title: "Routine Maintenance", desc: "Weekly software updates, security scans, and database maintenance." },
      { step: "05", title: "Incident Management", desc: "Rapid response to any unexpected errors or downtime events." },
      { step: "06", title: "Monthly Reporting", desc: "Detailed monthly health reports, uptime metrics, and performance analytics." },
    ],
    technologies: ["AWS CloudWatch", "Sentry", "New Relic", "GitHub Actions", "Docker", "Nginx", "Linux", "MongoDB Atlas"],
    relatedProjects: [
      {
        title: "TNEbA Web & Admin",
        description: "Ongoing SLA technical support, server monitoring, and database management for TNEbA.",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85",
        liveLink: "https://tnebwebsiteui.onrender.com",
      },
      {
        title: "AKA Associates Platform",
        description: "Continuous maintenance, security audits, and cloud infrastructure support for AKA Associates.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
        liveLink: "https://akaassociate.com",
      },
    ],
    faq: [
      { q: "What does the maintenance plan include?", a: "It includes 24/7 uptime monitoring, automated backups, security patching, bug fixes, and monthly health reports." },
      { q: "How fast is your response time for critical issues?", a: "For critical emergencies, our SLA guarantees response and action within 15 to 30 minutes." },
      { q: "Can you maintain applications not originally built by FlareMinds?", a: "Yes, we conduct a quick code and infrastructure audit first, then onboard your project into our support lifecycle." },
      { q: "Are backups stored safely off-site?", a: "Yes, all backups are encrypted and stored in geo-redundant cloud storage locations." },
    ],
  },
];

// Derived lookups for convenience
export const servicesBySlug = Object.fromEntries(allServices.map((s) => [s.slug, s]));

export const developmentServices = allServices.filter((s) => s.category === "Development");
export const marketingServices = allServices.filter((s) => s.category === "Marketing");
export const supportServices = allServices.filter((s) => s.category === "Support");
