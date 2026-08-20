import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Diwali Sales Data Analysis",
    tagline: "Exploratory data analysis on sales patterns",
    description:
      "Performed exploratory data analysis (EDA) on Diwali sales data using Python to clean the dataset and identify key purchasing patterns and top-selling product categories.",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    accent: "from-orange-500/20 to-yellow-500/10",
    accentBorder: "border-orange-400/25",
    githubUrl: "https://github.com",
    status: "EDA Project",
  },
  {
    title: "Exploratory Data Analysis Tool",
    tagline: "Comprehensive cricket tournament insights",
    description:
      "Built a comprehensive EDA pipeline in Google Colab using Python to analyze IPL datasets. Cleaned messy data, handled missing values, and created impactful data visualizations to uncover key tournament trends.",
    tags: ["Python", "Google Colab", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    accent: "from-blue-500/20 to-sky-500/10",
    accentBorder: "border-blue-400/25",
    githubUrl: "https://github.com",
    status: "EDA Project",
  },
  {
    title: "Smart Bharat — Civic Companion",
    tagline: "AI-powered civic issue dashboard",
    description:
      "Developed a comprehensive Civic Dashboard web application featuring an AI Companion, civic issue tracker, and document assistant to review the real-time status of civic complaints.",
    tags: ["Web Development", "Dashboard", "AI Integration", "Vercel"],
    accent: "from-emerald-500/20 to-teal-500/10",
    accentBorder: "border-emerald-400/25",
    githubUrl: "https://github.com",
    status: "Live",
  },
  {
    title: "Personal Portfolio Website",
    tagline: "This very website you're looking at",
    description:
      "Built and deployed a professional personal portfolio website using Replit Agent, completely customized with a personal profile, engineering education background, and real project details.",
    tags: ["HTML", "CSS", "JavaScript", "Replit Agent"],
    accent: "from-violet-500/20 to-purple-500/10",
    accentBorder: "border-violet-400/25",
    githubUrl: "https://github.com",
    status: "Deployed",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-28" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">Projects</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Things I've Built
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Real projects — data pipelines, visualizations, and web applications built from scratch.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map(({ title, tagline, description, tags, accent, accentBorder, githubUrl, status }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.12 }}
              data-testid={`card-project-${i}`}
              className={`group relative rounded-2xl border ${accentBorder} bg-card overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-50`} />
              <div className="relative p-7">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{tagline}</p>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-background border border-border text-muted-foreground shrink-0 ml-2">
                    {status}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md bg-background border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`link-github-${title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={14} />
                    Source
                  </a>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={18} className="text-muted-foreground" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
