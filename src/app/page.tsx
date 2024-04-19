import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main>
      <div className="grid grid-flow-row">
        <Hero />
        <About />
        <Skills />
      </div>
    </main>
  );
}
