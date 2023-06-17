import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Nav from "./sections/Nav/Nav";
import Hero from "./sections/Hero/Hero";
import Generate from "./sections/Generate/Generate";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/generate" element={<Generate />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
