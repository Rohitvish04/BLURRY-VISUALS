'use client';

export default function Footer() {
  const socials = [
    { name: 'Instagram', href: '#' },
    { name: 'Vimeo', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'Behance', href: '#' },
  ];

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'Studio', href: '#studio' },
    { name: 'Journal', href: '#journal' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-brand-black border-t border-brand-black/20 text-brand-gray-light/60 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Panel: Links and Logo */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start mb-16 md:mb-20">
          
          {/* Brand Info */}
          <div className="md:col-span-6 flex flex-col items-start">
            <span className="font-clash text-2xl font-semibold tracking-[0.2em] text-brand-gray-light mb-4">
              BLURRY VISUALS
            </span>
            <p className="text-brand-gray-light/45 font-light text-xs leading-relaxed max-w-xs uppercase tracking-wider">
              High-fidelity cinematic visual production studio based in Tokyo and Milan.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <span className="text-[9px] font-bold tracking-[0.25em] text-brand-gray-light/40 uppercase block mb-4 font-general">
              Sitemap
            </span>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs text-brand-gray-light/75 hover:text-white hover:underline transition-colors duration-300 font-general uppercase tracking-wider text-[11px]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Channels */}
          <div className="md:col-span-3">
            <span className="text-[9px] font-bold tracking-[0.25em] text-brand-gray-light/40 uppercase block mb-4 font-general">
              Social Channels
            </span>
            <ul className="flex flex-wrap gap-4">
              {socials.map((soc) => (
                <li key={soc.name}>
                  <a
                    href={soc.href}
                    className="text-xs text-brand-gray-light/75 hover:text-white hover:underline transition-colors duration-300 font-general uppercase tracking-wider text-[11px]"
                  >
                    {soc.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Panel: Copyright and Back to top */}
        <div className="border-t border-brand-gray-light/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-semibold tracking-[0.2em] text-brand-gray-light/40 uppercase font-general">
          <span>
            &copy; {new Date().getFullYear()} BLURRY VISUALS. ALL RIGHTS RESERVED.
          </span>
          <div className="flex items-center gap-6">
            <span>CINEMA ENGINEERED WITH PASSION</span>
            
            <a
              href="#home"
              className="flex items-center gap-2 text-brand-gray-light hover:text-white hover:opacity-100 transition-colors"
            >
              Back to Top
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="12" y1="19" x2="12" y2="5" />
                <polyline points="5 12 12 5 19 12" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
