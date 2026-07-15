import type { Metadata } from 'next';
import "@/styles/globals.css";
import { Preloader } from '@/components/shared/preloader';
import { LoadingProvider } from '@/scripts/hooks/loading-context';
import { GoogleAnalytics } from '@/components/shared/google-analytics';

const BASE_URL = 'https://www.shauryatiwari.me';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: 'Shaurya Tiwari — AI/ML Developer & Frontend Engineer',
    template: '%s | Shaurya Tiwari',
  },

  description:
    'Portfolio of Shaurya Tiwari — AI/ML student and frontend developer from Noida, India. Explore projects in Python, React.js, Machine Learning, FastAPI and more.',

  keywords: [
    'Shaurya Tiwari',
    'Shaurya Tiwari portfolio',
    'Shaurya Tiwari developer',
    'AI ML developer India',
    'frontend developer Noida',
    'machine learning student portfolio',
    'React developer India',
    'Python developer portfolio',
    'software engineer Noida India',
    'AI engineer portfolio',
    'shauryatiwari120',
    'shaurya tiwari github',
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
    title: 'Shaurya Tiwari — AI/ML Developer & Frontend Engineer',
    description:
      'Portfolio of Shaurya Tiwari — AI/ML student and frontend developer from Noida, India. Projects in Python, React, Machine Learning and more.',
    url: BASE_URL,
    siteName: 'Shaurya Tiwari Portfolio',
    images: [
      {
        url: '/thumbnail.png',
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
    title: 'Shaurya Tiwari — AI/ML Developer & Frontend Engineer',
    description:
      'Portfolio of Shaurya Tiwari — AI/ML student and frontend developer from Noida, India.',
    creator: '@Shauryatiwari77',
    images: ['/thumbnail.png'],
  },

  // ✅ Canonical URL — prevents duplicate content issues
  alternates: {
    canonical: BASE_URL,
  },

  // ✅ Google Search Console verification
  // After getting your verification token from Search Console, uncomment and paste it below:
  // verification: {
  //   google: 'PASTE_YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN_HERE',
  // },
};

// ✅ JSON-LD Structured Data — helps Google understand who you are
// This makes your name appear in a Knowledge Panel on search results
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Shaurya Tiwari',
  url: BASE_URL,
  email: 'shauryatiwari120@gmail.com',
  jobTitle: 'AI/ML Developer & Frontend Engineer',
  description:
    'AI and Machine Learning student with a passion for frontend development and building impactful, user-friendly projects.',
  image: `${BASE_URL}/shauryaphoto.jpg`,
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
    'Machine Learning',
    'Artificial Intelligence',
    'Python',
    'React.js',
    'Next.js',
    'Frontend Development',
    'Data Analysis',
    'FastAPI',
    'PostgreSQL',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Shaurya Tiwari Portfolio',
  url: BASE_URL,
  description: 'Portfolio website of Shaurya Tiwari — AI/ML developer and frontend engineer.',
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
    <html lang="en">
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
        {/* ✅ Google Analytics GA4 */}
        <GoogleAnalytics />

        <LoadingProvider>
          <Preloader>
            {children}
          </Preloader>
        </LoadingProvider>
      </body>
    </html>
  );
}
