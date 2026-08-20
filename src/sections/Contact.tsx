import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, Github, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-28 bg-card" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">Contact</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Let's Work Together
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            I'm currently open to full-time roles and select freelance projects. If you have something interesting in mind, I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-2 space-y-6"
          >
            <div>
              <h3 className="font-semibold text-lg mb-2">Say hello</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Whether you have a project in mind, a role to fill, or just want to connect — my inbox is always open.
              </p>
            </div>

            {[
              { icon: Mail, label: "Email", value: "ashutoshgupta16966@gmail.com", href: "mailto:ashutoshgupta16966@gmail.com" },
              { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/ashutoshgupta", href: "https://linkedin.com" },
              { icon: Github, label: "GitHub", value: "@ashutosh-gupta", href: "https://github.com" },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`link-contact-${label.toLowerCase()}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon size={16} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{label}</div>
                  <div className="text-sm font-medium group-hover:text-primary transition-colors">{value}</div>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="md:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-border bg-background p-10 text-center"
                data-testid="div-success-message"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 size={28} className="text-emerald-500" />
                </div>
                <h3 className="font-bold text-xl mb-2">Message received!</h3>
                <p className="text-muted-foreground text-sm">
                  Thanks for reaching out. I'll get back to you within 24–48 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); }}
                  data-testid="button-send-another"
                  className="mt-6 text-sm text-primary hover:underline underline-offset-4"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-border bg-background p-8 space-y-5"
                data-testid="form-contact"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      data-testid="input-contact-name"
                      placeholder="Your name"
                      className="w-full rounded-xl border border-border bg-secondary px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      data-testid="input-contact-email"
                      placeholder="your@email.com"
                      className="w-full rounded-xl border border-border bg-secondary px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    data-testid="textarea-contact-message"
                    placeholder="Tell me about your project or what you have in mind..."
                    className="w-full rounded-xl border border-border bg-secondary px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  data-testid="button-submit-contact"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:opacity-90 transition-all disabled:opacity-60 shadow-md hover:shadow-primary/25"
                >
                  {loading ? (
                    <span className="inline-block w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
                  ) : (
                    <Send size={15} />
                  )}
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
