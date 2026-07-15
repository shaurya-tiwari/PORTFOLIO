import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://www.shauryatiwari.me/sitemap.xml',
    host: 'https://www.shauryatiwari.me',
  };
}
