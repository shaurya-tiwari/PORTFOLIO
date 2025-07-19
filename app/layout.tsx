import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shaurya Tiwari Portfolio',
  description: 'Welcome to the portfolio of Shaurya Tiwari - Full Stack Developer, Designer, and Problem Solver.',
  openGraph: {
    title: 'Shaurya Tiwari Portfolio',
    description: 'Welcome to the portfolio of Shaurya Tiwari.',
    url: 'https://your-domain.com', // replace with your real domain
    siteName: 'Shaurya Tiwari Portfolio',
    images: [
      {
        url: 'https://shaurya-tiwari-portfolio.vercel.app/thumbnail.png', // <-- your image URL
        width: 1200,
        height: 630,
        alt: 'Shaurya Tiwari Portfolio Preview Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shaurya Tiwari Portfolio',
    description: 'Check out the portfolio of Shaurya Tiwari.',
    images: ['https://shaurya-tiwari-portfolio.vercel.app/thumbnail.png'], // same image
  },
}
