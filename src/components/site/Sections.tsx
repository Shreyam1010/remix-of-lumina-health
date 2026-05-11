import { motion } from "framer-motion";
import {
  ArrowRight,
  PlayCircle,
  Activity,
  Bone,
  PersonStanding,
  Dumbbell,
  Brain,
  Hand,
  Zap,
  Target,
  GraduationCap,
  Megaphone,
  Accessibility,
  Quote,
  Calendar,
  MapPin,
  Plus,
  Minus,
  Mail,
  Instagram,
  Twitter,
  Linkedin,
  Heart,
} from "lucide-react";
import { useState } from "react";
import mission from "@/assets/mission.jpg";

function SectionHeader({
  eyebrow,
  title,
  desc,
  align = "center",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  desc?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`mx-auto max-w-2xl ${align === "center" ? "text-center" : "text-left"}`}>
      {eyebrow && (
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 font-serif text-4xl md:text-5xl">{title}</h2>
      {desc && <p className="mt-4 text-muted-foreground">{desc}</p>}
    </div>
  );
}

export function About() {
  const points = [
    { icon: Activity, t: "Neck Pain", d: "Relief & Mobility" },
    { icon: Bone, t: "Back Pain", d: "Relief & Strength" },
    { icon: PersonStanding, t: "Posture Issues", d: "Alignment & Balance" },
    { icon: Brain, t: "Headaches", d: "Tension & Migraine" },
  ];
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">What is Chiropractic?</span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">
            Healing through <em className="italic font-light">alignment</em>, not medication.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Chiropractic is a healthcare profession concerned with the diagnosis,
            treatment and prevention of mechanical disorders of the musculoskeletal
            system, especially the spine.
          </p>
          <p className="mt-3 text-muted-foreground">
            It focuses on restoring proper alignment, improving mobility, and
            enhancing the body's natural ability to heal itself — without drugs
            or surgery.
          </p>
          <a
            href="#conditions"
            className="mt-8 inline-flex items-center gap-2 rounded-full gradient-cta px-6 py-3 text-sm font-medium text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]"
          >
            Explore Chiropractic <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {points.map((p, i) => (
            <motion.div
              key={p.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group rounded-3xl glass p-5 transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl gradient-primary text-primary-foreground transition-transform group-hover:scale-110">
                <p.icon className="h-5 w-5" />
              </span>
              <p className="mt-4 font-serif text-xl">{p.t}</p>
              <p className="text-sm text-muted-foreground">{p.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Mission() {
  const pillars = [
    { icon: Megaphone, t: "Awareness", d: "Educating communities" },
    { icon: GraduationCap, t: "Education", d: "Building knowledge" },
    { icon: Target, t: "Advocacy", d: "Policy & standards" },
    { icon: Accessibility, t: "Accessibility", d: "Care for all" },
  ];
  return (
    <section id="mission" className="relative px-6 py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] shadow-elegant">
            <img
              src={mission}
              alt="Chiropractor practitioner"
              loading="lazy"
              width={1024}
              height={768}
              className="h-full w-full object-cover"
            />
            <button className="absolute inset-0 grid place-items-center text-primary-foreground transition-transform hover:scale-105">
              <span className="grid h-16 w-16 place-items-center rounded-full glass-strong shadow-glow">
                <PlayCircle className="h-8 w-8 text-primary" />
              </span>
            </button>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden h-36 w-36 rounded-full bg-[radial-gradient(closest-side,_oklch(0.78_0.14_150_/_0.5),_transparent)] md:block" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Mission & Vision</span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">
            Our <em className="italic font-light">Mission</em>,
            <br />
            Our Commitment
          </h2>
          <p className="mt-5 text-muted-foreground">
            To promote chiropractic awareness, support education, uphold
            professional standards, and advocate for the integration of
            chiropractic care into mainstream healthcare in India.
          </p>
          <a
            href="#team"
            className="mt-7 inline-flex items-center gap-2 rounded-full gradient-cta px-6 py-3 text-sm font-medium text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]"
          >
            About Our Journey <ArrowRight className="h-4 w-4" />
          </a>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {pillars.map((p) => (
              <div key={p.t} className="rounded-2xl glass p-4">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-primary">
                  <p.icon className="h-4 w-4" />
                </span>
                <p className="mt-3 text-sm font-semibold">{p.t}</p>
                <p className="text-xs text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Conditions() {
  const items = [
    { icon: Bone, t: "Back Pain" },
    { icon: PersonStanding, t: "Neck Pain" },
    { icon: Zap, t: "Sciatica" },
    { icon: Dumbbell, t: "Sports Injuries" },
    { icon: Activity, t: "Posture Problems" },
    { icon: Brain, t: "Headaches & Migraines" },
    { icon: Hand, t: "Joint Pain" },
    { icon: Target, t: "Muscle Tension" },
  ];
  return (
    <section id="conditions" className="relative px-6 py-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-[60%] gradient-soft" />
      <SectionHeader
        eyebrow="We Help With"
        title={<>Conditions We <em className="italic font-light">Address</em></>}
        desc="Evidence-based chiropractic care for a wide range of musculoskeletal and neurological conditions."
      />

      <div className="mx-auto mt-14 grid max-w-7xl grid-cols-2 gap-4 md:grid-cols-4">
        {items.map((c, i) => (
          <motion.button
            key={c.t}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-3xl glass p-6 text-left transition-all hover:-translate-y-1 hover:shadow-elegant"
          >
            <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[radial-gradient(closest-side,_oklch(0.78_0.14_150_/_0.35),_transparent)]" />
            </div>
            <span className="grid h-14 w-14 place-items-center rounded-2xl border border-border bg-card text-primary transition-transform group-hover:scale-110">
              <c.icon className="h-6 w-6" />
            </span>
            <p className="mt-5 font-serif text-lg">{c.t}</p>
            <span className="mt-3 block h-0.5 w-10 rounded-full bg-primary/60" />
          </motion.button>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-full gradient-cta px-6 py-3 text-sm font-medium text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]"
        >
          View All Conditions <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

function Counter({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-3xl glass p-7 text-center transition-all hover:-translate-y-1 hover:shadow-elegant"
    >
      <p className="font-serif text-5xl text-gradient">{value}</p>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </motion.div>
  );
}

export function Impact() {
  return (
    <section className="relative px-6 py-28">
      <SectionHeader
        title={<>Our <em className="italic font-light">Impact</em> Across India</>}
        desc="A growing movement transforming spinal health awareness and access — community by community."
      />
      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-4">
        <Counter value="10K+" label="People Reached" />
        <Counter value="50+" label="Health Camps" />
        <Counter value="200+" label="Workshops Conducted" />
        <Counter value="25+" label="Years of Service" />
      </div>
    </section>
  );
}

export function Testimonials() {
  const items = [
    {
      q: "After years of chronic back pain, the holistic care I received gave me my mobility — and my life — back.",
      n: "Ananya Rao",
      r: "Patient, Bengaluru",
    },
    {
      q: "An organisation that's elevating chiropractic care in India to truly global standards.",
      n: "Dr. Vikram Sethi",
      r: "Sports Physician",
    },
    {
      q: "The awareness camps changed how our community thinks about posture and prevention.",
      n: "Meera Iyer",
      r: "School Educator",
    },
  ];
  return (
    <section className="relative px-6 py-28">
      <SectionHeader
        eyebrow="Voices"
        title={<>Stories of <em className="italic font-light">healing</em></>}
      />
      <div className="mx-auto mt-14 grid max-w-7xl gap-5 md:grid-cols-3">
        {items.map((t, i) => (
          <motion.figure
            key={t.n}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative rounded-3xl glass p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
          >
            <Quote className="h-6 w-6 text-primary/60" />
            <blockquote className="mt-4 font-serif text-lg leading-relaxed">"{t.q}"</blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full gradient-primary text-sm font-semibold text-primary-foreground">
                {t.n[0]}
              </span>
              <div>
                <p className="text-sm font-semibold">{t.n}</p>
                <p className="text-xs text-muted-foreground">{t.r}</p>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}

export function Programs() {
  const items = [
    { t: "Spine Awareness Drives", d: "Free public screenings across Indian cities and towns.", tag: "Outreach" },
    { t: "School Posture Initiative", d: "Educating young students on lifelong spinal habits.", tag: "Youth" },
    { t: "Workplace Wellness", d: "Corporate sessions on ergonomics & sedentary care.", tag: "Corporate" },
  ];
  return (
    <section className="relative px-6 py-28">
      <SectionHeader
        eyebrow="Awareness"
        title={<>Programs that <em className="italic font-light">empower</em></>}
        desc="Initiatives designed to bring chiropractic education to every doorstep."
      />
      <div className="mx-auto mt-14 grid max-w-7xl gap-5 md:grid-cols-3">
        {items.map((p, i) => (
          <motion.article
            key={p.t}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-elegant"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(closest-side,_oklch(0.78_0.14_150_/_0.25),_transparent)] transition-transform group-hover:scale-125" />
            <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-primary">{p.tag}</span>
            <h3 className="mt-5 font-serif text-2xl">{p.t}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{p.d}</p>
            <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
              Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function Events() {
  const items = [
    { d: "12", m: "Jun", t: "National Spine Day Summit", loc: "New Delhi" },
    { d: "27", m: "Jul", t: "Posture & Ergonomics Workshop", loc: "Mumbai" },
    { d: "04", m: "Aug", t: "Sports Chiropractic Conclave", loc: "Bengaluru" },
  ];
  return (
    <section className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] gradient-soft p-8 md:p-14">
        <div className="grid items-end gap-8 md:grid-cols-2">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Events & Workshops</span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Upcoming gatherings</h2>
          </div>
          <p className="text-muted-foreground md:text-right">
            Connect with practitioners, advocates and communities at our nationwide events.
          </p>
        </div>

        <div className="mt-10 divide-y divide-border rounded-3xl bg-card/60 backdrop-blur">
          {items.map((e) => (
            <div
              key={e.t}
              className="group flex flex-col items-start gap-4 p-5 transition-colors hover:bg-secondary/60 md:flex-row md:items-center md:gap-8"
            >
              <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl gradient-primary text-primary-foreground">
                <span className="text-xl font-semibold leading-none">{e.d}</span>
                <span className="text-[10px] uppercase tracking-widest opacity-80">{e.m}</span>
              </div>
              <div className="flex-1">
                <p className="font-serif text-xl">{e.t}</p>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" /> {e.loc}
                </p>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm transition-colors group-hover:gradient-cta group-hover:text-primary-foreground"
              >
                <Calendar className="h-4 w-4" /> Register
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Team() {
  const team = [
    { n: "Dr. Aarav Mehta", r: "Chief Chiropractor", c: "oklch(0.78 0.14 150)" },
    { n: "Dr. Neha Kapoor", r: "Spine Researcher", c: "oklch(0.82 0.1 180)" },
    { n: "Dr. Rohan Das", r: "Sports Specialist", c: "oklch(0.85 0.12 130)" },
    { n: "Dr. Ishita Verma", r: "Pediatric Care", c: "oklch(0.8 0.1 200)" },
  ];
  return (
    <section id="team" className="relative px-6 py-28">
      <SectionHeader
        eyebrow="Our Experts"
        title={<>Meet the <em className="italic font-light">practitioners</em></>}
        desc="A team of certified chiropractors leading India's spinal wellness movement."
      />
      <div className="mx-auto mt-14 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((d, i) => (
          <motion.div
            key={d.n}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group rounded-3xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-elegant"
          >
            <div
              className="relative aspect-[4/5] overflow-hidden rounded-2xl"
              style={{ background: `radial-gradient(120% 120% at 30% 20%, ${d.c}, oklch(0.96 0.02 150) 70%)` }}
            >
              <div className="absolute inset-x-0 bottom-0 grid place-items-center pb-6">
                <span className="font-serif text-7xl text-foreground/80">{d.n.split(" ")[1][0]}</span>
              </div>
            </div>
            <p className="mt-5 font-serif text-xl">{d.n}</p>
            <p className="text-sm text-muted-foreground">{d.r}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function FAQ() {
  const qs = [
    { q: "Is chiropractic care safe?", a: "Yes — when performed by qualified chiropractors, it is a safe, non-invasive, drug-free approach to musculoskeletal care." },
    { q: "How many sessions will I need?", a: "It depends on your condition. Many patients see meaningful relief within 4–6 sessions; chronic cases may take longer." },
    { q: "Do you treat children and seniors?", a: "Absolutely. Care is gently adapted for every age group, including pediatric and geriatric patients." },
    { q: "Is it covered by insurance?", a: "An increasing number of providers cover chiropractic care. We can help guide you through the process." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative px-6 py-28">
      <SectionHeader
        eyebrow="FAQ"
        title={<>Common <em className="italic font-light">questions</em></>}
      />
      <div className="mx-auto mt-12 max-w-3xl divide-y divide-border rounded-3xl glass">
        {qs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q} className="px-6">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="font-serif text-lg">{item.q}</span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                  {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
              <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="pb-5 text-sm text-muted-foreground">{item.a}</p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section id="donate" className="px-6 py-20">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] gradient-cta p-10 text-primary-foreground shadow-elegant md:p-16">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary-glow/30 blur-3xl" />
        <div className="absolute -left-32 -bottom-32 h-96 w-96 rounded-full bg-primary-glow/20 blur-3xl" />
        <div className="relative grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl">Support a healthier India.</h2>
            <p className="mt-4 max-w-md text-primary-foreground/80">
              Your contribution helps us deliver awareness camps, education, and accessible chiropractic care nationwide.
            </p>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <div className="flex w-full items-center gap-2 rounded-full bg-white/10 px-4 py-3 backdrop-blur">
              <Mail className="h-4 w-4 opacity-70" />
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent text-sm placeholder:text-primary-foreground/60 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-primary transition-transform hover:scale-[1.03]"
            >
              Donate <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-14">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-full gradient-primary text-primary-foreground">
              <Heart className="h-4 w-4" />
            </span>
            <span className="font-serif text-lg font-semibold">Chiropractic India</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            The national voice for chiropractic awareness, education, and advocacy — building a healthier India, one spine at a time.
          </p>
          <div className="mt-5 flex gap-2">
            {[Instagram, Twitter, Linkedin].map((I, i) => (
              <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full border border-border transition-colors hover:bg-secondary">
                <I className="h-4 w-4 text-foreground" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {["About", "Conditions", "Mission", "Experts", "FAQ"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-foreground">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">Newsletter</p>
          <p className="mt-4 text-sm text-muted-foreground">Monthly insights on spinal wellbeing.</p>
          <form className="mt-3 flex items-center gap-2 rounded-full border border-border p-1.5">
            <input
              type="email"
              placeholder="you@email.com"
              className="w-full bg-transparent px-3 text-sm placeholder:text-muted-foreground focus:outline-none"
            />
            <button className="rounded-full gradient-cta px-4 py-2 text-xs font-medium text-primary-foreground">Join</button>
          </form>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} Chiropractic India. All rights reserved.</p>
        <p>Crafted with care for spinal wellbeing.</p>
      </div>
    </footer>
  );
}
