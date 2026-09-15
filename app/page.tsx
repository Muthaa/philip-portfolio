const engineeringProjects = [
  {
    number: "01",
    title: "ExpTrail",
    category: "FINTECH · MOBILE · DATA",
    description:
      "A personal finance platform built around the problem of turning M-PESA transaction messages into structured financial data that can be stored, analysed and acted on.",
    stack: ["Flutter", "Dart", "Riverpod", "Drift"],
    status: "In development",
  },
  {
    number: "02",
    title: "AsiriaIDP",
    category: "IDENTITY · API · SECURITY",
    description:
      "An identity and authentication platform exploring the foundations of secure application access, authentication workflows and service integration.",
    stack: ["APIs", "Authentication", "Security"],
    status: "Building",
  },
  {
    number: "03",
    title: "AsiriaPOS",
    category: "BUSINESS SYSTEMS · API",
    description:
      "A point-of-sale platform designed around real business operations, including transactions, inventory, authentication and payment integrations.",
    stack: ["C#", ".NET", "SQL Server", "APIs"],
    status: "Project",
  },
];

const clientProjects = [
  {
    title: "Elite Tech Base",
    category: "E-COMMERCE",
  },
  {
    title: "Discreet Fleet",
    category: "FLEET TECHNOLOGY",
  },
  {
    title: "Kira Tech & Tacticals",
    category: "COMMERCE",
  },
  {
    title: "Smart Ryuga",
    category: "WEB PLATFORM",
  },
  {
    title: "Chanf Hospital",
    category: "HEALTHCARE",
  },
  {
    title: "Moderno Global Placements",
    category: "PROFESSIONAL SERVICES",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Software",
    description:
      "Designing and building applications across web, mobile and backend environments.",
  },
  {
    number: "02",
    title: "APIs & Integrations",
    description:
      "Connecting applications, services and third-party platforms through reliable APIs and integrations.",
  },
  {
    number: "03",
    title: "Data & Persistence",
    description:
      "Working with relational databases, application state and data flows from ingestion to persistence.",
  },
  {
    number: "04",
    title: "Infrastructure",
    description:
      "Understanding the systems beneath applications — hosting, deployment, networking and operations.",
  },
  {
    number: "05",
    title: "Security",
    description:
      "Building with authentication, access control, API security and secure system design in mind.",
  },
  {
    number: "06",
    title: "Problem Solving",
    description:
      "Breaking complex technical problems into smaller systems that can actually be built and maintained.",
  },
];

