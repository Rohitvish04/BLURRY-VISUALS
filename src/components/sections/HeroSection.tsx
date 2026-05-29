'use client';

import { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import Button from '../ui/Button';
import GlassCard from '../ui/GlassCard';

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [timecode, setTimecode] = useState('00:00:00:00');

  // Track mouse coordinates for smooth 3D parallax effect on floating cards
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / 35;
      const y = (e.clientY - window.innerHeight / 2) / 35;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animate the cinematic timecode at 24 fps
  useEffect(() => {
    let frame = 0;
    let sec = 12;
    let min = 4;
    let hr = 0;
    
    const interval = setInterval(() => {
      frame++;
      if (frame >= 24) {
        frame = 0;
        sec++;
        if (sec >= 60) {
          sec = 0;
          min++;
          if (min >= 60) {
            min = 0;
            hr++;
          }
        }
      }
      const pad = (n: number) => n.toString().padStart(2, '0');
      setTimecode(`${pad(hr)}:${pad(min)}:${pad(sec)}:${pad(frame)}`);
    }, 1000 / 24);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.4 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.215, 0.61, 0.355, 1] as const },
    },
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center bg-transparent overflow-hidden"
    >
      {/* 1. Fullscreen Background Video & Effects */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        
        {/* Slow Breathing Camera Zoom on Video */}
        <motion.video
          animate={{
            scale: [1.02, 1.07, 1.02],
          }}
          transition={{
            duration: 24,
            ease: 'linear',
            repeat: Infinity,
          }}
          className="w-full h-full object-cover filter brightness-[0.94] contrast-[1.02]"
          src="https://videos.pexels.com/video-files/3209663/3209663-hd_1920_1080_25fps.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Dual-Zone Gradient Blur Overlay (deep blur on left for text, soft cinematic DOF on right) */}
        <div className="absolute inset-0 flex flex-col md:flex-row z-10">
          {/* Left / Center: High opacity & deep blur */}
          <div className="w-full md:w-[60%] h-full bg-gradient-to-r from-brand-bg-primary via-brand-bg-primary/95 to-brand-bg-primary/80 backdrop-blur-[4px]" />
          {/* Right: Low opacity & soft blur */}
          <div className="w-full md:w-[40%] h-full bg-gradient-to-r from-brand-bg-primary/80 via-brand-bg-primary/10 to-transparent backdrop-blur-[1px]" />
        </div>

        {/* Cinematic Light Leak artifacts (animated orange/blue lens reflections) */}
        <motion.div
          animate={{
            opacity: [0.08, 0.22, 0.08],
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 16,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
          className="absolute top-[-15%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-brand-accent-cinematic/30 to-brand-blue/15 rounded-full blur-[110px] z-10"
        />

        <motion.div
          animate={{
            opacity: [0.05, 0.15, 0.05],
            x: [0, -40, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            ease: 'easeInOut',
            repeat: Infinity,
            delay: 2,
          }}
          className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-gradient-to-br from-brand-blue/15 to-brand-accent-cinematic/20 rounded-full blur-[90px] z-10"
        />

      </div>

      {/* Cinematic Viewfinder Overlay HUD */}
      <div className="absolute inset-4 md:inset-8 z-20 pointer-events-none select-none flex flex-col justify-between">
        {/* Corner Brackets */}
        <div className="absolute inset-0 flex flex-col justify-between">
          <div className="flex justify-between">
            <div className="w-4 h-4 border-t border-l border-brand-black/15" />
            <div className="w-4 h-4 border-t border-r border-brand-black/15" />
          </div>
          <div className="flex justify-between">
            <div className="w-4 h-4 border-b border-l border-brand-black/15" />
            <div className="w-4 h-4 border-b border-r border-brand-black/15" />
          </div>
        </div>

        {/* Viewfinder HUD Info */}
        <div className="w-full flex justify-between items-start text-[8px] font-mono text-brand-black/35 uppercase tracking-[0.2em] px-2 pt-1 md:px-4 md:pt-2">
          <div className="flex items-center gap-4">
            <span>FOCAL: 50.0MM</span>
            <span>SHUTTER: 1/48</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 font-bold text-red-600 animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping mr-0.5" />
              REC
            </span>
            <span>{timecode}</span>
          </div>
        </div>

        {/* Center Crosshair */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center text-brand-black/15 font-light text-xs font-sans">
          +
        </div>

        <div className="w-full flex justify-between items-end text-[8px] font-mono text-brand-black/35 uppercase tracking-[0.2em] px-2 pb-1 md:px-4 md:pb-2">
          <span>ISO 800</span>
          <span>FPS 24.00</span>
          <span>BATT 98%</span>
        </div>
      </div>

      {/* 2. Content Grid */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20 h-full">
        
        {/* Left Column: Editorial Typography */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start justify-center h-full text-left pt-16"
        >
          {/* Studio Label */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-brand-silver/20 rounded-full bg-brand-gray-light/60 backdrop-blur-sm mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-black">
              Tokyo &times; Milan Visual Production Studio
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-clash text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-brand-black leading-[1.05] mb-6"
          >
            Cinema Engineered <br />
            <span className="text-brand-black/55">For Modern</span> Storytelling
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base text-brand-black/70 leading-relaxed font-light max-w-xl mb-10"
          >
            Premium visual storytelling crafted for brands, artists, and cinematic digital experiences. 
            From concept development to master grading, we deliver high-fidelity productions designed to stand out.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
            <a href="#showreel">
              <Button variant="primary" icon={true}>
                View Reel
              </Button>
            </a>
            <a href="#contact">
              <Button variant="secondary">
                Start Project
              </Button>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Floating Cinematic HUD Cards (with mouse parallax) */}
        <div className="hidden lg:flex lg:col-span-5 relative w-full h-[500px] items-center justify-center">
          
          {/* Card 1: ARRI Workflow */}
          <motion.div
            animate={{
              x: mousePos.x * 0.8,
              y: mousePos.y * 0.8 - 120,
            }}
            transition={{ type: 'spring', stiffness: 75, damping: 20 }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute top-1/2 left-[5%] z-20"
          >
            <GlassCard hoverEffect={false} className="py-4 px-6 rounded-2xl shadow-xl border border-brand-silver/40 bg-brand-surface/45 w-[200px]">
              <span className="text-[9px] font-mono font-bold tracking-[0.2em] text-brand-blue uppercase block mb-1">CAM CONFIG</span>
              <h4 className="text-xs font-semibold tracking-wider text-brand-black uppercase mb-1">ARRI WORKFLOW</h4>
              <span className="text-[10px] text-brand-black/50 font-mono">Alexa LF RAW // 4.5K</span>
            </GlassCard>
          </motion.div>

          {/* Card 2: 8K Production */}
          <motion.div
            animate={{
              x: mousePos.x * -0.6 + 60,
              y: mousePos.y * -0.6 - 40,
            }}
            transition={{ type: 'spring', stiffness: 75, damping: 20 }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute top-1/2 right-[5%] z-20"
          >
            <GlassCard hoverEffect={false} className="py-4 px-6 rounded-2xl shadow-xl border border-brand-silver/40 bg-brand-surface/45 w-[200px]">
              <span className="text-[9px] font-mono font-bold tracking-[0.2em] text-brand-blue uppercase block mb-1">RESOLUTION</span>
              <h4 className="text-xs font-semibold tracking-wider text-brand-black uppercase mb-1">8K PRODUCTION</h4>
              <span className="text-[10px] text-brand-black/50 font-mono">Redcode RAW // 120fps</span>
            </GlassCard>
          </motion.div>

          {/* Card 3: VFX Pipeline */}
          <motion.div
            animate={{
              x: mousePos.x * 0.5 - 40,
              y: mousePos.y * 0.5 + 80,
            }}
            transition={{ type: 'spring', stiffness: 75, damping: 20 }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute top-1/2 left-[15%] z-20"
          >
            <GlassCard hoverEffect={false} className="py-4 px-6 rounded-2xl shadow-xl border border-brand-silver/40 bg-brand-surface/45 w-[200px]">
              <span className="text-[9px] font-mono font-bold tracking-[0.2em] text-brand-blue uppercase block mb-1">CG ENGINE</span>
              <h4 className="text-xs font-semibold tracking-wider text-brand-black uppercase mb-1">VFX PIPELINE</h4>
              <span className="text-[10px] text-brand-black/50 font-mono">Unreal 5.4 // ACES CG</span>
            </GlassCard>
          </motion.div>

          {/* Card 4: Prime Optics */}
          <motion.div
            animate={{
              x: mousePos.x * -0.9 + 40,
              y: mousePos.y * -0.9 + 160,
            }}
            transition={{ type: 'spring', stiffness: 75, damping: 20 }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute top-1/2 right-[10%] z-20"
          >
            <GlassCard hoverEffect={false} className="py-4 px-6 rounded-2xl shadow-xl border border-brand-silver/40 bg-brand-surface/45 w-[200px]">
              <span className="text-[9px] font-mono font-bold tracking-[0.2em] text-brand-blue uppercase block mb-1">GLASS SYSTEM</span>
              <h4 className="text-xs font-semibold tracking-wider text-brand-black uppercase mb-1">PRIME OPTICS</h4>
              <span className="text-[10px] text-brand-black/50 font-mono">Signature Primes // T1.8</span>
            </GlassCard>
          </motion.div>

        </div>
      </div>

      {/* 3. Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-[8px] font-semibold tracking-[0.3em] uppercase text-brand-black/40">Scroll</span>
        <div className="w-[1.5px] h-10 bg-brand-silver/30 overflow-hidden relative rounded-full">
          <motion.div
            animate={{
              y: ['-100%', '100%'],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-0 bottom-0 left-0 right-0 bg-brand-black"
          />
        </div>
      </div>
    </section>
  );
}
