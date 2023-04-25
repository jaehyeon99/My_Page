import React from "react";
import Home from "./Home/index";
import { SectionsContainer, Section } from "react-fullpage";
import Contact from "./Contact";
import Works from "./Works";
import About from "./About";
import Good from "./Skills/good";
import Experience from "./Skills/experience";

function App() {
  let options = {
    anchors: ["Home", "About", "Good", "Experience", "Works", "Contact"],
  };

  return (
    <>
      <SectionsContainer {...options}>
        <Section className="bg-[#292929]">
          <Home />
        </Section>
        <Section className="bg-[#292929]">
          <About />
        </Section>
        <Section>
          <Good />
        </Section>
        <Section>
          <Experience />
        </Section>
        <Section>
          <Works />
        </Section>
        <Section>
          <Contact />
        </Section>
      </SectionsContainer>
    </>
  );
}

export default App;
