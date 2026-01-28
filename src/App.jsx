import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/footer'
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

export default function App() {
  return (
    <div className="min-h-screen flex flex-col text-slate-800">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
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
