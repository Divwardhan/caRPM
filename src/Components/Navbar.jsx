import React from 'react';
const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo & Subtext */}
        <div className="flex items-center space-x-1">
          <span className="text-xl font-bold text-blue-700">CarPM</span>
          <span className="text-sm text-gray-500">Solutions</span>
        </div>

        {/* Nav Links */}
        <div className="flex space-x-8 text-sm text-gray-700">
          <a href="#" className="hover:text-blue-700">Our Brands</a>
          <a href="/garagepro" className="hover:text-blue-700">GaragePro</a>
          <a href="#" className="hover:text-blue-700">About</a>
          <a href="#" className="hover:text-blue-700">Contact</a>
        </div>

        {/* Button */}
        <button className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition">
          Get Started
        </button>
      </div>
      <div className="h-1 bg-gradient-to-r from-blue-700 to-blue-500"></div>
    </nav>
  );
};

export default Navbar;
