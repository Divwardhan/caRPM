import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand Info */}
        <div className="text-center sm:text-left">
          <h3 className="text-2xl font-bold mb-4 text-blue-400">CaRPM</h3>
          <p className="text-gray-400 text-sm">
            CaRPM<br />
            604, Paras Trinity<br />
            Sector 63 Gurgaon<br />
            Haryana, 122011<br />
            Ph: +91-8069015000
          </p>
        </div>

        {/* Products */}
        <div className="text-center sm:text-left">
          <h4 className="text-lg font-semibold text-white mb-3">Products</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            {[
              { label: 'GaragePro', color: 'hover:text-blue-400' },
              { label: 'GarageBook', color: 'hover:text-emerald-400' },
              { label: 'AutoCat', color: 'hover:text-orange-400' },
            ].map((item, i) => (
              <li key={i}>
                <span
                  onClick={() => {
                    const el = document.getElementById('category');
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
          <h4 className="text-lg font-semibold text-white mb-3">Contact</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <Phone size={16} /> +91 80690 15000
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <Mail size={16} /> <a href="mailto:fix@carpm.in">fix@carpm.in</a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div className="text-center sm:text-left">
          <h4 className="text-lg font-semibold text-white mb-3">Follow Us</h4>
          <div className="flex justify-center sm:justify-start gap-4">
            <a href="https://www.facebook.com/carpm.official/" target="_blank"
              rel="noopener noreferrer" className="hover:text-blue-400 transition"><Facebook size={20} /></a>

            <a href="https://in.linkedin.com/company/carpm" target="_blank"
              rel="noopener noreferrer" className="hover:text-sky-400 transition"><Linkedin size={20} /></a>
          </div>
        </div>
        
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-gray-500">
        <div className="mb-2">
          <Link to="/terms-and-conditions" className="hover:text-white transition">Terms & Conditions</Link> | <Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
        </div>
        &copy; {new Date().getFullYear()} CaRPM Technologies. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
