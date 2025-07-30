import Hero from '@/components/Hero'
import Services from '@/components/Services'
import CaseStudies from '@/components/CaseStudies'
import Testimonials from '@/components/Testimonials'
import TeamSection from '@/components/TeamSection'
import { getServices } from '@/lib/cosmic'

export default async function Home() {
  let services = []
  
  try {
    services = await getServices()
  } catch (error) {
    console.error('Error fetching services:', error)
  }

  return (
    <main>
      <Hero />
      <Services services={services} />
      <CaseStudies />
      <Testimonials />
      <TeamSection />
    </main>
  )
}