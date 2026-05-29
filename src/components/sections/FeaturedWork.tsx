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
    title: 'Editorial Fashion Show',
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
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

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

  // Auto-play active video when hovered
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isHovered) {
      video.currentTime = 0;
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isHovered, activeIndex]);

  const handlePrev = () => {
    if (N <= 1) return;
    setActiveIndex((prev) => (prev - 1 + N) % N);
  };

  const handleNext = () => {
    if (N <= 1) return;
    setActiveIndex((prev) => (prev + 1) % N);
  };

  // Helper to determine indices
  const prevIndex = (activeIndex - 1 + N) % N;
  const nextIndex = (activeIndex + 1) % N;

  const prevProject = filteredProjects[prevIndex];
  const nextProject = filteredProjects[nextIndex];

  return (
    <MotionSection
      id="work"
      className="bg-brand-bg-secondary py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <span className="text-[10px] font-semibold tracking-[0.25em] text-brand-text-muted uppercase block mb-3 font-general">
            Selected Projects
          </span>
          <h2 className="font-clash text-4xl md:text-5xl font-bold uppercase tracking-tight text-brand-text-primary mb-4">
            Our Work
          </h2>
          <p className="text-brand-text-secondary font-light text-xs md:text-sm max-w-xl mx-auto">
            Browse the highlights &mdash; click any project to step inside
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12 md:mb-16 max-w-4xl mx-auto px-4">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`text-[10px] md:text-xs font-semibold tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer
                  ${isActive 
                    ? 'bg-brand-black text-white shadow-sm scale-102' 
                    : 'bg-brand-surface/40 text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-surface/75'}`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Slider Deck Container */}
        <div className="relative flex items-center justify-center w-full max-w-7xl mx-auto h-[320px] sm:h-[420px] md:h-[550px] px-2 sm:px-8 gap-4 sm:gap-6 md:gap-8 overflow-hidden select-none">
          
          {/* Previous Card (Left side, cropped & greyed out) */}
          {N > 1 && prevProject && (
            <motion.div
              onClick={handlePrev}
              className="hidden md:flex relative w-[18%] h-[85%] rounded-3xl overflow-hidden cursor-pointer opacity-30 hover:opacity-50 filter grayscale transition-all duration-500 shrink-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 0.3, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              key={`prev-${prevProject.id}`}
            >
              <img
                src={prevProject.image}
                alt={prevProject.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-black/20" />
              {/* Back Arrow button */}
              <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full border border-white/30 bg-black/40 backdrop-blur-sm flex items-center justify-center text-white z-10">
                <svg className="w-4 h-4 fill-current rotate-180" viewBox="0 0 24 24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </div>
            </motion.div>
          )}

          {/* Active Card (Center, wide & full-color) */}
          <AnimatePresence mode="wait">
            {activeProject && (
              <motion.div
                className="relative w-full md:w-[64%] h-full rounded-3xl overflow-hidden bg-brand-black shadow-2xl shrink-0 cursor-pointer"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                key={`active-${activeProject.id}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Image still */}
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
                />

                {/* Video Playback (on Hover) */}
                <video
                  ref={videoRef}
                  src={activeProject.video}
                  loop
                  muted
                  playsInline
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 pointer-events-none z-10
                    ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                />

                {/* Overlay vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-20" />

                {/* Left/Right controls (shown on mobile, overlap on sides) */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="md:hidden absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center text-white z-30 active:scale-95 transition-transform"
                >
                  <svg className="w-4 h-4 fill-current rotate-180" viewBox="0 0 24 24">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                  </svg>
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center text-white z-30 active:scale-95 transition-transform"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                  </svg>
                </button>

                {/* Project Metadata HUD */}
                <div className="absolute top-6 left-6 right-6 z-25 flex justify-between items-center text-[8px] sm:text-[9px] font-mono text-white/50 tracking-widest uppercase">
                  <span>CLASSIFICATION // {activeProject.category}</span>
                  <span>{activeProject.year}</span>
                </div>

                {/* Project Title & Description (Bottom) */}
                <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 z-25 text-left flex justify-between items-end gap-6">
                  <div className="max-w-md">
                    <h3 className="font-clash text-xl sm:text-2xl font-bold uppercase tracking-wider text-white mb-2 leading-tight">
                      {activeProject.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-white/60 font-light leading-relaxed">
                      {activeProject.description}
                    </p>
                  </div>
                  
                  {/* Circle Action Button */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-brand-black transition-all duration-300 shrink-0">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </div>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

          {/* Next Card (Right side, cropped & greyed out) */}
          {N > 1 && nextProject && (
            <motion.div
              onClick={handleNext}
              className="hidden md:flex relative w-[18%] h-[85%] rounded-3xl overflow-hidden cursor-pointer opacity-30 hover:opacity-50 filter grayscale transition-all duration-500 shrink-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 0.3, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              key={`next-${nextProject.id}`}
            >
              <img
                src={nextProject.image}
                alt={nextProject.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-black/20" />
              {/* Forward Arrow button */}
              <div className="absolute bottom-6 left-6 w-10 h-10 rounded-full border border-white/30 bg-black/40 backdrop-blur-sm flex items-center justify-center text-white z-10">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </div>
            </motion.div>
          )}

        </div>

        {/* Bottom Thumbnail Timeline */}
        <div className="w-full max-w-5xl mx-auto mt-12 md:mt-16 px-4">
          <div className="flex items-center gap-3 overflow-x-auto py-4 px-2 no-scrollbar scroll-smooth">
            {filteredProjects.map((p, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={`thumb-${p.id}`}
                  onClick={() => setActiveIndex(idx)}
                  className="flex flex-col items-start shrink-0 cursor-pointer group"
                >
                  {/* Thumbnail Image Box */}
                  <div
                    className={`w-[110px] sm:w-[130px] md:w-[160px] aspect-video rounded-xl overflow-hidden relative transition-all duration-300 border-2
                      ${isActive 
                        ? 'border-brand-black scale-102 opacity-100 shadow-md' 
                        : 'border-transparent opacity-50 group-hover:opacity-85'}`}
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-black/10" />
                  </div>
                  {/* Title Label */}
                  <span
                    className={`text-[8px] sm:text-[9px] font-semibold tracking-wider uppercase mt-2.5 transition-colors duration-300 text-left w-full truncate max-w-[110px] sm:max-w-[130px] md:max-w-[160px]
                      ${isActive ? 'text-brand-text-primary' : 'text-brand-text-muted group-hover:text-brand-text-secondary'}`}
                  >
                    {p.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </MotionSection>
  );
}
