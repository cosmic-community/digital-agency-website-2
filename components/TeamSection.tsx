import { getTeamMembers } from '@/lib/cosmic'
import TeamMemberCard from '@/components/TeamMemberCard'
import type { TeamMember } from '@/types'

export default async function TeamSection() {
  let teamMembers: TeamMember[] = []
  
  try {
    teamMembers = await getTeamMembers()
  } catch (error) {
    console.error('Error fetching team members:', error)
  }

  if (teamMembers.length === 0) {
    return null
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our diverse team of experts brings together creativity, technical expertise, and strategic thinking to deliver exceptional results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}