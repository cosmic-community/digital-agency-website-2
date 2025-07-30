import type { TeamMember } from '@/types'

interface TeamMemberCardProps {
  member: TeamMember
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Profile Photo */}
      <div className="h-64 overflow-hidden">
        {member.metadata.profile_photo ? (
          <img
            src={`${member.metadata.profile_photo.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
            alt={member.metadata.full_name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>
      
      {/* Member Info */}
      <div className="p-6">
        <div className="text-center mb-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-1">
            {member.metadata.full_name}
          </h3>
          <p className="text-blue-600 font-medium mb-2">
            {member.metadata.job_title}
          </p>
          {member.metadata.department && (
            <span className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
              {member.metadata.department.value}
            </span>
          )}
        </div>
        
        {/* Bio */}
        {member.metadata.bio && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-4">
            {member.metadata.bio}
          </p>
        )}
        
        {/* Experience */}
        {member.metadata.years_experience && (
          <div className="mb-4">
            <span className="text-sm font-medium text-gray-700">
              {member.metadata.years_experience} years experience
            </span>
          </div>
        )}
        
        {/* Skills */}
        {member.metadata.skills && Array.isArray(member.metadata.skills) && member.metadata.skills.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Skills:</h4>
            <div className="flex flex-wrap gap-2">
              {member.metadata.skills.slice(0, 6).map((skill, index) => (
                <span
                  key={index}
                  className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
              {member.metadata.skills.length > 6 && (
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                  +{member.metadata.skills.length - 6} more
                </span>
              )}
            </div>
          </div>
        )}
        
        {/* Contact Links */}
        <div className="flex justify-center space-x-4 mt-6">
          {member.metadata.email && (
            <a
              href={`mailto:${member.metadata.email}`}
              className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
              title="Email"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
          )}
          
          {member.metadata.linkedin_url && (
            <a
              href={member.metadata.linkedin_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
              title="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}