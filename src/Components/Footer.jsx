import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#b7c6e6] text-gray-800 py-16 px-4 sm:px-6 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute -top-20 right-0 w-96 h-96 bg-[#cbd8f0] blur-3xl rounded-full opacity-40 z-0"></div>
      <div className="absolute -bottom-24 left-0 w-96 h-96 bg-[#e7ecf8] blur-3xl rounded-full opacity-40 z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand Info */}
        <div className="text-center sm:text-left">
          <h3 className="text-2xl font-bold mb-4 text-[#1a3687]">CaRPM</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            CaRPM<br />
            604, Paras Trinity<br />
            Sector 63 Gurgaon<br />
            Haryana, 122011<br />
            Ph: +91-8069015000
          </p>
        </div>

        {/* Products */}
        <div className="text-center sm:text-left">
          <h4 className="text-lg font-semibold mb-3 text-[#1a3687]">Products</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            {[
              { label: 'GaragePro', color: 'hover:text-blue-600' },
              { label: 'GarageBook', color: 'hover:text-emerald-500' },
              { label: 'AutoCat', color: 'hover:text-orange-400' },
            ].map((item, i) => (
              <li key={i}>
                <span
                  onClick={() => {
                    const el = document.getElementById('ourbrands');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`cursor-pointer ${item.color} transition`}
                >
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center sm:text-left">
          <h4 className="text-lg font-semibold mb-3 text-[#1a3687]">Contact</h4>
          <ul className="space-y-3 text-gray-600 text-sm">
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <Phone size={16} /> +91 73530 07699
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <Mail size={16} /> <a href="mailto:fix@carpm.in" className="hover:text-blue-600">fix@carpm.in</a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div className="text-center sm:text-left">
          <h4 className="text-lg font-semibold mb-3 text-[#1a3687]">Follow Us</h4>
          <div className="flex justify-center sm:justify-start gap-5">
            <a href="https://www.facebook.com/carpm.official/" target="_blank"
              rel="noopener noreferrer" className="hover:text-blue-600 transition"><Facebook size={20} /></a>

            <a href="https://in.linkedin.com/company/carpm" target="_blank"
              rel="noopener noreferrer" className="hover:text-sky-500 transition"><Linkedin size={20} /></a>
          </div>
        </div>
        
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-300 mt-14 pt-6 text-center text-sm text-gray-500 relative z-10">
        <div className="mb-2">
          <Link to="/terms-and-conditions" className="hover:text-gray-800 transition">Terms & Conditions</Link> | 
          <Link to="/privacy-policy" className="hover:text-gray-800 transition ml-2">Privacy Policy</Link>
        </div>
        &copy; {new Date().getFullYear()} Zymbia Interactive Technologies Private Limited . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
