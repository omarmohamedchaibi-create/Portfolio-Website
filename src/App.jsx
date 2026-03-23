import { useEffect, useState } from 'react'

const projects = [
  {
    title: 'Personal Portfolio Website',
    description:
      'A modern personal website to showcase skills, projects, and contact information.',
  },
  {
    title: 'Business Landing Page',
    description:
      'Clean and conversion-focused landing page for small businesses.',
  },
  {
    title: 'Portfolio Redesign',
    description:
      'Improved UI/UX with better readability and mobile optimization.',
  },
]

const skills = [
  { name: 'UI Design', value: 92 },
  { name: 'Frontend Development', value: 88 },
  { name: 'Performance Optimization', value: 84 },
  { name: 'User Experience', value: 90 },
]

function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-10 text-center reveal">
      <h2 className="text-3xl font-semibold text-white">{title}</h2>
      <p className="mt-2 text-white/60">{subtitle}</p>
    </div>
  )
}

function SkillBar({ name, value }) {
  return (
    <div className="reveal">
      <div className="mb-2 flex justify-between text-sm">
        <span className="text-white/80">{name}</span>
        <span className="font-medium text-fuchsia-200">{value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="skill-fill h-full rounded-full bg-linear-to-r from-fuchsia-400 to-violet-300"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')

  const navLinks = [
    { href: '#about', label: 'About', id: 'about' },
    { href: '#work', label: 'Work', id: 'work' },
    { href: '#skills', label: 'Skills', id: 'skills' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ]

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal')
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.18 },
    )

    revealElements.forEach((el) => revealObserver.observe(el))

    const sections = document.querySelectorAll('main section[id]')
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -45% 0px', threshold: 0.01 },
    )

    sections.forEach((section) => sectionObserver.observe(section))

    return () => {
      revealObserver.disconnect()
      sectionObserver.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="floating-blob blob-1" />
      <div className="floating-blob blob-2" />
      <div className="floating-blob blob-3" />

      <header className="sticky top-0 z-30 border-b border-white/10 bg-zinc-950/70 backdrop-blur-xl">
        <div className="mx-auto max-w-5xl px-4 py-4">
          <div className="flex items-center justify-between">
            <a
              href="#home"
              className="inline-flex items-center gap-2 rounded-xl border border-fuchsia-300/30 bg-fuchsia-400/10 px-3 py-1.5 text-sm font-semibold tracking-wide text-fuchsia-100 transition-all duration-300 hover:-translate-y-0.5 hover:bg-fuchsia-400/20"
            >
               <span className="font-semibold text-white group-hover:text-fuchsia-300 transition">
    Your Name
  </span>
            </a>

            <div className="hidden items-center gap-3 md:flex">
              <nav className="flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 p-1 text-sm text-white/75">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`rounded-lg px-3 py-1.5 transition-all duration-300 ${
                      activeSection === link.id
                        ? 'bg-fuchsia-400/20 text-fuchsia-100'
                        : 'hover:bg-fuchsia-400/15 hover:text-fuchsia-100'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <a
                href="#contact"
                className="shine-btn rounded-lg bg-linear-to-r from-fuchsia-400 to-violet-300 px-4 py-2 text-sm font-semibold text-black transition-all duration-300 hover:opacity-90"
              >
                Let&apos;s Talk
              </a>
            </div>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-fuchsia-300/40 bg-fuchsia-400/10 text-fuchsia-100 transition-all duration-300 hover:bg-fuchsia-400/20 md:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className="text-lg leading-none">{menuOpen ? '✕' : '☰'}</span>
            </button>
          </div>

          <div
            className={`grid overflow-hidden transition-all duration-300 md:hidden ${
              menuOpen ? 'mt-3 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="min-h-0">
              <nav className="rounded-xl border border-fuchsia-300/20 bg-white/5 p-2 text-sm text-white/80">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-lg px-3 py-2 transition-all duration-300 hover:bg-fuchsia-400/15 hover:text-fuchsia-100"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4">
        <section id="home" className="py-24 text-center">
          <div className="reveal rounded-3xl border border-fuchsia-300/20 bg-white/5 p-8 shadow-[0_0_80px_rgba(168,85,247,0.12)] sm:p-10">
            <p className="mb-3 text-sm tracking-[0.12em] text-fuchsia-200/90 uppercase">
              Premium Portfolio
            </p>
            <h1 className="text-4xl leading-tight font-bold sm:text-5xl">
              I design and build <span className="text-fuchsia-300">modern websites</span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-white/70">
              Helping individuals and small businesses create clean, fast, and professional websites
              that make a strong first impression.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#work"
                className="shine-btn rounded-lg bg-linear-to-r from-fuchsia-400 to-violet-300 px-5 py-2 font-medium text-black transition-all duration-300 hover:opacity-90"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-fuchsia-300/40 px-5 py-2 text-fuchsia-200 transition-all duration-300 hover:bg-fuchsia-400/10"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-white/10 py-20">
          <SectionTitle title="About Me" subtitle="Simple, clean, and focused on results." />

          <p className="reveal mx-auto max-w-2xl text-center text-white/70">
            I create modern and responsive websites using React. My goal is to deliver clean design,
            smooth user experience, and fast performance for personal brands and small businesses.
          </p>
        </section>

        <section id="work" className="border-t border-white/10 py-20">
          <SectionTitle title="My Work" subtitle="Some examples of what I can build for you." />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="project-card reveal rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-fuchsia-300/40 hover:shadow-[0_20px_40px_-20px_rgba(168,85,247,0.6)]"
              >
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-white/60">{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="border-t border-white/10 py-20">
          <SectionTitle title="Skills" subtitle="What I focus on the most." />

          <div className="reveal rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="space-y-5">
              {skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-white/10 py-20 text-center">
          <SectionTitle title="Contact" subtitle="Let’s work together." />

          <p className="reveal mb-6 text-white/70">
            Interested in working together? Feel free to reach out.
          </p>

          <div className="reveal flex flex-wrap justify-center gap-4">
            <a
              href="mailto:your@email.com"
              className="shine-btn rounded-lg bg-linear-to-r from-fuchsia-400 to-violet-300 px-5 py-2 text-black transition-all duration-300 hover:opacity-90"
            >
              Email Me
            </a>

            <a
              href="https://wa.me/213XXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-fuchsia-300/40 px-5 py-2 text-fuchsia-200 transition-all duration-300 hover:bg-fuchsia-400/10"
            >
              WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-6 text-center text-white/50">
        © {new Date().getFullYear()} Web Market DZ — All rights reserved
      </footer>
    </div>
  )
}