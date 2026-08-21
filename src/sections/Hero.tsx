import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code2, Database } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 gradient-bg opacity-60" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,hsl(var(--primary)/0.12),transparent_60%)]" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--accent)/0.10),transparent_60%)]" />
      <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[80px]" />

      {/* Floating skill pills */}
      <motion.div
        className="absolute top-32 right-10 hidden xl:flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-card/60 backdrop-blur-sm text-xs font-semibold text-primary shadow-lg"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
      >
        <Code2 size={12} /> React &amp; Web Basics
      </motion.div>
      <motion.div
        className="absolute top-52 right-14 hidden xl:flex items-center gap-2 px-4 py-2 rounded-full border border-violet-400/20 bg-card/60 backdrop-blur-sm text-xs font-semibold text-violet-400 shadow-lg"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <Database size={12} /> Python &amp; Data Analytics
      </motion.div>
      <motion.div
        className="absolute top-72 right-6 hidden xl:flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-400/20 bg-card/60 backdrop-blur-sm text-xs font-semibold text-emerald-400 shadow-lg"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <Sparkles size={12} /> Open to Opportunities
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Left: Text content */}
          <div className="flex-1 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-primary/10 text-primary border border-primary/25 mb-6 shadow-sm">
                <Sparkles size={10} />
                Open to Opportunities
              </span>
            </motion.div>

            <motion.h1
              className="font-display text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-5"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Building the{" "}
              <span className="gradient-text">Future</span>
              <br />
              <span className="text-foreground/90">with Code &amp;</span>{" "}
              <span className="gradient-text">Data.</span>
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-foreground/90 font-semibold mb-6 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              B.Tech CSE Student at GL Bajaj Group of Institutions, Mathura | Python | Exploring AI/ML, Data Analytics &amp; Software Development
            </motion.p>

            {/* Stat pills */}
            <motion.div
              className="flex flex-wrap gap-3 mb-8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              {[
                { label: "3+ Projects", color: "text-primary border-primary/20 bg-primary/5" },
                { label: "5+ Certifications", color: "text-violet-400 border-violet-400/20 bg-violet-500/5" },
                { label: "Python · React · Git", color: "text-emerald-400 border-emerald-400/20 bg-emerald-500/5" },
              ].map(({ label, color }) => (
                <span key={label} className={`px-3 py-1 rounded-full text-xs font-semibold border ${color}`}>
                  {label}
                </span>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-3 mb-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                data-testid="button-view-work"
                className="px-7 py-3 bg-primary text-primary-foreground rounded-xl font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 active:scale-95"
              >
                View My Work
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                data-testid="button-get-in-touch"
                className="px-7 py-3 bg-card/80 backdrop-blur-sm text-foreground rounded-xl font-bold text-sm hover:bg-card transition-all border border-border hover:border-primary/40 hover:-translate-y-0.5 active:scale-95"
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
                { icon: Github, label: "GitHub", href: "https://github.com/ashutoshgupta16966-creator" },
                { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/ashutosh-gupta-9a8b07347" },
                { icon: Mail, label: "Email", href: "mailto:ashutoshgupta16966@gmail.com" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`link-social-${label.toLowerCase()}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all group"
                >
                  <span className="w-9 h-9 rounded-xl bg-card border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/8 group-hover:shadow-md group-hover:shadow-primary/10 transition-all">
                    <Icon size={15} />
                  </span>
                  <span className="hidden sm:block font-medium">{label}</span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Avatar + glassmorphism card */}
          <motion.div
            className="shrink-0 flex flex-col items-center gap-6"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-primary via-accent to-violet-500 opacity-30 blur-md" />
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full shadow-2xl shadow-primary/30 overflow-hidden border-4 border-primary/30">
                <img
                  src="/assets/profile.jpeg"
                  alt="Ashutosh Gupta"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="absolute bottom-4 right-4 w-5 h-5 rounded-full bg-emerald-500 border-2 border-background shadow-lg" title="Available" />
            </div>

            {/* Glassmorphism stats card */}
            <div className="flex gap-3 text-center">
              {[
                { val: "B.Tech", sub: "CSE '29", color: "text-primary" },
                { val: "3+", sub: "Projects", color: "text-violet-400" },
                { val: "5+", sub: "Certs", color: "text-emerald-400" },
              ].map(({ val, sub, color }) => (
                <div key={sub} className="px-4 py-3 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-md hover:border-primary/30 hover:bg-card/80 transition-all">
                  <div className={`text-lg font-black leading-tight ${color}`}>{val}</div>
                  <div className="text-xs text-muted-foreground font-medium mt-0.5">{sub}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.button
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
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
