import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { FaPlus } from 'react-icons/fa'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  })
  const [services, setServices] = useState([
    'Web Development',
    'SEO Optimization',
    'Social Media Marketing',
  ])
  const [newService, setNewService] = useState('')
  const [status, setStatus] = useState('')

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const addService = () => {
    if (newService.trim() && !services.includes(newService.trim())) {
      setServices([...services, newService.trim()])
      setNewService('')
    }
  }
  const onSubmit = (e) => {
    e.preventDefault()

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!form.name.trim() || !form.email.trim() || !form.service.trim() || !form.message.trim()) {
      setStatus('Please fill in all fields.')
      return
    }
    if (!emailPattern.test(form.email)) {
      setStatus('Please enter a valid email address.')
      return
    }
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
          setStatus("✅ Message sent successfully! You'll hear from us soon.")
          setForm({ name: '', email: '', service: '', message: '' })
        },
        (error) => {
          console.error('EmailJS Error:', error)
          setStatus('❌ Something went wrong. Please try again later.')
        }
      )
  }
  return (
    <div className="contact-page">
      <div className="container mx-auto px-6 py-16">

        <h2>Contact Us</h2>
        <p className="text-gray-600">
          Let's talk about your project. Choose a service and send us a message.
        </p>

        <div className="contact-grid">

          {/* FORM SECTION */}
          <div className="contact-form-section">
            <form onSubmit={onSubmit} className="space-y-4">
              <h3>Name:</h3>
              <input
                required
                type="text"
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Your name"
                className="form-input"
              />
                 <h3>Email:</h3>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="Your email"
                className="form-input"
              />
                 <h3>Services</h3>
              <div className="service-select">
                <select
                  required
                  name="service"
                  value={form.service}
                  onChange={onChange}
                  className="form-select"
                >
                  <option value="">Select a service</option>
                  {services.map((srv) => (
                    <option key={srv} value={srv}>
                      {srv}
                    </option>
                  ))}
                </select>
                   <h3>Any New Services</h3>
                <div className="add-service">
                  <input
                    type="text"
                    placeholder="Add new service"
                    value={newService}
                    onChange={(e) => setNewService(e.target.value)}
                  />
                  <button type="button" onClick={addService} className="plus-btn">
                    <FaPlus />
                  </button>
                </div>
              </div>
                <h3>Any Quires</h3>
              <textarea
                required
                name="message"
                value={form.message}
                onChange={onChange}
                rows={6}
                placeholder="Your message"
                className="form-textarea"
              />

              <button type="submit" className="form-btn">Send Message</button>

              {status && (
                <p className={`status-msg ${status.startsWith('✅') ? 'success' : 'error'}`}>
                  {status}
                </p>
              )}
            </form>
          </div>
          <div className="contact-info-section">
            <h4>Office</h4>
            <p>Sulur ,Tamilnadu</p>
            <p>info@flaremindstech.com</p>
            <p>+91 9500950813</p>
         <div className="map-container" style={{ width: "100%", height: "300px", marginTop: "20px" }}>
  <iframe
   src="https://www.google.com/maps/embed?pb=!4v1763035355439!6m8!1m7!1saxd5cz2yku7vqS7XuBFJGg!2m2!1d11.02386225852298!2d77.12253729558468!3f107.66218180387182!4f-10.082819578773567!5f0.7820865974627469" 
    width="100%"
    height="100%"
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
  )
}
