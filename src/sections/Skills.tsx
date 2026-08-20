import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Brain,
  BarChart3,
  Globe,
  Wrench,
} from "lucide-react";
import {
  SiPython,
  SiTensorflow,
  SiScikitlearn,
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiPlotly,
  SiMysql,
  SiReact,
  SiFastapi,
  SiFlask,
  SiHtml5,
  SiGit,
  SiDocker,
  SiJupyter,
  SiKaggle,
} from "react-icons/si";

const categories = [
  {
    id: "ai-ml",
    label: "AI & ML",
    icon: Brain,
    accent: "from-violet-500/15 to-purple-500/5",
    border: "border-violet-400/25",
    iconColor: "text-violet-500",
    badgeBg: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
    skills: [
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
    ],
  },
  {
    id: "data-science",
    label: "Data Science",
    icon: BarChart3,
    accent: "from-blue-500/15 to-sky-500/5",
    border: "border-blue-400/25",
    iconColor: "text-blue-500",
    badgeBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    skills: [
      { name: "Pandas", icon: SiPandas, color: "#150458" },
      { name: "NumPy", icon: SiNumpy, color: "#013243" },
      { name: "Plotly", icon: SiPlotly, color: "#3F4F75" },
      { name: "SQL / MySQL", icon: SiMysql, color: "#4479A1" },
    ],
  },
  {
    id: "web-dev",
    label: "Web Development",
    icon: Globe,
    accent: "from-emerald-500/15 to-teal-500/5",
    border: "border-emerald-400/25",
    iconColor: "text-emerald-500",
    badgeBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "Flask", icon: SiFlask, color: "#000000" },
      { name: "HTML / CSS", icon: SiHtml5, color: "#E34F26" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    icon: Wrench,
    accent: "from-orange-500/15 to-amber-500/5",
    border: "border-orange-400/25",
    iconColor: "text-orange-500",
    badgeBg: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Jupyter", icon: SiJupyter, color: "#F37626" },
      { name: "Kaggle", icon: SiKaggle, color: "#20BEFF" },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-28 bg-card" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">
            Skills
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            What I Work With
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            A focused toolkit built around data analysis, machine learning, and building tools that surface real insight.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map(({ id, label, icon: CatIcon, accent, border, iconColor, badgeBg, skills }, ci) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + ci * 0.1 }}
              data-testid={`card-skill-${id}`}
              className={`relative rounded-2xl border ${border} bg-gradient-to-br ${accent} bg-background p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="mb-5">
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ${badgeBg} mb-3`}>
                  <CatIcon size={12} className={iconColor} />
                  {label}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {skills.map(({ name, icon: SkillIcon, color }) => (
                  <div
                    key={name}
                    data-testid={`skill-item-${name.toLowerCase().replace(/[\s/]+/g, "-")}`}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl bg-background/70 border border-border/60 hover:border-primary/30 hover:bg-background transition-all cursor-default group"
                  >
                    <SkillIcon
                      size={22}
                      style={{ color }}
                      className="group-hover:scale-110 transition-transform duration-200"
                    />
                    <span className="text-xs font-medium text-center leading-tight text-muted-foreground group-hover:text-foreground transition-colors">
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
