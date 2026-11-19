export const profile = {
  name: 'Jiya Santhosh',
  firstName: 'Jiya',
  monogram: 'JS',
  role: 'Computer Science undergraduate & software developer',
  headline: 'I build software that solves real-world problems.',
  intro:
    'Computer Science undergraduate and software developer interested in backend engineering, full-stack development, and applied AI.',
  location: 'Kochi, Kerala, India',
  timezone: 'Asia/Kolkata',
  email: 'jiyasanthosh54@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jiya-santhosh-786106320',
  github: 'https://github.com/Jiya54',
  resume: '/resume.pdf',
  institution: 'Model Engineering College',
  institutionShort: 'MEC, Kochi',
  degree: 'B.Tech Computer Science and Engineering',
  degreeShort: 'Computer Science & Engineering',
  years: '2024—2028',
  cgpa: '9.34',
  availability: 'Open to software engineering internships',
} as const

export const navItems = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Toolkit', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
] as const

export const socialLinks = [
  { label: 'GitHub', href: profile.github, handle: '@Jiya54' },
  { label: 'LinkedIn', href: profile.linkedin, handle: 'jiya-santhosh' },
  { label: 'Email', href: `mailto:${profile.email}`, handle: profile.email },
] as const
