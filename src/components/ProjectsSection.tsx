"use client";

import { useState } from "react";
import {
  Github,
  ExternalLink,
  ChevronDown,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

type ReadmeSection = {
  type: "text" | "steps" | "features" | "platforms" | "faq" | "cta";
  heading?: string;
  content?: string;
  items?: string[];
  steps?: { number: string; text: string }[];
  faqs?: { q: string; a: string }[];
  ctaLabel?: string;
  ctaHref?: string;
  ctaNote?: string;
};

type Project = {
  title: string;
  tag: string;
  status: string;
  description: string;
  stack: string[];
  links: { github?: string; live?: string };
  readme: ReadmeSection[];
};

const projects: Project[] = [
  {
    title: "FlowDev",
    tag: "MCP Server",
    status: "Live",
    description:
      "A remote MCP server that connects any MCP-compatible AI directly to a developer's VS Code workspace. Your AI reads files, writes code, searches your codebase, runs terminal commands, and pushes to GitHub, all from the chat window. No copy-pasting. No tab switching.",
    stack: ["TypeScript", "Node.js", "Socket.io", "VS Code Extension", "Neon PostgreSQL"],
    links: {
      github: "https://github.com/Oko300/FlowDev",
      live: "https://flowdev.onrender.com",
    },
    readme: [
      {
        type: "text",
        heading: "What is FlowDev?",
        content:
          "FlowDev is a remote MCP server that bridges AI assistants directly with your live VS Code workspace. Instead of copy-pasting code between windows or describing your project structure to an AI, FlowDev lets your AI operate inside your project in real time.",
      },
      {
        type: "steps",
        heading: "How to set it up",
        steps: [
          { number: "01", text: "Go to flowdev.onrender.com/login and sign in with GitHub. Your personal token is generated instantly." },
          { number: "02", text: "Install the FlowDev MCP extension from the VS Code Marketplace (search \"FlowDev MCP\" or open marketplace.visualstudio.com/items?itemName=successO.flowdevmcp)." },
          { number: "03", text: "In VS Code, open the FlowDev sidebar (⚡ icon), paste your token, and click Connect." },
          { number: "04", text: "Add the MCP URL (https://flowdev.onrender.com/mcp?token=YOUR_TOKEN) as a custom connector in Claude, Cursor, Windsurf, or any MCP-compatible AI." },
          { number: "05", text: "Start chatting. Your AI can now read files, write code, run terminal commands, and push to GitHub directly from the conversation. Code never leaves your machine." },
        ],
      },
      {
        type: "features",
        heading: "Capabilities",
        items: [
          "Read and write files inside your VS Code workspace",
          "Search across your entire codebase",
          "Run any terminal command from the AI chat",
          "Stage, commit, and push to GitHub",
          "Get the full project structure at a glance",
          "Find-and-replace across files",
          "Works with Claude, Cursor, and any MCP-compatible AI",
          "Persistent WebSocket with no polling or added latency",
        ],
      },
      {
        type: "text",
        heading: "Security",
        content:
          "The MCP server acts purely as a relay. Your source code is never uploaded or stored on FlowDev servers. All execution happens inside your local VS Code extension. The WebSocket channel is authenticated per session.",
      },
      {
        type: "cta",
        ctaLabel: "Get access →",
        ctaHref: "https://flowdev.onrender.com/login",
        ctaNote: "Sign in with GitHub → get your token → connect VS Code. Full docs on GitHub.",
      },
    ],
  },
  {
    title: "RiskLens MCP",
    tag: "MCP Server",
    status: "Live",
    description:
      "Risk analysis for US public companies using live SEC EDGAR data. Pulls Form 8-K filings and Form 4 insider transactions, classifies them against a built-in risk taxonomy, detects clustering patterns, and returns a scored risk assessment with a plain-language explanation.",
    stack: ["Python", "FastMCP", "Redis", "SEC EDGAR", "BeautifulSoup"],
    links: {
      github: "https://github.com/Oko300/risklens-mcp",
    },
    readme: [
      {
        type: "text",
        heading: "What is RiskLens MCP?",
        content:
          "RiskLens MCP is a Model Context Protocol server that gives AI assistants the ability to perform real-time risk analysis on US public companies. It connects directly to the SEC's EDGAR database, pulls live regulatory filings, and returns a structured risk assessment, all from a single AI tool call.",
      },
      {
        type: "features",
        heading: "Two focused tools",
        items: [
          "8-K Event Scanner: reads material events, restatements, leadership changes, and asset impairments from Form 8-K filings",
          "Insider Activity Tool: detects clustered selling versus routine transactions from Form 4 insider filings",
          "Built-in risk taxonomy that classifies every event into a severity tier",
          "Clustering pattern detection across multiple filings",
          "Plain-language explanation attached to every scored assessment",
          "Redis caching to avoid redundant SEC calls",
          "Rate-limited SEC API calls, fully EDGAR-compliant",
          "Designed for concurrent users without request collision",
        ],
      },
      {
        type: "text",
        heading: "How the scoring works",
        content:
          "Each filing is classified against a risk taxonomy covering governance, financial health, legal exposure, and operational continuity. Events are weighted by severity tier, recency, and clustering frequency. The final score is a composite index from 0–100 with a plain-English summary explaining what drove it.",
      },
      {
        type: "text",
        heading: "Technical stack",
        content:
          "Built with Python and FastMCP. SEC EDGAR data is fetched and parsed with BeautifulSoup. Redis is used for caching recent results to reduce latency and respect EDGAR rate limits. The server is stateless. Each tool call is independent.",
      },
      {
        type: "cta",
        ctaLabel: "View on GitHub",
        ctaHref: "https://github.com/Oko300/risklens-mcp",
        ctaNote: "Plug into any MCP-compatible AI to run live company risk queries.",
      },
    ],
  },
  {
    title: "ClipNest",
    tag: "Full-stack App",
    status: "Live",
    description:
      "Free video downloader that supports TikTok, Instagram, Twitter, Facebook, Vimeo and 1000+ other platforms. Paste a link, choose format and quality, Download instantly. No watermark, no signup required.",
    stack: ["TypeScript", "Next.js", "FastAPI", "Python", "yt-dlp", "ffmpeg", "Tailwind CSS"],
    links: {
      github: "https://github.com/Oko300/ClipNest",
      live: "https://clip-nest-ten.vercel.app",
    },
    readme: [
      {
        type: "text",
        heading: "What is ClipNest?",
        content:
          "ClipNest is a free, open-access web-based video downloader. It lets anyone download videos from TikTok, Instagram, Twitter (X), Facebook, Vimeo, and over 1000 other platforms, directly in the browser. No account required, no watermark added, no ads. Available at clip-nest-ten.vercel.app and installable as a Progressive Web App (PWA) on Android and iOS.",
      },
      {
        type: "steps",
        heading: "How it works",
        steps: [
          { number: "01", text: "Paste any video link from a supported platform into the input field." },
          { number: "02", text: "ClipNest fetches the video metadata and shows available quality options (360p, 480p, 720p, 1080p) and format options (MP4 video or MP3/M4A/WAV audio)." },
          { number: "03", text: "Select your preferred quality and format, then click Download. A real-time progress bar shows the download status." },
          { number: "04", text: "The file is saved directly to your device. No watermark is added. Files are held temporarily (up to 2 days) so an interrupted download can be resumed, then auto-deleted." },
        ],
      },
      {
        type: "features",
        heading: "Features",
        items: [
          "Supports TikTok, Instagram, Twitter/X, Facebook, Vimeo and 1000+ platforms",
          "Download in multiple video qualities: 360p, 480p, 720p, 1080p",
          "Audio-only download in MP3, M4A, or WAV format",
          "Clip cutter: download only a specific portion of a video by start and end time",
          "No watermark on downloaded files",
          "No account or signup required",
          "No ads. Completely free.",
          "Real-time download progress bar via Server-Sent Events",
          "Metadata stripped from downloaded files for privacy",
          "Installable as a mobile app (PWA) on Android and iOS",
          "Works on all modern desktop and mobile browsers",
        ],
      },
      {
        type: "platforms",
        heading: "Supported platforms",
        items: [
          "TikTok", "Instagram", "Twitter / X", "Facebook", "Vimeo",
          "Reddit", "Dailymotion", "Twitch clips", "PeerTube", "Odysee",
          "Internet Archive", "Bilibili", "Rumble", "Streamable", "Mixcloud", "SoundCloud",
        ],
      },
      {
        type: "text",
        heading: "Privacy",
        content:
          "ClipNest does not store any downloaded videos long-term. Files are processed on the server and kept only temporarily (up to 2 days) for resume purposes, then automatically deleted. ClipNest does not collect personal data, does not require login, and does not track individual user downloads. IP addresses are hidden from server logs.",
      },
      {
        type: "text",
        heading: "Technical information",
        content:
          "Built with Next.js 14 (frontend) and FastAPI with Python (backend). Uses yt-dlp as the download engine and ffmpeg for media processing. The frontend is hosted on Vercel and the backend on Render. Downloads use Server-Sent Events (SSE) for real-time progress updates.",
      },
      {
        type: "faq",
        heading: "Frequently asked questions",
        faqs: [
          { q: "Is ClipNest free?", a: "Yes. Completely free. No paid plans, no premium features, no hidden charges." },
          { q: "Do I need an account?", a: "No. ClipNest requires no signup, no login, and no personal information of any kind." },
          { q: "Will the downloaded video have a watermark?", a: "No. ClipNest downloads the original video file with no watermark added." },
          { q: "Does ClipNest work on mobile?", a: "Yes. It works on all modern mobile browsers and can be installed as a PWA on Android and iOS for a native app-like experience." },
          { q: "Why is YouTube not supported?", a: "YouTube actively blocks server-based downloading tools. ClipNest focuses on platforms where reliable downloading is technically possible." },
          { q: "How do I download audio only?", a: "After pasting a link, select Audio only (MP3), M4A, or WAV from the format options before clicking Download." },
          { q: "Can I download just a portion of a video?", a: "Yes. Use the Clip Cutter feature: after fetching a video, set a start time and end time to extract exactly the portion you want." },
        ],
      },
      {
        type: "cta",
        ctaLabel: "Try ClipNest free →",
        ctaHref: "https://clip-nest-ten.vercel.app",
        ctaNote: "No account needed. Paste a link and download in seconds.",
      },
    ],
  },
];

function ReadmeBlock({ section }: { section: ReadmeSection }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (section.type === "text") {
    return (
      <div className="mb-6">
        {section.heading && (
          <h4 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-widest">
            {section.heading}
          </h4>
        )}
        <p className="text-sm text-muted leading-relaxed">{section.content}</p>
      </div>
    );
  }

  if (section.type === "steps") {
    return (
      <div className="mb-6">
        {section.heading && (
          <h4 className="text-xs font-semibold text-foreground mb-3 uppercase tracking-widest">
            {section.heading}
          </h4>
        )}
        <ol className="space-y-3">
          {section.steps?.map((step) => (
            <li key={step.number} className="flex gap-3 items-start">
              <span className="shrink-0 rounded-md bg-accent/10 text-accent text-xs font-bold px-2 py-1 mt-0.5">
                {step.number}
              </span>
              <p className="text-sm text-muted leading-relaxed">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  if (section.type === "features") {
    return (
      <div className="mb-6">
        {section.heading && (
          <h4 className="text-xs font-semibold text-foreground mb-3 uppercase tracking-widest">
            {section.heading}
          </h4>
        )}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {section.items?.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-muted">
              <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (section.type === "platforms") {
    return (
      <div className="mb-6">
        {section.heading && (
          <h4 className="text-xs font-semibold text-foreground mb-3 uppercase tracking-widest">
            {section.heading}
          </h4>
        )}
        <div className="flex flex-wrap gap-2">
          {section.items?.map((platform) => (
            <span
              key={platform}
              className="rounded-md bg-background border border-border px-2.5 py-1 text-xs text-muted"
            >
              {platform}
            </span>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          + 1000 other platforms. Note: YouTube is not supported due to platform restrictions.
        </p>
      </div>
    );
  }

  if (section.type === "faq") {
    return (
      <div className="mb-6">
        {section.heading && (
          <h4 className="text-xs font-semibold text-foreground mb-3 uppercase tracking-widest">
            {section.heading}
          </h4>
        )}
        <div className="space-y-2">
          {section.faqs?.map((faq, i) => (
            <div key={i} className="rounded-lg border border-border overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left text-sm font-medium text-foreground hover:bg-surface-elevated transition-colors"
              >
                {faq.q}
                <ChevronDown
                  className={`h-4 w-4 text-muted shrink-0 transition-transform duration-200 ${
                    openFaq === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === i && (
                <div className="px-4 pb-3 text-sm text-muted leading-relaxed border-t border-border/50 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (section.type === "cta") {
    return (
      <div className="mt-2 rounded-xl border border-accent/20 bg-accent/5 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-muted">{section.ctaNote}</p>
        <a
          href={section.ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover transition-colors"
        >
          {section.ctaLabel}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    );
  }

  return null;
}

export default function ProjectsSection() {
  const [openProject, setOpenProject] = useState<string | null>(null);

  return (
    <section id="projects" className="border-t border-border/50 py-24 px-6 bg-surface/30">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
          Selected Work
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
          Tools that actually ship
        </h2>
        <p className="max-w-2xl text-muted mb-12">
          MCP servers and applications I've built. Each one started as an idea and shipped as a
          working, deployed product. Click any project to read the full details.
        </p>

        <div className="space-y-4">
          {projects.map((project) => {
            const isOpen = openProject === project.title;
            return (
              <article
                key={project.title}
                className={`rounded-2xl border transition-colors duration-200 ${
                  isOpen
                    ? "border-accent/40 bg-surface"
                    : "border-border bg-surface hover:border-accent/20"
                }`}
              >
                {/* Header — always visible */}
                <button
                  onClick={() => setOpenProject(isOpen ? null : project.title)}
                  className="w-full text-left px-6 py-5 md:px-8 md:py-6"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-3 min-w-0">
                      <h3 className="text-lg font-semibold text-foreground shrink-0">
                        {project.title}
                      </h3>
                      <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                        {project.tag}
                      </span>
                      <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                        {project.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
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
                          onClick={(e) => e.stopPropagation()}
                          className="rounded-lg border border-border p-2 text-muted hover:text-foreground hover:border-accent/50 transition-colors"
                          aria-label="Live site"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                      <ChevronDown
                        className={`h-5 w-5 text-muted transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>

                  <p className="mt-3 text-sm text-muted leading-relaxed max-w-3xl text-left">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-background border border-border px-2.5 py-1 text-xs text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </button>

                {/* Expanded README content */}
                {isOpen && (
                  <div className="border-t border-border/50 px-6 py-6 md:px-8 md:py-8">
                    {project.readme.map((section, i) => (
                      <ReadmeBlock key={i} section={section} />
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
