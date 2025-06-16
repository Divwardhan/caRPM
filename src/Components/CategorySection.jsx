import React, { useState, useEffect } from 'react';
import { CheckCircle, ShoppingBag, Smartphone } from 'lucide-react';
import garageprobg from '../assets/gpbg.png'
import garagebookbg from '../assets/garagebookbg.png'
import autocatbg from '../assets/autocatbg.png'
const CategorySection = () => {
  const [garageProStoreUrl, setGarageProStoreUrl] = useState('https://garagepro.shop');

  useEffect(() => {
    const checkLocation = async () => {
      try {
        const res = await fetch('https://ipwho.is/');
        const data = await res.json();
        const countryCode = data.country_code;
        console.log("User Country Code:", countryCode);

        if (countryCode === 'IN') {
          setGarageProStoreUrl('https://garagepro.in');
        }
      } catch (err) {
        console.error("Location fetch failed:", err);
      }
    };

    checkLocation();
  }, []);

  // brands array with background images
  const brands = [
    {
      title: 'GaragePro',
      desc: 'Advanced OBD scanners and diagnostic tools with companion apps for professional automotive technicians.',
      features: [
        'Professional-grade diagnostic equipment',
        'Mobile app integration for real-time monitoring',
        'Advanced vehicle system analysis',
      ],
      backgroundImage: garageprobg,
     gradient: 'from-black/60 via-slate-900/70 to-black/80',
  overlay: 'bg-gradient-to-br from-cyan-500/30 via-slate-900/40 to-black/70',
      accentColor: 'text-cyan-400',
      ctas: [
        { label: 'Get App', icon: Smartphone, href: 'https://play.google.com/store/apps/details?id=com.zymbia.carpm_mechanic' },
        { label: 'Visit Store', icon: ShoppingBag, href: garageProStoreUrl },
      ],
    },
    {
      title: 'GarageBook',
      desc: 'Complete workshop management system with digital job cards, invoicing, and customer management.',
      features: [
        'Digital job cards and real-time updates',
        'Estimates, invoicing and accounting tools',
        'Customer retention and mobile integration',
      ],
      backgroundImage: garagebookbg,
    gradient: 'from-black/60 via-slate-900/70 to-black/80',
  overlay: 'bg-gradient-to-br from-purple-500/30 via-slate-900/40 to-black/70',
      accentColor: 'text-purple-400',
      ctas: [
        { label: 'Get App', icon: Smartphone, href: 'https://play.google.com/store/apps/details?id=com.zymbia.gms' },
      ],
    },
    {
      title: 'AutoCat',
      desc: 'Comprehensive digital catalogue for car spare parts with easy search and ordering capabilities.',
      features: [
        'Extensive parts database across makes and models',
        'Quick search by vehicle registration or part number',
        'Inventory management and ordering system',
      ],
      backgroundImage: autocatbg,
      gradient: 'from-black/60 via-slate-900/70 to-black/80', 
  overlay: 'bg-gradient-to-br from-amber-500/30 via-slate-900/40 to-black/70',
      accentColor: 'text-amber-400',
      ctas: [
        { label: 'Get App', icon: Smartphone, href: 'https://play.google.com/store/apps/details?id=com.zymbia.catapartspro' },
      ],
    },
  ];

  return (
    <section className="w-full">
      {/* Desktop Layout */}
      <div className="hidden lg:flex h-screen">
        {brands.map((brand, idx) => (
          <div
            key={idx}
            className="flex-1 relative overflow-hidden group cursor-default"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transform group-hover:scale-105 transition-transform duration-700 ease-out"
              style={{ backgroundImage: `url(${brand.backgroundImage})` }}
            />
            
            {/* Color Gradient Overlay (now more transparent) */}
            <div className={`absolute inset-0 bg-gradient-to-br ${brand.gradient}`} />
            
            {/* Shine Effects */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(255,255,255,0.05)_50%,transparent_70%)] transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            </div>
            
            {/* Additional Color Overlay */}
            <div className={`absolute inset-0 ${brand.overlay} group-hover:opacity-60 transition-opacity duration-500`} />

            <div className="relative z-10 h-full flex flex-col justify-center px-8 lg:px-12 xl:px-16 text-white">
              <div className="max-w-md space-y-6 transform group-hover:-translate-y-2 transition-transform duration-500 ease-out">
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight drop-shadow-lg">
                  {brand.title}
                </h2>
                <p className="text-lg lg:text-xl text-gray-200 font-light leading-relaxed drop-shadow-md">
                  {brand.desc}
                </p>
                <ul className="space-y-4">
                  {brand.features.map((feature, i) => (
                    <li 
                      key={i} 
                      className="flex items-start opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      <CheckCircle 
                        size={20} 
                        className={`${brand.accentColor} mr-4 mt-1 flex-shrink-0 drop-shadow-sm`} 
                      />
                      <span className="text-base lg:text-lg text-gray-100 leading-relaxed drop-shadow-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6 flex flex-wrap gap-4">
                  {brand.ctas.map((cta, i) => (
                    <a
                      key={i}
                      href={cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 hover:border-white/40 text-white py-3 px-6 rounded-full text-base font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <cta.icon size={18} />
                      {cta.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {idx < brands.length - 1 && (
              <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent z-20" />
            )}
          </div>
        ))}
      </div>

      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden">
        {brands.map((brand, idx) => (
          <div
            key={idx}
            className="min-h-screen relative overflow-hidden"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${brand.backgroundImage})` }}
            />
            
            {/* Color Gradient Overlay (more transparent) */}
            <div className={`absolute inset-0 bg-gradient-to-br ${brand.gradient}`} />
            
            {/* Shine Effects */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
            </div>
            
            {/* Additional Color Overlay */}
            <div className={`absolute inset-0 ${brand.overlay}`} />

            <div className="relative z-10 h-full min-h-screen flex flex-col justify-center px-6 sm:px-8 text-white py-16">
              <div className="max-w-lg mx-auto space-y-6 text-center sm:text-left">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight drop-shadow-lg">
                  {brand.title}
                </h2>
                <p className="text-lg sm:text-xl text-gray-200 font-light leading-relaxed drop-shadow-md">
                  {brand.desc}
                </p>
                <ul className="space-y-4 text-left">
                  {brand.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle 
                        size={20} 
                        className={`${brand.accentColor} mr-4 mt-1 flex-shrink-0 drop-shadow-sm`} 
                      />
                      <span className="text-base sm:text-lg text-gray-100 leading-relaxed drop-shadow-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
                  {brand.ctas.map((cta, i) => (
                    <a
                      key={i}
                      href={cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 hover:border-white/40 text-white py-3 px-6 rounded-full text-base font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <cta.icon size={18} />
                      {cta.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;