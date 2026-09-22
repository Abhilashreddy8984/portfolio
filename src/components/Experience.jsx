import { useScrollReveal } from '../hooks/useScrollReveal'
import { CalendarDays, Award, CheckCircle2 } from 'lucide-react'
import { experiences } from '../data/portfolio'

export default function Experience() {
  const headingRef = useScrollReveal()

  return (
    <section id="experience" className="py-28 bg-dark-800/40">
      <div className="section-container">
        {/* Heading */}
        <div ref={headingRef} className="reveal mb-14">
          <p className="section-label">What I've done</p>
          <h2 className="section-title">Experience &amp; Leadership</h2>
          <div className="section-divider" />
          <p className="text-slate-400 text-sm max-w-xl">
            Events, sessions, and leadership roles that shaped my learning beyond the classroom.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="hidden md:block absolute left-5 top-3 bottom-3 w-px bg-gradient-to-b from-indigo-600/50 via-indigo-600/20 to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <TimelineItem key={exp.id} exp={exp} index={i} />
            ))}

            {/* Add more placeholder */}
            <div className="reveal md:pl-20">
              <div
                className="glass-card border-dashed border-slate-800 p-6 text-center"
                style={{ borderStyle: 'dashed' }}
              >
                <p className="text-slate-600 text-sm font-mono">
                  More experiences to be added — edit{' '}
                  <code className="text-slate-500">src/data/portfolio.js</code>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ exp, index }) {
  const itemRef = useScrollReveal()

  return (
    <div ref={itemRef} className="reveal relative md:pl-20">
      {/* Timeline dot */}
      <div
        className="hidden md:flex absolute left-0 top-3 w-10 h-10 rounded-full items-center justify-center
                   bg-dark-900 border-2 border-indigo-500/40 z-10"
        aria-hidden="true"
      >
        <div className="w-3 h-3 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500" />
      </div>

      {/* Card */}
      <div className="glass-card-hover p-7">
        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="flex items-center gap-1.5 text-indigo-400 text-xs font-mono">
            <CalendarDays size={12} />
            {exp.period}
          </span>
          {exp.certificate && (
            <span className="flex items-center gap-1.5 text-amber-400 text-xs font-medium border border-amber-400/20 bg-amber-400/5 px-2 py-0.5 rounded-full">
              <Award size={11} />
              Certificate of Appreciation
            </span>
          )}
        </div>

        <h3 className="text-white font-bold text-lg mb-0.5">{exp.role}</h3>
        <p className="text-indigo-400 text-sm font-medium mb-4">{exp.organization}</p>

        <p className="text-slate-400 text-sm leading-relaxed mb-5">
          {exp.description}
        </p>

        {/* Highlights */}
        <ul className="grid sm:grid-cols-2 gap-2" role="list">
          {exp.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-slate-300 text-sm">
              <CheckCircle2 size={14} className="text-emerald-400 mt-0.5 shrink-0" />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
