'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MotionSection from '../ui/MotionSection';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  brand: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Blurry Visuals redefined what our commercial campaigns look like. Their attention to detail, from script staging to the final Resolve grade, was absolutely flawless.",
    author: "Elena Rossi",
    role: "Head of Brand",
    brand: "Audemars Milan",
  },
  {
    quote: "The ARRI Alexa workflow they deployed for our fashion campaign was stellar. They delivered cinema files with colors that felt alive, deep, and beautifully textured.",
    author: "Kenji Sato",
    role: "Creative Director",
    brand: "Shibuya Couture",
  },
  {
    quote: "Their post-production pipeline handled complex CGI and VFX integration effortlessly. A production team that understands both narrative art and technical science.",
    author: "Arthur Pendelton",
    role: "VFX Producer",
    brand: "Netflix Global",
  },
];

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const handleNext = () => {
    setDirection(1);
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 100 : -100,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -100 : 100,
    }),
  };

  return (
    <MotionSection
      id="testimonials"
      className="bg-brand-gray-light py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative flex flex-col items-center">
        
        {/* Quote Icon Indicator */}
        <span className="font-clash text-8xl text-brand-silver/40 font-semibold select-none leading-none mb-6">
          &ldquo;
        </span>

        {/* Quotes Frame */}
        <div className="relative w-full min-h-[220px] md:min-h-[180px] flex items-center justify-center text-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIdx}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
              className="absolute w-full px-4 md:px-12"
            >
              <p className="font-clash text-lg md:text-2xl text-brand-black font-medium leading-relaxed tracking-wide mb-8">
                {testimonials[activeIdx].quote}
              </p>
              <div className="flex flex-col items-center gap-1">
                <span className="font-general text-xs font-semibold uppercase tracking-widest text-brand-black">
                  {testimonials[activeIdx].author}
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-brand-black/50 uppercase">
                  {testimonials[activeIdx].role} &mdash; {testimonials[activeIdx].brand}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider Controls */}
        <div className="flex items-center gap-8 mt-12 z-20">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-brand-silver/50 flex items-center justify-center text-brand-black/60 hover:text-brand-blue hover:border-brand-blue transition-all cursor-pointer bg-brand-surface/50"
            aria-label="Previous Slide"
          >
            <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Page Counter */}
          <span className="font-mono text-xs font-semibold tracking-widest text-brand-black">
            0{activeIdx + 1} / 0{testimonials.length}
          </span>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-brand-silver/50 flex items-center justify-center text-brand-black/60 hover:text-brand-blue hover:border-brand-blue transition-all cursor-pointer bg-brand-surface/50"
            aria-label="Next Slide"
          >
            <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </MotionSection>
  );
}
