import { getTestimonials } from '@/lib/cosmic'
import type { Testimonial } from '@/types'

export default async function Testimonials() {
  let testimonials: Testimonial[] = []
  
  try {
    testimonials = await getTestimonials()
  } catch (error) {
    console.error('Error fetching testimonials:', error)
  }

  if (testimonials.length === 0) {
    return null
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience working with us.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* Rating */}
              {testimonial.metadata.rating && (
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < parseInt(testimonial.metadata.rating?.key || '0') 
                          ? 'text-yellow-400' 
                          : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    {testimonial.metadata.rating?.value}
                  </span>
                </div>
              )}
              
              {/* Testimonial Text */}
              <blockquote className="text-gray-700 mb-6">
                "{testimonial.metadata.testimonial_text}"
              </blockquote>
              
              {/* Client Info */}
              <div className="flex items-center">
                {testimonial.metadata.client_photo && (
                  <img
                    src={`${testimonial.metadata.client_photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
                    alt={testimonial.metadata.client_name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                )}
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">
                    {testimonial.metadata.client_name}
                  </div>
                  {testimonial.metadata.client_title && (
                    <div className="text-sm text-gray-600">
                      {testimonial.metadata.client_title}
                    </div>
                  )}
                  <div className="text-sm font-medium text-blue-600">
                    {testimonial.metadata.company_name}
                  </div>
                </div>
                {testimonial.metadata.company_logo && (
                  <img
                    src={`${testimonial.metadata.company_logo.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                    alt={`${testimonial.metadata.company_name} logo`}
                    className="w-10 h-10 object-contain opacity-60"
                  />
                )}
              </div>
              
              {/* Project Type Badge */}
              {testimonial.metadata.project_type && (
                <div className="mt-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {testimonial.metadata.project_type.value}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}