import { afterEach, describe, expect, it } from 'vitest'
import { getSiteUrl } from './site-url'

describe('getSiteUrl', () => {
  const originalPublicUrl = process.env.NEXT_PUBLIC_SITE_URL
  const originalVercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL

  afterEach(() => {
    if (originalPublicUrl) process.env.NEXT_PUBLIC_SITE_URL = originalPublicUrl
    else delete process.env.NEXT_PUBLIC_SITE_URL
    if (originalVercelUrl) process.env.VERCEL_PROJECT_PRODUCTION_URL = originalVercelUrl
    else delete process.env.VERCEL_PROJECT_PRODUCTION_URL
  })

  it('adds a protocol to the Vercel production domain', () => {
    delete process.env.NEXT_PUBLIC_SITE_URL
    process.env.VERCEL_PROJECT_PRODUCTION_URL = 'accountability-lab.vercel.app'
    expect(getSiteUrl()).toBe('https://accountability-lab.vercel.app')
  })
})
