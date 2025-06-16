import React from 'react';
import { Sparkles } from 'lucide-react';
import carpmlogo from '../assets/carpmlogo.svg';

const AboutSection = () => {
  return (
    <section className="relative min-h-[60vh] py-32 bg-white text-gray-900 overflow-hidden">
      {/* Background subtle glows */}
      <div className="absolute top-[-50px] left-[10%] w-72 h-72 bg-yellow-100 blur-3xl rounded-full z-0" />
      <div className="absolute bottom-[-80px] right-[15%] w-96 h-96 bg-blue-100 blur-2xl rounded-full z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col justify-center items-center text-center h-full">
        {/* Section Badge */}
        <div className="inline-flex items-center bg-yellow-50 border border-yellow-200 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
          <Sparkles size={18} className="text-yellow-500 mr-2" />
          <span className="text-sm font-medium uppercase tracking-wide text-gray-700">Who We Are</span>
        </div>

        <div className="relative w-fit mx-auto mb-6 group">
          <img
            src={carpmlogo}
            alt="CaRPM Logo"
            className="w-48 transition-all duration-500 ease-in-out drop-shadow-[0_0_4px_#a3a3a3] group-hover:drop-shadow-[0_0_16px_#c2c2c2]"
          />
          <div className="absolute inset-0 rounded-full blur-xl opacity-30 bg-gradient-to-br from-[#e0f0ff] to-[#bcd1f9] group-hover:blur-2xl group-hover:opacity-60 transition-all duration-500 ease-in-out z-[-1]" />
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-500 via-gray-700 to-blue-500 bg-clip-text text-transparent">
          About CaRPM
        </h2>

        {/* Paragraph */}
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light max-w-3xl">
          At <span className="font-semibold text-yellow-600">CaRPM</span>, we are revolutionizing the automotive aftercare industry with smart, user-centric solutions designed for both vehicle owners and workshops.
          Our mission is to simplify car diagnostics, service tracking, and vehicle health monitoring through cutting-edge technology and data intelligence.
        </p>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default AboutSection;
