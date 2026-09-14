'use client'

import { useState, FormEvent } from 'react'

export default function ContactForm() {
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

  if (isSubmitted) {
    return (
      <div className="bg-white/5 backdrop-blur-md border border-white/10 p-12 text-center flex flex-col items-center justify-center h-full min-h-[400px]">
        <span className="material-symbols-outlined text-6xl text-green-500 mb-4">check_circle</span>
        <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
        <p className="text-gray-300">Your message has been sent successfully. We will get back to you soon.</p>
      </div>
    );
  }

  return (
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
  );
}
