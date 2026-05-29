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

  // Auto-play active video on hover
  useEffect(() => {
    if (!hoveredId) return;
    const video = videoRefs.current[hoveredId];
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
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

  return (
    <MotionSection
      id="work"
      className="relative bg-brand-bg-primary py-20 md:py-28 overflow-hidden select-none flex flex-col items-center"
    >
      <style>{`
        .motion-slider-wrapper {
          --card-width: 220px;
          --card-height: 320px;
          --card-gap: 16px;
        }
        @media (min-width: 768px) {
          .motion-slider-wrapper {
            --card-width: 380px;
            --card-height: 520px;
            --card-gap: 24px;
          }
        }
      `}</style>

      {/* Section Header */}
      <div className="text-center px-6 mb-10">
        <span className="text-[10px] font-semibold tracking-[0.3em] text-brand-text-muted uppercase block mb-2 font-general">
          Selected Projects
        </span>
        <h2 className="font-clash text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-brand-text-primary mb-2">
          Our Work
        </h2>
        <p className="text-brand-text-muted font-light text-[10px] sm:text-xs tracking-wider">
          Browse the highlights &mdash; click any project to step inside
        </p>
      </div>

      {/* Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 md:gap-2.5 mb-10 max-w-4xl mx-auto px-4">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.value;
          return (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`text-[9px] md:text-[10px] font-semibold tracking-widest px-4 py-2 rounded-full transition-all duration-300 cursor-pointer uppercase
                ${isActive 
                  ? 'bg-brand-black text-white shadow-sm scale-102 font-bold' 
                  : 'bg-brand-surface/40 text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-surface/75'}`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Main Slider Area */}
      <div className="motion-slider-wrapper relative w-full h-[var(--card-height)] overflow-visible flex items-center justify-center">
        
        {/* Left/Right Overlapping Navigation Circular Buttons */}
        {N > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-6 md:left-[15%] lg:left-[22%] z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-brand-border bg-white/70 backdrop-blur-md flex items-center justify-center text-brand-text-primary cursor-pointer hover:bg-brand-black hover:text-white hover:border-brand-black transition-all active:scale-95 shadow-sm"
              aria-label="Previous Project"
            >
              <svg className="w-4 h-4 fill-current rotate-180" viewBox="0 0 24 24">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="absolute right-6 md:right-[15%] lg:right-[22%] z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-brand-border bg-white/70 backdrop-blur-md flex items-center justify-center text-brand-text-primary cursor-pointer hover:bg-brand-black hover:text-white hover:border-brand-black transition-all active:scale-95 shadow-sm"
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
          className="flex items-center absolute left-0 right-0 h-full transition-transform duration-700 ease-[0.25,1,0.5,1] will-change-transform"
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
                  w-[var(--card-width)] h-full
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

                {/* Overlay vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-20 pointer-events-none" />

                {/* Card Title Label (Visible inside the active card) */}
                <div className={`absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 z-25 text-left transition-all duration-500
                  ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
                >
                  <span className="text-[7px] font-mono font-bold tracking-[0.25em] text-brand-blue uppercase block mb-1">
                    {project.category}
                  </span>
                  <h3 className="font-clash text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider text-white line-clamp-2">
                    {project.title}
                  </h3>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* 5. Bottom Thumbnail Strip (Overlaps the bottom of the cards) */}
      <div className="relative z-20 w-full max-w-5xl mx-auto -mt-16 md:-mt-24 px-6 md:px-12 pointer-events-auto">
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
                  className={`w-[100px] sm:w-[120px] md:w-[150px] aspect-video rounded-xl overflow-hidden relative transition-all duration-300 border-2
                    ${isActive 
                      ? 'border-brand-blue scale-102 opacity-100 shadow-md' 
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
                  className={`text-[8px] sm:text-[9px] font-semibold tracking-wider uppercase mt-2.5 transition-colors duration-300 text-left w-full truncate max-w-[100px] sm:max-w-[120px] md:max-w-[150px]
                    ${isActive ? 'text-brand-text-primary' : 'text-brand-text-muted group-hover:text-brand-text-secondary'}`}
                >
                  {p.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

    </MotionSection>
  );
}
