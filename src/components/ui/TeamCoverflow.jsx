import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaChevronLeft, FaChevronRight, FaUserTie } from "react-icons/fa";
import "./TeamCoverflow.css";

export default function TeamCoverflow({ team = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const total = team.length;

  const handlePrev = useCallback(() => {
    if (total === 0) return;
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleNext = useCallback(() => {
    if (total === 0) return;
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  // Autoplay with pause on hover
  useEffect(() => {
    if (total <= 1 || isHovered) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(interval);
  }, [total, isHovered, handleNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  // Touch Swipe Handlers
  const handleTouchStart = (e) => {
    setIsHovered(true);
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 45; // Minimum drag distance to trigger slide

    if (Math.abs(diff) > threshold && touchEndX.current !== 0) {
      if (diff > 0) {
        handleNext(); // Swiped left -> next card
      } else {
        handlePrev(); // Swiped right -> prev card
      }
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  if (!team || team.length === 0) return null;

  return (
    <div
      className="team-coverflow-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="FlareMinds Team 3D Carousel"
    >
      {/* 3D Stage */}
      <div className="team-coverflow-stage">
        <div className="team-coverflow-track">
          {team.map((member, index) => {
            // Calculate shortest relative circular offset (-2, -1, 0, 1, 2...)
            let offset = (index - activeIndex) % total;
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            let positionClass = "";
            if (offset === 0) positionClass = "is-active";
            else if (offset === -1) positionClass = "is-prev-1";
            else if (offset === 1) positionClass = "is-next-1";
            else if (offset === -2) positionClass = "is-prev-2";
            else if (offset === 2) positionClass = "is-next-2";
            else if (offset < -2) positionClass = "is-hidden-left";
            else if (offset > 2) positionClass = "is-hidden-right";

            const isCurrent = offset === 0;

            return (
              <div
                key={member.name + index}
                className={`coverflow-card ${positionClass}`}
                onClick={() => {
                  if (!isCurrent) setActiveIndex(index);
                }}
                role="button"
                tabIndex={0}
                aria-label={`${member.name}, ${member.role}`}
                aria-current={isCurrent ? "true" : undefined}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setActiveIndex(index);
                  }
                }}
              >
                <div className="coverflow-card-inner">
                  {/* Member Image / Fallback */}
                  <div className="coverflow-card-image-wrap">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={`${member.name} - ${member.role}`}
                        className="coverflow-card-img"
                        loading="lazy"
                      />
                    ) : (
                      <div className="coverflow-avatar-fallback">
                        {member.name ? member.name.charAt(0).toUpperCase() : <FaUserTie />}
                      </div>
                    )}
                    <span className="coverflow-role-badge">{member.role}</span>
                  </div>

                  {/* Member Info */}
                  <div className="coverflow-card-content">
                    <div className="coverflow-card-header">
                      <h3 className="coverflow-card-name">{member.name}</h3>
                    </div>

                    <p className="coverflow-card-bio">"{member.bio}"</p>

                    <div className="coverflow-card-footer">
                      <span className="coverflow-flare-tag">FlareMinds Core</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls & Pagination */}
      <div className="team-coverflow-controls">
        <button
          type="button"
          className="coverflow-nav-btn"
          onClick={handlePrev}
          aria-label="Previous Team Member"
        >
          <FaChevronLeft aria-hidden="true" />
        </button>

        <div className="coverflow-dots" role="tablist">
          {team.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`coverflow-dot ${idx === activeIndex ? "is-active" : ""}`}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              role="tab"
              aria-selected={idx === activeIndex}
            />
          ))}
        </div>

        <button
          type="button"
          className="coverflow-nav-btn"
          onClick={handleNext}
          aria-label="Next Team Member"
        >
          <FaChevronRight aria-hidden="true" />
        </button>
      </div>

      <span className="coverflow-mobile-hint">‹ Swipe left / right to explore ›</span>
    </div>
  );
}
