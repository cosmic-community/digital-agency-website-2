import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CosmicBadge from '@/components/CosmicBadge'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Digital Agency - Web Development & Digital Marketing',
  description: 'Transform your business with our comprehensive digital solutions including web development, UI/UX design, and digital marketing services.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Access environment variable on server side
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        {/* Pass bucket slug as prop to client component */}
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}