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

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <div id="hero" className="pt-15"><Hero /></div>
              <div id="category"><CategorySection /></div>
              <div id="about"><AboutSection /></div>
              <div id="reviews"><CustomerReviews /></div>
              <div id="footer"><Footer /></div>
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
