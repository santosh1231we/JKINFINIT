'use client';

import React from 'react';
import { SECTIONS, SITE_COPY } from './content/copy';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#000a33] border-t border-white/10 px-6 sm:px-12 lg:px-20 py-14 text-slate-300 text-xs relative overflow-hidden">
      {/* 1px Red Engineering Precision Top Rule */}
      <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-red-precision/60 to-transparent" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="text-white font-semibold tracking-wider text-base">
              {SITE_COPY.company.name}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald" />
          </div>
          <span className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-mono">
            {SITE_COPY.company.tagline}
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6">
          {SECTIONS.map((sec) => (
            <button
              key={sec.id}
              onClick={() => onNavigate(sec.id)}
              className="text-slate-300 hover:text-emerald uppercase tracking-wider text-xs transition-colors focus:outline-none cursor-pointer"
            >
              {sec.label}
            </button>
          ))}
          <a
            href={SITE_COPY.founder.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-emerald uppercase tracking-wider text-xs transition-colors"
          >
            LinkedIn
          </a>
        </nav>

        {/* Copyright */}
        <div className="text-slate-400 text-[11px] font-mono">
          © {currentYear} {SITE_COPY.company.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
