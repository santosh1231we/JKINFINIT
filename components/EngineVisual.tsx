'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface ComponentData {
  id: string;
  name: string;
  index: string;
  category: string;
  src: string;
  aspect?: string;
}

const COMPONENTS: ComponentData[] = [
  {
    id: 'master',
    index: '00',
    name: 'Master Assembly',
    category: 'COMPLETE POWERTRAIN SYSTEM',
    src: '/assets/Engine/MASTER.png',
  },
  {
    id: 'actuator',
    index: '01',
    name: 'Actuator',
    category: 'ELECTROMECHANICAL ACTUATION',
    src: '/assets/Engine/actuator.png',
  },
  {
    id: 'crankshaft',
    index: '02',
    name: 'Crankshaft',
    category: 'HIGH-TENSILE FORGED ASSEMBLY',
    src: '/assets/Engine/crankshaft.png',
  },
  {
    id: 'ecu',
    index: '03',
    name: 'ECU',
    category: 'ELECTRONIC CONTROL & INVERTER',
    src: '/assets/Engine/ECU.png',
  },
  {
    id: 'housing',
    index: '04',
    name: 'Electric Motor Housing',
    category: 'PRECISION CNC MACHINED CASING',
    src: '/assets/Engine/electric-motor-housing.png',
  },
  {
    id: 'rotor',
    index: '05',
    name: 'Rotor',
    category: 'HIGH-SPEED MAGNETIC CORE',
    src: '/assets/Engine/rotor.png',
  },
  {
    id: 'stator',
    index: '06',
    name: 'Stator Assembly',
    category: 'HIGH-DENSITY COPPER WINDINGS',
    src: '/assets/Engine/stator-assembly.png',
  },
];

export const EngineVisual: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('master');
  const activeComponent = COMPONENTS.find((c) => c.id === activeId) || COMPONENTS[0];
  const isMaster = activeId === 'master';

  return (
    <div className="relative w-full flex flex-col items-center justify-center select-none">
      {/* Primary Image Display Canvas */}
      <div className="relative w-full max-w-[580px] sm:max-w-[700px] lg:max-w-[820px] xl:max-w-[940px] aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center">
        {/* Subtle CAD Corner Registration Marks */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-slate-700/60 pointer-events-none" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-slate-700/60 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-slate-700/60 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-slate-700/60 pointer-events-none" />

        {/* Active Component Metadata Badge */}
        <div className="absolute top-2 left-3 sm:top-4 sm:left-4 z-20 flex items-center gap-2 font-mono text-[10px] sm:text-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-slate-400 tracking-widest uppercase">
            {activeComponent.index === '00' ? 'SYSTEM VIEW' : `COMPONENT ${activeComponent.index}`}
          </span>
          <span className="text-slate-600">/</span>
          <span className="text-slate-300 font-medium tracking-wider uppercase">
            {activeComponent.name}
          </span>
        </div>

        {/* Back to Master button when inspecting a component */}
        {!isMaster && (
          <button
            onClick={() => setActiveId('master')}
            className="absolute top-2 right-3 sm:top-4 sm:right-4 z-20 px-3 py-1 rounded bg-surface/90 hover:bg-gold hover:text-black hairline-all text-[10px] font-mono tracking-wider text-slate-300 transition-all duration-200 cursor-pointer"
          >
            ← RETURN TO MASTER
          </button>
        )}

        {/* Image Display with smooth AnimatePresence crossfade */}
        <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeComponent.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <Image
                src={activeComponent.src}
                alt={`${activeComponent.name} - ${activeComponent.category}`}
                fill
                priority={activeComponent.id === 'master'}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                className="object-contain drop-shadow-2xl select-none pointer-events-none"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Engineering Component Breakdown Selector Bar */}
      <div className="w-full max-w-[580px] sm:max-w-[700px] lg:max-w-[820px] xl:max-w-[940px] mt-2 px-2">
        <div className="flex items-center justify-between gap-1 sm:gap-2 overflow-x-auto py-2 px-1 scrollbar-none hairline-t">
          {COMPONENTS.map((comp) => {
            const isActive = activeId === comp.id;
            return (
              <button
                key={comp.id}
                onClick={() => setActiveId(comp.id)}
                className={`flex-shrink-0 px-2.5 sm:px-3 py-1.5 rounded text-[10px] sm:text-[11px] font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-surface-elevated text-gold hairline-all border-gold/40 font-medium'
                    : 'text-slate-500 hover:text-slate-300 hover:bg-surface/50'
                }`}
              >
                <span className="text-slate-600 mr-1.5">{comp.index}</span>
                <span>{comp.id === 'master' ? 'MASTER' : comp.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
