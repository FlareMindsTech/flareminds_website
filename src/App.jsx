import React, { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import SkipToContent from './components/SkipToContent'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Projects from './pages/Projects'
import MernTraining from './pages/training/MernTraining'
import DigitalMarketingTraining from './pages/training/DigitalMarketingTraining'
import AiMlTraining from './pages/training/AiMlTraining'
import ScrollToTop from './components/ScrollToTop'
import ThemeToggle from './components/ThemeToggle'
import { initGA, trackPageView } from './utils/analytics'

export default function App() {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col text-slate-800">
      <SkipToContent />
      <ScrollToTop />
      <ThemeToggle />
      <Navbar />
      <main id="main-content" className="flex-1">
        <Routes>
          {/* Core pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />

          {/* Products / Projects */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/products" element={<Projects />} />
          <Route path="/products/:category" element={<Projects />} />

          {/* Services overview */}
          <Route path="/services" element={<Services />} />

          {/* Dynamic service detail — ONE component handles ALL 12 services */}
          <Route path="/services/:slug" element={<ServiceDetail />} />

          {/* Legacy redirects — preserve existing backlinks / bookmarks */}
          <Route path="/web-development" element={<Navigate to="/services/website-development" replace />} />
          <Route path="/app-development" element={<Navigate to="/services/mobile-app-development" replace />} />

          {/* Training */}
          <Route path="/training/mern-stack" element={<MernTraining />} />
          <Route path="/training/digital-marketing" element={<DigitalMarketingTraining />} />
          <Route path="/training/ai-ml" element={<AiMlTraining />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
