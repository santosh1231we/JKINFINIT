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
      className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-[#00146e] via-[#00115a] to-[#000e47] bg-subtle-grid px-6 sm:px-12 lg:px-20 py-28 border-t border-white/10 overflow-hidden"
    >
      <InfinityWatermark position="top-right" variant="emerald" opacity={0.06} />

      <div className="relative z-10 max-w-6xl w-full mx-auto">
        {/* Section Tag */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-3 text-[13px] font-mono tracking-[0.22em] text-emerald uppercase font-semibold">
            <span className="w-8 h-[1.5px] bg-red-precision" />
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
              className="p-7 rounded-sm bg-[#000c40]/80 border border-white/10 hover:border-emerald/50 transition-all duration-200 shadow-md relative group"
            >
              {/* Red Micro-Accent Line on Top */}
              <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-red-precision/40 group-hover:bg-red-precision transition-colors" />

              <span className="text-xs font-mono text-emerald font-semibold tracking-widest">{item.code}</span>
              <h3 className="mt-3 text-xl text-white font-normal tracking-tight">{item.title}</h3>
              <p className="mt-2.5 text-sm text-slate-300 leading-relaxed font-normal">{item.note}</p>
            </motion.article>
          ))}
        </div>

        {/* Notice Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-8 sm:p-10 rounded-sm bg-[#00115a]/70 border border-white/10 space-y-4 max-w-2xl shadow-lg backdrop-blur-sm"
        >
          <div className="inline-block px-3 py-1 rounded-sm bg-[#001880] text-[10px] font-mono tracking-widest text-emerald-light uppercase font-semibold border border-emerald/30">
            {capabilities.underConstructionNotice}
          </div>
          <p className="text-base text-slate-200 leading-relaxed font-normal">
            {capabilities.underConstructionMessage}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
