import React from "react";
import Hero from "./Hero/Hero";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Testimonials from "./Testimonials.tsx/Testimonials";

const Sections = () => {
  return (
    <main className="flex flex-col gap-[142px] w-full md:max-w-screen-lg pt-[236px] md:pt-60 mx-auto">
      <Hero />
      <Skills />
      <Projects />
      <Testimonials />
    </main>
  );
};

export default Sections;
