import React from 'react';
import './CompanyCollage.css';

import group1 from '../../assets/images/group/group1.webp';
import group2 from '../../assets/images/group/group2.webp';
import group3 from '../../assets/images/group/group3.webp';
import group4 from '../../assets/images/group/group4.webp';
import group5 from '../../assets/images/group/group5.webp';
import logoBadge from '../../assets/images/branding/cropped-fm-logo-2-1.webp';

const COLLAGE_PHOTOS = [
  {
    id: 'main-hero',
    src: group1,
    alt: 'FlareMinds Team Collaboration',
    label: 'Our Team',
    className: 'card-hero',
    anim: 'float-slow-1'
  },
  {
    id: 'company-event',
    src: group2,
    alt: 'Company Event and Celebration',
    label: 'Company Event',
    className: 'card-top-left',
    anim: 'float-slow-2'
  },
  {
    id: 'college-interview',
    src: group3,
    alt: 'College Interview and Campus Drive',
    label: 'College Interview',
    className: 'card-top-right',
    anim: 'float-slow-3'
  },
  {
    id: 'at-work',
    src: group4,
    alt: 'Employees Working in Office',
    label: 'At Work',
    className: 'card-bottom-right',
    anim: 'float-slow-1'
  },
  {
    id: 'team-collaboration',
    src: group5,
    alt: 'Team Discussion and Planning',
    label: 'Team Collaboration',
    className: 'card-bottom-left',
    anim: 'float-slow-2'
  },
  {
    id: 'workshops',
    src: group1,
    alt: 'Training and Workshops',
    label: 'Training & Workshops',
    className: 'card-side-left',
    anim: 'float-slow-3'
  },
  {
    id: 'client-meetings',
    src: group3,
    alt: 'Client Meetings and Discussions',
    label: 'Client Meetings',
    className: 'card-side-right',
    anim: 'float-slow-1'
  }
];

export default function CompanyCollage({ onClick }) {
  return (
    <div
      className="company-collage-wrapper"
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label="View company photo gallery"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.();
        }
      }}
    >
      <div className="collage-ambient-glow"></div>

      <div className="collage-container">
        {/* Central FlareMinds Emblem */}
        <div className="collage-center-emblem" title="FlareMinds">
          <img src={logoBadge} alt="FlareMinds Logo" className="emblem-logo" width="48" height="48" decoding="async" />
          <span className="emblem-pulse-ring"></span>
        </div>

        {/* Overlapping Photo Cards */}
        {COLLAGE_PHOTOS.map((photo) => (
          <div
            key={photo.id}
            className={`collage-card ${photo.className} ${photo.anim}`}
          >
            <div className="card-image-box">
              <img
                src={photo.src}
                alt={photo.alt}
                className="collage-img"
                width="300"
                height="200"
                loading="lazy"
                decoding="async"
              />
              <div className="card-overlay-gradient"></div>
            </div>
            <div className="card-label-badge">
              <span className="badge-dot"></span>
              {photo.label}
            </div>
          </div>
        ))}

        {/* Interactive Hint */}
        <div className="collage-click-hint">
          <span>Click to explore memories ✦</span>
        </div>
      </div>
    </div>
  );
}
