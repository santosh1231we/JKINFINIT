'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { SITE_COPY } from '../content/copy';

// Dynamically import EngineModel with SSR disabled
const EngineModel = dynamic(
  () => import('../EngineModel').then((mod) => mod.EngineModel),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[600px] sm:h-[720px] md:h-[820px] lg:h-[880px] xl:h-[960px] flex flex-col items-center justify-center gap-3 text-slate-400 font-mono text-xs">
        <div className="w-8 h-8 rounded-full border-2 border-slate-700 border-t-gold animate-spin" />
        <span className="tracking-widest uppercase text-[10px]">
          Initializing 3D Engine...
        </span>
      </div>
    ),
  }
);

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const { hero } = SITE_COPY;

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center bg-[#08090b] bg-subtle-grid px-6 sm:px-10 lg:px-16 pt-24 pb-16 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
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
                onClick={() => onNavigate('capabilities')}
                className="px-6 py-3 rounded text-xs uppercase tracking-wider font-medium text-black bg-gold hover:bg-gold-light transition-colors focus:outline-none cursor-pointer"
              >
                {hero.ctaPrimary}
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="px-6 py-3 rounded text-xs uppercase tracking-wider font-medium text-slate-300 hover:text-white bg-surface hover:bg-surface-elevated hairline-all transition-colors focus:outline-none flex items-center gap-2 group cursor-pointer"
              >
                <span>{hero.ctaSecondary}</span>
                <span className="text-gold group-hover:translate-x-0.5 transition-transform">
                  →
                </span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Column: 3D Engine Model Viewer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-7 w-full flex items-center justify-center relative"
        >
          <EngineModel />
        </motion.div>
      </div>
    </section>
  );
};
