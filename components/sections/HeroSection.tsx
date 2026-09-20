'use client';

import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { SITE_COPY } from '../content/copy';
import { EngineVisual } from '../EngineVisual';
import { InfinityWatermark } from '../ui/InfinityWatermark';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const { hero } = SITE_COPY;
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between bg-gradient-to-b from-[#001B94] via-[#00146e] to-[#000e47] px-6 sm:px-10 lg:px-16 pt-28 sm:pt-32 pb-8 overflow-hidden"
    >
      {/* Subtle Engineering Grid & Architectural Infinity Watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-subtle-grid opacity-50"
      />
      <InfinityWatermark position="top-right" variant="emerald" opacity={0.06} />

      {/* Main Center Content Grid */}
      <div className="relative z-10 max-w-7xl w-full mx-auto my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center py-6">
        {/* Left Column: Typography & Corporate Information */}
        <div className="lg:col-span-5 flex flex-col justify-center relative z-20">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 flex items-center gap-2.5"
          >
            <span className="w-2 h-2 rounded-full bg-emerald shadow-[0_0_8px_rgba(0,200,117,0.9)]" />
            <span className="text-xs font-mono tracking-[0.2em] text-emerald-light uppercase font-semibold">
              {hero.badge}
            </span>
          </motion.div>

          {/* Hero Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-light tracking-tight text-white leading-[1.02] mb-6"
          >
            {hero.headlineLines.map((line: string, idx: number) => (
              <span key={idx} className="block">
                {line}
              </span>
            ))}
          </motion.h1>

          {/* Supporting Statement & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-6 border-t border-white/10 space-y-8"
          >
            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-xl">
              {hero.supporting}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 rounded-sm text-xs uppercase tracking-wider font-semibold text-[#000e47] bg-white hover:bg-emerald hover:text-[#000e47] border border-white hover:border-emerald transition-all duration-200 focus:outline-none cursor-pointer flex items-center gap-2 shadow-md"
              >
                <span>{hero.ctaPrimary}</span>
                <span>→</span>
              </button>
              <button
                onClick={() => onNavigate('capabilities')}
                className="px-6 py-3 rounded-sm text-xs uppercase tracking-wider font-medium text-white hover:text-emerald bg-[#00115a]/80 hover:bg-[#001880] border border-white/15 hover:border-emerald/60 transition-all duration-200 focus:outline-none flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>{hero.ctaSecondary}</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Holographic Digital-Twin Engine Visual */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="lg:col-span-7 w-full flex items-center justify-center relative lg:pl-2"
        >
          <EngineVisual scrollProgress={scrollYProgress} />
        </motion.div>
      </div>

      {/* Bottom Engineering Accents Bar with Red Precision Line */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10 text-[11px] font-mono text-slate-300 uppercase tracking-widest select-none">
        <div className="flex items-center gap-3">
          <span className="w-5 h-[1.5px] bg-red-precision inline-block" />
          <span className="text-slate-200">{hero.footerTagline || 'BUILT FOR A MORE PRECISE TOMORROW'}</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-slate-300">
            {(hero.footerCategories || ['AUTOMOTIVE', 'ELECTRICAL', 'MECHATRONICS', 'PRECISION']).join('  /  ')}
          </span>
          <span className="w-5 h-[1.5px] bg-red-precision inline-block" />
        </div>
      </div>
    </section>
  );
};
