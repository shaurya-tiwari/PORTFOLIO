import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://shaurya-tiwari-portfolio.vercel.app'),
  title: 'Shaurya Tiwari Portfolio',
  description: 'Welcome to the portfolio of Shaurya Tiwari – Developer & Designer.',
  openGraph: {
    title: 'Shaurya Tiwari Portfolio',
    description: 'Explore the work and projects of Shaurya Tiwari.',
    images: [
      {
        url: '/thumbnail.png',
        width: 1200,
        height: 630,
        alt: 'Shaurya Tiwari Portfolio Preview Image',
      },
    ],
  },
}
