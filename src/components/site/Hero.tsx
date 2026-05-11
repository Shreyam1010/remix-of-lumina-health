import { motion } from "framer-motion";
import { ArrowRight, Activity, Brain, Sparkles, ShieldCheck, Globe2, Leaf, Info, UsersRound, Handshake } from "lucide-react";
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

const infoItems = [
  {
    icon: Info,
    title: "Chiropractic Information",
    desc: "Learn about the conditions treated with chiropractic",
    btn: "LEARN MORE",
    link: "#conditions",
  },
  {
    icon: UsersRound,
    title: "Advocacy",
    desc: "Learn more about advocates that support Chiropractic India",
    btn: "KNOW OUR ADVOCATES",
    link: "#team",
  },
  {
    icon: Handshake,
    title: "Become A Supporter",
    desc: "Become an advocate to support the cause of Chiropractic in India.",
    btn: "SUPPORT US",
    link: "#donate",
  },
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

      {/* 3 Informational Buttons - now part of Hero section */}
      <div className="mx-auto mt-12 grid max-w-7xl gap-12 px-6 md:grid-cols-3">
        {infoItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center text-center text-black"
          >
            <div className="relative mb-8">
              <div className="flex h-32 w-32 items-center justify-center rounded-full gradient-primary transition-transform hover:scale-105">
                <item.icon className="h-12 w-12 text-primary-foreground" strokeWidth={1.5} />
              </div>
              <div className="absolute bottom-2 right-2 h-6 w-6 rounded-full bg-white shadow-sm" />
            </div>

            <h3 className="font-sans text-2xl font-bold tracking-tight">{item.title}</h3>
            <p className="mt-4 max-w-[280px] text-[15px] leading-relaxed text-slate-600">
              {item.desc}
            </p>

            <a
              href={item.link}
              className="group relative mt-8 inline-block px-1 text-xs font-bold tracking-[0.2em]"
            >
              <span className="relative z-10">{item.btn}</span>
              <span className="absolute bottom-0 left-0 -z-0 h-[7px] w-full bg-[#FFE100] transition-all group-hover:h-[10px]" />
            </a>
          </motion.div>
        ))}
      </div>

      {/* Decorative jagged bottom border */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block h-[12px] w-full rotate-180"
          fill="#53141F"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  );
}
