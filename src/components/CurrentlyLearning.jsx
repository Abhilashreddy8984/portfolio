import { useScrollReveal, useScrollRevealGroup } from '../hooks/useScrollReveal'
import { currentlyLearning } from '../data/portfolio'

export default function CurrentlyLearning() {
  const headingRef = useScrollReveal()
  const gridRef    = useScrollRevealGroup()

  return (
    <section id="learning" className="py-28">
      <div className="section-container">
        {/* Heading */}
        <div ref={headingRef} className="reveal mb-14">
          <p className="section-label">Right now</p>
          <h2 className="section-title">What I'm Learning Now</h2>
          <div className="section-divider" />
          <p className="text-slate-400 text-sm max-w-xl">
            I'm actively working on these areas. This section reflects where my
            energy is going — not just what I already know.
          </p>
        </div>

        {/* Cards grid */}
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentlyLearning.map((item, i) => (
            <div
              key={item.topic}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)} relative glass-card-hover p-6 overflow-hidden`}
            >
              {/* Background glow dot */}
              <div
                className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-10 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #6366f1, transparent 70%)' }}
                aria-hidden="true"
              />

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-2xl mb-4 w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/15 flex items-center justify-center">
                  {item.icon}
                </div>

                {/* Topic */}
                <h3 className="text-white font-semibold text-sm mb-2">{item.topic}</h3>

                {/* Description */}
                <p className="text-slate-400 text-xs leading-relaxed">{item.description}</p>

                {/* Active indicator */}
                <div className="flex items-center gap-1.5 mt-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 text-xs font-medium">Active</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
