'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ServicesSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const services = [
    {
      icon: 'account_tree',
      title: 'Sage Intacct',
      desc: 'Implementation, configuration, optimisation, training, and ongoing support for Sage Intacct.',
    },
    {
      icon: 'groups',
      title: 'Payroll & HR',
      desc: 'Manage critical HR and payroll functions while reducing unnecessary manual administration.',
    },
    {
      icon: 'finance',
      title: 'Outsourced Accounting',
      desc: 'Professional financial support for SMEs without the cost of a large internal finance function.',
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
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isMobile, services.length]);

  return (
    <>
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <motion.div 
            key={i} 
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 flex flex-col items-center text-center gap-4 hover:-translate-y-2 transition-transform duration-300 shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <span className="material-symbols-outlined text-5xl text-[#3D99A6]">{service.icon}</span>
            <h3 className="text-xl font-bold text-white mt-2">{service.title}</h3>
            <p className="text-gray-300 text-sm">{service.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Mobile Slideshow */}
      <div className="md:hidden flex flex-col items-center w-full">
        <div className="flex items-center justify-between w-full gap-2">
          <button onClick={() => setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)} className="text-white p-1 hover:text-[#3D99A6] transition-colors">
            <span className="material-symbols-outlined text-3xl">chevron_left</span>
          </button>
          
          <motion.div 
            className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 flex flex-col items-center text-center gap-4 w-full min-h-[250px] justify-center transition-opacity duration-500 shadow-md"
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <span className="material-symbols-outlined text-5xl text-[#3D99A6]">{services[currentIndex].icon}</span>
            <h3 className="text-xl font-bold text-white mt-2">{services[currentIndex].title}</h3>
            <p className="text-gray-300 text-sm">{services[currentIndex].desc}</p>
          </motion.div>
          
          <button onClick={() => setCurrentIndex((prev) => (prev + 1) % services.length)} className="text-white p-1 hover:text-[#3D99A6] transition-colors">
            <span className="material-symbols-outlined text-3xl">chevron_right</span>
          </button>
        </div>
        
        <div className="flex justify-center mt-8 gap-2">
          {services.map((_, i) => (
            <div 
              key={i} 
              className={`w-2 h-2 rounded-full transition-colors ${i === currentIndex ? 'bg-[#3D99A6]' : 'bg-gray-500'}`}
              onClick={() => setCurrentIndex(i)}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}
