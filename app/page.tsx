import Link from 'next/link';
import FAQ from '../components/FAQ';

export default function HomePage() {
  return (
    <>
      {/* Section 1: Hero Section */}
      <section className="relative min-h-[90vh] flex items-center w-full overflow-hidden">
        {/* Background Image & Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDiaROLgoJ1QjGITaJu67HrpLuzFtRtyOYYoILqCe7GiYZePp8spRAjHyylxAT3-lThgHZoqJYiZINr_hzgQ_2s7qYF1mZI3H2vv1hkJ28u4cOxOskHHDRLm5gbhjhv3nWYYTLVpyFrwFQRe-0VdPkHd7zsSgdck25cPA3B-xc4ojwlLSZNAOtlhkVkB2AzDaulu5earF0PFoMBG3Cp9TbzXCIUgq7GAiPnEX0x7j6i7LpwucpyL6IO')" }}
        >
          <div className="absolute inset-0 bg-black/60 bg-gradient-to-r from-black/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 px-margin-desktop max-w-container-max mx-auto w-full flex flex-col gap-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white max-w-3xl leading-tight">
            EASING BUSINESS<br/>COMPLEXITY
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
            With Expert Advisory, 10TEN Stands As A Trusted Partner For Businesses In South Africa And Internationally, Providing Expert Sage Intacct, Payroll & HR, And Outsourced Accounting Services.
          </p>
          <div className="mt-4">
            <Link href="/contact" className="inline-block bg-[#004b87] hover:bg-[#003866] text-white font-semibold px-8 py-4 rounded-md transition-colors shadow-lg">
              GET A CONSULTATION
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2: About Us */}
      <section className="py-24 bg-white w-full">
        <div className="px-margin-desktop max-w-container-max mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <h2 className="text-4xl font-bold text-gray-900">About Us</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We are a premier South African firm dedicated to simplifying complex business challenges through advanced technology. By blending deep financial expertise with robust technical architecture, we empower organizations to scale efficiently and operate with unprecedented clarity. We believe that technology should not make business more complicated — it should make it simpler, smarter, more efficient, and more profitable.
            </p>
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-center gap-4 bg-[#f4f7fa] p-4 rounded-md">
                <span className="material-symbols-outlined text-[#004b87] text-3xl">book</span>
                <span className="font-semibold text-gray-800 text-lg">Tailored Financial Advisory</span>
              </div>
              <div className="flex items-center gap-4 bg-[#f4f7fa] p-4 rounded-md">
                <span className="material-symbols-outlined text-[#004b87] text-3xl">emoji_objects</span>
                <span className="font-semibold text-gray-800 text-lg">Client-Centric Finance Support</span>
              </div>
            </div>
            <div className="mt-4">
              <Link href="/about" className="inline-block bg-[#004b87] hover:bg-[#003866] text-white font-semibold px-8 py-4 rounded-md transition-colors">
                LEARN MORE
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
             <img alt="Consultants working" className="rounded-lg shadow-md w-full h-full object-cover aspect-[3/4]" src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop"/>
             <img alt="Financial charts" className="rounded-lg shadow-md w-full h-full object-cover aspect-[3/4] mt-8" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"/>
          </div>
        </div>
      </section>

      {/* Section 3: Core Services */}
      <section className="py-24 bg-[#1f2937] w-full">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-16 flex flex-col items-center gap-4">
            <span className="text-gray-400 font-semibold tracking-wider text-sm uppercase">Core Services</span>
            <h2 className="text-4xl font-bold text-white">Explore Our Services.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#111827] rounded-xl p-8 flex flex-col items-center text-center gap-4 hover:-translate-y-2 transition-transform duration-300 border-t-4 border-transparent hover:border-[#0080ff]">
              <span className="material-symbols-outlined text-5xl text-[#0080ff]">account_tree</span>
              <h3 className="text-xl font-bold text-white mt-2">Sage Intacct Licensing</h3>
              <p className="text-gray-400 text-sm">Implementation, configuration, optimisation, training, and ongoing support for Sage Intacct.</p>
            </div>
            <div className="bg-[#111827] rounded-xl p-8 flex flex-col items-center text-center gap-4 hover:-translate-y-2 transition-transform duration-300 border-t-4 border-transparent hover:border-[#0080ff]">
              <span className="material-symbols-outlined text-5xl text-[#0080ff]">groups</span>
              <h3 className="text-xl font-bold text-white mt-2">Payroll & HR</h3>
              <p className="text-gray-400 text-sm">Manage critical HR and payroll functions while reducing unnecessary manual administration.</p>
            </div>
            <div className="bg-[#111827] rounded-xl p-8 flex flex-col items-center text-center gap-4 hover:-translate-y-2 transition-transform duration-300 border-t-4 border-transparent hover:border-[#0080ff]">
              <span className="material-symbols-outlined text-5xl text-[#0080ff]">finance</span>
              <h3 className="text-xl font-bold text-white mt-2">Outsourced Accounting</h3>
              <p className="text-gray-400 text-sm">Professional financial support for SMEs without the cost of a large internal finance function.</p>
            </div>
            <div className="bg-[#111827] rounded-xl p-8 flex flex-col items-center text-center gap-4 hover:-translate-y-2 transition-transform duration-300 border-t-4 border-transparent hover:border-[#0080ff]">
              <span className="material-symbols-outlined text-5xl text-[#0080ff]">lightbulb</span>
              <h3 className="text-xl font-bold text-white mt-2">Advisory & Strategy</h3>
              <p className="text-gray-400 text-sm">Strategic consulting to align your technology capabilities with practical business requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Why Choose Us */}
      <section className="py-24 bg-white w-full">
        <div className="px-margin-desktop max-w-container-max mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
             <img alt="Team working" className="rounded-lg shadow-xl w-full h-auto object-cover" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop"/>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div>
              <span className="text-[#004b87] font-semibold text-sm uppercase tracking-wider">Why Choose 10TEN?</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2">10TEN Knows How.</h2>
            </div>
            
            <div className="flex flex-col gap-6">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Accounting & Technology Expertise</h4>
                <p className="text-gray-600">Deep roots in financial principles combined with mastery of modern software architecture ensures compliant and accurate systems.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Client-Centric Approach</h4>
                <p className="text-gray-600">We prioritize your goals with customized solutions and personal attention, fostering long-term strategic partnerships.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Proven Integrity</h4>
                <p className="text-gray-600">Built on trust and professionalism, our advice is backed by years of industry insight and a commitment to ethical conduct.</p>
              </div>
            </div>
            
            <p className="font-bold text-gray-800 mt-4 border-l-4 border-[#004b87] pl-4">
              These aspects collectively define the 10TEN advantage, where technology expertise, client-centricity, and a commitment to excellence converge to deliver exceptional services.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Industries We Serve */}
      <section className="py-24 bg-[#f8f9fa] w-full border-y border-gray-200">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-16 flex flex-col items-center gap-2">
            <span className="text-[#004b87] font-semibold text-sm uppercase tracking-wider">Industries We Serve</span>
            <h2 className="text-4xl font-bold text-gray-900">Focused Sector Solutions</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col gap-4">
              <span className="material-symbols-outlined text-4xl text-[#0080ff]">cloud</span>
              <h3 className="text-xl font-bold text-gray-900">SaaS & Software</h3>
              <p className="text-gray-600 text-sm">Providing specialized financial advisory and implementation services to streamline recurring revenue recognition and complex reporting.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col gap-4">
              <span className="material-symbols-outlined text-4xl text-[#0080ff]">medical_services</span>
              <h3 className="text-xl font-bold text-gray-900">Healthcare</h3>
              <p className="text-gray-600 text-sm">Helping healthcare organizations maintain compliance, improve financial visibility, and strengthen processes with robust technology.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col gap-4">
              <span className="material-symbols-outlined text-4xl text-[#0080ff]">business_center</span>
              <h3 className="text-xl font-bold text-gray-900">Professional Services</h3>
              <p className="text-gray-600 text-sm">Enhancing project profitability analysis, time tracking, and resource management for service-based businesses.</p>
            </div>
          </div>
          <div className="flex justify-center mt-12 gap-2">
            <div className="w-2 h-2 rounded-full bg-[#004b87]"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </section>

      {/* Section 6: Our Approach */}
      <section className="py-24 bg-white w-full overflow-hidden">
        <div className="px-margin-desktop max-w-container-max mx-auto flex flex-col items-center">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Our Approach</h2>
            <p className="text-gray-500 mt-2">Clarity Through Expertise</p>
          </div>
          
          <div className="relative w-full max-w-4xl aspect-square md:aspect-video flex items-center justify-center">
            {/* Center Circle */}
            <div className="relative z-10 w-48 h-48 rounded-full bg-white border-[8px] border-[#004b87] flex flex-col items-center justify-center shadow-lg text-center p-4">
              <span className="text-[#0080ff] font-bold text-sm">OUR APPROACH</span>
              <span className="text-gray-900 font-bold text-lg leading-tight mt-1">CLARITY<br/>THROUGH<br/>EXPERTISE</span>
            </div>
            
            {/* Outer Circular Elements - Simplified for responsiveness */}
            <div className="absolute inset-0 hidden md:flex items-center justify-center">
               <div className="w-[300px] h-[300px] border-4 border-dashed border-gray-200 rounded-full animate-[spin_60s_linear_infinite]"></div>
            </div>

            {/* Connecting Lines and Content Boxes */}
            <div className="absolute inset-0 w-full h-full">
              {/* Box 1: Understand First */}
              <div className="absolute top-[10%] left-[5%] md:left-[10%] bg-white p-4 rounded-lg shadow-md max-w-[250px] border-t-4 border-[#0080ff]">
                <h4 className="font-bold text-gray-900 text-sm">1. Understand First</h4>
                <p className="text-xs text-gray-600 mt-1">We seek to understand the business behind the problem before recommending a solution.</p>
              </div>
              
              {/* Box 2: Assess */}
              <div className="absolute top-[10%] right-[5%] md:right-[10%] bg-white p-4 rounded-lg shadow-md max-w-[250px] border-t-4 border-[#0080ff]">
                <h4 className="font-bold text-gray-900 text-sm">2. Thorough Assessment</h4>
                <p className="text-xs text-gray-600 mt-1">Evaluating current financial data, systems, and processes to establish a strong foundation.</p>
              </div>

              {/* Box 3: Solution */}
              <div className="absolute top-[45%] right-[2%] md:right-[5%] bg-white p-4 rounded-lg shadow-md max-w-[250px] border-t-4 border-[#0080ff]">
                <h4 className="font-bold text-gray-900 text-sm">3. Tailored Solution</h4>
                <p className="text-xs text-gray-600 mt-1">Designing architectures and workflows tailored to adapt and grow seamlessly with your enterprise.</p>
              </div>

              {/* Box 4: Implementation */}
              <div className="absolute bottom-[10%] right-[5%] md:right-[10%] bg-white p-4 rounded-lg shadow-md max-w-[250px] border-t-4 border-[#0080ff]">
                <h4 className="font-bold text-gray-900 text-sm">4. Seamless Execution</h4>
                <p className="text-xs text-gray-600 mt-1">Bridging the gap between technology capabilities and practical accounting requirements.</p>
              </div>

              {/* Box 5: Support */}
              <div className="absolute bottom-[10%] left-[5%] md:left-[10%] bg-white p-4 rounded-lg shadow-md max-w-[250px] border-t-4 border-[#0080ff]">
                <h4 className="font-bold text-gray-900 text-sm">5. Continuous Support</h4>
                <p className="text-xs text-gray-600 mt-1">Approaching every engagement with professionalism and ongoing support for sustainable growth.</p>
              </div>
              
               {/* Box 6: Report */}
              <div className="absolute top-[45%] left-[2%] md:left-[5%] bg-white p-4 rounded-lg shadow-md max-w-[250px] border-t-4 border-[#0080ff]">
                <h4 className="font-bold text-gray-900 text-sm">6. Insightful Reporting</h4>
                <p className="text-xs text-gray-600 mt-1">Delivering reliable insights and comprehensive reports that empower better decision making.</p>
              </div>
            </div>
            
            {/* Mobile Fallback list (shown when absolute positioning might overlap on very small screens) */}
            <div className="absolute inset-0 bg-white z-20 flex flex-col justify-center items-center p-4 md:hidden overflow-y-auto">
               <h3 className="text-2xl font-bold mb-6">Clarity Through Expertise</h3>
               <ul className="space-y-4 max-w-sm">
                 <li className="bg-gray-50 p-3 rounded border-l-4 border-[#0080ff]"><span className="font-bold">1. Understand First:</span> Grasp the business behind the problem.</li>
                 <li className="bg-gray-50 p-3 rounded border-l-4 border-[#0080ff]"><span className="font-bold">2. Thorough Assessment:</span> Evaluate systems and processes.</li>
                 <li className="bg-gray-50 p-3 rounded border-l-4 border-[#0080ff]"><span className="font-bold">3. Tailored Solution:</span> Design scalable architectures.</li>
                 <li className="bg-gray-50 p-3 rounded border-l-4 border-[#0080ff]"><span className="font-bold">4. Seamless Execution:</span> Bridge technology and accounting.</li>
                 <li className="bg-gray-50 p-3 rounded border-l-4 border-[#0080ff]"><span className="font-bold">5. Continuous Support:</span> Provide ongoing assistance.</li>
                 <li className="bg-gray-50 p-3 rounded border-l-4 border-[#0080ff]"><span className="font-bold">6. Insightful Reporting:</span> Deliver reliable business insights.</li>
               </ul>
            </div>
          </div>
          
          <div className="text-center max-w-3xl mx-auto mt-12 md:mt-24 hidden md:block">
            <p className="text-gray-600">
              At 10TEN, our commitment to excellence is reflected in our approach to each engagement. We initiate with a thorough analysis of financial data, documents, and transactions to establish a strong foundation. We maintain objectives to deliver reliable and sustainable results, communicating complex financial matters clearly through expert advisory services. With a client-centric focus, we tailor our approach to meet specific needs and align with our clients' goals, ensuring impactful and trustworthy outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Contact CTA */}
      <section className="relative py-32 flex items-center w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2938&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-[#004b87]/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 px-margin-desktop max-w-container-max mx-auto w-full flex flex-col items-center text-center gap-6">
          <span className="text-gray-200 font-semibold tracking-wider text-sm uppercase">Get To Know 10TEN</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white max-w-2xl leading-tight">
            Do You Have Any Questions?<br/>Feel Free To Contact Us.
          </h2>
          <div className="mt-4">
            <Link href="/contact" className="inline-block bg-[#0080ff] hover:bg-[#0066cc] text-white font-semibold px-8 py-4 rounded-md transition-colors shadow-lg">
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section className="py-24 bg-[#1f2937] w-full">
        <div className="px-margin-desktop max-w-container-max mx-auto flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-1/3">
             <img alt="Professional consultant" className="rounded-lg shadow-xl w-full h-auto object-cover" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop"/>
          </div>
          <div className="w-full lg:w-2/3 flex flex-col gap-8">
            <div>
              <span className="text-gray-400 font-semibold text-sm uppercase tracking-wider">FAQ</span>
              <h2 className="text-4xl font-bold text-white mt-2">Frequently Asked Questions</h2>
            </div>
            
            <FAQ />
          </div>
        </div>
      </section>
    </>
  )
}
