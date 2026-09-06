"use client";

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 w-full flex justify-between items-center px-4 md:px-8 py-4">
        <div className="flex items-center gap-3">
          <Link href="/">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="10TEN Consulting Logo" width={200} height={60} className="w-auto h-10 md:h-12 object-contain" priority />
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-white text-sm md:text-base tracking-wide">10TEN</span>
                <span className="font-bold text-[#f47920] text-xs md:text-sm tracking-widest">CONSULTING SERVICES</span>
              </div>
            </div>
          </Link>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-8 items-center">
          <Link className="text-gray-200 font-semibold text-sm hover:text-white transition-colors" href="/">HOME</Link>
          <Link className="text-gray-200 font-semibold text-sm hover:text-white transition-colors" href="/about">ABOUT US</Link>
          <Link className="text-gray-200 font-semibold text-sm hover:text-white transition-colors" href="/services">SERVICES</Link>
          <Link className="text-gray-200 font-semibold text-sm hover:text-white transition-colors" href="/industries">INDUSTRIES</Link>
          <Link className="text-gray-200 font-semibold text-sm hover:text-white transition-colors" href="/contact">CONTACT US</Link>
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
      <div className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-[#0B191C]/95 backdrop-blur-xl border-l border-white/10 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center p-6 pb-2">
           <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              <Image src="/logo.png" alt="10TEN Consulting Logo" width={160} height={48} className="w-auto h-10 object-contain" priority />
           </Link>
           <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400 hover:text-white p-2 -mr-2">
             <span className="material-symbols-outlined text-2xl">close</span>
           </button>
        </div>

        <div className="flex flex-col py-6 overflow-y-auto">
          <Link onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-3 text-gray-200 font-bold text-lg hover:bg-white/10 hover:text-white transition-colors" href="/">Home</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-3 text-gray-200 font-bold text-lg hover:bg-white/10 hover:text-white transition-colors" href="/about">About us</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-3 text-gray-200 font-bold text-lg hover:bg-white/10 hover:text-white transition-colors" href="/services">Services</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-3 text-gray-200 font-bold text-lg hover:bg-white/10 hover:text-white transition-colors" href="/industries">Industries</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-3 text-gray-200 font-bold text-lg hover:bg-white/10 hover:text-white transition-colors" href="/contact">Contact us</Link>
        </div>

        <div className="mt-auto p-6 flex flex-col gap-5 border-t border-white/10">
          <div className="flex items-center gap-3 text-gray-400 text-sm">
            <span className="material-symbols-outlined text-xl text-[#3D99A6]">mail</span>
            <span>info@10tenconsulting.com</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400 text-sm">
            <span className="material-symbols-outlined text-xl text-[#3D99A6]">phone</span>
            <span>+27 87 265 2800</span>
          </div>
          <div className="flex items-start gap-3 text-gray-400 text-sm">
            <span className="material-symbols-outlined text-xl text-[#3D99A6]">location_on</span>
            <span className="leading-snug">Johannesburg, Gauteng</span>
          </div>
        </div>
      </div>
    </div>
  )
}

