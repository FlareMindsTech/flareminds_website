import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import {
  FaUser,
  FaEnvelope,
  FaConciergeBell,
  FaCommentDots,
  FaPaperPlane,
  FaPlus,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaDirections,
  FaBolt,
  FaShieldAlt,
  FaLightbulb,
  FaCheck,
  FaTimes
} from 'react-icons/fa'
import SEO from '../components/common/SEO'
import { getLocalBusinessSchema, getBreadcrumbSchema } from '../utils/structuredData'
import HeroBackground from '../components/common/HeroBackground'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  })
  const [services, setServices] = useState([
    'Web Development',
    'Mobile App Development',
    'SEO & Digital Marketing',
    'Branding & UI/UX Design',
    'Business Automation',
    'E-Commerce Solutions'
  ])
  const [newService, setNewService] = useState('')
  const [showAddCustom, setShowAddCustom] = useState(false)
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const selectService = (srv) => {
    setForm({ ...form, service: srv })
  }

  const addService = () => {
    if (newService.trim() && !services.includes(newService.trim())) {
      const added = newService.trim()
      setServices([...services, added])
      setForm({ ...form, service: added })
      setNewService('')
      setShowAddCustom(false)
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!form.name.trim() || !form.email.trim() || !form.service.trim() || !form.message.trim()) {
      setStatus('Please fill in all required fields.')
      return
    }
    if (!emailPattern.test(form.email)) {
      setStatus('Please enter a valid email address.')
      return
    }

    setIsSubmitting(true)
    setStatus('')

    const templateParams = {
      name: form.name,
      email: form.email,
      service: form.service,
      message: form.message,
    }

    emailjs
      .send('service_x2a3qgm', 'template_hr77rq9', templateParams, '0UmF7TCt7vOo0i_If')
      .then(
        () => {
          setIsSubmitting(false)
          setStatus("✅ Message sent successfully! Our team will get back to you within 2 hours.")
          setForm({ name: '', email: '', service: '', message: '' })
        },
        () => {
          setIsSubmitting(false)
          setStatus('❌ Something went wrong while sending your message. Please try again or call us directly.')
        }
      )
  }

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [getLocalBusinessSchema(), getBreadcrumbSchema(breadcrumbs)],
  }

  return (
    <div className="contact-page">
      <SEO
        title="Contact FlareMinds - Get in Touch | Digital Marketing & Tech Agency"
        description="Contact FlareMinds for web development, app development, SEO, and digital marketing services. Visit us at 1st Floor, SBI Bank, Anupparpalayam Pudur, Tiruppur. Call +91 9500950813."
        keywords="contact digital agency, web development contact, SEO services contact, Tiruppur tech agency, FlareMinds address, Coimbatore agency contact"
        schema={combinedSchema}
      />

      {/* Hero Header */}
      <section className="contact-hero-section">
        <HeroBackground />
        <div className="container mx-auto px-4 text-center" style={{ position: "relative", zIndex: 3 }}>
          <div className="contact-badge">
            <span className="badge-dot"></span>
            Let's Start a Conversation
          </div>
          <h1 className="contact-title">
            Get in Touch with <span className="brand-gradient">Our Experts</span>
          </h1>
          <p className="contact-subtitle">
            Have a project in mind, need a custom quote, or want to scale your digital presence? We're here to turn your ideas into high-performing reality.
          </p>

          {/* Quick Value Cards */}
          <div className="contact-highlights-grid">
            <div className="highlight-card">
              <div className="highlight-icon blue">
                <FaBolt />
              </div>
              <div className="highlight-info">
                <h4>Fast Response</h4>
                <p>Average reply time within 2 business hours</p>
              </div>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon purple">
                <FaShieldAlt />
              </div>
              <div className="highlight-info">
                <h4>100% Confidential</h4>
                <p>Your business ideas & data are protected</p>
              </div>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon cyan">
                <FaLightbulb />
              </div>
              <div className="highlight-info">
                <h4>Tailored Strategy</h4>
                <p>Custom tech & marketing roadmap for growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form & Info Grid */}
      <section className="contact-main-section">
        <div className="container mx-auto px-4">
          <div className="contact-grid">

            {/* Contact Form Container */}
            <div className="contact-form-card">
              <div className="card-header-badge">
                <FaConciergeBell /> Send a Message
              </div>
              <h2 className="form-card-title">How can we help your business?</h2>
              <p className="form-card-sub">Fill out the form below and our team will get back to you promptly.</p>

              <form onSubmit={onSubmit} className="modern-contact-form">

                {/* Name & Email Row */}
                <div className="form-row-2col">
                  <div className="form-field-group">
                    <label htmlFor="contact-name" className="field-label">
                      <FaUser className="label-icon" /> Your Name <span className="req">*</span>
                    </label>
                    <input
                      id="contact-name"
                      aria-label="Your Name"
                      required
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      placeholder="e.g. John Doe"
                      className="modern-input"
                    />
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="contact-email" className="field-label">
                      <FaEnvelope className="label-icon" /> Email Address <span className="req">*</span>
                    </label>
                    <input
                      id="contact-email"
                      aria-label="Email address"
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={onChange}
                      placeholder="john@company.com"
                      className="modern-input"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div className="form-field-group">
                  <div className="label-with-action">
                    <label className="field-label">
                      <FaConciergeBell className="label-icon" /> Select Service <span className="req">*</span>
                    </label>
                    <button
                      type="button"
                      className="toggle-custom-service-btn"
                      onClick={() => setShowAddCustom(!showAddCustom)}
                    >
                      {showAddCustom ? <><FaTimes /> Cancel</> : <><FaPlus /> Custom Service</>}
                    </button>
                  </div>

                  {/* Add Custom Service Input */}
                  {showAddCustom && (
                    <div className="add-custom-service-box">
                      <input
                        type="text"
                        placeholder="Type custom service name..."
                        value={newService}
                        onChange={(e) => setNewService(e.target.value)}
                        className="custom-service-input"
                      />
                      <button type="button" onClick={addService} className="add-custom-btn">
                        <FaCheck /> Add & Select
                      </button>
                    </div>
                  )}

                  {/* Service Pills Grid */}
                  <div className="services-pills-grid" role="group" aria-label="Select a service">
                    {services.map((srv) => {
                      const isSelected = form.service === srv
                      return (
                        <button
                          type="button"
                          key={srv}
                          className={`service-pill ${isSelected ? 'active' : ''}`}
                          onClick={() => selectService(srv)}
                        >
                          <span className="pill-dot"></span>
                          {srv}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Message Field */}
                <div className="form-field-group">
                  <label htmlFor="contact-message" className="field-label">
                    <FaCommentDots className="label-icon" /> Tell Us About Your Project <span className="req">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    aria-label="Your project details or query"
                    required
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    rows={5}
                    placeholder="Share your goals, scope, timeline, or any specific requirements..."
                    className="modern-textarea"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`modern-submit-btn ${isSubmitting ? 'submitting' : ''}`}
                >
                  {isSubmitting ? (
                    <span className="btn-loading-state">
                      <span className="spinner"></span> Sending Message...
                    </span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FaPaperPlane className="send-icon" />
                    </>
                  )}
                </button>

                {/* Status Message Alert */}
                {status && (
                  <div className={`status-alert-box ${status.startsWith('✅') ? 'success' : 'error'}`} role="status" aria-live="polite">
                    <p>{status}</p>
                  </div>
                )}
              </form>
            </div>

            {/* Office Info & Map Card */}
            <div className="contact-info-card">
              <div className="info-card-inner">
                <div className="info-header">
                  <span className="info-badge">Head Office</span>
                  <h3>Connect Directly</h3>
                  <p>Visit our office or reach out via phone & email.</p>
                </div>

                <div className="info-items-list">
                  {/* Address Item */}
                  <div className="info-item-block">
                    <div className="info-item-icon address-icon">
                      <FaMapMarkerAlt />
                    </div>
                    <div className="info-item-content">
                      <span className="item-label">Office Address</span>
                      <address className="item-value address-text">
                        <strong>FlareMinds Technology & Services</strong><br />
                        3rd Floor, SBI Bank Building,<br />
                        Anupparpalayam Pudur, Tiruppur,<br />
                        Tamil Nadu - 641652, India
                      </address>
                    </div>
                  </div>

                  {/* Phone Item */}
                  <div className="info-item-block">
                    <div className="info-item-icon phone-icon">
                      <FaPhoneAlt />
                    </div>
                    <div className="info-item-content">
                      <span className="item-label">Phone / WhatsApp</span>
                      <a href="tel:+919500950813" className="item-value link-hover">
                        +91 9500950813
                      </a>
                    </div>
                  </div>

                  {/* Email Item */}
                  <div className="info-item-block">
                    <div className="info-item-icon email-icon">
                      <FaEnvelope />
                    </div>
                    <div className="info-item-content">
                      <span className="item-label">Email Address</span>
                      <a href="mailto:Info@flaremindstech.com" className="item-value link-hover">
                        Info@flaremindstech.com
                      </a>
                    </div>
                  </div>

                  {/* Hours Item */}
                  <div className="info-item-block">
                    <div className="info-item-icon hours-icon">
                      <FaClock />
                    </div>
                    <div className="info-item-content">
                      <span className="item-label">Working Hours</span>
                      <span className="item-value">
                        Monday - Friday: 9:00 AM - 6:00 PM
                      </span>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="info-actions-row">
                  <a
                    href="https://maps.app.goo.gl/EojyxEUH1zHQky1t9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-btn directions-btn"
                  >
                    <FaDirections /> Get Directions
                  </a>
                  <a
                    href="tel:+919500950813"
                    className="action-btn call-btn"
                  >
                    <FaPhoneAlt /> Call Now
                  </a>
                </div>

                {/* Google Maps Embed */}
                <div className="map-embed-wrapper">
                  <div className="map-header">
                    <span>📍 Live Location Map</span>
                  </div>
                  <iframe
                    title="FlareMinds Office Location"
                    src="https://maps.google.com/maps?q=11.1459322,77.3167479&z=16&output=embed"
                    width="100%"
                    height="220"
                    style={{ border: 0, borderRadius: "12px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Floating WhatsApp Quick Chat Button */}
      <a
        href="https://wa.me/919500950813"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-floating-btn"
        aria-label="Chat with FlareMinds on WhatsApp"
      >
        <span className="whatsapp-pulse"></span>
        <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z" />
        </svg>
      </a>
    </div>
  )
}

