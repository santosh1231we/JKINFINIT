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
      className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-[#000e47] via-[#00115a] to-[#00146e] bg-subtle-grid px-6 sm:px-12 lg:px-20 py-28 border-t border-white/10 overflow-hidden"
    >
      <InfinityWatermark position="bottom-left" variant="blue" opacity={0.07} />

      <div className="relative z-10 max-w-6xl w-full mx-auto">
        {/* Section Tag */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-3 text-[13px] font-mono tracking-[0.22em] text-emerald uppercase font-semibold">
            <span className="w-8 h-[1.5px] bg-red-precision" />
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
          className="p-8 sm:p-10 rounded-sm bg-[#000c40]/70 border border-white/10 space-y-4 max-w-2xl mb-12 shadow-lg backdrop-blur-sm"
        >
          <div className="inline-block px-3 py-1 rounded-sm bg-[#001880] text-[10px] font-mono tracking-widest text-emerald-light uppercase font-semibold border border-emerald/30">
            {about.underConstructionNotice}
          </div>
          <p className="text-base text-slate-200 leading-relaxed font-normal">
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
          <span className="text-xs font-mono uppercase tracking-widest text-slate-300 block mb-5">
            Core Engineering Focus
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {about.focusAreas.map((area, idx) => (
              <div
                key={idx}
                className="group p-5 rounded-sm bg-[#00115a]/80 border border-white/10 text-xs text-slate-200 font-medium transition-all duration-200 hover:border-emerald/50 hover:bg-[#001880] shadow-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-emerald font-mono font-semibold">0{idx + 1}.</span>
                  <span className="w-2 h-[1.5px] bg-red-precision/60 group-hover:bg-red-precision transition-colors" />
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
