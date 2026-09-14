'use client'

import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden w-full">
        <div className="absolute inset-0 bg-[#13363B] mix-blend-multiply opacity-80 z-10"></div>
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
      <section className="py-24 px-8 max-w-container-max mx-auto w-full flex flex-col lg:flex-row gap-16 relative z-10">

        {/* Info Column */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8 lg:pr-12">
          <div>
            <h4 className="text-[#F58220] font-semibold text-lg mb-2 uppercase tracking-wide">Contact With Us</h4>
            <h2 className="text-4xl font-bold text-white">Speak With Our Consultant</h2>
          </div>

          <div className="flex flex-col gap-10 mt-4">
            {/* Call */}
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-[#F58220]">call</span>
              </div>
              <div className="pt-1">
                <h5 className="text-gray-400 text-xs font-semibold tracking-wider uppercase mb-1">CALL ANYTIME</h5>
                <p className="text-gray-300 font-medium text-lg">(+27) 87 265 2800 / (+27) 79 541 4454</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-[#F58220]">mail</span>
              </div>
              <div className="pt-1">
                <h5 className="text-gray-400 text-xs font-semibold tracking-wider uppercase mb-1">SEND EMAIL</h5>
                <p className="text-gray-300 font-medium text-lg">info@10tenconsulting.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-[#F58220]">location_on</span>
              </div>
              <div className="pt-1">
                <h5 className="text-gray-400 text-xs font-semibold tracking-wider uppercase mb-1">VISIT OFFICE</h5>
                <p className="text-gray-300 font-medium text-lg max-w-sm">Ground Floor, Mac Mac Building, Maxwell Office Park, Magwa Cres, Waterval City, Midrand, 2090, South Africa</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="w-full lg:w-1/2">
          <ContactForm />
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[400px] bg-black/20 relative z-10 border-t border-white/10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114584.73585324545!2d27.977464299863412!3d-26.09361138407028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9573ec31d87e19%3A0xc682390a3de059e9!2sSandton%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1700000000000!5m2!1sen!2sza"
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
