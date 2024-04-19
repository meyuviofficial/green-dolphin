import Hero from "@/components/hero";
import About from "@/components/about";

export default function Home() {
  return (
    <main>
      <div className="grid grid-flow-row">
        <Hero />
        <About />
      </div>
    </main>
  );
}
