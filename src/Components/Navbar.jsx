import React from 'react';
import {useState} from 'react';
import { Menu, X } from 'lucide-react';
import carpm from '../assets/cpmlogo.svg';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo & Subtext */}
        <div className="flex items-center space-x-1 cursor-pointer" onClick={() => scrollToId('hero')}>
          <img src={carpm} alt="CarPM Logo" className="w-10 h-10" />
          <span className="text-xl font-bold text-black">CarPM</span>
          
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6 lg:space-x-8 text-sm text-gray-700">
          <span onClick={() => scrollToId('hero')} className="cursor-pointer hover:text-blue-700 transition">Home</span>
          <span onClick={() => scrollToId('category')} className="cursor-pointer hover:text-blue-700 transition">Our Brands</span>
          <span onClick={() => scrollToId('about')} className="cursor-pointer hover:text-blue-700 transition">About</span>
          <span onClick={() => scrollToId('reviews')} className="cursor-pointer hover:text-blue-700 transition">Reviews</span>
          <span onClick={() => scrollToId('footer')} className="cursor-pointer hover:text-blue-700 transition">Contact</span>
        </div>

        {/* Desktop Button */}
        <button
          onClick={() => scrollToId('category')}
          className="hidden md:block bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition"
        >
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-2 space-y-2">
            <div onClick={() => scrollToId('hero')} className="block py-2 text-gray-700 hover:text-blue-700 cursor-pointer">Home</div>
            <div onClick={() => scrollToId('category')} className="block py-2 text-gray-700 hover:text-blue-700 cursor-pointer">Our Brands</div>
            <div onClick={() => scrollToId('about')} className="block py-2 text-gray-700 hover:text-blue-700 cursor-pointer">About</div>
            <div onClick={() => scrollToId('reviews')} className="block py-2 text-gray-700 hover:text-blue-700 cursor-pointer">Reviews</div>
            <div onClick={() => scrollToId('footer')} className="block py-2 text-gray-700 hover:text-blue-700 cursor-pointer">Contact</div>
            <button
              onClick={() => scrollToId('category')}
              className="w-full bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition mt-2"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
      
      <div className="h-1 bg-gradient-to-r from-blue-700 to-blue-500"></div>
    </nav>
  );
};

export default Navbar;
