import React, { useState, useMemo, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaQuoteLeft,
  FaSearch,
  FaBookmark,
  FaRegBookmark,
  FaHeart,
  FaRegHeart,
  FaClock,
  FaCalendarAlt,
  FaTimes,
  FaStar,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";
import SEO from "../components/common/SEO";
import { getBreadcrumbSchema } from "../utils/structuredData";
import { BLOG_CATEGORIES, BLOG_POSTS } from "../data/blogData";
import "../styles/pages/blog.css";

const POSTS_PER_PAGE = 6;

const FEEDBACK = [
  {
    id: 1,
    name: "Arun Kumar",
    role: "Founder, TechNova Solutions",
    text: "FlareMinds transformed our online presence with a sleek, high-performing website. Customer conversions increased by 45% within 60 days!",
    rating: 5,
    tag: "Development"
  },
  {
    id: 2,
    name: "Meena Rao",
    role: "Marketing Head, BrightEats",
    text: "Their local SEO and digital marketing strategies helped us dominate search rankings and reach thousands of nearby active clients.",
    rating: 5,
    tag: "Digital Marketing"
  },
  {
    id: 3,
    name: "Karthik Sharma",
    role: "CEO, FinGrow Technologies",
    text: "Professional, reliable, and creative — FlareMinds is our go-to partner for all software development and digital strategy projects.",
    rating: 5,
    tag: "Business"
  }
];

export default function Blog() {
  const navigate = useNavigate();
  const gridHeaderRef = useRef(null);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [bookmarkedIds, setBookmarkedIds] = useState([]);
  const [likedPosts, setLikedPosts] = useState({});

  const toggleBookmark = (id, e) => {
    e.stopPropagation();
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const toggleLike = (id, e) => {
    e.stopPropagation();
    setLikedPosts((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Filter posts based on category and search query
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q) ||
        (post.tags && post.tags.some((t) => t.toLowerCase().includes(q)));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Reset pagination to page 1 whenever filter or search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  // Calculate pagination boundaries
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE) || 1;

  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const featuredPost = useMemo(() => {
    return BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];
  }, []);

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    
    setCurrentPage(pageNumber);

    // Wait for React DOM update cycle before calculating target scroll position
    setTimeout(() => {
      if (gridHeaderRef.current) {
        // Dynamically measure fixed Navbar height (default to 80px if not found)
        const navElement = document.querySelector('header') || document.querySelector('nav');
        const navbarHeight = navElement ? navElement.getBoundingClientRect().height : 80;
        const smallSpacing = 24; // Breathing space below fixed navbar

        const rectTop = gridHeaderRef.current.getBoundingClientRect().top;
        const targetY = rectTop + window.pageYOffset - navbarHeight - smallSpacing;

        window.scrollTo({
          top: Math.max(0, targetY),
          behavior: "smooth"
        });
      }
    }, 40);
  };

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" }
  ];

  return (
    <div className="blog-page px-6">
      <SEO
        title="Blog & Insights - FlareMinds | Software Development & Digital Marketing"
        description="Explore articles on website development, mobile apps, local SEO, digital marketing, AI technology, and software development insights from FlareMinds."
        keywords="digital marketing blog, website development tips, software development company, local SEO guide, business automation, AI in software"
        schema={getBreadcrumbSchema(breadcrumbs)}
      />

      <div className="blog-hero-header">
        <span className="blog-badge-pill">✨ FlareMinds Knowledge Hub</span>
        <h1 className="blog-title">Latest Insights & Articles</h1>
        <p className="blog-subtitle">
          Guides, technology trends, and growth strategies curated by FlareMinds experts.
        </p>

        {/* Search & Category Filter Controls */}
        <div className="blog-controls-bar">
          <div className="blog-search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search articles by title, category, tag, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="blog-search-input"
              aria-label="Search blog posts"
            />
            {searchQuery && (
              <button
                type="button"
                className="clear-search-btn"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
              >
                <FaTimes />
              </button>
            )}
          </div>

          <div className="category-pills">
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`category-pill ${selectedCategory === cat ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Article (Shown when "All" category is selected on page 1 with empty search) */}
      {selectedCategory === "All" && !searchQuery && currentPage === 1 && featuredPost && (
        <div className="featured-spotlight-wrapper">
          <div
            className="featured-spotlight-card"
            onClick={() => navigate(`/blog/${featuredPost.slug}`)}
            role="button"
            tabIndex={0}
            aria-label={`Read featured post: ${featuredPost.title}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") navigate(`/blog/${featuredPost.slug}`);
            }}
          >
            <div
              className="featured-image"
              style={{ backgroundImage: `url(${featuredPost.image})` }}
            >
              <span className="featured-badge">⭐ Spotlight Article</span>
            </div>
            <div className="featured-content">
              <div className="featured-meta">
                <span className="post-cat-tag">{featuredPost.category}</span>
                <span className="meta-item">
                  <FaCalendarAlt /> {featuredPost.date}
                </span>
                <span className="meta-item">
                  <FaClock /> {featuredPost.readTime}
                </span>
              </div>
              <h2>{featuredPost.title}</h2>
              <p>{featuredPost.excerpt}</p>

              <div className="featured-footer">
                <button
                  type="button"
                  className="read-featured-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/blog/${featuredPost.slug}`);
                  }}
                >
                  Read Full Article <FaArrowRight />
                </button>

                <div className="card-actions">
                  <button
                    type="button"
                    className={`action-btn ${likedPosts[featuredPost.id] ? "liked" : ""}`}
                    onClick={(e) => toggleLike(featuredPost.id, e)}
                    aria-label="Like post"
                  >
                    {likedPosts[featuredPost.id] ? <FaHeart /> : <FaRegHeart />}
                    <span>{featuredPost.likes + (likedPosts[featuredPost.id] ? 1 : 0)}</span>
                  </button>
                  <button
                    type="button"
                    className={`action-btn ${bookmarkedIds.includes(featuredPost.id) ? "bookmarked" : ""}`}
                    onClick={(e) => toggleBookmark(featuredPost.id, e)}
                    aria-label="Bookmark post"
                  >
                    {bookmarkedIds.includes(featuredPost.id) ? <FaBookmark /> : <FaRegBookmark />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Articles Grid Header */}
      <div className="blog-section-header" ref={gridHeaderRef}>
        <h2>{selectedCategory === "All" ? "All Articles" : `${selectedCategory} Articles`}</h2>
        <span className="results-count">
          Showing {filteredPosts.length > 0 ? (currentPage - 1) * POSTS_PER_PAGE + 1 : 0} -{" "}
          {Math.min(currentPage * POSTS_PER_PAGE, filteredPosts.length)} of {filteredPosts.length} posts
        </span>
      </div>

      {filteredPosts.length === 0 ? (
        <div className="no-results-box">
          <p className="text-slate-700 dark:text-slate-200 text-lg font-medium mb-2">
            No articles found matching "{searchQuery}".
          </p>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
            Try selecting a different category or search term.
          </p>
          <button
            type="button"
            className="reset-filter-btn"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <>
          {/* Equal Height Blog Cards Grid */}
          <div className="blog-grid">
            {paginatedPosts.map((p) => {
              const isLiked = likedPosts[p.id];
              const isBookmarked = bookmarkedIds.includes(p.id);

              return (
                <article
                  key={p.id}
                  className="blog-card flex flex-col justify-between"
                  onClick={() => navigate(`/blog/${p.slug}`)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Read article: ${p.title}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") navigate(`/blog/${p.slug}`);
                  }}
                >
                  <div
                    className="blog-image"
                    style={{ backgroundImage: `url(${p.image})` }}
                  >
                    <span className="card-category-badge">{p.category}</span>
                  </div>

                  <div className="blog-content flex-grow flex flex-col justify-between">
                    <div>
                      <div className="card-top-meta">
                        <span className="meta-item">
                          <FaCalendarAlt /> {p.date}
                        </span>
                        <span>•</span>
                        <span className="meta-item">
                          <FaClock /> {p.readTime}
                        </span>
                      </div>

                      <h3>{p.title}</h3>
                      <p>{p.excerpt}</p>
                    </div>

                    {/* Footer aligned at card baseline */}
                    <div className="blog-card-footer">
                      <button
                        className="read-more"
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/blog/${p.slug}`);
                        }}
                      >
                        Read Article ➔
                      </button>

                      <div className="card-actions">
                        <button
                          type="button"
                          className={`action-btn ${isLiked ? "liked" : ""}`}
                          onClick={(e) => toggleLike(p.id, e)}
                          aria-label="Like post"
                        >
                          {isLiked ? <FaHeart /> : <FaRegHeart />}
                          <span>{p.likes + (isLiked ? 1 : 0)}</span>
                        </button>
                        <button
                          type="button"
                          className={`action-btn ${isBookmarked ? "bookmarked" : ""}`}
                          onClick={(e) => toggleBookmark(p.id, e)}
                          aria-label="Bookmark post"
                        >
                          {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Client-Side Horizontal Pagination Controls */}
          {totalPages > 1 && (
            <div className="blog-pagination-wrapper">
              <div className="blog-pagination" aria-label="Blog pagination navigation">
                <button
                  type="button"
                  className="pagination-btn"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  aria-label="Previous Page"
                >
                  <FaChevronLeft /> Previous
                </button>

                <div className="pagination-numbers">
                  {Array.from({ length: totalPages }, (_, index) => {
                    const pageNum = index + 1;
                    return (
                      <button
                        key={pageNum}
                        type="button"
                        className={`pagination-num ${currentPage === pageNum ? "active" : ""}`}
                        onClick={() => handlePageChange(pageNum)}
                        aria-label={`Go to Page ${pageNum}`}
                        aria-current={currentPage === pageNum ? "page" : undefined}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>

                <button
                  type="button"
                  className="pagination-btn"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  aria-label="Next Page"
                >
                  Next <FaChevronRight />
                </button>
              </div>

              <span className="pagination-info">
                Page {currentPage} of {totalPages}
              </span>
            </div>
          )}
        </>
      )}

      {/* Client Testimonials Section */}
      <div className="mt-24">
        <h2 className="testimonials-title">Client Testimonials</h2>
        <p className="testimonials-subtitle">
          See how our software development and digital marketing solutions empower growing businesses.
        </p>

        <div className="testimonials-grid">
          {FEEDBACK.map((f) => (
            <div key={f.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>
                <div className="star-rating">
                  {Array.from({ length: f.rating }).map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                </div>
              </div>
              <p className="testimonial-text">“{f.text}”</p>
              <div className="testimonial-author">
                <h4>{f.name}</h4>
                <p>{f.role}</p>
                <span className="testimonial-tag">{f.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
