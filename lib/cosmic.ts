import { createBucketClient } from '@cosmicjs/sdk'
import type { CaseStudy, Testimonial, TeamMember, Service } from '@/types'

const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

export async function getCaseStudies(limit = 10): Promise<CaseStudy[]> {
  try {
    const { objects } = await cosmic.objects
      .find({ type: 'case-studies' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
      .limit(limit)
    
    return objects || []
  } catch (error) {
    console.error('Error fetching case studies:', error)
    return []
  }
}

export async function getCaseStudy(slug: string): Promise<CaseStudy | null> {
  try {
    const { object } = await cosmic.objects
      .findOne({ type: 'case-studies', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return object || null
  } catch (error) {
    console.error('Error fetching case study:', error)
    return null
  }
}

export async function getTestimonials(limit = 10): Promise<Testimonial[]> {
  try {
    const { objects } = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
      .limit(limit)
    
    return objects || []
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return []
  }
}

export async function getTeamMembers(limit = 10): Promise<TeamMember[]> {
  try {
    const { objects } = await cosmic.objects
      .find({ type: 'team-members' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
      .limit(limit)
    
    return objects || []
  } catch (error) {
    console.error('Error fetching team members:', error)
    return []
  }
}

export async function getServices(limit = 10): Promise<Service[]> {
  try {
    const { objects } = await cosmic.objects
      .find({ type: 'services' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
      .limit(limit)
    
    return objects || []
  } catch (error) {
    console.error('Error fetching services:', error)
    return []
  }
}

export default cosmic