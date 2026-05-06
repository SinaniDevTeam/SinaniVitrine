import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'Baiduspider',
        allow: '/',
        crawlDelay: 5,
      },
    ],
    sitemap: 'https://sinani.net/sitemap.xml',
  }
}
