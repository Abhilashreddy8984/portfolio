import { useScrollReveal, useScrollRevealGroup } from '../hooks/useScrollReveal'
import { Github, ExternalLink, AlertCircle } from 'lucide-react'
import { projects } from '../data/portfolio'

const statusMap = {
  complete:    { label: 'Complete',     color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20' },
  'in-progress': { label: 'In Progress', color: 'text-amber-400  bg-amber-400/10  border-amber-400/20'  },
}

function isPlaceholder(val) {
  return !val || val.startsWith('YOUR_') || val === null
}

export default function Projects() {
  const headingRef = useScrollReveal()
  const gridRef    = useScrollRevealGroup()

  return (
    <section id="projects" className="py-28">
      <div className="section-container">
        {/* Heading */}
        <div ref={headingRef} className="reveal mb-14">
          <p className="section-label">What I've built</p>
          <h2 className="section-title">Projects</h2>
          <div className="section-divider" />
          <p className="text-slate-400 text-sm max-w-xl">
            A collection of projects I've built while learning. Each one represents
            something I set out to understand by actually building it.
          </p>
        </div>

        {/* Projects grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={Math.min(i + 1, 4)}
            />
          ))}
        </div>

        {/* Add more hint */}
        <div className="mt-8 text-center">
          <p className="text-slate-600 text-xs font-mono">
            More projects coming soon · View all on{' '}
            <a
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:text-indigo-400 underline underline-offset-2"
            >
              GitHub ↗
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, delay }) {
  const { title, description, tech, github, demo, status } = project
  const { label, color } = statusMap[status] ?? statusMap.complete

  const githubIsPlaceholder = isPlaceholder(github)
  const demoIsPlaceholder   = isPlaceholder(demo)

  return (
    <article
      className={`reveal reveal-delay-${delay} glass-card flex flex-col h-full transition-all duration-300
        hover:-translate-y-1 hover:border-indigo-500/25 hover:shadow-xl hover:shadow-indigo-900/10`}
    >
      {/* Top bar accent */}
      <div className="h-0.5 rounded-t-2xl bg-gradient-to-r from-indigo-500/50 via-cyan-500/50 to-transparent" />

      <div className="flex flex-col flex-1 p-6">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-white font-semibold text-lg leading-snug">{title}</h3>
          <span
            className={`shrink-0 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${color}`}
          >
            {label}
          </span>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">
          {description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {tech.map((t) => (
            <span
              key={t}
              className={`tech-tag ${t.startsWith('YOUR_') ? 'opacity-50 italic' : ''}`}
            >
              {t.startsWith('YOUR_') ? '[ tech ]' : t}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2 mt-auto">
          {githubIsPlaceholder ? (
            <PlaceholderBtn icon={<Github size={14} />} label="GitHub (add URL)" />
          ) : (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs py-2 px-4"
            >
              <Github size={14} />
              GitHub
            </a>
          )}

          {!demoIsPlaceholder && demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-2 px-4"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

function PlaceholderBtn({ icon, label }) {
  return (
    <span
      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium
                 text-slate-600 border border-dashed border-slate-700 cursor-default select-none"
      title="Placeholder — replace URL in src/data/portfolio.js"
    >
      <AlertCircle size={12} className="text-slate-700" />
      {label}
    </span>
  )
}
