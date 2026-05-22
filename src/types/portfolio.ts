export interface Skill {
  icon: string
  name: string
  description: string
}

export interface Project {
  id: number
  title: string
  description: string
  imageLabel: string
  imageSrc?: string
  imageVariant?: 'weather' | 'commerce'
  technologies: string[]
  liveUrl?: string
  githubUrl: string
}

export interface TimelineItem {
  year: string
  title: string
  description: string
}
