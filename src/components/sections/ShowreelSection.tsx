'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ShowreelSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [countdown, setCountdown] = useState<number | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Cinema countdown leader animation hook
  useEffect(() => {
    if (countdown === null) return;
    
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 900); // slightly faster than 1s for premium snappiness
      return () => clearTimeout(timer);
    } else {
      setCountdown(null);
      setIsPlaying(true);
      const video = videoRef.current;
      if (video) {
        video.currentTime = 0;
        video.play().catch(() => {});
      }
    }
  }, [countdown]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video) {
      const currentProgress = (video.currentTime / video.duration) * 100;
      setProgress(currentProgress || 0);
    }
  };

  const handleTimelineClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (video) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const clickPercent = clickX / width;
      video.currentTime = clickPercent * video.duration;
      setProgress(clickPercent * 100);
    }
  };

  const handleOpenModal = () => {
    setIsOpen(true);
    setCountdown(3);
    setIsPlaying(false);
    setProgress(0);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setIsPlaying(false);
    setCountdown(null);
  };

  return (
    <>
      <section
        id="showreel"
        className="relative h-[60vh] md:h-[80vh] flex items-center justify-center bg-brand-black overflow-hidden"
      >
        {/* Background Video (Muted, Ambient) */}
        <div className="absolute inset-0 bg-brand-black/45 z-10 pointer-events-none" />
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          src="https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Center CTA Content */}
        <div className="relative z-20 flex flex-col items-center gap-6 text-center px-6">
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/50 font-general">
            Blurry Visuals &copy; 2026
          </span>
          <h2 className="font-clash text-3xl md:text-6xl font-bold uppercase tracking-tight text-white max-w-2xl leading-[1.1]">
            THE SHOWREEL
          </h2>
          
          {/* Pulsing Play Button */}
          <button
            onClick={handleOpenModal}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:scale-110 hover:bg-brand-blue hover:text-white transition-all duration-500 cursor-pointer shadow-2xl group"
            aria-label="Play Showreel"
          >
            <svg
              className="w-6 h-6 md:w-8 md:h-8 fill-current translate-x-0.5 transition-transform duration-300 group-hover:scale-95"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </section>

      {/* Fullscreen Video Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center p-4 md:p-12"
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-6 right-6 md:top-10 md:right-10 z-50 text-white/70 hover:text-white transition-colors cursor-pointer w-10 h-10 border border-white/10 rounded-full flex items-center justify-center bg-brand-gray-light/10 backdrop-blur-sm"
              aria-label="Close Showreel"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video Player Box */}
            <div className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden bg-brand-black shadow-2xl border border-white/10">
              <AnimatePresence>
                {countdown !== null && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 z-30 bg-brand-black flex flex-col items-center justify-center pointer-events-none select-none"
                  >
                    {/* Viewfinder crosshairs & guides */}
                    <div className="absolute inset-6 border border-brand-silver/5 flex items-center justify-center">
                      <div className="w-6 h-[1px] bg-brand-silver/10 absolute" />
                      <div className="h-6 w-[1px] bg-brand-silver/10 absolute" />
                    </div>
                    
                    {/* Circle sweep leader countdown */}
                    <div className="w-36 h-36 rounded-full border border-brand-silver/20 flex items-center justify-center relative overflow-hidden">
                      {/* Radar sweep indicator */}
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-0 rounded-full border-t border-brand-blue origin-center"
                      />
                      
                      {/* Rotating line sweep inside */}
                      <div className="absolute w-[1px] h-full bg-brand-surface/15 rotate-45" />
                      <div className="absolute h-[1px] w-full bg-brand-surface/15 rotate-45" />

                      {/* Large Center Number */}
                      <motion.span
                        key={countdown}
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                        className="font-clash text-5xl font-bold text-brand-gray-light relative z-10"
                      >
                        {countdown}
                      </motion.span>
                    </div>

                    <span className="text-[8px] font-mono tracking-[0.3em] text-brand-silver/40 uppercase mt-6">
                      LEADER COUNTDOWN // BLURRY_REEL_01
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                src="https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4"
                autoPlay={isPlaying}
                onTimeUpdate={handleTimeUpdate}
                onClick={togglePlay}
              />

              {/* Minimal HUD overlay controls */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex flex-col gap-4 z-20 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Custom Progress Bar */}
                <div
                  onClick={handleTimelineClick}
                  className="w-full h-1 bg-brand-silver/20 rounded-full overflow-hidden cursor-pointer relative group/timeline"
                >
                  <div
                    className="h-full bg-brand-blue transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-white text-xs">
                  {/* Left Controls */}
                  <div className="flex items-center gap-6">
                    <button onClick={togglePlay} className="hover:text-brand-silver transition-colors cursor-pointer">
                      {isPlaying ? (
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                    </button>

                    <span className="text-[10px] tracking-widest text-white/50 uppercase">BLURRY VISUALS // REEL 2026</span>
                  </div>

                  {/* Right Controls */}
                  <div className="flex items-center gap-4">
                    <button onClick={toggleMute} className="hover:text-brand-silver transition-colors cursor-pointer">
                      {isMuted ? (
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zM4 9v6h4l5 5V4L8 9H4z" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M3 9v6h4l5 5V4L8 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
