import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://uniqueweblayer.com';
  
  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/about', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/work', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/blog', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/business', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/services/ecommerce', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/services/landing', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/services/portfolio', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/services/real-estate', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/services/lms', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/services/booking', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/services/blog', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/services/membership', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/services/saas', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/services/restaurant', priority: 0.7, changeFrequency: 'monthly' as const },
  ];
  
  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}