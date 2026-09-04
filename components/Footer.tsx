'use client';

import React from 'react';
import { SECTIONS, SITE_COPY } from './content/copy';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#060709] hairline-t px-6 sm:px-12 lg:px-20 py-12 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-white font-medium tracking-wider text-sm">
            {SITE_COPY.company.name}
          </span>
          <span className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">
            {SITE_COPY.company.tagline}
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6">
          {SECTIONS.map((sec) => (
            <button
              key={sec.id}
              onClick={() => onNavigate(sec.id)}
              className="text-slate-400 hover:text-white uppercase tracking-wider text-xs transition-colors focus:outline-none"
            >
              {sec.label}
            </button>
          ))}
          <a
            href={SITE_COPY.founder.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-gold uppercase tracking-wider text-xs transition-colors"
          >
            LinkedIn
          </a>
        </nav>

        {/* Copyright */}
        <div className="text-slate-400 text-[11px]">
          © {currentYear} {SITE_COPY.company.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
