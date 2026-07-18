import Nav from "@/components/Nav";
import RecruiterHero from "@/components/RecruiterHero";
import Experience from "@/components/Experience";
import Tools from "@/components/Tools";
import Projects from "@/components/Projects";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import About from "@/components/About";

export default function Home() {
  return (
    <main>
      <Nav />
      <RecruiterHero />
      <Projects limit={2} />
      <Experience />
      <About />
      <Tools />
      <Blogs limit={2} />
      <Contact />
    </main>
  );
}
