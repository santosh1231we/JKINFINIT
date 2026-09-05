'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SITE_COPY } from '../content/copy';
import { EngineVisual } from '../EngineVisual';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const { hero } = SITE_COPY;

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between bg-[#08090b] bg-subtle-grid px-6 sm:px-10 lg:px-16 pt-24 sm:pt-28 pb-8 overflow-hidden"
    >
      {/* Main Hero Center Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center py-6">
        {/* Left Column: Hero Typography & Actions */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          {/* Top Tag */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="text-xs font-mono tracking-widest text-gold uppercase font-medium">
              {hero.badge}
            </span>
          </motion.div>

          {/* Hero Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-light tracking-tight text-white leading-[1.08] mb-6"
          >
            {hero.headlineLines.map((line: string, idx: number) => (
              <span key={idx} className="block">
                {line}
              </span>
            ))}
          </motion.h1>

          {/* Supporting Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-6 hairline-t space-y-8"
          >
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl">
              {hero.supporting}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 rounded text-xs uppercase tracking-wider font-semibold text-black bg-gold hover:bg-gold-light transition-colors focus:outline-none cursor-pointer flex items-center gap-2"
              >
                <span>{hero.ctaPrimary}</span>
                <span>→</span>
              </button>
              <button
                onClick={() => onNavigate('capabilities')}
                className="px-6 py-3 rounded text-xs uppercase tracking-wider font-medium text-slate-300 hover:text-white bg-surface hover:bg-surface-elevated hairline-all transition-colors focus:outline-none flex items-center gap-2 group cursor-pointer"
              >
                <span>{hero.ctaSecondary}</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Column: High-Quality Engineering Assembly Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="lg:col-span-7 w-full flex items-center justify-center relative"
        >
          <EngineVisual />
        </motion.div>
      </div>

      {/* Hero Bottom Engineering Accents Bar (as seen in reference design) */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 hairline-t text-[11px] font-mono text-slate-500 uppercase tracking-widest select-none">
        <div className="flex items-center gap-3">
          <span className="w-4 h-[1.5px] bg-gold inline-block" />
          <span>{hero.footerTagline || 'BUILT FOR A MORE PRECISE TOMORROW'}</span>
        </div>

        <div className="flex items-center gap-3">
          <span>
            {(hero.footerCategories || ['AUTOMOTIVE', 'ELECTRICAL', 'MECHATRONICS', 'PRECISION']).join('  /  ')}
          </span>
          <span className="w-4 h-[1.5px] bg-gold inline-block" />
        </div>
      </div>
    </section>
  );
};
