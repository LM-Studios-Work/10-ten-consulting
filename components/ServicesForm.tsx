'use client'

import { useState, FormEvent } from 'react'

export default function ServicesForm() {
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
    <div className="bg-white shadow-xl rounded-2xl p-8 md:p-10 border border-gray-100">
      <h3 className="text-3xl font-bold text-[#001b3c] mb-2">Request a Demo</h3>
      
      {isSubmitted ? (
        <div className="py-12 text-center flex flex-col items-center justify-center h-full">
          <span className="material-symbols-outlined text-6xl text-green-500 mb-4">check_circle</span>
          <h4 className="text-2xl font-bold text-[#001b3c] mb-2">Thank You!</h4>
          <p className="text-gray-500 font-medium">Your request has been submitted successfully. We will get back to you soon.</p>
        </div>
      ) : (
        <>
          <p className="text-gray-500 mb-8 font-medium">Tell Us About Yourself</p>
          <form className="flex flex-col gap-5 w-full" onSubmit={handleSubmit}>
            <input type="hidden" name="_subject" value="New Service Request - 10TEN Consulting" />
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#001b3c]">Name and Surname <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your full name"
                className="bg-gray-50 w-full px-4 py-3.5 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#13363B] focus:bg-white border border-gray-200 transition-all"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#001b3c]">Company Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="company"
                required
                placeholder="Enter your company name"
                className="bg-gray-50 w-full px-4 py-3.5 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#13363B] focus:bg-white border border-gray-200 transition-all"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[#001b3c]">Business Email <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@yourcompany.co.za"
                  className="bg-gray-50 w-full px-4 py-3.5 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#13363B] focus:bg-white border border-gray-200 transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[#001b3c]">Contact Number <span className="text-red-500">*</span></label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Enter your contact number"
                  className="bg-gray-50 w-full px-4 py-3.5 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#13363B] focus:bg-white border border-gray-200 transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#001b3c]">Job Title <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="job_title"
                required
                placeholder="e.g. CFO, Finance Manager, Financial Director, Business Owner"
                className="bg-gray-50 w-full px-4 py-3.5 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#13363B] focus:bg-white border border-gray-200 transition-all"
              />
            </div>

            <div className="flex flex-col gap-1.5 mb-2">
              <label className="text-sm font-semibold text-[#001b3c]">Number of Employees <span className="text-red-500">*</span></label>
              <div className="relative">
                <select name="employees" required defaultValue="" className="bg-gray-50 w-full px-4 py-3.5 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#13363B] focus:bg-white border border-gray-200 transition-all appearance-none pr-10">
                  <option value="" disabled>Select your organisation size</option>
                  <option value="1-10">1 - 10</option>
                  <option value="11-50">11 - 50</option>
                  <option value="51-200">51 - 200</option>
                  <option value="201-500">201 - 500</option>
                  <option value="501+">501+</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                  <span className="material-symbols-outlined">expand_more</span>
                </div>
              </div>
            </div>

            <button disabled={isSubmitting} type="submit" className="bg-[#13363B] hover:bg-[#001b3c] disabled:opacity-70 text-white font-bold rounded-lg px-8 py-4 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full mt-2 text-sm uppercase tracking-wide">
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </button>
          </form>
        </>
      )}
    </div>
  );
}
