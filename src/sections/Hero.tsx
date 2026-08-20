import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 gradient-bg opacity-50" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-accent/8 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-12">

          {/* Left: Text content */}
          <div className="flex-1 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 mb-5">
                Open to opportunities
              </span>
            </motion.div>

            <motion.h1
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Ashutosh<br />
              <span className="gradient-text">Gupta</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground font-light mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              B.Tech CSE Student at GL Bajaj Group of Institutions, Mathura | Exploring Python, AI/ML, Data Analytics &amp; Software Development
            </motion.p>

            <motion.p
              className="text-sm md:text-base text-muted-foreground max-w-lg mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Turning raw data into clear decisions. I build analytical pipelines, craft insightful dashboards, and write clean Python that scales.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 mb-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                data-testid="button-view-work"
                className="px-7 py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:opacity-90 transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
              >
                View My Work
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                data-testid="button-get-in-touch"
                className="px-7 py-3 bg-secondary text-secondary-foreground rounded-xl font-semibold text-sm hover:bg-secondary/80 transition-all border border-border hover:-translate-y-0.5"
              >
                Get in Touch
              </button>
            </motion.div>

            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {[
                { icon: Github, label: "GitHub", href: "https://github.com" },
                { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
                { icon: Mail, label: "Email", href: "mailto:ashutosh@example.com" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`link-social-${label.toLowerCase()}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <span className="w-9 h-9 rounded-lg bg-secondary border border-border flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/5 transition-all">
                    <Icon size={15} />
                  </span>
                  <span className="hidden sm:block">{label}</span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Avatar */}
          <motion.div
            className="shrink-0 flex flex-col items-center gap-6"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="w-48 h-48 md:w-60 md:h-60 rounded-full shadow-2xl shadow-primary/25 overflow-hidden border-4 border-primary/20">
                <img
                  src="/assets/profile.jpeg"
                  alt="Ashutosh Gupta"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="absolute bottom-3 right-3 w-5 h-5 rounded-full bg-emerald-500 border-2 border-background" title="Available" />
            </div>

            <div className="flex gap-4 text-center">
              <div className="px-4 py-2 rounded-xl border border-border bg-card">
                <div className="text-sm font-bold leading-tight">B.Tech</div>
                <div className="text-xs text-muted-foreground">CSE Student</div>
              </div>
              <div className="px-4 py-2 rounded-xl border border-border bg-card">
                <div className="text-xl font-bold">4</div>
                <div className="text-xs text-muted-foreground">Real Projects</div>
              </div>
              <div className="px-4 py-2 rounded-xl border border-border bg-card">
                <div className="text-xl font-bold">5+</div>
                <div className="text-xs text-muted-foreground">Certifications</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.button
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          data-testid="button-scroll-down"
          aria-label="Scroll down"
        >
          <ArrowDown size={20} />
        </motion.button>
      </div>
    </section>
  );
}
