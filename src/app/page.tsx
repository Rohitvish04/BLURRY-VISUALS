'use client';

import Navbar from '@/components/sections/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import FeaturedWork from '@/components/sections/FeaturedWork';
import PhotosSection from '@/components/sections/PhotosSection';
import AboutStudio from '@/components/sections/AboutStudio';
import ServicesGrid from '@/components/sections/ServicesGrid';
import ShowreelSection from '@/components/sections/ShowreelSection';
import EquipmentSection from '@/components/sections/EquipmentSection';
import Testimonials from '@/components/sections/Testimonials';
import JournalSection from '@/components/sections/JournalSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Header Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Fullscreen Hero Section */}
        <HeroSection />

        {/* 3. Luxury Featured Work Portfolio Grid */}
        <FeaturedWork />

        {/* 3b. Cinematic Stills & Photos Showcase */}
        <PhotosSection />

        {/* 4. About Studio Agency Copy & Stats */}
        <AboutStudio />

        {/* 5. Complete Production Engine Services Details */}
        <ServicesGrid />

        {/* 6. Showreel Video Section */}
        <ShowreelSection />

        {/* 7. Equipment Manifest specs */}
        <EquipmentSection />

        {/* 8. Luxury Testimonial Review slider */}
        <Testimonials />

        {/* 9. Journal/News grid */}
        <JournalSection />

        {/* 10. Minimalist Contact inputs & Hub Locations */}
        <ContactSection />
      </main>

      {/* 11. Minimal Editorial Footer */}
      <Footer />
    </div>
  );
}
