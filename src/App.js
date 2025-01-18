import React from "react";
import ScrollProgress from "./components/ScrollProgress";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Contact from "./sections/Contact";
import Skills from "./sections/Skills";


function App() {
  return (
    <div className="scroll-smooth">
      <ScrollProgress />
      <Home />
      <About />
      <Projects />
      <Experiences />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
