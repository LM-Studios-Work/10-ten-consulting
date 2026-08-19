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
        <div className="absolute inset-0 bg-[#004b87] mix-blend-multiply opacity-80 z-10"></div>
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
              <span className="material-symbols-outlined text-[#0080ff] text-4xl">account_tree</span>
              <h2 className="text-3xl font-bold text-[#001b3c]">Sage Intacct Licensing & Implementation</h2>
            </div>
            <p className="text-gray-600 mb-8 text-lg">
              Modernise Your Financial Management. Sage Intacct is a powerful cloud-based financial management platform designed to give organisations greater visibility, control, automation, and scalability.
            </p>
            <div className="flex flex-col gap-6">
              <div>
                <h4 className="font-bold text-[#001b3c] mb-2 text-lg">Licensing & Strategy</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#0080ff] text-sm mt-1">check</span> Product selection & user requirements</li>
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#0080ff] text-sm mt-1">check</span> Entity & module requirements</li>
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#0080ff] text-sm mt-1">check</span> Expansion considerations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#001b3c] mb-2 text-lg">Implementation & Support</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#0080ff] text-sm mt-1">check</span> Requirements gathering & solution design</li>
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#0080ff] text-sm mt-1">check</span> Data migration & system testing</li>
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#0080ff] text-sm mt-1">check</span> User training & go-live support</li>
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
              <span className="material-symbols-outlined text-[#0080ff] text-4xl">groups</span>
              <h2 className="text-3xl font-bold text-[#001b3c]">Payroll & HR</h2>
            </div>
            <p className="text-gray-600 mb-8 text-lg">
              Empower Your People. Simplify Your Processes. Managing payroll and HR effectively requires accurate information, reliable processes, strong controls, and technology that can support your organisation as it grows.
            </p>
            <div className="flex flex-col gap-6">
              <div>
                <h4 className="font-bold text-[#001b3c] mb-2 text-lg">Payroll Solutions</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#0080ff] text-sm mt-1">check</span> Payroll processing & administration</li>
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#0080ff] text-sm mt-1">check</span> Leave management & reporting</li>
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#0080ff] text-sm mt-1">check</span> Statutory requirements & controls</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#001b3c] mb-2 text-lg">HR Solutions</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#0080ff] text-sm mt-1">check</span> Employee information management</li>
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#0080ff] text-sm mt-1">check</span> HR administration & reporting</li>
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#0080ff] text-sm mt-1">check</span> Employee lifecycle administration</li>
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
              <span className="material-symbols-outlined text-[#0080ff] text-4xl">finance</span>
              <h2 className="text-3xl font-bold text-[#001b3c]">Outsourced Accounting</h2>
            </div>
            <p className="text-gray-600 mb-8 text-lg">
              Your Finance Function. Our Expertise. We provide businesses access to professional financial support while allowing management to focus on running and growing the business.
            </p>
            <div className="flex flex-col gap-6">
              <div>
                <h4 className="font-bold text-[#001b3c] mb-2 text-lg">Bookkeeping & Reconciliations</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#0080ff] text-sm mt-1">check</span> General ledger management</li>
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#0080ff] text-sm mt-1">check</span> Accounts payable & receivable</li>
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#0080ff] text-sm mt-1">check</span> Bank & supplier reconciliations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#001b3c] mb-2 text-lg">Reporting & Analysis</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#0080ff] text-sm mt-1">check</span> Management accounts & financial reporting</li>
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#0080ff] text-sm mt-1">check</span> Budgeting & cash-flow forecasting</li>
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#0080ff] text-sm mt-1">check</span> Month-end close support</li>
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
              <span className="material-symbols-outlined text-[#0080ff] text-4xl">lightbulb</span>
              <h2 className="text-3xl font-bold text-[#001b3c]">Advisory & Strategy</h2>
            </div>
            <p className="text-gray-600 mb-8 text-lg">
              Navigate Complexity with Confidence. We help you map out the future of your financial ecosystem, identifying opportunities for growth, integration, and strategic cost-reduction.
            </p>
            <div className="flex flex-col gap-6">
              <div>
                <h4 className="font-bold text-[#001b3c] mb-2 text-lg">Process Optimisation</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#0080ff] text-sm mt-1">check</span> System integrations</li>
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#0080ff] text-sm mt-1">check</span> Operational assessments</li>
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[#0080ff] text-sm mt-1">check</span> Strategic planning</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 h-[500px] lg:h-auto">
            <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop" alt="Advisory Strategy" className="w-full h-full object-cover" />
          </div>
        </div>

      </section>
      
      {/* CTA Section */}
      <section className="bg-[#1f2937] py-20 px-8 w-full text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Contact our team of experts today to discuss how we can tailor our solutions to meet your specific needs.
        </p>
        <Link href="/contact" className="inline-block bg-[#0080ff] hover:bg-[#0066cc] text-white font-semibold px-8 py-4 rounded transition-colors shadow-lg">
          GET A CONSULTATION
        </Link>
      </section>
    </>
  )
}
