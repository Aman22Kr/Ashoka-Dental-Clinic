import React from 'react';

interface AshokaLogoProps {
  theme?: 'light' | 'dark';
  className?: string;
  clinicName?: string;
}

export const AshokaLogo: React.FC<AshokaLogoProps> = ({ 
  theme = 'light',
  className = '',
  clinicName = 'Ashoka Dental Clinic'
}) => {
  const isDark = theme === 'dark';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Icon mark */}
      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-teal-700 via-teal-800 to-emerald-900 text-white flex items-center justify-center shadow-md shadow-teal-900/15 ring-2 ring-teal-500/20 shrink-0">
        <svg 
          viewBox="0 0 24 24" 
          className="w-6 h-6 text-teal-100" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          {/* Stylized Tooth Mark */}
          <path d="M12 2C8 2 6 4.5 6 8c0 3 1.5 5 2 9 .4 3.2 2 4 4 4s3.6-.8 4-4c.5-4 2-6 2-9 0-3.5-2-6-6-6z" />
          <path d="M10 8c.5 1 1.5 1.5 2 1.5s1.5-.5 2-1.5" strokeWidth="1.5" strokeOpacity="0.8" />
        </svg>
      </div>

      {/* Brand Wordmark */}
      <div className="flex flex-col">
        <span className={`font-outfit text-base sm:text-lg font-bold tracking-tight leading-none ${
          isDark ? 'text-white' : 'text-[#173e3a]'
        }`}>
          {clinicName}
        </span>
        <span className={`text-[10px] sm:text-[11px] font-medium tracking-wider uppercase mt-1 leading-none ${
          isDark ? 'text-teal-300/80' : 'text-teal-700'
        }`}>
          Modern Family & Implant Dentistry
        </span>
      </div>
    </div>
  );
};
