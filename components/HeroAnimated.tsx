'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroAnimated() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center w-full overflow-hidden bg-white">
      {/* Honeycomb Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/honeycomb_bg.jpeg')" }}
      ></div>
      {/* Seamless white gradient overlay from the left, fading to transparent */}
      <div 
        className="absolute inset-y-0 left-0 w-full md:w-[75%] pointer-events-none z-0" 
        style={{ background: 'linear-gradient(to right, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.6) 40%, rgba(255, 255, 255, 0) 100%)' }}
      ></div>

      <motion.div
        className="relative z-10 px-margin-desktop max-w-container-max mx-auto w-full flex flex-col gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold max-w-4xl leading-tight border-l-8 border-[#F58220] pl-6"
          style={{ color: '#1F2937' }}
          variants={itemVariants}
        >
          EASING BUSINESS<br />COMPLEXITY
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl font-semibold max-w-2xl"
          style={{ color: '#1F2937' }}
          variants={itemVariants}
        >
          With Expert Advisory, 10TEN Stands As A Trusted Partner For Businesses In South Africa, Providing Expert Sage Intacct, Payroll & HR, And Outsourced Accounting Services.
        </motion.p>

        <motion.div className="mt-4" variants={itemVariants}>
          <Link href="/contact" className="inline-block bg-[#13363B] hover:bg-[#0C2225] text-white font-semibold px-8 py-4 rounded-md transition-colors shadow-lg">
            GET A CONSULTATION
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
