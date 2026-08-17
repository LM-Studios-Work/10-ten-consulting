import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-slate-black/40 backdrop-blur-xl border-b border-glass-border fixed top-0 w-full z-50 flex justify-between items-center px-margin-desktop py-4 max-w-container-max mx-auto left-1/2 -translate-x-1/2">
      <div className="flex items-center gap-4">
        <Link href="/">
          <img alt="10TEN Consulting Logo" className="h-10 w-10 object-contain cursor-pointer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDocauMwkcpzhoogaUDXEgKsnIUDDpTSQDehakK8gOEnNhtTdBu3jgc5D3huVxyZX2pWIvBu9OkmYUD41wVjzd5JbeXDwFVEUnH894pcxZli8Wgi6Gg0i7pylGSj0MmTNdhRdmMp4qHKgZTg-XwjkQ5HJxOkY0aVY6kMs8DL7gMNNZdGQ_FepWAX4jOCCxAeNwfSyi_OUoAV40e_PwcZ49D5v2xfvs-xF40bnzjApB4HCRZ0gbDYyzpTAL35kGvsocm9A"/>
        </Link>
        <Link href="/">
          <span className="font-headline-md text-headline-md font-bold text-on-surface cursor-pointer">10TEN Consulting</span>
        </Link>
      </div>
      {/* Desktop Nav */}
      <div className="hidden md:flex gap-8 items-center">
        <Link className="text-on-surface-variant font-body-md hover:text-neon-green transition-colors duration-300" href="/">Home</Link>
        <Link className="text-on-surface-variant font-body-md hover:text-neon-green transition-colors duration-300" href="/about">About 10TEN</Link>
        <Link className="text-on-surface-variant font-body-md hover:text-neon-green transition-colors duration-300" href="/industries">Industry Expertise</Link>
        <Link className="text-on-surface-variant font-body-md hover:text-neon-green transition-colors duration-300" href="/services">Our Services</Link>
      </div>
      <Link href="/contact" className="hidden md:block bg-consultant-orange text-white font-label-md text-label-md px-6 py-3 rounded hover:bg-opacity-90 transition-colors text-center cursor-pointer">
        Request a Demo
      </Link>
      {/* Mobile Menu Toggle */}
      <button className="md:hidden text-neon-green flex items-center justify-center">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>menu</span>
      </button>
    </nav>
  )
}
