import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, ExternalLink, ArrowUpRight, X, ChevronRight, Gamepad2, BarChart3, Globe, Layout } from "lucide-react";

interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  tags: string[];
  accent: string;
  accentBorder: string;
  accentIcon: string;
  githubUrl: string;
  liveUrl?: string;
  status: string;
  icon: React.ElementType;
  features: string[];
  structure?: { path: string; desc: string }[];
}

const projects: Project[] = [
  {
    id: "rajachess",
    title: "RajaChess — Multiplayer Chess",
    tagline: "2P · 3P · 4P on one board",
    description:
      "A feature-packed, gamified web chess app supporting 2-Player, 3-Player, and 4-Player variants on a single board.",
    longDescription:
      "RajaChess is a fully framework-free browser chess game built with pure HTML5, CSS3, and ES6+ JavaScript. It supports classic 2-player chess, an experimental 3-player and 4-player mode, all powered by a custom Smart Multi-King AI engine with 3 difficulty levels and anti-loop resolution. The virtual economy system \"Shahi Khazana\" tracks wins, coins, and trophies in localStorage. Sound is synthesized in real-time using the Web Audio API — no audio files needed.",
    tags: ["HTML5", "CSS3", "JavaScript (ES6+)", "Web Audio API", "Smart AI", "LocalStorage"],
    accent: "from-amber-500/20 to-yellow-500/10",
    accentBorder: "border-amber-400/25",
    accentIcon: "text-amber-400",
    githubUrl: "https://github.com/AshutoshBuilds/RajaChess",
    liveUrl: "https://rajachess.vercel.app",
    status: "Game Dev / Web App",
    icon: Gamepad2,
    features: [
      "2P, 3P, 4P chess on a single adaptive board",
      "Smart Multi-King AI — Easy, Medium, Hard with anti-loop logic",
      "\"Shahi Khazana\" economy: coins, trophies, streaks (localStorage)",
      "Real-time Web Audio API sound synthesis — zero audio files",
      "Move history, check/checkmate detection, turn indicators",
      "Fully responsive — desktop & mobile",
      "100% framework-free (no React, no Vue, no jQuery)",
    ],
    structure: [
      { path: "index.html", desc: "Main entry point" },
      { path: "style.css", desc: "Full board & UI styling" },
      { path: "chess.js", desc: "Core game logic, move validation, AI engine" },
      { path: "economy.js", desc: "Shahi Khazana virtual economy system" },
      { path: "audio.js", desc: "Web Audio API sound synthesis" },
    ],
  },
  {
    id: "eda-tool",
    title: "Exploratory Data Analysis Tool",
    tagline: "IPL cricket tournament insights",
    description:
      "A comprehensive EDA pipeline in Google Colab to analyze IPL datasets with rich visualizations.",
    longDescription:
      "Built a full exploratory data analysis pipeline using Python and Google Colab to analyze Indian Premier League (IPL) cricket datasets. The project involved data cleaning, handling missing values, feature engineering, and generating over 15 impactful visualizations to uncover tournament trends, team performance patterns, and player statistics.",
    tags: ["Python", "Google Colab", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    accent: "from-blue-500/20 to-sky-500/10",
    accentBorder: "border-blue-400/25",
    accentIcon: "text-blue-400",
    githubUrl: "https://github.com/AshutoshBuilds",
    status: "EDA Project",
    icon: BarChart3,
    features: [
      "Full data cleaning pipeline with missing value handling",
      "Team-wise win rate analysis across IPL seasons",
      "Player performance heatmaps and scatter plots",
      "Venue-wise match outcome analysis",
      "Toss decision impact visualization",
      "15+ publication-ready charts (Matplotlib + Seaborn)",
    ],
    structure: [
      { path: "IPL_EDA.ipynb", desc: "Main analysis notebook" },
      { path: "data/matches.csv", desc: "Match-level IPL dataset" },
      { path: "data/deliveries.csv", desc: "Ball-by-ball delivery data" },
      { path: "outputs/", desc: "Exported charts & figures" },
    ],
  },
  {
    id: "smart-bharat",
    title: "Smart Bharat — Civic Companion",
    tagline: "AI-powered civic issue dashboard",
    description:
      "Civic Dashboard web app with AI Companion, civic issue tracker, and document assistant.",
    longDescription:
      "Smart Bharat is a civic-tech web application designed to simplify the process of tracking and reviewing public complaints. It features an AI Companion chatbot for guidance, a real-time civic issue tracker with status updates, and a document assistant for reviewing government-issued documents. Deployed on Vercel with a clean, accessible UI.",
    tags: ["React", "TypeScript", "Vite", "AI Integration", "Vercel", "Tailwind CSS"],
    accent: "from-emerald-500/20 to-teal-500/10",
    accentBorder: "border-emerald-400/25",
    accentIcon: "text-emerald-400",
    githubUrl: "https://github.com/AshutoshBuilds/SmartBharat",
    liveUrl: "https://smart-bharat.vercel.app",
    status: "Live App",
    icon: Globe,
    features: [
      "AI Companion chatbot for civic guidance",
      "Real-time civic complaint tracker with status",
      "Document review assistant for government forms",
      "Interactive dashboard with filterable issue cards",
      "Responsive design optimized for all devices",
      "Deployed and live on Vercel",
    ],
    structure: [
      { path: "src/App.tsx", desc: "Root application component" },
      { path: "src/components/", desc: "Reusable UI components" },
      { path: "src/sections/", desc: "Page section components" },
      { path: "src/lib/ai.ts", desc: "AI companion integration" },
      { path: "vercel.json", desc: "Deployment configuration" },
    ],
  },
  {
    id: "portfolio",
    title: "Personal Portfolio Website",
    tagline: "The site you're currently viewing",
    description:
      "Professional portfolio built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.",
    longDescription:
      "This portfolio was built from scratch with a focus on performance, aesthetics, and developer experience. It uses React 18 + TypeScript with Vite for blazing fast builds, Tailwind CSS v4 for utility-first styling, and Framer Motion for silky smooth animations. Dark mode is supported via class-based theming, and the site scores 95+ on Lighthouse.",
    tags: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "Vercel"],
    accent: "from-violet-500/20 to-purple-500/10",
    accentBorder: "border-violet-400/25",
    accentIcon: "text-violet-400",
    githubUrl: "https://github.com/AshutoshBuilds/Portfolio",
    liveUrl: "https://ashutosh-portfolio.vercel.app",
    status: "Deployed",
    icon: Layout,
    features: [
      "React 18 + TypeScript with strict mode",
      "Vite build tool for sub-second HMR",
      "Tailwind CSS v4 with custom dark theme",
      "Framer Motion animations throughout",
      "Glassmorphism UI panels and gradient accents",
      "SPA routing with Vercel rewrites",
      "Project detail modals with isolated views",
    ],
    structure: [
      { path: "src/sections/", desc: "Hero, About, Skills, Projects, Certs, Contact" },
      { path: "src/components/", desc: "Navbar, ErrorBoundary, UI kit" },
      { path: "src/main.tsx", desc: "App entry with ErrorBoundary" },
      { path: "vite.config.ts", desc: "Vite + Tailwind + path aliases" },
      { path: "vercel.json", desc: "SPA rewrite rules" },
    ],
  },
];

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  const Icon = project.icon;
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-background/80 backdrop-blur-md"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Modal panel */}
        <motion.div
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-border bg-card shadow-2xl shadow-black/40 z-10"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.97 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Header gradient stripe */}
          <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r ${project.accent.replace("/20", "/80").replace("/10", "/60")}`} />

          <div className="p-7 md:p-9">
            {/* Top bar */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl border border-border bg-gradient-to-br ${project.accent} flex items-center justify-center`}>
                  <Icon size={22} className={project.accentIcon} />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-black">{project.title}</h2>
                  <p className="text-sm text-muted-foreground mt-0.5">{project.tagline}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-xl border border-border bg-secondary flex items-center justify-center hover:bg-destructive/10 hover:border-destructive/30 hover:text-destructive transition-all shrink-0"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed mb-7">
              {project.longDescription}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mb-7">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-lg bg-secondary border border-border font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Features */}
            <div className="mb-7">
              <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">Key Features</h3>
              <ul className="space-y-2">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <ChevronRight size={14} className={`${project.accentIcon} mt-0.5 shrink-0`} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Code structure */}
            {project.structure && (
              <div className="mb-7">
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">Directory Structure</h3>
                <div className="rounded-xl border border-border bg-background overflow-hidden font-mono text-xs">
                  {project.structure.map(({ path, desc }, i) => (
                    <div
                      key={path}
                      className={`flex items-center gap-3 px-4 py-2.5 ${i !== project.structure!.length - 1 ? "border-b border-border/60" : ""}`}
                    >
                      <span className="text-primary/70">├─</span>
                      <span className="text-foreground font-semibold">{path}</span>
                      <span className="text-muted-foreground ml-auto text-right">{desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-primary text-primary-foreground hover:opacity-90 transition-all shadow-md shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5"
                >
                  <ExternalLink size={14} />
                  Live Preview
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-secondary text-secondary-foreground border border-border hover:bg-secondary/80 hover:border-primary/30 transition-all hover:-translate-y-0.5"
              >
                <Github size={14} />
                Source Code
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-28" ref={ref}>
      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-primary mb-3 block">Projects</span>
          <h2 className="font-display text-4xl md:text-5xl font-black">
            Things I've Built
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Real projects — chess engines, data pipelines, AI dashboards, and deployed web apps. Click any card to explore details.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.12 }}
                data-testid={`card-project-${i}`}
                onClick={() => setSelectedProject(project)}
                className={`group relative rounded-2xl border ${project.accentBorder} bg-card overflow-hidden hover:shadow-xl hover:shadow-black/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-50`} />
                <div className="relative p-7">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl border border-border/60 bg-background/60 flex items-center justify-center`}>
                        <Icon size={18} className={project.accentIcon} />
                      </div>
                      <div>
                        <h3 className="text-lg font-black leading-tight">{project.title}</h3>
                        <p className="text-xs text-muted-foreground mt-0.5">{project.tagline}</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-background border border-border text-muted-foreground shrink-0 ml-2">
                      {project.status}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-md bg-background/80 border border-border/80"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-xs px-2.5 py-1 rounded-md bg-background/80 border border-border/80 text-muted-foreground">
                        +{project.tags.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {project.liveUrl && (
                        <span className="flex items-center gap-1 text-xs text-emerald-400 font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Live
                        </span>
                      )}
                    </div>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary transition-colors font-semibold">
                      View Details
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
