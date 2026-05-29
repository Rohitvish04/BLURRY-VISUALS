'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%',
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-brand-black text-brand-gray-light"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 90 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1], delay: 0.2 }}
                className="font-clash text-2xl md:text-3xl tracking-[0.3em] font-semibold text-center"
              >
                BLURRY VISUALS
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 0.4 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
                className="text-[10px] tracking-[0.4em] uppercase text-brand-silver font-general"
              >
                Tokyo &times; Milan Cinema
              </motion.p>
            </div>
          </div>
          {/* Subtle elegant progress bar */}
          <div className="absolute bottom-20 left-1/2 w-48 h-[1px] bg-brand-gray-dark/50 -translate-x-1/2 overflow-hidden">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 1.8, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0 bg-brand-blue"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
