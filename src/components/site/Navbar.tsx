import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Conditions", href: "#conditions" },
  { label: "Mission", href: "#mission" },
  { label: "Experts", href: "#team" },
  { label: "Information", href: "#information" },
  { label: "Blog", href: "#blog" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
          scrolled ? "glass-strong shadow-elegant" : "glass"
        }`}
      >
        <a href="#home" className="flex items-center gap-2.5">
          <img src={logo} alt="Chiropractic India logo" className="h-10 w-10 rounded-full object-cover shadow-glow ring-1 ring-border" />
          <span className="font-serif text-lg font-semibold tracking-tight">Chiropractic<span className="text-primary"> India</span></span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#donate"
            className="hidden rounded-full gradient-cta px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03] md:inline-flex"
          >
            Donate
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-2 max-w-7xl rounded-3xl glass-strong p-4 md:hidden"
        >
          <div className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#donate"
              className="mt-2 rounded-full gradient-cta px-5 py-3 text-center text-sm font-medium text-primary-foreground"
            >
              Donate
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
