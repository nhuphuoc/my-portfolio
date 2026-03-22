"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { translations } from "@/data/portfolio";
import { useLanguage } from "@/app/language-provider";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } }
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } }
};

export default function FreelanceClientPage() {
  const { lang, toggle } = useLanguage();
  const data = translations[lang];
  const { freelance, personalInfo, highlights, faqs, contactLinks } = data;

  const freelanceHighlights = highlights.filter((item) => item.value !== "Top 4th" && item.value !== "Top 4");
  const featuredProjects = data.projects.slice(0, 3);

  return (
    <main className="min-h-screen bg-[var(--color-cream)] text-[var(--color-ink)]">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-[var(--color-border)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(196,120,66,0.18),_transparent_24%),radial-gradient(circle_at_82%_18%,_rgba(27,52,80,0.18),_transparent_26%),linear-gradient(180deg,_rgba(255,255,255,0.84),_rgba(248,241,232,0.96))]" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12"
        >
          <motion.header
            variants={fadeUp}
            className="mb-16 flex flex-col gap-4 rounded-[1.75rem] border border-[var(--color-border)] bg-white/70 p-5 backdrop-blur md:flex-row md:items-center md:justify-between"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.26em]">PB Studio</p>
              <p className="mt-2 text-sm text-[var(--color-muted)]">{freelance.nav.foundedBy}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={toggle}
                className="hidden items-center rounded-full border border-[var(--color-border)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent-strong)] md:flex"
              >
                {lang === "en" ? "VI" : "EN"}
              </button>
              <Link href="/" className="button button-ghost">
                {freelance.nav.viewPortfolio}
              </Link>
              <a href={`mailto:${personalInfo.email}`} className="button">
                {freelance.nav.startProject}
              </a>
            </div>
          </motion.header>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <motion.div variants={fadeUp} className="space-y-8">
              <p className="section-label">PB Studio</p>
              <h1 className="max-w-4xl font-serif text-5xl leading-[0.92] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                {freelance.hero.tagline}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
                {freelance.hero.intro}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a href={`mailto:${personalInfo.email}`} className="button">
                  {freelance.hero.bookCta}
                </a>
                <Link href="#case-studies" className="button button-secondary">
                  {freelance.hero.selectedWorkCta}
                </Link>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="panel p-6 sm:p-8">
              <motion.div variants={stagger} className="grid gap-4 sm:grid-cols-2">
                {freelanceHighlights.map((item) => (
                  <motion.article
                    key={item.value}
                    variants={fadeUp}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-[1.35rem] border border-[var(--color-border)] bg-white p-4"
                  >
                    <p className="text-2xl font-semibold sm:text-3xl">{item.value}</p>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{item.label}</p>
                  </motion.article>
                ))}
              </motion.div>
              <motion.div variants={fadeUp} className="mt-5 rounded-[1.4rem] bg-[var(--color-surface)] p-5">
                <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">
                  {freelance.hero.idealClientsLabel}
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {freelance.hero.idealClientsText}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── What I Offer ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12"
      >
        <motion.div variants={fadeUp} className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="section-label">{freelance.sections.whatIOffer}</p>
            <h2 className="mt-3 font-serif text-4xl tracking-[-0.04em] sm:text-5xl">
              {freelance.sections.whatIOfferSub}
            </h2>
          </div>
        </motion.div>
        <div className="grid gap-6 lg:grid-cols-3">
          {freelance.serviceOffers.map((offer) => (
            <motion.article
              key={offer.title}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.22 }}
              className="panel p-6"
            >
              <h3 className="text-2xl font-semibold tracking-[-0.03em]">{offer.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{offer.summary}</p>
              <p className="mt-6 text-sm font-medium text-[var(--color-accent-strong)]">{offer.deliverables}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* ── Selected Work ── */}
      <motion.section
        id="case-studies"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
        className="border-y border-[var(--color-border)] bg-white/55"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          <motion.div variants={fadeUp} className="mb-10">
            <p className="section-label">{freelance.sections.selectedWork}</p>
            <h2 className="mt-3 font-serif text-4xl tracking-[-0.04em] sm:text-5xl">
              {freelance.sections.selectedWorkSub}
            </h2>
          </motion.div>
          <div className="grid gap-6">
            {featuredProjects.map((project) => (
              <motion.article
                key={project.name}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.22 }}
                className="grid gap-6 overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-white p-5 shadow-[0_24px_70px_rgba(18,26,33,0.07)] lg:grid-cols-[0.95fr_1.05fr] lg:p-7"
              >
                <div className="rounded-[1.6rem] p-5 text-white" style={{ background: project.visual }}>
                  <div className="flex h-full flex-col justify-between gap-6">
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span key={item} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.16em]">
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="rounded-[1.25rem] border border-white/15 bg-black/15 p-5 backdrop-blur-sm">
                      <p className="text-sm uppercase tracking-[0.18em] text-white/70">{project.category}</p>
                      <p className="mt-3 text-2xl font-semibold">{project.name}</p>
                    </div>
                  </div>
                </div>
                <div className="grid gap-5">
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">{freelance.sections.role}</p>
                    <p className="mt-2 text-base leading-7 text-[var(--color-muted)]">{project.role}</p>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">{freelance.sections.whatWasBuilt}</p>
                    <p className="mt-2 text-base leading-7 text-[var(--color-muted)]">{project.description}</p>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">{freelance.sections.whyItMatters}</p>
                    <p className="mt-2 text-base leading-7 text-[var(--color-muted)]">{project.result}</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link href={project.demo} className="button button-secondary">
                      {freelance.sections.viewLive}
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── Process & Engagement ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
        className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12"
      >
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div variants={fadeUp} className="panel p-7 sm:p-8">
            <p className="section-label">{freelance.sections.process}</p>
            <h2 className="mt-4 font-serif text-4xl tracking-[-0.04em] sm:text-5xl">
              {freelance.sections.processSub}
            </h2>
            <div className="mt-8 grid gap-4">
              {freelance.workProcess.map((item) => (
                <motion.article
                  key={item.step}
                  variants={fadeUp}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-[1.4rem] border border-[var(--color-border)] bg-white p-5"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">{item.step}</p>
                  <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{item.text}</p>
                </motion.article>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="panel p-7 sm:p-8">
            <p className="section-label">{freelance.sections.engagementModels}</p>
            <h2 className="mt-4 font-serif text-4xl tracking-[-0.04em] sm:text-5xl">
              {freelance.sections.engagementModelsSub}
            </h2>
            <div className="mt-8 grid gap-5">
              {freelance.engagementModels.map((model) => (
                <motion.article
                  key={model.name}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-[1.5rem] border border-[var(--color-border)] bg-white p-6"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-2xl font-semibold">{model.name}</h3>
                    <span className="rounded-full bg-[var(--color-surface)] px-4 py-2 text-sm font-medium text-[var(--color-accent-strong)]">
                      {model.time}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{model.details}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {model.includes.map((item) => (
                      <span key={item} className="rounded-full border border-[var(--color-border)] px-3 py-2 text-sm text-[var(--color-muted)]">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ── FAQ & CTA ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
        className="border-t border-[var(--color-border)] bg-white/65"
      >
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-20 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <motion.div variants={fadeUp} className="panel p-7 sm:p-8">
            <p className="section-label">{freelance.sections.faq}</p>
            <div className="mt-6 space-y-4">
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
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="panel p-7 sm:p-8">
            <p className="section-label">{freelance.sections.cta}</p>
            <h2 className="mt-4 font-serif text-4xl tracking-[-0.04em] sm:text-5xl">
              {freelance.sections.ctaHeading}
            </h2>
            <p className="mt-5 text-base leading-7 text-[var(--color-muted)]">
              {freelance.sections.ctaBody}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <motion.a whileHover={{ y: -3 }} href={`mailto:${personalInfo.email}`} className="button">
                {freelance.sections.chat}
              </motion.a>
              <motion.a whileHover={{ y: -3 }} href={`tel:${personalInfo.phoneRaw}`} className="button button-secondary">
                {freelance.sections.callMe}
              </motion.a>
            </div>
            <div className="mt-8 grid gap-4">
              {contactLinks.slice(0, 3).map((link) => (
                <motion.div key={link.label} whileHover={{ x: 4 }}>
                  <Link
                    href={link.href}
                    className="flex items-center justify-between rounded-[1.25rem] border border-[var(--color-border)] bg-white px-5 py-4 text-sm transition hover:border-[var(--color-accent)]"
                  >
                    <span>{link.label}</span>
                    <span className="font-medium">{link.value}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
