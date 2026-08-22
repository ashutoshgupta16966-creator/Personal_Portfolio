import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, ExternalLink, ArrowUpRight, X, ChevronRight, Gamepad2, BarChart3, Globe, Layout, Layers } from "lucide-react";

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
    id: "campussync",
    title: "CampusSync — Smart Student Workspace",
    tagline: "Semester Workspace & Student Collaboration Hub",
    description:
      "One workspace for your notes, hackathon squad, and resume matching — featuring AI summarizer, campus activity feed, and teammate matcher.",
    longDescription:
      "CampusSync is an all-in-one smart student workspace built for semester productivity and campus team formation. It brings class notes, hackathon squad assembly, AI-driven notes summarization, live campus activity feeds, and automated skill-to-resume matching into a unified dashboard.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Node.js"],
    accent: "from-indigo-500/20 to-cyan-500/10",
    accentBorder: "border-indigo-400/25",
    accentIcon: "text-indigo-400",
    githubUrl: "https://github.com/ashutoshgupta16966-creator/Campus-Sync",
    liveUrl: "https://campus-sync-ashy.vercel.app",
    status: "Full-Stack / Web Application",
    icon: Layers,
    features: [
      "Semester note-taking workspace & AI notes summarizer",
      "Hackathon squad finder & teammate skill matcher",
      "Real-time campus activity feed & announcement board",
      "Automated resume-to-opportunity skill alignment",
      "Responsive UI built with React, Tailwind CSS & Node.js",
    ],
    structure: [
      { path: "src/App.jsx", desc: "Main student workspace shell" },
      { path: "src/components/Feed.jsx", desc: "Campus activity & squad feed" },
      { path: "src/services/ai.js", desc: "Notes summarizer engine" },
      { path: "server/", desc: "Node.js backend API & collaboration handlers" },
    ],
  },
  {
    id: "rajachess",
    title: "RajaChess — Multiplayer Chess",
    tagline: "Framework-Free 2P, 3P & 4P Chess Engine",
    description:
      "A feature-packed, gamified web chess app supporting 2-Player, 3-Player, and 4-Player variants on a single board.",
    longDescription:
      "RajaChess is a framework-free browser chess game built with HTML5, CSS3, and JavaScript (ES6+). It features 2-player, 3-player, and 4-player chess variants on an adaptive board, powered by a custom Smart Multi-King AI engine across 3 difficulty levels with anti-loop resolution. Includes a \"Shahi Khazana\" virtual economy (localStorage) and real-time Web Audio API sound synthesis.",
    tags: ["HTML5", "CSS3", "JavaScript (ES6+)", "Web Audio API", "Smart AI", "LocalStorage"],
    accent: "from-amber-500/20 to-yellow-500/10",
    accentBorder: "border-amber-400/25",
    accentIcon: "text-amber-400",
    githubUrl: "https://github.com/ashutoshgupta16966-creator/Multiplayer_Chess",
    liveUrl: "https://multiplayer-chess-eta.vercel.app/",
    status: "Game Dev / Web App",
    icon: Gamepad2,
    features: [
      "2P, 3P, 4P chess on a single adaptive board",
      "Smart Multi-King AI engine (Easy, Medium, Hard with anti-loop resolution)",
      "\"Shahi Khazana\" virtual economy (coins, trophies, streaks in localStorage)",
      "Pure JS Web Audio API sound synthesis — 0 external audio files",
      "Move history, turn indicators, and check/checkmate detection",
      "100% framework-free Vanilla JS architecture",
    ],
    structure: [
      { path: "index.html", desc: "Main entry point and adaptive board layout" },
      { path: "style.css", desc: "Custom theme & piece styling" },
      { path: "chess.js", desc: "Core game engine, move validation, AI logic" },
      { path: "economy.js", desc: "Shahi Khazana virtual economy module" },
      { path: "audio.js", desc: "Web Audio API sound generator" },
    ],
  },
  {
    id: "smart-bharat",
    title: "Smart Bharat — Civic Companion",
    tagline: "AI-Powered Civic Issue Tracker & Assistant",
    description:
      "A civic-tech web application featuring an AI Companion, real-time civic issue tracker, and document assistant.",
    longDescription:
      "Smart Bharat is a civic-tech application designed to simplify reporting and reviewing public complaints. It features an AI Companion chatbot for user assistance, an issue tracking dashboard for real-time complaint status updates, and a document review assistant for municipal guidelines.",
    tags: ["React", "TypeScript", "Vite", "AI Integration", "Tailwind CSS"],
    accent: "from-emerald-500/20 to-teal-500/10",
    accentBorder: "border-emerald-400/25",
    accentIcon: "text-emerald-400",
    githubUrl: "https://github.com/ashutoshgupta16966-creator/Smart_Bharat---Civic-Companion",
    liveUrl: "https://smart-bharat-civic-companion-1.onrender.com",
    status: "Civic Tech / Web App",
    icon: Globe,
    features: [
      "AI Companion chatbot for civic issue reporting guidance",
      "Real-time issue status tracker with status badges",
      "Document review assistant for municipal guidelines",
      "Interactive dashboard layout with filterable complaint cards",
      "Built with React, TypeScript, Vite, and Tailwind CSS",
    ],
    structure: [
      { path: "src/App.tsx", desc: "Root application shell" },
      { path: "src/components/", desc: "Dashboard UI components" },
      { path: "src/sections/", desc: "Feature section views" },
      { path: "src/lib/ai.ts", desc: "AI assistant integration module" },
    ],
  },
  {
    id: "portfolio",
    title: "Personal Portfolio Website",
    tagline: "Modern Developer Portfolio Built with React & Tailwind",
    description:
      "Modern developer portfolio built with React, TypeScript, and Tailwind CSS featuring interactive project showcases, clean UI/UX, and responsive layout.",
    longDescription:
      "A developer portfolio built from scratch to showcase real engineering projects, academic background, and technical skill sets. Features an interactive project modal viewer, glassmorphism aesthetics, responsive dark mode support, and clean TypeScript codebase.",
    tags: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    accent: "from-violet-500/20 to-purple-500/10",
    accentBorder: "border-violet-400/25",
    accentIcon: "text-violet-400",
    githubUrl: "https://github.com/ashutoshgupta16966-creator/Personal_Portfolio",
    liveUrl: "https://portfolio-ashutosh22.vercel.app/",
    status: "Web Development / React",
    icon: Layout,
    features: [
      "React 18 + TypeScript strict build architecture",
      "Glassmorphism dark theme with Framer Motion animations",
      "Interactive project modal viewer with isolated code breakdown",
      "Responsive design optimized across mobile and desktop viewports",
      "Clean project repository integration",
    ],
    structure: [
      { path: "src/sections/", desc: "Hero, About, Skills, Projects, Education, Contact" },
      { path: "src/components/", desc: "Navbar, ErrorBoundary, UI primitives" },
      { path: "src/main.tsx", desc: "App root with ErrorBoundary" },
      { path: "vite.config.ts", desc: "Vite build configuration" },
    ],
  },
  {
    id: "eda-tool",
    title: "Exploratory Data Analysis Tool",
    tagline: "Data Cleaning, Feature Engineering & Visualization Pipeline",
    description:
      "A comprehensive Python and Google Colab EDA pipeline for structured dataset processing and statistical chart generation.",
    longDescription:
      "A data science project delivering an end-to-end exploratory data analysis pipeline built in Python and Google Colab. Covers automated data cleaning, missing value imputations, feature engineering, and statistical chart generation to uncover meaningful insights.",
    tags: ["Python", "Google Colab", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    accent: "from-blue-500/20 to-sky-500/10",
    accentBorder: "border-blue-400/25",
    accentIcon: "text-blue-400",
    githubUrl: "https://github.com/ashutoshgupta16966-creator/Exploratory_Data_Analysis",
    status: "Data Science / EDA",
    icon: BarChart3,
    features: [
      "Automated data cleaning & missing value handling",
      "Feature engineering & statistical data aggregation",
      "Distribution heatmaps, scatter plots, and trend charts",
      "Modular Python script / Jupyter notebook design",
      "Exportable charts and data summary tables",
    ],
    structure: [
      { path: "EDA_Notebook.ipynb", desc: "Main Jupyter analysis notebook" },
      { path: "data/", desc: "Raw and processed datasets" },
      { path: "outputs/", desc: "Generated charts and statistical outputs" },
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
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-primary text-primary-foreground hover:opacity-90 transition-all shadow-md shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5"
              >
                <Github size={16} />
                Source Code
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-secondary text-secondary-foreground border border-border hover:bg-secondary/80 hover:border-primary/30 transition-all hover:-translate-y-0.5"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
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
            Real projects — student workspaces, chess engines, civic platforms, web apps, and data analytics pipelines. Click any card to explore details.
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
                <div className="relative p-7 flex flex-col h-full justify-between">
                  <div>
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
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-border/40">
                    <div className="flex items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                      >
                        <Github size={14} />
                        Source Code
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:underline"
                        >
                          <ExternalLink size={13} />
                          Live Demo
                        </a>
                      )}
                    </div>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-foreground transition-colors font-medium">
                      Details
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
