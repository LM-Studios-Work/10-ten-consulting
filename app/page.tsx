import Link from 'next/link';
import FAQ from '../components/FAQ';
import IndustriesSlideshow from '../components/IndustriesSlideshow';
import ServicesSlideshow from '../components/ServicesSlideshow';
import HeroAnimated from '../components/HeroAnimated';
import ApproachAnimated from '../components/ApproachAnimated';


export default function HomePage() {
  return (
    <>
      <HeroAnimated />

      {/* Section 2: About Us */}
      <section className="relative py-24 w-full z-10">
        <div className="px-margin-desktop max-w-container-max mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <h2 className="text-4xl font-bold text-white">About Us</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We are a premier South African firm dedicated to simplifying complex business challenges through advanced technology. By blending deep financial expertise with robust technical architecture, we empower organizations to scale efficiently and operate with unprecedented clarity. We believe that technology should not make business more complicated — it should make it simpler, smarter, more efficient, and more profitable.
            </p>
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-md">
                <span className="material-symbols-outlined text-[#F58220] text-3xl">book</span>
                <span className="font-semibold text-white text-lg">Tailored Financial Advisory</span>
              </div>
              <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-md">
                <span className="material-symbols-outlined text-[#F58220] text-3xl">emoji_objects</span>
                <span className="font-semibold text-white text-lg">Client-Centric Finance Support</span>
              </div>
            </div>
            <div className="mt-4">
              <Link href="/about" className="inline-block bg-[#F58220] hover:bg-[#D96E18] text-white font-semibold px-8 py-4 rounded-md transition-colors">
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
      <section className="py-24 w-full relative z-10">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-16 flex flex-col items-center gap-4">
            <span className="text-gray-400 font-semibold tracking-wider text-sm uppercase">Core Services</span>
            <h2 className="text-4xl font-bold text-white">Explore Our Services.</h2>
          </div>
          
          <ServicesSlideshow />
        </div>
      </section>

      {/* Section 4: Why Choose Us */}
      <section className="py-24 w-full relative z-10">
        <div className="px-margin-desktop max-w-container-max mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
             <img alt="Team working" className="rounded-lg shadow-xl w-full h-auto object-cover" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop"/>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div>
              <span className="text-[#F58220] font-semibold text-sm uppercase tracking-wider">Why Choose 10TEN?</span>
              <h2 className="text-4xl font-bold text-white mt-2">10TEN Knows How.</h2>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-2">Accounting & Technology Expertise</h4>
                <p className="text-gray-300">Deep roots in financial principles combined with mastery of modern software architecture ensures compliant and accurate systems.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-2">Client-Centric Approach</h4>
                <p className="text-gray-300">We prioritize your goals with customized solutions and personal attention, fostering long-term strategic partnerships.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-2">Proven Integrity</h4>
                <p className="text-gray-300">Built on trust and professionalism, our advice is backed by years of industry insight and a commitment to ethical conduct.</p>
              </div>
            </div>
            
            <p className="font-bold text-gray-200 mt-4 border-l-4 border-[#3D99A6] pl-4">
              These aspects collectively define the 10TEN advantage, where technology expertise, client-centricity, and a commitment to excellence converge to deliver exceptional services.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Industries We Serve */}
      <section className="py-24 w-full border-y border-white/10 relative z-10">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-16 flex flex-col items-center gap-2">
            <span className="text-[#F58220] font-semibold text-sm uppercase tracking-wider">Industries We Serve</span>
            <h2 className="text-4xl font-bold text-white">Focused Sector Solutions</h2>
          </div>
          
          <IndustriesSlideshow />
        </div>
      </section>

      <ApproachAnimated />

      {/* Section 7: Contact CTA */}
      <section className="relative py-32 flex items-center w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2938&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-[#13363B]/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 px-margin-desktop max-w-container-max mx-auto w-full flex flex-col items-center text-center gap-6">
          <span className="text-gray-200 font-semibold tracking-wider text-sm uppercase">Get To Know 10TEN</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white max-w-2xl leading-tight">
            Do You Have Any Questions?<br/>Feel Free To Contact Us.
          </h2>
          <div className="mt-4">
            <Link href="/contact" className="inline-block bg-[#F58220] hover:bg-[#D96E18] text-white font-semibold px-8 py-4 rounded-md transition-colors shadow-lg">
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section className="py-24 w-full relative z-10">
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
