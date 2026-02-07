import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import SkipToContent from './components/SkipToContent'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Projects from './pages/Projects'
import WebDevelopment from './pages/WebDevelopment'
import AppDevelopment from './pages/AppDevelopment'
import MernTraining from './pages/training/MernTraining'
import DigitalMarketingTraining from './pages/training/DigitalMarketingTraining'
import AiMlTraining from './pages/training/AiMlTraining'
import ScrollToTop from './components/ScrollToTop'
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
      <Navbar />
      <main id="main-content" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/app-development" element={<AppDevelopment />} />
          <Route path="/training/mern-stack" element={<MernTraining />} />
          <Route path="/training/digital-marketing" element={<DigitalMarketingTraining />} />
          <Route path="/training/ai-ml" element={<AiMlTraining />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
