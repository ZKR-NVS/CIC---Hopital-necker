import React from 'react';

const HospitalIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 21h18M3 7v14M21 7v14M6 21v-4M18 21v-4M6 7V3h12v4M6 7h12M6 7v14M18 7v14M9 11h6M9 15h6" />
  </svg>
);

export default HospitalIcon; 