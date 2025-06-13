import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import CategorySection from './Components/CategorySection'
import AboutSection from './Components/AboutSection'
import CustomerReviews from './Components/CustomerReviews'
import Footer from './Components/Footer'
function App() {
  return (
    <>
      <Navbar/>
      <div id="hero" className="pt-15"><Hero /></div>
      <div id="category" className=""><CategorySection /></div>
      <div id="about" className=""><AboutSection /></div>
      <div id="reviews" className=""><CustomerReviews /></div>
      <div id="footer" className=""><Footer /></div>
    </>
  );
}


export default App
