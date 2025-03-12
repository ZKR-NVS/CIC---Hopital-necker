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
        <stop offset="0%" style={{ stopColor: '#0ea5e9', stopOpacity: 0.8 }} />
        <stop offset="100%" style={{ stopColor: '#0284c7', stopOpacity: 0.8 }} />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#gradient)" />
    <path
      d="M0 400C0 400 400 300 800 300C1200 300 1440 400 1440 400V800H0V400Z"
      fill="white"
      fillOpacity="0.1"
    />
  </svg>
);

export default HeroBackground; 