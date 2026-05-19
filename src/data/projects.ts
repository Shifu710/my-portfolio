import type { Project } from '@/types/portfolio'

const demoUrl = 'https://example.com'

export const projects: Project[] = [
  {
    id: 1,
    title: 'Landing Page Website',
    description:
      'A clean marketing landing page focused on responsive layout, strong typography, and conversion-friendly sections.',
    imageLabel: 'Landing',
    technologies: ['Vue 3', 'TypeScript', 'CSS3'],
    liveUrl: demoUrl,
    githubUrl: demoUrl,
  },
  {
    id: 2,
    title: 'Business Website',
    description:
      'A professional multi-section website concept for a local business with service cards and contact areas.',
    imageLabel: 'Business',
    technologies: ['Vue Router', 'Element Plus', 'CSS Grid'],
    liveUrl: demoUrl,
    githubUrl: demoUrl,
  },
  {
    id: 3,
    title: 'Product Page',
    description:
      'A product detail interface with feature highlights, pricing information, and reusable UI sections.',
    imageLabel: 'Product',
    technologies: ['Vue 3', 'Pinia', 'CSS Variables'],
    liveUrl: demoUrl,
    githubUrl: demoUrl,
  },
  {
    id: 4,
    title: 'Admin Dashboard',
    description:
      'A dashboard layout concept with cards, metrics, responsive grids, and a clean management UI style.',
    imageLabel: 'Dashboard',
    technologies: ['Element Plus', 'TypeScript', 'Vite'],
    liveUrl: demoUrl,
    githubUrl: demoUrl,
  },
  {
    id: 5,
    title: 'Login UI',
    description:
      'A polished authentication screen with form validation-ready structure and professional spacing.',
    imageLabel: 'Login',
    technologies: ['HTML5', 'CSS3', 'Vue Forms'],
    liveUrl: demoUrl,
    githubUrl: demoUrl,
  },
  {
    id: 6,
    title: 'Mobile Responsive Website',
    description:
      'A mobile-first website concept that adapts smoothly from small screens to full desktop layouts.',
    imageLabel: 'Mobile',
    technologies: ['Responsive Design', 'Vue 3', 'CSS3'],
    liveUrl: demoUrl,
    githubUrl: demoUrl,
  },
]
