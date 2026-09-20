'use client';

import React from 'react';
import Image from 'next/image';

interface InfinityWatermarkProps {
  className?: string;
  opacity?: number;
  position?: 'hero-right' | 'left' | 'right' | 'bottom-right' | 'center';
  rotate?: number;
}

export const InfinityWatermark: React.FC<InfinityWatermarkProps> = ({
  className = '',
  opacity = 0.08,
  position = 'hero-right',
  rotate = -12,
}) => {
  const positionStyles = {
    'hero-right': 'top-[-5%] right-[-14%] sm:right-[-8%] lg:right-[0%]',
    left: 'top-[15%] left-[-15%] sm:left-[-10%]',
    right: 'top-[10%] right-[-15%] sm:right-[-8%]',
    'bottom-right': 'bottom-[-10%] right-[-10%]',
    center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  }[position];

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute select-none overflow-hidden ${positionStyles} ${className}`}
      style={{
        opacity,
        transform: `rotate(${rotate}deg)`,
        filter: 'blur(1px) contrast(1.1)',
      }}
    >
      <div className="relative w-[500px] sm:w-[750px] lg:w-[980px] aspect-[4/3] max-w-none">
        <Image
          src="/assets/infinity-symbol.png"
          alt="JKinfinit Official Infinity Identity"
          fill
          sizes="(max-width: 768px) 500px, 980px"
          className="object-contain pointer-events-none"
          priority={position === 'hero-right'}
          draggable={false}
        />
      </div>
    </div>
  );
};
