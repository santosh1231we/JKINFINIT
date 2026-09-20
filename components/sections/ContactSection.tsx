'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SITE_COPY } from '../content/copy';
import { InfinityWatermark } from '../ui/InfinityWatermark';

export const ContactSection: React.FC = () => {
  const { contact } = SITE_COPY;

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full flex items-center justify-center bg-[#001B94] px-6 sm:px-12 lg:px-20 py-28 border-t border-white/10 overflow-hidden"
    >
      {/* Subtle Engineering Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-subtle-grid opacity-30"
      />

      {/* Large Architectural Infinity Watermark */}
      <InfinityWatermark position="bottom-right" opacity={0.08} rotate={-20} />

      <div className="relative z-10 max-w-5xl w-full mx-auto">
        {/* Section Tag */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-3 text-[13px] font-mono tracking-[0.22em] text-[#00A86B] uppercase font-bold">
            <span className="w-8 h-[2px] bg-[#E31B23]" />
            {contact.tag}
          </span>
        </div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-6xl font-light text-white tracking-tight mb-10"
        >
          {contact.headline}
        </motion.h2>

        {/* Notice Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-8 sm:p-12 rounded-sm bg-[#000F5C]/85 border border-white/10 space-y-4 max-w-2xl shadow-xl backdrop-blur-sm relative"
        >
          {/* Top Red Engineering Rule */}
          <div className="absolute top-0 left-8 right-8 h-[2px] bg-[#E31B23]" />

          <div className="inline-block px-3 py-1 rounded-sm bg-[#00147a] text-[10px] font-mono tracking-widest text-[#00A86B] uppercase font-bold border border-[#00A86B]/30">
            {contact.underConstructionNotice}
          </div>
          <p className="text-base text-[#D9E2FF] leading-relaxed font-normal">
            {contact.underConstructionMessage}
          </p>
          <div className="pt-3 flex items-center gap-3 text-[11px] font-mono uppercase tracking-widest text-[#D9E2FF]/80 border-t border-white/10">
            <span className="w-6 h-[1.5px] bg-[#00A86B]" />
            <span>Engineering inquiries & technical validation</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
