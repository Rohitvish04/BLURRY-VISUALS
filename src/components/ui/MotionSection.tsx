'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface MotionSectionProps extends HTMLMotionProps<'section'> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export default function MotionSection({
  children,
  delay = 0,
  duration = 0.8,
  yOffset = 40,
  className = '',
  ...props
}: MotionSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration, ease: [0.215, 0.61, 0.355, 1] as const, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
}
