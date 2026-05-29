'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MotionSection from '../ui/MotionSection';

interface StillPhoto {
  id: string;
  title: string;
  location: string;
  camera: string;
  lens: string;
  iso: string;
  aperture: string;
  shutter: string;
  image: string;
  colSpan: string; // for asymmetrical layouts
  aspectRatio: string;
}

const stills: StillPhoto[] = [
  {
    id: '1',
    title: 'Neon Drift',
    location: 'Shinjuku, Tokyo',
    camera: 'Leica M11',
    lens: 'Summilux 35mm f/1.4',
    iso: 'ISO 400',
    aperture: 'f/1.4',
    shutter: '1/125s',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?q=80&w=1200&auto=format&fit=crop',
    colSpan: 'md:col-span-8',
    aspectRatio: 'aspect-[16/10]',
  },
  {
    id: '2',
    title: 'Architectural Depth',
    location: 'Duomo, Milan',
    camera: 'Hasselblad X2D',
    lens: 'XCD 38mm f/2.5',
    iso: 'ISO 64',
    aperture: 'f/4.0',
    shutter: '1/250s',
    image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=1200&auto=format&fit=crop',
    colSpan: 'md:col-span-4',
    aspectRatio: 'aspect-[3/4]',
  },
  {
    id: '3',
    title: 'Shadow play',
    location: 'Porta Nuova, Milan',
    camera: 'Leica SL3',
    lens: 'Apo-Summicron 50mm f/2.0',
    iso: 'ISO 100',
    aperture: 'f/2.0',
    shutter: '1/1000s',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    colSpan: 'md:col-span-4',
    aspectRatio: 'aspect-[3/4]',
  },
  {
    id: '4',
    title: 'Backlit Sequence',
    location: 'Set A, Tokyo',
    camera: 'ARRI Alexa Mini LF',
    lens: 'Signature Prime 58mm',
    iso: 'ISO 800',
    aperture: 'T1.8',
    shutter: '1/48s',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop',
    colSpan: 'md:col-span-8',
    aspectRatio: 'aspect-[16/10]',
  },
  {
    id: '5',
    title: 'Velocity Glow',
    location: 'Harajuku Tunnel',
    camera: 'RED V-Raptor',
    lens: 'Cooke S8/i 32mm',
    iso: 'ISO 800',
    aperture: 'T1.4',
    shutter: '1/96s',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop',
    colSpan: 'md:col-span-6',
    aspectRatio: 'aspect-[4/3]',
  },
  {
    id: '6',
    title: 'Refracted Light',
    location: 'Studio Brera, Milan',
    camera: 'Hasselblad X2D',
    lens: 'XCD 90mm f/2.5',
    iso: 'ISO 100',
    aperture: 'f/2.8',
    shutter: '1/180s',
    image: 'https://images.unsplash.com/photo-1617791160505-6f006e121980?q=80&w=1200&auto=format&fit=crop',
    colSpan: 'md:col-span-6',
    aspectRatio: 'aspect-[4/3]',
  },
];

