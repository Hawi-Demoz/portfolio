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
  { id: 'command', label: 'COMMAND', cmd: 'CMD' },
  { id: 'mission', label: 'MISSION', cmd: 'MSN' },
  { id: 'engineer', label: 'ENGINEER', cmd: 'ENG' },
  { id: 'systems', label: 'SYSTEMS', cmd: 'SYS' },
  { id: 'projects', label: 'PROJECTS', cmd: 'PRJ' },
  { id: 'research', label: 'RESEARCH', cmd: 'RSH' },
  { id: 'terminal', label: 'TERMINAL', cmd: 'TRM' },
  { id: 'contact', label: 'CONTACT', cmd: 'COM' },
  { id: 'dossier', label: 'RESUME', cmd: 'DOS' },
]

export const ENGINEER = {
  name: 'Hawi',
  role: 'Systems Engineer',
  division: 'Electrical Engineering',
  titles: [
    'Electrical Engineer',
    'Firmware Developer',
    'Frontend Developer',
    'AI Engineer',
  ],
  specializations: [
    'Software for hardware devices',
    'Firmware',
    'Artificial intelligence',
    'Web interfaces',
  ],
  currentMission: 'Adaptive Audio Steganography',
  clearance: 'Open to new opportunities',
  objective:
    'I build smart products that bring together hardware, software, AI, and clear design.',
  links: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'hawi@mission.control',
    resume: '/resume.pdf',
  },
}

export const SKILLS = [
  { name: 'Embedded C', module: 'SYS.EMBED', progress: 92 },
  { name: 'Python', module: 'SYS.PY', progress: 90 },
  { name: 'JavaScript', module: 'SYS.JS', progress: 88 },
  { name: 'React', module: 'SYS.REACT', progress: 86 },
  { name: 'Git', module: 'SYS.VCS', progress: 94 },
  { name: 'Linux', module: 'SYS.KERNEL', progress: 85 },
  { name: 'Machine Learning', module: 'SYS.ML', progress: 78 },
  { name: 'HTML', module: 'SYS.MARKUP', progress: 95 },
  { name: 'CSS', module: 'SYS.STYLE', progress: 90 },
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
      'A project that hides digital data inside audio files so the sound still seems normal, then recovers that data later. Uses audio processing, encryption, and machine learning.',
    objectives: [
      'Hide data inside audio without changing how it sounds',
      'Keep the hidden data intact when audio is compressed',
      'Recover the data accurately, even with some noise',
    ],
    technologies: ['Python', 'Audio processing', 'Machine learning', 'NumPy', 'Web Audio'],
    challenges: [
      'Fitting enough data without making the audio sound worse',
      'Keeping data safe when files are converted or compressed',
      'Building a fast process to hide and recover data',
    ],
    github: 'https://github.com',
  },
  {
    id: '02',
    code: 'MSN-02',
    title: 'Ask Jesus Chatbot',
    status: 'COMPLETE',
    brief:
      'A chat app that answers questions with guidance based on scripture. Focused on careful, respectful responses and a calm user experience.',
    objectives: [
      'Create a respectful and clear chat personality',
      'Base answers on trusted religious source material',
      'Build a chat experience that works well on phone and desktop',
    ],
    technologies: ['React', 'TypeScript', 'AI chat APIs', 'Node'],
    challenges: [
      'Reducing incorrect or made-up answers on sensitive topics',
      'Balancing fast replies with good answer quality',
      'Keeping a respectful tone and safe content',
    ],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: '03',
    code: 'MSN-03',
    title: 'Weather Dashboard',
    status: 'COMPLETE',
    brief:
      'A weather app that shows live forecasts, location-based updates, and easy-to-read charts.',
    objectives: [
      'Combine weather data from more than one source',
      'Show forecasts in a clear, easy layout',
      'Support location detection and city search',
    ],
    technologies: ['React', 'APIs', 'CSS', 'Charts'],
    challenges: [
      'Handling service limits and backup data sources',
      'Keeping the layout clear on small screens',
      'Managing time zones and unit conversions',
    ],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: '04',
    code: 'MSN-04',
    title: 'Worship Playlist',
    status: 'COMPLETE',
    brief:
      'A playlist app for worship music with a calm design, play controls, and smooth listening flow.',
    objectives: [
      'Make it easy to browse playlists',
      'Add play, pause, and queue controls',
      'Keep a quiet, focused visual style',
    ],
    technologies: ['JavaScript', 'HTML', 'CSS', 'Audio APIs'],
    challenges: [
      'Making audio work the same across browsers',
      'Managing playlist and queue state',
      'Keeping the app fast with media files',
    ],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: '05',
    code: 'MSN-05',
    title: 'Save the Sun',
    status: 'STANDBY',
    brief:
      'An interactive story about energy and caring for the planet, told through simple playable scenes.',
    objectives: [
      'Build short interactive story moments',
      'Show energy ideas in a visual, simple way',
      'Create a small experience people remember',
    ],
    technologies: ['React', 'Canvas', 'Animation', 'UI design'],
    challenges: [
      'Keeping the story fun without confusing users',
      'Running smoothly on older devices',
      'Pacing the story without too much clutter',
    ],
    github: 'https://github.com',
  },
]

export const RESEARCH = [
  {
    title: 'Hiding data in audio after compression',
    status: 'IN PROGRESS',
    summary:
      'Testing how well hidden audio data survives common file formats like AAC and MP3.',
  },
  {
    title: 'Low-power device reporting',
    status: 'ARCHIVED',
    summary:
      'Ways for small devices to send sensor updates while using as little power as possible.',
  },
  {
    title: 'Simple interfaces for AI tools',
    status: 'ACTIVE',
    summary:
      'How clean layouts and clear feedback help people trust important software tools.',
  },
]

export const BOOT_LINES = [
  'Connection established...',
  'Authenticating...',
  'Receiving encrypted transmission...',
  'Initializing Navigation Computer...',
  'Powering Life Support...',
  'Synchronizing Satellite...',
  'Scanning Crew Database...',
  'Loading Engineering Systems...',
  'MISSION LINK ESTABLISHED',
]

/** Clear labels for project status badges */
export const STATUS_LABEL: Record<Mission['status'], string> = {
  ACTIVE: 'IN PROGRESS',
  COMPLETE: 'COMPLETED',
  STANDBY: 'ON HOLD',
}
