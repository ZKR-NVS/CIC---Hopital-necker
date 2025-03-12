import React from 'react';

const BabyIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v8M8 12h8" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export default BabyIcon; 