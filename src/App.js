import React from "react";
import Home from "./Home/index";
import { SectionsContainer, Section } from "react-fullpage";
import Skills from "./Skills";
import Contact from "./Contact";
import Works from "./Works";

function App() {
  let options = {
    anchors: ["sectionOne", "sectionTwo", "sectionThree", "sectionFour"],
  };

  return (
    <SectionsContainer {...options}>
      <Section className="bg-[#292929]">
        <Home />
      </Section>
      <Section>
        <Skills />
      </Section>
      <Section>
        <Works />
      </Section>
      <Section>
        <Contact />
      </Section>
    </SectionsContainer>
  );
}

export default App;
