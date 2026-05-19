import type { Project } from '@/types/portfolio'

const demoUrl = 'https://example.com'

export const projects: Project[] = [
  {
    id: 1,
    title: 'Weather App',
    description:
      'A modern responsive weather application built using Vue 3 and TypeScript. The app provides realtime weather data, hourly forecast, and 5-day forecast using WeatherAPI integration.',
    imageLabel: 'Weather',
    imageVariant: 'weather',
    technologies: [
      'Vue 3',
      'TypeScript',
      'Vite',
      'Pinia',
      'Vue Router',
      'Axios',
      'Element Plus',
      'HTML5',
      'CSS3',
    ],
    liveUrl: 'vue-weather-app-pied.vercel.app',
    githubUrl: 'PASTE_YOUR_GITHUB_REPOSITORY_LINK_HERE',
  },
  {
    id: 2,
    title: 'Landing Page Website',
    description:
      'A clean marketing landing page focused on responsive layout, strong typography, and conversion-friendly sections.',
    imageLabel: 'Landing',
    technologies: ['Vue 3', 'TypeScript', 'CSS3'],
    liveUrl: demoUrl,
    githubUrl: demoUrl,
  },
  {
    id: 3,
    title: 'Business Website',
    description:
      'A professional multi-section website concept for a local business with service cards and contact areas.',
    imageLabel: 'Business',
    technologies: ['Vue Router', 'Element Plus', 'CSS Grid'],
    liveUrl: demoUrl,
    githubUrl: demoUrl,
  },
  {
    id: 4,
    title: 'Product Page',
    description:
      'A product detail interface with feature highlights, pricing information, and reusable UI sections.',
    imageLabel: 'Product',
    technologies: ['Vue 3', 'Pinia', 'CSS Variables'],
    liveUrl: demoUrl,
    githubUrl: demoUrl,
  },
  {
    id: 5,
    title: 'Admin Dashboard',
    description:
      'A dashboard layout concept with cards, metrics, responsive grids, and a clean management UI style.',
    imageLabel: 'Dashboard',
    technologies: ['Element Plus', 'TypeScript', 'Vite'],
    liveUrl: demoUrl,
    githubUrl: demoUrl,
  },
  {
    id: 6,
    title: 'Login UI',
    description:
      'A polished authentication screen with form validation-ready structure and professional spacing.',
    imageLabel: 'Login',
    technologies: ['HTML5', 'CSS3', 'Vue Forms'],
    liveUrl: demoUrl,
    githubUrl: demoUrl,
  },
  {
    id: 7,
    title: 'Mobile Responsive Website',
    description:
      'A mobile-first website concept that adapts smoothly from small screens to full desktop layouts.',
    imageLabel: 'Mobile',
    technologies: ['Responsive Design', 'Vue 3', 'CSS3'],
    liveUrl: demoUrl,
    githubUrl: demoUrl,
  },
]
