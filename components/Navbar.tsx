"use client";

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="fixed top-0 w-full z-50 flex flex-col">
      {/* Main Nav */}
      <nav 
        className="backdrop-blur-xl border-b border-white/20 w-full flex justify-between items-center px-4 md:px-8 py-1 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
        style={{ 
          backgroundColor: 'rgba(33, 11, 4, 0.75)',
          backgroundImage: `
            linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 100%),
            url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")
          `,
          backgroundBlendMode: 'overlay, normal',
        }}
      >
        <div className="flex items-center gap-3">
          <Link href="/">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="10TEN Consulting Logo" width={240} height={80} className="w-auto h-16 md:h-20 object-contain" priority />
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-white text-sm md:text-base tracking-wide">10TEN</span>
                <span className="font-bold text-[#f47920] text-xs md:text-sm tracking-widest">CONSULTING</span>
                <span className="font-bold text-[#3D99A6] text-xs md:text-sm tracking-widest">SERVICES</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-8 items-center">
          {[
            { name: 'HOME', path: '/' },
            { name: 'ABOUT US', path: '/about' },
            { name: 'SERVICES', path: '/services' },
            { name: 'INDUSTRIES', path: '/industries' },
            { name: 'CONTACT US', path: '/contact' },
          ].map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link 
                key={item.name} 
                className={`text-sm font-semibold transition-colors ${isActive ? '' : 'text-gray-200 hover:text-white'}`} 
                style={isActive ? { color: '#3D99A6', textDecoration: 'underline', textDecorationColor: '#3D99A6', textDecorationThickness: '2px', textUnderlineOffset: '6px' } : { textDecoration: 'none' }}
                href={item.path}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <Link href="/contact" className="hidden lg:block bg-[#F58220] hover:bg-[#D96E18] text-white font-semibold text-sm px-6 py-3 rounded transition-colors text-center">
          GET A CONSULTATION
        </Link>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden text-white flex items-center justify-center p-2">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-transparent z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm backdrop-blur-xl border-l border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] z-50 transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ 
          backgroundColor: 'rgba(33, 11, 4, 0.85)',
          backgroundImage: `
            linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%),
            url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")
          `,
          backgroundBlendMode: 'overlay, normal',
        }}
      >
        <div className="flex justify-between items-center p-6 pb-2">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <Image src="/logo.png" alt="10TEN Consulting Logo" width={240} height={80} className="w-auto h-14 object-contain" priority />
          </Link>
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400 hover:text-white p-2 -mr-2">
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        <div className="flex flex-col py-6 overflow-y-auto">
          {[
            { name: 'Home', path: '/' },
            { name: 'About us', path: '/about' },
            { name: 'Services', path: '/services' },
            { name: 'Industries', path: '/industries' },
            { name: 'Contact us', path: '/contact' },
          ].map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link 
                key={item.name} 
                onClick={() => setIsMobileMenuOpen(false)} 
                className={`px-6 py-3 font-bold text-lg transition-colors ${isActive ? 'bg-white/5' : 'text-gray-200 hover:bg-white/10 hover:text-white'}`} 
                style={isActive ? { color: '#3D99A6', textDecoration: 'underline', textDecorationColor: '#3D99A6', textDecorationThickness: '2px', textUnderlineOffset: '6px' } : { textDecoration: 'none' }}
                href={item.path}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="mt-auto p-6 flex flex-col gap-5 border-t border-white/10">
          <div className="flex items-center gap-3 text-gray-400 text-sm">
            <span className="material-symbols-outlined text-xl text-[#3D99A6]">mail</span>
            <span>sales@10tenconsulting.com</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400 text-sm">
            <span className="material-symbols-outlined text-xl text-[#3D99A6]">phone</span>
            <span>+27 87 265 2800</span>
          </div>
          <div className="flex items-start gap-3 text-gray-400 text-sm">
            <span className="material-symbols-outlined text-xl text-[#3D99A6] flex-shrink-0">location_on</span>
            <span className="leading-snug">Ground Floor, Mac Mac Building, Maxwell Office Park, Magwa Cres, Waterval City, Midrand, 2090, South Africa</span>
          </div>
        </div>
      </div>
    </div>
  )
}

