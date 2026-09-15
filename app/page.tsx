const projects = [
  {
    title: "ExpTrail",
    category: "Fintech / Mobile",
    description:
      "A personal finance platform designed to turn M-PESA transaction messages into structured financial data.",
    technologies: ["Flutter", "Dart", "SQLite", "Riverpod"],
  },
  {
    title: "SimplePOS",
    category: "Business Software",
    description:
      "A point-of-sale system focused on inventory, transactions and day-to-day business operations.",
    technologies: [".NET", "C#", "SQL Server"],
  },
  {
    title: "Fleet Technology Platform",
    category: "Web / Systems",
    description:
      "A modern web platform for a fleet technology business, combining service presentation, integrations and operational tooling.",
    technologies: ["WordPress", "PHP", "SEO", "Analytics"],
  },
];

const capabilities = [
  "Software Development",
  "API Engineering",
  "Database Design",
  "Cloud & DevOps",
  "Networking",
  "Cybersecurity",
];

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <header className="border-b border-white/10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="/" className="text-lg font-semibold tracking-tight">
            Philip Kyalo
          </a>

          <div className="hidden gap-8 text-sm text-white/60 md:flex">
            <a href="#work" className="transition hover:text-white">
              Work
            </a>
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#experience" className="transition hover:text-white">
              Experience
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-32 pt-28 md:pt-40">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-white/40">
            Software & Systems Engineer
          </p>

          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            I build software, APIs and systems that solve real problems.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
            I work across software development, backend systems, APIs,
            databases, infrastructure and security — turning ideas into
            reliable technology.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#work"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
            >
              View my work
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium transition hover:border-white/30"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="mt-20 flex items-center gap-3 text-sm text-white/40">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Based in Nairobi, Kenya
        </div>
      </section>

      {/* Work */}
      <section id="work" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-white/40">
              Selected work
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Things I&apos;ve built.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:-translate-y-1 hover:border-white/20"
              >
                <p className="text-xs uppercase tracking-wider text-white/40">
                  {project.category}
                </p>

                <h3 className="mt-6 text-xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/55">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/50"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm uppercase tracking-[0.2em] text-white/40">
            Capabilities
          </p>

          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <div
                key={capability}
                className="bg-[#090909] p-8 text-lg font-medium"
              >
                {capability}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
            <p className="text-sm uppercase tracking-[0.2em] text-white/40">
              About
            </p>

            <div>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                I&apos;m interested in the systems behind the interface.
              </h2>

              <div className="mt-8 space-y-6 text-base leading-8 text-white/60">
                <p>
                  My work sits at the intersection of software development,
                  infrastructure, networking and security.
                </p>

                <p>
                  I enjoy understanding how systems fit together — from the
                  application layer and APIs to databases, infrastructure and
                  the operational problems that appear in production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm uppercase tracking-[0.2em] text-white/40">
            Experience
          </p>

          <div className="mt-12 max-w-3xl">
            <div className="border-l border-white/10 pl-6">
              <p className="text-sm text-white/40">2024 — Present</p>

              <h3 className="mt-2 text-xl font-semibold">
                IT Operations & Digital Commerce Specialist
              </h3>

              <p className="mt-4 leading-7 text-white/60">
                Working across technology operations, digital systems,
                integrations and web platforms while continuing to build
                deeper expertise in software engineering, infrastructure and
                security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-32">
          <p className="text-sm uppercase tracking-[0.2em] text-white/40">
            Contact
          </p>

          <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Have a problem worth solving?
          </h2>

          <a
            href="mailto:philipmuthangya@gmail.com"
            className="mt-10 inline-block text-lg text-white/60 underline underline-offset-8 transition hover:text-white"
          >
            Let&apos;s talk →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Philip Kyalo</p>
          <p>Software · Systems · Security</p>
        </div>
      </footer>
    </main>
  );
}