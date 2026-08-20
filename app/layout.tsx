import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Open_Sans, Montserrat } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './globals.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '10TEN Consulting Services - Home',
  description: 'Transforming obstacles into solutions.',
  generator: 'v0.app',
  icons: {
    icon: '/logo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${openSans.variable} ${montserrat.variable} antialiased bg-background text-foreground font-body min-h-screen flex flex-col relative overflow-x-hidden`}>
        <Navbar />
        <main className="flex-grow z-10 pt-[100px] w-full flex flex-col">
          {children}
        </main>
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <Footer />
      </body>
    </html>
  )
}

