'use client';

import React, { useState } from 'react';
import MotionSection from '../ui/MotionSection';
import Button from '../ui/Button';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectType: 'Commercial',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${formState.name}. We will get back to you shortly!`);
    setFormState({ name: '', email: '', projectType: 'Commercial', message: '' });
  };

  return (
    <MotionSection
      id="contact"
      className="bg-brand-gray-light py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
          
          {/* Left Column: Office & Info */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <span className="text-[10px] font-semibold tracking-[0.25em] text-brand-black/50 uppercase block mb-3 font-general">
                Start a Conversation
              </span>
              <h2 className="font-clash text-4xl md:text-5xl font-bold uppercase tracking-tight text-brand-black leading-[1.05] mb-8">
                TELL US <br />
                YOUR STORY.
              </h2>
              <p className="text-brand-black/70 font-light text-sm md:text-base leading-relaxed max-w-sm mb-12">
                Have a project or concept you want to bring to life? Get in touch and let’s engineer visual art together.
              </p>
            </div>

            {/* Hub Locations & Socials */}
            <div className="space-y-10 border-t border-brand-silver/40 pt-10">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-clash text-xs font-semibold tracking-wider text-brand-black uppercase mb-3">
                    TOKYO HUB
                  </h4>
                  <p className="text-brand-black/55 font-light text-[11px] leading-relaxed">
                    2-chome, Jingumae, Shibuya-ku <br />
                    Tokyo 150-0001, Japan <br />
                    <span className="font-mono text-[9px] text-brand-black font-semibold block mt-2">GMT +9 // 10:00 - 19:00</span>
                  </p>
                </div>
                <div>
                  <h4 className="font-clash text-xs font-semibold tracking-wider text-brand-black uppercase mb-3">
                    MILAN HUB
                  </h4>
                  <p className="text-brand-black/55 font-light text-[11px] leading-relaxed">
                    Via Tortona, 35, Porta Genova <br />
                    Milan 20144, Italy <br />
                    <span className="font-mono text-[9px] text-brand-black font-semibold block mt-2">GMT +2 // 09:00 - 18:00</span>
                  </p>
                </div>
              </div>

              <div>
                <span className="text-[9px] font-bold tracking-[0.2em] text-brand-black/50 uppercase block mb-3 font-general">
                  Direct Contact
                </span>
                <a
                  href="mailto:hello@blurryvisuals.com"
                  className="font-clash text-sm md:text-base font-semibold tracking-wide text-brand-black hover:opacity-60 transition-opacity uppercase"
                >
                  hello@blurryvisuals.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Luxury Form */}
          <div className="lg:col-span-7 bg-brand-surface/50 p-8 md:p-12 rounded-3xl border border-brand-silver/40 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name Field */}
              <div className="flex flex-col gap-2 relative">
                <label className="text-[9px] font-semibold tracking-[0.2em] text-brand-black uppercase font-general">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-transparent border-b border-brand-silver/55 py-3 text-xs tracking-wider text-brand-black focus:border-brand-blue outline-none transition-colors duration-300 font-general"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-2 relative">
                <label className="text-[9px] font-semibold tracking-[0.2em] text-brand-black uppercase font-general">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-transparent border-b border-brand-silver/55 py-3 text-xs tracking-wider text-brand-black focus:border-brand-blue outline-none transition-colors duration-300 font-general"
                />
              </div>

              {/* Project Type Select */}
              <div className="flex flex-col gap-2 relative">
                <label className="text-[9px] font-semibold tracking-[0.2em] text-brand-black uppercase font-general">
                  Project Classification
                </label>
                <select
                  value={formState.projectType}
                  onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                  className="w-full bg-transparent border-b border-brand-silver/55 py-3 text-xs tracking-wider text-brand-black focus:border-brand-blue outline-none transition-colors duration-300 font-general cursor-pointer"
                >
                  <option value="Commercial">Commercial Film</option>
                  <option value="Fashion">Fashion Narrative</option>
                  <option value="Documentary">Feature Documentary</option>
                  <option value="Music Video">Creative Music Video</option>
                  <option value="Other">Custom Collaboration</option>
                </select>
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-2 relative">
                <label className="text-[9px] font-semibold tracking-[0.2em] text-brand-black uppercase font-general">
                  Project Brief
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Outline your visual objectives"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-transparent border-b border-brand-silver/55 py-3 text-xs tracking-wider text-brand-black focus:border-brand-blue outline-none transition-colors duration-300 font-general resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button type="submit" variant="primary" icon={true} className="w-full sm:w-auto">
                  Submit Brief
                </Button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </MotionSection>
  );
}
