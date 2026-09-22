import { useScrollReveal, useScrollRevealGroup } from '../hooks/useScrollReveal'
import { ExternalLink, AlertCircle, CalendarDays, Users } from 'lucide-react'
import { hackathons } from '../data/portfolio'

function isPlaceholder(val) {
  return !val || String(val).startsWith('YOUR_')
}

export default function Hackathons() {
  const headingRef = useScrollReveal()
  const gridRef    = useScrollRevealGroup()

  return (
    <section id="hackathons" className="py-28">
      <div className="section-container">
        {/* Heading */}
        <div ref={headingRef} className="reveal mb-14">
          <p className="section-label">Competing & Collaborating</p>
          <h2 className="section-title">Hackathons &amp; Technical Activities</h2>
          <div className="section-divider" />
          <p className="text-slate-400 text-sm max-w-xl">
            Events I've taken part in, problems I've tackled under time pressure,
            and communities I've engaged with.
          </p>
        </div>

        {/* Cards */}
        <div ref={gridRef} className="grid md:grid-cols-2 gap-5">
          {hackathons.map((h, i) => (
            <HackathonCard
              key={h.id}
              item={h}
              delay={Math.min(i + 1, 4)}
            />
          ))}

          {/* Add more placeholder */}
          <div className="reveal glass-card border-dashed p-6 flex flex-col items-center justify-center text-center min-h-[160px]"
            style={{ borderStyle: 'dashed', borderColor: 'rgba(99,102,241,0.15)' }}>
            <p className="text-slate-600 text-sm font-mono">
              + Add more hackathons in{' '}
              <code className="text-slate-500">src/data/portfolio.js</code>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function HackathonCard({ item, delay }) {
  const { name, year, role, problem, tech, outcome, link } = item

  const hasPlaceholders =
    isPlaceholder(year) || isPlaceholder(role) || isPlaceholder(outcome)

  return (
    <article
      className={`reveal reveal-delay-${delay} glass-card-hover p-6 flex flex-col gap-4`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-white font-semibold text-base leading-snug">{name}</h3>
          {!isPlaceholder(year) && (
            <span className="flex items-center gap-1.5 text-slate-500 text-xs mt-1">
              <CalendarDays size={11} />
              {year}
            </span>
          )}
        </div>

        {link && !isPlaceholder(link) ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn shrink-0"
            aria-label={`View ${name}`}
          >
            <ExternalLink size={14} />
          </a>
        ) : null}
      </div>

      {/* Role */}
      {!isPlaceholder(role) && (
        <div className="flex items-center gap-2 text-indigo-400 text-sm">
          <Users size={13} />
          {role}
        </div>
      )}

      {/* Problem */}
      {!isPlaceholder(problem) && (
        <p className="text-slate-400 text-sm leading-relaxed">{problem}</p>
      )}

      {/* Tech */}
      {tech && tech.length > 0 && !isPlaceholder(tech[0]) && (
        <div className="flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
      )}

      {/* Outcome */}
      {!isPlaceholder(outcome) ? (
        <p className="text-emerald-400 text-xs font-medium">→ {outcome}</p>
      ) : (
        <div className="flex items-center gap-1.5 text-slate-700 text-xs">
          <AlertCircle size={12} />
          <span>Fill in details in <code className="text-slate-600">portfolio.js</code></span>
        </div>
      )}
    </article>
  )
}
