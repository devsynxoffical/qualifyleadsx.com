import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { HomePage } from './pages/HomePage'
import { HowItWorksPage } from './pages/HowItWorksPage'
import { ResultsPage } from './pages/ResultsPage'
import { TestimonialsPage } from './pages/TestimonialsPage'
import { BookCallPage } from './pages/BookCallPage'
import { ScrollToTop } from './components/ui/ScrollToTop'

function ScrollToTopOnNavigate() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTopOnNavigate />
      <div className="min-h-screen bg-navy flex flex-col justify-between">
        <div>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/how-it-works" element={<HowItWorksPage />} />
              <Route path="/results" element={<ResultsPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/book-your-call" element={<BookCallPage />} />
              <Route path="/book-your-call/" element={<BookCallPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    </BrowserRouter>
  )
}

export default App
