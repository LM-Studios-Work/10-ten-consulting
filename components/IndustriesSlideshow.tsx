'use client';

import { useState, useEffect } from 'react';

export default function IndustriesSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const industries = [
    {
      icon: 'cloud',
      title: 'SaaS & Software',
      desc: 'Providing specialized financial advisory and implementation services to streamline recurring revenue recognition and complex reporting.',
    },
    {
      icon: 'medical_services',
      title: 'Healthcare',
      desc: 'Helping healthcare organizations maintain compliance, improve financial visibility, and strengthen processes with robust technology.',
    },
    {
      icon: 'business_center',
      title: 'Professional Services',
      desc: 'Enhancing project profitability analysis, time tracking, and resource management for service-based businesses.',
    },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % industries.length);
    }, 3000); // 3 seconds interval as requested
    
    return () => clearInterval(interval);
  }, [isMobile, industries.length]);

  return (
    <>
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
        {industries.map((industry, i) => (
          <div key={i} className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 flex flex-col gap-4 hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-4xl text-[#F58220]">{industry.icon}</span>
            <h3 className="text-xl font-bold text-white">{industry.title}</h3>
            <p className="text-gray-300 text-sm">{industry.desc}</p>
          </div>
        ))}
      </div>

      {/* Mobile Slideshow */}
      <div className="md:hidden flex flex-col items-center w-full">
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 flex flex-col gap-4 w-full min-h-[250px] justify-center transition-opacity duration-500">
          <span className="material-symbols-outlined text-4xl text-[#F58220]">{industries[currentIndex].icon}</span>
          <h3 className="text-xl font-bold text-white">{industries[currentIndex].title}</h3>
          <p className="text-gray-300 text-sm">{industries[currentIndex].desc}</p>
        </div>
        
        <div className="flex justify-center mt-8 gap-2">
          {industries.map((_, i) => (
            <div 
              key={i} 
              className={`w-2 h-2 rounded-full transition-colors ${i === currentIndex ? 'bg-[#F58220]' : 'bg-gray-500'}`}
              onClick={() => setCurrentIndex(i)}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}
