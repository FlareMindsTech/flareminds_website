import tyrosImg from "../assets/images/projects/TYROS.webp";
import hrmsImg from "../assets/images/projects/HRMS.webp";

export const PRODUCTS_DATA = [
  {
    id: "tyros",
    name: "TYROS",
    subtitle: "Automotive & Tyre Franchise Platform",
    badge: "Flagship Mobile SaaS",
    tagline: "Next-Gen Tyre Sales, Inventory & Multi-Branch Franchise Management",
    description:
      "TYROS is FlareMinds' proprietary mobile-first retail ecosystem built specifically for tyre dealerships, automotive workshops, and multi-branch retail networks. It replaces fragmented paper registers and spreadsheets with automated stock lookup, real-time sales targets, customer follow-up pipelines, and consolidated multi-store revenue intelligence.",
    status: {
      type: "deploying",
      label: "Deploying Soon",
      badgeColor: "#ea580c",
      pulseColor: "#f97316",
      announcement: "Mobile app packaging & store deployment in progress. Early access waitlist open."
    },
    tech: ["Flutter", "React", "Node.js", "MongoDB"],
    image: tyrosImg,
    demoLink: null,
    waitlistAvailable: true,
    targetAudience: "Tyre Retailers, Automotive Garages & Multi-Store Tyre Franchises",
    highlights: [
      {
        iconKey: "store",
        title: "Multi-Franchise Sync",
        desc: "Centralized overview across all branches — compare shop revenue, pending orders, and overdue follow-ups in real time."
      },
      {
        iconKey: "barcode",
        title: "Tyre Master Catalog",
        desc: "Instant tyre brand and rim-size specifications across MRF, Apollo, Michelin, Bridgestone, CEAT, and Goodyear."
      },
      {
        iconKey: "crm",
        title: "Enquiry & Fitment CRM",
        desc: "Capture vehicle walk-ins, track fitment services, log tyre warranties, and automate follow-ups for repeat purchases."
      },
      {
        iconKey: "chart",
        title: "Target & Revenue Engine",
        desc: "Set monthly shop quotas, track sales team achievements, and generate automated performance reports."
      }
    ],
    architecture: [
      { label: "Frontend", value: "Flutter Mobile (Android/iOS) + React Web Admin" },
      { label: "Backend", value: "Node.js Microservices" },
      { label: "Database", value: "MongoDB Distributed Cluster" },
      { label: "Deployment", value: "Multi-tenant Cloud" }
    ]
  },
  {
    id: "hrms",
    name: "HRMS Suite",
    subtitle: "Enterprise Workforce & Talent Platform",
    badge: "Enterprise Cloud Suite",
    brandingNotice: "Official Name & Brand Logo Revealing Soon",
    tagline: "Modern Workforce, Automated Payroll & Talent Operations Platform",
    description:
      "A comprehensive, cloud-native Human Resource Management System engineered to modernize enterprise workforce operations from hire to retire. Currently in final quality assurance and balance testing, the suite streamlines employee master directories, biometric attendance, tax-compliant payroll computations, shift scheduling, and hierarchical approval workflows.",
    status: {
      type: "testing",
      label: "Testing Phase • 90% Completed",
      badgeColor: "#c79d58",
      pulseColor: "#eab308",
      announcement: "Core modules completed. Balance testing in progress on staging environment."
    },
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    image: hrmsImg,
    demoLink: "https://hrmsui.onrender.com/login",
    waitlistAvailable: false,
    targetAudience: "Growing Startups, Tech Agencies, SMEs & Mid-to-Large Enterprises",
    highlights: [
      {
        iconKey: "users",
        title: "Employee Directory & RBAC",
        desc: "360-degree employee profiles, onboarding records, document verification, and granular role-based permissions."
      },
      {
        iconKey: "clock",
        title: "Smart Attendance & Shifts",
        desc: "Automated daily check-ins, geo-tagging, overtime calculation, and dynamic shift rotation management."
      },
      {
        iconKey: "payroll",
        title: "One-Click Payroll & Tax",
        desc: "Automated salary computation, deductions, bonuses, statutory compliance, and one-click payslip generation."
      },
      {
        iconKey: "calendar",
        title: "Leave & Workflow Engine",
        desc: "Multi-level approval hierarchy for casual, sick, and earned leaves with real-time balance reconciliation."
      }
    ],
    architecture: [
      { label: "Frontend", value: "React 18 + Tailwind CSS SPA" },
      { label: "Backend", value: "Node.js + Express REST API" },
      { label: "Database", value: "MongoDB Atlas Cloud" },
      { label: "Staging Host", value: "Render Cloud Infrastructure" }
    ]
  }
];
