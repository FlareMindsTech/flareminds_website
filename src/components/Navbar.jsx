import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/cropped-fm-logo-2-1.png'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesHover, setServicesHover] = useState(false)

  const navClass = ({ isActive }) =>
    isActive ? 'nav-link active' : 'nav-link'

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="FlareMinds Logo" className="logo" />
        </Link>

        {/* Desktop Nav Links */}
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>

          <NavLink to="/" className={navClass}>Home</NavLink>

          <NavLink to="/about" className={navClass}>About</NavLink>

          {/* ⭐ SERVICES DROPDOWN ⭐ */}
          <div
            className="services-dropdown-wrapper"
            onMouseEnter={() => setServicesHover(true)}
            onMouseLeave={() => setServicesHover(false)}
          >
            <span className="nav-link services-link">Server</span>
            {servicesHover && (
              <div className="services-dropdown">
                <Link to="/services" className="dropdown-item">Website Development</Link>
                <Link to="/services" className="dropdown-item">Ecommerce</Link>
                <Link to="/services" className="dropdown-item">SEO & Analytics</Link>
                <Link to="/services" className="dropdown-item">Branding & Design</Link>
                <Link to="/services" className="dropdown-item">Social Media Marketing</Link>
              </div>
            )}
          </div>

          <NavLink to="/blog" className={navClass}>Blog</NavLink>

          <NavLink to="/contact" className={navClass}>Contact</NavLink>

        </nav>

        {/* Hamburger Menu */}
        <div
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span><span></span><span></span>
        </div>

      </div>
    </header>
  )
}
