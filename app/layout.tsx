import type { Metadata } from 'next';
import "@/styles/globals.css";
import { PreloaderWrapper } from '@/components/shared/preloader-wrapper';
import { LoadingProvider } from '@/scripts/hooks/loading-context';
import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-plus-jakarta',
});

const BASE_URL = 'https://www.shauryatiwari.me';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: 'Shaurya Tiwari — Software Engineer × AI/ML Engineer | Full-Stack & Gen AI, Noida',
    template: '%s | Shaurya Tiwari',
  },

  description:
    'Portfolio of Shaurya Tiwari — Software Engineer, AI/ML Engineer, and Full-Stack Developer from Noida, India. Building RAG systems, deep learning models, and production-grade applications with React, Next.js, Python, and DevOps.',

  keywords: [
    'Shaurya Tiwari',
    'Shaurya Tiwari portfolio',
    'Shaurya Tiwari software engineer',
    'Shaurya Tiwari AI ML engineer',
    'Shaurya Tiwari full stack developer',
    'Shaurya Tiwari GL Bajaj',
    'Shaurya Tiwari Noida',
    'Shaurya RAG deep learning engineer',
    'Shaurya Tiwari Gen AI',
    'Shaurya Tiwari DevOps',
  ],

  authors: [
    { name: 'Shaurya Tiwari', url: BASE_URL },
  ],
  creator: 'Shaurya Tiwari',
  publisher: 'Shaurya Tiwari',

  // ✅ Tells Google to index and follow all links
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // ✅ Open Graph — how it looks when shared on LinkedIn / WhatsApp / FB
  openGraph: {
    title: 'Shaurya Tiwari — Software Engineer × AI/ML Engineer | Full-Stack & Gen AI, Noida',
    description:
      'Portfolio of Shaurya Tiwari — Software Engineer, AI/ML Engineer, and Full-Stack Developer from Noida, India. Building RAG systems, deep learning models, and production apps.',
    url: BASE_URL,
    siteName: 'Shaurya Tiwari Portfolio',
    images: [
      {
        url: '/thumbnail.webp',
        width: 1200,
        height: 630,
        alt: 'Shaurya Tiwari Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // ✅ Twitter / X Card — how it looks when shared on X/Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Shaurya Tiwari — Software Engineer × AI/ML Engineer | Full-Stack & Gen AI, Noida',
    description:
      'Portfolio of Shaurya Tiwari — Software Engineer, AI/ML Engineer, and Full-Stack Developer from Noida, India.',
    creator: '@Shauryatiwari77',
    images: ['/thumbnail.webp'],
  },

  // ✅ Canonical URL — prevents duplicate content issues
  alternates: {
    canonical: BASE_URL,
  },

  // ✅ Google Search Console verification
  verification: {
    google: '_WsDpVy0BifMHZxGgf_p5cOv3jUtfdcD_B4mCh1jLMc',
  },
};

// ✅ JSON-LD Structured Data — helps Google understand who you are
// This makes your name appear in a Knowledge Panel on search results
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Shaurya Tiwari',
  url: BASE_URL,
  email: 'shauryatiwari120@gmail.com',
  jobTitle: 'Software Engineer | AI/ML Engineer | Full-Stack Developer',
  description:
    'Software Engineer and AI/ML Engineer from Noida, India. Builds RAG pipelines, deep learning models, and full-stack applications. Also a Greek mythology sketch artist.',
  image: `${BASE_URL}/shauryaphoto.webp`,
  sameAs: [
    'https://github.com/shaurya-tiwari',
    'https://www.linkedin.com/in/shauryatiwari120/',
    'https://x.com/Shauryatiwari77',
    'https://www.instagram.com/thisisshaurya_',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Noida',
    addressRegion: 'Uttar Pradesh',
    addressCountry: 'IN',
  },
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Artificial Intelligence and Machine Learning',
  },
  knowsAbout: [
    'Software Engineering',
    'Machine Learning',
    'Artificial Intelligence',
    'Deep Learning',
    'RAG Pipelines',
    'LLMs',
    'Generative AI',
    'Computer Vision',
    'Python',
    'React.js',
    'Next.js',
    'Node.js',
    'Full-Stack Development',
    'DevOps',
    'Docker',
    'FastAPI',
    'LangChain',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Shaurya Tiwari Portfolio',
  url: BASE_URL,
  description: 'Portfolio website of Shaurya Tiwari — Software Engineer, AI/ML Engineer, and Full-Stack Developer.',
  author: {
    '@type': 'Person',
    name: 'Shaurya Tiwari',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <head>
        {/* ✅ Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#000000" />

        {/* ✅ JSON-LD: Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />

        {/* ✅ JSON-LD: Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>

        <LoadingProvider>
          <PreloaderWrapper>
            {children}
          </PreloaderWrapper>
        </LoadingProvider>
      </body>
    </html>
  );
}
