'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SITE_COPY } from '../content/copy';

export const ContactSection: React.FC = () => {
  const { contact } = SITE_COPY;

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full flex items-center justify-center bg-[#08090b] bg-subtle-grid px-6 sm:px-12 lg:px-20 py-28 hairline-t"
    >
      <div className="relative z-10 max-w-4xl w-full mx-auto">
        {/* Section Tag */}
        <div className="mb-4">
          <span className="text-xs font-mono tracking-widest text-gold uppercase font-medium">
            {contact.tag}
          </span>
        </div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-5xl font-light text-white tracking-tight mb-8"
        >
          {contact.headline}
        </motion.h2>

        {/* Under Construction Notice */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-8 sm:p-12 rounded bg-surface hairline-all space-y-4 max-w-2xl"
        >
          <div className="inline-block px-2.5 py-1 rounded bg-surface-elevated text-[10px] font-mono tracking-widest text-gold uppercase">
            {contact.underConstructionNotice}
          </div>
          <p className="text-base text-slate-300 leading-relaxed font-normal">
            {contact.underConstructionMessage}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
