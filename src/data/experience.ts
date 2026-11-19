export interface TimelineEntry {
  period: string
  title: string
  organisation: string
  context: string
  bullets: string[]
  meta: string[]
  current?: boolean
}

export const timeline: TimelineEntry[] = [
  {
    period: 'Jun 2026',
    title: 'Java Spring Boot Intern',
    organisation: 'Linsys Innovations',
    context: 'Backend engineering internship',
    bullets: [
      'Developed backend REST API endpoints using Java and Spring Boot.',
      'Worked on patient history retrieval and medicine bill retrieval functionality.',
      'Contributed to backend services and application workflows.',
    ],
    meta: ['Java', 'Spring Boot', 'REST APIs'],
    current: false,
  },
  {
    period: '2024 — 2028',
    title: 'B.Tech Computer Science & Engineering',
    organisation: 'Model Engineering College',
    context: 'Kochi, Kerala · CGPA 9.34 / 10',
    bullets: [
      'Relevant coursework: Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks.',
    ],
    meta: ['CGPA 9.34 / 10'],
    current: true,
  },
]

export interface EducationEntry {
  institution: string
  qualification: string
  period: string
  result: string
  detail?: string
}

export const education: EducationEntry[] = [
  {
    institution: 'Model Engineering College',
    qualification: 'B.Tech Computer Science and Engineering',
    period: '2024 — 2028',
    result: 'CGPA 9.34 / 10',
    detail: 'Kochi, Kerala',
  },
  {
    institution: 'S.F.S Public School & Junior College',
    qualification: 'CBSE Higher Secondary Education',
    period: '2024',
    result: '95%',
  },
]

export const achievements = [
  {
    label: 'Hackathon',
    title: 'Finalist — Tink-Her-Hack 4.0',
    body: 'Developed ClaimSafe, a smart lost-and-found verification platform, and reached the finalist stage of Tink-Her-Hack 4.0.',
    link: { label: 'Read the ClaimSafe case study', href: '/work/claimsafe' },
  },
  {
    label: 'Certification',
    title: 'Digital 101 — Golden Certification',
    body: 'Certification in digital fundamentals.',
    link: null,
  },
] as const
