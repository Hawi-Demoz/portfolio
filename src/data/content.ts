export type SectionId =
  | 'command'
  | 'mission'
  | 'engineer'
  | 'systems'
  | 'projects'
  | 'research'
  | 'terminal'
  | 'contact'
  | 'dossier'

export const NAV_MODULES: { id: SectionId; label: string; cmd: string }[] = [
  { id: 'command', label: 'HOME', cmd: 'HOME' },
  { id: 'terminal', label: 'TERMINAL', cmd: '01' },
  { id: 'engineer', label: 'ABOUT', cmd: '02' },
  { id: 'mission', label: 'EXPERTISE', cmd: '03' },
  { id: 'projects', label: 'PROJECTS', cmd: '04' },
  { id: 'systems', label: 'SKILLS', cmd: '05' },
  { id: 'research', label: 'HOBBIES', cmd: '06' },
  { id: 'contact', label: 'CONTACT', cmd: '07' },
  { id: 'dossier', label: 'RESUME', cmd: 'PDF' },
]

export const ENGINEER = {
  name: 'Hawi Demoz',
  role: 'Electrical & Computer Engineer | Software Developer',
  division: 'Electrical & Computer Engineering',
  titles: [
    'Electrical & Computer Engineer',
    'Software Developer',
    'Web Developer',
    'Engineering Learner',
  ],
  specializations: [
    'Software Development',
    'Embedded Systems',
    'Signal Processing',
    'Wireless Communication',
    'Data Analysis',
  ],
  currentMission: 'Adaptive Audio Steganography',
  clearance: 'Open to software development, engineering, data, and technology opportunities',
  objective:
    'I am an Electrical and Computer Engineer interested in building practical software and engineering solutions. My work and projects explore web development, embedded systems, signal processing, wireless communication, artificial intelligence, and data analysis.',
  links: {
    github: 'https://github.com/Hawi-Demoz',
    linkedin: 'https://www.linkedin.com/in/hawi-demoz',
    email: 'hawidemoz@gmail.com',
    telegram: 'https://t.me/egziharia',
    resume: '/resume.pdf',
  },
}

export const SKILLS = [
  {
    group: 'Programming & Web Development',
    items: ['Python', 'JavaScript', 'TypeScript', 'React', 'Angular', 'FastAPI', 'Flask', 'Tailwind CSS'],
  },
  {
    group: 'Engineering & Technical Areas',
    items: ['Embedded Systems', 'Signal Processing', 'Wireless Network Planning', 'Data Analysis', 'MATLAB'],
  },
  {
    group: 'Tools',
    items: ['Git', 'GitHub', 'Figma'],
  },
  {
    group: 'Professional Skills',
    items: ['Problem Solving', 'Adaptability', 'Team Collaboration'],
  },
]

export type Mission = {
  id: string
  code: string
  title: string
  status: 'ACTIVE' | 'COMPLETE' | 'STANDBY'
  brief: string
  objectives: string[]
  technologies: string[]
  stackDescription?: string
  challenges?: string[]
  images?: { src: string; alt: string }[]
  github?: string
  demo?: string
}

