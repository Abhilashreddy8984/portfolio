import { useScrollReveal } from '../hooks/useScrollReveal'
import { BookOpen, Cpu, Cloud, Wrench } from 'lucide-react'

const highlights = [
  {
    icon: BookOpen,
    label: 'Hands-on Learner',
    desc: 'I absorb best by building and experimenting — theory always gets applied in a real project.',
  },
  {
    icon: Cpu,
    label: 'AI & ML Focus',
    desc: 'Exploring machine learning, deep learning, and generative AI as part of my CSE specialisation.',
  },
  {
    icon: Cloud,
    label: 'Cloud Explorer',
    desc: 'Learned AWS deployment hands-on and hosted a technical session teaching peers the same concepts.',
  },
  {
    icon: Wrench,
    label: 'Builder Mindset',
    desc: 'From command-line tools to AI chatbots — I prefer shipping working software over slide decks.',
  },
]

export default function About() {
  const headingRef = useScrollReveal()
  const textRef    = useScrollReveal()
  const cardsRef   = useScrollReveal()

  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Subtle background accent */}
      <div
        className="absolute top-1/2 right-0 w-[500px] h-[500px] -translate-y-1/2 opacity-[0.04] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        {/* Heading */}
        <div ref={headingRef} className="reveal mb-12">
          <p className="section-label">Get to know me</p>
          <h2 className="section-title">About Me</h2>
          <div className="section-divider" />
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left — text */}
          <div ref={textRef} className="reveal space-y-5 text-slate-300 leading-relaxed text-[0.97rem]">
            <p>
              I'm a second-year B.Tech student specialising in{' '}
              <span className="text-white font-medium">
                Computer Science Engineering (AI &amp; ML)
              </span>{' '}
              at{' '}
              <span className="text-indigo-400 font-medium">
                MLR Institute of Technology
              </span>
              . My interest covers software engineering, artificial intelligence, machine learning,
              cloud technologies, and problem solving.
            </p>

            <p>
              I strongly prefer learning through implementation rather than only theory.
              Every concept I study, I try to apply in a working project — whether that's
              writing a Python tool, training a model, or deploying an application to the cloud.
            </p>

            <p>
              I've participated in technical events, hackathons, and college club activities.
              Most recently, I{' '}
              <span className="text-white font-medium">
                hosted an AWS Cloud Trek session
              </span>{' '}
              where I learned AWS deployment hands-on and then walked junior students through
              the same process in a beginner-friendly session. It was the experience that
              showed me how valuable it is to both understand something deeply and be
              able to communicate it clearly.
            </p>

            <p>
              Right now I'm sharpening my DSA skills, building side projects,
              and exploring generative AI and full-stack development in parallel.
            </p>

            {/* Education pill */}
            <div className="inline-flex items-center gap-3 px-4 py-3 glass-card mt-2">
              <div className="w-2 h-2 rounded-full bg-indigo-400" />
              <div>
                <p className="text-white text-sm font-medium">MLR Institute of Technology</p>
                <p className="text-slate-500 text-xs">B.Tech CSE (AI & ML) · 2025 – Present</p>
              </div>
            </div>
          </div>

          {/* Right — highlight cards */}
          <div ref={cardsRef} className="reveal grid sm:grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="glass-card-hover p-5">
                <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-3">
                  <Icon size={18} className="text-indigo-400" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1.5">{label}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
