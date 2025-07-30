import Hero from '@/components/Hero'
import Services from '@/components/Services'
import CaseStudies from '@/components/CaseStudies'
import Testimonials from '@/components/Testimonials'
import TeamSection from '@/components/TeamSection'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <CaseStudies />
      <Testimonials />
      <TeamSection />
    </main>
  )
}