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
      setIsScrolled(window.scrollY > 20);
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
          ? 'bg-[#000e47]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3.5'
          : 'bg-[#001B94]/60 backdrop-blur-sm border-b border-white/10 py-5'
      }`}
    >
      {/* 1px Red Engineering Precision Top Edge Trace */}
      <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-red-precision/70 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, 'home')}
          className="group flex flex-col cursor-pointer select-none"
        >
          <div className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl font-semibold tracking-wider text-white group-hover:text-emerald transition-colors duration-200">
              {SITE_COPY.company.name}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald inline-block" />
          </div>
          <span className="text-[10px] tracking-[0.2em] text-slate-300 uppercase font-mono">
            {SITE_COPY.company.tagline}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-3">
          {SECTIONS.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={(e) => handleLinkClick(e, sec.id)}
                className={`relative px-4 py-2 text-xs uppercase tracking-widest transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>{sec.label}</span>

                {/* Emerald Active Indicator Rule */}
                {isActive && (
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-emerald rounded-full shadow-[0_0_8px_rgba(0,200,117,0.8)]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action: INQUIRE Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="px-5 py-2 rounded-sm text-xs font-semibold tracking-wider text-white bg-surface hover:bg-emerald hover:text-[#000e47] border border-white/20 hover:border-emerald transition-all duration-200 shadow-sm"
          >
            INQUIRE
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-200 hover:text-emerald focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
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
        <div className="md:hidden bg-[#000e47] border-b border-white/10 px-6 py-6 space-y-4 shadow-xl">
          {SECTIONS.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={(e) => handleLinkClick(e, sec.id)}
                className={`block py-1.5 text-sm uppercase tracking-wider ${
                  isActive ? 'text-emerald font-semibold' : 'text-slate-300'
                }`}
              >
                {sec.label}
              </a>
            );
          })}
          <div className="pt-4 border-t border-white/10">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, 'contact')}
              className="block w-full text-center py-2.5 rounded-sm text-xs font-bold text-[#000e47] bg-emerald hover:bg-emerald-light transition-colors uppercase tracking-wider"
            >
              CONTACT JKINFINIT
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