export const MISSIONS: Mission[] = [
  {
    id: '01',
    code: 'MSN-01',
    title: 'Adaptive Audio Steganography',
    status: 'COMPLETE',
    brief:
      'Designing an adaptive audio steganography system that securely embeds secret information into digital audio while preserving sound quality. The project explores adaptive embedding techniques and evaluates performance using signal quality metrics.',
    objectives: [
      'Embed information into audio while preserving acceptable sound quality',
      'Explore adaptive methods for reliable data hiding in digital audio',
      'Evaluate the system using signal quality metrics and practical testing',
    ],
    technologies: ['Python', 'React'],
    challenges: [
      'Balancing data capacity with audio quality',
      'Maintaining reliable embedding under common signal changes',
      'Evaluating how well the method performs in practice',
    ],
    github: 'https://github.com/Hawi-Demoz/adaptive_steganography',
    demo: 'https://adaptive-steganography-aojk.vercel.app/',
  },
  {
    id: '02',
    code: 'MSN-02',
    title: 'Muse',
    status: 'ACTIVE',
    brief:
      'A creative collaboration and project-management platform for visual folios, shared work, deliverables, creator profiles, and direct collaboration.',
    objectives: [
      'Give creative projects a structured home through visual folios and tasks',
      'Support creator discovery, team roles, and collaboration requests',
      'Keep project communication and deliverables connected in one workspace',
    ],
    technologies: ['Angular', 'FastAPI', 'PostgreSQL', 'JWT Auth', 'pytest'],
    stackDescription:
      'Built with Angular 19 using standalone components and signals on the frontend, with TypeScript and Tailwind CSS shaping the interface. The FastAPI backend uses SQLAlchemy 2.0 with PostgreSQL in production and SQLite as a local fallback, alongside JWT authentication, role-based access control, and pytest coverage for the core backend workflows.',
    images: [
      { src: '/landing.jpg', alt: 'Muse landing page introducing the creative collaboration studio' },
      { src: '/folio.jpg', alt: 'Muse creative folios workspace with project cards' },
      { src: '/message1.jpg', alt: 'Muse messages view showing a collaboration conversation' },
      { src: '/message2.jpg', alt: 'Muse conversation view with project collaboration messages' },
    ],
    github: 'https://github.com/Hawi-Demoz/muse',
  },
  {
    id: '03',
    code: 'MSN-03',
    title: 'Wireless Cellular Network Planner',
    status: 'ACTIVE',
    brief:
      'Designed a wireless cellular network planning system that analyzes coverage requirements, cell placement, frequency reuse, and network capacity to improve communication efficiency.',
    objectives: [
      'Analyze wireless coverage and placement requirements',
      'Study capacity, reuse, and network efficiency considerations',
      'Explore practical network planning concepts for communication systems',
    ],
    technologies: [],
    challenges: [
      'Balancing coverage needs with capacity constraints',
      'Understanding practical trade-offs in cell placement',
      'Modeling planning decisions in a clear, testable way',
    ],
    github: 'https://github.com/Hawi-Demoz/myCellular-Planner',
    demo: 'https://my-cellular-planner.vercel.app/',
  },
  {
    id: '04',
    code: 'MSN-04',
    title: 'Employee Management System',
    status: 'COMPLETE',
    brief:
      'Developed a web-based Employee Management System for managing employee records, roles, attendance, departments, and administrative workflows. Implemented authentication, database-driven CRUD operations, and responsive user interfaces.',
    objectives: [
      'Create a practical system for employee records and administration',
      'Support role, attendance, and department management workflows',
      'Build a responsive interface with secure and functional data handling',
    ],
    technologies: ['React', 'Flask', 'JavaScript', 'Authentication', 'CRUD', 'Responsive UI'],
    challenges: [
      'Designing a clear admin workflow for everyday use',
      'Handling data operations reliably across the application',
      'Keeping the interface responsive and user-friendly',
    ],
    github: 'https://github.com',
  },
]

export const RESEARCH = [
  {
    title: 'Adaptive Audio Steganography',
    status: 'IN PROGRESS',
    summary:
      'Exploring techniques for embedding information into digital audio while maintaining acceptable sound quality and evaluating performance using signal quality metrics.',
  },
  {
    title: 'Wireless Communication & Network Planning',
    status: 'ACTIVE',
    summary:
      'Exploring communication network concepts including coverage planning, cell placement, frequency reuse, and network capacity.',
  },
  {
    title: 'Signal Processing',
    status: 'ACTIVE',
    summary:
      'Developing knowledge and practical experience in signal processing concepts through engineering projects and academic work.',
  },
]

export const BOOT_LINES = [
  'Loading Hawi Demoz’s portfolio...',
  'Preparing illustrated project studies...',
  'Organizing engineering work and research...',
  'Setting the visual workspace...',
  'Opening the portfolio...',
  'WELCOME',
]

/** Clear labels for project status badges */
export const STATUS_LABEL: Record<Mission['status'], string> = {
  ACTIVE: 'IN PROGRESS',
  COMPLETE: 'COMPLETED',
  STANDBY: 'ON HOLD',
}
