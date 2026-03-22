"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "./language-provider";
import { translations } from "@/data/portfolio";

// ── Animation variants ──────────────────────────────────────────────────────

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } }
};


const stagger = (delay = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay } }
});

// ── Contact icons ────────────────────────────────────────────────────────────

const contactIcons: Record<string, React.ReactNode> = {
  GitHub: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  ),
  Email: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 7 10-7" />
    </svg>
  )
};

// ── ScreenshotGallery ────────────────────────────────────────────────────────

type Project = typeof translations.en.projects[number];

function ScreenshotGallery({ project }: { project: Project }) {
  const [primary] = project.screenshots;

  return (
    <div className="grid gap-4">
      <div
        className="relative min-h-[320px] overflow-hidden rounded-[1.6rem] border border-white/15 p-4 text-white"
        style={{ background: project.visual }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.08),rgba(0,0,0,0.26))]" />
        <div className="relative z-10 flex h-full flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.16em]"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex-1 rounded-[1.4rem] border border-white/15 bg-[rgba(12,18,26,0.28)] p-4 backdrop-blur-md">
            <div className="flex h-full flex-col rounded-[1.1rem] border border-white/15 bg-white/92 p-3 text-[var(--color-ink)] shadow-[0_24px_60px_rgba(10,14,20,0.24)]">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff6f61]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f4bf4f]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#57c161]" />
                </div>
                <span className="rounded-full bg-[var(--color-surface)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">
                  {primary.device}
                </span>
              </div>
              <div className="flex flex-1 items-center justify-center overflow-hidden rounded-[0.9rem] border border-[rgba(23,33,43,0.1)] bg-[linear-gradient(145deg,rgba(255,255,255,0.96),rgba(239,226,212,0.92))] p-6 text-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
                    Screenshot Slot
                  </p>
                  <h4 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">{primary.title}</h4>
                  <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[var(--color-muted)]">
                    {primary.summary}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const { lang, toggle } = useLanguage();
  const t = translations[lang];
  const { personalInfo, highlights, contactLinks, experience, services, skillGroups, projects, faqs, ui } = t;

  return (
    <main className="min-h-screen bg-[var(--color-cream)] text-[var(--color-ink)]">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(196,120,66,0.22),_transparent_28%),radial-gradient(circle_at_85%_20%,_rgba(27,52,80,0.2),_transparent_24%),linear-gradient(180deg,_rgba(255,255,255,0.76),_rgba(248,241,232,0.95))]" />
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(27,52,80,0.5),transparent)]" />
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-6 md:px-10 lg:px-12">

          {/* Navbar */}
          <header className="mb-16 flex items-center justify-between gap-6 rounded-full border border-[var(--color-border)] bg-white/70 px-5 py-3 backdrop-blur">
            <Link href="/" className="text-sm font-semibold uppercase tracking-[0.28em]">
              {personalInfo.name}
            </Link>
            <nav className="hidden items-center gap-6 text-sm text-[var(--color-muted)] md:flex">
              {ui.nav.items.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-[var(--color-ink)]">
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="hidden items-center gap-3 md:flex">
              <button
                onClick={toggle}
                className="hidden items-center gap-1.5 rounded-full border border-[var(--color-border)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent-strong)] md:flex"
              >
                {lang === "en" ? "VI" : "EN"}
              </button>
              <Link href="#contact" className="button button-secondary">
                {ui.nav.cta}
              </Link>
            </div>
          </header>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">

            {/* Left — text */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-[var(--color-border)] bg-white/65 px-4 py-2 text-sm text-[var(--color-muted)] backdrop-blur">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_18px_rgba(196,120,66,0.85)]" />
                {ui.hero.badge}
              </div>

              <div className="space-y-6">
                <p className="section-label">Portfolio 2026</p>
                <h1 className={`font-serif text-4xl tracking-[-0.04em] sm:text-5xl lg:text-7xl ${lang === "vi" ? "leading-[1.15]" : "leading-[0.95]"}`}>
                  {personalInfo.tagline}
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl">
                  {personalInfo.intro}
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="#projects" className="button">{ui.nav.exploreCta}</Link>
                <Link href={personalInfo.cvHref} className="button button-ghost">{ui.nav.downloadCv}</Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {highlights.map((item) => (
                  <article
                    key={item.label}
                    className="rounded-[1.75rem] border border-[var(--color-border)] bg-white/80 p-5 shadow-[0_20px_60px_rgba(18,26,33,0.08)]"
                  >
                    <p className="text-3xl font-semibold">{item.value}</p>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{item.label}</p>
                  </article>
                ))}
              </div>
            </div>

            {/* Right — profile card */}
            <div className="relative">
              <div className="absolute -left-5 top-10 hidden h-24 w-24 rounded-full border border-[var(--color-border)] bg-white/70 lg:block" />
              <div className="panel relative overflow-hidden p-7 sm:p-8">
                <div className="grid gap-8">
                  <div className="overflow-hidden rounded-[1.7rem] border border-[var(--color-border)] bg-white">
                    <div className="relative aspect-[4/5] overflow-hidden bg-[linear-gradient(145deg,#eaf2fb_0%,#d2e6fb_28%,#f7efe4_100%)]">
                      <Image
                        src="/my-face.jpg"
                        alt="Portrait of Phuoc Bui"
                        fill
                        priority
                        className="object-cover"
                      />
                      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-[linear-gradient(180deg,transparent,rgba(23,33,43,0.78))] p-5 text-white">
                        <div>
                          <p className="text-xs uppercase tracking-[0.24em] text-white/65">Software Engineer · NAB</p>
                          <p className="mt-2 text-lg font-semibold">Welcome to Eric&apos;s portfolio.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-muted)]">{ui.hero.basedIn}</p>
                      <p className="mt-2 text-xl font-semibold">{personalInfo.location}</p>
                    </div>
                    <div className="rounded-full border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-muted)]">
                      {ui.hero.since}
                    </div>
                  </div>
                  <div className="rounded-[1.5rem] bg-[var(--color-surface)] p-6">
                    <p className="text-sm uppercase tracking-[0.22em] text-[var(--color-muted)]">{ui.hero.currentFocusLabel}</p>
                    <p className="mt-4 text-2xl font-semibold leading-tight">{ui.hero.currentFocusText}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {contactLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="group flex items-center gap-2.5 rounded-2xl border border-[var(--color-border)] bg-white/80 px-4 py-3 text-sm font-medium transition hover:border-[var(--color-accent)] hover:bg-[var(--color-surface)] hover:text-[var(--color-accent-strong)]"
                      >
                        <span className="text-[var(--color-accent)] transition group-hover:text-[var(--color-accent-strong)]">
                          {contactIcons[link.label]}
                        </span>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <motion.section
        id="about"
        className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <p className="section-label">{ui.about.label}</p>
            <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] sm:text-5xl">
              {ui.about.heading}
            </h2>
          </div>
          <div className="grid gap-6">
            <div className="panel p-7">
              <p className="text-lg leading-8 text-[var(--color-muted)]">{personalInfo.about}</p>
            </div>
            <motion.div
              className="grid gap-6 md:grid-cols-2"
              variants={stagger(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {experience.map((item) => (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  className="rounded-[1.5rem] border border-[var(--color-border)] bg-white p-6"
                >
                  <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-muted)]">{item.period}</p>
                  <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm font-medium text-[var(--color-accent-strong)]">{item.company}</p>
                  <p className="mt-4 text-sm leading-6 text-[var(--color-muted)]">{item.summary}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ── Services ── */}
      <section id="services" className="border-y border-[var(--color-border)] bg-white/60">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          <motion.div
            className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <p className="section-label">{ui.services.label}</p>
              <h2 className="mt-3 font-serif text-4xl tracking-[-0.04em] sm:text-5xl">{ui.services.heading}</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-[var(--color-muted)]">{ui.services.subheading}</p>
          </motion.div>
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <motion.div
              className="grid gap-5"
              variants={stagger(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {services.map((service) => (
                <motion.article key={service.title} variants={fadeUp} className="panel p-6">
                  <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-muted)]">{service.index}</p>
                  <h3 className="mt-4 text-2xl font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{service.description}</p>
                </motion.article>
              ))}
            </motion.div>
            <motion.div
              className="panel p-6 sm:p-8"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="grid gap-6 md:grid-cols-2">
                {skillGroups.map((group) => (
                  <div key={group.title} className="rounded-[1.5rem] bg-white p-6">
                    <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-muted)]">{group.title}</p>
                    <ul className="mt-5 space-y-3">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-sm sm:text-base">
                          <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <motion.div
          className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div>
            <p className="section-label">{ui.projects.label}</p>
            <h2 className="mt-3 font-serif text-4xl tracking-[-0.04em] sm:text-5xl">{ui.projects.heading}</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-[var(--color-muted)]">{ui.projects.subheading}</p>
        </motion.div>
        <motion.div
          className="grid gap-6"
          variants={stagger(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              variants={fadeUp}
              className={`grid gap-6 overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-white p-5 shadow-[0_30px_80px_rgba(18,26,33,0.07)] lg:grid-cols-[1.05fr_0.95fr] lg:p-7 ${
                index % 2 === 1 ? "lg:grid-cols-[0.95fr_1.05fr]" : ""
              }`}
            >
              <ScreenshotGallery project={project} />
              <div className="flex flex-col justify-between gap-6 p-2">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-muted)]">{project.category}</p>
                  <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">{project.name}</h3>
                  <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">{project.description}</p>
                </div>
                {project.screenshots.length > 1 && (
                  <div className="grid grid-cols-2 gap-2">
                    {project.screenshots.slice(1).map((shot) => (
                      <div
                        key={shot.title}
                        className="rounded-[1.1rem] border border-[var(--color-border)] bg-[rgba(255,255,255,0.78)] p-3 shadow-[0_18px_40px_rgba(18,26,33,0.08)]"
                      >
                        <div className="flex min-h-[72px] items-center justify-center rounded-[0.8rem] border border-dashed border-[rgba(23,33,43,0.16)] bg-[linear-gradient(145deg,rgba(247,239,228,0.75),rgba(255,255,255,0.92))] p-3 text-center">
                          <span className="text-xs font-medium text-[var(--color-muted)]">{shot.title}</span>
                        </div>
                        <div className="mt-2">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-strong)]">{shot.device}</p>
                          <p className="mt-1 text-[11px] leading-5 text-[var(--color-muted)]">{shot.summary}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <div className="flex flex-wrap gap-3">
                  <Link href={project.demo} className="button">{ui.nav.liveDemo}</Link>
                  <Link href={project.github} className="button button-ghost">{ui.nav.sourceCode}</Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* ── FAQ + Contact ── */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            className="panel p-7 sm:p-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="section-label">FAQ</p>
            <motion.div
              className="mt-6 space-y-4"
              variants={stagger(0.08)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
            >
              {faqs.map((faq) => (
                <motion.article
                  key={faq.question}
                  variants={fadeUp}
                  className="rounded-[1.35rem] border border-[var(--color-border)] bg-white px-5 py-4"
                >
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{faq.answer}</p>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>

          <motion.section
            id="contact"
            className="panel p-7 sm:p-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="section-label">{ui.contact.label}</p>
            <h2 className="mt-4 font-serif text-4xl tracking-[-0.04em] sm:text-5xl">{ui.contact.heading}</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--color-muted)]">{ui.contact.subheading}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${personalInfo.email}`} className="button">{personalInfo.email}</a>
              <a href={`tel:${personalInfo.phoneRaw}`} className="button button-ghost">{ui.nav.callMe}</a>
            </div>
            <div className="mt-10 grid gap-4">
              {contactLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between rounded-[1.25rem] border border-[var(--color-border)] bg-white px-5 py-4 text-sm transition hover:border-[var(--color-accent)] hover:bg-[var(--color-surface)]"
                >
                  <span>{link.label}</span>
                  <span className="font-medium">{link.value}</span>
                </Link>
              ))}
            </div>
          </motion.section>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-[var(--color-border)] bg-white/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-[var(--color-muted)] md:flex-row md:items-center md:justify-between md:px-10 lg:px-12">
          <p>{personalInfo.name} {ui.footer}</p>
          <div className="flex flex-wrap gap-4">
            {ui.nav.items.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
