import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full z-50 flex flex-col">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-100 hidden md:flex justify-between items-center px-8 py-2 text-sm text-gray-500">
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">location_on</span>
            <span>1101, Ascott Park Place Tower Sheikh Zayed Rd, Dubai, UAE</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">phone</span>
            <span>+971521485778</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">mail</span>
            <span>info@10tenconsulting.com</span>
          </div>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-[#004b87]"><span className="material-symbols-outlined text-[18px]">language</span></a>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white border-b border-gray-200 w-full flex justify-between items-center px-8 py-4">
        <div className="flex items-center gap-3">
          <Link href="/">
            <div className="flex items-center gap-2">
              {/* Substitute logo with an icon for now or text */}
              <span className="material-symbols-outlined text-[#0080ff] text-3xl">show_chart</span>
              <span className="font-bold text-xl text-gray-900 tracking-tight">10TEN <span className="text-[#0080ff] font-normal">Consulting</span></span>
            </div>
          </Link>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-8 items-center">
          <Link className="text-gray-600 font-semibold text-sm hover:text-[#004b87] transition-colors" href="/">HOME</Link>
          <Link className="text-gray-600 font-semibold text-sm hover:text-[#004b87] transition-colors" href="/about">ABOUT US</Link>
          <Link className="text-gray-600 font-semibold text-sm hover:text-[#004b87] transition-colors" href="/services">SERVICES</Link>
          <Link className="text-gray-600 font-semibold text-sm hover:text-[#004b87] transition-colors" href="/industries">INDUSTRIES</Link>
          <Link className="text-gray-600 font-semibold text-sm hover:text-[#004b87] transition-colors" href="/contact">CONTACT US</Link>
        </div>
        
        <Link href="/contact" className="hidden lg:block bg-[#004b87] hover:bg-[#003866] text-white font-semibold text-sm px-6 py-3 rounded transition-colors text-center">
          GET A CONSULTATION
        </Link>
        
        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-gray-900 flex items-center justify-center">
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </nav>
    </div>
  )
}

