import { getCaseStudies } from '@/lib/cosmic'
import type { CaseStudy } from '@/types'

export default async function CaseStudies() {
  let caseStudies: CaseStudy[] = []
  
  try {
    caseStudies = await getCaseStudies()
  } catch (error) {
    console.error('Error fetching case studies:', error)
  }

  if (caseStudies.length === 0) {
    return null
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Case Studies</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how we've helped businesses achieve remarkable results through innovative digital solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((caseStudy) => (
            <div key={caseStudy.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {caseStudy.metadata.featured_image && (
                <div className="h-64 overflow-hidden">
                  <img
                    src={`${caseStudy.metadata.featured_image.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
                    alt={caseStudy.metadata.project_title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {caseStudy.metadata.project_title}
                  </h3>
                  {caseStudy.metadata.project_duration && (
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {caseStudy.metadata.project_duration}
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 mb-4 font-medium">
                  Client: {caseStudy.metadata.client_name}
                </p>
                
                <p className="text-gray-700 mb-6 line-clamp-3">
                  {caseStudy.metadata.project_overview}
                </p>
                
                {caseStudy.metadata.technologies_used && Array.isArray(caseStudy.metadata.technologies_used) && caseStudy.metadata.technologies_used.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.metadata.technologies_used.map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {caseStudy.metadata.team_members && caseStudy.metadata.team_members.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Team:</h4>
                    <div className="flex -space-x-2">
                      {caseStudy.metadata.team_members.slice(0, 3).map((member) => (
                        <div key={member.id} className="relative">
                          <img
                            src={`${member.metadata.profile_photo?.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                            alt={member.metadata.full_name}
                            className="w-8 h-8 rounded-full border-2 border-white"
                            title={`${member.metadata.full_name} - ${member.metadata.job_title}`}
                          />
                        </div>
                      ))}
                      {caseStudy.metadata.team_members.length > 3 && (
                        <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center">
                          <span className="text-xs font-medium text-gray-600">
                            +{caseStudy.metadata.team_members.length - 3}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                {caseStudy.metadata.project_url && (
                  <a
                    href={caseStudy.metadata.project_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View Project
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}