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

// Lazy-loaded route components
const Services = lazy(() => import('./pages/Services'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogDetail = lazy(() => import('./pages/BlogDetail'))
const OurWorks = lazy(() => import('./pages/OurWorks'))
const Products = lazy(() => import('./pages/Products'))

// Development Services (Dedicated folder)
const WebsiteDevelopment = lazy(() => import('./pages/services/development/WebsiteDevelopment'))
const MobileAppDevelopment = lazy(() => import('./pages/services/development/MobileAppDevelopment'))
const EcommerceSolutions = lazy(() => import('./pages/services/development/EcommerceSolutions'))
const BusinessApplications = lazy(() => import('./pages/services/development/BusinessApplications'))
const ServiceMarketplace = lazy(() => import('./pages/services/development/ServiceMarketplace'))
const CustomSoftwareDevelopment = lazy(() => import('./pages/services/development/CustomSoftwareDevelopment'))

// Marketing Services (Dedicated folder)
const SeoAnalytics = lazy(() => import('./pages/services/marketing/SeoAnalytics'))
const SocialMediaMarketing = lazy(() => import('./pages/services/marketing/SocialMediaMarketing'))
const PerformanceMarketing = lazy(() => import('./pages/services/marketing/PerformanceMarketing'))
const BrandingCreativeDesign = lazy(() => import('./pages/services/marketing/BrandingCreativeDesign'))
const CreativeMediaProduction = lazy(() => import('./pages/services/marketing/CreativeMediaProduction'))
const ContentMarketing = lazy(() => import('./pages/services/marketing/ContentMarketing'))

// Support Services (Dedicated folder)
const MaintenanceSupport = lazy(() => import('./pages/services/support/MaintenanceSupport'))

// Training Pages (Dedicated folder inside services)
const MernTraining = lazy(() => import('./pages/services/training/MernTraining'))
const DigitalMarketingTraining = lazy(() => import('./pages/services/training/DigitalMarketingTraining'))
const AiMlTraining = lazy(() => import('./pages/services/training/AiMlTraining'))

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

            {/* Products */}
            <Route path="/products" element={<Products />} />

            {/* Services overview */}
            <Route path="/services" element={<Services />} />

            {/* Dedicated Development Services */}
            <Route path="/services/website-development" element={<WebsiteDevelopment />} />
            <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
            <Route path="/services/e-commerce-solutions" element={<EcommerceSolutions />} />
            <Route path="/services/business-applications" element={<BusinessApplications />} />
            <Route path="/services/service-marketplace" element={<ServiceMarketplace />} />
            <Route path="/services/custom-software-development" element={<CustomSoftwareDevelopment />} />

            {/* Dedicated Marketing Services */}
            <Route path="/services/seo-analytics" element={<SeoAnalytics />} />
            <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
            <Route path="/services/performance-marketing" element={<PerformanceMarketing />} />
            <Route path="/services/branding-creative-design" element={<BrandingCreativeDesign />} />
            <Route path="/services/creative-media-production" element={<CreativeMediaProduction />} />
            <Route path="/services/content-marketing" element={<ContentMarketing />} />

            {/* Dedicated Support Services */}
            <Route path="/services/maintenance-support" element={<MaintenanceSupport />} />
            <Route path="/services/tech-support" element={<Navigate to="/services/maintenance-support" replace />} />
            <Route path="/services/maintenance" element={<Navigate to="/services/maintenance-support" replace />} />

            {/* Generic service detail fallback */}
            <Route path="/services/:slug" element={<ServiceDetail />} />

            {/* Legacy redirects */}
            <Route path="/web-development" element={<Navigate to="/services/website-development" replace />} />
            <Route path="/app-development" element={<Navigate to="/services/mobile-app-development" replace />} />

            {/* Training Pages */}
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
