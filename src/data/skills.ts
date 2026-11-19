export interface SkillGroup {
  id: string
  label: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    label: 'Languages',
    items: ['Java', 'Python', 'C', 'JavaScript'],
  },
  {
    id: 'frameworks',
    label: 'Frameworks',
    items: ['React', 'Spring Boot', 'Node.js', 'Express', 'FastAPI'],
  },
  {
    id: 'databases',
    label: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    id: 'tools',
    label: 'Tools',
    items: ['Git', 'GitHub', 'Postman'],
  },
]
