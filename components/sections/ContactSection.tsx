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
      className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-[#00146e] via-[#00115a] to-[#000e47] bg-subtle-grid px-6 sm:px-12 lg:px-20 py-28 border-t border-white/10 overflow-hidden"
    >
      <InfinityWatermark position="bottom-right" variant="emerald" opacity={0.06} />

      <div className="relative z-10 max-w-5xl w-full mx-auto">
        {/* Section Tag */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-3 text-[13px] font-mono tracking-[0.22em] text-emerald uppercase font-semibold">
            <span className="w-8 h-[1.5px] bg-red-precision" />
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
          className="p-8 sm:p-12 rounded-sm bg-[#000c40]/80 border border-white/10 space-y-4 max-w-2xl shadow-xl backdrop-blur-sm relative"
        >
          {/* Top Red Engineering Rule */}
          <div className="absolute top-0 left-8 right-8 h-[2px] bg-red-precision/70" />

          <div className="inline-block px-3 py-1 rounded-sm bg-[#001880] text-[10px] font-mono tracking-widest text-emerald-light uppercase font-semibold border border-emerald/30">
            {contact.underConstructionNotice}
          </div>
          <p className="text-base text-slate-200 leading-relaxed font-normal">
            {contact.underConstructionMessage}
          </p>
          <div className="pt-3 flex items-center gap-3 text-[11px] font-mono uppercase tracking-widest text-slate-400 border-t border-white/10">
            <span className="w-6 h-[1.5px] bg-emerald" />
            <span>Engineering inquiries & technical validation</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
