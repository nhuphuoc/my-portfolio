"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { translations } from "@/data/portfolio";

const data = translations.en;

const serviceOffers = [
  {
    title: "Landing Pages That Convert",
    summary:
      "Fast, SEO-friendly pages for local businesses, personal brands, and campaigns that need clear messaging and strong call-to-action structure.",
    deliverables: "Best for: service businesses, launch campaigns, conversion-focused websites"
  },
  {
    title: "Freelance Full-stack MVPs",
    summary:
      "Modern web applications built with Next.js and Supabase, covering auth, role-based access, dashboards, CRUD workflows, and polished UI delivery.",
    deliverables: "Best for: startups, internal tools, booking flows, platforms, admin systems"
  },
  {
    title: "Scalable Backend & Product Systems",
    summary:
      "For projects that need more structured business logic, I can design and implement backend services with Java and Spring Boot alongside a production-ready frontend.",
    deliverables: "Best for: complex workflows, business platforms, enterprise-style systems"
  }
];

const workProcess = [
  {
    step: "01",
    title: "Discovery",
    text: "We align on goals, audience, features, business priorities, and the fastest way to deliver useful value."
  },
  {
    step: "02",
    title: "Scope & Proposal",
    text: "I define the recommended scope, technical direction, timeline, and what will be delivered in each phase."
  },
  {
    step: "03",
    title: "Build & Review",
    text: "I develop the product iteratively, keeping communication clear and reducing surprises through regular checkpoints."
  },
  {
    step: "04",
    title: "Launch & Support",
    text: "After release, I help with stabilization, deployment guidance, and a post-launch support window."
  }
];

const engagementModels = [
  {
    name: "Landing Page Sprint",
    time: "1 to 2 weeks",
    details: "A focused engagement for local services, campaigns, personal brands, or portfolio websites.",
    includes: ["Responsive UI", "SEO-ready structure", "Performance optimization", "Launch support"]
  },
  {
    name: "Product MVP Build",
    time: "3 to 8 weeks",
    details: "A structured product delivery phase for dashboards, marketplaces, booking systems, and service platforms.",
    includes: ["Next.js frontend", "Supabase backend", "Auth and roles", "Admin and core workflows"]
  },
  {
    name: "Custom Full-stack System",
    time: "1 to 3 months",
    details: "A deeper engagement for systems with more custom logic, integrations, or backend architecture needs.",
    includes: ["Architecture planning", "Spring Boot or Supabase backend", "Deployment support", "Documentation"]
  }
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" }
  }
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08
    }
  }
};

