import type { Project } from '@/types/portfolio'
import taskflowPreview from '@/assets/taskflow-dashboard.png'

export const projects: Project[] = [
  {
    id: 1,
    title: 'Weather App',
    description:
      'A responsive weather dashboard that integrates WeatherAPI data, handles loading and error states, and keeps recent city searches in localStorage.',
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
    liveUrl: 'https://vue-weather-app-pied.vercel.app/',
    githubUrl: 'https://github.com/Shifu710/vue-weather-app',
  },
  {
    id: 2,
    title: 'TaskFlow Manager',
    description:
      'A task management dashboard with draggable boards, task filters, dark mode, charts, and persistent localStorage data.',
    imageLabel: 'TaskFlow',
    imageSrc: taskflowPreview,
    technologies: [
      'Vue 3',
      'TypeScript',
      'Vite',
      'Pinia',
      'Vue Router',
      'Element Plus',
      'Tailwind CSS',
      'VueUse',
      'ECharts',
    ],
    liveUrl: 'https://todo-task-manager-gilt.vercel.app/',
    githubUrl: 'https://github.com/Shifu710/todo-task-manager',
  },
  {
    id: 3,
    title: 'E-Commerce Storefront',
    description:
      'A responsive storefront that uses FakeStoreAPI for product data and includes search, filters, product details, cart, wishlist, coupon flow, and mobile navigation.',
    imageLabel: 'Shop UI',
    imageVariant: 'commerce',
    technologies: [
      'Vue 3',
      'TypeScript',
      'Vite',
      'Pinia',
      'Vue Router',
      'Axios',
      'Element Plus',
      'Vant UI',
      'Tailwind CSS',
    ],
    liveUrl: 'https://e-commerce-product-page-nu-seven.vercel.app/',
    githubUrl: 'https://github.com/Shifu710/e-commerce-product-page',
  },
]
