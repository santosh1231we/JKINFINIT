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
      className="relative min-h-screen w-full flex flex-col justify-between bg-[#001B94] px-6 sm:px-10 lg:px-16 pt-28 sm:pt-32 pb-8 overflow-hidden"
    >
      {/* Subtle Technical Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-subtle-grid opacity-40"
      />

      {/* Large Architectural Infinity Watermark in Hero Background */}
      <InfinityWatermark position="hero-right" opacity={0.09} rotate={-10} />

      {/* Main Center Content Grid */}
      <div className="relative z-10 max-w-7xl w-full mx-auto my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center py-6">
        {/* Left Column: Typography & Corporate Information */}
        <div className="lg:col-span-5 flex flex-col justify-center relative z-20">
          {/* Engineering Tag with Red Precision Line */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="w-6 h-[2px] bg-[#E31B23] inline-block" />
            <span className="text-xs font-mono tracking-[0.2em] text-[#00A86B] uppercase font-bold">
              {hero.badge || 'ENGINEERING EXCELLENCE'}
            </span>
          </motion.div>

          {/* Hero Headline with Emerald Period */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-light tracking-tight text-white leading-[1.04] mb-6"
          >
            <span className="block">Engineering</span>
            <span className="block">Precision.</span>
            <span className="block">Without</span>
            <span className="block">
              Compromise<span className="text-[#00A86B] font-normal">.</span>
            </span>
          </motion.h1>

          {/* Supporting Statement & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-6 border-t border-white/10 space-y-8"
          >
            <p className="text-base sm:text-lg text-[#D9E2FF] font-normal leading-relaxed max-w-xl">
              {hero.supporting}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="px-7 py-3 rounded-sm text-xs uppercase tracking-wider font-bold text-[#001B94] bg-white hover:bg-[#00A86B] hover:text-[#000F5C] transition-all duration-200 focus:outline-none cursor-pointer flex items-center gap-2 shadow-lg"
              >
                <span>{hero.ctaPrimary}</span>
                <span>→</span>
              </button>
              <button
                onClick={() => onNavigate('capabilities')}
                className="px-7 py-3 rounded-sm text-xs uppercase tracking-wider font-semibold text-white hover:text-[#00A86B] bg-[#000F5C] hover:bg-[#00147a] border border-white/20 hover:border-[#00A86B] transition-all duration-200 focus:outline-none flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>{hero.ctaSecondary}</span>
                <span>→</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Holographic Digital-Twin Engine Visual */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="lg:col-span-7 w-full flex items-center justify-center relative"
        >
          <EngineVisual scrollProgress={scrollYProgress} />
        </motion.div>
      </div>

      {/* Bottom Engineering Accents Bar with Red Precision Markers */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10 text-[11px] font-mono text-[#D9E2FF] uppercase tracking-widest select-none">
        <div className="flex items-center gap-3">
          <span className="w-5 h-[2px] bg-[#E31B23] inline-block" />
          <span className="text-[#D9E2FF]">{hero.footerTagline || 'FROM CONCEPT TO REALITY'}</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="w-5 h-[2px] bg-[#E31B23] inline-block" />
          <span className="text-[#D9E2FF]">
            {(hero.footerCategories || ['AUTOMOTIVE', 'EV', 'INDUSTRIAL']).join('  /  ')}
          </span>
        </div>
      </div>
    </section>
  );
};
