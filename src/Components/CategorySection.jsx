import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const brands = [
  {
    title: 'GaragePro',
    desc: 'Advanced OBD scanners and diagnostic tools with companion apps for professional automotive technicians.',
    features: [
      'Professional-grade diagnostic equipment',
      'Mobile app integration for real-time monitoring',
      'Advanced vehicle system analysis',
    ],
    gradient: 'from-slate-900 via-blue-900 to-slate-800',
    overlay: 'bg-gradient-to-br from-blue-600/20 via-transparent to-slate-900/60',
    accentColor: 'text-blue-400',
  },
  {
    title: 'GarageBook',
    desc: 'Complete workshop management system with digital job cards, invoicing, and customer management.',
    features: [
      'Digital job cards and real-time updates',
      'Estimates, invoicing and accounting tools',
      'Customer retention and mobile integration',
    ],
    gradient: 'from-slate-900 via-emerald-900 to-slate-800',
    overlay: 'bg-gradient-to-br from-emerald-600/20 via-transparent to-slate-900/60',
    accentColor: 'text-emerald-400',
  },
  {
    title: 'AutoCat',
    desc: 'Comprehensive digital catalogue for car spare parts with easy search and ordering capabilities.',
    features: [
      'Extensive parts database across makes and models',
      'Quick search by vehicle registration or part number',
      'Inventory management and ordering system',
    ],
    gradient: 'from-slate-900 via-orange-900 to-slate-800',
    overlay: 'bg-gradient-to-br from-orange-600/20 via-transparent to-slate-900/60',
    accentColor: 'text-orange-400',
  },
];

const CategorySection = () => {
  return (
    <>
      {/* Gradient Bridge */}
      <div
  className="h-24 w-full"
  style={{
    backgroundImage: `
      linear-gradient(to bottom, rgba(0,0,0,0) 0%, black 100%),
      linear-gradient(to right, #182538, #1e327c)
    `,
    backgroundBlendMode: 'multiply'
  }}
/>

      
      <section className="w-full h-screen flex">
      {brands.map((brand, idx) => (
        <div
          key={idx}
          className="flex-1 relative overflow-hidden group cursor-pointer"
        >
          {/* Background with gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${brand.gradient}`} />
          
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(255,255,255,0.05)_50%,transparent_70%)] transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
          </div>

          {/* Color overlay */}
          <div className={`absolute inset-0 ${brand.overlay} group-hover:opacity-80 transition-opacity duration-500`} />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-center px-8 lg:px-12 xl:px-16 text-white">
            <div className="max-w-md space-y-6 transform group-hover:translate-y-[-8px] transition-transform duration-500 ease-out">
              
              {/* Title */}
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight">
                {brand.title}
              </h2>

              {/* Description */}
              <p className="text-lg lg:text-xl text-gray-200 leading-relaxed font-light">
                {brand.desc}
              </p>

              {/* Features */}
              <ul className="space-y-4">
                {brand.features.map((feature, i) => (
                  <li 
                    key={i} 
                    className="flex items-start opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <CheckCircle 
                      size={20} 
                      className={`${brand.accentColor} mr-4 mt-1 flex-shrink-0`} 
                    />
                    <span className="text-base lg:text-lg text-gray-100 leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className="pt-6">
                <button className="group/btn bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/30 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 flex items-center text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
                  Learn More
                  <ArrowRight 
                    size={20} 
                    className="ml-3 group-hover/btn:translate-x-1 transition-transform duration-300" 
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Subtle separator line */}
          {idx < brands.length - 1 && (
            <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          )}
        </div>
      ))}
    </section>
    </>
  );
};

export default CategorySection;