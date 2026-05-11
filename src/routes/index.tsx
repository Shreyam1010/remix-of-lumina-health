import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import {
  About,
  Conditions,
  Fundraising,
  Mission,
  Testimonials,
  Programs,
  CommunityEvents,
  Team,
  Information,
  Blog,
  FAQ,
  CTA,
  Footer,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chiropractic India — Building a Healthier India, One Spine at a Time" },
      {
        name: "description",
        content:
          "Chiropractic India is the national voice for chiropractic awareness, education, and advocacy — promoting drug-free, holistic spinal care.",
      },
      { property: "og:title", content: "Chiropractic India — Premium Chiropractic Care" },
      {
        property: "og:description",
        content:
          "Advancing spinal health and wellbeing across India through awareness, education, and expert chiropractic care.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,300;1,9..144,400&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative overflow-hidden bg-background">
      <Navbar />
      <Hero />
      <About />
      <Conditions />
      <Mission />
      <Testimonials />
      <Programs />
      <CommunityEvents />
      <Team />
      <Information />
      <Blog />
      <Fundraising />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
