export interface SkillGroup {
  id: string
  label: string
  note: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    label: 'Languages',
    note: 'Written across coursework and projects',
    items: ['Java', 'Python', 'JavaScript', 'C', 'SQL'],
  },
  {
    id: 'backend',
    label: 'Backend',
    note: 'APIs, services and real-time systems',
    items: ['Spring Boot', 'Spring Security', 'Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'Socket.IO'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    note: 'Interfaces for the systems I build',
    items: ['React', 'Next.js', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    id: 'databases',
    label: 'Databases',
    note: 'Persistence and data modelling',
    items: ['PostgreSQL', 'MongoDB', 'MySQL'],
  },
  {
    id: 'ai-ml',
    label: 'AI / ML',
    note: 'Applied image and model work',
    items: ['OpenCV', 'PyTorch'],
  },
  {
    id: 'tools',
    label: 'Tools',
    note: 'Daily development environment',
    items: ['Git', 'GitHub', 'Linux', 'Postman'],
  },
]
