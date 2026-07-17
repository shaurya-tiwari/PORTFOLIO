import { MetadataRoute } from 'next';

const BASE_URL = 'https://www.shauryatiwari.me';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      // Only the root URL — Google ignores #hash fragment URLs (they are treated as the same page)
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
