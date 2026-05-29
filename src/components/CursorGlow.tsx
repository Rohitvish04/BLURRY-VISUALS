'use client';

import { useEffect, useRef, useState } from 'react';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const glow = glowRef.current;
    const cursor = cursorRef.current;
    if (!glow || !cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let glowX = 0;
    let glowY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      if (!isVisible) setIsVisible(true);
      
      // Update small dot instantly
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    let rafId: number;
    const render = () => {
      // Lerp for smooth trailing glow
      const ease = 0.07;
      glowX += (mouseX - glowX) * ease;
      glowY += (mouseY - glowY) * ease;

      glow.style.transform = `translate3d(${glowX - 150}px, ${glowY - 150}px, 0)`;
      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  if (!mounted) return null;

  return (
    <>
      {/* Background Interactive Aura */}
      <div
        ref={glowRef}
        className={`pointer-events-none fixed top-0 left-0 z-30 h-[300px] w-[300px] rounded-full bg-brand-blue/5 blur-[80px] transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      />
      {/* Tiny black cursor dot with mix-blend-difference */}
      <div
        ref={cursorRef}
        className={`pointer-events-none fixed top-0 left-0 z-50 -ml-1 -mt-1 h-2 w-2 rounded-full bg-black mix-blend-difference transition-opacity duration-300 hidden md:block ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </>
  );
}
