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
        <stop offset="0%" style={{ stopColor: '#0c4a6e', stopOpacity: 0.95 }} />
        <stop offset="100%" style={{ stopColor: '#0369a1', stopOpacity: 0.95 }} />
      </linearGradient>
      <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#38bdf8', stopOpacity: 0.2 }} />
        <stop offset="100%" style={{ stopColor: '#0ea5e9', stopOpacity: 0.2 }} />
      </linearGradient>
      <linearGradient id="highlight" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#f0abfc', stopOpacity: 0.1 }} />
        <stop offset="100%" style={{ stopColor: '#e879f9', stopOpacity: 0.1 }} />
      </linearGradient>
    </defs>
    
    {/* Fond principal */}
    <rect width="100%" height="100%" fill="url(#gradient)" />
    
    {/* Formes géométriques */}
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
    
    {/* Cercles décoratifs */}
    <circle cx="720" cy="400" r="300" fill="url(#highlight)" fillOpacity="0.1" />
    <circle cx="720" cy="400" r="200" fill="url(#highlight)" fillOpacity="0.05" />
    
    {/* Lignes décoratives */}
    <path
      d="M0 200L1440 200"
      stroke="white"
      strokeOpacity="0.1"
      strokeWidth="1"
    />
    <path
      d="M0 400L1440 400"
      stroke="white"
      strokeOpacity="0.1"
      strokeWidth="1"
    />
    <path
      d="M0 600L1440 600"
      stroke="white"
      strokeOpacity="0.1"
      strokeWidth="1"
    />
    
    {/* Points décoratifs */}
    <circle cx="360" cy="200" r="2" fill="white" fillOpacity="0.2" />
    <circle cx="720" cy="400" r="2" fill="white" fillOpacity="0.2" />
    <circle cx="1080" cy="600" r="2" fill="white" fillOpacity="0.2" />
  </svg>
);

export default HeroBackground; 