import { ENGINEER, MISSIONS, SKILLS, RESEARCH, STATUS_LABEL } from './content'

export type TerminalLine = {
  type: 'input' | 'output' | 'system' | 'error' | 'success'
  text: string
}

export const TERMINAL_COMMANDS = [
  'help',
  'whoami',
  'projects',
  'skills',
  'research',
  'resume',
  'contact',
  'clear',
  'status',
  'launch',
  'mission',
  'systems',
  'diagnostics',
  'github',
  'linkedin',
  'date',
  'pwd',
  'cat',
  'coffee',
  'sudo',
  'ls',
  'echo',
] as const

export function resolveCommand(raw: string): TerminalLine[] {
  const trimmed = raw.trim()
  if (!trimmed) return []

  const parts = trimmed.split(/\s+/)
  const cmd = parts[0].toLowerCase()
  const args = parts.slice(1)
  const full = trimmed.toLowerCase()

  if (full === 'sudo reveal-secret') {
    return [
      {
        type: 'success',
        text: 'Curiosity is an engineer\'s greatest tool.',
      },
    ]
  }

  if (full === 'sudo hire hawi' || full === 'sudo hire Hawi'.toLowerCase()) {
    return [
      { type: 'success', text: 'Access granted.' },
      { type: 'system', text: 'Thanks for your interest — let\'s talk.' },
    ]
  }

  if (cmd === 'coffee') {
    return [{ type: 'output', text: 'Coffee level: critically low.' }]
  }

  switch (cmd) {
    case 'help':
      return [
        { type: 'system', text: 'HAWI_OS terminal — available commands:' },
        {
          type: 'output',
          text: TERMINAL_COMMANDS.filter((c) => c !== 'sudo' && c !== 'echo')
            .map((c) => `  ${c}`)
            .join('\n'),
        },
        {
          type: 'output',
          text: '  cat mission.txt\n  sudo reveal-secret\n  sudo hire Hawi',
        },
      ]

    case 'whoami':
      return [
        { type: 'output', text: `${ENGINEER.name} — ${ENGINEER.role}` },
        { type: 'output', text: `Field: ${ENGINEER.division}` },
        {
          type: 'output',
          text: `Focus areas: ${ENGINEER.specializations.join(' · ')}`,
        },
      ]

    case 'projects':
    case 'mission':
      return [
        { type: 'system', text: 'PROJECT LIST' },
        ...MISSIONS.map((m) => ({
          type: 'output' as const,
          text: `${m.code}  [${STATUS_LABEL[m.status]}]  ${m.title}`,
        })),
      ]

    case 'skills':
    case 'systems':
      return [
        { type: 'system', text: 'SKILLS' },
        ...SKILLS.map((s) => ({
          type: 'output' as const,
          text: `${s.module.padEnd(14)} ${s.name.padEnd(20)} ${s.progress}%`,
        })),
      ]

    case 'research':
      return [
        { type: 'system', text: 'RESEARCH NOTES' },
        ...RESEARCH.map((r) => ({
          type: 'output' as const,
          text: `[${r.status}] ${r.title}\n  ${r.summary}`,
        })),
      ]

    case 'resume':
    case 'dossier':
      return [
        {
          type: 'output',
          text: 'Resume section opening...',
        },
        { type: 'system', text: `Download: ${ENGINEER.links.resume}` },
      ]

    case 'contact':
      return [
        { type: 'output', text: `Email: ${ENGINEER.links.email}` },
        { type: 'system', text: 'Go to the Contact section to send a message.' },
      ]

    case 'status':
    case 'diagnostics':
      return [
        { type: 'system', text: 'SYSTEM STATUS' },
        { type: 'output', text: 'ENGINEER .......... ONLINE' },
        { type: 'output', text: 'SIGNAL ............ 98%' },
        { type: 'output', text: 'SATELLITE LINK .... CONNECTED' },
        { type: 'output', text: 'CPU ............... 41%' },
        { type: 'output', text: 'MEMORY ............ 62%' },
        { type: 'output', text: 'UPTIME ............ 1024 HOURS' },
        { type: 'output', text: 'LOCATION .......... EARTH' },
        { type: 'output', text: 'MISSION ........... ACTIVE' },
      ]

    case 'launch':
      return [
        { type: 'system', text: 'Welcome sequence started.' },
        {
          type: 'success',
          text: 'Everything looks good. Welcome to HAWI_OS.',
        },
      ]

    case 'github':
      return [
        { type: 'output', text: `Opening GitHub: ${ENGINEER.links.github}` },
      ]

    case 'linkedin':
      return [
        {
          type: 'output',
          text: `Opening LinkedIn: ${ENGINEER.links.linkedin}`,
        },
      ]

    case 'date':
      return [
        {
          type: 'output',
          text: new Date().toUTCString() + ' (UTC)',
        },
      ]

    case 'pwd':
      return [{ type: 'output', text: '/spacecraft/hawi_os/mission_control' }]

    case 'ls':
      return [
        {
          type: 'output',
          text: 'missions/  systems/  research/  dossier/  uplink/  mission.txt',
        },
      ]

    case 'cat': {
      const file = args[0]?.toLowerCase()
      if (file === 'mission.txt') {
        return [
          { type: 'output', text: 'ABOUT MY WORK' },
          { type: 'output', text: ENGINEER.objective },
        ]
      }
      if (!file) {
        return [{ type: 'error', text: 'usage: cat <file>' }]
      }
      return [{ type: 'error', text: `cat: ${file}: No such file` }]
    }

    case 'echo':
      return [{ type: 'output', text: args.join(' ') || '' }]

    case 'clear':
      return [{ type: 'system', text: '__CLEAR__' }]

    case 'sudo':
      return [
        {
          type: 'error',
          text: 'sudo: incomplete command. Try `sudo reveal-secret` or `sudo hire Hawi`.',
        },
      ]

    default:
      return [
        {
          type: 'error',
          text: `command not found: ${cmd}. Type 'help' for available commands.`,
        },
      ]
  }
}

export function autocomplete(partial: string): string | null {
  if (!partial) return null
  const lower = partial.toLowerCase()
  const matches = TERMINAL_COMMANDS.filter((c) => c.startsWith(lower))
  if (matches.length === 1) return matches[0]
  if (lower.startsWith('cat ')) {
    if ('mission.txt'.startsWith(lower.slice(4))) return 'cat mission.txt'
  }
  if (lower.startsWith('sudo ')) {
    const rest = lower.slice(5)
    const sudoCmds = ['reveal-secret', 'hire Hawi']
    const m = sudoCmds.filter((s) => s.toLowerCase().startsWith(rest))
    if (m.length === 1) return `sudo ${m[0]}`
  }
  return null
}

export function autocompleteSuggestions(partial: string): string[] {
  if (!partial) return [...TERMINAL_COMMANDS]
  const lower = partial.toLowerCase()
  return TERMINAL_COMMANDS.filter((c) => c.startsWith(lower))
}
