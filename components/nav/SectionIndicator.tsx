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
      <div className="font-mono text-[11px] text-slate-400 bg-[#08090b]/80 px-2 py-0.5 rounded hairline-all backdrop-blur-sm">
        <span className="text-gold font-medium">{activeNumber}</span>
        <span className="text-slate-600 mx-1">/</span>
        <span className="text-slate-500">{totalNumber}</span>
      </div>

      {/* Dots */}
      <div className="flex flex-col items-center gap-2 py-1">
        {SECTIONS.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => onNavigate(sec.id)}
              className="p-1 focus:outline-none"
              title={sec.label}
              aria-label={`Scroll to ${sec.label}`}
            >
              <span
                className={`block transition-all duration-200 rounded-full ${
                  isActive
                    ? 'w-1.5 h-4 bg-gold'
                    : 'w-1.5 h-1.5 bg-slate-700 hover:bg-slate-400'
                }`}
              />
            </button>
          );
        })}
      </div>
    </aside>
  );
};
