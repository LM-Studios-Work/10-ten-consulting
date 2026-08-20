import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#112224] w-full pt-16 pb-8 px-8 border-t border-gray-800 text-sm relative z-20 mt-auto">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Column 1: Logo & Info */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center mb-4 bg-white/90 p-3 rounded-lg w-fit">
            <Image src="/logo.png" alt="10TEN Consulting Logo" width={180} height={60} className="w-auto h-12 object-contain" />
          </div>
          <p className="text-gray-400">
            10TEN Consulting is a distinguished Financial Consultancy and Corporate Services firm based in South Africa.
          </p>
          <div className="flex gap-4 mt-2">
             {/* Social placeholders */}
             <a href="#" className="text-gray-400 hover:text-white transition-colors"><span className="material-symbols-outlined text-lg">link</span></a>
             <a href="#" className="text-gray-400 hover:text-white transition-colors"><span className="material-symbols-outlined text-lg">language</span></a>
             <a href="#" className="text-gray-400 hover:text-white transition-colors"><span className="material-symbols-outlined text-lg">mail</span></a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-2">QUICK LINKS</h4>
          <Link className="text-gray-400 hover:text-white transition-colors" href="/">Home</Link>
          <Link className="text-gray-400 hover:text-white transition-colors" href="/about">About Us</Link>
          <Link className="text-gray-400 hover:text-white transition-colors" href="/services">Services</Link>
          <Link className="text-gray-400 hover:text-white transition-colors" href="/industries">Industries</Link>
          <Link className="text-gray-400 hover:text-white transition-colors" href="/contact">Contact Us</Link>
        </div>

        {/* Column 3: Our Services */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-2">OUR SERVICES</h4>
          <Link className="text-gray-400 hover:text-white transition-colors" href="/services">Sage Intacct Licensing</Link>
          <Link className="text-gray-400 hover:text-white transition-colors" href="/services">Payroll & HR</Link>
          <Link className="text-gray-400 hover:text-white transition-colors" href="/services">Outsourced Accounting</Link>
          <Link className="text-gray-400 hover:text-white transition-colors" href="/services">Advisory & Strategy</Link>
        </div>

        {/* Column 4: Contact */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-2">CONTACT</h4>
          <div className="flex gap-3 text-gray-400">
             <span className="material-symbols-outlined text-sm mt-0.5">location_on</span>
             <span>100 Main Street, Sandton, Johannesburg, South Africa</span>
          </div>
          <div className="flex gap-3 text-gray-400">
             <span className="material-symbols-outlined text-sm mt-0.5">mail</span>
             <span>info@10tenconsulting.com</span>
          </div>
          <div className="flex gap-3 text-gray-400">
             <span className="material-symbols-outlined text-sm mt-0.5">phone</span>
             <span>+27 11 000 0000</span>
          </div>
        </div>
      </div>
      
      <div className="max-w-container-max mx-auto border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-xs">
        <p>Copyright ©2026 10TEN Consulting. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

