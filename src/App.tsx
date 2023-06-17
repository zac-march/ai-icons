import React from "react";

import "./App.css";
import Nav from "./sections/Nav/Nav";
import Hero from "./sections/Hero/Hero";

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
