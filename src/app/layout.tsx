import type { Metadata } from 'next';
import './globals.css';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import PageLoader from '@/components/PageLoader';
import CursorGlow from '@/components/CursorGlow';
import FilmGrain from '@/components/FilmGrain';

export const metadata: Metadata = {
  title: 'Blurry Visuals Film Production | Tokyo × Milan Cinematic Studio',
  description:
    'Premium visual storytelling crafted for brands, artists, and cinematic digital experiences. High-fidelity production pipelines operating across Tokyo and Milan.',
  keywords: [
    'Film Production',
    'Cinematography Studio',
    'Tokyo Filmmaker',
    'Milan Filmmaker',
    'Luxury Creative Agency',
    'ARRI Alexa Camera Workflow',
    'Post Production HDR Color Grading',
    'Commercial Film Director',
  ],
  authors: [{ name: 'Blurry Visuals Film Production' }],
  creator: 'Blurry Visuals',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-transparent text-brand-black">
        <SmoothScrollProvider>
          {/* Global Film Grain overlay */}
          <FilmGrain />
          
          {/* Interactive cursor tracking glow */}
          <CursorGlow />
          
          {/* Luxury intro preloader overlay */}
          <PageLoader />

          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
