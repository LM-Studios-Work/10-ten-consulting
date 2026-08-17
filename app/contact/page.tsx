'use client'

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 flex items-center px-margin-desktop max-w-container-max mx-auto overflow-hidden w-full">
        <div className="relative z-10 w-full md:w-3/4 flex flex-col gap-stack-lg">
          <h1 className="font-display-lg text-display-lg text-on-surface">
            Get In <span className="text-neon-green">Touch</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Let's Talk About Your Business.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-margin-desktop max-w-container-max mx-auto w-full flex flex-col lg:flex-row gap-16 mb-24">
        
        {/* Info Column */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Looking for a better way to manage your accounting, payroll, HR, or financial operations?
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant">
            At 10TEN Consulting Services, we believe the best solutions start with a conversation. Tell us a little about your organisation, your role, and what you are looking to achieve, and our team will get in touch to understand your requirements and explore how we can help.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Whether you are considering Sage Intacct, looking to improve your Payroll &amp; HR environment, or considering Outsourced Accounting Services, we would be happy to discuss your needs and demonstrate how our solutions can support your organisation.
          </p>

          <div className="glass-panel p-8 rounded-xl mt-8 border-l-4 border-l-neon-green">
            <h3 className="font-headline-md text-headline-md text-on-surface mb-4">What Happens Next?</h3>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <div className="font-bold text-neon-green">01</div>
                <div>
                  <h5 className="text-on-surface font-bold">We Review Your Information</h5>
                  <p className="text-on-surface-variant text-sm mt-1">Our team reviews your requirements and the information provided.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="font-bold text-neon-green">02</div>
                <div>
                  <h5 className="text-on-surface font-bold">We Contact You</h5>
                  <p className="text-on-surface-variant text-sm mt-1">A member of the 10TEN team will contact you within one business day.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="font-bold text-neon-green">03</div>
                <div>
                  <h5 className="text-on-surface font-bold">We Understand Your Needs</h5>
                  <p className="text-on-surface-variant text-sm mt-1">We discuss your organisation, current challenges, objectives, and requirements.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="font-bold text-neon-green">04</div>
                <div>
                  <h5 className="text-on-surface font-bold">We Demonstrate the Solution</h5>
                  <p className="text-on-surface-variant text-sm mt-1">Where appropriate, we arrange a personalised demonstration focused on your business needs.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="font-bold text-neon-green">05</div>
                <div>
                  <h5 className="text-on-surface font-bold">We Explore the Right Solution</h5>
                  <p className="text-on-surface-variant text-sm mt-1">We discuss how 10TEN can support your organisation and recommend the most appropriate next steps.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="w-full lg:w-1/2">
          <div className="glass-panel p-8 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-consultant-orange rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
            
            <h3 className="font-headline-lg text-headline-lg text-on-surface mb-6 relative z-10">Request a Demo</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-8 relative z-10">
              Complete the form below and we will be in touch within one business day to arrange a consultation or demonstration.
            </p>

            <form className="flex flex-col gap-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-on-surface font-label-md">Name and Surname</label>
                <input id="name" type="text" placeholder="Enter your full name" className="bg-slate-black border border-glass-border rounded px-4 py-3 text-on-surface focus:outline-none focus:border-neon-green transition-colors" />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="text-on-surface font-label-md">Company Name</label>
                <input id="company" type="text" placeholder="Enter your company name" className="bg-slate-black border border-glass-border rounded px-4 py-3 text-on-surface focus:outline-none focus:border-neon-green transition-colors" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-on-surface font-label-md">Business Email</label>
                  <input id="email" type="email" placeholder="you@yourcompany.co.za" className="bg-slate-black border border-glass-border rounded px-4 py-3 text-on-surface focus:outline-none focus:border-neon-green transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-on-surface font-label-md">Contact Number</label>
                  <input id="phone" type="tel" placeholder="Enter your contact number" className="bg-slate-black border border-glass-border rounded px-4 py-3 text-on-surface focus:outline-none focus:border-neon-green transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="jobTitle" className="text-on-surface font-label-md">Job Title</label>
                  <input id="jobTitle" type="text" placeholder="e.g. CFO, Finance Manager" className="bg-slate-black border border-glass-border rounded px-4 py-3 text-on-surface focus:outline-none focus:border-neon-green transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="employees" className="text-on-surface font-label-md">Number of Employees</label>
                  <select id="employees" className="bg-slate-black border border-glass-border rounded px-4 py-3 text-on-surface-variant focus:outline-none focus:border-neon-green transition-colors appearance-none">
                    <option value="" disabled selected>Select your organisation size</option>
                    <option value="1-50">1 - 50</option>
                    <option value="51-200">51 - 200</option>
                    <option value="201-500">201 - 500</option>
                    <option value="500+">500+</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="industry" className="text-on-surface font-label-md">Industry</label>
                <select id="industry" className="bg-slate-black border border-glass-border rounded px-4 py-3 text-on-surface-variant focus:outline-none focus:border-neon-green transition-colors appearance-none">
                  <option value="" disabled selected>Select your industry</option>
                  <option value="SaaS & Software">SaaS & Software</option>
                  <option value="Nonprofits">Nonprofits</option>
                  <option value="Professional Services">Professional Services</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Financial Services">Financial Services</option>
                  <option value="Hospitality">Hospitality</option>
                  <option value="Construction & Real Estate">Construction & Real Estate</option>
                  <option value="Retail">Retail</option>
                  <option value="Distribution">Distribution</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-on-surface font-label-md mb-2">Product / Service of Interest</label>
                <div className="flex flex-col gap-3">
                  <label className="flex items-center gap-3 text-on-surface-variant cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 accent-neon-green cursor-pointer" />
                    <span className="group-hover:text-on-surface transition-colors">Sage Intacct</span>
                  </label>
                  <label className="flex items-center gap-3 text-on-surface-variant cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 accent-neon-green cursor-pointer" />
                    <span className="group-hover:text-on-surface transition-colors">Sage 300 People &amp; HR</span>
                  </label>
                  <label className="flex items-center gap-3 text-on-surface-variant cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 accent-neon-green cursor-pointer" />
                    <span className="group-hover:text-on-surface transition-colors">Accounting Services</span>
                  </label>
                </div>
              </div>

              <button type="submit" className="bg-neon-green text-slate-black font-label-md text-label-md px-6 py-4 rounded hover:bg-opacity-90 transition-all font-bold mt-4 shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]">
                Submit Request
              </button>
              
              <p className="text-xs text-on-surface-variant text-center mt-4">
                Your information will be treated confidentially and used only to respond to your enquiry.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
