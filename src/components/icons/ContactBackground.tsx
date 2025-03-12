import React from 'react';

const ContactBackground = ({ className = "w-full h-full" }) => (
  <svg
    className={className}
    viewBox="0 0 1440 800"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#0ea5e9', stopOpacity: 0.05 }} />
        <stop offset="100%" style={{ stopColor: '#0284c7', stopOpacity: 0.05 }} />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#gradient)" />
    <path
      d="M0 400C0 400 200 300 400 300C600 300 800 500 1000 500C1200 500 1440 400 1440 400V800H0V400Z"
      fill="white"
      fillOpacity="0.03"
    />
    <path
      d="M0 400C0 400 200 500 400 500C600 500 800 300 1000 300C1200 300 1440 400 1440 400V800H0V400Z"
      fill="white"
      fillOpacity="0.01"
    />
  </svg>
);

export default ContactBackground; 