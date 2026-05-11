import { motion } from "framer-motion";
import { ArrowRight, Activity, Brain, Sparkles, ShieldCheck, Globe2, Leaf } from "lucide-react";
import spine from "@/assets/spine-hero.png";

const floatCards = [
  { icon: Activity, title: "Spinal Health", desc: "Better movement, better life", x: "left-2 md:-left-6", y: "top-10" },
  { icon: Brain, title: "Nerve Function", desc: "Healthy spine, healthy nerves", x: "right-2 md:-right-4", y: "top-1/3" },
  { icon: Sparkles, title: "Posture & Alignment", desc: "Align your spine, align your life", x: "left-0 md:-left-10", y: "bottom-16" },
];

const trust = [
  { icon: ShieldCheck, label: "Evidence Based" },
  { icon: Leaf, label: "Drug-Free Care" },
  { icon: Activity, label: "Holistic Approach" },
  { icon: Globe2, label: "Global Standards" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* ambient backgrounds */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(closest-side,_oklch(0.85_0.12_150_/_0.45),_transparent)]" />
        <div className="absolute -bottom-40 -right-40 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(closest-side,_oklch(0.78_0.1_180_/_0.35),_transparent)]" />
        <div className="absolute inset-0 noise opacity-60" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Advancing Spinal Health & Wellbeing
          </span>

          <h1 className="mt-6 font-serif text-5xl leading-[1.05] md:text-6xl lg:text-7xl">
            Building a <em className="italic font-light">Healthier</em> India,
            <br />
            <span className="text-gradient">One Spine</span> at a Time
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Chiropractic India is the national voice for chiropractic awareness,
            education, and advocacy. Together we promote drug-free,
            non-invasive, and holistic spinal care.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#about"
              className="group inline-flex items-center gap-2 rounded-full gradient-cta px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-elegant transition-all hover:scale-[1.03] hover:shadow-glow"
            >
              Learn About Chiropractic
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#mission"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Join Our Mission
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-4">
            {trust.map((t) => (
              <div key={t.label} className="flex flex-col items-start gap-2">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-secondary text-primary">
                  <t.icon className="h-4 w-4" />
                </span>
                <span className="text-xs font-medium text-muted-foreground">{t.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Spine visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative lg:col-span-6"
        >
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md">
            {/* glowing orbs */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute left-1/2 top-1/2 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,_oklch(0.78_0.14_150_/_0.45),_transparent_70%)] animate-pulse-glow" />
              <div className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/15" />
              <div className="absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10" />
            </div>

            <img
              src={spine}
              alt="Anatomical spine illustration"
              width={1024}
              height={1024}
              className="relative z-0 mx-auto h-full w-auto object-contain animate-float drop-shadow-[0_30px_60px_oklch(0.3_0.06_160/0.25)]"
            />

            {/* floating glass cards */}
            {floatCards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.6 }}
                className={`absolute z-10 ${c.x} ${c.y} w-56 rounded-2xl glass-strong p-3.5 shadow-elegant`}
              >
                <div className="flex items-start gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                    <c.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{c.title}</p>
                    <p className="text-xs text-muted-foreground">{c.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* stat strip */}
      <div className="mx-auto mt-20 grid max-w-7xl grid-cols-2 gap-4 px-6 md:grid-cols-4">
        {[
          { n: "25+", l: "Years of Advocacy" },
          { n: "10,000+", l: "Lives Impacted" },
          { n: "50+", l: "Awareness Programs" },
          { n: "Pan India", l: "Presence" },
        ].map((s, i) => (
          <motion.div
            key={s.l}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-3xl glass p-5 transition-all hover:-translate-y-1 hover:shadow-elegant"
          >
            <p className="font-serif text-3xl text-foreground md:text-4xl">{s.n}</p>
            <p className="mt-1 text-sm text-muted-foreground">{s.l}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
