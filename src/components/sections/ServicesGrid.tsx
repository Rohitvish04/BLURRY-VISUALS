'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MotionSection from '../ui/MotionSection';
import GlassCard from '../ui/GlassCard';

interface EngineStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  deliverables: string[];
  process: string[];
}

export default function ServicesGrid() {
  const [activeStep, setActiveStep] = useState<string>('01');

  const engineSteps: EngineStep[] = [
    {
      id: '01',
      title: 'Ideation & Concept',
      description: 'Brainstorming unique concepts, structuring narrative flow, and establishing visual treatments.',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80&w=700&auto=format&fit=crop',
      deliverables: ['Creative Treatment', 'Moodboards', 'Script & Staging Drafts', 'Production Design'],
      process: ['1 Creative Brief', '2 Competitor Review', '3 Scriptwriting', '4 Pitch Alignment'],
    },
    {
      id: '02',
      title: 'Production & Shooting',
      description: 'On-set execution under high-fidelity standards using top-tier cinematography camera packages.',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=700&auto=format&fit=crop',
      deliverables: ['Cinematography raw files', 'Multi-source audio logs', 'Behind the scenes (BTS)', 'Daily backups'],
      process: ['1 Crewing & Locations', '2 Equipment Prep', '3 Filming Schedules', '4 Data Management'],
    },
    {
      id: '03',
      title: 'Post-Production',
      description: 'Merging sound design, visual editing, CGI renders, and precision HDR color master grades.',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=700&auto=format&fit=crop',
      deliverables: ['First assembly edit', 'Sound effects & scoring', 'Color graded masters', 'Deliverable renders'],
      process: ['1 Assembly Cut', '2 Sound Mixdown', '3 Color Grading', '4 Quality Control Review'],
    },
    {
      id: '04',
      title: 'Strategy & Packaging',
      description: 'Complete social media management, content calendars, and brand storytelling for sustained engagement.',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.961 0 1.36 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.77-.57-.371-1.81.588-1.81h4.907a1 1 0 00.95-.69l1.519-4.674z" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=700&auto=format&fit=crop',
      deliverables: ['Content Calendar', 'Reels & Shorts', 'Carousel Design', 'Performance Reports'],
      process: ['1 Audience Research', '2 Pillars & Themes', '3 Monthly Rollout', '4 Optimise & Repeat'],
    },
  ];

  const generalServices = [
    {
      title: 'Film Production',
      desc: 'Narrative filmmaking and visual treatments.',
      icon: (
        <svg className="w-5 h-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
        </svg>
      ),
    },
    {
      title: 'Commercial Direction',
      desc: 'High-impact commercial campaigns.',
      icon: (
        <svg className="w-5 h-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
    },
    {
      title: 'Cinematography',
      desc: 'Arri/RED camera systems and elite framing.',
      icon: (
        <svg className="w-5 h-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m-4-4h8" />
        </svg>
      ),
    },
    {
      title: 'VFX & CGI',
      desc: '3D environment designs and digital simulations.',
      icon: (
        <svg className="w-5 h-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-18L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      title: 'Color Grading',
      desc: 'Master grading inside DaVinci Resolve suites.',
      icon: (
        <svg className="w-5 h-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547" />
        </svg>
      ),
    },
    {
      title: 'Post Production',
      desc: 'Offline editing and surround audio mastering.',
      icon: (
        <svg className="w-5 h-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 11-4.243-4.243 3 3 0 014.243 4.243z" />
        </svg>
      ),
    },
    {
      title: 'Brand Storytelling',
      desc: 'Emotional marketing films with high conversion.',
      icon: (
        <svg className="w-5 h-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: 'Creative Direction',
      desc: 'Defining stylistic signatures for major brands.',
      icon: (
        <svg className="w-5 h-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
  ];

  const activeStepData = engineSteps.find((s) => s.id === activeStep) || engineSteps[0];

  return (
    <MotionSection
      id="services"
      className="bg-brand-gray-light py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <span className="text-[10px] font-semibold tracking-[0.25em] text-brand-black/50 uppercase block mb-3 font-general">
            Our Capabilities
          </span>
          <h2 className="font-clash text-3xl md:text-5xl font-bold uppercase tracking-tight text-brand-black mb-4">
            COMPLETE PRODUCTION ENGINE
          </h2>
          <p className="text-brand-black/70 font-light text-sm md:text-base max-w-2xl leading-relaxed">
            End-to-end production — from the first idea to the final post. We create cinematic assets engineered to resonate and convert.
          </p>
        </div>

        {/* Engine Pipeline Blocks (Sliding selectors & details) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 items-start">
          
          {/* Step Selector Buttons (Framer Motion layoutId sliding bg) */}
          <div className="lg:col-span-4 flex flex-col gap-3 relative">
            {/* Fine connecting line */}
            <div className="absolute left-[34px] top-10 bottom-10 w-[1px] bg-brand-silver/30 -z-0 hidden sm:block" />

            {engineSteps.map((step) => {
              const isActive = activeStep === step.id;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`w-full flex items-center justify-between text-left p-5 rounded-2xl border transition-colors duration-500 relative overflow-hidden cursor-pointer z-10
                    ${isActive
                      ? 'border-brand-black text-white'
                      : 'bg-brand-surface/55 border-brand-silver/40 text-brand-black/50 hover:text-brand-black hover:border-brand-blue'}`}
                >
                  {/* Sliding selection background */}
                  {isActive && (
                    <motion.span
                      layoutId="activeStepBackground"
                      className="absolute inset-0 bg-brand-black -z-10 rounded-2xl"
                      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                    />
                  )}

                  <div className="flex items-center gap-4 relative z-10">
                    {/* Ring selector node */}
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center font-clash text-xs font-semibold transition-colors duration-300
                      ${isActive ? 'border-white/20 bg-white/10 text-white' : 'border-brand-silver/40 bg-brand-gray-light text-brand-black/50'}`}
                    >
                      {step.id}
                    </div>

                    <span className="font-general text-xs font-semibold tracking-wider uppercase">
                      {step.title}
                    </span>
                  </div>

                  <div className={`relative z-10 transition-colors duration-300 ${isActive ? 'text-white' : 'text-brand-silver'}`}>
                    {step.icon}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Panel details (AnimatePresence transitions) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <GlassCard hoverEffect={false} className="border border-brand-silver/40 bg-brand-surface/50 p-6 md:p-10 relative overflow-hidden min-h-[440px] flex flex-col justify-between shadow-sm">
                  <div>
                    {/* Top step badge HUD */}
                    <div className="flex justify-between items-start mb-6">
                      <span className="font-clash text-3xl md:text-4xl font-semibold text-brand-silver/30 tracking-tight uppercase select-none">
                        ENGINE STEP // {activeStepData.id}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse mt-3" />
                    </div>

                    {/* Widescreen Stage Preview Image */}
                    <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden mb-6 border border-brand-silver/30 relative">
                      <img
                        src={activeStepData.image}
                        alt={activeStepData.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-brand-black/5 pointer-events-none" />
                    </div>

                    <h3 className="font-clash text-xl md:text-2xl font-bold uppercase tracking-wider text-brand-black mb-4">
                      {activeStepData.title}
                    </h3>
                    <p className="text-brand-black/70 font-light text-sm md:text-base leading-relaxed mb-8">
                      {activeStepData.description}
                    </p>
                  </div>

                  {/* Sub-grid of Deliverables & Process */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-brand-silver/30">
                    {/* Deliverables List */}
                    <div>
                      <h4 className="text-[10px] font-bold tracking-[0.25em] text-brand-black/50 uppercase mb-4 font-general">Deliverables</h4>
                      <ul className="space-y-3">
                        {activeStepData.deliverables.map((del) => (
                          <li key={del} className="flex items-center gap-3 text-xs text-brand-black font-medium font-general">
                            {/* Fine details checklist node */}
                            <div className="w-4 h-4 rounded-full bg-brand-blue-light border border-brand-blue/20 flex items-center justify-center">
                              <svg className="w-2.5 h-2.5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            {del}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Process Timeline */}
                    <div>
                      <h4 className="text-[10px] font-bold tracking-[0.25em] text-brand-black/50 uppercase mb-4 font-general">Process</h4>
                      <ul className="space-y-3">
                        {activeStepData.process.map((pr) => {
                          const index = pr.split(' ')[0];
                          const text = pr.split(' ').slice(1).join(' ');
                          return (
                            <li key={pr} className="flex items-center gap-3 text-xs text-brand-black/80 font-general">
                              <span className="text-[10px] font-bold text-brand-blue font-mono w-5 shrink-0">{index.padStart(2, '0')}</span>
                              <span>{text}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Bottom Capabilities Grid: Specific Disciplines */}
        <div className="border-t border-brand-silver/40 pt-16">
          <h3 className="font-clash text-xs font-semibold tracking-[0.3em] uppercase text-brand-black/50 mb-10 text-center">
            SPECIFIC STUDIO DISCIPLINES
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {generalServices.map((service, idx) => (
              <GlassCard
                key={service.title}
                hoverEffect={true}
                className="bg-brand-gray-light/30 border border-brand-silver/40 p-6 flex flex-col justify-between h-[180px] group transition-all duration-500 hover:border-brand-blue hover:shadow-lg"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    {/* Ring selector node */}
                    <div className="w-8 h-8 rounded-full bg-brand-gray-light border border-brand-silver/30 flex items-center justify-center text-brand-black/50 text-[10px] font-mono group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                      {(idx + 1).toString().padStart(2, '0')}
                    </div>
                    {/* Custom Vector Icon */}
                    <div className="p-1.5 rounded-lg bg-brand-blue-light border border-brand-blue/10 group-hover:bg-brand-blue group-hover:border-brand-blue group-hover:text-white transition-all duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <h4 className="font-clash text-sm font-semibold tracking-wider text-brand-black uppercase mb-2">
                    {service.title}
                  </h4>
                </div>
                <p className="text-[11px] text-brand-black/60 font-light leading-relaxed">
                  {service.desc}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>

      </div>
    </MotionSection>
  );
}
