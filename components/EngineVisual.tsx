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

const POINTER_SPRING = { stiffness: 42, damping: 28, mass: 0.85 };
const EXPLODE_SPRING = { stiffness: 55, damping: 24, mass: 0.7 };

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
  const echoX = useTransform(smoothMx, [-1, 1], [10, -10]);
  const echoY = useTransform(smoothMy, [-1, 1], [6, -6]);

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
        height: 'clamp(440px, 60vh, 640px)',
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
        className="relative flex items-center justify-center w-full max-w-[880px] h-full origin-center"
      >
        {/* Layer 0: Volumetric Holographic Depth Aura (Z: -60px) */}
        <div
          style={{ transform: 'translateZ(-60px)' }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          {/* Deep Brand Blue Core Glow */}
          <div className="w-[85%] h-[75%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,27,148,0.55)_0%,rgba(0,17,90,0.25)_50%,transparent_75%)] blur-3xl opacity-80" />

          {/* Emerald Internal Stator Energy Aura */}
          <div className="absolute left-[44%] top-[42%] -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-[radial-gradient(circle,rgba(0,200,117,0.25)_0%,rgba(0,27,148,0.1)_60%,transparent_80%)] blur-2xl opacity-75" />

          {/* Micro Red Technical Centerline */}
          <div className="absolute w-[90%] h-[1px] bg-gradient-to-r from-transparent via-red-precision/40 to-transparent top-[52%] -translate-y-1/2" />
        </div>

        {/* Layer 1: Ground Contact Depth Projection (Z: -40px) */}
        <div
          style={{ transform: 'translateZ(-40px)' }}
          className="absolute bottom-[2%] w-[88%] h-[38px] pointer-events-none"
        >
          <div className="w-full h-full rounded-[100%] bg-[radial-gradient(ellipse_75%_35%_at_50%_50%,rgba(0,10,45,0.9)_0%,rgba(0,27,148,0.2)_50%,transparent_85%)]" />
        </div>

        {/* Layer 2: Ghosted Digital-Twin Hologram Echo (Z: -20px) */}
        <motion.div
          style={{
            x: echoX,
            y: echoY,
            transform: 'translateZ(-20px) scale(0.99)',
          }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 mix-blend-screen"
        >
          <div className="relative w-full h-full max-h-[500px]">
            <Image
              src="/assets/Engine/MASTER.png"
              alt="Holographic Twin Echo"
              fill
              sizes="(max-width: 768px) 95vw, 55vw"
              className="object-contain filter hue-rotate-[130deg] brightness-125 contrast-125 pointer-events-none"
              draggable={false}
            />
          </div>
        </motion.div>

        {/* Layer 3: Primary Master Assembly — Solid Metallic with Holographic Refinement (Z: 0px) */}
        <div
          style={{ transform: 'translateZ(0px)' }}
          className="relative w-full h-full max-h-[520px] flex items-center justify-center select-none"
        >
          <Image
            src="/assets/Engine/MASTER.png"
            alt="JKinfinit Powertrain Assembly"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 58vw"
            className="object-contain pointer-events-none filter drop-shadow-[0_0_20px_rgba(0,27,148,0.7)] drop-shadow-[0_0_35px_rgba(0,200,117,0.18)] drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] contrast-[1.08] brightness-[1.02]"
            draggable={false}
          />

          {/* Micro-fine Holographic Scanlines Overlay */}
          <div className="absolute inset-0 hologram-scanlines rounded-lg" />
        </div>
      </motion.div>
    </div>
  );
};
