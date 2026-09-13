'use client'

import { useState, FormEvent } from 'react'

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("https://formsubmit.co/ajax/sales@10tenconsulting.co.za", {
        method: "POST",
        body: formData,
      });
      setIsSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Form submission error", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
          {isSubmitted ? (
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-12 text-center flex flex-col items-center justify-center h-full min-h-[400px]">
              <span className="material-symbols-outlined text-6xl text-green-500 mb-4">check_circle</span>
              <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
              <p className="text-gray-300">Your message has been sent successfully. We will get back to you soon.</p>
            </div>
          ) : (
          <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              <input
                type="text"
                name="name"
                required
                placeholder="Full name"
                className="bg-white/5 backdrop-blur-md border border-white/10 w-full px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#F58220] transition-colors"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Your email"
                className="bg-white/5 backdrop-blur-md border border-white/10 w-full px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#F58220] transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              <input
                type="text"
                name="company"
                placeholder="Company name"
                className="bg-white/5 backdrop-blur-md border border-white/10 w-full px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#F58220] transition-colors"
              />
              <div className="relative w-full">
                <select
                  name="employees"
                  defaultValue=""
                  className="bg-white/5 backdrop-blur-md border border-white/10 w-full px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#F58220] transition-colors appearance-none"
                >
                  <option value="" disabled className="text-black">Number of Employees</option>
                  <option value="1-20" className="text-black">1-20</option>
                  <option value="21-50" className="text-black">21-50</option>
                  <option value="51-500" className="text-black">51-500</option>
                  <option value="501+" className="text-black">501+</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
                  <span className="material-symbols-outlined">expand_more</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                className="bg-white/5 backdrop-blur-md border border-white/10 w-full px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#F58220] transition-colors"
              />
              <div className="relative w-full">
                <select
                  name="industry"
                  defaultValue=""
                  className="bg-white/5 backdrop-blur-md border border-white/10 w-full px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#F58220] transition-colors appearance-none"
                >
                  <option value="" disabled className="text-black">Industry</option>
                  <option value="Business Services" className="text-black">Business Services</option>
                  <option value="Financial Services" className="text-black">Financial Services</option>
                  <option value="Professional Services" className="text-black">Professional Services</option>
                  <option value="Not for Profit" className="text-black">Not for Profit</option>
                  <option value="Retail" className="text-black">Retail</option>
                  <option value="Manufacturing" className="text-black">Manufacturing</option>
                  <option value="Wholesale Distribution" className="text-black">Wholesale Distribution</option>
                  <option value="Technology and Software" className="text-black">Technology and Software</option>
                  <option value="Government - Public Administration" className="text-black">Government - Public Administration</option>
                  <option value="Other" className="text-black">Other</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
                  <span className="material-symbols-outlined">expand_more</span>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="relative w-full">
                <select
                  name="products_services"
                  defaultValue=""
                  className="bg-white/5 backdrop-blur-md border border-white/10 w-full px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#F58220] transition-colors appearance-none"
                >
                  <option value="" disabled className="text-black">Select the solution you are interested in</option>
                  <option value="Sage Intacct" className="text-black">Sage Intacct</option>
                  <option value="Sage 300 People & HR" className="text-black">Sage 300 People & HR</option>
                  <option value="Accounting Services" className="text-black">Accounting Services</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
                  <span className="material-symbols-outlined">expand_more</span>
                </div>
              </div>
            </div>

            <textarea
              name="message"
              required
              placeholder="Your Message"
              rows={6}
              className="bg-white/5 backdrop-blur-md border border-white/10 w-full px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#F58220] transition-colors resize-none"
            ></textarea>

            <div>
              <button disabled={isSubmitting} type="submit" className="bg-[#F58220] hover:bg-[#D96E18] disabled:opacity-70 text-white font-semibold text-sm px-8 py-4 transition-colors">
                {isSubmitting ? "SENDING..." : "SEND A MESSAGE"}
              </button>
            </div>
          </form>
          )}
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
