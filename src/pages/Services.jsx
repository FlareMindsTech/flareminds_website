import React from 'react'
import { FaCode, FaShoppingCart, FaChartLine, FaPaintBrush, FaShareAlt } from 'react-icons/fa'

export default function Services() {
  const services = [
    {
      title: 'Website Development',
      desc: 'Custom responsive websites & web applications built for performance and scalability.',
      icon: <FaCode />,
    },
    {
      title: 'Ecommerce',
      desc: 'Shopify, WooCommerce & custom cart integrations for seamless online stores.',
      icon: <FaShoppingCart />,
    },
    {
      title: 'SEO & Analytics',
      desc: 'Drive organic growth with data-driven optimization and keyword insights.',
      icon: <FaChartLine />,
    },
    {
      title: 'Branding & Design',
      desc: 'Visual identity, logo design, and UI/UX that reflect your brand personality.',
      icon: <FaPaintBrush />,
    },
    {
      title: 'Social Media Marketing',
      desc: 'Engaging content, ad campaigns, and audience strategies that convert.',
      icon: <FaShareAlt />,
    },
  ]

  return (
    <div className="services-page">
      <div className="container mx-auto px-6 py-16">
        <h2 className="services-title">Our Services</h2>
        <p className="services-subtitle">
          We craft digital solutions that drive growth, strengthen brand presence,
          and deliver measurable results.
        </p>

        <div className="services-grid">
          {services.map((s) => (
            <div key={s.title} className="service-card">
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <button className="service-btn">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
