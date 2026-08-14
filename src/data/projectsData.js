import AKA from "../assets/images/projects/AKA.webp";
import labelAadvi from "../assets/images/projects/label-aadvi.webp";
import AADVI from "../assets/images/projects/AADVI-ADMIN.webp";
import AADVIIN from "../assets/images/projects/AADVI-IN.webp";
import Atelier from "../assets/images/projects/Atelier.webp";
import BAR from "../assets/images/projects/BAR.webp";
import InstituteApp from "../assets/images/projects/Institute-App.webp";
import RTADMIN from "../assets/images/projects/RT-ADMIN.webp";
import RTApp from "../assets/images/projects/RT-App.webp";
import RTPAPP from "../assets/images/projects/RTP-APP.webp";
import RTPWEB from "../assets/images/projects/RTPWEB.webp";
import RTWEB from "../assets/images/projects/RTWEB.webp";
import TNEBADMIN from "../assets/images/projects/TNEB-ADMIN.webp";
import TNEBWEB from "../assets/images/projects/TNEB-WEB.webp";

export const ALL_PROJECTS = [
  // ── Business Websites ───────────────────────────────────────
  {
    id: 1,
    title: "TNEBA Website",
    category: "Business Websites",
    categoryId: "business-websites",
    description:
      "Official website developed for TNEbA with a clean, modern, and responsive interface.",
    image: TNEBWEB,
    tech: ["React", "Node.js", "MongoDB"],
    status: "live",
    link: "https://tnebwebsiteui.onrender.com",
    accent: "#2563eb",
    featured: false,
  },
  {
    id: 2,
    title: "AKA Associates",
    category: "Business Websites",
    categoryId: "business-websites",
    description:
      "Professional corporate business website designed for AKA Associates with brand-aligned aesthetics.",
    image: AKA,
    tech: ["React", "CSS3", "Node.js"],
    status: "live",
    link: "https://akaassociate.com",
    accent: "#2563eb",
    featured: false,
  },
  {
    id: 3,
    title: "RightTouch Partner Website",
    category: "Business Websites",
    categoryId: "business-websites",
    description:
      "Partner portal website for the RightTouch home service platform — built for technician onboarding.",
    image: RTPWEB,
    tech: ["React", "Node.js", "REST API"],
    status: "live",
    link: "https://righttouchpartner.com",
    accent: "#2563eb",
    featured: false,
  },

  // ── E-Commerce ──────────────────────────────────────────────
  {
    id: 4,
    title: "Label Aadvi",
    category: "E-Commerce",
    categoryId: "e-commerce",
    description:
      "Complete D2C e-commerce platform for a clothing brand — featuring product catalog, cart, secure checkout, and order tracking.",
    image: labelAadvi,
    tech: ["React", "Node.js", "MongoDB", "Razorpay"],
    status: "live",
    link: "https://labelaadvi.com",
    accent: "#7c3aed",
    featured: false,
  },

  // ── Service Marketplace ──────────────────────────────────────
  {
    id: 5,
    title: "RightTouch Service",
    category: "Service Marketplace",
    categoryId: "service-marketplace",
    description:
      "On-demand service marketplace for booking trusted home service professionals, with real-time booking, location tracking, and seamless customer management",
    image: RTWEB,
    tech: ["React Native", "Node.js", "Socket.io", "Maps API"],
    status: "live",
    link: "https://righttouchservice.com",
    accent: "#f97316",
    featured: true,
  },

  // ── Business Applications ────────────────────────────────────
  {
    id: 6,
    title: "Label Aadvi Admin Dashboard",
    category: "Business Applications",
    categoryId: "business-applications",
    description:
      "Full-featured admin dashboard for managing products, orders, customers, and revenue reports.",
    image: AADVI,
    tech: ["React", "Node.js", "MongoDB"],
    status: "live",
    link: null,
    accent: "#14b8a6",
    featured: false,
  },
  {
    id: 7,
    title: "TNEBA Admin Dashboard",
    category: "Business Applications",
    categoryId: "business-applications",
    description:
      "Internal admin panel for managing website content, media, and operational data for TNEBA.",
    image: TNEBADMIN,
    tech: ["React", "Node.js", "REST API"],
    status: "live",
    link: null,
    accent: "#14b8a6",
    featured: false,
  },
  {
    id: 8,
    title: "RightTouch Admin Dashboard",
    category: "Business Applications",
    categoryId: "business-applications",
    description:
      "Centralized admin panel to manage technicians, customers, service bookings, and revenue analytics.",
    image: RTADMIN,
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    status: "live",
    link: null,
    accent: "#14b8a6",
    featured: false,
  },
  {
    id: 9,
    title: "Label Aadvi Inventory",
    category: "Business Applications",
    categoryId: "business-applications",
    description:
      "Inventory management system for real-time stock monitoring, barcode scanning, and supplier tracking.",
    image: AADVIIN,
    tech: ["React", "Node.js", "MongoDB"],
    status: "coming",
    link: null,
    accent: "#14b8a6",
    featured: false,
  },
  {
    id: 10,
    title: "Barcode Inventory System",
    category: "Business Applications",
    categoryId: "business-applications",
    description:
      "Barcode-based inventory platform — scan product barcodes to check stock quantity and manage clothing inventory.",
    image: BAR,
    tech: ["React", "Node.js", "Barcode API"],
    status: "coming",
    link: null,
    accent: "#14b8a6",
    featured: false,
  },

  // ── Mobile Applications ──────────────────────────────────────
  {
    id: 11,
    title: "Designer Studio Institute",
    category: "Mobile Applications",
    categoryId: "mobile-applications",
    description:
      "Educational mobile application for a fashion design institute — student management, class schedules, and meeting rooms.",
    image: InstituteApp,
    tech: ["React Native", "Expo", "Firebase"],
    status: "proto",
    link: "https://play.google.com/store/apps/details?id=com.aadvifashion.meeting_app",
    accent: "#0ea5e9",
    featured: false,
  },
  {
    id: 12,
    title: "Atelier",
    category: "Mobile Applications",
    categoryId: "mobile-applications",
    description:
      "Fashion and clothing mobile shopping application — browse collections, wishlist, and order from your phone.",
    image: Atelier,
    tech: ["React Native", "Node.js", "MongoDB"],
    status: "Live",
    link: "https://play.google.com/store/apps/details?id=com.aadviatelier.app",
    accent: "#0ea5e9",
    featured: false,
  },
  {
    id: 13,
    title: "RightTouch",
    category: "Mobile Applications",
    categoryId: "mobile-applications",
    description:
      "Customer mobile application for booking on-demand home services — plumbing, electrical, cleaning, and more.",
    image: RTApp,
    tech: ["React Native", "Node.js", "Google Maps"],
    status: "Live",
    link: "https://play.google.com/store/apps/details?id=com.righttouch.customer",
    accent: "#0ea5e9",
    featured: false,
  },
  {
    id: 14,
    title: "RightTouch Partner",
    category: "Mobile Applications",
    categoryId: "mobile-applications",
    description:
      "Technician / partner mobile app — accept service requests, manage bookings, and track earnings.",
    image: RTPAPP,
    tech: ["React Native", "Node.js", "Socket.io"],
    status: "Live",
    link: "https://play.google.com/store/apps/details?id=com.righttouchpartner.app",
    accent: "#0ea5e9",
    featured: false,
  },
];

export const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "business-websites", label: "Business Websites" },
  { id: "e-commerce", label: "E-Commerce" },
  { id: "service-marketplace", label: "Service Marketplace" },
  { id: "business-applications", label: "Business Apps" },
  { id: "mobile-applications", label: "Mobile Apps" },
];

export const projectSections = CATEGORIES.slice(1).map((cat) => ({
  id: cat.id,
  title: cat.label,
  projects: ALL_PROJECTS.filter((p) => p.categoryId === cat.id),
}));