export default function PhotosSection() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  // Close lightbox on Escape, navigate on Arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === 'Escape') {
        setSelectedIdx(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedIdx((prev) => (prev !== null ? (prev + 1) % stills.length : null));
      } else if (e.key === 'ArrowLeft') {
        setSelectedIdx((prev) => (prev !== null ? (prev - 1 + stills.length) % stills.length : null));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx]);

  const activePhoto = selectedIdx !== null ? stills[selectedIdx] : null;

  return (
    <MotionSection
      id="stills"
      className="bg-transparent py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-24">
          <span className="text-[10px] font-semibold tracking-[0.25em] text-brand-text-muted uppercase block mb-3 font-general">
            Frame Captures
          </span>
          <h2 className="font-clash text-3xl md:text-5xl font-bold uppercase tracking-tight text-brand-text-primary mb-4">
            CINEMATIC STILLS & PHOTOGRAPHY
          </h2>
          <p className="text-brand-text-secondary font-light text-sm md:text-base leading-relaxed">
            Captured moments of light, shadow, and architectural symmetry. High-fidelity editorial frames shot on medium format and prime cinema glass on and off set.
          </p>
        </div>

        {/* Asymmetrical Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
          {stills.map((photo, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.08, ease: [0.215, 0.61, 0.355, 1] as const }}
              key={photo.id}
              onClick={() => setSelectedIdx(idx)}
              className={`w-full group ${photo.colSpan} ${photo.aspectRatio} relative overflow-hidden rounded-3xl bg-brand-surface cursor-pointer shadow-md`}
            >
              {/* Image Still */}
              <img
                src={photo.image}
                alt={photo.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
              />

              {/* Glass HUD Overlay (Reveals on Hover) */}
              <div className="absolute inset-0 bg-brand-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col justify-between p-6">
                
                {/* Top Corner Metadata */}
                <div className="flex justify-between items-start text-[8px] font-mono text-white/70 uppercase tracking-widest">
                  <span>LOC // {photo.location}</span>
                  <span>{photo.camera}</span>
                </div>

                {/* Bottom Title & Lens HUD */}
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="font-clash text-base md:text-lg font-medium text-white uppercase tracking-wide mb-1">
                      {photo.title}
                    </h3>
                    <p className="text-[10px] font-mono text-white/60 tracking-wider">
                      {photo.lens} &middot; {photo.aperture}
                    </p>
                  </div>

                  {/* Circular Zoom Icon */}
                  <div className="w-8 h-8 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 group-hover:bg-white group-hover:text-brand-black">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedIdx !== null && activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 select-none"
          >
            {/* Close Overlay Click */}
            <div className="absolute inset-0 z-10" onClick={() => setSelectedIdx(null)} />

            {/* Top Close Button */}
            <button
              onClick={() => setSelectedIdx(null)}
              className="absolute top-6 right-6 md:top-10 md:right-10 z-30 text-white/70 hover:text-white transition-colors cursor-pointer w-10 h-10 border border-white/10 rounded-full flex items-center justify-center bg-white/5 backdrop-blur-sm"
              aria-label="Close Lightbox"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Left Navigate Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIdx((prev) => (prev !== null ? (prev - 1 + stills.length) % stills.length : null));
              }}
              className="absolute left-4 md:left-8 z-30 text-white/70 hover:text-white transition-colors cursor-pointer w-12 h-12 border border-white/10 rounded-full flex items-center justify-center bg-white/5 backdrop-blur-sm"
              aria-label="Previous Photo"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Navigate Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIdx((prev) => (prev !== null ? (prev + 1) % stills.length : null));
              }}
              className="absolute right-4 md:right-8 z-30 text-white/70 hover:text-white transition-colors cursor-pointer w-12 h-12 border border-white/10 rounded-full flex items-center justify-center bg-white/5 backdrop-blur-sm"
              aria-label="Next Photo"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Content Container */}
            <div className="relative z-20 w-full max-w-5xl flex flex-col items-center gap-6">
              
              {/* Main Expanded Image */}
              <div className="relative max-h-[70vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex items-center justify-center bg-brand-black">
                <motion.img
                  key={activePhoto.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  className="max-h-[70vh] object-contain w-auto h-auto rounded-2xl"
                />
              </div>

              {/* Bottom Glassmorphism Metadata Sheet */}
              <motion.div
                key={`hud-${activePhoto.id}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                className="w-full max-w-3xl glass-effect-dark rounded-2xl p-6 border border-white/10 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div>
                  <span className="text-[9px] font-mono font-bold tracking-[0.25em] text-brand-blue uppercase block mb-1">
                    STILLS ARCHIVE // 0{selectedIdx + 1}
                  </span>
                  <h3 className="font-clash text-lg md:text-xl font-bold uppercase tracking-wider text-white">
                    {activePhoto.title}
                  </h3>
                  <span className="text-xs text-white/50 font-light mt-1 block">
                    Captured in {activePhoto.location}
                  </span>
                </div>

                {/* Camera EXIF Details HUD */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-8 text-[9px] font-mono text-white/70 uppercase tracking-widest">
                  <div className="flex flex-col">
                    <span className="text-white/40 mb-0.5">CAMERA</span>
                    <span>{activePhoto.camera}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white/40 mb-0.5">LENS</span>
                    <span>{activePhoto.lens.split(' ').slice(0, 1).join('')} {activePhoto.lens.split(' ').slice(1).join(' ')}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white/40 mb-0.5">ISO</span>
                    <span>{activePhoto.iso}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white/40 mb-0.5">SHUTTER</span>
                    <span>{activePhoto.shutter}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white/40 mb-0.5">APERTURE</span>
                    <span>{activePhoto.aperture}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white/40 mb-0.5">INDEX</span>
                    <span>0{selectedIdx + 1} / 0{stills.length}</span>
                  </div>
                </div>

              </motion.div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </MotionSection>
  );
}
