import React from "react";

import {
  NavBar,
  Header,
  About,
  Discord,
  Contact,
  Footer,
} from "./components/index";

//* Styles
import "./App.css";

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <Header />
      <About />
      <Discord />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