export default function Home() {
  return (
    <main>
      {/* NAVIGATION */}
      <header className="border-b border-white/10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a
            href="/"
            className="text-sm font-semibold uppercase tracking-[0.12em]"
          >
            Philip Kyalo
          </a>

          <div className="hidden items-center gap-8 text-sm text-white/50 md:flex">
            <a href="#work" className="transition hover:text-white">
              Work
            </a>

            <a href="#approach" className="transition hover:text-white">
              Approach
            </a>

            <a href="#experience" className="transition hover:text-white">
              Experience
            </a>

            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-white/15 px-4 py-2 text-xs font-medium transition hover:border-white/30"
          >
            Let&apos;s talk
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pb-32 pt-28 md:pb-40 md:pt-40">
        <div className="max-w-5xl">
          <p className="mb-7 text-xs font-medium uppercase tracking-[0.25em] text-white/40">
            Software · Systems · Security
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl md:text-6xl">
            Software, systems, and the infrastructure behind them.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/55 md:text-xl">
            Software & systems engineer working across applications, APIs,
            databases, infrastructure and security — turning complex technical
            problems into reliable systems.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#work"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
            >
              View selected work
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium transition hover:border-white/30"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="mt-20 grid gap-6 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.16em] text-white/35 md:grid-cols-3">
          <div>
            <span className="block text-white/20">Based in</span>
            <span className="mt-2 block text-white/60">Nairobi, Kenya</span>
          </div>

          <div>
            <span className="block text-white/20">Focus</span>
            <span className="mt-2 block text-white/60">
              Software · APIs · Systems
            </span>
          </div>

          <div>
            <span className="block text-white/20">Currently</span>
            <span className="mt-2 block text-white/60">
              Building & learning
            </span>
          </div>
        </div>
      </section>

      {/* ENGINEERING WORK */}
      <section id="work" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-white/35">
                01 / Engineering work
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Systems I&apos;ve been building.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-white/45">
              Selected projects that show how I approach software, data,
              APIs and systems.
            </p>
          </div>

          <div className="mt-16">
            {engineeringProjects.map((project) => (
              <article
                key={project.title}
                className="group border-t border-white/10 py-10 md:py-12"
              >
                <div className="grid gap-8 md:grid-cols-[80px_1fr_1.2fr] md:items-start">
                  <span className="text-sm text-white/25">
                    {project.number}
                  </span>

                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                      {project.category}
                    </p>

                    <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-xs uppercase tracking-wider text-white/30">
                      {project.status}
                    </p>
                  </div>

                  <div>
                    <p className="max-w-xl text-base leading-7 text-white/55">
                      {project.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.stack.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/45"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <button
                      className="mt-8 text-sm font-medium text-white/70 transition hover:text-white"
                      type="button"
                    >
                      Case study coming soon →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-white/35">
                02 / Engineering approach
              </p>
            </div>

            <div>
              <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                I care about what happens behind the interface.
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/55">
                Applications are only one part of a system. I like
                understanding the relationships between the interface, APIs,
                data, infrastructure, security and the people operating the
                technology.
              </p>

              <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
                {capabilities.map((capability) => (
                  <div
                    key={capability.number}
                    className="bg-[#090909] p-7"
                  >
                    <span className="text-xs text-white/25">
                      {capability.number}
                    </span>

                    <h3 className="mt-8 text-lg font-medium">
                      {capability.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-white/45">
                      {capability.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT WORK */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-white/35">
                03 / Selected client work
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Technology in the real world.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-white/45">
              Websites and digital platforms designed and built for
              organisations across different industries.
            </p>
          </div>

          <div className="mt-14 grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {clientProjects.map((project) => (
              <div
                key={project.title}
                className="border-b border-r border-white/10 p-7 transition hover:bg-white/[0.02]"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-white/30">
                  {project.category}
                </p>

                <h3 className="mt-10 text-lg font-medium">
                  {project.title}
                </h3>

                <span className="mt-6 block text-sm text-white/30">
                  View project →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
            <p className="text-xs uppercase tracking-[0.22em] text-white/35">
              04 / Experience
            </p>

            <div className="border-l border-white/10 pl-6 md:pl-8">
              <div className="flex flex-col justify-between gap-2 md:flex-row">
                <h3 className="text-xl font-semibold">
                  IT Operations & Digital Commerce Specialist
                </h3>

                <span className="text-sm text-white/35">
                  2024 — Present
                </span>
              </div>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/55">
                Working across technology operations, digital systems,
                integrations and web platforms while developing deeper
                expertise across software engineering, infrastructure,
                networking and security.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "Systems",
                  "Digital Commerce",
                  "Integrations",
                  "Web Platforms",
                  "Operations",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/40"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
            <p className="text-xs uppercase tracking-[0.22em] text-white/35">
              05 / About
            </p>

            <div>
              <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                A builder who likes understanding the whole system.
              </h2>

              <div className="mt-8 max-w-2xl space-y-6 text-base leading-8 text-white/55">
                <p>
                  My background sits across software development, IT
                  operations, digital commerce, networking and security.
                </p>

                <p>
                  I&apos;ve worked on everything from business applications
                  and APIs to e-commerce platforms and production websites.
                  That breadth has made me particularly interested in the
                  connections between software and the infrastructure it
                  depends on.
                </p>

                <p>
                  I&apos;m continuing to deepen that foundation through
                  software engineering, cloud, networking and cybersecurity.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-5 text-sm">
                <a
                  href="https://github.com/Muthaa"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/60 underline underline-offset-4 transition hover:text-white"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/philip-muthangya/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/60 underline underline-offset-4 transition hover:text-white"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-32 md:py-40">
          <p className="text-xs uppercase tracking-[0.22em] text-white/35">
            06 / Contact
          </p>

          <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Have a difficult technical problem?
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/50">
            I&apos;m open to software engineering, systems, cloud,
            infrastructure and technology opportunities.
          </p>

          <a
            href="mailto:philipmuthangya@gmail.com"
            className="mt-10 inline-block text-lg text-white underline underline-offset-8 transition hover:text-white/70"
          >
            philipmuthangya@gmail.com →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-xs uppercase tracking-[0.12em] text-white/30 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Philip Kyalo</p>

          <div className="flex gap-5">
            <a
              href="https://github.com/Muthaa"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/philip-muthangya/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}