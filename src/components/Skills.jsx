import { useScrollReveal, useScrollRevealGroup } from '../hooks/useScrollReveal'
import { skills } from '../data/portfolio'

export default function Skills() {
  const headingRef = useScrollReveal()
  const gridRef    = useScrollRevealGroup()

  return (
    <section id="skills" className="py-28 bg-dark-800/40">
      <div className="section-container">
        {/* Heading */}
        <div ref={headingRef} className="reveal mb-14">
          <p className="section-label">What I work with</p>
          <h2 className="section-title">Skills</h2>
          <div className="section-divider" />
          <p className="text-slate-400 text-sm max-w-xl">
            A snapshot of technologies and concepts I've been actively learning and applying.
            No fake proficiency bars — just honest tags.
          </p>
        </div>

        {/* Skills grid */}
        <div
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skills.map((category, i) => (
            <div
              key={category.category}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)} glass-card-hover p-6`}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="text-xl w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/15 flex items-center justify-center"
                  aria-hidden="true"
                >
                  {category.icon}
                </span>
                <h3 className="text-white font-semibold text-sm">
                  {category.category}
                </h3>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span key={skill} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-slate-600 text-xs font-mono mt-10">
          Always learning · Always building
        </p>
      </div>
    </section>
  )
}
