import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from 'react'
import { motion } from 'framer-motion'
import {
  autocomplete,
  autocompleteSuggestions,
  resolveCommand,
  type TerminalLine,
} from '../../data/terminal'
import { ENGINEER } from '../../data/content'

const PROMPT = 'hawi@mission-control:~$'

export function TerminalSection() {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: 'system', text: 'HAWI_OS terminal ready' },
    { type: 'output', text: "Type 'help' to see available commands." },
  ])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [histIndex, setHistIndex] = useState(-1)
  const [suggestions, setSuggestions] = useState<string[]>([])
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const shellRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [lines])

  const run = useCallback((raw: string) => {
    const cmd = raw.trim()
    setLines((prev) => [...prev, { type: 'input', text: `${PROMPT} ${cmd}` }])
    if (!cmd) return

    const result = resolveCommand(cmd)
    if (result.some((l) => l.text === '__CLEAR__')) {
      setLines([])
      return
    }

    const lower = cmd.toLowerCase()
    if (lower === 'github') window.open(ENGINEER.links.github, '_blank')
    if (lower === 'linkedin') window.open(ENGINEER.links.linkedin, '_blank')
    if (lower === 'resume' || lower === 'dossier') {
      document.getElementById('dossier')?.scrollIntoView({ behavior: 'smooth' })
    }
    if (lower === 'contact') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }

    setLines((prev) => [...prev, ...result])
    setHistory((h) => [cmd, ...h.filter((x) => x !== cmd)].slice(0, 50))
    setHistIndex(-1)
  }, [])

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      run(input)
      setInput('')
      setSuggestions([])
      return
    }

    if (e.key === 'Tab') {
      e.preventDefault()
      const match = autocomplete(input)
      if (match) {
        setInput(match)
        setSuggestions([])
      } else {
        setSuggestions(autocompleteSuggestions(input))
      }
      return
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (!history.length) return
      const next = Math.min(histIndex + 1, history.length - 1)
      setHistIndex(next)
      setInput(history[next] ?? '')
      return
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (histIndex <= 0) {
        setHistIndex(-1)
        setInput('')
        return
      }
      const next = histIndex - 1
      setHistIndex(next)
      setInput(history[next] ?? '')
    }
  }

  const colorFor = (type: TerminalLine['type']) => {
    switch (type) {
      case 'input':
        return 'text-soft-white'
      case 'system':
        return 'text-cyan/80'
      case 'error':
        return 'text-amber'
      case 'success':
        return 'text-emerald'
      default:
        return 'text-muted'
    }
  }

  return (
    <section id="terminal" className="relative section-pad section-texture-deep">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-5 flex items-center justify-between border-b border-border/50 pb-3">
            <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.26em] text-muted">
              <span className="text-emerald">✦</span>
              <span>APPENDIX // INTERACTIVE MARGINALIA</span>
            </div>
            <div className="font-mono text-[9px] tracking-[0.22em] text-dim">APP. 01</div>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light italic tracking-tight text-soft-white">
            The Appendix
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted">
            An interactive terminal tucked into the back pages. Type <em>help</em> to see all available commands.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          ref={shellRef}
          onClick={() => inputRef.current?.focus()}
          className="glass relative mt-8 overflow-hidden rounded-sm border border-border"
        >
          <div className="flex items-center gap-2 border-b border-border-soft px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald/50" />
            <span className="ml-3 font-plex text-[10px] tracking-[0.2em] text-dim">
              hawi_os — zsh — 80×24
            </span>
          </div>

          <div className="scanline opacity-40" />

          <div className="h-[380px] overflow-y-auto px-4 py-4 font-mono text-[13px] leading-relaxed md:h-[420px]">
            {lines.map((line, i) => (
              <pre
                key={`${i}-${line.text.slice(0, 12)}`}
                className={`mb-1 whitespace-pre-wrap break-words ${colorFor(line.type)}`}
              >
                {line.text}
              </pre>
            ))}

            <div className="flex items-center gap-2">
              <span className="shrink-0 text-emerald">{PROMPT}</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => {
                  setInput(e.target.value)
                  setSuggestions([])
                }}
                onKeyDown={onKeyDown}
                className="min-w-0 flex-1 bg-transparent font-mono text-[13px] text-soft-white outline-none"
                spellCheck={false}
                autoCapitalize="off"
                autoComplete="off"
                aria-label="Terminal input"
              />
              <span className="cursor-blink text-emerald">▌</span>
            </div>

            {suggestions.length > 0 && (
              <div className="mt-2 text-[11px] text-dim">
                suggestions: {suggestions.join(' · ')}
              </div>
            )}
            <div ref={bottomRef} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
