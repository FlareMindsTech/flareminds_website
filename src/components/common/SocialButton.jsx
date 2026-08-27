import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaEnvelope, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const SOCIAL_LINKS = [
  {
    name: "Facebook",
    icon: <FaFacebookF />,
    href: "https://www.facebook.com/flareminds",
    color: "#1877f2",
    ariaLabel: "Visit FlareMinds on Facebook",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    href: "https://www.instagram.com/flareminds_tech?igsi=Nm5ueTFyYW40ODlt&utm_source=qr",
    color: "#ec4cb2ff",
    ariaLabel: "Visit FlareMinds on Instagram",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/company/flareminds-technology-and-services/",
    color: "#003a74ff",
    ariaLabel: "Visit FlareMinds on LinkedIn",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp />,
    href: "https://wa.me/919500950813",
    color: "#25d366",
    ariaLabel: "Chat with FlareMinds on WhatsApp",
  },
  {
    name: "Email",
    icon: <FaEnvelope />,
    href: "mailto:Info@flaremindstech.com",
    color: "#ff0000ff",
    ariaLabel: "Email FlareMinds Team",
  },
];

export default function SocialButton() {
  return (
    <StyledSocialWrapper aria-label="Social media quick links">
      <ul className="social-button-list">
        {SOCIAL_LINKS.map((item) => (
          <li key={item.name} className={`social-item ${item.name.toLowerCase()}`}>
            <a
              href={item.href}
              target={item.href.startsWith("mailto:") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              aria-label={item.ariaLabel}
              className="social-btn-link"
              style={{ "--brand-color": item.color }}
            >
              <span className="social-icon-wrapper">
                {item.icon}
              </span>
              {/* Tooltip positioned below the icon with high z-index to prevent any overlap */}
              <span className="social-tooltip" style={{ "--brand-color": item.color }}>
                {item.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </StyledSocialWrapper>
  );
}

const StyledSocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  z-index: 30;

  .social-button-list {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    list-style: none;
    padding: 0;
    margin: 0;
    flex-wrap: wrap;
    position: relative;
    z-index: 30;
  }

  .social-item {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 30;
  }

  .social-btn-link {
    position: relative;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    
    /* Sleek Glassmorphic Core */
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    z-index: 30;
  }

  .social-icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.15rem;
    color: #f0f9ff;
    transition: transform 0.3s ease, color 0.3s ease;
  }

  /* Tooltip positioned below the icons to prevent clipping by the CTA buttons above */
  .social-tooltip {
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translate(-50%, -4px) scale(0.9);
    font-family: var(--font-body, "Inter", sans-serif);
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    background: var(--brand-color, #0ea5e9);
    color: #ffffff;
    padding: 4px 10px;
    border-radius: 6px;
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.35);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.25s ease;
    white-space: nowrap;
    z-index: 999;
  }


  .social-tooltip::after {
    content: "";
    position: absolute;
    top: -4px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 8px;
    height: 8px;
    background: var(--brand-color, #0ea5e9);
  }

  /* Hover & Focus Interactions */
  .social-btn-link:hover,
  .social-btn-link:focus-visible {
    background: var(--brand-color, #0ea5e9);
    border-color: var(--brand-color, #0ea5e9);
    transform: translateY(-4px) scale(1.1);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35), 0 0 16px var(--brand-color, #0ea5e9);
    z-index: 40;
  }

  .social-btn-link:hover .social-icon-wrapper,
  .social-btn-link:focus-visible .social-icon-wrapper {
    color: #ffffff;
    transform: scale(1.1);
  }

  .social-btn-link:hover .social-tooltip,
  .social-btn-link:focus-visible .social-tooltip {
    opacity: 1;
    visibility: visible;
    transform: translate(-50%, 2px) scale(1);
  }

  /* Theme adjustments */
  html[data-theme="dark"] & .social-btn-link {
    background: rgba(15, 23, 42, 0.6);
    border-color: rgba(56, 189, 248, 0.25);
    color: #e2e8f0;
  }

  html[data-theme="light"] & .social-btn-link {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.28);
    color: #ffffff;
  }

  @media (max-width: 480px) {
    .social-button-list {
      gap: 10px;
    }
    .social-btn-link {
      width: 40px;
      height: 40px;
    }
    .social-icon-wrapper {
      font-size: 1rem;
    }
  }
`;
