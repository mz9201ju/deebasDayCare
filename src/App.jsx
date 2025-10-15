import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import CuteCursor from './components/CuteCursor'


// Pages
import Home from './pages/Home'
import Services from './pages/Services'
import Reviews from './pages/Reviews'
import Gallery from './pages/Gallery'
import ContactUs from './pages/ContactUs'


export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-50">
      {/* ✨ Motion cursor overlay (uses requestAnimationFrame) */}
      <CuteCursor />


      {/* Top navigation */}
      <NavBar />


      {/* Routed content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>


      {/* Footer */}
      <Footer />
    </div>
  )
}