import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import carpmBlack from '../assets/cpmlogo.svg';
import carpmWhite from '../assets/cpmlogo-white.svg';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  const scrollToId = (id) => {
    if (isHomePage) {
      
      var el = document.getElementById(id);
      
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
  };

  useEffect(() => {
    // If not on homepage, force navbar to scrolled (black content)
    if (!isHomePage) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  return (
    <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToId('hero')}>
          <img 
            src={scrolled ? carpmBlack : carpmWhite} 
            alt="CaRPM Logo" 
            className="w-10 h-10 rounded-xl shadow-sm transition-all duration-300"
          />
          <span className={`text-2xl font-semibold tracking-tight transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'}`}>
            CaRPM
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-base font-medium">
          {['Home', 'Our Brands', 'About', 'Reviews', 'Contact'].map((item, idx) => (
            <span
              key={idx}
              onClick={() => scrollToId(item.toLowerCase().replace(' ', ''))}
              className={`cursor-pointer transition-colors duration-300 ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'}`}
            >
              {item}
            </span>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          <a
            href="https://garagepro.in/blogs/news"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-5 py-2 rounded-full transition-all duration-300 shadow-sm ${scrolled ? 'bg-gray-100 text-gray-900 hover:bg-gray-200' : 'bg-white/30 text-white hover:bg-white/40'}`}
          >
            Blogs
          </a>
          <a
            href="https://carpm.in/codes/dtcs"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-md"
          >
            Search Codes
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`md:hidden p-2 transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'}`}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden transition-all duration-300 ${scrolled ? 'bg-white' : 'bg-white/20 backdrop-blur-sm'}`}>
          <div className="flex flex-col px-6 py-4 gap-4">
            {['Home', 'Our Brands', 'About', 'Reviews', 'Contact'].map((item, idx) => (
              <div
                key={idx}
                onClick={() => scrollToId(item.toLowerCase().replace(' ', ''))}
                className={`font-medium cursor-pointer transition-colors duration-300 ${scrolled ? 'text-gray-900 hover:text-blue-600' : 'text-white hover:text-blue-300'}`}
              >
                {item}
              </div>
            ))}
            <a
              href="https://garagepro.in/blogs/news"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full text-center px-4 py-3 rounded-full transition-all duration-300 shadow-sm ${scrolled ? 'bg-gray-100 text-gray-900 hover:bg-gray-200' : 'bg-white/20 text-white hover:bg-white/30'}`}
            >
              Blogs
            </a>
            <a
              href="https://carpm.in/codes/dtcs"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center px-4 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-md"
            >
              Search Codes
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
