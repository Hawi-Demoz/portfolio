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
  { id: 'command', label: 'COVER', cmd: 'CVR' },
  { id: 'mission', label: 'PROLOGUE', cmd: 'CH.01' },
  { id: 'engineer', label: 'ABOUT', cmd: 'CH.02' },
  { id: 'systems', label: 'INDEX', cmd: 'CH.03' },
  { id: 'projects', label: 'PROJECTS', cmd: 'CH.04' },
  { id: 'research', label: 'NOTES', cmd: 'CH.05' },
  { id: 'terminal', label: 'APPENDIX', cmd: 'APP' },
  { id: 'contact', label: 'CONTACT', cmd: 'CH.06' },
  { id: 'dossier', label: 'RESUME', cmd: 'FOLIO' },
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
    'Web Applications',
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
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'hawi@mission.control',
    resume: '/resume.pdf',
  },
}

export const SKILLS = [
  {
    group: 'Programming & Web Development',
    items: ['Python', 'JavaScript', 'HTML5', 'CSS3', 'React', 'Flask', 'Tailwind CSS'],
  },
  {
    group: 'Engineering & Technical Areas',
    items: ['Embedded Systems', 'Signal Processing', 'Audio Steganography', 'Wireless Network Planning', 'Data Analysis', 'MATLAB'],
  },
  {
    group: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Figma'],
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
  challenges: string[]
  github?: string
  demo?: string
}

export const MISSIONS: Mission[] = [
  {
    id: '01',
    code: 'MSN-01',
    title: 'Adaptive Audio Steganography',
    status: 'ACTIVE',
    brief:
      'Designing an adaptive audio steganography system that securely embeds secret information into digital audio while preserving sound quality. The project explores adaptive embedding techniques and evaluates performance using signal quality metrics.',
    objectives: [
      'Embed information into audio while preserving acceptable sound quality',
      'Explore adaptive methods for reliable data hiding in digital audio',
      'Evaluate the system using signal quality metrics and practical testing',
    ],
    technologies: ['Python', 'MATLAB', 'Signal Processing', 'Audio Steganography', 'Digital Audio'],
    challenges: [
      'Balancing data capacity with audio quality',
      'Maintaining reliable embedding under common signal changes',
      'Evaluating how well the method performs in practice',
    ],
    github: 'https://github.com',
  },
  {
    id: '02',
    code: 'MSN-02',
    title: 'Urban Indexing & Data Analysis Project',
    status: 'COMPLETE',
    brief:
      'Developed a data analysis system for organizing and indexing urban infrastructure data to support planning and development decisions.',
    objectives: [
      'Organize urban data into a structured and usable format',
      'Support analysis for planning and decision-making',
      'Improve access to key information for infrastructure-related work',
    ],
    technologies: ['Python', 'Data Analysis', 'Structured Data', 'Visualization', 'Reporting'],
    challenges: [
      'Sorting and standardizing varied urban data sources',
      'Making analysis useful for planning tasks',
      'Turning raw information into a clear, practical system',
    ],
    github: 'https://github.com',
  },
  {
    id: '03',
    code: 'MSN-03',
    title: 'Wireless Cellular Network Planner',
    status: 'COMPLETE',
    brief:
      'Designed a wireless cellular network planning system that analyzes coverage requirements, cell placement, frequency reuse, and network capacity to improve communication efficiency.',
    objectives: [
      'Analyze wireless coverage and placement requirements',
      'Study capacity, reuse, and network efficiency considerations',
      'Explore practical network planning concepts for communication systems',
    ],
    technologies: ['Wireless Communication', 'Network Planning', 'Coverage Analysis', 'MATLAB', 'Radio Concepts'],
    challenges: [
      'Balancing coverage needs with capacity constraints',
      'Understanding practical trade-offs in cell placement',
      'Modeling planning decisions in a clear, testable way',
    ],
    github: 'https://github.com',
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
  'Opening Hawi Demoz’s portfolio book...',
  'Gathering hand-drawn plates and chapter folios...',
  'Binding engineering projects and study notes...',
  'Setting warm cream spreads...',
  'Turning to the opening cover...',
  'WELCOME TO THE BOOK',
]

/** Clear labels for project status badges */
export const STATUS_LABEL: Record<Mission['status'], string> = {
  ACTIVE: 'IN PROGRESS',
  COMPLETE: 'COMPLETED',
  STANDBY: 'ON HOLD',
}
