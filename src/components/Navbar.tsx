import React, { useState } from 'react';
import { PageRoute } from '../types.ts';
import { BrandLogo } from './BrandLogo.tsx';
import { Menu, X, ArrowUpRight, PhoneCall } from 'lucide-react';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; route: PageRoute }[] = [
    { label: 'Home', route: 'home' },
    { label: 'Services', route: 'services' },
    { label: 'Products', route: 'products' },
    { label: 'About Us', route: 'about' },
    { label: 'Contact', route: 'contact' },
  ];

  const handleLinkClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#ffffff]/95 backdrop-blur-md border-b border-[#e5eaf2] transition-all">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 min-h-[80px] sm:min-h-[88px] py-2 flex items-center justify-between gap-6 md:gap-8">
        {/* Zone 1: Brand Zone - Wordmark & Prominent Logo */}
        <div className="shrink-0">
          <BrandLogo
            variant="header"
            onClick={() => handleLinkClick('home')}
          />
        </div>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = currentPage === link.route;
            return (
              <button
                key={link.route}
                onClick={() => handleLinkClick(link.route)}
                className={`cursor-pointer whitespace-nowrap transition-colors py-2 relative ${
                  isActive
                    ? 'text-[#004ab0] font-semibold'
                    : 'text-[#424653] hover:text-[#111c2d]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#004ab0] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleLinkClick('contact')}
            className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#004ab0] hover:bg-[#003c91] text-white text-sm font-medium shadow-sm transition-all hover:shadow active:scale-[0.98]"
          >
            <span>Let's Talk</span>
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => handleLinkClick('contact')}
            className="sm:hidden px-3 py-1.5 rounded-md bg-[#004ab0] text-white text-xs font-medium"
          >
            Let's Talk
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-lg text-[#424653] hover:text-[#111c2d] hover:bg-[#f0f3ff] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#e5eaf2] bg-[#ffffff] shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-5 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.route;
              return (
                <button
                  key={link.route}
                  onClick={() => handleLinkClick(link.route)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#e8eeff] text-[#004ab0] font-semibold'
                      : 'text-[#111c2d] hover:bg-[#f0f3ff]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#004ab0]" />}
                </button>
              );
            })}
            <div className="pt-3 border-t border-[#e5eaf2]">
              <button
                onClick={() => handleLinkClick('contact')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#004ab0] text-white text-base font-semibold shadow-sm"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Let's Talk • Discuss Project</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
