'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SITE_COPY } from '../content/copy';
import { InfinityWatermark } from '../ui/InfinityWatermark';

export const AboutSection: React.FC = () => {
  const { about } = SITE_COPY;

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex items-center justify-center bg-[#001B94] px-6 sm:px-12 lg:px-20 py-28 border-t border-white/10 overflow-hidden"
    >
      {/* Subtle Engineering Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-subtle-grid opacity-30"
      />

      {/* Large Architectural Infinity Watermark */}
      <InfinityWatermark position="left" opacity={0.08} rotate={15} />

      <div className="relative z-10 max-w-6xl w-full mx-auto">
        {/* Section Tag */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-3 text-[13px] font-mono tracking-[0.22em] text-[#00A86B] uppercase font-bold">
            <span className="w-8 h-[2px] bg-[#E31B23]" />
            {about.tag}
          </span>
        </div>

        {/* Section Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-6xl font-light text-white tracking-tight leading-tight mb-10 whitespace-pre-line"
        >
          {about.headline}
        </motion.h2>

        {/* Notice Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-8 sm:p-10 rounded-sm bg-[#000F5C]/80 border border-white/10 space-y-4 max-w-2xl mb-12 shadow-xl backdrop-blur-sm relative"
        >
          {/* Red Precision Top Rule */}
          <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-[#E31B23]" />

          <div className="inline-block px-3 py-1 rounded-sm bg-[#00147a] text-[10px] font-mono tracking-widest text-[#00A86B] uppercase font-bold border border-[#00A86B]/30">
            {about.underConstructionNotice}
          </div>
          <p className="text-base text-[#D9E2FF] leading-relaxed font-normal">
            {about.underConstructionMessage}
          </p>
        </motion.div>

        {/* Core Focus Areas */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pt-8 border-t border-white/10"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-[#D9E2FF] block mb-5 font-semibold">
            Core Engineering Focus
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {about.focusAreas.map((area, idx) => (
              <div
                key={idx}
                className="group p-5 rounded-sm bg-[#000F5C]/90 border border-white/10 text-xs text-[#D9E2FF] font-medium transition-all duration-200 hover:border-[#00A86B]/60 hover:bg-[#00147a] shadow-md relative"
              >
                {/* 1px Red Edge Micro-Accent */}
                <div className="absolute top-0 left-4 w-6 h-[1.5px] bg-[#E31B23]" />

                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#00A86B] font-mono font-bold">0{idx + 1}.</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A86B] opacity-70" />
                </div>
                <span className="text-sm text-white font-normal block">{area}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
