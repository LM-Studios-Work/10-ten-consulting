export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center px-margin-desktop max-w-container-max mx-auto overflow-hidden w-full flex-grow">
        <div className="relative z-10 w-full md:w-2/3 lg:w-1/2 flex flex-col gap-stack-lg">
          <h1 className="font-display-lg text-display-lg text-on-surface">
            Transforming obstacles into <span className="text-neon-green">solutions.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Expertise in Sage Intacct, Payroll &amp; HR, and Outsourced Accounting driving technical precision and scalable growth for modern enterprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-consultant-orange text-white font-label-md text-label-md px-8 py-4 rounded hover:bg-opacity-90 transition-all shadow-lg hover:shadow-consultant-orange/20">
              Book a Consultation
            </button>
            <button className="bg-transparent border border-neon-green text-neon-green font-label-md text-label-md px-8 py-4 rounded hover:bg-neon-green/10 transition-all">
              Explore Services
            </button>
          </div>
        </div>
        {/* Abstract decorative tech element */}
        <div className="absolute right-[-10%] top-1/2 transform -translate-y-1/2 w-1/2 h-3/4 opacity-20 pointer-events-none hidden md:block">
          <div className="bg-contain bg-no-repeat bg-center w-full h-full opacity-50" data-alt="A sophisticated, abstract 3D render representing neural connectivity and data flow." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDiaROLgoJ1QjGITaJu67HrpLuzFtRtyOYYoILqCe7GiYZePp8spRAjHyylxAT3-lThgHZoqJYiZINr_hzgQ_2s7qYF1mZI3H2vv1hkJ28u4cOxOskHHDRLm5gbhjhv3nWYYTLVpyFrwFQRe-0VdPkHd7zsSgdck25cPA3B-xc4ojwlLSZNAOtlhkVkB2AzDaulu5earF0PFoMBG3Cp9TbzXCIUgq7GAiPnEX0x7j6i7LpwucpyL6IO')" }}></div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="glass-panel p-12 rounded-xl flex flex-col md:flex-row gap-12 items-center relative overflow-hidden">
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-neon-green rounded-full blur-[100px] opacity-10"></div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img alt="10TEN Consulting Logo" className="w-64 h-64 object-contain opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDafZujumCKO8SRrgrg1MsFc5QKd_j-Jl5P4-9NtztNIeQNrZzqT5z94H6rCkLwFtdJvRaDyokoILsD3oBfNT6t2HeCqoSkH6AcWyE-q_re5odTZnKZelEFqXSGbe7WKT2Y2_IZKickDKvGDDXYXqM9haFHffzmVO3WqPZEUafuLcOhgDsK7D8rxZ5g_OSAwbPtWeHX6HIYH6VbwBWaogLfBcQdEBbDXsssFbShEdKZkt8uUPdLKXTYWOAIpdBxknpwsQ"/>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-stack-md relative z-10">
            <h2 className="font-headline-lg text-headline-lg text-on-surface border-l-4 border-neon-green pl-4">About 10TEN</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              We are a premier South African firm dedicated to simplifying complex business challenges through advanced technology. By blending deep financial expertise with robust technical architecture, we empower organizations to scale efficiently and operate with unprecedented clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-24 px-margin-desktop bg-surface-container-lowest border-y border-glass-border w-full">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-16 flex flex-col items-center gap-4">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Core Offerings</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Foundational services engineered for precision, compliance, and strategic growth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="glass-panel rounded-xl p-8 flex flex-col items-center text-center gap-6 border-t-4 border-t-neon-green relative group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-neon-green/10 to-transparent pointer-events-none"></div>
              <div className="w-16 h-16 rounded-full bg-deep-navy border border-glass-border flex items-center justify-center text-neon-green z-10">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>account_tree</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface z-10">Sage Intacct</h3>
              <p className="font-body-md text-body-md text-on-surface-variant z-10">Licensing &amp; Implementation</p>
              <ul className="text-left font-body-md text-on-surface-variant w-full mt-4 space-y-2 z-10 border-t border-glass-border pt-4">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-neon-green text-sm">check</span> Architecture Design</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-neon-green text-sm">check</span> Data Migration</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-neon-green text-sm">check</span> Custom Workflows</li>
              </ul>
            </div>
            {/* Pillar 2 */}
            <div className="glass-panel rounded-xl p-8 flex flex-col items-center text-center gap-6 border-t-4 border-t-neon-green relative group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-neon-green/10 to-transparent pointer-events-none"></div>
              <div className="w-16 h-16 rounded-full bg-deep-navy border border-glass-border flex items-center justify-center text-neon-green z-10">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface z-10">Payroll &amp; HR</h3>
              <p className="font-body-md text-body-md text-on-surface-variant z-10">Comprehensive Management</p>
              <ul className="text-left font-body-md text-on-surface-variant w-full mt-4 space-y-2 z-10 border-t border-glass-border pt-4">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-neon-green text-sm">check</span> Compliance Tracking</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-neon-green text-sm">check</span> Automated Processing</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-neon-green text-sm">check</span> Employee Portals</li>
              </ul>
            </div>
            {/* Pillar 3 */}
            <div className="glass-panel rounded-xl p-8 flex flex-col items-center text-center gap-6 border-t-4 border-t-neon-green relative group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-neon-green/10 to-transparent pointer-events-none"></div>
              <div className="w-16 h-16 rounded-full bg-deep-navy border border-glass-border flex items-center justify-center text-neon-green z-10">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>finance</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface z-10">Outsourced Accounting</h3>
              <p className="font-body-md text-body-md text-on-surface-variant z-10">Strategic Financial Operations</p>
              <ul className="text-left font-body-md text-on-surface-variant w-full mt-4 space-y-2 z-10 border-t border-glass-border pt-4">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-neon-green text-sm">check</span> Month-End Close</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-neon-green text-sm">check</span> Financial Reporting</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-neon-green text-sm">check</span> Advisory Services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">The 10TEN Advantage</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">We bridge the gap between financial theory and technical execution.</p>
          </div>
          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="glass-panel p-6 rounded-lg flex items-start gap-4 border-l-2 border-l-consultant-orange">
              <span className="material-symbols-outlined text-consultant-orange mt-1">calculate</span>
              <div>
                <h4 className="font-headline-md text-headline-md text-on-surface mb-2">Accounting Expertise</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">Deep roots in financial principles ensuring compliant and accurate systems.</p>
              </div>
            </div>
            <div className="glass-panel p-6 rounded-lg flex items-start gap-4 border-l-2 border-l-neon-green">
              <span className="material-symbols-outlined text-neon-green mt-1">code_blocks</span>
              <div>
                <h4 className="font-headline-md text-headline-md text-on-surface mb-2">Technology Expertise</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">Mastery of modern software architecture and integration frameworks.</p>
              </div>
            </div>
            <div className="glass-panel p-6 rounded-lg flex items-start gap-4 border-l-2 border-l-neon-green">
              <span className="material-symbols-outlined text-neon-green mt-1">lightbulb</span>
              <div>
                <h4 className="font-headline-md text-headline-md text-on-surface mb-2">Business Understanding</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">Strategic alignment of technology with your specific operational goals.</p>
              </div>
            </div>
            <div className="glass-panel p-6 rounded-lg flex items-start gap-4 border-l-2 border-l-consultant-orange">
              <span className="material-symbols-outlined text-consultant-orange mt-1">trending_up</span>
              <div>
                <h4 className="font-headline-md text-headline-md text-on-surface mb-2">Scalable Solutions</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">Architectures designed to adapt and grow seamlessly with your enterprise.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
