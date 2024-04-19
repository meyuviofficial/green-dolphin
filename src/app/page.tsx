import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Certifications from "@/components/certifications";
export default function Home() {
  return (
    <main>
      <div className="grid grid-flow-row">
        <Hero />
        <About />
        <Skills />
        <Certifications />
      </div>
    </main>
  );
}
