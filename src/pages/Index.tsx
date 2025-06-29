
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-teal-100">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Index;
