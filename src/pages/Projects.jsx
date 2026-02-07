import React from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import SEO from "../components/SEO";
import { getBreadcrumbSchema } from "../utils/structuredData";
import "../pages/css/services.css";

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "E-Commerce Fashion Store",
            category: "Web Development",
            image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
            problem: "The client needed a high-performance online store with real-time inventory management.",
            solution: "We built a Next.js application with Shopify integration for seamless checkout and inventory syncing.",
            results: "50% increase in mobile conversions and 2s load time.",
            tech: ["Next.js", "Shopify API", "Tailwind CSS"],
            link: "#"
        },
        {
            id: 2,
            title: "HealthTech Patient Portal",
            category: "App Development",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
            problem: "Patients struggled to book appointments and view records securely.",
            solution: "Developed a secure React Native app with end-to-end encryption and calendar integration.",
            results: "Reduced booking time by 70% and improved patient satisfaction.",
            tech: ["React Native", "Firebase", "Node.js"],
            link: "#"
        },
        {
            id: 3,
            title: "Real Estate Listing Platform",
            category: "Web Development",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
            problem: "Legacy system was slow and lacked map-based search.",
            solution: "Created a modern MERN stack platform with Google Maps API and advanced filtering.",
            results: "Doubled user engagement and lead generation.",
            tech: ["React", "MongoDB", "Google Maps API"],
            link: "#"
        },
        {
            id: 4,
            title: "Corporate Branding Package",
            category: "Branding",
            image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=800&q=80",
            problem: "Outdated brand identity failing to attract premium clients.",
            solution: "Complete rebrand including logo, typography, and brand guidelines.",
            results: "Client secured 3 major enterprise contracts post-rebrand.",
            tech: ["Illustrator", "Photoshop", "Figma"],
            link: "#"
        }
    ];

    const breadcrumbs = [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
    ];

    return (
        <div className="projects-page">
            <SEO
                title="Our Projects & Portfolio - FlareMinds | Digital Solutions Showcase"
                description="Explore FlareMinds' portfolio of successful digital projects including web development, app development, ecommerce solutions, and branding. See how we transform businesses."
                keywords="portfolio, web development projects, app development showcase, digital projects, ecommerce websites, branding projects, case studies"
                schema={getBreadcrumbSchema(breadcrumbs)}
            />
            <section className="hero-section text-center">
                <div className="container">
                    <h1 className="hero-title">Our <span className="text-gradient">Work</span></h1>
                    <p className="hero-subtitle">
                        A showcase of our best digital solutions. We solve complex problems with elegant code and design.
                    </p>
                </div>
            </section>
            <section className="projects-grid-section section-padding">
                <div className="container">
                    <div className="projects-grid">
                        {projects.map((project) => (
                            <div key={project.id} className="project-card glass-card">
                                <div className="project-image">
                                    <img src={project.image} alt={`${project.title} - ${project.category} case study`} />
                                    <div className="project-overlay">
                                        <a href={project.link} className="btn-icon"><FaExternalLinkAlt /></a>
                                    </div>
                                </div>
                                <div className="project-content">
                                    <span className="project-category">{project.category}</span>
                                    <h3>{project.title}</h3>
                                    <div className="project-details">
                                        <p><strong>Problem:</strong> {project.problem}</p>
                                        <p><strong>Solution:</strong> {project.solution}</p>
                                        <p><strong>Results:</strong> {project.results}</p>
                                    </div>
                                    <div className="project-tech">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="tech-badge">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="cta-section text-center section-padding">
                <div className="container">
                    <h2>Have a project in mind?</h2>
                    <Link to="/contact" className="btn-primary glow-effect">Let's Build It</Link>
                </div>
            </section>
        </div>
    );
}
