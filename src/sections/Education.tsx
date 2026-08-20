import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Shield, Cpu } from "lucide-react";

const education = [
  {
    type: "education",
    degree: "Bachelor of Technology (B.Tech)",
    institution: "GL Bajaj Group of Institutions, Mathura",
    period: "Aug 2025 — Jun 2029",
    gpa: null,
    description:
      "Pursuing a degree in Computer Science and Engineering with a focus on Python, Data Analytics, AI/ML, and Intelligent Systems.",
    highlights: ["Python", "Data Analytics", "AI / ML", "Intelligent Systems", "React", "TypeScript"],
    icon: GraduationCap,
    accent: "from-primary/10 to-accent/5",
    accentBorder: "border-primary/20",
    iconBg: "bg-primary/10 border-primary/20",
    iconColor: "text-primary",
    badgeColor: "bg-primary/10 text-primary",
  },
];

const certifications = [
  {
    type: "cert",
    degree: "Apply AI & Update Your Resume",
    institution: "Cisco Networking Academy",
    period: "Jun 2026",
    gpa: null,
    description:
      "Certification focused on applying AI tools to real-world professional workflows. Covered modern AI fundamentals, AI-assisted career development, and resume enhancement using intelligent tools.",
    subDetails: [
      { label: "Cisco Networking Academy", icon: Shield },
      { label: "Introduction to Modern AI", icon: Cpu },
    ],
    highlights: ["Artificial Intelligence", "Modern AI", "Cisco", "Professional Workflows"],
    icon: Award,
    accent: "from-blue-500/10 to-cyan-500/5",
    accentBorder: "border-blue-400/25",
    iconBg: "bg-blue-500/10 border-blue-400/20",
    iconColor: "text-blue-400",
    badgeColor: "bg-blue-500/10 text-blue-400",
  },
  {
    type: "cert",
    degree: "TCS iON Digital Learning Certifications",
    institution: "TCS iON (MPIT - CoE / TCS Foundation)",
    period: "Jun 2026",
    gpa: null,
    description:
      "Dual certification program under the TCS Foundation \"AI for All\" initiative covering foundational GenAI concepts and enterprise-grade cybersecurity awareness practices.",
    subDetails: [
      { label: "Cybersecurity Awareness", icon: Shield },
      { label: "GenAI Essentials", icon: Cpu },
    ],
    highlights: ["Generative AI", "Cybersecurity", "TCS iON", "AI for All"],
    icon: Award,
    accent: "from-violet-500/10 to-purple-500/5",
    accentBorder: "border-violet-400/25",
    iconBg: "bg-violet-500/10 border-violet-400/20",
    iconColor: "text-violet-400",
    badgeColor: "bg-violet-500/10 text-violet-400",
  },
];

type Entry = typeof education[0] | typeof certifications[0];

function TimelineCard({ entry, i, inView }: { entry: Entry; i: number; inView: boolean }) {
  const Icon = entry.icon;
  const hasSub = "subDetails" in entry && entry.subDetails;

  return (
    <motion.div
      key={entry.degree}
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.1 + i * 0.15 }}
      data-testid={`card-education-${i}`}
      className="relative md:pl-20"
    >
      {/* Side icon */}
      <div className={`hidden md:flex absolute left-0 top-6 w-16 h-16 rounded-2xl border items-center justify-center ${entry.iconBg}`}>
        <Icon size={22} className={entry.iconColor} />
      </div>

      <div className={`rounded-2xl border ${entry.accentBorder} bg-card p-6 md:p-7 hover:shadow-lg transition-all relative overflow-hidden`}>
        {/* Subtle bg gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${entry.accent} opacity-40`} />

        <div className="relative">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
            <div>
              <h3 className="text-lg font-black leading-tight">{entry.degree}</h3>
              <p className={`font-semibold text-sm mt-0.5 ${entry.iconColor}`}>{entry.institution}</p>
            </div>
            <span className={`text-xs font-bold px-3 py-1 rounded-full shrink-0 ${entry.badgeColor}`}>
              {entry.period}
            </span>
          </div>

          {/* Sub-details pills for certs */}
          {hasSub && (
            <div className="flex flex-wrap gap-2 mb-3">
              {(entry as typeof certifications[0]).subDetails.map(({ label, icon: SubIcon }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full border border-border bg-background/60 text-muted-foreground font-medium"
                >
                  <SubIcon size={10} className={entry.iconColor} />
                  {label}
                </span>
              ))}
            </div>
          )}

          <p className="text-sm text-muted-foreground leading-relaxed mb-4">{entry.description}</p>

          <div className="flex flex-wrap gap-2">
            {entry.highlights.map((h) => (
              <span
                key={h}
                className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground border border-border"
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-28" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-primary mb-3 block">
            Education &amp; Certifications
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black">
            Academic Background
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            B.Tech CSE degree in progress alongside industry certifications from Cisco and TCS.
          </p>
        </motion.div>

        {/* Education */}
        <div className="relative mb-10">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />
          <div className="space-y-8">
            {education.map((entry, i) => (
              <TimelineCard key={entry.degree} entry={entry} i={i} inView={inView} />
            ))}
          </div>
        </div>

        {/* Certifications header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground flex items-center gap-2">
            <Award size={12} className="text-primary" />
            Featured Certifications
          </span>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        {/* Certifications */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />
          <div className="space-y-8">
            {certifications.map((entry, i) => (
              <TimelineCard key={entry.degree} entry={entry} i={education.length + i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
