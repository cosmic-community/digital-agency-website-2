import { Service } from '@/types'
import { ArrowRight, CheckCircle } from 'lucide-react'

interface ServiceCardProps {
  service: Service
  index: number
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const { metadata } = service

  return (
    <div 
      className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 group animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Service Icon */}
      {metadata?.service_icon && (
        <div className="w-16 h-16 rounded-lg overflow-hidden mb-6">
          <img
            src={`${metadata.service_icon.imgix_url}?w=128&h=128&fit=crop&auto=format,compress`}
            alt={metadata.service_name || service.title}
            className="w-full h-full object-cover"
            width="64"
            height="64"
          />
        </div>
      )}

      {/* Service Info */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-900">
          {metadata?.service_name || service.title}
        </h3>
        
        <p className="text-gray-600">
          {metadata?.short_description}
        </p>

        {/* Key Features */}
        {metadata?.key_features && Array.isArray(metadata.key_features) && (
          <ul className="space-y-2">
            {metadata.key_features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-center text-sm text-gray-600">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* Pricing */}
        {metadata?.starting_price && (
          <div className="pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm text-gray-500">Starting at</span>
                <div className="text-2xl font-bold text-primary">
                  {metadata.starting_price}
                </div>
              </div>
              <button className="inline-flex items-center text-primary hover:text-primary/80 font-medium group-hover:translate-x-1 transition-transform duration-200">
                Learn More
                <ArrowRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}