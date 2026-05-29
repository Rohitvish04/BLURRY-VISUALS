'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MotionSection from '../ui/MotionSection';

interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  video: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Vibrant Fashion Editorial',
    category: 'Fashion',
    year: '2026',
    description: 'An editorial sensory journey through Milan’s high-fashion week.',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop',
    video: 'https://videos.pexels.com/video-files/3209663/3209663-hd_1920_1080_25fps.mp4',
  },
  {
    id: '2',
    title: 'Vision Summit Forum',
    category: 'Corporate Events',
    year: '2026',
    description: 'Deconstructing futuristic workspaces and corporate environmental design.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
    video: 'https://videos.pexels.com/video-files/2022395/2022395-hd_1920_1080_30fps.mp4',
  },
  {
    id: '3',
    title: 'Food Photography',
    category: 'Restaurants',
    year: '2025',
    description: 'Exploring macro capture of light, steam, and movement in high-end culinary arts.',
    image: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=1200&auto=format&fit=crop',
    video: 'https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4',
  },
  {
    id: '4',
    title: 'Gourmet Delights',
    category: 'Restaurants',
    year: '2025',
    description: 'Commercial film for Michelin-starred plating and culinary storytelling.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop',
    video: 'https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4',
  },
  {
    id: '5',
    title: 'Healthcare Innovation',
    category: 'Healthcare',
    year: '2026',
    description: 'Visualizing state-of-the-art medical systems and human clinical precision.',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?q=80&w=1200&auto=format&fit=crop',
    video: 'https://videos.pexels.com/video-files/3209663/3209663-hd_1920_1080_25fps.mp4',
  },
  {
    id: '6',
    title: 'Annual Conference',
    category: 'Corporate Events',
    year: '2025',
    description: 'High-production event cinematic covering visual keynote speakers.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    video: 'https://videos.pexels.com/video-files/2022395/2022395-hd_1920_1080_30fps.mp4',
  },
  {
    id: '7',
    title: 'Editorial Fashion Story',
    category: 'Fashion',
    year: '2026',
    description: 'Dynamic coverage of seasonal runway showcases and backstage treatments.',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1200&auto=format&fit=crop',
    video: 'https://videos.pexels.com/video-files/3209663/3209663-hd_1920_1080_25fps.mp4',
  },
  {
    id: '8',
    title: 'Menswear Collection',
    category: 'Fashion',
    year: '2025',
    description: 'Studio campaign presenting high-contrast monochrome design textures.',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1200&auto=format&fit=crop',
    video: 'https://videos.pexels.com/video-files/3209663/3209663-hd_1920_1080_25fps.mp4',
  },
  {
    id: '9',
    title: 'The Silent Horizon',
    category: 'Documentary',
    year: '2025',
    description: 'Exploring the raw landscape of the Nordic circle and human resilience.',
    image: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1200&auto=format&fit=crop',
    video: 'https://videos.pexels.com/video-files/3015511/3015511-sd_960_540_24fps.mp4',
  },
  {
    id: '10',
    title: 'Founder Story',
    category: 'Founder Films',
    year: '2026',
    description: 'Interviews and visual storytelling of modern technology executives.',
    image: 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80&w=1200&auto=format&fit=crop',
    video: 'https://videos.pexels.com/video-files/3015511/3015511-sd_960_540_24fps.mp4',
  },
];

const categories = [
  { label: 'All Work', value: 'All' },
  { label: 'Documentary', value: 'Documentary' },
  { label: 'Founder Films', value: 'Founder Films' },
  { label: 'Restaurants', value: 'Restaurants' },
  { label: 'Healthcare', value: 'Healthcare' },
  { label: 'Corporate Events', value: 'Corporate Events' },
  { label: 'Fashion', value: 'Fashion' },
];

