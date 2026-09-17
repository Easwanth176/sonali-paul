import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LinkedInCta } from "@/components/LinkedInCta";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { StatsTicker } from "@/components/StatsTicker";
import { Tools } from "@/components/Tools";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      <Header />
      <Hero />
      <StatsTicker />
      <About />
      <Experience />
      <Skills />
      <Tools />
      <Projects />
      <Education />
      <LinkedInCta />
      <Contact />
      <Footer />
    </main>
  );
}
