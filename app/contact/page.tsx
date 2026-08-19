'use client'

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden w-full">
        <div className="absolute inset-0 bg-[#004b87] mix-blend-multiply opacity-80 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" 
          alt="Contact Us" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-20 w-full text-center px-4 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-8 max-w-container-max mx-auto w-full flex flex-col lg:flex-row gap-16">
        
        {/* Info Column */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8 lg:pr-12">
          <div>
            <h4 className="text-[#004b87] font-semibold text-lg mb-2">Contact With Us</h4>
            <h2 className="text-4xl font-bold text-[#001b3c]">Speak With Our Consultant</h2>
          </div>

          <div className="flex flex-col gap-10 mt-4">
            {/* Call */}
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-gray-500">call</span>
              </div>
              <div className="pt-1">
                <h5 className="text-gray-500 text-xs font-semibold tracking-wider uppercase mb-1">CALL ANYTIME</h5>
                <p className="text-gray-700 font-medium text-lg">+971 52 148 5778</p>
              </div>
            </div>
            
            {/* Email */}
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-gray-500">mail</span>
              </div>
              <div className="pt-1">
                <h5 className="text-gray-500 text-xs font-semibold tracking-wider uppercase mb-1">SEND EMAIL</h5>
                <p className="text-gray-700 font-medium text-lg">info@accutracegroup.com</p>
              </div>
            </div>
            
            {/* Address */}
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-gray-500">location_on</span>
              </div>
              <div className="pt-1">
                <h5 className="text-gray-500 text-xs font-semibold tracking-wider uppercase mb-1">VISIT OFFICE</h5>
                <p className="text-gray-700 font-medium text-lg max-w-xs">1101, Ascott Park Place Tower Sheikh Zayed Rd, Dubai, UAE</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="w-full lg:w-1/2">
          <form className="flex flex-col gap-6 w-full" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              <input 
                type="text" 
                placeholder="Your name" 
                className="bg-[#f7f8f9] w-full px-6 py-4 text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#004b87] transition-colors" 
              />
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-[#f7f8f9] w-full px-6 py-4 text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#004b87] transition-colors" 
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              <input 
                type="tel" 
                placeholder="Your Phone" 
                className="bg-[#f7f8f9] w-full px-6 py-4 text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#004b87] transition-colors" 
              />
              <input 
                type="text" 
                placeholder="Subject" 
                className="bg-[#f7f8f9] w-full px-6 py-4 text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#004b87] transition-colors" 
              />
            </div>
            
            <textarea 
              placeholder="Your Message" 
              rows={6}
              className="bg-[#f7f8f9] w-full px-6 py-4 text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#004b87] transition-colors resize-none" 
            ></textarea>

            <div>
              <button type="submit" className="bg-[#004b87] hover:bg-[#003866] text-white font-semibold text-sm px-8 py-4 transition-colors">
                SEND A MESSAGE
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[400px] bg-gray-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14436.42777328905!2d55.27581179069352!3d25.233342371728956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42c222ff4efd%3A0xa1969e71e3cefc06!2sAscott%20Park%20Place%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  )
}
