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
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-100 hidden md:flex justify-between items-center px-8 py-2 text-sm text-gray-500">
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">location_on</span>
            <span>1101, Ascott Park Place Tower Sheikh Zayed Rd, Dubai, UAE</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">phone</span>
            <span>+971521485778</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">mail</span>
            <span>info@10tenconsulting.com</span>
          </div>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-[#13363B]"><span className="material-symbols-outlined text-[18px]">language</span></a>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white border-b border-gray-200 w-full flex justify-between items-center px-4 md:px-8 py-4">
        <div className="flex items-center gap-3">
          <Link href="/">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="10TEN Consulting Logo" width={200} height={60} className="w-auto h-10 md:h-12 object-contain" priority />
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-[#13363B] text-sm md:text-base tracking-wide">10TEN</span>
                <span className="font-bold text-[#f47920] text-xs md:text-sm tracking-widest">CONSULTING SERVICES</span>
              </div>
            </div>
          </Link>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-8 items-center">
          <Link className="text-gray-600 font-semibold text-sm hover:text-[#13363B] transition-colors" href="/">HOME</Link>
          <Link className="text-gray-600 font-semibold text-sm hover:text-[#13363B] transition-colors" href="/about">ABOUT US</Link>
          <Link className="text-gray-600 font-semibold text-sm hover:text-[#13363B] transition-colors" href="/services">SERVICES</Link>
          <Link className="text-gray-600 font-semibold text-sm hover:text-[#13363B] transition-colors" href="/industries">INDUSTRIES</Link>
          <Link className="text-gray-600 font-semibold text-sm hover:text-[#13363B] transition-colors" href="/contact">CONTACT US</Link>
        </div>
        
        <Link href="/contact" className="hidden lg:block bg-[#13363B] hover:bg-[#0C2225] text-white font-semibold text-sm px-6 py-3 rounded transition-colors text-center">
          GET A CONSULTATION
        </Link>
        
        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden text-gray-900 flex items-center justify-center p-2">
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
      <div className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center p-6 pb-2">
           <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              <Image src="/logo.png" alt="10TEN Consulting Logo" width={160} height={48} className="w-auto h-10 object-contain" priority />
           </Link>
           <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-500 hover:text-gray-800 p-2 -mr-2">
             <span className="material-symbols-outlined text-2xl">close</span>
           </button>
        </div>

        <div className="flex flex-col py-6 overflow-y-auto">
          <Link onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-3 text-gray-900 font-bold text-lg hover:bg-gray-50 hover:text-[#13363B] transition-colors" href="/">Home</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-3 text-gray-900 font-bold text-lg hover:bg-gray-50 hover:text-[#13363B] transition-colors" href="/about">About us</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-3 text-gray-900 font-bold text-lg hover:bg-gray-50 hover:text-[#13363B] transition-colors" href="/services">Services</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-3 text-gray-900 font-bold text-lg hover:bg-gray-50 hover:text-[#13363B] transition-colors" href="/industries">Industries</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-3 text-gray-900 font-bold text-lg hover:bg-gray-50 hover:text-[#13363B] transition-colors" href="/contact">Contact us</Link>
        </div>

        <div className="mt-auto p-6 flex flex-col gap-5 border-t border-gray-50">
          <div className="flex items-center gap-3 text-gray-500 text-sm">
            <span className="material-symbols-outlined text-xl text-[#13363B]">mail</span>
            <span>info@10tenconsulting.com</span>
          </div>
          <div className="flex items-center gap-3 text-gray-500 text-sm">
            <span className="material-symbols-outlined text-xl text-[#13363B]">phone</span>
            <span>+971521485778</span>
          </div>
          <div className="flex items-start gap-3 text-gray-500 text-sm">
            <span className="material-symbols-outlined text-xl text-[#13363B]">location_on</span>
            <span className="leading-snug">1101, Ascott Park Place Tower<br/>Sheikh Zayed Rd, Dubai, UAE</span>
          </div>
        </div>
      </div>
    </div>
  )
}

