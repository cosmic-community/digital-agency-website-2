import Hero from '@/components/Hero'
import Services from '@/components/Services'
import TeamSection from '@/components/TeamSection'
import CaseStudies from '@/components/CaseStudies'
import Testimonials from '@/components/Testimonials'
import { getServices, getTeamMembers, getCaseStudies, getTestimonials } from '@/lib/cosmic'

export default async function Home() {
  // Fetch all data in parallel for better performance
  const [services, teamMembers, caseStudies, testimonials] = await Promise.all([
    getServices(),
    getTeamMembers(),
    getCaseStudies(),
    getTestimonials()
  ])

  return (
    <div className="min-h-screen">
      <Hero />
      <Services services={services} />
      <TeamSection teamMembers={teamMembers} />
      <CaseStudies caseStudies={caseStudies} />
      <Testimonials testimonials={testimonials} />
    </div>
  )
}