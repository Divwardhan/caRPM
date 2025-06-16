import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import CategorySection from './Components/CategorySection'
import AboutSection from './Components/AboutSection'
import CustomerReviews from './Components/CustomerReviews'
import Footer from './Components/Footer'
import TermsAndConditions from './Components/TermsandConditions'
import Privacy from './Components/Privacy'
import ScrollToTop from './Components/ScrollToTop'
import Video from './Components/Video'
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <div id="home" className=""><Hero /></div>
              <div id="ourbrands"><CategorySection /></div>
              <div id="about"><AboutSection /></div>
              <div id="video"><Video /></div>
              <div id="reviews"><CustomerReviews /></div>
              <div id="contact"><Footer /></div>
            </>
          }
        />
        
        {/* Terms & Conditions Page */}
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

        {/* Privacy Policy Page */}
        <Route path="/privacy-policy" element={<Privacy />} />
      </Routes>
    </Router>
  )
}

export default App
