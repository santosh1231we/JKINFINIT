'use client';

import React, { useRef, useCallback } from 'react';
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  type MotionValue,
} from 'framer-motion';
import Image from 'next/image';

const POINTER_SPRING = { stiffness: 44, damping: 26, mass: 0.8 };

type EngineVisualProps = {
  scrollProgress?: MotionValue<number>;
};

export const EngineVisual: React.FC<EngineVisualProps> = ({
  scrollProgress,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smoothMx = useSpring(mx, POINTER_SPRING);
  const smoothMy = useSpring(my, POINTER_SPRING);

  // Rotation response
  const rotX = useTransform(smoothMy, [-1, 1], [2.4, -2.4]);
  const rotY = useTransform(smoothMx, [-1, 1], [-3.5, 3.5]);

  // Differential parallax depth offsets
  const x = useTransform(smoothMx, [-1, 1], [-8, 8]);
  const y = useTransform(smoothMy, [-1, 1], [-6, 6]);
  const echoX = useTransform(smoothMx, [-1, 1], [9, -9]);
  const echoY = useTransform(smoothMy, [-1, 1], [6, -6]);
  const calloutX = useTransform(smoothMx, [-1, 1], [-12, 12]);
  const calloutY = useTransform(smoothMy, [-1, 1], [-10, 10]);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      mx.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
      my.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
    },
    [mx, my],
  );

  const handlePointerLeave = useCallback(() => {
    mx.set(0);
    my.set(0);
  }, [mx, my]);

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative w-full select-none bg-transparent flex items-center justify-center"
      style={{
        height: 'clamp(460px, 62vh, 660px)',
        perspective: '1500px',
        perspectiveOrigin: '50% 50%',
      }}
    >
      <motion.div
        style={{
          x,
          y,
          rotateX: rotX,
          rotateY: rotY,
          transformStyle: 'preserve-3d',
        }}
        className="relative flex items-center justify-center w-full max-w-[920px] h-full origin-center"
      >
        {/* Layer 0: Technical CAD Geometry, Crosshairs & Exploded Alignment Axis (Z: -60px) */}
        <div
          style={{ transform: 'translateZ(-60px)' }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          {/* Deep Volumetric Holographic Aura */}
          <div className="w-[85%] h-[75%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,15,92,0.85)_0%,rgba(0,27,148,0.45)_50%,transparent_75%)] blur-3xl opacity-90" />

          {/* Emerald Internal Stator Electromagnetic Core Aura */}
          <div className="absolute left-[52%] top-[48%] -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[radial-gradient(circle,rgba(0,168,107,0.35)_0%,rgba(0,27,148,0.1)_60%,transparent_80%)] blur-2xl opacity-80" />

          {/* Exploded CAD Alignment Centerline */}
          <div className="absolute w-[94%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent top-[50%] -translate-y-1/2" />
          <div className="absolute w-[80%] h-[1px] border-b border-dashed border-white/15 top-[50%] -translate-y-1/2" />

          {/* Technical Crosshairs & Datum Markers */}
          <span className="absolute left-[20%] top-[30%] font-mono text-[10px] text-white/30">+</span>
          <span className="absolute right-[22%] top-[35%] font-mono text-[10px] text-white/30">+</span>
          <span className="absolute left-[38%] bottom-[25%] font-mono text-[10px] text-white/30">+</span>

          {/* Circular Reference Rings */}
          <div className="absolute left-[44%] top-[48%] -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-white/10 opacity-40 pointer-events-none" />
          <div className="absolute left-[44%] top-[48%] -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-dashed border-[#00A86B]/20 opacity-40 pointer-events-none" />
        </div>

        {/* Layer 1: Ground Projection Contact Shadow (Z: -40px) */}
        <div
          style={{ transform: 'translateZ(-40px)' }}
          className="absolute bottom-[2%] w-[90%] h-[38px] pointer-events-none"
        >
          <div className="w-full h-full rounded-[100%] bg-[radial-gradient(ellipse_75%_35%_at_50%_50%,rgba(0,10,45,0.95)_0%,rgba(0,27,148,0.3)_50%,transparent_85%)]" />
        </div>

        {/* Layer 2: Ghosted Digital-Twin Holographic Silhouette Echo (Z: -20px) */}
        <motion.div
          style={{
            x: echoX,
            y: echoY,
            transform: 'translateZ(-20px) scale(0.99)',
          }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25 mix-blend-screen"
        >
          <div className="relative w-full h-full max-h-[520px]">
            <Image
              src="/assets/Engine/MASTER.png"
              alt="Digital Twin Silhouette"
              fill
              sizes="(max-width: 768px) 95vw, 58vw"
              className="object-contain filter brightness-125 contrast-150 drop-shadow-[0_0_15px_rgba(0,168,107,0.4)] pointer-events-none"
              draggable={false}
            />
          </div>
        </motion.div>

        {/* Layer 3: Primary Master Assembly — Holographic Engineering Visualization (Z: 0px) */}
        <div
          style={{ transform: 'translateZ(0px)' }}
          className="relative w-full h-full max-h-[540px] flex items-center justify-center select-none"
        >
          {/* Base Layer: Translucent Luminous Mechanical Assembly */}
          <Image
            src="/assets/Engine/MASTER.png"
            alt="JKinfinit Powertrain Digital Twin"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-contain pointer-events-none filter drop-shadow-[0_0_25px_rgba(0,27,148,0.9)] drop-shadow-[0_0_35px_rgba(0,168,107,0.22)] drop-shadow-[0_20px_40px_rgba(0,10,45,0.9)] contrast-[1.12] brightness-[1.05]"
            draggable={false}
          />

          {/* Copper Stator Core & Emerald Rotor Highlights Overlay */}
          <div
            className="absolute inset-0 pointer-events-none mix-blend-screen opacity-90"
            style={{
              background:
                'radial-gradient(ellipse 30% 35% at 53% 52%, rgba(0, 168, 107, 0.28) 0%, transparent 70%)',
            }}
          />

          {/* Micro-fine Holographic Scanlines Texture */}
          <div className="absolute inset-0 hologram-scanlines pointer-events-none" />
        </div>

        {/* Layer 4: Engineering Telemetry Callouts with Precision Red Pointer Lines (Z: +35px) */}
        <motion.div
          style={{
            x: calloutX,
            y: calloutY,
            transform: 'translateZ(35px)',
            transformStyle: 'preserve-3d',
          }}
          className="absolute inset-0 pointer-events-none hidden sm:block"
        >
          {/* Callout 1: ROTOR ASSEMBLY */}
          <div className="absolute left-[44%] top-[14%] flex flex-col">
            <div className="flex items-center gap-1.5 font-mono text-[9px] tracking-widest text-[#00A86B] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A86B]" />
              <span>ROTOR ASSEMBLY</span>
            </div>
            <div className="font-mono text-[8px] tracking-wider text-[#D9E2FF]/80 pl-3">
              HIGH EFFICIENCY / LOW NVH
            </div>
            {/* Red Precision Pointer Line */}
            <svg
              className="w-24 h-16 -mt-1 -ml-3 pointer-events-none"
              viewBox="0 0 100 60"
              fill="none"
            >
              <polyline
                points="12,4 12,32 50,56"
                stroke="#E31B23"
                strokeWidth="1.2"
              />
              <circle cx="50" cy="56" r="2" fill="#E31B23" />
            </svg>
          </div>

          {/* Callout 2: INVERTER INTERFACE */}
          <div className="absolute right-[8%] top-[12%] flex flex-col items-end text-right">
            <div className="flex items-center gap-1.5 font-mono text-[9px] tracking-widest text-white font-bold border-b border-white/20 pb-0.5">
              <span>INVERTER INTERFACE</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A86B]" />
            </div>
            <div className="font-mono text-[8px] tracking-wider text-[#D9E2FF]/80 mt-1">
              INTEGRATED DESIGN
            </div>
            <div className="font-mono text-[8px] tracking-wider text-[#D9E2FF]/60">
              MODULAR ARCHITECTURE
            </div>
            {/* Red Precision Pointer Line */}
            <svg
              className="w-28 h-16 mt-1 pointer-events-none"
              viewBox="0 0 110 60"
              fill="none"
            >
              <polyline
                points="100,4 60,4 20,48"
                stroke="#E31B23"
                strokeWidth="1.2"
              />
              <circle cx="20" cy="48" r="2" fill="#E31B23" />
            </svg>
          </div>

          {/* Callout 3: STATOR CORE */}
          <div className="absolute left-[47%] bottom-[12%] flex flex-col">
            {/* Red Precision Pointer Line going up */}
            <svg
              className="w-24 h-14 -mb-1 ml-4 pointer-events-none"
              viewBox="0 0 100 50"
              fill="none"
            >
              <polyline
                points="60,6 20,38 12,46"
                stroke="#E31B23"
                strokeWidth="1.2"
              />
              <circle cx="60" cy="6" r="2" fill="#E31B23" />
            </svg>
            <div className="flex items-center gap-1.5 font-mono text-[9px] tracking-widest text-[#00A86B] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A86B]" />
              <span>STATOR CORE</span>
            </div>
            <div className="font-mono text-[8px] tracking-wider text-[#D9E2FF]/80 pl-3">
              OPTIMISED WINDING
            </div>
            <div className="font-mono text-[8px] tracking-wider text-[#D9E2FF]/60 pl-3">
              SUPERIOR THERMAL PERFORMANCE
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
