import React from "react";
import About from "../About/About";
import Discord from "../Discord/Discord";
import Contact from "../Contact/Contact";

//* Styles
import "./Main.css";

const Main = () => {
  return (
    <section id="main">
      <About />
      <Discord />
      <Contact />
    </section>
  );
};

export default Main;
