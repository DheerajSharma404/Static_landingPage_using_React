import React from "react";

import { NavBar, Header, Main, Footer } from "./components/index";

//* Styles
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
