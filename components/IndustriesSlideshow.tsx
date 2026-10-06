'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
      icon: 'volunteer_activism',
      title: 'Nonprofits',
      desc: 'Empowering nonprofits with transparent fund accounting, grant management, and streamlined reporting.',
    },
    {
      icon: 'business_center',
      title: 'Professional Services',
      desc: 'Enhancing project profitability analysis, time tracking, and resource management for service-based businesses.',
    },
    {
      icon: 'medical_services',
      title: 'Healthcare',
      desc: 'Helping healthcare organizations maintain compliance, improve financial visibility, and strengthen processes with robust technology.',
    },
    {
      icon: 'account_balance',
      title: 'Financial Services',
      desc: 'Delivering robust multi-entity consolidation, real-time analytics, and strict regulatory compliance.',
    },
    {
      icon: 'restaurant',
      title: 'Hospitality',
      desc: 'Optimizing cost control, multi-location reporting, and financial visibility for the hospitality sector.',
    },
    {
      icon: 'domain',
      title: 'Construction & Real Estate',
      desc: 'Streamlining project accounting, contract management, and job costing for developers and contractors.',
    },
    {
      icon: 'storefront',
      title: 'Retail',
      desc: 'Connecting POS systems with back-office accounting for real-time inventory and revenue tracking.',
    },
    {
      icon: 'local_shipping',
      title: 'Distribution',
      desc: 'Enhancing supply chain visibility, inventory management, and operational efficiency across channels.',
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
          <motion.div 
            key={i} 
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-12 flex flex-col items-center text-center gap-6 hover:-translate-y-2 transition-transform duration-300 shadow-md hover:bg-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <span className="material-symbols-outlined text-7xl text-[#F58220]">{industry.icon}</span>
            <h3 className="text-2xl font-bold text-white mt-2">{industry.title}</h3>
            <p className="text-gray-300 text-base">{industry.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Mobile Slideshow */}
      <div className="md:hidden flex flex-col items-center w-full">
        <div className="flex items-center justify-between w-full gap-2">
          <button onClick={() => setCurrentIndex((prev) => (prev - 1 + industries.length) % industries.length)} className="text-white p-1 hover:text-[#F58220] transition-colors">
            <span className="material-symbols-outlined text-3xl">chevron_left</span>
          </button>
          
          <motion.div 
            className="bg-white/5 backdrop-blur-md rounded-xl p-10 border border-white/10 flex flex-col items-center text-center gap-6 w-full min-h-[320px] justify-center transition-opacity duration-500 shadow-md"
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <span className="material-symbols-outlined text-6xl text-[#F58220]">{industries[currentIndex].icon}</span>
            <h3 className="text-2xl font-bold text-white mt-2">{industries[currentIndex].title}</h3>
            <p className="text-gray-300 text-base">{industries[currentIndex].desc}</p>
          </motion.div>
          
          <button onClick={() => setCurrentIndex((prev) => (prev + 1) % industries.length)} className="text-white p-1 hover:text-[#F58220] transition-colors">
            <span className="material-symbols-outlined text-3xl">chevron_right</span>
          </button>
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
