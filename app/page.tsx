import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Tools from "@/components/Tools";
import Projects from "@/components/Projects";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Experience />
      <Tools />
      <Projects limit={3} />
      <Blogs limit={2} />
      <Contact />
    </main>
  );
}
