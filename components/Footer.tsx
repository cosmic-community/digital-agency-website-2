import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Digital Agency</h3>
            <p className="text-gray-300">
              We help businesses thrive in the digital age with expert web development, 
              UI/UX design, and digital marketing services.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">UI/UX Design</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Digital Marketing</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Consulting</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Our Team</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>hello@digitalagency.com</p>
              <p>+1 (555) 123-4567</p>
              <p>123 Business St.<br />Suite 100<br />City, State 12345</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300">
              © 2024 Digital Agency. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}