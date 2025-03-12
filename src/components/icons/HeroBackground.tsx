import React from 'react';

const HeroBackground = ({ className = "w-full h-full" }) => (
  <svg
    className={className}
    viewBox="0 0 1440 800"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#1a365d', stopOpacity: 0.95 }} />
        <stop offset="100%" style={{ stopColor: '#2c5282', stopOpacity: 0.95 }} />
      </linearGradient>
      <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#60a5fa', stopOpacity: 0.2 }} />
        <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.2 }} />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#gradient)" />
    <path
      d="M0 0L1440 800H0V0Z"
      fill="url(#accent)"
      fillOpacity="0.1"
    />
    <path
      d="M1440 0L0 800H1440V0Z"
      fill="url(#accent)"
      fillOpacity="0.05"
    />
    <circle cx="720" cy="400" r="300" fill="white" fillOpacity="0.03" />
    <circle cx="720" cy="400" r="200" fill="white" fillOpacity="0.02" />
  </svg>
);

export default HeroBackground; 