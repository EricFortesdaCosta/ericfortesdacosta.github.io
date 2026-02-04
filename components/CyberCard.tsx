import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const CyberCard: React.FC<Props> = ({ children, className = "", hoverEffect = true }) => {
  return (
    <div className={`
      relative bg-vs-sidebar border border-vs-border
      ${hoverEffect ? 'hover:border-vs-blue transition-colors duration-200' : ''}
      ${className}
    `}>
      {/* Line numbers decoration (optional visual cue) */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-vs-blue/50 transition-colors" />
      
      <div className="p-4 md:p-5">
        {children}
      </div>
    </div>
  );
};