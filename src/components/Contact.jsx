import { useScrollReveal } from '../hooks/useScrollReveal'
import { Mail, Send } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

function isPlaceholder(val) {
  return !val || val.includes('YOUR_')
}

export default function Contact() {
  const headingRef = useScrollReveal()
  const cardRef    = useScrollReveal()

  return (
    <section id="contact" className="py-28 bg-dark-800/40 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] opacity-[0.05] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #6366f1 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        {/* Heading */}
        <div ref={headingRef} className="reveal text-center mb-14">
          <p className="section-label">Say hello</p>
          <h2 className="section-title">Let's Build Something.</h2>
          <div className="section-divider mx-auto" />
          <p className="text-slate-400 text-base max-w-lg mx-auto leading-relaxed">
            I'm always interested in learning, building, collaborating on technical
            projects, and connecting with people who enjoy technology.
          </p>
        </div>

        {/* Card */}
        <div ref={cardRef} className="reveal max-w-xl mx-auto">
          <div className="glass-card p-8 sm:p-10 text-center">
            {/* Email button */}
            <a
              href={isPlaceholder(personalInfo.email) ? '#' : `mailto:${personalInfo.email}`}
              className={`btn-primary mx-auto mb-8 ${isPlaceholder(personalInfo.email) ? 'opacity-50 pointer-events-none' : ''}`}
              title={isPlaceholder(personalInfo.email) ? 'Replace YOUR_EMAIL in portfolio.js' : ''}
            >
              <Send size={16} />
              {isPlaceholder(personalInfo.email)
                ? 'your.email@example.com (add yours)'
                : personalInfo.email}
            </a>

            <p className="text-slate-600 text-xs mb-6">— or find me on —</p>

            {/* Social row */}
            <div className="flex items-center justify-center gap-4">
              <SocialLink
                href={personalInfo.github}
                label="GitHub"
                isPlaceholder={isPlaceholder(personalInfo.github)}
                icon={<GithubIcon />}
              />
              <SocialLink
                href={personalInfo.linkedin}
                label="LinkedIn"
                isPlaceholder={isPlaceholder(personalInfo.linkedin)}
                icon={<LinkedinIcon />}
              />
              <SocialLink
                href={isPlaceholder(personalInfo.email) ? '#' : `mailto:${personalInfo.email}`}
                label="Email"
                isPlaceholder={isPlaceholder(personalInfo.email)}
                icon={<Mail size={18} />}
              />
            </div>

            {/* Placeholder hint */}
            {(isPlaceholder(personalInfo.github) || isPlaceholder(personalInfo.linkedin) || isPlaceholder(personalInfo.email)) && (
              <p className="text-slate-700 text-xs font-mono mt-6">
                ⚠ Replace placeholder links in{' '}
                <code className="text-slate-600">src/data/portfolio.js</code>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialLink({ href, label, isPlaceholder: isph, icon }) {
  return (
    <a
      href={isph ? '#' : href}
      target={isph ? undefined : '_blank'}
      rel="noopener noreferrer"
      aria-label={label}
      title={isph ? `Replace in portfolio.js` : label}
      className={`flex flex-col items-center gap-2 group transition-all duration-200 ${
        isph ? 'opacity-40 pointer-events-none' : ''
      }`}
    >
      <span className="icon-btn text-slate-300 group-hover:text-white">
        {icon}
      </span>
      <span className="text-slate-500 text-xs group-hover:text-slate-300 transition-colors">
        {label}
      </span>
    </a>
  )
}

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
