'use client';

import { motion } from 'framer-motion';
import MotionSection from '../ui/MotionSection';

const stats = [
  { value: '120+', label: 'Productions Completed' },
  { value: 'Tokyo & Milan', label: 'Dual Creative Hubs' },
  { value: '8K Cinema', label: 'Workflow Pipeline' },
  { value: 'Global', label: 'Production Network' },
];

export default function AboutStudio() {
  const collageImages = [
    {
      src: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=600&auto=format&fit=crop',
      alt: 'Cinematographer behind the lens',
      className: 'w-[65%] aspect-[4/3] rounded-3xl object-cover shadow-lg relative z-20',
      x: -20,
    },
    {
      src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=600&auto=format&fit=crop',
      alt: 'Cinematic lighting on set',
      className: 'w-[55%] aspect-square rounded-3xl object-cover shadow-2xl absolute bottom-[-10%] right-0 z-10 border-4 border-brand-bg-primary',
      x: 20,
    },
  ];

  return (
    <MotionSection
      id="studio"
      className="bg-transparent py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Section: Split Info & Collage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center mb-24">
          
          {/* Left Side: Agency copy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-[10px] font-semibold tracking-[0.25em] text-brand-black/50 uppercase block mb-4 font-general">
              About Blurry Visuals
            </span>
            <h2 className="font-clash text-2xl md:text-4xl font-bold uppercase tracking-tight text-brand-black leading-[1.2] mb-8">
              A premium artist-led visual production studio specializing in cinematic storytelling, high-fidelity commercial filmmaking, and modern digital narratives.
            </h2>
            <p className="text-brand-black/70 font-light text-sm md:text-base leading-relaxed max-w-xl mb-6">
              Founded at the intersection of Tokyo&apos;s precise craftsmanship and Milan&apos;s visual elegance, we operate at the frontier of commercial and artistic cinematography. We work directly with fashion houses, automotive brands, and music artists to translate raw vision into master-crafted imagery.
            </p>
            <p className="text-brand-black/70 font-light text-sm md:text-base leading-relaxed max-w-xl">
              By controlling the entire process from conceptual treatment creation down to our proprietary HDR color grading system, we ensure every project carries our signature high-fidelity contrast, deep cinematic texture, and refined aesthetic direction.
            </p>
          </div>

          {/* Right Side: Image collage */}
          <div className="lg:col-span-5 relative w-full h-[320px] md:h-[400px] flex items-center justify-start">
            {collageImages.map((img, idx) => (
              <motion.img
                key={idx}
                src={img.src}
                alt={img.alt}
                initial={{ opacity: 0, x: img.x, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: idx * 0.2 }}
                className={img.className}
              />
            ))}
          </div>

        </div>

        {/* Bottom Section: Floating statistics */}
        <div className="border-t border-brand-silver/30 pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
              key={stat.label}
              className="flex flex-col items-start gap-1"
            >
              <h3 className="font-clash text-2xl md:text-3xl font-semibold text-brand-black tracking-tight uppercase">
                {stat.value}
              </h3>
              <p className="text-[10px] font-semibold tracking-[0.15em] text-brand-black/50 uppercase font-general">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
