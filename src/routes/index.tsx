import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/lib/reveal";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Technology } from "@/components/sections/Technology";
import { Timeline } from "@/components/sections/Timeline";
import { Services } from "@/components/sections/Services";
import { Achievements } from "@/components/sections/Achievements";
import { Testimonials } from "@/components/sections/Testimonials";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eslam Abdelaal Hassan — Landscape Engineer | Jeddah, KSA" },
      { name: "description", content: "Portfolio of Eslam Abdelaal Hassan — Landscape Engineer specializing in landscape design, irrigation systems, planting, construction, and project supervision in Saudi Arabia and Egypt." },
      { property: "og:title", content: "Eslam Abdelaal Hassan — Landscape Engineer" },
      { property: "og:description", content: "Transforming outdoor spaces into sustainable experiences. Landscape design, irrigation, planting, construction." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Technology />
      <Timeline />
      <Services />
      <Achievements />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
