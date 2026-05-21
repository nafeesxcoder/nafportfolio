import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/admin/',
        '/api/',
        '/private/',
        '/_next/',
        '/_static/',
      ],
    },
    sitemap: 'https://uniqueweblayer.com/sitemap.xml',
    host: 'https://uniqueweblayer.com',
  };
}