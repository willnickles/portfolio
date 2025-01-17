import React from "react";
import ScrollProgress from "./components/ScrollProgress";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="scroll-smooth">
      <ScrollProgress />
      <Home />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
