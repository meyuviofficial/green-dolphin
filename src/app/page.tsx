import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Certifications from "@/components/certifications";
import { NavBar } from "@/components/navbar";
export default function Home() {
  return (
    <main>
      <div className="grid grid-flow-row">
        <NavBar />
        <Hero />
        <About />
        <Skills />
        <Certifications />
      </div>
    </main>
  );
}
