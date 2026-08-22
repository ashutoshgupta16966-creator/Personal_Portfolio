import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Coffee, Globe, Rocket } from "lucide-react";

const highlights = [
  { icon: Code2, label: "B.Tech CSE", sub: "Computer Science & Engg." },
  { icon: Rocket, label: "5+ Projects", sub: "Built & Deployed" },
  { icon: Globe, label: "Mathura, India", sub: "Based in" },
  { icon: Coffee, label: "Open to", sub: "Opportunities" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28 bg-card" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">About Me</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            The Story Behind the Code
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-5 text-muted-foreground leading-relaxed"
          >
            <p className="text-lg">
              I am a B.Tech Computer Science and Engineering student at GL Bajaj Group of Institutions, Mathura. Passionate about exploring Python, Data Analytics, and Intelligent Systems, I love turning raw data into clear, actionable insights.
            </p>
            <p>
              I focus on building analytical pipelines, data visualizations, and deploying functional web applications. From cleaning messy datasets to crafting dashboards that surface real patterns, I enjoy every step of the data journey.
            </p>
            <div className="pt-2">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                data-testid="link-about-contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline underline-offset-4"
              >
                Let's work together &rarr;
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map(({ icon: Icon, label, sub }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                data-testid={`card-highlight-${i}`}
                className="rounded-2xl border border-border bg-background p-6 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-primary" />
                </div>
                <div className="text-2xl font-bold mb-1">{label}</div>
                <div className="text-xs text-muted-foreground">{sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
