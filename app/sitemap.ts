import type { MetadataRoute } from 'next';
import { services, site } from '@/lib/content';
export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/about', '/services', '/products', '/contact', '/privacy', '/terms', '/cookies', ...services.map(s => `/services/${s.slug}`)].map(path => ({ url: `${site.origin}${path}`, changeFrequency: 'monthly', priority: path === '' ? 1 : path.startsWith('/services') ? .8 : .6 }));
}
