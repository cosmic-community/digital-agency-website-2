// Base Cosmic object interface
interface CosmicObject {
  id: string
  title: string
  slug: string
  status: string
  created_at: string
  modified_at: string
  published_at: string
  thumbnail?: string
  metadata: Record<string, any>
}

// Media file interface
interface MediaFile {
  url: string
  imgix_url: string
}

// Select dropdown value interface
interface SelectValue {
  key: string
  value: string
}

// Case Study types
export interface CaseStudy extends CosmicObject {
  metadata: {
    project_title: string
    client_name: string
    project_overview: string
    challenge?: string
    solution?: string
    results?: string
    featured_image?: MediaFile
    project_gallery?: MediaFile[]
    project_duration?: string
    technologies_used?: string[]
    team_members?: TeamMember[]
    related_services?: Service[]
    project_url?: string
  }
}

// Testimonial types
export interface Testimonial extends CosmicObject {
  metadata: {
    client_name: string
    client_title?: string
    company_name: string
    testimonial_text: string
    rating?: SelectValue
    client_photo?: MediaFile
    company_logo?: MediaFile
    project_type?: SelectValue
  }
}

// Team Member types
export interface TeamMember extends CosmicObject {
  metadata: {
    full_name: string
    job_title: string
    profile_photo?: MediaFile
    bio?: string
    skills?: string[]
    years_experience?: number
    email?: string
    linkedin_url?: string
    department?: SelectValue
  }
}

// Service types
export interface Service extends CosmicObject {
  metadata: {
    service_name: string
    short_description: string
    full_description?: string
    service_icon?: MediaFile
    starting_price?: string
    key_features?: string[]
    service_category?: SelectValue
  }
}

// Export all types
export type { CosmicObject, MediaFile, SelectValue }