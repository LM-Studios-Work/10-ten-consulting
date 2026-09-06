import Link from 'next/link';
import FAQ from '../components/FAQ';
import IndustriesSlideshow from '../components/IndustriesSlideshow';

const RingSegment = ({ startAngle, endAngle, color }: { startAngle: number; endAngle: number; color: string }) => {
  const innerRadius = 160;
  const outerRadius = 220;
  const cx = 500;
  const cy = 400;

  const getCoordinatesForAngle = (angle: number) => {
    const angleInRadians = (angle - 90) * Math.PI / 180.0;
    return {
      x: cx + (outerRadius * Math.cos(angleInRadians)),
      y: cy + (outerRadius * Math.sin(angleInRadians)),
      ix: cx + (innerRadius * Math.cos(angleInRadians)),
      iy: cy + (innerRadius * Math.sin(angleInRadians))
    };
  };

  const start = getCoordinatesForAngle(startAngle + 2);
  const end = getCoordinatesForAngle(endAngle - 2);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  const d = [
    "M", start.x, start.y,
    "A", outerRadius, outerRadius, 0, largeArcFlag, 1, end.x, end.y,
    "L", end.ix, end.iy,
    "A", innerRadius, innerRadius, 0, largeArcFlag, 0, start.ix, start.iy,
    "Z"
  ].join(" ");

  return <path d={d} fill={color} />;
};

