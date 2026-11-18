import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Code2,
  Bot,
  Layers,
  Sparkles,
} from "lucide-react";
import ProjectsSection from "@/components/ProjectsSection";

const skills = [
  {
    category: "AI & MCP",
    items: [
      "MCP Servers",
      "AI Automation",
      "Tool Design",
      "Agent Integrations",
      "VS Code Extensions",
    ],
  },
  {
    category: "Data & Analysis",
    items: ["Python", "Data Analysis", "Pandas", "SEC EDGAR", "Redis"],
  },
  {
    category: "Full-Stack Development",
    items: [
      "TypeScript",
      "Next.js",
      "React",
      "Node.js",
      "Web Apps",
      "Mobile Apps",
      "PostgreSQL",
    ],
  },
  {
    category: "Community & Web3",
    items: [
      "Discord Moderation",
      "Web3 Collab Management",
      "NFT Projects",
      "Community Ops",
    ],
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
                  src="/logo2.jpg"
                  alt="success"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="space-y-4">
                <p className="text-sm font-medium uppercase tracking-widest text-accent">
                  Full-Stack Developer · MCP · AI Tools
                </p>
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                  success
                </h1>
                <p className="max-w-xl text-lg text-muted leading-relaxed">
                  Full-stack developer focused on building practical AI tools and MCP servers.
                  I design and ship production software — from web and mobile applications to
                  developer tools that integrate directly with AI assistants.
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
                    @success_o1
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
              Developer focused on useful tools
            </h2>
            <div className="grid gap-12 md:grid-cols-2">
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  I build full-stack applications, developer tools, and AI integrations.
                  My current focus is on Model Context Protocol (MCP) servers — tools that
                  give AI assistants structured, real-world capabilities such as file system
                  access, data analysis, and workflow automation.
                </p>
                <p>
                  I work across the stack: TypeScript and Next.js on the frontend, Node.js
                  and Python on the backend, and modern data tools for analysis and automation.
                  I also develop VS Code extensions and ship production web and mobile apps.
                </p>
              </div>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  In addition to product work, I have experience managing Web3 and NFT
                  communities — handling Discord moderation, collaboration coordination,
                  and day-to-day community operations under real pressure.
                </p>
                <p>
                  I regularly build websites and applications for small businesses and
                  individuals. Everything I ship is deployed and usable, not just a repository.
                  Open to internships, freelance work, and collaborations in software
                  development, data, and AI tooling.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <ProjectsSection />

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
                  title: "Identify",
                  text: "I focus on real gaps — missing tooling, awkward workflows, or data that is hard to access — and design practical solutions around them.",
                },
                {
                  icon: Code2,
                  title: "Design",
                  text: "I map requirements, APIs, and constraints early. Solutions are scoped for reliability and clarity before implementation begins.",
                },
                {
                  icon: Bot,
                  title: "Build",
                  text: "I own delivery end-to-end: architecture, implementation, testing, and deployment. MCP servers, full apps, and extensions included.",
                },
                {
                  icon: Layers,
                  title: "Ship & Improve",
                  text: "Products go live quickly. Real usage drives the next iteration so the tool stays useful and maintainable.",
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
            <p className="mt-8 text-sm text-muted max-w-2xl">
              I also build websites and applications for small businesses and personal brands —
              landing pages, web apps, and mobile-friendly experiences — as well as VS Code
              extensions and custom MCP tools.
            </p>
          </div>
        </section>

        {/* Focus */}
        <section className="border-t border-border/50 py-24 px-6">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">Focus</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
              Current direction
            </h2>
            <p className="max-w-2xl text-muted mb-8 leading-relaxed">
              My primary focus is building MCP servers and AI tooling that give assistants
              real capabilities — file access, data pipelines, risk analysis, and developer
              workflows — while continuing to ship full-stack applications and community tools.
            </p>
            <div className="rounded-2xl border border-border bg-surface p-6 md:p-8">
              <p className="text-muted leading-relaxed">
                Areas of active work include deeper financial and business data integrations,
                more capable developer MCP servers, and production-grade web and mobile products
                for clients and personal projects.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-border/50 py-24 px-6 bg-surface/30">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">Contact</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
              Get in touch
            </h2>
            <p className="mx-auto max-w-lg text-muted mb-10 leading-relaxed">
              Available for internships, freelance projects, and collaborations.
              If you need someone who can design, build, and ship — reach out.
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
                href="https://x.com/success_o1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium text-foreground hover:border-accent/50 transition-colors"
              >
                <Twitter className="h-4 w-4" />
                @success_o1
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
        <div className="mx-auto max-w-5xl flex items-center justify-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} success. Built with Next.js.</p>
        </div>
      </footer>
    </div>
  );
}
