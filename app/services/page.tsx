export const metadata = {
  title: 'Our Services | 10TEN Consulting Services',
  description: 'Business Solutions Designed Around Your Business.',
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 flex items-center px-margin-desktop max-w-container-max mx-auto overflow-hidden w-full">
        <div className="relative z-10 w-full md:w-3/4 flex flex-col gap-stack-lg">
          <h1 className="font-display-lg text-display-lg text-on-surface">
            Our <span className="text-neon-green">Services</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Business Solutions Designed Around Your Business.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-margin-desktop max-w-container-max mx-auto w-full flex flex-col gap-16">
        
        {/* Intro */}
        <div className="glass-panel p-8 rounded-xl">
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            At 10TEN Consulting Services, we provide professional technology, accounting, payroll, and business solutions designed to help organisations improve efficiency, strengthen financial management, and support sustainable growth.
          </p>
        </div>

        {/* 01 Sage Intacct */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4 border-b border-glass-border pb-4">
            <div className="w-16 h-16 rounded-full bg-deep-navy border border-neon-green flex items-center justify-center text-neon-green text-2xl font-bold">
              01
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Sage Intacct Licensing & Implementation</h2>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Modernise Your Financial Management. Sage Intacct is a powerful cloud-based financial management platform designed to give organisations greater visibility, control, automation, and scalability.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-panel p-6 rounded-lg border-l-2 border-l-neon-green">
              <h4 className="font-headline-md text-headline-md text-on-surface mb-2">Licensing & Strategy</h4>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">We assist organisations with selecting and structuring the appropriate Sage Intacct licensing environment based on their business requirements.</p>
              <ul className="space-y-2 text-on-surface-variant font-body-sm">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-neon-green text-sm">check</span> Product selection & user requirements</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-neon-green text-sm">check</span> Entity & module requirements</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-neon-green text-sm">check</span> Expansion considerations</li>
              </ul>
            </div>
            <div className="glass-panel p-6 rounded-lg border-l-2 border-l-neon-green">
              <h4 className="font-headline-md text-headline-md text-on-surface mb-2">Implementation & Support</h4>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">Our implementation services cover the journey from initial requirements through to go-live and post-implementation support.</p>
              <ul className="space-y-2 text-on-surface-variant font-body-sm">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-neon-green text-sm">check</span> Requirements gathering & solution design</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-neon-green text-sm">check</span> Data migration & system testing</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-neon-green text-sm">check</span> User training & go-live support</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 02 Payroll & HR */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4 border-b border-glass-border pb-4">
            <div className="w-16 h-16 rounded-full bg-deep-navy border border-consultant-orange flex items-center justify-center text-consultant-orange text-2xl font-bold">
              02
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Payroll & HR</h2>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Empower Your People. Simplify Your Processes. Managing payroll and HR effectively requires accurate information, reliable processes, strong controls, and technology that can support your organisation as it grows.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-panel p-6 rounded-lg border-l-2 border-l-consultant-orange">
              <h4 className="font-headline-md text-headline-md text-on-surface mb-2">Payroll Solutions</h4>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">We support organisations with the implementation, configuration, management, and optimisation of payroll environments.</p>
              <ul className="space-y-2 text-on-surface-variant font-body-sm">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-consultant-orange text-sm">check</span> Payroll processing & administration</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-consultant-orange text-sm">check</span> Leave management & reporting</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-consultant-orange text-sm">check</span> Statutory requirements & controls</li>
              </ul>
            </div>
            <div className="glass-panel p-6 rounded-lg border-l-2 border-l-consultant-orange">
              <h4 className="font-headline-md text-headline-md text-on-surface mb-2">HR Solutions</h4>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">Establish structured HR environments that support the management of employee information and key HR processes.</p>
              <ul className="space-y-2 text-on-surface-variant font-body-sm">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-consultant-orange text-sm">check</span> Employee information management</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-consultant-orange text-sm">check</span> HR administration & reporting</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-consultant-orange text-sm">check</span> Employee lifecycle administration</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 03 Outsourced Accounting */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4 border-b border-glass-border pb-4">
            <div className="w-16 h-16 rounded-full bg-deep-navy border border-neon-green flex items-center justify-center text-neon-green text-2xl font-bold">
              03
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Outsourced Accounting Services</h2>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Your Finance Function. Our Expertise. We provide businesses access to professional financial support while allowing management to focus on running and growing the business.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-panel p-6 rounded-lg border-l-2 border-l-neon-green">
              <h4 className="font-headline-md text-headline-md text-on-surface mb-2">Bookkeeping & Reconciliations</h4>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">Maintain accurate and up-to-date financial records to provide a reliable foundation for reporting.</p>
              <ul className="space-y-2 text-on-surface-variant font-body-sm">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-neon-green text-sm">check</span> General ledger management</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-neon-green text-sm">check</span> Accounts payable & receivable</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-neon-green text-sm">check</span> Bank & supplier reconciliations</li>
              </ul>
            </div>
            <div className="glass-panel p-6 rounded-lg border-l-2 border-l-neon-green">
              <h4 className="font-headline-md text-headline-md text-on-surface mb-2">Reporting & Analysis</h4>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">Transform accounting information into useful management insights and financial analysis.</p>
              <ul className="space-y-2 text-on-surface-variant font-body-sm">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-neon-green text-sm">check</span> Management accounts & financial reporting</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-neon-green text-sm">check</span> Budgeting & cash-flow forecasting</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-neon-green text-sm">check</span> Month-end close support</li>
              </ul>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}
