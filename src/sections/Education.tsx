import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    institution: "GL Bajaj Group of Institutions, Mathura",
    period: "Aug 2025 — Jun 2029",
    gpa: null,
    description:
      "Pursuing a degree in Computer Science and Engineering with a focus on Python, Data Analytics, and Intelligent Systems.",
    highlights: ["Python", "Data Analytics", "Intelligent Systems"],
    icon: GraduationCap,
  },
  {
    degree: "Apply AI: Update Your Resume",
    institution: "Cisco Networking Academy",
    period: "Jun 2026",
    gpa: null,
    description:
      "Certification focused on applying artificial intelligence tools and techniques to real-world professional workflows, including AI-assisted resume and career development.",
    highlights: ["Artificial Intelligence", "Cisco"],
    icon: Award,
  },
];

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
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">Education</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Academic Background
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {education.map(({ degree, institution, period, gpa, description, highlights, icon: Icon }, i) => (
              <motion.div
                key={degree}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.15 }}
                data-testid={`card-education-${i}`}
                className="relative md:pl-20"
              >
                <div className="hidden md:flex absolute left-0 top-6 w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 items-center justify-center">
                  <Icon size={22} className="text-primary" />
                </div>

                <div className="rounded-2xl border border-border bg-card p-7 hover:border-primary/30 hover:shadow-md transition-all">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-lg font-bold">{degree}</h3>
                      <p className="text-primary font-medium text-sm">{institution}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {period}
                      </span>
                      {gpa && (
                        <p className="text-xs text-muted-foreground mt-1">GPA: {gpa}</p>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>

                  <div className="flex flex-wrap gap-2">
                    {highlights.map((h) => (
                      <span
                        key={h}
                        className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground border border-border"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
