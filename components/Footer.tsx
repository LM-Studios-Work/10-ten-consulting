import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-black border-t border-glass-border w-full py-stack-lg px-margin-desktop flex flex-col items-center gap-stack-md relative z-20 mt-auto">
      <div className="flex items-center gap-4 mb-4">
        <span className="font-headline-md text-headline-md font-bold text-neon-green">10TEN Consulting</span>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mb-4">
        <Link className="text-on-surface-variant font-body-md hover:text-consultant-orange transition-colors duration-300" href="/">Home</Link>
        <Link className="text-on-surface-variant font-body-md hover:text-consultant-orange transition-colors duration-300" href="/about">About Us</Link>
        <Link className="text-on-surface-variant font-body-md hover:text-consultant-orange transition-colors duration-300" href="/industries">Industry Expertise</Link>
        <Link className="text-on-surface-variant font-body-md hover:text-consultant-orange transition-colors duration-300" href="/services">Our Services</Link>
        <Link className="text-on-surface-variant font-body-md hover:text-consultant-orange transition-colors duration-300" href="/contact">Get in Touch</Link>
      </div>
      <div className="text-center">
        <p className="font-headline-md text-headline-md text-on-surface mb-2">Transforming obstacles into solutions.</p>
        <p className="font-body-md text-body-md text-on-surface-variant">© 2024 10TEN Consulting Services. Transforming obstacles into solutions.</p>
      </div>
    </footer>
  )
}
