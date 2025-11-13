import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import FlareMindLoader from './pages/FlareMindLoader'
 
export default function App() {
  const [loading, setLoading] = useState(true)

  // AUTO-HIDE LOADER AFTER 2.5 SECONDS
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 6000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <FlareMindLoader />
  }

  return (
    <div className="min-h-screen flex flex-col text-slate-800">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
             <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
       
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
       
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
