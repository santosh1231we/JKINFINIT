'use client';

import React from 'react';

interface InfinityWatermarkProps {
  className?: string;
  variant?: 'blue' | 'emerald' | 'dual';
  opacity?: number;
  position?: 'top-right' | 'bottom-left' | 'center' | 'bottom-right';
}

export const InfinityWatermark: React.FC<InfinityWatermarkProps> = ({
  className = '',
  variant = 'blue',
  opacity = 0.05,
  position = 'top-right',
}) => {
  const positionClasses = {
    'top-right': 'top-[-10%] right-[-12%] md:right-[-6%]',
    'bottom-left': 'bottom-[-12%] left-[-10%] md:left-[-5%]',
    'bottom-right': 'bottom-[-15%] right-[-10%] md:right-[-5%]',
    center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  }[position];

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute select-none overflow-hidden ${positionClasses} ${className}`}
      style={{ opacity }}
    >
      <svg
        viewBox="0 0 1000 500"
        className="w-[600px] sm:w-[850px] lg:w-[1100px] h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="inf-grad-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#001B94" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#0031d4" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#00115a" stopOpacity="0.1" />
          </linearGradient>

          <linearGradient id="inf-grad-emerald" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00c875" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#001B94" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00e588" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id="inf-stroke-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
            <stop offset="45%" stopColor="#00c875" stopOpacity="0.6" />
            <stop offset="70%" stopColor="#001B94" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#e11d48" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Primary Architectural Infinity Loop */}
        <path
          d="M300,250 C180,100 50,150 50,250 C50,350 180,400 300,250 C420,100 580,100 700,250 C820,400 950,350 950,250 C950,150 820,100 700,250 C580,400 420,400 300,250 Z"
          fill={variant === 'emerald' ? 'url(#inf-grad-emerald)' : 'url(#inf-grad-blue)'}
          stroke="url(#inf-stroke-grad)"
          strokeWidth="1.5"
        />

        {/* Subtle Concentric Engineering Geometry Ring */}
        <path
          d="M310,250 C195,115 75,160 75,250 C75,340 195,385 310,250 C425,115 575,115 690,250 C805,385 925,340 925,250 C925,160 805,115 690,250 C575,385 425,385 310,250 Z"
          fill="none"
          stroke="rgba(255, 255, 255, 0.15)"
          strokeWidth="0.8"
          strokeDasharray="6 8"
        />
      </svg>
    </div>
  );
};
