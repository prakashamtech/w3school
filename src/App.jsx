import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'
import Home from './pages/Home.jsx'
import Category from './pages/Category.jsx'
import Lesson from './pages/Lesson.jsx'
import Reference from './pages/Reference.jsx'
import Exercises, { ExercisesIndex } from './pages/Exercises.jsx'
import { TutorialsIndex, ReferencesIndex } from './pages/Indexes.jsx'
import Tryit from './pages/Tryit.jsx'
import SearchPage from './pages/SearchPage.jsx'
import { About, Contact, Privacy, Terms } from './pages/Static.jsx'
import NotFound from './pages/NotFound.jsx'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <ScrollManager />
      <Header />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutorials/" element={<TutorialsIndex />} />
          <Route path="/references/" element={<ReferencesIndex />} />
          <Route path="/exercises/" element={<ExercisesIndex />} />
          <Route path="/tryit/" element={<Tryit />} />
          <Route path="/search/" element={<SearchPage />} />
          <Route path="/about/" element={<About />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="/privacy/" element={<Privacy />} />
          <Route path="/terms/" element={<Terms />} />
          <Route path="/:topic/" element={<Category />} />
          <Route path="/:topic/reference/" element={<Reference />} />
          <Route path="/:topic/exercises/" element={<Exercises />} />
          <Route path="/:topic/:lesson/" element={<Lesson />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
