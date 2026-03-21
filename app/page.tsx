import Link from "next/link";
import Image from "next/image";
import {
  contactLinks,
  experience,
  faqs,
  highlights,
  personalInfo,
  projects,
  services,
  skillGroups
} from "@/data/portfolio";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

function ScreenshotGallery({
  project
}: {
  project: (typeof projects)[number];
}) {
  const [primary, ...secondary] = project.screenshots;

  return (
    <div className="grid gap-4">
      <div
        className="relative min-h-[320px] overflow-hidden rounded-[1.6rem] border border-white/15 p-4 text-white"
        style={{ background: project.visual }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.08),rgba(0,0,0,0.26))]" />
        <div className="relative z-10 flex h-full flex-col justify-between gap-4">
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

          <div className="rounded-[1.4rem] border border-white/15 bg-[rgba(12,18,26,0.28)] p-4 backdrop-blur-md">
            <div className="rounded-[1.1rem] border border-white/15 bg-white/92 p-3 text-[var(--color-ink)] shadow-[0_24px_60px_rgba(10,14,20,0.24)]">
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
              <div
                className={`grid min-h-[180px] overflow-hidden rounded-[0.9rem] border border-[rgba(23,33,43,0.1)] ${
                  primary.device === "mobile"
                    ? "mx-auto max-w-[200px] rounded-[1.5rem]"
                    : ""
                }`}
              >
                <div className="flex items-center justify-center bg-[linear-gradient(145deg,rgba(255,255,255,0.96),rgba(239,226,212,0.92))] p-6 text-center">
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

          <div className="grid max-w-sm gap-3 rounded-[1.3rem] border border-white/15 bg-black/15 p-5 backdrop-blur-sm">
            <p className="text-sm uppercase tracking-[0.18em] text-white/70">{project.role}</p>
            <p className="text-2xl font-semibold leading-tight">{project.result}</p>
          </div>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {secondary.map((shot) => (
          <div
            key={shot.title}
            className="rounded-[1.1rem] border border-[var(--color-border)] bg-[rgba(255,255,255,0.78)] p-3 shadow-[0_18px_40px_rgba(18,26,33,0.08)]"
          >
            <div
              className={`flex min-h-[124px] items-center justify-center rounded-[0.9rem] border border-dashed border-[rgba(23,33,43,0.16)] bg-[linear-gradient(145deg,rgba(247,239,228,0.75),rgba(255,255,255,0.92))] p-4 text-center ${
                shot.device === "mobile" ? "mx-auto max-w-[130px] rounded-[1.35rem]" : ""
              }`}
            >
              <span className="text-sm font-medium text-[var(--color-muted)]">{shot.title}</span>
            </div>
            <div className="mt-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">
                {shot.device}
              </p>
              <p className="mt-2 text-xs leading-5 text-[var(--color-muted)]">{shot.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-cream)] text-[var(--color-ink)]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(196,120,66,0.22),_transparent_28%),radial-gradient(circle_at_85%_20%,_rgba(27,52,80,0.2),_transparent_24%),linear-gradient(180deg,_rgba(255,255,255,0.76),_rgba(248,241,232,0.95))]" />
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(27,52,80,0.5),transparent)]" />
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-6 md:px-10 lg:px-12">
          <header className="mb-16 flex items-center justify-between gap-6 rounded-full border border-[var(--color-border)] bg-white/70 px-5 py-3 backdrop-blur">
            <Link href="/" className="text-sm font-semibold uppercase tracking-[0.28em]">
              {personalInfo.name}
            </Link>
            <nav className="hidden items-center gap-6 text-sm text-[var(--color-muted)] md:flex">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-[var(--color-ink)]">
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link href="#contact" className="button button-secondary hidden md:inline-flex">
              Let&apos;s talk
            </Link>
          </header>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-[var(--color-border)] bg-white/65 px-4 py-2 text-sm text-[var(--color-muted)] backdrop-blur">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_18px_rgba(196,120,66,0.85)]" />
                Available for freelance collaborations
              </div>
              <div className="space-y-6">
                <p className="section-label">Portfolio 2026</p>
                <h1 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
                  {personalInfo.tagline}
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl">
                  {personalInfo.intro}
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="#projects" className="button">
                  Explore projects
                </Link>
                <Link href={personalInfo.cvHref} className="button button-ghost">
                  Download CV
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {highlights.map((item) => (
                  <article key={item.label} className="rounded-[1.75rem] border border-[var(--color-border)] bg-white/80 p-5 shadow-[0_20px_60px_rgba(18,26,33,0.08)]">
                    <p className="text-3xl font-semibold">{item.value}</p>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{item.label}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-5 top-10 hidden h-24 w-24 rounded-full border border-[var(--color-border)] bg-white/70 lg:block" />
              <div className="panel relative overflow-hidden p-7 sm:p-8">
                <div className="grid gap-8">
                  <div className="overflow-hidden rounded-[1.7rem] border border-[var(--color-border)] bg-white">
                    <div className="relative aspect-[4/5] overflow-hidden bg-[linear-gradient(145deg,#eaf2fb_0%,#d2e6fb_28%,#f7efe4_100%)]">
                      <Image
                        src="/profile-placeholder.svg"
                        alt="Portrait placeholder for Phuoc Bui"
                        fill
                        priority
                        className="object-cover"
                      />
                      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-[linear-gradient(180deg,transparent,rgba(23,33,43,0.78))] p-5 text-white">
                        <div>
                          <p className="text-xs uppercase tracking-[0.24em] text-white/65">Portrait-ready hero</p>
                          <p className="mt-2 text-lg font-semibold">Best fit: photo 3 for the cleanest personal-brand presentation</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-muted)]">
                        Based in
                      </p>
                      <p className="mt-2 text-xl font-semibold">{personalInfo.location}</p>
                    </div>
                    <div className="rounded-full border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-muted)]">
                      Since 2020
                    </div>
                  </div>
                  <div className="rounded-[1.5rem] bg-[var(--color-surface)] p-6">
                    <p className="text-sm uppercase tracking-[0.22em] text-[var(--color-muted)]">
                      Current focus
                    </p>
                    <p className="mt-4 text-2xl font-semibold leading-tight">
                      Building scalable backend systems and modern web products with performance, usability, and business impact in mind.
                    </p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {contactLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="group rounded-[1.25rem] border border-[var(--color-border)] bg-white/80 p-4 transition hover:-translate-y-1 hover:border-[var(--color-accent)]"
                      >
                        <p className="text-sm text-[var(--color-muted)]">{link.label}</p>
                        <p className="mt-2 font-medium group-hover:text-[var(--color-accent-strong)]">
                          {link.value}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <p className="section-label">About</p>
            <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] sm:text-5xl">
              Building digital experiences that feel editorial, fast, and unmistakably modern.
            </h2>
          </div>
          <div className="grid gap-6">
            <div className="panel p-7">
              <p className="text-lg leading-8 text-[var(--color-muted)]">
                {personalInfo.about}
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {experience.map((item) => (
                <article key={item.title} className="rounded-[1.5rem] border border-[var(--color-border)] bg-white p-6">
                  <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    {item.period}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm font-medium text-[var(--color-accent-strong)]">{item.company}</p>
                  <p className="mt-4 text-sm leading-6 text-[var(--color-muted)]">{item.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-[var(--color-border)] bg-white/60">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-label">Skills & Services</p>
              <h2 className="mt-3 font-serif text-4xl tracking-[-0.04em] sm:text-5xl">
                Strategy-minded execution from concept to launch.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-[var(--color-muted)]">
              A balanced mix of interface craft, technical depth, and product thinking for founders, agencies, and growing teams.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="grid gap-5">
              {services.map((service) => (
                <article key={service.title} className="panel p-6">
                  <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    {service.index}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{service.description}</p>
                </article>
              ))}
            </div>
            <div className="panel p-6 sm:p-8">
              <div className="grid gap-6 md:grid-cols-2">
                {skillGroups.map((group) => (
                  <div key={group.title} className="rounded-[1.5rem] bg-white p-6">
                    <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      {group.title}
                    </p>
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
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="section-label">Featured Projects</p>
            <h2 className="mt-3 font-serif text-4xl tracking-[-0.04em] sm:text-5xl">
              Selected work with strong visual systems and measurable outcomes.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-[var(--color-muted)]">
            Each case study is structured to communicate taste, problem-solving, and the ability to turn business goals into polished digital experiences.
          </p>
        </div>
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <article
              key={project.name}
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
                <div className="flex flex-wrap gap-3">
                  <Link href={project.demo} className="button">
                    Live demo
                  </Link>
                  <Link href={project.github} className="button button-ghost">
                    Source code
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="panel p-7 sm:p-8">
            <p className="section-label">FAQ</p>
            <div className="mt-6 space-y-4">
              {faqs.map((faq) => (
                <article key={faq.question} className="rounded-[1.35rem] border border-[var(--color-border)] bg-white px-5 py-4">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>

          <section id="contact" className="panel p-7 sm:p-8">
            <p className="section-label">Contact</p>
            <h2 className="mt-4 font-serif text-4xl tracking-[-0.04em] sm:text-5xl">
              Let&apos;s make something that feels premium from the first scroll.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--color-muted)]">
              I&apos;m open to freelance product websites, landing pages, portfolio revamps, and design-forward frontend collaborations.
            </p>
            <div className="mt-8 grid gap-4">
              <a href={`mailto:${personalInfo.email}`} className="button w-full justify-center sm:w-fit">
                {personalInfo.email}
              </a>
              <a href={`tel:${personalInfo.phoneRaw}`} className="text-sm text-[var(--color-muted)]">
                {personalInfo.phone}
              </a>
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
          </section>
        </div>
      </section>

      <footer className="border-t border-[var(--color-border)] bg-white/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-[var(--color-muted)] md:flex-row md:items-center md:justify-between md:px-10 lg:px-12">
          <p>{personalInfo.name} © 2026. Built with Next.js, TypeScript, and Tailwind CSS.</p>
          <div className="flex flex-wrap gap-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
