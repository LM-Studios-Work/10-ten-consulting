import Link from 'next/link'

export const metadata = {
  title: 'Our Services | 10TEN Consulting Services',
  description: 'Business Solutions Designed Around Your Business.',
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden w-full">
        <div className="absolute inset-0 bg-[#13363B] mix-blend-multiply opacity-80 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" 
          alt="Our Services" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-20 w-full text-center px-4 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
            Our Services
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Business Solutions Designed Around Your Business.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 px-8 max-w-container-max mx-auto w-full text-center">
        <p className="text-gray-600 leading-relaxed text-xl max-w-4xl mx-auto">
          At 10TEN Consulting Services, we provide professional technology, accounting, payroll, and business solutions designed to help organisations improve efficiency, strengthen financial management, and support sustainable growth.
        </p>
      </section>

      {/* Services List */}
      <section className="w-full pb-24">
        
        {/* Service 1 */}
        <div className="flex flex-col lg:flex-row w-full bg-white">
          <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <span className="material-symbols-outlined text-[#F58220] text-4xl">account_tree</span>
              <h2 className="text-3xl font-bold text-[#001b3c]">Sage Intacct Licensing & Implementation</h2>
            </div>
            <p className="text-gray-600 mb-8 text-lg">
              Modernise Your Financial Management. Sage Intacct is a powerful cloud-based financial management platform designed to give organisations greater visibility, control, automation, and scalability.
            </p>
            <div className="flex flex-col gap-6">
              <div>
                <h4 className="font-bold text-[#001b3c] mb-2 text-lg">Licensing & Strategy</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#F58220] text-sm mt-1">check</span> Product selection & user requirements</li>
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#F58220] text-sm mt-1">check</span> Entity & module requirements</li>
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#F58220] text-sm mt-1">check</span> Expansion considerations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#001b3c] mb-2 text-lg">Implementation & Support</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#F58220] text-sm mt-1">check</span> Requirements gathering & solution design</li>
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#F58220] text-sm mt-1">check</span> Data migration & system testing</li>
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#F58220] text-sm mt-1">check</span> User training & go-live support</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 h-[500px] lg:h-auto">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Sage Intacct" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Service 2 */}
        <div className="flex flex-col lg:flex-row-reverse w-full bg-gray-50">
          <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <span className="material-symbols-outlined text-[#F58220] text-4xl">groups</span>
              <h2 className="text-3xl font-bold text-[#001b3c]">Payroll & HR</h2>
            </div>
            <p className="text-gray-600 mb-8 text-lg">
              Empower Your People. Simplify Your Processes. Managing payroll and HR effectively requires accurate information, reliable processes, strong controls, and technology that can support your organisation as it grows.
            </p>
            <div className="flex flex-col gap-6">
              <div>
                <h4 className="font-bold text-[#001b3c] mb-2 text-lg">Payroll Solutions</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#F58220] text-sm mt-1">check</span> Payroll processing & administration</li>
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#F58220] text-sm mt-1">check</span> Leave management & reporting</li>
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#F58220] text-sm mt-1">check</span> Statutory requirements & controls</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#001b3c] mb-2 text-lg">HR Solutions</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#F58220] text-sm mt-1">check</span> Employee information management</li>
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#F58220] text-sm mt-1">check</span> HR administration & reporting</li>
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#F58220] text-sm mt-1">check</span> Employee lifecycle administration</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 h-[500px] lg:h-auto">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Payroll and HR" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Service 3 */}
        <div className="flex flex-col lg:flex-row w-full bg-white">
          <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <span className="material-symbols-outlined text-[#F58220] text-4xl">finance</span>
              <h2 className="text-3xl font-bold text-[#001b3c]">Outsourced Accounting</h2>
            </div>
            <p className="text-gray-600 mb-8 text-lg">
              Your Finance Function. Our Expertise. We provide businesses access to professional financial support while allowing management to focus on running and growing the business.
            </p>
            <div className="flex flex-col gap-6">
              <div>
                <h4 className="font-bold text-[#001b3c] mb-2 text-lg">Bookkeeping & Reconciliations</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#F58220] text-sm mt-1">check</span> General ledger management</li>
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#F58220] text-sm mt-1">check</span> Accounts payable & receivable</li>
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#F58220] text-sm mt-1">check</span> Bank & supplier reconciliations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#001b3c] mb-2 text-lg">Reporting & Analysis</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#F58220] text-sm mt-1">check</span> Management accounts & financial reporting</li>
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#F58220] text-sm mt-1">check</span> Budgeting & cash-flow forecasting</li>
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#F58220] text-sm mt-1">check</span> Month-end close support</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 h-[500px] lg:h-auto">
            <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop" alt="Outsourced Accounting" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Service 4 */}
        <div className="flex flex-col lg:flex-row-reverse w-full bg-gray-50">
          <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <span className="material-symbols-outlined text-[#F58220] text-4xl">lightbulb</span>
              <h2 className="text-3xl font-bold text-[#001b3c]">Advisory & Strategy</h2>
            </div>
            <p className="text-gray-600 mb-8 text-lg">
              Navigate Complexity with Confidence. We help you map out the future of your financial ecosystem, identifying opportunities for growth, integration, and strategic cost-reduction.
            </p>
            <div className="flex flex-col gap-6">
              <div>
                <h4 className="font-bold text-[#001b3c] mb-2 text-lg">Process Optimisation</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#F58220] text-sm mt-1">check</span> System integrations</li>
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#F58220] text-sm mt-1">check</span> Operational assessments</li>
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#F58220] text-sm mt-1">check</span> Strategic planning</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 h-[500px] lg:h-auto">
            <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop" alt="Advisory Strategy" className="w-full h-full object-cover" />
          </div>
        </div>

      </section>
      
      {/* Request a Demo Section */}
      <section className="bg-gray-50 py-24 px-8 w-full border-t border-gray-200">
        <div className="max-w-container-max mx-auto flex flex-col lg:flex-row gap-16">
          {/* Info Column */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8 lg:pr-4">
            <div>
              <h4 className="text-[#13363B] font-semibold text-lg mb-2 uppercase tracking-wide">Get In Touch</h4>
              <h2 className="text-4xl font-bold text-[#001b3c] mb-6 leading-tight">Let's Talk About Your Business.</h2>
              
              <div className="text-gray-600 flex flex-col gap-4 text-base md:text-lg leading-relaxed">
                <p>Looking for a better way to manage your accounting, payroll, HR, or financial operations?</p>
                <p>At <span className="font-semibold text-[#13363B]">10TEN Consulting Services</span>, we believe the best solutions start with a conversation. Tell us a little about your organisation, your role, and what you are looking to achieve, and our team will get in touch to understand your requirements and explore how we can help.</p>
                <p>Whether you are considering Sage Intacct, looking to improve your Payroll & HR environment, or considering Outsourced Accounting Services, we would be happy to discuss your needs and demonstrate how our solutions can support your organisation.</p>
                <p className="font-medium text-[#001b3c]">Complete the form below and we will be in touch within one business day to arrange a consultation or demonstration.</p>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white shadow-xl rounded-2xl p-8 md:p-10 border border-gray-100">
              <h3 className="text-3xl font-bold text-[#001b3c] mb-2">Request a Demo</h3>
              <p className="text-gray-500 mb-8 font-medium">Tell Us About Yourself</p>
              
              <form className="flex flex-col gap-5 w-full" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-[#001b3c]">Name and Surname <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    placeholder="Enter your full name" 
                    className="bg-gray-50 w-full px-4 py-3.5 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#13363B] focus:bg-white border border-gray-200 transition-all" 
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-[#001b3c]">Company Name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    placeholder="Enter your company name" 
                    className="bg-gray-50 w-full px-4 py-3.5 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#13363B] focus:bg-white border border-gray-200 transition-all" 
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-[#001b3c]">Business Email <span className="text-red-500">*</span></label>
                    <input 
                      type="email" 
                      placeholder="you@yourcompany.co.za" 
                      className="bg-gray-50 w-full px-4 py-3.5 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#13363B] focus:bg-white border border-gray-200 transition-all" 
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-[#001b3c]">Contact Number <span className="text-red-500">*</span></label>
                    <input 
                      type="tel" 
                      placeholder="Enter your contact number" 
                      className="bg-gray-50 w-full px-4 py-3.5 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#13363B] focus:bg-white border border-gray-200 transition-all" 
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-[#001b3c]">Job Title <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    placeholder="e.g. CFO, Finance Manager, Financial Director, Business Owner" 
                    className="bg-gray-50 w-full px-4 py-3.5 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#13363B] focus:bg-white border border-gray-200 transition-all" 
                  />
                </div>

                <div className="flex flex-col gap-1.5 mb-2">
                  <label className="text-sm font-semibold text-[#001b3c]">Number of Employees <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <select defaultValue="" className="bg-gray-50 w-full px-4 py-3.5 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#13363B] focus:bg-white border border-gray-200 transition-all appearance-none pr-10">
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

                <button type="submit" className="bg-[#13363B] hover:bg-[#001b3c] text-white font-bold rounded-lg px-8 py-4 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full mt-2 text-sm uppercase tracking-wide">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
