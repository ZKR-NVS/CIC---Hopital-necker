import React from 'react';

const LogoIcon = ({ className = "w-12 h-12" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export default LogoIcon; 