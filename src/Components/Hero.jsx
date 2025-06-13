import React from 'react';
import { ArrowRight, Play, Wrench, Zap, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-48 h-48 bg-yellow-400/10 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse delay-2000" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full animate-shimmer" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between w-full gap-12">
        
        {/* Text Section */}
        <div className="flex-1 max-w-2xl text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Zap size={16} className="text-yellow-400 mr-2" />
            <span className="text-sm font-medium">Next-Gen Automotive Solutions</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 bg-gradient-to-r from-blue-400 via-slate-200 to-blue-100 bg-clip-text text-transparent">
            Complete Automotive
            <span className="block text-yellow-400">Solutions Ecosystem</span>
          </h1>

          {/* Description */}
          <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed font-light">
            From diagnostic tools to garage management and parts cataloging – everything you need to run your automotive business efficiently and profitably.
          </p>

          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10">
            <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
              <Wrench size={18} className="text-blue-300 mr-2" />
              <span className="text-sm">Pro Diagnostics</span>
            </div>
            <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
              <Shield size={18} className="text-green-300 mr-2" />
              <span className="text-sm">Garage Management</span>
            </div>
            <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
              <Zap size={18} className="text-yellow-300 mr-2" />
              <span className="text-sm">Parts Catalog</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="group bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center">
              Explore Solutions
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center">
              <Play size={18} className="mr-2 group-hover:scale-110 transition-transform duration-300" />
              Watch Demo
            </button>
          </div>
        </div>

        {/* Visual Section */}
        <div className="flex-1 max-w-lg">
          <div className="relative">
            {/* Main visual container */}
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
              {/* Floating cards representing the three solutions */}
              <div className="space-y-6">
                {/* GaragePro Card */}
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                    <h3 className="font-bold text-lg">GaragePro</h3>
                  </div>
                  <p className="text-sm text-gray-200">Advanced diagnostic tools & monitoring</p>
                </div>

                {/* GarageBook Card */}
                <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 transform hover:scale-105 transition-all duration-300 hover:shadow-lg ml-8">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full mr-3"></div>
                    <h3 className="font-bold text-lg">GarageBook</h3>
                  </div>
                  <p className="text-sm text-gray-200">Complete workshop management</p>
                </div>

                {/* AutoCat Card */}
                <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-orange-400 rounded-full mr-3"></div>
                    <h3 className="font-bold text-lg">AutoCat</h3>
                  </div>
                  <p className="text-sm text-gray-200">Digital parts catalogue system</p>
                </div>
              </div>

              {/* Connecting lines */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-full bg-gradient-to-b from-blue-800 via-blue-900 to-slate-900"></div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full shadow-lg animate-bounce"></div>
            <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-white/30 rounded-full shadow-lg animate-pulse"></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-blue-300 rounded-full shadow-lg animate-ping"></div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade - blend to match bridge */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900/20 to-transparent"></div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200vw) skewX(-12deg); }
        }
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;