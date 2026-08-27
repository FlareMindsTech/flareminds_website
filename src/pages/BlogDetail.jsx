import React, { useEffect, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaChevronRight,
  FaArrowLeft,
  FaArrowRight,
  FaTag
} from "react-icons/fa";
import SEO from "../components/common/SEO";
import { BLOG_POSTS } from "../data/blogData";
import { getBreadcrumbSchema } from "../utils/structuredData";
import "../styles/pages/blog.css";

export default function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const post = useMemo(() => {
    return BLOG_POSTS.find((p) => p.slug === slug);
  }, [slug]);

  const relatedPosts = useMemo(() => {
    if (!post) return [];
    const sameCat = BLOG_POSTS.filter(
      (p) => p.category === post.category && p.slug !== post.slug
    );
    if (sameCat.length >= 3) return sameCat.slice(0, 3);
    const others = BLOG_POSTS.filter((p) => p.slug !== post.slug);
    return others.slice(0, 3);
  }, [post]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!post) {
    return (
      <div className="blog-page blog-detail-page text-center flex flex-col items-center justify-center min-h-[70vh]">
        <SEO
          title="Article Not Found - FlareMinds Blog"
          description="The requested blog article could not be found."
        />
        <div className="no-results-box my-12 max-w-md">
          <h2 className="text-2xl font-bold mb-3 text-slate-800 dark:text-white">
            Article Not Found
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            Sorry, the blog article you are looking for does not exist or has been moved.
          </p>
          <Link to="/blog" className="blog-back-btn inline-flex items-center gap-2">
            <FaArrowLeft /> Back to All Articles
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` }
  ];

  return (
    <div className="blog-page blog-detail-page">
      <SEO
        title={`${post.title} | FlareMinds Blog`}
        description={post.excerpt}
        keywords={post.tags ? post.tags.join(", ") : "digital marketing, web development, flareminds"}
        schema={getBreadcrumbSchema(breadcrumbs)}
      />

      <div className="blog-detail-container">
        {/* 1. Breadcrumbs */}
        <nav className="blog-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <FaChevronRight className="breadcrumb-icon" />
          <Link to="/blog">Blog</Link>
          <FaChevronRight className="breadcrumb-icon" />
          <span className="breadcrumb-current">{post.title}</span>
        </nav>

        {/* 2. Category & Header */}
        <header className="blog-detail-header">
          <div className="blog-detail-category-wrapper">
            <span className="detail-cat-badge">{post.category}</span>
          </div>
          <h1 className="detail-article-title">
            {post.title}
          </h1>

          {/* 3. Author / Date / Reading Time */}
          <div className="detail-meta-bar">
            <span className="meta-item author-item">
              <FaUser className="meta-icon" /> By {post.author}
            </span>
            <span className="meta-divider">•</span>
            <span className="meta-item">
              <FaCalendarAlt className="meta-icon" /> {post.date}
            </span>
            <span className="meta-divider">•</span>
            <span className="meta-item">
              <FaClock className="meta-icon" /> {post.readTime}
            </span>
          </div>
        </header>

        {/* 4. Featured Image */}
        <div className="detail-featured-image-box">
          <img
            src={post.image}
            alt={post.title}
            loading="eager"
            decoding="async"
            width="1200"
            height="600"
            className="detail-featured-img"
          />
        </div>

        {/* 5. Article Content */}
        <article className="detail-article-body">
          {post.content.split("\n\n").map((paragraph, index) => {
            if (paragraph.startsWith("###")) {
              return (
                <h2 key={index} className="detail-section-heading">
                  {paragraph.replace("### ", "")}
                </h2>
              );
            }
            return (
              <p key={index} className="detail-paragraph">
                {paragraph}
              </p>
            );
          })}
        </article>

        {/* 6. Article Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="detail-tags-bar">
            <span className="tags-label">
              <FaTag className="tags-icon" /> Tags:
            </span>
            <div className="tags-list">
              {post.tags.map((tag) => (
                <span key={tag} className="tag-pill">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* 7. Call To Action (CTA) Section */}
        <div className="blog-cta-banner">
          <h3 className="blog-cta-title">
            Need help with your business?
          </h3>
          <p className="blog-cta-desc">
            Let FlareMinds build your website, mobile app, CRM software, or digital marketing campaign.
          </p>
          <Link to="/contact" className="blog-cta-btn">
            Let's Work Together <FaArrowRight />
          </Link>
        </div>

        {/* 8. Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="related-articles-section">
            <h3 className="related-section-title">
              Related Articles
            </h3>
            <div className="related-articles-grid">
              {relatedPosts.map((rel) => (
                <article
                  key={rel.id}
                  className="related-blog-card"
                  onClick={() => navigate(`/blog/${rel.slug}`)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") navigate(`/blog/${rel.slug}`);
                  }}
                >
                  <div
                    className="related-card-image"
                    style={{ backgroundImage: `url(${rel.image})` }}
                  >
                    <span className="related-category-badge">{rel.category}</span>
                  </div>
                  <div className="related-card-content">
                    <h4 className="related-card-title">
                      {rel.title}
                    </h4>
                    <p className="related-card-excerpt">
                      {rel.excerpt}
                    </p>
                    <Link
                      to={`/blog/${rel.slug}`}
                      className="related-card-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Read Article <FaArrowRight />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* 9. Back to All Articles */}
        <div className="blog-detail-back-wrap">
          <Link to="/blog" className="blog-back-btn">
            <FaArrowLeft /> Back to All Articles
          </Link>
        </div>
      </div>
    </div>
  );
}
