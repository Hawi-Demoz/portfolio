/** Hand-drawn wobbly horizontal divider matching the book ink style */
export function HandDrawnDivider({
  className = '',
  color = 'currentColor',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg
      viewBox="0 0 400 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full max-w-md h-auto overflow-visible ${className}`}
      aria-hidden="true"
    >
      <path
        d="M2 6.5C45 5.2 92 7.8 140 6.2C195 4.5 252 7.5 310 5.8C345 4.8 375 6.4 398 6"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeDasharray="0"
        opacity="0.5"
      />
    </svg>
  )
}

/** Playful hand-drawn curl underline */
export function CurlyUnderline({
  className = '',
  color = '#B4573D',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg
      viewBox="0 0 120 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`overflow-visible ${className}`}
      aria-hidden="true"
    >
      <path
        d="M3 8C24 4.5 45 13 68 8.5C85 5 102 11.5 117 7.5"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        opacity="0.75"
      />
    </svg>
  )
}

/** Delicate four-pointed editorial book star mark */
export function StarMark({
  className = '',
  size = 14,
  color = '#B4573D',
}: {
  className?: string
  size?: number
  color?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
      aria-hidden="true"
    >
      <path d="M12 0C12.5 6.5 17.5 11.5 24 12C17.5 12.5 12.5 17.5 12 24C11.5 17.5 6.5 12.5 0 12C6.5 11.5 11.5 6.5 12 0Z" />
    </svg>
  )
}

/** Corner frame bracket for book plates and archival cards */
export function PlateCorners() {
  return (
    <>
      <span className="absolute -top-1 -left-1 h-2.5 w-2.5 border-t border-l border-emerald/50 rounded-tl-sm pointer-events-none" />
      <span className="absolute -top-1 -right-1 h-2.5 w-2.5 border-t border-r border-emerald/50 rounded-tr-sm pointer-events-none" />
      <span className="absolute -bottom-1 -left-1 h-2.5 w-2.5 border-b border-l border-emerald/50 rounded-bl-sm pointer-events-none" />
      <span className="absolute -bottom-1 -right-1 h-2.5 w-2.5 border-b border-r border-emerald/50 rounded-br-sm pointer-events-none" />
    </>
  )
}

/** Standardized editorial chapter heading badge */
export function ChapterHeader({
  chapter,
  title,
  page,
  subtitle,
}: {
  chapter: string
  title: string
  page?: string
  subtitle?: string
}) {
  return (
    <div className="mb-6">
      <div className="flex flex-wrap items-center gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-emerald font-semibold">
          CHAPTER {chapter}
        </span>
        <span className="text-dim/60 font-mono text-[9px]">/</span>
        <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted">
          {title}
        </span>
        {page && (
          <>
            <span className="ml-auto hidden sm:inline-block font-mono text-[9px] tracking-[0.2em] text-dim/70">
              [ {page} ]
            </span>
          </>
        )}
      </div>
      {subtitle && (
        <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-muted">
          {subtitle}
        </p>
      )}
    </div>
  )
}
