import Link from 'next/link'

export const metadata = {
  title: 'About Us | 10TEN Consulting Services',
  description: 'Transforming Obstacles Into Effective Solutions.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden w-full">
        <div className="absolute inset-0 bg-[#004b87] mix-blend-multiply opacity-80 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
          alt="About 10TEN Consulting" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-20 w-full text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            About Us
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-8 max-w-container-max mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 flex flex-col gap-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#001b3c]">About Us</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              We are a proudly South African consulting and professional services firm specialising in Sage Intacct implementation and licensing, Payroll & HR solutions, and Outsourced Accounting Services. We work with organisations that want to improve the way they manage their financial information, business processes, people, and day-to-day operations through practical technology and professional expertise.
            </p>
            
            <div className="flex flex-col gap-6 mt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="material-symbols-outlined text-[#0080ff]">lightbulb</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#001b3c]">Technology + Accounting</h4>
                  <p className="text-gray-600 mt-2">We bridge the gap between technology capabilities and practical accounting requirements.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="material-symbols-outlined text-[#0080ff]">handshake</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#001b3c]">Client-Centric Support</h4>
                  <p className="text-gray-600 mt-2">We approach every engagement with professionalism, accountability, and respect for our clients' businesses.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex gap-4 w-full h-[600px]">
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" alt="Consulting" className="w-1/2 h-full object-cover rounded-xl" />
            <div className="w-1/2 flex flex-col gap-4">
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" alt="Analysis" className="h-[48%] object-cover rounded-xl" />
              <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop" alt="Meeting" className="h-[48%] object-cover rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-[#1f2937] py-24 px-8 w-full">
        <div className="max-w-container-max mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
              alt="Leadership" 
              className="w-full aspect-[3/4] object-cover rounded-xl shadow-2xl" 
            />
          </div>
          <div className="lg:w-2/3 flex flex-col gap-4">
            <span className="text-[#0080ff] font-semibold tracking-wider text-sm">Leadership</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Placeholder Name, CPA</h2>
            <h3 className="text-xl text-gray-300 font-medium">Founder & Managing Director</h3>
            <div className="w-12 h-1 bg-[#0080ff] my-4"></div>
            <p className="text-gray-400 leading-relaxed text-lg">
              Our leadership brings extensive experience in Sage Intacct implementation, financial consulting, and business strategy. With a deep understanding of the unique challenges faced by growing organisations, we lead a team of dedicated professionals committed to delivering practical, high-impact solutions.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg mt-4">
              Prior to founding 10TEN Consulting, our managing director held senior roles in internal audit, compliance, and financial management, earning a reputation for professional integrity and actionable results in complex financial matters.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full">
        {/* Mission */}
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 bg-white flex items-center justify-center p-16 lg:p-24">
            <div className="max-w-lg">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#001b3c] mb-6">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                To empower organisations with practical technology solutions and professional expertise that simplify complexity, enable better decisions, and drive sustainable long-term success.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 h-[400px] lg:h-auto">
            <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop" alt="Mission" className="w-full h-full object-cover" />
          </div>
        </div>
        
        {/* Vision */}
        <div className="flex flex-col lg:flex-row-reverse">
          <div className="lg:w-1/2 bg-white flex items-center justify-center p-16 lg:p-24">
            <div className="max-w-lg">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#001b3c] mb-6">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                To become the foremost consulting firm in South Africa and a global benchmark for excellence, seamlessly blending local expertise with innovative technological solutions.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 h-[400px] lg:h-auto">
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="Vision" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-24 px-8 w-full">
        <div className="max-w-container-max mx-auto flex flex-col items-center">
          <span className="text-[#0080ff] font-semibold tracking-wider text-sm mb-4">Values</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#001b3c] text-center max-w-2xl mb-16 leading-tight">
            At 10TEN, Our Core Values Guide Every Decision
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {/* Value 1 */}
            <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-[#0080ff] text-4xl mb-6">workspace_premium</span>
              <h3 className="text-xl font-bold text-[#001b3c] mb-4">Trust</h3>
              <p className="text-gray-600">We build confidence through transparency and ethical conduct in every engagement.</p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-[#0080ff] text-4xl mb-6">public</span>
              <h3 className="text-xl font-bold text-[#001b3c] mb-4">Responsiveness</h3>
              <p className="text-gray-600">We remain agile to address client needs promptly and effectively.</p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-[#0080ff] text-4xl mb-6">verified_user</span>
              <h3 className="text-xl font-bold text-[#001b3c] mb-4">Integrity</h3>
              <p className="text-gray-600">Upholding honesty and professionalism in all our operations and client interactions.</p>
            </div>
            
            {/* Value 4 */}
            <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-[#0080ff] text-4xl mb-6">diamond</span>
              <h3 className="text-xl font-bold text-[#001b3c] mb-4">Excellence</h3>
              <p className="text-gray-600">We maintain the highest standards across all our services and solutions.</p>
            </div>
            
            {/* Value 5 */}
            <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-[#0080ff] text-4xl mb-6">diversity_3</span>
              <h3 className="text-xl font-bold text-[#001b3c] mb-4">Collaboration</h3>
              <p className="text-gray-600">We form strong partnerships with clients, working together for shared success.</p>
            </div>
            
            {/* Value 6 */}
            <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-[#0080ff] text-4xl mb-6">tips_and_updates</span>
              <h3 className="text-xl font-bold text-[#001b3c] mb-4">Innovation</h3>
              <p className="text-gray-600">Continuously seeking new ideas and cutting-edge solutions to stay ahead.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Expertise & CTA */}
      <section className="py-24 px-8 max-w-container-max mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 flex flex-col gap-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#001b3c]">Expertise</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              With a team of certified professionals and a legacy of success, 10TEN Consulting offers deep industry knowledge in software implementation, outsourced accounting, and business strategy. Our multidisciplinary approach ensures clients benefit from integrated solutions that uphold compliance and drive strategic growth.
            </p>
            <div>
              <Link href="/contact" className="inline-block bg-[#004b87] hover:bg-[#003866] text-white font-semibold px-8 py-4 rounded transition-colors shadow-lg hover:shadow-xl">
                GET A CONSULTATION
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2">
             <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop" alt="Team hands" className="w-full h-auto rounded-xl shadow-2xl" />
          </div>
        </div>
      </section>
    </>
  )
}
