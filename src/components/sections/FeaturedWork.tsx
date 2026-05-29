'use client';

import { useState, useRef } from 'react';
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
  heightClass: string; // for asymmetrical grid heights
}

const projects: Project[] = [
  {
    id: '1',
    title: 'The Silent Horizon',
    category: 'Documentary Film',
    year: '2025',
    description: 'Exploring the raw landscape of the Nordic circle and human resilience.',
    image: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=800&auto=format&fit=crop',
    video: 'https://videos.pexels.com/video-files/3015511/3015511-sd_960_540_24fps.mp4',
    heightClass: 'h-[380px] md:h-[480px]',
  },
  {
    id: '2',
    title: 'Elysian Runway',
    category: 'Fashion Campaign',
    year: '2026',
    description: 'An editorial sensory journey through Milan’s high-fashion week.',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop',
    video: 'https://videos.pexels.com/video-files/3209663/3209663-hd_1920_1080_25fps.mp4',
    heightClass: 'h-[380px] md:h-[600px]',
  },
  {
    id: '3',
    title: 'Liquid Soundwave',
    category: 'Music Video',
    year: '2025',
    description: 'Surreal visual wave patterns reacting to deep sub-bass frequencies.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
    video: 'https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4',
    heightClass: 'h-[380px] md:h-[600px]',
  },
  {
    id: '4',
    title: 'Milano Monoliths',
    category: 'Brand Storytelling',
    year: '2026',
    description: 'A sculptural architectural narrative commissioned by modern design houses.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    video: 'https://videos.pexels.com/video-files/2022395/2022395-hd_1920_1080_30fps.mp4',
    heightClass: 'h-[380px] md:h-[480px]',
  },
  {
    id: '5',
    title: 'Aero Dynamics',
    category: 'Commercial Film',
    year: '2026',
    description: 'High-speed pursuit cinematography for electric performance vehicles.',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=800&auto=format&fit=crop',
    video: 'https://videos.pexels.com/video-files/2022395/2022395-hd_1920_1080_30fps.mp4',
    heightClass: 'h-[380px] md:h-[480px]',
  },
  {
    id: '6',
    title: 'Meta Architecture',
    category: 'Corporate Cinema',
    year: '2025',
    description: 'Deconstructing futuristic workspaces and corporate environmental design.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    video: 'https://videos.pexels.com/video-files/3209663/3209663-hd_1920_1080_25fps.mp4',
    heightClass: 'h-[380px] md:h-[600px]',
  },
];

export default function FeaturedWork() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const filterTabs = [
    { label: 'All', value: 'All' },
    { label: 'Commercial', value: 'Commercial Film' },
    { label: 'Fashion', value: 'Fashion Campaign' },
    { label: 'Documentary', value: 'Documentary Film' },
    { label: 'Music Video', value: 'Music Video' },
    { label: 'Brand Film', value: 'Brand Storytelling' },
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const handleMouseEnter = (id: string) => {
    setHoveredId(id);
    const video = videoRefs.current[id];
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  };

  const handleMouseLeave = (id: string) => {
    setHoveredId(null);
    const video = videoRefs.current[id];
    if (video) {
      video.pause();
    }
  };

  return (
    <MotionSection
      id="work"
      className="bg-brand-gray-light py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <span className="text-[10px] font-semibold tracking-[0.25em] text-brand-black/55 uppercase block mb-3 font-general">
              Selected Productions
            </span>
            <h2 className="font-clash text-3xl md:text-5xl font-bold uppercase tracking-tight text-brand-black mb-4">
              CINEMATIC STORIES <br />
              CRAFTED WITH PRECISION
            </h2>
            <p className="text-brand-black/70 font-light text-sm md:text-base leading-relaxed">
              A curated collection of premium visual productions, brand films, commercials, and cinematic storytelling experiences.
            </p>
          </div>
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-brand-silver/40 pb-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveCategory(tab.value)}
                className={`text-[10px] font-semibold tracking-[0.2em] uppercase px-4 py-2 transition-all duration-300 rounded-full cursor-pointer
                  ${activeCategory === tab.value 
                    ? 'bg-brand-black text-brand-gray-light shadow-sm' 
                    : 'text-brand-black/60 hover:text-brand-black hover:bg-brand-silver/20'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.08, ease: [0.215, 0.61, 0.355, 1] as const }}
                key={project.id}
                className={`w-full group ${project.heightClass} relative flex flex-col justify-end overflow-hidden rounded-3xl bg-brand-black cursor-pointer shadow-md`}
                onMouseEnter={() => handleMouseEnter(project.id)}
                onMouseLeave={() => handleMouseLeave(project.id)}
              >
                {/* Image Cover */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                />

                {/* Autoplay Preview Video (Muted, Silent) */}
                <video
                  ref={(el) => { videoRefs.current[project.id] = el; }}
                  src={project.video}
                  loop
                  muted
                  playsInline
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-600 pointer-events-none z-10
                    ${hoveredId === project.id ? 'opacity-95' : 'opacity-0'}`}
                />
                {/* Cinematic Letterbox Masking Bars */}
                <div className="absolute top-0 left-0 right-0 h-0 bg-brand-black transition-all duration-500 ease-[0.215,0.61,0.355,1] group-hover:h-8 z-15 flex items-center justify-between px-6 md:px-8 overflow-hidden border-b border-brand-surface/10">
                  <span className="text-[8px] font-mono tracking-[0.2em] text-brand-surface/60 uppercase">REC ●</span>
                  <span className="text-[8px] font-mono tracking-[0.2em] text-brand-surface/60 uppercase">CAM A // HAWK 50MM</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0 bg-brand-black transition-all duration-500 ease-[0.215,0.61,0.355,1] group-hover:h-8 z-15 flex items-center justify-between px-6 md:px-8 overflow-hidden border-t border-brand-surface/10">
                  <span className="text-[8px] font-mono tracking-[0.2em] text-brand-surface/60 uppercase">24.00 FPS</span>
                  <span className="text-[8px] font-mono tracking-[0.2em] text-brand-surface/60 uppercase">SHUTTER 1/48</span>
                </div>

                {/* Luxury Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/85 via-brand-black/15 to-transparent opacity-80 z-10 transition-opacity duration-500 group-hover:opacity-90" />

                {/* Project Details Panel */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 transition-all duration-500 translate-y-3 group-hover:translate-y-[-24px]">
                  
                  {/* Category & Year HUD */}
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[9px] font-semibold tracking-[0.25em] uppercase text-white/60 bg-white/10 px-2.5 py-1 rounded backdrop-blur-sm border border-white/5">
                      {project.category}
                    </span>
                    <span className="text-[9px] font-mono tracking-[0.2em] text-white/50">
                      {project.year}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="flex justify-between items-end gap-4">
                    <div className="max-w-sm">
                      <h3 className="font-clash text-lg md:text-xl font-medium tracking-wide text-white uppercase mb-2">
                        {project.title}
                      </h3>
                      <p className="text-[11px] md:text-xs text-white/60 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                        {project.description}
                      </p>
                    </div>

                    {/* Interactive corner arrow */}
                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white bg-white/5 backdrop-blur-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </MotionSection>
  );
}
