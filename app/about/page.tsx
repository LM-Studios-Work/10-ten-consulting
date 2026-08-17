export const metadata = {
  title: 'About Us | 10TEN Consulting Services',
  description: 'Transforming Obstacles Into Effective Solutions.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 flex items-center px-margin-desktop max-w-container-max mx-auto overflow-hidden w-full">
        <div className="relative z-10 w-full md:w-3/4 flex flex-col gap-stack-lg">
          <h1 className="font-display-lg text-display-lg text-on-surface">
            About <span className="text-neon-green">10TEN Consulting Services</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Transforming Obstacles Into Effective Solutions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="glass-panel p-12 rounded-xl flex flex-col gap-12 relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-green rounded-full blur-[100px] opacity-10"></div>
          
          <div className="flex flex-col gap-6 relative z-10">
            <h2 className="font-headline-lg text-headline-lg text-on-surface border-l-4 border-neon-green pl-4">Who We Are</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              We believe that technology should not make business more complicated — it should make it simpler, smarter, more efficient, and more profitable.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              We are a proudly South African consulting and professional services firm specialising in Sage Intacct implementation and licensing, Payroll & HR solutions, and Outsourced Accounting Services. We work with organisations that want to improve the way they manage their financial information, business processes, people, and day-to-day operations through practical technology and professional expertise.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Our approach goes beyond simply installing or configuring software. We take the time to understand how your organisation operates, identify the challenges affecting your business, and design solutions that align technology, people, processes, and financial information.
            </p>
          </div>
        </div>

        {/* Core Expertise Grid */}
        <div className="mb-12">
          <h2 className="font-headline-lg text-headline-lg text-on-surface text-center mb-12">Our Core Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel p-8 rounded-xl border-t-4 border-t-neon-green">
              <div className="w-12 h-12 rounded-full bg-deep-navy border border-glass-border flex items-center justify-center text-neon-green mb-6">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>account_tree</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4">1. Sage Intacct Licensing & Implementation</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                As a Sage Business Partner, we provide Sage Intacct licensing, implementation, configuration, optimisation, training, and ongoing support. We support organisations through the complete implementation lifecycle.
              </p>
            </div>
            
            <div className="glass-panel p-8 rounded-xl border-t-4 border-t-consultant-orange">
              <div className="w-12 h-12 rounded-full bg-deep-navy border border-glass-border flex items-center justify-center text-consultant-orange mb-6">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4">2. Payroll & HR Solutions</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Through solutions including Sage 300 People, we help organisations manage critical HR and payroll functions while reducing unnecessary manual administration.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-xl border-t-4 border-t-neon-green">
              <div className="w-12 h-12 rounded-full bg-deep-navy border border-glass-border flex items-center justify-center text-neon-green mb-6">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>finance</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4">3. Outsourced Accounting Services</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                For growing businesses, SMEs, and organisations requiring additional financial capacity, we provide professional financial support without the cost and complexity of a large internal finance function.
              </p>
            </div>
          </div>
        </div>

        {/* The 10TEN Difference */}
        <div className="glass-panel p-12 rounded-xl flex flex-col gap-8">
          <h2 className="font-headline-lg text-headline-lg text-on-surface border-l-4 border-consultant-orange pl-4">The 10TEN Difference</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            We believe that the best solutions are not necessarily the most complicated ones. The best solutions are the ones that solve the right problem.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-neon-green text-3xl">lightbulb</span>
              <div>
                <h4 className="font-headline-md text-headline-md text-on-surface mb-2">Understand First</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">We seek to understand the business behind the problem before recommending a solution.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-neon-green text-3xl">handshake</span>
              <div>
                <h4 className="font-headline-md text-headline-md text-on-surface mb-2">Technology + Accounting</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">We bridge the gap between technology capabilities and practical accounting requirements.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-consultant-orange text-3xl">verified</span>
              <div>
                <h4 className="font-headline-md text-headline-md text-on-surface mb-2">Commitment</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">We approach every engagement with professionalism, accountability, and respect for our clients' businesses.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-consultant-orange text-3xl">trending_up</span>
              <div>
                <h4 className="font-headline-md text-headline-md text-on-surface mb-2">Sustainable Growth</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">Our mission is to empower organisations with tools that enable better decisions and long-term success.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
