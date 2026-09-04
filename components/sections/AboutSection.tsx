'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SITE_COPY } from '../content/copy';

export const AboutSection: React.FC = () => {
  const { about } = SITE_COPY;

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex items-center justify-center bg-[#0a0c0f] bg-subtle-grid px-6 sm:px-12 lg:px-20 py-28 hairline-t"
    >
      <div className="relative z-10 max-w-4xl w-full mx-auto">
        {/* Section Tag */}
        <div className="mb-4">
          <span className="text-xs font-mono tracking-widest text-gold uppercase font-medium">
            {about.tag}
          </span>
        </div>

        {/* Section Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-5xl font-light text-white tracking-tight leading-tight mb-8 whitespace-pre-line"
        >
          {about.headline}
        </motion.h2>

        {/* Under Construction Notice */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-8 sm:p-10 rounded bg-surface hairline-all space-y-4 max-w-2xl mb-10"
        >
          <div className="inline-block px-2.5 py-1 rounded bg-surface-elevated text-[10px] font-mono tracking-widest text-gold uppercase">
            {about.underConstructionNotice}
          </div>
          <p className="text-base text-slate-300 leading-relaxed font-normal">
            {about.underConstructionMessage}
          </p>
        </motion.div>

        {/* Core Domains Overview */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pt-8 hairline-t"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-4">
            Core Engineering Focus
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {about.focusAreas.map((area, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded bg-surface hairline-all text-xs text-slate-300 font-medium"
              >
                <span className="text-gold mr-2 font-mono">0{idx + 1}.</span>
                <span>{area}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
