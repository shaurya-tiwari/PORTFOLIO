import type { Metadata } from 'next';
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://shaurya-tiwari-portfolio.vercel.app'),
  title: 'Shaurya Portfolio',
  description: 'Welcome to the portfolio of Shaurya.',
  openGraph: {
    title: 'Shaurya Portfolio',
    description: 'Explore the work and projects.',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Favicon and meta tags */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>{children}</body>
    </html>
  );
}
