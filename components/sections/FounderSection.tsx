'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SITE_COPY } from '../content/copy';
import { InfinityWatermark } from '../ui/InfinityWatermark';

export const FounderSection: React.FC = () => {
  const { founder } = SITE_COPY;
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="founder"
      className="relative min-h-screen w-full flex items-center justify-center bg-[#001B94] px-6 sm:px-12 lg:px-20 py-28 border-t border-white/10 overflow-hidden"
    >
      {/* Subtle Engineering Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-subtle-grid opacity-30"
      />

      {/* Large Architectural Infinity Watermark */}
      <InfinityWatermark position="left" opacity={0.07} rotate={-10} />

      <div className="relative z-10 max-w-6xl w-full mx-auto">
        {/* Section Tag */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-3 text-[13px] font-mono tracking-[0.22em] text-[#00A86B] uppercase font-bold">
            <span className="w-8 h-[2px] bg-[#E31B23]" />
            {founder.tag}
          </span>
        </div>

        {/* Section Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-6xl font-light text-white tracking-tight mb-14"
        >
          {founder.headline}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
              transition={{
                duration: 6.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative max-w-md mx-auto lg:mx-0"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-white/15 bg-[#000F5C] shadow-2xl">
                <img
                  src={founder.photoUrl}
                  alt={`${founder.name} — ${founder.title}`}
                  className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.05]"
                  loading="lazy"
                />
                {/* 1.5px Red Edge Rule Above Image */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-[#E31B23]" />
              </div>
              <div className="mt-4 flex items-center justify-between text-xs font-mono px-0.5">
                <span className="text-white font-medium tracking-wide">
                  {founder.name}
                </span>
                <span className="text-[#00A86B] font-bold tracking-[0.18em]">JKINFINIT</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Biography & Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-7"
          >
            <div>
              <h3 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
                {founder.name}
              </h3>
              <p className="text-sm sm:text-base font-mono text-[#00A86B] mt-2 tracking-[0.14em] font-bold">
                {founder.title}
              </p>
            </div>

            <div className="space-y-5 text-[#D9E2FF] text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {founder.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10">
              <a
                href={founder.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-sm text-xs font-semibold tracking-wider text-white hover:text-[#000F5C] bg-[#000F5C] hover:bg-[#00A86B] border border-white/20 hover:border-[#00A86B] transition-all duration-200 group shadow-md"
              >
                <span>VIEW LINKEDIN</span>
                <span className="text-[#00A86B] group-hover:text-[#000F5C] group-hover:translate-x-1 transition-all">
                  →
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
