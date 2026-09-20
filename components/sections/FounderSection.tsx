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
      className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-[#000e47] via-[#00115a] to-[#00146e] bg-subtle-grid px-6 sm:px-12 lg:px-20 py-28 border-t border-white/10 overflow-hidden"
    >
      <InfinityWatermark position="bottom-left" variant="dual" opacity={0.06} />

      <div className="relative z-10 max-w-6xl w-full mx-auto">
        {/* Section Tag */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-3 text-[13px] font-mono tracking-[0.22em] text-emerald uppercase font-semibold">
            <span className="w-8 h-[1.5px] bg-red-precision" />
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
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-white/15 bg-[#000c40] shadow-xl">
                <img
                  src={founder.photoUrl}
                  alt={`${founder.name} — ${founder.title}`}
                  className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.05]"
                  loading="lazy"
                />
                {/* 1px Red Edge Rule */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-red-precision" />
              </div>
              <div className="mt-4 flex items-center justify-between text-xs font-mono px-0.5">
                <span className="text-white font-medium tracking-wide">
                  {founder.name}
                </span>
                <span className="text-emerald font-semibold tracking-[0.18em]">JKINFINIT</span>
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
              <p className="text-sm sm:text-base font-mono text-emerald mt-2 tracking-[0.14em] font-medium">
                {founder.title}
              </p>
            </div>

            <div className="space-y-5 text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {founder.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10">
              <a
                href={founder.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-sm text-xs font-semibold tracking-wider text-white hover:text-[#000e47] bg-[#00115a] hover:bg-emerald border border-white/20 hover:border-emerald transition-all duration-200 group shadow-md"
              >
                <span>VIEW LINKEDIN</span>
                <span className="text-emerald group-hover:text-[#000e47] group-hover:translate-x-1 transition-all">
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
