import React from 'react';
import { PageRoute } from '../types.ts';
import { BrandLogo } from './BrandLogo.tsx';
import { Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageRoute) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#ffffff] border-t border-[#e5eaf2] text-[#111c2d] pt-16 pb-12 mt-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 pb-12 border-b border-[#e5eaf2]">
          {/* Brand Info & Bigger Logo - ONLY LOGO */}
          <div className="lg:col-span-2 flex items-start">
            <BrandLogo variant="footer" onClick={() => handleNav('home')} />
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#111c2d] mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-[#424653]">
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#004ab0] transition-colors cursor-pointer text-left"
                >
                  Custom Software
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#004ab0] transition-colors cursor-pointer text-left"
                >
                  Web Apps
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#004ab0] transition-colors cursor-pointer text-left"
                >
                  Mobile
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#004ab0] transition-colors cursor-pointer text-left"
                >
                  Backend & APIs
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#004ab0] transition-colors cursor-pointer text-left"
                >
                  Automation
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#004ab0] transition-colors cursor-pointer text-left"
                >
                  IT Consulting
                </button>
              </li>
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#111c2d] mb-4">
              Products
            </h4>
            <ul className="space-y-2.5 text-sm text-[#424653]">
              <li>
                <button
                  onClick={() => handleNav('products')}
                  className="hover:text-[#004ab0] transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span>RideSync</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#004ab0]" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products')}
                  className="hover:text-[#004ab0] transition-colors cursor-pointer text-left"
                >
                  Innovation Labs
                </button>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#111c2d] mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-[#424653]">
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#004ab0] transition-colors cursor-pointer text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#004ab0] transition-colors cursor-pointer text-left"
                >
                  Engineering Discipline
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#004ab0] transition-colors cursor-pointer text-left"
                >
                  Freelancer Collaboration
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Legal Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#111c2d] mb-4">
              Contact & Legal
            </h4>
            <ul className="space-y-2.5 text-sm text-[#424653]">
              <li>
                <a
                  href="mailto:info@vaptechsol.com"
                  className="hover:text-[#004ab0] transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-[#004ab0]" />
                  <span>info@vaptechsol.com</span>
                </a>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-[#004ab0] transition-colors cursor-pointer text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-[#004ab0] transition-colors cursor-pointer text-left"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex items-center justify-center text-center text-xs text-[#737785]">
          <p>© 2026 VapTechSol Inc. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
