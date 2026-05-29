'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  dark?: boolean;
}

export default function GlassCard({
  children,
  className = '',
  hoverEffect = true,
  dark = false,
}: GlassCardProps) {
  const baseStyle = dark ? 'glass-effect-dark' : 'glass-effect';
  
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -6, boxShadow: '0 20px 40px -15px rgba(0,0,0,0.05)' } : undefined}
      transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
      className={`rounded-2xl p-6 md:p-8 transition-shadow duration-500 ${baseStyle} ${className}`}
    >
      {children}
    </motion.div>
  );
}
