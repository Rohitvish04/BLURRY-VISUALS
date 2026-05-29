'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Work', href: '#work' },
  { name: 'Services', href: '#services' },
  { name: 'Studio', href: '#studio' },
  { name: 'Journal', href: '#journal' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 
          ${isScrolled ? 'glass-nav py-4 shadow-sm' : 'bg-transparent py-6'}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <span className="font-clash text-lg md:text-xl font-semibold tracking-[0.2em] text-brand-black">
              BLURRY VISUALS
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-xs font-medium tracking-[0.2em] uppercase text-brand-black/75 hover:text-brand-black transition-colors duration-300 py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-black scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left" />
              </a>
            ))}
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-brand-black rounded-full px-5 py-2 text-[10px] font-semibold tracking-[0.25em] uppercase text-brand-gray-light bg-brand-black hover:bg-transparent hover:text-brand-black hover:border-brand-blue transition-all duration-500 cursor-pointer"
            >
              Start Project
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-between w-6 h-4 z-50 cursor-pointer"
            aria-label="Toggle Menu"
          >
            <span
              className={`w-full h-[1.5px] bg-brand-black transition-all duration-300 origin-left 
                ${isOpen ? 'rotate-45 translate-y-[1px]' : ''}`}
            />
            <span
              className={`w-full h-[1.5px] bg-brand-black transition-all duration-300 
                ${isOpen ? 'opacity-0 scale-x-0' : 'opacity-100'}`}
            />
            <span
              className={`w-full h-[1.5px] bg-brand-black transition-all duration-300 origin-left 
                ${isOpen ? '-rotate-45 -translate-y-[1px]' : ''}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-brand-bg-primary z-40 flex flex-col justify-center px-12 py-24 md:hidden"
          >
            <nav className="flex flex-col gap-8">
              {navLinks.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 + 0.2 }}
                  key={link.name}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-clash text-4xl font-semibold tracking-tight text-brand-black hover:opacity-50 transition-opacity"
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-16 pt-8 border-t border-brand-silver/20 flex flex-col gap-4 text-xs font-medium tracking-[0.1em] text-brand-black/55 uppercase font-general"
            >
              <span>Tokyo &times; Milan Office</span>
              <a href="mailto:hello@blurryvisuals.com" className="text-brand-black">
                hello@blurryvisuals.com
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
