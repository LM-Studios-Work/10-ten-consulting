export const metadata = {
  title: 'Industry Expertise | 10TEN Consulting Services',
  description: 'Solutions Designed Around Your Industry.',
}

export default function IndustriesPage() {
  const industries = [
    { name: 'SaaS & Software', icon: 'cloud' },
    { name: 'Nonprofits', icon: 'volunteer_activism' },
    { name: 'Professional Services', icon: 'business_center' },
    { name: 'Healthcare', icon: 'medical_services' },
    { name: 'Financial Services', icon: 'account_balance' },
    { name: 'Hospitality', icon: 'restaurant' },
    { name: 'Construction & Real Estate', icon: 'domain' },
    { name: 'Retail', icon: 'storefront' },
    { name: 'Distribution', icon: 'local_shipping' },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 flex items-center px-margin-desktop max-w-container-max mx-auto overflow-hidden w-full">
        <div className="relative z-10 w-full md:w-3/4 flex flex-col gap-stack-lg">
          <h1 className="font-display-lg text-display-lg text-on-surface">
            Industry <span className="text-neon-green">Expertise</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Solutions Designed Around Your Industry.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-16 mb-16">
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h2 className="font-headline-lg text-headline-lg text-on-surface border-l-4 border-neon-green pl-4">Your Industry is Unique</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              At 10TEN Consulting Services, we understand that every industry operates differently. The financial processes, operational requirements, reporting needs, compliance considerations, and technology challenges of a software business are different from those of a healthcare organisation, professional services firm, retailer, or construction company.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              That is why we take an industry-focused approach to our solutions. Rather than applying a one-size-fits-all model, we take the time to understand the unique characteristics of your industry, the way your organisation operates, and the challenges you face. We then align our accounting technology, payroll and HR, and outsourced finance solutions with those requirements.
            </p>
          </div>
          <div className="w-full lg:w-1/2 glass-panel p-8 rounded-xl flex items-center justify-center relative overflow-hidden">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-consultant-orange rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
             <p className="font-headline-md text-headline-md text-on-surface text-center relative z-10">
               "Our goal is to help organisations in diverse industries simplify complexity, improve financial visibility, strengthen processes, and create scalable foundations for growth."
             </p>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="mb-16">
          <h2 className="font-headline-lg text-headline-lg text-on-surface text-center mb-12">Industries We Serve</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="glass-panel p-6 rounded-lg flex flex-col items-center justify-center text-center gap-4 hover:-translate-y-1 transition-transform border-t-2 border-t-neon-green group">
                <span className="material-symbols-outlined text-4xl text-neon-green group-hover:text-consultant-orange transition-colors" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {industry.icon}
                </span>
                <h4 className="font-headline-md text-headline-md text-on-surface">{industry.name}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Whether you operate in a highly specialised sector or a rapidly evolving market, we bring a combination of accounting expertise, business understanding, and technology capability to help your organisation operate more effectively.
          </p>
          <h3 className="font-headline-md text-headline-md text-neon-green mt-8">Your industry is unique. Your solution should be too.</h3>
        </div>
      </section>
    </>
  )
}
