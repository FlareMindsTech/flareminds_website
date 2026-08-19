import React, { useEffect, lazy, Suspense } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import SkipToContent from './components/layout/SkipToContent'
import Home from './pages/Home'
import ScrollToTop from './components/layout/ScrollToTop'
import ThemeToggle from './components/layout/ThemeToggle'
import FlareMindLoader from './pages/FlareMindLoader'
import { initGA, trackPageView } from './utils/analytics'

// Lazy-loaded route components for optimal initial bundle performance
const Services = lazy(() => import('./pages/Services'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogDetail = lazy(() => import('./pages/BlogDetail'))
const OurWorks = lazy(() => import('./pages/OurWorks'))
const Products = lazy(() => import('./pages/Products'))
const MernTraining = lazy(() => import('./pages/training/MernTraining'))
const DigitalMarketingTraining = lazy(() => import('./pages/training/DigitalMarketingTraining'))
const AiMlTraining = lazy(() => import('./pages/training/AiMlTraining'))

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
        <Suspense fallback={<FlareMindLoader />}>
          <Routes>
            {/* Core pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />

            {/* Our Works (Portfolio) */}
            <Route path="/our-works" element={<OurWorks />} />
            <Route path="/our-works/:category" element={<OurWorks />} />
            <Route path="/projects" element={<Navigate to="/our-works" replace />} />

            {/* Products (Future suite) */}
            <Route path="/products" element={<Products />} />

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
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
