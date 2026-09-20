'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SITE_COPY } from '../content/copy';
import { InfinityWatermark } from '../ui/InfinityWatermark';

const CAPABILITY_PREVIEW = [
  { code: '01', title: 'Powertrain & EV systems', note: 'Motor architecture, housing, and driveline integration.' },
  { code: '02', title: 'Product & engine design', note: 'From concept geometry through production-intent detailing.' },
  { code: '03', title: 'Validation & reliability', note: 'Test planning, technical evidence, and sign-off support.' },
  { code: '04', title: 'Industrialization', note: 'Supplier readiness, process, and manufacturing scale-up.' },
];

export const CapabilitiesSection: React.FC = () => {
  const { capabilities } = SITE_COPY;

  return (
    <section
      id="capabilities"
      className="relative min-h-screen w-full flex items-center justify-center bg-[#001B94] px-6 sm:px-12 lg:px-20 py-28 border-t border-white/10 overflow-hidden"
    >
      {/* Subtle Engineering Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-subtle-grid opacity-30"
      />

      {/* Large Architectural Infinity Watermark */}
      <InfinityWatermark position="right" opacity={0.08} rotate={-15} />

      <div className="relative z-10 max-w-6xl w-full mx-auto">
        {/* Section Tag */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-3 text-[13px] font-mono tracking-[0.22em] text-[#00A86B] uppercase font-bold">
            <span className="w-8 h-[2px] bg-[#E31B23]" />
            {capabilities.tag}
          </span>
        </div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-6xl font-light text-white tracking-tight mb-12"
        >
          {capabilities.headline}
        </motion.h2>

        {/* Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {CAPABILITY_PREVIEW.map((item, idx) => (
            <motion.article
              key={item.code}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 * idx }}
              className="p-7 rounded-sm bg-[#000F5C]/90 border border-white/10 hover:border-[#00A86B]/60 transition-all duration-200 shadow-lg relative group"
            >
              {/* Red Engineering Precision Line Across Top of Card */}
              <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-[#E31B23]" />

              <span className="text-xs font-mono text-[#00A86B] font-bold tracking-widest">{item.code}</span>
              <h3 className="mt-3 text-xl text-white font-normal tracking-tight">{item.title}</h3>
              <p className="mt-2.5 text-sm text-[#D9E2FF] leading-relaxed font-normal">{item.note}</p>
            </motion.article>
          ))}
        </div>

        {/* Notice Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-8 sm:p-10 rounded-sm bg-[#000F5C]/80 border border-white/10 space-y-4 max-w-2xl shadow-xl backdrop-blur-sm relative"
        >
          <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-[#E31B23]" />

          <div className="inline-block px-3 py-1 rounded-sm bg-[#00147a] text-[10px] font-mono tracking-widest text-[#00A86B] uppercase font-bold border border-[#00A86B]/30">
            {capabilities.underConstructionNotice}
          </div>
          <p className="text-base text-[#D9E2FF] leading-relaxed font-normal">
            {capabilities.underConstructionMessage}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
