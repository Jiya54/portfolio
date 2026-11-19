export interface ArchitectureNode {
  label: string
  detail: string
  planned?: boolean
}

export interface Challenge {
  label: string
  title: string
  body: string
}

export interface Feature {
  title: string
  body: string
}

export interface ProjectCaseStudy {
  disclaimer?: string
  intro: string
  problem: string[]
  objectives: string[]
  contribution: string[]
  features: Feature[]
  future?: Feature[]
  architecture: {
    nodes: ArchitectureNode[]
    caption: string
  }
  implementation: string[]
  challenges: Challenge[]
}

export interface Project {
  slug: string
  index: string
  name: string
  fullName: string
  tagline: string
  description: string
  tech: string[]
  status: string
  focus: string
  context: string
  timeline: string
  repo: string | null
  repoNote: string
  caseStudy: ProjectCaseStudy
}

export const projects: Project[] = [
  {
    slug: 'borderguard-ai',
    index: '01',
    name: 'BorderGuard AI',
    fullName: 'BorderGuard AI — Document Verification System',
    tagline: 'Reading a document is not the same as trusting it.',
    description:
      'An AI-based document verification system focused on passport image analysis and document authenticity assessment.',
    tech: ['Python', 'FastAPI', 'OpenCV'],
    status: 'In development',
    focus: 'Backend & computer vision',
    context: 'Ongoing project',
    timeline: 'In development',
    repo: null,
    repoNote: 'Repository not published yet',
    caseStudy: {
      disclaimer:
        'BorderGuard AI is in development. This page documents the current implementation direction. Capabilities marked as future work — including OCR, MRZ validation, and tampering detection — are not implemented yet.',
      intro:
        'BorderGuard AI explores document verification as an engineering pipeline rather than a single check. The current focus is passport imagery: handling images with OpenCV, exposing verification workflows through FastAPI, and gradually expanding the authenticity signals the system can examine.',
      problem: [
        'A scanned identity document can look convincing while still being altered. Checking authenticity requires consistent image handling, more than one verification signal, and a backend that can return a structured assessment instead of a binary guess.',
        'The project starts with passport images, where visual inspection and machine-readable information both matter. BorderGuard AI is being built around that problem: a Python verification backend that can grow as additional checks are added.',
      ],
      objectives: [
        'Build a Python verification backend for document authenticity assessment.',
        'Expose verification workflows through a FastAPI REST API.',
        'Apply OpenCV-based image processing to passport images.',
        'Keep the pipeline extensible for future OCR, MRZ, and tampering checks.',
      ],
      contribution: [
        'Designing and developing the verification backend in Python.',
        'Building FastAPI endpoints for document verification workflows.',
        'Implementing image-processing steps using OpenCV.',
        'Scoping the verification pipeline around passport image analysis.',
      ],
      features: [
        {
          title: 'Passport image analysis',
          body: 'Passport images are the primary input to the current verification workflow.',
        },
        {
          title: 'Python verification backend',
          body: 'Verification logic lives in a Python backend rather than entirely in the client.',
        },
        {
          title: 'FastAPI endpoints',
          body: 'REST endpoints expose document verification workflows to a consuming application.',
        },
        {
          title: 'OpenCV image processing',
          body: 'OpenCV is used for the image-processing stages of the pipeline.',
        },
      ],
      future: [
        {
          title: 'OCR',
          body: 'Extracting printed document information as a verification input. Not implemented yet.',
        },
        {
          title: 'MRZ extraction & validation',
          body: 'Reading and checking the machine-readable zone on passport images. Not implemented yet.',
        },
        {
          title: 'Tampering detection',
          body: 'Looking for signs of document alteration at the image level. Being explored, not complete.',
        },
        {
          title: 'Image-based verification checks',
          body: 'Additional authenticity signals that may be combined into the pipeline over time.',
        },
      ],
      architecture: {
        nodes: [
          { label: 'API client', detail: 'Submits a document image' },
          { label: 'FastAPI service', detail: 'Verification endpoints' },
          { label: 'OpenCV pipeline', detail: 'Image processing' },
          { label: 'Verification response', detail: 'Structured assessment' },
        ],
        caption:
          'A simplified view of the supplied stack. Internal modules, response schemas, and any front-end implementation are not finalised.',
      },
      implementation: [
        'The backend is written in Python, with FastAPI handling REST endpoints for verification workflows.',
        'OpenCV provides the image-processing layer for passport image analysis.',
        'The project is being approached as a sequence of verification steps so that new checks can be added without rebuilding the API surface.',
      ],
      challenges: [
        {
          label: 'Open question',
          title: 'Authenticity is more than image quality',
          body: 'A clear scan is not necessarily a genuine document. The project is scoping verification around multiple signals rather than treating image processing alone as proof of authenticity.',
        },
        {
          label: 'Design constraint',
          title: 'Keeping verification steps composable',
          body: 'OCR, MRZ checks, and tampering analysis are future directions, so the backend is being designed as a pipeline of checks rather than a single fixed pass.',
        },
        {
          label: 'Not yet measured',
          title: 'No accuracy claims',
          body: 'No accuracy figures, verification results, or model benchmarks are claimed. Evaluation criteria still need to be defined against a suitable set of document images.',
        },
      ],
    },
  },
  {
    slug: 'parallel',
    index: '02',
    name: 'Parallel',
    fullName: 'Parallel — Real-Time Collaborative Browsing',
    tagline: 'A shared session for browsing the web together.',
    description:
      'A collaborative browsing platform designed to let multiple users browse the internet together through synchronized shared sessions.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'Socket.IO'],
    status: 'Collaborative team project',
    focus: 'Real-time backend',
    context: 'Team project',
    timeline: 'Ongoing',
    repo: 'https://github.com/justhashim/parallel',
    repoNote: 'Public repository',
    caseStudy: {
      disclaimer:
        'Parallel is a collaborative team project. The contribution described here is limited to my work on the real-time backend and does not represent the entire application.',
      intro:
        'Parallel is built around a simple idea: browsing the internet together should not require screen sharing and manual navigation. The platform uses shared rooms and real-time communication to keep participants on the same page — quite literally — as they browse.',
      problem: [
        'Most collaborative browsing today is approximated with screen sharing, links pasted into chat, and one person driving while others watch. That works for a presentation, but it does not make browsing genuinely shared.',
        'A collaborative session needs rooms, membership, and a way to synchronize navigation and session state between participants in real time. Parallel explores that model with a Next.js front end and a Node.js backend.',
      ],
      objectives: [
        'Let multiple users join and browse within a shared room.',
        'Synchronize session state between participants in real time.',
        'Provide room management for shared browsing sessions.',
        'Build the real-time backend that connects the client experience.',
      ],
      contribution: [
        'Contributed to real-time backend development using Node.js and Express.js.',
        'Worked on room management for shared browsing sessions.',
        'Implemented Socket.IO communication for real-time events between users.',
        'Worked on synchronisation between participants in shared rooms.',
      ],
      features: [
        {
          title: 'Shared rooms',
          body: 'Users browse within a common session rather than sending links back and forth.',
        },
        {
          title: 'Real-time synchronisation',
          body: 'Session activity is communicated between participants as it happens.',
        },
        {
          title: 'Socket.IO communication',
          body: 'The real-time channel is built around Socket.IO events.',
        },
        {
          title: 'Room management',
          body: 'Shared sessions are organised into rooms on the backend.',
        },
      ],
      architecture: {
        nodes: [
          { label: 'Next.js clients', detail: 'React + TypeScript interface' },
          { label: 'Socket.IO', detail: 'Real-time event channel' },
          { label: 'Express / Node.js', detail: 'Room coordination' },
          { label: 'Shared session', detail: 'Room-scoped state' },
        ],
        caption:
          'Communication between clients and the backend is mediated by Socket.IO. This is a simplified view of the described stack; front-end internals and event schemas are omitted.',
      },
      implementation: [
        'The backend uses Node.js and Express.js, with Socket.IO providing real-time communication.',
        'Room management is handled on the backend so that events stay scoped to the session they belong to.',
        'The backing application uses Next.js, React, TypeScript, and Tailwind CSS; this case study covers the real-time backend contribution specifically.',
      ],
      challenges: [
        {
          label: 'Core problem',
          title: 'Keeping every participant in sync',
          body: 'A shared browsing session only feels shared if updates reach participants consistently. Socket.IO events and room-scoped communication are the foundation for that behaviour.',
        },
        {
          label: 'Design decision',
          title: 'Rooms need clear boundaries',
          body: 'Real-time events must not leak between unrelated sessions. Room management keeps communication scoped to participants who belong to the same browsing session.',
        },
        {
          label: 'Teamwork',
          title: 'Building inside a shared codebase',
          body: 'As a collaborative project, backend work had to fit the conventions and expectations of a larger application built by multiple contributors.',
        },
      ],
    },
  },
  {
    slug: 'claimsafe',
    index: '03',
    name: 'ClaimSafe',
    fullName: 'ClaimSafe — Smart Lost & Found Verification',
    tagline: 'Find the owner before revealing the find.',
    description:
      'A smart lost-and-found platform that introduces ownership verification before revealing the location of recovered items.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'JavaScript'],
    status: 'Tink-Her-Hack 4.0 finalist',
    focus: 'Backend & verification',
    context: 'Hackathon project',
    timeline: 'Tink-Her-Hack 4.0',
    repo: 'https://github.com/Jiya54/claimsafe',
    repoNote: 'Public repository',
    caseStudy: {
      disclaimer:
        'ClaimSafe was developed for Tink-Her-Hack 4.0 and reached the finalist stage. This case study documents the features described in the project build; public interface screenshots are not available yet.',
      intro:
        'Lost-and-found systems usually optimise for posting items, not for returning them to the right person. ClaimSafe flips the order: establish ownership first, then reveal where the item is. It was built for Tink-Her-Hack 4.0 and recognised as a finalist.',
      problem: [
        'A public lost-and-found board often reveals an item’s description and location to anyone who visits it. That makes it easy for someone to claim an item they do not own — and risky to publish precise recovery details.',
        'ClaimSafe needed a verification step between “I think this is mine” and “here is where the item is”. That meant ownership checks, a way to match claims against recovered items, and a backend that could hold evidence such as images.',
      ],
      objectives: [
        'Verify ownership before disclosing an item’s location.',
        'Support secret-question verification for claims.',
        'Match claims to recovered items and rank likely matches.',
        'Accept image evidence through a REST API.',
      ],
      contribution: [
        'Built REST APIs for claim verification and item matching.',
        'Implemented secret-question verification as an ownership check.',
        'Implemented claim matching with confidence-based ranking.',
        'Added image upload support for item and claim evidence.',
        'Used MongoDB for application data.',
      ],
      features: [
        {
          title: 'Ownership verification',
          body: 'The location of a recovered item is gated behind a verification step.',
        },
        {
          title: 'Secret-question verification',
          body: 'Claimants answer a secret question whose details would only be known to the owner.',
        },
        {
          title: 'Claim matching',
          body: 'Claims are matched against recovered items to surface plausible ownership.',
        },
        {
          title: 'Confidence-based ranking',
          body: 'Matches are ranked by confidence rather than treated as a single yes-or-no result.',
        },
        {
          title: 'Image uploads',
          body: 'Images can be submitted through the API as supporting evidence.',
        },
        {
          title: 'REST API development',
          body: 'The verification and matching workflows are exposed as backend endpoints.',
        },
      ],
      architecture: {
        nodes: [
          { label: 'Web client', detail: 'Item and claim flows' },
          { label: 'Express REST API', detail: 'Verification & matching' },
          { label: 'Verification logic', detail: 'Secret question + ranking' },
          { label: 'MongoDB', detail: 'Items, claims, evidence' },
        ],
        caption:
          'A simplified view based on the supplied stack. Collection schemas, ranking rules, and deployment details are not included.',
      },
      implementation: [
        'The backend uses Node.js and Express.js with REST endpoints for secret-question verification, claim matching, confidence-based ranking, and image uploads.',
        'MongoDB stores application data for items, claims, and supporting evidence.',
        'The verification gate sits ahead of location disclosure, so ownership is assessed before recovery details are returned.',
      ],
      challenges: [
        {
          label: 'Core problem',
          title: 'Proving ownership before disclosure',
          body: 'Revealing an item’s location is irreversible. The design puts verification between a claim and that disclosure, using question-based checks and claim matching instead of trusting the first person to respond.',
        },
        {
          label: 'Matching',
          title: 'Claims are not always certain',
          body: 'A description can partially match several items. Confidence-based ranking makes uncertainty visible instead of forcing a binary match. The detailed ranking approach is part of the project implementation.',
        },
        {
          label: 'Evidence',
          title: 'Handling uploaded images',
          body: 'Supporting images pass through the REST API and into the application’s data flow. Storage and validation details are intentionally left out of this summary rather than assumed.',
        },
      ],
    },
  },
  {
    slug: 'javafit',
    index: '04',
    name: 'JavaFit',
    fullName: 'JavaFit — Fitness Tracking Application',
    tagline: 'Training data, made legible.',
    description:
      'A fitness tracking application supporting workout management, BMI monitoring, and progress visualization.',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'Tailwind CSS', 'Chart.js'],
    status: 'Application build',
    focus: 'Full-stack Java',
    context: 'Spring Boot application',
    timeline: 'Application project',
    repo: null,
    repoNote: 'Repository not published yet',
    caseStudy: {
      disclaimer:
        'JavaFit is presented as an application build. This case study covers the implemented feature set described below; interface screenshots and repository links are not available yet.',
      intro:
        'JavaFit brings workout tracking, BMI monitoring, and progress charts into a single Spring Boot application. It is a full-stack Java build: authenticated REST APIs on the backend, PostgreSQL for persistence, and a focused interface for reading progress over time.',
      problem: [
        'Fitness data tends to scatter across notes, spreadsheets, and separate calculators. That makes it hard to see how workouts and body measurements relate over time.',
        'JavaFit treats tracking as one connected workflow: record workouts, keep an eye on BMI, and visualise progress. Because the data is personal, authentication and secure password handling are part of the application rather than an afterthought.',
      ],
      objectives: [
        'Support workout management in a single application.',
        'Monitor BMI alongside training activity.',
        'Visualise progress over time.',
        'Secure user access with authenticated Spring Boot APIs.',
      ],
      contribution: [
        'Built REST APIs with Spring Boot and Spring Data JPA.',
        'Integrated PostgreSQL for application persistence.',
        'Implemented BCrypt-based password hashing with Spring Security.',
        'Built workout management, BMI monitoring, and progress visualization features.',
      ],
      features: [
        {
          title: 'Workout management',
          body: 'Training activity can be recorded and managed within the application.',
        },
        {
          title: 'BMI monitoring',
          body: 'Body mass index is tracked alongside fitness activity.',
        },
        {
          title: 'Progress visualization',
          body: 'Chart.js is used to present progress rather than leaving it in raw records.',
        },
        {
          title: 'Spring Boot REST APIs',
          body: 'The application is backed by Java REST endpoints.',
        },
        {
          title: 'Spring Data JPA + PostgreSQL',
          body: 'Application data is persisted through JPA into a PostgreSQL database.',
        },
        {
          title: 'BCrypt authentication',
          body: 'Passwords are hashed with BCrypt through Spring Security.',
        },
      ],
      architecture: {
        nodes: [
          { label: 'Web client', detail: 'Tailwind CSS + Chart.js' },
          { label: 'Spring Boot API', detail: 'REST endpoints' },
          { label: 'Spring Security', detail: 'Authentication / BCrypt' },
          { label: 'Spring Data JPA', detail: 'Persistence layer' },
          { label: 'PostgreSQL', detail: 'Application data' },
        ],
        caption:
          'A simplified view of the described stack. Endpoint structure, entity relationships, and deployment details are not asserted here.',
      },
      implementation: [
        'The backend uses Java and Spring Boot, with REST APIs built on Spring Data JPA.',
        'PostgreSQL provides persistence for the application’s fitness and user data.',
        'Spring Security handles authentication, with BCrypt used for password hashing.',
        'Progress visualization is implemented with Chart.js, and the interface uses Tailwind CSS.',
      ],
      challenges: [
        {
          label: 'Security',
          title: 'Protecting personal fitness data',
          body: 'Fitness records are personal. Spring Security and BCrypt-based password hashing keep authentication in the backend rather than leaving credentials exposed to the client.',
        },
        {
          label: 'Data modelling',
          title: 'Connecting workouts, BMI, and time',
          body: 'Progress only becomes useful when records are consistent. Spring Data JPA and PostgreSQL provide the persistence layer for workouts and BMI data.',
        },
        {
          label: 'Presentation',
          title: 'Making progress readable',
          body: 'Numbers alone do not show a trend. Chart.js is used to turn tracked values into a visual record of progress.',
        },
      ],
    },
  },
]

export const getProject = (slug: string | undefined) =>
  projects.find((project) => project.slug === slug)

export const getNextProject = (slug: string) => {
  const index = projects.findIndex((project) => project.slug === slug)
  return projects[(index + 1) % projects.length]
}
