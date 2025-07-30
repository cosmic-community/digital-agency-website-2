# Digital Agency Website

![App Preview](https://imgix.cosmicjs.com/0e62fce0-6be0-11f0-a051-23c10f41277a-photo-1542838132-92c53300491e-1753727047204.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, professional digital agency website built with Next.js 15 and powered by Cosmic CMS. This website showcases your agency's services, team members, case studies, and client testimonials in an elegant, responsive design.

## Features

- 🌟 **Modern Design** - Clean, professional interface optimized for conversions
- 📱 **Fully Responsive** - Perfect experience across all devices
- ⚡ **High Performance** - Built with Next.js 15 for optimal speed
- 🎯 **Service Showcase** - Interactive service cards with pricing and features
- 👥 **Team Profiles** - Professional team member directory
- 📋 **Case Studies** - Detailed project showcases with results
- 💬 **Client Testimonials** - Social proof with ratings and company logos
- 🔍 **SEO Optimized** - Built-in search engine optimization
- 📊 **Analytics Ready** - Easy integration with tracking tools

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=6887bad5ace967af4dfaaa90&clone_repository=688a606c2dcc7fbc00c95005)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> Create a content model for a digital agency company website with services, team members, testimonials, and case studies

### Code Generation Prompt

> Build a Next.js website that uses my existing objects in this bucket. Set apiEnvironment: staging in cosmic config

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 15** - React framework for production
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Cosmic CMS** - Headless content management
- **Lucide React** - Beautiful icons

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Cosmic account with bucket containing services, team members, testimonials, and case studies

### Installation

1. Clone this repository
```bash
git clone <repository-url>
cd digital-agency-website
```

2. Install dependencies
```bash
bun install
```

3. Set up environment variables
```bash
# Copy the example file
cp .env.example .env.local

# Add your Cosmic credentials
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server
```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Cosmic SDK Examples

### Fetching Services
```typescript
import { cosmic } from '@/lib/cosmic'

const services = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Team Members
```typescript
const teamMembers = await cosmic.objects
  .find({ type: 'team-members' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Case Studies
```typescript
const caseStudies = await cosmic.objects
  .find({ type: 'case-studies' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This website integrates with your Cosmic bucket's content model:

- **Services** - Service offerings with descriptions, pricing, and features
- **Team Members** - Team profiles with photos, bios, and skills
- **Case Studies** - Project showcases with challenges, solutions, and results
- **Testimonials** - Client feedback with ratings and company information

All content is dynamically rendered and can be updated through your Cosmic dashboard.

## Deployment

### Deploy to Vercel

1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Deploy to Netlify

1. Connect your repository to Netlify
2. Set build command: `bun run build`
3. Set publish directory: `.next`
4. Add environment variables in Netlify dashboard

For production deployments, ensure all environment variables are properly configured in your hosting platform.
<!-- README_END -->