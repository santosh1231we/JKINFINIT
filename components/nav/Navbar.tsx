'use client';

import React, { useState, useEffect } from 'react';
import { SECTIONS, SITE_COPY } from '../content/copy';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08090b]/95 backdrop-blur-md hairline-b py-4 shadow-xl'
          : 'bg-transparent py-6 hairline-b'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, 'home')}
          className="group flex flex-col cursor-pointer select-none"
        >
          <span className="text-base sm:text-lg font-medium tracking-wider text-white group-hover:text-gold transition-colors duration-200">
            {SITE_COPY.company.name}
          </span>
          <span className="text-[10px] tracking-widest text-slate-400 uppercase font-mono">
            {SITE_COPY.company.tagline}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {SECTIONS.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={(e) => handleLinkClick(e, sec.id)}
                className={`relative px-4 py-2 text-xs uppercase tracking-widest transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? 'text-white font-medium'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>{sec.label}</span>

                {/* Gold Active Indicator Underline */}
                {isActive && (
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-gold" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Inquire Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="px-4 py-2 rounded text-xs font-medium tracking-wider text-white hairline-all bg-surface hover:bg-gold hover:text-black hover:border-gold transition-all duration-200"
          >
            INQUIRE
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090a0c] hairline-b px-6 py-6 space-y-4">
          {SECTIONS.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={(e) => handleLinkClick(e, sec.id)}
                className={`block py-1 text-sm uppercase tracking-wider ${
                  isActive ? 'text-gold font-medium' : 'text-slate-400'
                }`}
              >
                {sec.label}
              </a>
            );
          })}
          <div className="pt-4 hairline-t">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, 'contact')}
              className="block w-full text-center py-2.5 rounded text-xs font-medium text-black bg-gold hover:bg-gold-light transition-colors"
            >
              CONTACT JKINFINIT
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
