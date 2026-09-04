'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SITE_COPY } from '../content/copy';

export const FounderSection: React.FC = () => {
  const { founder } = SITE_COPY;

  return (
    <section
      id="founder"
      className="relative min-h-screen w-full flex items-center justify-center bg-[#0a0c0f] bg-subtle-grid px-6 sm:px-12 lg:px-20 py-28 hairline-t"
    >
      <div className="relative z-10 max-w-5xl w-full mx-auto">
        {/* Section Tag */}
        <div className="mb-4">
          <span className="text-xs font-mono tracking-widest text-gold uppercase font-medium">
            {founder.tag}
          </span>
        </div>

        {/* Section Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-5xl font-light text-white tracking-tight mb-12"
        >
          {founder.headline}
        </motion.h2>

        {/* Two-Column Founder Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Founder Photograph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded bg-surface hairline-all p-2 overflow-hidden group">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded bg-[#12151b]">
                <img
                  src={founder.photoUrl}
                  alt={`${founder.name} — ${founder.title}`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>

              {/* Subtle gold accent edge at bottom */}
              <div className="mt-2 pt-2 flex items-center justify-between text-[11px] font-mono text-slate-400 px-1">
                <span className="text-slate-300 font-medium">{founder.name}</span>
                <span className="text-gold">JKINFINIT</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Name, Title, Biography & LinkedIn Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-6"
          >
            <div>
              <h3 className="text-2xl sm:text-4xl font-normal text-white tracking-tight">
                {founder.name}
              </h3>
              <p className="text-sm sm:text-base font-mono text-gold mt-1.5 tracking-wider">
                {founder.title}
              </p>
            </div>

            {/* Biography Paragraphs */}
            <div className="space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
              {founder.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Professional LinkedIn Action */}
            <div className="pt-4 hairline-t">
              <a
                href={founder.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-xs font-medium tracking-wider text-slate-200 hover:text-black bg-surface hover:bg-gold hairline-all hover:border-gold transition-all duration-200 group"
              >
                <span>VIEW LINKEDIN</span>
                <span className="text-gold group-hover:text-black group-hover:translate-x-0.5 transition-all">
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