export default function HomePage() {
  return (
    <>
      {/* Section 1: Hero Section */}
      <section className="relative min-h-[90vh] flex items-center w-full overflow-hidden">
        {/* Transparent Overlay for Hero */}
        <div className="absolute inset-0 bg-transparent z-0"></div>
        
        <div className="relative z-10 px-margin-desktop max-w-container-max mx-auto w-full flex flex-col gap-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white max-w-3xl leading-tight">
            EASING BUSINESS<br/>COMPLEXITY
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
            With Expert Advisory, 10TEN Stands As A Trusted Partner For Businesses In South Africa And Internationally, Providing Expert Sage Intacct, Payroll & HR, And Outsourced Accounting Services.
          </p>
          <div className="mt-4">
            <Link href="/contact" className="inline-block bg-[#13363B] hover:bg-[#0C2225] text-white font-semibold px-8 py-4 rounded-md transition-colors shadow-lg">
              GET A CONSULTATION
            </Link>
          </div>
        </div>
      </section>

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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 flex flex-col items-center text-center gap-4 hover:-translate-y-2 transition-transform duration-300 shadow-md">
              <span className="material-symbols-outlined text-5xl text-[#3D99A6]">account_tree</span>
              <h3 className="text-xl font-bold text-white mt-2">Sage Intacct</h3>
              <p className="text-gray-300 text-sm">Implementation, configuration, optimisation, training, and ongoing support for Sage Intacct.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 flex flex-col items-center text-center gap-4 hover:-translate-y-2 transition-transform duration-300 shadow-md">
              <span className="material-symbols-outlined text-5xl text-[#3D99A6]">groups</span>
              <h3 className="text-xl font-bold text-white mt-2">Payroll & HR</h3>
              <p className="text-gray-300 text-sm">Manage critical HR and payroll functions while reducing unnecessary manual administration.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 flex flex-col items-center text-center gap-4 hover:-translate-y-2 transition-transform duration-300 shadow-md">
              <span className="material-symbols-outlined text-5xl text-[#3D99A6]">finance</span>
              <h3 className="text-xl font-bold text-white mt-2">Outsourced Accounting</h3>
              <p className="text-gray-300 text-sm">Professional financial support for SMEs without the cost of a large internal finance function.</p>
            </div>
          </div>
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

      {/* Section 6: Our Approach */}
      <section className="py-24 w-full overflow-hidden relative z-10">
        <div className="px-margin-desktop max-w-container-max mx-auto flex flex-col items-center">
          <div className="text-center mb-8 hidden lg:block">
            <h2 className="text-4xl font-bold text-white">Our Approach</h2>
            <p className="text-[#F58220] font-semibold mt-2 tracking-widest uppercase text-sm">Clarity Through Expertise</p>
          </div>
          
          {/* Desktop Diagram */}
          <div className="relative w-full max-w-[1000px] aspect-[5/3] hidden lg:block mx-auto mt-4">
            {/* SVG Background for Donuts and Lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 100 1000 600">
              {/* Connecting Lines */}
              <g fill="none" strokeWidth="2">
                {/* 10 o'clock - Understand First */}
                <path d="M 309.5 290 L 20 290" stroke="#3D99A6" />
                {/* 12 o'clock - Thorough Assessment */}
                <path d="M 500 180 L 500 120 L 980 120" stroke="#2A6F78" />
                {/* 2 o'clock - Tailored Solution */}
                <path d="M 690.5 290 L 980 290" stroke="#13363B" />
                {/* 4 o'clock - Seamless Execution */}
                <path d="M 690.5 510 L 980 510" stroke="#0C2225" />
                {/* 6 o'clock - Continuous Support */}
                <path d="M 500 620 L 500 680 L 20 680" stroke="#D96E18" />
                {/* 8 o'clock - Insightful Reporting */}
                <path d="M 309.5 510 L 20 510" stroke="#F58220" />
              </g>

              {/* Outer Ring Segments */}
              <RingSegment startAngle={270} endAngle={330} color="#3D99A6" />
              <RingSegment startAngle={330} endAngle={390} color="#2A6F78" />
              <RingSegment startAngle={30} endAngle={90} color="#13363B" />
              <RingSegment startAngle={90} endAngle={150} color="#0C2225" />
              <RingSegment startAngle={150} endAngle={210} color="#D96E18" />
              <RingSegment startAngle={210} endAngle={270} color="#F58220" />
            </svg>

            {/* Center Text Circle */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-black/40 backdrop-blur-md rounded-full flex flex-col items-center justify-center px-4 py-2 text-center shadow-2xl z-10 border border-white/20">
              <span className="text-[#F58220] font-bold text-xs tracking-widest uppercase mb-1 mt-2">Our Approach</span>
              <h2 className="text-xl font-bold text-white mb-2 leading-tight">CLARITY THROUGH EXPERTISE</h2>
              <p className="text-xs text-gray-300 leading-relaxed px-4 pb-2">
                We deliver clarity through expert financial advisory. By tailoring solutions to your specific needs, we build a strong foundation that drives sustainable, long-term growth.
              </p>
            </div>

            {/* Icons */}
            <div className="absolute w-12 h-12 bg-black/60 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center shadow-lg transform -translate-x-1/2 -translate-y-1/2" style={{ left: '33.55%', top: '34.17%' }}>
              <span className="material-symbols-outlined text-[#3D99A6] text-xl">handshake</span>
            </div>
            <div className="absolute w-12 h-12 bg-black/60 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center shadow-lg transform -translate-x-1/2 -translate-y-1/2" style={{ left: '50%', top: '18.33%' }}>
              <span className="material-symbols-outlined text-[#2A6F78] text-xl">search</span>
            </div>
            <div className="absolute w-12 h-12 bg-black/60 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center shadow-lg transform -translate-x-1/2 -translate-y-1/2" style={{ left: '66.45%', top: '34.17%' }}>
              <span className="material-symbols-outlined text-[#3D99A6] text-xl">design_services</span>
            </div>
            <div className="absolute w-12 h-12 bg-black/60 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center shadow-lg transform -translate-x-1/2 -translate-y-1/2" style={{ left: '66.45%', top: '65.83%' }}>
              <span className="material-symbols-outlined text-[#3D99A6] text-xl">engineering</span>
            </div>
            <div className="absolute w-12 h-12 bg-black/60 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center shadow-lg transform -translate-x-1/2 -translate-y-1/2" style={{ left: '50%', top: '81.67%' }}>
              <span className="material-symbols-outlined text-[#F58220] text-xl">support_agent</span>
            </div>
            <div className="absolute w-12 h-12 bg-black/60 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center shadow-lg transform -translate-x-1/2 -translate-y-1/2" style={{ left: '33.55%', top: '65.83%' }}>
              <span className="material-symbols-outlined text-[#F58220] text-xl">bar_chart</span>
            </div>

            {/* Text Boxes (Left Side: 2%, Right Side: 74%, Width: 24%) */}
            
            {/* 1. Understand First (10 o'clock - Left, Y: 31.67%) */}
            <div className="absolute w-[24%] flex flex-col justify-end pb-2" style={{ left: '2%', bottom: '68.33%' }}>
              <h4 className="font-bold text-white text-sm leading-tight">1. Understand First</h4>
            </div>
            <div className="absolute w-[24%] flex flex-col justify-start pt-2" style={{ left: '2%', top: '31.67%' }}>
              <p className="text-xs text-gray-300 leading-snug">Understanding your business challenges before recommending solutions.</p>
            </div>

            {/* 2. Thorough Assessment (12 o'clock - Right, Y: 3.33%) */}
            <div className="absolute w-[24%] flex flex-col justify-end pb-2" style={{ left: '74%', bottom: '96.67%' }}>
              <h4 className="font-bold text-white text-sm leading-tight">2. Thorough Assessment</h4>
            </div>
            <div className="absolute w-[24%] flex flex-col justify-start pt-2" style={{ left: '74%', top: '3.33%' }}>
              <p className="text-xs text-gray-300 leading-snug">Evaluating financial data and systems to build a strong foundation.</p>
            </div>

            {/* 3. Tailored Solution (2 o'clock - Right, Y: 31.67%) */}
            <div className="absolute w-[24%] flex flex-col justify-end pb-2" style={{ left: '74%', bottom: '68.33%' }}>
              <h4 className="font-bold text-white text-sm leading-tight">3. Tailored Solution</h4>
            </div>
            <div className="absolute w-[24%] flex flex-col justify-start pt-2" style={{ left: '74%', top: '31.67%' }}>
              <p className="text-xs text-gray-300 leading-snug">Designing scalable architectures tailored to your specific enterprise needs.</p>
            </div>

            {/* 4. Seamless Execution (4 o'clock - Right, Y: 68.33%) */}
            <div className="absolute w-[24%] flex flex-col justify-end pb-2" style={{ left: '74%', bottom: '31.67%' }}>
              <h4 className="font-bold text-white text-sm leading-tight">4. Seamless Execution</h4>
            </div>
            <div className="absolute w-[24%] flex flex-col justify-start pt-2" style={{ left: '74%', top: '68.33%' }}>
              <p className="text-xs text-gray-300 leading-snug">Bridging the gap between technology and practical accounting requirements.</p>
            </div>

            {/* 5. Continuous Support (6 o'clock - Left, Y: 96.67%) */}
            <div className="absolute w-[24%] flex flex-col justify-end pb-2" style={{ left: '2%', bottom: '3.33%' }}>
              <h4 className="font-bold text-white text-sm leading-tight">5. Continuous Support</h4>
            </div>
            <div className="absolute w-[24%] flex flex-col justify-start pt-2" style={{ left: '2%', top: '96.67%' }}>
              <p className="text-xs text-gray-300 leading-snug">Providing professional, ongoing support to ensure sustainable business growth.</p>
            </div>

            {/* 6. Insightful Reporting (8 o'clock - Left, Y: 68.33%) */}
            <div className="absolute w-[24%] flex flex-col justify-end pb-2" style={{ left: '2%', bottom: '31.67%' }}>
              <h4 className="font-bold text-white text-sm leading-tight">6. Insightful Reporting</h4>
            </div>
            <div className="absolute w-[24%] flex flex-col justify-start pt-2" style={{ left: '2%', top: '68.33%' }}>
              <p className="text-xs text-gray-300 leading-snug">Delivering comprehensive reports and insights to empower better decision making.</p>
            </div>
          </div>

          {/* Mobile/Tablet Fallback List */}
          <div className="w-full flex flex-col items-center lg:hidden px-4">
            <div className="text-center mb-12 max-w-2xl">
              <span className="text-[#F58220] font-bold tracking-widest uppercase text-sm mb-3 block">Our Approach</span>
              <h3 className="text-3xl font-bold text-white mb-6 leading-tight">CLARITY THROUGH EXPERTISE</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                We deliver clarity through expert financial advisory. By tailoring solutions to your specific needs, we build a strong foundation that drives sustainable, long-term growth.
              </p>
            </div>

            <div className="flex flex-col gap-12 w-full max-w-sm mx-auto">
              {/* 1. Understand First */}
              <div className="flex flex-col items-center text-center">
                <div className="w-28 h-28 bg-[#3D99A6] rounded-full flex items-center justify-center mb-5 shadow-md">
                  <span className="material-symbols-outlined text-white" style={{ fontSize: '68px' }}>handshake</span>
                </div>
                <h4 className="font-bold text-white text-xl mb-3">1. Understand First</h4>
                <p className="text-sm text-gray-300 leading-relaxed">Understanding your business challenges before recommending solutions.</p>
              </div>
              
              {/* 2. Thorough Assessment */}
              <div className="flex flex-col items-center text-center">
                <div className="w-28 h-28 bg-[#2A6F78] rounded-full flex items-center justify-center mb-5 shadow-md">
                  <span className="material-symbols-outlined text-white" style={{ fontSize: '68px' }}>search</span>
                </div>
                <h4 className="font-bold text-white text-xl mb-3">2. Thorough Assessment</h4>
                <p className="text-sm text-gray-300 leading-relaxed">Evaluating financial data and systems to build a strong foundation.</p>
              </div>

              {/* 3. Tailored Solution */}
              <div className="flex flex-col items-center text-center">
                <div className="w-28 h-28 bg-[#13363B] border border-white/20 rounded-full flex items-center justify-center mb-5 shadow-md">
                  <span className="material-symbols-outlined text-white" style={{ fontSize: '68px' }}>design_services</span>
                </div>
                <h4 className="font-bold text-white text-xl mb-3">3. Tailored Solution</h4>
                <p className="text-sm text-gray-300 leading-relaxed">Designing scalable architectures tailored to your specific enterprise needs.</p>
              </div>

              {/* 4. Seamless Execution */}
              <div className="flex flex-col items-center text-center">
                <div className="w-28 h-28 bg-[#13363B] border border-white/20 rounded-full flex items-center justify-center mb-5 shadow-md">
                  <span className="material-symbols-outlined text-white" style={{ fontSize: '68px' }}>engineering</span>
                </div>
                <h4 className="font-bold text-white text-xl mb-3">4. Seamless Execution</h4>
                <p className="text-sm text-gray-300 leading-relaxed">Bridging the gap between technology and practical accounting requirements.</p>
              </div>

              {/* 5. Continuous Support */}
              <div className="flex flex-col items-center text-center">
                <div className="w-28 h-28 bg-[#D96E18] rounded-full flex items-center justify-center mb-5 shadow-md">
                  <span className="material-symbols-outlined text-white" style={{ fontSize: '68px' }}>support_agent</span>
                </div>
                <h4 className="font-bold text-white text-xl mb-3">5. Continuous Support</h4>
                <p className="text-sm text-gray-300 leading-relaxed">Providing professional, ongoing support to ensure sustainable business growth.</p>
              </div>

              {/* 6. Insightful Reporting */}
              <div className="flex flex-col items-center text-center">
                <div className="w-28 h-28 bg-[#F58220] rounded-full flex items-center justify-center mb-5 shadow-md">
                  <span className="material-symbols-outlined text-white" style={{ fontSize: '68px' }}>bar_chart</span>
                </div>
                <h4 className="font-bold text-white text-xl mb-3">6. Insightful Reporting</h4>
                <p className="text-sm text-gray-300 leading-relaxed">Delivering comprehensive reports and insights to empower better decision making.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

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
