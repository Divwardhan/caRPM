import React from 'react';
import { Sparkles } from 'lucide-react';
import carpmlogo from '../assets/carpmlogo.svg';
const AboutSection = () => {
  return (
<section className="relative min-h-[60vh] py-32 bg-gradient-to-br from-[#0f182c] via-[#0f182c] to-[#1a337c] text-white overflow-hidden">
{/* Background glows */}
      <div className="absolute top-[-50px] left-[10%] w-72 h-72 bg-white/5 blur-3xl rounded-full z-0" />
      <div className="absolute bottom-[-80px] right-[15%] w-96 h-96 bg-yellow-500/10 blur-2xl rounded-full z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col justify-center items-center text-center h-full">
        {/* Section Badge */}
        <div className="inline-flex items-center bg-white/10 border border-white/10 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
          <Sparkles size={18} className="text-yellow-300 mr-2" />
          <span className="text-sm font-medium uppercase tracking-wide">Who We Are</span>
        </div>
        <div className="relative w-fit mx-auto mb-6 group">
  <img
    src={carpmlogo}
    alt="CaRPM Logo"
    className="w-48 transition-all duration-500 ease-in-out drop-shadow-[0_0_4px_#96c6fd] group-hover:drop-shadow-[0_0_16px_#96c6fd]"
  />
  <div className="absolute inset-0 rounded-full blur-xl opacity-40 bg-gradient-to-br from-[#96c6fd] to-[#172a63] group-hover:blur-2xl group-hover:opacity-70 transition-all duration-500 ease-in-out z-[-1]" />
</div>

        

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-white to-blue-300 bg-clip-text text-transparent">
          About CaRPM
        </h2>

        {/* Paragraph */}
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light max-w-3xl">
          At <span className="font-semibold text-yellow-300">CaRPM</span>, we are revolutionizing the automotive aftercare industry with smart, user-centric solutions designed for both vehicle owners and workshops.
          Our mission is to simplify car diagnostics, service tracking, and vehicle health monitoring through cutting-edge technology and data intelligence.
        </p>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0f182c] to-transparent" />
    </section>
  );
};

export default AboutSection;
