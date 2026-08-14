import React, { useEffect, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaChevronRight,
  FaArrowLeft,
  FaArrowRight,
  FaTag,
  FaShareAlt,
  FaBookmark,
  FaRegBookmark,
  FaHeart,
  FaRegHeart
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
      <div className="blog-page px-6 text-center flex flex-col items-center justify-center min-h-[70vh]">
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
          <Link to="/blog" className="read-featured-btn inline-flex items-center gap-2">
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
    <div className="blog-page blog-detail-page px-6">
      <SEO
        title={`${post.title} | FlareMinds Blog`}
        description={post.excerpt}
        keywords={post.tags ? post.tags.join(", ") : "digital marketing, web development, flareminds"}
        schema={getBreadcrumbSchema(breadcrumbs)}
      />

      <div className="blog-detail-container max-w-4xl mx-auto">
        {/* 1. Breadcrumb */}
        <nav className="blog-breadcrumb mb-6" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <FaChevronRight className="breadcrumb-icon" />
          <Link to="/blog">Blog</Link>
          <FaChevronRight className="breadcrumb-icon" />
          <span className="breadcrumb-current">{post.title}</span>
        </nav>

        {/* 2. Category & Header */}
        <div className="blog-detail-header mb-6 text-center md:text-left">
          <span className="detail-cat-badge">{post.category}</span>
          <h1 className="detail-article-title text-3xl md:text-4xl lg:text-5xl font-extrabold mt-4 mb-4">
            {post.title}
          </h1>

          {/* 4. Author / Date / Reading Time */}
          <div className="detail-meta-bar flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
            <span className="meta-item font-semibold text-slate-700 dark:text-slate-200">
              <FaUser className="text-sky-500" /> By {post.author}
            </span>
            <span>•</span>
            <span className="meta-item">
              <FaCalendarAlt /> {post.date}
            </span>
            <span>•</span>
            <span className="meta-item">
              <FaClock /> {post.readTime}
            </span>
          </div>
        </div>

        {/* 5. Featured Image */}
        <div className="detail-featured-image-box mb-8 rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800">
          <img
            src={post.image}
            alt={post.title}
            loading="eager"
            decoding="async"
            width="1200"
            height="600"
            className="w-full h-[320px] md:h-[450px] object-cover"
          />
        </div>

        {/* 6. Article Content */}
        <article className="detail-article-body prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-12">
          {post.content.split("\n\n").map((paragraph, index) => {
            if (paragraph.startsWith("###")) {
              return (
                <h3
                  key={index}
                  className="text-2xl font-bold mt-8 mb-4 text-slate-900 dark:text-sky-400"
                >
                  {paragraph.replace("### ", "")}
                </h3>
              );
            }
            return (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            );
          })}
        </article>

        {/* Article Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="detail-tags-bar flex flex-wrap items-center gap-2 mb-12 pb-8 border-b border-slate-200 dark:border-slate-800">
            <span className="text-sm font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <FaTag /> Tags:
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* 8. Call To Action (CTA) Section */}
        <div className="blog-cta-banner rounded-3xl p-8 md:p-10 mb-16 text-center bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-xl">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-3">
            Need help with your business?
          </h3>
          <p className="text-sky-100 max-w-xl mx-auto mb-6 text-base md:text-lg">
            Let FlareMinds build your website, mobile app, CRM software, or digital marketing campaign.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-blue-600 font-extrabold text-base hover:bg-slate-100 transition-all shadow-md hover:scale-105"
          >
            Let's Work Together <FaArrowRight />
          </Link>
        </div>

        {/* 7. Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="related-articles-section mb-12">
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rel) => (
                <div
                  key={rel.id}
                  className="blog-card flex flex-col justify-between"
                  onClick={() => navigate(`/blog/${rel.slug}`)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") navigate(`/blog/${rel.slug}`);
                  }}
                >
                  <div
                    className="blog-image h-44"
                    style={{ backgroundImage: `url(${rel.image})` }}
                  >
                    <span className="card-category-badge">{rel.category}</span>
                  </div>
                  <div className="blog-content p-4">
                    <h4 className="font-bold text-base line-clamp-2 mb-2 text-slate-800 dark:text-white">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-4">
                      {rel.excerpt}
                    </p>
                    <Link
                      to={`/blog/${rel.slug}`}
                      className="text-sky-500 font-bold text-xs hover:underline flex items-center gap-1"
                    >
                      Read Article <FaArrowRight />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mb-12 text-center">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sky-500 font-bold hover:underline">
            <FaArrowLeft /> Back to All Articles
          </Link>
        </div>
      </div>
    </div>
  );
}