export default function FeaturedWork() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  // Filter projects by category
  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  // Reset active index when category changes
  useEffect(() => {
    setActiveIndex(0);
  }, [activeCategory]);

  const N = filteredProjects.length;
  const activeProject = filteredProjects[activeIndex] || filteredProjects[0];

  // Auto-play active video on hover, and pause on leave
  useEffect(() => {
    if (hoveredId) {
      const video = videoRefs.current[hoveredId];
      if (video) {
        video.currentTime = 0;
        video.play().catch(() => {});
      }
    } else {
      // Pause all videos when not hovering
      Object.values(videoRefs.current).forEach((video) => {
        if (video) {
          video.pause();
        }
      });
    }
  }, [hoveredId]);

  const handlePrev = () => {
    if (N <= 1) return;
    setActiveIndex((prev) => (prev - 1 + N) % N);
  };

  const handleNext = () => {
    if (N <= 1) return;
    setActiveIndex((prev) => (prev + 1) % N);
  };

  // Autoplay slideshow timer (slides every 4 seconds)
  useEffect(() => {
    if (N <= 1 || isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % N);
    }, 4000);
    return () => clearInterval(interval);
  }, [N, isPaused]);

  return (
    <MotionSection
      id="work"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full h-[75vh] sm:h-[80vh] md:h-[90vh] flex flex-col justify-between py-12 overflow-hidden bg-brand-black select-none"
    >
      <style>{`
        .motion-slider-track {
          --card-width: 170px;
          --card-gap: 16px;
        }
        @media (min-width: 768px) {
          .motion-slider-track {
            --card-width: 250px;
            --card-gap: 24px;
          }
        }
      `}</style>

      {/* 1. Widescreen Cross-Fading Background Stills */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          {activeProject && (
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute inset-0"
            >
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-full object-cover filter brightness-[0.25] contrast-[1.08] saturate-[0.85]"
              />
            </motion.div>
          )}
        </AnimatePresence>
        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-black/35 z-1 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/60 z-2 pointer-events-none" />
      </div>

      {/* 2. Section Header (Centered Overlay) */}
      <div className="relative z-10 text-center px-6">
        <span className="text-[10px] font-semibold tracking-[0.3em] text-white/50 uppercase block mb-2 sm:mb-3 font-general">
          Selected Projects
        </span>
        <h2 className="font-clash text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-2 sm:mb-3">
          Our Work
        </h2>
        <p className="text-white/40 font-light text-[10px] sm:text-xs tracking-wider">
          Browse the highlights &mdash; click any project to step inside
        </p>
      </div>

      {/* 3. Slider Track Overlay & Interactive Cards */}
      <div className="relative z-10 flex items-center justify-center w-full h-[220px] sm:h-[280px] md:h-[360px] overflow-visible">
        
        {/* Navigation Arrows (Overlap on Viewport Sides) */}
        {N > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-[8%] lg:left-[12%] z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 bg-black/40 backdrop-blur-md flex items-center justify-center text-white cursor-pointer hover:bg-white hover:text-brand-black hover:border-white transition-all active:scale-95"
              aria-label="Previous Project"
            >
              <svg className="w-4 h-4 fill-current rotate-180" viewBox="0 0 24 24">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 md:right-[8%] lg:right-[12%] z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 bg-black/40 backdrop-blur-md flex items-center justify-center text-white cursor-pointer hover:bg-white hover:text-brand-black hover:border-white transition-all active:scale-95"
              aria-label="Next Project"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
              </svg>
            </button>
          </>
        )}

        {/* Sliding Cards Track */}
        <div
          className="motion-slider-track flex items-center absolute left-0 right-0 h-full transition-transform duration-700 ease-[0.25,1,0.5,1] will-change-transform"
          style={{
            transform: `translateX(calc(50% - var(--card-width) / 2 - ${activeIndex} * (var(--card-width) + var(--card-gap))))`,
          }}
        >
          {filteredProjects.map((project, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={project.id}
                onClick={() => setActiveIndex(idx)}
                onMouseEnter={() => isActive && setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative shrink-0 rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-[0.25,1,0.5,1]
                  w-[var(--card-width)] h-[85%] md:h-full
                  ${isActive 
                    ? 'scale-100 border-[3px] md:border-4 border-white shadow-2xl opacity-100 z-10 filter-none' 
                    : 'scale-[0.82] opacity-35 border-2 border-transparent filter grayscale hover:opacity-50 blur-[0.5px]'}`}
              >
                {/* Still image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Video Playback (Muted, on Active Card Hover) */}
                <video
                  ref={(el) => { videoRefs.current[project.id] = el; }}
                  src={project.video}
                  loop
                  muted
                  playsInline
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-600 pointer-events-none z-15
                    ${hoveredId === project.id ? 'opacity-100' : 'opacity-0'}`}
                />

                {/* Subtle vignette inside card */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-20 pointer-events-none" />

                {/* Card Title Label (Visible inside the active card) */}
                <div className={`absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 z-25 text-left transition-all duration-500
                  ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
                >
                  <span className="text-[7px] font-mono font-bold tracking-[0.25em] text-brand-blue uppercase block mb-1">
                    {project.category}
                  </span>
                  <h3 className="font-clash text-xs sm:text-sm font-bold uppercase tracking-wider text-white line-clamp-2">
                    {project.title}
                  </h3>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* 4. Filter Pills & Category Links (Bottom aligned overlay) */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 mt-4">
        {/* Category selector row */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 md:gap-2.5 max-w-2xl mx-auto py-2 no-scrollbar overflow-x-auto">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`text-[9px] md:text-[10px] font-semibold tracking-widest px-4 py-2 rounded-full transition-all duration-300 cursor-pointer uppercase
                  ${isActive 
                    ? 'bg-white text-brand-black shadow-sm scale-102 font-bold' 
                    : 'bg-white/5 border border-white/5 text-white/55 hover:text-white hover:bg-white/10'}`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

    </MotionSection>
  );
}
