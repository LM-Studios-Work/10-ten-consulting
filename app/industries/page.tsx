import Link from 'next/link'

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
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden w-full">
        <div className="absolute inset-0 bg-[#004b87] mix-blend-multiply opacity-80 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Industry Expertise" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-20 w-full text-center px-4 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
            Industry Expertise
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Solutions Designed Around Your Industry.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-8 max-w-container-max mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#001b3c]">Your Industry is Unique</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              At 10TEN Consulting Services, we understand that every industry operates differently. The financial processes, operational requirements, reporting needs, compliance considerations, and technology challenges of a software business are different from those of a healthcare organisation, professional services firm, retailer, or construction company.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              That is why we take an industry-focused approach to our solutions. Rather than applying a one-size-fits-all model, we take the time to understand the unique characteristics of your industry, the way your organisation operates, and the challenges you face. We then align our accounting technology, payroll and HR, and outsourced finance solutions with those requirements.
            </p>
          </div>
          <div className="w-full lg:w-1/2 bg-[#004b87] p-12 rounded-xl flex items-center justify-center relative overflow-hidden shadow-2xl">
             <p className="text-2xl font-medium text-white text-center italic relative z-10 leading-relaxed">
               "Our goal is to help organisations in diverse industries simplify complexity, improve financial visibility, strengthen processes, and create scalable foundations for growth."
             </p>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="mb-24">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#001b3c] text-center mb-16">Industries We Serve</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center gap-6 hover:shadow-lg hover:-translate-y-1 transition-all group">
                <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-[#004b87] transition-colors duration-300">
                  <span className="material-symbols-outlined text-4xl text-[#0080ff] group-hover:text-white transition-colors duration-300">
                    {industry.icon}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-[#001b3c]">{industry.name}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto bg-gray-50 p-12 rounded-xl border border-gray-100">
          <p className="text-gray-600 leading-relaxed text-lg mb-6">
            Whether you operate in a highly specialised sector or a rapidly evolving market, we bring a combination of accounting expertise, business understanding, and technology capability to help your organisation operate more effectively.
          </p>
          <h3 className="text-2xl font-bold text-[#004b87]">Your industry is unique. Your solution should be too.</h3>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-[#1f2937] py-20 px-8 w-full text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Discuss Your Industry Challenges</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Contact us today to find out how our industry-specific expertise can help your organisation.
        </p>
        <Link href="/contact" className="inline-block bg-[#0080ff] hover:bg-[#0066cc] text-white font-semibold px-8 py-4 rounded transition-colors shadow-lg">
          GET A CONSULTATION
        </Link>
      </section>
    </>
  )
}
