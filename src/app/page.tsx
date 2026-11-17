import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  ExternalLink,
  ArrowUpRight,
  Code2,
  Database,
  Bot,
  Layers,
  Users,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    title: "FlowDev",
    tag: "MCP Server",
    description:
      "A remote MCP server that connects any MCP-compatible AI directly to a developer's VS Code workspace. Your AI reads files, writes code, searches your codebase, runs terminal commands, and pushes to GitHub — all from the chat window. No copy-pasting. No tab switching.",
    howItWorks:
      "The MCP server acts as a relay. Your AI sends tool calls to FlowDev, which forwards them to a VS Code extension via persistent WebSocket. The extension executes locally and returns results in real time. Your code never leaves your machine.",
    stack: ["TypeScript", "Node.js", "Socket.io", "VS Code Extension", "Neon PostgreSQL"],
    links: {
      github: "https://github.com/Oko300/FlowDev",
      live: "https://flowdev.onrender.com",
    },
    status: "Live",
  },
  {
    title: "RiskLens MCP",
    tag: "MCP Server",
    description:
      "Risk analysis for US public companies using live SEC EDGAR data. Pulls Form 8-K filings and Form 4 insider transactions, classifies them against a built-in risk taxonomy, detects clustering patterns, and returns a scored risk assessment with a plain-language explanation.",
    howItWorks:
      "Two focused tools: analyze_8k_events (material events, restatements, leadership changes, impairments) and analyze_insider_activity (clustered selling vs routine activity). Backed by Redis caching, rate-limited SEC calls, and designed for concurrent users.",
    stack: ["Python", "FastMCP", "Redis", "SEC EDGAR", "BeautifulSoup"],
    links: {
      github: "https://github.com/Oko300/risklens-mcp",
    },
    status: "Live",
  },
  {
    title: "ClipNest",
    tag: "Full-stack App",
    description:
      "Free video downloader that supports TikTok, Instagram, Twitter, Facebook, Vimeo and 1000+ other platforms. Paste a link, choose format and quality, download instantly — no watermark, no signup required.",
    howItWorks:
      "Next.js frontend with a clean queue-based interface. Paste multiple links, select format (video or audio), and download. Built for speed and simplicity.",
    stack: ["TypeScript", "Next.js", "Tailwind CSS"],
    links: {
      github: "https://github.com/Oko300/ClipNest",
      live: "https://clip-nest-ten.vercel.app",
    },
    status: "Live",
  },
];

