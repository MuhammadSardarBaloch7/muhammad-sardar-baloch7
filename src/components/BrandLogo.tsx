import React from 'react';
import { CONTACT_INFO } from '../utils/portfolioLogic';

interface BrandLogoProps {
  variant?: 'horizontal' | 'compact' | 'icon-only';
  className?: string;
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'horizontal',
  className = '',
  showSubtitle = true,
}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Precision Vector Browser Code Icon matching official logo */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg
          className="w-9 h-9 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-105"
          viewBox="0 0 54 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="msbLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5271FF" />
              <stop offset="50%" stopColor="#7B68FF" />
              <stop offset="100%" stopColor="#9B6DFF" />
            </linearGradient>
            <filter id="msbGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#5271FF" floodOpacity="0.35" />
            </filter>
          </defs>

          {/* Browser Window Body */}
          <rect
            x="5"
            y="7"
            width="40"
            height="34"
            rx="7"
            stroke="url(#msbLogoGrad)"
            strokeWidth="3.8"
            fill="#111A2E"
            filter="url(#msbGlow)"
          />

          {/* Browser Header Bar Dots */}
          <circle cx="11.5" cy="13.5" r="1.8" fill="#F4F7FF" fillOpacity="0.9" />
          <circle cx="16.5" cy="13.5" r="1.8" fill="#F4F7FF" fillOpacity="0.9" />
          <circle cx="21.5" cy="13.5" r="1.8" fill="#F4F7FF" fillOpacity="0.9" />

          {/* Top Address Line Accent (Cyan) */}
          <rect x="27" y="12.2" width="13.5" height="2.6" rx="1.3" fill="#65E7F5" />

          {/* Code Symbol < */}
          <path
            d="M17.5 22.5L12 26.5L17.5 30.5"
            stroke="url(#msbLogoGrad)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Code Slash / */}
          <path
            d="M23.5 20.5L20 33"
            stroke="url(#msbLogoGrad)"
            strokeWidth="3.2"
            strokeLinecap="round"
          />

          {/* Code Symbol > */}
          <path
            d="M26.5 22.5L32 26.5L26.5 30.5"
            stroke="url(#msbLogoGrad)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Modern Mouse Cursor Pointer at bottom-right */}
          <path
            d="M36 34L44.5 42.5L40.5 43.5L39.5 47.5L36 34Z"
            fill="url(#msbLogoGrad)"
            stroke="#111A2E"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>

        {/* Ambient Subtle Pulse */}
        <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#65E7F5] shadow-[0_0_8px_#65E7F5]" />
      </div>

      {variant !== 'icon-only' && (
        <div className="flex flex-col">
          <span className="font-display font-bold text-base sm:text-lg tracking-tight text-[#F4F7FF] group-hover:text-[#65E7F5] transition-colors leading-tight">
            {CONTACT_INFO.name}
          </span>
          {showSubtitle && (
            <span className="text-[11px] sm:text-xs text-[#AAB6CC] font-medium tracking-normal leading-tight">
              Website Developer &amp; Logo Designer
            </span>
          )}
        </div>
      )}
    </div>
  );
};
