import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://shaurya-tiwari-portfolio.vercel.app'),
  title: 'Shaurya Portfolio',
  description: 'Welcome to the portfolio of Shaurya Tiwari.',
  openGraph: {
    title: 'Shaurya Tiwari Portfolio',
    description: 'Explore the work and projects of Shaurya.',
    url: 'https://shaurya-tiwari-portfolio.vercel.app',
    siteName: 'Shaurya Tiwari Portfolio',
    images: [
      {
        url: '/thumbnail.png',
        width: 1200,
        height: 630,
        alt: 'Shaurya Tiwari Portfolio Preview Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head /> {/* Required for <Metadata> to inject OG tags here */}
      <body>{children}</body>
    </html>
  )
}