const skills = [
  {
    category: "MCP & AI",
    items: ["Model Context Protocol", "FastMCP", "AI Automation", "Tool Design", "Agent Integrations"],
  },
  {
    category: "Data & Python",
    items: ["Python", "Data Analysis", "SEC EDGAR", "Redis", "BeautifulSoup", "Pandas"],
  },
  {
    category: "Full-stack",
    items: ["TypeScript", "Next.js", "React", "Node.js", "Express", "PostgreSQL"],
  },
  {
    category: "Community & Web3",
    items: ["Community Moderation", "Collab Management", "NFT Projects", "Discord", "On-chain"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <a href="#" className="text-lg font-semibold tracking-tight text-foreground">
            success
          </a>
          <div className="hidden items-center gap-8 text-sm text-muted md:flex">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
            <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
          <a
            href="mailto:300joh@gmail.com"
            className="rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
          >
            Get in touch
          </a>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-24 px-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
          <div className="relative mx-auto max-w-5xl">
            <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-12">
              <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border border-border ring-2 ring-accent/20 md:h-36 md:w-36">
                <Image
                  src="/logo.jpg"
                  alt="success"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="space-y-4">
                <p className="text-sm font-medium uppercase tracking-widest text-accent">
                  Statistics · MCP · Tools
                </p>
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                  success
                </h1>
                <p className="max-w-xl text-lg text-muted leading-relaxed">
                  I notice problems that don't have good solutions yet — then I build the tools.
                  Currently focused on MCP servers that give AI assistants real, structured capabilities.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="https://github.com/Oko300"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-sm text-foreground hover:border-accent/50 hover:bg-surface-elevated transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href="https://x.com/success_o1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-sm text-foreground hover:border-accent/50 hover:bg-surface-elevated transition-colors"
                  >
                    <Twitter className="h-4 w-4" />
                    Twitter
                  </a>
                  <a
                    href="https://www.linkedin.com/in/success-o-1376b1344"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-sm text-foreground hover:border-accent/50 hover:bg-surface-elevated transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-border/50 py-24 px-6">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">About</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">
              Builder. Explorer. Problem solver.
            </h2>
            <div className="grid gap-12 md:grid-cols-2">
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  I'm a 200-level B.Sc Statistics student at Federal University Wukari, Nigeria.
                  I combine a statistics foundation with real software development — which means
                  I don't just write code, I understand the data behind it.
                </p>
                <p>
                  Most of what I build sits at that intersection: tools that pull live data,
                  process it in a meaningful way, and surface something useful to the person
                  on the other end.
                </p>
                <p>
                  Right now I'm focused on MCP (Model Context Protocol) servers — building tools
                  that plug directly into AI assistants like Claude and Grok and give them real,
                  structured capabilities.
                </p>
              </div>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  I love exploring ideas and solving problems. When I notice something that
                  doesn't have a good solution yet, I can't leave it alone — I start building.
                </p>
                <p>
                  Previously I moderated and managed communities for NFT projects. That experience
                  taught me how to coordinate people, ship under pressure, and keep things running
                  when everything is moving fast.
                </p>
                <p>
                  Everything I build is deployed, not just pushed to GitHub. Open to internships,
                  collaborations, and entry-level opportunities in data science, analytics, or
                  AI development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="border-t border-border/50 py-24 px-6 bg-surface/30">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">Selected Work</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
              Tools that actually ship
            </h2>
            <p className="max-w-2xl text-muted mb-12">
              A selection of MCP servers and applications I've built. Each one started as an idea
              and ended as a working, deployed product.
            </p>

            <div className="space-y-8">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group rounded-2xl border border-border bg-surface p-6 md:p-8 hover:border-accent/30 transition-colors"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                        <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                          {project.tag}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground">{project.status}</span>
                    </div>
                    <div className="flex gap-2">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg border border-border p-2 text-muted hover:text-foreground hover:border-accent/50 transition-colors"
                          aria-label="GitHub"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg border border-border p-2 text-muted hover:text-foreground hover:border-accent/50 transition-colors"
                          aria-label="Live demo"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-muted leading-relaxed mb-4">{project.description}</p>

                  <div className="rounded-xl bg-background/50 border border-border/50 p-4 mb-5">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
                      How it works
                    </p>
                    <p className="text-sm text-muted leading-relaxed">{project.howItWorks}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-background border border-border px-2.5 py-1 text-xs text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How I Work */}
        <section className="border-t border-border/50 py-24 px-6">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">Approach</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-12">
              How I work
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Sparkles,
                  title: "Notice",
                  text: "I look for problems that don't have good solutions yet — especially at the intersection of data, AI, and real workflows.",
                },
                {
                  icon: Code2,
                  title: "Explore",
                  text: "I dig into the data, the APIs, and the constraints. Ideas get tested quickly against reality.",
                },
                {
                  icon: Bot,
                  title: "Build",
                  text: "I own the full stack from idea to deployment. MCP servers, data pipelines, full apps — shipped, not just sketched.",
                },
                {
                  icon: Layers,
                  title: "Iterate",
                  text: "Everything is deployed early. Feedback from real use drives the next version.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-surface p-6"
                >
                  <item.icon className="h-5 w-5 text-accent mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="border-t border-border/50 py-24 px-6 bg-surface/30">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">Skills</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-12">
              What I work with
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {skills.map((group) => (
                <div
                  key={group.category}
                  className="rounded-2xl border border-border bg-surface p-6"
                >
                  <h3 className="font-semibold text-foreground mb-4">{group.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md bg-background border border-border px-3 py-1.5 text-sm text-muted"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ideas */}
        <section className="border-t border-border/50 py-24 px-6">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">Exploration</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
              Ideas & new tools
            </h2>
            <p className="max-w-2xl text-muted mb-8 leading-relaxed">
              I constantly have ideas for new tools and technology. Some become MCP servers.
              Some become full applications. The common thread: they start from a real problem
              I noticed and couldn't ignore.
            </p>
            <div className="rounded-2xl border border-border bg-surface p-6 md:p-8">
              <p className="text-muted leading-relaxed">
                Currently exploring more tools at the intersection of AI and real financial /
                business data, deeper data science and machine learning applications, and ways
                to make AI assistants more capable through well-designed MCP servers.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-border/50 py-24 px-6 bg-surface/30">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">Contact</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
              Let's build something
            </h2>
            <p className="mx-auto max-w-lg text-muted mb-10 leading-relaxed">
              Open to internships, collaborations, and interesting problems. If you're working
              on something that needs someone who can both understand the data and build around it,
              reach out.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:300joh@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
              >
                <Mail className="h-4 w-4" />
                300joh@gmail.com
              </a>
              <a
                href="https://github.com/Oko300"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium text-foreground hover:border-accent/50 transition-colors"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/success-o-1376b1344"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium text-foreground hover:border-accent/50 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-6">
        <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} success. Built with Next.js.</p>
          <p>From Cross River State · Schooling in Taraba State, Nigeria</p>
        </div>
      </footer>
    </div>
  );
}
