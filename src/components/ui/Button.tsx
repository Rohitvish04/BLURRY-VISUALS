'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  icon?: boolean;
}

export default function Button({
  variant = 'primary',
  children,
  icon = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'relative inline-flex items-center justify-center gap-2 overflow-hidden px-8 py-3.5 text-xs font-medium tracking-[0.25em] uppercase transition-all duration-500 rounded-full cursor-pointer font-general';

  const variants = {
    primary: 'bg-brand-black text-brand-gray-light border border-brand-black',
    secondary: 'bg-transparent text-brand-black border border-brand-silver/50 hover:border-brand-black',
    outline: 'bg-transparent text-brand-gray-light border border-brand-silver/30 hover:border-brand-silver',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} group ${className}`}
      {...props}
    >
      {/* Sliding background hover block */}
      {variant === 'primary' && (
        <span className="absolute inset-0 z-0 scale-y-0 bg-brand-blue transition-transform duration-500 ease-[0.76,0,0.24,1] origin-bottom group-hover:scale-y-100 group-hover:origin-top" />
      )}
      {variant === 'secondary' && (
        <span className="absolute inset-0 z-0 scale-y-0 bg-brand-black transition-transform duration-500 ease-[0.76,0,0.24,1] origin-bottom group-hover:scale-y-100 group-hover:origin-top" />
      )}
      {variant === 'outline' && (
        <span className="absolute inset-0 z-0 scale-y-0 bg-brand-blue transition-transform duration-500 ease-[0.76,0,0.24,1] origin-bottom group-hover:scale-y-100 group-hover:origin-top" />
      )}

      {/* Button content */}
      <span className={`relative z-10 flex items-center gap-2 transition-colors duration-500 
        ${variant === 'primary' ? 'group-hover:text-white' : ''} 
        ${variant === 'secondary' ? 'group-hover:text-brand-gray-light' : ''} 
        ${variant === 'outline' ? 'group-hover:text-white' : ''}`}
      >
        {children}
        {icon && (
          <svg
            className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        )}
      </span>
    </button>
  );
}
