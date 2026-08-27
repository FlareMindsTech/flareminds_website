import React from "react";
import { FaBolt, FaShieldAlt, FaChartLine, FaHeadset } from "react-icons/fa";

export default function ServiceHighlights() {
  const highlights = [
    {
      num: "01",
      icon: <FaBolt className="sd-hl-icon" />,
      title: "High Performance",
      desc: "Optimized architecture for sub-second speeds",
    },
    {
      num: "02",
      icon: <FaShieldAlt className="sd-hl-icon" />,
      title: "Enterprise Security",
      desc: "Industry-standard data protection & compliance",
    },
    {
      num: "03",
      icon: <FaChartLine className="sd-hl-icon" />,
      title: "Scalable Build",
      desc: "Engineered to effortlessly support high growth",
    },
    {
      num: "04",
      icon: <FaHeadset className="sd-hl-icon" />,
      title: "Dedicated Support",
      desc: "Proactive maintenance & guaranteed response SLAs",
    },
  ];

  return (
    <div className="sd-highlights-strip">
      <div className="container">
        <div className="sd-highlights-grid">
          {highlights.map((item, idx) => (
            <div key={idx} className="sd-highlight-item">
              <div className="sd-hl-icon-wrap">{item.icon}</div>
              <div className="sd-highlight-text">
                <div className="sd-hl-header">
                  <span className="sd-hl-num">{item.num}</span>
                  <strong>{item.title}</strong>
                </div>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
