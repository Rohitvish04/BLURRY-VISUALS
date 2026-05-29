'use client';

import { motion } from 'framer-motion';
import MotionSection from '../ui/MotionSection';
import GlassCard from '../ui/GlassCard';

const equipmentData = [
  {
    category: 'Camera Packages',
    items: [
      { name: 'ARRI Alexa Mini LF', spec: '4.5K Large Format Sensor / LPL Mount' },
      { name: 'RED V-Raptor 8K VV', spec: '8K Multiformat Sensor / 120fps raw' },
      { name: 'Sony Venice 2 8K', spec: 'Dual Base ISO (800/3200) / Full Frame' },
    ],
  },
  {
    category: 'Cinematography Glass',
    items: [
      { name: 'ARRI Signature Primes', spec: 'T1.8 Aperture Range: 18mm to 125mm' },
      { name: 'Cooke S8/i Full Frame', spec: 'Classic Cooke Look / T1.4 Speed' },
      { name: 'Angénieux Optimo Ultra', spec: 'High-end cinema zoom configurations' },
    ],
  },
  {
    category: 'Aerial & Grip',
    items: [
      { name: 'DJI Inspire 3 Drone', spec: '8K ProRes RAW / Full Frame Gimbal' },
      { name: 'Freefly Alta X Heavy Lift', spec: 'Custom RED/ARRI heavy aerial rig' },
      { name: 'DJI Ronin 2 Stabilizer', spec: '3-axis stabilizer for crane/chase car' },
    ],
  },
  {
    category: 'Post & Grading Suite',
    items: [
      { name: 'DaVinci Resolve Studio', spec: 'HDR Color Suite / Advanced Panels' },
      { name: 'Foundry Nuke VFX Studio', spec: 'Node-based VFX compositing pipeline' },
      { name: 'SideFX Houdini', spec: 'Proprietary dynamics & simulation engine' },
    ],
  },
];

export default function EquipmentSection() {
  return (
    <MotionSection
      id="equipment"
      className="bg-transparent py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-16 md:mb-20 text-center md:text-left">
          <span className="text-[10px] font-semibold tracking-[0.25em] text-brand-black/50 uppercase block mb-3 font-general">
            Production Arsenal
          </span>
          <h2 className="font-clash text-3xl md:text-5xl font-bold uppercase tracking-tight text-brand-black mb-4">
            CINEMATIC HARDWARE
          </h2>
          <p className="text-brand-black/70 font-light text-sm md:text-base max-w-2xl leading-relaxed">
            We operate fully owned, industry-standard equipment systems. No rental bottlenecks. Just high-fidelity execution from script to screen.
          </p>
        </div>

        {/* manifest grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Spec Lists */}
          <div className="space-y-12">
            {equipmentData.slice(0, 2).map((cat, idx) => (
              <div key={idx} className="border-t border-brand-silver/30 pt-6">
                <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-brand-black/50 font-general block mb-6">
                  {cat.category}
                </span>
                <div className="space-y-6">
                  {cat.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                      <h4 className="font-clash text-sm font-semibold tracking-wide text-brand-black uppercase">
                        {item.name}
                      </h4>
                      <span className="text-brand-black/50 font-light text-xs font-mono">
                        {item.spec}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Spec Lists + Drone Card */}
          <div className="space-y-12">
            {equipmentData.slice(2, 4).map((cat, idx) => (
              <div key={idx} className="border-t border-brand-silver/30 pt-6">
                <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-brand-black/50 font-general block mb-6">
                  {cat.category}
                </span>
                <div className="space-y-6">
                  {cat.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                      <h4 className="font-clash text-sm font-semibold tracking-wide text-brand-black uppercase">
                        {item.name}
                      </h4>
                      <span className="text-brand-black/50 font-light text-xs font-mono">
                        {item.spec}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Tech Specifications Footer Card */}
        <div className="mt-20">
          <GlassCard hoverEffect={true} className="border border-brand-silver/40 bg-brand-gray-light/30 p-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full border border-brand-black/10 bg-brand-surface/40 flex items-center justify-center text-brand-black">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="font-clash text-sm font-semibold tracking-wider text-brand-black uppercase mb-1">
                  FULL INSURANCE & WORKPLACE CARNET
                </h4>
                <p className="text-brand-black/60 text-xs font-light max-w-md">
                  All equipment holds global production insurance and standard ATA Carnet documentation, allowing zero-friction international customs entry.
                </p>
              </div>
            </div>
            
            <span className="text-[10px] font-mono font-semibold tracking-[0.2em] uppercase text-brand-black/60 bg-brand-gray-light px-4 py-2 rounded-lg">
              STATUS: READY FOR DEPLOYMENT
            </span>
          </GlassCard>
        </div>

      </div>
    </MotionSection>
  );
}
