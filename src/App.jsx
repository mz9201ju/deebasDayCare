import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import CuteCursor from './components/CuteCursor'
import PlayfulBackground from './components/PlayfulBackground'

const Home = lazy(() => import('./pages/Home'))
const Services = lazy(() => import('./pages/Services'))
const Reviews = lazy(() => import('./pages/Reviews'))
const Gallery = lazy(() => import('./pages/Gallery'))
const ContactUs = lazy(() => import('./pages/ContactUs'))


export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-50">
      <PlayfulBackground />
      <CuteCursor />

      <NavBar />

      <main className="flex-1 container mx-auto px-4 py-8">
        <Suspense fallback={<p className="text-brand-700">Loading page...</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}