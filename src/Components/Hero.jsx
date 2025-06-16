import React, { useState } from "react";
import { ArrowRight, Play, Wrench, Zap, Shield, CheckCircle, ShoppingBag, Smartphone, Star, Facebook, Instagram, Linkedin, Mail, Phone, Menu, X } from 'lucide-react';
import image from '../assets/bg.png'; 
import phoneimage from '../assets/bgphone.png';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };
  return (
    <>
      <section className="relative bg-gradient-to-br from-gray-600 via-gray-500 to-slate-500
 text-white min-h-[100vh] flex items-center overflow-hidden pt-16">
        {/* Animated Background Elements */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-transparent to-purple-900/10" /> */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Desktop image */}
  <img 
    src={image} 
    alt="Background" 
    className="hidden sm:block absolute inset-0 w-full h-full object-cover object-center md:object-top opacity-100 mix-blend-overlay transition-all duration-500"
  />
  
  {/* Mobile image */}
  <img 
    src={phoneimage} 
    alt="Background" 
    className="block sm:hidden absolute inset-0 w-full h-full object-cover object-center opacity-100 mix-blend-overlay transition-all duration-500"
  />

          {/* Existing animated elements */}
          <div className="absolute top-20 left-10 w-16 sm:w-32 h-16 sm:h-32 bg-white/5 rounded-full blur-xl animate-pulse" />
          <div className="absolute top-40 right-20 w-24 sm:w-48 h-24 sm:h-48 bg-yellow-400/10 rounded-full blur-2xl animate-pulse delay-1000" />
          <div className="absolute bottom-20 left-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-white/5 rounded-full blur-3xl animate-pulse delay-2000" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:25px_25px] sm:bg-[size:50px_50px]" />
        </div>

<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between w-full gap-8 lg:gap-12 translate-y-[-5vh]">
          
          {/* Text Section */}
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6">
              <Zap size={14} className="text-yellow-400 mr-2" />
              <span className="text-xs sm:text-sm font-medium">Next-Gen Automotive Solutions</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 via-slate-200 to-blue-100 bg-clip-text text-transparent">
              Complete Automotive
              <span className="block text-yellow-400">Solutions Ecosystem</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 leading-relaxed font-light px-2 lg:px-0">
              From diagnostic tools to garage management and parts cataloging – everything you need to run your automotive business efficiently and profitably.
            </p>

            {/* Feature highlights */}
            {/* <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-6 mb-8 sm:mb-10">
              <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 border border-white/10">
                <Wrench size={16} className="text-blue-300 mr-2" />
                <span className="text-xs sm:text-sm">Pro Diagnostics</span>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 border border-white/10">
                <Shield size={16} className="text-green-300 mr-2" />
                <span className="text-xs sm:text-sm">Garage Management</span>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 border border-white/10">
                <Zap size={16} className="text-yellow-300 mr-2" />
                <span className="text-xs sm:text-sm">Parts Catalog</span>
              </div>
            </div> */}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 lg:px-0">
              <a onClick={() => scrollToId('ourbrands')} className="group bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center cursor-pointer">
                Explore Solutions
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a onClick={()=>scrollToId('video')} className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 hover:border-white/50 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 flex items-center justify-center cursor-pointer">
                <Play size={16} className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                Watch Demo
              </a>
            </div>
          </div>

          {/* Visual Section */}
          
          
        </div>

        {/* Bottom gradient fade - extended to include bridge functionality */}
        <div className="absolute bottom-0 left-0 right-0 h-28 sm:h-56 bg-gradient-to-t from-gray-900 via-gray-800/60 to-transparent"></div>
      </section>

    </>
  );
};
export default Hero;