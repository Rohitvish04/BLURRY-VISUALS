'use client';

import { motion } from 'framer-motion';
import MotionSection from '../ui/MotionSection';

interface Article {
  id: string;
  category: string;
  date: string;
  title: string;
  image: string;
  link: string;
}

const articles: Article[] = [
  {
    id: '1',
    category: 'Cinematography',
    date: 'MAY 20, 2026',
    title: 'The Art of Anamorphic Lenses: Texturing Digital Sensors',
    image: 'https://images.unsplash.com/photo-1617791160505-6f006e121980?q=80&w=600&auto=format&fit=crop',
    link: '#',
  },
  {
    id: '2',
    category: 'Color Science',
    date: 'APRIL 14, 2026',
    title: 'Deconstructive Color: Formulating Custom Look LUTs',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop',
    link: '#',
  },
  {
    id: '3',
    category: 'VFX & CGI',
    date: 'MARCH 05, 2026',
    title: 'Photorealistic Rendering: Integrating Unreal Engine Assets',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=600&auto=format&fit=crop',
    link: '#',
  },
];

export default function JournalSection() {
  return (
    <MotionSection
      id="journal"
      className="bg-transparent py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <div>
            <span className="text-[10px] font-semibold tracking-[0.25em] text-brand-black/50 uppercase block mb-3 font-general">
              Studio Notebook
            </span>
            <h2 className="font-clash text-3xl md:text-5xl font-bold uppercase tracking-tight text-brand-black">
              THE JOURNAL
            </h2>
          </div>
          
          <a
            href="#journal"
            className="text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-black hover:opacity-60 transition-opacity flex items-center gap-2 group font-general"
          >
            View All Articles
            <svg
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

        {/* 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {articles.map((article, idx) => (
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.215, 0.61, 0.355, 1] as const }}
              key={article.id}
              className="flex flex-col group cursor-pointer"
            >
              {/* Card Image Wrapper */}
              <div className="w-full aspect-[16/10] md:aspect-[4/3] rounded-3xl overflow-hidden bg-brand-gray-light/35 mb-6 relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-black/5 opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Metadata */}
              <div className="flex items-center gap-3 mb-3 text-[9px] font-semibold tracking-[0.2em] uppercase text-brand-black/50 font-general">
                <span>{article.category}</span>
                <span className="w-1 h-1 rounded-full bg-brand-silver/50" />
                <span>{article.date}</span>
              </div>

              {/* Title */}
              <h3 className="font-clash text-base md:text-lg font-semibold tracking-wide uppercase text-brand-black mb-4 group-hover:text-brand-blue transition-colors duration-300 leading-snug">
                {article.title}
              </h3>

              {/* Bottom slide reveal arrow */}
              <div className="flex items-center gap-1.5 mt-auto pt-4 border-t border-brand-silver/30 w-fit">
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-black font-general">
                  Read Article
                </span>
                <svg
                  className="w-3.5 h-3.5 text-brand-black transition-transform duration-300 translate-x-0 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </MotionSection>
  );
}
