import type { MetadataRoute } from 'next'
import { getSiteUrl } from '@/src/lib/site-url'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl()
  const lastModified = new Date('2026-07-11')
  return [
    { url: baseUrl, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/experiments/approval-pattern-gallery`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/studio/decision-record-explorer`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/studio/oversight-console`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/studio/accountability-eval-kit`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
  ]
}
