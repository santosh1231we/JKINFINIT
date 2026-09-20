'use client';

import React from 'react';
import { SECTIONS } from '../content/copy';

interface SectionIndicatorProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const SectionIndicator: React.FC<SectionIndicatorProps> = ({
  activeSection,
  onNavigate,
}) => {
  const currentIndex = SECTIONS.findIndex((s) => s.id === activeSection);
  const activeNumber = currentIndex >= 0 ? SECTIONS[currentIndex].index : '01';
  const totalNumber = String(SECTIONS.length).padStart(2, '0');

  return (
    <aside
      aria-label="Section Indicator"
      className="fixed right-6 sm:right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end gap-3 select-none pointer-events-auto"
    >
      {/* Numeric Indicator */}
      <div className="font-mono text-[11px] text-slate-300 bg-[#000e47]/90 px-2.5 py-1 rounded-sm border border-white/10 shadow-lg backdrop-blur-md flex items-center">
        <span className="text-emerald font-semibold">{activeNumber}</span>
        <span className="text-slate-500 mx-1">/</span>
        <span className="text-slate-400">{totalNumber}</span>
      </div>

      {/* Dots / Track */}
      <div className="flex flex-col items-center gap-2 py-1 pr-1">
        {SECTIONS.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => onNavigate(sec.id)}
              className="p-1 focus:outline-none group cursor-pointer"
              title={sec.label}
              aria-label={`Scroll to ${sec.label}`}
            >
              <span
                className={`block transition-all duration-200 rounded-full ${
                  isActive
                    ? 'w-1.5 h-4 bg-emerald shadow-[0_0_8px_rgba(0,200,117,0.8)]'
                    : 'w-1.5 h-1.5 bg-white/25 group-hover:bg-white/60'
                }`}
              />
            </button>
          );
        })}
      </div>
    </aside>
  );
};
