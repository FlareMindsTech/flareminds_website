import React, { useState, useEffect, useCallback } from 'react';
import './CompanyCollage.css';
import { FaExpand, FaTimes, FaChevronLeft, FaChevronRight, FaImages } from 'react-icons/fa';

import group1 from '../../assets/images/group/group1.webp';
import group2 from '../../assets/images/group/group2.webp';
import group3 from '../../assets/images/group/group3.webp';
import group4 from '../../assets/images/group/group4.webp';
import group5 from '../../assets/images/group/group5.webp';

// ── ALBUMS DATA (Each box can hold 1, 2, 5, or 10+ photos!) ──────
const MEMORY_ALBUMS = [
  {
    id: 'team-culture',
    title: 'Our Core Team',
    tag: 'Team Culture',
    description: 'A passionate team of designers, engineers, and digital strategists building future-ready products.',
    gridClass: 'bento-featured',
    images: [
      {
        src: group1,
        alt: 'FlareMinds Team Collaboration',
        title: 'Core Team Meet & Culture',
        caption: 'Designers, engineers, and strategists working together.'
      },
      {
        src: group5,
        alt: 'Strategic Planning and Product Brainstorming',
        title: 'Strategy & Brainstorming',
        caption: 'Mapping client roadmaps and innovative tech solutions.'
      }
    ]
  },
  {
    id: 'celebrations',
    title: 'Team Celebrations',
    tag: 'Celebration',
    description: 'Celebrating team milestones, festival moments, and our shared journey of growth.',
    gridClass: 'bento-standard',
    images: [
      {
        src: group2,
        alt: 'Annual Company Events & Celebrations',
        title: 'Annual Celebrations & Milestones',
        caption: 'Celebrating our annual achievements and milestones together.'
      }
    ]
  },
  {
    id: 'campus-drives',
    title: 'Campus & Talent Drives',
    tag: 'Campus Drives',
    description: 'Nurturing young minds and welcoming passionate new talent into the FlareMinds ecosystem.',
    gridClass: 'bento-standard',
    images: [
      {
        src: group3,
        alt: 'Campus Recruitment & Talent Drives',
        title: 'Campus Recruitment & Talent Hiring',
        caption: 'Welcoming top college talent into FlareMinds.'
      }
    ]
  },
  {
    id: 'at-work',
    title: 'Engineering in Action',
    tag: 'Workspace',
    description: 'Deep focus, collaborative problem solving, and modern full-stack development.',
    gridClass: 'bento-standard',
    images: [
      {
        src: group4,
        alt: 'Everyday Engineering & Workspace Synergy',
        title: 'Engineering & Workspace Synergy',
        caption: 'Deep tech development and collaborative problem solving.'
      }
    ]
  }
];

export default function CompanyCollage() {
  // Flattened list for overall lightbox navigation
  const allImages = MEMORY_ALBUMS.flatMap((album) =>
    album.images.map((img) => ({
      ...img,
      albumTag: album.tag,
      albumTitle: album.title
    }))
  );

  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightboxForImage = (imageSrc) => {
    const idx = allImages.findIndex((img) => img.src === imageSrc);
    setLightboxIndex(idx !== -1 ? idx : 0);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const showNext = useCallback((e) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % allImages.length);
  }, [allImages.length]);

  const showPrev = useCallback((e) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  }, [allImages.length]);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex, closeLightbox, showNext, showPrev]);

  return (
    <div className="bento-gallery-section">
      {/* Header Meta */}
      <div className="bento-gallery-meta">
        <div className="bento-meta-badge">
          <FaImages className="meta-badge-icon" />
          <span>Company Life & Culture</span>
        </div>
        <p className="bento-meta-subtitle">
          Real moments, real people — capturing our everyday teamwork, milestones, and energy.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="bento-grid">
        {MEMORY_ALBUMS.map((album) => {
          const hasMultiple = album.images.length > 1;

          return (
            <div
              key={album.id}
              className={`bento-card ${album.gridClass} ${hasMultiple ? 'bento-multi-card' : ''}`}
              onClick={() => openLightboxForImage(album.images[0].src)}
              role="button"
              tabIndex={0}
              aria-label={`View ${album.title} gallery album`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openLightboxForImage(album.images[0].src);
                }
              }}
            >
              {/* Card Images Wrapper */}
              <div className="bento-img-wrapper">
                {hasMultiple ? (
                  <div className="bento-dual-grid">
                    {album.images.slice(0, 2).map((img, i) => (
                      <div key={i} className="bento-split-img-box">
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="bento-img"
                          loading="lazy"
                          decoding="async"
                          width="400"
                          height="300"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <img
                    src={album.images[0].src}
                    alt={album.images[0].alt}
                    className="bento-img"
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="500"
                  />
                )}
                <div className="bento-overlay"></div>
              </div>

              {/* Photo Count Badge (for boxes with 2 or 10+ photos) */}
              <div className="bento-card-top-badges">
                {hasMultiple && (
                  <span className="bento-count-badge">
                    <FaImages /> {album.images.length} Photos
                  </span>
                )}
                <div className="bento-expand-btn" aria-hidden="true" title="Click to view all photos">
                  <FaExpand />
                </div>
              </div>

              {/* Content Bottom Bar */}
              <div className="bento-card-content">
                <span className="bento-tag">{album.tag}</span>
                <h3 className="bento-card-title">{album.title}</h3>
                <p className="bento-card-desc">{album.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightweight Glassmorphic Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="bento-lightbox-backdrop"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Photo Viewer"
        >
          {/* Header Controls */}
          <div className="bento-lightbox-header" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-counter">
              <span>{lightboxIndex + 1}</span> / {allImages.length} Photos
            </div>
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={closeLightbox}
              aria-label="Close Lightbox"
            >
              <FaTimes />
            </button>
          </div>

          {/* Main Lightbox Content Box */}
          <div className="bento-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-nav-btn prev-btn"
              onClick={showPrev}
              aria-label="Previous photo"
            >
              <FaChevronLeft />
            </button>

            <div className="lightbox-image-container">
              <img
                src={allImages[lightboxIndex].src}
                alt={allImages[lightboxIndex].alt}
                className="lightbox-main-img"
              />
              <div className="lightbox-caption">
                <span className="lightbox-tag">{allImages[lightboxIndex].albumTag}</span>
                <h4 className="lightbox-title">{allImages[lightboxIndex].title}</h4>
                <p className="lightbox-desc">{allImages[lightboxIndex].caption}</p>
              </div>

              {/* Mini Thumbnail Strip for Quick Navigation */}
              <div className="lightbox-thumbnails">
                {allImages.map((thumb, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`lightbox-thumb-btn ${idx === lightboxIndex ? 'active' : ''}`}
                    onClick={() => setLightboxIndex(idx)}
                    aria-label={`Go to photo ${idx + 1}`}
                  >
                    <img src={thumb.src} alt="" />
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="lightbox-nav-btn next-btn"
              onClick={showNext}
              aria-label="Next photo"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
