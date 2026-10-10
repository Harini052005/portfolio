import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhatIDo from "./components/WhatIDo";
import Publications from "./components/Publications";
import Hackathons from "./components/Hackathons";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// @ts-ignore
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhatIDo />
      <Publications />
      <Hackathons />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
