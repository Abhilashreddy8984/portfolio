import { useScrollReveal } from '../hooks/useScrollReveal'
import { GraduationCap, MapPin, CalendarDays } from 'lucide-react'

export default function Education() {
  const headingRef = useScrollReveal()
  const cardRef    = useScrollReveal()

  return (
    <section id="education" className="py-28 bg-dark-800/40">
      <div className="section-container">
        {/* Heading */}
        <div ref={headingRef} className="reveal mb-14">
          <p className="section-label">Academic background</p>
          <h2 className="section-title">Education</h2>
          <div className="section-divider" />
        </div>

        {/* Education card */}
        <div ref={cardRef} className="reveal max-w-2xl">
          <div className="glass-card-hover p-8">
            {/* Top accent line */}
            <div className="h-0.5 rounded-t-2xl bg-gradient-to-r from-indigo-500 to-cyan-500 -mt-8 -mx-8 mb-8" />

            {/* Icon + college */}
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                <GraduationCap size={26} className="text-indigo-400" />
              </div>

              <div className="flex-1">
                <h3 className="text-white font-bold text-xl mb-1">
                  MLR Institute of Technology
                </h3>
                <p className="text-indigo-400 font-medium text-sm mb-4">
                  B.Tech — Computer Science Engineering (AI &amp; ML)
                </p>

                <div className="flex flex-wrap gap-4">
                  <span className="flex items-center gap-1.5 text-slate-400 text-sm">
                    <CalendarDays size={14} className="text-slate-500" />
                    2025 – Present
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-400 text-sm">
                    <MapPin size={14} className="text-slate-500" />
                    Hyderabad, Telangana
                  </span>
                </div>
              </div>
            </div>

            {/* Focus areas */}
            <div className="mt-7 pt-6 border-t border-white/5">
              <p className="text-slate-500 text-xs font-mono mb-3 uppercase tracking-widest">Focus Areas</p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Artificial Intelligence',
                  'Machine Learning',
                  'Cloud Computing',
                  'Data Structures & Algorithms',
                  'Software Engineering',
                  'Deep Learning',
                ].map((area) => (
                  <span key={area} className="tech-tag">{area}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
