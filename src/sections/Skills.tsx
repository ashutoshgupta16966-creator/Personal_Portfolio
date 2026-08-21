import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { BarChart3, Globe, Wrench, Code2 } from "lucide-react";
import {
  SiPython,
  SiC,
  SiPandas,
  SiNumpy,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiGooglecolab,
} from "react-icons/si";

const categories = [
  {
    id: "programming",
    label: "Programming & Core",
    icon: Code2,
    accent: "from-blue-500/15 to-indigo-500/5",
    border: "border-blue-400/25",
    iconColor: "text-blue-400",
    badgeBg: "bg-blue-500/10 text-blue-400",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "C", icon: SiC, color: "#A8B9CC" },
    ],
  },
  {
    id: "data-analytics",
    label: "Data Analytics (Basics)",
    icon: BarChart3,
    accent: "from-emerald-500/15 to-teal-500/5",
    border: "border-emerald-400/25",
    iconColor: "text-emerald-400",
    badgeBg: "bg-emerald-500/10 text-emerald-400",
    skills: [
      { name: "Pandas", icon: SiPandas, color: "#150458" },
      { name: "NumPy", icon: SiNumpy, color: "#4DABCF" },
      { name: "Matplotlib", icon: BarChart3, color: "#11557C" },
    ],
  },
  {
    id: "web-basics",
    label: "Web Basics",
    icon: Globe,
    accent: "from-cyan-500/15 to-sky-500/5",
    border: "border-cyan-400/25",
    iconColor: "text-cyan-400",
    badgeBg: "bg-cyan-500/10 text-cyan-400",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
    ],
  },
  {
    id: "dev-tools",
    label: "Dev Tools",
    icon: Wrench,
    accent: "from-orange-500/15 to-amber-500/5",
    border: "border-orange-400/25",
    iconColor: "text-orange-400",
    badgeBg: "bg-orange-500/10 text-orange-400",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "VS Code", icon: Code2, color: "#007ACC" },
      { name: "Google Colab", icon: SiGooglecolab, color: "#F9AB00" },
    ],
  },
];

// Flat skill bar data - EXACT 3 items requested
const topSkills = [
  { name: "Git / GitHub", level: 80, color: "bg-orange-500" },
  { name: "Python", level: 70, color: "bg-blue-500" },
  { name: "HTML & CSS", level: 65, color: "bg-emerald-500" },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState("programming");

  const active = categories.find((c) => c.id === activeTab) ?? categories[0];

  return (
    <section id="skills" className="py-28 bg-card" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-primary mb-3 block">
            Skills
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black">
            What I Work With
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            A clean, focused technical toolkit built around Python, Data Analytics, Web Development, and Developer Tools.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Left: Proficiency bars */}
          <motion.div
            className="lg:col-span-2 space-y-5"
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="flex items-center gap-2 mb-5">
              <Code2 size={16} className="text-primary" />
              <span className="text-sm font-bold text-foreground">Core Proficiency</span>
            </div>
            {topSkills.map(({ name, level, color }, si) => (
              <div key={name}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-semibold text-foreground">{name}</span>
                  <span className="text-xs text-muted-foreground font-bold">{level}%</span>
                </div>
                <div className="h-2.5 rounded-full bg-secondary overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${color}`}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${level}%` } : {}}
                    transition={{ duration: 1, delay: 0.3 + si * 0.1, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right: Tabbed skill cards */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Tab buttons */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map(({ id, label, icon: CatIcon, badgeBg }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                    activeTab === id
                      ? `${badgeBg} border-transparent shadow-sm`
                      : "bg-background border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <CatIcon size={11} />
                  {label}
                </button>
              ))}
            </div>

            {/* Active category skills */}
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className={`rounded-2xl border ${active.border} bg-gradient-to-br ${active.accent} p-6 min-h-[160px] flex items-center`}
            >
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 w-full">
                {active.skills.map(({ name, icon: SkillIcon, color }) => (
                  <div
                    key={name}
                    data-testid={`skill-item-${name.toLowerCase().replace(/[\s/.]+/g, "-")}`}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl bg-background/70 border border-border/60 hover:border-primary/40 hover:bg-background hover:shadow-md transition-all cursor-default group"
                  >
                    <SkillIcon
                      size={26}
                      style={{ color }}
                      className="group-hover:scale-110 transition-transform duration-200"
                    />
                    <span className="text-[11px] font-semibold text-center leading-tight text-muted-foreground group-hover:text-foreground transition-colors">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom: All category grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map(({ id, label, icon: CatIcon, accent, border, iconColor, badgeBg, skills }, ci) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 + ci * 0.08 }}
              data-testid={`card-skill-${id}`}
              className={`relative rounded-2xl border ${border} bg-gradient-to-br ${accent} bg-background p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="mb-4">
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold ${badgeBg} mb-0`}>
                  <CatIcon size={11} className={iconColor} />
                  {label}
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {skills.map(({ name, icon: SkillIcon, color }) => (
                  <div
                    key={name}
                    className="flex flex-col items-center gap-1.5 p-2.5 rounded-xl bg-background/70 border border-border/60 hover:border-primary/30 transition-all cursor-default group"
                  >
                    <SkillIcon size={20} style={{ color }} className="group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-[10px] font-medium text-center leading-tight text-muted-foreground group-hover:text-foreground transition-colors">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
