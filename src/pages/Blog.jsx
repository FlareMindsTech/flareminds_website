import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import SEO from "../components/SEO";
import { getBreadcrumbSchema } from "../utils/structuredData";

export default function BlogTestimonials() {
  const posts = [
    {
      id: 1,
      title: "How to Build a Website That Converts",
      excerpt:
        "Learn how to design with purpose — from layout and CTAs to speed and UX that drives real results.",
      image:
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      title: "Local SEO for Small Businesses",
      excerpt:
        "Quick, actionable strategies to help your brand rank higher and get found by your nearby customers.",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      title: "Why Social Media Strategy Matters",
      excerpt:
        "It’s not just posting — learn how to build engagement, consistency, and measurable growth.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const feedback = [
    {
      name: "Arun Kumar",
      text: "FlareMinds transformed our online presence with a sleek and modern website.",
      role: "Founder, TechNova Solutions",
    },
    {
      name: "Meena Rao",
      text: "Their SEO and marketing strategies helped us reach more clients effectively.",
      role: "Marketing Head, BrightEats",
    },
    {
      name: "Karthik Sharma",
      text: "Professional, reliable, and creative — highly recommended for any digital project.",
      role: "CEO, FinGrow Technologies",
    },
  ];

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <div className="combined-page container mx-auto px-6 py-16">
      <SEO
        title="Blog & Insights - FlareMinds | Digital Marketing Tips & Trends"
        description="Read the latest insights on web development, SEO, social media marketing, and digital strategy from FlareMinds experts. Stay ahead with actionable tips and industry trends."
        keywords="digital marketing blog, web development tips, SEO strategies, social media marketing guides, technology insights, marketing trends"
        schema={getBreadcrumbSchema(breadcrumbs)}
      />
      <h2 className="blog-title">Latest Insights</h2>
      <p className="blog-subtitle">
        Insights, guides, and strategies from the FlareMinds digital experts.
      </p>
      <div className="blog-grid">
        {posts.map((p) => (
          <article key={p.id} className="blog-card">
            <div
              className="blog-image"
              style={{ backgroundImage: `url(${p.image})` }}
            ></div>
            <div className="blog-content">
              <h3>{p.title}</h3>
              <p>{p.excerpt}</p>
              <button className="read-more">Read More</button>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-24">
        <h2 className="testimonials-title">Client Testimonials</h2>
        <p className="testimonials-subtitle">
          See how our clients describe their experience with FlareMinds.
        </p>
        <div className="testimonials-grid">
          {feedback.map((f) => (
            <div key={f.name} className="testimonial-card">
              <div className="quote-icon">
                <FaQuoteLeft />
              </div>
              <p className="testimonial-text">“{f.text}”</p>
              <div className="testimonial-author">
                <h4>{f.name}</h4>
                <p>{f.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