export default function FreelanceClientPage() {
  const featuredProjects = data.projects.slice(0, 3);
  const freelanceHighlights = data.highlights.filter((item) => item.value !== "Top 4th");

  return (
    <main className="min-h-screen bg-[var(--color-cream)] text-[var(--color-ink)]">
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
              <p className="mt-2 text-sm text-[var(--color-muted)]">Founded by Phuoc Bui</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/" className="button button-ghost">
                View portfolio
              </Link>
              <a href={`mailto:${data.personalInfo.email}`} className="button">
                Start a project
              </a>
            </div>
          </motion.header>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <motion.div variants={fadeUp} className="space-y-8">
              <p className="section-label">PB Studio</p>
              <h1 className="max-w-4xl font-serif text-5xl leading-[0.92] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                Modern websites and full-stack web products for businesses that need clean execution.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
                PB Studio is my freelance service brand, focused on landing pages, product websites, and full-stack applications built with Next.js, Supabase, and Spring Boot.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a href={`mailto:${data.personalInfo.email}`} className="button">
                  Book a free consultation
                </a>
                <Link href="#case-studies" className="button button-secondary">
                  See selected work
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
              <motion.div
                variants={fadeUp}
                className="mt-5 rounded-[1.4rem] bg-[var(--color-surface)] p-5"
              >
                <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">Ideal clients</p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  Local businesses, service brands, founders, and teams who need a modern website or product workflow built with clear technical ownership.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12"
      >
        <motion.div variants={fadeUp} className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="section-label">What I Offer</p>
            <h2 className="mt-3 font-serif text-4xl tracking-[-0.04em] sm:text-5xl">
              Focused freelance services for real business needs.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-[var(--color-muted)]">
            Instead of presenting yourself only as a developer, this page frames your work as clear service offerings that help clients understand what they can hire you for.
          </p>
        </motion.div>
        <div className="grid gap-6 lg:grid-cols-3">
          {serviceOffers.map((offer) => (
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

      <motion.section
        id="case-studies"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
        className="border-y border-[var(--color-border)] bg-white/55"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          <motion.div variants={fadeUp} className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-label">Selected Work</p>
              <h2 className="mt-3 font-serif text-4xl tracking-[-0.04em] sm:text-5xl">
                Project proof rewritten for client-facing trust.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-[var(--color-muted)]">
              These are the same projects from your portfolio, but framed around client outcomes, technical decisions, and delivery capability rather than just visual presentation.
            </p>
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
                    <motion.div
                      initial={{ opacity: 0.8, scale: 0.98 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      className="rounded-[1.25rem] border border-white/15 bg-black/15 p-5 backdrop-blur-sm"
                    >
                      <p className="text-sm uppercase tracking-[0.18em] text-white/70">{project.category}</p>
                      <p className="mt-3 text-2xl font-semibold">{project.name}</p>
                    </motion.div>
                  </div>
                </div>
                <div className="grid gap-5">
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">Role</p>
                    <p className="mt-2 text-base leading-7 text-[var(--color-muted)]">{project.role}</p>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">What was built</p>
                    <p className="mt-2 text-base leading-7 text-[var(--color-muted)]">{project.description}</p>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">Why it matters</p>
                    <p className="mt-2 text-base leading-7 text-[var(--color-muted)]">{project.result}</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link href={project.demo} className="button button-secondary">
                      View live project
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
        className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12"
      >
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div variants={fadeUp} className="panel p-7 sm:p-8">
            <p className="section-label">Process</p>
            <h2 className="mt-4 font-serif text-4xl tracking-[-0.04em] sm:text-5xl">
              A simple process that keeps freelance work structured.
            </h2>
            <div className="mt-8 grid gap-4">
              {workProcess.map((item) => (
                <motion.article
                  key={item.step}
                  variants={fadeUp}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-[1.4rem] border border-[var(--color-border)] bg-white p-5"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">
                    {item.step}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{item.text}</p>
                </motion.article>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="panel p-7 sm:p-8">
            <p className="section-label">Engagement Models</p>
            <h2 className="mt-4 font-serif text-4xl tracking-[-0.04em] sm:text-5xl">
              Clear ways clients can work with you.
            </h2>
            <div className="mt-8 grid gap-5">
              {engagementModels.map((model) => (
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

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
        className="border-t border-[var(--color-border)] bg-white/65"
      >
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-20 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <motion.div variants={fadeUp} className="panel p-7 sm:p-8">
            <p className="section-label">FAQ</p>
            <div className="mt-6 space-y-4">
              {data.faqs.map((faq) => (
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
            <p className="section-label">Call To Action</p>
            <h2 className="mt-4 font-serif text-4xl tracking-[-0.04em] sm:text-5xl">
              Want this site to act like a real freelance sales page?
            </h2>
            <p className="mt-5 text-base leading-7 text-[var(--color-muted)]">
              The next step would be replacing the current homepage or linking this page prominently from your live navigation. We can also add real screenshots, pricing signals, contact form handling, and stronger case study storytelling.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <motion.a whileHover={{ y: -3 }} href={`mailto:${data.personalInfo.email}`} className="button">
                Let have a chat
              </motion.a>
              <motion.a whileHover={{ y: -3 }} href={`tel:${data.personalInfo.phoneRaw}`} className="button button-secondary">
                Call me
              </motion.a>
            </div>
            <div className="mt-8 grid gap-4">
              {data.contactLinks.slice(0, 3).map((link) => (
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
