import React, { useState } from "react";
import { ArrowRight, Play, Wrench, Zap, Shield, CheckCircle, ShoppingBag, Smartphone, Star, Facebook, Instagram, Linkedin, Mail, Phone, Menu, X } from 'lucide-react';
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
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white min-h-screen flex items-center overflow-hidden pt-16">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-16 sm:w-32 h-16 sm:h-32 bg-white/5 rounded-full blur-xl animate-pulse" />
          <div className="absolute top-40 right-20 w-24 sm:w-48 h-24 sm:h-48 bg-yellow-400/10 rounded-full blur-2xl animate-pulse delay-1000" />
          <div className="absolute bottom-20 left-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-white/5 rounded-full blur-3xl animate-pulse delay-2000" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:25px_25px] sm:bg-[size:50px_50px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between w-full gap-8 lg:gap-12">
          
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
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-6 mb-8 sm:mb-10">
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
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 lg:px-0">
              <a onClick={() => scrollToId('category')}  className="group bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center">
                Explore Solutions
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 hover:border-white/50 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 flex items-center justify-center">
                <Play size={16} className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                Watch Demo
              </a>
            </div>
          </div>

          {/* Visual Section */}
          <div className="flex-1 max-w-sm lg:max-w-lg w-full">
            <div className="relative">
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-white/20 shadow-2xl">
                <div onClick={() => scrollToId('category')} className="space-y-4 sm:space-y-6">
                  {/* GaragePro Card */}
                  <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                    <div   className="flex items-center mb-2 sm:mb-3">
                      <div className="w-2 sm:w-3 h-2 sm:h-3 bg-blue-400 rounded-full mr-2 sm:mr-3"></div>
                      <h3 className="font-bold text-base sm:text-lg">GaragePro</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-200">Advanced diagnostic tools & monitoring</p>
                  </div>

                  {/* GarageBook Card */}
                  <div onClick={() => scrollToId('category')}className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 transform hover:scale-105 transition-all duration-300 hover:shadow-lg ml-4 sm:ml-8">
                    <div className="flex items-center mb-2 sm:mb-3">
                      <div className="w-2 sm:w-3 h-2 sm:h-3 bg-emerald-400 rounded-full mr-2 sm:mr-3"></div>
                      <h3 className="font-bold text-base sm:text-lg">GarageBook</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-200">Complete workshop management</p>
                  </div>

                  {/* AutoCat Card */}
                  <div onClick={() => scrollToId('category')} className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-center mb-2 sm:mb-3">
                      <div className="w-2 sm:w-3 h-2 sm:h-3 bg-orange-400 rounded-full mr-2 sm:mr-3"></div>
                      <h3 className="font-bold text-base sm:text-lg">AutoCat</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-200">Digital parts catalogue system</p>
                  </div>
                </div>
              </div>

              {/* Floating elements - hidden on mobile */}
              <div className="hidden sm:block absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full shadow-lg animate-bounce"></div>
              <div className="hidden sm:block absolute -bottom-6 -left-6 w-6 h-6 bg-white/30 rounded-full shadow-lg animate-pulse"></div>
              <div className="hidden sm:block absolute top-1/2 -right-8 w-4 h-4 bg-blue-300 rounded-full shadow-lg animate-ping"></div>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-32 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
      </section>

      {/* Gradient Bridge */}
      <div
        className="h-12 sm:h-24 w-full"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(0,0,0,0) 0%, black 100%),
            linear-gradient(to right, #182538, #1e327c)
          `,
          backgroundBlendMode: 'multiply'
        }}
      />
    </>
  );
};
export default Hero;