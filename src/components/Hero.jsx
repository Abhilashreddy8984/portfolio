import { useEffect, useRef } from 'react'
import { Mail, ArrowDown, ExternalLink } from 'lucide-react'
import { personalInfo } from '../data/portfolio'
import profilePhoto from '../assets/abhi.png'

export default function Hero() {
  const containerRef = useRef(null)

  // Staggered entrance — add visible class after mount
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const items = el.querySelectorAll('[data-hero]')
    items.forEach((item, i) => {
      setTimeout(() => item.classList.add('hero-visible'), 150 + i * 120)
    })
  }, [])

  const scrollToProjects = () =>
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })

  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  const scrollDown = () =>
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Background layers ───────────────────────────── */}
      <div className="absolute inset-0 bg-dark-900" aria-hidden="true" />

      {/* Radial glow — top left */}
      <div
        className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full opacity-[0.07] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #6366f1 0%, #3b82f6 40%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Radial glow — bottom right (behind the portrait area) */}
      <div
        className="absolute -bottom-60 -right-40 w-[700px] h-[700px] rounded-full opacity-[0.08] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #6366f1 0%, #3b82f6 40%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* ── Two-column content ───────────────────────────── */}
      <div
        className="section-container relative z-10 pt-24 pb-20 w-full"
        ref={containerRef}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

          {/* ── LEFT — text content ─────────────────────── */}
          <div className="flex-1 max-w-xl w-full text-center lg:text-left">

            {/* Status badge */}
            <div
              data-hero
              className="hero-item inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-xs font-medium font-mono">
                Open to internships &amp; collaborations
              </span>
            </div>

            {/* Main heading */}
            <h1
              data-hero
              className="hero-item text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-4"
            >
              Hi, I'm{' '}
              <span className="gradient-text-warm">Abhilash Reddy.</span>
            </h1>

            {/* Subtitle */}
            <p
              data-hero
              className="hero-item text-lg sm:text-xl text-slate-400 font-medium mb-3"
            >
              Computer Science Engineering (AI &amp; ML) Student
              <span className="text-indigo-500 mx-2">·</span>
              Builder
              <span className="text-indigo-500 mx-2">·</span>
              Cloud &amp; AI Enthusiast
            </p>

            {/* Bio */}
            <p
              data-hero
              className="hero-item text-slate-400 text-base sm:text-lg leading-relaxed mb-10"
            >
              I learn by building, experimenting, and sharing what I discover —
              from software projects and AI/ML experiments to cloud deployment and hackathons.
            </p>

            {/* CTA buttons */}
            <div data-hero className="hero-item flex flex-wrap gap-3 mb-12 justify-center lg:justify-start">
              <button onClick={scrollToProjects} className="btn-primary">
                View My Projects
                <ExternalLink size={15} />
              </button>
              <button onClick={scrollToContact} className="btn-secondary">
                Connect With Me
                <Mail size={15} />
              </button>
            </div>

            {/* Social icons */}
            <div
              data-hero
              className="hero-item flex items-center gap-3 justify-center lg:justify-start"
            >
              <span className="text-xs text-slate-600 font-mono mr-1">find me on</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
                aria-label="GitHub profile"
              >
                <GithubIcon />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="icon-btn"
                aria-label="Send email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* ── RIGHT — portrait ────────────────────────── */}
          <div
            data-hero
            className="hero-item flex-shrink-0 flex items-center justify-center
                       w-[300px] sm:w-[360px] lg:w-[420px] xl:w-[460px]"
          >
            <div className="portrait-wrapper">
              {/* Outer decorative ring — very subtle */}
              <div className="portrait-ring-outer" aria-hidden="true" />

              {/* Mid glow ring */}
              <div className="portrait-ring-mid" aria-hidden="true" />

              {/* Soft ambient glow behind the image */}
              <div className="portrait-glow" aria-hidden="true" />

              {/* The actual photo */}
              <div className="portrait-frame">
                <img
                  src={profilePhoto}
                  alt="Abhilash Reddy - Computer Science Engineering AI and ML student"
                  className="portrait-img"
                  draggable="false"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll hint */}
      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
                   text-slate-600 hover:text-slate-400 transition-colors group"
        aria-label="Scroll to About section"
      >
        <span className="text-xs font-mono tracking-widest">scroll</span>
        <ArrowDown
          size={16}
          className="animate-bounce group-hover:text-indigo-400 transition-colors"
        />
      </button>

      {/* ── Scoped styles ───────────────────────────────── */}
      <style>{`
        /* Staggered entrance animation */
        .hero-item {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .hero-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Portrait composition */
        .portrait-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Ambient glow — sits behind everything */
        .portrait-glow {
          position: absolute;
          inset: -10%;
          border-radius: 50%;
          background: radial-gradient(
            circle at 50% 60%,
            rgba(99, 102, 241, 0.28) 0%,
            rgba(59, 130, 246, 0.14) 40%,
            transparent 70%
          );
          filter: blur(28px);
          z-index: 0;
        }

        /* Outer decorative ring — very faint */
        .portrait-ring-outer {
          position: absolute;
          inset: -5%;
          border-radius: 50%;
          border: 1px solid rgba(99, 102, 241, 0.14);
          z-index: 1;
          animation: portrait-spin 18s linear infinite;
        }

        /* Mid ring — slightly more visible */
        .portrait-ring-mid {
          position: absolute;
          inset: 2%;
          border-radius: 50%;
          border: 1px solid rgba(139, 92, 246, 0.20);
          z-index: 1;
          animation: portrait-spin 12s linear infinite reverse;
        }

        /* The clipping frame that shows the photo */
        .portrait-frame {
          position: relative;
          z-index: 2;
          width: 88%;
          aspect-ratio: 1 / 1;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid rgba(99, 102, 241, 0.22);
          box-shadow:
            0 0 0 1px rgba(99, 102, 241, 0.08),
            0 8px 40px rgba(0, 0, 0, 0.55),
            0 0 60px rgba(99, 102, 241, 0.12);
        }

        /* The actual photo — fills the circle, object-fit ensures no distortion */
        .portrait-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 68% 25%;
          display: block;
          border-radius: 50%;
          user-select: none;
          -webkit-user-drag: none;
        }

        @keyframes portrait-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        /* Reduce motion */
        @media (prefers-reduced-motion: reduce) {
          .portrait-ring-outer,
          .portrait-ring-mid {
            animation: none;
          }
        }

        /* ── Responsive tweaks ─────────────────────────── */

        /* On mobile, portrait sits below text and is centered */
        @media (max-width: 1023px) {
          .portrait-frame {
            width: 82%;
          }
        }

        @media (max-width: 639px) {
          .portrait-frame {
            width: 76%;
          }
        }
      `}</style>
    </section>
  )
}

/* ── Inline SVG icons ───────────────────────────────────── */
function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
